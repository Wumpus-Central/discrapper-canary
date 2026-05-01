n.d(t, { Ay: () => v, bh: () => O });
var i,
    a = n(989349),
    r = n.n(a),
    s = n(136722),
    l = n(17928),
    o = n(506774),
    d = n(228366),
    c = n(246605),
    _ = n(927813),
    E = n(498642),
    u = n(71393),
    A = n(576705),
    I = n(967198),
    T = n(287809),
    h = n(652215);
let S = { hiddenSurveys: {}, surveyOverride: null, lastFetched: null, lastSeen: null, lastActionTriggered: null },
    N = S,
    f = {},
    p = null,
    m = !1,
    O = _.A.Millis.DAY,
    C = 10 * _.A.Millis.HOUR;
var R =
    (((i = R || {}).IS_OWNER = "is_owner"),
    (i.IS_ADMIN = "is_admin"),
    (i.IS_COMMUNITY = "is_community"),
    (i.GUILD_SIZE = "guild_size"),
    (i.IS_HUB = "is_hub"),
    (i.IS_VIEWING = "is_viewing"),
    (i.GUILD_PERMISSIONS = "guild_permissions"),
    (i.GUILD_SIZE_ALL = "guild_size_all"),
    i);
let g = new Set(Object.values(R));
function L() {
    return null == N.lastFetched || Date.now() - N.lastFetched >= O;
}
function D() {
    !m && (L() || null != N.surveyOverride) && ((m = !0), (0, c.BC)(N.surveyOverride, !0));
}
function b(e) {
    return (function (e) {
        let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: i = [] } = e;
        if (0 === t.length) return !0;
        for (let e of t) if (!g.has(e)) return !1;
        let a = t.includes("guild_size_all"),
            r = !0;
        for (let l of u.A.getGuildsArray()) {
            if (a || t.includes("guild_size")) {
                let e = E.A.getMemberCount(l.id);
                if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                    r = !1;
                    continue;
                }
            }
            if (
                (t.includes("is_community") && !l.features.has(h.GuildFeatures.COMMUNITY)) ||
                (t.includes("is_hub") && !l.features.has(h.GuildFeatures.HUB))
            )
                continue;
            if (t.includes("guild_permissions")) {
                if (0 === i.length) continue;
                let e = !1;
                for (let t of i)
                    try {
                        let n = s.iu(t);
                        if (A.A.can(n, l)) {
                            e = !0;
                            break;
                        }
                    } catch (e) {}
                if (!e) continue;
            }
            let o = T.default.getCurrentUser(),
                d = o?.id === l.ownerId,
                c = A.A.can(h.xBc.ADMINISTRATOR, l);
            if ((t.includes("is_owner") && !d) || (t.includes("is_admin") && !c)) continue;
            null == (f = f ?? {})[e.key] && (f[e.key] = e);
            let _ = I.A.getGuildId(),
                u = null != _ && _ === l.id;
            if ((!t.includes("is_viewing") || u) && !a) return !0;
        }
        return !!a && !!r;
    })(e);
}
function M(e) {
    let t,
        { survey: n, isActionTriggered: i } = e;
    (m = !1),
        (N.lastFetched = Date.now()),
        i && (N.lastActionTriggered = Date.now()),
        null == N.hiddenSurveys && (N.hiddenSurveys = {});
    let a = null != n,
        s = a && null == N.hiddenSurveys[n.key],
        l = a && b(n);
    null == (t = o.w.get(h.gT8)) || r()().diff(t, "day"), (p = s && l && 1 ? n : null);
}
function P() {
    let e;
    if (null != p && (b(p) || ((p = null), 0))) return !1;
    null != (e = Object.values((f = f ?? {}))[0]) && b(e)
        ? M({ type: "SURVEY_FETCHED", survey: e })
        : null == p || (p = null);
}
class U extends l.Ay.PersistedStore {
    static displayName = "SurveyStore";
    static persistKey = "SurveyStore";
    static migrations = [
        (e) => {
            let t = { ...e };
            return (
                delete t.validSurveys,
                delete t.currentSurvey,
                delete t.iosIsPushNotificationClicked,
                delete t.iosIsInviteShown,
                delete t.iosFirstRunDate,
                t
            );
        },
        (e) => ({ ...e, lastSeen: e.lastSeen ?? null }),
        (e) => ({ ...e, hiddenSurveys: e.hiddenSurveys ?? {} }),
    ];
    initialize(e) {
        this.waitFor(E.A, u.A, A.A, I.A, T.default), (N = e ?? S), this.syncWith([I.A], P);
    }
    getState() {
        return N;
    }
    getCurrentSurvey() {
        return L() ? null : p;
    }
    getSurveyOverride() {
        return N.surveyOverride;
    }
    getLastSeenTimestamp() {
        return N.lastSeen;
    }
    shouldAllowSurveyAction() {
        return Date.now() - (N.lastActionTriggered ?? 0) >= C;
    }
}
let v = new U(d.h, {
    CONNECTION_OPEN: D,
    CONNECTION_RESUMED: D,
    SURVEY_FETCHED: M,
    SURVEY_HIDE: function (e) {
        let { key: t } = e;
        (N.hiddenSurveys[t] = !0), (p = null), (f = f ?? {}), delete f[t];
    },
    SURVEY_OVERRIDE: function (e) {
        let { id: t } = e;
        (N.surveyOverride = t), null != t && delete N.hiddenSurveys[t], (0, c.BC)(N.surveyOverride, !0);
    },
    PUSH_NOTIFICATION_CLICK: function () {},
    DISPLAYED_INVITE_SHOW: function () {},
    LOGOUT: function () {
        N.hiddenSurveys = {};
    },
    SURVEY_SEEN: function () {
        N.lastSeen = Date.now();
    },
});

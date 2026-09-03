n.d(t, { Ay: () => U, bh: () => C });
var i,
    r = n(536637),
    a = n.n(r),
    s = n(136722),
    l = n(17928),
    o = n(506774),
    d = n(228366),
    c = n(246605),
    u = n(927813),
    _ = n(498642),
    E = n(71393),
    A = n(576705),
    h = n(967198),
    I = n(287809),
    f = n(652215);
let p = { hiddenSurveys: {}, surveyOverride: null, lastFetched: null, lastSeen: null, lastActionTriggered: null },
    T = p,
    m = {},
    g = null,
    S = !1,
    N = null,
    C = u.A.Millis.DAY,
    O = 10 * u.A.Millis.HOUR;
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
let L = new Set(Object.values(R));
function y() {
    return null == T.lastFetched || Date.now() - T.lastFetched >= C;
}
function D() {
    !S && (y() || null != T.surveyOverride) && ((S = !0), (0, c.BC)(T.surveyOverride, !0));
}
function v(e) {
    return (function (e) {
        let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: i = [] } = e;
        if (0 === t.length) return !0;
        for (let e of t) if (!L.has(e)) return !1;
        let r = t.includes("guild_size_all"),
            a = !0;
        for (let l of E.A.getGuildsArray()) {
            if (r || t.includes("guild_size")) {
                let e = _.A.getMemberCount(l.id);
                if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                    a = !1;
                    continue;
                }
            }
            if (
                (t.includes("is_community") && !l.features.has(f.GuildFeatures.COMMUNITY)) ||
                (t.includes("is_hub") && !l.features.has(f.GuildFeatures.HUB))
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
            let o = I.default.getCurrentUser(),
                d = o?.id === l.ownerId,
                c = A.A.can(f.xBc.ADMINISTRATOR, l);
            if ((t.includes("is_owner") && !d) || (t.includes("is_admin") && !c)) continue;
            null == (m = m ?? {})[e.key] && (m[e.key] = e);
            let u = h.A.getGuildId(),
                E = null != u && u === l.id;
            if ((!t.includes("is_viewing") || E) && !r) return !0;
        }
        return !!r && !!a;
    })(e);
}
function b(e) {
    let t,
        { survey: n, isActionTriggered: i } = e;
    (S = !1),
        (T.lastFetched = Date.now()),
        i && (T.lastActionTriggered = Date.now()),
        null == T.hiddenSurveys && (T.hiddenSurveys = {});
    let r = null != n,
        s = r && null == T.hiddenSurveys[n.key],
        l = r && v(n);
    null == (t = o.w.get(f.gT8)) || a()().diff(t, "day"), (g = s && l && 1 ? n : null);
}
function M() {
    let e;
    if (null != g && (v(g) || ((g = null), 0))) return !1;
    null != (e = Object.values((m = m ?? {}))[0]) && v(e)
        ? b({ type: "SURVEY_FETCHED", survey: e })
        : null == g || (g = null);
}
class P extends l.Ay.PersistedStore {
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
        this.waitFor(_.A, E.A, A.A, h.A, I.default), (T = e ?? p), this.syncWith([h.A], M);
    }
    getState() {
        return T;
    }
    getCurrentSurvey() {
        return y() ? null : g;
    }
    getSurveyOverride() {
        return T.surveyOverride;
    }
    getActionTriggeredSurveyOverride() {
        return N;
    }
    getLastSeenTimestamp() {
        return T.lastSeen;
    }
    shouldAllowSurveyAction() {
        return Date.now() - (T.lastActionTriggered ?? 0) >= O;
    }
}
let U = new P(d.h, {
    CONNECTION_OPEN: D,
    CONNECTION_RESUMED: D,
    SURVEY_FETCHED: b,
    SURVEY_HIDE: function (e) {
        let { key: t } = e;
        (T.hiddenSurveys[t] = !0), (g = null), (m = m ?? {}), delete m[t];
    },
    SURVEY_OVERRIDE: function (e) {
        let { id: t, isActionTriggered: n } = e;
        if (n) {
            (N = t), null != t && delete T.hiddenSurveys[t];
            return;
        }
        (N = null), (T.surveyOverride = t), null != t && delete T.hiddenSurveys[t], (0, c.BC)(T.surveyOverride, !0);
    },
    PUSH_NOTIFICATION_CLICK: function () {},
    DISPLAYED_INVITE_SHOW: function () {},
    LOGOUT: function () {
        T.hiddenSurveys = {};
    },
    SURVEY_SEEN: function () {
        T.lastSeen = Date.now();
    },
});

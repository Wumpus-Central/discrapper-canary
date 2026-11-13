var i,
    r = n(536637),
    a = n.n(r),
    s = n(136722),
    l = n(855986),
    o = n(506774),
    d = n(73153),
    c = n(374042),
    u = n(927813),
    _ = n(498642),
    E = n(71393),
    A = n(576705),
    f = n(967198),
    h = n(287809),
    I = n(652215);
let p = { hiddenSurveys: {}, surveyOverride: null, lastFetched: null, lastSeen: null, lastActionTriggered: null },
    m = p,
    T = {},
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
    return null == m.lastFetched || Date.now() - m.lastFetched >= C;
}
function D() {
    !S && (y() || null != m.surveyOverride) && ((S = !0), (0, c.B)(m.surveyOverride, !0));
}
function b(e) {
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
                (t.includes("is_community") && !l.features.has(I.GuildFeatures.COMMUNITY)) ||
                (t.includes("is_hub") && !l.features.has(I.GuildFeatures.HUB))
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
            let o = h.default.getCurrentUser(),
                d = o?.id === l.ownerId,
                c = A.A.can(I.xBc.ADMINISTRATOR, l);
            if ((t.includes("is_owner") && !d) || (t.includes("is_admin") && !c)) continue;
            null == (T = T ?? {})[e.key] && (T[e.key] = e);
            let u = f.A.getGuildId(),
                E = null != u && u === l.id;
            if ((!t.includes("is_viewing") || E) && !r) return !0;
        }
        return !!r && !!a;
    })(e);
}
function v(e) {
    let t,
        { survey: n, isActionTriggered: i } = e;
    ((S = !1),
        (m.lastFetched = Date.now()),
        i && (m.lastActionTriggered = Date.now()),
        null == m.hiddenSurveys && (m.hiddenSurveys = {}));
    let r = null != n,
        s = r && null == m.hiddenSurveys[n.key],
        l = r && b(n);
    (null == (t = o.w.get(I.gT8)) || a()().diff(t, "day"), (g = s && l && 1 ? n : null));
}
function P() {
    let e;
    if (null != g && (b(g) || ((g = null), 0))) return !1;
    null != (e = Object.values((T = T ?? {}))[0]) && b(e)
        ? v({ type: "SURVEY_FETCHED", survey: e })
        : null == g || (g = null);
}
class M extends l.Ay.PersistedStore {
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
        (this.waitFor(_.A, E.A, A.A, f.A, h.default), (m = e ?? p), this.syncWith([f.A], P));
    }
    getState() {
        return m;
    }
    getCurrentSurvey() {
        return y() ? null : g;
    }
    getSurveyOverride() {
        return m.surveyOverride;
    }
    getActionTriggeredSurveyOverride() {
        return N;
    }
    getLastSeenTimestamp() {
        return m.lastSeen;
    }
    shouldAllowSurveyAction() {
        return Date.now() - (m.lastActionTriggered ?? 0) >= O;
    }
}
let U = new M(d.h, {
    CONNECTION_OPEN: D,
    CONNECTION_RESUMED: D,
    SURVEY_FETCHED: v,
    SURVEY_HIDE: function (e) {
        let { key: t } = e;
        ((m.hiddenSurveys[t] = !0), (g = null), (T = T ?? {}), delete T[t]);
    },
    SURVEY_OVERRIDE: function (e) {
        let { id: t, isActionTriggered: n } = e;
        if (n) {
            ((N = t), null != t && delete m.hiddenSurveys[t]);
            return;
        }
        ((N = null), (m.surveyOverride = t), null != t && delete m.hiddenSurveys[t], (0, c.B)(m.surveyOverride, !0));
    },
    PUSH_NOTIFICATION_CLICK: function () {},
    DISPLAYED_INVITE_SHOW: function () {},
    LOGOUT: function () {
        m.hiddenSurveys = {};
    },
    SURVEY_SEEN: function () {
        m.lastSeen = Date.now();
    },
});
n.d(t, {}, { Ay: U, bh: C });

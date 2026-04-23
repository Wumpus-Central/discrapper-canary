n.d(t, { Ay: () => y, bh: () => p });
var i,
    r = n(989349),
    a = n.n(r),
    s = n(136722),
    _ = n(17928),
    l = n(506774),
    o = n(228366),
    E = n(246605),
    d = n(927813),
    c = n(498642),
    u = n(71393),
    I = n(576705),
    A = n(967198),
    T = n(287809),
    S = n(652215);
let N = { hiddenSurveys: {}, surveyOverride: null, lastFetched: null, lastSeen: null, lastActionTriggered: null },
    O = N,
    R = {},
    f = null,
    C = !1,
    p = d.A.Millis.DAY,
    m = 10 * d.A.Millis.HOUR;
var L =
    (((i = L || {}).IS_OWNER = "is_owner"),
    (i.IS_ADMIN = "is_admin"),
    (i.IS_COMMUNITY = "is_community"),
    (i.GUILD_SIZE = "guild_size"),
    (i.IS_HUB = "is_hub"),
    (i.IS_VIEWING = "is_viewing"),
    (i.GUILD_PERMISSIONS = "guild_permissions"),
    (i.GUILD_SIZE_ALL = "guild_size_all"),
    i);
let D = new Set(Object.values(L));
function h() {
    return null == O.lastFetched || Date.now() - O.lastFetched >= p;
}
function g() {
    !C && (h() || null != O.surveyOverride) && ((C = !0), (0, E.BC)(O.surveyOverride, !0));
}
function b(e) {
    return (function (e) {
        let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: i = [] } = e;
        if (0 === t.length) return !0;
        for (let e of t) if (!D.has(e)) return !1;
        let r = t.includes("guild_size_all"),
            a = !0;
        for (let _ of u.A.getGuildsArray()) {
            if (r || t.includes("guild_size")) {
                let e = c.A.getMemberCount(_.id);
                if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                    a = !1;
                    continue;
                }
            }
            if (
                (t.includes("is_community") && !_.features.has(S.GuildFeatures.COMMUNITY)) ||
                (t.includes("is_hub") && !_.features.has(S.GuildFeatures.HUB))
            )
                continue;
            if (t.includes("guild_permissions")) {
                if (0 === i.length) continue;
                let e = !1;
                for (let t of i)
                    try {
                        let n = s.iu(t);
                        if (I.A.can(n, _)) {
                            e = !0;
                            break;
                        }
                    } catch (e) {}
                if (!e) continue;
            }
            let l = T.default.getCurrentUser(),
                o = l?.id === _.ownerId,
                E = I.A.can(S.xBc.ADMINISTRATOR, _);
            if ((t.includes("is_owner") && !o) || (t.includes("is_admin") && !E)) continue;
            null == (R = R ?? {})[e.key] && (R[e.key] = e);
            let d = A.A.getGuildId(),
                u = null != d && d === _.id;
            if ((!t.includes("is_viewing") || u) && !r) return !0;
        }
        return !!r && !!a;
    })(e);
}
function U(e) {
    let t,
        { survey: n, isActionTriggered: i } = e;
    (C = !1),
        (O.lastFetched = Date.now()),
        i && (O.lastActionTriggered = Date.now()),
        null == O.hiddenSurveys && (O.hiddenSurveys = {});
    let r = null != n,
        s = r && null == O.hiddenSurveys[n.key],
        _ = r && b(n);
    null == (t = l.w.get(S.gT8)) || a()().diff(t, "day"), (f = s && _ && 1 ? n : null);
}
function P() {
    let e;
    if (null != f && (b(f) || ((f = null), 0))) return !1;
    null != (e = Object.values((R = R ?? {}))[0]) && b(e)
        ? U({ type: "SURVEY_FETCHED", survey: e })
        : null == f || (f = null);
}
class M extends _.Ay.PersistedStore {
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
        this.waitFor(c.A, u.A, I.A, A.A, T.default), (O = e ?? N), this.syncWith([A.A], P);
    }
    getState() {
        return O;
    }
    getCurrentSurvey() {
        return h() ? null : f;
    }
    getSurveyOverride() {
        return O.surveyOverride;
    }
    getLastSeenTimestamp() {
        return O.lastSeen;
    }
    shouldAllowSurveyAction() {
        return Date.now() - (O.lastActionTriggered ?? 0) >= m;
    }
}
let y = new M(o.h, {
    CONNECTION_OPEN: g,
    CONNECTION_RESUMED: g,
    SURVEY_FETCHED: U,
    SURVEY_HIDE: function (e) {
        let { key: t } = e;
        (O.hiddenSurveys[t] = !0), (f = null), (R = R ?? {}), delete R[t];
    },
    SURVEY_OVERRIDE: function (e) {
        let { id: t } = e;
        (O.surveyOverride = t), null != t && delete O.hiddenSurveys[t], (0, E.BC)(O.surveyOverride, !0);
    },
    PUSH_NOTIFICATION_CLICK: function () {},
    DISPLAYED_INVITE_SHOW: function () {},
    LOGOUT: function () {
        O.hiddenSurveys = {};
    },
    SURVEY_SEEN: function () {
        O.lastSeen = Date.now();
    },
});

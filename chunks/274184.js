"use strict";
n.d(t, { Ay: () => M, bh: () => y });
var r,
    i = n(989349),
    s = n.n(i),
    a = n(136722),
    o = n(311907),
    l = n(506774),
    u = n(73153),
    c = n(246605),
    d = n(927813),
    _ = n(498642),
    f = n(71393),
    p = n(576705),
    h = n(967198),
    E = n(287809),
    m = n(652215);
let g = { hiddenSurveys: {}, surveyOverride: null, lastFetched: null, lastSeen: null, lastActionTriggered: null },
    A = g,
    I = {},
    T = null,
    S = !1,
    y = d.A.Millis.DAY,
    N = 10 * d.A.Millis.HOUR;
var v =
    (((r = v || {}).IS_OWNER = "is_owner"),
    (r.IS_ADMIN = "is_admin"),
    (r.IS_COMMUNITY = "is_community"),
    (r.GUILD_SIZE = "guild_size"),
    (r.IS_HUB = "is_hub"),
    (r.IS_VIEWING = "is_viewing"),
    (r.GUILD_PERMISSIONS = "guild_permissions"),
    (r.GUILD_SIZE_ALL = "guild_size_all"),
    r);
let C = new Set(Object.values(v));
function O() {
    return null == A.lastFetched || Date.now() - A.lastFetched >= y;
}
function R() {
    !S && (O() || null != A.surveyOverride) && ((S = !0), (0, c.BC)(A.surveyOverride, !0));
}
function b(e) {
    return (function (e) {
        let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: r = [] } = e;
        if (0 === t.length) return !0;
        for (let e of t) if (!C.has(e)) return !1;
        let i = t.includes("guild_size_all"),
            s = !0;
        for (let o of f.A.getGuildsArray()) {
            if (i || t.includes("guild_size")) {
                let e = _.A.getMemberCount(o.id);
                if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                    s = !1;
                    continue;
                }
            }
            if (
                (t.includes("is_community") && !o.features.has(m.GuildFeatures.COMMUNITY)) ||
                (t.includes("is_hub") && !o.features.has(m.GuildFeatures.HUB))
            )
                continue;
            if (t.includes("guild_permissions")) {
                if (0 === r.length) continue;
                let e = !1;
                for (let t of r)
                    try {
                        let n = a.iu(t);
                        if (p.A.can(n, o)) {
                            e = !0;
                            break;
                        }
                    } catch (e) {}
                if (!e) continue;
            }
            let l = E.default.getCurrentUser(),
                u = l?.id === o.ownerId,
                c = p.A.can(m.xBc.ADMINISTRATOR, o);
            if ((t.includes("is_owner") && !u) || (t.includes("is_admin") && !c)) continue;
            null == (I = I ?? {})[e.key] && (I[e.key] = e);
            let d = h.A.getGuildId(),
                f = null != d && d === o.id;
            if ((!t.includes("is_viewing") || f) && !i) return !0;
        }
        return !!i && !!s;
    })(e);
}
function D(e) {
    let t,
        { survey: n, isActionTriggered: r } = e;
    (S = !1),
        (A.lastFetched = Date.now()),
        r && (A.lastActionTriggered = Date.now()),
        null == A.hiddenSurveys && (A.hiddenSurveys = {});
    let i = null != n,
        a = i && null == A.hiddenSurveys[n.key],
        o = i && b(n);
    null == (t = l.w.get(m.gT8)) || s()().diff(t, "day"), (T = a && o && 1 ? n : null);
}
function L() {
    let e;
    if (null != T && (b(T) || ((T = null), 0))) return !1;
    null != (e = Object.values((I = I ?? {}))[0]) && b(e)
        ? D({ type: "SURVEY_FETCHED", survey: e })
        : null == T || (T = null);
}
class w extends o.Ay.PersistedStore {
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
        this.waitFor(_.A, f.A, p.A, h.A, E.default), (A = e ?? g), this.syncWith([h.A], L);
    }
    getState() {
        return A;
    }
    getCurrentSurvey() {
        return O() ? null : T;
    }
    getSurveyOverride() {
        return A.surveyOverride;
    }
    getLastSeenTimestamp() {
        return A.lastSeen;
    }
    shouldAllowSurveyAction() {
        return Date.now() - (A.lastActionTriggered ?? 0) >= N;
    }
}
let M = new w(u.h, {
    CONNECTION_OPEN: R,
    CONNECTION_RESUMED: R,
    SURVEY_FETCHED: D,
    SURVEY_HIDE: function (e) {
        let { key: t } = e;
        (A.hiddenSurveys[t] = !0), (T = null), (I = I ?? {}), delete I[t];
    },
    SURVEY_OVERRIDE: function (e) {
        let { id: t } = e;
        (A.surveyOverride = t), null != t && delete A.hiddenSurveys[t], (0, c.BC)(A.surveyOverride, !0);
    },
    PUSH_NOTIFICATION_CLICK: function () {},
    DISPLAYED_INVITE_SHOW: function () {},
    LOGOUT: function () {
        A.hiddenSurveys = {};
    },
    SURVEY_SEEN: function () {
        A.lastSeen = Date.now();
    },
});

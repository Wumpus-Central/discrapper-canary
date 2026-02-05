"use strict";
n.d(t, { Ay: () => K, bh: () => v });
var r = n(989349),
    i = n.n(r),
    a = n(136722),
    s = n(311907),
    o = n(506774),
    l = n(73153),
    u = n(246605),
    c = n(927813),
    d = n(498642),
    _ = n(71393),
    f = n(576705),
    p = n(967198),
    h = n(287809),
    m = n(652215);
let g = { hiddenSurveys: {}, surveyOverride: null, lastFetched: null, lastSeen: null, lastActionTriggered: null },
    E = g,
    A = !1,
    I = !1,
    T = {},
    y = null,
    S = !1,
    v = c.A.Millis.DAY,
    C = 10 * c.A.Millis.HOUR,
    b = 7;
var N = (function (e) {
    return (
        (e.IS_OWNER = "is_owner"),
        (e.IS_ADMIN = "is_admin"),
        (e.IS_COMMUNITY = "is_community"),
        (e.GUILD_SIZE = "guild_size"),
        (e.IS_HUB = "is_hub"),
        (e.IS_VIEWING = "is_viewing"),
        (e.GUILD_PERMISSIONS = "guild_permissions"),
        (e.GUILD_SIZE_ALL = "guild_size_all"),
        e
    );
})(N || {});
let R = new Set(Object.values(N));
function O() {
    return null == E.lastFetched || Date.now() - E.lastFetched >= v;
}
function D() {
    !S && (O() || null != E.surveyOverride) && ((S = !0), (0, u.BC)(E.surveyOverride, !0));
}
function L(e) {
    return x(e) && w(e);
}
function w(e) {
    let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: r = [] } = e;
    if (0 === t.length) return !0;
    for (let e of t) if (!R.has(e)) return !1;
    let i = t.includes("guild_size_all"),
        s = !0;
    for (let o of _.A.getGuildsArray()) {
        if (i || t.includes("guild_size")) {
            let e = d.A.getMemberCount(o.id);
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
                    if (f.A.can(n, o)) {
                        e = !0;
                        break;
                    }
                } catch (e) {}
            if (!e) continue;
        }
        let l = h.default.getCurrentUser(),
            u = l?.id === o.ownerId,
            c = f.A.can(m.xBc.ADMINISTRATOR, o);
        if ((t.includes("is_owner") && !u) || (t.includes("is_admin") && !c)) continue;
        null == (T = T ?? {})[e.key] && (T[e.key] = e);
        let _ = p.A.getGuildId(),
            g = null != _ && _ === o.id;
        if ((!t.includes("is_viewing") || g) && !i) return !0;
    }
    return !!i && !!s;
}
function x(e) {
    return !0;
}
function P(e) {
    let t = o.w.get(m.gT8);
    return null == t || i()().diff(t, "day") < e;
}
function M(e) {
    let { survey: t, isActionTriggered: n } = e;
    (S = !1),
        (E.lastFetched = Date.now()),
        n && (E.lastActionTriggered = Date.now()),
        null == E.hiddenSurveys && (E.hiddenSurveys = {});
    let r = null != t,
        i = r && null == E.hiddenSurveys[t.key],
        a = r && L(t);
    P(b);
    let s = !1;
    y = i && a && !s ? t : null;
}
function k(e) {
    let { id: t } = e;
    (E.surveyOverride = t), null != t && delete E.hiddenSurveys[t], (0, u.BC)(E.surveyOverride, !0);
}
function U() {
    A = !0;
}
function G() {
    I = !0;
}
function V(e) {
    let { key: t } = e;
    (E.hiddenSurveys[t] = !0), (y = null), (T = T ?? {}), delete T[t];
}
function F() {
    E.hiddenSurveys = {};
}
function B(e) {
    return !!L(e) || ((y = null), !1);
}
function j() {
    let e = Object.values((T = T ?? {}))[0];
    return null != e && L(e) ? void M({ type: "SURVEY_FETCHED", survey: e }) : null != y && void (y = null);
}
function H() {
    if (null != y && B(y)) return !1;
    j();
}
function Y() {
    E.lastSeen = Date.now();
}
class W extends s.Ay.PersistedStore {
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
        this.waitFor(d.A, _.A, f.A, p.A, h.default), (E = e ?? g), this.syncWith([p.A], H);
    }
    getState() {
        return E;
    }
    getCurrentSurvey() {
        return O() ? null : y;
    }
    getSurveyOverride() {
        return E.surveyOverride;
    }
    getLastSeenTimestamp() {
        return E.lastSeen;
    }
    shouldAllowSurveyAction() {
        return Date.now() - (E.lastActionTriggered ?? 0) >= C;
    }
}
let K = new W(l.h, {
    CONNECTION_OPEN: D,
    CONNECTION_RESUMED: D,
    SURVEY_FETCHED: M,
    SURVEY_HIDE: V,
    SURVEY_OVERRIDE: k,
    PUSH_NOTIFICATION_CLICK: U,
    DISPLAYED_INVITE_SHOW: G,
    LOGOUT: F,
    SURVEY_SEEN: Y,
});

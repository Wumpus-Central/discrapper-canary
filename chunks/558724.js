n.d(t, {
    J: () => N,
    Z: () => q,
}),
    n(388685);
var r,
    i = n(913527),
    a = n.n(i),
    o = n(149765),
    s = n(442837),
    l = n(433517),
    c = n(570140),
    u = n(491428),
    d = n(650774),
    f = n(430824),
    _ = n(496675),
    p = n(914010),
    h = n(594174),
    m = n(981631);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = {
        hiddenSurveys: {},
        surveyOverride: null,
        lastFetched: null,
        lastSeen: null,
    },
    v = O,
    I = !1,
    T = !1,
    S = {},
    A = null,
    C = !1,
    N = 86400000,
    R = 7;
var P = (function (e) {
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
})(P || {});
let D = new Set(Object.values(P));
function w() {
    return null == v.lastFetched || Date.now() - v.lastFetched >= N;
}
function x() {
    !C && (w() || null != v.surveyOverride) && ((C = !0), (0, u.wk)(v.surveyOverride, !0));
}
function L(e) {
    return j(e) && M(e);
}
function M(e) {
    let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: r = [] } = e;
    if (0 === t.length) return !0;
    for (let e of t) if (!D.has(e)) return !1;
    let i = t.includes("guild_size_all"),
        a = !0;
    for (let s of f.Z.getGuildsArray()) {
        if (i || t.includes("guild_size")) {
            let e = d.Z.getMemberCount(s.id);
            if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                a = !1;
                continue;
            }
        }
        if (
            (t.includes("is_community") && !s.features.has(m.GuildFeatures.COMMUNITY)) ||
            (t.includes("is_hub") && !s.features.has(m.GuildFeatures.HUB))
        )
            continue;
        if (t.includes("guild_permissions")) {
            if (0 === r.length) continue;
            let e = !1;
            for (let t of r)
                try {
                    let n = o.vB(t);
                    if (_.Z.can(n, s)) {
                        e = !0;
                        break;
                    }
                } catch (e) {}
            if (!e) continue;
        }
        let l = h.default.getCurrentUser(),
            c = (null == l ? void 0 : l.id) === s.ownerId,
            u = _.Z.can(m.Plq.ADMINISTRATOR, s);
        if ((t.includes("is_owner") && !c) || (t.includes("is_admin") && !u)) continue;
        null == (S = null != S ? S : {})[e.key] && (S[e.key] = e);
        let f = p.Z.getGuildId(),
            g = null != f && f === s.id;
        if ((!t.includes("is_viewing") || g) && !i) return !0;
    }
    return !!i && !!a;
}
function j(e) {
    return !0;
}
function k(e) {
    let t = l.K.get(m.z7k);
    return null == t || a()().diff(t, "day") < e;
}
function U(e) {
    let { survey: t } = e;
    (C = !1), (v.lastFetched = Date.now()), null == v.hiddenSurveys && (v.hiddenSurveys = {});
    let n = null != t,
        r = n && null == v.hiddenSurveys[t.key],
        i = n && L(t);
    k(R);
    let a = !1;
    A = r && i && !a ? t : null;
}
function G(e) {
    let { id: t } = e;
    (v.surveyOverride = t), null != t && delete v.hiddenSurveys[t], (0, u.wk)(v.surveyOverride, !0);
}
function B() {
    I = !0;
}
function Z() {
    T = !0;
}
function F(e) {
    let { key: t } = e;
    (v.hiddenSurveys[t] = !0), (A = null), (S = null != S ? S : {}), delete S[t];
}
function V() {
    v.hiddenSurveys = {};
}
function H(e) {
    return !!L(e) || ((A = null), !1);
}
function Y() {
    let e = Object.values((S = null != S ? S : {}))[0];
    return null != e && L(e)
        ? void U({
              type: "SURVEY_FETCHED",
              survey: e,
          })
        : null != A && void (A = null);
}
function W() {
    if (null != A && H(A)) return !1;
    Y();
}
function K() {
    v.lastSeen = Date.now();
}
class z extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(d.Z, f.Z, _.Z, p.Z, h.default), (v = null != e ? e : O), this.syncWith([p.Z], W);
    }
    getState() {
        return v;
    }
    getCurrentSurvey() {
        return w() ? null : A;
    }
    getSurveyOverride() {
        return v.surveyOverride;
    }
    getLastSeenTimestamp() {
        return v.lastSeen;
    }
}
g(z, "displayName", "SurveyStore"),
    g(z, "persistKey", "SurveyStore"),
    g(z, "migrations", [
        (e) => {
            let t = E({}, e);
            return (
                delete t.validSurveys,
                delete t.currentSurvey,
                delete t.iosIsPushNotificationClicked,
                delete t.iosIsInviteShown,
                delete t.iosFirstRunDate,
                t
            );
        },
        (e) => {
            var t;
            return y(E({}, e), { lastSeen: null != (t = e.lastSeen) ? t : null });
        },
        (e) => {
            var t;
            return y(E({}, e), { hiddenSurveys: null != (t = e.hiddenSurveys) ? t : {} });
        },
    ]);
let q = new z(c.Z, {
    CONNECTION_OPEN: x,
    CONNECTION_RESUMED: x,
    SURVEY_FETCHED: U,
    SURVEY_HIDE: F,
    SURVEY_OVERRIDE: G,
    PUSH_NOTIFICATION_CLICK: B,
    DISPLAYED_INVITE_SHOW: Z,
    LOGOUT: V,
    SURVEY_SEEN: K,
});

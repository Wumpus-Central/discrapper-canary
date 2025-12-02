n.d(t, {
    J: () => P,
    Z: () => Q,
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
    d = n(947245),
    f = n(650774),
    p = n(430824),
    _ = n(496675),
    m = n(914010),
    h = n(594174),
    g = n(981631);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = {
        hiddenSurveys: {},
        surveyOverride: null,
        lastFetched: null,
        lastSeen: null,
    },
    S = v,
    I = !1,
    T = !1,
    A = {},
    C = null,
    N = !1,
    P = 86400000,
    R = 7;
var w = (function (e) {
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
})(w || {});
let D = new Set(Object.values(w));
function x() {
    return null == S.lastFetched || Date.now() - S.lastFetched >= P;
}
function L() {
    !N && (x() || null != S.surveyOverride) && ((N = !0), (0, u.wk)(S.surveyOverride, !0));
}
function j(e) {
    return k(e) && M(e);
}
function M(e) {
    let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: r = [] } = e;
    if (0 === t.length) return !0;
    for (let e of t) if (!D.has(e)) return !1;
    let i = t.includes("guild_size_all"),
        a = !0;
    for (let s of p.Z.getGuildsArray()) {
        if (i || t.includes("guild_size")) {
            let e = f.Z.getMemberCount(s.id);
            if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                a = !1;
                continue;
            }
        }
        if (
            (t.includes("is_community") && !s.features.has(g.GuildFeatures.COMMUNITY)) ||
            (t.includes("is_hub") && !s.features.has(g.GuildFeatures.HUB))
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
            u = _.Z.can(g.Plq.ADMINISTRATOR, s);
        if ((t.includes("is_owner") && !c) || (t.includes("is_admin") && !u)) continue;
        null == (A = null != A ? A : {})[e.key] && (A[e.key] = e);
        let d = m.Z.getGuildId(),
            p = null != d && d === s.id;
        if ((!t.includes("is_viewing") || p) && !i) return !0;
    }
    return !!i && !!a;
}
function k(e) {
    return !0;
}
function U(e) {
    let t = l.K.get(g.z7k);
    return null == t || a()().diff(t, "day") < e;
}
function G(e) {
    let { survey: t } = e;
    (N = !1), (S.lastFetched = Date.now()), null == S.hiddenSurveys && (S.hiddenSurveys = {});
    let n = null != t,
        r = n && null == S.hiddenSurveys[t.key],
        i = n && j(t);
    U(R);
    let a = !1;
    C = r && i && !a ? t : null;
}
function Z(e) {
    let { id: t } = e;
    (S.surveyOverride = t), null != t && delete S.hiddenSurveys[t], (0, u.wk)(S.surveyOverride, !0);
}
function B() {
    I = !0;
}
function F() {
    T = !0;
}
function V(e) {
    let { key: t } = e;
    (S.hiddenSurveys[t] = !0), (C = null), (A = null != A ? A : {}), delete A[t];
}
function H() {
    S.hiddenSurveys = {};
}
function Y(e) {
    return !!j(e) || ((C = null), !1);
}
function W() {
    let e = Object.values((A = null != A ? A : {}))[0];
    return null != e && j(e)
        ? void G({
              type: "SURVEY_FETCHED",
              survey: e,
          })
        : null != C && void (C = null);
}
function K() {
    if (null != C && Y(C)) return !1;
    W();
}
function z() {
    S.lastSeen = Date.now();
}
function q(e) {
    let { trigger: t } = e;
    if ("nitro_unsub" !== t || !d.E.getConfig({ location: "surveystore" }).enableNitroUnsubSurvey) return !1;
    (0, u.wk)("1439042286574112799", !0);
}
class X extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(f.Z, p.Z, _.Z, m.Z, h.default), (S = null != e ? e : v), this.syncWith([m.Z], K);
    }
    getState() {
        return S;
    }
    getCurrentSurvey() {
        return x() ? null : C;
    }
    getSurveyOverride() {
        return S.surveyOverride;
    }
    getLastSeenTimestamp() {
        return S.lastSeen;
    }
}
E(X, "displayName", "SurveyStore"),
    E(X, "persistKey", "SurveyStore"),
    E(X, "migrations", [
        (e) => {
            let t = b({}, e);
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
            return O(b({}, e), { lastSeen: null != (t = e.lastSeen) ? t : null });
        },
        (e) => {
            var t;
            return O(b({}, e), { hiddenSurveys: null != (t = e.hiddenSurveys) ? t : {} });
        },
    ]);
let Q = new X(c.Z, {
    CONNECTION_OPEN: L,
    CONNECTION_RESUMED: L,
    SURVEY_FETCHED: G,
    SURVEY_HIDE: V,
    SURVEY_OVERRIDE: Z,
    PUSH_NOTIFICATION_CLICK: B,
    DISPLAYED_INVITE_SHOW: F,
    LOGOUT: H,
    SURVEY_SEEN: z,
    EMBEDDED_SURVEY_TRIGGER: q,
});

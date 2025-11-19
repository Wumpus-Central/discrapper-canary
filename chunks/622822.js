n.d(t, {
    $5: () => X,
    I8: () => Y,
    Kt: () => j,
    Lj: () => C,
    RW: () => H,
    Y3: () => q,
    Yt: () => R,
    _I: () => L,
    _t: () => K,
    a1: () => G,
    bN: () => N,
    dl: () => k,
    ft: () => z,
    hO: () => P,
    kH: () => U,
    qF: () => W,
    zd: () => F,
}),
    n(388685),
    n(953529);
var r = n(442837),
    i = n(480916),
    a = n(453679),
    o = n(81643),
    s = n(128064),
    l = n(312870),
    c = n(601964),
    u = n(592125),
    d = n(731290),
    f = n(430824),
    _ = n(594174),
    p = n(63063),
    h = n(709054),
    m = n(758119),
    g = n(723359),
    E = n(981631),
    b = n(388032);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    return {
        description: e ? b.intl.string(b.t["lSgO/q"]) : b.intl.string(b.t.SxY4IW),
        agreement: e ? b.intl.string(b.t.PBG51l) : b.intl.string(b.t["5B+npG"]),
    };
}
let S = new Date("06/16/2020"),
    A = [E.V_K.AGE_RESTRICTED, E.V_K.EXPLICIT],
    C = new Set([g.L0.NSFW_SERVER, g.L0.NSFW_SERVER_INVITE, g.L0.NSFW_SERVER_INVITE_EMBED]);
function N() {
    let e = _.default.getCurrentUser();
    return null != e && h.default.extractTimestamp(e.id) > S.getTime() && null == e.nsfwAllowed;
}
function R(e) {
    return A.includes(e.nsfwLevel);
}
function P(e) {
    return null != e && D(f.Z.getGuild(e));
}
function D(e) {
    let t = (0, a.u)("age_verification_utils"),
        n = (0, o.yo)();
    return t && n && (null == e ? void 0 : e.features.has(E.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD));
}
function w(e) {
    let t = (0, a.z)("age_verification_utils"),
        n = (0, o.Jm)();
    return t && n && (null == e ? void 0 : e.features.has(E.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD));
}
function L(e) {
    return null != e && x(f.Z.getGuild(e));
}
function x(e) {
    return (
        null != e &&
        (0, a.u)("age_verification_utils") &&
        (0, o.sf)() &&
        e.features.has(E.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD)
    );
}
function M(e) {
    let t = (0, r.e7)([f.Z], () => f.Z.getGuild(e)),
        n = (0, a.z)("age_verification_utils"),
        i = (0, o.L5)();
    return null != t && n && i && t.features.has(E.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD);
}
function k() {
    let e = (0, s.c_)("age-gate-utils"),
        t = (0, a.u)("age-gate-utils"),
        n = (0, l.U)("age-gate-utils"),
        r = (0, o.sf)();
    return (e || t || n) && r;
}
function j() {
    let e = (0, s.pY)("age-gate-utils"),
        t = (0, a.z)("age-gate-utils"),
        n = (0, l.s)("age-gate-utils"),
        r = (0, o.L5)();
    return (e || t || n) && r;
}
function U(e) {
    let t = (0, o.l6)(),
        n = (0, c.Y2)(e),
        a = M(null == e ? void 0 : e.id),
        s = (0, r.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        l = j(),
        u = w(e),
        d = b.intl.string(n ? b.t.xi46lg : b.t.ZmwvDc);
    if (l) {
        if (u) {
            let e = T(t);
            return I(O({ title: b.intl.string(b.t.MjQbfi) }, e), { modalType: i.it.GUILD_LARGE_SERVER_UNDERAGE });
        }
        return t
            ? {
                  title: d,
                  description: n ? b.intl.format(b.t["7uIWQM"], {}) : b.intl.format(b.t.x1coPo, {}),
                  agreement: b.intl.string(b.t.PBG51l),
                  modalType: i.it.NSFW_CHANNEL_AGE_VERIFY,
              }
            : a
              ? {
                    title: b.intl.string(b.t.UYReTs),
                    description: b.intl.string(b.t.SxY4IW),
                    agreement: b.intl.string(b.t["5B+npG"]),
                    modalType: i.it.GUILD_LARGE_SERVER,
                }
              : {
                    title: d,
                    description: n ? b.intl.string(b.t.akjk0f) : b.intl.string(b.t["u/xqhc"]),
                    agreement: b.intl.string(b.t["5B+npG"]),
                    modalType: i.it.NSFW_CHANNEL_AGE_VERIFY,
                };
    }
    return s
        ? {
              title: b.intl.string(n ? b.t["H0SG/g"] : b.t.NEabBa),
              description: b.intl.format(n ? b.t["6++3cX"] : b.t["2kHZes"], {
                  helpURL: p.Z.getArticleURL(E.BhN.NSFW_AGE_GATING),
              }),
              agreement: null,
              modalType: i.it.NSFW_CHANNEL_UNDERAGE,
          }
        : {
              title: d,
              description: b.intl.string(n ? b.t.ZtuRts : b.t.E4Cd5I),
              agreement: b.intl.string(b.t.wVq7uo),
              modalType: i.it.NSFW_CHANNEL_VERIFIED,
          };
}
function G(e) {
    let t = (0, o.l6)(),
        n = j(),
        i = e === g.L0.NSFW_SERVER || e === g.L0.NSFW_SERVER_INVITE || e === g.L0.NSFW_SERVER_INVITE_EMBED,
        a = (0, r.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        });
    if (e === g.L0.JOIN_LARGE_GUILD_UNDERAGE || e === g.L0.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === g.L0.JOIN_LARGE_GUILD_UNDERAGE ? b.t["u/xsK9"] : b.t.MjQbfi,
            r = T(t);
        return {
            verifyTitle: b.intl.string(n),
            verifyGateDescription: r.description,
            verifyAgreementButtonText: r.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: b.intl.string(b.t.PBG51l),
              verifyGateDescription: i ? b.intl.format(b.t["7uIWQM"], {}) : b.intl.format(b.t.x1coPo, {}),
              verifyTitle: i ? b.intl.string(b.t.xi46lg) : b.intl.string(b.t.ZmwvDc),
          }
        : e === g.L0.LARGE_GUILD
          ? {
                verifyTitle: b.intl.string(b.t.UYReTs),
                verifyGateDescription: b.intl.string(b.t.SxY4IW),
                verifyAgreementButtonText: b.intl.string(b.t["5B+npG"]),
            }
          : a && i && !n
            ? {
                  verifyTitle: b.intl.string(b.t["H0SG/g"]),
                  verifyGateDescription: b.intl.format(b.t["6++3cX"], { helpURL: p.Z.getArticleURL(E.BhN.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: b.intl.string(b.t["5B+npG"]),
                  verifyGateDescription: i ? b.intl.string(b.t.akjk0f) : b.intl.string(b.t["u/xqhc"]),
                  verifyTitle: i ? b.intl.string(b.t.xi46lg) : b.intl.string(b.t.ZmwvDc),
              };
}
let B = () => {
        let e = _.default.getCurrentUser();
        if (null == e) return !1;
        let t = k();
        return !0 !== e.nsfwAllowed || t;
    },
    Z = (e) => {
        if (!B() || null == e) return !1;
        let t = f.Z.getGuild(e);
        return null != t && (0, c.Y2)(t);
    },
    F = (e) => !!B() && null != e && q(u.Z.getChannel(e)),
    V = (e) => k() && F(e),
    H = (e) => !!V(e) && ((0, m.mN)(g.L0.NSFW_VOICE_CHANNEL), !0);
function Y(e, t, n) {
    if (P(e)) return void (0, m.mN)(g.L0.ACCESS_LARGE_GUILD_UNDERAGE);
    if (Z(e)) {
        let e = null != n && C.has(n) ? n : g.L0.NSFW_SERVER;
        (0, m.mN)(e);
        return;
    }
    return L(e)
        ? void (0, m.mN)(g.L0.LARGE_GUILD)
        : Q() && F(t)
          ? void (0, m.mN)(null != n ? n : g.L0.NSFW_CHANNEL)
          : void 0;
}
let W = (e) => null != e && (e.isNSFW() || (0, c.Y2)(f.Z.getGuild(e.guild_id))),
    K = (e) => {
        if (null == e) return !1;
        let t = (0, o.sf)();
        return W(e) && t;
    },
    z = (e) => {
        var t;
        if (null == e) return !1;
        let n = (null == (t = _.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !0;
        return W(e) && !n;
    };
function q(e) {
    var t;
    if (null == e) return !1;
    let n = d.Z.didAgree(e.guild_id),
        r = (null == (t = _.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !1,
        i = (0, s.c_)("age-gate-utils"),
        a = (0, l.U)("age-gate-utils"),
        u = i || a,
        p = (0, o.sf)(),
        h = !(n && !r) || (p && u);
    if (e.isNSFW() && h) return !0;
    let m = e.guild_id,
        g = f.Z.getGuild(m);
    return null != g && (((0, c.Y2)(g) && h) || (x(g) && p));
}
function X(e) {
    let t = (0, o.L5)(),
        n = (0, r.e7)([d.Z], () => d.Z.didAgree(null == e ? void 0 : e.guild_id)),
        i = (0, r.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        a = M(null == e ? void 0 : e.guild_id),
        u = (0, s.pY)("age-gate-utils"),
        p = (0, l.s)("age-gate-utils"),
        h = u || p,
        m = (0, r.e7)([f.Z], () => f.Z.getGuild(null == e ? void 0 : e.guild_id)),
        g = h && t,
        E = !(n && !i) || g;
    return null != e && ((!!e.isNSFW() && !!E) || (null != m && ((!!(0, c.Y2)(m) && !!E) || (!!a && !!t))));
}
function Q() {
    let e = _.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}

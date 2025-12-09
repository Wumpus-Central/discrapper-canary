n.d(t, {
    $5: () => X,
    I8: () => W,
    Kt: () => U,
    Lj: () => N,
    RW: () => Y,
    Y3: () => Q,
    Yt: () => R,
    _I: () => L,
    _t: () => z,
    a1: () => Z,
    bN: () => P,
    dl: () => k,
    ft: () => q,
    hO: () => D,
    kH: () => G,
    qF: () => K,
    xi: () => $,
    zd: () => V,
}),
    n(388685),
    n(953529);
var r = n(442837),
    i = n(480916),
    a = n(532812),
    o = n(453679),
    s = n(81643),
    l = n(128064),
    c = n(312870),
    u = n(601964),
    d = n(592125),
    f = n(731290),
    p = n(430824),
    _ = n(594174),
    m = n(63063),
    h = n(709054),
    g = n(758119),
    E = n(723359),
    b = n(981631),
    y = n(388032);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    return {
        description: e ? y.intl.string(y.t["lSgO/q"]) : y.intl.string(y.t.SxY4IW),
        agreement: e ? y.intl.string(y.t.PBG51l) : y.intl.string(y.t["5B+npG"]),
    };
}
let A = new Date("06/16/2020"),
    C = [b.V_K.AGE_RESTRICTED, b.V_K.EXPLICIT],
    N = new Set([E.L0.NSFW_SERVER, E.L0.NSFW_SERVER_INVITE, E.L0.NSFW_SERVER_INVITE_EMBED]);
function P() {
    let e = _.default.getCurrentUser();
    return null != e && h.default.extractTimestamp(e.id) > A.getTime() && null == e.nsfwAllowed;
}
function R(e) {
    return C.includes(e.nsfwLevel);
}
function D(e) {
    return null != e && w(p.Z.getGuild(e));
}
function w(e) {
    let t = (0, o.u)("age_verification_utils"),
        n = (0, s.yo)();
    return t && n && (null == e ? void 0 : e.features.has(b.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD));
}
function x(e) {
    let t = (0, o.z)("age_verification_utils"),
        n = (0, s.Jm)();
    return t && n && (null == e ? void 0 : e.features.has(b.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD));
}
function L(e) {
    return null != e && j(p.Z.getGuild(e));
}
function j(e) {
    return (
        null != e &&
        (0, o.u)("age_verification_utils") &&
        (0, s.sf)() &&
        e.features.has(b.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD)
    );
}
function M(e) {
    let t = (0, r.e7)([p.Z], () => p.Z.getGuild(e)),
        n = (0, o.z)("age_verification_utils"),
        i = (0, s.L5)();
    return null != t && n && i && t.features.has(b.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD);
}
function k() {
    let e = (0, l.c_)("age-gate-utils"),
        t = (0, o.u)("age-gate-utils"),
        n = (0, c.U)("age-gate-utils"),
        r = (0, s.sf)();
    return (e || t || n) && r;
}
function U() {
    let e = (0, l.pY)("age-gate-utils"),
        t = (0, o.z)("age-gate-utils"),
        n = (0, c.s)("age-gate-utils"),
        r = (0, s.L5)();
    return (e || t || n) && r;
}
function G(e) {
    let t = (0, s.l6)(),
        n = (0, u.Y2)(e),
        a = M(null == e ? void 0 : e.id),
        o = (0, r.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        l = U(),
        c = x(e),
        d = y.intl.string(n ? y.t.xi46lg : y.t.ZmwvDc);
    if (l) {
        if (c) {
            let e = T(t);
            return I(v({ title: y.intl.string(y.t.MjQbfi) }, e), { modalType: i.it.GUILD_LARGE_SERVER_UNDERAGE });
        }
        return t
            ? {
                  title: d,
                  description: n ? y.intl.format(y.t["7uIWQM"], {}) : y.intl.format(y.t.x1coPo, {}),
                  agreement: y.intl.string(y.t.PBG51l),
                  modalType: i.it.NSFW_CHANNEL_AGE_VERIFY,
              }
            : a
              ? {
                    title: y.intl.string(y.t.UYReTs),
                    description: y.intl.string(y.t.SxY4IW),
                    agreement: y.intl.string(y.t["5B+npG"]),
                    modalType: i.it.GUILD_LARGE_SERVER,
                }
              : {
                    title: d,
                    description: n ? y.intl.string(y.t.akjk0f) : y.intl.string(y.t["u/xqhc"]),
                    agreement: y.intl.string(y.t["5B+npG"]),
                    modalType: i.it.NSFW_CHANNEL_AGE_VERIFY,
                };
    }
    return o
        ? {
              title: y.intl.string(n ? y.t["H0SG/g"] : y.t.NEabBa),
              description: y.intl.format(n ? y.t["6++3cX"] : y.t["2kHZes"], {
                  helpURL: m.Z.getArticleURL(b.BhN.NSFW_AGE_GATING),
              }),
              agreement: null,
              modalType: i.it.NSFW_CHANNEL_UNDERAGE,
          }
        : {
              title: d,
              description: y.intl.string(n ? y.t.ZtuRts : y.t.E4Cd5I),
              agreement: y.intl.string(y.t.wVq7uo),
              modalType: i.it.NSFW_CHANNEL_VERIFIED,
          };
}
function Z(e) {
    let t = (0, s.l6)(),
        n = U(),
        i = e === E.L0.NSFW_SERVER || e === E.L0.NSFW_SERVER_INVITE || e === E.L0.NSFW_SERVER_INVITE_EMBED,
        a = (0, r.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        });
    if (e === E.L0.JOIN_LARGE_GUILD_UNDERAGE || e === E.L0.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === E.L0.JOIN_LARGE_GUILD_UNDERAGE ? y.t["u/xsK9"] : y.t.MjQbfi,
            r = T(t);
        return {
            verifyTitle: y.intl.string(n),
            verifyGateDescription: r.description,
            verifyAgreementButtonText: r.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: y.intl.string(y.t.PBG51l),
              verifyGateDescription: i ? y.intl.format(y.t["7uIWQM"], {}) : y.intl.format(y.t.x1coPo, {}),
              verifyTitle: i ? y.intl.string(y.t.xi46lg) : y.intl.string(y.t.ZmwvDc),
          }
        : e === E.L0.LARGE_GUILD
          ? {
                verifyTitle: y.intl.string(y.t.UYReTs),
                verifyGateDescription: y.intl.string(y.t.SxY4IW),
                verifyAgreementButtonText: y.intl.string(y.t["5B+npG"]),
            }
          : a && i && !n
            ? {
                  verifyTitle: y.intl.string(y.t["H0SG/g"]),
                  verifyGateDescription: y.intl.format(y.t["6++3cX"], { helpURL: m.Z.getArticleURL(b.BhN.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: y.intl.string(y.t["5B+npG"]),
                  verifyGateDescription: i ? y.intl.string(y.t.akjk0f) : y.intl.string(y.t["u/xqhc"]),
                  verifyTitle: i ? y.intl.string(y.t.xi46lg) : y.intl.string(y.t.ZmwvDc),
              };
}
let B = () => {
        let e = _.default.getCurrentUser();
        if (null == e) return !1;
        let t = k();
        return !0 !== e.nsfwAllowed || t;
    },
    F = (e) => {
        if (!B() || null == e) return !1;
        let t = p.Z.getGuild(e);
        return null != t && (0, u.Y2)(t);
    },
    V = (e) => !!B() && null != e && Q(d.Z.getChannel(e)),
    H = (e) => k() && V(e),
    Y = (e) => !!H(e) && ((0, g.mN)(E.L0.NSFW_VOICE_CHANNEL), !0);
function W(e, t, n) {
    if (D(e)) return void (0, g.mN)(E.L0.ACCESS_LARGE_GUILD_UNDERAGE);
    if (F(e)) {
        let e = null != n && N.has(n) ? n : E.L0.NSFW_SERVER;
        (0, g.mN)(e);
        return;
    }
    return L(e)
        ? void (0, g.mN)(E.L0.LARGE_GUILD)
        : J() && V(t)
          ? void (0, g.mN)(null != n ? n : E.L0.NSFW_CHANNEL)
          : void 0;
}
let K = (e) => null != e && (e.isNSFW() || (0, u.Y2)(p.Z.getGuild(e.guild_id))),
    z = (e) => {
        if (null == e) return !1;
        let t = (0, s.sf)();
        return K(e) && t;
    },
    q = (e) => {
        var t;
        if (null == e) return !1;
        let n = (null == (t = _.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !0;
        return K(e) && !n;
    };
function Q(e) {
    var t;
    if (null == e) return !1;
    let n = f.Z.didAgree(e.guild_id),
        r = (null == (t = _.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !1,
        i = (0, l.c_)("age-gate-utils"),
        a = (0, c.U)("age-gate-utils"),
        o = i || a,
        d = (0, s.sf)(),
        m = !(n && !r) || (d && o);
    if (e.isNSFW() && m) return !0;
    let h = e.guild_id,
        g = p.Z.getGuild(h);
    return null != g && (((0, u.Y2)(g) && m) || (j(g) && d));
}
function X(e) {
    let t = (0, s.L5)(),
        n = (0, r.e7)([f.Z], () => f.Z.didAgree(null == e ? void 0 : e.guild_id)),
        i = (0, r.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        a = M(null == e ? void 0 : e.guild_id),
        o = (0, l.pY)("age-gate-utils"),
        d = (0, c.s)("age-gate-utils"),
        m = o || d,
        h = (0, r.e7)([p.Z], () => p.Z.getGuild(null == e ? void 0 : e.guild_id)),
        g = m && t,
        E = !(n && !i) || g;
    return null != e && ((!!e.isNSFW() && !!E) || (null != h && ((!!(0, u.Y2)(h) && !!E) || (!!a && !!t))));
}
function J() {
    let e = _.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}
function $() {
    let e = (0, a.H)("age-gate-utils"),
        t = (0, s.L5)();
    return e && t;
}

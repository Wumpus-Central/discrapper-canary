n.d(t, {
    $5: () => J,
    I8: () => K,
    Kt: () => G,
    Lj: () => P,
    RW: () => W,
    Uw: () => ee,
    Y3: () => X,
    Yt: () => w,
    _I: () => j,
    _t: () => q,
    a1: () => F,
    bN: () => R,
    dl: () => U,
    ft: () => Q,
    hO: () => D,
    kH: () => Z,
    qF: () => z,
    xi: () => et,
    zd: () => H,
}),
    n(388685),
    n(953529);
var r = n(310882),
    i = n(442837),
    a = n(480916),
    o = n(532812),
    s = n(453679),
    l = n(81643),
    c = n(980945),
    u = n(312870),
    d = n(601964),
    f = n(592125),
    p = n(731290),
    _ = n(430824),
    m = n(594174),
    h = n(63063),
    g = n(709054),
    E = n(758119),
    b = n(723359),
    y = n(981631),
    O = n(388032);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    return {
        description: e ? O.intl.string(O.t["lSgO/q"]) : O.intl.string(O.t.SxY4IW),
        agreement: e ? O.intl.string(O.t.PBG51l) : O.intl.string(O.t["5B+npG"]),
    };
}
let A = new Date("06/16/2020"),
    N = [y.V_K.AGE_RESTRICTED, y.V_K.EXPLICIT],
    P = new Set([b.L0.NSFW_SERVER, b.L0.NSFW_SERVER_INVITE, b.L0.NSFW_SERVER_INVITE_EMBED]);
function R() {
    let e = m.default.getCurrentUser();
    return null != e && g.default.extractTimestamp(e.id) > A.getTime() && null == e.nsfwAllowed;
}
function w(e) {
    return N.includes(e.nsfwLevel);
}
function D(e) {
    return null != e && x(_.Z.getGuild(e));
}
function x(e) {
    let t = (0, s.u)("age_verification_utils"),
        n = (0, l.yo)();
    return t && n && (null == e ? void 0 : e.features.has(y.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD));
}
function L(e) {
    let t = (0, s.z)("age_verification_utils"),
        n = (0, l.Jm)();
    return t && n && (null == e ? void 0 : e.features.has(y.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD));
}
function j(e) {
    return null != e && M(_.Z.getGuild(e));
}
function M(e) {
    return (
        null != e &&
        (0, s.u)("age_verification_utils") &&
        (0, l.sf)() &&
        e.features.has(y.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD)
    );
}
function k(e) {
    let t = (0, i.e7)([_.Z], () => _.Z.getGuild(e)),
        n = (0, s.z)("age_verification_utils"),
        r = (0, l.L5)();
    return null != t && n && r && t.features.has(y.GuildFeatures.AGE_VERIFICATION_LARGE_GUILD);
}
function U() {
    let e = (0, s.u)("age-gate-utils"),
        t = (0, u.U)("age-gate-utils"),
        n = (0, l.sf)();
    return ((0, c.ML)(r.X.AGE_GATED_SPACES) || e || t) && n;
}
function G() {
    let e = (0, c.Uf)(r.X.AGE_GATED_SPACES),
        t = (0, s.z)("age-gate-utils"),
        n = (0, u.s)("age-gate-utils"),
        i = (0, l.L5)();
    return (e || t || n) && i;
}
function Z(e) {
    let t = (0, l.l6)(),
        n = (0, d.Y2)(e),
        r = k(null == e ? void 0 : e.id),
        o = (0, i.e7)([m.default], () => {
            var e;
            return (null == (e = m.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        s = G(),
        c = L(e),
        u = O.intl.string(n ? O.t.xi46lg : O.t.ZmwvDc);
    if (s) {
        if (c) {
            let e = C(t);
            return T(S({ title: O.intl.string(O.t.MjQbfi) }, e), { modalType: a.it.GUILD_LARGE_SERVER_UNDERAGE });
        }
        return t
            ? {
                  title: u,
                  description: n ? O.intl.format(O.t["7uIWQM"], {}) : O.intl.format(O.t.x1coPo, {}),
                  agreement: O.intl.string(O.t.PBG51l),
                  modalType: a.it.NSFW_CHANNEL_AGE_VERIFY,
              }
            : r
              ? {
                    title: O.intl.string(O.t.UYReTs),
                    description: O.intl.string(O.t.SxY4IW),
                    agreement: O.intl.string(O.t["5B+npG"]),
                    modalType: a.it.GUILD_LARGE_SERVER,
                }
              : {
                    title: u,
                    description: n ? O.intl.string(O.t.akjk0f) : O.intl.string(O.t["u/xqhc"]),
                    agreement: O.intl.string(O.t["5B+npG"]),
                    modalType: a.it.NSFW_CHANNEL_AGE_VERIFY,
                };
    }
    return o
        ? {
              title: O.intl.string(n ? O.t["H0SG/g"] : O.t.NEabBa),
              description: O.intl.format(n ? O.t["6++3cX"] : O.t["2kHZes"], {
                  helpURL: h.Z.getArticleURL(y.BhN.NSFW_AGE_GATING),
              }),
              agreement: null,
              modalType: a.it.NSFW_CHANNEL_UNDERAGE,
          }
        : {
              title: u,
              description: O.intl.string(n ? O.t.ZtuRts : O.t.E4Cd5I),
              agreement: O.intl.string(O.t.wVq7uo),
              modalType: a.it.NSFW_CHANNEL_VERIFIED,
          };
}
function F(e) {
    let t = (0, l.l6)(),
        n = G(),
        r = e === b.L0.NSFW_SERVER || e === b.L0.NSFW_SERVER_INVITE || e === b.L0.NSFW_SERVER_INVITE_EMBED,
        a = (0, i.e7)([m.default], () => {
            var e;
            return (null == (e = m.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        });
    if (e === b.L0.JOIN_LARGE_GUILD_UNDERAGE || e === b.L0.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === b.L0.JOIN_LARGE_GUILD_UNDERAGE ? O.t["u/xsK9"] : O.t.MjQbfi,
            r = C(t);
        return {
            verifyTitle: O.intl.string(n),
            verifyGateDescription: r.description,
            verifyAgreementButtonText: r.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: O.intl.string(O.t.PBG51l),
              verifyGateDescription: r ? O.intl.format(O.t["7uIWQM"], {}) : O.intl.format(O.t.x1coPo, {}),
              verifyTitle: r ? O.intl.string(O.t.xi46lg) : O.intl.string(O.t.ZmwvDc),
          }
        : e === b.L0.LARGE_GUILD
          ? {
                verifyTitle: O.intl.string(O.t.UYReTs),
                verifyGateDescription: O.intl.string(O.t.SxY4IW),
                verifyAgreementButtonText: O.intl.string(O.t["5B+npG"]),
            }
          : a && r && !n
            ? {
                  verifyTitle: O.intl.string(O.t["H0SG/g"]),
                  verifyGateDescription: O.intl.format(O.t["6++3cX"], { helpURL: h.Z.getArticleURL(y.BhN.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: O.intl.string(O.t["5B+npG"]),
                  verifyGateDescription: r ? O.intl.string(O.t.akjk0f) : O.intl.string(O.t["u/xqhc"]),
                  verifyTitle: r ? O.intl.string(O.t.xi46lg) : O.intl.string(O.t.ZmwvDc),
              };
}
let B = () => {
        let e = m.default.getCurrentUser();
        if (null == e) return !1;
        let t = U();
        return !0 !== e.nsfwAllowed || t;
    },
    V = (e) => {
        if (!B() || null == e) return !1;
        let t = _.Z.getGuild(e);
        return null != t && (0, d.Y2)(t);
    },
    H = (e) => !!B() && null != e && X(f.Z.getChannel(e)),
    Y = (e) => U() && H(e),
    W = (e) => !!Y(e) && ((0, E.mN)(b.L0.NSFW_VOICE_CHANNEL), !0);
function K(e, t, n) {
    if (D(e)) return void (0, E.mN)(b.L0.ACCESS_LARGE_GUILD_UNDERAGE);
    if (V(e)) {
        let e = null != n && P.has(n) ? n : b.L0.NSFW_SERVER;
        (0, E.mN)(e);
        return;
    }
    return j(e)
        ? void (0, E.mN)(b.L0.LARGE_GUILD)
        : $() && H(t)
          ? void (0, E.mN)(null != n ? n : b.L0.NSFW_CHANNEL)
          : void 0;
}
let z = (e) => null != e && (e.isNSFW() || (0, d.Y2)(_.Z.getGuild(e.guild_id))),
    q = (e) => {
        if (null == e) return !1;
        let t = (0, l.sf)();
        return z(e) && t;
    },
    Q = (e) => {
        var t;
        if (null == e) return !1;
        let n = (null == (t = m.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !0;
        return z(e) && !n;
    };
function X(e) {
    var t;
    if (null == e) return !1;
    let n = p.Z.didAgree(e.guild_id),
        i = (null == (t = m.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !1,
        a = (0, u.U)("age-gate-utils"),
        o = (0, c.ML)(r.X.AGE_GATED_SPACES) || a,
        s = (0, l.sf)(),
        f = !(n && !i) || (s && o);
    if (e.isNSFW() && f) return !0;
    let h = e.guild_id,
        g = _.Z.getGuild(h);
    return null != g && (((0, d.Y2)(g) && f) || (M(g) && s));
}
function J(e) {
    let t = (0, l.L5)(),
        n = (0, i.e7)([p.Z], () => p.Z.didAgree(null == e ? void 0 : e.guild_id)),
        a = (0, i.e7)([m.default], () => {
            var e;
            return (null == (e = m.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        o = k(null == e ? void 0 : e.guild_id),
        s = (0, c.Uf)(r.X.AGE_GATED_SPACES),
        f = (0, u.s)("age-gate-utils"),
        h = s || f,
        g = (0, i.e7)([_.Z], () => _.Z.getGuild(null == e ? void 0 : e.guild_id)),
        E = h && t,
        b = !(n && !a) || E;
    return null != e && ((!!e.isNSFW() && !!b) || (null != g && ((!!(0, d.Y2)(g) && !!b) || (!!o && !!t))));
}
function $() {
    let e = m.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}
function ee() {
    let e = (0, o.S)("age-gate-utils"),
        t = (0, l.sf)();
    return e && t;
}
function et() {
    let e = (0, o.H)("age-gate-utils"),
        t = (0, l.L5)();
    return e && t;
}

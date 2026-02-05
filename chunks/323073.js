"use strict";
n.d(t, {
    $v: () => F,
    Bc: () => C,
    Gc: () => G,
    Gn: () => L,
    Jm: () => V,
    Tv: () => k,
    UK: () => P,
    a9: () => O,
    k$: () => D,
    kK: () => U,
    p5: () => Y,
    qR: () => B,
    r9: () => R,
    sP: () => W,
    vL: () => j,
    xq: () => b,
    zS: () => N,
});
var r = n(687123),
    i = n(311907),
    a = n(847599),
    s = n(620715),
    o = n(870383),
    l = n(36149),
    u = n(207560),
    c = n(64313),
    d = n(260509),
    _ = n(734057),
    f = n(517019),
    p = n(71393),
    h = n(287809),
    m = n(975571),
    g = n(661191),
    E = n(612200),
    A = n(204925),
    I = n(652215),
    T = n(985018);
function y(e) {
    return {
        description: e ? (0, o.H)(T.intl.string(T.t["lSgO/q"]), T.intl.string(T.t.SAoMVJ)) : T.intl.string(T.t.SxY4IW),
        agreement: e
            ? (0, o.H)(T.intl.string(T.t.PBG51l), T.intl.string(T.t.Zt4Mf4))
            : (0, o.H)(T.intl.string(T.t["5B+npG"]), T.intl.string(T.t.FDSSia)),
    };
}
let S = new Date("06/16/2020"),
    v = [I.ftr.AGE_RESTRICTED, I.ftr.EXPLICIT],
    C = new Set([A.w_.NSFW_SERVER, A.w_.NSFW_SERVER_INVITE, A.w_.NSFW_SERVER_INVITE_EMBED]);
function b() {
    let e = h.default.getCurrentUser();
    return null != e && g.default.extractTimestamp(e.id) > S.getTime() && null == e.nsfwAllowed;
}
function N(e) {
    return v.includes(e.nsfwLevel);
}
function R() {
    let e = (0, c.o)("age-gate-utils"),
        t = (0, l.p9)();
    return ((0, u.d6)(r.t.AGE_GATED_SPACES) || e) && t;
}
function O() {
    let e = (0, u.aX)(r.t.AGE_GATED_SPACES),
        t = (0, c.j)("age-gate-utils"),
        n = (0, l.i2)();
    return (e || t) && n;
}
function D(e) {
    let t = (0, l.b8)(),
        n = (0, d.wh)(e),
        r = (0, i.bG)([h.default], () => h.default.getCurrentUser()?.nsfwAllowed === !1),
        u = O(),
        { enabled: c } = s.Y.useConfig({ location: "useAgeGateVerifyContentForGuild" }),
        _ = (0, o.W)(T.intl.string(T.t.PBG51l), T.intl.string(T.t.Zt4Mf4)),
        f = (0, o.W)(T.intl.string(T.t.akjk0f), T.intl.string(T.t.V6Gmu9)),
        p = (0, o.W)(T.intl.string(T.t["u/xqhc"]), T.intl.string(T.t["5rygLk"])),
        g = (0, o.W)(T.intl.string(T.t["5B+npG"]), T.intl.string(T.t.FDSSia)),
        E = T.intl.string(n ? T.t.xi46lg : T.t.ZmwvDc);
    return u
        ? t
            ? {
                  title: E,
                  description: n
                      ? T.intl.format(c ? T.t["8tk6bB"] : T.t["7uIWQM"], {})
                      : T.intl.format(c ? T.t.XQZvwn : T.t.x1coPo, {}),
                  agreement: _,
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
            : { title: E, description: n ? f : p, agreement: g, modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY }
        : r
          ? {
                title: T.intl.string(n ? T.t["H0SG/g"] : T.t.NEabBa),
                description: T.intl.format(n ? T.t["6++3cX"] : T.t["2kHZes"], {
                    helpURL: m.A.getArticleURL(I.MVz.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: a.A5.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: E,
                description: T.intl.string(n ? T.t.ZtuRts : T.t.E4Cd5I),
                agreement: T.intl.string(T.t.wVq7uo),
                modalType: a.A5.NSFW_CHANNEL_VERIFIED,
            };
}
function L(e) {
    let t = (0, l.b8)(),
        n = O(),
        r = e === A.w_.NSFW_SERVER || e === A.w_.NSFW_SERVER_INVITE || e === A.w_.NSFW_SERVER_INVITE_EMBED,
        a = (0, i.bG)([h.default], () => h.default.getCurrentUser()?.nsfwAllowed === !1),
        { enabled: u } = s.Y.useConfig({ location: "useAgeGateVerifyContent" }),
        c = (0, o.W)(T.intl.string(T.t.PBG51l), T.intl.string(T.t.Zt4Mf4)),
        d = (0, o.W)(T.intl.string(T.t.UYReTs), T.intl.string(T.t["7ymzsL"])),
        _ = (0, o.W)(T.intl.string(T.t["5B+npG"]), T.intl.string(T.t.FDSSia)),
        f = (0, o.W)(T.intl.string(T.t.akjk0f), T.intl.string(T.t.V6Gmu9)),
        p = (0, o.W)(T.intl.string(T.t["u/xqhc"]), T.intl.string(T.t["5rygLk"]));
    if (e === A.w_.JOIN_LARGE_GUILD_UNDERAGE || e === A.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === A.w_.JOIN_LARGE_GUILD_UNDERAGE ? T.t["u/xsK9"] : T.t.MjQbfi,
            r = y(t);
        return {
            verifyTitle: T.intl.string(n),
            verifyGateDescription: r.description,
            verifyAgreementButtonText: r.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: c,
              verifyGateDescription: r
                  ? T.intl.format(u ? T.t["8tk6bB"] : T.t["7uIWQM"], {})
                  : T.intl.format(u ? T.t.XQZvwn : T.t.x1coPo, {}),
              verifyTitle: r ? T.intl.string(T.t.xi46lg) : T.intl.string(T.t.ZmwvDc),
          }
        : e === A.w_.LARGE_GUILD
          ? { verifyTitle: d, verifyGateDescription: T.intl.string(T.t.SxY4IW), verifyAgreementButtonText: _ }
          : a && r && !n
            ? {
                  verifyTitle: T.intl.string(T.t["H0SG/g"]),
                  verifyGateDescription: T.intl.format(T.t["6++3cX"], { helpURL: m.A.getArticleURL(I.MVz.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: _,
                  verifyGateDescription: r ? f : p,
                  verifyTitle: r ? T.intl.string(T.t.xi46lg) : T.intl.string(T.t.ZmwvDc),
              };
}
let w = () => {
        let e = h.default.getCurrentUser();
        if (null == e) return !1;
        let t = R();
        return !0 !== e.nsfwAllowed || t;
    },
    x = (e) => {
        if (!w() || null == e) return !1;
        let t = p.A.getGuild(e);
        return null != t && (0, d.wh)(t);
    },
    P = (e) => !!w() && null != e && B(_.A.getChannel(e)),
    M = (e) => R() && P(e),
    k = (e) => !!M(e) && ((0, E.yO)(A.w_.NSFW_VOICE_CHANNEL), !0);
function U(e, t, n) {
    if (x(e)) {
        let e = null != n && C.has(n) ? n : A.w_.NSFW_SERVER;
        (0, E.yO)(e);
        return;
    }
    if (H() && P(t)) return void (0, E.yO)(n ?? A.w_.NSFW_CHANNEL);
}
let G = (e) => null != e && (e.isNSFW() || (0, d.wh)(p.A.getGuild(e.guild_id))),
    V = (e) => {
        if (null == e) return !1;
        let t = (0, l.p9)();
        return G(e) && t;
    },
    F = (e) => {
        if (null == e) return !1;
        let t = h.default.getCurrentUser()?.nsfwAllowed === !0;
        return G(e) && !t;
    };
function B(e) {
    if (null == e) return !1;
    let t = f.A.didAgree(e.guild_id),
        n = h.default.getCurrentUser()?.nsfwAllowed === !1,
        i = (0, c.o)("age-gate-utils"),
        a = (0, u.d6)(r.t.AGE_GATED_SPACES) || i,
        s = (0, l.p9)(),
        o = !(t && !n) || (s && a);
    if (e.isNSFW() && o) return !0;
    let _ = e.guild_id,
        m = p.A.getGuild(_);
    return null != m && (0, d.wh)(m) && o;
}
function j(e) {
    let t = (0, l.i2)(),
        n = (0, i.bG)([f.A], () => f.A.didAgree(e?.guild_id)),
        a = (0, i.bG)([h.default], () => h.default.getCurrentUser()?.nsfwAllowed === !1),
        s = (0, u.aX)(r.t.AGE_GATED_SPACES),
        o = (0, c.j)("age-gate-utils"),
        _ = s || o,
        m = (0, i.bG)([p.A], () => p.A.getGuild(e?.guild_id)),
        g = _ && t,
        E = !(n && !a) || g;
    return null != e && ((!!e.isNSFW() && !!E) || (null != m && !!(0, d.wh)(m) && !!E));
}
function H() {
    let e = h.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}
function Y() {
    let e = (0, u.d6)(r.t.COMMANDS_TOGGLE),
        t = (0, c.o)("age-gate-utils") || e,
        n = (0, l.p9)();
    return t && n;
}
function W() {
    let e = (0, u.aX)(r.t.COMMANDS_TOGGLE),
        t = (0, c.j)("age-gate-utils") || e,
        n = (0, l.i2)();
    return t && n;
}

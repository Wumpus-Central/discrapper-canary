"use strict";
n.d(t, {
    $v: () => U,
    Bc: () => S,
    Gc: () => P,
    Gn: () => O,
    Jm: () => k,
    Tv: () => M,
    UK: () => L,
    a9: () => C,
    k$: () => R,
    kK: () => x,
    p5: () => B,
    qR: () => G,
    r9: () => N,
    sP: () => H,
    vL: () => F,
    xq: () => y,
    zS: () => v,
});
var r = n(687123),
    i = n(311907),
    s = n(847599),
    a = n(36149),
    o = n(207560),
    l = n(260509),
    u = n(734057),
    c = n(517019),
    d = n(71393),
    _ = n(287809),
    f = n(975571),
    p = n(661191),
    h = n(612200),
    m = n(204925),
    E = n(652215),
    g = n(985018);
function A(e) {
    return {
        description: e ? g.intl.string(g.t.SAoMVJ) : g.intl.string(g.t.SxY4IW),
        agreement: e ? g.intl.string(g.t.Zt4Mf4) : g.intl.string(g.t.FDSSia),
    };
}
let I = new Date("06/16/2020"),
    T = [E.ftr.AGE_RESTRICTED, E.ftr.EXPLICIT],
    S = new Set([m.w_.NSFW_SERVER, m.w_.NSFW_SERVER_INVITE, m.w_.NSFW_SERVER_INVITE_EMBED]);
function y() {
    let e = _.default.getCurrentUser();
    return null != e && p.default.extractTimestamp(e.id) > I.getTime() && null == e.nsfwAllowed;
}
function v(e) {
    return T.includes(e.nsfwLevel);
}
function N() {
    let e = (0, a.p9)();
    return (0, o.d6)(r.t.AGE_GATED_SPACES) && e;
}
function C() {
    let e = (0, o.aX)(r.t.AGE_GATED_SPACES),
        t = (0, a.i2)();
    return e && t;
}
function R(e) {
    let t = (0, a.b8)(),
        n = (0, l.wh)(e),
        r = (0, i.bG)([_.default], () => _.default.getCurrentUser()?.nsfwAllowed === !1),
        o = C(),
        u = g.intl.string(n ? g.t.xi46lg : g.t.ZmwvDc);
    return o
        ? t
            ? {
                  title: u,
                  description: n ? g.intl.format(g.t["8tk6bB"], {}) : g.intl.format(g.t.XQZvwn, {}),
                  agreement: g.intl.string(g.t.Zt4Mf4),
                  modalType: s.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
            : {
                  title: u,
                  description: n ? g.intl.string(g.t.V6Gmu9) : g.intl.string(g.t["5rygLk"]),
                  agreement: g.intl.string(g.t.FDSSia),
                  modalType: s.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
        : r
          ? {
                title: g.intl.string(n ? g.t["H0SG/g"] : g.t.NEabBa),
                description: g.intl.format(n ? g.t["6++3cX"] : g.t["2kHZes"], {
                    helpURL: f.A.getArticleURL(E.MVz.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: s.A5.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: u,
                description: g.intl.string(n ? g.t.ZtuRts : g.t.E4Cd5I),
                agreement: g.intl.string(g.t.wVq7uo),
                modalType: s.A5.NSFW_CHANNEL_VERIFIED,
            };
}
function O(e) {
    let t = (0, a.b8)(),
        n = C(),
        r = e === m.w_.NSFW_SERVER || e === m.w_.NSFW_SERVER_INVITE || e === m.w_.NSFW_SERVER_INVITE_EMBED,
        s = (0, i.bG)([_.default], () => _.default.getCurrentUser()?.nsfwAllowed === !1);
    if (e === m.w_.JOIN_LARGE_GUILD_UNDERAGE || e === m.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === m.w_.JOIN_LARGE_GUILD_UNDERAGE ? g.t["u/xsK9"] : g.t.MjQbfi,
            r = A(t);
        return {
            verifyTitle: g.intl.string(n),
            verifyGateDescription: r.description,
            verifyAgreementButtonText: r.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: g.intl.string(g.t.Zt4Mf4),
              verifyGateDescription: r ? g.intl.format(g.t["8tk6bB"], {}) : g.intl.format(g.t.XQZvwn, {}),
              verifyTitle: r ? g.intl.string(g.t.xi46lg) : g.intl.string(g.t.ZmwvDc),
          }
        : e === m.w_.LARGE_GUILD
          ? {
                verifyTitle: g.intl.string(g.t["7ymzsL"]),
                verifyGateDescription: g.intl.string(g.t.SxY4IW),
                verifyAgreementButtonText: g.intl.string(g.t.FDSSia),
            }
          : s && r && !n
            ? {
                  verifyTitle: g.intl.string(g.t["H0SG/g"]),
                  verifyGateDescription: g.intl.format(g.t["6++3cX"], { helpURL: f.A.getArticleURL(E.MVz.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: g.intl.string(g.t.FDSSia),
                  verifyGateDescription: r ? g.intl.string(g.t.V6Gmu9) : g.intl.string(g.t["5rygLk"]),
                  verifyTitle: r ? g.intl.string(g.t.xi46lg) : g.intl.string(g.t.ZmwvDc),
              };
}
let b = () => {
        let e = _.default.getCurrentUser();
        if (null == e) return !1;
        let t = N();
        return !0 !== e.nsfwAllowed || t;
    },
    D = (e) => {
        if (!b() || null == e) return !1;
        let t = d.A.getGuild(e);
        return null != t && (0, l.wh)(t);
    },
    L = (e) => !!b() && null != e && G(u.A.getChannel(e)),
    w = (e) => N() && L(e),
    M = (e) => !!w(e) && ((0, h.yO)(m.w_.NSFW_VOICE_CHANNEL), !0);
function x(e, t, n) {
    if (D(e)) {
        let e = null != n && S.has(n) ? n : m.w_.NSFW_SERVER;
        (0, h.yO)(e);
        return;
    }
    if (V() && L(t)) return void (0, h.yO)(n ?? m.w_.NSFW_CHANNEL);
}
let P = (e) => null != e && (e.isNSFW() || (0, l.wh)(d.A.getGuild(e.guild_id))),
    k = (e) => {
        if (null == e) return !1;
        let t = (0, a.p9)();
        return P(e) && t;
    },
    U = (e) => {
        if (null == e) return !1;
        let t = _.default.getCurrentUser()?.nsfwAllowed === !0;
        return P(e) && !t;
    };
function G(e) {
    if (null == e) return !1;
    let t = c.A.didAgree(e.guild_id),
        n = _.default.getCurrentUser()?.nsfwAllowed === !1,
        i = (0, o.d6)(r.t.AGE_GATED_SPACES),
        s = (0, a.p9)(),
        u = !(t && !n) || (s && i);
    if (e.isNSFW() && u) return !0;
    let f = e.guild_id,
        p = d.A.getGuild(f);
    return null != p && (0, l.wh)(p) && u;
}
function F(e) {
    let t = (0, a.i2)(),
        n = (0, i.bG)([c.A], () => c.A.didAgree(e?.guild_id)),
        s = (0, i.bG)([_.default], () => _.default.getCurrentUser()?.nsfwAllowed === !1),
        u = (0, o.aX)(r.t.AGE_GATED_SPACES),
        f = (0, i.bG)([d.A], () => d.A.getGuild(e?.guild_id)),
        p = u && t,
        h = !(n && !s) || p;
    return null != e && ((!!e.isNSFW() && !!h) || (null != f && !!(0, l.wh)(f) && !!h));
}
function V() {
    let e = _.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}
function B() {
    let e = (0, o.d6)(r.t.COMMANDS_TOGGLE),
        t = (0, a.p9)();
    return e && t;
}
function H() {
    let e = (0, o.aX)(r.t.COMMANDS_TOGGLE),
        t = (0, a.i2)();
    return e && t;
}

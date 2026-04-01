"use strict";
n.d(t, {
    $v: () => G,
    Bc: () => y,
    Gc: () => k,
    Gn: () => b,
    Jm: () => U,
    Tv: () => x,
    UK: () => w,
    a9: () => R,
    k$: () => O,
    kK: () => P,
    ni: () => B,
    p5: () => j,
    qR: () => F,
    r9: () => C,
    sP: () => Y,
    vL: () => V,
    xq: () => v,
    zS: () => N,
});
var r = n(687123),
    i = n(311907),
    s = n(847599),
    a = n(36149),
    o = n(207560),
    l = n(288254),
    u = n(260509),
    c = n(734057),
    d = n(517019),
    _ = n(71393),
    f = n(287809),
    p = n(975571),
    h = n(661191),
    m = n(612200),
    E = n(204925),
    g = n(652215),
    A = n(985018);
function I(e) {
    return {
        description: e ? A.intl.string(A.t.SAoMVJ) : A.intl.string(A.t.SxY4IW),
        agreement: e ? A.intl.string(A.t.Zt4Mf4) : A.intl.string(A.t.FDSSia),
    };
}
let T = new Date("06/16/2020"),
    S = [g.ftr.AGE_RESTRICTED, g.ftr.EXPLICIT],
    y = new Set([E.w_.NSFW_SERVER, E.w_.NSFW_SERVER_INVITE, E.w_.NSFW_SERVER_INVITE_EMBED]);
function v() {
    let e = f.default.getCurrentUser();
    return null != e && h.default.extractTimestamp(e.id) > T.getTime() && null == e.nsfwAllowed;
}
function N(e) {
    return S.includes(e.nsfwLevel);
}
function C() {
    let e = (0, a.p9)();
    return (0, o.d6)(r.t.AGE_GATED_SPACES) && e;
}
function R() {
    let e = (0, o.aX)(r.t.AGE_GATED_SPACES),
        t = (0, a.i2)();
    return e && t;
}
function O(e) {
    let t = (0, a.b8)(),
        n = (0, u.wh)(e),
        r = (0, i.bG)([f.default], () => f.default.getCurrentUser()?.nsfwAllowed === !1),
        o = R(),
        l = A.intl.string(n ? A.t.xi46lg : A.t.ZmwvDc);
    return o
        ? t
            ? {
                  title: l,
                  description: n ? A.intl.format(A.t["8tk6bB"], {}) : A.intl.format(A.t.XQZvwn, {}),
                  agreement: A.intl.string(A.t.Zt4Mf4),
                  modalType: s.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
            : {
                  title: l,
                  description: n ? A.intl.string(A.t.V6Gmu9) : A.intl.string(A.t["5rygLk"]),
                  agreement: A.intl.string(A.t.FDSSia),
                  modalType: s.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
        : r
          ? {
                title: A.intl.string(n ? A.t["H0SG/g"] : A.t.NEabBa),
                description: A.intl.format(n ? A.t["6++3cX"] : A.t["2kHZes"], {
                    helpURL: p.A.getArticleURL(g.MVz.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: s.A5.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: l,
                description: A.intl.string(n ? A.t.ZtuRts : A.t.E4Cd5I),
                agreement: A.intl.string(A.t.wVq7uo),
                modalType: s.A5.NSFW_CHANNEL_VERIFIED,
            };
}
function b(e) {
    let t = (0, a.b8)(),
        n = R(),
        r = e === E.w_.NSFW_SERVER || e === E.w_.NSFW_SERVER_INVITE || e === E.w_.NSFW_SERVER_INVITE_EMBED,
        s = (0, i.bG)([f.default], () => f.default.getCurrentUser()?.nsfwAllowed === !1);
    if (e === E.w_.JOIN_LARGE_GUILD_UNDERAGE || e === E.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === E.w_.JOIN_LARGE_GUILD_UNDERAGE ? A.t["u/xsK9"] : A.t.MjQbfi,
            r = I(t);
        return {
            verifyTitle: A.intl.string(n),
            verifyGateDescription: r.description,
            verifyAgreementButtonText: r.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: A.intl.string(A.t.Zt4Mf4),
              verifyGateDescription: r ? A.intl.format(A.t["8tk6bB"], {}) : A.intl.format(A.t.XQZvwn, {}),
              verifyTitle: r ? A.intl.string(A.t.xi46lg) : A.intl.string(A.t.ZmwvDc),
          }
        : e === E.w_.LARGE_GUILD
          ? {
                verifyTitle: A.intl.string(A.t["7ymzsL"]),
                verifyGateDescription: A.intl.string(A.t.SxY4IW),
                verifyAgreementButtonText: A.intl.string(A.t.FDSSia),
            }
          : s && r && !n
            ? {
                  verifyTitle: A.intl.string(A.t["H0SG/g"]),
                  verifyGateDescription: A.intl.format(A.t["6++3cX"], { helpURL: p.A.getArticleURL(g.MVz.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: A.intl.string(A.t.FDSSia),
                  verifyGateDescription: r ? A.intl.string(A.t.V6Gmu9) : A.intl.string(A.t["5rygLk"]),
                  verifyTitle: r ? A.intl.string(A.t.xi46lg) : A.intl.string(A.t.ZmwvDc),
              };
}
let D = () => {
        let e = f.default.getCurrentUser();
        if (null == e) return !1;
        let t = C();
        return !0 !== e.nsfwAllowed || t;
    },
    L = (e) => {
        if (!D() || null == e) return !1;
        let t = _.A.getGuild(e);
        return null != t && (0, u.wh)(t);
    },
    w = (e) => !!D() && null != e && F(c.A.getChannel(e)),
    M = (e) => C() && w(e),
    x = (e) => !!M(e) && ((0, m.yO)(E.w_.NSFW_VOICE_CHANNEL), !0);
function P(e, t, n) {
    if (L(e)) {
        let e = null != n && y.has(n) ? n : E.w_.NSFW_SERVER;
        (0, m.yO)(e);
        return;
    }
    if (H() && w(t)) return void (0, m.yO)(n ?? E.w_.NSFW_CHANNEL);
}
let k = (e) => null != e && (e.isNSFW() || (0, u.wh)(_.A.getGuild(e.guild_id))),
    U = (e) => {
        if (null == e) return !1;
        let t = (0, a.p9)();
        return k(e) && t;
    },
    G = (e) => {
        if (null == e) return !1;
        let t = f.default.getCurrentUser()?.nsfwAllowed === !0;
        return k(e) && !t;
    };
function F(e) {
    if (null == e) return !1;
    let t = d.A.didAgree(e.guild_id),
        n = f.default.getCurrentUser()?.nsfwAllowed === !1,
        i = (0, o.d6)(r.t.AGE_GATED_SPACES),
        s = (0, a.p9)(),
        l = !(t && !n) || (s && i);
    if (e.isNSFW() && l) return !0;
    let c = e.guild_id,
        p = _.A.getGuild(c);
    return null != p && (0, u.wh)(p) && l;
}
function V(e) {
    let t = (0, a.i2)(),
        n = (0, i.bG)([d.A], () => d.A.didAgree(e?.guild_id)),
        s = (0, i.bG)([f.default], () => f.default.getCurrentUser()?.nsfwAllowed === !1),
        l = (0, o.aX)(r.t.AGE_GATED_SPACES),
        c = (0, i.bG)([_.A], () => _.A.getGuild(e?.guild_id)),
        p = l && t,
        h = !(n && !s) || p;
    return null != e && ((!!e.isNSFW() && !!h) || (null != c && !!(0, u.wh)(c) && !!h));
}
function B(e) {
    let t = V(e),
        n = (0, l.IL)(e);
    return t || n;
}
function H() {
    let e = f.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}
function j() {
    let e = (0, o.d6)(r.t.COMMANDS_TOGGLE),
        t = (0, a.p9)();
    return e && t;
}
function Y() {
    let e = (0, o.aX)(r.t.COMMANDS_TOGGLE),
        t = (0, a.i2)();
    return e && t;
}

"use strict";
n.d(t, {
    $v: () => G,
    Bc: () => S,
    F2: () => b,
    Gc: () => U,
    Gn: () => y,
    Jm: () => w,
    Tv: () => M,
    UK: () => v,
    a9: () => O,
    k$: () => L,
    kK: () => P,
    ni: () => F,
    p5: () => V,
    qR: () => x,
    r9: () => R,
    sP: () => B,
    vL: () => k,
    xq: () => N,
    zS: () => C,
});
var i = n(687123),
    r = n(17928),
    a = n(847599),
    s = n(931374),
    l = n(207560),
    o = n(288254),
    d = n(260509),
    c = n(734057),
    u = n(517019),
    _ = n(71393),
    E = n(287809),
    A = n(975571),
    h = n(935208),
    I = n(612200),
    f = n(204925),
    p = n(652215),
    T = n(375708);
let m = new Date("06/16/2020"),
    g = [p.ftr.AGE_RESTRICTED, p.ftr.EXPLICIT],
    S = new Set([f.w_.NSFW_SERVER, f.w_.NSFW_SERVER_INVITE, f.w_.NSFW_SERVER_INVITE_EMBED]);
function N() {
    let e = E.default.getCurrentUser();
    return null != e && h.default.extractTimestamp(e.id) > m.getTime() && null == e.nsfwAllowed;
}
function C(e) {
    return g.includes(e.nsfwLevel);
}
function R() {
    let e = (0, s.p9)();
    return (0, l.d6)(i.t.AGE_GATED_SPACES) && e;
}
function O() {
    let e = (0, l.aX)(i.t.AGE_GATED_SPACES),
        t = (0, s.i2)();
    return e && t;
}
function L(e) {
    let t = (0, s.b8)(),
        n = (0, d.wh)(e),
        i = (0, r.bG)([E.default], () => E.default.getCurrentUser()?.nsfwAllowed === !1),
        l = O(),
        o = T.intl.string(n ? T.t.xi46lg : T.t.ZmwvDc);
    return l
        ? t
            ? {
                  title: o,
                  description: n ? T.intl.format(T.t["8tk6bB"], {}) : T.intl.format(T.t.XQZvwn, {}),
                  agreement: T.intl.string(T.t.Zt4Mf4),
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
            : {
                  title: o,
                  description: n ? T.intl.string(T.t.V6Gmu9) : T.intl.string(T.t["5rygLk"]),
                  agreement: T.intl.string(T.t.FDSSia),
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
        : i
          ? {
                title: T.intl.string(n ? T.t["H0SG/g"] : T.t.NEabBa),
                description: T.intl.format(n ? T.t["6++3cX"] : T.t["2kHZes"], {
                    helpURL: A.A.getArticleURL(p.MVz.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: a.A5.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: o,
                description: T.intl.string(n ? T.t.ZtuRts : T.t.E4Cd5I),
                agreement: T.intl.string(T.t.wVq7uo),
                modalType: a.A5.NSFW_CHANNEL_VERIFIED,
            };
}
function y(e) {
    let t = (0, s.b8)(),
        n = O(),
        i = e === f.w_.NSFW_SERVER || e === f.w_.NSFW_SERVER_INVITE || e === f.w_.NSFW_SERVER_INVITE_EMBED,
        a = (0, r.bG)([E.default], () => E.default.getCurrentUser()?.nsfwAllowed === !1);
    if (e === f.w_.JOIN_LARGE_GUILD_UNDERAGE || e === f.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === f.w_.JOIN_LARGE_GUILD_UNDERAGE ? T.t["u/xsK9"] : T.t.MjQbfi,
            i = {
                description: t ? T.intl.string(T.t.SAoMVJ) : T.intl.string(T.t.SxY4IW),
                agreement: t ? T.intl.string(T.t.Zt4Mf4) : T.intl.string(T.t.FDSSia),
            };
        return {
            verifyTitle: T.intl.string(n),
            verifyGateDescription: i.description,
            verifyAgreementButtonText: i.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: T.intl.string(T.t.Zt4Mf4),
              verifyGateDescription: i ? T.intl.format(T.t["8tk6bB"], {}) : T.intl.format(T.t.XQZvwn, {}),
              verifyTitle: i ? T.intl.string(T.t.xi46lg) : T.intl.string(T.t.ZmwvDc),
          }
        : e === f.w_.LARGE_GUILD
          ? {
                verifyTitle: T.intl.string(T.t["7ymzsL"]),
                verifyGateDescription: T.intl.string(T.t.SxY4IW),
                verifyAgreementButtonText: T.intl.string(T.t.FDSSia),
            }
          : a && i && !n
            ? {
                  verifyTitle: T.intl.string(T.t["H0SG/g"]),
                  verifyGateDescription: T.intl.format(T.t["6++3cX"], { helpURL: A.A.getArticleURL(p.MVz.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: T.intl.string(T.t.FDSSia),
                  verifyGateDescription: i ? T.intl.string(T.t.V6Gmu9) : T.intl.string(T.t["5rygLk"]),
                  verifyTitle: i ? T.intl.string(T.t.xi46lg) : T.intl.string(T.t.ZmwvDc),
              };
}
function D() {
    let e = E.default.getCurrentUser();
    if (null == e) return !1;
    let t = R();
    return !0 !== e.nsfwAllowed || t;
}
function v(e) {
    return !!D() && null != e && x(c.A.getChannel(e));
}
function b(e) {
    return R() && v(e);
}
function M(e) {
    return !!b(e) && ((0, I.yO)(f.w_.NSFW_VOICE_CHANNEL), !0);
}
function P(e, t, n) {
    let i;
    if (
        (function (e) {
            if (!D() || null == e) return !1;
            let t = _.A.getGuild(e);
            return null != t && (0, d.wh)(t);
        })(e)
    ) {
        let e = null != n && S.has(n) ? n : f.w_.NSFW_SERVER;
        (0, I.yO)(e);
        return;
    }
    if (null != (i = E.default.getCurrentUser()) && null == i.nsfwAllowed && v(t))
        return void (0, I.yO)(n ?? f.w_.NSFW_CHANNEL);
}
function U(e) {
    return null != e && (e.isNSFW() || (0, d.wh)(_.A.getGuild(e.guild_id)));
}
function w(e) {
    if (null == e) return !1;
    let t = (0, s.p9)();
    return U(e) && t;
}
function G(e) {
    if (null == e) return !1;
    let t = E.default.getCurrentUser()?.nsfwAllowed === !0;
    return U(e) && !t;
}
function x(e) {
    if (null == e) return !1;
    let t = u.A.didAgree(e.guild_id),
        n = E.default.getCurrentUser()?.nsfwAllowed === !1,
        r = (0, l.d6)(i.t.AGE_GATED_SPACES),
        a = (0, s.p9)(),
        o = !(t && !n) || (a && r);
    if (e.isNSFW() && o) return !0;
    let c = e.guild_id,
        A = _.A.getGuild(c);
    return null != A && (0, d.wh)(A) && o;
}
function k(e) {
    let t = (0, s.i2)(),
        n = (0, r.bG)([u.A], () => u.A.didAgree(e?.guild_id)),
        a = (0, r.bG)([E.default], () => E.default.getCurrentUser()?.nsfwAllowed === !1),
        o = (0, l.aX)(i.t.AGE_GATED_SPACES),
        c = (0, r.bG)([_.A], () => _.A.getGuild(e?.guild_id)),
        A = !(n && !a) || (o && t);
    return null != e && ((!!e.isNSFW() && !!A) || (null != c && !!(0, d.wh)(c) && !!A));
}
function F(e) {
    let t = k(e),
        n = (0, o.IL)(e);
    return t || n;
}
function V() {
    let e = (0, l.d6)(i.t.COMMANDS_TOGGLE),
        t = (0, s.p9)();
    return e && t;
}
function B() {
    let e = (0, l.aX)(i.t.COMMANDS_TOGGLE),
        t = (0, s.i2)();
    return e && t;
}

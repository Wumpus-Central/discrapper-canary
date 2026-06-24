"use strict";
n.d(t, {
    $v: () => x,
    Bc: () => S,
    Gc: () => M,
    Gn: () => O,
    Jm: () => P,
    Tv: () => L,
    UK: () => D,
    a9: () => v,
    k$: () => R,
    kK: () => w,
    ni: () => G,
    p5: () => F,
    qR: () => k,
    r9: () => N,
    sP: () => V,
    vL: () => U,
    xq: () => y,
    zS: () => C,
});
var i = n(687123),
    r = n(17928),
    s = n(847599),
    a = n(36149),
    o = n(207560),
    l = n(288254),
    u = n(260509),
    c = n(734057),
    d = n(517019),
    _ = n(71393),
    h = n(287809),
    f = n(975571),
    p = n(935208),
    E = n(612200),
    m = n(204925),
    g = n(652215),
    A = n(375708);
let I = new Date("06/16/2020"),
    T = [g.ftr.AGE_RESTRICTED, g.ftr.EXPLICIT],
    S = new Set([m.w_.NSFW_SERVER, m.w_.NSFW_SERVER_INVITE, m.w_.NSFW_SERVER_INVITE_EMBED]);
function y() {
    let e = h.default.getCurrentUser();
    return null != e && p.default.extractTimestamp(e.id) > I.getTime() && null == e.nsfwAllowed;
}
function C(e) {
    return T.includes(e.nsfwLevel);
}
function N() {
    let e = (0, a.p9)();
    return (0, o.d6)(i.t.AGE_GATED_SPACES) && e;
}
function v() {
    let e = (0, o.aX)(i.t.AGE_GATED_SPACES),
        t = (0, a.i2)();
    return e && t;
}
function R(e) {
    let t = (0, a.b8)(),
        n = (0, u.wh)(e),
        i = (0, r.bG)([h.default], () => h.default.getCurrentUser()?.nsfwAllowed === !1),
        o = v(),
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
        : i
          ? {
                title: A.intl.string(n ? A.t["H0SG/g"] : A.t.NEabBa),
                description: A.intl.format(n ? A.t["6++3cX"] : A.t["2kHZes"], {
                    helpURL: f.A.getArticleURL(g.MVz.NSFW_AGE_GATING),
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
function O(e) {
    let t = (0, a.b8)(),
        n = v(),
        i = e === m.w_.NSFW_SERVER || e === m.w_.NSFW_SERVER_INVITE || e === m.w_.NSFW_SERVER_INVITE_EMBED,
        s = (0, r.bG)([h.default], () => h.default.getCurrentUser()?.nsfwAllowed === !1);
    if (e === m.w_.JOIN_LARGE_GUILD_UNDERAGE || e === m.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === m.w_.JOIN_LARGE_GUILD_UNDERAGE ? A.t["u/xsK9"] : A.t.MjQbfi,
            i = {
                description: t ? A.intl.string(A.t.SAoMVJ) : A.intl.string(A.t.SxY4IW),
                agreement: t ? A.intl.string(A.t.Zt4Mf4) : A.intl.string(A.t.FDSSia),
            };
        return {
            verifyTitle: A.intl.string(n),
            verifyGateDescription: i.description,
            verifyAgreementButtonText: i.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: A.intl.string(A.t.Zt4Mf4),
              verifyGateDescription: i ? A.intl.format(A.t["8tk6bB"], {}) : A.intl.format(A.t.XQZvwn, {}),
              verifyTitle: i ? A.intl.string(A.t.xi46lg) : A.intl.string(A.t.ZmwvDc),
          }
        : e === m.w_.LARGE_GUILD
          ? {
                verifyTitle: A.intl.string(A.t["7ymzsL"]),
                verifyGateDescription: A.intl.string(A.t.SxY4IW),
                verifyAgreementButtonText: A.intl.string(A.t.FDSSia),
            }
          : s && i && !n
            ? {
                  verifyTitle: A.intl.string(A.t["H0SG/g"]),
                  verifyGateDescription: A.intl.format(A.t["6++3cX"], { helpURL: f.A.getArticleURL(g.MVz.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: A.intl.string(A.t.FDSSia),
                  verifyGateDescription: i ? A.intl.string(A.t.V6Gmu9) : A.intl.string(A.t["5rygLk"]),
                  verifyTitle: i ? A.intl.string(A.t.xi46lg) : A.intl.string(A.t.ZmwvDc),
              };
}
function b() {
    let e = h.default.getCurrentUser();
    if (null == e) return !1;
    let t = N();
    return !0 !== e.nsfwAllowed || t;
}
function D(e) {
    return !!b() && null != e && k(c.A.getChannel(e));
}
function L(e) {
    return !!(N() && D(e)) && ((0, E.yO)(m.w_.NSFW_VOICE_CHANNEL), !0);
}
function w(e, t, n) {
    let i;
    if (
        (function (e) {
            if (!b() || null == e) return !1;
            let t = _.A.getGuild(e);
            return null != t && (0, u.wh)(t);
        })(e)
    ) {
        let e = null != n && S.has(n) ? n : m.w_.NSFW_SERVER;
        (0, E.yO)(e);
        return;
    }
    if (null != (i = h.default.getCurrentUser()) && null == i.nsfwAllowed && D(t))
        return void (0, E.yO)(n ?? m.w_.NSFW_CHANNEL);
}
function M(e) {
    return null != e && (e.isNSFW() || (0, u.wh)(_.A.getGuild(e.guild_id)));
}
function P(e) {
    if (null == e) return !1;
    let t = (0, a.p9)();
    return M(e) && t;
}
function x(e) {
    if (null == e) return !1;
    let t = h.default.getCurrentUser()?.nsfwAllowed === !0;
    return M(e) && !t;
}
function k(e) {
    if (null == e) return !1;
    let t = d.A.didAgree(e.guild_id),
        n = h.default.getCurrentUser()?.nsfwAllowed === !1,
        r = (0, o.d6)(i.t.AGE_GATED_SPACES),
        s = (0, a.p9)(),
        l = !(t && !n) || (s && r);
    if (e.isNSFW() && l) return !0;
    let c = e.guild_id,
        f = _.A.getGuild(c);
    return null != f && (0, u.wh)(f) && l;
}
function U(e) {
    let t = (0, a.i2)(),
        n = (0, r.bG)([d.A], () => d.A.didAgree(e?.guild_id)),
        s = (0, r.bG)([h.default], () => h.default.getCurrentUser()?.nsfwAllowed === !1),
        l = (0, o.aX)(i.t.AGE_GATED_SPACES),
        c = (0, r.bG)([_.A], () => _.A.getGuild(e?.guild_id)),
        f = !(n && !s) || (l && t);
    return null != e && ((!!e.isNSFW() && !!f) || (null != c && !!(0, u.wh)(c) && !!f));
}
function G(e) {
    let t = U(e),
        n = (0, l.IL)(e);
    return t || n;
}
function F() {
    let e = (0, o.d6)(i.t.COMMANDS_TOGGLE),
        t = (0, a.p9)();
    return e && t;
}
function V() {
    let e = (0, o.aX)(i.t.COMMANDS_TOGGLE),
        t = (0, a.i2)();
    return e && t;
}

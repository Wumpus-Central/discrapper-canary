"use strict";
n.d(t, {
    $v: () => U,
    Bc: () => S,
    Gc: () => M,
    Gn: () => C,
    Jm: () => P,
    Tv: () => L,
    UK: () => D,
    a9: () => R,
    k$: () => v,
    kK: () => w,
    ni: () => G,
    p5: () => V,
    qR: () => k,
    r9: () => O,
    sP: () => F,
    vL: () => x,
    xq: () => y,
    zS: () => N,
});
var r = n(687123),
    i = n(311907),
    s = n(847599),
    a = n(36149),
    o = n(207560),
    l = n(288254),
    u = n(260509),
    d = n(734057),
    c = n(517019),
    _ = n(71393),
    f = n(287809),
    E = n(975571),
    h = n(661191),
    p = n(612200),
    m = n(204925),
    g = n(652215),
    A = n(985018);
let I = new Date("06/16/2020"),
    T = [g.ftr.AGE_RESTRICTED, g.ftr.EXPLICIT],
    S = new Set([m.w_.NSFW_SERVER, m.w_.NSFW_SERVER_INVITE, m.w_.NSFW_SERVER_INVITE_EMBED]);
function y() {
    let e = f.default.getCurrentUser();
    return null != e && h.default.extractTimestamp(e.id) > I.getTime() && null == e.nsfwAllowed;
}
function N(e) {
    return T.includes(e.nsfwLevel);
}
function O() {
    let e = (0, a.p9)();
    return (0, o.d6)(r.t.AGE_GATED_SPACES) && e;
}
function R() {
    let e = (0, o.aX)(r.t.AGE_GATED_SPACES),
        t = (0, a.i2)();
    return e && t;
}
function v(e) {
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
                    helpURL: E.A.getArticleURL(g.MVz.NSFW_AGE_GATING),
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
function C(e) {
    let t = (0, a.b8)(),
        n = R(),
        r = e === m.w_.NSFW_SERVER || e === m.w_.NSFW_SERVER_INVITE || e === m.w_.NSFW_SERVER_INVITE_EMBED,
        s = (0, i.bG)([f.default], () => f.default.getCurrentUser()?.nsfwAllowed === !1);
    if (e === m.w_.JOIN_LARGE_GUILD_UNDERAGE || e === m.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === m.w_.JOIN_LARGE_GUILD_UNDERAGE ? A.t["u/xsK9"] : A.t.MjQbfi,
            r = {
                description: t ? A.intl.string(A.t.SAoMVJ) : A.intl.string(A.t.SxY4IW),
                agreement: t ? A.intl.string(A.t.Zt4Mf4) : A.intl.string(A.t.FDSSia),
            };
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
        : e === m.w_.LARGE_GUILD
          ? {
                verifyTitle: A.intl.string(A.t["7ymzsL"]),
                verifyGateDescription: A.intl.string(A.t.SxY4IW),
                verifyAgreementButtonText: A.intl.string(A.t.FDSSia),
            }
          : s && r && !n
            ? {
                  verifyTitle: A.intl.string(A.t["H0SG/g"]),
                  verifyGateDescription: A.intl.format(A.t["6++3cX"], { helpURL: E.A.getArticleURL(g.MVz.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: A.intl.string(A.t.FDSSia),
                  verifyGateDescription: r ? A.intl.string(A.t.V6Gmu9) : A.intl.string(A.t["5rygLk"]),
                  verifyTitle: r ? A.intl.string(A.t.xi46lg) : A.intl.string(A.t.ZmwvDc),
              };
}
let b = () => {
        let e = f.default.getCurrentUser();
        if (null == e) return !1;
        let t = O();
        return !0 !== e.nsfwAllowed || t;
    },
    D = (e) => !!b() && null != e && k(d.A.getChannel(e)),
    L = (e) => !!(O() && D(e)) && ((0, p.yO)(m.w_.NSFW_VOICE_CHANNEL), !0);
function w(e, t, n) {
    let r;
    if (
        ((e) => {
            if (!b() || null == e) return !1;
            let t = _.A.getGuild(e);
            return null != t && (0, u.wh)(t);
        })(e)
    ) {
        let e = null != n && S.has(n) ? n : m.w_.NSFW_SERVER;
        (0, p.yO)(e);
        return;
    }
    if (null != (r = f.default.getCurrentUser()) && null == r.nsfwAllowed && D(t))
        return void (0, p.yO)(n ?? m.w_.NSFW_CHANNEL);
}
let M = (e) => null != e && (e.isNSFW() || (0, u.wh)(_.A.getGuild(e.guild_id))),
    P = (e) => {
        if (null == e) return !1;
        let t = (0, a.p9)();
        return M(e) && t;
    },
    U = (e) => {
        if (null == e) return !1;
        let t = f.default.getCurrentUser()?.nsfwAllowed === !0;
        return M(e) && !t;
    };
function k(e) {
    if (null == e) return !1;
    let t = c.A.didAgree(e.guild_id),
        n = f.default.getCurrentUser()?.nsfwAllowed === !1,
        i = (0, o.d6)(r.t.AGE_GATED_SPACES),
        s = (0, a.p9)(),
        l = !(t && !n) || (s && i);
    if (e.isNSFW() && l) return !0;
    let d = e.guild_id,
        E = _.A.getGuild(d);
    return null != E && (0, u.wh)(E) && l;
}
function x(e) {
    let t = (0, a.i2)(),
        n = (0, i.bG)([c.A], () => c.A.didAgree(e?.guild_id)),
        s = (0, i.bG)([f.default], () => f.default.getCurrentUser()?.nsfwAllowed === !1),
        l = (0, o.aX)(r.t.AGE_GATED_SPACES),
        d = (0, i.bG)([_.A], () => _.A.getGuild(e?.guild_id)),
        E = !(n && !s) || (l && t);
    return null != e && ((!!e.isNSFW() && !!E) || (null != d && !!(0, u.wh)(d) && !!E));
}
function G(e) {
    let t = x(e),
        n = (0, l.IL)(e);
    return t || n;
}
function V() {
    let e = (0, o.d6)(r.t.COMMANDS_TOGGLE),
        t = (0, a.p9)();
    return e && t;
}
function F() {
    let e = (0, o.aX)(r.t.COMMANDS_TOGGLE),
        t = (0, a.i2)();
    return e && t;
}

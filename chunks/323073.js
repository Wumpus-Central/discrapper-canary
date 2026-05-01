n.d(t, {
    $v: () => G,
    Bc: () => m,
    Gc: () => v,
    Gn: () => D,
    Jm: () => y,
    Tv: () => P,
    UK: () => M,
    a9: () => g,
    k$: () => L,
    kK: () => U,
    ni: () => V,
    p5: () => B,
    qR: () => w,
    r9: () => R,
    sP: () => F,
    vL: () => x,
    xq: () => O,
    zS: () => C,
});
var i = n(687123),
    a = n(17928),
    r = n(847599),
    s = n(36149),
    l = n(207560),
    o = n(288254),
    d = n(260509),
    c = n(734057),
    _ = n(517019),
    E = n(71393),
    u = n(287809),
    A = n(975571),
    I = n(935208),
    T = n(612200),
    h = n(204925),
    S = n(652215),
    N = n(985018);
let f = new Date("06/16/2020"),
    p = [S.ftr.AGE_RESTRICTED, S.ftr.EXPLICIT],
    m = new Set([h.w_.NSFW_SERVER, h.w_.NSFW_SERVER_INVITE, h.w_.NSFW_SERVER_INVITE_EMBED]);
function O() {
    let e = u.default.getCurrentUser();
    return null != e && I.default.extractTimestamp(e.id) > f.getTime() && null == e.nsfwAllowed;
}
function C(e) {
    return p.includes(e.nsfwLevel);
}
function R() {
    let e = (0, s.p9)();
    return (0, l.d6)(i.t.AGE_GATED_SPACES) && e;
}
function g() {
    let e = (0, l.aX)(i.t.AGE_GATED_SPACES),
        t = (0, s.i2)();
    return e && t;
}
function L(e) {
    let t = (0, s.b8)(),
        n = (0, d.wh)(e),
        i = (0, a.bG)([u.default], () => u.default.getCurrentUser()?.nsfwAllowed === !1),
        l = g(),
        o = N.intl.string(n ? N.t.xi46lg : N.t.ZmwvDc);
    return l
        ? t
            ? {
                  title: o,
                  description: n ? N.intl.format(N.t["8tk6bB"], {}) : N.intl.format(N.t.XQZvwn, {}),
                  agreement: N.intl.string(N.t.Zt4Mf4),
                  modalType: r.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
            : {
                  title: o,
                  description: n ? N.intl.string(N.t.V6Gmu9) : N.intl.string(N.t["5rygLk"]),
                  agreement: N.intl.string(N.t.FDSSia),
                  modalType: r.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
        : i
          ? {
                title: N.intl.string(n ? N.t["H0SG/g"] : N.t.NEabBa),
                description: N.intl.format(n ? N.t["6++3cX"] : N.t["2kHZes"], {
                    helpURL: A.A.getArticleURL(S.MVz.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: r.A5.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: o,
                description: N.intl.string(n ? N.t.ZtuRts : N.t.E4Cd5I),
                agreement: N.intl.string(N.t.wVq7uo),
                modalType: r.A5.NSFW_CHANNEL_VERIFIED,
            };
}
function D(e) {
    let t = (0, s.b8)(),
        n = g(),
        i = e === h.w_.NSFW_SERVER || e === h.w_.NSFW_SERVER_INVITE || e === h.w_.NSFW_SERVER_INVITE_EMBED,
        r = (0, a.bG)([u.default], () => u.default.getCurrentUser()?.nsfwAllowed === !1);
    if (e === h.w_.JOIN_LARGE_GUILD_UNDERAGE || e === h.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === h.w_.JOIN_LARGE_GUILD_UNDERAGE ? N.t["u/xsK9"] : N.t.MjQbfi,
            i = {
                description: t ? N.intl.string(N.t.SAoMVJ) : N.intl.string(N.t.SxY4IW),
                agreement: t ? N.intl.string(N.t.Zt4Mf4) : N.intl.string(N.t.FDSSia),
            };
        return {
            verifyTitle: N.intl.string(n),
            verifyGateDescription: i.description,
            verifyAgreementButtonText: i.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: N.intl.string(N.t.Zt4Mf4),
              verifyGateDescription: i ? N.intl.format(N.t["8tk6bB"], {}) : N.intl.format(N.t.XQZvwn, {}),
              verifyTitle: i ? N.intl.string(N.t.xi46lg) : N.intl.string(N.t.ZmwvDc),
          }
        : e === h.w_.LARGE_GUILD
          ? {
                verifyTitle: N.intl.string(N.t["7ymzsL"]),
                verifyGateDescription: N.intl.string(N.t.SxY4IW),
                verifyAgreementButtonText: N.intl.string(N.t.FDSSia),
            }
          : r && i && !n
            ? {
                  verifyTitle: N.intl.string(N.t["H0SG/g"]),
                  verifyGateDescription: N.intl.format(N.t["6++3cX"], { helpURL: A.A.getArticleURL(S.MVz.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: N.intl.string(N.t.FDSSia),
                  verifyGateDescription: i ? N.intl.string(N.t.V6Gmu9) : N.intl.string(N.t["5rygLk"]),
                  verifyTitle: i ? N.intl.string(N.t.xi46lg) : N.intl.string(N.t.ZmwvDc),
              };
}
let b = () => {
        let e = u.default.getCurrentUser();
        if (null == e) return !1;
        let t = R();
        return !0 !== e.nsfwAllowed || t;
    },
    M = (e) => !!b() && null != e && w(c.A.getChannel(e)),
    P = (e) => !!(R() && M(e)) && ((0, T.yO)(h.w_.NSFW_VOICE_CHANNEL), !0);
function U(e, t, n) {
    let i;
    if (
        ((e) => {
            if (!b() || null == e) return !1;
            let t = E.A.getGuild(e);
            return null != t && (0, d.wh)(t);
        })(e)
    ) {
        let e = null != n && m.has(n) ? n : h.w_.NSFW_SERVER;
        (0, T.yO)(e);
        return;
    }
    if (null != (i = u.default.getCurrentUser()) && null == i.nsfwAllowed && M(t))
        return void (0, T.yO)(n ?? h.w_.NSFW_CHANNEL);
}
let v = (e) => null != e && (e.isNSFW() || (0, d.wh)(E.A.getGuild(e.guild_id))),
    y = (e) => {
        if (null == e) return !1;
        let t = (0, s.p9)();
        return v(e) && t;
    },
    G = (e) => {
        if (null == e) return !1;
        let t = u.default.getCurrentUser()?.nsfwAllowed === !0;
        return v(e) && !t;
    };
function w(e) {
    if (null == e) return !1;
    let t = _.A.didAgree(e.guild_id),
        n = u.default.getCurrentUser()?.nsfwAllowed === !1,
        a = (0, l.d6)(i.t.AGE_GATED_SPACES),
        r = (0, s.p9)(),
        o = !(t && !n) || (r && a);
    if (e.isNSFW() && o) return !0;
    let c = e.guild_id,
        A = E.A.getGuild(c);
    return null != A && (0, d.wh)(A) && o;
}
function x(e) {
    let t = (0, s.i2)(),
        n = (0, a.bG)([_.A], () => _.A.didAgree(e?.guild_id)),
        r = (0, a.bG)([u.default], () => u.default.getCurrentUser()?.nsfwAllowed === !1),
        o = (0, l.aX)(i.t.AGE_GATED_SPACES),
        c = (0, a.bG)([E.A], () => E.A.getGuild(e?.guild_id)),
        A = !(n && !r) || (o && t);
    return null != e && ((!!e.isNSFW() && !!A) || (null != c && !!(0, d.wh)(c) && !!A));
}
function V(e) {
    let t = x(e),
        n = (0, o.IL)(e);
    return t || n;
}
function B() {
    let e = (0, l.d6)(i.t.COMMANDS_TOGGLE),
        t = (0, s.p9)();
    return e && t;
}
function F() {
    let e = (0, l.aX)(i.t.COMMANDS_TOGGLE),
        t = (0, s.i2)();
    return e && t;
}

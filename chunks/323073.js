n.d(t, {
    $v: () => x,
    Bc: () => N,
    F2: () => M,
    Gc: () => w,
    Gn: () => D,
    Jm: () => G,
    Tv: () => P,
    UK: () => b,
    a9: () => L,
    k$: () => y,
    kK: () => U,
    ni: () => B,
    p5: () => V,
    qR: () => k,
    r9: () => R,
    sP: () => H,
    vL: () => F,
    xq: () => C,
    zS: () => O,
});
var i = n(687123),
    r = n(17928),
    a = n(306537),
    s = n(36149),
    l = n(207560),
    o = n(288254),
    d = n(272767),
    c = n(260509),
    u = n(734057),
    _ = n(517019),
    E = n(71393),
    A = n(287809),
    h = n(975571),
    I = n(935208),
    f = n(612200),
    p = n(204925),
    T = n(652215),
    g = n(375708);
let m = new Date("06/16/2020"),
    S = [T.ftr.AGE_RESTRICTED, T.ftr.EXPLICIT],
    N = new Set([p.w_.NSFW_SERVER, p.w_.NSFW_SERVER_INVITE, p.w_.NSFW_SERVER_INVITE_EMBED]);
function C() {
    let e = A.default.getCurrentUser();
    return null != e && I.default.extractTimestamp(e.id) > m.getTime() && null == e.nsfwAllowed;
}
function O(e) {
    return S.includes(e.nsfwLevel);
}
function R() {
    let e = (0, s.p9)();
    return (0, l.d6)(i.t.AGE_GATED_SPACES) && e;
}
function L() {
    let e = (0, l.aX)(i.t.AGE_GATED_SPACES),
        t = (0, s.i2)();
    return e && t;
}
function y(e) {
    let t = (0, s.b8)(),
        n = (0, c.wh)(e),
        o = (0, r.bG)([A.default], () => A.default.getCurrentUser()?.nsfwAllowed === !1),
        u = L(),
        _ = (function (e) {
            if (!(0, l.aX)(i.t.AGE_GATED_SPACES)) return null;
            let t = (0, c.wh)(e),
                n = e?.name ?? "";
            return t || "" !== n ? (0, d.f)(t, n) : null;
        })(e),
        E = {
            adult: g.intl.string(n ? g.t.ZtuRts : g.t.E4Cd5I),
            teen: n ? g.intl.format(g.t["8tk6bB"], {}) : g.intl.format(g.t.XQZvwn, {}),
            unverified: n ? g.intl.string(g.t.V6Gmu9) : g.intl.string(g.t["5rygLk"]),
        },
        I = g.intl.string(n ? g.t.xi46lg : g.t.ZmwvDc);
    return u
        ? t
            ? {
                  title: I,
                  description: _?.teen ?? E.teen,
                  agreement: g.intl.string(null != _ ? g.t.FDSSia : g.t.Zt4Mf4),
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
                  emphasiseDisagree: null != _,
              }
            : {
                  title: I,
                  description: _?.unverified ?? E.unverified,
                  agreement: g.intl.string(g.t.FDSSia),
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
        : o
          ? {
                title: g.intl.string(n ? g.t["H0SG/g"] : g.t.NEabBa),
                description: g.intl.format(n ? g.t["6++3cX"] : g.t["2kHZes"], {
                    helpURL: h.A.getArticleURL(T.MVz.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: a.A5.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: I,
                description: _?.adult ?? E.adult,
                agreement: g.intl.string(g.t.wVq7uo),
                modalType: a.A5.NSFW_CHANNEL_VERIFIED,
            };
}
function D(e) {
    let t = (0, s.b8)(),
        n = L(),
        a = e === p.w_.NSFW_SERVER || e === p.w_.NSFW_SERVER_INVITE || e === p.w_.NSFW_SERVER_INVITE_EMBED,
        o = (0, r.bG)([A.default], () => A.default.getCurrentUser()?.nsfwAllowed === !1),
        c = (0, l.aX)(i.t.AGE_GATED_SPACES) && a ? (0, d.f)(!0, "") : null;
    if (e === p.w_.JOIN_LARGE_GUILD_UNDERAGE || e === p.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === p.w_.JOIN_LARGE_GUILD_UNDERAGE ? g.t["u/xsK9"] : g.t.MjQbfi,
            i = {
                description: t ? g.intl.string(g.t.SAoMVJ) : g.intl.string(g.t.SxY4IW),
                agreement: t ? g.intl.string(g.t.Zt4Mf4) : g.intl.string(g.t.FDSSia),
            };
        return {
            verifyTitle: g.intl.string(n),
            verifyGateDescription: i.description,
            verifyAgreementButtonText: i.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: g.intl.string(null != c ? g.t.FDSSia : g.t.Zt4Mf4),
              verifyGateDescription: c?.teen ?? (a ? g.intl.format(g.t["8tk6bB"], {}) : g.intl.format(g.t.XQZvwn, {})),
              verifyTitle: a ? g.intl.string(g.t.xi46lg) : g.intl.string(g.t.ZmwvDc),
              verifyDisagreementButtonText: g.intl.string(null != c ? g.t["/g10LC"] : g.t.f3Pet9),
              verifyEmphasiseDisagree: null != c,
          }
        : e === p.w_.LARGE_GUILD
          ? {
                verifyTitle: g.intl.string(g.t["7ymzsL"]),
                verifyGateDescription: g.intl.string(g.t.SxY4IW),
                verifyAgreementButtonText: g.intl.string(g.t.FDSSia),
            }
          : o && a && !n
            ? {
                  verifyTitle: g.intl.string(g.t["H0SG/g"]),
                  verifyGateDescription: g.intl.format(g.t["6++3cX"], { helpURL: h.A.getArticleURL(T.MVz.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: g.intl.string(g.t.FDSSia),
                  verifyGateDescription:
                      c?.unverified ?? (a ? g.intl.string(g.t.V6Gmu9) : g.intl.string(g.t["5rygLk"])),
                  verifyTitle: a ? g.intl.string(g.t.xi46lg) : g.intl.string(g.t.ZmwvDc),
                  verifyDisagreementButtonText: g.intl.string(null != c ? g.t["/g10LC"] : g.t.f3Pet9),
              };
}
function v() {
    let e = A.default.getCurrentUser();
    if (null == e) return !1;
    let t = R();
    return !0 !== e.nsfwAllowed || t;
}
function b(e) {
    return !!v() && null != e && k(u.A.getChannel(e));
}
function M(e) {
    return R() && b(e);
}
function P(e) {
    return !!M(e) && ((0, f.yO)(p.w_.NSFW_VOICE_CHANNEL), !0);
}
function U(e, t, n) {
    let i;
    if (
        (function (e) {
            if (!v() || null == e) return !1;
            let t = E.A.getGuild(e);
            return null != t && (0, c.wh)(t);
        })(e)
    ) {
        let e = null != n && N.has(n) ? n : p.w_.NSFW_SERVER;
        (0, f.yO)(e);
        return;
    }
    if (null != (i = A.default.getCurrentUser()) && null == i.nsfwAllowed && b(t))
        return void (0, f.yO)(n ?? p.w_.NSFW_CHANNEL);
}
function w(e) {
    return null != e && (e.isNSFW() || (0, c.wh)(E.A.getGuild(e.guild_id)));
}
function G(e) {
    if (null == e) return !1;
    let t = (0, s.p9)();
    return w(e) && t;
}
function x(e) {
    if (null == e) return !1;
    let t = A.default.getCurrentUser()?.nsfwAllowed === !0;
    return w(e) && !t;
}
function k(e) {
    if (null == e) return !1;
    let t = _.A.didAgree(e.guild_id),
        n = A.default.getCurrentUser()?.nsfwAllowed === !1,
        r = (0, l.d6)(i.t.AGE_GATED_SPACES),
        a = (0, s.p9)(),
        o = !(t && !n) || (a && r);
    if (e.isNSFW() && o) return !0;
    let d = e.guild_id,
        u = E.A.getGuild(d);
    return null != u && (0, c.wh)(u) && o;
}
function F(e) {
    let t = (0, s.i2)(),
        n = (0, r.bG)([_.A], () => _.A.didAgree(e?.guild_id)),
        a = (0, r.bG)([A.default], () => A.default.getCurrentUser()?.nsfwAllowed === !1),
        o = (0, l.aX)(i.t.AGE_GATED_SPACES),
        d = (0, r.bG)([E.A], () => E.A.getGuild(e?.guild_id)),
        u = !(n && !a) || (o && t);
    return null != e && ((!!e.isNSFW() && !!u) || (null != d && !!(0, c.wh)(d) && !!u));
}
function B(e) {
    let t = F(e),
        n = (0, o.IL)(e);
    return t || n;
}
function V() {
    let e = (0, l.d6)(i.t.COMMANDS_TOGGLE),
        t = (0, s.p9)();
    return e && t;
}
function H() {
    let e = (0, l.aX)(i.t.COMMANDS_TOGGLE),
        t = (0, s.i2)();
    return e && t;
}

n.d(t, {
    $v: () => p.$v,
    Bc: () => O,
    F2: () => M,
    Gc: () => p.Gc,
    Gn: () => D,
    Jm: () => w,
    Tv: () => P,
    UK: () => b,
    k$: () => y,
    kK: () => U,
    ni: () => k,
    p5: () => F,
    qR: () => G,
    sP: () => B,
    vL: () => x,
    xq: () => R,
    zS: () => L,
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
    f = n(935208),
    I = n(612200),
    p = n(874850),
    T = n(597306),
    m = n(204925),
    g = n(652215),
    S = n(660183);
let N = new Date("06/16/2020"),
    C = [g.ftr.AGE_RESTRICTED, g.ftr.EXPLICIT],
    O = new Set([m.w_.NSFW_SERVER, m.w_.NSFW_SERVER_INVITE, m.w_.NSFW_SERVER_INVITE_EMBED]);
function R() {
    let e = A.default.getCurrentUser();
    return null != e && f.default.extractTimestamp(e.id) > N.getTime() && null == e.nsfwAllowed;
}
function L(e) {
    return C.includes(e.nsfwLevel);
}
function y(e) {
    let t = (0, s.b8)(),
        n = (0, c.wh)(e),
        o = (0, r.bG)([A.default], () => A.default.getCurrentUser()?.nsfwAllowed === !1),
        u = (0, T.a)(),
        _ = (function (e) {
            if (!(0, l.aX)(i.t.AGE_GATED_SPACES)) return null;
            let t = (0, c.wh)(e),
                n = e?.name ?? "";
            return t || "" !== n ? (0, d.f)(t, n) : null;
        })(e),
        E = {
            adult: S.intl.string(n ? S.t.ZtuRts : S.t.E4Cd5I),
            teen: n ? S.intl.format(S.t["8tk6bB"], {}) : S.intl.format(S.t.XQZvwn, {}),
            unverified: n ? S.intl.string(S.t.V6Gmu9) : S.intl.string(S.t["5rygLk"]),
        },
        f = S.intl.string(n ? S.t.xi46lg : S.t.ZmwvDc);
    return u
        ? t
            ? {
                  title: f,
                  description: _?.teen ?? E.teen,
                  agreement: S.intl.string(null != _ ? S.t.FDSSia : S.t.Zt4Mf4),
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
                  emphasiseDisagree: null != _,
              }
            : {
                  title: f,
                  description: _?.unverified ?? E.unverified,
                  agreement: S.intl.string(S.t.FDSSia),
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
        : o
          ? {
                title: S.intl.string(n ? S.t["H0SG/g"] : S.t.NEabBa),
                description: S.intl.format(n ? S.t["6++3cX"] : S.t["2kHZes"], {
                    helpURL: h.A.getArticleURL(g.MVz.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: a.A5.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: f,
                description: _?.adult ?? E.adult,
                agreement: S.intl.string(S.t.wVq7uo),
                modalType: a.A5.NSFW_CHANNEL_VERIFIED,
            };
}
function D(e) {
    let t = (0, s.b8)(),
        n = (0, T.a)(),
        a = e === m.w_.NSFW_SERVER || e === m.w_.NSFW_SERVER_INVITE || e === m.w_.NSFW_SERVER_INVITE_EMBED,
        o = (0, r.bG)([A.default], () => A.default.getCurrentUser()?.nsfwAllowed === !1),
        c = (0, l.aX)(i.t.AGE_GATED_SPACES) && a ? (0, d.f)(!0, "") : null;
    if (e === m.w_.JOIN_LARGE_GUILD_UNDERAGE || e === m.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === m.w_.JOIN_LARGE_GUILD_UNDERAGE ? S.t["u/xsK9"] : S.t.MjQbfi,
            i = {
                description: t ? S.intl.string(S.t.SAoMVJ) : S.intl.string(S.t.SxY4IW),
                agreement: t ? S.intl.string(S.t.Zt4Mf4) : S.intl.string(S.t.FDSSia),
            };
        return {
            verifyTitle: S.intl.string(n),
            verifyGateDescription: i.description,
            verifyAgreementButtonText: i.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: S.intl.string(null != c ? S.t.FDSSia : S.t.Zt4Mf4),
              verifyGateDescription: c?.teen ?? (a ? S.intl.format(S.t["8tk6bB"], {}) : S.intl.format(S.t.XQZvwn, {})),
              verifyTitle: a ? S.intl.string(S.t.xi46lg) : S.intl.string(S.t.ZmwvDc),
              verifyDisagreementButtonText: S.intl.string(null != c ? S.t["/g10LC"] : S.t.f3Pet9),
              verifyEmphasiseDisagree: null != c,
          }
        : e === m.w_.LARGE_GUILD
          ? {
                verifyTitle: S.intl.string(S.t["7ymzsL"]),
                verifyGateDescription: S.intl.string(S.t.SxY4IW),
                verifyAgreementButtonText: S.intl.string(S.t.FDSSia),
            }
          : o && a && !n
            ? {
                  verifyTitle: S.intl.string(S.t["H0SG/g"]),
                  verifyGateDescription: S.intl.format(S.t["6++3cX"], { helpURL: h.A.getArticleURL(g.MVz.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: S.intl.string(S.t.FDSSia),
                  verifyGateDescription:
                      c?.unverified ?? (a ? S.intl.string(S.t.V6Gmu9) : S.intl.string(S.t["5rygLk"])),
                  verifyTitle: a ? S.intl.string(S.t.xi46lg) : S.intl.string(S.t.ZmwvDc),
                  verifyDisagreementButtonText: S.intl.string(null != c ? S.t["/g10LC"] : S.t.f3Pet9),
              };
}
function v() {
    let e = A.default.getCurrentUser();
    if (null == e) return !1;
    let t = (0, T.r)();
    return !0 !== e.nsfwAllowed || t;
}
function b(e) {
    return !!v() && null != e && G(u.A.getChannel(e));
}
function M(e) {
    return (0, T.r)() && b(e);
}
function P(e) {
    return !!M(e) && ((0, I.yO)(m.w_.NSFW_VOICE_CHANNEL, e), !0);
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
        let e = null != n && O.has(n) ? n : m.w_.NSFW_SERVER;
        (0, I.yO)(e);
        return;
    }
    if (null != (i = A.default.getCurrentUser()) && null == i.nsfwAllowed && b(t))
        return void (0, I.yO)(n ?? m.w_.NSFW_CHANNEL);
}
function w(e) {
    if (null == e) return !1;
    let t = (0, s.p9)();
    return (0, p.Gc)(e) && t;
}
function G(e) {
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
function x(e) {
    let t = (0, s.i2)(),
        n = (0, r.bG)([_.A], () => _.A.didAgree(e?.guild_id)),
        a = (0, r.bG)([A.default], () => A.default.getCurrentUser()?.nsfwAllowed === !1),
        o = (0, l.aX)(i.t.AGE_GATED_SPACES),
        d = (0, r.bG)([E.A], () => E.A.getGuild(e?.guild_id)),
        u = !(n && !a) || (o && t);
    return null != e && ((!!e.isNSFW() && !!u) || (null != d && !!(0, c.wh)(d) && !!u));
}
function k(e) {
    let t = x(e),
        n = (0, o.IL)(e);
    return t || n;
}
function F() {
    let e = (0, l.d6)(i.t.COMMANDS_TOGGLE),
        t = (0, s.p9)();
    return e && t;
}
function B() {
    let e = (0, l.aX)(i.t.COMMANDS_TOGGLE),
        t = (0, s.i2)();
    return e && t;
}

n.d(t, {
    $v: () => T.$v,
    Bc: () => R,
    F2: () => P,
    Gc: () => T.Gc,
    Gn: () => v,
    Jm: () => k,
    Tv: () => U,
    UK: () => M,
    k$: () => D,
    kK: () => w,
    ni: () => V,
    p5: () => H,
    qR: () => F,
    sP: () => j,
    vL: () => B,
    xq: () => L,
    zS: () => y,
    zt: () => x,
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
    A = n(309010),
    h = n(287809),
    f = n(975571),
    I = n(935208),
    p = n(612200),
    T = n(874850),
    m = n(597306),
    g = n(204925),
    S = n(652215),
    N = n(105292);
let C = new Date("06/16/2020"),
    O = [S.ftr.AGE_RESTRICTED, S.ftr.EXPLICIT],
    R = new Set([g.w_.NSFW_SERVER, g.w_.NSFW_SERVER_INVITE, g.w_.NSFW_SERVER_INVITE_EMBED]);
function L() {
    let e = h.default.getCurrentUser();
    return null != e && I.default.extractTimestamp(e.id) > C.getTime() && null == e.nsfwAllowed;
}
function y(e) {
    return O.includes(e.nsfwLevel);
}
function D(e) {
    let t = (0, s.b8)(),
        n = (0, c.wh)(e),
        o = (0, r.bG)([h.default], () => h.default.getCurrentUser()?.nsfwAllowed === !1),
        u = (0, m.a)(),
        _ = (function (e) {
            if (!(0, l.aX)(i.t.AGE_GATED_SPACES)) return null;
            let t = (0, c.wh)(e),
                n = e?.name ?? "";
            return t || "" !== n ? (0, d.f)(t, n) : null;
        })(e),
        E = {
            adult: N.intl.string(n ? N.t.ZtuRts : N.t.E4Cd5I),
            teen: n ? N.intl.format(N.t["8tk6bB"], {}) : N.intl.format(N.t.XQZvwn, {}),
            unverified: n ? N.intl.string(N.t.V6Gmu9) : N.intl.string(N.t["5rygLk"]),
        },
        A = N.intl.string(n ? N.t.xi46lg : N.t.ZmwvDc);
    return u
        ? t
            ? {
                  title: A,
                  description: _?.teen ?? E.teen,
                  agreement: N.intl.string(null != _ ? N.t.FDSSia : N.t.Zt4Mf4),
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
                  emphasiseDisagree: null != _,
              }
            : {
                  title: A,
                  description: _?.unverified ?? E.unverified,
                  agreement: N.intl.string(N.t.FDSSia),
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
        : o
          ? {
                title: N.intl.string(n ? N.t["H0SG/g"] : N.t.NEabBa),
                description: N.intl.format(n ? N.t["6++3cX"] : N.t["2kHZes"], {
                    helpURL: f.A.getArticleURL(S.MVz.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: a.A5.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: A,
                description: _?.adult ?? E.adult,
                agreement: N.intl.string(N.t.wVq7uo),
                modalType: a.A5.NSFW_CHANNEL_VERIFIED,
            };
}
function v(e) {
    let t = (0, s.b8)(),
        n = (0, m.a)(),
        a = e === g.w_.NSFW_SERVER || e === g.w_.NSFW_SERVER_INVITE || e === g.w_.NSFW_SERVER_INVITE_EMBED,
        o = (0, r.bG)([h.default], () => h.default.getCurrentUser()?.nsfwAllowed === !1),
        c = (0, l.aX)(i.t.AGE_GATED_SPACES) && a ? (0, d.f)(!0, "") : null;
    if (e === g.w_.JOIN_LARGE_GUILD_UNDERAGE || e === g.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === g.w_.JOIN_LARGE_GUILD_UNDERAGE ? N.t["u/xsK9"] : N.t.MjQbfi,
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
              verifyAgreementButtonText: N.intl.string(null != c ? N.t.FDSSia : N.t.Zt4Mf4),
              verifyGateDescription: c?.teen ?? (a ? N.intl.format(N.t["8tk6bB"], {}) : N.intl.format(N.t.XQZvwn, {})),
              verifyTitle: a ? N.intl.string(N.t.xi46lg) : N.intl.string(N.t.ZmwvDc),
              verifyDisagreementButtonText: N.intl.string(null != c ? N.t["/g10LC"] : N.t.f3Pet9),
              verifyEmphasiseDisagree: null != c,
          }
        : e === g.w_.LARGE_GUILD
          ? {
                verifyTitle: N.intl.string(N.t["7ymzsL"]),
                verifyGateDescription: N.intl.string(N.t.SxY4IW),
                verifyAgreementButtonText: N.intl.string(N.t.FDSSia),
            }
          : o && a && !n
            ? {
                  verifyTitle: N.intl.string(N.t["H0SG/g"]),
                  verifyGateDescription: N.intl.format(N.t["6++3cX"], { helpURL: f.A.getArticleURL(S.MVz.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: N.intl.string(N.t.FDSSia),
                  verifyGateDescription:
                      c?.unverified ?? (a ? N.intl.string(N.t.V6Gmu9) : N.intl.string(N.t["5rygLk"])),
                  verifyTitle: a ? N.intl.string(N.t.xi46lg) : N.intl.string(N.t.ZmwvDc),
                  verifyDisagreementButtonText: N.intl.string(null != c ? N.t["/g10LC"] : N.t.f3Pet9),
              };
}
function b() {
    let e = h.default.getCurrentUser();
    if (null == e) return !1;
    let t = (0, m.r)();
    return !0 !== e.nsfwAllowed || t;
}
function M(e) {
    return !!b() && null != e && F(u.A.getChannel(e));
}
function P(e) {
    return (0, m.r)() && M(e);
}
function U(e) {
    return !!P(e) && ((0, p.yO)(g.w_.NSFW_VOICE_CHANNEL, e), !0);
}
function w(e, t, n) {
    let i;
    if (
        (function (e) {
            if (!b() || null == e) return !1;
            let t = E.A.getGuild(e);
            return null != t && (0, c.wh)(t);
        })(e)
    ) {
        let e = null != n && R.has(n) ? n : g.w_.NSFW_SERVER;
        (0, p.yO)(e);
        return;
    }
    if (null != (i = h.default.getCurrentUser()) && null == i.nsfwAllowed && M(t))
        return void (0, p.yO)(n ?? g.w_.NSFW_CHANNEL);
}
let G = new Set([g.w_.FAMILY_CENTER, g.w_.DEEP_LINK_PROMPT]);
function x(e) {
    if (G.has(e)) return g.ln.DATE_OF_BIRTH;
    if ((0, m.r)()) return g.ln.AGE_ASSURANCE;
    let t = u.A.getChannel(A.Ay.getChannelId());
    return h.default.getCurrentUser()?.nsfwAllowed === !1 && (F(t) || R.has(e))
        ? g.ln.AGE_ASSURANCE
        : g.ln.DATE_OF_BIRTH;
}
function k(e) {
    if (null == e) return !1;
    let t = (0, s.p9)();
    return (0, T.Gc)(e) && t;
}
function F(e) {
    if (null == e) return !1;
    let t = _.A.didAgree(e.guild_id),
        n = h.default.getCurrentUser()?.nsfwAllowed === !1,
        r = (0, l.d6)(i.t.AGE_GATED_SPACES),
        a = (0, s.p9)(),
        o = !(t && !n) || (a && r);
    if (e.isNSFW() && o) return !0;
    let d = e.guild_id,
        u = E.A.getGuild(d);
    return null != u && (0, c.wh)(u) && o;
}
function B(e) {
    let t = (0, s.i2)(),
        n = (0, r.bG)([_.A], () => _.A.didAgree(e?.guild_id)),
        a = (0, r.bG)([h.default], () => h.default.getCurrentUser()?.nsfwAllowed === !1),
        o = (0, l.aX)(i.t.AGE_GATED_SPACES),
        d = (0, r.bG)([E.A], () => E.A.getGuild(e?.guild_id)),
        u = !(n && !a) || (o && t);
    return null != e && ((!!e.isNSFW() && !!u) || (null != d && !!(0, c.wh)(d) && !!u));
}
function V(e) {
    let t = B(e),
        n = (0, o.IL)(e);
    return t || n;
}
function H() {
    let e = (0, l.d6)(i.t.COMMANDS_TOGGLE),
        t = (0, s.p9)();
    return e && t;
}
function j() {
    let e = (0, l.aX)(i.t.COMMANDS_TOGGLE),
        t = (0, s.i2)();
    return e && t;
}

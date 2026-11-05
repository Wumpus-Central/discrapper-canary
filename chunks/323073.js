var i = n(687123),
    r = n(855986),
    a = n(171576),
    s = n(36149),
    l = n(112417),
    o = n(207560),
    d = n(288254),
    c = n(260509),
    u = n(734057),
    _ = n(517019),
    E = n(71393),
    A = n(309010),
    f = n(287809),
    h = n(975571),
    I = n(811091),
    p = n(612200),
    m = n(874850),
    T = n(597306),
    g = n(204925),
    S = n(652215),
    N = n(792996);
let C = new Date("06/16/2020"),
    O = [S.ftr.AGE_RESTRICTED, S.ftr.EXPLICIT],
    R = new Set([g.w_.NSFW_SERVER, g.w_.NSFW_SERVER_INVITE, g.w_.NSFW_SERVER_INVITE_EMBED]);
function L() {
    let e = f.default.getCurrentUser();
    if (null == e) return !1;
    let t = (0, T.r)();
    return !0 !== e.nsfwAllowed || t;
}
function y(e) {
    return !!L() && null != e && v(u.A.getChannel(e));
}
function D(e) {
    return (0, T.r)() && y(e);
}
let b = new Set([g.w_.FAMILY_CENTER, g.w_.DEEP_LINK_PROMPT]);
function v(e) {
    if (null == e) return !1;
    let t = _.A.didAgree(e.guild_id),
        n = f.default.getCurrentUser()?.nsfwAllowed === !1,
        r = (0, o.d6)(i.t.AGE_GATED_SPACES),
        a = (0, s.u5)(),
        l = !(t && !n) || (a && r);
    if (e.isNSFW() && l) return !0;
    let d = e.guild_id,
        u = E.A.getGuild(d);
    return null != u && (0, c.wh)(u) && l;
}
function P(e) {
    let t = (0, s.n2)(),
        n = (0, r.bG)([_.A], () => _.A.didAgree(e?.guild_id)),
        a = (0, r.bG)([f.default], () => f.default.getCurrentUser()?.nsfwAllowed === !1),
        l = (0, o.aX)(i.t.AGE_GATED_SPACES),
        d = (0, r.bG)([E.A], () => E.A.getGuild(e?.guild_id)),
        u = !(n && !a) || (l && t);
    return null != e && ((!!e.isNSFW() && !!u) || (null != d && !!(0, c.wh)(d) && !!u));
}
n.d(
    t,
    { $v: () => m.$v, Gc: () => m.Gc },
    {
        Bc: R,
        F2: D,
        Gn: function (e) {
            let t = (0, s.b8)(),
                n = (0, T.a)(),
                a = e === g.w_.NSFW_SERVER || e === g.w_.NSFW_SERVER_INVITE || e === g.w_.NSFW_SERVER_INVITE_EMBED,
                d = (0, r.bG)([f.default], () => f.default.getCurrentUser()?.nsfwAllowed === !1),
                c = (0, o.aX)(i.t.AGE_GATED_SPACES) && a ? (0, l.Z)(!0, "") : null;
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
                      verifyGateDescription:
                          c?.teen ?? (a ? N.intl.format(N.t["8tk6bB"], {}) : N.intl.format(N.t.XQZvwn, {})),
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
                  : d && a && !n
                    ? {
                          verifyTitle: N.intl.string(N.t["H0SG/g"]),
                          verifyGateDescription: N.intl.format(N.t["6++3cX"], {
                              helpURL: h.A.getArticleURL(S.MVz.AGE_GATE),
                          }),
                          verifyAgreementButtonText: null,
                      }
                    : {
                          verifyAgreementButtonText: N.intl.string(N.t.FDSSia),
                          verifyGateDescription:
                              c?.unverified ?? (a ? N.intl.string(N.t.V6Gmu9) : N.intl.string(N.t["5rygLk"])),
                          verifyTitle: a ? N.intl.string(N.t.xi46lg) : N.intl.string(N.t.ZmwvDc),
                          verifyDisagreementButtonText: N.intl.string(null != c ? N.t["/g10LC"] : N.t.f3Pet9),
                      };
        },
        Jm: function (e) {
            if (null == e) return !1;
            let t = (0, s.u5)();
            return (0, m.Gc)(e) && t;
        },
        Tv: function (e) {
            return !!D(e) && ((0, p.yO)(g.w_.NSFW_VOICE_CHANNEL, e), !0);
        },
        UK: y,
        k$: function (e) {
            let t = (0, s.b8)(),
                n = (0, c.wh)(e),
                d = (0, r.bG)([f.default], () => f.default.getCurrentUser()?.nsfwAllowed === !1),
                u = (0, T.a)(),
                _ = (function (e) {
                    if (!(0, o.aX)(i.t.AGE_GATED_SPACES)) return null;
                    let t = (0, c.wh)(e),
                        n = e?.name ?? "";
                    return t || "" !== n ? (0, l.Z)(t, n) : null;
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
                : d
                  ? {
                        title: N.intl.string(n ? N.t["H0SG/g"] : N.t.NEabBa),
                        description: N.intl.format(n ? N.t["6++3cX"] : N.t["2kHZes"], {
                            helpURL: h.A.getArticleURL(S.MVz.NSFW_AGE_GATING),
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
        },
        kK: function (e, t, n) {
            let i;
            if (
                (function (e) {
                    if (!L() || null == e) return !1;
                    let t = E.A.getGuild(e);
                    return null != t && (0, c.wh)(t);
                })(e)
            ) {
                let e = null != n && R.has(n) ? n : g.w_.NSFW_SERVER;
                (0, p.yO)(e);
                return;
            }
            if (null != (i = f.default.getCurrentUser()) && null == i.nsfwAllowed && y(t))
                return void (0, p.yO)(n ?? g.w_.NSFW_CHANNEL);
        },
        ni: function (e) {
            let t = P(e),
                n = (0, d.IL)(e);
            return t || n;
        },
        p5: function () {
            let e = (0, o.d6)(i.t.COMMANDS_TOGGLE),
                t = (0, s.u5)();
            return e && t;
        },
        qR: v,
        sP: function () {
            let e = (0, o.aX)(i.t.COMMANDS_TOGGLE),
                t = (0, s.n2)();
            return e && t;
        },
        vL: P,
        xq: function () {
            let e = f.default.getCurrentUser();
            return null != e && I.default.extractTimestamp(e.id) > C.getTime() && null == e.nsfwAllowed;
        },
        zS: function (e) {
            return O.includes(e.nsfwLevel);
        },
        zt: function (e) {
            if (b.has(e)) return g.ln.DATE_OF_BIRTH;
            if ((0, T.r)()) return g.ln.AGE_ASSURANCE;
            let t = u.A.getChannel(A.Ay.getChannelId());
            return f.default.getCurrentUser()?.nsfwAllowed === !1 && (v(t) || R.has(e))
                ? g.ln.AGE_ASSURANCE
                : g.ln.DATE_OF_BIRTH;
        },
    },
);

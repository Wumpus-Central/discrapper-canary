n.d(t, {
    $v: () => v,
    Bc: () => C,
    Gc: () => y,
    Gn: () => g,
    Jm: () => G,
    Tv: () => P,
    UK: () => U,
    a9: () => D,
    k$: () => h,
    kK: () => M,
    ni: () => F,
    p5: () => V,
    qR: () => B,
    r9: () => L,
    sP: () => H,
    vL: () => w,
    xq: () => p,
    zS: () => m,
});
var i = n(687123),
    r = n(17928),
    a = n(847599),
    s = n(36149),
    _ = n(207560),
    l = n(288254),
    o = n(260509),
    E = n(734057),
    d = n(517019),
    c = n(71393),
    u = n(287809),
    I = n(975571),
    A = n(935208),
    T = n(612200),
    S = n(204925),
    N = n(652215),
    O = n(985018);
let R = new Date("06/16/2020"),
    f = [N.ftr.AGE_RESTRICTED, N.ftr.EXPLICIT],
    C = new Set([S.w_.NSFW_SERVER, S.w_.NSFW_SERVER_INVITE, S.w_.NSFW_SERVER_INVITE_EMBED]);
function p() {
    let e = u.default.getCurrentUser();
    return null != e && A.default.extractTimestamp(e.id) > R.getTime() && null == e.nsfwAllowed;
}
function m(e) {
    return f.includes(e.nsfwLevel);
}
function L() {
    let e = (0, s.p9)();
    return (0, _.d6)(i.t.AGE_GATED_SPACES) && e;
}
function D() {
    let e = (0, _.aX)(i.t.AGE_GATED_SPACES),
        t = (0, s.i2)();
    return e && t;
}
function h(e) {
    let t = (0, s.b8)(),
        n = (0, o.wh)(e),
        i = (0, r.bG)([u.default], () => u.default.getCurrentUser()?.nsfwAllowed === !1),
        _ = D(),
        l = O.intl.string(n ? O.t.xi46lg : O.t.ZmwvDc);
    return _
        ? t
            ? {
                  title: l,
                  description: n ? O.intl.format(O.t["8tk6bB"], {}) : O.intl.format(O.t.XQZvwn, {}),
                  agreement: O.intl.string(O.t.Zt4Mf4),
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
            : {
                  title: l,
                  description: n ? O.intl.string(O.t.V6Gmu9) : O.intl.string(O.t["5rygLk"]),
                  agreement: O.intl.string(O.t.FDSSia),
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
        : i
          ? {
                title: O.intl.string(n ? O.t["H0SG/g"] : O.t.NEabBa),
                description: O.intl.format(n ? O.t["6++3cX"] : O.t["2kHZes"], {
                    helpURL: I.A.getArticleURL(N.MVz.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: a.A5.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: l,
                description: O.intl.string(n ? O.t.ZtuRts : O.t.E4Cd5I),
                agreement: O.intl.string(O.t.wVq7uo),
                modalType: a.A5.NSFW_CHANNEL_VERIFIED,
            };
}
function g(e) {
    let t = (0, s.b8)(),
        n = D(),
        i = e === S.w_.NSFW_SERVER || e === S.w_.NSFW_SERVER_INVITE || e === S.w_.NSFW_SERVER_INVITE_EMBED,
        a = (0, r.bG)([u.default], () => u.default.getCurrentUser()?.nsfwAllowed === !1);
    if (e === S.w_.JOIN_LARGE_GUILD_UNDERAGE || e === S.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === S.w_.JOIN_LARGE_GUILD_UNDERAGE ? O.t["u/xsK9"] : O.t.MjQbfi,
            i = {
                description: t ? O.intl.string(O.t.SAoMVJ) : O.intl.string(O.t.SxY4IW),
                agreement: t ? O.intl.string(O.t.Zt4Mf4) : O.intl.string(O.t.FDSSia),
            };
        return {
            verifyTitle: O.intl.string(n),
            verifyGateDescription: i.description,
            verifyAgreementButtonText: i.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: O.intl.string(O.t.Zt4Mf4),
              verifyGateDescription: i ? O.intl.format(O.t["8tk6bB"], {}) : O.intl.format(O.t.XQZvwn, {}),
              verifyTitle: i ? O.intl.string(O.t.xi46lg) : O.intl.string(O.t.ZmwvDc),
          }
        : e === S.w_.LARGE_GUILD
          ? {
                verifyTitle: O.intl.string(O.t["7ymzsL"]),
                verifyGateDescription: O.intl.string(O.t.SxY4IW),
                verifyAgreementButtonText: O.intl.string(O.t.FDSSia),
            }
          : a && i && !n
            ? {
                  verifyTitle: O.intl.string(O.t["H0SG/g"]),
                  verifyGateDescription: O.intl.format(O.t["6++3cX"], { helpURL: I.A.getArticleURL(N.MVz.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: O.intl.string(O.t.FDSSia),
                  verifyGateDescription: i ? O.intl.string(O.t.V6Gmu9) : O.intl.string(O.t["5rygLk"]),
                  verifyTitle: i ? O.intl.string(O.t.xi46lg) : O.intl.string(O.t.ZmwvDc),
              };
}
let b = () => {
        let e = u.default.getCurrentUser();
        if (null == e) return !1;
        let t = L();
        return !0 !== e.nsfwAllowed || t;
    },
    U = (e) => !!b() && null != e && B(E.A.getChannel(e)),
    P = (e) => !!(L() && U(e)) && ((0, T.yO)(S.w_.NSFW_VOICE_CHANNEL), !0);
function M(e, t, n) {
    let i;
    if (
        ((e) => {
            if (!b() || null == e) return !1;
            let t = c.A.getGuild(e);
            return null != t && (0, o.wh)(t);
        })(e)
    ) {
        let e = null != n && C.has(n) ? n : S.w_.NSFW_SERVER;
        (0, T.yO)(e);
        return;
    }
    if (null != (i = u.default.getCurrentUser()) && null == i.nsfwAllowed && U(t))
        return void (0, T.yO)(n ?? S.w_.NSFW_CHANNEL);
}
let y = (e) => null != e && (e.isNSFW() || (0, o.wh)(c.A.getGuild(e.guild_id))),
    G = (e) => {
        if (null == e) return !1;
        let t = (0, s.p9)();
        return y(e) && t;
    },
    v = (e) => {
        if (null == e) return !1;
        let t = u.default.getCurrentUser()?.nsfwAllowed === !0;
        return y(e) && !t;
    };
function B(e) {
    if (null == e) return !1;
    let t = d.A.didAgree(e.guild_id),
        n = u.default.getCurrentUser()?.nsfwAllowed === !1,
        r = (0, _.d6)(i.t.AGE_GATED_SPACES),
        a = (0, s.p9)(),
        l = !(t && !n) || (a && r);
    if (e.isNSFW() && l) return !0;
    let E = e.guild_id,
        I = c.A.getGuild(E);
    return null != I && (0, o.wh)(I) && l;
}
function w(e) {
    let t = (0, s.i2)(),
        n = (0, r.bG)([d.A], () => d.A.didAgree(e?.guild_id)),
        a = (0, r.bG)([u.default], () => u.default.getCurrentUser()?.nsfwAllowed === !1),
        l = (0, _.aX)(i.t.AGE_GATED_SPACES),
        E = (0, r.bG)([c.A], () => c.A.getGuild(e?.guild_id)),
        I = !(n && !a) || (l && t);
    return null != e && ((!!e.isNSFW() && !!I) || (null != E && !!(0, o.wh)(E) && !!I));
}
function F(e) {
    let t = w(e),
        n = (0, l.IL)(e);
    return t || n;
}
function V() {
    let e = (0, _.d6)(i.t.COMMANDS_TOGGLE),
        t = (0, s.p9)();
    return e && t;
}
function H() {
    let e = (0, _.aX)(i.t.COMMANDS_TOGGLE),
        t = (0, s.i2)();
    return e && t;
}

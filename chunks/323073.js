let i;
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
var r = n(687123),
    a = n(17928),
    s = n(847599),
    l = n(36149),
    o = n(207560),
    d = n(288254),
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
    m = n(375708);
let g = new Date("06/16/2020"),
    S = [T.ftr.AGE_RESTRICTED, T.ftr.EXPLICIT],
    N = new Set([p.w_.NSFW_SERVER, p.w_.NSFW_SERVER_INVITE, p.w_.NSFW_SERVER_INVITE_EMBED]);
function C() {
    let e = A.default.getCurrentUser();
    return null != e && I.default.extractTimestamp(e.id) > g.getTime() && null == e.nsfwAllowed;
}
function O(e) {
    return S.includes(e.nsfwLevel);
}
function R() {
    let e = (0, l.p9)();
    return (0, o.d6)(r.t.AGE_GATED_SPACES) && e;
}
function L() {
    let e = (0, o.aX)(r.t.AGE_GATED_SPACES),
        t = (0, l.i2)();
    return e && t;
}
function y(e) {
    let t = (0, l.b8)(),
        n = (0, c.wh)(e),
        d = (0, a.bG)([A.default], () => A.default.getCurrentUser()?.nsfwAllowed === !1),
        u = L(),
        _ = (function (e) {
            if (!(0, o.aX)(r.t.AGE_GATED_SPACES)) return null;
            let t = (0, c.wh)(e),
                n = e?.name ?? "";
            return t || "" !== n ? (i?.(t, n) ?? null) : null;
        })(e),
        E = {
            adult: m.intl.string(n ? m.t.ZtuRts : m.t.E4Cd5I),
            teen: n ? m.intl.format(m.t["8tk6bB"], {}) : m.intl.format(m.t.XQZvwn, {}),
            unverified: n ? m.intl.string(m.t.V6Gmu9) : m.intl.string(m.t["5rygLk"]),
        },
        I = m.intl.string(n ? m.t.xi46lg : m.t.ZmwvDc);
    return u
        ? t
            ? {
                  title: I,
                  description: _?.teen ?? E.teen,
                  agreement: m.intl.string(null != _ ? m.t.FDSSia : m.t.Zt4Mf4),
                  modalType: s.A5.NSFW_CHANNEL_AGE_VERIFY,
                  emphasiseDisagree: null != _,
              }
            : {
                  title: I,
                  description: _?.unverified ?? E.unverified,
                  agreement: m.intl.string(m.t.FDSSia),
                  modalType: s.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
        : d
          ? {
                title: m.intl.string(n ? m.t["H0SG/g"] : m.t.NEabBa),
                description: m.intl.format(n ? m.t["6++3cX"] : m.t["2kHZes"], {
                    helpURL: h.A.getArticleURL(T.MVz.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: s.A5.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: I,
                description: _?.adult ?? E.adult,
                agreement: m.intl.string(m.t.wVq7uo),
                modalType: s.A5.NSFW_CHANNEL_VERIFIED,
            };
}
function D(e) {
    let t = (0, l.b8)(),
        n = L(),
        s = e === p.w_.NSFW_SERVER || e === p.w_.NSFW_SERVER_INVITE || e === p.w_.NSFW_SERVER_INVITE_EMBED,
        d = (0, a.bG)([A.default], () => A.default.getCurrentUser()?.nsfwAllowed === !1),
        c = (0, o.aX)(r.t.AGE_GATED_SPACES) && s ? (i?.(!0, "") ?? null) : null;
    if (e === p.w_.JOIN_LARGE_GUILD_UNDERAGE || e === p.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === p.w_.JOIN_LARGE_GUILD_UNDERAGE ? m.t["u/xsK9"] : m.t.MjQbfi,
            i = {
                description: t ? m.intl.string(m.t.SAoMVJ) : m.intl.string(m.t.SxY4IW),
                agreement: t ? m.intl.string(m.t.Zt4Mf4) : m.intl.string(m.t.FDSSia),
            };
        return {
            verifyTitle: m.intl.string(n),
            verifyGateDescription: i.description,
            verifyAgreementButtonText: i.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: m.intl.string(null != c ? m.t.FDSSia : m.t.Zt4Mf4),
              verifyGateDescription: c?.teen ?? (s ? m.intl.format(m.t["8tk6bB"], {}) : m.intl.format(m.t.XQZvwn, {})),
              verifyTitle: s ? m.intl.string(m.t.xi46lg) : m.intl.string(m.t.ZmwvDc),
              verifyDisagreementButtonText: m.intl.string(null != c ? m.t["/g10LC"] : m.t.f3Pet9),
              verifyEmphasiseDisagree: null != c,
          }
        : e === p.w_.LARGE_GUILD
          ? {
                verifyTitle: m.intl.string(m.t["7ymzsL"]),
                verifyGateDescription: m.intl.string(m.t.SxY4IW),
                verifyAgreementButtonText: m.intl.string(m.t.FDSSia),
            }
          : d && s && !n
            ? {
                  verifyTitle: m.intl.string(m.t["H0SG/g"]),
                  verifyGateDescription: m.intl.format(m.t["6++3cX"], { helpURL: h.A.getArticleURL(T.MVz.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: m.intl.string(m.t.FDSSia),
                  verifyGateDescription:
                      c?.unverified ?? (s ? m.intl.string(m.t.V6Gmu9) : m.intl.string(m.t["5rygLk"])),
                  verifyTitle: s ? m.intl.string(m.t.xi46lg) : m.intl.string(m.t.ZmwvDc),
                  verifyDisagreementButtonText: m.intl.string(null != c ? m.t["/g10LC"] : m.t.f3Pet9),
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
    let t = (0, l.p9)();
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
        i = (0, o.d6)(r.t.AGE_GATED_SPACES),
        a = (0, l.p9)(),
        s = !(t && !n) || (a && i);
    if (e.isNSFW() && s) return !0;
    let d = e.guild_id,
        u = E.A.getGuild(d);
    return null != u && (0, c.wh)(u) && s;
}
function F(e) {
    let t = (0, l.i2)(),
        n = (0, a.bG)([_.A], () => _.A.didAgree(e?.guild_id)),
        i = (0, a.bG)([A.default], () => A.default.getCurrentUser()?.nsfwAllowed === !1),
        s = (0, o.aX)(r.t.AGE_GATED_SPACES),
        d = (0, a.bG)([E.A], () => E.A.getGuild(e?.guild_id)),
        u = !(n && !i) || (s && t);
    return null != e && ((!!e.isNSFW() && !!u) || (null != d && !!(0, c.wh)(d) && !!u));
}
function B(e) {
    let t = F(e),
        n = (0, d.IL)(e);
    return t || n;
}
function V() {
    let e = (0, o.d6)(r.t.COMMANDS_TOGGLE),
        t = (0, l.p9)();
    return e && t;
}
function H() {
    let e = (0, o.aX)(r.t.COMMANDS_TOGGLE),
        t = (0, l.i2)();
    return e && t;
}

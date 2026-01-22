n.d(t, {
    $5: () => Z,
    I8: () => j,
    Kt: () => A,
    Lj: () => S,
    RW: () => L,
    Uw: () => B,
    Y3: () => G,
    Yt: () => T,
    _t: () => k,
    a1: () => P,
    bN: () => I,
    dl: () => C,
    ft: () => U,
    kH: () => N,
    qF: () => M,
    xi: () => V,
    zd: () => D,
}),
    n(388685),
    n(953529);
var r = n(310882),
    i = n(442837),
    a = n(480916),
    o = n(81643),
    s = n(980945),
    l = n(312870),
    c = n(601964),
    u = n(592125),
    d = n(731290),
    f = n(430824),
    p = n(594174),
    _ = n(63063),
    h = n(709054),
    m = n(758119),
    g = n(723359),
    E = n(981631),
    b = n(388032);
function y(e) {
    return {
        description: e ? b.intl.string(b.t["lSgO/q"]) : b.intl.string(b.t.SxY4IW),
        agreement: e ? b.intl.string(b.t.PBG51l) : b.intl.string(b.t["5B+npG"]),
    };
}
let O = new Date("06/16/2020"),
    v = [E.V_K.AGE_RESTRICTED, E.V_K.EXPLICIT],
    S = new Set([g.L0.NSFW_SERVER, g.L0.NSFW_SERVER_INVITE, g.L0.NSFW_SERVER_INVITE_EMBED]);
function I() {
    let e = p.default.getCurrentUser();
    return null != e && h.default.extractTimestamp(e.id) > O.getTime() && null == e.nsfwAllowed;
}
function T(e) {
    return v.includes(e.nsfwLevel);
}
function C() {
    let e = (0, l.U)("age-gate-utils"),
        t = (0, o.sf)();
    return ((0, s.ML)(r.X.AGE_GATED_SPACES) || e) && t;
}
function A() {
    let e = (0, s.Uf)(r.X.AGE_GATED_SPACES),
        t = (0, l.s)("age-gate-utils"),
        n = (0, o.L5)();
    return (e || t) && n;
}
function N(e) {
    let t = (0, o.l6)(),
        n = (0, c.Y2)(e),
        r = (0, i.e7)([p.default], () => {
            var e;
            return (null == (e = p.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        s = A(),
        l = b.intl.string(n ? b.t.xi46lg : b.t.ZmwvDc);
    return s
        ? t
            ? {
                  title: l,
                  description: n ? b.intl.format(b.t["7uIWQM"], {}) : b.intl.format(b.t.x1coPo, {}),
                  agreement: b.intl.string(b.t.PBG51l),
                  modalType: a.it.NSFW_CHANNEL_AGE_VERIFY,
              }
            : {
                  title: l,
                  description: n ? b.intl.string(b.t.akjk0f) : b.intl.string(b.t["u/xqhc"]),
                  agreement: b.intl.string(b.t["5B+npG"]),
                  modalType: a.it.NSFW_CHANNEL_AGE_VERIFY,
              }
        : r
          ? {
                title: b.intl.string(n ? b.t["H0SG/g"] : b.t.NEabBa),
                description: b.intl.format(n ? b.t["6++3cX"] : b.t["2kHZes"], {
                    helpURL: _.Z.getArticleURL(E.BhN.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: a.it.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: l,
                description: b.intl.string(n ? b.t.ZtuRts : b.t.E4Cd5I),
                agreement: b.intl.string(b.t.wVq7uo),
                modalType: a.it.NSFW_CHANNEL_VERIFIED,
            };
}
function P(e) {
    let t = (0, o.l6)(),
        n = A(),
        r = e === g.L0.NSFW_SERVER || e === g.L0.NSFW_SERVER_INVITE || e === g.L0.NSFW_SERVER_INVITE_EMBED,
        a = (0, i.e7)([p.default], () => {
            var e;
            return (null == (e = p.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        });
    if (e === g.L0.JOIN_LARGE_GUILD_UNDERAGE || e === g.L0.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === g.L0.JOIN_LARGE_GUILD_UNDERAGE ? b.t["u/xsK9"] : b.t.MjQbfi,
            r = y(t);
        return {
            verifyTitle: b.intl.string(n),
            verifyGateDescription: r.description,
            verifyAgreementButtonText: r.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: b.intl.string(b.t.PBG51l),
              verifyGateDescription: r ? b.intl.format(b.t["7uIWQM"], {}) : b.intl.format(b.t.x1coPo, {}),
              verifyTitle: r ? b.intl.string(b.t.xi46lg) : b.intl.string(b.t.ZmwvDc),
          }
        : e === g.L0.LARGE_GUILD
          ? {
                verifyTitle: b.intl.string(b.t.UYReTs),
                verifyGateDescription: b.intl.string(b.t.SxY4IW),
                verifyAgreementButtonText: b.intl.string(b.t["5B+npG"]),
            }
          : a && r && !n
            ? {
                  verifyTitle: b.intl.string(b.t["H0SG/g"]),
                  verifyGateDescription: b.intl.format(b.t["6++3cX"], { helpURL: _.Z.getArticleURL(E.BhN.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: b.intl.string(b.t["5B+npG"]),
                  verifyGateDescription: r ? b.intl.string(b.t.akjk0f) : b.intl.string(b.t["u/xqhc"]),
                  verifyTitle: r ? b.intl.string(b.t.xi46lg) : b.intl.string(b.t.ZmwvDc),
              };
}
let w = () => {
        let e = p.default.getCurrentUser();
        if (null == e) return !1;
        let t = C();
        return !0 !== e.nsfwAllowed || t;
    },
    R = (e) => {
        if (!w() || null == e) return !1;
        let t = f.Z.getGuild(e);
        return null != t && (0, c.Y2)(t);
    },
    D = (e) => !!w() && null != e && G(u.Z.getChannel(e)),
    x = (e) => C() && D(e),
    L = (e) => !!x(e) && ((0, m.mN)(g.L0.NSFW_VOICE_CHANNEL), !0);
function j(e, t, n) {
    if (R(e)) {
        let e = null != n && S.has(n) ? n : g.L0.NSFW_SERVER;
        (0, m.mN)(e);
        return;
    }
    if (F() && D(t)) return void (0, m.mN)(null != n ? n : g.L0.NSFW_CHANNEL);
}
let M = (e) => null != e && (e.isNSFW() || (0, c.Y2)(f.Z.getGuild(e.guild_id))),
    k = (e) => {
        if (null == e) return !1;
        let t = (0, o.sf)();
        return M(e) && t;
    },
    U = (e) => {
        var t;
        if (null == e) return !1;
        let n = (null == (t = p.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !0;
        return M(e) && !n;
    };
function G(e) {
    var t;
    if (null == e) return !1;
    let n = d.Z.didAgree(e.guild_id),
        i = (null == (t = p.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !1,
        a = (0, l.U)("age-gate-utils"),
        u = (0, s.ML)(r.X.AGE_GATED_SPACES) || a,
        _ = (0, o.sf)(),
        h = !(n && !i) || (_ && u);
    if (e.isNSFW() && h) return !0;
    let m = e.guild_id,
        g = f.Z.getGuild(m);
    return null != g && (0, c.Y2)(g) && h;
}
function Z(e) {
    let t = (0, o.L5)(),
        n = (0, i.e7)([d.Z], () => d.Z.didAgree(null == e ? void 0 : e.guild_id)),
        a = (0, i.e7)([p.default], () => {
            var e;
            return (null == (e = p.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        u = (0, s.Uf)(r.X.AGE_GATED_SPACES),
        _ = (0, l.s)("age-gate-utils"),
        h = u || _,
        m = (0, i.e7)([f.Z], () => f.Z.getGuild(null == e ? void 0 : e.guild_id)),
        g = h && t,
        E = !(n && !a) || g;
    return null != e && ((!!e.isNSFW() && !!E) || (null != m && !!(0, c.Y2)(m) && !!E));
}
function F() {
    let e = p.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}
function B() {
    let e = (0, s.ML)(r.X.COMMANDS_TOGGLE),
        t = (0, l.U)("age-gate-utils") || e,
        n = (0, o.sf)();
    return t && n;
}
function V() {
    let e = (0, s.Uf)(r.X.COMMANDS_TOGGLE),
        t = (0, l.s)("age-gate-utils") || e,
        n = (0, o.L5)();
    return t && n;
}

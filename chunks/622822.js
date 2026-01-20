n.d(t, {
    $5: () => F,
    I8: () => M,
    Kt: () => N,
    Lj: () => I,
    RW: () => j,
    Uw: () => V,
    Y3: () => Z,
    Yt: () => C,
    _t: () => U,
    a1: () => w,
    bN: () => T,
    dl: () => A,
    ft: () => G,
    kH: () => P,
    qF: () => k,
    xi: () => H,
    zd: () => x,
}),
    n(388685),
    n(953529);
var r = n(310882),
    i = n(442837),
    a = n(480916),
    o = n(532812),
    s = n(81643),
    l = n(980945),
    c = n(312870),
    u = n(601964),
    d = n(592125),
    f = n(731290),
    p = n(430824),
    _ = n(594174),
    h = n(63063),
    m = n(709054),
    g = n(758119),
    E = n(723359),
    b = n(981631),
    y = n(388032);
function O(e) {
    return {
        description: e ? y.intl.string(y.t["lSgO/q"]) : y.intl.string(y.t.SxY4IW),
        agreement: e ? y.intl.string(y.t.PBG51l) : y.intl.string(y.t["5B+npG"]),
    };
}
let v = new Date("06/16/2020"),
    S = [b.V_K.AGE_RESTRICTED, b.V_K.EXPLICIT],
    I = new Set([E.L0.NSFW_SERVER, E.L0.NSFW_SERVER_INVITE, E.L0.NSFW_SERVER_INVITE_EMBED]);
function T() {
    let e = _.default.getCurrentUser();
    return null != e && m.default.extractTimestamp(e.id) > v.getTime() && null == e.nsfwAllowed;
}
function C(e) {
    return S.includes(e.nsfwLevel);
}
function A() {
    let e = (0, c.U)("age-gate-utils"),
        t = (0, s.sf)();
    return ((0, l.ML)(r.X.AGE_GATED_SPACES) || e) && t;
}
function N() {
    let e = (0, l.Uf)(r.X.AGE_GATED_SPACES),
        t = (0, c.s)("age-gate-utils"),
        n = (0, s.L5)();
    return (e || t) && n;
}
function P(e) {
    let t = (0, s.l6)(),
        n = (0, u.Y2)(e),
        r = (0, i.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        o = N(),
        l = y.intl.string(n ? y.t.xi46lg : y.t.ZmwvDc);
    return o
        ? t
            ? {
                  title: l,
                  description: n ? y.intl.format(y.t["7uIWQM"], {}) : y.intl.format(y.t.x1coPo, {}),
                  agreement: y.intl.string(y.t.PBG51l),
                  modalType: a.it.NSFW_CHANNEL_AGE_VERIFY,
              }
            : {
                  title: l,
                  description: n ? y.intl.string(y.t.akjk0f) : y.intl.string(y.t["u/xqhc"]),
                  agreement: y.intl.string(y.t["5B+npG"]),
                  modalType: a.it.NSFW_CHANNEL_AGE_VERIFY,
              }
        : r
          ? {
                title: y.intl.string(n ? y.t["H0SG/g"] : y.t.NEabBa),
                description: y.intl.format(n ? y.t["6++3cX"] : y.t["2kHZes"], {
                    helpURL: h.Z.getArticleURL(b.BhN.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: a.it.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: l,
                description: y.intl.string(n ? y.t.ZtuRts : y.t.E4Cd5I),
                agreement: y.intl.string(y.t.wVq7uo),
                modalType: a.it.NSFW_CHANNEL_VERIFIED,
            };
}
function w(e) {
    let t = (0, s.l6)(),
        n = N(),
        r = e === E.L0.NSFW_SERVER || e === E.L0.NSFW_SERVER_INVITE || e === E.L0.NSFW_SERVER_INVITE_EMBED,
        a = (0, i.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        });
    if (e === E.L0.JOIN_LARGE_GUILD_UNDERAGE || e === E.L0.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === E.L0.JOIN_LARGE_GUILD_UNDERAGE ? y.t["u/xsK9"] : y.t.MjQbfi,
            r = O(t);
        return {
            verifyTitle: y.intl.string(n),
            verifyGateDescription: r.description,
            verifyAgreementButtonText: r.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: y.intl.string(y.t.PBG51l),
              verifyGateDescription: r ? y.intl.format(y.t["7uIWQM"], {}) : y.intl.format(y.t.x1coPo, {}),
              verifyTitle: r ? y.intl.string(y.t.xi46lg) : y.intl.string(y.t.ZmwvDc),
          }
        : e === E.L0.LARGE_GUILD
          ? {
                verifyTitle: y.intl.string(y.t.UYReTs),
                verifyGateDescription: y.intl.string(y.t.SxY4IW),
                verifyAgreementButtonText: y.intl.string(y.t["5B+npG"]),
            }
          : a && r && !n
            ? {
                  verifyTitle: y.intl.string(y.t["H0SG/g"]),
                  verifyGateDescription: y.intl.format(y.t["6++3cX"], { helpURL: h.Z.getArticleURL(b.BhN.AGE_GATE) }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: y.intl.string(y.t["5B+npG"]),
                  verifyGateDescription: r ? y.intl.string(y.t.akjk0f) : y.intl.string(y.t["u/xqhc"]),
                  verifyTitle: r ? y.intl.string(y.t.xi46lg) : y.intl.string(y.t.ZmwvDc),
              };
}
let R = () => {
        let e = _.default.getCurrentUser();
        if (null == e) return !1;
        let t = A();
        return !0 !== e.nsfwAllowed || t;
    },
    D = (e) => {
        if (!R() || null == e) return !1;
        let t = p.Z.getGuild(e);
        return null != t && (0, u.Y2)(t);
    },
    x = (e) => !!R() && null != e && Z(d.Z.getChannel(e)),
    L = (e) => A() && x(e),
    j = (e) => !!L(e) && ((0, g.mN)(E.L0.NSFW_VOICE_CHANNEL), !0);
function M(e, t, n) {
    if (D(e)) {
        let e = null != n && I.has(n) ? n : E.L0.NSFW_SERVER;
        (0, g.mN)(e);
        return;
    }
    if (B() && x(t)) return void (0, g.mN)(null != n ? n : E.L0.NSFW_CHANNEL);
}
let k = (e) => null != e && (e.isNSFW() || (0, u.Y2)(p.Z.getGuild(e.guild_id))),
    U = (e) => {
        if (null == e) return !1;
        let t = (0, s.sf)();
        return k(e) && t;
    },
    G = (e) => {
        var t;
        if (null == e) return !1;
        let n = (null == (t = _.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !0;
        return k(e) && !n;
    };
function Z(e) {
    var t;
    if (null == e) return !1;
    let n = f.Z.didAgree(e.guild_id),
        i = (null == (t = _.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !1,
        a = (0, c.U)("age-gate-utils"),
        o = (0, l.ML)(r.X.AGE_GATED_SPACES) || a,
        d = (0, s.sf)(),
        h = !(n && !i) || (d && o);
    if (e.isNSFW() && h) return !0;
    let m = e.guild_id,
        g = p.Z.getGuild(m);
    return null != g && (0, u.Y2)(g) && h;
}
function F(e) {
    let t = (0, s.L5)(),
        n = (0, i.e7)([f.Z], () => f.Z.didAgree(null == e ? void 0 : e.guild_id)),
        a = (0, i.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        o = (0, l.Uf)(r.X.AGE_GATED_SPACES),
        d = (0, c.s)("age-gate-utils"),
        h = o || d,
        m = (0, i.e7)([p.Z], () => p.Z.getGuild(null == e ? void 0 : e.guild_id)),
        g = h && t,
        E = !(n && !a) || g;
    return null != e && ((!!e.isNSFW() && !!E) || (null != m && !!(0, u.Y2)(m) && !!E));
}
function B() {
    let e = _.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}
function V() {
    let e = (0, o.S)("age-gate-utils"),
        t = (0, s.sf)();
    return e && t;
}
function H() {
    let e = (0, o.H)("age-gate-utils"),
        t = (0, s.L5)();
    return e && t;
}

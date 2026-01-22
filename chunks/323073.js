n.d(t, {
    $v: () => V,
    Bc: () => I,
    Gc: () => U,
    Gn: () => P,
    Jm: () => G,
    Tv: () => M,
    UK: () => L,
    a9: () => R,
    k$: () => w,
    kK: () => k,
    p5: () => Y,
    qR: () => F,
    r9: () => N,
    sP: () => W,
    vL: () => B,
    xq: () => T,
    zS: () => C,
}),
    n(896048),
    n(228524);
var r = n(687123),
    i = n(311907),
    a = n(847599),
    s = n(620715),
    o = n(870383),
    l = n(36149),
    c = n(207560),
    u = n(64313),
    d = n(260509),
    f = n(734057),
    p = n(517019),
    _ = n(71393),
    h = n(287809),
    m = n(975571),
    g = n(661191),
    E = n(612200),
    b = n(204925),
    y = n(652215),
    O = n(985018);

function A(e) {
    return {
        description: e ? (0, o.H)(O.intl.string(O.t["lSgO/q"]), O.intl.string(O.t.SAoMVJ)) : O.intl.string(O.t.SxY4IW),
        agreement: e
            ? (0, o.H)(O.intl.string(O.t.PBG51l), O.intl.string(O.t.Zt4Mf4))
            : (0, o.H)(O.intl.string(O.t["5B+npG"]), O.intl.string(O.t.FDSSia)),
    };
}
let v = new Date("06/16/2020"),
    S = [y.ftr.AGE_RESTRICTED, y.ftr.EXPLICIT],
    I = new Set([b.w_.NSFW_SERVER, b.w_.NSFW_SERVER_INVITE, b.w_.NSFW_SERVER_INVITE_EMBED]);

function T() {
    let e = h.default.getCurrentUser();
    return null != e && g.default.extractTimestamp(e.id) > v.getTime() && null == e.nsfwAllowed;
}

function C(e) {
    return S.includes(e.nsfwLevel);
}

function N() {
    let e = (0, u.o)("age-gate-utils"),
        t = (0, l.p9)();
    return ((0, c.d6)(r.t.AGE_GATED_SPACES) || e) && t;
}

function R() {
    let e = (0, c.aX)(r.t.AGE_GATED_SPACES),
        t = (0, u.j)("age-gate-utils"),
        n = (0, l.i2)();
    return (e || t) && n;
}

function w(e) {
    let t = (0, l.b8)(),
        n = (0, d.wh)(e),
        r = (0, i.bG)([h.default], () => {
            var e;
            return (null == (e = h.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        c = R(),
        { enabled: u } = s.Y.useConfig({
            location: "useAgeGateVerifyContentForGuild",
        }),
        f = (0, o.W)(O.intl.string(O.t.PBG51l), O.intl.string(O.t.Zt4Mf4)),
        p = (0, o.W)(O.intl.string(O.t.akjk0f), O.intl.string(O.t.V6Gmu9)),
        _ = (0, o.W)(O.intl.string(O.t["u/xqhc"]), O.intl.string(O.t["5rygLk"])),
        g = (0, o.W)(O.intl.string(O.t["5B+npG"]), O.intl.string(O.t.FDSSia)),
        E = O.intl.string(n ? O.t.xi46lg : O.t.ZmwvDc);
    return c
        ? t
            ? {
                  title: E,
                  description: n
                      ? O.intl.format(u ? O.t["8tk6bB"] : O.t["7uIWQM"], {})
                      : O.intl.format(u ? O.t.XQZvwn : O.t.x1coPo, {}),
                  agreement: f,
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
            : {
                  title: E,
                  description: n ? p : _,
                  agreement: g,
                  modalType: a.A5.NSFW_CHANNEL_AGE_VERIFY,
              }
        : r
          ? {
                title: O.intl.string(n ? O.t["H0SG/g"] : O.t.NEabBa),
                description: O.intl.format(n ? O.t["6++3cX"] : O.t["2kHZes"], {
                    helpURL: m.A.getArticleURL(y.MVz.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: a.A5.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: E,
                description: O.intl.string(n ? O.t.ZtuRts : O.t.E4Cd5I),
                agreement: O.intl.string(O.t.wVq7uo),
                modalType: a.A5.NSFW_CHANNEL_VERIFIED,
            };
}

function P(e) {
    let t = (0, l.b8)(),
        n = R(),
        r = e === b.w_.NSFW_SERVER || e === b.w_.NSFW_SERVER_INVITE || e === b.w_.NSFW_SERVER_INVITE_EMBED,
        a = (0, i.bG)([h.default], () => {
            var e;
            return (null == (e = h.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        { enabled: c } = s.Y.useConfig({
            location: "useAgeGateVerifyContent",
        }),
        u = (0, o.W)(O.intl.string(O.t.PBG51l), O.intl.string(O.t.Zt4Mf4)),
        d = (0, o.W)(O.intl.string(O.t.UYReTs), O.intl.string(O.t["7ymzsL"])),
        f = (0, o.W)(O.intl.string(O.t["5B+npG"]), O.intl.string(O.t.FDSSia)),
        p = (0, o.W)(O.intl.string(O.t.akjk0f), O.intl.string(O.t.V6Gmu9)),
        _ = (0, o.W)(O.intl.string(O.t["u/xqhc"]), O.intl.string(O.t["5rygLk"]));
    if (e === b.w_.JOIN_LARGE_GUILD_UNDERAGE || e === b.w_.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === b.w_.JOIN_LARGE_GUILD_UNDERAGE ? O.t["u/xsK9"] : O.t.MjQbfi,
            r = A(t);
        return {
            verifyTitle: O.intl.string(n),
            verifyGateDescription: r.description,
            verifyAgreementButtonText: r.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: u,
              verifyGateDescription: r
                  ? O.intl.format(c ? O.t["8tk6bB"] : O.t["7uIWQM"], {})
                  : O.intl.format(c ? O.t.XQZvwn : O.t.x1coPo, {}),
              verifyTitle: r ? O.intl.string(O.t.xi46lg) : O.intl.string(O.t.ZmwvDc),
          }
        : e === b.w_.LARGE_GUILD
          ? {
                verifyTitle: d,
                verifyGateDescription: O.intl.string(O.t.SxY4IW),
                verifyAgreementButtonText: f,
            }
          : a && r && !n
            ? {
                  verifyTitle: O.intl.string(O.t["H0SG/g"]),
                  verifyGateDescription: O.intl.format(O.t["6++3cX"], {
                      helpURL: m.A.getArticleURL(y.MVz.AGE_GATE),
                  }),
                  verifyAgreementButtonText: null,
              }
            : {
                  verifyAgreementButtonText: f,
                  verifyGateDescription: r ? p : _,
                  verifyTitle: r ? O.intl.string(O.t.xi46lg) : O.intl.string(O.t.ZmwvDc),
              };
}
let D = () => {
        let e = h.default.getCurrentUser();
        if (null == e) return !1;
        let t = N();
        return !0 !== e.nsfwAllowed || t;
    },
    x = (e) => {
        if (!D() || null == e) return !1;
        let t = _.A.getGuild(e);
        return null != t && (0, d.wh)(t);
    },
    L = (e) => !!D() && null != e && F(f.A.getChannel(e)),
    j = (e) => N() && L(e),
    M = (e) => !!j(e) && ((0, E.yO)(b.w_.NSFW_VOICE_CHANNEL), !0);

function k(e, t, n) {
    if (x(e)) {
        let e = null != n && I.has(n) ? n : b.w_.NSFW_SERVER;
        (0, E.yO)(e);
        return;
    }
    if (H() && L(t)) return void (0, E.yO)(null != n ? n : b.w_.NSFW_CHANNEL);
}
let U = (e) => null != e && (e.isNSFW() || (0, d.wh)(_.A.getGuild(e.guild_id))),
    G = (e) => {
        if (null == e) return !1;
        let t = (0, l.p9)();
        return U(e) && t;
    },
    V = (e) => {
        var t;
        if (null == e) return !1;
        let n = (null == (t = h.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !0;
        return U(e) && !n;
    };

function F(e) {
    var t;
    if (null == e) return !1;
    let n = p.A.didAgree(e.guild_id),
        i = (null == (t = h.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !1,
        a = (0, u.o)("age-gate-utils"),
        s = (0, c.d6)(r.t.AGE_GATED_SPACES) || a,
        o = (0, l.p9)(),
        f = !(n && !i) || (o && s);
    if (e.isNSFW() && f) return !0;
    let m = e.guild_id,
        g = _.A.getGuild(m);
    return null != g && (0, d.wh)(g) && f;
}

function B(e) {
    let t = (0, l.i2)(),
        n = (0, i.bG)([p.A], () => p.A.didAgree(null == e ? void 0 : e.guild_id)),
        a = (0, i.bG)([h.default], () => {
            var e;
            return (null == (e = h.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        s = (0, c.aX)(r.t.AGE_GATED_SPACES),
        o = (0, u.j)("age-gate-utils"),
        f = s || o,
        m = (0, i.bG)([_.A], () => _.A.getGuild(null == e ? void 0 : e.guild_id)),
        g = f && t,
        E = !(n && !a) || g;
    return null != e && ((!!e.isNSFW() && !!E) || (null != m && !!(0, d.wh)(m) && !!E));
}

function H() {
    let e = h.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}

function Y() {
    let e = (0, c.d6)(r.t.COMMANDS_TOGGLE),
        t = (0, u.o)("age-gate-utils") || e,
        n = (0, l.p9)();
    return t && n;
}

function W() {
    let e = (0, c.aX)(r.t.COMMANDS_TOGGLE),
        t = (0, u.j)("age-gate-utils") || e,
        n = (0, l.i2)();
    return t && n;
}

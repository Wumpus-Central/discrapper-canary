n.d(t, {
    $5: () => F,
    I8: () => k,
    Kt: () => R,
    RW: () => M,
    T5: () => V,
    Y3: () => Z,
    Yt: () => S,
    _t: () => G,
    a1: () => w,
    bN: () => I,
    dl: () => N,
    ft: () => B,
    kH: () => P,
    qF: () => U,
    zd: () => L,
});
var r = n(442837),
    i = n(480916),
    a = n(453679),
    o = n(81643),
    s = n(974814),
    l = n(500496),
    c = n(601964),
    u = n(592125),
    d = n(731290),
    f = n(430824),
    _ = n(594174),
    p = n(63063),
    h = n(709054),
    m = n(758119),
    g = n(723359),
    E = n(981631),
    b = n(388032);
let y = new Date("06/16/2020"),
    O = [E.V_K.AGE_RESTRICTED, E.V_K.EXPLICIT],
    v = [g.L0.NSFW_SERVER, g.L0.NSFW_SERVER_INVITE, g.L0.NSFW_SERVER_INVITE_EMBED];
function I() {
    let e = _.default.getCurrentUser();
    return null != e && h.default.extractTimestamp(e.id) > y.getTime() && null == e.nsfwAllowed;
}
function S(e) {
    return O.includes(e.nsfwLevel);
}
function T(e) {
    return null != e && A(f.Z.getGuild(e));
}
function A(e) {
    let t = (0, o.sf)();
    return null != e && e.features.has(E.oNc.AGE_VERIFICATION_LARGE_GUILD) && (0, a.u)("age_verification_utils") && t;
}
function C(e) {
    let t = (0, r.e7)([f.Z], () => f.Z.getGuild(e)),
        n = (0, o.L5)(),
        i = (0, a.z)("age_verification_utils");
    return null != t && t.features.has(E.oNc.AGE_VERIFICATION_LARGE_GUILD) && i && n;
}
function N() {
    let e = (0, s.H1)({ location: "age-gate-utils" }),
        t = (0, o.sf)();
    return e && t;
}
function R() {
    let e = (0, s.s8)({ location: "age-gate-utils" }),
        t = (0, o.L5)();
    return e && t;
}
function P(e) {
    let t = (0, o.l6)(),
        n = (0, c.Y2)(e),
        a = C(null == e ? void 0 : e.id),
        s = (0, r.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        l = R(),
        u = b.intl.string(n ? b.t.xi46lp : b.t.ZmwvDQ);
    return l
        ? t
            ? {
                  title: u,
                  description: n ? b.intl.format(b.t["7uIWQE"], {}) : b.intl.format(b.t.x1coPj, {}),
                  agreement: b.intl.string(b.t.PBG51t),
                  modalType: i.it.NSFW_CHANNEL_AGE_VERIFY,
              }
            : a
              ? {
                    title: b.intl.string(b.t.UYReTk),
                    description: b.intl.string(b.t.SxY4IS),
                    agreement: b.intl.string(b.t["5B+npK"]),
                    modalType: i.it.GUILD_LARGE_SERVER,
                }
              : {
                    title: u,
                    description: n ? b.intl.string(b.t.akjk0d) : b.intl.string(b.t["u/xqhY"]),
                    agreement: b.intl.string(b.t["5B+npK"]),
                    modalType: i.it.NSFW_CHANNEL_AGE_VERIFY,
                }
        : s
          ? {
                title: b.intl.string(n ? b.t["H0SG/v"] : b.t.NEabBQ),
                description: b.intl.format(n ? b.t["6++3cX"] : b.t["2kHZen"], {
                    helpURL: p.Z.getArticleURL(E.BhN.NSFW_AGE_GATING),
                }),
                agreement: null,
                modalType: i.it.NSFW_CHANNEL_UNDERAGE,
            }
          : {
                title: u,
                description: b.intl.string(n ? b.t.ZtuRtr : b.t.E4Cd5O),
                agreement: b.intl.string(b.t.wVq7ur),
                modalType: i.it.NSFW_CHANNEL_VERIFIED,
            };
}
function w(e) {
    let t = (0, o.l6)(),
        n = e === g.L0.NSFW_SERVER || e === g.L0.NSFW_SERVER_INVITE || e === g.L0.NSFW_SERVER_INVITE_EMBED;
    return t
        ? {
              verifyAgreementButtonText: b.intl.string(b.t.PBG51t),
              verifyGateDescription: n ? b.intl.format(b.t["7uIWQE"], {}) : b.intl.format(b.t.x1coPj, {}),
              verifyTitle: n ? b.intl.string(b.t.xi46lp) : b.intl.string(b.t.ZmwvDQ),
          }
        : e === g.L0.LARGE_GUILD
          ? {
                verifyTitle: b.intl.string(b.t.UYReTk),
                verifyGateDescription: b.intl.string(b.t.SxY4IS),
                verifyAgreementButtonText: b.intl.string(b.t["5B+npK"]),
            }
          : {
                verifyAgreementButtonText: b.intl.string(b.t["5B+npK"]),
                verifyGateDescription: n ? b.intl.string(b.t.akjk0d) : b.intl.string(b.t["u/xqhY"]),
                verifyTitle: n ? b.intl.string(b.t.xi46lp) : b.intl.string(b.t.ZmwvDQ),
            };
}
let D = () => {
        let e = _.default.getCurrentUser();
        if (null == e) return !1;
        let t = N();
        return !0 !== e.nsfwAllowed || t;
    },
    x = (e) => {
        if (!D() || null == e) return !1;
        let t = f.Z.getGuild(e);
        return (
            null != t &&
            (0, c.Y2)(t) &&
            (0, l.Tz)({
                guildId: e,
                location: "age-gate-utils",
            })
        );
    },
    L = (e) => !!D() && null != e && Z(u.Z.getChannel(e)),
    j = (e) => N() && L(e),
    M = (e) => !!j(e) && ((0, m.mN)(g.L0.NSFW_VOICE_CHANNEL), !0);
function k(e, t, n) {
    if (x(e)) {
        let e = null != n && v.includes(n) ? n : g.L0.NSFW_SERVER;
        (0, m.mN)(e);
        return;
    }
    return T(e) ? void (0, m.mN)(g.L0.LARGE_GUILD) : L(t) ? void (0, m.mN)(null != n ? n : g.L0.NSFW_CHANNEL) : void 0;
}
let U = (e) => null != e && (e.isNSFW() || (0, c.Y2)(f.Z.getGuild(e.guild_id))),
    G = (e) => {
        if (null == e) return !1;
        let t = (0, o.sf)();
        return U(e) && t;
    },
    B = (e) => {
        var t;
        if (null == e) return !1;
        let n = (null == (t = _.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !0;
        return U(e) && !n;
    };
function Z(e) {
    var t;
    if (null == e) return !1;
    let n = d.Z.didAgree(e.guild_id),
        r = (null == (t = _.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !1,
        i = (0, s.H1)({ location: "age-gate-utils" }),
        a = (0, o.sf)(),
        u = !(n && !r) || (a && i);
    if (e.isNSFW() && u) return !0;
    let p = e.guild_id,
        h = f.Z.getGuild(p);
    return (
        null != h &&
        (((0, l.Tz)({
            guildId: p,
            location: "age-gate-utils",
        }) &&
            (0, c.Y2)(h) &&
            a) ||
            (A(h) && a))
    );
}
function F(e) {
    let t = (0, o.L5)(),
        n = (0, r.e7)([d.Z], () => d.Z.didAgree(null == e ? void 0 : e.guild_id)),
        i = (0, r.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        a = C(null == e ? void 0 : e.guild_id),
        u = (0, s.s8)({ location: "age-gate-utils" }),
        p = (0, l.j0)({
            guildId: null == e ? void 0 : e.guild_id,
            location: "age-gate-utils",
        }),
        h = (0, r.e7)([f.Z], () => f.Z.getGuild(null == e ? void 0 : e.guild_id)),
        m = u && t,
        g = !(n && !i) || m;
    return null != e && ((!!e.isNSFW() && !!g) || (null != h && ((!!(p && (0, c.Y2)(h)) && !!t) || (!!a && !!t))));
}
function V() {
    let e = _.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}

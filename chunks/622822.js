n.d(t, {
    $5: () => U,
    I8: () => x,
    Kt: () => A,
    RW: () => D,
    T5: () => G,
    Y3: () => k,
    Yt: () => v,
    _t: () => j,
    a1: () => C,
    bN: () => O,
    dl: () => S,
    ft: () => M,
    qF: () => L,
    zd: () => P,
});
var r = n(442837),
    i = n(453679),
    a = n(81643),
    o = n(974814),
    s = n(500496),
    l = n(601964),
    c = n(592125),
    u = n(731290),
    d = n(430824),
    f = n(594174),
    _ = n(709054),
    p = n(758119),
    h = n(723359),
    m = n(981631),
    g = n(388032);
let E = new Date("06/16/2020"),
    b = [m.V_K.AGE_RESTRICTED, m.V_K.EXPLICIT],
    y = [h.L0.NSFW_SERVER, h.L0.NSFW_SERVER_INVITE, h.L0.NSFW_SERVER_INVITE_EMBED];
function O() {
    let e = f.default.getCurrentUser();
    return null != e && _.default.extractTimestamp(e.id) > E.getTime() && null == e.nsfwAllowed;
}
function v(e) {
    return b.includes(e.nsfwLevel);
}
function I(e) {
    let t = d.Z.getGuild(e),
        n = (0, a.sf)();
    return null != t && t.features.has(m.oNc.AGE_VERIFICATION_LARGE_GUILD) && (0, i.u)("age_verification_utils") && n;
}
function T(e) {
    let t = (0, r.e7)([d.Z], () => d.Z.getGuild(e)),
        n = (0, a.L5)(),
        o = (0, i.z)("age_verification_utils");
    return null != t && t.features.has(m.oNc.AGE_VERIFICATION_LARGE_GUILD) && o && n;
}
function S() {
    let e = (0, o.H1)({ location: "age-gate-utils" }),
        t = (0, a.sf)();
    return e && t;
}
function A() {
    let e = (0, o.s8)({ location: "age-gate-utils" }),
        t = (0, a.L5)();
    return e && t;
}
function C(e) {
    let t = (0, a.l6)(),
        n = e === h.L0.NSFW_SERVER || e === h.L0.NSFW_SERVER_INVITE || e === h.L0.NSFW_SERVER_INVITE_EMBED;
    return t
        ? {
              verifyAgreementButtonText: g.intl.string(g.t.PBG51t),
              verifyGateDescription: n ? g.intl.format(g.t["7uIWQE"], {}) : g.intl.format(g.t.x1coPj, {}),
          }
        : {
              verifyAgreementButtonText: g.intl.string(g.t["5B+npK"]),
              verifyGateDescription: n ? g.intl.string(g.t.akjk0d) : g.intl.string(g.t["u/xqhY"]),
          };
}
let N = () => {
        let e = f.default.getCurrentUser();
        if (null == e) return !1;
        let t = S();
        return !0 !== e.nsfwAllowed || t;
    },
    R = (e) => {
        if (!N() || null == e) return !1;
        let t = d.Z.getGuild(e);
        return (
            null != t &&
            (0, l.Y2)(t) &&
            (0, s.Tz)({
                guildId: e,
                location: "age-gate-utils",
            })
        );
    },
    P = (e) => !!N() && null != e && k(c.Z.getChannel(e)),
    w = (e) => S() && P(e),
    D = (e) => !!w(e) && ((0, p.mN)(h.L0.NSFW_VOICE_CHANNEL), !0);
function x(e, t, n) {
    if (R(e)) {
        let e = null != n && y.includes(n) ? n : h.L0.NSFW_SERVER;
        (0, p.mN)(e);
        return;
    }
    if (P(t)) return void (0, p.mN)(null != n ? n : h.L0.NSFW_CHANNEL);
}
let L = (e) => null != e && (e.isNSFW() || (0, l.Y2)(d.Z.getGuild(e.guild_id))),
    j = (e) => {
        if (null == e) return !1;
        let t = (0, a.sf)();
        return L(e) && t;
    },
    M = (e) => {
        var t;
        if (null == e) return !1;
        let n = (null == (t = f.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !0;
        return L(e) && !n;
    };
function k(e) {
    var t;
    if (null == e) return !1;
    let n = u.Z.didAgree(e.guild_id),
        r = (null == (t = f.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !1,
        i = (0, o.H1)({ location: "age-gate-utils" }),
        c = (0, a.sf)(),
        _ = !(n && !r) || (c && i);
    if (e.isNSFW() && _) return !0;
    let p = e.guild_id,
        h = d.Z.getGuild(p);
    return (
        null != h &&
        (((0, s.Tz)({
            guildId: p,
            location: "age-gate-utils",
        }) &&
            (0, l.Y2)(h) &&
            c) ||
            (I(p) && c))
    );
}
function U(e) {
    let t = (0, a.L5)(),
        n = (0, r.e7)([u.Z], () => u.Z.didAgree(null == e ? void 0 : e.guild_id)),
        i = (0, r.e7)([f.default], () => {
            var e;
            return (null == (e = f.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        c = T(null == e ? void 0 : e.guild_id),
        _ = (0, o.s8)({ location: "age-gate-utils" }),
        p = (0, s.j0)({
            guildId: null == e ? void 0 : e.guild_id,
            location: "age-gate-utils",
        }),
        h = (0, r.e7)([d.Z], () => d.Z.getGuild(null == e ? void 0 : e.guild_id)),
        m = _ && t,
        g = !(n && !i) || m;
    return null != e && ((!!e.isNSFW() && !!g) || (null != h && ((!!(p && (0, l.Y2)(h)) && !!t) || (!!c && !!t))));
}
function G() {
    let e = f.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}

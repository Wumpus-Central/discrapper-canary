n.d(t, {
    Gb: () => P,
    I8: () => C,
    Kt: () => O,
    RW: () => N,
    T5: () => w,
    Yt: () => b,
    a1: () => v,
    aC: () => R,
    bN: () => E,
    dl: () => y,
    zd: () => S,
});
var r = n(81643),
    i = n(974814),
    a = n(500496),
    o = n(601964),
    s = n(592125),
    l = n(430824),
    c = n(594174),
    u = n(709054),
    d = n(758119),
    f = n(723359),
    _ = n(981631),
    p = n(388032);
let h = new Date("06/16/2020"),
    m = [_.V_K.AGE_RESTRICTED, _.V_K.EXPLICIT],
    g = [f.L0.NSFW_SERVER, f.L0.NSFW_SERVER_INVITE, f.L0.NSFW_SERVER_INVITE_EMBED];
function E() {
    let e = c.default.getCurrentUser();
    return null != e && u.default.extractTimestamp(e.id) > h.getTime() && null == e.nsfwAllowed;
}
function b(e) {
    return m.includes(e.nsfwLevel);
}
function y() {
    let e = (0, i.H1)({ location: "age-gate-utils" }),
        t = (0, r.sf)();
    return e && t;
}
function O() {
    let e = (0, i.s8)({ location: "age-gate-utils" }),
        t = (0, r.L5)();
    return e && t;
}
function v(e) {
    let t = (0, r.l6)(),
        n = e === f.L0.NSFW_SERVER || e === f.L0.NSFW_SERVER_INVITE || e === f.L0.NSFW_SERVER_INVITE_EMBED;
    return t
        ? {
              verifyAgreementButtonText: p.intl.string(p.t.PBG51t),
              verifyGateDescription: n ? p.intl.format(p.t["7uIWQE"], {}) : p.intl.format(p.t.x1coPj, {}),
          }
        : {
              verifyAgreementButtonText: p.intl.string(p.t["5B+npK"]),
              verifyGateDescription: n ? p.intl.string(p.t.akjk0d) : p.intl.string(p.t["u/xqhY"]),
          };
}
let I = () => {
        let e = c.default.getCurrentUser();
        if (null == e) return !1;
        let t = y();
        return null == e.nsfwAllowed || t;
    },
    T = (e) => {
        if (!I() || null == e) return !1;
        let t = l.Z.getGuild(e);
        return (
            null != t &&
            (0, o.Y2)(t) &&
            (0, a.Tz)({
                guildId: e,
                location: "age-gate-utils",
            })
        );
    },
    S = (e) => !!I() && null != e && R(s.Z.getChannel(e)),
    A = (e) => y() && S(e),
    N = (e) => !!A(e) && ((0, d.mN)(f.L0.NSFW_VOICE_CHANNEL), !0);
function C(e, t, n) {
    if (T(e)) {
        let e = null != n && g.includes(n) ? n : f.L0.NSFW_SERVER;
        (0, d.mN)(e);
        return;
    }
    if (S(t)) return void (0, d.mN)(null != n ? n : f.L0.NSFW_CHANNEL);
}
function R(e) {
    if (null == e) return !1;
    let t = e.guild_id,
        n = l.Z.getGuild(t);
    return e.isNSFW() || (null != n && (0, o.Y2)(n));
}
function P(e) {
    return null != e && e.isNSFW();
}
function w() {
    let e = c.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}

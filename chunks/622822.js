n.d(t, {
    I8: () => S,
    Kt: () => y,
    T5: () => N,
    Yt: () => E,
    a1: () => O,
    aC: () => A,
    bN: () => g,
    dl: () => b
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
let h = new Date('06/16/2020'),
    m = [_.V_K.AGE_RESTRICTED, _.V_K.EXPLICIT];
function g() {
    let e = c.default.getCurrentUser();
    return null != e && u.default.extractTimestamp(e.id) > h.getTime() && null == e.nsfwAllowed;
}
function E(e) {
    return m.includes(e.nsfwLevel);
}
function b() {
    let e = (0, i.H1)({ location: 'age-gate-utils' }),
        t = (0, r.sf)();
    return e && t;
}
function y() {
    let e = (0, i.s8)({ location: 'age-gate-utils' }),
        t = (0, r.L5)();
    return e && t;
}
function O(e) {
    let t = (0, r.l6)(),
        n = e === f.L0.NSFW_SERVER || e === f.L0.NSFW_SERVER_INVITE || e === f.L0.NSFW_SERVER_INVITE_EMBED;
    return t
        ? {
              verifyAgreementButtonText: p.intl.string(p.t.PBG51t),
              verifyGateDescription: n ? p.intl.format(p.t['7uIWQE'], {}) : p.intl.format(p.t.x1coPj, {})
          }
        : {
              verifyAgreementButtonText: p.intl.string(p.t['5B+npK']),
              verifyGateDescription: n ? p.intl.string(p.t.akjk0d) : p.intl.string(p.t['u/xqhY'])
          };
}
let v = () => {
        let e = c.default.getCurrentUser();
        if (null == e) return !1;
        let t = b();
        return null == e.nsfwAllowed || t;
    },
    I = (e) => {
        if (!v() || null == e) return !1;
        let t = l.Z.getGuild(e);
        return (
            null != t &&
            (0, o.Y2)(t) &&
            (0, a.Tz)({
                guildId: e,
                location: 'age-gate-utils'
            })
        );
    },
    T = (e) => !!v() && null != e && A(s.Z.getChannel(e));
function S(e, t, n) {
    return I(e) ? void (0, d.mN)(null != n ? n : f.L0.NSFW_SERVER) : T(t) ? void (0, d.mN)(null != n ? n : f.L0.NSFW_CHANNEL) : void 0;
}
function A(e) {
    if (null == e) return !1;
    let t = e.guild_id,
        n = l.Z.getGuild(t);
    return e.isNSFW() || (null != n && (0, o.Y2)(n));
}
function N() {
    let e = c.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}

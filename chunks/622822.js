n.d(t, {
    I8: () => O,
    Kt: () => E,
    Yt: () => b,
    a1: () => y,
    bN: () => h
});
var r = n(81643),
    i = n(974814),
    l = n(500496),
    a = n(601964),
    o = n(592125),
    s = n(430824),
    c = n(594174),
    u = n(709054),
    d = n(758119),
    p = n(723359),
    m = n(981631),
    f = n(388032);
let g = new Date('06/16/2020'),
    _ = [m.V_K.AGE_RESTRICTED, m.V_K.EXPLICIT];
function h() {
    let e = c.default.getCurrentUser();
    return null != e && u.default.extractTimestamp(e.id) > g.getTime() && null == e.nsfwAllowed;
}
function b(e) {
    return _.includes(e.nsfwLevel);
}
function E() {
    let e = (0, i.s8)({ location: 'age-gate-utils' }),
        t = (0, r.L5)();
    return e && t;
}
function y(e) {
    let t = (0, r.l6)(),
        n = e === p.L0.NSFW_SERVER || e === p.L0.NSFW_SERVER_INVITE || e === p.L0.NSFW_SERVER_INVITE_EMBED;
    return t
        ? {
              verifyAgreementButtonText: f.intl.string(f.t.PBG51t),
              verifyGateDescription: n ? f.intl.format(f.t['7uIWQE'], {}) : f.intl.format(f.t.x1coPj, {})
          }
        : {
              verifyAgreementButtonText: f.intl.string(f.t['5B+npK']),
              verifyGateDescription: n ? f.intl.string(f.t.akjk0d) : f.intl.string(f.t['u/xqhY'])
          };
}
let C = () => {
        let e = c.default.getCurrentUser();
        if (null == e) return !1;
        let t = (function () {
            let e = (0, i.H1)({ location: 'age-gate-utils' }),
                t = (0, r.sf)();
            return e && t;
        })();
        return null == e.nsfwAllowed || t;
    },
    x = (e) => {
        if (!C() || null == e) return !1;
        let t = s.Z.getGuild(e);
        return (
            null != t &&
            (0, a.Y2)(t) &&
            (0, l.Tz)({
                guildId: e,
                location: 'age-gate-utils'
            })
        );
    },
    v = (e) => {
        var t;
        return !!C() && null != e && (null == (t = o.Z.getChannel(e)) ? void 0 : t.isNSFW());
    };
function O(e, t, n) {
    return x(e) ? void (0, d.mN)(null != n ? n : p.L0.NSFW_SERVER) : v(t) ? void (0, d.mN)(null != n ? n : p.L0.NSFW_CHANNEL) : void 0;
}

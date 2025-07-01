n.d(t, {
    I8: () => v,
    Kt: () => b,
    Yt: () => h,
    a1: () => E,
    bN: () => _
});
var r = n(81643),
    i = n(974814),
    l = n(500496),
    a = n(592125),
    o = n(430824),
    s = n(594174),
    c = n(709054),
    u = n(758119),
    d = n(723359),
    p = n(981631),
    m = n(388032);
let f = new Date('06/16/2020'),
    g = [p.V_K.AGE_RESTRICTED, p.V_K.EXPLICIT];
function _() {
    let e = s.default.getCurrentUser();
    return null != e && c.default.extractTimestamp(e.id) > f.getTime() && null == e.nsfwAllowed;
}
function h(e) {
    return g.includes(e.nsfwLevel);
}
function b() {
    let e = (0, i.s8)({ location: 'age-gate-utils' }),
        t = (0, r.L5)();
    return e && t;
}
function E(e) {
    let t = (0, r.l6)(),
        n = e === d.L0.NSFW_SERVER || e === d.L0.NSFW_SERVER_INVITE || e === d.L0.NSFW_SERVER_INVITE_EMBED;
    return t
        ? {
              verifyAgreementButtonText: m.intl.string(m.t.PBG51t),
              verifyGateDescription: n ? m.intl.format(m.t['7uIWQE'], {}) : m.intl.format(m.t.x1coPj, {})
          }
        : {
              verifyAgreementButtonText: m.intl.string(m.t['5B+npK']),
              verifyGateDescription: n ? m.intl.string(m.t.akjk0d) : m.intl.string(m.t['u/xqhY'])
          };
}
let y = () => {
        let e = s.default.getCurrentUser();
        if (null == e) return !1;
        let t = (function () {
            let e = (0, i.H1)({ location: 'age-gate-utils' }),
                t = (0, r.sf)();
            return e && t;
        })();
        return null == e.nsfwAllowed || t;
    },
    C = (e) => {
        if (!y() || null == e) return !1;
        let t = o.Z.getGuild(e);
        return (
            (null == t ? void 0 : t.isNSFW()) &&
            (0, l.Tz)({
                guildId: e,
                location: 'age-gate-utils'
            })
        );
    },
    x = (e) => {
        var t;
        return !!y() && null != e && (null == (t = a.Z.getChannel(e)) ? void 0 : t.isNSFW());
    };
function v(e, t, n) {
    return C(e) ? void (0, u.mN)(null != n ? n : d.L0.NSFW_SERVER) : x(t) ? void (0, u.mN)(null != n ? n : d.L0.NSFW_CHANNEL) : void 0;
}

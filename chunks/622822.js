n.d(t, {
    Kt: () => f,
    Yt: () => m,
    a1: () => h,
    bN: () => p
});
var r = n(81643),
    i = n(974814),
    l = n(594174),
    a = n(709054),
    o = n(723359),
    s = n(981631),
    c = n(388032);
let u = new Date('06/16/2020'),
    d = [s.V_K.AGE_RESTRICTED, s.V_K.EXPLICIT];
function p() {
    let e = l.default.getCurrentUser();
    return null != e && a.default.extractTimestamp(e.id) > u.getTime() && null == e.nsfwAllowed;
}
function m(e) {
    return d.includes(e.nsfwLevel);
}
function f() {
    let e = (0, i.s8)({ location: 'age-gate-utils' }),
        t = (0, r.L5)();
    return e && t;
}
function h(e) {
    let t = (0, r.l6)(),
        n = e === o.L0.NSFW_SERVER || e === o.L0.NSFW_SERVER_INVITE || e === o.L0.NSFW_SERVER_INVITE_EMBED;
    return t
        ? {
              verifyAgreementButtonText: c.intl.string(c.t.PBG51t),
              verifyGateDescription: n ? c.intl.format(c.t['7uIWQE'], {}) : c.intl.format(c.t.x1coPj, {})
          }
        : {
              verifyAgreementButtonText: c.intl.string(c.t['5B+npK']),
              verifyGateDescription: n ? c.intl.string(c.t.akjk0d) : c.intl.string(c.t['u/xqhY'])
          };
}

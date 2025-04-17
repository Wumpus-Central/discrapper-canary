n.d(t, {
    Kt: () => m,
    Yt: () => p,
    a1: () => f,
    bN: () => d
});
var r = n(81643),
    i = n(974814),
    a = n(594174),
    l = n(709054),
    o = n(981631),
    s = n(388032);
let c = new Date('06/16/2020'),
    u = [o.V_K.AGE_RESTRICTED, o.V_K.EXPLICIT];
function d() {
    let e = a.default.getCurrentUser();
    return null != e && l.default.extractTimestamp(e.id) > c.getTime() && null == e.nsfwAllowed;
}
function p(e) {
    return u.includes(e.nsfwLevel);
}
function m() {
    let e = (0, i.s8)({ location: 'age-gate-utils' }),
        t = (0, r.L5)();
    return e && t;
}
function f() {
    return (0, r.l6)()
        ? {
              verifyAgreementButtonText: s.NW.string(s.t['2L5V8/']),
              verifyGateDescription: s.NW.format(s.t.ECL1eX, {})
          }
        : {
              verifyAgreementButtonText: s.NW.string(s.t.SFWVER),
              verifyGateDescription: s.NW.string(s.t['NjO/s7'])
          };
}

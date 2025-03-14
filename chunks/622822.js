n.d(t, {
    Kt: () => m,
    Yt: () => p,
    a1: () => f,
    bN: () => u
});
var r = n(81643),
    i = n(974814),
    a = n(594174),
    o = n(709054),
    l = n(981631),
    s = n(388032);
let c = new Date('06/16/2020'),
    d = [l.V_K.AGE_RESTRICTED, l.V_K.EXPLICIT];
function u() {
    let e = a.default.getCurrentUser();
    return null != e && o.default.extractTimestamp(e.id) > c.getTime() && null == e.nsfwAllowed;
}
function p(e) {
    return d.includes(e.nsfwLevel);
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

n.d(t, {
    G: () => f,
    QI: () => c,
    VR: () => d,
    dU: () => u,
    jX: () => l
}),
    n(789020);
var i = n(512722),
    r = n.n(i),
    a = n(630388),
    s = n(48541),
    o = n(981631);
function l(e, t, n) {
    e || void 0 === t || r()(n === t, 'Premium type should not change for non-staff users');
}
function u(e) {
    return 'production' === s.C.TEST && null != e ? e : 'production';
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return u(t) === s.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === s.C.STAGING || (null != e && (e.isStaff() || e.isStaffPersonal()));
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return u(t) === s.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === s.C.STAGING || (null != e && (!!(null != e.flags && (0, a.yE)(e.flags, o.xW$.STAFF)) || null != e.personal_connection_id));
}
function f(e) {
    return void 0 !== e && e === o.WND ? null : e;
}

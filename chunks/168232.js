n.d(t, {
    G: () => f,
    QI: () => u,
    VR: () => d,
    dU: () => c,
    jX: () => l
}),
    n(789020);
var r = n(512722),
    i = n.n(r),
    o = n(630388),
    a = n(48541),
    s = n(981631);
function l(e, t, n) {
    e || void 0 === t || i()(n === t, 'Premium type should not change for non-staff users');
}
function c(e) {
    return 'production' === a.C.TEST && null != e ? e : 'production';
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return c(t) === a.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === a.C.STAGING || (null != e && (e.isStaff() || e.isStaffPersonal()));
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return c(t) === a.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === a.C.STAGING || (null != e && (!!(null != e.flags && (0, o.yE)(e.flags, s.xW$.STAFF)) || null != e.personal_connection_id));
}
function f(e) {
    return void 0 !== e && e === s.WND ? null : e;
}

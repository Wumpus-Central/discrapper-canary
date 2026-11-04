n(938796);
var i = n(284009),
    r = n.n(i),
    a = n(665260),
    s = n(115093),
    l = n(652215);
function o(e) {
    return "production" === s.B.TEST && null != e ? e : "production";
}
n.d(
    t,
    {},
    {
        I9: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            return (
                o(t) === s.B.DEVELOPMENT ||
                window.GLOBAL_ENV.RELEASE_CHANNEL === s.B.STAGING ||
                (null != e && (e.isStaff() || e.isStaffPersonal()))
            );
        },
        _$: o,
        _D: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            return (
                o(t) === s.B.DEVELOPMENT ||
                window.GLOBAL_ENV.RELEASE_CHANNEL === s.B.STAGING ||
                (null != e &&
                    (!!(null != e.flags && (0, a.Lt)(e.flags, l.nhx.STAFF)) || null != e.personal_connection_id))
            );
        },
        gX: function (e, t, n) {
            e || void 0 === t || r()(n === t, "Premium type should not change for non-staff users");
        },
        nq: function (e) {
            return void 0 !== e && 0 === e ? null : e;
        },
    },
);

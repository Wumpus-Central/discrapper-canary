r.d(n, {
    X: function () {
        return o;
    }
});
var i = r(960048),
    a = r(981631);
let s = (e) => ('code' in e && null != e.code ? [a.evJ.UNAUTHORIZED, a.evJ.EMAIL_VERIFICATION_REQUIRED, a.evJ.USER_BANNED].includes(e.code) : 'status' in e && null != e.status && 0 === e.status),
    o = (e) => {
        !s(e) && i.Z.captureException(e);
    };

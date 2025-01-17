r.d(n, {
    G: function () {
        return l;
    }
});
var i = r(960048),
    a = r(981631);
let s = [a.evJ.UNAUTHORIZED, a.evJ.EMAIL_VERIFICATION_REQUIRED, a.evJ.USER_BANNED],
    o = (e) => {
        var n;
        return null != e && (!!(('status' in e && 'number' == typeof e.status && 0 === e.status) || ('code' in e && 'number' == typeof e.code && s.includes(e.code)) || ('body' in e && null != e.body && 'object' == typeof e.body && 'code' in e.body && 'number' == typeof (null === (n = e.body) || void 0 === n ? void 0 : n.code) && s.includes(e.body.code))) || !1);
    },
    l = (e) => {
        null != e && !o(e) && i.Z.captureException(e);
    };

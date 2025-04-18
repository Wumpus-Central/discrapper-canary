n.d(t, { G: () => s });
var r = n(960048),
    i = n(981631);
let a = [i.evJ.UNAUTHORIZED, i.evJ.EMAIL_VERIFICATION_REQUIRED, i.evJ.USER_BANNED],
    o = (e) => {
        var t;
        return null != e && (!!(('status' in e && 'number' == typeof e.status && 0 === e.status) || ('code' in e && 'number' == typeof e.code && a.includes(e.code)) || ('body' in e && null != e.body && 'object' == typeof e.body && 'code' in e.body && 'number' == typeof (null == (t = e.body) ? void 0 : t.code) && a.includes(e.body.code))) || !1);
    },
    s = (e) => {
        null == e || o(e) || r.Z.captureException(e);
    };

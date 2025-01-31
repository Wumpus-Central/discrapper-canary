n.d(t, { G: () => o });
var i = n(960048),
    r = n(981631);
let a = [r.evJ.UNAUTHORIZED, r.evJ.EMAIL_VERIFICATION_REQUIRED, r.evJ.USER_BANNED],
    s = (e) => {
        var t;
        return null != e && !!(('status' in e && 'number' == typeof e.status && 0 === e.status) || ('code' in e && 'number' == typeof e.code && a.includes(e.code)) || ('body' in e && null != e.body && 'object' == typeof e.body && 'code' in e.body && 'number' == typeof (null === (t = e.body) || void 0 === t ? void 0 : t.code) && a.includes(e.body.code)));
    },
    o = (e) => {
        null == e || s(e) || i.Z.captureException(e);
    };

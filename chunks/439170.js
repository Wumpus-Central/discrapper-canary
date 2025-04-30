n.d(t, { G: () => c }), n(388685);
var r = n(960048),
    i = n(981631);
let o = [i.evJ.UNAUTHORIZED, i.evJ.EMAIL_VERIFICATION_REQUIRED, i.evJ.USER_BANNED],
    a = new Set([500, 502, 503, 504]),
    s = new Set([401, 403, 405, 409, 429]),
    l = (e) => {
        var t;
        return null != e && (!!(('status' in e && 'number' == typeof e.status && (0 === e.status || a.has(e.status) || s.has(e.status))) || ('code' in e && 'number' == typeof e.code && o.includes(e.code)) || ('body' in e && null != e.body && 'object' == typeof e.body && 'code' in e.body && 'number' == typeof (null == (t = e.body) ? void 0 : t.code) && o.includes(e.body.code))) || !1);
    },
    c = (e) => {
        null == e || l(e) || r.Z.captureException(e);
    };

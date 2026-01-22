n.d(t, { o: () => c }), n(896048);
var r = n(728458),
    i = n(652215);
let a = [i.t02.UNAUTHORIZED, i.t02.EMAIL_VERIFICATION_REQUIRED, i.t02.USER_BANNED],
    s = new Set([500, 502, 503, 504]),
    o = new Set([401, 403, 405, 409, 429]),
    l = (e) => {
        var t;
        if (null == e) return !1;
        let n = null == e ? void 0 : e.cause;
        return (
            !!(
                (null == n ? void 0 : n.crossDomain) === !0 ||
                ("status" in e &&
                    "number" == typeof e.status &&
                    (0 === e.status || s.has(e.status) || o.has(e.status))) ||
                ("code" in e && "number" == typeof e.code && a.includes(e.code)) ||
                ("body" in e &&
                    null != e.body &&
                    "object" == typeof e.body &&
                    "code" in e.body &&
                    "number" == typeof (null == (t = e.body) ? void 0 : t.code) &&
                    a.includes(e.body.code))
            ) || !1
        );
    },
    c = (e) => {
        null == e || l(e) || r.A.captureException(e);
    };

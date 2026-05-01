n.d(t, { o: () => o });
var i = n(38405),
    a = n(652215);
let r = [a.t02.UNAUTHORIZED, a.t02.EMAIL_VERIFICATION_REQUIRED, a.t02.USER_BANNED],
    s = new Set([500, 502, 503, 504]),
    l = new Set([401, 403, 405, 409, 429]),
    o = (e) => {
        null == e ||
            ((e) => {
                if (null == e) return !1;
                let t = e?.cause;
                return (
                    !!(
                        t?.crossDomain === !0 ||
                        ("status" in e &&
                            "number" == typeof e.status &&
                            (0 === e.status || s.has(e.status) || l.has(e.status))) ||
                        ("code" in e && "number" == typeof e.code && r.includes(e.code)) ||
                        ("body" in e &&
                            null != e.body &&
                            "object" == typeof e.body &&
                            "code" in e.body &&
                            "number" == typeof e.body?.code &&
                            r.includes(e.body.code))
                    ) || !1
                );
            })(e) ||
            i.A.captureException(e);
    };

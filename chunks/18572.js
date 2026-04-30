"use strict";
n.d(t, { o: () => l });
var i = n(38405),
    r = n(652215);
let s = [r.t02.UNAUTHORIZED, r.t02.EMAIL_VERIFICATION_REQUIRED, r.t02.USER_BANNED],
    a = new Set([500, 502, 503, 504]),
    o = new Set([401, 403, 405, 409, 429]),
    l = (e) => {
        null == e ||
            ((e) => {
                if (null == e) return !1;
                let t = e?.cause;
                return (
                    !!(
                        t?.crossDomain === !0 ||
                        ("status" in e &&
                            "number" == typeof e.status &&
                            (0 === e.status || a.has(e.status) || o.has(e.status))) ||
                        ("code" in e && "number" == typeof e.code && s.includes(e.code)) ||
                        ("body" in e &&
                            null != e.body &&
                            "object" == typeof e.body &&
                            "code" in e.body &&
                            "number" == typeof e.body?.code &&
                            s.includes(e.body.code))
                    ) || !1
                );
            })(e) ||
            i.A.captureException(e);
    };

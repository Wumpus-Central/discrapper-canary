"use strict";
function r(e, t) {
    if ("string" == typeof e) return { message: e, code: t };
    if (null != e.body)
        if (
            null != e.body.message &&
            !Array.isArray(e.body.message) &&
            (null == e.body.code || !Array.isArray(e.body.code))
        )
            return { message: e.body.message, code: e.body.code, retryAfter: e.body.retry_after, status: e.status };
        else {
            let t = e.body,
                n = null != t ? Object.values(t)[0] : null;
            return { message: null != n ? n[0] : void 0, fields: t, status: e.status };
        }
    return { status: e.status };
}
n.d(t, { L: () => i });
class i {
    message;
    code;
    retryAfter;
    fields;
    error;
    status;
    constructor(e, t, n = "An unexpected error occurred.") {
        const { message: i, code: a, retryAfter: s, fields: o, status: l } = r(e, t);
        (this.message = i || n),
            (this.retryAfter = s),
            (this.code = a || -1),
            (this.fields = o || {}),
            (this.status = l),
            (this.error = Error(i));
    }
    getFieldMessage(e) {
        return null != this.fields[e] ? this.fields[e][0] : null;
    }
}

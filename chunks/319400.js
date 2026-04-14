"use strict";
n.d(t, { LG: () => u, MS: () => s });
let r = 50035,
    i = "__root_errors";
var s = (function (e) {
    return (
        (e.HCAPTCHA = "hcaptcha"),
        (e.RECAPTCHA = "recaptcha"),
        (e.RECAPTCHA_ENTERPRISE = "recaptcha_enterprise"),
        (e.TURNSTILE = "turnstile"),
        e
    );
})({});
function a(e) {
    return e.map((e) => ({ code: "UNKNOWN", message: e }));
}
function o(e) {
    let t = {};
    for (let [n, r] of Object.entries(e)) {
        if ("_misc" === n) {
            t._errors = a(r);
            continue;
        }
        let e = {};
        (e._errors = a(r)), (t[n] = e);
    }
    return t;
}
function l(e, t) {
    if ("string" == typeof e) return { message: e, code: t };
    if (null == e.body) return { status: e.status };
    let n = e.body;
    return null == e.body.message ||
        Array.isArray(e.body.message) ||
        (null != e.body.code && Array.isArray(e.body.code))
        ? null != n && "captcha_key" in n
            ? {
                  code: -1,
                  captchaFields: n,
                  status: e.status,
                  message: n.captcha_key.length > 0 ? n.captcha_key[0] : void 0,
              }
            : { status: e.status, code: r, errors: o(n) }
        : { message: n.message, code: n.code, retryAfter: n.retry_after, errors: n.errors, status: e.status };
}
class u extends Error {
    code;
    retryAfter;
    errors;
    status;
    captchaFields;
    constructor(e, t, n = "An unexpected error occurred.") {
        const { message: r, code: i, retryAfter: s, errors: a, status: o, captchaFields: u } = l(e, t);
        super(r ?? n),
            (this.code = i ?? -1),
            (this.retryAfter = s),
            (this.errors = a),
            (this.status = o),
            (this.captchaFields = u ?? {}),
            (this.cause = e);
    }
    hasFieldErrors() {
        return null != this.errors && Object.keys(this.errors).length > 0;
    }
    getFieldErrors(e) {
        "string" == typeof e && (e = [e]);
        let t = this.errors;
        for (; e.length > 0 && null != t; ) (t = t[e[0]]), (e = e.splice(1));
        return t?._errors;
    }
    getAllFieldErrors() {
        return this.getAllFieldErrorsUnder(this.errors);
    }
    getAllFieldErrorsUnder(e) {
        let t = {},
            n = e?._errors;
        return (
            null != n && n.length > 0 && (t[i] = n),
            void 0 !== e &&
                Object.entries(e).forEach((e) => {
                    let [n, r] = e;
                    "_errors" === n ||
                        Object.entries(this.getAllFieldErrorsUnder(r)).forEach((e) => {
                            let [r, s] = e;
                            r === i ? (t[n] = s) : (t[`${n}.${r}`] = s);
                        });
                }),
            t
        );
    }
    getFirstFieldErrorMessage(e) {
        let t = this.getFieldErrors(e);
        return null == t || t.length < 1 ? null : t[0].message;
    }
    getAnyErrorMessage() {
        return this.getAnyErrorMessageAndField()?.error ?? this.message;
    }
    getAnyErrorMessageAndField() {
        let e = this.errors,
            t = null;
        for (; null != e; ) {
            if (null != e._errors) return { fieldName: t, error: e._errors[0].message };
            (t = Object.keys(e)[0]), (e = e[t]);
        }
        return null;
    }
}

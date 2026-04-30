"use strict";
n.d(t, { LG: () => o, MS: () => s });
let i = "__root_errors";
var r,
    s =
        (((r = {}).HCAPTCHA = "hcaptcha"),
        (r.RECAPTCHA = "recaptcha"),
        (r.RECAPTCHA_ENTERPRISE = "recaptcha_enterprise"),
        (r.TURNSTILE = "turnstile"),
        r);
function a(e) {
    return e.map((e) => ({ code: "UNKNOWN", message: e }));
}
class o extends Error {
    code;
    retryAfter;
    errors;
    status;
    captchaFields;
    constructor(e, t, n = "An unexpected error occurred.") {
        const {
            message: i,
            code: r,
            retryAfter: s,
            errors: o,
            status: l,
            captchaFields: u,
        } = (function (e, t) {
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
                    : {
                          status: e.status,
                          code: 50035,
                          errors: (function (e) {
                              let t = {};
                              for (let [n, i] of Object.entries(e)) {
                                  if ("_misc" === n) {
                                      t._errors = a(i);
                                      continue;
                                  }
                                  let e = {};
                                  (e._errors = a(i)), (t[n] = e);
                              }
                              return t;
                          })(n),
                      }
                : { message: n.message, code: n.code, retryAfter: n.retry_after, errors: n.errors, status: e.status };
        })(e, t);
        super(i ?? n),
            (this.code = r ?? -1),
            (this.retryAfter = s),
            (this.errors = o),
            (this.status = l),
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

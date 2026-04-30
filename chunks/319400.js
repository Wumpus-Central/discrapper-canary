n.d(t, { LG: () => l, MS: () => r });
let i = "__root_errors";
var a,
    r =
        (((a = {}).HCAPTCHA = "hcaptcha"),
        (a.RECAPTCHA = "recaptcha"),
        (a.RECAPTCHA_ENTERPRISE = "recaptcha_enterprise"),
        (a.TURNSTILE = "turnstile"),
        a);
function s(e) {
    return e.map((e) => ({ code: "UNKNOWN", message: e }));
}
class l extends Error {
    code;
    retryAfter;
    errors;
    status;
    captchaFields;
    constructor(e, t, n = "An unexpected error occurred.") {
        const {
            message: i,
            code: a,
            retryAfter: r,
            errors: l,
            status: o,
            captchaFields: d,
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
                                      t._errors = s(i);
                                      continue;
                                  }
                                  let e = {};
                                  (e._errors = s(i)), (t[n] = e);
                              }
                              return t;
                          })(n),
                      }
                : { message: n.message, code: n.code, retryAfter: n.retry_after, errors: n.errors, status: e.status };
        })(e, t);
        super(i ?? n),
            (this.code = a ?? -1),
            (this.retryAfter = r),
            (this.errors = l),
            (this.status = o),
            (this.captchaFields = d ?? {}),
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
                    let [n, a] = e;
                    "_errors" === n ||
                        Object.entries(this.getAllFieldErrorsUnder(a)).forEach((e) => {
                            let [a, r] = e;
                            a === i ? (t[n] = r) : (t[`${n}.${a}`] = r);
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

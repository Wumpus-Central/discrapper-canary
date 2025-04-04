function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, {
    Hx: () => u,
    f$: () => i,
    hP: () => a
}),
    n(47120),
    n(411104);
let i = 50035,
    o = '__root_errors';
var a = (function (e) {
    return (e.HCAPTCHA = 'hcaptcha'), (e.RECAPTCHA = 'recaptcha'), (e.RECAPTCHA_ENTERPRISE = 'recaptcha_enterprise'), e;
})({});
function s(e) {
    return e.map((e) => ({
        code: 'UNKNOWN',
        message: e
    }));
}
function l(e) {
    let t = {};
    for (let [n, r] of Object.entries(e)) {
        if ('_misc' === n) {
            t._errors = s(r);
            continue;
        }
        let e = {};
        (e._errors = s(r)), (t[n] = e);
    }
    return t;
}
function c(e, t) {
    if ('string' == typeof e)
        return {
            message: e,
            code: t
        };
    if (null == e.body) return { status: e.status };
    let n = e.body;
    return null == e.body.message || Array.isArray(e.body.message) || (null != e.body.code && Array.isArray(e.body.code))
        ? null != n && 'captcha_key' in n
            ? {
                  code: -1,
                  captchaFields: n,
                  status: e.status,
                  message: n.captcha_key.length > 0 ? n.captcha_key[0] : void 0
              }
            : {
                  status: e.status,
                  code: i,
                  errors: l(n)
              }
        : {
              message: n.message,
              code: n.code,
              retryAfter: n.retry_after,
              errors: n.errors,
              status: e.status
          };
}
class u extends Error {
    hasFieldErrors() {
        return null != this.errors && Object.keys(this.errors).length > 0;
    }
    getFieldErrors(e) {
        'string' == typeof e && (e = [e]);
        let t = this.errors;
        for (; e.length > 0 && null != t; ) (t = t[e[0]]), (e = e.splice(1));
        return null == t ? void 0 : t._errors;
    }
    getAllFieldErrors() {
        return this.getAllFieldErrorsUnder(this.errors);
    }
    getAllFieldErrorsUnder(e) {
        let t = {},
            n = null == e ? void 0 : e._errors;
        return (
            null != n && n.length > 0 && (t[o] = n),
            void 0 !== e &&
                Object.entries(e).forEach((e) => {
                    let [n, r] = e;
                    '_errors' !== n &&
                        Object.entries(this.getAllFieldErrorsUnder(r)).forEach((e) => {
                            let [r, i] = e;
                            r === o ? (t[n] = i) : (t[''.concat(n, '.').concat(r)] = i);
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
        var e, t;
        return null != (t = null == (e = this.getAnyErrorMessageAndField()) ? void 0 : e.error) ? t : this.message;
    }
    getAnyErrorMessageAndField() {
        let e = this.errors,
            t = null;
        for (; null != e; ) {
            if (null != e._errors)
                return {
                    fieldName: t,
                    error: e._errors[0].message
                };
            (t = Object.keys(e)[0]), (e = e[t]);
        }
        return null;
    }
    constructor(e, t, n = 'An unexpected error occurred.') {
        let { message: i, code: o, retryAfter: a, errors: s, status: l, captchaFields: u } = c(e, t);
        super(null != i ? i : n), r(this, 'code', void 0), r(this, 'retryAfter', void 0), r(this, 'errors', void 0), r(this, 'status', void 0), r(this, 'captchaFields', void 0), (this.code = null != o ? o : -1), (this.retryAfter = a), (this.errors = s), (this.status = l), (this.captchaFields = null != u ? u : {}), (this.cause = e);
    }
}

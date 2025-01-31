function i(e, t, n) {
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
    Hx: () => c,
    f$: () => r,
    hP: () => s
}),
    n(47120),
    n(411104);
let r = 50035,
    a = '__root_errors';
var s = (function (e) {
    return (e.HCAPTCHA = 'hcaptcha'), (e.RECAPTCHA = 'recaptcha'), (e.RECAPTCHA_ENTERPRISE = 'recaptcha_enterprise'), e;
})({});
function o(e) {
    return e.map((e) => ({
        code: 'UNKNOWN',
        message: e
    }));
}
function l(e) {
    let t = {};
    for (let [n, i] of Object.entries(e)) {
        if ('_misc' === n) {
            t._errors = o(i);
            continue;
        }
        let e = {};
        (e._errors = o(i)), (t[n] = e);
    }
    return t;
}
function u(e, t) {
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
                  code: r,
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
class c extends Error {
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
            null != n && n.length > 0 && (t[a] = n),
            void 0 !== e &&
                Object.entries(e).forEach((e) => {
                    let [n, i] = e;
                    '_errors' !== n &&
                        Object.entries(this.getAllFieldErrorsUnder(i)).forEach((e) => {
                            let [i, r] = e;
                            i === a ? (t[n] = r) : (t[''.concat(n, '.').concat(i)] = r);
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
        return null !== (t = null === (e = this.getAnyErrorMessageAndField()) || void 0 === e ? void 0 : e.error) && void 0 !== t ? t : this.message;
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
        let { message: r, code: a, retryAfter: s, errors: o, status: l, captchaFields: c } = u(e, t);
        super(null != r ? r : n), i(this, 'code', void 0), i(this, 'retryAfter', void 0), i(this, 'errors', void 0), i(this, 'status', void 0), i(this, 'captchaFields', void 0), (this.code = null != a ? a : -1), (this.retryAfter = s), (this.errors = o), (this.status = l), (this.captchaFields = null != c ? c : {}), (this.cause = e);
    }
}

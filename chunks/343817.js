r.d(n, {
    Hx: function () {
        return p;
    },
    f$: function () {
        return l;
    },
    hP: function () {
        return i;
    }
});
var i,
    a = r(47120);
var o = r(411104);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = 50035,
    u = '__root_errors';
function c(e) {
    return e.map((e) => ({
        code: 'UNKNOWN',
        message: e
    }));
}
function d(e) {
    let n = {};
    for (let [r, i] of Object.entries(e)) {
        if ('_misc' === r) {
            n._errors = c(i);
            continue;
        }
        let e = {};
        (e._errors = c(i)), (n[r] = e);
    }
    return n;
}
function f(e, n) {
    if ('string' == typeof e)
        return {
            message: e,
            code: n
        };
    if (null == e.body) return { status: e.status };
    let r = e.body;
    return null == e.body.message || Array.isArray(e.body.message) || (null != e.body.code && Array.isArray(e.body.code))
        ? null != r && 'captcha_key' in r
            ? {
                  code: -1,
                  captchaFields: r,
                  status: e.status,
                  message: r.captcha_key.length > 0 ? r.captcha_key[0] : void 0
              }
            : {
                  status: e.status,
                  code: l,
                  errors: d(r)
              }
        : {
              message: r.message,
              code: r.code,
              retryAfter: r.retry_after,
              errors: r.errors,
              status: e.status
          };
}
!(function (e) {
    (e.HCAPTCHA = 'hcaptcha'), (e.RECAPTCHA = 'recaptcha'), (e.RECAPTCHA_ENTERPRISE = 'recaptcha_enterprise');
})(i || (i = {}));
class p extends Error {
    hasFieldErrors() {
        return null != this.errors && Object.keys(this.errors).length > 0;
    }
    getFieldErrors(e) {
        'string' == typeof e && (e = [e]);
        let n = this.errors;
        for (; e.length > 0 && null != n; ) (n = n[e[0]]), (e = e.splice(1));
        return null == n ? void 0 : n._errors;
    }
    getAllFieldErrors() {
        return this.getAllFieldErrorsUnder(this.errors);
    }
    getAllFieldErrorsUnder(e) {
        let n = {},
            r = null == e ? void 0 : e._errors;
        return (
            null != r && r.length > 0 && (n[u] = r),
            void 0 !== e &&
                Object.entries(e).forEach((e) => {
                    let [r, i] = e;
                    if ('_errors' !== r)
                        Object.entries(this.getAllFieldErrorsUnder(i)).forEach((e) => {
                            let [i, a] = e;
                            i === u ? (n[r] = a) : (n[''.concat(r, '.').concat(i)] = a);
                        });
                }),
            n
        );
    }
    getFirstFieldErrorMessage(e) {
        let n = this.getFieldErrors(e);
        return null == n || n.length < 1 ? null : n[0].message;
    }
    getAnyErrorMessage() {
        var e, n;
        return null !== (n = null === (e = this.getAnyErrorMessageAndField()) || void 0 === e ? void 0 : e.error) && void 0 !== n ? n : this.message;
    }
    getAnyErrorMessageAndField() {
        let e = this.errors,
            n = null;
        for (; null != e; ) {
            if (null != e._errors)
                return {
                    fieldName: n,
                    error: e._errors[0].message
                };
            (n = Object.keys(e)[0]), (e = e[n]);
        }
        return null;
    }
    constructor(e, n, r = 'An unexpected error occurred.') {
        let { message: i, code: a, retryAfter: o, errors: l, status: u, captchaFields: c } = f(e, n);
        super(null != i ? i : r), s(this, 'code', void 0), s(this, 'retryAfter', void 0), s(this, 'errors', void 0), s(this, 'status', void 0), s(this, 'captchaFields', void 0), (this.code = null != a ? a : -1), (this.retryAfter = o), (this.errors = l), (this.status = u), (this.captchaFields = null != c ? c : {}), (this.cause = e);
    }
}

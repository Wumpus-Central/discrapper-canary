let r, i;
n.d(t, { Z: () => b }), n(415506);
var a = n(594174),
    o = n(195270);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = () => {
    throw Error('updateModal has not been implemented.');
};
{
    let e = n(169480);
    (r = e.showModal), (_ = e.updateModalProps), (i = n(952265).Mr);
}
let p = 60008;
function h() {
    var e, t;
    return null != (t = null == (e = a.default.getCurrentUser()) ? void 0 : e.mfaEnabled) && t;
}
function m(e, t) {
    return (e.body && e.body.code === p) || (t && 429 === e.status);
}
function g(e) {
    let { promiseFn: t, resolve: n, reject: a, modalProps: o = {}, hooks: { onEarlyClose: s } = {} } = e;
    if (null == r) {
        null == s || s();
        return;
    }
    let c = r(h, d, o);
    function d() {
        null == s || s();
    }
    function f(e) {
        i(c), n(e);
    }
    function p(e) {
        i(c), a(e);
    }
    function h(e) {
        return (
            _(c, h, d, u(l({}, o), { isLoading: !0 })),
            E({
                promiseFn: t,
                resolve: f,
                reject: p,
                code: e,
                mfaCodeHandler: m,
                isModalOpen: !0
            })
        );
    }
    function m(e) {
        let { res: t } = e;
        _(c, h, d, u(l({}, o), { error: t.body.message }));
    }
}
function E(e) {
    var { promiseFn: t, resolve: n, reject: r, code: i, mfaCodeHandler: a = g, isModalOpen: o = !1 } = e,
        s = d(e, ['promiseFn', 'resolve', 'reject', 'code', 'mfaCodeHandler', 'isModalOpen']);
    return t(null != i ? { code: i } : {}).then(n, (e) => {
        if (m(e, o))
            return a(
                l(
                    {
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    },
                    s
                )
            );
        r(e);
    });
}
function b(e, t) {
    let n = null != t ? t : {},
        { checkEnabled: r = h() } = n,
        i = d(n, ['checkEnabled']);
    return new Promise((t, n) => {
        ((0, o.d)(r) ? g : E)(
            l(
                {
                    promiseFn: e,
                    resolve: t,
                    reject: n
                },
                i
            )
        );
    });
}

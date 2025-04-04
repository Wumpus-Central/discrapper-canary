n.d(t, {
    GI: () => m,
    Jt: () => f,
    Un: () => h,
    wE: () => p
}),
    n(47120);
var r = n(200651),
    i = n(192379);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
let s = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'transparent';
        return () =>
            (0, r.jsx)('div', {
                style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: e
                }
            });
    },
    l = 50,
    c = 500,
    u = 5000,
    d = () => Promise.resolve();
function f(e) {
    d = e;
}
let _ = (e) => new Promise((t) => setTimeout(t, e));
async function p(e) {
    let { createPromise: t, webpackId: r } = e,
        i = c,
        o = 0;
    for (;;)
        try {
            return await t();
        } catch (e) {
            if ((console.log(e), r in n.c)) throw (console.log('Module was found in webpack cache so it has loaded from the network and webpack will not retry'), e);
            if (o >= l) throw e;
            await _(i), await d(), (i = Math.min(u, 2 * i)), o++;
        }
}
function h(e) {
    let { createPromise: t, webpackId: n, renderLoader: o, name: l, memo: c = !1 } = e,
        u = i.lazy(() =>
            p({
                createPromise: t,
                webpackId: n
            })
        ),
        d = (e) =>
            (0, r.jsx)(i.Suspense, {
                fallback: null != o ? o() : s()(),
                children: (0, r.jsx)(u, a({}, e))
            });
    return c && (d = i.memo(d)), (d.displayName = 'Suspense('.concat(l || 'Unknown', ')')), d;
}
function m(e) {
    let { createPromise: t, webpackId: n, render: o, renderFallback: a } = e,
        [s, l] = i.useState(null);
    return (
        i.useEffect(() => {
            p({
                createPromise: t,
                webpackId: n
            }).then((e) => {
                let { default: t } = e;
                return l(t);
            });
        }, []),
        (0, r.jsx)(r.Fragment, { children: null == s ? a() : o(s) })
    );
}

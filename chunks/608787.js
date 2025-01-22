r.d(n, {
    GI: function () {
        return m;
    },
    Jt: function () {
        return f;
    },
    Un: function () {
        return _;
    },
    wE: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379);
let s = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'transparent';
        return () =>
            (0, a.jsx)('div', {
                style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: e
                }
            });
    },
    l = 50,
    u = 500,
    c = 5000,
    d = () => Promise.resolve();
function f(e) {
    d = e;
}
let p = (e) => new Promise((n) => setTimeout(n, e));
async function h(e) {
    let { createPromise: n, webpackId: i } = e,
        a = u,
        o = 0;
    for (;;)
        try {
            return await n();
        } catch (e) {
            if ((console.log(e), i in r.c)) throw (console.log('Module was found in webpack cache so it has loaded from the network and webpack will not retry'), e);
            if (o >= l) throw e;
            await p(a), await d(), (a = Math.min(c, 2 * a)), o++;
        }
}
function _(e) {
    let { createPromise: n, webpackId: r, renderLoader: i, name: l, memo: u = !1 } = e,
        c = o.lazy(() =>
            h({
                createPromise: n,
                webpackId: r
            })
        ),
        d = (e) =>
            (0, a.jsx)(o.Suspense, {
                fallback: null != i ? i() : s()(),
                children: (0, a.jsx)(c, { ...e })
            });
    return u && (d = o.memo(d)), (d.displayName = 'Suspense('.concat(l || 'Unknown', ')')), d;
}
function m(e) {
    let { createPromise: n, webpackId: r, render: i, renderFallback: s } = e,
        [l, u] = o.useState(null);
    return (
        o.useEffect(() => {
            h({
                createPromise: n,
                webpackId: r
            }).then((e) => {
                let { default: n } = e;
                return u(n);
            });
        }, []),
        (0, a.jsx)(a.Fragment, { children: null == l ? s() : i(l) })
    );
}

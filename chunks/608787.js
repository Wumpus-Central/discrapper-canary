n.d(t, {
    GI: () => p,
    Jt: () => c,
    Un: () => _,
    wE: () => f
}),
    n(47120);
var i = n(200651),
    r = n(192379);
let a = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'transparent';
        return () =>
            (0, i.jsx)('div', {
                style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: e
                }
            });
    },
    s = 50,
    o = 500,
    l = 5000,
    u = () => Promise.resolve();
function c(e) {
    u = e;
}
let d = (e) => new Promise((t) => setTimeout(t, e));
async function f(e) {
    let { createPromise: t, webpackId: i } = e,
        r = o,
        a = 0;
    for (;;)
        try {
            return await t();
        } catch (e) {
            if ((console.log(e), i in n.c)) throw (console.log('Module was found in webpack cache so it has loaded from the network and webpack will not retry'), e);
            if (a >= s) throw e;
            await d(r), await u(), (r = Math.min(l, 2 * r)), a++;
        }
}
function _(e) {
    let { createPromise: t, webpackId: n, renderLoader: s, name: o, memo: l = !1 } = e,
        u = r.lazy(() =>
            f({
                createPromise: t,
                webpackId: n
            })
        ),
        c = (e) =>
            (0, i.jsx)(r.Suspense, {
                fallback: null != s ? s() : a()(),
                children: (0, i.jsx)(u, { ...e })
            });
    return l && (c = r.memo(c)), (c.displayName = 'Suspense('.concat(o || 'Unknown', ')')), c;
}
function p(e) {
    let { createPromise: t, webpackId: n, render: a, renderFallback: s } = e,
        [o, l] = r.useState(null);
    return (
        r.useEffect(() => {
            f({
                createPromise: t,
                webpackId: n
            }).then((e) => {
                let { default: t } = e;
                return l(t);
            });
        }, []),
        (0, i.jsx)(i.Fragment, { children: null == o ? s() : a(o) })
    );
}

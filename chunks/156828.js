n.d(t, {
    Cu: () => a.Cu,
    Fe: () => c,
    c2: () => u,
    sq: () => a.sq,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(841117);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let l = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transparent";
    return () =>
        (0, r.jsx)("div", {
            style: {
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: e,
            },
        });
};
function c(e) {
    let { createPromise: t, webpackId: n, renderLoader: s, name: c, memo: u = !1 } = e,
        d = i.lazy(() =>
            (0, a.sq)({
                createPromise: t,
                webpackId: n,
            }),
        ),
        f = (e) =>
            (0, r.jsx)(i.Suspense, {
                fallback: null != s ? s() : l()(),
                children: (0, r.jsx)(d, o({}, e)),
            });
    return u && (f = i.memo(f)), (f.displayName = "Suspense(".concat(c || "Unknown", ")")), f;
}
function u(e) {
    let { createPromise: t, webpackId: n, render: s, renderFallback: o } = e,
        [l, c] = i.useState(null);
    return (
        i.useEffect(() => {
            (0, a.sq)({
                createPromise: t,
                webpackId: n,
            }).then((e) => {
                let { default: t } = e;
                return c(t);
            });
        }, []),
        (0, r.jsx)(r.Fragment, { children: null == l ? o() : s(l) })
    );
}

n.d(t, {
    z: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(814656),
    l = n(94576);

function c(e, t, n) {
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

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e) {
    let t = e.controls,
        n = {};
    return (
        null != t &&
            Object.entries(t).forEach((e) => {
                let [t, r] = e;
                n[t] = r.defaultValue;
            }),
        n
    );
}

function f(e) {
    let { story: t, controlsLayout: n } = e,
        a = i.useMemo(() => d(t), [t]),
        [c, f] = i.useState(a);
    i.useEffect(() => {
        f(d(t));
    }, [t]);
    let p = () => {
            let e = t.component;
            return (0, r.jsx)(e, u({}, c));
        },
        _ = "hidden" !== n && null != t.controls;
    return (0, r.jsxs)("div", {
        className: s()(l.iW, {
            [l.vT]: "bottom" === n,
            [l.Ix]: "right" === n,
        }),
        children: [
            (0, r.jsx)("div", {
                className: l.Ji,
                children: (0, r.jsx)("div", {
                    className: l.Dw,
                    children: p(),
                }),
            }),
            _ &&
                null != t.controls &&
                (0, r.jsx)("div", {
                    className: s()(l.ne, {
                        [l.WK]: "bottom" === n,
                        [l.BT]: "right" === n,
                    }),
                    children: (0, r.jsx)(o.i, {
                        controls: t.controls,
                        props: c,
                        onPropsChange: f,
                    }),
                }),
        ],
    });
}

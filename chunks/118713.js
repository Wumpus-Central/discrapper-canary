"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(713517),
    l = n(949317);
let u = 5e3,
    c = (e) => null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal"),
    d = (e, t, n) =>
        e === t
            ? "center"
            : e < t
              ? t === n - 1 && 0 === e
                  ? "right"
                  : "left"
              : 0 === t && e === n - 1
                ? "left"
                : "right",
    _ = (e) => {
        let { position: t, children: n } = e;
        return (0, r.jsx)("div", { className: s()(l.child, l[t]), children: n });
    },
    f = (e) => {
        let { children: t, paused: n = !1, slideDuration: a = u } = e,
            [s, f] = i.useState(0),
            h = i.useRef(null),
            p = (0, o.M)(h),
            g = i.useRef(void 0),
            E = i.useMemo(
                () =>
                    i.Children.map(t, (e) => (!i.isValidElement(e) || c(e) ? e : i.cloneElement(e, { tabIndex: -1 }))),
                [t],
            );
        i.useEffect(() => {
            Array.isArray(E) ? f(s >= E?.length ? Math.max(E?.length - 1, 0) : s) : f(0);
        }, [E, s]);
        let A = n || p;
        return (i.useEffect(() => {
            if (A) {
                null != g.current && (window.clearTimeout(g.current), (g.current = void 0));
                return;
            }
            let e = () => {
                f((e) => {
                    let t = e + 1;
                    return t >= (E?.length ?? 1) ? 0 : t;
                }),
                    (g.current = window.setTimeout(e, a));
            };
            window.clearTimeout(g.current), (g.current = window.setTimeout(e, a));
        }, [A, a, E]),
        i.useEffect(
            () => () => {
                window.clearTimeout(g.current);
            },
            [],
        ),
        null == E)
            ? null
            : Array.isArray(E)
              ? (0, r.jsx)("div", {
                    ref: h,
                    className: l.carousel,
                    children: (0, r.jsx)("div", {
                        className: l.children,
                        children: E?.map((e, t) => {
                            let n = d(t, s, E.length);
                            return (0, r.jsx)(_, { position: n, children: e }, t);
                        }),
                    }),
                })
              : (0, r.jsx)("div", {
                    ref: h,
                    className: l.carousel,
                    children: (0, r.jsx)("div", {
                        className: l.children,
                        children: (0, r.jsx)(_, { position: "center", children: t }),
                    }),
                });
    };

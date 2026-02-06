"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(713517),
    l = n(949317);
let u = 1e3,
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
            p = i.useRef(null),
            h = (0, o.M)(p),
            m = i.useRef(void 0),
            g = i.useMemo(
                () =>
                    i.Children.map(t, (e) => (!i.isValidElement(e) || c(e) ? e : i.cloneElement(e, { tabIndex: -1 }))),
                [t],
            );
        i.useEffect(() => {
            Array.isArray(g) ? f(s >= g?.length ? g?.length - 1 : s) : f(0);
        }, [g, s]);
        let E = n || h;
        return (i.useEffect(() => {
            if (E) {
                null != m.current && (window.clearTimeout(m.current), (m.current = void 0));
                return;
            }
            let e = () => {
                f((e) => {
                    let t = e + 1;
                    return t >= (g?.length ?? 1) ? 0 : t;
                }),
                    (m.current = window.setTimeout(e, a));
            };
            window.clearTimeout(m.current), (m.current = window.setTimeout(e, a));
        }, [E, a, g]),
        i.useEffect(
            () => () => {
                window.clearTimeout(m.current);
            },
            [],
        ),
        null == g)
            ? null
            : Array.isArray(g)
              ? (0, r.jsx)("div", {
                    ref: p,
                    className: l.carousel,
                    children: (0, r.jsx)("div", {
                        className: l.children,
                        children: g?.map((e, t) => {
                            let n = d(t, s, g.length);
                            return (0, r.jsx)(_, { index: t, active: !1, position: n, children: e }, t);
                        }),
                    }),
                })
              : (0, r.jsx)("div", {
                    ref: p,
                    className: l.carousel,
                    children: (0, r.jsx)("div", {
                        className: l.children,
                        children: (0, r.jsx)(_, { index: 0, active: !0, position: "center", children: t }),
                    }),
                });
    };

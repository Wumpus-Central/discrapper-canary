"use strict";
r.d(t, { A: () => d });
var l = r(627968),
    s = r(64700),
    n = r(503698),
    a = r.n(n),
    i = r(713517),
    c = r(482284);
let u = (e) => {
        let { position: t, children: r } = e;
        return (0, l.jsx)("div", { className: a()(c.child, c[t]), children: r });
    },
    d = (e) => {
        let { children: t, paused: r = !1, slideDuration: n = 5e3 } = e,
            [a, d] = s.useState(0),
            o = s.useRef(null),
            h = (0, i.M)(o),
            m = s.useRef(void 0),
            p = s.useMemo(
                () =>
                    s.Children.map(t, (e) =>
                        s.isValidElement(e)
                            ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                                ? e
                                : s.cloneElement(e, { tabIndex: -1 })
                            : e,
                    ),
                [t],
            );
        s.useEffect(() => {
            Array.isArray(p) ? d(a >= p?.length ? Math.max(p?.length - 1, 0) : a) : d(0);
        }, [p, a]);
        let g = r || h;
        return (s.useEffect(() => {
            if (g) {
                null != m.current && (window.clearTimeout(m.current), (m.current = void 0));
                return;
            }
            let e = () => {
                d((e) => {
                    let t = e + 1;
                    return t >= (p?.length ?? 1) ? 0 : t;
                }),
                    (m.current = window.setTimeout(e, n));
            };
            window.clearTimeout(m.current), (m.current = window.setTimeout(e, n));
        }, [g, n, p]),
        s.useEffect(
            () => () => {
                window.clearTimeout(m.current);
            },
            [],
        ),
        null == p)
            ? null
            : Array.isArray(p)
              ? (0, l.jsx)("div", {
                    ref: o,
                    className: c.carousel,
                    children: (0, l.jsx)("div", {
                        className: c.children,
                        children: p?.map((e, t) => {
                            var r, s, n;
                            let i =
                                ((r = t),
                                (s = a),
                                (n = p.length),
                                r === s
                                    ? "center"
                                    : r < s
                                      ? s === n - 1 && 0 === r
                                          ? "right"
                                          : "left"
                                      : 0 === s && r === n - 1
                                        ? "left"
                                        : "right");
                            return (0, l.jsx)(u, { position: i, children: e }, t);
                        }),
                    }),
                })
              : (0, l.jsx)("div", {
                    ref: o,
                    className: c.carousel,
                    children: (0, l.jsx)("div", {
                        className: c.children,
                        children: (0, l.jsx)(u, { position: "center", children: t }),
                    }),
                });
    };

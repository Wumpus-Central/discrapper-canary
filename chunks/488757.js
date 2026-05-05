l.d(t, { A: () => o });
var r = l(627968),
    n = l(64700),
    a = l(503698),
    s = l.n(a),
    i = l(713517),
    c = l(234580);
let d = (e) => {
        let { position: t, children: l } = e;
        return (0, r.jsx)("div", { className: s()(c.child, c[t]), children: l });
    },
    o = (e) => {
        let { children: t, paused: l = !1, slideDuration: a = 5e3 } = e,
            [s, o] = n.useState(0),
            u = n.useRef(null),
            m = (0, i.M)(u),
            h = n.useRef(void 0),
            p = n.useMemo(
                () =>
                    n.Children.map(t, (e) =>
                        n.isValidElement(e)
                            ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                                ? e
                                : n.cloneElement(e, { tabIndex: -1 })
                            : e,
                    ),
                [t],
            );
        n.useEffect(() => {
            Array.isArray(p) ? o(s >= p?.length ? Math.max(p?.length - 1, 0) : s) : o(0);
        }, [p, s]);
        let g = l || m;
        return (n.useEffect(() => {
            if (g) {
                null != h.current && (window.clearTimeout(h.current), (h.current = void 0));
                return;
            }
            let e = () => {
                o((e) => {
                    let t = e + 1;
                    return t >= (p?.length ?? 1) ? 0 : t;
                }),
                    (h.current = window.setTimeout(e, a));
            };
            window.clearTimeout(h.current), (h.current = window.setTimeout(e, a));
        }, [g, a, p]),
        n.useEffect(
            () => () => {
                window.clearTimeout(h.current);
            },
            [],
        ),
        null == p)
            ? null
            : Array.isArray(p)
              ? (0, r.jsx)("div", {
                    ref: u,
                    className: c.carousel,
                    children: (0, r.jsx)("div", {
                        className: c.children,
                        children: p?.map((e, t) => {
                            var l, n, a;
                            let i =
                                ((l = t),
                                (n = s),
                                (a = p.length),
                                l === n
                                    ? "center"
                                    : l < n
                                      ? n === a - 1 && 0 === l
                                          ? "right"
                                          : "left"
                                      : 0 === n && l === a - 1
                                        ? "left"
                                        : "right");
                            return (0, r.jsx)(d, { position: i, children: e }, t);
                        }),
                    }),
                })
              : (0, r.jsx)("div", {
                    ref: u,
                    className: c.carousel,
                    children: (0, r.jsx)("div", {
                        className: c.children,
                        children: (0, r.jsx)(d, { position: "center", children: t }),
                    }),
                });
    };

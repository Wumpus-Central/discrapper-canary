t.d(r, { A: () => u });
var d = t(627968),
    l = t(64700),
    c = t(503698),
    o = t.n(c),
    a = t(713517),
    n = t(949317);
let s = (e) => {
        let { position: r, children: t } = e;
        return (0, d.jsx)("div", { className: o()(n.child, n[r]), children: t });
    },
    u = (e) => {
        let { children: r, paused: t = !1, slideDuration: c = 5e3 } = e,
            [o, u] = l.useState(0),
            i = l.useRef(null),
            h = (0, a.M)(i),
            k = l.useRef(void 0),
            p = l.useMemo(
                () =>
                    l.Children.map(r, (e) =>
                        l.isValidElement(e)
                            ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                                ? e
                                : l.cloneElement(e, { tabIndex: -1 })
                            : e,
                    ),
                [r],
            );
        l.useEffect(() => {
            Array.isArray(p) ? u(o >= p?.length ? Math.max(p?.length - 1, 0) : o) : u(0);
        }, [p, o]);
        let b = t || h;
        return (l.useEffect(() => {
            if (b) {
                null != k.current && (window.clearTimeout(k.current), (k.current = void 0));
                return;
            }
            let e = () => {
                u((e) => {
                    let r = e + 1;
                    return r >= (p?.length ?? 1) ? 0 : r;
                }),
                    (k.current = window.setTimeout(e, c));
            };
            window.clearTimeout(k.current), (k.current = window.setTimeout(e, c));
        }, [b, c, p]),
        l.useEffect(
            () => () => {
                window.clearTimeout(k.current);
            },
            [],
        ),
        null == p)
            ? null
            : Array.isArray(p)
              ? (0, d.jsx)("div", {
                    ref: i,
                    className: n.carousel,
                    children: (0, d.jsx)("div", {
                        className: n.children,
                        children: p?.map((e, r) => {
                            var t, l, c;
                            let a =
                                ((t = r),
                                (l = o),
                                (c = p.length),
                                t === l
                                    ? "center"
                                    : t < l
                                      ? l === c - 1 && 0 === t
                                          ? "right"
                                          : "left"
                                      : 0 === l && t === c - 1
                                        ? "left"
                                        : "right");
                            return (0, d.jsx)(s, { position: a, children: e }, r);
                        }),
                    }),
                })
              : (0, d.jsx)("div", {
                    ref: i,
                    className: n.carousel,
                    children: (0, d.jsx)("div", {
                        className: n.children,
                        children: (0, d.jsx)(s, { position: "center", children: r }),
                    }),
                });
    };

n.d(t, { A: () => u });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    i = n(713517),
    c = n(234580);
function o(e) {
    let { position: t, children: n } = e;
    return (0, r.jsx)("div", { className: s()(c.child, c[t]), children: n });
}
let u = (e) => {
    let { children: t, paused: n = !1, slideDuration: a = 5e3 } = e,
        [s, u] = l.useState(0),
        d = l.useRef(null),
        h = (0, i.M)(d),
        m = l.useRef(void 0),
        p = l.useMemo(
            () =>
                l.Children.map(t, (e) =>
                    l.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : l.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        );
    l.useEffect(() => {
        Array.isArray(p) ? u(s >= p?.length ? Math.max(p?.length - 1, 0) : s) : u(0);
    }, [p, s]);
    let f = n || h;
    return (l.useEffect(() => {
        if (f) {
            null != m.current && (window.clearTimeout(m.current), (m.current = void 0));
            return;
        }
        window.clearTimeout(m.current),
            (m.current = window.setTimeout(function e() {
                u((e) => {
                    let t = e + 1;
                    return t >= (p?.length ?? 1) ? 0 : t;
                }),
                    (m.current = window.setTimeout(e, a));
            }, a));
    }, [f, a, p]),
    l.useEffect(
        () => () => {
            window.clearTimeout(m.current);
        },
        [],
    ),
    null == p)
        ? null
        : Array.isArray(p)
          ? (0, r.jsx)("div", {
                ref: d,
                className: c.carousel,
                children: (0, r.jsx)("div", {
                    className: c.children,
                    children: p?.map((e, t) => {
                        var n, l, a;
                        let i =
                            ((n = t),
                            (l = s),
                            (a = p.length),
                            n === l
                                ? "center"
                                : n < l
                                  ? l === a - 1 && 0 === n
                                      ? "right"
                                      : "left"
                                  : 0 === l && n === a - 1
                                    ? "left"
                                    : "right");
                        return (0, r.jsx)(o, { position: i, children: e }, t);
                    }),
                }),
            })
          : (0, r.jsx)("div", {
                ref: d,
                className: c.carousel,
                children: (0, r.jsx)("div", {
                    className: c.children,
                    children: (0, r.jsx)(o, { position: "center", children: t }),
                }),
            });
};

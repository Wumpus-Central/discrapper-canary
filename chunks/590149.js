n.d(t, { Z: () => d }), n(388685);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(481060),
    o = n(259580),
    c = n(335541);
function d(e) {
    let {
            icon: t,
            title: n,
            subtitle: l,
            children: d,
            className: u,
            isExpanded: m,
            onExpandedChange: p,
            defaultExpanded: h = !1,
            onOpen: f,
            maxHeight: x,
        } = e,
        [b, g] = r.useState(h),
        v = r.useRef(null),
        [j, y] = r.useState(null),
        C = void 0 !== m,
        _ = C ? m : b;
    r.useEffect(() => {
        _ && null != v.current && y(v.current.scrollHeight);
    }, [_, d]);
    let S = r.useCallback(() => {
            let e = !_;
            C || g(e), null == p || p(e), e && null != f && f();
        }, [_, C, p, f]),
        E = r.useMemo(() => {
            if (_) {
                if (null != x) return { maxHeight: "number" == typeof x ? "".concat(x, "px") : x };
                if (null != j) return { maxHeight: "".concat(j, "px") };
            }
        }, [x, _, j]);
    return (0, a.jsxs)("div", {
        className: i()(c.accordionContainer, u, { [c.opened]: _ }),
        children: [
            (0, a.jsxs)(s.P3F, {
                className: c.header,
                onClick: S,
                children: [
                    null != t &&
                        (0, a.jsx)("div", {
                            className: c.headerIconWrapper,
                            children: t,
                        }),
                    (0, a.jsxs)("div", {
                        className: c.title,
                        children: [
                            (0, a.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: n,
                            }),
                            null != l &&
                                "" !== l &&
                                (0, a.jsx)(s.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    children: l,
                                }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: i()(c.caret, { [c.opened]: _ }),
                        children: (0, a.jsx)(o.Z, {
                            width: 20,
                            height: 20,
                            direction: o.Z.Directions.RIGHT,
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                ref: v,
                className: i()(c.content, { [c.opened]: _ }),
                style: E,
                children: d,
            }),
        ],
    });
}

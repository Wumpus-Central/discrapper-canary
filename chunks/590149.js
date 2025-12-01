n.d(t, { Z: () => d }), n(388685);
var a = n(54381),
    l = n(473749),
    i = n(120356),
    r = n.n(i),
    s = n(481060),
    o = n(259580),
    c = n(422665);
function d(e) {
    let {
            icon: t,
            title: n,
            subtitle: i,
            children: d,
            className: u,
            isExpanded: m,
            onExpandedChange: p,
            defaultExpanded: h = !1,
            onOpen: x,
            maxHeight: f,
        } = e,
        [g, b] = l.useState(h),
        v = l.useRef(null),
        [j, _] = l.useState(null),
        y = void 0 !== m,
        C = y ? m : g;
    l.useEffect(() => {
        C && null != v.current && _(v.current.scrollHeight);
    }, [C, d]);
    let S = l.useCallback(() => {
            let e = !C;
            y || b(e), null == p || p(e), e && null != x && x();
        }, [C, y, p, x]),
        E = l.useMemo(() => {
            if (C) {
                if (null != f) return { maxHeight: "number" == typeof f ? "".concat(f, "px") : f };
                if (null != j) return { maxHeight: "".concat(j, "px") };
            }
        }, [f, C, j]);
    return (0, a.jsxs)("div", {
        className: r()(c.accordionContainer, u, { [c.opened]: C }),
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
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: n,
                            }),
                            null != i &&
                                "" !== i &&
                                (0, a.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "interactive-normal",
                                    children: i,
                                }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(c.caret, { [c.opened]: C }),
                        children: (0, a.jsx)(o.Z, {
                            width: 18,
                            height: 18,
                            direction: o.Z.Directions.DOWN,
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                ref: v,
                className: r()(c.content, { [c.opened]: C }),
                style: E,
                children: d,
            }),
        ],
    });
}

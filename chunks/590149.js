n.d(t, { Z: () => d }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
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
            maxHeight: g,
        } = e,
        [f, b] = r.useState(h),
        v = r.useRef(null),
        [j, _] = r.useState(null),
        y = void 0 !== m,
        C = y ? m : f;
    r.useEffect(() => {
        C && null != v.current && _(v.current.scrollHeight);
    }, [C, d]);
    let S = r.useCallback(() => {
            let e = !C;
            y || b(e), null == p || p(e), e && null != x && x();
        }, [C, y, p, x]),
        E = r.useMemo(() => {
            if (C) {
                if (null != g) return { maxHeight: "number" == typeof g ? "".concat(g, "px") : g };
                if (null != j) return { maxHeight: "".concat(j, "px") };
            }
        }, [g, C, j]);
    return (0, a.jsxs)("div", {
        className: l()(c.accordionContainer, u, { [c.opened]: C }),
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
                        className: l()(c.caret, { [c.opened]: C }),
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
                className: l()(c.content, { [c.opened]: C }),
                style: E,
                children: d,
            }),
        ],
    });
}

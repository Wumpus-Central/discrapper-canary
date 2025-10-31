n.d(t, { Z: () => d }), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(481060),
    o = n(259580),
    c = n(422665);
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
            onOpen: x,
            maxHeight: g,
        } = e,
        [f, b] = i.useState(h),
        v = void 0 !== m,
        j = v ? m : f,
        _ = i.useCallback(() => {
            let e = !j;
            v || b(e), null == p || p(e), e && null != x && x();
        }, [j, v, p, x]),
        y = i.useMemo(() => {
            if (null != g && j) return { maxHeight: "number" == typeof g ? "".concat(g, "px") : g };
        }, [g, j]);
    return (0, a.jsxs)("div", {
        className: r()(c.accordionContainer, u, { [c.opened]: j }),
        children: [
            (0, a.jsxs)(s.P3F, {
                className: c.header,
                onClick: _,
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
                            null != l &&
                                "" !== l &&
                                (0, a.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "interactive-normal",
                                    children: l,
                                }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(c.caret, { [c.opened]: j }),
                        children: (0, a.jsx)(o.Z, {
                            width: 18,
                            height: 18,
                            direction: o.Z.Directions.DOWN,
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: r()(c.content, { [c.opened]: j }),
                style: y,
                children: d,
            }),
        ],
    });
}

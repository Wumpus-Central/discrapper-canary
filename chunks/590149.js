n.d(t, { Z: () => d }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(259580),
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
            maxHeight: f,
        } = e,
        [b, g] = r.useState(h),
        v = void 0 !== m,
        j = v ? m : b,
        _ = r.useCallback(() => {
            let e = !j;
            v || g(e), null == p || p(e), e && null != x && x();
        }, [j, v, p, x]),
        y = r.useMemo(() => {
            if (null != f && j) return { maxHeight: "number" == typeof f ? "".concat(f, "px") : f };
        }, [f, j]);
    return (0, a.jsxs)("div", {
        className: i()(c.accordionContainer, u, { [c.opened]: j }),
        children: [
            (0, a.jsxs)(o.P3F, {
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
                            (0, a.jsx)(o.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: n,
                            }),
                            null != l &&
                                "" !== l &&
                                (0, a.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "interactive-normal",
                                    children: l,
                                }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: i()(c.caret, { [c.opened]: j }),
                        children: (0, a.jsx)(s.Z, {
                            width: 18,
                            height: 18,
                            direction: s.Z.Directions.DOWN,
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: i()(c.content, { [c.opened]: j }),
                style: y,
                children: d,
            }),
        ],
    });
}

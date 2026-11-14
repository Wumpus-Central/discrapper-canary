var l,
    r = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
    o = n(939249),
    u = n(534514),
    c = n(821609),
    d = n(692651),
    m = 221552 == n.j ? (((l = {}).FILL = "fill"), (l.CAROUSEL = "carousel"), l) : null;
let g = { fill: d.GS, carousel: d.Dk };
n.d(
    t,
    {},
    {
        Ay: (e) => {
            let {
                    layout: t = "fill",
                    backgroundImageUrl: n,
                    title: l,
                    ctaText: a,
                    "aria-label": m,
                    onButtonClick: h,
                    onBlockClick: p,
                    badge: f,
                    innerRef: E,
                    listItemProps: x,
                } = e,
                v = s.useId(),
                C = s.useCallback(
                    (e) => {
                        (e.stopPropagation(), h());
                    },
                    [h],
                );
            return (0, r.jsxs)(o.D, {
                ...x,
                className: i()(d.iC, g[t]),
                innerRef: E,
                style: null != n ? { backgroundImage: `url(${n})` } : void 0,
                "aria-label": m ?? a,
                "aria-describedby": null != l ? v : void 0,
                onClick: p,
                children: [
                    (0, r.jsx)("div", { className: d.LI, children: f }),
                    (0, r.jsx)("div", {
                        className: d.P4,
                        children:
                            null != l &&
                            (0, r.jsx)(u.D, {
                                id: v,
                                lineClamp: 4,
                                className: l.className,
                                color: "text-overlay-light",
                                style: null != l.color ? { color: l.color } : void 0,
                                variant: l.variant,
                                children: l.text,
                            }),
                    }),
                    (0, r.jsx)(c.$, {
                        variant: "overlay-primary",
                        text: a,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onClick: C,
                    }),
                ],
            });
        },
        R3: (e) => {
            let { layout: t = "fill" } = e;
            return (0, r.jsx)("div", { className: i()(d.qV, g[t]), children: (0, r.jsx)("div", { className: d.xA }) });
        },
        uf: m,
    },
);

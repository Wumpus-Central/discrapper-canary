n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var o = n(120356),
    l = n.n(o),
    a = n(793030),
    i = n(481060),
    s = n(7284),
    c = n(660662),
    d = n(698282),
    u = n(388032),
    p = n(179786),
    f = n(615905);
function m(e) {
    let { selectedFontId: t, setSelectedFontId: n, className: o } = e;
    return (0, r.jsxs)("div", {
        className: o,
        children: [
            (0, r.jsxs)(a.X6, {
                variant: "heading-md/semibold",
                className: p.selectorHeading,
                children: [
                    u.intl.string(d.default.nP0ngY),
                    (0, r.jsx)(i.SrA, {
                        size: "xs",
                        color: i.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, r.jsx)(a.Kq, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: c.P$.map((e) => {
                    let o = s.y[e],
                        c = e === t;
                    return (0, r.jsx)(
                        i.ua7,
                        {
                            text: u.intl.string(o.name),
                            children: (t) => {
                                let { onMouseEnter: d, onMouseLeave: p } = t;
                                return (0, r.jsx)(i.P3F, {
                                    className: l()(f.fontButton, { [f.selected]: c }),
                                    onClick: () => n(e),
                                    "aria-label": u.intl.string(o.name),
                                    onMouseEnter: d,
                                    onMouseLeave: p,
                                    children: (0, r.jsx)(a.xv, {
                                        variant: "text-lg/semibold",
                                        color: c ? "text-primary" : "text-default",
                                        className: l()(f.fontText, s.y[e].className),
                                        children: "Gg",
                                    }),
                                });
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}

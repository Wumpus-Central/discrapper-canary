n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var o = n(120356),
    l = n.n(o),
    a = n(793030),
    i = n(481060),
    s = n(7284),
    c = n(660662),
    d = n(62222),
    u = n(388032),
    p = n(77426),
    f = n(355654);
function m(e) {
    let { selectedFontId: t, setSelectedFontId: n, className: o } = e;
    return (0, r.jsxs)("div", {
        className: o,
        children: [
            (0, r.jsxs)(a.X6q, {
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
            (0, r.jsx)(a.Kqy, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: c.P$.map((e) => {
                    let o = (0, s.U)(e),
                        c = e === t;
                    return (0, r.jsx)(
                        i.ua7,
                        {
                            text: u.intl.string(o.name),
                            children: (t) => {
                                let { onMouseEnter: s, onMouseLeave: d } = t;
                                return (0, r.jsx)(i.P3F, {
                                    className: l()(f.fontButton, { [f.selected]: c }),
                                    onClick: () => n(e),
                                    "aria-label": u.intl.string(o.name),
                                    onMouseEnter: s,
                                    onMouseLeave: d,
                                    children: (0, r.jsx)(a.xvT, {
                                        variant: "text-lg/semibold",
                                        color: c ? "text-primary" : "text-default",
                                        className: l()(f.fontText, o.className),
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

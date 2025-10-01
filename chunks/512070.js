n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var o = n(120356),
    l = n.n(o),
    a = n(342905),
    i = n(793030),
    s = n(481060),
    c = n(594928),
    d = n(131016),
    u = n(7284),
    p = n(660662),
    m = n(62222),
    f = n(388032),
    g = n(77426),
    h = n(355654);
function b(e) {
    let { selectedFontId: t, setSelectedFontId: n, displayName: o, className: b } = e,
        x = t !== a.C.DEFAULT,
        j = (0, d.mR)(o),
        { enabled: _ } = c.wL.useConfig({ location: "DisplayNameStylesFontSelection" });
    return (0, r.jsxs)("div", {
        className: b,
        children: [
            (0, r.jsxs)(i.X6q, {
                variant: "heading-md/semibold",
                className: g.selectorHeading,
                children: [
                    f.intl.string(m.default.nP0ngY),
                    (0, r.jsx)(s.SrA, {
                        size: "xs",
                        color: s.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, r.jsx)(i.Kqy, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: p.P$.map((e) => {
                    let o = (0, u.U)(e),
                        a = e === t;
                    return (0, r.jsx)(
                        s.ua7,
                        {
                            text: f.intl.string(o.name),
                            children: (t) => {
                                let { onMouseEnter: c, onMouseLeave: d } = t;
                                return (0, r.jsx)(s.P3F, {
                                    className: l()(h.fontButton, { [h.selected]: a }),
                                    onClick: () => n(e),
                                    "aria-label": f.intl.string(o.name),
                                    onMouseEnter: c,
                                    onMouseLeave: d,
                                    children: (0, r.jsx)(i.xvT, {
                                        variant: "text-lg/semibold",
                                        color: a ? "text-primary" : "text-default",
                                        className: l()(h.fontText, o.className),
                                        children: "Gg",
                                    }),
                                });
                            },
                        },
                        e,
                    );
                }),
            }),
            x &&
                j &&
                _ &&
                (0, r.jsxs)("div", {
                    className: h.nonLatinDisclaimer,
                    children: [
                        (0, r.jsx)(i.d3s, { size: "lg" }),
                        (0, r.jsx)(i.xvT, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: f.intl.string(m.default["+O1xLy"]),
                        }),
                    ],
                }),
        ],
    });
}

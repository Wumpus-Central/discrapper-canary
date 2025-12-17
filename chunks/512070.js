n.d(t, { Z: () => b });
var l = n(54381);
n(473749);
var o = n(120356),
    r = n.n(o),
    a = n(342905),
    i = n(793030),
    s = n(28664),
    c = n(481060),
    d = n(131016),
    u = n(7284),
    f = n(660662),
    p = n(143525),
    m = n(388032),
    g = n(238267),
    h = n(296625);
function b(e) {
    let { selectedFontId: t, setSelectedFontId: n, displayName: o, className: b } = e,
        x = t !== a.C.DEFAULT,
        S = (0, d.mR)(o);
    return (0, l.jsxs)("div", {
        className: b,
        children: [
            (0, l.jsxs)(i.X6q, {
                variant: "heading-md/semibold",
                className: g.selectorHeading,
                children: [
                    m.intl.string(p.default.nP0ngb),
                    (0, l.jsx)(c.SrA, {
                        size: "xs",
                        color: c.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, l.jsx)(i.Kqy, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: f.P$.map((e) => {
                    let o = (0, u.U)(e),
                        a = e === t;
                    return (0, l.jsx)(
                        s.u,
                        {
                            text: m.intl.string(o.name),
                            asContainer: !0,
                            children: (0, l.jsx)(c.P3F, {
                                className: r()(h.fontButton, { [h.selected]: a }),
                                onClick: () => n(e),
                                "aria-label": m.intl.string(o.name),
                                children: (0, l.jsx)(i.xvT, {
                                    variant: "text-lg/semibold",
                                    color: a ? "text-strong" : "text-default",
                                    className: r()(h.fontText, o.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            x &&
                S &&
                (0, l.jsxs)("div", {
                    className: h.nonLatinDisclaimer,
                    children: [
                        (0, l.jsx)(i.d3s, { size: "lg" }),
                        (0, l.jsx)(i.xvT, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: m.intl.string(p.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}

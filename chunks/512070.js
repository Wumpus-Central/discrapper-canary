n.d(t, { Z: () => x });
var l = n(54381);
n(473749);
var o = n(120356),
    r = n.n(o),
    i = n(342905),
    a = n(793030),
    s = n(28664),
    c = n(481060),
    d = n(131016),
    u = n(7284),
    p = n(660662),
    m = n(905170),
    f = n(388032),
    g = n(959389),
    h = n(204469);
function x(e) {
    let { selectedFontId: t, setSelectedFontId: n, displayName: o, className: x } = e,
        b = t !== i.C.DEFAULT,
        _ = (0, d.mR)(o);
    return (0, l.jsxs)("div", {
        className: x,
        children: [
            (0, l.jsxs)(a.X6q, {
                variant: "heading-md/semibold",
                className: g.selectorHeading,
                children: [
                    f.intl.string(m.default.nP0ngb),
                    (0, l.jsx)(c.SrA, {
                        size: "xs",
                        color: c.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, l.jsx)(a.Kqy, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: p.P$.map((e) => {
                    let o = (0, u.U)(e),
                        i = e === t;
                    return (0, l.jsx)(
                        s.u,
                        {
                            text: f.intl.string(o.name),
                            asContainer: !0,
                            children: (0, l.jsx)(c.P3F, {
                                className: r()(h.fontButton, { [h.selected]: i }),
                                onClick: () => n(e),
                                "aria-label": f.intl.string(o.name),
                                children: (0, l.jsx)(a.xvT, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-strong" : "text-default",
                                    className: r()(h.fontText, o.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            b &&
                _ &&
                (0, l.jsxs)("div", {
                    className: h.nonLatinDisclaimer,
                    children: [
                        (0, l.jsx)(a.d3s, { size: "lg" }),
                        (0, l.jsx)(a.xvT, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: f.intl.string(m.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}

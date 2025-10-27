n.d(t, { Z: () => b });
var l = n(951288);
n(647438);
var o = n(120356),
    r = n.n(o),
    i = n(342905),
    a = n(793030),
    s = n(28664),
    c = n(481060),
    d = n(594928),
    u = n(131016),
    p = n(7284),
    m = n(660662),
    f = n(352609),
    g = n(388032),
    h = n(959389),
    x = n(204469);
function b(e) {
    let { selectedFontId: t, setSelectedFontId: n, displayName: o, className: b } = e,
        _ = t !== i.C.DEFAULT,
        S = (0, u.mR)(o),
        { enabled: j } = d.wL.useConfig({ location: "DisplayNameStylesFontSelection" });
    return (0, l.jsxs)("div", {
        className: b,
        children: [
            (0, l.jsxs)(a.X6q, {
                variant: "heading-md/semibold",
                className: h.selectorHeading,
                children: [
                    g.intl.string(f.default.nP0ngb),
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
                children: m.P$.map((e) => {
                    let o = (0, p.U)(e),
                        i = e === t;
                    return (0, l.jsx)(
                        s.u,
                        {
                            text: g.intl.string(o.name),
                            asContainer: !0,
                            children: (0, l.jsx)(c.P3F, {
                                className: r()(x.fontButton, { [x.selected]: i }),
                                onClick: () => n(e),
                                "aria-label": g.intl.string(o.name),
                                children: (0, l.jsx)(a.xvT, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-primary" : "text-default",
                                    className: r()(x.fontText, o.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            _ &&
                S &&
                j &&
                (0, l.jsxs)("div", {
                    className: x.nonLatinDisclaimer,
                    children: [
                        (0, l.jsx)(a.d3s, { size: "lg" }),
                        (0, l.jsx)(a.xvT, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: g.intl.string(f.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}

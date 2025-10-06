n.d(t, { Z: () => _ });
var o = n(951288);
n(647438);
var l = n(120356),
    r = n.n(l),
    a = n(342905),
    i = n(793030),
    s = n(28664),
    c = n(481060),
    d = n(594928),
    u = n(131016),
    p = n(7284),
    m = n(660662),
    f = n(693450),
    g = n(388032),
    h = n(959389),
    x = n(204469);
function _(e) {
    let { selectedFontId: t, setSelectedFontId: n, displayName: l, className: _ } = e,
        b = t !== a.C.DEFAULT,
        S = (0, u.mR)(l),
        { enabled: j } = d.wL.useConfig({ location: "DisplayNameStylesFontSelection" });
    return (0, o.jsxs)("div", {
        className: _,
        children: [
            (0, o.jsxs)(i.X6q, {
                variant: "heading-md/semibold",
                className: h.selectorHeading,
                children: [
                    g.intl.string(f.default.nP0ngY),
                    (0, o.jsx)(c.SrA, {
                        size: "xs",
                        color: c.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, o.jsx)(i.Kqy, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: m.P$.map((e) => {
                    let l = (0, p.U)(e),
                        a = e === t;
                    return (0, o.jsx)(
                        s.u,
                        {
                            text: g.intl.string(l.name),
                            asContainer: !0,
                            children: (0, o.jsx)(c.P3F, {
                                className: r()(x.fontButton, { [x.selected]: a }),
                                onClick: () => n(e),
                                "aria-label": g.intl.string(l.name),
                                children: (0, o.jsx)(i.xvT, {
                                    variant: "text-lg/semibold",
                                    color: a ? "text-primary" : "text-default",
                                    className: r()(x.fontText, l.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            b &&
                S &&
                j &&
                (0, o.jsxs)("div", {
                    className: x.nonLatinDisclaimer,
                    children: [
                        (0, o.jsx)(i.d3s, { size: "lg" }),
                        (0, o.jsx)(i.xvT, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: g.intl.string(f.default["+O1xLy"]),
                        }),
                    ],
                }),
        ],
    });
}

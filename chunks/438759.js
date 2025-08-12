n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var o = n(120356),
    l = n.n(o),
    a = n(793030),
    i = n(481060),
    s = n(821795),
    c = n(892567),
    d = n(660662),
    u = n(698282),
    p = n(388032),
    f = n(179786),
    m = n(522293);
function g(e) {
    let { selectedEffectId: t, setSelectedEffectId: n, configs: o, className: g } = e;
    return (0, r.jsxs)("div", {
        className: g,
        children: [
            (0, r.jsxs)(a.X6, {
                variant: "heading-md/semibold",
                className: f.selectorHeading,
                children: [
                    p.intl.string(u.default["1wilMz"]),
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
                gap: 8,
                children: d.mH.map((e) => {
                    let a = o[e],
                        d = e === t,
                        u = a.previewStyles;
                    return (0, r.jsx)(
                        i.P3F,
                        {
                            className: l()(m.effectContainer, { [m.selected]: d }),
                            onClick: () => n(e),
                            children: (0, r.jsx)(c.Z, {
                                userName: a.name,
                                effectDisplayType: s.F.STATIC,
                                displayNameStyles: u,
                                textClassName: m.effectText,
                                inProfile: !0,
                            }),
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}

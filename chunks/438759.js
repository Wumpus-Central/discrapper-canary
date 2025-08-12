n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var o = n(120356),
    l = n.n(o),
    i = n(793030),
    a = n(481060),
    s = n(821795),
    c = n(892567),
    d = n(203872),
    u = n(660662),
    p = n(698282),
    f = n(388032),
    m = n(179786),
    g = n(522293);
function h(e) {
    let { selectedEffectId: t, setSelectedEffectId: n, className: o } = e;
    return (0, r.jsxs)("div", {
        className: o,
        children: [
            (0, r.jsxs)(i.X6, {
                variant: "heading-md/semibold",
                className: m.selectorHeading,
                children: [
                    f.intl.string(p.default["1wilMz"]),
                    (0, r.jsx)(a.SrA, {
                        size: "xs",
                        color: a.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, r.jsx)(i.Kq, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: u.mH.map((e) =>
                    (0, r.jsx)(
                        b,
                        {
                            effectId: e,
                            selected: e === t,
                            onClick: () => n(e),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function b(e) {
    let { effectId: t, selected: n, onClick: o } = e,
        i = (0, d.R)(t);
    return (0, r.jsx)(
        a.P3F,
        {
            className: l()(g.effectContainer, { [g.selected]: n }),
            onClick: o,
            children: (0, r.jsx)(c.Z, {
                userName: i.name,
                effectDisplayType: s.F.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: g.effectText,
                inProfile: !0,
            }),
        },
        t,
    );
}

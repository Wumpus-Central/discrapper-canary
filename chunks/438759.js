n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var o = n(120356),
    l = n.n(o),
    a = n(793030),
    i = n(481060),
    s = n(821795),
    c = n(892567),
    d = n(203872),
    u = n(660662),
    p = n(62222),
    f = n(388032),
    m = n(77426),
    g = n(6073);
function h(e) {
    let { selectedEffectId: t, setSelectedEffectId: n, className: o } = e;
    return (0, r.jsxs)("div", {
        className: o,
        children: [
            (0, r.jsxs)(a.X6q, {
                variant: "heading-md/semibold",
                className: m.selectorHeading,
                children: [
                    f.intl.string(p.default["1wilMz"]),
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
        a = (0, d.R)(t);
    return (0, r.jsx)(
        i.P3F,
        {
            className: l()(g.effectContainer, { [g.selected]: n }),
            onClick: o,
            children: (0, r.jsx)(c.Z, {
                userName: a.name,
                effectDisplayType: s.F.STATIC,
                displayNameStyles: a.previewStyles,
                textClassName: g.effectText,
                inProfile: !0,
            }),
        },
        t,
    );
}

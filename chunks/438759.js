n.d(t, { Z: () => h });
var l = n(951288);
n(647438);
var o = n(120356),
    r = n.n(o),
    i = n(793030),
    a = n(481060),
    s = n(489511),
    c = n(821795),
    d = n(892567),
    u = n(660662),
    p = n(593082),
    m = n(388032),
    f = n(77426),
    g = n(6073);
function h(e) {
    let { selectedEffectId: t, setSelectedEffectId: n, className: o } = e;
    return (0, l.jsxs)("div", {
        className: o,
        children: [
            (0, l.jsxs)(i.X6q, {
                variant: "heading-md/semibold",
                className: f.selectorHeading,
                children: [
                    m.intl.string(p.default["1wilM1"]),
                    (0, l.jsx)(a.SrA, {
                        size: "xs",
                        color: a.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, l.jsx)(i.Kqy, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: u.mH.map((e) =>
                    (0, l.jsx)(
                        x,
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
function x(e) {
    let { effectId: t, selected: n, onClick: o } = e,
        i = (0, s.R)(t);
    return (0, l.jsx)(
        a.P3F,
        {
            className: r()(g.effectContainer, { [g.selected]: n }),
            onClick: o,
            children: (0, l.jsx)(d.Z, {
                userName: i.name,
                effectDisplayType: c.F.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: g.effectText,
                inProfile: !0,
            }),
        },
        t,
    );
}

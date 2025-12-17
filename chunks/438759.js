n.d(t, { Z: () => h });
var l = n(54381);
n(473749);
var o = n(120356),
    r = n.n(o),
    a = n(793030),
    i = n(481060),
    s = n(489511),
    c = n(821795),
    d = n(892567),
    u = n(660662),
    f = n(143525),
    p = n(388032),
    m = n(238267),
    g = n(423763);
function h(e) {
    let { selectedEffectId: t, setSelectedEffectId: n, className: o } = e;
    return (0, l.jsxs)("div", {
        className: o,
        children: [
            (0, l.jsxs)(a.X6q, {
                variant: "heading-md/semibold",
                className: m.selectorHeading,
                children: [
                    p.intl.string(f.default["1wilM1"]),
                    (0, l.jsx)(i.SrA, {
                        size: "xs",
                        color: i.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, l.jsx)(a.Kqy, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: u.mH.map((e) =>
                    (0, l.jsx)(
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
        a = (0, s.R)(t);
    return (0, l.jsx)(
        i.P3F,
        {
            className: r()(g.effectContainer, { [g.selected]: n }),
            onClick: o,
            children: (0, l.jsx)(d.Z, {
                userName: a.name,
                effectDisplayType: c.F.STATIC,
                displayNameStyles: a.previewStyles,
                textClassName: g.effectText,
                inProfile: !0,
            }),
        },
        t,
    );
}

n.d(t, { Z: () => h });
var o = n(951288);
n(647438);
var l = n(120356),
    r = n.n(l),
    a = n(793030),
    i = n(481060),
    s = n(821795),
    c = n(892567),
    d = n(203872),
    u = n(660662),
    p = n(693450),
    m = n(388032),
    f = n(959389),
    g = n(771880);
function h(e) {
    let { selectedEffectId: t, setSelectedEffectId: n, className: l } = e;
    return (0, o.jsxs)("div", {
        className: l,
        children: [
            (0, o.jsxs)(a.X6q, {
                variant: "heading-md/semibold",
                className: f.selectorHeading,
                children: [
                    m.intl.string(p.default["1wilMz"]),
                    (0, o.jsx)(i.SrA, {
                        size: "xs",
                        color: i.TVs.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, o.jsx)(a.Kqy, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: u.mH.map((e) =>
                    (0, o.jsx)(
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
    let { effectId: t, selected: n, onClick: l } = e,
        a = (0, d.R)(t);
    return (0, o.jsx)(
        i.P3F,
        {
            className: r()(g.effectContainer, { [g.selected]: n }),
            onClick: l,
            children: (0, o.jsx)(c.Z, {
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

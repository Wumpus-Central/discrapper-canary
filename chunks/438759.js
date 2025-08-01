n.d(t, { Z: () => g });
var o = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    i = n(793030),
    s = n(481060),
    a = n(821795),
    c = n(892567),
    d = n(660662),
    u = n(698282),
    p = n(388032),
    f = n(397419),
    m = n(395921);
function g(e) {
    let { selectedEffectId: t, setSelectedEffectId: n, configs: r, className: g } = e;
    return (0, o.jsxs)('div', {
        className: g,
        children: [
            (0, o.jsxs)(i.X6, {
                variant: 'heading-md/semibold',
                className: f.selectorHeading,
                children: [
                    p.intl.string(u.default['1wilMz']),
                    (0, o.jsx)(s.SrA, {
                        size: 'xs',
                        color: s.TVs.colors.TEXT_DEFAULT
                    })
                ]
            }),
            (0, o.jsx)(i.Kq, {
                direction: 'horizontal',
                align: 'center',
                wrap: !0,
                gap: 8,
                children: d.mH.map((e) => {
                    let i = r[e],
                        d = e === t,
                        u = i.previewStyles;
                    return (0, o.jsx)(
                        s.P3F,
                        {
                            className: l()(m.effectContainer, { [m.selected]: d }),
                            onClick: () => n(e),
                            children: (0, o.jsx)(c.Z, {
                                userName: i.name,
                                effectDisplayType: a.F.STATIC,
                                displayNameStyles: u,
                                textClassName: m.effectText
                            })
                        },
                        e
                    );
                })
            })
        ]
    });
}

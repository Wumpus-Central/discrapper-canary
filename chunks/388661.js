n.d(t, { Z: () => u });
var r = n(200651),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(550271),
    o = n(434404),
    c = n(502936),
    A = n(388032),
    d = n(935921);
let u = function (e) {
    let { className: t, guildId: n, tag: i, badge: u, primaryColor: g, secondaryColor: f, isDisabled: m = !1 } = e;
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            (0, r.jsx)(a.vwX, {
                className: d.sectionTitle,
                children: A.NW.string(c.Z['tN+8pK'])
            }),
            (0, r.jsxs)('div', {
                className: d.tagContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: d.tagInputContainer,
                        children: (0, r.jsx)(a.oil, {
                            className: d.tagInputWrapper,
                            inputClassName: s()(d.tagInput, 'heading-sm/semibold'),
                            maxLength: 4,
                            autoFocus: !0,
                            placeholder: 'WUMP',
                            prefixElement: (0, r.jsx)(l.A, {
                                badge: u,
                                width: 40,
                                height: 40,
                                primaryTintColor: g,
                                secondaryTintColor: f
                            }),
                            disabled: m,
                            value: null != i ? i : '',
                            onChange: function (e) {
                                o.Z.updateGuildProfile(n, { tag: e });
                            }
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: d.tagTooltip,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: A.NW.string(c.Z.UbC8y8)
                        })
                    })
                ]
            })
        ]
    });
};

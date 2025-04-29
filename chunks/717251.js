n.d(t, { Z: () => c }), n(953529);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(2150),
    o = n(727001);
function c(e) {
    let { title: t, description: n, action: i, highlightColor: c = a.q.NONE, selected: u = !1, subsection: d = null, onClick: m, className: g, disabled: p } = e;
    return (0, r.jsxs)('div', {
        className: l()(o.container, g),
        children: [
            (0, r.jsx)(s.P3F, {
                className: l()(
                    o.clickableContainer,
                    {
                        [o.noAction]: null == m,
                        [o.disabled]: p
                    },
                    g
                ),
                onClick: p ? void 0 : m,
                children: (0, r.jsxs)('div', {
                    className: l()(o.backgroundModifierContainer, o[c], {
                        [o.selected]: u,
                        [o.disabled]: p,
                        [o.noAction]: null == m
                    }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: o.settingsDescriptionContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'interactive-active',
                                    children: t
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'interactive-normal',
                                    className: o.description,
                                    children: n
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: o.__invalid_action,
                            children: i
                        })
                    ]
                })
            }),
            null != d &&
                (0, r.jsx)('div', {
                    className: o.subsectionContainer,
                    children: d
                })
        ]
    });
}

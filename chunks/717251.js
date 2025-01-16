n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(481060),
    a = n(2150),
    o = n(175843);
function c(e) {
    let { title: t, description: n, action: r, highlightColor: c = a.q.NONE, selected: d = !1, subsection: u = null, onClick: m, className: h, disabled: g } = e;
    return (0, i.jsxs)('div', {
        className: l()(o.container, h),
        children: [
            (0, i.jsx)(s.Clickable, {
                className: l()(
                    o.clickableContainer,
                    {
                        [o.noAction]: null == m,
                        [o.disabled]: g
                    },
                    h
                ),
                onClick: g ? void 0 : m,
                children: (0, i.jsxs)('div', {
                    className: l()(o.backgroundModifierContainer, o[c], {
                        [o.selected]: d,
                        [o.disabled]: g,
                        [o.noAction]: null == m
                    }),
                    children: [
                        (0, i.jsxs)('div', {
                            className: o.settingsDescriptionContainer,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'interactive-active',
                                    children: t
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'interactive-normal',
                                    className: o.description,
                                    children: n
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: o.__invalid_action,
                            children: r
                        })
                    ]
                })
            }),
            null != u &&
                (0, i.jsx)('div', {
                    className: o.subsectionContainer,
                    children: u
                })
        ]
    });
}

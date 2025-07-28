(i.d(t, { d: () => d }), i(953529));
var r = i(255367);
i(73800);
var n = i(120356),
    l = i.n(n),
    c = i(692547),
    a = i(481060);
i(651711);
var o = i(551556);
i(388032);
var s = i(719677);
(i(347157), i(177266));
let d = (e) => {
    let { name: t, description: i, checked: n, actionLabel: d, actionHandler: b } = e,
        u = null;
    return (
        (u = n
            ? (0, r.jsx)(o.Z, {
                  width: 20,
                  height: 20
              })
            : (0, r.jsx)(a.k$p, {
                  size: 'custom',
                  color: c.Z.colors.STATUS_DANGER.css,
                  width: 20,
                  height: 20
              })),
        (0, r.jsxs)('div', {
            className: s.checklistItem,
            children: [
                (0, r.jsx)('div', {
                    className: s.checklistIcon,
                    children: u
                }),
                (0, r.jsxs)('div', {
                    className: l()(s.__invalid_checklistText, n && s.ineligibleRow),
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: 'heading-md/semibold',
                            className: s.checklistItemName,
                            children: t
                        }),
                        (0, r.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: i
                        })
                    ]
                }),
                null != d &&
                    (0, r.jsx)('div', {
                        className: s.eligibilityActionContainer,
                        children: (0, r.jsx)(a.zxk, {
                            variant: 'primary',
                            onClick: b,
                            text: d,
                            size: 'sm'
                        })
                    })
            ]
        })
    );
};

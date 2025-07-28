(n.d(t, { d: () => u }), n(953529));
var r = n(255367);
n(73800);
var i = n(120356),
    c = n.n(i),
    l = n(692547),
    o = n(481060);
n(651711);
var s = n(551556);
n(388032);
var a = n(719677);
(n(347157), n(177266));
let u = (e) => {
    let { name: t, description: n, checked: i, actionLabel: u, actionHandler: b } = e,
        d = null;
    return (
        (d = i
            ? (0, r.jsx)(s.Z, {
                  width: 20,
                  height: 20
              })
            : (0, r.jsx)(o.k$p, {
                  size: 'custom',
                  color: l.Z.colors.STATUS_DANGER.css,
                  width: 20,
                  height: 20
              })),
        (0, r.jsxs)('div', {
            className: a.checklistItem,
            children: [
                (0, r.jsx)('div', {
                    className: a.checklistIcon,
                    children: d
                }),
                (0, r.jsxs)('div', {
                    className: c()(a.__invalid_checklistText, i && a.ineligibleRow),
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-md/semibold',
                            className: a.checklistItemName,
                            children: t
                        }),
                        (0, r.jsx)(o.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: n
                        })
                    ]
                }),
                null != u &&
                    (0, r.jsx)('div', {
                        className: a.eligibilityActionContainer,
                        children: (0, r.jsx)(o.zxk, {
                            variant: 'primary',
                            onClick: b,
                            text: u,
                            size: 'sm'
                        })
                    })
            ]
        })
    );
};

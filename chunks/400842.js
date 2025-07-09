(t.d(i, { d: () => b }), t(953529));
var n = t(255367);
t(73800);
var r = t(120356),
    l = t.n(r),
    c = t(692547),
    o = t(755721),
    a = t(481060);
t(651711);
var s = t(551556);
t(388032);
var d = t(719677);
(t(347157), t(177266));
let b = (e) => {
    let { name: i, description: t, checked: r, actionLabel: b, actionHandler: u } = e,
        g = null;
    return (
        (g = r
            ? (0, n.jsx)(s.Z, {
                  width: 20,
                  height: 20
              })
            : (0, n.jsx)(a.k$p, {
                  size: 'custom',
                  color: c.Z.unsafe_rawColors.RED_400.css,
                  width: 20,
                  height: 20
              })),
        (0, n.jsxs)('div', {
            className: d.checklistItem,
            children: [
                (0, n.jsx)('div', {
                    className: d.checklistIcon,
                    children: g
                }),
                (0, n.jsxs)('div', {
                    className: l()(d.__invalid_checklistText, r && d.ineligibleRow),
                    children: [
                        (0, n.jsx)(a.X6q, {
                            variant: 'heading-md/semibold',
                            className: d.checklistItemName,
                            children: i
                        }),
                        (0, n.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: t
                        })
                    ]
                }),
                null != b &&
                    (0, n.jsx)('div', {
                        className: d.eligibilityActionContainer,
                        children: (0, n.jsx)(o.zx, {
                            className: d.eligibilityActionButton,
                            look: o.iL.OUTLINED,
                            color: o.Tt.PRIMARY,
                            onClick: u,
                            grow: !0,
                            children: b
                        })
                    })
            ]
        })
    );
};

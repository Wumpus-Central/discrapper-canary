i.d(t, { d: () => d });
var n = i(200651);
i(192379);
var r = i(120356),
    l = i.n(r),
    o = i(692547),
    a = i(481060);
i(651711);
var s = i(551556);
i(388032);
var c = i(211029);
i(347157), i(177266);
let d = (e) => {
    let { name: t, description: i, checked: r, actionLabel: d, actionHandler: _ } = e,
        u = null;
    return (
        (u = r
            ? (0, n.jsx)(s.Z, {
                  width: 20,
                  height: 20
              })
            : (0, n.jsx)(a.k$p, {
                  size: 'custom',
                  color: o.Z.unsafe_rawColors.RED_400.css,
                  width: 20,
                  height: 20
              })),
        (0, n.jsxs)('div', {
            className: c.checklistItem,
            children: [
                (0, n.jsx)('div', {
                    className: c.checklistIcon,
                    children: u
                }),
                (0, n.jsxs)('div', {
                    className: l()(c.__invalid_checklistText, r && c.ineligibleRow),
                    children: [
                        (0, n.jsx)(a.X6q, {
                            variant: 'heading-md/semibold',
                            className: c.checklistItemName,
                            children: t
                        }),
                        (0, n.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: i
                        })
                    ]
                }),
                null != d &&
                    (0, n.jsx)('div', {
                        className: c.eligibilityActionContainer,
                        children: (0, n.jsx)(a.zxk, {
                            className: c.eligibilityActionButton,
                            look: a.iLD.OUTLINED,
                            color: a.Ttl.PRIMARY,
                            onClick: _,
                            grow: !0,
                            children: d
                        })
                    })
            ]
        })
    );
};

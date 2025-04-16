i.d(t, { d: () => d }), i(953529);
var n = i(200651);
i(192379);
var r = i(120356),
    l = i.n(r),
    c = i(692547),
    o = i(481060);
i(651711);
var a = i(551556);
i(388032);
var s = i(719677);
i(347157), i(177266);
let d = (e) => {
    let { name: t, description: i, checked: r, actionLabel: d, actionHandler: b } = e,
        u = null;
    return (
        (u = r
            ? (0, n.jsx)(a.Z, {
                  width: 20,
                  height: 20
              })
            : (0, n.jsx)(o.k$p, {
                  size: 'custom',
                  color: c.Z.unsafe_rawColors.RED_400.css,
                  width: 20,
                  height: 20
              })),
        (0, n.jsxs)('div', {
            className: s.checklistItem,
            children: [
                (0, n.jsx)('div', {
                    className: s.checklistIcon,
                    children: u
                }),
                (0, n.jsxs)('div', {
                    className: l()(s.__invalid_checklistText, r && s.ineligibleRow),
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'heading-md/semibold',
                            className: s.checklistItemName,
                            children: t
                        }),
                        (0, n.jsx)(o.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: i
                        })
                    ]
                }),
                null != d &&
                    (0, n.jsx)('div', {
                        className: s.eligibilityActionContainer,
                        children: (0, n.jsx)(o.zxk, {
                            className: s.eligibilityActionButton,
                            look: o.iLD.OUTLINED,
                            color: o.Ttl.PRIMARY,
                            onClick: b,
                            grow: !0,
                            children: d
                        })
                    })
            ]
        })
    );
};

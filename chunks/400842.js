t.d(i, { d: () => d }), t(953529);
var n = t(255367);
t(73800);
var r = t(120356),
    l = t.n(r),
    c = t(692547),
    o = t(481060);
t(651711);
var a = t(551556);
t(388032);
var s = t(719677);
t(347157), t(177266);
let d = (e) => {
    let { name: i, description: t, checked: r, actionLabel: d, actionHandler: b } = e,
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
                            children: i
                        }),
                        (0, n.jsx)(o.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: t
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

r.d(t, { d: () => d }), r(266796);
var n = r(200651);
r(192379);
var i = r(120356),
    o = r.n(i),
    l = r(692547),
    c = r(481060);
r(651711);
var a = r(551556);
r(388032);
var s = r(719677);
r(347157), r(177266);
let d = (e) => {
    let { name: t, description: r, checked: i, actionLabel: d, actionHandler: u } = e,
        b = null;
    return (
        (b = i
            ? (0, n.jsx)(a.Z, {
                  width: 20,
                  height: 20
              })
            : (0, n.jsx)(c.k$p, {
                  size: 'custom',
                  color: l.Z.unsafe_rawColors.RED_400.css,
                  width: 20,
                  height: 20
              })),
        (0, n.jsxs)('div', {
            className: s.checklistItem,
            children: [
                (0, n.jsx)('div', {
                    className: s.checklistIcon,
                    children: b
                }),
                (0, n.jsxs)('div', {
                    className: o()(s.__invalid_checklistText, i && s.ineligibleRow),
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            className: s.checklistItemName,
                            children: t
                        }),
                        (0, n.jsx)(c.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: r
                        })
                    ]
                }),
                null != d &&
                    (0, n.jsx)('div', {
                        className: s.eligibilityActionContainer,
                        children: (0, n.jsx)(c.zxk, {
                            className: s.eligibilityActionButton,
                            look: c.iLD.OUTLINED,
                            color: c.Ttl.PRIMARY,
                            onClick: u,
                            grow: !0,
                            children: d
                        })
                    })
            ]
        })
    );
};

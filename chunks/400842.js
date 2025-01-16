i.d(t, {
    d: function () {
        return d;
    }
});
var n = i(200651);
i(192379);
var o = i(120356),
    r = i.n(o),
    l = i(692547),
    a = i(481060);
i(651711);
var s = i(551556);
i(388032);
var c = i(211029);
i(347157), i(177266);
let d = (e) => {
    let { name: t, description: i, checked: o, actionLabel: d, actionHandler: u } = e,
        E = null;
    return (
        (E = o
            ? (0, n.jsx)(s.Z, {
                  width: 20,
                  height: 20
              })
            : (0, n.jsx)(a.CircleXIcon, {
                  size: 'custom',
                  color: l.Z.unsafe_rawColors.RED_400.css,
                  width: 20,
                  height: 20
              })),
        (0, n.jsxs)('div', {
            className: c.checklistItem,
            children: [
                (0, n.jsx)('div', {
                    className: c.checklistIcon,
                    children: E
                }),
                (0, n.jsxs)('div', {
                    className: r()(c.__invalid_checklistText, o && c.ineligibleRow),
                    children: [
                        (0, n.jsx)(a.Heading, {
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
                        children: (0, n.jsx)(a.Button, {
                            className: c.eligibilityActionButton,
                            look: a.ButtonLooks.OUTLINED,
                            color: a.ButtonColors.PRIMARY,
                            onClick: u,
                            grow: !0,
                            children: d
                        })
                    })
            ]
        })
    );
};

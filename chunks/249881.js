n.d(t, {
    t: function () {
        return u;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(481060),
    a = n(243778),
    l = n(921944),
    o = n(388032),
    c = n(743260);
let d = (e) => {
        let { markAsDismissed: t } = e;
        return (
            r.useEffect(() => t(l.L.UNKNOWN), [t]),
            (0, i.jsx)(s.TextBadge, {
                className: c.newBadge,
                text: o.intl.string(o.t.y2b7CA)
            })
        );
    },
    u = (e) => {
        let { title: t, body: n, img: r, newIndicatorDismissibleContent: l, onClick: u } = e;
        return (0, i.jsxs)('div', {
            className: c.container,
            children: [
                r,
                (0, i.jsxs)('div', {
                    className: c.textContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: c.headerText,
                            children: [
                                (0, i.jsx)(a.ZP, {
                                    contentTypes: [l],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === l ? (0, i.jsx)(d, { markAsDismissed: n }) : null;
                                    }
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-md/semibold',
                                    children: t
                                })
                            ]
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            children: n
                        })
                    ]
                }),
                (0, i.jsx)(s.Button, {
                    size: s.ButtonSizes.MEDIUM,
                    onClick: u,
                    className: c.reconnectButton,
                    children: o.intl.string(o.t.vD60Pj)
                })
            ]
        });
    };

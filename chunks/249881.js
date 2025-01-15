n.d(t, {
    t: function () {
        return u;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(481060),
    a = n(243778),
    l = n(921944),
    o = n(388032),
    c = n(743260);
let d = (e) => {
        let { markAsDismissed: t } = e;
        return (
            s.useEffect(() => t(l.L.UNKNOWN), [t]),
            (0, i.jsx)(r.TextBadge, {
                className: c.newBadge,
                text: o.intl.string(o.t.y2b7CA)
            })
        );
    },
    u = (e) => {
        let { title: t, body: n, img: s, newIndicatorDismissibleContent: l, onClick: u } = e;
        return (0, i.jsxs)('div', {
            className: c.container,
            children: [
                s,
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
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-md/semibold',
                                    children: t
                                })
                            ]
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-xs/normal',
                            children: n
                        })
                    ]
                }),
                (0, i.jsx)(r.Button, {
                    size: r.ButtonSizes.MEDIUM,
                    onClick: u,
                    className: c.reconnectButton,
                    children: o.intl.string(o.t.vD60Pj)
                })
            ]
        });
    };

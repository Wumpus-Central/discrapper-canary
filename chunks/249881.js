n.d(t, { t: () => u });
var i = n(200651),
    r = n(192379),
    s = n(481060),
    l = n(243778),
    a = n(921944),
    o = n(388032),
    c = n(460356);
let d = (e) => {
        let { markAsDismissed: t } = e;
        return (
            r.useEffect(() => t(a.L.UNKNOWN), [t]),
            (0, i.jsx)(s.IGR, {
                className: c.newBadge,
                text: o.intl.string(o.t.y2b7CA)
            })
        );
    },
    u = (e) => {
        let { title: t, body: n, img: r, newIndicatorDismissibleContent: a, onClick: u } = e;
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
                                (0, i.jsx)(l.ZP, {
                                    contentTypes: [a],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === a ? (0, i.jsx)(d, { markAsDismissed: n }) : null;
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
                (0, i.jsx)(s.zxk, {
                    size: s.PhG.MEDIUM,
                    onClick: u,
                    className: c.reconnectButton,
                    children: o.intl.string(o.t.vD60Pj)
                })
            ]
        });
    };

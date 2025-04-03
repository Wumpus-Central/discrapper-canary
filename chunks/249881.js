n.d(t, { t: () => u });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(243778),
    l = n(921944),
    o = n(388032),
    c = n(460356);
let d = (e) => {
        let { markAsDismissed: t } = e;
        return (
            i.useEffect(() => t(l.L.UNKNOWN), [t]),
            (0, r.jsx)(s.IGR, {
                className: c.newBadge,
                text: o.NW.string(o.t.y2b7CA)
            })
        );
    },
    u = (e) => {
        let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: u } = e;
        return (0, r.jsxs)('div', {
            className: c.container,
            children: [
                i,
                (0, r.jsxs)('div', {
                    className: c.textContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: c.headerText,
                            children: [
                                (0, r.jsx)(a.ZP, {
                                    contentTypes: [l],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === l ? (0, r.jsx)(d, { markAsDismissed: n }) : null;
                                    }
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-md/semibold',
                                    children: t
                                })
                            ]
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(s.zxk, {
                    size: s.PhG.MEDIUM,
                    onClick: u,
                    className: c.reconnectButton,
                    children: o.NW.string(o.t.vD60Pj)
                })
            ]
        });
    };

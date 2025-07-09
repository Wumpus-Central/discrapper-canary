n.d(t, { t: () => m });
var i = n(255367),
    r = n(73800),
    s = n(755721),
    a = n(481060),
    l = n(243778),
    o = n(921944),
    c = n(388032),
    d = n(460356);
let u = (e) => {
        let { markAsDismissed: t } = e;
        return (
            r.useEffect(() => t(o.L.UNKNOWN), [t]),
            (0, i.jsx)(a.IGR, {
                className: d.newBadge,
                text: c.intl.string(c.t.y2b7CA)
            })
        );
    },
    m = (e) => {
        let { title: t, body: n, img: r, newIndicatorDismissibleContent: o, onClick: m } = e;
        return (0, i.jsxs)('div', {
            className: d.container,
            children: [
                r,
                (0, i.jsxs)('div', {
                    className: d.textContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: d.headerText,
                            children: [
                                (0, i.jsx)(l.ZP, {
                                    contentTypes: [o],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === o ? (0, i.jsx)(u, { markAsDismissed: n }) : null;
                                    }
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-md/semibold',
                                    children: t
                                })
                            ]
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            children: n
                        })
                    ]
                }),
                (0, i.jsx)(s.zx, {
                    size: s.Ph.MEDIUM,
                    onClick: m,
                    className: d.reconnectButton,
                    children: c.intl.string(c.t.vD60Pj)
                })
            ]
        });
    };

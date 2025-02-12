n.d(t, { t: () => u });
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(243778),
    a = n(921944),
    o = n(388032),
    c = n(640694);
let d = (e) => {
        let { markAsDismissed: t } = e;
        return (
            s.useEffect(() => t(a.L.UNKNOWN), [t]),
            (0, i.jsx)(l.IGR, {
                className: c.newBadge,
                text: o.intl.string(o.t.y2b7CA)
            })
        );
    },
    u = (e) => {
        let { title: t, body: n, img: s, newIndicatorDismissibleContent: a, onClick: u } = e;
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
                                (0, i.jsx)(r.ZP, {
                                    contentTypes: [a],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === a ? (0, i.jsx)(d, { markAsDismissed: n }) : null;
                                    }
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-md/semibold',
                                    children: t
                                })
                            ]
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            children: n
                        })
                    ]
                }),
                (0, i.jsx)(l.zxk, {
                    size: l.PhG.MEDIUM,
                    onClick: u,
                    className: c.reconnectButton,
                    children: o.intl.string(o.t.vD60Pj)
                })
            ]
        });
    };

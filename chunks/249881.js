n.d(t, { t: () => d });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(243778),
    s = n(921944),
    l = n(388032),
    c = n(536780);
let u = (e) => {
        let { markAsDismissed: t } = e;
        return (
            i.useEffect(() => t(s.L.UNKNOWN), [t]),
            (0, r.jsx)(a.IGR, {
                className: c.newBadge,
                text: l.intl.string(l.t.y2b7CA),
            })
        );
    },
    d = (e) => {
        let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: d } = e;
        return (0, r.jsxs)("div", {
            className: c.container,
            children: [
                i,
                (0, r.jsxs)("div", {
                    className: c.textContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: c.headerText,
                            children: [
                                (0, r.jsx)(o.ZP, {
                                    contentTypes: [s],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === s ? (0, r.jsx)(u, { markAsDismissed: n }) : null;
                                    },
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: "text-md/semibold",
                                    children: t,
                                }),
                            ],
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(a.Button, {
                    text: l.intl.string(l.t.vD60Pv),
                    onClick: d,
                }),
            ],
        });
    };

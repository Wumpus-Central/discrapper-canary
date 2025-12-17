n.d(t, { t: () => f });
var r = n(54381),
    i = n(473749),
    a = n(755721),
    o = n(481060),
    s = n(243778),
    l = n(921944),
    c = n(388032),
    u = n(536780);
let d = (e) => {
        let { markAsDismissed: t } = e;
        return (
            i.useEffect(() => t(l.L.UNKNOWN), [t]),
            (0, r.jsx)(o.IGR, {
                className: u.newBadge,
                text: c.intl.string(c.t.y2b7CA),
            })
        );
    },
    f = (e) => {
        let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: f } = e;
        return (0, r.jsxs)("div", {
            className: u.container,
            children: [
                i,
                (0, r.jsxs)("div", {
                    className: u.textContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: u.headerText,
                            children: [
                                (0, r.jsx)(s.ZP, {
                                    contentTypes: [l],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === l ? (0, r.jsx)(d, { markAsDismissed: n }) : null;
                                    },
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    children: t,
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(a.zx, {
                    size: a.Ph.MEDIUM,
                    onClick: f,
                    className: u.reconnectButton,
                    children: c.intl.string(c.t.vD60Pv),
                }),
            ],
        });
    };

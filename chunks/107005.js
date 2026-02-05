n.d(t, { Z: () => u });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(379848),
    l = n(49999),
    o = n(985018),
    c = n(784001);
let d = (e) => {
        let { markAsDismissed: t } = e;
        return (
            s.useEffect(() => t(l.i.UNKNOWN), [t]),
            (0, i.jsx)(r.LpS, { className: c.Ad, text: o.intl.string(o.t.y2b7CA) })
        );
    },
    u = (e) => {
        let { title: t, body: n, img: s, newIndicatorDismissibleContent: l, onClick: u } = e;
        return (0, i.jsxs)("div", {
            className: c.kL,
            children: [
                s,
                (0, i.jsxs)("div", {
                    className: c.FS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: c.TK,
                            children: [
                                (0, i.jsx)(a.Ay, {
                                    contentTypes: [l],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === l ? (0, i.jsx)(d, { markAsDismissed: n }) : null;
                                    },
                                }),
                                (0, i.jsx)(r.Text, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, i.jsx)(r.Text, { variant: "text-xs/normal", children: n }),
                    ],
                }),
                (0, i.jsx)(r.Button, { text: o.intl.string(o.t.vD60Pv), onClick: u }),
            ],
        });
    };

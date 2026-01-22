n.d(t, {
    Z: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(379848),
    o = n(49999),
    l = n(985018),
    c = n(784001);
let u = (e) => {
        let { markAsDismissed: t } = e;
        return (
            i.useEffect(() => t(o.i.UNKNOWN), [t]),
            (0, r.jsx)(a.LpS, {
                className: c.Ad,
                text: l.intl.string(l.t.y2b7CA),
            })
        );
    },
    d = (e) => {
        let { title: t, body: n, img: i, newIndicatorDismissibleContent: o, onClick: d } = e;
        return (0, r.jsxs)("div", {
            className: c.kL,
            children: [
                i,
                (0, r.jsxs)("div", {
                    className: c.FS,
                    children: [
                        (0, r.jsxs)("div", {
                            className: c.TK,
                            children: [
                                (0, r.jsx)(s.Ay, {
                                    contentTypes: [o],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === o
                                            ? (0, r.jsx)(u, {
                                                  markAsDismissed: n,
                                              })
                                            : null;
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

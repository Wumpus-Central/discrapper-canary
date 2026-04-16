n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    s = n(989985),
    r = n(226698),
    o = n(221314),
    c = n(985018),
    d = n(81987);
let u = (e) => {
    let { channelId: t } = e,
        n = l.useCallback(() => {
            r.A.reopenModReport(t);
        }, [t]);
    return (0, i.jsx)(s._, {
        bannerHeader: (0, i.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            children: c.intl.string(o.default["0eUUeF"]),
        }),
        headerStyles: d.U,
        containerStyles: d.c,
        children: (0, i.jsx)(a.Button, {
            variant: "secondary",
            size: "sm",
            text: c.intl.string(o.default["6quCi9"]),
            onClick: n,
        }),
    });
};

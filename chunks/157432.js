n.d(t, {
    A: () => d,
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(989985),
    s = n(226698),
    o = n(641131),
    c = n(985018),
    u = n(272806);
let d = (e) => {
    let { channelId: t } = e,
        n = l.useCallback(() => {
            s.A.reopenModReport(t);
        }, [t]);
    return (0, r.jsx)(a._, {
        bannerHeader: (0, r.jsx)(i.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            children: c.intl.string(o.default["0eUUeF"]),
        }),
        headerStyles: u.U,
        containerStyles: u.c,
        children: (0, r.jsx)(i.Button, {
            variant: "secondary",
            size: "sm",
            text: c.intl.string(o.default["6quCi9"]),
            onClick: n,
        }),
    });
};

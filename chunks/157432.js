n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(834730),
    s = n(821609),
    r = n(989985),
    o = n(226698),
    c = n(297897),
    d = n(985018),
    u = n(745219);
let h = (e) => {
    let { channelId: t } = e,
        n = l.useCallback(() => {
            o.A.reopenModReport(t);
        }, [t]);
    return (0, i.jsx)(r._, {
        bannerHeader: (0, i.jsx)(a.E, {
            variant: "text-md/medium",
            color: "text-muted",
            children: d.intl.string(c.default["0eUUeF"]),
        }),
        headerStyles: u.U,
        containerStyles: u.c,
        children: (0, i.jsx)(s.$, {
            variant: "secondary",
            size: "sm",
            text: d.intl.string(c.default["6quCi9"]),
            onClick: n,
        }),
    });
};

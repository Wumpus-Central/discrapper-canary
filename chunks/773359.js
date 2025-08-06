n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(545594),
    s = n(501517),
    l = n(130883),
    c = n(388032),
    u = n(540079);
let d = (e) => {
    let { channelId: t } = e,
        n = i.useCallback(() => {
            s.Z.reopenModReport(t);
        }, [t]);
    return (0, r.jsx)(a.i, {
        bannerHeader: (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            children: c.intl.string(l.default["0eUUeH"]),
        }),
        headerStyles: u.bannerHeader,
        containerStyles: u.bannerContainer,
        children: (0, r.jsx)(o.zxk, {
            variant: "secondary",
            size: "sm",
            text: c.intl.string(l.default["6quCi4"]),
            onClick: n,
        }),
    });
};

n.d(t, { Z: () => d });
var i = n(54381),
    r = n(473749),
    l = n(481060),
    a = n(545594),
    o = n(501517),
    s = n(342153),
    c = n(388032),
    u = n(541170);
let d = (e) => {
    let { channelId: t } = e,
        n = r.useCallback(() => {
            o.Z.reopenModReport(t);
        }, [t]);
    return (0, i.jsx)(a.i, {
        bannerHeader: (0, i.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            children: c.intl.string(s.default["0eUUeF"]),
        }),
        headerStyles: u.bannerHeader,
        containerStyles: u.bannerContainer,
        children: (0, i.jsx)(l.Button, {
            variant: "secondary",
            size: "sm",
            text: c.intl.string(s.default["6quCi9"]),
            onClick: n,
        }),
    });
};

n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(545594),
    o = n(501517),
    s = n(463959),
    c = n(388032),
    u = n(540079);
let d = (e) => {
    let { channelId: t } = e,
        n = i.useCallback(() => {
            o.Z.reopenModReport(t);
        }, [t]);
    return (0, r.jsx)(a.i, {
        bannerHeader: (0, r.jsx)(l.Text, {
            variant: 'text-md/medium',
            color: 'text-muted',
            children: c.intl.string(s.default['0eUUeH'])
        }),
        headerStyles: u.bannerHeader,
        containerStyles: u.bannerContainer,
        children: (0, r.jsx)(l.zxk, {
            onClick: n,
            size: l.zxk.Sizes.SMALL,
            color: l.zxk.Colors.PRIMARY,
            look: l.zxk.Looks.FILLED,
            children: c.intl.string(s.default['6quCi4'])
        })
    });
};

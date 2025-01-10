n.d(t, {
    V: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    a = n(259674),
    l = n(981631),
    s = n(388032);
function o(e) {
    let [t, n] = i.useState(!1),
        [o, c] = i.useState(!1),
        [r, d] = i.useState(!1);
    return {
        rules: i.useMemo(() => {
            let i = s.intl.format(s.t.S2lVJS, {
                onCommunityGuidelinesClick: () =>
                    (0, a.lW)({
                        articleId: l.BhN.PUBLIC_GUILD_GUILDLINES,
                        guildId: e,
                        modalStep: a.tK.AGREE_TO_RULES
                    }),
                onDiscoveryGuidelinesClick: () =>
                    (0, a.lW)({
                        articleId: l.BhN.SERVER_DISCOVERY_GUIDELINES,
                        guildId: e,
                        modalStep: a.tK.AGREE_TO_RULES
                    })
            });
            return [
                {
                    key: 'healthy',
                    title: s.intl.string(s.t.jIi9go),
                    body: s.intl.string(s.t['4uUAXl']),
                    onCheck: () => n(!t),
                    checked: t
                },
                {
                    key: 'nonNSFW',
                    title: s.intl.string(s.t.iwnCh4),
                    body: s.intl.string(s.t.UKFzER),
                    onCheck: () => c(!o),
                    checked: o
                },
                {
                    key: 'guidelines',
                    title: i,
                    body: s.intl.string(s.t.u0Go2t),
                    onCheck: () => d(!r),
                    checked: r
                }
            ];
        }, [r, e, t, o]),
        rulesAccepted: t && o && r
    };
}

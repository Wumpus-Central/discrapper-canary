n.d(t, {
    V: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    a = n(259674),
    l = n(981631),
    o = n(388032);
function s(e) {
    let [t, n] = i.useState(!1),
        [s, c] = i.useState(!1),
        [r, d] = i.useState(!1);
    return {
        rules: i.useMemo(() => {
            let i = o.intl.format(o.t.S2lVJS, {
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
                    title: o.intl.string(o.t.jIi9go),
                    body: o.intl.string(o.t['4uUAXl']),
                    onCheck: () => n(!t),
                    checked: t
                },
                {
                    key: 'nonNSFW',
                    title: o.intl.string(o.t.iwnCh4),
                    body: o.intl.string(o.t.UKFzER),
                    onCheck: () => c(!s),
                    checked: s
                },
                {
                    key: 'guidelines',
                    title: i,
                    body: o.intl.string(o.t.u0Go2t),
                    onCheck: () => d(!r),
                    checked: r
                }
            ];
        }, [r, e, t, s]),
        rulesAccepted: t && s && r
    };
}

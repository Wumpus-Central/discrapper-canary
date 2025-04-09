r.d(t, { V: () => c }), r(388685);
var s = r(192379),
    a = r(259674),
    i = r(981631),
    n = r(388032);
function c(e) {
    let [t, r] = s.useState(!1),
        [c, l] = s.useState(!1),
        [o, d] = s.useState(!1);
    return {
        rules: s.useMemo(() => {
            let s = n.NW.format(n.t.S2lVJS, {
                onCommunityGuidelinesClick: () =>
                    (0, a.lW)({
                        articleId: i.BhN.PUBLIC_GUILD_GUILDLINES,
                        guildId: e,
                        modalStep: a.tK.AGREE_TO_RULES
                    }),
                onDiscoveryGuidelinesClick: () =>
                    (0, a.lW)({
                        articleId: i.BhN.SERVER_DISCOVERY_GUIDELINES,
                        guildId: e,
                        modalStep: a.tK.AGREE_TO_RULES
                    })
            });
            return [
                {
                    key: 'healthy',
                    title: n.NW.string(n.t.jIi9go),
                    body: n.NW.string(n.t['4uUAXl']),
                    onCheck: () => r(!t),
                    checked: t
                },
                {
                    key: 'nonNSFW',
                    title: n.NW.string(n.t.iwnCh4),
                    body: n.NW.string(n.t.UKFzER),
                    onCheck: () => l(!c),
                    checked: c
                },
                {
                    key: 'guidelines',
                    title: s,
                    body: n.NW.string(n.t.u0Go2t),
                    onCheck: () => d(!o),
                    checked: o
                }
            ];
        }, [o, e, t, c]),
        rulesAccepted: t && c && o
    };
}

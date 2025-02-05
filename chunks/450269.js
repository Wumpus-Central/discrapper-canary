c.d(t, { V: () => r }), c(47120);
var i = c(192379),
    n = c(259674),
    l = c(981631),
    s = c(388032);
function r(e) {
    let [t, c] = i.useState(!1),
        [r, o] = i.useState(!1),
        [a, d] = i.useState(!1);
    return {
        rules: i.useMemo(() => {
            let i = s.intl.format(s.t.S2lVJS, {
                onCommunityGuidelinesClick: () =>
                    (0, n.lW)({
                        articleId: l.BhN.PUBLIC_GUILD_GUILDLINES,
                        guildId: e,
                        modalStep: n.tK.AGREE_TO_RULES
                    }),
                onDiscoveryGuidelinesClick: () =>
                    (0, n.lW)({
                        articleId: l.BhN.SERVER_DISCOVERY_GUIDELINES,
                        guildId: e,
                        modalStep: n.tK.AGREE_TO_RULES
                    })
            });
            return [
                {
                    key: 'healthy',
                    title: s.intl.string(s.t.jIi9go),
                    body: s.intl.string(s.t['4uUAXl']),
                    onCheck: () => c(!t),
                    checked: t
                },
                {
                    key: 'nonNSFW',
                    title: s.intl.string(s.t.iwnCh4),
                    body: s.intl.string(s.t.UKFzER),
                    onCheck: () => o(!r),
                    checked: r
                },
                {
                    key: 'guidelines',
                    title: i,
                    body: s.intl.string(s.t.u0Go2t),
                    onCheck: () => d(!a),
                    checked: a
                }
            ];
        }, [a, e, t, r]),
        rulesAccepted: t && r && a
    };
}

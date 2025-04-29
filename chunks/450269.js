n.d(t, { V: () => s }), n(388685);
var c = n(73800),
    i = n(259674),
    r = n(981631),
    l = n(388032);
function s(e) {
    let [t, n] = c.useState(!1),
        [s, o] = c.useState(!1),
        [a, d] = c.useState(!1);
    return {
        rules: c.useMemo(() => {
            let c = l.intl.format(l.t.S2lVJS, {
                onCommunityGuidelinesClick: () =>
                    (0, i.lW)({
                        articleId: r.BhN.PUBLIC_GUILD_GUILDLINES,
                        guildId: e,
                        modalStep: i.tK.AGREE_TO_RULES
                    }),
                onDiscoveryGuidelinesClick: () =>
                    (0, i.lW)({
                        articleId: r.BhN.SERVER_DISCOVERY_GUIDELINES,
                        guildId: e,
                        modalStep: i.tK.AGREE_TO_RULES
                    })
            });
            return [
                {
                    key: 'healthy',
                    title: l.intl.string(l.t.jIi9go),
                    body: l.intl.string(l.t['4uUAXl']),
                    onCheck: () => n(!t),
                    checked: t
                },
                {
                    key: 'nonNSFW',
                    title: l.intl.string(l.t.iwnCh4),
                    body: l.intl.string(l.t.UKFzER),
                    onCheck: () => o(!s),
                    checked: s
                },
                {
                    key: 'guidelines',
                    title: c,
                    body: l.intl.string(l.t.u0Go2t),
                    onCheck: () => d(!a),
                    checked: a
                }
            ];
        }, [a, e, t, s]),
        rulesAccepted: t && s && a
    };
}

c.d(t, { V: () => s }), c(388685);
var n = c(192379),
    r = c(259674),
    i = c(981631),
    l = c(388032);
function s(e) {
    let [t, c] = n.useState(!1),
        [s, o] = n.useState(!1),
        [a, d] = n.useState(!1);
    return {
        rules: n.useMemo(() => {
            let n = l.NW.format(l.t.S2lVJS, {
                onCommunityGuidelinesClick: () =>
                    (0, r.lW)({
                        articleId: i.BhN.PUBLIC_GUILD_GUILDLINES,
                        guildId: e,
                        modalStep: r.tK.AGREE_TO_RULES
                    }),
                onDiscoveryGuidelinesClick: () =>
                    (0, r.lW)({
                        articleId: i.BhN.SERVER_DISCOVERY_GUIDELINES,
                        guildId: e,
                        modalStep: r.tK.AGREE_TO_RULES
                    })
            });
            return [
                {
                    key: 'healthy',
                    title: l.NW.string(l.t.jIi9go),
                    body: l.NW.string(l.t['4uUAXl']),
                    onCheck: () => c(!t),
                    checked: t
                },
                {
                    key: 'nonNSFW',
                    title: l.NW.string(l.t.iwnCh4),
                    body: l.NW.string(l.t.UKFzER),
                    onCheck: () => o(!s),
                    checked: s
                },
                {
                    key: 'guidelines',
                    title: n,
                    body: l.NW.string(l.t.u0Go2t),
                    onCheck: () => d(!a),
                    checked: a
                }
            ];
        }, [a, e, t, s]),
        rulesAccepted: t && s && a
    };
}

c.d(t, { V: () => r }), c(47120);
var s = c(192379),
    i = c(259674),
    n = c(981631),
    l = c(388032);
function r(e) {
    let [t, c] = s.useState(!1),
        [r, o] = s.useState(!1),
        [a, d] = s.useState(!1);
    return {
        rules: s.useMemo(() => {
            let s = l.NW.format(l.t.S2lVJS, {
                onCommunityGuidelinesClick: () =>
                    (0, i.lW)({
                        articleId: n.BhN.PUBLIC_GUILD_GUILDLINES,
                        guildId: e,
                        modalStep: i.tK.AGREE_TO_RULES
                    }),
                onDiscoveryGuidelinesClick: () =>
                    (0, i.lW)({
                        articleId: n.BhN.SERVER_DISCOVERY_GUIDELINES,
                        guildId: e,
                        modalStep: i.tK.AGREE_TO_RULES
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
                    onCheck: () => o(!r),
                    checked: r
                },
                {
                    key: 'guidelines',
                    title: s,
                    body: l.NW.string(l.t.u0Go2t),
                    onCheck: () => d(!a),
                    checked: a
                }
            ];
        }, [a, e, t, r]),
        rulesAccepted: t && r && a
    };
}

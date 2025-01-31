i.d(t, { V: () => a }), i(47120);
var n = i(192379),
    c = i(259674),
    s = i(981631),
    l = i(388032);
function a(e) {
    let [t, i] = n.useState(!1),
        [a, r] = n.useState(!1),
        [d, o] = n.useState(!1);
    return {
        rules: n.useMemo(() => {
            let n = l.intl.format(l.t.S2lVJS, {
                onCommunityGuidelinesClick: () =>
                    (0, c.lW)({
                        articleId: s.BhN.PUBLIC_GUILD_GUILDLINES,
                        guildId: e,
                        modalStep: c.tK.AGREE_TO_RULES
                    }),
                onDiscoveryGuidelinesClick: () =>
                    (0, c.lW)({
                        articleId: s.BhN.SERVER_DISCOVERY_GUIDELINES,
                        guildId: e,
                        modalStep: c.tK.AGREE_TO_RULES
                    })
            });
            return [
                {
                    key: 'healthy',
                    title: l.intl.string(l.t.jIi9go),
                    body: l.intl.string(l.t['4uUAXl']),
                    onCheck: () => i(!t),
                    checked: t
                },
                {
                    key: 'nonNSFW',
                    title: l.intl.string(l.t.iwnCh4),
                    body: l.intl.string(l.t.UKFzER),
                    onCheck: () => r(!a),
                    checked: a
                },
                {
                    key: 'guidelines',
                    title: n,
                    body: l.intl.string(l.t.u0Go2t),
                    onCheck: () => o(!d),
                    checked: d
                }
            ];
        }, [d, e, t, a]),
        rulesAccepted: t && a && d
    };
}

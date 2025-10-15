n.d(t, { V: () => o }), n(388685);
var i = n(647438),
    r = n(905693),
    c = n(981631),
    l = n(388032);
function o(e) {
    let [t, n] = i.useState(!1),
        [o, a] = i.useState(!1),
        [s, u] = i.useState(!1);
    return {
        rules: i.useMemo(() => {
            let i = l.intl.format(l.t.S2lVJS, {
                onCommunityGuidelinesClick: () =>
                    (0, r.lW)({
                        articleId: c.BhN.PUBLIC_GUILD_GUILDLINES,
                        guildId: e,
                        modalStep: r.tK.AGREE_TO_RULES,
                    }),
                onDiscoveryGuidelinesClick: () =>
                    (0, r.lW)({
                        articleId: c.BhN.SERVER_DISCOVERY_GUIDELINES,
                        guildId: e,
                        modalStep: r.tK.AGREE_TO_RULES,
                    }),
            });
            return [
                {
                    key: "healthy",
                    title: l.intl.string(l.t.jIi9go),
                    body: l.intl.string(l.t["4uUAXl"]),
                    onCheck: () => n(!t),
                    checked: t,
                },
                {
                    key: "nonNSFW",
                    title: l.intl.string(l.t.iwnCh4),
                    body: l.intl.string(l.t.UKFzER),
                    onCheck: () => a(!o),
                    checked: o,
                },
                {
                    key: "guidelines",
                    title: i,
                    body: l.intl.string(l.t.u0Go2t),
                    onCheck: () => u(!s),
                    checked: s,
                },
            ];
        }, [s, e, t, o]),
        rulesAccepted: t && o && s,
    };
}

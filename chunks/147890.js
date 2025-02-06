n.d(t, { dx: () => i }), n(610138), n(216116), n(78328), n(815648), n(47120);
var a = n(749681);
n(703656), n(34674), n(132871);
var r = n(272242);
n(981631);
var l = n(49898),
    o = n(979007);
let i = (e) => {
    let { guildId: t, applicationId: n, applicationSection: i, entrypoint: c, skuId: u, restorePreviousView: s } = e,
        p = null == n ? void 0 : i === r.c.STORE ? o.GlobalDiscoveryAppsSections.STORE : o.GlobalDiscoveryAppsSections.ABOUT;
    return (0, a.transitionToGlobalDiscovery)({
        tab: l.GlobalDiscoveryTab.APPS,
        applicationId: n,
        section: p,
        skuId: p === o.GlobalDiscoveryAppsSections.STORE ? u : void 0,
        newSessionState: {
            guildId: null != t ? t : null,
            entrypoint: c,
            restorePreviousView: s
        }
    });
};

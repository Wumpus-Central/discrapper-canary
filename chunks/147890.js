n.d(t, { dx: () => r }), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(749681);
n(703656), n(34674), n(132871);
var o = n(272242);
n(981631);
var a = n(49898),
    l = n(979007);
let r = (e) => {
    let { guildId: t, applicationId: n, applicationSection: r, entrypoint: c, skuId: _, restorePreviousView: d } = e,
        u = null == n ? void 0 : r === o.c.STORE ? l.GlobalDiscoveryAppsSections.STORE : l.GlobalDiscoveryAppsSections.ABOUT;
    return (0, i.transitionToGlobalDiscovery)({
        tab: a.GlobalDiscoveryTab.APPS,
        applicationId: n,
        section: u,
        skuId: u === l.GlobalDiscoveryAppsSections.STORE ? _ : void 0,
        newSessionState: {
            guildId: null != t ? t : null,
            entrypoint: c,
            restorePreviousView: d
        }
    });
};

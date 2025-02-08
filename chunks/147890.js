n.d(t, { dx: () => l }), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(749681);
n(703656), n(34674), n(132871);
var a = n(272242);
n(981631);
var o = n(49898),
    r = n(979007);
let l = (e) => {
    let { guildId: t, applicationId: n, applicationSection: l, entrypoint: c, skuId: _, restorePreviousView: s } = e,
        d = null == n ? void 0 : l === a.c.STORE ? r.GlobalDiscoveryAppsSections.STORE : r.GlobalDiscoveryAppsSections.ABOUT;
    return (0, i.transitionToGlobalDiscovery)({
        tab: o.GlobalDiscoveryTab.APPS,
        applicationId: n,
        section: d,
        skuId: d === r.GlobalDiscoveryAppsSections.STORE ? _ : void 0,
        newSessionState: {
            guildId: null != t ? t : null,
            entrypoint: c,
            restorePreviousView: s
        }
    });
};

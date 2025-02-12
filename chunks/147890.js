n.d(t, { dx: () => i }), n(610138), n(216116), n(78328), n(815648), n(47120);
var l = n(749681);
n(703656), n(34674), n(132871);
var a = n(272242);
n(981631);
var c = n(49898),
    o = n(979007);
let i = (e) => {
    let { guildId: t, applicationId: n, applicationSection: i, entrypoint: r, skuId: s, restorePreviousView: u } = e,
        d = null == n ? void 0 : i === a.c.STORE ? o.GlobalDiscoveryAppsSections.STORE : o.GlobalDiscoveryAppsSections.ABOUT;
    return (0, l.transitionToGlobalDiscovery)({
        tab: c.GlobalDiscoveryTab.APPS,
        applicationId: n,
        section: d,
        skuId: d === o.GlobalDiscoveryAppsSections.STORE ? s : void 0,
        newSessionState: {
            guildId: null != t ? t : null,
            entrypoint: r,
            restorePreviousView: u
        }
    });
};

n.d(t, { dx: () => o }), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(749681);
n(703656), n(34674), n(132871);
var c = n(272242);
n(981631);
var l = n(49898),
    a = n(979007);
let o = (e) => {
    let { guildId: t, applicationId: n, applicationSection: o, entrypoint: i, skuId: s, restorePreviousView: u } = e,
        d = null == n ? void 0 : o === c.c.STORE ? a.GlobalDiscoveryAppsSections.STORE : a.GlobalDiscoveryAppsSections.ABOUT;
    return (0, r.transitionToGlobalDiscovery)({
        tab: l.GlobalDiscoveryTab.APPS,
        applicationId: n,
        section: d,
        skuId: d === a.GlobalDiscoveryAppsSections.STORE ? s : void 0,
        newSessionState: {
            guildId: null != t ? t : null,
            entrypoint: i,
            restorePreviousView: u
        }
    });
};

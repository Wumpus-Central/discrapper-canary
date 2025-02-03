n.d(t, { dx: () => o }), n(610138), n(216116), n(78328), n(815648), n(47120);
var l = n(749681);
n(703656), n(34674), n(132871);
var i = n(272242);
n(981631);
var a = n(49898),
    r = n(979007);
let o = (e) => {
    let { guildId: t, applicationId: n, applicationSection: o, entrypoint: E, skuId: u, restorePreviousView: _ } = e,
        c = null == n ? void 0 : o === i.c.STORE ? r.GlobalDiscoveryAppsSections.STORE : r.GlobalDiscoveryAppsSections.ABOUT;
    return (0, l.transitionToGlobalDiscovery)({
        tab: a.GlobalDiscoveryTab.APPS,
        applicationId: n,
        section: c,
        skuId: c === r.GlobalDiscoveryAppsSections.STORE ? u : void 0,
        newSessionState: {
            guildId: null != t ? t : null,
            entrypoint: E,
            restorePreviousView: _
        }
    });
};

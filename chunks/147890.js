n.d(e, {
    dx: function () {
        return i;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(749681);
n(703656), n(34674), n(132871);
var l = n(272242);
n(981631);
var o = n(49898),
    a = n(979007);
let i = (t) => {
    let { guildId: e, applicationId: n, applicationSection: i, entrypoint: c, skuId: u, restorePreviousView: s } = t,
        p = null == n ? void 0 : i === l.c.STORE ? a.GlobalDiscoveryAppsSections.STORE : a.GlobalDiscoveryAppsSections.ABOUT;
    return (0, r.transitionToGlobalDiscovery)({
        tab: o.GlobalDiscoveryTab.APPS,
        applicationId: n,
        section: p,
        skuId: p === a.GlobalDiscoveryAppsSections.STORE ? u : void 0,
        newSessionState: {
            guildId: null != e ? e : null,
            entrypoint: c,
            restorePreviousView: s
        }
    });
};

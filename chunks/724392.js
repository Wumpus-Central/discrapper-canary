n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var a = n(442837),
    i = n(226961),
    l = n(481250),
    o = n(388032);
let s = a.ZP.connectStores([i.ZP], (e) => {
    let { context: t, index: n } = e,
        r = i.ZP.getAllStats(t)[n];
    return { outbound: null != r ? r.rtp.outbound : null };
})(function (e) {
    let { outbound: t, context: n, index: a } = e;
    return (0, r.jsx)(l.lV, {
        streams: t,
        context: n,
        index: a,
        title: o.intl.string(o.t["3u0gII"]),
        showUserInfo: !1,
        showSimulcastOverride: !1,
    });
});

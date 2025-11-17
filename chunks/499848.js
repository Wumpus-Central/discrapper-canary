n.d(t, { Z: () => s }), n(415506);
var r = n(54381);
n(473749);
var a = n(442837),
    i = n(226961),
    l = n(481250),
    o = n(388032);
let s = a.ZP.connectStores([i.ZP], (e) => {
    let { context: t, index: n, videoStreams: r } = e,
        a = i.ZP.getAllStats(t)[n],
        { section: l } = (0, i.fZ)(i.ZP.getSection());
    if (null == l) throw Error("Unrecognized section format");
    let o = null;
    if (null != a && null != a.rtp.inbound) {
        var s;
        o = null != (s = a.rtp.inbound[l]) ? s : [];
    }
    return {
        mediaEngineConnectionId: null == a ? void 0 : a.mediaEngineConnectionId,
        userId: l,
        streams: o,
        videoStreams: r,
    };
})(function (e) {
    let { streams: t, context: n, index: a, userId: i, mediaEngineConnectionId: s, videoStreams: c } = e;
    return (0, r.jsx)(l.lV, {
        streams: t,
        context: n,
        index: a,
        mediaEngineConnectionId: s,
        userId: i,
        videoStreams: c,
        title: o.intl.string(o.t.SJmZaq),
        showUserInfo: !0,
    });
});

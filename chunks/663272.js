n.d(t, {
    A: () => o,
}),
    n(65821);
var r = n(627968);
n(64700);
var a = n(311907),
    i = n(412780),
    l = n(828904),
    s = n(985018);
let o = a.Ay.connectStores([i.Ay], (e) => {
    let { context: t, index: n, videoStreams: r } = e,
        a = i.Ay.getAllStats(t)[n],
        { section: l } = (0, i.Bz)(i.Ay.getSection());
    if (null == l) throw Error("Unrecognized section format");
    let s = null;
    if (null != a && null != a.rtp.inbound) {
        var o;
        s = null != (o = a.rtp.inbound[l]) ? o : [];
    }
    return {
        mediaEngineConnectionId: null == a ? void 0 : a.mediaEngineConnectionId,
        userId: l,
        streams: s,
        videoStreams: r,
    };
})(function (e) {
    let { streams: t, context: n, index: a, userId: i, mediaEngineConnectionId: o, videoStreams: d } = e;
    return (0, r.jsx)(l.HI, {
        streams: t,
        context: n,
        index: a,
        mediaEngineConnectionId: o,
        userId: i,
        videoStreams: d,
        title: s.intl.string(s.t.SJmZaq),
        showUserInfo: !0,
    });
});

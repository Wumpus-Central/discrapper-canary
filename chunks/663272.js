r.d(t, { A: () => o });
var n = r(627968);
r(64700);
var a = r(311907),
    i = r(412780),
    s = r(828904),
    l = r(985018);
let o = a.Ay.connectStores([i.Ay], (e) => {
    let { context: t, index: r, videoStreams: n } = e,
        a = i.Ay.getAllStats(t)[r],
        { section: s } = (0, i.Bz)(i.Ay.getSection());
    if (null == s) throw Error("Unrecognized section format");
    let l = null;
    return (
        null != a && null != a.rtp.inbound && (l = a.rtp.inbound[s] ?? []),
        { mediaEngineConnectionId: a?.mediaEngineConnectionId, userId: s, streams: l, videoStreams: n }
    );
})(function (e) {
    let { streams: t, context: r, index: a, userId: i, mediaEngineConnectionId: o, videoStreams: d } = e;
    return (0, n.jsx)(s.HI, {
        streams: t,
        context: r,
        index: a,
        mediaEngineConnectionId: o,
        userId: i,
        videoStreams: d,
        title: l.intl.string(l.t.SJmZaq),
        showUserInfo: !0,
    });
});

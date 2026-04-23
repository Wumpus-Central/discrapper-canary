r.d(t, { A: () => s });
var n = r(627968);
r(64700);
var i = r(311907),
    a = r(412780),
    o = r(828904),
    l = r(985018);
let s = i.Ay.connectStores([a.Ay], (e) => {
    let { context: t, index: r, videoStreams: n } = e,
        i = a.Ay.getAllStats(t)[r],
        { section: o } = (0, a.Bz)(a.Ay.getSection());
    if (null == o) throw Error("Unrecognized section format");
    let l = null;
    return (
        null != i && null != i.rtp.inbound && (l = i.rtp.inbound[o] ?? []),
        { mediaEngineConnectionId: i?.mediaEngineConnectionId, userId: o, streams: l, videoStreams: n }
    );
})(function (e) {
    let { streams: t, context: r, index: i, userId: a, mediaEngineConnectionId: s, videoStreams: d } = e;
    return (0, n.jsx)(o.HI, {
        streams: t,
        context: r,
        index: i,
        mediaEngineConnectionId: s,
        userId: a,
        videoStreams: d,
        title: l.intl.string(l.t.SJmZaq),
        showUserInfo: !0,
    });
});

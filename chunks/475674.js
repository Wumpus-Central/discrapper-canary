n.d(t, { Z: () => o }), n(388685), n(642613);
var r = n(442837),
    l = n(785141),
    i = n(674503);
let a = {
    [l.u.STREAM_SOUNDSHARE_FAILED]: 0,
    [l.u.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
    [l.u.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
    [l.u.STREAM_SEND_LOW_FPS]: 2,
    [l.u.STREAM_VIEW_LOW_FPS]: 2,
    [l.u.STREAM_BAD_NETWORK_QUALITY]: 3
};
function o(e) {
    let t = e.id;
    return (0, r.e7)(
        [i.Z],
        () => {
            let e = Array.from(i.Z.getActiveErrors().values())
                .filter((e) => 'streamKey' in e && e.streamKey === t && null != a[e.type])
                .sort((e, t) => {
                    var n, r;
                    return (null != (n = a[e.type]) ? n : 0) - (null != (r = a[t.type]) ? r : 0);
                })[0];
            return null == e ? void 0 : e.type;
        },
        [t]
    );
}

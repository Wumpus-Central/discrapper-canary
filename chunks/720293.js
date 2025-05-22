n.d(t, {
    CC: () => c,
    O: () => a,
    n1: () => o,
    z0: () => s
});
var r = n(475595),
    i = n(46140),
    o = (function (e) {
        return (e.VIDEO = 'video'), (e.VIDEO_LOW_RES = 'videoLowRes'), (e.VIDEO_HLS = 'videoHls'), e;
    })({}),
    a = (function (e) {
        return (e.VIDEO = 'url'), (e.THUMBNAIL = 'thumbnail'), (e.CAPTION = 'caption'), (e.TRANSCRIPT = 'transcript'), e;
    })({});
function s(e, t, n, o) {
    var a;
    let s = null == (a = e.config.taskConfigV2) ? void 0 : a.tasks[t];
    if (null == s) return null;
    let l = s.assets[n];
    if (null == l) return null;
    let c = l[o];
    if (null == c) return null;
    let u = e.config.features.includes(i.S7.QUESTS_CDN),
        d = (0, r.Dm)(c);
    if (null == d) return null;
    let f = (0, r.Q2)(e.id, c, { newCdn: u }),
        _ = r.N0.includes(d);
    return {
        url: f,
        mimetype: d,
        isAnimated: _
    };
}
let l = {
    video: 'video_player_video',
    videoLowRes: 'video_player_video_low_res',
    videoHls: 'video_player_video_hls'
};
function c(e) {
    return null == e ? null : l[e];
}

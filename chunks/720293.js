n.d(t, {
    CC: () => c,
    O: () => o,
    n1: () => a,
    z0: () => s
});
var r = n(475595),
    i = n(46140),
    a = (function (e) {
        return ((e.VIDEO = 'video'), (e.VIDEO_LOW_RES = 'videoLowRes'), (e.VIDEO_HLS = 'videoHls'), e);
    })({}),
    o = (function (e) {
        return ((e.VIDEO = 'url'), (e.THUMBNAIL = 'thumbnail'), (e.CAPTION = 'caption'), (e.TRANSCRIPT = 'transcript'), e);
    })({});
function s(e, t, n, a) {
    let o = e.config.taskConfigV2.tasks[t];
    if (null == o) return null;
    let s = o.assets[n];
    if (null == s) return null;
    let l = s[a];
    if (null == l) return null;
    let c = e.config.features.includes(i.S7.QUESTS_CDN),
        u = (0, r.Dm)(l);
    if (null == u) return null;
    let d = (0, r.Q2)(e.id, l, { newCdn: c }),
        f = r.N0.includes(u);
    return {
        url: d,
        mimetype: u,
        isAnimated: f
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

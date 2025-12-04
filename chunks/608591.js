function r(e) {
    return {
        url: e.url,
        width: e.width,
        height: e.height,
        thumbnail: e.thumbnail,
        caption: e.caption,
        transcript: e.transcript,
    };
}
function i(e) {
    let t = { video: r(e.video) };
    return (
        null != e.video_low_res && (t.videoLowRes = r(e.video_low_res)),
        null != e.video_hls && (t.videoHls = r(e.video_hls)),
        t
    );
}
function a(e) {
    return { videoTitle: e.video_title };
}
function o(e) {
    let t = { video: r(e.video) };
    return (
        null != e.video_low_res && (t.videoLowRes = r(e.video_low_res)),
        null != e.video_hls && (t.videoHls = r(e.video_hls)),
        t
    );
}
function s(e) {
    return { videoTitle: e.video_title };
}
n.d(t, {
    I9: () => a,
    _c: () => i,
    c1: () => o,
    jZ: () => s,
});

function r(e) {
    if (null != e)
        return {
            messages: { videoTitle: e.messages.video_title },
            assets: {
                videoPlayerVideo: e.assets.video_player_video,
                videoPlayerVideoHls: e.assets.video_player_video_hls,
                videoPlayerThumbnail: e.assets.video_player_thumbnail,
                videoPlayerVideoLowRes: e.assets.video_player_video_low_res,
                videoPlayerCaption: e.assets.video_player_caption,
                videoPlayerTranscript: e.assets.video_player_transcript,
                questBarPreviewVideo: e.assets.quest_bar_preview_video,
                questBarPreviewThumbnail: e.assets.quest_bar_preview_thumbnail,
                questHomeVideo: e.assets.quest_home_video,
            },
        };
}
function i(e) {
    return {
        url: e.url,
        width: e.width,
        height: e.height,
        thumbnail: e.thumbnail,
        caption: e.caption,
        transcript: e.transcript,
    };
}
function a(e) {
    let t = { video: i(e.video) };
    return (
        null != e.video_low_res && (t.videoLowRes = i(e.video_low_res)),
        null != e.video_hls && (t.videoHls = i(e.video_hls)),
        t
    );
}
function o(e) {
    return { videoTitle: e.video_title };
}
function s(e) {
    let t = { video: i(e.video) };
    return (
        null != e.video_low_res && (t.videoLowRes = i(e.video_low_res)),
        null != e.video_hls && (t.videoHls = i(e.video_hls)),
        t
    );
}
function l(e) {
    return { videoTitle: e.video_title };
}
n.d(t, {
    FG: () => r,
    I9: () => o,
    _c: () => a,
    c1: () => s,
    jZ: () => l,
});

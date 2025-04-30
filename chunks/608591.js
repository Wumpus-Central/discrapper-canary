function r(e) {
    if (null != e)
        return {
            messages: {
                videoTitle: e.messages.video_title,
                videoEndCtaTitle: e.messages.video_end_cta_title,
                videoEndCtaSubtitle: e.messages.video_end_cta_subtitle,
                videoEndCtaButtonLabel: e.messages.video_end_cta_button_label
            },
            assets: {
                videoPlayerVideo: e.assets.video_player_video,
                videoPlayerVideoHls: e.assets.video_player_video_hls,
                videoPlayerThumbnail: e.assets.video_player_thumbnail,
                videoPlayerVideoLowRes: e.assets.video_player_video_low_res,
                videoPlayerCaption: e.assets.video_player_caption,
                videoPlayerTranscript: e.assets.video_player_transcript,
                questBarPreviewVideo: e.assets.quest_bar_preview_video,
                questBarPreviewThumbnail: e.assets.quest_bar_preview_thumbnail,
                questHomeVideo: e.assets.quest_home_video
            }
        };
}
function i(e) {
    return {
        url: e.url,
        width: e.width,
        height: e.height,
        thumbnail: e.thumbnail,
        caption: e.caption,
        transcript: e.transcript
    };
}
function o(e) {
    let t = { video: i(e.video) };
    return null != e.video_low_res && (t.videoLowRes = i(e.video_low_res)), null != e.video_hls && (t.videoHls = i(e.video_hls)), t;
}
function a(e) {
    return {
        videoTitle: e.video_title,
        videoEndCtaTitle: e.video_end_cta_title,
        videoEndCtaSubtitle: e.video_end_cta_subtitle,
        videoEndCtaButtonLabel: e.video_end_cta_button_label
    };
}
function s(e) {
    let t = { video: i(e.video) };
    return null != e.video_low_res && (t.videoLowRes = i(e.video_low_res)), null != e.video_hls && (t.videoHls = i(e.video_hls)), t;
}
function l(e) {
    return {
        videoTitle: e.video_title,
        videoEndCtaTitle: e.video_end_cta_title,
        videoEndCtaSubtitle: e.video_end_cta_subtitle,
        videoEndCtaButtonLabel: e.video_end_cta_button_label
    };
}
n.d(t, {
    FG: () => r,
    I9: () => a,
    _c: () => o,
    c1: () => s,
    jZ: () => l
});

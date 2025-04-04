n.d(t, {
    i: () => o,
    z: () => s
});
var r = n(475595),
    i = n(46140),
    o = (function (e) {
        return (e.VIDEO_PLAYER_VIDEO = 'video_player_video'), (e.VIDEO_PLAYER_VIDEO_LOW_RES = 'video_player_video_low_res'), (e.VIDEO_PLAYER_VIDEO_HLS = 'video_player_video_hls'), (e.VIDEO_PLAYER_THUMBNAIL = 'video_player_thumbnail'), (e.VIDEO_PLAYER_CAPTION = 'video_player_caption'), (e.VIDEO_PLAYER_TRANSCRIPT = 'video_player_transcript'), (e.QUEST_BAR_PREVIEW_VIDEO = 'quest_bar_preview_video'), (e.QUEST_BAR_PREVIEW_THUMBNAIL = 'quest_bar_preview_thumbnail'), (e.QUEST_HOME_VIDEO = 'quest_home_video'), e;
    })({});
function a(e, t) {
    var n, r, i, o, a, s, l, c, u;
    switch (e) {
        case 'video_player_video':
            return null == (n = t.config.videoMetadata) ? void 0 : n.assets.videoPlayerVideo;
        case 'video_player_video_low_res':
            return null == (r = t.config.videoMetadata) ? void 0 : r.assets.videoPlayerVideoLowRes;
        case 'video_player_video_hls':
            return null == (i = t.config.videoMetadata) ? void 0 : i.assets.videoPlayerVideoHls;
        case 'video_player_thumbnail':
            return null == (o = t.config.videoMetadata) ? void 0 : o.assets.videoPlayerThumbnail;
        case 'video_player_caption':
            return null == (a = t.config.videoMetadata) ? void 0 : a.assets.videoPlayerCaption;
        case 'video_player_transcript':
            return null == (s = t.config.videoMetadata) ? void 0 : s.assets.videoPlayerTranscript;
        case 'quest_bar_preview_video':
            return null == (l = t.config.videoMetadata) ? void 0 : l.assets.questBarPreviewVideo;
        case 'quest_bar_preview_thumbnail':
            return null == (c = t.config.videoMetadata) ? void 0 : c.assets.questBarPreviewThumbnail;
        case 'quest_home_video':
            return null == (u = t.config.videoMetadata) ? void 0 : u.assets.questHomeVideo;
        default:
            return;
    }
}
function s(e, t) {
    let n = a(e, t);
    if (null == n) return null;
    let o = t.config.features.includes(i.S7.QUESTS_CDN),
        s = (0, r.Dm)(n);
    if (null == s) return null;
    let l = (0, r.Q2)(t.id, n, { newCdn: o }),
        c = r.N0.includes(s);
    return {
        url: l,
        mimetype: s,
        isAnimated: c
    };
}

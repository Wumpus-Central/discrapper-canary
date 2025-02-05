n.d(t, {
    i: () => a,
    z: () => o
});
var i = n(475595),
    r = n(46140),
    a = (function (e) {
        return (e.VIDEO_PLAYER_VIDEO = 'video_player_video'), (e.VIDEO_PLAYER_VIDEO_LOW_RES = 'video_player_video_low_res'), (e.VIDEO_PLAYER_VIDEO_HLS = 'video_player_video_hls'), (e.VIDEO_PLAYER_THUMBNAIL = 'video_player_thumbnail'), (e.VIDEO_PLAYER_CAPTION = 'video_player_caption'), (e.VIDEO_PLAYER_TRANSCRIPT = 'video_player_transcript'), (e.QUEST_BAR_PREVIEW_VIDEO = 'quest_bar_preview_video'), (e.QUEST_BAR_PREVIEW_THUMBNAIL = 'quest_bar_preview_thumbnail'), (e.QUEST_HOME_VIDEO = 'quest_home_video'), e;
    })({});
function s(e, t) {
    var n, i, r, a, s, o, l, u, c;
    switch (e) {
        case 'video_player_video':
            return null === (n = t.config.videoMetadata) || void 0 === n ? void 0 : n.assets.videoPlayerVideo;
        case 'video_player_video_low_res':
            return null === (i = t.config.videoMetadata) || void 0 === i ? void 0 : i.assets.videoPlayerVideoLowRes;
        case 'video_player_video_hls':
            return null === (r = t.config.videoMetadata) || void 0 === r ? void 0 : r.assets.videoPlayerVideoHls;
        case 'video_player_thumbnail':
            return null === (a = t.config.videoMetadata) || void 0 === a ? void 0 : a.assets.videoPlayerThumbnail;
        case 'video_player_caption':
            return null === (s = t.config.videoMetadata) || void 0 === s ? void 0 : s.assets.videoPlayerCaption;
        case 'video_player_transcript':
            return null === (o = t.config.videoMetadata) || void 0 === o ? void 0 : o.assets.videoPlayerTranscript;
        case 'quest_bar_preview_video':
            return null === (l = t.config.videoMetadata) || void 0 === l ? void 0 : l.assets.questBarPreviewVideo;
        case 'quest_bar_preview_thumbnail':
            return null === (u = t.config.videoMetadata) || void 0 === u ? void 0 : u.assets.questBarPreviewThumbnail;
        case 'quest_home_video':
            return null === (c = t.config.videoMetadata) || void 0 === c ? void 0 : c.assets.questHomeVideo;
        default:
            return;
    }
}
function o(e, t) {
    let n = s(e, t);
    if (null == n) return null;
    let a = t.config.features.includes(r.S7.QUESTS_CDN),
        o = (0, i.Dm)(n);
    if (null == o) return null;
    let l = (0, i.Q2)(t.id, n, { newCdn: a }),
        u = i.N0.includes(o);
    return {
        url: l,
        mimetype: o,
        isAnimated: u
    };
}

r.d(n, {
    i: function () {
        return i;
    },
    z: function () {
        return l;
    }
});
var i,
    a = r(475595),
    o = r(46140);
function s(e, n) {
    var r, i, a, o, s, l, u, c;
    switch (e) {
        case 'video_player_video':
            return null === (r = n.config.videoMetadata) || void 0 === r ? void 0 : r.assets.videoPlayerVideo;
        case 'video_player_video_low_res':
            return null === (i = n.config.videoMetadata) || void 0 === i ? void 0 : i.assets.videoPlayerVideoLowRes;
        case 'video_player_thumbnail':
            return null === (a = n.config.videoMetadata) || void 0 === a ? void 0 : a.assets.videoPlayerThumbnail;
        case 'video_player_caption':
            return null === (o = n.config.videoMetadata) || void 0 === o ? void 0 : o.assets.videoPlayerCaption;
        case 'video_player_transcript':
            return null === (s = n.config.videoMetadata) || void 0 === s ? void 0 : s.assets.videoPlayerTranscript;
        case 'quest_bar_preview_video':
            return null === (l = n.config.videoMetadata) || void 0 === l ? void 0 : l.assets.questBarPreviewVideo;
        case 'quest_bar_preview_thumbnail':
            return null === (u = n.config.videoMetadata) || void 0 === u ? void 0 : u.assets.questBarPreviewThumbnail;
        case 'quest_home_video':
            return null === (c = n.config.videoMetadata) || void 0 === c ? void 0 : c.assets.questHomeVideo;
        default:
            return;
    }
}
function l(e, n) {
    let r = s(e, n);
    if (null == r) return null;
    let i = n.config.features.includes(o.S7.QUESTS_CDN),
        l = (0, a.Dm)(r);
    if (null == l) return null;
    let u = (0, a.Q2)(n.id, r, { newCdn: i }),
        c = a.N0.includes(l);
    return {
        url: u,
        mimetype: l,
        isAnimated: c
    };
}
!(function (e) {
    (e.VIDEO_PLAYER_VIDEO = 'video_player_video'), (e.VIDEO_PLAYER_VIDEO_LOW_RES = 'video_player_video_low_res'), (e.VIDEO_PLAYER_THUMBNAIL = 'video_player_thumbnail'), (e.VIDEO_PLAYER_CAPTION = 'video_player_caption'), (e.VIDEO_PLAYER_TRANSCRIPT = 'video_player_transcript'), (e.QUEST_BAR_PREVIEW_VIDEO = 'quest_bar_preview_video'), (e.QUEST_BAR_PREVIEW_THUMBNAIL = 'quest_bar_preview_thumbnail'), (e.QUEST_HOME_VIDEO = 'quest_home_video');
})(i || (i = {}));

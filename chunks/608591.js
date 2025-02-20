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
n.d(t, { F: () => r });

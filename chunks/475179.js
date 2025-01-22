var i = r(570140),
    a = r(367907),
    o = r(626135),
    s = r(585483),
    l = r(981631);
n.Z = {
    rebuildRTCActiveChannels() {
        i.Z.dispatch({ type: 'CHANNEL_RTC_ACTIVE_CHANNELS' });
    },
    selectParticipant(e, n) {
        i.Z.dispatch({
            type: 'CHANNEL_RTC_SELECT_PARTICIPANT',
            channelId: e,
            id: n
        });
    },
    updateLayout(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.IlC.APP;
        o.default.track(l.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: n,
            ...(0, a.AB)(e)
        }),
            i.Z.dispatch({
                type: 'CHANNEL_RTC_UPDATE_LAYOUT',
                channelId: e,
                layout: n,
                appContext: r
            });
    },
    toggleParticipants(e, n) {
        i.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN',
            channelId: e,
            participantsOpen: n
        });
    },
    toggleParticipantsList(e, n) {
        i.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN',
            channelId: e,
            participantsListOpen: n
        });
    },
    toggleVoiceParticipantsHidden(e, n) {
        i.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN',
            channelId: e,
            voiceParticipantsHidden: n
        });
    },
    updateStageStreamSize(e, n) {
        i.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE',
            channelId: e,
            large: n
        });
    },
    updateStageVideoLimitBoostUpsellDismissed(e, n) {
        i.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED',
            channelId: e,
            dismissed: n
        });
    },
    updateChatOpen(e, n) {
        i.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_CHAT_OPEN',
            channelId: e,
            chatOpen: n
        }),
            n
                ? setTimeout(() => {
                      s.S.dispatch(l.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  }, 0)
                : s.S.dispatch(l.CkL.FOCUS_CHAT_BUTTON);
    }
};

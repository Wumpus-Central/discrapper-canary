n.d(t, { Z: () => u });
var r = n(570140),
    i = n(367907),
    o = n(626135),
    a = n(585483),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {
    rebuildRTCActiveChannels() {
        r.Z.dispatch({ type: 'CHANNEL_RTC_ACTIVE_CHANNELS' });
    },
    selectParticipant(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_SELECT_PARTICIPANT',
            channelId: e,
            id: t
        });
    },
    updateLayout(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.IlC.APP;
        o.default.track(s.rMx.VIDEO_LAYOUT_TOGGLED, c({ video_layout: t }, (0, i.AB)(e))),
            r.Z.dispatch({
                type: 'CHANNEL_RTC_UPDATE_LAYOUT',
                channelId: e,
                layout: t,
                appContext: n
            });
    },
    toggleParticipants(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN',
            channelId: e,
            participantsOpen: t
        });
    },
    toggleParticipantsList(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN',
            channelId: e,
            participantsListOpen: t
        });
    },
    toggleVoiceParticipantsHidden(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN',
            channelId: e,
            voiceParticipantsHidden: t
        });
    },
    updateStageStreamSize(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE',
            channelId: e,
            large: t
        });
    },
    updateStageVideoLimitBoostUpsellDismissed(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED',
            channelId: e,
            dismissed: t
        });
    },
    updateChatOpen(e, t) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_UPDATE_CHAT_OPEN',
            channelId: e,
            chatOpen: t
        }),
            t
                ? setTimeout(() => {
                      a.S.dispatch(s.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  }, 0)
                : a.S.dispatch(s.CkL.FOCUS_CHAT_BUTTON);
    },
    jumpToVoiceChannelMessage(e, t, n, i) {
        r.Z.dispatch({
            type: 'CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE',
            guildId: e,
            channelId: t,
            messageId: n,
            jumpType: i
        });
    }
};

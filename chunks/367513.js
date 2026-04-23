"use strict";
n.d(t, { A: () => c });
var r = n(73153),
    i = n(58149),
    s = n(134047),
    a = n(734057),
    o = n(954571),
    l = n(203982),
    u = n(652215);
let c = {
    rebuildRTCActiveChannels() {
        r.h.dispatch({ type: "CHANNEL_RTC_ACTIVE_CHANNELS" });
    },
    selectParticipant(e, t) {
        r.h.dispatch({ type: "CHANNEL_RTC_SELECT_PARTICIPANT", channelId: e, id: t });
    },
    popoutParticipant(e, t) {
        r.h.dispatch({ type: "CHANNEL_RTC_POPOUT_PARTICIPANT", channelId: e, participantId: t });
    },
    returnParticipant(e, t) {
        r.h.dispatch({ type: "CHANNEL_RTC_RETURN_PARTICIPANT", channelId: e, participantId: t });
    },
    updateLayout(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.BRT.APP;
        o.default.track(u.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: t, ...(0, i.QS)(e) }),
            r.h.dispatch({ type: "CHANNEL_RTC_UPDATE_LAYOUT", channelId: e, layout: t, appContext: n });
    },
    toggleParticipants(e, t) {
        r.h.dispatch({ type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN", channelId: e, participantsOpen: t });
    },
    toggleVoiceParticipantsHidden(e, t) {
        r.h.dispatch({
            type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
            channelId: e,
            voiceParticipantsHidden: t,
        });
    },
    updateStageStreamSize(e, t) {
        r.h.dispatch({ type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE", channelId: e, large: t });
    },
    updateStageVideoLimitBoostUpsellDismissed(e, t) {
        r.h.dispatch({
            type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
            channelId: e,
            dismissed: t,
        });
    },
    updateChatOpen(e, t, n) {
        r.h.dispatch({ type: "CHANNEL_RTC_UPDATE_CHAT_OPEN", channelId: e, chatOpen: t }),
            t
                ? setTimeout(() => {
                      l._.dispatch(u.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  }, 0)
                : (l._.dispatch(u.jej.FOCUS_CHAT_BUTTON),
                  s.M.getConfig({ location: "ChannelCall" }).collectAnalytics &&
                      o.default.track(u.HAw.TEXT_IN_VOICE_CLOSED, {
                          reason: n,
                          channel_id: e,
                          guild_id: a.A.getChannel(e)?.getGuildId(),
                      }));
    },
    jumpToVoiceChannelMessage(e, t, n, i) {
        r.h.dispatch({
            type: "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE",
            guildId: e,
            channelId: t,
            messageId: n,
            jumpType: i,
        });
    },
};

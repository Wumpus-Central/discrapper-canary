"use strict";
n.d(t, { A: () => _ });
var i = n(228366),
    r = n(58149),
    s = n(134047),
    a = n(734057),
    o = n(954571),
    l = n(625494),
    d = n(652215);
let _ = {
    rebuildRTCActiveChannels() {
        i.h.dispatch({ type: "CHANNEL_RTC_ACTIVE_CHANNELS" });
    },
    selectParticipant(e, t) {
        i.h.dispatch({ type: "CHANNEL_RTC_SELECT_PARTICIPANT", channelId: e, id: t });
    },
    popoutParticipant(e, t) {
        i.h.dispatch({ type: "CHANNEL_RTC_POPOUT_PARTICIPANT", channelId: e, participantId: t });
    },
    returnParticipant(e, t) {
        i.h.dispatch({ type: "CHANNEL_RTC_RETURN_PARTICIPANT", channelId: e, participantId: t });
    },
    updateLayout(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.BRT.APP;
        o.default.track(d.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: t, ...(0, r.QS)(e) }),
            i.h.dispatch({ type: "CHANNEL_RTC_UPDATE_LAYOUT", channelId: e, layout: t, appContext: n });
    },
    toggleParticipants(e, t) {
        i.h.dispatch({ type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN", channelId: e, participantsOpen: t });
    },
    toggleVoiceParticipantsHidden(e, t) {
        i.h.dispatch({
            type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
            channelId: e,
            voiceParticipantsHidden: t,
        });
    },
    updateStageStreamSize(e, t) {
        i.h.dispatch({ type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE", channelId: e, large: t });
    },
    updateStageVideoLimitBoostUpsellDismissed(e, t) {
        i.h.dispatch({
            type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
            channelId: e,
            dismissed: t,
        });
    },
    updateChatOpen(e, t, n) {
        i.h.dispatch({ type: "CHANNEL_RTC_UPDATE_CHAT_OPEN", channelId: e, chatOpen: t }),
            t
                ? setTimeout(() => {
                      l._.dispatch(d.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  }, 0)
                : (l._.dispatch(d.jej.FOCUS_CHAT_BUTTON),
                  s.M.getConfig({ location: "ChannelCall" }).collectAnalytics &&
                      o.default.track(d.HAw.TEXT_IN_VOICE_CLOSED, {
                          reason: n,
                          channel_id: e,
                          guild_id: a.A.getChannel(e)?.getGuildId(),
                      }));
    },
    jumpToVoiceChannelMessage(e, t, n, r) {
        i.h.dispatch({
            type: "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE",
            guildId: e,
            channelId: t,
            messageId: n,
            jumpType: r,
        });
    },
};

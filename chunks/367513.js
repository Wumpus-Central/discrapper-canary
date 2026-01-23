n.d(t, {
    A: () => f,
});
var r = n(73153),
    i = n(58149),
    a = n(134047),
    s = n(734057),
    o = n(954571),
    l = n(203982),
    c = n(652215);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = {
    rebuildRTCActiveChannels() {
        r.h.dispatch({
            type: "CHANNEL_RTC_ACTIVE_CHANNELS",
        });
    },
    selectParticipant(e, t) {
        r.h.dispatch({
            type: "CHANNEL_RTC_SELECT_PARTICIPANT",
            channelId: e,
            id: t,
        });
    },
    popoutParticipant(e, t) {
        r.h.dispatch({
            type: "CHANNEL_RTC_POPOUT_PARTICIPANT",
            channelId: e,
            participantId: t,
        });
    },
    returnParticipant(e, t) {
        r.h.dispatch({
            type: "CHANNEL_RTC_RETURN_PARTICIPANT",
            channelId: e,
            participantId: t,
        });
    },
    updateLayout(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.BRT.APP;
        o.default.track(
            c.HAw.VIDEO_LAYOUT_TOGGLED,
            d(
                {
                    video_layout: t,
                },
                (0, i.QS)(e),
            ),
        ),
            r.h.dispatch({
                type: "CHANNEL_RTC_UPDATE_LAYOUT",
                channelId: e,
                layout: t,
                appContext: n,
            });
    },
    toggleParticipants(e, t) {
        r.h.dispatch({
            type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN",
            channelId: e,
            participantsOpen: t,
        });
    },
    toggleParticipantsList(e, t) {
        r.h.dispatch({
            type: "CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN",
            channelId: e,
            participantsListOpen: t,
        });
    },
    toggleVoiceParticipantsHidden(e, t) {
        r.h.dispatch({
            type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
            channelId: e,
            voiceParticipantsHidden: t,
        });
    },
    updateStageStreamSize(e, t) {
        r.h.dispatch({
            type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE",
            channelId: e,
            large: t,
        });
    },
    updateStageVideoLimitBoostUpsellDismissed(e, t) {
        r.h.dispatch({
            type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
            channelId: e,
            dismissed: t,
        });
    },
    updateChatOpen(e, t, n) {
        if (
            (r.h.dispatch({
                type: "CHANNEL_RTC_UPDATE_CHAT_OPEN",
                channelId: e,
                chatOpen: t,
            }),
            t)
        )
            setTimeout(() => {
                l._.dispatch(c.jej.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: e,
                });
            }, 0);
        else if (
            (l._.dispatch(c.jej.FOCUS_CHAT_BUTTON),
            a.M.getConfig({
                location: "ChannelCall",
            }).collectAnalytics)
        ) {
            var i;
            o.default.track(c.HAw.TEXT_IN_VOICE_CLOSED, {
                reason: n,
                channel_id: e,
                guild_id: null == (i = s.A.getChannel(e)) ? void 0 : i.getGuildId(),
            });
        }
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

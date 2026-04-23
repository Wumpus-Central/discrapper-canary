"use strict";
n.d(t, { A: () => g });
var i = n(448761),
    r = n(720149),
    s = n(439372),
    a = n(495544),
    o = n(734057),
    l = n(232835),
    d = n(576705),
    _ = n(309010),
    u = n(287809),
    c = n(233993),
    E = n(228366),
    h = n(935208),
    m = n(652215);
class f extends s.A {
    actions = { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates };
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { channelId: t, userId: n, suppress: s, requestToSpeakTimestamp: f } = e;
            if (
                _.A.getVoiceChannelId() === t &&
                s &&
                null != t &&
                n !== a.default.getId() &&
                d.A.can(c.QY, o.A.getChannel(t))
            )
                if (null != f) {
                    let e = u.default.getUser(n);
                    null != e &&
                        E.h.dispatch({
                            type: "MESSAGE_CREATE",
                            channelId: t,
                            message: (function (e) {
                                let { channelId: t, requesterUser: n, requestToSpeakTimestamp: i } = e;
                                return {
                                    id: h.default.fromTimestamp(Date.parse(i)),
                                    type: m.lAJ.STAGE_RAISE_HAND,
                                    flags: m.pr7.EPHEMERAL,
                                    content: "",
                                    channel_id: t,
                                    author: n,
                                    attachments: [],
                                    embeds: [],
                                    pinned: !1,
                                    mentions: [],
                                    mention_channels: [],
                                    mention_roles: [],
                                    mention_everyone: !1,
                                    timestamp: i,
                                    state: m.cmJ.SENT,
                                    tts: !1,
                                };
                            })({ channelId: t, requesterUser: e, requestToSpeakTimestamp: f }),
                            optimistic: !1,
                            sendMessageOptions: {},
                            isPushNotification: !1,
                        });
                } else {
                    let e = l.A.getMessages(t).findNewest(
                        (e) => e.type === i.l.STAGE_RAISE_HAND && e.hasFlag(m.pr7.EPHEMERAL) && e.author.id === n,
                    );
                    null != e && r.A.deleteMessage(t, e.id, !0);
                }
        });
    }
}
let g = new f();

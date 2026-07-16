"use strict";
n.d(t, { A: () => f });
var i = n(448761),
    r = n(493336),
    a = n(439372),
    s = n(280450),
    l = n(734057),
    o = n(232835),
    d = n(576705),
    c = n(309010),
    u = n(287809),
    _ = n(233993),
    E = n(228366),
    A = n(935208),
    h = n(652215);
class I extends a.A {
    actions = { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates };
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { channelId: t, userId: n, suppress: a, requestToSpeakTimestamp: I } = e;
            if (
                c.Ay.getVoiceChannelId() === t &&
                a &&
                null != t &&
                n !== s.default.getId() &&
                d.A.can(_.QY, l.A.getChannel(t))
            )
                if (null != I) {
                    let e = u.default.getUser(n);
                    null != e &&
                        E.h.dispatch({
                            type: "MESSAGE_CREATE",
                            channelId: t,
                            message: (function (e) {
                                let { channelId: t, requesterUser: n, requestToSpeakTimestamp: i } = e;
                                return {
                                    id: A.default.fromTimestamp(Date.parse(i)),
                                    type: h.lAJ.STAGE_RAISE_HAND,
                                    flags: h.pr7.EPHEMERAL,
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
                                    state: h.cmJ.SENT,
                                    tts: !1,
                                };
                            })({ channelId: t, requesterUser: e, requestToSpeakTimestamp: I }),
                            optimistic: !1,
                            sendMessageOptions: {},
                            isPushNotification: !1,
                        });
                } else {
                    let e = o.A.getMessages(t).findNewest(
                        (e) => e.type === i.l.STAGE_RAISE_HAND && e.hasFlag(h.pr7.EPHEMERAL) && e.author.id === n,
                    );
                    null != e && r.A.deleteMessage(t, e.id, !0);
                }
        });
    }
}
let f = new I();

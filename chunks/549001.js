"use strict";
n.d(t, { A: () => E });
var r = n(448761),
    i = n(843472),
    s = n(439372),
    a = n(961350),
    o = n(734057),
    l = n(320501),
    u = n(576705),
    c = n(309010),
    d = n(287809),
    _ = n(233993),
    f = n(744216),
    p = n(652215);
class h extends s.A {
    actions = { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates };
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { channelId: t, userId: n, suppress: s, requestToSpeakTimestamp: h } = e;
            if (
                c.A.getVoiceChannelId() === t &&
                s &&
                null != t &&
                n !== a.default.getId() &&
                u.A.can(_.QY, o.A.getChannel(t))
            )
                if (null != h) {
                    let e = d.default.getUser(n);
                    null != e && (0, f.p)(t, e, h);
                } else {
                    let e = l.A.getMessages(t).findNewest(
                        (e) => e.type === r.l.STAGE_RAISE_HAND && e.hasFlag(p.pr7.EPHEMERAL) && e.author.id === n,
                    );
                    null != e && i.A.deleteMessage(t, e.id, !0);
                }
        });
    }
}
let E = new h();

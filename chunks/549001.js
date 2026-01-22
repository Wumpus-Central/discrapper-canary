n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(448761),
    i = n(843472),
    a = n(439372),
    s = n(961350),
    o = n(734057),
    l = n(320501),
    c = n(576705),
    u = n(309010),
    d = n(287809),
    f = n(233993),
    p = n(744216),
    _ = n(652215);

function h(e, t, n) {
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
class m extends a.A {
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { channelId: t, userId: n, suppress: a, requestToSpeakTimestamp: h } = e;
            if (
                u.A.getVoiceChannelId() === t &&
                a &&
                null != t &&
                n !== s.default.getId() &&
                c.A.can(f.QY, o.A.getChannel(t))
            )
                if (null != h) {
                    let e = d.default.getUser(n);
                    null != e && (0, p.p)(t, e, h);
                } else {
                    let e = l.A.getMessages(t).findNewest(
                        (e) => e.type === r.l.STAGE_RAISE_HAND && e.hasFlag(_.pr7.EPHEMERAL) && e.author.id === n,
                    );
                    null != e && i.A.deleteMessage(t, e.id, !0);
                }
        });
    }
    constructor(...e) {
        super(...e),
            h(this, "actions", {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
            });
    }
}
let g = new m();

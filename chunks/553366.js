"use strict";
n.d(t, { A: () => f });
var r = n(401843),
    i = n(439372),
    s = n(616356),
    a = n(320501),
    o = n(661191),
    l = n(680724),
    u = n(25528),
    c = n(820672),
    d = n(652215);
class _ extends i.A {
    actions = { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates };
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        for (let e of t) {
            if (null == e.channelId || !0 !== e.selfStream) continue;
            let t = l.A.getPendingRequestForUser(e.userId);
            if (null == t) continue;
            let n = a.A.getMessage(e.channelId, t);
            if (
                n?.activity?.type !== d.xL.STREAM_REQUEST ||
                n.application?.id == null ||
                o.default.extractTimestamp(t) < Date.now() - c.M ||
                null ==
                    (0, u.nn)(e.userId, e.guildId).find(
                        (e) => n.application?.id != null && e.application_id === n.application.id,
                    )
            )
                continue;
            let i = s.A.getStreamForUser(e.userId, e.guildId);
            null != i && r.A9(i, { forceMultiple: !0, noFocus: !0 });
        }
    }
}
let f = new _();

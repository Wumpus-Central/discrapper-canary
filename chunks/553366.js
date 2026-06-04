"use strict";
n.d(t, { A: () => h });
var i = n(401843),
    r = n(439372),
    s = n(616356),
    a = n(232835),
    o = n(935208),
    l = n(680724),
    u = n(25528),
    c = n(820672),
    d = n(652215);
class _ extends r.A {
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
            let r = s.A.getStreamForUser(e.userId, e.guildId);
            null != r && i.A9(r, { forceMultiple: !0, noFocus: !0 });
        }
    }
}
let h = new _();

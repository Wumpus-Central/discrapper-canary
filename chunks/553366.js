n.d(t, { A: () => E });
var i = n(401843),
    r = n(439372),
    a = n(616356),
    s = n(232835),
    l = n(935208),
    o = n(626798),
    d = n(25528),
    c = n(820672),
    u = n(652215);
class _ extends r.A {
    actions = { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates };
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        for (let e of t) {
            if (null == e.channelId || !0 !== e.selfStream) continue;
            let t = o.A.getPendingRequestForUser(e.userId);
            if (null == t) continue;
            let n = s.A.getMessage(e.channelId, t);
            if (n?.activity?.type !== u.xL.STREAM_REQUEST || l.default.extractTimestamp(t) < Date.now() - c.M) continue;
            let r = n.application?.id;
            if (null != r && null == (0, d.nn)(e.userId, e.guildId).find((e) => e.application_id === r)) continue;
            let _ = a.A.getStreamForUser(e.userId, e.guildId);
            null != _ && i.A9(_, { forceMultiple: !0, noFocus: !0 });
        }
    }
}
let E = new _();

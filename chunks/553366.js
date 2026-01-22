n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(401843),
    i = n(439372),
    a = n(616356),
    s = n(320501),
    o = n(661191),
    l = n(680724),
    c = n(25528),
    u = n(820672),
    d = n(652215);

function f(e, t, n) {
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
class p extends i.A {
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        for (let e of t) {
            var n, i;
            if (null == e.channelId || !0 !== e.selfStream) continue;
            let t = l.A.getPendingRequestForUser(e.userId);
            if (null == t) continue;
            let f = s.A.getMessage(e.channelId, t);
            if (
                (null == f || null == (n = f.activity) ? void 0 : n.type) !== d.xL.STREAM_REQUEST ||
                (null == (i = f.application) ? void 0 : i.id) == null ||
                o.default.extractTimestamp(t) < Date.now() - u.M ||
                null ==
                    (0, c.n)(e.userId, e.guildId).find((e) => {
                        var t;
                        return (
                            (null == (t = f.application) ? void 0 : t.id) != null &&
                            e.application_id === f.application.id
                        );
                    })
            )
                continue;
            let p = a.A.getStreamForUser(e.userId, e.guildId);
            null != p &&
                r.A9(p, {
                    forceMultiple: !0,
                    noFocus: !0,
                });
        }
    }
    constructor(...e) {
        super(...e),
            f(this, "actions", {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
            });
    }
}
let _ = new p();

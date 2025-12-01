n.d(t, { Z: () => _ }), n(388685);
var r = n(872810),
    i = n(147913),
    a = n(199902),
    o = n(375954),
    s = n(709054),
    l = n(172029),
    c = n(463421),
    u = n(915553),
    d = n(981631);
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
class p extends i.Z {
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        for (let e of t) {
            var n, i;
            if (null == e.channelId || !0 !== e.selfStream) continue;
            let t = l.Z.getPendingRequestForUser(e.userId);
            if (null == t) continue;
            let f = o.Z.getMessage(e.channelId, t);
            if (
                (null == f || null == (n = f.activity) ? void 0 : n.type) !== d.mFx.STREAM_REQUEST ||
                (null == (i = f.application) ? void 0 : i.id) == null ||
                s.default.extractTimestamp(t) < Date.now() - u.O ||
                null ==
                    (0, c._)(e.userId, e.guildId).find((e) => {
                        var t;
                        return (
                            (null == (t = f.application) ? void 0 : t.id) != null &&
                            e.application_id === f.application.id
                        );
                    })
            )
                continue;
            let p = a.Z.getStreamForUser(e.userId, e.guildId);
            null != p &&
                r.rn(p, {
                    forceMultiple: !0,
                    noFocus: !0,
                });
        }
    }
    constructor(...e) {
        super(...e), f(this, "actions", { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates });
    }
}
let _ = new p();

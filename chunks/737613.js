let i, r;
n.d(t, { A: () => p });
var l = n(17928),
    a = n(506774),
    s = n(228366),
    o = n(734057),
    d = n(71393);
let u = "hideSuppressWarning",
    c = !1,
    h = !0,
    E = !1;
class _ extends l.Ay.Store {
    static displayName = "PermissionSpeakStore";
    initialize() {
        this.waitFor(o.A, d.A), (E = a.w.get(u) || E);
    }
    isAFKChannel() {
        let e = o.A.getChannel(r);
        if (null == e) return !1;
        let t = d.A.getGuild(e.getGuildId());
        return null != t && e.id === t.afkChannelId;
    }
    shouldShowWarning() {
        return !o.A.getChannel(r)?.isGuildStageVoice() && !h;
    }
}
let p = new _(s.h, {
    CONNECTION_OPEN: function (e) {
        (i = e.sessionId), (c = !1);
    },
    CONNECTION_CLOSED: function () {
        (i = null), (r = null), (h = !0);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce(
            (e, t) =>
                i !== t.sessionId
                    ? e
                    : (c !== t.suppress && (h = !(c = t.suppress)),
                      r !== t.channelId && ((r = t.channelId), (h = !c)),
                      (E || null == t.channelId) && (h = !0),
                      !0),
            !1,
        );
    },
    PERMISSION_CLEAR_SUPPRESS_WARNING: function (e) {
        let { forever: t } = e;
        (h = !0), t && ((E = !0), a.w.set(u, E));
    },
});

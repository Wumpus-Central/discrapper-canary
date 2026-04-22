"use strict";
let r, i;
n.d(t, { A: () => h });
var s = n(311907),
    a = n(506774),
    o = n(73153),
    l = n(734057),
    u = n(71393);
let d = "hideSuppressWarning",
    c = !1,
    _ = !0,
    f = !1;
class E extends s.Ay.Store {
    static displayName = "PermissionSpeakStore";
    initialize() {
        this.waitFor(l.A, u.A), (f = a.w.get(d) || f);
    }
    isAFKChannel() {
        let e = l.A.getChannel(i);
        if (null == e) return !1;
        let t = u.A.getGuild(e.getGuildId());
        return null != t && e.id === t.afkChannelId;
    }
    shouldShowWarning() {
        return !l.A.getChannel(i)?.isGuildStageVoice() && !_;
    }
}
let h = new E(o.h, {
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (c = !1);
    },
    CONNECTION_CLOSED: function () {
        (r = null), (i = null), (_ = !0);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce(
            (e, t) =>
                r !== t.sessionId
                    ? e
                    : (c !== t.suppress && (_ = !(c = t.suppress)),
                      i !== t.channelId && ((i = t.channelId), (_ = !c)),
                      (f || null == t.channelId) && (_ = !0),
                      !0),
            !1,
        );
    },
    PERMISSION_CLEAR_SUPPRESS_WARNING: function (e) {
        let { forever: t } = e;
        (_ = !0), t && ((f = !0), a.w.set(d, f));
    },
});

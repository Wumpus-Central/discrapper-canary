"use strict";
let r, i;
n.d(t, { A: () => A });
var a = n(311907),
    s = n(506774),
    o = n(73153),
    l = n(734057),
    u = n(71393);
let c = "hideSuppressWarning",
    d = !1,
    _ = !0,
    f = !1;
function p(e) {
    (r = e.sessionId), (d = !1);
}
function h() {
    (r = null), (i = null), (_ = !0);
}
function m(e) {
    let { voiceStates: t } = e;
    return t.reduce(
        (e, t) =>
            r !== t.sessionId
                ? e
                : (d !== t.suppress && (_ = !(d = t.suppress)),
                  i !== t.channelId && ((i = t.channelId), (_ = !d)),
                  (f || null == t.channelId) && (_ = !0),
                  !0),
        !1,
    );
}
function g(e) {
    let { forever: t } = e;
    (_ = !0), t && ((f = !0), s.w.set(c, f));
}
class E extends a.Ay.Store {
    static displayName = "PermissionSpeakStore";
    initialize() {
        this.waitFor(l.A, u.A), (f = s.w.get(c) || f);
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
let A = new E(o.h, {
    CONNECTION_OPEN: p,
    CONNECTION_CLOSED: h,
    VOICE_STATE_UPDATES: m,
    PERMISSION_CLEAR_SUPPRESS_WARNING: g,
});

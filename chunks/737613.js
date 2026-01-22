let r, i;
n.d(t, { A: () => O });
var a,
    s = n(311907),
    o = n(506774),
    l = n(73153),
    c = n(734057),
    u = n(71393);
function d(e, t, n) {
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
let f = "hideSuppressWarning",
    p = !1,
    _ = !0,
    h = !1;
function m(e) {
    (r = e.sessionId), (p = !1);
}
function g() {
    (r = null), (i = null), (_ = !0);
}
function E(e) {
    let { voiceStates: t } = e;
    return t.reduce(
        (e, t) =>
            r !== t.sessionId
                ? e
                : (p !== t.suppress && (_ = !(p = t.suppress)),
                  i !== t.channelId && ((i = t.channelId), (_ = !p)),
                  (h || null == t.channelId) && (_ = !0),
                  !0),
        !1,
    );
}
function b(e) {
    let { forever: t } = e;
    (_ = !0), t && ((h = !0), o.w.set(f, h));
}
class y extends (a = s.Ay.Store) {
    initialize() {
        this.waitFor(c.A, u.A), (h = o.w.get(f) || h);
    }
    isAFKChannel() {
        let e = c.A.getChannel(i);
        if (null == e) return !1;
        let t = u.A.getGuild(e.getGuildId());
        return null != t && e.id === t.afkChannelId;
    }
    shouldShowWarning() {
        var e;
        return !(null == (e = c.A.getChannel(i)) ? void 0 : e.isGuildStageVoice()) && !_;
    }
}
d(y, "displayName", "PermissionSpeakStore");
let O = new y(l.h, {
    CONNECTION_OPEN: m,
    CONNECTION_CLOSED: g,
    VOICE_STATE_UPDATES: E,
    PERMISSION_CLEAR_SUPPRESS_WARNING: b,
});

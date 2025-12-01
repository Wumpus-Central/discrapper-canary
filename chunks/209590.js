let r, i;
n.d(t, { Z: () => O });
var a,
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(592125),
    u = n(430824);
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
    m = !1;
function h(e) {
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
                  (m || null == t.channelId) && (_ = !0),
                  !0),
        !1,
    );
}
function b(e) {
    let { forever: t } = e;
    (_ = !0), t && ((m = !0), s.K.set(f, m));
}
class y extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, u.Z), (m = s.K.get(f) || m);
    }
    isAFKChannel() {
        let e = c.Z.getChannel(i);
        if (null == e) return !1;
        let t = u.Z.getGuild(e.getGuildId());
        return null != t && e.id === t.afkChannelId;
    }
    shouldShowWarning() {
        var e;
        return !(null == (e = c.Z.getChannel(i)) ? void 0 : e.isGuildStageVoice()) && !_;
    }
}
d(y, "displayName", "PermissionSpeakStore");
let O = new y(l.Z, {
    CONNECTION_OPEN: h,
    CONNECTION_CLOSED: g,
    VOICE_STATE_UPDATES: E,
    PERMISSION_CLEAR_SUPPRESS_WARNING: b,
});

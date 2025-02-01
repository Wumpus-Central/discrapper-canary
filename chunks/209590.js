let i, r;
n.d(t, { Z: () => I }), n(724458);
var a,
    s = n(442837),
    o = n(433517),
    l = n(570140),
    u = n(592125),
    c = n(430824);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = 'hideSuppressWarning',
    _ = !1,
    p = !0,
    h = !1;
function m(e) {
    (i = e.sessionId), (_ = !1);
}
function g() {
    (i = null), (r = null), (p = !0);
}
function E(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i !== t.sessionId ? e : (_ !== t.suppress && (p = !(_ = t.suppress)), r !== t.channelId && ((r = t.channelId), (p = !_)), (h || null == t.channelId) && (p = !0), !0)), !1);
}
function v(e) {
    let { forever: t } = e;
    (p = !0), t && ((h = !0), o.K.set(f, h));
}
class y extends (a = s.ZP.Store) {
    initialize() {
        h = o.K.get(f) || h;
    }
    isAFKChannel() {
        let e = u.Z.getChannel(r);
        if (null == e) return !1;
        let t = c.Z.getGuild(e.getGuildId());
        return null != t && e.id === t.afkChannelId;
    }
    shouldShowWarning() {
        var e;
        return !(null === (e = u.Z.getChannel(r)) || void 0 === e ? void 0 : e.isGuildStageVoice()) && !p;
    }
}
d(y, 'displayName', 'PermissionSpeakStore');
let I = new y(l.Z, {
    CONNECTION_OPEN: m,
    CONNECTION_CLOSED: g,
    VOICE_STATE_UPDATES: E,
    PERMISSION_CLEAR_SUPPRESS_WARNING: v
});

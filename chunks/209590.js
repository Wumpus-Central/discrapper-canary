let i, a;
var o,
    s = r(724458);
var l = r(442837),
    u = r(433517),
    c = r(570140),
    d = r(592125),
    f = r(430824);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = 'hideSuppressWarning',
    _ = !1,
    m = !0,
    g = !1;
function E(e) {
    (i = e.sessionId), (_ = !1);
}
function v() {
    (i = null), (a = null), (m = !0);
}
function y(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => (i !== n.sessionId ? e : (_ !== n.suppress && (m = !(_ = n.suppress)), a !== n.channelId && ((a = n.channelId), (m = !_)), (g || null == n.channelId) && (m = !0), !0)), !1);
}
function b(e) {
    let { forever: n } = e;
    (m = !0), n && ((g = !0), u.K.set(h, g));
}
class I extends (o = l.ZP.Store) {
    initialize() {
        g = u.K.get(h) || g;
    }
    isAFKChannel() {
        let e = d.Z.getChannel(a);
        if (null == e) return !1;
        let n = f.Z.getGuild(e.getGuildId());
        return null != n && e.id === n.afkChannelId;
    }
    shouldShowWarning() {
        var e;
        return !(null === (e = d.Z.getChannel(a)) || void 0 === e ? void 0 : e.isGuildStageVoice()) && !m;
    }
}
p(I, 'displayName', 'PermissionSpeakStore'),
    (n.Z = new I(c.Z, {
        CONNECTION_OPEN: E,
        CONNECTION_CLOSED: v,
        VOICE_STATE_UPDATES: y,
        PERMISSION_CLEAR_SUPPRESS_WARNING: b
    }));

n.d(t, { Z: () => C });
var r,
    i = n(348327),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(592125),
    c = n(430824),
    u = n(19780),
    d = n(944486),
    f = n(700785),
    p = n(565799),
    _ = n(501655),
    m = n(750154),
    h = n(427679),
    g = n(368442),
    E = n(157925),
    b = n(981631);
function y(e, t, n) {
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
let O = null;
function v() {
    var e, t, n, r, i, a, o;
    let s = d.Z.getVoiceChannelId();
    if (null == s) return null;
    let u = h.Z.getStageInstanceByChannel(s);
    if (null == u) return null;
    let y = l.Z.getChannel(s);
    if (null == y || !f.oz(b.Plq.VIEW_CHANNEL, y)) return null;
    let v = c.Z.getGuild(y.getGuildId());
    if (null == v || !v.features.has(b.GuildFeatures.DISCOVERABLE)) return null;
    let S = (0, m.Lw)(y, u),
        I = (null == O || null == (e = O.party) ? void 0 : e.id) === S ? O : null,
        T = p.Z.getMutableParticipants(y.id, _.pV.SPEAKER),
        A = T.filter((e) => e.type === _.Ui.STREAM).length,
        C = T.length - A,
        N = p.Z.getParticipantCount(s) - A,
        P = (null == I || null == (t = I.party) ? void 0 : t.size) != null ? I.party.size[1] : 0;
    return {
        application_id: E.gD,
        name: null != (i = null != (r = u.topic) ? r : y.topic) ? i : y.name,
        type: (0, g.xJ)(y.id) ? b.IIU.WATCHING : b.IIU.LISTENING,
        timestamps: {
            start: null != (a = null == I || null == (n = I.timestamps) ? void 0 : n.start) ? a : new Date().getTime(),
        },
        assets: {
            small_image: null != (o = v.icon) ? o : void 0,
            small_text: v.name,
        },
        party: {
            id: S,
            size: [C, Math.max(N, P)],
        },
    };
}
function S() {
    let e = v();
    return !a()(e, O) && ((O = e), !0);
}
function I(e) {
    let { voiceStates: t } = e;
    if (null == O) return;
    let n = (0, m.rq)(O);
    null != n && null != t.find((e) => e.channelId === n.channelId) && S();
}
function T(e) {
    var t, n, r;
    let { state: i } = e,
        a = null != (r = null == O || null == (n = O.party) || null == (t = n.size) ? void 0 : t[1]) ? r : 0;
    return i === b.hes.RTC_CONNECTED && !(a > 0) && S();
}
class A extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, c.Z, u.Z, d.Z, p.Z, h.Z);
    }
    getActivity() {
        return O;
    }
}
y(A, "displayName", "StageChannelSelfRichPresenceStore");
let C = new A(s.Z, {
    CONNECTION_OPEN: S,
    STAGE_INSTANCE_CREATE: S,
    STAGE_INSTANCE_UPDATE: S,
    STAGE_INSTANCE_DELETE: S,
    VOICE_CHANNEL_SELECT: S,
    RTC_CONNECTION_STATE: T,
    VOICE_STATE_UPDATES: I,
});

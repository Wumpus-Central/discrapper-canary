n.d(t, { Z: () => A });
var r,
    i = n(348327),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(592125),
    c = n(430824),
    u = n(19780),
    d = n(944486),
    f = n(700785),
    _ = n(565799),
    p = n(501655),
    h = n(750154),
    m = n(427679),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let v = null;
function O() {
    var e, t, n, r, i, o, a;
    let s = d.Z.getVoiceChannelId();
    if (null == s) return null;
    let u = m.Z.getStageInstanceByChannel(s);
    if (null == u) return null;
    let y = l.Z.getChannel(s);
    if (null == y || !f.oz(b.Plq.VIEW_CHANNEL, y)) return null;
    let O = c.Z.getGuild(y.getGuildId());
    if (null == O || !O.hasFeature(b.oNc.DISCOVERABLE)) return null;
    let I = (0, h.Lw)(y, u),
        S = (null == v || null == (e = v.party) ? void 0 : e.id) === I ? v : null,
        T = _.Z.getMutableParticipants(y.id, p.pV.SPEAKER),
        N = T.filter((e) => e.type === p.Ui.STREAM).length,
        A = T.length - N,
        C = _.Z.getParticipantCount(s) - N,
        R = (null == S || null == (t = S.party) ? void 0 : t.size) != null ? S.party.size[1] : 0;
    return {
        application_id: E.gD,
        name: null != (i = null != (r = u.topic) ? r : y.topic) ? i : y.name,
        type: (0, g.xJ)(y.id) ? b.IIU.WATCHING : b.IIU.LISTENING,
        timestamps: { start: null != (o = null == S || null == (n = S.timestamps) ? void 0 : n.start) ? o : new Date().getTime() },
        assets: {
            small_image: null != (a = O.icon) ? a : void 0,
            small_text: O.name
        },
        party: {
            id: I,
            size: [A, Math.max(C, R)]
        }
    };
}
function I() {
    let e = O();
    return !o()(e, v) && ((v = e), !0);
}
function S(e) {
    let { voiceStates: t } = e;
    if (null == v) return;
    let n = (0, h.rq)(v);
    null != n && null != t.find((e) => e.channelId === n.channelId) && I();
}
function T(e) {
    var t, n, r;
    let { state: i } = e,
        o = null != (r = null == v || null == (n = v.party) || null == (t = n.size) ? void 0 : t[1]) ? r : 0;
    return i === b.hes.RTC_CONNECTED && !(o > 0) && I();
}
class N extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, d.Z, m.Z, u.Z);
    }
    getActivity() {
        return v;
    }
}
y(N, 'displayName', 'StageChannelSelfRichPresenceStore');
let A = new N(s.Z, {
    CONNECTION_OPEN: I,
    STAGE_INSTANCE_CREATE: I,
    STAGE_INSTANCE_UPDATE: I,
    STAGE_INSTANCE_DELETE: I,
    VOICE_CHANNEL_SELECT: I,
    RTC_CONNECTION_STATE: T,
    VOICE_STATE_UPDATES: S
});

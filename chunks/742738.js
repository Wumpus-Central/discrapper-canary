n.d(t, { Z: () => C });
var i,
    r = n(348327),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(592125),
    u = n(430824),
    c = n(19780),
    d = n(944486),
    f = n(700785),
    _ = n(565799),
    p = n(501655),
    h = n(750154),
    m = n(427679),
    g = n(368442),
    E = n(157925),
    v = n(981631);
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
let I = null;
function T() {
    var e, t, n, i, r, a, s;
    let o = d.Z.getVoiceChannelId();
    if (null == o) return null;
    let c = m.Z.getStageInstanceByChannel(o);
    if (null == c) return null;
    let y = l.Z.getChannel(o);
    if (null == y || !f.oz(v.Plq.VIEW_CHANNEL, y)) return null;
    let T = u.Z.getGuild(y.getGuildId());
    if (null == T || !T.hasFeature(v.oNc.DISCOVERABLE)) return null;
    let b = (0, h.Lw)(y, c),
        S = (null == I ? void 0 : null === (e = I.party) || void 0 === e ? void 0 : e.id) === b ? I : null,
        A = _.Z.getMutableParticipants(y.id, p.pV.SPEAKER),
        N = A.filter((e) => e.type === p.Ui.STREAM).length,
        C = A.length - N,
        R = _.Z.getParticipantCount(o) - N,
        O = (null == S ? void 0 : null === (t = S.party) || void 0 === t ? void 0 : t.size) != null ? S.party.size[1] : 0;
    return {
        application_id: E.gD,
        name: null !== (r = null !== (i = c.topic) && void 0 !== i ? i : y.topic) && void 0 !== r ? r : y.name,
        type: (0, g.xJ)(y.id) ? v.IIU.WATCHING : v.IIU.LISTENING,
        timestamps: { start: null !== (a = null == S ? void 0 : null === (n = S.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== a ? a : new Date().getTime() },
        assets: {
            small_image: null !== (s = T.icon) && void 0 !== s ? s : void 0,
            small_text: T.name
        },
        party: {
            id: b,
            size: [C, Math.max(R, O)]
        }
    };
}
function b() {
    let e = T();
    return !a()(e, I) && ((I = e), !0);
}
function S(e) {
    let { voiceStates: t } = e;
    if (null == I) return;
    let n = (0, h.rq)(I);
    null != n && null != t.find((e) => e.channelId === n.channelId) && b();
}
function A(e) {
    var t, n, i;
    let { state: r } = e,
        a = null !== (i = null == I ? void 0 : null === (n = I.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== i ? i : 0;
    return r === v.hes.RTC_CONNECTED && !(a > 0) && b();
}
class N extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, d.Z, m.Z, c.Z);
    }
    getActivity() {
        return I;
    }
}
y(N, 'displayName', 'StageChannelSelfRichPresenceStore');
let C = new N(o.Z, {
    CONNECTION_OPEN: b,
    STAGE_INSTANCE_CREATE: b,
    STAGE_INSTANCE_UPDATE: b,
    STAGE_INSTANCE_DELETE: b,
    VOICE_CHANNEL_SELECT: b,
    RTC_CONNECTION_STATE: A,
    VOICE_STATE_UPDATES: S
});

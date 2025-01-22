var i,
    a = r(348327),
    o = r.n(a),
    s = r(442837),
    l = r(570140),
    u = r(592125),
    c = r(430824),
    d = r(19780),
    f = r(944486),
    p = r(700785),
    h = r(565799),
    _ = r(501655),
    m = r(750154),
    g = r(427679),
    E = r(368442),
    v = r(157925),
    y = r(981631);
function b(e, n, r) {
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
let I = null;
function T() {
    var e, n, r, i, a, o, s;
    let l = f.Z.getVoiceChannelId();
    if (null == l) return null;
    let d = g.Z.getStageInstanceByChannel(l);
    if (null == d) return null;
    let b = u.Z.getChannel(l);
    if (null == b || !p.oz(y.Plq.VIEW_CHANNEL, b)) return null;
    let T = c.Z.getGuild(b.getGuildId());
    if (null == T || !T.hasFeature(y.oNc.DISCOVERABLE)) return null;
    let S = (0, m.Lw)(b, d),
        A = (null == I ? void 0 : null === (e = I.party) || void 0 === e ? void 0 : e.id) === S ? I : null,
        C = h.Z.getMutableParticipants(b.id, _.pV.SPEAKER),
        N = C.filter((e) => e.type === _.Ui.STREAM).length,
        R = C.length - N,
        O = h.Z.getParticipantCount(l) - N,
        D = (null == A ? void 0 : null === (n = A.party) || void 0 === n ? void 0 : n.size) != null ? A.party.size[1] : 0;
    return {
        application_id: v.gD,
        name: null !== (a = null !== (i = d.topic) && void 0 !== i ? i : b.topic) && void 0 !== a ? a : b.name,
        type: (0, E.xJ)(b.id) ? y.IIU.WATCHING : y.IIU.LISTENING,
        timestamps: { start: null !== (o = null == A ? void 0 : null === (r = A.timestamps) || void 0 === r ? void 0 : r.start) && void 0 !== o ? o : new Date().getTime() },
        assets: {
            small_image: null !== (s = T.icon) && void 0 !== s ? s : void 0,
            small_text: T.name
        },
        party: {
            id: S,
            size: [R, Math.max(O, D)]
        }
    };
}
function S() {
    let e = T();
    return !o()(e, I) && ((I = e), !0);
}
function A(e) {
    let { voiceStates: n } = e;
    if (null == I) return;
    let r = (0, m.rq)(I);
    null != r && null != n.find((e) => e.channelId === r.channelId) && S();
}
function C(e) {
    var n, r, i;
    let { state: a } = e,
        o = null !== (i = null == I ? void 0 : null === (r = I.party) || void 0 === r ? void 0 : null === (n = r.size) || void 0 === n ? void 0 : n[1]) && void 0 !== i ? i : 0;
    return a === y.hes.RTC_CONNECTED && !(o > 0) && S();
}
class N extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, f.Z, g.Z, d.Z);
    }
    getActivity() {
        return I;
    }
}
b(N, 'displayName', 'StageChannelSelfRichPresenceStore'),
    (n.Z = new N(l.Z, {
        CONNECTION_OPEN: S,
        STAGE_INSTANCE_CREATE: S,
        STAGE_INSTANCE_UPDATE: S,
        STAGE_INSTANCE_DELETE: S,
        VOICE_CHANNEL_SELECT: S,
        RTC_CONNECTION_STATE: C,
        VOICE_STATE_UPDATES: A
    }));

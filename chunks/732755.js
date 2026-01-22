n.d(t, { A: () => C });
var r,
    i = n(812729),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(734057),
    c = n(71393),
    u = n(383501),
    d = n(309010),
    f = n(488926),
    p = n(63995),
    _ = n(69407),
    h = n(82149),
    m = n(446600),
    g = n(96566),
    E = n(516607),
    b = n(652215);
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
function A() {
    var e, t, n, r, i, a, s;
    let o = d.A.getVoiceChannelId();
    if (null == o) return null;
    let u = m.A.getStageInstanceByChannel(o);
    if (null == u) return null;
    let y = l.A.getChannel(o);
    if (null == y || !f.Ib(b.xBc.VIEW_CHANNEL, y)) return null;
    let A = c.A.getGuild(y.getGuildId());
    if (null == A || !A.features.has(b.GuildFeatures.DISCOVERABLE)) return null;
    let v = (0, h.eL)(y, u),
        S = (null == O || null == (i = O.party) ? void 0 : i.id) === v ? O : null,
        I = p.A.getMutableParticipants(y.id, _.ip.SPEAKER),
        T = I.filter((e) => e.type === _.wY.STREAM).length,
        C = I.length - T,
        N = p.A.getParticipantCount(o) - T,
        R = (null == S || null == (a = S.party) ? void 0 : a.size) != null ? S.party.size[1] : 0;
    return {
        application_id: E.SS,
        name: null != (e = null != (t = u.topic) ? t : y.topic) ? e : y.name,
        type: (0, g.xn)(y.id) ? b.$pd.WATCHING : b.$pd.LISTENING,
        timestamps: {
            start: null != (n = null == S || null == (s = S.timestamps) ? void 0 : s.start) ? n : new Date().getTime(),
        },
        assets: {
            small_image: null != (r = A.icon) ? r : void 0,
            small_text: A.name,
        },
        party: {
            id: v,
            size: [C, Math.max(N, R)],
        },
    };
}
function v() {
    let e = A();
    return !a()(e, O) && ((O = e), !0);
}
function S(e) {
    let { voiceStates: t } = e;
    if (null == O) return;
    let n = (0, h.UW)(O);
    null != n && null != t.find((e) => e.channelId === n.channelId) && v();
}
function I(e) {
    var t, n, r;
    let { state: i } = e,
        a = null != (t = null == O || null == (r = O.party) || null == (n = r.size) ? void 0 : n[1]) ? t : 0;
    return i === b.S7L.RTC_CONNECTED && !(a > 0) && v();
}
class T extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(l.A, c.A, u.A, d.A, p.A, m.A);
    }
    getActivity() {
        return O;
    }
}
y(T, "displayName", "StageChannelSelfRichPresenceStore");
let C = new T(o.h, {
    CONNECTION_OPEN: v,
    STAGE_INSTANCE_CREATE: v,
    STAGE_INSTANCE_UPDATE: v,
    STAGE_INSTANCE_DELETE: v,
    VOICE_CHANNEL_SELECT: v,
    RTC_CONNECTION_STATE: I,
    VOICE_STATE_UPDATES: S,
});

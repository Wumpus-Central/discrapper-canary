"use strict";
n.d(t, { A: () => C });
var r = n(812729),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(734057),
    l = n(71393),
    u = n(383501),
    c = n(309010),
    d = n(488926),
    _ = n(63995),
    f = n(69407),
    p = n(82149),
    h = n(446600),
    m = n(96566),
    g = n(516607),
    E = n(652215);
let A = null;
function I() {
    let e = c.A.getVoiceChannelId();
    if (null == e) return null;
    let t = h.A.getStageInstanceByChannel(e);
    if (null == t) return null;
    let n = o.A.getChannel(e);
    if (null == n || !d.Ib(E.xBc.VIEW_CHANNEL, n)) return null;
    let r = l.A.getGuild(n.getGuildId());
    if (null == r || !r.features.has(E.GuildFeatures.DISCOVERABLE)) return null;
    let i = (0, p.eL)(n, t),
        a = A?.party?.id === i ? A : null,
        s = _.A.getMutableParticipants(n.id, f.ip.SPEAKER),
        u = s.filter((e) => e.type === f.wY.STREAM).length,
        I = s.length - u,
        T = _.A.getParticipantCount(e) - u,
        y = a?.party?.size != null ? a.party.size[1] : 0;
    return {
        application_id: g.SS,
        name: t.topic ?? n.topic ?? n.name,
        type: (0, m.xn)(n.id) ? E.$pd.WATCHING : E.$pd.LISTENING,
        timestamps: { start: a?.timestamps?.start ?? new Date().getTime() },
        assets: { small_image: r.icon ?? void 0, small_text: r.name },
        party: { id: i, size: [I, Math.max(T, y)] },
    };
}
function T() {
    let e = I();
    return !i()(e, A) && ((A = e), !0);
}
function y(e) {
    let { voiceStates: t } = e;
    if (null == A) return;
    let n = (0, p.UW)(A);
    null != n && null != t.find((e) => e.channelId === n.channelId) && T();
}
function S(e) {
    let { state: t } = e,
        n = A?.party?.size?.[1] ?? 0;
    return t === E.S7L.RTC_CONNECTED && !(n > 0) && T();
}
class v extends a.Ay.Store {
    static displayName = "StageChannelSelfRichPresenceStore";
    initialize() {
        this.waitFor(o.A, l.A, u.A, c.A, _.A, h.A);
    }
    getActivity() {
        return A;
    }
}
let C = new v(s.h, {
    CONNECTION_OPEN: T,
    STAGE_INSTANCE_CREATE: T,
    STAGE_INSTANCE_UPDATE: T,
    STAGE_INSTANCE_DELETE: T,
    VOICE_CHANNEL_SELECT: T,
    RTC_CONNECTION_STATE: S,
    VOICE_STATE_UPDATES: y,
});

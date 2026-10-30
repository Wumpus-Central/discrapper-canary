n.d(t, { A: () => R });
var i = n(812729),
    r = n.n(i),
    a = n(350835),
    s = n(17928),
    l = n(73153),
    o = n(47167),
    d = n(734057),
    c = n(71393),
    u = n(763827),
    _ = n(994500),
    E = n(309010),
    A = n(287809),
    h = n(488926),
    f = n(63995),
    I = n(518769),
    p = n(82149),
    T = n(446600),
    m = n(96566),
    g = n(516607),
    S = n(652215);
let N = null;
function C() {
    let e = (function () {
        let e = E.Ay.getVoiceChannelId();
        if (null == e) return null;
        let t = T.A.getStageInstanceByChannel(e);
        if (null == t) return null;
        let n = d.A.getChannel(e);
        if (null == n || !h.Ib(S.xBc.VIEW_CHANNEL, n)) return null;
        let i = c.A.getGuild(n.getGuildId());
        if (null == i || !i.features.has(S.GuildFeatures.DISCOVERABLE)) return null;
        let r = (0, p.eL)(n, t),
            s = N?.party?.id === r ? N : null,
            l = f.A.getMutableParticipants(n.id, I.ip.SPEAKER),
            u = l.filter((e) => e.type === I.wY.STREAM).length,
            C = l.length - u,
            O = f.A.getParticipantCount(e) - u,
            R = s?.party?.size != null ? s.party.size[1] : 0;
        return {
            application_id: g.SS,
            name: t.topic ?? n.topic ?? (0, o.m1)(n, A.default, _.A),
            type: (0, m.xn)(n.id) ? a.$.WATCHING : a.$.LISTENING,
            timestamps: { start: s?.timestamps?.start ?? new Date().getTime() },
            assets: { small_image: i.icon ?? void 0, small_text: i.name },
            party: { id: r, size: [C, Math.max(O, R)] },
        };
    })();
    return !r()(e, N) && ((N = e), !0);
}
class O extends s.Ay.Store {
    static displayName = "StageChannelSelfRichPresenceStore";
    initialize() {
        this.waitFor(d.A, c.A, u.A, E.Ay, f.A, T.A);
    }
    getActivity() {
        return N;
    }
}
let R = new O(l.h, {
    CONNECTION_OPEN: C,
    STAGE_INSTANCE_CREATE: C,
    STAGE_INSTANCE_UPDATE: C,
    STAGE_INSTANCE_DELETE: C,
    VOICE_CHANNEL_SELECT: C,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t } = e,
            n = N?.party?.size?.[1] ?? 0;
        return t === S.S7L.RTC_CONNECTED && !(n > 0) && C();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (null == N) return;
        let n = (0, p.UW)(N);
        null != n && null != t.find((e) => e.channelId === n.channelId) && C();
    },
});

n.d(t, { A: () => N });
var i = n(812729),
    l = n.n(i),
    a = n(17928),
    r = n(228366),
    s = n(47167),
    o = n(734057),
    d = n(71393),
    u = n(763827),
    c = n(994500),
    h = n(309010),
    E = n(287809),
    A = n(488926),
    _ = n(63995),
    p = n(69407),
    g = n(82149),
    f = n(446600),
    I = n(96566),
    S = n(516607),
    T = n(652215);
let m = null;
function C() {
    let e = (function () {
        let e = h.A.getVoiceChannelId();
        if (null == e) return null;
        let t = f.A.getStageInstanceByChannel(e);
        if (null == t) return null;
        let n = o.A.getChannel(e);
        if (null == n || !A.Ib(T.xBc.VIEW_CHANNEL, n)) return null;
        let i = d.A.getGuild(n.getGuildId());
        if (null == i || !i.features.has(T.GuildFeatures.DISCOVERABLE)) return null;
        let l = (0, g.eL)(n, t),
            a = m?.party?.id === l ? m : null,
            r = _.A.getMutableParticipants(n.id, p.ip.SPEAKER),
            u = r.filter((e) => e.type === p.wY.STREAM).length,
            C = r.length - u,
            O = _.A.getParticipantCount(e) - u,
            N = a?.party?.size != null ? a.party.size[1] : 0;
        return {
            application_id: S.SS,
            name: t.topic ?? n.topic ?? (0, s.m1)(n, E.default, c.A),
            type: (0, I.xn)(n.id) ? T.$pd.WATCHING : T.$pd.LISTENING,
            timestamps: { start: a?.timestamps?.start ?? new Date().getTime() },
            assets: { small_image: i.icon ?? void 0, small_text: i.name },
            party: { id: l, size: [C, Math.max(O, N)] },
        };
    })();
    return !l()(e, m) && ((m = e), !0);
}
class O extends a.Ay.Store {
    static displayName = "StageChannelSelfRichPresenceStore";
    initialize() {
        this.waitFor(o.A, d.A, u.A, h.A, _.A, f.A);
    }
    getActivity() {
        return m;
    }
}
let N = new O(r.h, {
    CONNECTION_OPEN: C,
    STAGE_INSTANCE_CREATE: C,
    STAGE_INSTANCE_UPDATE: C,
    STAGE_INSTANCE_DELETE: C,
    VOICE_CHANNEL_SELECT: C,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t } = e,
            n = m?.party?.size?.[1] ?? 0;
        return t === T.S7L.RTC_CONNECTED && !(n > 0) && C();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (null == m) return;
        let n = (0, g.UW)(m);
        null != n && null != t.find((e) => e.channelId === n.channelId) && C();
    },
});

n.d(t, { A: () => N });
var i = n(812729),
    r = n.n(i),
    l = n(17928),
    a = n(228366),
    s = n(47167),
    o = n(734057),
    d = n(71393),
    u = n(763827),
    c = n(994500),
    h = n(309010),
    E = n(287809),
    _ = n(488926),
    p = n(63995),
    A = n(69407),
    f = n(82149),
    g = n(446600),
    I = n(96566),
    T = n(516607),
    S = n(652215);
let m = null;
function O() {
    let e = (function () {
        let e = h.A.getVoiceChannelId();
        if (null == e) return null;
        let t = g.A.getStageInstanceByChannel(e);
        if (null == t) return null;
        let n = o.A.getChannel(e);
        if (null == n || !_.Ib(S.xBc.VIEW_CHANNEL, n)) return null;
        let i = d.A.getGuild(n.getGuildId());
        if (null == i || !i.features.has(S.GuildFeatures.DISCOVERABLE)) return null;
        let r = (0, f.eL)(n, t),
            l = m?.party?.id === r ? m : null,
            a = p.A.getMutableParticipants(n.id, A.ip.SPEAKER),
            u = a.filter((e) => e.type === A.wY.STREAM).length,
            O = a.length - u,
            C = p.A.getParticipantCount(e) - u,
            N = l?.party?.size != null ? l.party.size[1] : 0;
        return {
            application_id: T.SS,
            name: t.topic ?? n.topic ?? (0, s.m1)(n, E.default, c.A),
            type: (0, I.xn)(n.id) ? S.$pd.WATCHING : S.$pd.LISTENING,
            timestamps: { start: l?.timestamps?.start ?? new Date().getTime() },
            assets: { small_image: i.icon ?? void 0, small_text: i.name },
            party: { id: r, size: [O, Math.max(C, N)] },
        };
    })();
    return !r()(e, m) && ((m = e), !0);
}
class C extends l.Ay.Store {
    static displayName = "StageChannelSelfRichPresenceStore";
    initialize() {
        this.waitFor(o.A, d.A, u.A, h.A, p.A, g.A);
    }
    getActivity() {
        return m;
    }
}
let N = new C(a.h, {
    CONNECTION_OPEN: O,
    STAGE_INSTANCE_CREATE: O,
    STAGE_INSTANCE_UPDATE: O,
    STAGE_INSTANCE_DELETE: O,
    VOICE_CHANNEL_SELECT: O,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t } = e,
            n = m?.party?.size?.[1] ?? 0;
        return t === S.S7L.RTC_CONNECTED && !(n > 0) && O();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (null == m) return;
        let n = (0, f.UW)(m);
        null != n && null != t.find((e) => e.channelId === n.channelId) && O();
    },
});

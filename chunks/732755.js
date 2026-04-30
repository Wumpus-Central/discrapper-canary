"use strict";
n.d(t, { A: () => C });
var i = n(812729),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(47167),
    l = n(734057),
    u = n(71393),
    c = n(763827),
    d = n(994500),
    _ = n(309010),
    f = n(287809),
    h = n(488926),
    p = n(63995),
    E = n(518769),
    m = n(82149),
    g = n(446600),
    A = n(96566),
    I = n(516607),
    T = n(652215);
let S = null;
function N() {
    let e = (function () {
        let e = _.A.getVoiceChannelId();
        if (null == e) return null;
        let t = g.A.getStageInstanceByChannel(e);
        if (null == t) return null;
        let n = l.A.getChannel(e);
        if (null == n || !h.Ib(T.xBc.VIEW_CHANNEL, n)) return null;
        let i = u.A.getGuild(n.getGuildId());
        if (null == i || !i.features.has(T.GuildFeatures.DISCOVERABLE)) return null;
        let r = (0, m.eL)(n, t),
            s = S?.party?.id === r ? S : null,
            a = p.A.getMutableParticipants(n.id, E.ip.SPEAKER),
            c = a.filter((e) => e.type === E.wY.STREAM).length,
            N = a.length - c,
            y = p.A.getParticipantCount(e) - c,
            C = s?.party?.size != null ? s.party.size[1] : 0;
        return {
            application_id: I.SS,
            name: t.topic ?? n.topic ?? (0, o.m1)(n, f.default, d.A),
            type: (0, A.xn)(n.id) ? T.$pd.WATCHING : T.$pd.LISTENING,
            timestamps: { start: s?.timestamps?.start ?? new Date().getTime() },
            assets: { small_image: i.icon ?? void 0, small_text: i.name },
            party: { id: r, size: [N, Math.max(y, C)] },
        };
    })();
    return !r()(e, S) && ((S = e), !0);
}
class y extends s.Ay.Store {
    static displayName = "StageChannelSelfRichPresenceStore";
    initialize() {
        this.waitFor(l.A, u.A, c.A, _.A, p.A, g.A);
    }
    getActivity() {
        return S;
    }
}
let C = new y(a.h, {
    CONNECTION_OPEN: N,
    STAGE_INSTANCE_CREATE: N,
    STAGE_INSTANCE_UPDATE: N,
    STAGE_INSTANCE_DELETE: N,
    VOICE_CHANNEL_SELECT: N,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t } = e,
            n = S?.party?.size?.[1] ?? 0;
        return t === T.S7L.RTC_CONNECTED && !(n > 0) && N();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (null == S) return;
        let n = (0, m.UW)(S);
        null != n && null != t.find((e) => e.channelId === n.channelId) && N();
    },
});

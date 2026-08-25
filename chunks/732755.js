"use strict";
n.d(t, { A: () => R });
var i = n(812729),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(47167),
    o = n(734057),
    d = n(71393),
    c = n(763827),
    u = n(994500),
    _ = n(309010),
    E = n(287809),
    A = n(488926),
    h = n(63995),
    I = n(518769),
    f = n(82149),
    p = n(446600),
    T = n(96566),
    m = n(516607),
    g = n(652215);
let S = null;
function N() {
    let e = (function () {
        let e = _.Ay.getVoiceChannelId();
        if (null == e) return null;
        let t = p.A.getStageInstanceByChannel(e);
        if (null == t) return null;
        let n = o.A.getChannel(e);
        if (null == n || !A.Ib(g.xBc.VIEW_CHANNEL, n)) return null;
        let i = d.A.getGuild(n.getGuildId());
        if (null == i || !i.features.has(g.GuildFeatures.DISCOVERABLE)) return null;
        let r = (0, f.eL)(n, t),
            a = S?.party?.id === r ? S : null,
            s = h.A.getMutableParticipants(n.id, I.ip.SPEAKER),
            c = s.filter((e) => e.type === I.wY.STREAM).length,
            N = s.length - c,
            C = h.A.getParticipantCount(e) - c,
            R = a?.party?.size != null ? a.party.size[1] : 0;
        return {
            application_id: m.SS,
            name: t.topic ?? n.topic ?? (0, l.m1)(n, E.default, u.A),
            type: (0, T.xn)(n.id) ? g.$pd.WATCHING : g.$pd.LISTENING,
            timestamps: { start: a?.timestamps?.start ?? new Date().getTime() },
            assets: { small_image: i.icon ?? void 0, small_text: i.name },
            party: { id: r, size: [N, Math.max(C, R)] },
        };
    })();
    return !r()(e, S) && ((S = e), !0);
}
class C extends a.Ay.Store {
    static displayName = "StageChannelSelfRichPresenceStore";
    initialize() {
        this.waitFor(o.A, d.A, c.A, _.Ay, h.A, p.A);
    }
    getActivity() {
        return S;
    }
}
let R = new C(s.h, {
    CONNECTION_OPEN: N,
    STAGE_INSTANCE_CREATE: N,
    STAGE_INSTANCE_UPDATE: N,
    STAGE_INSTANCE_DELETE: N,
    VOICE_CHANNEL_SELECT: N,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t } = e,
            n = S?.party?.size?.[1] ?? 0;
        return t === g.S7L.RTC_CONNECTED && !(n > 0) && N();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (null == S) return;
        let n = (0, f.UW)(S);
        null != n && null != t.find((e) => e.channelId === n.channelId) && N();
    },
});

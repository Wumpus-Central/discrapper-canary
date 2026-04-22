"use strict";
n.d(t, { A: () => O });
var r = n(812729),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(47167),
    l = n(734057),
    u = n(71393),
    d = n(383501),
    c = n(994500),
    _ = n(309010),
    f = n(287809),
    E = n(488926),
    h = n(63995),
    p = n(69407),
    m = n(82149),
    g = n(446600),
    A = n(96566),
    I = n(516607),
    T = n(652215);
let S = null;
function y() {
    let e = (function () {
        let e = _.A.getVoiceChannelId();
        if (null == e) return null;
        let t = g.A.getStageInstanceByChannel(e);
        if (null == t) return null;
        let n = l.A.getChannel(e);
        if (null == n || !E.Ib(T.xBc.VIEW_CHANNEL, n)) return null;
        let r = u.A.getGuild(n.getGuildId());
        if (null == r || !r.features.has(T.GuildFeatures.DISCOVERABLE)) return null;
        let i = (0, m.eL)(n, t),
            s = S?.party?.id === i ? S : null,
            a = h.A.getMutableParticipants(n.id, p.ip.SPEAKER),
            d = a.filter((e) => e.type === p.wY.STREAM).length,
            y = a.length - d,
            N = h.A.getParticipantCount(e) - d,
            O = s?.party?.size != null ? s.party.size[1] : 0;
        return {
            application_id: I.SS,
            name: t.topic ?? n.topic ?? (0, o.m1)(n, f.default, c.A),
            type: (0, A.xn)(n.id) ? T.$pd.WATCHING : T.$pd.LISTENING,
            timestamps: { start: s?.timestamps?.start ?? new Date().getTime() },
            assets: { small_image: r.icon ?? void 0, small_text: r.name },
            party: { id: i, size: [y, Math.max(N, O)] },
        };
    })();
    return !i()(e, S) && ((S = e), !0);
}
class N extends s.Ay.Store {
    static displayName = "StageChannelSelfRichPresenceStore";
    initialize() {
        this.waitFor(l.A, u.A, d.A, _.A, h.A, g.A);
    }
    getActivity() {
        return S;
    }
}
let O = new N(a.h, {
    CONNECTION_OPEN: y,
    STAGE_INSTANCE_CREATE: y,
    STAGE_INSTANCE_UPDATE: y,
    STAGE_INSTANCE_DELETE: y,
    VOICE_CHANNEL_SELECT: y,
    RTC_CONNECTION_STATE: function (e) {
        let { state: t } = e,
            n = S?.party?.size?.[1] ?? 0;
        return t === T.S7L.RTC_CONNECTED && !(n > 0) && y();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (null == S) return;
        let n = (0, m.UW)(S);
        null != n && null != t.find((e) => e.channelId === n.channelId) && y();
    },
});

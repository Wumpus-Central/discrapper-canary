"use strict";
n.d(t, { x: () => A });
var r = n(835245),
    i = n(192308),
    a = n(73153),
    s = n(890615),
    o = n(51758),
    l = n(776781),
    u = n(96566),
    c = n(413339),
    d = n(513752),
    _ = n(734057),
    f = n(71393),
    p = n(834942),
    h = n(576705),
    m = n(309010),
    g = n(977997),
    E = n(147036);
let A = function (e, t) {
    let A = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        I = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { lockVoiceStateForResume: T = !1, bypassIdleUpdate: y = !1 } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        S = _.A.getChannel(e),
        v = g.A.getCurrentClientVoiceChannelId(t ?? null) === e,
        C = null != S ? p.A.getCheck(S.guild_id) : null;
    if (!(null != t && (0, o.V)(t)) && (null == C || C.canChat || (0, l.pC)(S))) {
        if (null != S && !v) {
            let e = (0, E.Pd)(S, g.A, f.A);
            if (e && S.isGuildStageVoice() && (0, u.xn)(S.id))
                return void (0, i.openModalLazy)(async () => {
                    let { default: e } = await n.e("21900").then(n.bind(n, 172231));
                    return (t) => e({ channel: S, ...t });
                });
            if (e)
                return void (0, i.openModalLazy)(async () => {
                    let { default: e } = await n.e("54207").then(n.bind(n, 361698));
                    return (t) => e(t);
                });
            if (!(0, s.A)(S, h.A)) return;
        }
        A && (0, c.PX)(), (0, d.A)(b, e, I, A);
    }
    function b() {
        let n = (0, r.A)();
        a.h.dispatch({
            type: "VOICE_CHANNEL_SELECT",
            guildId: t,
            channelId: e,
            currentVoiceChannelId: m.A.getVoiceChannelId(),
            video: A,
            stream: I,
            lockVoiceStateForResume: T,
            joinVoiceId: n,
            bypassIdleUpdate: y,
        });
    }
};

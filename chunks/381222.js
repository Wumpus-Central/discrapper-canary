"use strict";
n.d(t, { x: () => A });
var r = n(835245),
    i = n(192308),
    s = n(73153),
    a = n(890615),
    o = n(51758),
    l = n(776781),
    u = n(96566),
    d = n(413339),
    c = n(513752),
    _ = n(734057),
    f = n(71393),
    E = n(834942),
    h = n(576705),
    p = n(309010),
    m = n(977997),
    g = n(147036);
let A = function (e, t) {
    let A = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        I = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { lockVoiceStateForResume: T = !1, bypassIdleUpdate: S = !1 } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        y = _.A.getChannel(e),
        N = m.A.getCurrentClientVoiceChannelId(t ?? null) === e,
        O = null != y ? E.A.getCheck(y.guild_id) : null;
    if (!(null != t && (0, o.V)(t)) && (null == O || O.canChat || (0, l.pC)(y))) {
        if (null != y && !N) {
            let e = (0, g.Pd)(y, m.A, f.A);
            if (e && y.isGuildStageVoice() && (0, u.xn)(y.id))
                return void (0, i.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("24199"),
                        n.e("55202"),
                        n.e("51793"),
                        n.e("65838"),
                    ]).then(n.bind(n, 172231));
                    return (t) => e({ channel: y, ...t });
                });
            if (e)
                return void (0, i.openModalLazy)(async () => {
                    let { default: e } = await n.e("54207").then(n.bind(n, 361698));
                    return (t) => e(t);
                });
            if (!(0, a.A)(y, h.A)) return;
        }
        A && (0, d.PX)(),
            (0, c.A)(
                function () {
                    let n = (0, r.A)();
                    s.h.dispatch({
                        type: "VOICE_CHANNEL_SELECT",
                        guildId: t,
                        channelId: e,
                        currentVoiceChannelId: p.A.getVoiceChannelId(),
                        video: A,
                        stream: I,
                        lockVoiceStateForResume: T,
                        joinVoiceId: n,
                        bypassIdleUpdate: S,
                    });
                },
                e,
                I,
                A,
            );
    }
};

n.d(t, { x: () => O });
var r = n(835245),
    i = n(192308),
    a = n(73153),
    s = n(890615),
    o = n(51758),
    l = n(776781),
    c = n(96566),
    u = n(413339),
    d = n(513752),
    f = n(734057),
    p = n(71393),
    _ = n(834942),
    h = n(576705),
    m = n(309010),
    g = n(977997),
    E = n(147036);
function b(e, t, n) {
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
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
let O = function (e, t) {
    let b = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        O = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { lockVoiceStateForResume: A = !1 } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        v = f.A.getChannel(e),
        S = g.A.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
        I = null != v ? _.A.getCheck(v.guild_id) : null;
    if (!(null != t && (0, o.V)(t)) && (null == I || I.canChat || (0, l.pC)(v))) {
        if (null != v && !S) {
            let e = (0, E.Pd)(v, g.A, p.A);
            if (e && v.isGuildStageVoice() && (0, c.xn)(v.id))
                return void (0, i.openModalLazy)(async () => {
                    let { default: e } = await n.e("21900").then(n.bind(n, 172231));
                    return (t) => e(y({ channel: v }, t));
                });
            if (e)
                return void (0, i.openModalLazy)(async () => {
                    let { default: e } = await n.e("54207").then(n.bind(n, 361698));
                    return (t) => e(t);
                });
            if (!(0, s.A)(v, h.A)) return;
        }
        b && (0, u.PX)(), (0, d.A)(T, e, O, b);
    }
    function T() {
        let n = (0, r.A)();
        a.h.dispatch({
            type: "VOICE_CHANNEL_SELECT",
            guildId: t,
            channelId: e,
            currentVoiceChannelId: m.A.getVoiceChannelId(),
            video: b,
            stream: O,
            lockVoiceStateForResume: A,
            joinVoiceId: n,
        });
    }
};

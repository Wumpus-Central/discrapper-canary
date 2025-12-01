n.d(t, { h: () => O });
var r = n(772848),
    i = n(952265),
    a = n(570140),
    o = n(387343),
    s = n(281956),
    l = n(200498),
    c = n(368442),
    u = n(672339),
    d = n(653175),
    f = n(592125),
    p = n(430824),
    _ = n(607744),
    m = n(496675),
    h = n(944486),
    g = n(979651),
    E = n(934415);
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
        { lockVoiceStateForResume: v = !1 } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        S = f.Z.getChannel(e),
        I = g.Z.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
        T = null != S ? _.Z.getCheck(S.guild_id) : null;
    if (!(null != t && (0, s.n)(t)) && (null == T || T.canChat || (0, l.jU)(S))) {
        if (null != S && !I) {
            let e = (0, E.rY)(S, g.Z, p.Z);
            if (e && S.isGuildStageVoice() && (0, c.xJ)(S.id))
                return void (0, i.ZD)(async () => {
                    let { default: e } = await n.e("46398").then(n.bind(n, 523794));
                    return (t) => e(y({ channel: S }, t));
                });
            if (e)
                return void (0, i.ZD)(async () => {
                    let { default: e } = await n.e("86465").then(n.bind(n, 997308));
                    return (t) => e(t);
                });
            if (!(0, o.Z)(S, m.Z)) return;
        }
        b && (0, u.eH)(), (0, d.Z)(A, e, O, b);
    }
    function A() {
        let n = (0, r.Z)();
        a.Z.dispatch({
            type: "VOICE_CHANNEL_SELECT",
            guildId: t,
            channelId: e,
            currentVoiceChannelId: h.Z.getVoiceChannelId(),
            video: b,
            stream: O,
            lockVoiceStateForResume: v,
            joinVoiceId: n,
        });
    }
};

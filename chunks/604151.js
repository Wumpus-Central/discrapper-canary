n.d(t, { h: () => b });
var r = n(772848),
    i = n(952265),
    a = n(570140),
    o = n(281956),
    s = n(200498),
    l = n(368442),
    c = n(672339),
    u = n(653175),
    d = n(592125),
    f = n(430824),
    _ = n(607744),
    p = n(944486),
    h = n(979651),
    m = n(934415);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
let b = function (e, t) {
    let g = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        b = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { lockVoiceStateForResume: y = !1 } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        O = d.Z.getChannel(e),
        v = h.Z.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
        I = null != O ? _.Z.getCheck(O.guild_id) : null;
    if (!(null != t && (0, o.n)(t)) && (null == I || I.canChat || (0, s.jU)(O))) {
        if (null != O && !v) {
            let e = (0, m.rY)(O, h.Z, f.Z);
            if (e && O.isGuildStageVoice() && (0, l.xJ)(O.id))
                return void (0, i.ZD)(async () => {
                    let { default: e } = await n.e("46398").then(n.bind(n, 523794));
                    return (t) => e(E({ channel: O }, t));
                });
            if (e)
                return void (0, i.ZD)(async () => {
                    let { default: e } = await n.e("86465").then(n.bind(n, 997308));
                    return (t) => e(t);
                });
        }
        g && (0, c.eH)(), (0, u.Z)(T, e, b, g);
    }
    function T() {
        let n = (0, r.Z)();
        a.Z.dispatch({
            type: "VOICE_CHANNEL_SELECT",
            guildId: t,
            channelId: e,
            currentVoiceChannelId: p.Z.getVoiceChannelId(),
            video: g,
            stream: b,
            lockVoiceStateForResume: y,
            joinVoiceId: n,
        });
    }
};

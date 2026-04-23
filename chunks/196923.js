"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(330140),
    l = n(311907),
    u = n(866323),
    c = n(933958),
    d = n(268218),
    _ = n(400492),
    f = n(312671),
    p = n(803224),
    h = n(309010),
    E = n(351906),
    m = n(503509),
    g = n(5867),
    A = n(235079);
let I = () => Promise.all([n.e("95752"), n.e("24927")]).then(n.bind(n, 587500)),
    T = (0, d.Fe)({ createPromise: I, webpackId: 587500 }),
    S = { transform: "scale(0.7)", opacity: 0 },
    y = { transform: "scale(1)", opacity: 1 },
    N = i.memo(function () {
        let e = (0, l.yK)([m.A, h.A, c.Ay], () =>
                m.A.getIncomingCalls().filter((e) => {
                    let { channel: t } = e,
                        n = h.A.getChannelId() === t.id,
                        r = null == t.guild_id && n,
                        i =
                            c.Ay.getConnectedActivityChannelId() === t.id &&
                            h.A.getVoiceChannelId() !== t.id &&
                            c.Ay.getActivityPanelMode() === g.Gd.PANEL;
                    return !r || i;
                }),
            ),
            t = (0, l.bG)([m.A], () => m.A.hasIncomingCalls()),
            n = (0, l.bG)([p.A], () => p.A.isSoundDisabled("call_ringing")),
            s = (0, l.bG)([E.A], () => E.A.disableSounds),
            d = (0, l.bG)([f.A], () => f.A.getSoundpack()),
            N = i.useRef(!1),
            v = (0, o.A)(
                () =>
                    d === A.i.CLASSIC
                        ? (0, _.Qh)(
                              500 !== a().random(1, 1e3)
                                  ? "call_ringing"
                                  : a().sample(["call_ringing_beat", "call_ringing_snow_halation"]),
                              "call_ringing",
                          )
                        : (0, _.aN)("call_ringing", d),
                [d],
            );
        return (
            i.useEffect(() => {
                I();
            }, []),
            i.useEffect(
                () => () => {
                    v.stop();
                },
                [v],
            ),
            i.useEffect(() => {
                if (s || n) {
                    N.current && (v.stop(), (N.current = !1));
                    return;
                }
                t && !N.current ? (v.loop(), (N.current = !0)) : !t && N.current && (v.stop(), (N.current = !1));
            }, [n, s, t, v]),
            (0, u.p)(e, {
                keys: (e) => e.channel?.id,
                enter: { from: S, to: y },
                leave: S,
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
            })((e, t) => (0, r.jsx)(T, { ...t, animatedStyle: e }))
        );
    });

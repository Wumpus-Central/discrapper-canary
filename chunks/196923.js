"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(330140),
    l = n(311907),
    u = n(866323),
    d = n(933958),
    c = n(268218),
    _ = n(400492),
    f = n(312671),
    E = n(803224),
    h = n(309010),
    p = n(351906),
    m = n(503509),
    g = n(5867),
    A = n(235079);
let I = () => Promise.all([n.e("85071"), n.e("95752"), n.e("24927")]).then(n.bind(n, 587500)),
    T = (0, c.Fe)({ createPromise: I, webpackId: 587500 }),
    S = { transform: "scale(0.7)", opacity: 0 },
    y = { transform: "scale(1)", opacity: 1 },
    N = i.memo(function () {
        let e = (0, l.yK)([m.A, h.A, d.Ay], () =>
                m.A.getIncomingCalls().filter((e) => {
                    let { channel: t } = e,
                        n = h.A.getChannelId() === t.id,
                        r = null == t.guild_id && n,
                        i =
                            d.Ay.getConnectedActivityChannelId() === t.id &&
                            h.A.getVoiceChannelId() !== t.id &&
                            d.Ay.getActivityPanelMode() === g.Gd.PANEL;
                    return !r || i;
                }),
            ),
            t = (0, l.bG)([m.A], () => m.A.hasIncomingCalls()),
            n = (0, l.bG)([E.A], () => E.A.isSoundDisabled("call_ringing")),
            s = (0, l.bG)([p.A], () => p.A.disableSounds),
            c = (0, l.bG)([f.A], () => f.A.getSoundpack()),
            N = i.useRef(!1),
            O = (0, o.A)(
                () =>
                    c === A.i.CLASSIC
                        ? (0, _.Qh)(
                              500 !== a().random(1, 1e3)
                                  ? "call_ringing"
                                  : a().sample(["call_ringing_beat", "call_ringing_snow_halation"]),
                              "call_ringing",
                          )
                        : (0, _.aN)("call_ringing", c),
                [c],
            );
        return (
            i.useEffect(() => {
                I();
            }, []),
            i.useEffect(
                () => () => {
                    O.stop();
                },
                [O],
            ),
            i.useEffect(() => {
                if (s || n) {
                    N.current && (O.stop(), (N.current = !1));
                    return;
                }
                t && !N.current ? (O.loop(), (N.current = !0)) : !t && N.current && (O.stop(), (N.current = !1));
            }, [n, s, t, O]),
            (0, u.p)(e, {
                keys: (e) => e.channel?.id,
                enter: { from: S, to: y },
                leave: S,
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
            })((e, t) => (0, r.jsx)(T, { ...t, animatedStyle: e }))
        );
    });

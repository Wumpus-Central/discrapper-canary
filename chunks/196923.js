"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(330140),
    l = n(311907),
    u = n(397927),
    c = n(933958),
    d = n(587500),
    _ = n(400492),
    f = n(312671),
    p = n(803224),
    h = n(309010),
    m = n(351906),
    g = n(503509),
    E = n(5867),
    A = n(235079);
let I = { transform: "scale(0.7)", opacity: 0 },
    T = { transform: "scale(1)", opacity: 1 };
function y() {
    return 500 !== s().random(1, 1e3)
        ? "call_ringing"
        : s().sample(["call_ringing_beat", "call_ringing_snow_halation"]);
}
function S() {
    let e = (0, l.yK)([g.A, h.A, c.Ay], () =>
            g.A.getIncomingCalls().filter((e) => {
                let { channel: t } = e,
                    n = h.A.getChannelId() === t.id,
                    r = null == t.guild_id && n,
                    i =
                        c.Ay.getConnectedActivityChannelId() === t.id &&
                        h.A.getVoiceChannelId() !== t.id &&
                        c.Ay.getActivityPanelMode() === E.Gd.PANEL;
                return !r || i;
            }),
        ),
        t = (0, l.bG)([g.A], () => g.A.hasIncomingCalls()),
        n = (0, l.bG)([p.A], () => p.A.isSoundDisabled("call_ringing")),
        a = (0, l.bG)([m.A], () => m.A.disableSounds),
        s = (0, l.bG)([f.A], () => f.A.getSoundpack()),
        S = i.useRef(!1),
        v = (0, o.A)(() => {
            let e = "call_ringing";
            return s === A.i.CLASSIC ? (0, _.Qh)(y(), e) : (0, _.aN)("call_ringing", s);
        }, [s]);
    return (
        i.useEffect(
            () => () => {
                v.stop();
            },
            [v],
        ),
        i.useEffect(() => {
            if (a || n) {
                S.current && (v.stop(), (S.current = !1));
                return;
            }
            t && !S.current ? (v.loop(), (S.current = !0)) : !t && S.current && (v.stop(), (S.current = !1));
        }, [n, a, t, v]),
        (0, u.pnh)(e, {
            keys: (e) => e.channel?.id,
            enter: { from: I, to: T },
            leave: I,
            config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
        })((e, t) => (0, r.jsx)(d.A, { ...t, animatedStyle: e }))
    );
}
let v = i.memo(S);

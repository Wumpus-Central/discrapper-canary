n.d(t, {
    A: () => N,
});
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(330140),
    l = n(311907),
    c = n(397927),
    u = n(933958),
    d = n(587500),
    f = n(400492),
    p = n(312671),
    _ = n(803224),
    h = n(309010),
    m = n(351906),
    g = n(503509),
    E = n(5867),
    b = n(235079);

function y(e, t, n) {
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

function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}

function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = {
        transform: "scale(0.7)",
        opacity: 0,
    },
    I = {
        transform: "scale(1)",
        opacity: 1,
    };

function T() {
    return 500 !== s().random(1, 1e3)
        ? "call_ringing"
        : s().sample(["call_ringing_beat", "call_ringing_snow_halation"]);
}

function C() {
    let e = (0, l.yK)([g.A, h.A, u.Ay], () =>
            g.A.getIncomingCalls().filter((e) => {
                let { channel: t } = e,
                    n = h.A.getChannelId() === t.id,
                    r = null == t.guild_id && n,
                    i =
                        u.Ay.getConnectedActivityChannelId() === t.id &&
                        h.A.getVoiceChannelId() !== t.id &&
                        u.Ay.getActivityPanelMode() === E.Gd.PANEL;
                return !r || i;
            }),
        ),
        t = (0, l.bG)([g.A], () => g.A.hasIncomingCalls()),
        n = (0, l.bG)([_.A], () => _.A.isSoundDisabled("call_ringing")),
        a = (0, l.bG)([m.A], () => m.A.disableSounds),
        s = (0, l.bG)([p.A], () => p.A.getSoundpack()),
        y = i.useRef(!1),
        A = (0, o.A)(() => {
            let e = "call_ringing";
            return s === b.i.CLASSIC ? (0, f.Qh)(T(), e) : (0, f.aN)("call_ringing", s);
        }, [s]);
    return (
        i.useEffect(
            () => () => {
                A.stop();
            },
            [A],
        ),
        i.useEffect(() => {
            if (a || n) {
                y.current && (A.stop(), (y.current = !1));
                return;
            }
            t && !y.current ? (A.loop(), (y.current = !0)) : !t && y.current && (A.stop(), (y.current = !1));
        }, [n, a, t, A]),
        (0, c.pnh)(e, {
            keys: (e) => {
                var t;
                return null == (t = e.channel) ? void 0 : t.id;
            },
            enter: {
                from: S,
                to: I,
            },
            leave: S,
            config: {
                mass: 1,
                tension: 500,
                friction: 18,
                clamp: !0,
            },
        })((e, t) =>
            (0, r.jsx)(
                d.A,
                v(O({}, t), {
                    animatedStyle: e,
                }),
            ),
        )
    );
}
let N = i.memo(C);

n.d(t, { Z: () => C });
var r = n(200651),
    i = n(192379),
    o = n(392711),
    a = n.n(o),
    s = n(252759),
    l = n(442837),
    c = n(481060),
    u = n(317381),
    d = n(966302),
    f = n(460181),
    _ = n(474873),
    p = n(292959),
    h = n(944486),
    m = n(246946),
    g = n(340895),
    E = n(918559),
    b = n(871465);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = {
        transform: 'scale(0.7)',
        opacity: 0
    },
    T = {
        transform: 'scale(1)',
        opacity: 1
    };
function N() {
    return 500 !== a().random(1, 1000) ? 'call_ringing' : a().sample(['call_ringing_beat', 'call_ringing_snow_halation']);
}
function A() {
    let e = (0, l.Wu)([g.Z, h.Z, u.ZP], () =>
            g.Z.getIncomingCalls().filter((e) => {
                let { channel: t } = e,
                    n = h.Z.getChannelId() === t.id,
                    r = null == t.guild_id && n,
                    i = u.ZP.getConnectedActivityChannelId() === t.id && h.Z.getVoiceChannelId() !== t.id && u.ZP.getActivityPanelMode() === E.Ez.PANEL;
                return !r || i;
            })
        ),
        t = (0, l.e7)([g.Z], () => g.Z.hasIncomingCalls()),
        n = (0, l.e7)([p.Z], () => p.Z.isSoundDisabled('call_ringing')),
        o = (0, l.e7)([m.Z], () => m.Z.disableSounds),
        a = (0, l.e7)([_.Z], () => _.Z.getSoundpack()),
        y = i.useRef(!1),
        O = (0, s.Z)(() => {
            let e = 'call_ringing';
            return a === b.YC.CLASSIC ? (0, f.tu)(N(), e) : (0, f.uk)('call_ringing', a);
        }, [a]);
    return (
        i.useEffect(
            () => () => {
                O.stop();
            },
            [O]
        ),
        i.useEffect(() => {
            if (o || n) {
                y.current && (O.stop(), (y.current = !1));
                return;
            }
            t && !y.current ? (O.loop(), (y.current = !0)) : !t && y.current && (O.stop(), (y.current = !1));
        }, [n, o, t, O]),
        (0, c.Yzy)(e, {
            keys: (e) => {
                var t;
                return null == (t = e.channel) ? void 0 : t.id;
            },
            enter: {
                from: S,
                to: T
            },
            leave: S,
            config: {
                mass: 1,
                tension: 500,
                friction: 18,
                clamp: !0
            }
        })((e, t) => (0, r.jsx)(d.Z, I(v({}, t), { animatedStyle: e })))
    );
}
let C = i.memo(A);

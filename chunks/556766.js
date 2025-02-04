n.d(t, { Z: () => S });
var i = n(200651),
    r = n(192379),
    a = n(392711),
    s = n.n(a),
    o = n(252759),
    l = n(442837),
    u = n(481060),
    c = n(317381),
    d = n(966302),
    f = n(474873),
    _ = n(292959),
    p = n(944486),
    h = n(246946),
    m = n(340895),
    g = n(557177),
    E = n(918559),
    v = n(871465);
let y = {
        transform: 'scale(0.7)',
        opacity: 0
    },
    I = {
        transform: 'scale(1)',
        opacity: 1
    };
function b() {
    return 500 !== s().random(1, 1000) ? 'call_ringing' : s().sample(['call_ringing_beat', 'call_ringing_snow_halation']);
}
function T() {
    let e = (0, l.Wu)([m.Z, p.Z, c.ZP], () =>
            m.Z.getIncomingCalls().filter((e) => {
                let { channel: t } = e,
                    n = c.ZP.getConnectedActivityChannelId() === t.id && p.Z.getVoiceChannelId() !== t.id && c.ZP.getActivityPanelMode() === E.Ez.PANEL;
                return p.Z.getChannelId() !== t.id || n;
            })
        ),
        t = (0, l.e7)([m.Z], () => m.Z.hasIncomingCalls()),
        n = (0, l.e7)([_.Z], () => _.Z.isSoundDisabled('call_ringing')),
        a = (0, l.e7)([h.Z], () => h.Z.disableSounds),
        s = (0, l.e7)([f.Z], () => f.Z.getSoundpack()),
        T = r.useRef(!1),
        S = (0, o.Z)(() => {
            let e = 'call_ringing';
            return s === v.YC.CLASSIC ? (0, g.tu)(b(), e) : (0, g.uk)('call_ringing', s);
        }, [s]);
    return (
        r.useEffect(
            () => () => {
                S.stop();
            },
            [S]
        ),
        r.useEffect(() => {
            if (a || n) {
                T.current && (S.stop(), (T.current = !1));
                return;
            }
            t && !T.current ? (S.loop(), (T.current = !0)) : !t && T.current && (S.stop(), (T.current = !1));
        }, [n, a, t, S]),
        (0, u.Yzy)(e, {
            keys: (e) => {
                var t;
                return null === (t = e.channel) || void 0 === t ? void 0 : t.id;
            },
            enter: {
                from: y,
                to: I
            },
            leave: y,
            config: {
                mass: 1,
                tension: 500,
                friction: 18,
                clamp: !0
            }
        })((e, t) =>
            (0, i.jsx)(d.Z, {
                ...t,
                animatedStyle: e
            })
        )
    );
}
let S = r.memo(T);

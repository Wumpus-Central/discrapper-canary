var i = r(200651),
    a = r(192379),
    o = r(392711),
    s = r.n(o),
    l = r(252759),
    u = r(442837),
    c = r(481060),
    d = r(317381),
    f = r(966302),
    p = r(474873),
    h = r(292959),
    _ = r(944486),
    m = r(246946),
    g = r(340895),
    E = r(557177),
    v = r(918559),
    y = r(871465);
let b = {
        transform: 'scale(0.7)',
        opacity: 0
    },
    I = {
        transform: 'scale(1)',
        opacity: 1
    };
function T() {
    return 500 !== s().random(1, 1000) ? 'call_ringing' : s().sample(['call_ringing_beat', 'call_ringing_snow_halation']);
}
function S() {
    let e = (0, u.Wu)([g.Z, _.Z, d.ZP], () =>
            g.Z.getIncomingCalls().filter((e) => {
                let { channel: n } = e,
                    r = d.ZP.getConnectedActivityChannelId() === n.id && _.Z.getVoiceChannelId() !== n.id && d.ZP.getActivityPanelMode() === v.Ez.PANEL;
                return _.Z.getChannelId() !== n.id || r;
            })
        ),
        n = (0, u.e7)([g.Z], () => g.Z.hasIncomingCalls()),
        r = (0, u.e7)([h.Z], () => h.Z.isSoundDisabled('call_ringing')),
        o = (0, u.e7)([m.Z], () => m.Z.disableSounds),
        s = (0, u.e7)([p.Z], () => p.Z.getSoundpack()),
        S = a.useRef(!1),
        A = (0, l.Z)(() => {
            let e = 'call_ringing';
            return s === y.YC.CLASSIC ? (0, E.tu)(T(), e) : (0, E.uk)('call_ringing', s);
        }, [s]);
    return (
        a.useEffect(
            () => () => {
                A.stop();
            },
            [A]
        ),
        a.useEffect(() => {
            if (o || r) {
                S.current && (A.stop(), (S.current = !1));
                return;
            }
            n && !S.current ? (A.loop(), (S.current = !0)) : !n && S.current && (A.stop(), (S.current = !1));
        }, [r, o, n, A]),
        (0, c.useTransition)(e, {
            keys: (e) => {
                var n;
                return null === (n = e.channel) || void 0 === n ? void 0 : n.id;
            },
            enter: {
                from: b,
                to: I
            },
            leave: b,
            config: {
                mass: 1,
                tension: 500,
                friction: 18,
                clamp: !0
            }
        })((e, n) =>
            (0, i.jsx)(f.Z, {
                ...n,
                animatedStyle: e
            })
        )
    );
}
n.Z = a.memo(S);

n.d(t, { Z: () => u }), n(388685);
var r = n(473749),
    i = n(442837),
    l = n(168107),
    a = n(480916),
    s = n(314897),
    o = n(471253),
    c = n(590415),
    d = n(430104);
function u(e) {
    let t = (0, i.e7)([s.default], () => s.default.getId()),
        n = (0, c.ZP)(t, e.id),
        u = n === c.xO.REQUESTED_TO_SPEAK || n === c.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [p, h] = r.useState(u);
    return (
        r.useEffect(() => {
            h(u);
        }, [u]),
        [
            p,
            function () {
                if ((0, d.u1)(e.id))
                    return void l.Z.showAgeVerificationGetStartedModal({ entryPoint: a.cU.STAGE_CHANNEL_RAISE_HAND });
                n === c.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, o.RK)(e, !0) : (0, o.Q1)(e, !p), h(!p);
            },
        ]
    );
}

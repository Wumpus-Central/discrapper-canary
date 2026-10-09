t.d(n, { A: () => d });
var i = t(582128),
    l = t(17928),
    s = t(379257),
    a = t(306537),
    r = t(280450),
    o = t(849736),
    c = t(105530),
    u = t(418208);
function d(e) {
    let n = (0, l.bG)([r.default], () => r.default.getId()),
        t = (0, c.Ay)(n, e.id),
        d = t === c.zF.REQUESTED_TO_SPEAK || t === c.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [A, h] = i.useState(d);
    return (
        i.useEffect(() => {
            h(d);
        }, [d]),
        [
            A,
            function () {
                (0, u.Cf)(e.id)
                    ? s.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.STAGE_CHANNEL_RAISE_HAND })
                    : (t === c.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, o.e7)(e, !0) : (0, o.J7)(e, !A),
                      h(!A));
            },
        ]
    );
}

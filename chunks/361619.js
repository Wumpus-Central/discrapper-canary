n.d(t, { A: () => d }), n(896048);
var r = n(64700),
    l = n(311907),
    i = n(935649),
    a = n(847599),
    s = n(961350),
    o = n(849736),
    c = n(105530),
    u = n(418208);
function d(e) {
    let t = (0, l.bG)([s.default], () => s.default.getId()),
        n = (0, c.Ay)(t, e.id),
        d = n === c.zF.REQUESTED_TO_SPEAK || n === c.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [f, p] = r.useState(d);
    return (
        r.useEffect(() => {
            p(d);
        }, [d]),
        [
            f,
            function () {
                (0, u.Cf)(e.id)
                    ? i.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.STAGE_CHANNEL_RAISE_HAND })
                    : (n === c.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, o.e7)(e, !0) : (0, o.J7)(e, !f),
                      p(!f));
            },
        ]
    );
}

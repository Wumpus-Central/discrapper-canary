"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    s = n(311907),
    l = n(935649),
    r = n(847599),
    a = n(961350),
    o = n(849736),
    c = n(105530),
    d = n(418208);
function u(e) {
    let t = (0, s.bG)([a.default], () => a.default.getId()),
        n = (0, c.Ay)(t, e.id),
        u = n === c.zF.REQUESTED_TO_SPEAK || n === c.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [h, A] = i.useState(u);
    return (
        i.useEffect(() => {
            A(u);
        }, [u]),
        [
            h,
            function () {
                (0, d.Cf)(e.id)
                    ? l.A.showAgeVerificationGetStartedModal({ entryPoint: r.q1.STAGE_CHANNEL_RAISE_HAND })
                    : (n === c.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, o.e7)(e, !0) : (0, o.J7)(e, !h),
                      A(!h));
            },
        ]
    );
}

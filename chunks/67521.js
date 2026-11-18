var a = A(477900);
A(582128);
var E = A(192308),
    _ = A(73153),
    i = A(171576),
    n = A(462924),
    s = A(895595),
    l = A(308645),
    d = A(393033);
A(239093);
var o = A(40449);
function T() {
    (r.success(), r.start_verification_check());
}
let r = {
    open(e, t) {
        (0, E.mM)(
            async () => {
                _.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                let { default: t } = await Promise.all([A.e(337375), A.e(512755), A.e(909018)]).then(A.bind(A, 466702));
                return (A) => (0, a.jsx)(t, { classificationId: e, ...A });
            },
            { onCloseCallback: t },
        );
    },
    openV2(e, t) {
        let r = Math.floor(Date.now() / 1e3);
        (0, E.mM)(
            async () => {
                if (
                    (_.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" }),
                    (0, d.qn)() && (0, n.d)(i.q1.AUTOMATED_UNDERAGE_APPEALS))
                ) {
                    if (await (0, s.L)(i.q1.AUTOMATED_UNDERAGE_APPEALS)) {
                        let { default: e } = await Promise.all([A.e(585503), A.e(409609)]).then(A.bind(A, 475376));
                        return (t) => (0, a.jsx)(e, { ...t });
                    }
                    let { default: e } = await Promise.all([
                        A.e(32039),
                        A.e(637038),
                        A.e(774542),
                        A.e(87109),
                        A.e(281610),
                        A.e(748582),
                        A.e(107186),
                        A.e(252175),
                        A.e(65436),
                    ]).then(A.bind(A, 12247));
                    return (t) =>
                        (0, a.jsx)(e, {
                            entryPoint: i.q1.AUTOMATED_UNDERAGE_APPEALS,
                            onComplete: () => {
                                ((0, l.hn)(),
                                    _.h.dispatch({ type: "SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED" }),
                                    _.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }),
                                    setTimeout(() => (0, l.vN)(r), 2e3));
                            },
                            ...t,
                        });
                }
                let { default: t } = await Promise.all([
                    A.e(760662),
                    A.e(384794),
                    A.e(87109),
                    A.e(281610),
                    A.e(233966),
                ]).then(A.bind(A, 962877));
                return (A) =>
                    (0, a.jsx)(t, {
                        classificationId: e,
                        entryPoint: i.q1.AUTOMATED_UNDERAGE_APPEALS,
                        onComplete: T,
                        ...A,
                    });
            },
            { modalKey: o.NC, onCloseCallback: t },
        );
    },
    close() {
        _.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
    },
    success() {
        _.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
    },
    start_verification_check() {
        (_.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }), setTimeout(() => (0, l.d)(), 2e3));
    },
};
A.d(t, {}, { A: r });

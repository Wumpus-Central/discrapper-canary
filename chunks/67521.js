var E = t(477900);
t(582128);
var _ = t(192308),
    a = t(73153),
    i = t(171576),
    s = t(462924),
    T = t(895595),
    n = t(308645),
    c = t(393033);
t(239093);
var l = t(40449);
function P() {
    (o.success(), o.start_verification_check());
}
let o = {
    open(e, A) {
        (0, _.mM)(
            async () => {
                a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                let { default: A } = await Promise.all([t.e(337375), t.e(512755), t.e(909018)]).then(t.bind(t, 466702));
                return (t) => (0, E.jsx)(A, { classificationId: e, ...t });
            },
            { onCloseCallback: A },
        );
    },
    openV2(e, A) {
        let o = Math.floor(Date.now() / 1e3);
        (0, _.mM)(
            async () => {
                if (
                    (a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" }),
                    (0, c.qn)() && (0, s.d)(i.q1.AUTOMATED_UNDERAGE_APPEALS))
                ) {
                    if (await (0, T.L)(i.q1.AUTOMATED_UNDERAGE_APPEALS)) {
                        let { default: e } = await Promise.all([t.e(585503), t.e(409609)]).then(t.bind(t, 475376));
                        return (A) => (0, E.jsx)(e, { ...A });
                    }
                    let { default: e } = await Promise.all([
                        t.e(32039),
                        t.e(637038),
                        t.e(774542),
                        t.e(87109),
                        t.e(281610),
                        t.e(748582),
                        t.e(107186),
                        t.e(252175),
                        t.e(65436),
                    ]).then(t.bind(t, 12247));
                    return (A) =>
                        (0, E.jsx)(e, {
                            entryPoint: i.q1.AUTOMATED_UNDERAGE_APPEALS,
                            onComplete: () => {
                                ((0, n.hn)(),
                                    a.h.dispatch({ type: "SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED" }),
                                    a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }),
                                    setTimeout(() => (0, n.vN)(o), 2e3));
                            },
                            ...A,
                        });
                }
                let { default: A } = await Promise.all([
                    t.e(760662),
                    t.e(87109),
                    t.e(384794),
                    t.e(281610),
                    t.e(233966),
                ]).then(t.bind(t, 962877));
                return (t) =>
                    (0, E.jsx)(A, {
                        classificationId: e,
                        entryPoint: i.q1.AUTOMATED_UNDERAGE_APPEALS,
                        onComplete: P,
                        ...t,
                    });
            },
            { modalKey: l.NC, onCloseCallback: A },
        );
    },
    close() {
        a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
    },
    success() {
        a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
    },
    start_verification_check() {
        (a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }), setTimeout(() => (0, n.d)(), 2e3));
    },
};
t.d(A, {}, { A: o });

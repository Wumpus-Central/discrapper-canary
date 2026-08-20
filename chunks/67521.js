t.d(A, { A: () => p });
var _ = t(477900);
t(582128);
var a = t(192308),
    s = t(228366),
    E = t(847599),
    i = t(308645),
    c = t(239093);
function n() {
    o.success(), o.start_verification_check();
}
let o = {
        open(e, A) {
            (0, a.openModalLazy)(
                async () => {
                    s.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                    let { default: A } = await Promise.all([
                        t.e("337375"),
                        t.e("797209"),
                        t.e("600607"),
                        t.e("512755"),
                        t.e("909018"),
                    ]).then(t.bind(t, 466702));
                    return (t) => (0, _.jsx)(A, { classificationId: e, ...t });
                },
                { onCloseCallback: A },
            );
        },
        openV2(e, A) {
            (0, a.openModalLazy)(
                async () => {
                    s.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                    let { default: A } = await Promise.all([
                        t.e("797209"),
                        t.e("600607"),
                        t.e("384794"),
                        t.e("699487"),
                    ]).then(t.bind(t, 595746));
                    return (t) =>
                        (0, _.jsx)(A, {
                            classificationId: e,
                            entryPoint: E.q1.AUTOMATED_UNDERAGE_APPEALS,
                            onComplete: n,
                            ...t,
                        });
                },
                { onCloseCallback: A },
            );
        },
        close() {
            s.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
        },
        success() {
            s.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
        },
        start_verification_check() {
            s.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }),
                setTimeout(() => (0, i.d)(), c.wQ);
        },
    },
    p = o;

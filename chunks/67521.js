A.d(t, { A: () => P });
var _ = A(477900);
A(582128);
var E = A(192308),
    a = A(228366),
    i = A(847599),
    s = A(462924),
    c = A(308645),
    n = A(393033),
    o = A(239093);
function T() {
    p.success(), p.start_verification_check();
}
function l() {
    a.h.dispatch({ type: "SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED" }), p.start_verification_check();
}
let p = {
        open(e, t) {
            (0, E.openModalLazy)(
                async () => {
                    a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                    let { default: t } = await Promise.all([A.e("337375"), A.e("512755"), A.e("909018")]).then(
                        A.bind(A, 466702),
                    );
                    return (A) => (0, _.jsx)(t, { classificationId: e, ...A });
                },
                { onCloseCallback: t },
            );
        },
        openV2(e, t) {
            (0, E.openModalLazy)(
                async () => {
                    if (
                        (a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" }),
                        (0, n.qn)() && (0, s.d)(i.q1.AUTOMATED_UNDERAGE_APPEALS))
                    ) {
                        let { default: e } = await Promise.all([A.e("32039"), A.e("985505")]).then(A.bind(A, 630008));
                        return (t) =>
                            (0, _.jsx)(e, { entryPoint: i.q1.AUTOMATED_UNDERAGE_APPEALS, onComplete: l, ...t });
                    }
                    let { default: t } = await Promise.all([A.e("262546"), A.e("384794"), A.e("699487")]).then(
                        A.bind(A, 595746),
                    );
                    return (A) =>
                        (0, _.jsx)(t, {
                            classificationId: e,
                            entryPoint: i.q1.AUTOMATED_UNDERAGE_APPEALS,
                            onComplete: T,
                            ...A,
                        });
                },
                { onCloseCallback: t },
            );
        },
        close() {
            a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
        },
        success() {
            a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
        },
        start_verification_check() {
            a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }),
                setTimeout(() => (0, c.d)(), o.wQ);
        },
    },
    P = p;

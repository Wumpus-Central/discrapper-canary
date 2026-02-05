I.d(_, { A: () => P });
var A = I(627968);
I(64700);
var S = I(397927),
    T = I(73153),
    C = I(847599),
    O = I(308645),
    N = I(239093);
function R() {
    e.success(), e.start_verification_check();
}
let e = {
        open(E, _) {
            (0, S.mMO)(
                async () => {
                    T.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                    let { default: _ } = await I.e("9018").then(I.bind(I, 244321));
                    return (I) => (0, A.jsx)(_, { classificationId: E, ...I });
                },
                { onCloseCallback: _ },
            );
        },
        openV2(E, _) {
            (0, S.mMO)(
                async () => {
                    T.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                    let { default: _ } = await I.e("18128").then(I.bind(I, 767379));
                    return (I) =>
                        (0, A.jsx)(_, {
                            classificationId: E,
                            entryPoint: C.q1.AUTOMATED_UNDERAGE_APPEALS,
                            onComplete: R,
                            ...I,
                        });
                },
                { onCloseCallback: _ },
            );
        },
        close() {
            T.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
        },
        success() {
            T.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
        },
        start_verification_check() {
            T.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }),
                setTimeout(() => (0, O.d)(), N.wQ);
        },
    },
    P = e;

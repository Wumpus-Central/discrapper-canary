t.d(A, { A: () => P });
var _ = t(477900);
t(582128);
var E = t(192308),
    a = t(228366),
    i = t(847599),
    s = t(462924),
    T = t(308645),
    n = t(393033),
    c = t(239093);
function o() {
    l.success(), l.start_verification_check();
}
let l = {
        open(e, A) {
            (0, E.openModalLazy)(
                async () => {
                    a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                    let { default: A } = await Promise.all([t.e("337375"), t.e("512755"), t.e("909018")]).then(
                        t.bind(t, 466702),
                    );
                    return (t) => (0, _.jsx)(A, { classificationId: e, ...t });
                },
                { onCloseCallback: A },
            );
        },
        openV2(e, A) {
            let l = Math.floor(Date.now() / 1e3);
            (0, E.openModalLazy)(
                async () => {
                    if (
                        (a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" }),
                        (0, n.qn)() && (0, s.d)(i.q1.AUTOMATED_UNDERAGE_APPEALS))
                    ) {
                        let { default: e } = await Promise.all([t.e("32039"), t.e("985505")]).then(t.bind(t, 630008));
                        return (A) =>
                            (0, _.jsx)(e, {
                                entryPoint: i.q1.AUTOMATED_UNDERAGE_APPEALS,
                                onComplete: () => {
                                    (0, T.hn)(),
                                        a.h.dispatch({ type: "SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED" }),
                                        a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }),
                                        setTimeout(() => (0, T.vN)(l), c.wQ);
                                },
                                ...A,
                            });
                    }
                    let { default: A } = await Promise.all([t.e("262546"), t.e("384794"), t.e("699487")]).then(
                        t.bind(t, 595746),
                    );
                    return (t) =>
                        (0, _.jsx)(A, {
                            classificationId: e,
                            entryPoint: i.q1.AUTOMATED_UNDERAGE_APPEALS,
                            onComplete: o,
                            ...t,
                        });
                },
                { onCloseCallback: A },
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
                setTimeout(() => (0, T.d)(), c.wQ);
        },
    },
    P = l;

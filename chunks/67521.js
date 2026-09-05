t.d(A, { A: () => d });
var E = t(477900);
t(582128);
var _ = t(192308),
    a = t(228366),
    i = t(847599),
    s = t(462924),
    n = t(895595),
    T = t(308645),
    o = t(393033),
    l = t(239093),
    c = t(40449);
function P() {
    U.success(), U.start_verification_check();
}
let U = {
        open(e, A) {
            (0, _.openModalLazy)(
                async () => {
                    a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                    let { default: A } = await Promise.all([t.e("337375"), t.e("512755"), t.e("909018")]).then(
                        t.bind(t, 466702),
                    );
                    return (t) => (0, E.jsx)(A, { classificationId: e, ...t });
                },
                { onCloseCallback: A },
            );
        },
        openV2(e, A) {
            let U = Math.floor(Date.now() / 1e3);
            (0, _.openModalLazy)(
                async () => {
                    if (
                        (a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" }),
                        (0, o.qn)() && (0, s.d)(i.q1.AUTOMATED_UNDERAGE_APPEALS))
                    ) {
                        if (await (0, n.L)(i.q1.AUTOMATED_UNDERAGE_APPEALS)) {
                            let { default: e } = await Promise.all([t.e("164776"), t.e("409609")]).then(
                                t.bind(t, 475376),
                            );
                            return (A) => (0, E.jsx)(e, { ...A });
                        }
                        let { default: e } = await Promise.all([t.e("32039"), t.e("930375")]).then(t.bind(t, 188602));
                        return (A) =>
                            (0, E.jsx)(e, {
                                entryPoint: i.q1.AUTOMATED_UNDERAGE_APPEALS,
                                onComplete: () => {
                                    (0, T.hn)(),
                                        a.h.dispatch({ type: "SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED" }),
                                        a.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }),
                                        setTimeout(() => (0, T.vN)(U), l.wQ);
                                },
                                ...A,
                            });
                    }
                    let { default: A } = await Promise.all([t.e("262546"), t.e("384794"), t.e("699487")]).then(
                        t.bind(t, 595746),
                    );
                    return (t) =>
                        (0, E.jsx)(A, {
                            classificationId: e,
                            entryPoint: i.q1.AUTOMATED_UNDERAGE_APPEALS,
                            onComplete: P,
                            ...t,
                        });
                },
                { modalKey: c.NC, onCloseCallback: A },
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
                setTimeout(() => (0, T.d)(), l.wQ);
        },
    },
    d = U;

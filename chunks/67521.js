i.d(t, { A: () => m });
var n = i(627968);
i(64700);
var a = i(192308),
    l = i(73153),
    s = i(847599),
    o = i(308645),
    r = i(239093);
function d() {
    c.success(), c.start_verification_check();
}
let c = {
        open(e, t) {
            (0, a.openModalLazy)(
                async () => {
                    l.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                    let { default: t } = await i.e("9018").then(i.bind(i, 244321));
                    return (i) => (0, n.jsx)(t, { classificationId: e, ...i });
                },
                { onCloseCallback: t },
            );
        },
        openV2(e, t) {
            (0, a.openModalLazy)(
                async () => {
                    l.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                    let { default: t } = await i.e("95747").then(i.bind(i, 767379));
                    return (i) =>
                        (0, n.jsx)(t, {
                            classificationId: e,
                            entryPoint: s.q1.AUTOMATED_UNDERAGE_APPEALS,
                            onComplete: d,
                            ...i,
                        });
                },
                { onCloseCallback: t },
            );
        },
        close() {
            l.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
        },
        success() {
            l.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
        },
        start_verification_check() {
            l.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" }),
                setTimeout(() => (0, o.d)(), r.wQ);
        },
    },
    m = c;

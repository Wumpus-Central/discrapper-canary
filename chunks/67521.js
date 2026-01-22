n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(73153),
    r = n(847599),
    o = n(308645),
    s = n(239093);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function d() {
    u.success(), u.start_verification_check();
}
let u = {
        open(e, t) {
            (0, a.mMO)(
                async () => {
                    l.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                    let { default: t } = await n.e("9018").then(n.bind(n, 244321));
                    return (n) => (0, i.jsx)(t, c({ classificationId: e }, n));
                },
                { onCloseCallback: t },
            );
        },
        openV2(e, t) {
            (0, a.mMO)(
                async () => {
                    l.h.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
                    let { default: t } = await n.e("18128").then(n.bind(n, 767379));
                    return (n) =>
                        (0, i.jsx)(
                            t,
                            c(
                                {
                                    classificationId: e,
                                    entryPoint: r.q1.AUTOMATED_UNDERAGE_APPEALS,
                                    onComplete: d,
                                },
                                n,
                            ),
                        );
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
                setTimeout(() => (0, o.d)(), s.wQ);
        },
    },
    p = u;

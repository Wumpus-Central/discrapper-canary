let i, a;
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var s = n(192308),
    l = n(228366);
n(323082), n(166403);
var o = n(652215);
let d = null;
function c(e) {
    null != i && e ? i() : null != a && a(), (i = null), (a = null);
}
let _ = {
    init() {
        l.h.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
            let t;
            c(!1),
                (d = e.context),
                (i = e.resolve),
                (a = e.reject),
                o.QCW === e.context &&
                    ((t = !1),
                    (0, s.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("39868"),
                                n.e("12206"),
                                n.e("9998"),
                                n.e("77821"),
                            ]).then(n.bind(n, 633772));
                            return (n) => {
                                let { onClose: i, ...a } = n;
                                return (0, r.jsx)(e, {
                                    ...a,
                                    onClose: (e) => {
                                        (t = e), i();
                                    },
                                });
                            };
                        },
                        {
                            onCloseCallback: () => {
                                var e;
                                (e = t), l.h.dispatch({ type: "PREMIUM_REQUIRED_MODAL_CLOSE", shouldContinue: e });
                            },
                        },
                    ));
        }),
            l.h.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", (e) => {
                let { shouldContinue: t } = e;
                (d = null), c(t);
            }),
            l.h.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
                let { locked: t } = e;
                t && null != d && ((d = null), c(!1));
            });
    },
};

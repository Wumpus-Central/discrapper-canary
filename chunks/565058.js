let i, l;
n.d(t, { A: () => u });
var s = n(627968);
n(64700);
var r = n(192308),
    a = n(228366);
n(323082), n(166403);
var o = n(652215);
let d = null;
function c(e) {
    null != i && e ? i() : null != l && l(), (i = null), (l = null);
}
let u = {
    init() {
        a.h.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
            let t;
            c(!1),
                (d = e.context),
                (i = e.resolve),
                (l = e.reject),
                o.QCW === e.context &&
                    ((t = !1),
                    (0, r.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("12206"), n.e("24806"), n.e("77821")]).then(
                                n.bind(n, 633772),
                            );
                            return (n) => {
                                let { onClose: i, ...l } = n;
                                return (0, s.jsx)(e, {
                                    ...l,
                                    onClose: (e) => {
                                        (t = e), i();
                                    },
                                });
                            };
                        },
                        {
                            onCloseCallback: () => {
                                var e;
                                (e = t), a.h.dispatch({ type: "PREMIUM_REQUIRED_MODAL_CLOSE", shouldContinue: e });
                            },
                        },
                    ));
        }),
            a.h.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", (e) => {
                let { shouldContinue: t } = e;
                (d = null), c(t);
            }),
            a.h.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
                let { locked: t } = e;
                t && null != d && ((d = null), c(!1));
            });
    },
};

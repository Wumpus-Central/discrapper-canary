let l, i;
n.d(t, { A: () => c });
var s = n(627968);
n(64700);
var r = n(192308),
    a = n(228366);
n(323082), n(166403);
var o = n(652215);
let u = null;
function d(e) {
    null != l && e ? l() : null != i && i(), (l = null), (i = null);
}
let c = {
    init() {
        a.h.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
            let t;
            d(!1),
                (u = e.context),
                (l = e.resolve),
                (i = e.reject),
                o.QCW === e.context &&
                    ((t = !1),
                    (0, r.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("39868"),
                                n.e("12206"),
                                n.e("9998"),
                                n.e("77821"),
                            ]).then(n.bind(n, 633772));
                            return (n) => {
                                let { onClose: l, ...i } = n;
                                return (0, s.jsx)(e, {
                                    ...i,
                                    onClose: (e) => {
                                        (t = e), l();
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
                (u = null), d(t);
            }),
            a.h.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
                let { locked: t } = e;
                t && null != u && ((u = null), d(!1));
            });
    },
};

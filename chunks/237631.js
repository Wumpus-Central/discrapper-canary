let i, l;
n.d(t, { A: () => h });
var s = n(627968);
n(64700);
var a = n(192308),
    r = n(73153),
    o = n(33559),
    d = n(652215);
let c = null;
function u(e) {
    null != i && e ? i() : null != l && l(), (i = null), (l = null);
}
let h = {
    init() {
        r.h.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
            let t;
            u(!1),
                (c = e.context),
                (i = e.resolve),
                (l = e.reject),
                d.QCW === e.context &&
                    ((t = !1),
                    (0, a.openModalLazy)(
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
                                (0, o.O)(t);
                            },
                        },
                    ));
        }),
            r.h.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", (e) => {
                let { shouldContinue: t } = e;
                (c = null), u(t);
            }),
            r.h.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
                let { locked: t } = e;
                t && null != c && ((c = null), u(!1));
            });
    },
};

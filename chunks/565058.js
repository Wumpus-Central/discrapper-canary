"use strict";
let i, r;
n.d(t, { A: () => d });
var s = n(627968);
n(64700);
var a = n(192308),
    o = n(228366);
n(753390), n(166403);
var l = n(652215);
let u = null;
function c(e) {
    null != i && e ? i() : null != r && r(), (i = null), (r = null);
}
let d = {
    init() {
        o.h.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
            let t;
            c(!1),
                (u = e.context),
                (i = e.resolve),
                (r = e.reject),
                l.QCW === e.context &&
                    ((t = !1),
                    (0, a.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("17487"),
                                n.e("12206"),
                                n.e("9998"),
                                n.e("77821"),
                            ]).then(n.bind(n, 633772));
                            return (n) => {
                                let { onClose: i, ...r } = n;
                                return (0, s.jsx)(e, {
                                    ...r,
                                    onClose: (e) => {
                                        (t = e), i();
                                    },
                                });
                            };
                        },
                        {
                            onCloseCallback: () => {
                                var e;
                                (e = t), o.h.dispatch({ type: "PREMIUM_REQUIRED_MODAL_CLOSE", shouldContinue: e });
                            },
                        },
                    ));
        }),
            o.h.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", (e) => {
                let { shouldContinue: t } = e;
                (u = null), c(t);
            }),
            o.h.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
                let { locked: t } = e;
                t && null != u && ((u = null), c(!1));
            });
    },
};

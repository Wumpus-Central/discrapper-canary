"use strict";
let i, r;
n.d(t, { A: () => u });
var a = n(477900);
n(582128);
var s = n(192308),
    l = n(228366);
n(277984), n(166403);
var o = n(652215);
let d = null;
function c(e) {
    null != i && e ? i() : null != r && r(), (i = null), (r = null);
}
let u = {
    init() {
        l.h.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
            let t;
            c(!1),
                (d = e.context),
                (i = e.resolve),
                (r = e.reject),
                o.QCW === e.context &&
                    ((t = !1),
                    (0, s.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("613655"),
                                n.e("112206"),
                                n.e("709998"),
                                n.e("577821"),
                            ]).then(n.bind(n, 633772));
                            return (n) => {
                                let { onClose: i, ...r } = n;
                                return (0, a.jsx)(e, {
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

"use strict";
let i, s;
n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var r = n(397927),
    a = n(73153),
    o = n(255940),
    c = n(652215);
let d = null;
function u(e) {
    null != i && e ? i() : null != s && s(), (i = null), (s = null);
}
let h = {
    init() {
        a.h.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
            let t;
            u(!1),
                (d = e.context),
                (i = e.resolve),
                (s = e.reject),
                c.QCW === e.context &&
                    ((t = !1),
                    (0, r.mMO)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("12206"), n.e("24806"), n.e("48403")]).then(
                                n.bind(n, 183742),
                            );
                            return (n) => {
                                let { onClose: i, ...s } = n;
                                return (0, l.jsx)(e, {
                                    ...s,
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
            a.h.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", (e) => {
                let { shouldContinue: t } = e;
                (d = null), u(t);
            }),
            a.h.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
                let { locked: t } = e;
                t && null != d && ((d = null), u(!1));
            });
    },
};

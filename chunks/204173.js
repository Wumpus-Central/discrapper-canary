"use strict";
n.d(t, { i: () => d });
var i = n(627968),
    s = n(110259),
    r = n(192308),
    l = n(17372),
    a = n(928658),
    o = n(369053),
    c = n(985018);
function d(e, t) {
    let d = !1,
        u = () => {
            d || t?.();
        },
        _ = (_) => {
            (d = !0),
                setTimeout(() => {
                    d = !1;
                }, 0);
            let h = async () => {
                    await (0, o.TP)(e, _);
                },
                m = async (t) => await (0, o.G_)(e, _, t),
                p = (n) => {
                    (d = !0),
                        setTimeout(() => {
                            d = !1;
                        }, 0);
                    let i = n?.token;
                    e === l.tY.MESSAGE
                        ? (0, a.bM)(i, t)
                        : e === l.tY.USER
                          ? (0, a.nQ)(i, t)
                          : e === l.tY.GUILD
                            ? (0, a.V3)(i, t)
                            : e === l.tY.MEDIA_TAKEDOWN && (0, a._Y)(i, t);
                };
            h(),
                (0, r.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("19840").then(n.bind(n, 79779));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                onFormSubmit: m,
                                onResend: h,
                                onSuccess: p,
                                headerText: c.intl.string(c.t.H3Q7U8),
                                confirmButtonText: c.intl.string(c.t["13ofGu"]),
                                impression: { impressionName: s.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                            });
                    },
                    { onCloseCallback: u, dismissable: !1 },
                );
        };
    return () => {
        (0, r.closeAllModals)(),
            (0, r.openModalLazy)(
                async () => {
                    let { default: t } = await n.e("29232").then(n.bind(n, 180275));
                    return (n) =>
                        (0, i.jsx)(t, {
                            ...n,
                            onSuccess: _,
                            headerText: c.intl.string(c.t.ZLRYGU),
                            confirmButtonText: c.intl.string(c.t.PDTjLN),
                            subtitle: e === l.tY.MEDIA_TAKEDOWN ? c.intl.string(c.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: u, dismissable: !1 },
            );
    };
}

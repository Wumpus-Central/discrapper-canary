i.d(t, { default: () => s, R: () => c });
var n = i(73153),
    d = i(998979),
    h = i(276983),
    l = i(947980),
    a = i(661943),
    r = i(477900);
i(582128);
var u = i(192308);
function o(e) {
    let t = e.application_id;
    return (e.overlay_widget?.device_permissions ?? []).filter(
        (e) => (0, h.de)(e) && "granted" !== d.A.getDecision(t, e),
    );
}
async function s(e) {
    let { modalContextKey: t, position: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (
        !(await (function (e) {
            let { project: t, modalContextKey: n } = e,
                d = !1;
            return new Promise((e) => {
                !(async function () {
                    try {
                        await (0, u.mM)(
                            async () => {
                                let { default: e } = await Promise.all([i.e(984955), i.e(649703)]).then(
                                    i.bind(i, 729882),
                                );
                                return (i) =>
                                    (0, r.jsx)(e, {
                                        ...i,
                                        project: t,
                                        onDecide: (e) => {
                                            d = e;
                                        },
                                    });
                            },
                            { contextKey: n, onCloseCallback: () => e(d) },
                        );
                    } catch {
                        e(!1);
                    }
                })();
            });
        })({ project: e, modalContextKey: t }))
    )
        return !1;
    let h = o(e);
    if (h.length > 0) {
        if (!0 !== (await (0, l.A)({ appName: e.name, iframeId: null, modalContextKey: t, permissions: h }))) return !1;
        n.h.dispatch({
            type: "CONJURE_DEVICE_PERMISSIONS_DECIDE",
            applicationId: e.application_id,
            permissions: h,
            allowed: !0,
        });
    }
    return ((0, a.$x)(e, d), !0);
}
function c(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = e.application_id;
    t && o(e).length > 0 ? s(e, i) : (0, a.ht)(n, !t);
}

"use strict";
n.d(t, { DJ: () => d, uf: () => l });
var r = n(562465),
    i = n(73153),
    s = n(393033),
    a = n(961350),
    o = n(652215);
async function l(e) {
    let { method: t, classificationId: n } = e;
    return (0, s.qn)() ? await c({ classificationId: n, method: t }) : await u(t);
}
async function u(e) {
    return (await r.Bo.post({ url: o.Rsh.VERIFY_AGE, body: { method: e }, rejectWithError: !0 })).body;
}
async function c(e) {
    let { classificationId: t, method: n } = e,
        i = a.default.getSuspendedUserToken();
    return (
        await r.Bo.post({
            url: o.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
            body: { token: i, from_classification_id: t, method: n },
            rejectWithError: !0,
        })
    ).body;
}
async function d() {
    let e, t;
    return (
        i.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" }),
        (e = (0, s.qn)()
            ? ((t = a.default.getSuspendedUserToken()),
              r.Bo.post({
                  url: o.Rsh.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS,
                  rejectWithError: !0,
                  body: { token: t },
              }))
            : r.Bo.get({ url: o.Rsh.AGE_VERIFICATION_METHODS, rejectWithError: !0 })),
        await e
            ?.then((e) => {
                i.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: e.body.methods });
            })
            .catch(() => {
                i.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
            })
    );
}

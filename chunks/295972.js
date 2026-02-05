"use strict";
n.d(t, { DJ: () => d, uf: () => l });
var r = n(562465),
    i = n(73153),
    a = n(393033),
    s = n(961350),
    o = n(652215);
async function l(e) {
    let { method: t, classificationId: n } = e;
    return (0, a.qn)() ? await c({ classificationId: n, method: t }) : await u(t);
}
async function u(e) {
    return (await r.Bo.post({ url: o.Rsh.VERIFY_AGE, body: { method: e }, rejectWithError: !0 })).body;
}
async function c(e) {
    let { classificationId: t, method: n } = e,
        i = s.default.getSuspendedUserToken();
    return (
        await r.Bo.post({
            url: o.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
            body: { token: i, from_classification_id: t, method: n },
            rejectWithError: !0,
        })
    ).body;
}
async function d() {
    let e;
    return (
        i.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" }),
        (e = (0, a.qn)() ? f() : _()),
        await e
            ?.then((e) => {
                i.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: e.body.methods });
            })
            .catch(() => {
                i.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
            })
    );
}
function _() {
    return r.Bo.get({ url: o.Rsh.AGE_VERIFICATION_METHODS, rejectWithError: !0 });
}
function f() {
    let e = s.default.getSuspendedUserToken();
    return r.Bo.post({
        url: o.Rsh.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS,
        rejectWithError: !0,
        body: { token: e },
    });
}

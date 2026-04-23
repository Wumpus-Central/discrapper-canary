"use strict";
n.d(t, { DJ: () => u, uf: () => l });
var i = n(636537),
    r = n(228366),
    s = n(393033),
    a = n(495544),
    o = n(652215);
async function l(e) {
    let { method: t, classificationId: n } = e;
    return (0, s.qn)() ? await _({ classificationId: n, method: t }) : await d(t);
}
async function d(e) {
    return (await i.Bo.post({ url: o.Rsh.VERIFY_AGE, body: { method: e }, rejectWithError: !0 })).body;
}
async function _(e) {
    let { classificationId: t, method: n } = e,
        r = a.default.getSuspendedUserToken();
    return (
        await i.Bo.post({
            url: o.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
            body: { token: r, from_classification_id: t, method: n },
            rejectWithError: !0,
        })
    ).body;
}
async function u() {
    let e, t;
    return (
        r.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" }),
        (e = (0, s.qn)()
            ? ((t = a.default.getSuspendedUserToken()),
              i.Bo.post({
                  url: o.Rsh.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS,
                  rejectWithError: !0,
                  body: { token: t },
              }))
            : i.Bo.get({ url: o.Rsh.AGE_VERIFICATION_METHODS, rejectWithError: !0 })),
        await e
            ?.then((e) => {
                r.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: e.body.methods });
            })
            .catch(() => {
                r.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
            })
    );
}

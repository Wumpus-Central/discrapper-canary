"use strict";
n.d(t, { DJ: () => E, Zo: () => u, eb: () => _, uf: () => o });
var i = n(636537),
    r = n(228366),
    a = n(393033),
    s = n(280450),
    l = n(652215);
async function o(e) {
    let { method: t, classificationId: n, vendor: i } = e;
    return (0, a.qn)() ? await c({ classificationId: n, method: t }) : await d(t, i);
}
async function d(e, t) {
    return (await i.Bo.post({ url: l.Rsh.VERIFY_AGE, body: { method: e, vendor: t }, rejectWithError: !0 })).body;
}
async function c(e) {
    let { classificationId: t, method: n } = e,
        r = s.default.getSuspendedUserToken();
    return (
        await i.Bo.post({
            url: l.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
            body: { token: r, from_classification_id: t, method: n },
            rejectWithError: !0,
        })
    ).body;
}
async function u(e) {
    await i.Bo.post({ url: l.Rsh.REGISTER_INCODE_INTERVIEW, body: { interview_id: e }, rejectWithError: !0 });
}
async function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (
        await i.Bo.post({
            url: l.Rsh.CREATE_INCODE_SESSION,
            body: null != e.previousInterviewId ? { previous_interview_id: e.previousInterviewId } : void 0,
            rejectWithError: !0,
        })
    ).body;
}
async function E() {
    let e, t;
    return (
        r.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" }),
        (e = (0, a.qn)()
            ? ((t = s.default.getSuspendedUserToken()),
              i.Bo.post({
                  url: l.Rsh.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS,
                  rejectWithError: !0,
                  body: { token: t },
              }))
            : i.Bo.get({ url: l.Rsh.AGE_VERIFICATION_METHODS, rejectWithError: !0 })),
        await e
            ?.then((e) => {
                r.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: e.body.methods });
            })
            .catch(() => {
                r.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
            })
    );
}

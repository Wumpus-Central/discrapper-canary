"use strict";
n.d(t, { D0: () => c, DJ: () => h, Zo: () => E, eb: () => A, uf: () => d });
var i = n(636537),
    r = n(228366),
    a = n(393033),
    s = n(280450),
    l = n(40449),
    o = n(652215);
async function d(e) {
    let { method: t, classificationId: n, vendor: i } = e;
    return (0, a.qn)() ? await _({ classificationId: n, method: t }) : await u(t, i);
}
async function c(e) {
    let {
        api_url: t,
        session_token: n,
        consent_id: i,
        interview_id: r,
    } = (await d({ method: e, vendor: l.XM.INCODE })).incode_parameters ?? {};
    return null == t || null == n || null == i || null == r
        ? null
        : { apiUrl: t, sessionToken: n, consentId: i, interviewId: r };
}
async function u(e, t) {
    return (await i.Bo.post({ url: o.Rsh.VERIFY_AGE, body: { method: e, vendor: t }, rejectWithError: !0 })).body;
}
async function _(e) {
    let { classificationId: t, method: n } = e,
        r = s.default.getSuspendedUserToken();
    return (
        await i.Bo.post({
            url: o.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
            body: { token: r, from_classification_id: t, method: n },
            rejectWithError: !0,
        })
    ).body;
}
async function E(e) {
    await i.Bo.post({ url: o.Rsh.REGISTER_INCODE_INTERVIEW, body: { interview_id: e }, rejectWithError: !0 });
}
async function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (
        await i.Bo.post({
            url: o.Rsh.CREATE_INCODE_SESSION,
            body: null != e.previousInterviewId ? { previous_interview_id: e.previousInterviewId } : void 0,
            rejectWithError: !0,
        })
    ).body;
}
async function h() {
    let e, t;
    return (
        r.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" }),
        (e = (0, a.qn)()
            ? ((t = s.default.getSuspendedUserToken()),
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

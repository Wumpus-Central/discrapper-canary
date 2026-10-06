r.d(e, { D0: () => u, DJ: () => y, Zo: () => p, eb: () => S, en: () => h, uf: () => _ });
var n = r(636537),
    o = r(73153),
    i = r(393033),
    E = r(280450),
    s = r(40449),
    a = r(652215);
async function _(t) {
    let { method: e, classificationId: r, vendor: n } = t;
    return (0, i.qn)() ? await l({ classificationId: r, method: e }) : await d(e, n);
}
async function u(t) {
    let {
        api_url: e,
        session_token: r,
        consent_id: n,
        interview_id: o,
    } = (await _({ method: t, vendor: s.XM.INCODE })).incode_parameters ?? {};
    return null == e || null == r || null == n || null == o
        ? null
        : { apiUrl: e, sessionToken: r, consentId: n, interviewId: o };
}
async function d(t, e) {
    return (await n.Bo.post({ url: a.Rsh.VERIFY_AGE, body: { method: t, vendor: e }, rejectWithError: !0 })).body;
}
async function c(t, e) {
    return (await n.Bo.post({ url: a.Rsh.VERIFY_AGE_V2, body: { method: t, vendor: e }, rejectWithError: !0 })).body;
}
async function I(t, e) {
    let r = E.default.getSuspendedUserToken();
    return (
        await n.Bo.post({
            url: a.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION_V2,
            body: { token: r, method: t, vendor: e },
            rejectWithError: !0,
        })
    ).body;
}
async function h(t, e) {
    return (0, i.qn)() ? await I(t, e) : await c(t, e);
}
async function l(t) {
    let { classificationId: e, method: r } = t,
        o = E.default.getSuspendedUserToken();
    return (
        await n.Bo.post({
            url: a.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
            body: { token: o, from_classification_id: e, method: r },
            rejectWithError: !0,
        })
    ).body;
}
async function p(t) {
    await n.Bo.post({ url: a.Rsh.REGISTER_INCODE_INTERVIEW, body: { interview_id: t }, rejectWithError: !0 });
}
async function S() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (
        await n.Bo.post({
            url: a.Rsh.CREATE_INCODE_SESSION,
            body: null != t.previousInterviewId ? { previous_interview_id: t.previousInterviewId } : void 0,
            rejectWithError: !0,
        })
    ).body;
}
async function y() {
    let t, e;
    return (
        o.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" }),
        (t = (0, i.qn)()
            ? ((e = E.default.getSuspendedUserToken()),
              n.Bo.post({
                  url: a.Rsh.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS,
                  rejectWithError: !0,
                  body: { token: e },
              }))
            : n.Bo.get({ url: a.Rsh.AGE_VERIFICATION_METHODS, rejectWithError: !0 })),
        await t
            ?.then((t) => {
                o.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: t.body.methods });
            })
            .catch(() => {
                o.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
            })
    );
}

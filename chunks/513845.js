e.d(E, {
    BD: () => h,
    CN: () => T,
    GG: () => C,
    HV: () => R,
    Lw: () => f,
    R2: () => o,
    T5: () => U,
    _j: () => A,
    di: () => P,
    vX: () => l,
});
var i = e(636537),
    n = e(73153),
    p = e(457827),
    _ = e(95701),
    c = e(260498),
    u = e(951178),
    a = e(545503),
    s = e(802905),
    d = e(357858),
    r = e(652215);
function o(t) {
    a.A.reloadAppFrames(t);
}
function h(t) {
    let E = c.Ay.getProject(t);
    null != E && (o(E.application_id), (0, u.Fl)(E) || o(E.preview_application_id ?? null));
}
function R(t) {
    n.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function l(t, E) {
    n.h.dispatch({ type: "CONJURE_GAME_CAPTURE_SELECT", projectId: t, captureId: E });
}
function C(t) {
    n.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
function f(t) {
    n.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: t });
}
function P(t, E) {
    (n.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: t, paused: !0 }), (0, p.r)(E));
}
function A(t) {
    s.A.isPaused(t) && n.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: t, paused: !1 });
}
function U(t) {
    (0, d.Td)(t) && A(t);
}
async function T(t) {
    let { body: E } = await i.Bo.post({ url: r.Rsh.CONJURE_PROJECT_PREVIEW_DM(t), rejectWithError: !0 }),
        e = (0, _.UE)(E);
    return (n.h.dispatch({ type: "CHANNEL_CREATE", channel: e }), e.id);
}

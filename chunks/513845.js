i.d(E, {
    BD: () => o,
    CN: () => l,
    GG: () => C,
    HV: () => r,
    Lw: () => P,
    R2: () => R,
    T5: () => U,
    _j: () => I,
    di: () => A,
});
var p = i(636537),
    _ = i(73153),
    n = i(457827),
    c = i(95701),
    a = i(260498),
    e = i(951178),
    s = i(1371),
    d = i(802905),
    u = i(357858),
    h = i(652215);
function R(t) {
    s.A.reloadAppFrames(t);
}
function o(t) {
    let E = a.Ay.getProject(t);
    null != E && (R(E.application_id), (0, e.Fl)(E) || R(E.preview_application_id ?? null));
}
function r(t) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function C(t) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
function P(t) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: t });
}
function A(t, E) {
    (_.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: t, paused: !0 }), (0, n.r)(E));
}
function I(t) {
    d.A.isPaused(t) && _.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: t, paused: !1 });
}
function U(t) {
    (0, u.Td)(t) && I(t);
}
async function l(t) {
    let { body: E } = await p.Bo.post({ url: h.Rsh.CONJURE_PROJECT_PREVIEW_DM(t), rejectWithError: !0 }),
        i = (0, c.UE)(E);
    return (_.h.dispatch({ type: "CHANNEL_CREATE", channel: i }), i.id);
}

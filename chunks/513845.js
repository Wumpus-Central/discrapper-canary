i.d(t, {
    BD: () => o,
    CN: () => T,
    GG: () => P,
    HV: () => C,
    Lw: () => A,
    R2: () => R,
    T5: () => N,
    _j: () => I,
    di: () => U,
    vX: () => r,
});
var p = i(636537),
    _ = i(73153),
    n = i(457827),
    c = i(95701),
    a = i(260498),
    e = i(951178),
    s = i(545503),
    d = i(802905),
    h = i(357858),
    u = i(652215);
function R(E) {
    s.A.reloadAppFrames(E);
}
function o(E) {
    let t = a.Ay.getProject(E);
    null != t && (R(t.application_id), (0, e.Fl)(t) || R(t.preview_application_id ?? null));
}
function C(E) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: E });
}
function r(E, t) {
    _.h.dispatch({ type: "CONJURE_GAME_CAPTURE_SELECT", projectId: E, captureId: t });
}
function P(E) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: E });
}
function A(E) {
    _.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: E });
}
function U(E, t) {
    (_.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: E, paused: !0 }), (0, n.r)(t));
}
function I(E) {
    d.A.isPaused(E) && _.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: E, paused: !1 });
}
function N(E) {
    (0, h.Td)(E) && I(E);
}
async function T(E) {
    let { body: t } = await p.Bo.post({ url: u.Rsh.CONJURE_PROJECT_PREVIEW_DM(E), rejectWithError: !0 }),
        i = (0, c.UE)(t);
    return (_.h.dispatch({ type: "CHANNEL_CREATE", channel: i }), i.id);
}

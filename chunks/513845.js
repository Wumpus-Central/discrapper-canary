E.d(e, {
    BD: () => o,
    CN: () => f,
    GG: () => l,
    HV: () => R,
    Lw: () => P,
    R2: () => h,
    T5: () => U,
    _j: () => C,
    di: () => A,
});
var i = E(636537),
    n = E(73153),
    _ = E(457827),
    a = E(95701),
    c = E(260498),
    p = E(951178),
    s = E(1371),
    u = E(802905),
    d = E(357858),
    r = E(652215);
function h(t) {
    s.A.reloadAppFrames(t);
}
function o(t) {
    let e = c.Ay.getProject(t);
    null != e && (h(e.application_id), (0, p.Fl)(e) || h(e.preview_application_id ?? null));
}
function R(t) {
    n.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function l(t) {
    n.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
function P(t) {
    n.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: t });
}
function A(t, e) {
    (n.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: t, paused: !0 }), (0, _.r)(e));
}
function C(t) {
    u.A.isPaused(t) && n.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: t, paused: !1 });
}
function U(t) {
    (0, d.Td)(t) && C(t);
}
async function f(t) {
    let { body: e } = await i.Bo.post({ url: r.Rsh.CONJURE_PROJECT_PREVIEW_DM(t), rejectWithError: !0 }),
        E = (0, a.UE)(e);
    return (n.h.dispatch({ type: "CHANNEL_CREATE", channel: E }), E.id);
}

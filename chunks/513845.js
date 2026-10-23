E.d(e, {
    BD: () => h,
    CN: () => I,
    GG: () => l,
    HV: () => R,
    Lw: () => f,
    R2: () => o,
    T5: () => A,
    _j: () => C,
    di: () => P,
});
var i = E(636537),
    n = E(73153),
    p = E(457827),
    u = E(95701),
    c = E(260498),
    _ = E(951178),
    a = E(1371),
    s = E(802905),
    d = E(357858),
    r = E(652215);
function o(t) {
    a.A.reloadAppFrames(t);
}
function h(t) {
    let e = c.Ay.getProject(t);
    null != e && (o(e.application_id), (0, _.Fl)(e) || o(e.preview_application_id ?? null));
}
function R(t) {
    n.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function l(t) {
    n.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
function f(t) {
    n.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: t });
}
function P(t, e) {
    (n.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: t, paused: !0 }), (0, p.r)(e));
}
function C(t) {
    s.A.isPaused(t) && n.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: t, paused: !1 });
}
function A(t) {
    (0, d.Td)(t) && C(t);
}
async function I(t) {
    let { body: e } = await i.Bo.post({ url: r.Rsh.CONJURE_PROJECT_PREVIEW_DM(t), rejectWithError: !0 }),
        E = (0, u.UE)(e);
    return (n.h.dispatch({ type: "CHANNEL_CREATE", channel: E }), E.id);
}

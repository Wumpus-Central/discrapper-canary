n.d(t, {
    BD: () => d,
    CN: () => U,
    GG: () => h,
    HV: () => R,
    Lw: () => A,
    R2: () => E,
    T5: () => C,
    _j: () => f,
    di: () => P,
});
var i = n(636537),
    l = n(73153),
    u = n(457827),
    _ = n(95701),
    r = n(260498),
    s = n(951178),
    o = n(1371),
    a = n(802905),
    c = n(357858),
    p = n(652215);
function E(e) {
    o.A.reloadAppFrames(e);
}
function d(e) {
    let t = r.Ay.getProject(e);
    null != t && (E(t.application_id), (0, s.Fl)(t) || E(t.preview_application_id ?? null));
}
function R(e) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function h(e) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
function A(e) {
    l.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: e });
}
function P(e, t) {
    (l.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: e, paused: !0 }), (0, u.r)(t));
}
function f(e) {
    a.A.isPaused(e) && l.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: e, paused: !1 });
}
function C(e) {
    (0, c.Td)(e) && f(e);
}
async function U(e) {
    let { body: t } = await i.Bo.post({ url: p.Rsh.CONJURE_PROJECT_PREVIEW_DM(e), rejectWithError: !0 }),
        n = (0, _.UE)(t);
    return (l.h.dispatch({ type: "CHANNEL_CREATE", channel: n }), n.id);
}

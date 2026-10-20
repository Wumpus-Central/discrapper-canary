n.d(t, { BD: () => c, GG: () => E, HV: () => p, Lw: () => d, R2: () => o, T5: () => A, _j: () => h, di: () => R });
var i = n(73153),
    l = n(457827),
    _ = n(260498),
    u = n(951178),
    r = n(1371),
    s = n(802905),
    a = n(357858);
function o(e) {
    r.A.reloadAppFrames(e);
}
function c(e) {
    let t = _.Ay.getProject(e);
    null != t && (o(t.application_id), (0, u.Fl)(t) || o(t.preview_application_id ?? null));
}
function p(e) {
    i.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function E(e) {
    i.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
function d(e) {
    i.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: e });
}
function R(e, t) {
    (i.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: e, paused: !0 }), (0, l.r)(t));
}
function h(e) {
    s.A.isPaused(e) && i.h.dispatch({ type: "CONJURE_PREVIEW_PAUSED_SET", projectId: e, paused: !1 });
}
function A(e) {
    (0, a.Td)(e) && h(e);
}

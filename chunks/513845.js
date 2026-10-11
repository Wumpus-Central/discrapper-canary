n.d(_, { BD: () => o, GG: () => c, HV: () => r, Lw: () => p, R2: () => a });
var i = n(73153),
    e = n(260498),
    l = n(951178),
    u = n(28480);
function a(t) {
    u.A.reloadAppFrames(t);
}
function o(t) {
    let _ = e.Ay.getProject(t);
    null != _ && (a(_.application_id), (0, l.Fl)(_) || a(_.preview_application_id ?? null));
}
function r(t) {
    i.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: t });
}
function c(t) {
    i.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: t });
}
function p(t) {
    i.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: t });
}

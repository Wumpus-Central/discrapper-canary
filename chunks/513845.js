n.d(t, { BD: () => r, GG: () => o, HV: () => s, Lw: () => c, R2: () => a });
var i = n(73153),
    l = n(260498),
    _ = n(951178),
    u = n(1371);
function a(e) {
    u.A.reloadAppFrames(e);
}
function r(e) {
    let t = l.Ay.getProject(e);
    null != t && (a(t.application_id), (0, _.Fl)(t) || a(t.preview_application_id ?? null));
}
function s(e) {
    i.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId: e });
}
function o(e) {
    i.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled: e });
}
function c(e) {
    i.h.dispatch({ type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape: e });
}

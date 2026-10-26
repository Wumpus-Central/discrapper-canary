n.d(t, { $8: () => f, s5: () => c, vI: () => a, y9: () => A });
var r,
    u,
    l = n(731738),
    i = n(807393),
    o = n(174459),
    s = n(652215),
    a =
        (((r = {}).REGISTERED = "registered"),
        (r.NO_FRAMEWORK = "no_framework"),
        (r.NO_METADATA = "no_metadata"),
        (r.NOT_SKAN_ENABLED = "not_skan_enabled"),
        (r.SIGN_FAILED = "sign_failed"),
        (r.NO_TOKEN = "no_token"),
        r),
    c = (((u = {}).ATTRIBUTED = "attributed"), (u.NO_IMPRESSION = "no_impression"), (u.NOT_READY = "not_ready"), u);
function d(e) {
    return `framework:${e ?? "none"}`;
}
function f(e, t, n) {
    (i.A.increment({ name: l.K.IOS_ATTRIBUTION_IMPRESSION, tags: [`result:${e}`, d(t)] }),
        o.default.track(s.HAw.IOS_ATTRIBUTION_VIEW_RESOLVED, {
            impression_id: n,
            attribution_framework: t ?? "none",
            attribution_result: e,
        }));
}
function A(e, t, n) {
    (i.A.increment({ name: l.K.IOS_ATTRIBUTION_CLICK, tags: [`result:${e}`, d(t)] }),
        o.default.track(s.HAw.IOS_ATTRIBUTION_CLICK_RESOLVED, {
            impression_id: n,
            attribution_framework: t ?? "none",
            attribution_result: e,
        }));
}

n.d(t, { $8: () => d, s5: () => a, vI: () => l, y9: () => c });
var i,
    r,
    s = n(731738),
    o = n(807393),
    l =
        (((i = {}).REGISTERED = "registered"),
        (i.NO_FRAMEWORK = "no_framework"),
        (i.NO_METADATA = "no_metadata"),
        (i.NOT_SKAN_ENABLED = "not_skan_enabled"),
        (i.SIGN_FAILED = "sign_failed"),
        (i.NO_TOKEN = "no_token"),
        i),
    a = (((r = {}).ATTRIBUTED = "attributed"), (r.NO_IMPRESSION = "no_impression"), (r.NOT_READY = "not_ready"), r);
function u(e) {
    return `framework:${e ?? "none"}`;
}
function d(e, t) {
    o.A.increment({ name: s.K.IOS_ATTRIBUTION_IMPRESSION, tags: [`result:${e}`, u(t)] });
}
function c(e, t) {
    o.A.increment({ name: s.K.IOS_ATTRIBUTION_CLICK, tags: [`result:${e}`, u(t)] });
}

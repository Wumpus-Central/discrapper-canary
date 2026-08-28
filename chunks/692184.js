n.d(t, { $8: () => C, s5: () => d, vI: () => u, y9: () => f });
var i,
    r,
    s = n(731738),
    o = n(807393),
    a = n(174459),
    l = n(652215),
    u =
        (((i = {}).REGISTERED = "registered"),
        (i.NO_FRAMEWORK = "no_framework"),
        (i.NO_METADATA = "no_metadata"),
        (i.NOT_SKAN_ENABLED = "not_skan_enabled"),
        (i.SIGN_FAILED = "sign_failed"),
        (i.NO_TOKEN = "no_token"),
        i),
    d = (((r = {}).ATTRIBUTED = "attributed"), (r.NO_IMPRESSION = "no_impression"), (r.NOT_READY = "not_ready"), r);
function c(e) {
    return `framework:${e ?? "none"}`;
}
function C(e, t, n) {
    o.A.increment({ name: s.K.IOS_ATTRIBUTION_IMPRESSION, tags: [`result:${e}`, c(t)] }),
        a.default.track(l.HAw.IOS_ATTRIBUTION_VIEW_RESOLVED, {
            impression_id: n,
            attribution_framework: t ?? "none",
            attribution_result: e,
        });
}
function f(e, t, n) {
    o.A.increment({ name: s.K.IOS_ATTRIBUTION_CLICK, tags: [`result:${e}`, c(t)] }),
        a.default.track(l.HAw.IOS_ATTRIBUTION_CLICK_RESOLVED, {
            impression_id: n,
            attribution_framework: t ?? "none",
            attribution_result: e,
        });
}

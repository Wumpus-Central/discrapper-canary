var r,
    u,
    i = n(731738),
    l = n(913379),
    o = n(129230),
    a = n(652215),
    s =
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
n.d(
    t,
    {},
    {
        $8: function (e, t, n) {
            (l.A.increment({ name: i.K.IOS_ATTRIBUTION_IMPRESSION, tags: [`result:${e}`, d(t)] }),
                o.default.track(a.HAw.IOS_ATTRIBUTION_VIEW_RESOLVED, {
                    impression_id: n,
                    attribution_framework: t ?? "none",
                    attribution_result: e,
                }));
        },
        s5: c,
        vI: s,
        y9: function (e, t, n) {
            (l.A.increment({ name: i.K.IOS_ATTRIBUTION_CLICK, tags: [`result:${e}`, d(t)] }),
                o.default.track(a.HAw.IOS_ATTRIBUTION_CLICK_RESOLVED, {
                    impression_id: n,
                    attribution_framework: t ?? "none",
                    attribution_result: e,
                }));
        },
    },
);

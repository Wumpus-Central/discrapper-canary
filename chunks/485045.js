n.d(t, { W: () => s, n: () => l });
var a = n(17928),
    r = n(945810),
    o = n(287809),
    u = n(24482);
let i = (0, r.mj)({
    name: "2026-09-request-to-stream-go-live-modal",
    kind: "user",
    defaultConfig: { openGoLiveModal: !1 },
    variations: { 0: { openGoLiveModal: !1 }, 1: { openGoLiveModal: !0 } },
});
function d(e, t) {
    return e && !u.Ay.canStreamQuality(u.Ay.StreamQuality.HIGH, t);
}
function l(e) {
    let { location: t } = e,
        { openGoLiveModal: n } = i.getConfig({ location: t });
    return d(n, o.default.getCurrentUser());
}
function s(e) {
    let { location: t } = e,
        { openGoLiveModal: n } = i.useConfig({ location: t });
    return d(
        n,
        (0, a.bG)([o.default], () => o.default.getCurrentUser()),
    );
}

n.d(t, {
    E: () => c,
    N: () => u,
});
var r = n(704215),
    i = n(433517),
    l = n(605236),
    a = n(70956),
    o = n(921944);
let s = "doNotShowReorderModal";
function c() {
    (0, l.Ow)(r.z.CHANNEL_REORDER_MODAL_DISMISS_SETTING, { dismissAction: o.L.USER_DISMISS });
}
function u() {
    null != i.K.get(s) && i.K.remove(s);
    let { isDismissed: e } = (0, l.Fo)(r.z.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
        cooldownDurationMs: a.Z.Millis.WEEK,
    });
    return !e;
}

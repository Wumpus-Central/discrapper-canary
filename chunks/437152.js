n.d(t, {
    E: () => c,
    N: () => u
});
var r = n(704215),
    i = n(433517),
    l = n(605236),
    o = n(70956),
    a = n(921944);
let s = 'doNotShowReorderModal';
function c() {
    (0, l.Ow)(r.z.CHANNEL_REORDER_MODAL_DISMISS_SETTING, { dismissAction: a.L.USER_DISMISS });
}
function u() {
    null != i.K.get(s) && i.K.remove(s);
    let { isDismissed: e } = (0, l.Fo)(r.z.CHANNEL_REORDER_MODAL_DISMISS_SETTING, { cooldownDurationMs: o.Z.Millis.WEEK });
    return !e;
}

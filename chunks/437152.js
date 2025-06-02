n.d(t, {
    E: () => c,
    N: () => u
});
var r = n(704215),
    i = n(433517),
    l = n(605236),
    o = n(70956),
    s = n(921944);
let a = 'doNotShowReorderModal';
function c() {
    (0, l.Ow)(r.z.CHANNEL_REORDER_MODAL_DISMISS_SETTING, { dismissAction: s.L.USER_DISMISS });
}
function u() {
    null != i.K.get(a) && i.K.remove(a);
    let { isDismissed: e } = (0, l.Fo)(r.z.CHANNEL_REORDER_MODAL_DISMISS_SETTING, { cooldownDurationMs: 10 * o.Z.Millis.SECOND });
    return !e;
}

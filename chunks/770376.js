n.d(t, { A: () => d, f: () => c });
var i = n(554146),
    l = n(506774),
    s = n(367727),
    a = n(927813),
    r = n(49999);
let o = "doNotShowReorderModal";
function c() {
    (0, s.uh)(i.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, { dismissAction: r.i.USER_DISMISS });
}
function d() {
    null != l.w.get(o) && l.w.remove(o);
    let { isDismissed: e } = (0, s.FZ)(i.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
        cooldownDurationMs: a.A.Millis.WEEK,
    });
    return !e;
}

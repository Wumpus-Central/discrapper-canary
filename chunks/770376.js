n.d(t, {
    A: () => u,
    f: () => c,
});
var r = n(554146),
    l = n(506774),
    i = n(367727),
    a = n(927813),
    s = n(49999);
let o = "doNotShowReorderModal";

function c() {
    (0, i.uh)(r.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
        dismissAction: s.i.USER_DISMISS,
    });
}

function u() {
    null != l.w.get(o) && l.w.remove(o);
    let { isDismissed: e } = (0, i.FZ)(r.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
        cooldownDurationMs: a.A.Millis.WEEK,
    });
    return !e;
}

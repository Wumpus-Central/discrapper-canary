"use strict";
n.d(t, { A: () => d, f: () => c });
var i = n(554146),
    s = n(506774),
    l = n(367727),
    r = n(927813),
    a = n(49999);
let o = "doNotShowReorderModal";
function c() {
    (0, l.uh)(i.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, { dismissAction: a.i.USER_DISMISS });
}
function d() {
    null != s.w.get(o) && s.w.remove(o);
    let { isDismissed: e } = (0, l.FZ)(i.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
        cooldownDurationMs: r.A.Millis.WEEK,
    });
    return !e;
}

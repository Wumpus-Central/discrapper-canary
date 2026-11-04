var S = t(554146),
    s = t(506774),
    e = t(543862),
    n = t(927813),
    E = t(49999);
let _ = "doNotShowReorderModal";
t.d(
    i,
    {},
    {
        A: function () {
            null != s.w.get(_) && s.w.remove(_);
            let { isDismissed: o } = (0, e.FZ)(S.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
                cooldownDurationMs: n.A.Millis.WEEK,
            });
            return !o;
        },
        f: function () {
            (0, e.uh)(S.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, { dismissAction: E.i.USER_DISMISS });
        },
    },
);

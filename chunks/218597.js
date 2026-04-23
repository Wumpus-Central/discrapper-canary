i.d(t, { A: () => s });
var l = i(64700),
    n = i(599941);
function s(e, t) {
    let i = (0, n.dL)(t);
    return l.useMemo(
        () =>
            null != i &&
            (null == i.max_num_active_trial_users || i.max_num_active_trial_users > (i.num_active_trial_users ?? 0)),
        [i],
    );
}

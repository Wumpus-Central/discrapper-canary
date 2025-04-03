n.d(t, { Z: () => a });
var r = n(192379),
    i = n(584825);
function a(e, t) {
    let n = (0, i.oC)(t);
    return r.useMemo(() => {
        var e;
        return null != n && (null == n.max_num_active_trial_users || n.max_num_active_trial_users > (null != (e = n.num_active_trial_users) ? e : 0));
    }, [n]);
}

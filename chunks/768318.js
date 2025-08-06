n.d(t, { Z: () => l });
var i = n(73800),
    r = n(584825);
function l(e, t) {
    let n = (0, r.oC)(t);
    return i.useMemo(() => {
        var e;
        return (
            null != n &&
            (null == n.max_num_active_trial_users ||
                n.max_num_active_trial_users > (null != (e = n.num_active_trial_users) ? e : 0))
        );
    }, [n]);
}

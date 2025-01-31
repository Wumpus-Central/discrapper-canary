n.d(t, { Z: () => a });
var i = n(192379),
    l = n(584825);
function a(e, t) {
    let n = (0, l.oC)(t);
    return i.useMemo(() => {
        var e;
        return null != n && (null == n.max_num_active_trial_users || n.max_num_active_trial_users > (null !== (e = n.num_active_trial_users) && void 0 !== e ? e : 0));
    }, [n]);
}

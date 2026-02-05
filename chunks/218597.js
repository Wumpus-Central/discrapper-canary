"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(599941);
function a(e, t) {
    let n = (0, i.dL)(t);
    return r.useMemo(
        () =>
            null != n &&
            (null == n.max_num_active_trial_users || n.max_num_active_trial_users > (n.num_active_trial_users ?? 0)),
        [n],
    );
}

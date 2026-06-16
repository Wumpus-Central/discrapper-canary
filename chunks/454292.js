"use strict";
function i(e, t, n) {
    return null == n
        ? null
        : (e.getApplicationActivity(n) ??
              t.getApplicationActivity(n, !0) ??
              t.getHiddenActivities().find((e) => e.application_id === n));
}
n.d(t, { A: () => i });

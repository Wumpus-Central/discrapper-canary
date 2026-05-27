n.d(e, { A: () => i });
function i(t, e, n) {
    return null == n
        ? null
        : (t.getApplicationActivity(n) ??
              e.getApplicationActivity(n, !0) ??
              e.getHiddenActivities().find((t) => t.application_id === n));
}

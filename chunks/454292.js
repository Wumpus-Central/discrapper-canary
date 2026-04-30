e.d(n, { A: () => i });
function i(t, n, e) {
    return null == e
        ? null
        : (t.getApplicationActivity(e) ??
              n.getApplicationActivity(e, !0) ??
              n.getHiddenActivities().find((t) => t.application_id === e));
}

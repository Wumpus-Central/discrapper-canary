n.d(i, { A: () => r });
function r(t, i, n) {
    return null == n
        ? null
        : (t.getApplicationActivity(n) ??
              i.getApplicationActivity(n, !0) ??
              i.getHiddenActivities().find((t) => t.application_id === n));
}

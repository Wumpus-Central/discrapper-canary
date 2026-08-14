i.d(n, { A: () => e });
function e(t, n, i) {
    return null == i
        ? null
        : (t.getApplicationActivity(i) ??
              n.getApplicationActivity(i, !0) ??
              n.getHiddenActivities().find((t) => t.application_id === i));
}

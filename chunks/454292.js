i.d(e, { A: () => r });
function r(t, e, i) {
    return null == i
        ? null
        : (t.getApplicationActivity(i) ??
              e.getApplicationActivity(i, !0) ??
              e.getHiddenActivities().find((t) => t.application_id === i));
}

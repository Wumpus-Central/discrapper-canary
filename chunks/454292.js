i.d(e, { A: () => l });
function l(t, e, i) {
    return null == i
        ? null
        : (t.getApplicationActivity(i) ??
              e.getApplicationActivity(i, !0) ??
              e.getHiddenActivities().find((t) => t.application_id === i));
}

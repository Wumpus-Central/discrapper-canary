n.d(
    i,
    {},
    {
        A: function (t, i, n) {
            return null == n
                ? null
                : (t.getApplicationActivity(n) ??
                      i.getApplicationActivity(n, !0) ??
                      i.getHiddenActivities().find((t) => t.application_id === n));
        },
    },
);

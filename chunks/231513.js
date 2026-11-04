t.d(
    r,
    {},
    {
        A: function (e, r, t) {
            let n = t[e.pingUrl],
                l = t[r.pingUrl];
            return n?.rtt != null && l?.rtt != null
                ? n.rtt - l.rtt
                : n?.rtt != null && l?.rtt == null
                  ? -1
                  : n?.rtt == null && l?.rtt != null
                    ? 1
                    : n?.loading && !l?.loading
                      ? -1
                      : (!n?.loading && l?.loading) || (n?.error && !l?.error)
                        ? 1
                        : !n?.error && l?.error
                          ? -1
                          : 0;
        },
    },
);

n.d(t, { A: () => l });
function l(e, t, n) {
    let l = n[e.pingUrl],
        r = n[t.pingUrl];
    return l?.rtt != null && r?.rtt != null
        ? l.rtt - r.rtt
        : l?.rtt != null && r?.rtt == null
          ? -1
          : l?.rtt == null && r?.rtt != null
            ? 1
            : l?.loading && !r?.loading
              ? -1
              : (!l?.loading && r?.loading) || (l?.error && !r?.error)
                ? 1
                : !l?.error && r?.error
                  ? -1
                  : 0;
}

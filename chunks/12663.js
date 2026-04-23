t.d(n, { A: () => l });
function l(e, n, t) {
    let l = t[e.pingUrl],
        r = t[n.pingUrl];
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

l.d(t, { A: () => r });
function r(e, t, l) {
    let r = l[e.pingUrl],
        n = l[t.pingUrl];
    return (null == r ? void 0 : r.rtt) != null && (null == n ? void 0 : n.rtt) != null
        ? r.rtt - n.rtt
        : (null == r ? void 0 : r.rtt) != null && (null == n ? void 0 : n.rtt) == null
          ? -1
          : (null == r ? void 0 : r.rtt) == null && (null == n ? void 0 : n.rtt) != null
            ? 1
            : (null == r ? void 0 : r.loading) && !(null == n ? void 0 : n.loading)
              ? -1
              : (!(null == r ? void 0 : r.loading) && (null == n ? void 0 : n.loading)) ||
                  ((null == r ? void 0 : r.error) && !(null == n ? void 0 : n.error))
                ? 1
                : !(null == r ? void 0 : r.error) && (null == n ? void 0 : n.error)
                  ? -1
                  : 0;
}

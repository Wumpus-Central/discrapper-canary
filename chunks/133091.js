t.d(n, { Z: () => r });
function r(e, n, t) {
    let r = t[e.pingUrl],
        i = t[n.pingUrl];
    return (null == r ? void 0 : r.rtt) != null && (null == i ? void 0 : i.rtt) != null
        ? r.rtt - i.rtt
        : (null == r ? void 0 : r.rtt) != null && (null == i ? void 0 : i.rtt) == null
          ? -1
          : (null == r ? void 0 : r.rtt) == null && (null == i ? void 0 : i.rtt) != null
            ? 1
            : (null == r ? void 0 : r.loading) && !(null == i ? void 0 : i.loading)
              ? -1
              : (!(null == r ? void 0 : r.loading) && (null == i ? void 0 : i.loading)) ||
                  ((null == r ? void 0 : r.error) && !(null == i ? void 0 : i.error))
                ? 1
                : !(null == r ? void 0 : r.error) && (null == i ? void 0 : i.error)
                  ? -1
                  : 0;
}

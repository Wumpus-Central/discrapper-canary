n.d(t, { P: () => a });
var r = n(473749),
    i = n(535396),
    l = n(556970),
    o = n(388032);
function a(e, t, n) {
    return r.useMemo(() => {
        var r, a, s;
        return (null == (r = t.sourceEntitlement) ? void 0 : r.ends_at) != null
            ? {
                  type: "expiring",
                  expiringAt: t.sourceEntitlement.ends_at,
              }
            : n && null != e.storeRemovalDate
              ? {
                    type: "removing",
                    removingAt: e.storeRemovalDate,
                }
              : t.type === i.A3.LEVEL_ACTIVATED
                ? {
                      type: "active",
                      statusText: o.intl.formatToPlainString(l.default.WRRYUT, {
                          perkName:
                              null != (s = null == (a = t.sourcePowerup) ? void 0 : a.title)
                                  ? s
                                  : o.intl.string(o.t.BfF6ED),
                      }),
                  }
                : t.type === i.A3.POWERUP_ACTIVATED
                  ? {
                        type: "active",
                        statusText: o.intl.string(l.default.FFLkmx),
                    }
                  : void 0;
    }, [t, n, e]);
}

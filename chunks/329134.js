n.d(t, { P: () => a });
var r = n(473749),
    i = n(535396),
    o = n(130231),
    l = n(388032);
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
                      statusText: l.intl.formatToPlainString(o.default.WRRYUT, {
                          perkName:
                              null != (s = null == (a = t.sourcePowerup) ? void 0 : a.title)
                                  ? s
                                  : l.intl.string(l.t.BfF6ED),
                      }),
                  }
                : t.type === i.A3.POWERUP_ACTIVATED
                  ? {
                        type: "active",
                        statusText: l.intl.string(o.default.FFLkmx),
                    }
                  : void 0;
    }, [t, n, e]);
}

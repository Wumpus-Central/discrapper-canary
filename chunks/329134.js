n.d(t, { P: () => o });
var r = n(473749),
    i = n(535396),
    l = n(44542),
    a = n(388032);
function o(e, t, n) {
    return r.useMemo(() => {
        var r, o, s;
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
                      statusText: a.intl.formatToPlainString(l.default.WRRYUT, {
                          perkName:
                              null != (s = null == (o = t.sourcePowerup) ? void 0 : o.title)
                                  ? s
                                  : a.intl.string(a.t.BfF6ED),
                      }),
                  }
                : t.type === i.A3.POWERUP_ACTIVATED
                  ? {
                        type: "active",
                        statusText: a.intl.string(l.default.FFLkmx),
                    }
                  : void 0;
    }, [t, n, e]);
}

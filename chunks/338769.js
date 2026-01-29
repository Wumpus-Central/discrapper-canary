n.d(t, {
    V: () => f,
    Z: () => g,
});
var r,
    l = n(64700),
    s = n(311907),
    a = n(773669),
    i = n(248352),
    o = n(797490),
    c = n(758836),
    u = n(788868),
    d = n(985018),
    g = (((r = {})[(r.COUNTDOWN = 0)] = "COUNTDOWN"), r);

function f(e, t) {
    let n = (0, s.bG)([i.A], () => i.A.getUserDiscount(u.tU)),
        r = (0, s.bG)([a.default], () => a.default.locale),
        g = (0, o.$)(t);
    if (l.useMemo(() => null != n && g && e !== c.G2.ORBS, [n, g, e])) {
        let e =
            null != n && null != n.expiresAt
                ? new Date(n.expiresAt).toLocaleDateString(r, {
                      day: "numeric",
                      month: "numeric",
                  })
                : void 0;
        return {
            type: 0,
            countdownEndDate: null == n ? void 0 : n.expiresAt,
            message: d.intl.format(d.t.RCo9MF, {
                date: e,
            }),
        };
    }
}

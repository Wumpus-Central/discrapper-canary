l.d(t, {
    V: () => f,
    Z: () => d,
});
var n,
    r = l(64700),
    s = l(311907),
    a = l(248352),
    i = l(797490),
    o = l(758836),
    c = l(788868),
    u = l(985018),
    d = (((n = {})[(n.COUNTDOWN = 0)] = "COUNTDOWN"), n);

function f(e, t) {
    let l = (0, s.bG)([a.A], () => a.A.getUserDiscount(c.tU)),
        n = (0, i.$)(t);
    if (r.useMemo(() => null != l && n && e !== o.G2.ORBS, [l, n, e]))
        return {
            type: 0,
            countdownEndDate: null == l ? void 0 : l.expiresAt,
            message: u.intl.format(u.t.WfqvDS, {}),
        };
}

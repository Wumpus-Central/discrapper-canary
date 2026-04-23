"use strict";
s.d(t, { V: () => h, Z: () => g });
var n,
    l = s(64700),
    r = s(311907),
    a = s(773669),
    i = s(248352),
    o = s(797490),
    c = s(758836),
    d = s(788868),
    u = s(985018),
    g = (((n = {})[(n.COUNTDOWN = 0)] = "COUNTDOWN"), n);
function h(e, t) {
    let s = (0, r.bG)([i.A], () => i.A.getUserDiscount(d.tU)),
        n = (0, r.bG)([a.default], () => a.default.locale),
        g = (0, o.$)(t);
    if (l.useMemo(() => null != s && g && e !== c.G2.ORBS, [s, g, e])) {
        let e =
            null != s && null != s.expiresAt
                ? new Date(s.expiresAt).toLocaleDateString(n, { day: "numeric", month: "numeric" })
                : void 0;
        return { type: 0, countdownEndDate: s?.expiresAt, message: u.intl.format(u.t.RCo9MF, { date: e }) };
    }
}

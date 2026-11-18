var i = n(679677),
    r = n(26279),
    a = n(792996);
let s = new Set([i.j.SPENDING_LIMIT_REACHED, i.j.SPENDING_LIMIT_WILL_EXCEED]),
    l = new Set([i.j.INSUFFICIENT_ORB_BALANCE]),
    o = new Set([r.Re.DRAFT, r.Re.SIGNING_FAILED]);
function d(e) {
    return s.has(e);
}
n.d(
    t,
    {},
    {
        GD: function (e, t) {
            if (!o.has(e)) return null;
            let n = null;
            for (let { reason_code: e, actionable: i } of t)
                if (!i) {
                    if (d(e)) return e;
                    null != n || l.has(e) || (n = e);
                }
            return n;
        },
        bH: d,
        f$: function (e, t) {
            switch (e) {
                case i.j.SPENDING_LIMIT_REACHED:
                case i.j.SPENDING_LIMIT_WILL_EXCEED:
                    return a.intl.string(a.t["73Islf"]);
                case i.j.INSUFFICIENT_ORB_BALANCE:
                    return a.intl.string(a.t.keFvXM);
                case i.j.SKU_ALREADY_OWNED:
                    return a.intl.string(a.t.m371Mx);
                case i.j.BUNDLE_PARTIALLY_OWNED:
                    return a.intl.string(a.t.v9oC0p);
                default:
                    return t;
            }
        },
    },
);

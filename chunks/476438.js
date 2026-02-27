"use strict";
n.d(t, { B: () => c, q: () => u });
var r = n(64700),
    i = n(989349),
    s = n.n(i),
    a = n(311907),
    o = n(832163),
    l = n(985018);
function u() {
    let e = (0, a.bG)([o.A], () => o.A.getConfig()?.promotionEndDatetime, []);
    return r.useMemo(() => {
        if (null == e) return null;
        let t = s()(),
            n = s()(e).diff(t, "days");
        return n <= 0 ? null : n;
    }, [e]);
}
function c() {
    let e = u();
    return r.useMemo(() => (null == e ? null : l.intl.formatToPlainString(l.t.BXpdIg, { days: Math.max(e, 1) })), [e]);
}

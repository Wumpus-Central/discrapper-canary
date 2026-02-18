"use strict";
i.d(t, { A: () => d });
var n = i(64700),
    s = i(989349),
    r = i.n(s),
    l = i(311907),
    a = i(832163),
    o = i(985018);
function d() {
    let e = (0, l.bG)([a.A], () => a.A.getConfig()?.promotionEndDatetime, []);
    return n.useMemo(() => {
        if (null == e) return null;
        let t = r()(),
            i = r()(e).diff(t, "days");
        return i <= 0 ? null : o.intl.formatToPlainString(o.t.BXpdIg, { days: Math.max(i, 1) });
    }, [e]);
}

l.d(t, { B: () => d });
var n = l(64700),
    a = l(989349),
    i = l.n(a),
    r = l(311907),
    s = l(832163),
    o = l(985018);
function d() {
    let e,
        t =
            ((e = (0, r.bG)([s.A], () => s.A.getConfig()?.promotionEndDatetime, [])),
            n.useMemo(() => {
                if (null == e) return null;
                let t = i()(),
                    l = i()(e).diff(t, "days");
                return l <= 0 ? null : l;
            }, [e]));
    return n.useMemo(() => (null == t ? null : o.intl.formatToPlainString(o.t.BXpdIg, { days: Math.max(t, 1) })), [t]);
}

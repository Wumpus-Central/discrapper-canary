n.d(e, { X: () => o, z: () => c });
var r = n(582128),
    a = n(580630),
    i = n(375708);
function c(t) {
    return r.useMemo(() => {
        if (null == t) return;
        let e = null != t.role_id,
            n = t.attachments_count > 0;
        return e && n
            ? i.intl.string(i.t.ih4QMU)
            : e
              ? i.intl.string(i.t.o9xphc)
              : n
                ? i.intl.string(i.t.DWYJua)
                : void 0;
    }, [t]);
}
function o(t) {
    return r.useMemo(() => {
        if (t?.price == null) return;
        let { amount: e, currency: n } = t.price;
        return (0, a.$g)(e, n);
    }, [t]);
}

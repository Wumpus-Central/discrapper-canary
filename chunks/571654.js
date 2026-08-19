e.d(n, { X: () => o, z: () => c });
var r = e(582128),
    a = e(580630),
    i = e(375708);
function c(t) {
    return r.useMemo(() => {
        if (null == t) return;
        let n = null != t.role_id,
            e = t.attachments_count > 0;
        return n && e
            ? i.intl.string(i.t.ih4QMU)
            : n
              ? i.intl.string(i.t.o9xphc)
              : e
                ? i.intl.string(i.t.DWYJua)
                : void 0;
    }, [t]);
}
function o(t) {
    return r.useMemo(() => {
        if (t?.price == null) return;
        let { amount: n, currency: e } = t.price;
        return (0, a.$g)(n, e);
    }, [t]);
}

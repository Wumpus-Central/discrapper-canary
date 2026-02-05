n.d(t, { X: () => s, z: () => r });
var i = n(64700),
    l = n(580630),
    a = n(985018);
function r(e) {
    return i.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        return t && n
            ? a.intl.string(a.t.ih4QMU)
            : t
              ? a.intl.string(a.t.o9xphc)
              : n
                ? a.intl.string(a.t.DWYJua)
                : void 0;
    }, [e]);
}
function s(e) {
    return i.useMemo(() => {
        if (e?.price == null) return;
        let { amount: t, currency: n } = e.price;
        return (0, l.$g)(t, n);
    }, [e]);
}

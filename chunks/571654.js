n.d(t, {
    X: () => o,
    z: () => s,
});
var r = n(64700),
    i = n(580630),
    a = n(985018);

function s(e) {
    return r.useMemo(() => {
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

function o(e) {
    return r.useMemo(() => {
        if ((null == e ? void 0 : e.price) == null) return;
        let { amount: t, currency: n } = e.price;
        return (0, i.$g)(t, n);
    }, [e]);
}

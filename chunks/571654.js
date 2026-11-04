var e = r(582128),
    a = r(580630),
    i = r(792996);
r.d(
    n,
    {},
    {
        X: function (t) {
            return e.useMemo(() => {
                if (t?.price == null) return;
                let { amount: n, currency: r } = t.price;
                return (0, a.$g)(n, r);
            }, [t]);
        },
        z: function (t) {
            return e.useMemo(() => {
                if (null == t) return;
                let n = null != t.role_id,
                    r = t.attachments_count > 0;
                return n && r
                    ? i.intl.string(i.t.ih4QMU)
                    : n
                      ? i.intl.string(i.t.o9xphc)
                      : r
                        ? i.intl.string(i.t.DWYJua)
                        : void 0;
            }, [t]);
        },
    },
);

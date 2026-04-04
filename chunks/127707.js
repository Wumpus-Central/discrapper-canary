n.d(t, { Q: () => c });
var i = n(311907),
    s = n(419954),
    l = n(100406),
    a = n(878460),
    r = n(780964),
    o = n(431144),
    d = n(985018);
let c = (0, s.Tf)(r.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
    useTitle: () => d.intl.string(d.t.Ra9Pwk),
    useSubtitle: () => d.intl.string(d.t.iYjQ8X),
    useLabel: () => d.intl.string(d.t.KT1pBA),
    useDisabled: () => {
        let { categories: e } = (0, i.cf)([a.A], () => a.A.getEmailSettings());
        return o.Zk.every((t) => !e[t]);
    },
    onClick: () => (0, l.NI)(),
    useVariant: () => "critical-secondary",
});

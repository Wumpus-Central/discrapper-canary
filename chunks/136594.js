n.d(t, { P: () => o });
var i = n(311907),
    s = n(419954),
    l = n(100406),
    a = n(878460),
    r = n(780964);
let o = n(431144).px.map((e) =>
    (0, s.zD)(`${r.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
        useTitle: e.label,
        useSubtitle: e.subLabel,
        useValue: () =>
            ((e) => {
                let { categories: t } = (0, i.cf)([a.A], () => a.A.getEmailSettings());
                return !!t[e];
            })(e.category),
        setValue: (t) => (0, l.CA)(e.category, t),
    }),
);

i.d(e, { P: () => a });
var n = i(311907),
    l = i(419954),
    s = i(100406),
    r = i(878460),
    u = i(780964);
let a = i(431144).px.map((t) =>
    (0, l.zD)("".concat(u.X.EMAIL_LIST_ITEM_PREFIX).concat(t.category), {
        useTitle: t.label,
        useSubtitle: t.subLabel,
        useValue: () =>
            ((t) => {
                let { categories: e } = (0, n.cf)([r.A], () => r.A.getEmailSettings());
                return !!e[t];
            })(t.category),
        setValue: (e) => (0, s.CA)(t.category, e),
    }),
);

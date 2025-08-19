n.d(t, { Z: () => s });
var i = n(442837),
    l = n(509613),
    o = n(960412),
    r = n(151662);
let s = n(930441).Od.map((e) =>
    (0, l.qs)(e.category, {
        useTitle: e.label,
        useSubtitle: e.subLabel,
        useValue: () =>
            ((e) => {
                let { categories: t } = (0, i.cj)([r.Z], () => r.Z.getEmailSettings());
                return !!t[e];
            })(e.category),
        setValue: (t) => (0, o.pR)(e.category, t),
    }),
);

n.d(t, { Z: () => a });
var i = n(442837),
    l = n(509613),
    s = n(960412),
    o = n(151662);
let a = n(930441).Od.map((e) =>
    (0, l.qs)(e.category, {
        useTitle: e.label,
        useSubtitle: e.subLabel,
        useValue: () =>
            ((e) => {
                let { categories: t } = (0, i.cj)([o.Z], () => o.Z.getEmailSettings());
                return !!t[e];
            })(e.category),
        setValue: (t) => (0, s.pR)(e.category, t),
    }),
);

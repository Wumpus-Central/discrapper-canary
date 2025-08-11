n.d(t, { Z: () => u });
var i = n(442837),
    l = n(509613),
    s = n(960412),
    o = n(151662),
    a = n(930441);
let r = (e) => {
        let { categories: t } = (0, i.cj)([o.Z], () => o.Z.getEmailSettings());
        return !!t[e];
    },
    u = a.Od.map((e) =>
        (0, l.qs)(e.category, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () => r(e.category),
            setValue: (t) => (0, s.pR)(e.category, t),
        }),
    );

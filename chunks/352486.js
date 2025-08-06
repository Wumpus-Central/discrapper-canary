n.d(t, { Z: () => c });
var i = n(442837),
    o = n(509613),
    l = n(960412),
    r = n(151662),
    a = n(930441);
let s = (e) => {
        let { categories: t } = (0, i.cj)([r.Z], () => r.Z.getEmailSettings());
        return !!t[e];
    },
    c = a.Od.map((e) =>
        (0, o.qs)(e.category, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () => s(e.category),
            setValue: (t) => (0, l.pR)(e.category, t),
        }),
    );

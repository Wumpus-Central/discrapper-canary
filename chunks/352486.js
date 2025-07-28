n.d(t, { Z: () => c });
var i = n(442837),
    a = n(281215),
    o = n(960412),
    s = n(151662),
    l = n(930441);
let r = (e) => {
        let { categories: t } = (0, i.cj)([s.Z], () => s.Z.getEmailSettings());
        return !!t[e];
    },
    c = l.Od.map((e) =>
        (0, a.qs)(e.category, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () => r(e.category),
            setValue: (t) => (0, o.pR)(e.category, t)
        })
    );

n.d(t, { Z: () => c });
var i = n(442837),
    o = n(509613),
    l = n(960412),
    a = n(151662),
    r = n(930441);
let s = (e) => {
        let { categories: t } = (0, i.cj)([a.Z], () => a.Z.getEmailSettings());
        return !!t[e];
    },
    c = r.Od.map((e) =>
        (0, o.qs)(e.category, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () => s(e.category),
            setValue: (t) => (0, l.pR)(e.category, t),
        }),
    );

n.d(t, { Z: () => o });
var i = n(442837),
    l = n(509613),
    r = n(960412),
    s = n(151662),
    a = n(869235);
let o = n(930441).Od.map((e) =>
    (0, l.qs)("".concat(a.t.EMAIL_LIST_ITEM_PREFIX).concat(e.category), {
        useTitle: e.label,
        useSubtitle: e.subLabel,
        useValue: () =>
            ((e) => {
                let { categories: t } = (0, i.cj)([s.Z], () => s.Z.getEmailSettings());
                return !!t[e];
            })(e.category),
        setValue: (t) => (0, r.pR)(e.category, t),
    }),
);

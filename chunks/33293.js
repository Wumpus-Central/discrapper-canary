var i = a(477900),
    r = a(503698),
    s = a.n(r),
    n = a(259204),
    c = a(343053),
    d = a(48763),
    l = a(955671);
let o = { [d.W.SM]: 224, [d.W.LG]: 448 };
a.d(
    t,
    {},
    {
        A: function (e) {
            let { character: t } = e,
                { size: a } = (0, c.Z)();
            return (0, i.jsx)("div", {
                className: s()(l.characterColumn, l[a]),
                children: (0, i.jsx)(n.A, { character: t, size: o[a], className: l.character }),
            });
        },
    },
);

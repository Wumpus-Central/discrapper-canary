var r = a(477900),
    i = a(582128),
    s = a(503698),
    n = a.n(s),
    c = a(373955),
    d = a(343053),
    l = a(610771);
a.d(
    t,
    {},
    {
        A: function (e) {
            let { cardColorPalette: t, size: a, className: s, style: o, children: u } = e,
                h = i.useMemo(() => {
                    let e = (0, c.j)(t);
                    return {
                        "--custom-checkpoint-card-primary": e.primaryBackgroundColor,
                        "--custom-checkpoint-card-secondary": e.secondaryBackgroundColor,
                        "--custom-checkpoint-card-tertiary": e.tertiaryBackgroundColor,
                        ...o,
                    };
                }, [t, o]),
                f = i.useMemo(() => ({ size: a }), [a]);
            return (0, r.jsx)(d.I.Provider, {
                value: f,
                children: (0, r.jsx)("div", { className: n()(l.container, l[a], s), style: h, children: u }),
            });
        },
    },
);

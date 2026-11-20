var i = a(477900),
    r = a(582128),
    n = a(503698),
    s = a.n(n),
    c = a(373955),
    d = a(343053),
    l = a(610771);
a.d(
    t,
    {},
    {
        A: function (e) {
            let { cardColorPalette: t, size: a, className: n, style: o, isLoading: u = !1, inert: h, children: f } = e,
                b = r.useMemo(() => {
                    let e = (0, c.j)(t);
                    return {
                        "--custom-checkpoint-card-primary": e.primaryBackgroundColor,
                        "--custom-checkpoint-card-secondary": e.secondaryBackgroundColor,
                        "--custom-checkpoint-card-tertiary": e.tertiaryBackgroundColor,
                        ...o,
                    };
                }, [t, o]),
                p = r.useMemo(() => ({ size: a }), [a]);
            return (0, i.jsx)(d.I.Provider, {
                value: p,
                children: (0, i.jsx)("div", {
                    className: s()(l.container, l.reveal, l[a], { [l.loading]: u }, n),
                    style: b,
                    inert: h,
                    children: f,
                }),
            });
        },
    },
);

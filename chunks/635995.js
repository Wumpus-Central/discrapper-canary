n.d(t, {
    In: () => d,
    T0: () => p,
    fY: () => f,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(732955),
    o = n(397927),
    l = n(818348),
    c = n(985018),
    u = n(659039);
let d = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(o.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: u.ut,
            children: t,
        });
    },
    f = (e) => {
        let { text: t, onClick: n } = e;
        return (0, r.jsx)(s.$nd, {
            onClick: n,
            text: t,
            size: "sm",
            icon: o.tvc,
            variant: "secondary",
        });
    };

function p(e) {
    let { className: t, ref: n, children: i, onClick: s } = e;
    return (0, r.jsx)(o.NPJ, {
        theme: l.NJ.DARKER,
        children: (e) =>
            (0, r.jsxs)("div", {
                ref: n,
                className: a()(u.lm, e, t),
                children: [
                    (0, r.jsx)("div", {
                        className: u.qZ,
                        children: i,
                    }),
                    (0, r.jsx)(o.DUT, {
                        focusProps: {
                            offset: 6,
                        },
                        className: u.b,
                        onClick: s,
                        "aria-label": c.intl.string(c.t.WAI6xu),
                        children: (0, r.jsx)(o.PGe, {
                            size: "sm",
                        }),
                    }),
                ],
            }),
    });
}

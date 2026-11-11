var l = n(477900),
    r = n(196765),
    i = n(855986),
    s = n(111162),
    a = n(779016);
let o = (0, r.v)((e) => ({
    horizontalSpacing: 4,
    verticalSpacing: 4,
    setHorizontalSpacing: (t) => {
        e({ horizontalSpacing: Math.round(Math.min(Math.max(t, 0), 64)) });
    },
    setVerticalSpacing: (t) => {
        e({ verticalSpacing: Math.round(Math.min(Math.max(t, 0), 64)) });
    },
}));
n.d(
    t,
    {},
    {
        C: function () {
            let e = (0, i.bG)([s.default], () => s.default.layoutDebuggingEnabled),
                { horizontalSpacing: t, verticalSpacing: n } = o();
            if (e) {
                let e = { "--custom-grid-horizontal-spacing": `${t}px`, "--custom-grid-vertical-spacing": `${n}px` };
                return (0, l.jsx)("div", {
                    className: a.k,
                    children: (0, l.jsx)("div", {
                        className: a.Z,
                        "data-horizontal": t > 0,
                        "data-vertical": n > 0,
                        style: e,
                    }),
                });
            }
            return null;
        },
        O: o,
    },
);

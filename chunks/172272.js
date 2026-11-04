var i = n(477900),
    s = n(196765),
    r = n(855986),
    l = n(111162),
    a = n(779016);
let o = (0, s.v)((e) => ({
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
            let e = (0, r.bG)([l.default], () => l.default.layoutDebuggingEnabled),
                { horizontalSpacing: t, verticalSpacing: n } = o();
            if (e) {
                let e = { "--custom-grid-horizontal-spacing": `${t}px`, "--custom-grid-vertical-spacing": `${n}px` };
                return (0, i.jsx)("div", {
                    className: a.k,
                    children: (0, i.jsx)("div", {
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

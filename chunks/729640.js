n.d(t, { P: () => a });
var r = n(627968);
n(64700);
var l = n(934204),
    s = n(75662);
let a = (e) => {
    let { percentage: t } = e;
    return (0, r.jsxs)("div", {
        className: s.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, r.jsx)(
                    () =>
                        (0, r.jsx)("div", {
                            className: s.ML,
                            style: { left: `calc(${t}% - 5px)` },
                            children: (0, r.jsx)(l.z, {}),
                        }),
                    {},
                ),
            (0, r.jsx)("div", { className: s.SX, style: { width: `${t}%` } }),
        ],
    });
};

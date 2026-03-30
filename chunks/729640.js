r.d(t, { P: () => i });
var a = r(627968);
r(64700);
var n = r(934204),
    s = r(276478);
let i = (e) => {
    let { percentage: t } = e;
    return (0, a.jsxs)("div", {
        className: s.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, a.jsx)(
                    () =>
                        (0, a.jsx)("div", {
                            className: s.ML,
                            style: { left: `calc(${t}% - 5px)` },
                            children: (0, a.jsx)(n.z, {}),
                        }),
                    {},
                ),
            (0, a.jsx)("div", { className: s.SX, style: { width: `${t}%` } }),
        ],
    });
};

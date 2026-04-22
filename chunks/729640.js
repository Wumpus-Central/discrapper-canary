s.d(t, { P: () => l });
var n = s(627968);
s(64700);
var a = s(934204),
    r = s(738894);
let l = (e) => {
    let { percentage: t } = e;
    return (0, n.jsxs)("div", {
        className: r.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, n.jsx)(
                    () =>
                        (0, n.jsx)("div", {
                            className: r.ML,
                            style: { left: `calc(${t}% - 5px)` },
                            children: (0, n.jsx)(a.z, {}),
                        }),
                    {},
                ),
            (0, n.jsx)("div", { className: r.SX, style: { width: `${t}%` } }),
        ],
    });
};

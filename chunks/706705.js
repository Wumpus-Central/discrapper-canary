n.d(t, { Z: () => s }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(933767);
function s() {
    let [e, t] = i.useState(!1),
        [s, l] = i.useState(20),
        [c, u] = i.useState(80);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(a.Kqy, {
                gap: 8,
                children: [
                    (0, r.jsx)(a.j7V, {
                        value: e,
                        onChange: () => t(!e),
                        children: "Enable Rive",
                    }),
                    (0, r.jsxs)(a.Kqy, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(a.R94, { children: "Number of animations" }),
                            (0, r.jsx)(a.iRW, {
                                initialValue: s,
                                defaultValue: 20,
                                onValueRender: (e) => "".concat(Math.round(e), " animations"),
                                asValueChanges: (e) => l(Math.round(e)),
                                minValue: 1,
                                maxValue: 500,
                                markers: [1, ...Array.from({ length: 25 }, (e, t) => (t + 1) * 20)],
                                stickToMarkers: !0,
                            }),
                        ],
                    }),
                    (0, r.jsxs)(a.Kqy, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(a.R94, { children: "Animation size" }),
                            (0, r.jsx)(a.iRW, {
                                initialValue: c,
                                defaultValue: 80,
                                onValueRender: (e) => "".concat(Math.round(e), "px"),
                                onValueChange: (e) => u(Math.round(e)),
                                minValue: 10,
                                maxValue: 300,
                                markers: [10, 50, 100, 200, 300],
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    rowGap: "10px",
                    columnGap: "10px",
                    "--animation-size": "".concat(c, "px"),
                },
                children: Array.from({ length: s }).map((t, i) =>
                    e
                        ? (0, r.jsx)(
                              a.t7u,
                              {
                                  eventTargetRef: { current: document.body },
                                  className: o.animationObj,
                              },
                              i,
                          )
                        : (0, r.jsx)(
                              a.Fmz,
                              {
                                  importData: () => n.e("37372").then(n.t.bind(n, 459274, 19)),
                                  className: o.animationObj,
                              },
                              i,
                          ),
                ),
            }),
        ],
    });
}

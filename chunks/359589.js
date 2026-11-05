var l = n(477900),
    r = n(582128),
    i = n(691885),
    a = n(143129),
    s = n(834730),
    o = n(123292),
    u = n(534554),
    d = n(56681),
    c = n(392208),
    f = n(2372),
    h = n(590221),
    p = n(191850),
    m = n(792996),
    x = n(944847);
function g(e) {
    let { settings: t, tiers: n, choices: s, disabled: o, onChange: c } = e,
        f = r.useMemo(
            () => s.main.map((e) => ({ id: String(e.id), label: e.label, value: e.id, description: e.provider_label })),
            [s.main],
        ),
        h = r.useMemo(() => s.thinking.map((e) => ({ id: e, label: d.hW[e] ?? e, value: e })), [s.thinking]);
    function x(e) {
        c((0, u.CM)(e));
    }
    let g = (0, u.Id)(t, n, t.tier);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != g
                ? (0, l.jsx)(i.l, {
                      label: m.intl.string(p.default["59TDiR"]),
                      options: f,
                      value: g,
                      onSelectionChange: (e) => x((0, u.t7)(t, t.tier, e)),
                      selectionMode: "single",
                      disabled: o,
                      fullWidth: !0,
                  })
                : null,
            (0, l.jsx)(i.l, {
                label: m.intl.string(p.default.fpdVCO),
                options: h,
                value: t.thinking ?? n?.[t.tier]?.thinking ?? "",
                onSelectionChange: (e) => x({ ...t, thinking: e }),
                selectionMode: "single",
                disabled: o,
                fullWidth: !0,
            }),
            (0, u.gz)(t, n, s.main)
                ? (0, l.jsx)(a.d, {
                      label: m.intl.string(p.default["5AblQX"]),
                      description: m.intl.string(p.default.QnUV8M),
                      checked: !0 === t.fast,
                      disabled: o,
                      onChange: (e) => x({ ...t, fast: e }),
                  })
                : null,
        ],
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { settings: t, tiers: n, choices: i, disabled: a, onChange: d } = e,
                v = c.P.indexOf(t.tier),
                b = (0, u.hl)(i),
                [y, M] = r.useState(!1);
            return (0, l.jsxs)("div", {
                className: x.OA,
                children: [
                    (0, l.jsxs)("div", {
                        className: x.hs,
                        children: [
                            (0, l.jsxs)("div", {
                                className: x.UT,
                                children: [
                                    (0, l.jsx)(s.E, {
                                        tag: "span",
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: m.intl.string(p.default.aBPQxX),
                                    }),
                                    (0, l.jsx)(s.E, {
                                        tag: "span",
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: (0, u.Tc)(t.tier),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(f.A, {}),
                            (0, l.jsx)(h.A, {
                                activeIndex: v,
                                stops: c.P.map(u.pL),
                                lockedStops: u.bt,
                                ariaLabel: m.intl.string(p.default.aBPQxX),
                                disabled: a,
                                onSelect: function (e) {
                                    let n = c.P[e];
                                    null != n && n !== t.tier && (0, u.g_)(n) && d((0, u.CM)((0, u.j6)(t, n)));
                                },
                            }),
                        ],
                    }),
                    b
                        ? (0, l.jsx)("div", {
                              className: x.XF,
                              children: (0, l.jsx)(o.Q, {
                                  text: m.intl.string(p.default.YLHRzA),
                                  variant: "secondary",
                                  textVariant: "body-sm/medium",
                                  "aria-expanded": y,
                                  onClick: () => M((e) => !e),
                              }),
                          })
                        : null,
                    b && y ? (0, l.jsx)(g, { settings: t, tiers: n, choices: i, disabled: a, onChange: d }) : null,
                ],
            });
        },
        b: g,
    },
);

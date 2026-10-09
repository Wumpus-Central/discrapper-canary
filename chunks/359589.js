n.d(t, { Ay: () => b, FT: () => m, bR: () => g });
var l = n(477900),
    i = n(582128),
    a = n(691885),
    r = n(193249),
    u = n(834730),
    s = n(164892),
    o = n(534554),
    d = n(56681),
    c = n(837984),
    f = n(248675),
    p = n(660183),
    h = n(944847);
function m(e, t) {
    let [n, l] = i.useState(null),
        [a, r] = i.useState(e);
    return (
        e !== a && (r(e), l(null)),
        [
            n ?? e,
            i.useCallback(
                (e) => {
                    (l(e), t(e));
                },
                [t],
            ),
        ]
    );
}
function g(e) {
    let { settings: t, tiers: n, choices: u, disabled: s, onChange: c } = e,
        h = i.useMemo(
            () => u.main.map((e) => ({ id: e.id, label: e.label, value: e.id, description: d.oU[e.provider] })),
            [u.main],
        ),
        m = i.useMemo(() => u.thinking.map((e) => ({ id: e, label: d.hW[e] ?? e, value: e })), [u.thinking]);
    function g(e) {
        c((0, o.CM)(e));
    }
    let b = (0, o.Id)(t, n, t.tier);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != b
                ? (0, l.jsx)(a.l, {
                      label: p.intl.string(f.default["59TDiR"]),
                      options: h,
                      value: b,
                      onSelectionChange: (e) => g((0, o.t7)(t, t.tier, e)),
                      selectionMode: "single",
                      disabled: s,
                      fullWidth: !0,
                  })
                : null,
            (0, l.jsx)(a.l, {
                label: p.intl.string(f.default.fpdVCO),
                options: m,
                value: t.thinking ?? n?.[t.tier]?.thinking ?? "",
                onSelectionChange: (e) => g({ ...t, thinking: e }),
                selectionMode: "single",
                disabled: s,
                fullWidth: !0,
            }),
            (0, o.gz)(t, n, u.main)
                ? (0, l.jsx)(r.d, {
                      label: p.intl.string(f.default["5AblQX"]),
                      description: p.intl.string(f.default.QnUV8M),
                      checked: !0 === t.fast,
                      disabled: s,
                      onChange: (e) => g({ ...t, fast: e }),
                  })
                : null,
        ],
    });
}
function b(e) {
    let { settings: t, tiers: n, choices: i, disabled: a, onChange: r } = e,
        d = s.PY.indexOf(t.tier);
    return (0, l.jsxs)("div", {
        className: h.OA,
        children: [
            (0, l.jsxs)("div", {
                className: h.hs,
                children: [
                    (0, l.jsxs)("div", {
                        className: h.UT,
                        children: [
                            (0, l.jsx)(u.E, {
                                tag: "span",
                                variant: "text-md/medium",
                                color: "text-default",
                                children: p.intl.string(f.default.aBPQxX),
                            }),
                            (0, l.jsx)(u.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: (0, o.Tc)(t.tier),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: h.Nb,
                        children: [
                            (0, l.jsx)(u.E, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: p.intl.string(f.default["/tlOR5"]),
                            }),
                            (0, l.jsx)(u.E, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: p.intl.string(f.default.FxoUwB),
                            }),
                        ],
                    }),
                    (0, l.jsx)(c.A, {
                        activeIndex: d,
                        stops: s.PY.map(o.D0),
                        ariaLabel: p.intl.string(f.default.aBPQxX),
                        disabled: a,
                        onSelect: function (e) {
                            let n = s.PY[e];
                            null != n && n !== t.tier && r((0, o.CM)((0, o.j6)(t, n)));
                        },
                    }),
                ],
            }),
            (0, l.jsx)(g, { settings: t, tiers: n, choices: i, disabled: a, onChange: r }),
        ],
    });
}

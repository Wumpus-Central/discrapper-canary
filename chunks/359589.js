n.d(t, { A: () => x, b: () => p });
var r = n(477900),
    l = n(582128),
    i = n(691885),
    a = n(193249),
    s = n(834730),
    u = n(534554),
    o = n(56681),
    d = n(392208),
    c = n(837984),
    f = n(87501),
    h = n(105292),
    m = n(944847);
function p(e) {
    let { settings: t, tiers: n, choices: s, disabled: d, onChange: c } = e,
        m = l.useMemo(
            () => s.main.map((e) => ({ id: String(e.id), label: e.label, value: e.id, description: e.provider_label })),
            [s.main],
        ),
        p = l.useMemo(() => s.thinking.map((e) => ({ id: e, label: o.hW[e] ?? e, value: e })), [s.thinking]);
    function x(e) {
        c((0, u.CM)(e));
    }
    let g = (0, u.Id)(t, n, t.tier);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, u.hl)(s) && null != g
                ? (0, r.jsx)(i.l, {
                      label: h.intl.string(f.default["59TDiR"]),
                      options: m,
                      value: g,
                      onSelectionChange: (e) => x((0, u.t7)(t, t.tier, e)),
                      selectionMode: "single",
                      disabled: d,
                      fullWidth: !0,
                  })
                : null,
            (0, r.jsx)(i.l, {
                label: h.intl.string(f.default.fpdVCO),
                options: p,
                value: t.thinking ?? n?.[t.tier]?.thinking ?? "",
                onSelectionChange: (e) => x({ ...t, thinking: e }),
                selectionMode: "single",
                disabled: d,
                fullWidth: !0,
            }),
            (0, u.gz)(t, n, s.main)
                ? (0, r.jsx)(a.d, {
                      label: h.intl.string(f.default["5AblQX"]),
                      description: h.intl.string(f.default.QnUV8M),
                      checked: !0 === t.fast,
                      disabled: d,
                      onChange: (e) => x({ ...t, fast: e }),
                  })
                : null,
        ],
    });
}
function x(e) {
    let { settings: t, tiers: n, choices: l, disabled: i, onChange: a } = e,
        o = d.P.indexOf(t.tier);
    return (0, r.jsxs)("div", {
        className: m.OA,
        children: [
            (0, r.jsxs)("div", {
                className: m.hs,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.UT,
                        children: [
                            (0, r.jsx)(s.E, {
                                tag: "span",
                                variant: "text-md/medium",
                                color: "text-default",
                                children: h.intl.string(f.default.aBPQxX),
                            }),
                            (0, r.jsx)(s.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: (0, u.Tc)(t.tier),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: m.Nb,
                        children: [
                            (0, r.jsx)(s.E, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: h.intl.string(f.default["/tlOR5"]),
                            }),
                            (0, r.jsx)(s.E, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: h.intl.string(f.default.FxoUwB),
                            }),
                        ],
                    }),
                    (0, r.jsx)(c.A, {
                        activeIndex: o,
                        stops: d.P.map(u.D0),
                        ariaLabel: h.intl.string(f.default.aBPQxX),
                        disabled: i,
                        onSelect: function (e) {
                            let n = d.P[e];
                            null != n && n !== t.tier && a((0, u.CM)((0, u.j6)(t, n)));
                        },
                    }),
                ],
            }),
            (0, r.jsx)(p, { settings: t, tiers: n, choices: l, disabled: i, onChange: a }),
        ],
    });
}

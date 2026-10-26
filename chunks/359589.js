l.d(t, { A: () => g, b: () => m });
var n = l(477900),
    a = l(582128),
    i = l(691885),
    r = l(193249),
    u = l(834730),
    s = l(534554),
    o = l(56681),
    d = l(392208),
    c = l(837984),
    f = l(248675),
    p = l(105292),
    h = l(944847);
function m(e) {
    let { settings: t, tiers: l, choices: u, disabled: d, onChange: c } = e,
        h = a.useMemo(
            () => u.main.map((e) => ({ id: String(e.id), label: e.label, value: e.id, description: e.provider_label })),
            [u.main],
        ),
        m = a.useMemo(() => u.thinking.map((e) => ({ id: e, label: o.hW[e] ?? e, value: e })), [u.thinking]);
    function g(e) {
        c((0, s.CM)(e));
    }
    let x = (0, s.Id)(t, l, t.tier);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, s.hl)(u) && null != x
                ? (0, n.jsx)(i.l, {
                      label: p.intl.string(f.default["59TDiR"]),
                      options: h,
                      value: x,
                      onSelectionChange: (e) => g((0, s.t7)(t, t.tier, e)),
                      selectionMode: "single",
                      disabled: d,
                      fullWidth: !0,
                  })
                : null,
            (0, n.jsx)(i.l, {
                label: p.intl.string(f.default.fpdVCO),
                options: m,
                value: t.thinking ?? l?.[t.tier]?.thinking ?? "",
                onSelectionChange: (e) => g({ ...t, thinking: e }),
                selectionMode: "single",
                disabled: d,
                fullWidth: !0,
            }),
            (0, s.gz)(t, l, u.main)
                ? (0, n.jsx)(r.d, {
                      label: p.intl.string(f.default["5AblQX"]),
                      description: p.intl.string(f.default.QnUV8M),
                      checked: !0 === t.fast,
                      disabled: d,
                      onChange: (e) => g({ ...t, fast: e }),
                  })
                : null,
        ],
    });
}
function g(e) {
    let { settings: t, tiers: l, choices: a, disabled: i, onChange: r } = e,
        o = d.P.indexOf(t.tier);
    return (0, n.jsxs)("div", {
        className: h.OA,
        children: [
            (0, n.jsxs)("div", {
                className: h.hs,
                children: [
                    (0, n.jsxs)("div", {
                        className: h.UT,
                        children: [
                            (0, n.jsx)(u.E, {
                                tag: "span",
                                variant: "text-md/medium",
                                color: "text-default",
                                children: p.intl.string(f.default.aBPQxX),
                            }),
                            (0, n.jsx)(u.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: (0, s.Tc)(t.tier),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: h.Nb,
                        children: [
                            (0, n.jsx)(u.E, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: p.intl.string(f.default["/tlOR5"]),
                            }),
                            (0, n.jsx)(u.E, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: p.intl.string(f.default.FxoUwB),
                            }),
                        ],
                    }),
                    (0, n.jsx)(c.A, {
                        activeIndex: o,
                        stops: d.P.map(s.D0),
                        ariaLabel: p.intl.string(f.default.aBPQxX),
                        disabled: i,
                        onSelect: function (e) {
                            let l = d.P[e];
                            null != l && l !== t.tier && r((0, s.CM)((0, s.j6)(t, l)));
                        },
                    }),
                ],
            }),
            (0, n.jsx)(m, { settings: t, tiers: l, choices: a, disabled: i, onChange: r }),
        ],
    });
}

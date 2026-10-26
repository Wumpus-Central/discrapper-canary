n.d(t, { A: () => m, b: () => g });
var l = n(477900),
    a = n(582128),
    i = n(691885),
    r = n(193249),
    u = n(834730),
    s = n(534554),
    o = n(56681),
    d = n(392208),
    c = n(837984),
    f = n(248675),
    p = n(105292),
    h = n(944847);
function g(e) {
    let { settings: t, tiers: n, choices: u, disabled: d, onChange: c } = e,
        h = a.useMemo(
            () => u.main.map((e) => ({ id: String(e.id), label: e.label, value: e.id, description: e.provider_label })),
            [u.main],
        ),
        g = a.useMemo(() => u.thinking.map((e) => ({ id: e, label: o.hW[e] ?? e, value: e })), [u.thinking]);
    function m(e) {
        c((0, s.CM)(e));
    }
    let v = (0, s.Id)(t, n, t.tier);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, s.hl)(u) && null != v
                ? (0, l.jsx)(i.l, {
                      label: p.intl.string(f.default["59TDiR"]),
                      options: h,
                      value: v,
                      onSelectionChange: (e) => m((0, s.t7)(t, t.tier, e)),
                      selectionMode: "single",
                      disabled: d,
                      fullWidth: !0,
                  })
                : null,
            (0, l.jsx)(i.l, {
                label: p.intl.string(f.default.fpdVCO),
                options: g,
                value: t.thinking ?? n?.[t.tier]?.thinking ?? "",
                onSelectionChange: (e) => m({ ...t, thinking: e }),
                selectionMode: "single",
                disabled: d,
                fullWidth: !0,
            }),
            (0, s.gz)(t, n, u.main)
                ? (0, l.jsx)(r.d, {
                      label: p.intl.string(f.default["5AblQX"]),
                      description: p.intl.string(f.default.QnUV8M),
                      checked: !0 === t.fast,
                      disabled: d,
                      onChange: (e) => m({ ...t, fast: e }),
                  })
                : null,
        ],
    });
}
function m(e) {
    let { settings: t, tiers: n, choices: a, disabled: i, onChange: r } = e,
        o = d.P.indexOf(t.tier);
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
                                children: (0, s.Tc)(t.tier),
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
                        activeIndex: o,
                        stops: d.P.map(s.D0),
                        ariaLabel: p.intl.string(f.default.aBPQxX),
                        disabled: i,
                        onSelect: function (e) {
                            let n = d.P[e];
                            null != n && n !== t.tier && r((0, s.CM)((0, s.j6)(t, n)));
                        },
                    }),
                ],
            }),
            (0, l.jsx)(g, { settings: t, tiers: n, choices: a, disabled: i, onChange: r }),
        ],
    });
}

n.d(t, { A: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(296991),
    u = n(999382),
    g = n(217472),
    m = n(651390),
    p = n(388032),
    f = n(229271);
function h(e) {
    let { requireTerms: t, rules: n } = e,
        l = (0, o.e7)([u.Z], () => u.Z.getProps().guild),
        h = null == l ? void 0 : l.id,
        b = i.useCallback(
            (e) => {
                if (null == h || null == n) return null;
                g.Z.setPendingInviteRules(h, e, [...n]);
            },
            [h, n],
        ),
        x = i.useCallback(
            (e) => {
                if (null == h) return null;
                g.Z.setPendingInviteRules(h, t, e);
            },
            [h, t],
        );
    return null == l
        ? null
        : null == n
          ? (0, r.jsx)(c.$jN, {})
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.rsf, {
                        label: p.intl.string(p.t.d21uOr),
                        description: p.intl.string(p.t.SzpUBF),
                        onChange: b,
                        checked: t,
                    }),
                    t && (0, r.jsx)(m.c, { guildId: l.id }),
                    (0, r.jsx)("div", {
                        className: a()(f.rules, { [f.disabled]: !t }),
                        children: (0, r.jsxs)("div", {
                            inert: t ? void 0 : "",
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: f.rulesHeader,
                                    children: p.intl.string(p.t.XcAzbo),
                                }),
                                (0, r.jsx)(d.k, {
                                    guild: l,
                                    rules: n,
                                    setRules: x,
                                    disabled: !t,
                                }),
                            ],
                        }),
                    }),
                ],
            });
}

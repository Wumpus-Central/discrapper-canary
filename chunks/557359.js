n.d(t, { A: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(296991),
    u = n(999382),
    m = n(217472),
    g = n(651390),
    p = n(388032),
    f = n(58801);
function h(e) {
    let { requireTerms: t, rules: n } = e,
        l = (0, o.e7)([u.Z], () => u.Z.getProps().guild),
        h = null == l ? void 0 : l.id,
        x = i.useCallback(
            (e) => {
                if (null == h || null == n) return null;
                m.Z.setPendingInviteRules(h, e, [...n]);
            },
            [h, n],
        ),
        b = i.useCallback(
            (e) => {
                if (null == h) return null;
                m.Z.setPendingInviteRules(h, t, e);
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
                        label: p.intl.string(p.t.d21uOj),
                        description: p.intl.string(p.t.SzpUBA),
                        onChange: x,
                        checked: t,
                    }),
                    t && (0, r.jsx)(g.c, { guildId: l.id }),
                    (0, r.jsx)("div", {
                        className: s()(f.rules, { [f.disabled]: !t }),
                        children: (0, r.jsxs)("div", {
                            inert: t ? void 0 : "",
                            children: [
                                (0, r.jsx)(a.X6q, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: f.rulesHeader,
                                    children: p.intl.string(p.t.XcAzbm),
                                }),
                                (0, r.jsx)(d.k, {
                                    guild: l,
                                    rules: n,
                                    setRules: b,
                                    disabled: !t,
                                }),
                            ],
                        }),
                    }),
                ],
            });
}

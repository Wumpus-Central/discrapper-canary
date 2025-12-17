n.d(t, { A: () => p }), n(388685);
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
    f = n(651390),
    m = n(388032),
    b = n(651612);
function p(e) {
    let { requireTerms: t, rules: n } = e,
        l = (0, o.e7)([u.Z], () => u.Z.getProps().guild),
        p = null == l ? void 0 : l.id,
        h = i.useCallback(
            (e) => {
                if (null == p || null == n) return null;
                g.Z.setPendingInviteRules(p, e, [...n]);
            },
            [p, n],
        ),
        x = i.useCallback(
            (e) => {
                if (null == p) return null;
                g.Z.setPendingInviteRules(p, t, e);
            },
            [p, t],
        );
    return null == l
        ? null
        : null == n
          ? (0, r.jsx)(c.$jN, {})
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.rsf, {
                        label: m.intl.string(m.t.d21uOr),
                        description: m.intl.string(m.t.SzpUBF),
                        onChange: h,
                        checked: t,
                    }),
                    t && (0, r.jsx)(f.c, { guildId: l.id }),
                    (0, r.jsx)("div", {
                        className: a()(b.rules, { [b.disabled]: !t }),
                        children: (0, r.jsxs)("div", {
                            inert: t ? void 0 : "",
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: b.rulesHeader,
                                    children: m.intl.string(m.t.XcAzbo),
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

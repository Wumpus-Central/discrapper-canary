n.d(t, { D: () => p }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(158954),
    c = n(311907),
    o = n(397927),
    d = n(241499),
    u = n(555337),
    f = n(564864),
    g = n(501381),
    b = n(985018),
    m = n(82196);
function p(e) {
    let { requireTerms: t, rules: n } = e,
        l = (0, c.bG)([u.A], () => u.A.getProps().guild),
        p = null == l ? void 0 : l.id,
        x = i.useCallback(
            (e) => {
                if (null == p || null == n) return null;
                f.A.setPendingInviteRules(p, e, [...n]);
            },
            [p, n],
        ),
        h = i.useCallback(
            (e) => {
                if (null == p) return null;
                f.A.setPendingInviteRules(p, t, e);
            },
            [p, t],
        );
    return null == l
        ? null
        : null == n
          ? (0, r.jsx)(o.y$y, {})
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.dOG, {
                        label: b.intl.string(b.t.d21uOr),
                        description: b.intl.string(b.t.SzpUBF),
                        onChange: x,
                        checked: t,
                    }),
                    t && (0, r.jsx)(g.o, { guildId: l.id }),
                    (0, r.jsx)("div", {
                        className: s()(m.aO, { [m.r9]: !t }),
                        children: (0, r.jsxs)("div", {
                            inert: t ? void 0 : "",
                            children: [
                                (0, r.jsx)(a.DZT, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: m.lo,
                                    children: b.intl.string(b.t.XcAzbo),
                                }),
                                (0, r.jsx)(d._, {
                                    guild: l,
                                    rules: n,
                                    setRules: h,
                                    disabled: !t,
                                }),
                            ],
                        }),
                    }),
                ],
            });
}

n.d(t, { D: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(534514),
    o = n(311907),
    d = n(289873),
    c = n(243721),
    u = n(241499),
    m = n(555337),
    g = n(564864),
    h = n(501381),
    x = n(985018),
    _ = n(442411);
function p(e) {
    let { requireTerms: t, rules: n } = e,
        s = (0, o.bG)([m.A], () => m.A.getProps().guild),
        p = s?.id,
        A = l.useCallback(
            (e) => {
                if (null == p || null == n) return null;
                g.A.setPendingInviteRules(p, e, [...n]);
            },
            [p, n],
        ),
        E = l.useCallback(
            (e) => {
                if (null == p) return null;
                g.A.setPendingInviteRules(p, t, e);
            },
            [p, t],
        );
    return null == s
        ? null
        : null == n
          ? (0, i.jsx)(d.y, {})
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(c.d, {
                        label: x.intl.string(x.t.d21uOr),
                        description: x.intl.string(x.t.SzpUBF),
                        onChange: A,
                        checked: t,
                    }),
                    t && (0, i.jsx)(h.o, { guildId: s.id }),
                    (0, i.jsx)("div", {
                        className: r()(_.aO, { [_.r9]: !t }),
                        children: (0, i.jsxs)("div", {
                            inert: t ? void 0 : "",
                            children: [
                                (0, i.jsx)(a.D, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: _.lo,
                                    children: x.intl.string(x.t.XcAzbo),
                                }),
                                (0, i.jsx)(u._, { guild: s, rules: n, setRules: E, disabled: !t }),
                            ],
                        }),
                    }),
                ],
            });
}

n.d(t, { A: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(442837),
    c = n(755721),
    d = n(481060),
    u = n(296991),
    m = n(999382),
    g = n(217472),
    p = n(651390),
    f = n(388032),
    h = n(58801);
function b(e) {
    let { requireTerms: t, rules: n } = e,
        l = (0, o.e7)([m.Z], () => m.Z.getProps().guild),
        b = null == l ? void 0 : l.id,
        x = i.useCallback(
            (e) => {
                if (null == b || null == n) return null;
                g.Z.setPendingInviteRules(b, e, [...n]);
            },
            [b, n],
        ),
        j = i.useCallback(
            (e) => {
                if (null == b) return null;
                g.Z.setPendingInviteRules(b, t, e);
            },
            [b, t],
        );
    return null == l
        ? null
        : null == n
          ? (0, r.jsx)(d.$jN, {})
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: h.headerContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: h.headerText,
                                children: [
                                    (0, r.jsx)(s.X6, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: f.intl.string(f.t.d21uOj),
                                    }),
                                    (0, r.jsx)(s.xv, {
                                        tag: "p",
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        className: h.bodyText,
                                        children: f.intl.string(f.t.SzpUBA),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.T2, {
                                onChange: x,
                                checked: t,
                            }),
                        ],
                    }),
                    t && (0, r.jsx)(p.c, { guildId: l.id }),
                    (0, r.jsx)("div", {
                        className: a()(h.rules, { [h.disabled]: !t }),
                        children: (0, r.jsxs)("div", {
                            inert: t ? void 0 : "",
                            children: [
                                (0, r.jsx)(s.X6, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: h.rulesHeader,
                                    children: f.intl.string(f.t.XcAzbm),
                                }),
                                (0, r.jsx)(u.k, {
                                    guild: l,
                                    rules: n,
                                    setRules: j,
                                    disabled: !t,
                                }),
                            ],
                        }),
                    }),
                ],
            });
}

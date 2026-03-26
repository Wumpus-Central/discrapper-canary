"use strict";
n.d(t, { D: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(158954),
    o = n(311907),
    d = n(397927),
    c = n(241499),
    u = n(555337),
    m = n(564864),
    g = n(501381),
    x = n(985018),
    h = n(436123);
function _(e) {
    let { requireTerms: t, rules: n } = e,
        l = (0, o.bG)([u.A], () => u.A.getProps().guild),
        _ = l?.id,
        p = s.useCallback(
            (e) => {
                if (null == _ || null == n) return null;
                m.A.setPendingInviteRules(_, e, [...n]);
            },
            [_, n],
        ),
        A = s.useCallback(
            (e) => {
                if (null == _) return null;
                m.A.setPendingInviteRules(_, t, e);
            },
            [_, t],
        );
    return null == l
        ? null
        : null == n
          ? (0, i.jsx)(d.y$y, {})
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.dOG, {
                        label: x.intl.string(x.t.d21uOr),
                        description: x.intl.string(x.t.SzpUBF),
                        onChange: p,
                        checked: t,
                    }),
                    t && (0, i.jsx)(g.o, { guildId: l.id }),
                    (0, i.jsx)("div", {
                        className: r()(h.aO, { [h.r9]: !t }),
                        children: (0, i.jsxs)("div", {
                            inert: t ? void 0 : "",
                            children: [
                                (0, i.jsx)(a.DZT, {
                                    variant: "text-xs/bold",
                                    color: "text-muted",
                                    className: h.lo,
                                    children: x.intl.string(x.t.XcAzbo),
                                }),
                                (0, i.jsx)(c._, { guild: l, rules: n, setRules: A, disabled: !t }),
                            ],
                        }),
                    }),
                ],
            });
}

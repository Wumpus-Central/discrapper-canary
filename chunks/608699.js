n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(607399),
    a = n(732955),
    s = n(397927),
    o = n(9113),
    l = n(599941),
    c = n(590632),
    u = n(146528),
    d = n(985018),
    f = n(183183);
let p = (e) => {
    let { onGoBack: t } = e,
        n = (0, c.A)(),
        { loading: p } = (0, l.eb)(n);
    return ((0, o.A)(i.Fr ? "role-subscriptions-user-setting" : void 0), p)
        ? (0, r.jsx)(s.y$y, {})
        : 0 === n.length
          ? null
          : (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(a.$nd, {
                        text: d.intl.string(d.t.hqyhKQ),
                        icon: s.z$m,
                        variant: "secondary",
                        onClick: t,
                    }),
                    (0, r.jsx)(s.hKd, {
                        size: 10,
                    }),
                    (0, r.jsx)(s.nVY, {
                        label: d.intl.string(d.t["KzCF/6"]),
                        description: d.intl.string(d.t["Y+ucR7"]),
                        children: (0, r.jsx)("div", {
                            className: f.A,
                            children: n.map((e) =>
                                (0, r.jsx)(
                                    u.A,
                                    {
                                        subscription: e,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    }),
                ],
            });
};

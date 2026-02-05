n.d(t, { A: () => m });
var i = n(627968),
    s = n(607399),
    r = n(732955),
    a = n(397927),
    l = n(9113),
    o = n(599941),
    c = n(590632),
    d = n(146528),
    u = n(985018),
    _ = n(405564);
let m = (e) => {
    let { onGoBack: t } = e,
        n = (0, c.A)(),
        { loading: m } = (0, o.eb)(n);
    return ((0, l.A)(s.Fr ? "role-subscriptions-user-setting" : void 0), m)
        ? (0, i.jsx)(a.y$y, {})
        : 0 === n.length
          ? null
          : (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(r.$nd, {
                        text: u.intl.string(u.t.hqyhKQ),
                        icon: a.z$m,
                        variant: "secondary",
                        onClick: t,
                    }),
                    (0, i.jsx)(a.hKd, { size: 10 }),
                    (0, i.jsx)(a.nVY, {
                        label: u.intl.string(u.t["KzCF/6"]),
                        description: u.intl.string(u.t["Y+ucR7"]),
                        children: (0, i.jsx)("div", {
                            className: _.A,
                            children: n.map((e) => (0, i.jsx)(d.A, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};

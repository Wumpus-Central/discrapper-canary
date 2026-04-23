n.d(t, { A: () => h });
var i = n(627968),
    s = n(607399),
    l = n(821609),
    a = n(289873),
    r = n(872351),
    o = n(696986),
    d = n(270003),
    u = n(9113),
    c = n(599941),
    g = n(590632),
    m = n(146528),
    _ = n(985018),
    A = n(170272);
let h = (e) => {
    let { onGoBack: t } = e,
        n = (0, g.A)(),
        { loading: h } = (0, c.eb)(n);
    return ((0, u.A)(s.Fr ? "role-subscriptions-user-setting" : void 0), h)
        ? (0, i.jsx)(a.y, {})
        : 0 === n.length
          ? null
          : (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(l.$, { text: _.intl.string(_.t.hqyhKQ), icon: r.z, variant: "secondary", onClick: t }),
                    (0, i.jsx)(o.h, { size: 10 }),
                    (0, i.jsx)(d.n, {
                        label: _.intl.string(_.t["KzCF/6"]),
                        description: _.intl.string(_.t["Y+ucR7"]),
                        children: (0, i.jsx)("div", {
                            className: A.A,
                            children: n.map((e) => (0, i.jsx)(m.A, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};

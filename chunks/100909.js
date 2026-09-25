i.d(n, { default: () => k });
var e = i(477900),
    r = i(582128),
    l = i(284009),
    s = i.n(l),
    a = i(702841),
    o = i(297264),
    d = i(695366),
    c = i(696986),
    u = i(834730),
    m = i(732159),
    g = i(317525),
    h = i(912702),
    x = i(871109),
    j = i(652215),
    f = i(375708),
    p = i(677407);
function b(t) {
    let { guildProductListing: n, guildId: i } = t,
        r = (0, a.bG)([g.A], () => g.A.getRole(i, n?.role_id ?? j.dJq));
    return null == r
        ? null
        : (0, e.jsxs)(e.Fragment, {
              children: [
                  (0, e.jsxs)(o.D, {
                      className: p.L,
                      variant: "text-md/medium",
                      color: "text-default",
                      children: [
                          (0, e.jsx)(d.E, { size: "sm", color: "currentColor" }),
                          (0, e.jsx)(c.h, { horizontal: !0, size: 8 }),
                          f.intl.string(f.t.bi7buI),
                      ],
                  }),
                  (0, e.jsx)(u.E, {
                      variant: "text-md/normal",
                      children: f.intl.format(f.t["4kglOW"], { roleName: r.name }),
                  }),
              ],
          });
}
function k(t) {
    let { guildId: n, productId: i, ...l } = t,
        [a] = r.useState(() => x.A.getGuildProduct(i));
    async function o(t) {
        try {
            await h.Oo(n, i);
        } catch (n) {
            throw (t(n.message ?? f.intl.string(f.t.OzgkxM)), n);
        }
    }
    return (
        s()(null != a, "guildProductListing cannot be null"),
        (0, e.jsx)(m.u, {
            ...l,
            title: f.intl.string(f.t["/gaTp6"]),
            confirmText: f.intl.string(f.t.E4nVWA),
            onConfirm: o,
            children: (0, e.jsxs)("div", {
                className: p.j,
                children: [
                    (0, e.jsx)(u.E, {
                        variant: "text-md/normal",
                        children: f.intl.format(f.t.CPQsjo, { productName: a.name }),
                    }),
                    (0, e.jsx)(b, { guildProductListing: a, guildId: n }),
                ],
            }),
        })
    );
}

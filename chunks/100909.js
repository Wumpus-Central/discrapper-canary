i.d(n, { default: () => k });
var r = i(477900),
    l = i(582128),
    e = i(284009),
    s = i.n(e),
    a = i(702841),
    o = i(534514),
    d = i(695366),
    c = i(696986),
    u = i(834730),
    m = i(732159),
    g = i(317525),
    h = i(912702),
    x = i(871109),
    j = i(652215),
    b = i(105292),
    f = i(677407);
function p(t) {
    let { guildProductListing: n, guildId: i } = t,
        l = (0, a.bG)([g.A], () => g.A.getRole(i, n?.role_id ?? j.dJq));
    return null == l
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(o.D, {
                      className: f.L,
                      variant: "body-md/medium",
                      color: "text-default",
                      children: [
                          (0, r.jsx)(d.E, { size: "sm", color: "currentColor" }),
                          (0, r.jsx)(c.h, { horizontal: !0, size: 8 }),
                          b.intl.string(b.t.bi7buI),
                      ],
                  }),
                  (0, r.jsx)(u.E, {
                      variant: "body-md/normal",
                      children: b.intl.format(b.t["4kglOW"], { roleName: l.name }),
                  }),
              ],
          });
}
function k(t) {
    let { guildId: n, productId: i, ...e } = t,
        [a] = l.useState(() => x.A.getGuildProduct(i));
    async function o(t) {
        try {
            await h.Oo(n, i);
        } catch (n) {
            throw (t(n.message ?? b.intl.string(b.t.OzgkxM)), n);
        }
    }
    return (
        s()(null != a, "guildProductListing cannot be null"),
        (0, r.jsx)(m.u, {
            ...e,
            title: b.intl.string(b.t["/gaTp6"]),
            confirmText: b.intl.string(b.t.E4nVWA),
            onConfirm: o,
            children: (0, r.jsxs)("div", {
                className: f.j,
                children: [
                    (0, r.jsx)(u.E, {
                        variant: "body-md/normal",
                        children: b.intl.format(b.t.CPQsjo, { productName: a.name }),
                    }),
                    (0, r.jsx)(p, { guildProductListing: a, guildId: n }),
                ],
            }),
        })
    );
}

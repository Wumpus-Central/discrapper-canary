i.d(n, { default: () => k });
var e = i(627968),
    r = i(64700),
    l = i(284009),
    s = i.n(l),
    a = i(732159),
    o = i(702841),
    d = i(534514),
    c = i(695366),
    u = i(696986),
    m = i(834730),
    g = i(317525),
    h = i(912702),
    x = i(871109),
    j = i(652215),
    f = i(375708),
    p = i(557976);
function b(t) {
    let { guildProductListing: n, guildId: i } = t,
        r = (0, o.bG)([g.A], () => g.A.getRole(i, n?.role_id ?? j.dJq));
    return null == r
        ? null
        : (0, e.jsxs)(e.Fragment, {
              children: [
                  (0, e.jsxs)(d.D, {
                      className: p.L,
                      variant: "text-md/medium",
                      color: "text-default",
                      children: [
                          (0, e.jsx)(c.E, { size: "sm", color: "currentColor" }),
                          (0, e.jsx)(u.h, { horizontal: !0, size: 8 }),
                          f.intl.string(f.t.bi7buI),
                      ],
                  }),
                  (0, e.jsx)(m.E, {
                      variant: "text-md/normal",
                      children: f.intl.format(f.t["4kglOW"], { roleName: r.name }),
                  }),
              ],
          });
}
function k(t) {
    let { guildId: n, productId: i, ...l } = t,
        [o] = r.useState(() => x.A.getGuildProduct(i));
    async function d(t) {
        try {
            await h.Oo(n, i);
        } catch (n) {
            throw (t(n.message ?? f.intl.string(f.t.OzgkxM)), n);
        }
    }
    return (
        s()(null != o, "guildProductListing cannot be null"),
        (0, e.jsx)(a.ConfirmModal, {
            ...l,
            title: f.intl.string(f.t["/gaTp6"]),
            confirmText: f.intl.string(f.t.E4nVWA),
            onConfirm: d,
            children: (0, e.jsxs)("div", {
                className: p.j,
                children: [
                    (0, e.jsx)(m.E, {
                        variant: "text-md/normal",
                        children: f.intl.format(f.t.CPQsjo, { productName: o.name }),
                    }),
                    (0, e.jsx)(b, { guildProductListing: o, guildId: n }),
                ],
            }),
        })
    );
}

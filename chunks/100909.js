var r = i(477900),
    l = i(582128),
    e = i(284009),
    s = i.n(e),
    a = i(164636),
    o = i(534514),
    d = i(695366),
    c = i(696986),
    u = i(834730),
    m = i(732159),
    g = i(317525),
    h = i(912702),
    x = i(871109);
i(652215);
var j = i(792996),
    b = i(677407);
function f(t) {
    let { guildProductListing: n, guildId: i } = t,
        l = (0, a.bG)([g.A], () => g.A.getRole(i, n?.role_id ?? ""));
    return null == l
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(o.D, {
                      className: b.L,
                      variant: "body-md/medium",
                      color: "text-default",
                      children: [
                          (0, r.jsx)(d.E, { size: "sm", color: "currentColor" }),
                          (0, r.jsx)(c.h, { horizontal: !0, size: 8 }),
                          j.intl.string(j.t.bi7buI),
                      ],
                  }),
                  (0, r.jsx)(u.E, {
                      variant: "body-md/normal",
                      children: j.intl.format(j.t["4kglOW"], { roleName: l.name }),
                  }),
              ],
          });
}
i.d(
    n,
    {},
    {
        default: function (t) {
            let { guildId: n, productId: i, ...e } = t,
                [a] = l.useState(() => x.A.getGuildProduct(i));
            return (
                s()(null != a, "guildProductListing cannot be null"),
                (0, r.jsx)(m.u, {
                    ...e,
                    title: j.intl.string(j.t["/gaTp6"]),
                    confirmText: j.intl.string(j.t.E4nVWA),
                    onConfirm: async function (t) {
                        try {
                            await h.Oo(n, i);
                        } catch (n) {
                            throw (t(n.message ?? j.intl.string(j.t.OzgkxM)), n);
                        }
                    },
                    children: (0, r.jsxs)("div", {
                        className: b.j,
                        children: [
                            (0, r.jsx)(u.E, {
                                variant: "body-md/normal",
                                children: j.intl.format(j.t.CPQsjo, { productName: a.name }),
                            }),
                            (0, r.jsx)(f, { guildProductListing: a, guildId: n }),
                        ],
                    }),
                })
            );
        },
    },
);

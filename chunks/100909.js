e.d(n, { default: () => p });
var i = e(627968),
    r = e(64700),
    l = e(284009),
    a = e.n(l),
    s = e(158954),
    o = e(417597),
    c = e(397927),
    d = e(317525),
    u = e(912702),
    m = e(871109),
    g = e(652215),
    x = e(985018),
    h = e(468277);
function j(t) {
    let { guildProductListing: n, guildId: e } = t,
        r = (0, o.bG)([d.A], () => d.A.getRole(e, n?.role_id ?? g.dJq));
    return null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(c.Heading, {
                      className: h.L,
                      variant: "text-md/medium",
                      color: "text-default",
                      children: [
                          (0, i.jsx)(c.EpV, { size: "sm", color: "currentColor" }),
                          (0, i.jsx)(c.hKd, { horizontal: !0, size: 8 }),
                          x.intl.string(x.t.bi7buI),
                      ],
                  }),
                  (0, i.jsx)(c.Text, {
                      variant: "text-md/normal",
                      children: x.intl.format(x.t["4kglOW"], { roleName: r.name }),
                  }),
              ],
          });
}
function p(t) {
    let { guildId: n, productId: e, ...l } = t,
        [o] = r.useState(() => m.A.getGuildProduct(e));
    a()(null != o, "guildProductListing cannot be null");
    let d = async (t) => {
        try {
            await u.Oo(n, e);
        } catch (n) {
            throw (t(n.message ?? x.intl.string(x.t.OzgkxM)), n);
        }
    };
    return (0, i.jsx)(s.ConfirmModal, {
        ...l,
        title: x.intl.string(x.t["/gaTp6"]),
        confirmText: x.intl.string(x.t.E4nVWA),
        onConfirm: d,
        children: (0, i.jsxs)("div", {
            className: h.j,
            children: [
                (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: x.intl.format(x.t.CPQsjo, { productName: o.name }),
                }),
                (0, i.jsx)(j, { guildProductListing: o, guildId: n }),
            ],
        }),
    });
}

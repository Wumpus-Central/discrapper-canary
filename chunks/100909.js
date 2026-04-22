e.d(n, { default: () => b });
var i = e(627968),
    r = e(64700),
    l = e(284009),
    a = e.n(l),
    s = e(732159),
    o = e(417597),
    c = e(534514),
    d = e(695366),
    u = e(696986),
    m = e(834730),
    g = e(317525),
    x = e(912702),
    h = e(871109),
    j = e(652215),
    p = e(985018),
    f = e(557976);
function C(t) {
    let { guildProductListing: n, guildId: e } = t,
        r = (0, o.bG)([g.A], () => g.A.getRole(e, n?.role_id ?? j.dJq));
    return null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(c.D, {
                      className: f.L,
                      variant: "text-md/medium",
                      color: "text-default",
                      children: [
                          (0, i.jsx)(d.E, { size: "sm", color: "currentColor" }),
                          (0, i.jsx)(u.h, { horizontal: !0, size: 8 }),
                          p.intl.string(p.t.bi7buI),
                      ],
                  }),
                  (0, i.jsx)(m.E, {
                      variant: "text-md/normal",
                      children: p.intl.format(p.t["4kglOW"], { roleName: r.name }),
                  }),
              ],
          });
}
function b(t) {
    let { guildId: n, productId: e, ...l } = t,
        [o] = r.useState(() => h.A.getGuildProduct(e));
    a()(null != o, "guildProductListing cannot be null");
    let c = async (t) => {
        try {
            await x.Oo(n, e);
        } catch (n) {
            throw (t(n.message ?? p.intl.string(p.t.OzgkxM)), n);
        }
    };
    return (0, i.jsx)(s.ConfirmModal, {
        ...l,
        title: p.intl.string(p.t["/gaTp6"]),
        confirmText: p.intl.string(p.t.E4nVWA),
        onConfirm: c,
        children: (0, i.jsxs)("div", {
            className: f.j,
            children: [
                (0, i.jsx)(m.E, {
                    variant: "text-md/normal",
                    children: p.intl.format(p.t.CPQsjo, { productName: o.name }),
                }),
                (0, i.jsx)(C, { guildProductListing: o, guildId: n }),
            ],
        }),
    });
}

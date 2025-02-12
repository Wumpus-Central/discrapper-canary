e.d(n, { default: () => p }), e(47120);
var i = e(200651),
    r = e(192379),
    l = e(512722),
    a = e.n(l),
    o = e(399606),
    s = e(481060),
    c = e(668781),
    d = e(430824),
    u = e(495437),
    m = e(240864),
    g = e(981631),
    x = e(388032),
    h = e(876632);
function f(t) {
    let { guildProductListing: n, guildId: e } = t,
        r = (0, o.e7)([d.Z], () => {
            var t;
            return d.Z.getRole(e, null !== (t = null == n ? void 0 : n.role_id) && void 0 !== t ? t : g.lds);
        });
    return null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(s.X6q, {
                      className: h.warningSectionHeader,
                      variant: 'text-md/medium',
                      color: 'text-normal',
                      children: [
                          (0, i.jsx)(s.P4T, {
                              size: 'sm',
                              color: 'currentColor'
                          }),
                          (0, i.jsx)(s.LZC, {
                              horizontal: !0,
                              size: 8
                          }),
                          x.intl.string(x.t.bi7buL)
                      ]
                  }),
                  (0, i.jsx)(s.Text, {
                      variant: 'text-md/normal',
                      children: x.intl.format(x.t['4kglOT'], { roleName: r.name })
                  })
              ]
          });
}
function p(t) {
    let { guildId: n, productId: e, ...l } = t,
        [o] = r.useState(() => m.Z.getGuildProduct(e));
    a()(null != o, 'guildProductListing cannot be null');
    let [d, g] = r.useState(!1),
        p = async () => {
            try {
                g(!0), await u.mh(n, e);
            } catch (t) {
                c.Z.show({
                    title: x.intl.string(x.t.OzgkxM),
                    body: t.message
                });
            } finally {
                g(!1);
            }
        };
    return (0, i.jsxs)(s.ConfirmModal, {
        ...l,
        className: h.modalContainer,
        header: x.intl.string(x.t['/gaTp6']),
        confirmText: x.intl.string(x.t.E4nVWF),
        cancelText: x.intl.string(x.t['ETE/oK']),
        loading: d,
        onConfirm: p,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: x.intl.format(x.t.CPQsjo, { productName: o.name })
            }),
            (0, i.jsx)(f, {
                guildProductListing: o,
                guildId: n
            })
        ]
    });
}

r.d(t, { default: () => O }), r(47120);
var n = r(200651),
    o = r(192379),
    i = r(512722),
    c = r.n(i),
    a = r(399606),
    l = r(481060),
    s = r(668781),
    u = r(430824),
    d = r(495437),
    f = r(240864),
    g = r(981631),
    p = r(388032),
    b = r(862892);
function m(e) {
    let { guildProductListing: t, guildId: r } = e,
        o = (0, a.e7)([u.Z], () => {
            var e;
            return u.Z.getRole(r, null != (e = null == t ? void 0 : t.role_id) ? e : g.lds);
        });
    return null == o
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)(l.X6q, {
                      className: b.warningSectionHeader,
                      variant: 'text-md/medium',
                      color: 'text-normal',
                      children: [
                          (0, n.jsx)(l.P4T, {
                              size: 'sm',
                              color: 'currentColor'
                          }),
                          (0, n.jsx)(l.LZC, {
                              horizontal: !0,
                              size: 8
                          }),
                          p.NW.string(p.t.bi7buL)
                      ]
                  }),
                  (0, n.jsx)(l.Text, {
                      variant: 'text-md/normal',
                      children: p.NW.format(p.t['4kglOT'], { roleName: o.name })
                  })
              ]
          });
}
function O(e) {
    var t,
        r,
        { guildId: i, productId: a } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['guildId', 'productId']);
    let [g] = o.useState(() => f.Z.getGuildProduct(a));
    c()(null != g, 'guildProductListing cannot be null');
    let [O, y] = o.useState(!1),
        j = async () => {
            try {
                y(!0), await d.mh(i, a);
            } catch (e) {
                s.Z.show({
                    title: p.NW.string(p.t.OzgkxM),
                    body: e.message
                });
            } finally {
                y(!1);
            }
        };
    return (0, n.jsxs)(
        l.ConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, u)),
        (r = r =
            {
                className: b.modalContainer,
                header: p.NW.string(p.t['/gaTp6']),
                confirmText: p.NW.string(p.t.E4nVWF),
                cancelText: p.NW.string(p.t['ETE/oK']),
                loading: O,
                onConfirm: j,
                children: [
                    (0, n.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: p.NW.format(p.t.CPQsjo, { productName: g.name })
                    }),
                    (0, n.jsx)(m, {
                        guildProductListing: g,
                        guildId: i
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}

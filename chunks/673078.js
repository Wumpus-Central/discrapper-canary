r.d(e, { default: () => O }), r(388685);
var n = r(54381),
    o = r(473749),
    i = r(512722),
    l = r.n(i),
    c = r(399606),
    a = r(481060),
    s = r(668781),
    u = r(485386),
    d = r(495437),
    g = r(240864),
    f = r(981631),
    p = r(388032),
    b = r(696242);
function m(t) {
    let { guildProductListing: e, guildId: r } = t,
        o = (0, c.e7)([u.Z], () => {
            var t;
            return u.Z.getRole(r, null != (t = null == e ? void 0 : e.role_id) ? t : f.lds);
        });
    return null == o
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)(a.Heading, {
                      className: b.warningSectionHeader,
                      variant: "text-md/medium",
                      color: "text-default",
                      children: [
                          (0, n.jsx)(a.Mgn, {
                              size: "sm",
                              color: "currentColor",
                          }),
                          (0, n.jsx)(a.LZC, {
                              horizontal: !0,
                              size: 8,
                          }),
                          p.intl.string(p.t.bi7buI),
                      ],
                  }),
                  (0, n.jsx)(a.Text, {
                      variant: "text-md/normal",
                      children: p.intl.format(p.t["4kglOW"], { roleName: o.name }),
                  }),
              ],
          });
}
function O(t) {
    var e,
        r,
        { guildId: i, productId: c } = t,
        u = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            }
            return o;
        })(t, ["guildId", "productId"]);
    let [f] = o.useState(() => g.Z.getGuildProduct(c));
    l()(null != f, "guildProductListing cannot be null");
    let [O, y] = o.useState(!1),
        j = async () => {
            try {
                y(!0), await d.mh(i, c);
            } catch (t) {
                s.Z.show({
                    title: p.intl.string(p.t.OzgkxM),
                    body: t.message,
                });
            } finally {
                y(!1);
            }
        };
    return (0, n.jsxs)(
        a.VoidConfirmModal,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        }),
                    )),
                    n.forEach(function (e) {
                        var n;
                        (n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = n);
                    });
            }
            return t;
        })({}, u)),
        (r = r =
            {
                className: b.modalContainer,
                header: p.intl.string(p.t["/gaTp6"]),
                confirmText: p.intl.string(p.t.E4nVWA),
                cancelText: p.intl.string(p.t["ETE/oC"]),
                loading: O,
                onConfirm: j,
                children: [
                    (0, n.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: p.intl.format(p.t.CPQsjo, { productName: f.name }),
                    }),
                    (0, n.jsx)(m, {
                        guildProductListing: f,
                        guildId: i,
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e),
    );
}

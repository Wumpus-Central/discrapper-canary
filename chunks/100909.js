r.d(t, {
    default: () => m,
}),
    r(896048);
var n = r(627968),
    o = r(64700),
    l = r(284009),
    i = r.n(l),
    c = r(158954),
    a = r(417597),
    s = r(397927),
    u = r(317525),
    p = r(912702),
    d = r(871109),
    f = r(652215),
    b = r(985018),
    O = r(468277);

function g(e) {
    let { guildProductListing: t, guildId: r } = e,
        o = (0, a.bG)([u.A], () => {
            var e;
            return u.A.getRole(r, null != (e = null == t ? void 0 : t.role_id) ? e : f.dJq);
        });
    return null == o
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)(s.Heading, {
                      className: O.L,
                      variant: "text-md/medium",
                      color: "text-default",
                      children: [
                          (0, n.jsx)(s.EpV, {
                              size: "sm",
                              color: "currentColor",
                          }),
                          (0, n.jsx)(s.hKd, {
                              horizontal: !0,
                              size: 8,
                          }),
                          b.intl.string(b.t.bi7buI),
                      ],
                  }),
                  (0, n.jsx)(s.Text, {
                      variant: "text-md/normal",
                      children: b.intl.format(b.t["4kglOW"], {
                          roleName: o.name,
                      }),
                  }),
              ],
          });
}

function m(e) {
    var t, r;
    let { guildId: l, productId: a } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.getOwnPropertyNames(e);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, ["guildId", "productId"]),
        [f] = o.useState(() => d.A.getGuildProduct(a));
    i()(null != f, "guildProductListing cannot be null");
    let m = async (e) => {
        try {
            await p.Oo(l, a);
        } catch (r) {
            var t;
            throw (e(null != (t = r.message) ? t : b.intl.string(b.t.OzgkxM)), r);
        }
    };
    return (0, n.jsx)(
        c.ConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, u)),
        (r = r =
            {
                title: b.intl.string(b.t["/gaTp6"]),
                confirmText: b.intl.string(b.t.E4nVWA),
                onConfirm: m,
                children: (0, n.jsxs)("div", {
                    className: O.j,
                    children: [
                        (0, n.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: b.intl.format(b.t.CPQsjo, {
                                productName: f.name,
                            }),
                        }),
                        (0, n.jsx)(g, {
                            guildProductListing: f,
                            guildId: l,
                        }),
                    ],
                }),
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
        t),
    );
}

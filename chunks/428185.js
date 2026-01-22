r.d(t, {
    default: () => s,
}),
    r(896048);
var n = r(627968),
    o = r(64700),
    c = r(421380),
    i = r(397927),
    l = r(157559),
    a = r(435183),
    p = r(985018);
let s = function (e) {
    var t, r;
    let { channelId: s, application: b, onClose: f } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                c = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
                return c;
            }
            if (
                ((c = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.getOwnPropertyNames(e);
                    for (n = 0; n < c.length; n++)
                        (r = c[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
            return c;
        })(e, ["channelId", "application", "onClose"]),
        [y, O] = o.useState(!1),
        g = async () => {
            try {
                O(!0), await a.Ay.removeLinkedLobby(s), f();
            } catch (e) {
                O(!1),
                    l.A.show({
                        title: p.intl.string(p.t.vFzPFj),
                        body: p.intl.string(p.t["6D5WVg"]),
                    });
            }
        };
    return (0, n.jsx)(
        i.VoidConfirmModal,
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
        })(
            {
                header: p.intl.string(p.t.JmUENg),
                confirmText: p.intl.string(p.t["cY+Oob"]),
                cancelText: p.intl.string(p.t["ETE/oC"]),
                confirmButtonColor: c.$n.Colors.BRAND,
                onConfirm: g,
                loading: y,
                onClose: f,
            },
            u,
        )),
        (r = r =
            {
                children: (0, n.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children: p.intl.format(p.t["6l2osp"], {
                        applicationName: b.name,
                    }),
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
};

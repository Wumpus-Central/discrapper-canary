r.d(e, { default: () => p }), r(388685);
var n = r(54381),
    o = r(473749),
    i = r(755721),
    c = r(481060),
    l = r(668781),
    a = r(787014),
    s = r(388032);
let p = function (t) {
    var e,
        r,
        { channelId: p, application: b, onClose: u } = t,
        f = (function (t, e) {
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
        })(t, ["channelId", "application", "onClose"]);
    let [O, y] = o.useState(!1),
        g = async () => {
            try {
                y(!0), await a.ZP.removeLinkedLobby(p), u();
            } catch (t) {
                y(!1),
                    l.Z.show({
                        title: s.intl.string(s.t.vFzPFj),
                        body: s.intl.string(s.t["6D5WVg"]),
                    });
            }
        };
    return (0, n.jsx)(
        c.VoidConfirmModal,
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
        })(
            {
                header: s.intl.string(s.t.JmUENg),
                confirmText: s.intl.string(s.t["cY+Oob"]),
                cancelText: s.intl.string(s.t["ETE/oC"]),
                confirmButtonColor: i.zx.Colors.BRAND,
                onConfirm: g,
                loading: O,
                onClose: u,
            },
            f,
        )),
        (r = r =
            {
                children: (0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: s.intl.format(s.t["6l2osp"], { applicationName: b.name }),
                }),
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
};

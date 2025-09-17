r.d(t, { default: () => a });
var n = r(951288),
    o = r(481060),
    l = r(744993),
    c = r(401561),
    i = r(388032),
    s = r(755986);
function a(e) {
    var t,
        r,
        { onAccept: a } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["onAccept"]);
    return (0, n.jsxs)(
        o.Y0X,
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
                className: s.modal,
                size: o.CgR.DYNAMIC,
                parentComponent: "PortkeyToSModal",
                children: [
                    (0, n.jsxs)(o.hzk, {
                        className: s.modalContent,
                        scrollbarType: "none",
                        children: [
                            (0, n.jsx)(o.X6q, {
                                variant: "heading-lg/semibold",
                                children: i.intl.string(c.default.bnsSPj),
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                children: i.intl.format(c.default.MaWfLi, {
                                    provider: "Portkey",
                                    providerUrl: "https://google.com/terms-of-service",
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: s.footer,
                        children: [
                            (0, n.jsx)(o.zxk, {
                                fullWidth: !0,
                                text: i.intl.string(i.t["/g10LC"]),
                                variant: "secondary",
                                onClick: u.onClose,
                            }),
                            (0, n.jsx)(o.zxk, {
                                fullWidth: !0,
                                text: i.intl.string(c.default.IfMFoK),
                                variant: "primary",
                                onClick: () => {
                                    (0, l.g$)(!0, "Portkey"), null == a || a(), u.onClose();
                                },
                            }),
                        ],
                    }),
                    (0, n.jsx)(o.olH, {
                        onClick: u.onClose,
                        className: s.closeButton,
                    }),
                ],
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

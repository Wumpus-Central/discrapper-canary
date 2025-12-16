r.d(e, { default: () => f }), r(388685);
var n = r(54381),
    i = r(473749),
    o = r(793030),
    l = r(51144),
    a = r(80721),
    u = r(282793),
    c = r(353149),
    s = r(388032);
let f = (t) => {
    var { subscriptionId: e, invitedUser: r, onClose: f } = t,
        b = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                i = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(t);
                    for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
                    return i;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
            }
            return i;
        })(t, ["subscriptionId", "invitedUser", "onClose"]);
    let [p, d] = (0, i.useState)(!1),
        O = async () => {
            d(!0), await (0, a.if)(e, r.id), d(!1), f();
        };
    return (0, n.jsx)(
        o.Modal,
        (function (t) {
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
                size: "md",
                title: s.intl.string(c.default.U439m2),
                subtitle: s.intl.formatToPlainString(c.default["Sv6+Ox"], {
                    memberName: (0, l.XM)(r),
                    premiumGroupProductName: (0, u.sO)(),
                }),
                onClose: f,
                actions: [
                    {
                        text: s.intl.string(c.default["2blqtw"]),
                        variant: "critical-primary",
                        onClick: O,
                        loading: p,
                    },
                ],
            },
            b,
        ),
    );
};

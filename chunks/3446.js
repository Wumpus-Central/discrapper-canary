r.d(e, { default: () => y }), r(388685);
var n = r(54381),
    o = r(473749),
    i = r(793030),
    l = r(807163),
    a = r(80721),
    s = r(474936),
    c = r(282793),
    u = r(941651),
    p = r(388032);
function f(t) {
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
}
function m(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(e)).forEach(function (r) {
                  Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
              }),
        t
    );
}
function b(t, e) {
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
            (r = i[n]), !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
    }
    return o;
}
let O = (t) => {
        var { onClose: e, currentUser: r, onNext: o } = t,
            a = b(t, ["onClose", "currentUser", "onNext"]);
        return (0, n.jsx)(
            i.Modal,
            m(
                f(
                    {
                        title: p.intl.formatToPlainString(u.default["4e7WtF"], {
                            premiumGroupProductName: (0, c.sO)(),
                        }),
                        subtitle: p.intl.formatToPlainString(u.default["3kVEg0"], { cooldownMonths: c.T9 }),
                        onClose: e,
                    },
                    a,
                ),
                {
                    actions: [
                        {
                            text: p.intl.string(u.default.UFHNtO),
                            variant: "secondary",
                            onClick: e,
                        },
                        {
                            text: p.intl.string(p.t["3PatSz"]),
                            variant: "primary",
                            onClick: o,
                        },
                    ],
                    children: (0, n.jsx)(l.g, {
                        currentUser: r,
                        premiumType: s.PremiumTypes.TIER_2,
                        onClose: e,
                        isDowngrade: !1,
                        isPremiumRebrand: !0,
                    }),
                },
            ),
        );
    },
    d = (t) => {
        var { onClose: e, onConfirm: r, isRemovingUser: o } = t,
            l = b(t, ["onClose", "onConfirm", "isRemovingUser"]);
        return (0, n.jsx)(
            i.Modal,
            f(
                {
                    size: "md",
                    title: p.intl.formatToPlainString(u.default.IrvJHs, { premiumGroupProductName: (0, c.sO)() }),
                    subtitle: p.intl.formatToPlainString(u.default.cQDYKU, {
                        premiumGroupProductName: (0, c.sO)(),
                        cooldownMonths: c.T9,
                    }),
                    onClose: e,
                    actions: [
                        {
                            text: p.intl.string(u.default.UFHNtO),
                            variant: "secondary",
                            onClick: e,
                        },
                        {
                            text: p.intl.string(p.t["cY+Oob"]),
                            variant: "critical-primary",
                            onClick: r,
                            loading: o,
                        },
                    ],
                },
                l,
            ),
        );
    },
    y = (t) => {
        var { premiumGroupSubscriptionId: e, currentUser: r, onClose: i } = t,
            l = b(t, ["premiumGroupSubscriptionId", "currentUser", "onClose"]);
        let [s, c] = o.useState(1),
            [u, p] = o.useState(!1),
            y = async () => {
                p(!0), await (0, a.Jn)(e, r.id), p(!1), i();
            };
        return 1 === s
            ? (0, n.jsx)(
                  O,
                  m(f({}, l), {
                      onNext: () => c(2),
                      currentUser: r,
                      onClose: i,
                  }),
              )
            : 2 === s
              ? (0, n.jsx)(
                    d,
                    m(f({}, l), {
                        onConfirm: y,
                        onClose: i,
                        isRemovingUser: u,
                    }),
                )
              : null;
    };

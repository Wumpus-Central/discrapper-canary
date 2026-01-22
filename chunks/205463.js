r.d(e, { default: () => _ }), r(896048);
var n = r(627968),
    o = r(64700),
    i = r(158954),
    l = r(964486),
    a = r(954571),
    c = r(96304),
    s = r(677185),
    u = r(788868),
    p = r(88001),
    f = r(652215),
    O = r(519412),
    m = r(985018);
function b(t) {
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
function d(t, e) {
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
function y(t, e) {
    if (null == t) return {};
    var r,
        n,
        o,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (o = 0, r = Reflect.ownKeys(t); o < r.length; o++)
            (n = r[o]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
        return i;
    }
    if (
        ((i = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = {},
                i = Object.getOwnPropertyNames(t);
            for (n = 0; n < i.length; n++)
                (r = i[n]), !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            return o;
        })(t, e)),
        Object.getOwnPropertySymbols)
    )
        for (o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
            (n = r[o]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
    return i;
}
let P = {
        1: "what_you_lose",
        2: "confirmation",
    },
    w = (t) => {
        let { onClose: e, currentUser: r, onNext: o } = t,
            l = y(t, ["onClose", "currentUser", "onNext"]);
        return (0, n.jsx)(
            i.Modal,
            d(
                b(
                    {
                        title: m.intl.formatToPlainString(O.default["4e7WtF"], {
                            premiumGroupProductName: (0, p.DP)(),
                        }),
                        subtitle: m.intl.formatToPlainString(O.default["3kVEg0"], { cooldownMonths: p.wl }),
                        onClose: e,
                    },
                    l,
                ),
                {
                    actions: [
                        {
                            text: m.intl.string(O.default.UFHNtO),
                            variant: "secondary",
                            onClick: e,
                        },
                        {
                            text: m.intl.string(m.t["3PatSz"]),
                            variant: "primary",
                            onClick: o,
                        },
                    ],
                    children: (0, n.jsx)(c.l, {
                        currentUser: r,
                        premiumType: u.PremiumTypes.TIER_2,
                        onClose: e,
                        isDowngrade: !1,
                        isPremiumRebrand: !0,
                    }),
                },
            ),
        );
    },
    g = (t) => {
        let { onClose: e, onConfirm: r, isRemovingUser: o } = t,
            l = y(t, ["onClose", "onConfirm", "isRemovingUser"]);
        return (0, n.jsx)(
            i.Modal,
            b(
                {
                    size: "md",
                    title: m.intl.formatToPlainString(O.default.IrvJHs, { premiumGroupProductName: (0, p.DP)() }),
                    subtitle: m.intl.formatToPlainString(O.default.cQDYKU, {
                        premiumGroupProductName: (0, p.DP)(),
                        cooldownMonths: p.wl,
                    }),
                    onClose: e,
                    actions: [
                        {
                            text: m.intl.string(O.default.UFHNtO),
                            variant: "secondary",
                            onClick: e,
                        },
                        {
                            text: m.intl.string(m.t["cY+Oob"]),
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
    _ = (t) => {
        let { premiumGroupSubscriptionId: e, currentUser: r, onClose: i } = t,
            c = y(t, ["premiumGroupSubscriptionId", "currentUser", "onClose"]),
            [u, p] = o.useState(1),
            [O, m] = o.useState(!1),
            _ = o.useRef(0),
            j = o.useRef(0);
        (0, l.Ay)(() => {
            let t = Date.now();
            (_.current = t),
                (j.current = t),
                a.default.track(f.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_STARTED, { subscription_id: e });
        });
        let C = (t, r) => {
                a.default.track(f.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_STEP, {
                    subscription_id: e,
                    from_step: P[t],
                    to_step: r,
                    step_duration_ms: Date.now() - j.current,
                    flow_duration_ms: Date.now() - _.current,
                }),
                    (j.current = Date.now());
            },
            E = async () => {
                C(u, null), await i();
            },
            R = async () => {
                m(!0),
                    (await (0, s.oO)(e, r.id)).ok &&
                        (a.default.track(f.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_COMPLETED, { subscription_id: e }),
                        i()),
                    m(!1);
            };
        return 1 === u
            ? (0, n.jsx)(
                  w,
                  d(b({}, c), {
                      onNext: () => {
                          C(u, P[2]), p(2);
                      },
                      currentUser: r,
                      onClose: E,
                  }),
              )
            : 2 === u
              ? (0, n.jsx)(
                    g,
                    d(b({}, c), {
                        onConfirm: R,
                        onClose: E,
                        isRemovingUser: O,
                    }),
                )
              : null;
    };

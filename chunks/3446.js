r.d(e, { default: () => w }), r(388685);
var n = r(54381),
    o = r(473749),
    i = r(793030),
    a = r(493773),
    s = r(626135),
    u = r(807163),
    l = r(80721),
    c = r(474936),
    p = r(282793),
    f = r(981631),
    O = r(353149),
    d = r(388032);
function m(t) {
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
function b(t, e) {
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
let P = {
        1: "what_you_lose",
        2: "confirmation",
    },
    g = (t) => {
        var { onClose: e, currentUser: r, onNext: o } = t,
            a = y(t, ["onClose", "currentUser", "onNext"]);
        return (0, n.jsx)(
            i.Modal,
            b(
                m(
                    {
                        title: d.intl.formatToPlainString(O.default["4e7WtF"], {
                            premiumGroupProductName: (0, p.sO)(),
                        }),
                        subtitle: d.intl.formatToPlainString(O.default["3kVEg0"], { cooldownMonths: p.T9 }),
                        onClose: e,
                    },
                    a,
                ),
                {
                    actions: [
                        {
                            text: d.intl.string(O.default.UFHNtO),
                            variant: "secondary",
                            onClick: e,
                        },
                        {
                            text: d.intl.string(d.t["3PatSz"]),
                            variant: "primary",
                            onClick: o,
                        },
                    ],
                    children: (0, n.jsx)(u.g, {
                        currentUser: r,
                        premiumType: c.PremiumTypes.TIER_2,
                        onClose: e,
                        isDowngrade: !1,
                        isPremiumRebrand: !0,
                    }),
                },
            ),
        );
    },
    _ = (t) => {
        var { onClose: e, onConfirm: r, isRemovingUser: o } = t,
            a = y(t, ["onClose", "onConfirm", "isRemovingUser"]);
        return (0, n.jsx)(
            i.Modal,
            m(
                {
                    size: "md",
                    title: d.intl.formatToPlainString(O.default.IrvJHs, { premiumGroupProductName: (0, p.sO)() }),
                    subtitle: d.intl.formatToPlainString(O.default.cQDYKU, {
                        premiumGroupProductName: (0, p.sO)(),
                        cooldownMonths: p.T9,
                    }),
                    onClose: e,
                    actions: [
                        {
                            text: d.intl.string(O.default.UFHNtO),
                            variant: "secondary",
                            onClick: e,
                        },
                        {
                            text: d.intl.string(d.t["cY+Oob"]),
                            variant: "critical-primary",
                            onClick: r,
                            loading: o,
                        },
                    ],
                },
                a,
            ),
        );
    },
    w = (t) => {
        var { premiumGroupSubscriptionId: e, currentUser: r, onClose: i } = t,
            u = y(t, ["premiumGroupSubscriptionId", "currentUser", "onClose"]);
        let [c, p] = o.useState(1),
            [O, d] = o.useState(!1),
            w = o.useRef(0),
            j = o.useRef(0);
        (0, a.ZP)(() => {
            let t = Date.now();
            (w.current = t),
                (j.current = t),
                s.default.track(f.rMx.PREMIUM_GROUP_MEMBER_CANCELLATION_STARTED, { subscription_id: e });
        });
        let C = (t, r) => {
                s.default.track(f.rMx.PREMIUM_GROUP_MEMBER_CANCELLATION_STEP, {
                    subscription_id: e,
                    from_step: P[t],
                    to_step: r,
                    step_duration_ms: Date.now() - j.current,
                    flow_duration_ms: Date.now() - w.current,
                }),
                    (j.current = Date.now());
            },
            E = async () => {
                C(c, null), await i();
            },
            v = async () => {
                d(!0),
                    (await (0, l.Jn)(e, r.id)).ok &&
                        (s.default.track(f.rMx.PREMIUM_GROUP_MEMBER_CANCELLATION_COMPLETED, { subscription_id: e }),
                        i()),
                    d(!1);
            };
        return 1 === c
            ? (0, n.jsx)(
                  g,
                  b(m({}, u), {
                      onNext: () => {
                          C(c, P[2]), p(2);
                      },
                      currentUser: r,
                      onClose: E,
                  }),
              )
            : 2 === c
              ? (0, n.jsx)(
                    _,
                    b(m({}, u), {
                        onConfirm: v,
                        onClose: E,
                        isRemovingUser: O,
                    }),
                )
              : null;
    };

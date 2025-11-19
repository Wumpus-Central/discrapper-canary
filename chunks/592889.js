n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(975298),
    l = n(74538),
    c = n(474936),
    u = n(388032),
    d = n(640671);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { subscription: t, renewalMutations: i, className: f, analyticsLocation: p } = e,
        m = (0, s.Z)(),
        g = t.currentPeriodEnd;
    return (
        m.fractionalState === c.a$.FP_SUB_PAUSED && (g = m.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: a()(d.root, f),
            children: [
                (0, r.jsx)(o.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: d.infoIcon,
                }),
                (0, r.jsx)("div", {
                    className: d.text,
                    children: u.intl.format(u.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, l.zL)(i) : l.ZP.getDisplayName(i.planId),
                        date: g,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, r.jsx)(o.Anchor, {
                          onClick: (e) => {
                              e.preventDefault(),
                                  (0, o.ZDy)(async () => {
                                      let { default: e } = await n.e("19429").then(n.bind(n, 604468));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              h(_({}, n), {
                                                  subscription: t,
                                                  renewalMutations: i,
                                                  analyticsLocation: p,
                                              }),
                                          );
                                  });
                          },
                          className: d.cancelLink,
                          children: u.intl.string(u.t["ETE/oC"]),
                      }),
            ],
        })
    );
}

n.d(t, {
    A: () => _,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(531260),
    o = n(927578),
    c = n(788868),
    d = n(985018),
    u = n(416179);

function _(e) {
    let { subscription: t, renewalMutations: i, className: _, analyticsLocation: p } = e,
        m = (0, a.A)(),
        g = t.currentPeriodEnd;
    return (
        m.fractionalState === c.xc.FP_SUB_PAUSED && (g = m.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: l()(u.zr, _),
            children: [
                (0, r.jsx)(s.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u.G,
                }),
                (0, r.jsx)("div", {
                    className: u.Qq,
                    children: d.intl.format(d.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, o.OU)(i) : o.Ay.getDisplayName(i.planId),
                        date: g,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, r.jsx)(s.MzZ, {
                          onClick: (e) => {
                              e.preventDefault(),
                                  (0, s.mMO)(async () => {
                                      let { default: e } = await n.e("65975").then(n.bind(n, 702698));
                                      return (n) => {
                                          var l, s;
                                          return (0, r.jsx)(
                                              e,
                                              ((l = (function (e) {
                                                  for (var t = 1; t < arguments.length; t++) {
                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                          r = Object.keys(n);
                                                      "function" == typeof Object.getOwnPropertySymbols &&
                                                          (r = r.concat(
                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                  return Object.getOwnPropertyDescriptor(n, e)
                                                                      .enumerable;
                                                              }),
                                                          )),
                                                          r.forEach(function (t) {
                                                              var r;
                                                              (r = n[t]),
                                                                  t in e
                                                                      ? Object.defineProperty(e, t, {
                                                                            value: r,
                                                                            enumerable: !0,
                                                                            configurable: !0,
                                                                            writable: !0,
                                                                        })
                                                                      : (e[t] = r);
                                                          });
                                                  }
                                                  return e;
                                              })({}, n)),
                                              (s = s =
                                                  {
                                                      subscription: t,
                                                      renewalMutations: i,
                                                      analyticsLocation: p,
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(s)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            l,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(s, e),
                                                        );
                                                    }),
                                              l),
                                          );
                                      };
                                  });
                          },
                          className: u.Lu,
                          children: d.intl.string(d.t["ETE/oC"]),
                      }),
            ],
        })
    );
}

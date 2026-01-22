n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(531260),
    l = n(927578),
    c = n(788868),
    u = n(985018),
    d = n(416179);
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
function p(e) {
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
function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { subscription: t, renewalMutations: i, className: f, analyticsLocation: _ } = e,
        m = (0, o.A)(),
        g = t.currentPeriodEnd;
    return (
        m.fractionalState === c.xc.FP_SUB_PAUSED && (g = m.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: a()(d.zr, f),
            children: [
                (0, r.jsx)(s.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: d.G,
                }),
                (0, r.jsx)("div", {
                    className: d.Qq,
                    children: u.intl.format(u.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, l.OU)(i) : l.Ay.getDisplayName(i.planId),
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
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              h(p({}, n), {
                                                  subscription: t,
                                                  renewalMutations: i,
                                                  analyticsLocation: _,
                                              }),
                                          );
                                  });
                          },
                          className: d.Lu,
                          children: u.intl.string(u.t["ETE/oC"]),
                      }),
            ],
        })
    );
}

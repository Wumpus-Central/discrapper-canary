n.d(t, {
    YG: () => h,
    pV: () => g,
    rf: () => v
});
var r,
    l = n(200651);
n(192379);
var i = n(860911),
    o = n(481060),
    a = n(100527),
    u = n(906732),
    s = n(349167),
    c = n(929011),
    d = n(703656),
    p = n(626135),
    f = n(937615),
    b = n(110742),
    O = n(981631),
    m = n(388032),
    y = n(299283),
    v = (((r = {})[(r.AVAILABLE = 0)] = 'AVAILABLE'), (r[(r.LOADING = 1)] = 'LOADING'), (r[(r.UPCOMING_PLAN = 2)] = 'UPCOMING_PLAN'), (r[(r.SUBSCRIBED = 3)] = 'SUBSCRIBED'), (r[(r.UNAVAILABLE = 4)] = 'UNAVAILABLE'), r);
function g(e) {
    let { appId: t, className: n, onClick: r, onHasClicked: i, skuId: o, subscriptionPlan: a, icon: u, state: s = 0 } = e,
        c = null != a ? (0, f.xg)(a) : null,
        d = 1 === s;
    return 0 === s || d
        ? (0, l.jsx)(j, {
              appId: t,
              skuId: o,
              onClick: (e) => {
                  r(e), null == i || i();
              },
              className: n,
              submitting: d,
              children: (0, l.jsxs)('div', {
                  className: y.btnContent,
                  children: [u, null != c ? m.NW.formatToPlainString(m.t.i4T8v7, { rate: c }) : m.NW.string(m.t.uuzaAA)]
              })
          })
        : (0, l.jsx)(S, {
              className: n,
              children: (function (e, t) {
                  switch (e) {
                      case 2:
                          return m.NW.formatToPlainString(m.t.k1ew5O, { rate: t });
                      case 3:
                          return m.NW.formatToPlainString(m.t['Hs3Y+P'], { rate: t });
                      case 4:
                          return m.NW.string(m.t.DLAKbm);
                  }
              })(s, null != c ? c : '')
          });
}
function h(e) {
    let { appId: t, className: n, onClick: r, onHasClicked: i, sku: o, icon: s } = e,
        { analyticsLocations: d } = (0, u.ZP)(a.Z.APP_STOREFRONT),
        p = () => {
            (0, c.r)({
                appId: t,
                skuId: o.id,
                analyticsLocations: d
            });
        },
        v = (0, b.M)(o.id),
        g = o.type === O.epS.DURABLE && v,
        { price: h } = o;
    return null == h
        ? null
        : g
          ? (0, l.jsx)(S, {
                className: n,
                children: m.NW.string(m.t['/bUsx8'])
            })
          : (0, l.jsx)(j, {
                appId: t,
                skuId: o.id,
                onClick: (e) => {
                    (null != r ? r : p)(e), null == i || i();
                },
                className: n,
                children: (0, l.jsxs)('div', {
                    className: y.btnContent,
                    children: [s, m.NW.format(m.t.Xp5WTk, { price: (0, f.T4)(h.amount, h.currency) })]
                })
            });
}
function j(e) {
    var t,
        n,
        { appId: r, skuId: a, onClick: u } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['appId', 'skuId', 'onClick']);
    let f = (0, s.Z)();
    return (0, l.jsx)(
        o.zxk,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, c)),
        (n = n =
            {
                onClick: (e) => {
                    if (
                        (p.default.track(O.rMx.STOREFRONT_PURCHASE_CLICKED, {
                            application_id: r,
                            sku_id: a
                        }),
                        !f)
                    ) {
                        e.preventDefault(), e.stopPropagation();
                        let t = O.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(r, a),
                            n = (0, i.Ui)(t, !1);
                        (0, d.uL)(n);
                        return;
                    }
                    null == u || u(e);
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
function S(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)(o.zxk, {
        disabled: !0,
        className: t,
        look: o.zxk.Looks.OUTLINED,
        color: o.zxk.Colors.PRIMARY,
        children: n
    });
}

n.d(t, {
    YG: () => h,
    pV: () => g,
    rf: () => y
});
var i,
    l = n(200651);
n(192379);
var r = n(860911),
    o = n(481060),
    a = n(100527),
    u = n(906732),
    s = n(887706),
    c = n(929011),
    d = n(703656),
    p = n(626135),
    f = n(937615),
    b = n(110742),
    v = n(981631),
    O = n(388032),
    m = n(37935),
    y = (((i = {})[(i.AVAILABLE = 0)] = 'AVAILABLE'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.UPCOMING_PLAN = 2)] = 'UPCOMING_PLAN'), (i[(i.SUBSCRIBED = 3)] = 'SUBSCRIBED'), (i[(i.UNAVAILABLE = 4)] = 'UNAVAILABLE'), i);
function g(e) {
    let { appId: t, className: n, onClick: i, onHasClicked: r, skuId: o, subscriptionPlan: a, icon: u, state: s = 0 } = e,
        c = null != a ? (0, f.xg)(a) : null,
        d = 1 === s;
    return 0 === s || d
        ? (0, l.jsx)(S, {
              appId: t,
              skuId: o,
              onClick: (e) => {
                  i(e), null == r || r();
              },
              className: n,
              submitting: d,
              children: (0, l.jsxs)('div', {
                  className: m.btnContent,
                  children: [u, null != c ? O.NW.formatToPlainString(O.t.i4T8v7, { rate: c }) : O.NW.string(O.t.uuzaAA)]
              })
          })
        : (0, l.jsx)(I, {
              className: n,
              children: (function (e, t) {
                  switch (e) {
                      case 2:
                          return O.NW.formatToPlainString(O.t.k1ew5O, { rate: t });
                      case 3:
                          return O.NW.formatToPlainString(O.t['Hs3Y+P'], { rate: t });
                      case 4:
                          return O.NW.string(O.t.DLAKbm);
                  }
              })(s, null != c ? c : '')
          });
}
function h(e) {
    let { appId: t, className: n, onClick: i, onHasClicked: r, sku: o, icon: s } = e,
        { analyticsLocations: d } = (0, u.ZP)(a.Z.APP_STOREFRONT),
        p = () => {
            (0, c.r)({
                appId: t,
                skuId: o.id,
                analyticsLocations: d
            });
        },
        y = (0, b.M)(o.id),
        g = o.type === v.epS.DURABLE && y,
        { price: h } = o;
    return null == h
        ? null
        : g
          ? (0, l.jsx)(I, {
                className: n,
                children: O.NW.string(O.t['/bUsx8'])
            })
          : (0, l.jsx)(S, {
                appId: t,
                skuId: o.id,
                onClick: (e) => {
                    (null != i ? i : p)(e), null == r || r();
                },
                className: n,
                children: (0, l.jsxs)('div', {
                    className: m.btnContent,
                    children: [s, O.NW.format(O.t.Xp5WTk, { price: (0, f.T4)(h.amount, h.currency) })]
                })
            });
}
function S(e) {
    var t,
        n,
        { appId: i, skuId: a, onClick: u } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        l = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['appId', 'skuId', 'onClick']);
    let f = (0, s.Z)();
    return (0, l.jsx)(
        o.zxk,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })({}, c)),
        (n = n =
            {
                onClick: (e) => {
                    if (
                        (p.default.track(v.rMx.STOREFRONT_PURCHASE_CLICKED, {
                            application_id: i,
                            sku_id: a
                        }),
                        !f)
                    ) {
                        e.preventDefault(), e.stopPropagation();
                        let t = v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(i, a),
                            n = (0, r.Ui)(t, !1);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
function I(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)(o.zxk, {
        disabled: !0,
        className: t,
        look: o.zxk.Looks.OUTLINED,
        color: o.zxk.Colors.PRIMARY,
        children: n
    });
}

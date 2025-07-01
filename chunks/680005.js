n.d(e, {
    YG: () => _,
    pV: () => P,
    rf: () => g
});
var i,
    r = n(255367);
n(73800);
var l = n(860911),
    o = n(481060),
    a = n(100527),
    s = n(906732),
    u = n(349167),
    c = n(929011),
    d = n(703656),
    p = n(626135),
    f = n(937615),
    S = n(110742),
    O = n(981631),
    I = n(388032),
    b = n(299283),
    g = (((i = {})[(i.AVAILABLE = 0)] = 'AVAILABLE'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.UPCOMING_PLAN = 2)] = 'UPCOMING_PLAN'), (i[(i.SUBSCRIBED = 3)] = 'SUBSCRIBED'), (i[(i.UNAVAILABLE = 4)] = 'UNAVAILABLE'), i);
function P(t) {
    let { appId: e, className: n, onClick: i, onHasClicked: l, skuId: o, subscriptionPlan: a, icon: s, state: u = 0 } = t,
        c = null != a ? (0, f.xg)(a) : null,
        d = 1 === u;
    return 0 === u || d
        ? (0, r.jsx)(y, {
              appId: e,
              skuId: o,
              onClick: (t) => {
                  (i(t), null == l || l());
              },
              className: n,
              submitting: d,
              children: (0, r.jsxs)('div', {
                  className: b.btnContent,
                  children: [s, null != c ? I.intl.formatToPlainString(I.t.i4T8v7, { rate: c }) : I.intl.string(I.t.uuzaAA)]
              })
          })
        : (0, r.jsx)(m, {
              className: n,
              children: (function (t, e) {
                  switch (t) {
                      case 2:
                          return I.intl.formatToPlainString(I.t.k1ew5O, { rate: e });
                      case 3:
                          return I.intl.formatToPlainString(I.t['Hs3Y+P'], { rate: e });
                      case 4:
                          return I.intl.string(I.t.DLAKbm);
                  }
              })(u, null != c ? c : '')
          });
}
function _(t) {
    let { appId: e, className: n, onClick: i, onHasClicked: l, sku: o, icon: u } = t,
        { analyticsLocations: d } = (0, s.ZP)(a.Z.APP_STOREFRONT),
        p = () => {
            (0, c.r)({
                appId: e,
                skuId: o.id,
                analyticsLocations: d
            });
        },
        g = (0, S.M)(o.id),
        P = o.type === O.epS.DURABLE && g,
        { price: _ } = o;
    return null == _
        ? null
        : P
          ? (0, r.jsx)(m, {
                className: n,
                children: I.intl.string(I.t['6cfuDg'])
            })
          : (0, r.jsx)(y, {
                appId: e,
                skuId: o.id,
                onClick: (t) => {
                    ((null != i ? i : p)(t), null == l || l());
                },
                className: n,
                children: (0, r.jsxs)('div', {
                    className: b.btnContent,
                    children: [u, I.intl.format(I.t.Xp5WTk, { price: (0, f.T4)(_.amount, _.currency) })]
                })
            });
}
function y(t) {
    var e,
        n,
        { appId: i, skuId: a, onClick: s } = t,
        c = (function (t, e) {
            if (null == t) return {};
            var n,
                i,
                r = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(t);
                    for (i = 0; i < l.length; i++) ((n = l[i]), e.indexOf(n) >= 0 || (r[n] = t[n]));
                    return r;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(t);
                for (i = 0; i < l.length; i++) ((n = l[i]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
            }
            return r;
        })(t, ['appId', 'skuId', 'onClick']);
    let f = (0, u.Z)();
    return (0, r.jsx)(
        o.zxk,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        })
                    )),
                    i.forEach(function (e) {
                        var i;
                        ((i = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = i));
                    }));
            }
            return t;
        })({}, c)),
        (n = n =
            {
                onClick: (t) => {
                    if (
                        (p.default.track(O.rMx.STOREFRONT_PURCHASE_CLICKED, {
                            application_id: i,
                            sku_id: a
                        }),
                        !f)
                    ) {
                        (t.preventDefault(), t.stopPropagation());
                        let e = O.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(i, a),
                            n = (0, l.Ui)(e, !1);
                        (0, d.uL)(n);
                        return;
                    }
                    null == s || s(t);
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e)
    );
}
function m(t) {
    let { className: e, children: n } = t;
    return (0, r.jsx)(o.zxk, {
        disabled: !0,
        className: e,
        look: o.zxk.Looks.OUTLINED,
        color: o.zxk.Colors.PRIMARY,
        children: n
    });
}

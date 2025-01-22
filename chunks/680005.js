e.d(t, {
    YG: function () {
        return Z;
    },
    pV: function () {
        return g;
    },
    rf: function () {
        return l;
    }
});
var i,
    l,
    r = e(200651);
e(192379);
var u = e(860911),
    a = e(481060),
    o = e(100527),
    s = e(906732),
    c = e(887706),
    d = e(929011),
    f = e(703656),
    p = e(626135),
    m = e(937615),
    v = e(110742),
    S = e(981631),
    I = e(388032),
    h = e(978733);
((i = l || (l = {}))[(i.AVAILABLE = 0)] = 'AVAILABLE'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.UPCOMING_PLAN = 2)] = 'UPCOMING_PLAN'), (i[(i.SUBSCRIBED = 3)] = 'SUBSCRIBED'), (i[(i.UNAVAILABLE = 4)] = 'UNAVAILABLE');
function g(n) {
    let { appId: t, className: e, onClick: i, onHasClicked: l, skuId: u, subscriptionPlan: a, icon: o, state: s = 0 } = n,
        c = null != a ? (0, m.xg)(a) : null,
        d = 1 === s;
    return 0 === s || d
        ? (0, r.jsx)(A, {
              appId: t,
              skuId: u,
              onClick: (n) => {
                  i(n), null == l || l();
              },
              className: e,
              submitting: d,
              children: (0, r.jsxs)('div', {
                  className: h.btnContent,
                  children: [o, null != c ? I.intl.formatToPlainString(I.t.i4T8v7, { rate: c }) : I.intl.string(I.t.uuzaAA)]
              })
          })
        : (0, r.jsx)(b, {
              className: e,
              children: (function (n, t) {
                  switch (n) {
                      case 2:
                          return I.intl.formatToPlainString(I.t.k1ew5O, { rate: t });
                      case 3:
                          return I.intl.formatToPlainString(I.t['Hs3Y+P'], { rate: t });
                      case 4:
                          return I.intl.string(I.t.DLAKbm);
                  }
              })(s, null != c ? c : '')
          });
}
function Z(n) {
    let { appId: t, className: e, onClick: i, onHasClicked: l, sku: u, icon: a } = n,
        { analyticsLocations: c } = (0, s.ZP)(o.Z.APP_STOREFRONT),
        f = () => {
            (0, d.r)({
                appId: t,
                skuId: u.id,
                analyticsLocations: c
            });
        },
        p = (0, v.M)(u.id),
        g = u.type === S.epS.DURABLE && p,
        { price: Z } = u;
    return null == Z
        ? null
        : g
          ? (0, r.jsx)(b, {
                className: e,
                children: I.intl.string(I.t['/bUsx8'])
            })
          : (0, r.jsx)(A, {
                appId: t,
                skuId: u.id,
                onClick: (n) => {
                    (null != i ? i : f)(n), null == l || l();
                },
                className: e,
                children: (0, r.jsxs)('div', {
                    className: h.btnContent,
                    children: [a, I.intl.format(I.t.Xp5WTk, { price: (0, m.T4)(Z.amount, Z.currency) })]
                })
            });
}
function A(n) {
    let { appId: t, skuId: e, onClick: i, ...l } = n,
        o = (0, c.Z)();
    return (0, r.jsx)(a.Button, {
        ...l,
        onClick: (n) => {
            if (
                (p.default.track(S.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: t,
                    sku_id: e
                }),
                !o)
            ) {
                n.preventDefault(), n.stopPropagation();
                let i = S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, e),
                    l = (0, u.Ui)(i, !1);
                (0, f.uL)(l);
                return;
            }
            null == i || i(n);
        }
    });
}
function b(n) {
    let { className: t, children: e } = n;
    return (0, r.jsx)(a.Button, {
        disabled: !0,
        className: t,
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.PRIMARY,
        children: e
    });
}

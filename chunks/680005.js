e.d(t, {
    YG: () => g,
    pV: () => Z,
    rf: () => S
});
var l,
    i = e(200651);
e(192379);
var a = e(860911),
    r = e(481060),
    s = e(100527),
    u = e(906732),
    o = e(887706),
    d = e(929011),
    c = e(703656),
    p = e(626135),
    f = e(937615),
    v = e(110742),
    m = e(981631),
    I = e(388032),
    h = e(274010),
    S = (((l = {})[(l.AVAILABLE = 0)] = 'AVAILABLE'), (l[(l.LOADING = 1)] = 'LOADING'), (l[(l.UPCOMING_PLAN = 2)] = 'UPCOMING_PLAN'), (l[(l.SUBSCRIBED = 3)] = 'SUBSCRIBED'), (l[(l.UNAVAILABLE = 4)] = 'UNAVAILABLE'), l);
function Z(n) {
    let { appId: t, className: e, onClick: l, onHasClicked: a, skuId: r, subscriptionPlan: s, icon: u, state: o = 0 } = n,
        d = null != s ? (0, f.xg)(s) : null,
        c = 1 === o;
    return 0 === o || c
        ? (0, i.jsx)(E, {
              appId: t,
              skuId: r,
              onClick: (n) => {
                  l(n), null == a || a();
              },
              className: e,
              submitting: c,
              children: (0, i.jsxs)('div', {
                  className: h.btnContent,
                  children: [u, null != d ? I.intl.formatToPlainString(I.t.i4T8v7, { rate: d }) : I.intl.string(I.t.uuzaAA)]
              })
          })
        : (0, i.jsx)(A, {
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
              })(o, null != d ? d : '')
          });
}
function g(n) {
    let { appId: t, className: e, onClick: l, onHasClicked: a, sku: r, icon: o } = n,
        { analyticsLocations: c } = (0, u.ZP)(s.Z.APP_STOREFRONT),
        p = () => {
            (0, d.r)({
                appId: t,
                skuId: r.id,
                analyticsLocations: c
            });
        },
        S = (0, v.M)(r.id),
        Z = r.type === m.epS.DURABLE && S,
        { price: g } = r;
    return null == g
        ? null
        : Z
          ? (0, i.jsx)(A, {
                className: e,
                children: I.intl.string(I.t['/bUsx8'])
            })
          : (0, i.jsx)(E, {
                appId: t,
                skuId: r.id,
                onClick: (n) => {
                    (null != l ? l : p)(n), null == a || a();
                },
                className: e,
                children: (0, i.jsxs)('div', {
                    className: h.btnContent,
                    children: [o, I.intl.format(I.t.Xp5WTk, { price: (0, f.T4)(g.amount, g.currency) })]
                })
            });
}
function E(n) {
    let { appId: t, skuId: e, onClick: l, ...s } = n,
        u = (0, o.Z)();
    return (0, i.jsx)(r.zxk, {
        ...s,
        onClick: (n) => {
            if (
                (p.default.track(m.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: t,
                    sku_id: e
                }),
                !u)
            ) {
                n.preventDefault(), n.stopPropagation();
                let l = m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, e),
                    i = (0, a.Ui)(l, !1);
                (0, c.uL)(i);
                return;
            }
            null == l || l(n);
        }
    });
}
function A(n) {
    let { className: t, children: e } = n;
    return (0, i.jsx)(r.zxk, {
        disabled: !0,
        className: t,
        look: r.zxk.Looks.OUTLINED,
        color: r.zxk.Colors.PRIMARY,
        children: e
    });
}

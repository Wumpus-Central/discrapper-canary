n.d(t, {
    YG: () => S,
    pV: () => T,
    rf: () => v
});
var r = n(255367);
n(73800);
var i = n(860911),
    o = n(481060),
    a = n(100527),
    s = n(906732),
    l = n(349167),
    c = n(929011),
    u = n(703656),
    d = n(626135),
    f = n(937615),
    _ = n(110742),
    p = n(981631),
    h = n(388032);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
var v = (function (e) {
    return ((e[(e.AVAILABLE = 0)] = 'AVAILABLE'), (e[(e.LOADING = 1)] = 'LOADING'), (e[(e.UPCOMING_PLAN = 2)] = 'UPCOMING_PLAN'), (e[(e.SUBSCRIBED = 3)] = 'SUBSCRIBED'), (e[(e.UNAVAILABLE = 4)] = 'UNAVAILABLE'), e);
})({});
function I(e, t) {
    switch (e) {
        case 2:
            return h.intl.formatToPlainString(h.t.k1ew5O, { rate: t });
        case 3:
            return h.intl.formatToPlainString(h.t['Hs3Y+P'], { rate: t });
        case 4:
            return h.intl.string(h.t.DLAKbm);
    }
}
function T(e) {
    let { appId: t, onClick: n, onHasClicked: i, skuId: o, subscriptionPlan: a, icon: s, state: l = 0 } = e,
        c = (e) => {
            (n(e), null == i || i());
        },
        u = null != a ? (0, f.xg)(a) : null,
        d = 1 === l;
    return 0 === l || d
        ? (0, r.jsx)(A, {
              appId: t,
              skuId: o,
              onClick: c,
              loading: d,
              icon: s,
              text: null != u ? h.intl.formatToPlainString(h.t.i4T8v7, { rate: u }) : h.intl.string(h.t.uuzaAA)
          })
        : (0, r.jsx)(N, { text: I(l, null != u ? u : '') });
}
function S(e) {
    let { appId: t, onClick: n, onHasClicked: i, sku: o, icon: l } = e,
        { analyticsLocations: u } = (0, s.ZP)(a.Z.APP_STOREFRONT),
        d = () => {
            (0, c.r)({
                appId: t,
                skuId: o.id,
                analyticsLocations: u
            });
        },
        m = (0, _.M)(o.id),
        g = o.type === p.epS.DURABLE && m,
        { price: E } = o;
    if (null == E) return null;
    let b = (e) => {
        ((null != n ? n : d)(e), null == i || i());
    };
    return g
        ? (0, r.jsx)(N, { text: h.intl.string(h.t['6cfuDg']) })
        : (0, r.jsx)(A, {
              appId: t,
              skuId: o.id,
              onClick: b,
              text: h.intl.format(h.t.Xp5WTk, { price: (0, f.T4)(E.amount, E.currency) }),
              icon: l
          });
}
function A(e) {
    var { appId: t, skuId: n, onClick: a } = e,
        s = y(e, ['appId', 'skuId', 'onClick']);
    let c = (0, l.Z)(),
        f = (e) => {
            if (
                (d.default.track(p.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: t,
                    sku_id: n
                }),
                !c)
            ) {
                (e.preventDefault(), e.stopPropagation());
                let r = p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n),
                    o = (0, i.Ui)(r, !1);
                (0, u.uL)(o);
                return;
            }
            null == a || a(e);
        };
    return (0, r.jsx)(o.zxk, b(g({}, s), { onClick: f }));
}
function N(e) {
    let { text: t } = e;
    return (0, r.jsx)(o.zxk, {
        text: t,
        disabled: !0,
        variant: 'primary'
    });
}

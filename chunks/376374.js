n.d(t, {
    $P: () => I,
    rc: () => S,
    wF: () => A,
});
var r = n(627968);
n(64700);
var i = n(323125),
    a = n(397927),
    s = n(793574),
    o = n(688810),
    l = n(897100),
    c = n(638643),
    u = n(976860),
    d = n(954571),
    f = n(580630),
    p = n(56754),
    _ = n(652215),
    h = n(985018);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = O(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var A = (function (e) {
    return (
        (e[(e.AVAILABLE = 0)] = "AVAILABLE"),
        (e[(e.LOADING = 1)] = "LOADING"),
        (e[(e.UPCOMING_PLAN = 2)] = "UPCOMING_PLAN"),
        (e[(e.SUBSCRIBED = 3)] = "SUBSCRIBED"),
        (e[(e.UNAVAILABLE = 4)] = "UNAVAILABLE"),
        e
    );
})({});
function v(e, t) {
    switch (e) {
        case 2:
            return h.intl.formatToPlainString(h.t.k1ew5N, { rate: t });
        case 3:
            return h.intl.formatToPlainString(h.t["Hs3Y+I"], { rate: t });
        case 4:
            return h.intl.string(h.t.DLAKbi);
    }
}
function S(e) {
    let { appId: t, onClick: n, onHasClicked: i, skuId: a, subscriptionPlan: s, icon: o, state: l = 0 } = e,
        c = (e) => {
            n(e), null == i || i();
        },
        u = null != s ? (0, f._J)(s) : null,
        d = 1 === l;
    return 0 === l || d
        ? (0, r.jsx)(T, {
              appId: t,
              skuId: a,
              onClick: c,
              loading: d,
              icon: o,
              text: null != u ? h.intl.formatToPlainString(h.t.i4T8vz, { rate: u }) : h.intl.string(h.t.uuzaAK),
          })
        : (0, r.jsx)(C, { text: v(l, null != u ? u : "") });
}
function I(e) {
    let { appId: t, onClick: n, onHasClicked: i, sku: a, icon: l } = e,
        { analyticsLocations: u } = (0, o.Ay)(s.A.APP_STOREFRONT),
        d = () => {
            (0, c.k)({
                appId: t,
                skuId: a.id,
                analyticsLocations: u,
            });
        },
        m = (0, p.L)(a.id),
        g = a.type === _.Puh.DURABLE && m,
        { price: E } = a;
    if (null == E) return null;
    let b = (e) => {
        (null != n ? n : d)(e), null == i || i();
    };
    return g
        ? (0, r.jsx)(C, { text: h.intl.string(h.t["6cfuDj"]) })
        : (0, r.jsx)(T, {
              appId: t,
              skuId: a.id,
              onClick: b,
              text: h.intl.format(h.t.Xp5WTn, { price: (0, f.$g)(E.amount, E.currency) }),
              icon: l,
          });
}
function T(e) {
    let { appId: t, skuId: n, onClick: s } = e,
        o = y(e, ["appId", "skuId", "onClick"]),
        c = (0, l.A)(),
        f = (e) => {
            if (
                (d.default.track(_.HAw.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: t,
                    sku_id: n,
                }),
                !c)
            ) {
                e.preventDefault(), e.stopPropagation();
                let r = _.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n),
                    a = (0, i.T2)(r, !1);
                (0, u.pX)(a);
                return;
            }
            null == s || s(e);
        };
    return (0, r.jsx)(a.Button, b(g({}, o), { onClick: f }));
}
function C(e) {
    let { text: t } = e;
    return (0, r.jsx)(a.Button, {
        text: t,
        disabled: !0,
        variant: "primary",
    });
}

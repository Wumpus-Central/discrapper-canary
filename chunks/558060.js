n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(884697),
    s = n(754433),
    l = n(409116),
    c = n(981631),
    u = n(492851);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
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
function p(e, t) {
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
function h(e) {
    let {
            product: t,
            isPremiumUser: n,
            discount: i,
            className: d,
            discountOfferAmount: _,
            hideStrikethroughPrice: h = !1,
            nitroIconType: m,
            nitroIconSize: g = "md",
        } = e,
        E = (0, o.ql)(t, c.tuJ.DEFAULT);
    if (null == E) return null;
    if (E.amount <= 0)
        return (0, r.jsx)("div", {
            className: a()(u.priceTagsContainer, d),
            children: (0, r.jsx)(l.F, { price: E }),
        });
    let b = (0, o.ql)(t, c.tuJ.PREMIUM_TIER_2),
        y = (0, o.x6)(t) && n ? p(f({}, E), { amount: i.original }) : E,
        O = n && null != b;
    return (0, r.jsxs)("div", {
        className: a()(u.priceTagsContainer, d),
        children: [
            h
                ? null
                : (0, r.jsx)(s.y, {
                      price: y,
                      className: u.price,
                  }),
            (0, r.jsx)(l.F, {
                price: O ? b : y,
                discount: i,
                className: a()({ [u.price]: null == _ }),
                nitroIconType: O ? m : void 0,
                nitroIconSize: g,
                discountOfferAmount: _,
            }),
        ],
    });
}

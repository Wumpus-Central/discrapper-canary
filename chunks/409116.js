n.d(t, { F: () => E });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(937615),
    l = n(884697),
    c = n(388032),
    u = n(239051);
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
function f() {
    return (f =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function _(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = 5,
    E = (e) => {
        let {
                price: { amount: t, currency: n },
                nitroIconType: i,
                nitroIconSize: d = "md",
                className: h,
                discountOfferAmount: E,
                discount: b = l.f_,
                variant: y = "heading-md/semibold",
            } = e,
            O = null != E,
            v = (0, s.qr)(t, n),
            I =
                b !== l.f_ && b.discountPercentage >= g && !O
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.nn4, {
                                  children: c.intl.format(c.t.niC6DA, {
                                      price: v,
                                      discountPercentage: b.discountPercentage,
                                  }),
                              }),
                              (0, r.jsx)("span", {
                                  "aria-hidden": !0,
                                  children: v,
                              }),
                              (0, r.jsxs)(o.Text, {
                                  variant: y,
                                  color: "text-feedback-positive",
                                  className: u.discount,
                                  "aria-hidden": !0,
                                  children: ["(-", b.discountPercentage, "%)"],
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.nn4, { children: c.intl.format(c.t["6C36MD"], { price: v }) }),
                              (0, r.jsx)("span", {
                                  "aria-hidden": !0,
                                  className: a()({ [u.priceStrikethrough]: O }, h),
                                  children: v,
                              }),
                          ],
                      });
        return (0, r.jsxs)(o.Text, {
            variant: y,
            className: a()({ [u.discountBackgroundColor]: O }, u.container, h),
            children: [
                "tooltip" === i
                    ? (0, r.jsx)(o.ua7, {
                          text: c.intl.string(c.t.MPFyJy),
                          "aria-label": c.intl.string(c.t.X3Ekj4),
                          children: (e) => {
                              var t = f({}, _(e));
                              return (0, r.jsx)(
                                  o.SrA,
                                  m(
                                      p(
                                          {
                                              size: d,
                                              color: "currentColor",
                                          },
                                          t,
                                      ),
                                      { className: u.nitroIcon },
                                  ),
                              );
                          },
                      })
                    : "default" === i
                      ? (0, r.jsx)(o.SrA, {
                            size: d,
                            color: "currentColor",
                            className: u.nitroIcon,
                        })
                      : null,
                I,
                O &&
                    (0, r.jsxs)(o.X6q, {
                        variant: "heading-md/semibold",
                        className: u.discountPill,
                        children: [
                            (0, r.jsx)(o.nn4, { children: c.intl.format(c.t.rItDb2, { discountOfferAmount: E }) }),
                            (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                children: c.intl.formatToPlainString(c.t.AYcXGR, { discountOfferAmount: E }),
                            }),
                        ],
                    }),
            ],
        });
    };

n.d(t, { G: () => _ }), n(856094);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(339695),
    s = n(64027);
n(910989), n(402453), n(777207);
var l = n(325380);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function _(e) {
    let { leading: t, actions: n = [], actionsFullWidth: i = !1 } = e;
    if (null == t && n.length < 1) return null;
    let c = ["primary", "critical-primary", "expressive"],
        d = n.findLastIndex((e) => null != e.variant && c.includes(e.variant));
    return (0, r.jsxs)("footer", {
        className: a()(l.actionBar, l.section),
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: l.actionBarLeading,
                    children: t,
                }),
            (0, r.jsx)("div", {
                className: a()(l.actionBarTrailing, { [l.actionBarTrailingFullWidth]: i }),
                children: (0, r.jsx)(s.h, {
                    fullWidth: i,
                    children:
                        null == n
                            ? void 0
                            : n.map((e, t) => {
                                  var n;
                                  return (0, r.jsx)(
                                      o.z,
                                      u({ autoFocus: null != (n = e.autoFocus) ? n : d === t }, e),
                                      t,
                                  );
                              }),
                }),
            }),
        ],
    });
}

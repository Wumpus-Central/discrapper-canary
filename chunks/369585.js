n.d(t, { G: () => f }), n(856094);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i);
n(793030);
var o = n(159691);
n(755721), n(614177), n(388032);
var s = n(456208);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function f(e) {
    let { leading: t, actions: n = [], actionsFullWidth: i = !1 } = e;
    if (null == t && n.length < 1) return null;
    let l = ["primary", "critical-primary", "expressive"],
        u = n.findLastIndex((e) => null != e.variant && l.includes(e.variant));
    return (0, r.jsxs)("footer", {
        className: a()(s.actionBar, s.section),
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: s.actionBarLeading,
                    children: t,
                }),
            (0, r.jsx)("div", {
                className: a()(s.actionBarTrailing, { [s.actionBarTrailingFullWidth]: i }),
                children: (0, r.jsx)(o.hE2, {
                    fullWidth: i,
                    children:
                        null == n
                            ? void 0
                            : n.map((e, t) => {
                                  var n;
                                  return (0, r.jsx)(
                                      o.zxk,
                                      c({ autoFocus: null != (n = e.autoFocus) ? n : u === t }, e),
                                      t,
                                  );
                              }),
                }),
            }),
        ],
    });
}

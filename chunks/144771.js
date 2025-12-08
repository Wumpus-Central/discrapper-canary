n.d(t, {
    B: () => E,
    G: () => g,
}),
    n(856094);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(339695),
    s = n(64027),
    l = n(595824),
    c = n(402453),
    u = n(325380);
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
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    let { leading: t, actions: n = [], actionsFullWidth: i = !1, leadingLayout: l = "default" } = e;
    if (null == t && n.length < 1) return null;
    let c = ["primary", "critical-primary", "expressive"],
        d = n.findLastIndex((e) => null != e.variant && c.includes(e.variant));
    return (0, r.jsxs)("footer", {
        className: a()(u.actionBar, u.section, { [u.actionBarLayoutChatInput]: "chat-input" === l }),
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: u.actionBarLeading,
                    children: t,
                }),
            (0, r.jsx)("div", {
                className: a()(u.actionBarTrailing, { [u.actionBarTrailingFullWidth]: i }),
                children: (0, r.jsx)(s.h, {
                    fullWidth: i,
                    children:
                        null == n
                            ? void 0
                            : n.map((e, t) => {
                                  var n;
                                  return (0, r.jsx)(
                                      o.z,
                                      f({ autoFocus: null != (n = e.autoFocus) ? n : d === t }, e),
                                      t,
                                  );
                              }),
                }),
            }),
        ],
    });
}
function E(e) {
    var { label: t } = e,
        n = m(e, ["label"]);
    let { i18n: i } = (0, c.ZF)();
    return (0, r.jsx)(
        l.X,
        _(f({}, n), {
            label: null != t ? t : i.MODAL_DONT_SHOW_AGAIN,
            labelType: "secondary",
        }),
    );
}

n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    o = n(481060),
    a = n(86419),
    c = n(388032),
    s = n(15392);
function d(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { game: t, widgetType: l, userId: f, className: p } = e,
        m = (e) => {
            if (e.shiftKey) return void (0, a.$b)(l, t.applicationId);
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("68774").then(n.bind(n, 701820));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        u(d({}, n), {
                            userId: f,
                            widgetType: l,
                            game: t,
                        }),
                    );
            });
        };
    return (0, r.jsx)(o.ua7, {
        text: c.intl.string(c.t["zyWY9/"]),
        children: (e) =>
            (0, r.jsx)(
                o.P3F,
                u(d({}, e), {
                    onClick: m,
                    "aria-label": c.intl.string(c.t["zyWY9/"]),
                    role: "button",
                    tabIndex: 0,
                    className: i()(p, s.clickable),
                    children: (0, r.jsx)(o.XHJ, {
                        size: "md",
                        color: o.TVs.colors.STATUS_DANGER,
                    }),
                }),
            ),
    });
}

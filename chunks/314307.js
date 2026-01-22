n.d(t, {
    Ay: () => p,
    WK: () => u,
    cr: () => d,
    j1: () => f,
}),
    n(228524);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(397927),
    s = n(375901),
    o = n(652215),
    c = n(423059);
function u(e) {
    let { locked: t = !1, channelType: n } = e,
        l = n === o.rbe.GUILD_VOICE || n === o.rbe.GUILD_STAGE_VOICE ? a.oyn : t ? a.I$d : a.N$i;
    return (0, r.jsx)("div", {
        className: i()(c.qk, c.tP),
        children: (0, r.jsx)(l, {
            color: a.LU0.colors.WHITE,
            size: "custom",
            width: 42,
            height: 42,
        }),
    });
}
function d(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)(a.Heading, {
        "aria-hidden": "true",
        className: i()(n, c.wx),
        variant: "heading-xxl/extrabold",
        children: t,
    });
}
function f(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "none",
        className: i()(c.h_, n),
        children: t,
    });
}
let p = function (e) {
    var t, n;
    let { className: l, channelId: a, children: o } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["className", "channelId", "children"]);
    return (0, r.jsx)(
        "div",
        ((t = (function (e) {
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
        })(
            {
                className: i()(l, c.kL),
                id: (0, s.j)(a, a),
            },
            u,
        )),
        (n = n = { children: o }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
};

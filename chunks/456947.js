r.d(t, { default: () => p });
var n = r(627968);
r(64700);
var o = r(158954),
    c = r(397927),
    i = r(985018),
    l = r(212603),
    s = r(973324);
let a = (e) => {
    let { text: t, icon: r, foreground: o } = e;
    return (0, n.jsxs)("div", {
        className: l.OI,
        children: [
            (0, n.jsx)("div", {
                className: l.zc,
                children: (0, n.jsx)(r, {
                    color: null != o ? o : "currentColor",
                    className: l.kZ,
                    size: "custom",
                    height: 40,
                    width: 40,
                }),
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: l.Ct,
                children: t,
            }),
        ],
    });
};
function p(e) {
    var t, r;
    let { transitionState: l, onClose: p } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                c = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
                return c;
            }
            if (
                ((c = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.getOwnPropertyNames(e);
                    for (n = 0; n < c.length; n++)
                        (r = c[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
            return c;
        })(e, ["transitionState", "onClose"]);
    return (0, n.jsxs)(
        o.ExpressiveModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, u)),
        (r = r =
            {
                graphic: {
                    type: "image",
                    src: s.A,
                },
                title: i.intl.string(i.t.UVuXCs),
                onClose: p,
                transitionState: l,
                actions: [
                    {
                        text: i.intl.string(i.t.obLqZ8),
                        variant: "primary",
                        onClick: p,
                    },
                ],
                children: [
                    (0, n.jsx)(a, {
                        text: i.intl.string(i.t.sBDfo6),
                        icon: c.z0P,
                        foreground: "var(--icon-feedback-critical)",
                    }),
                    (0, n.jsx)(a, {
                        text: i.intl.string(i.t.x58YtH),
                        icon: c.zWQ,
                    }),
                    (0, n.jsx)(a, {
                        text: i.intl.string(i.t.XtVqla),
                        icon: c.E7M,
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}

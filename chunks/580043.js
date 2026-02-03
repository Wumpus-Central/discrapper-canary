n.d(t, {
    A: () => g,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(92674),
    o = n(397927),
    c = n(995591);
class d extends i.Component {
    render() {
        var e, t;
        let n = this.props,
            { icon: i } = n,
            l = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(n, ["icon"]);
        return (0, r.jsx)(
            i,
            ((e = (function (e) {
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
                    size: "md",
                },
                l,
            )),
            (t = t =
                {
                    color: "currentColor",
                }),
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
            e),
        );
    }
}
let u = (0, a.animated)(d),
    g = function (e) {
        let { className: t, name: n, icon: i, iconClassName: l } = e,
            a = (0, o.pnh)(
                {
                    name: n,
                    icon: i,
                    iconClassName: l,
                },
                {
                    key: (e) => e.name,
                    initial: null,
                    from: {
                        opacity: 0,
                    },
                    enter: {
                        opacity: 1,
                    },
                    leave: {
                        opacity: 0,
                    },
                },
                "animate-always",
            );
        return (0, r.jsx)("div", {
            className: s()(c.t, t),
            children: a((e, t) => {
                let { icon: n, iconClassName: i } = t;
                return (0, r.jsx)(u, {
                    icon: n,
                    className: s()(c.K, i),
                    style: e,
                });
            }),
        });
    };

n.d(t, {
    ZP: () => Z,
    wB: () => b,
}),
    n(415506);
var i,
    r = n(951288),
    s = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(877921),
    c = n.n(a),
    d = n(28664),
    u = n(755721),
    h = n(481060),
    p = n(981631),
    f = n(881266),
    g = n(149715);
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
let y = p.t_t.DEFAULT,
    b = 1,
    v = s.createContext({
        type: y,
        opacity: b,
    }),
    _ = s.createContext(void 0),
    O = (e) => {
        var { children: t, className: n } = e,
            i = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            s = Object.keys(e);
                        for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < s.length; i++)
                        (n = s[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ["children", "className"]);
        return (0, r.jsx)(v.Consumer, {
            children: (e) => {
                let { type: s } = e;
                return (0, r.jsx)(_.Consumer, {
                    children: (e) => {
                        var o, a;
                        return (0, r.jsx)(
                            "div",
                            ((o = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            m(e, t, n[t]);
                                        });
                                }
                                return e;
                            })(
                                {
                                    className: l()(f.bar, f[c()(s)], n),
                                    style: e,
                                },
                                i,
                            )),
                            (a = a = { children: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            o),
                        );
                    },
                });
            },
        });
    };
class E extends (i = s.PureComponent) {
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, r.jsx)(_.Consumer, {
            children: (i) =>
                (0, r.jsx)(v.Consumer, {
                    children: (s) => {
                        let o = l()(f.body, f[c()(s.type)], n);
                        return e
                            ? (0, r.jsx)("div", {
                                  className: o,
                                  style: i,
                                  children: t,
                              })
                            : (0, r.jsx)(h.Ttm, {
                                  fade: !0,
                                  className: o,
                                  children: t,
                              });
                    },
                }),
        });
    }
}
m(E, "defaultProps", { disableScroll: !1 });
let x = (e) => {
        let { type: t = y, width: n, height: i, children: s, className: o, opacity: a = b, onClick: d } = e;
        return (0, r.jsx)(v.Provider, {
            value: {
                type: t,
                opacity: a,
            },
            children: (0, r.jsx)("div", {
                className: l()(f.widget, f[c()(t)], o),
                style: {
                    width: n,
                    height: i,
                },
                onClick: d,
                children: s,
            }),
        });
    },
    S = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, r.jsx)(_.Consumer, {
            children: (e) =>
                (0, r.jsx)("div", {
                    className: l()(f.content, { [f.staticSize]: !i }, n),
                    style: e,
                    children: t,
                }),
        });
    };
(x.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [O, E, S];
    return (0, r.jsx)(v.Consumer, {
        children: (e) => {
            let { opacity: o } = e,
                l = { backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : o), ")") };
            if ("string" == typeof t.type) return s.cloneElement(t, { style: l });
            {
                if (i.includes(t.type))
                    return (0, r.jsx)(_.Provider, {
                        value: l,
                        children: t,
                    });
                let e = t.type.displayName;
                throw Error(
                    "Widget.Background cannot be wrapped around "
                        .concat(e, ". Pass a DOM node or one of ")
                        .concat(i.map((e) => "Widget." + e.name).join(",")),
                );
            }
        },
    });
}),
    (x.Body = E),
    (x.Content = S),
    (x.Icon = (e) => {
        let {
            ref: t,
            icon: n,
            label: i,
            onClick: s,
            isActive: o,
            tooltipPosition: a = "top",
            size: c = 20,
            isTutorial: h = !1,
        } = e;
        return (0, r.jsx)(d.u, {
            __unsupportedReactNodeAsText: h
                ? (0, r.jsx)("div", {
                      className: f.tutorialTip,
                      children: i,
                  })
                : i,
            "aria-label": i,
            position: a,
            forceOpen: h,
            children: (0, r.jsx)(u.zx, {
                buttonRef: t,
                look: u.zx.Looks.BLANK,
                size: u.zx.Sizes.NONE,
                onClick: s,
                className: l()(f.icon, { [f.toggledIconOn]: o }),
                innerClassName: g.flexCenter,
                "aria-label": i,
                children: (0, r.jsx)(n, {
                    color: "currentColor",
                    size: "custom",
                    width: c,
                    height: c,
                    role: "img",
                }),
            }),
        });
    }),
    (x.Bar = O);
let Z = x;

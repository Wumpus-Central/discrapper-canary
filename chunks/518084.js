n.d(t, {
    ZP: () => x,
    wB: () => m
}),
    n(415506);
var i,
    r = n(255367),
    o = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(877921),
    c = n.n(a),
    d = n(481060),
    u = n(981631),
    h = n(751234),
    p = n(893354);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = u.t_t.DEFAULT,
    m = 1,
    y = o.createContext({
        type: g,
        opacity: m
    }),
    _ = o.createContext(void 0),
    v = (e) => {
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
                            o = Object.keys(e);
                        for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < o.length; i++) (n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ['children', 'className']);
        return (0, r.jsx)(y.Consumer, {
            children: (e) => {
                let { type: o } = e;
                return (0, r.jsx)(_.Consumer, {
                    children: (e) => {
                        var s, a;
                        return (0, r.jsx)(
                            'div',
                            ((s = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            f(e, t, n[t]);
                                        });
                                }
                                return e;
                            })(
                                {
                                    className: l()(h.bar, h[c()(o)], n),
                                    style: e
                                },
                                i
                            )),
                            (a = a = { children: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            s)
                        );
                    }
                });
            }
        });
    };
class O extends (i = o.PureComponent) {
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, r.jsx)(_.Consumer, {
            children: (i) =>
                (0, r.jsx)(y.Consumer, {
                    children: (o) => {
                        let s = l()(h.body, h[c()(o.type)], n);
                        return e
                            ? (0, r.jsx)('div', {
                                  className: s,
                                  style: i,
                                  children: t
                              })
                            : (0, r.jsx)(d.Ttm, {
                                  fade: !0,
                                  className: s,
                                  children: t
                              });
                    }
                })
        });
    }
}
f(O, 'defaultProps', { disableScroll: !1 });
let b = (e) => {
        let { type: t = g, width: n, height: i, children: o, className: s, opacity: a = m, onClick: d } = e;
        return (0, r.jsx)(y.Provider, {
            value: {
                type: t,
                opacity: a
            },
            children: (0, r.jsx)('div', {
                className: l()(h.widget, h[c()(t)], s),
                style: {
                    width: n,
                    height: i
                },
                onClick: d,
                children: o
            })
        });
    },
    E = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, r.jsx)(_.Consumer, {
            children: (e) =>
                (0, r.jsx)('div', {
                    className: l()(h.content, { [h.staticSize]: !i }, n),
                    style: e,
                    children: t
                })
        });
    };
(b.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [v, O, E];
    return (0, r.jsx)(y.Consumer, {
        children: (e) => {
            let { opacity: s } = e,
                l = { backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : s), ')') };
            if ('string' == typeof t.type) return o.cloneElement(t, { style: l });
            {
                if (i.includes(t.type))
                    return (0, r.jsx)(_.Provider, {
                        value: l,
                        children: t
                    });
                let e = t.type.displayName;
                throw Error('Widget.Background cannot be wrapped around '.concat(e, '. Pass a DOM node or one of ').concat(i.map((e) => 'Widget.' + e.name).join(',')));
            }
        }
    });
}),
    (b.Body = O),
    (b.Content = E),
    (b.Icon = (e) => {
        let { ref: t, icon: n, label: i, onClick: o, isActive: s, tooltipPosition: a = 'top', size: c = 20, isTutorial: u = !1 } = e;
        return (0, r.jsx)(d.ua7, {
            text: u
                ? (0, r.jsx)('div', {
                      className: h.tutorialTip,
                      children: i
                  })
                : i,
            'aria-label': i,
            position: a,
            forceOpen: u,
            color: u ? d.ua7.Colors.BRAND : d.ua7.Colors.BLACK,
            children: (e) => {
                let { onMouseEnter: a, onMouseLeave: u } = e;
                return (0, r.jsx)(d.zxk, {
                    buttonRef: t,
                    look: d.zxk.Looks.BLANK,
                    size: d.zxk.Sizes.NONE,
                    onClick: o,
                    onMouseEnter: a,
                    onMouseLeave: u,
                    className: l()(h.icon, { [h.toggledIconOn]: s }),
                    innerClassName: p.flexCenter,
                    'aria-label': i,
                    children: (0, r.jsx)(n, {
                        color: 'currentColor',
                        size: 'custom',
                        width: c,
                        height: c,
                        role: 'img'
                    })
                });
            }
        });
    }),
    (b.Bar = v);
let x = b;

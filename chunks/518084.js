(n.d(t, {
    ZP: () => S,
    wB: () => m
}),
    n(415506));
var i,
    r = n(255367),
    o = n(73800),
    l = n(120356),
    s = n.n(l),
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
    O = o.createContext(void 0),
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
                        for (i = 0; i < o.length; i++) ((n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < o.length; i++) ((n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                }
                return r;
            })(e, ['children', 'className']);
        return (0, r.jsx)(y.Consumer, {
            children: (e) => {
                let { type: o } = e;
                return (0, r.jsx)(O.Consumer, {
                    children: (e) => {
                        var l, a;
                        return (0, r.jsx)(
                            'div',
                            ((l = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            f(e, t, n[t]);
                                        }));
                                }
                                return e;
                            })(
                                {
                                    className: s()(h.bar, h[c()(o)], n),
                                    style: e
                                },
                                i
                            )),
                            (a = a = { children: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            l)
                        );
                    }
                });
            }
        });
    };
class _ extends (i = o.PureComponent) {
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, r.jsx)(O.Consumer, {
            children: (i) =>
                (0, r.jsx)(y.Consumer, {
                    children: (o) => {
                        let l = s()(h.body, h[c()(o.type)], n);
                        return e
                            ? (0, r.jsx)('div', {
                                  className: l,
                                  style: i,
                                  children: t
                              })
                            : (0, r.jsx)(d.Ttm, {
                                  fade: !0,
                                  className: l,
                                  children: t
                              });
                    }
                })
        });
    }
}
f(_, 'defaultProps', { disableScroll: !1 });
let b = (e) => {
        let { type: t = g, width: n, height: i, children: o, className: l, opacity: a = m, onClick: d } = e;
        return (0, r.jsx)(y.Provider, {
            value: {
                type: t,
                opacity: a
            },
            children: (0, r.jsx)('div', {
                className: s()(h.widget, h[c()(t)], l),
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
        return (0, r.jsx)(O.Consumer, {
            children: (e) =>
                (0, r.jsx)('div', {
                    className: s()(h.content, { [h.staticSize]: !i }, n),
                    style: e,
                    children: t
                })
        });
    };
((b.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [v, _, E];
    return (0, r.jsx)(y.Consumer, {
        children: (e) => {
            let { opacity: l } = e,
                s = { backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : l), ')') };
            if ('string' == typeof t.type) return o.cloneElement(t, { style: s });
            {
                if (i.includes(t.type))
                    return (0, r.jsx)(O.Provider, {
                        value: s,
                        children: t
                    });
                let e = t.type.displayName;
                throw Error('Widget.Background cannot be wrapped around '.concat(e, '. Pass a DOM node or one of ').concat(i.map((e) => 'Widget.' + e.name).join(',')));
            }
        }
    });
}),
    (b.Body = _),
    (b.Content = E),
    (b.Icon = (e) => {
        let { ref: t, icon: n, label: i, onClick: o, isActive: l, tooltipPosition: a = 'top', size: c = 20, isTutorial: u = !1 } = e;
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
                    className: s()(h.icon, { [h.toggledIconOn]: l }),
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
    (b.Bar = v));
let S = b;

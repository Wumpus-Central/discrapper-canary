(n.d(t, {
    ZP: () => x,
    wB: () => y
}),
    n(415506));
var i,
    r = n(255367),
    o = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(877921),
    c = n.n(a),
    d = n(755721),
    u = n(481060),
    h = n(981631),
    p = n(751234),
    f = n(893354);
function g(e, t, n) {
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
let m = h.t_t.DEFAULT,
    y = 1,
    O = o.createContext({
        type: m,
        opacity: y
    }),
    v = o.createContext(void 0),
    _ = (e) => {
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
        return (0, r.jsx)(O.Consumer, {
            children: (e) => {
                let { type: o } = e;
                return (0, r.jsx)(v.Consumer, {
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
                                            g(e, t, n[t]);
                                        }));
                                }
                                return e;
                            })(
                                {
                                    className: s()(p.bar, p[c()(o)], n),
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
class b extends (i = o.PureComponent) {
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, r.jsx)(v.Consumer, {
            children: (i) =>
                (0, r.jsx)(O.Consumer, {
                    children: (o) => {
                        let l = s()(p.body, p[c()(o.type)], n);
                        return e
                            ? (0, r.jsx)('div', {
                                  className: l,
                                  style: i,
                                  children: t
                              })
                            : (0, r.jsx)(u.Ttm, {
                                  fade: !0,
                                  className: l,
                                  children: t
                              });
                    }
                })
        });
    }
}
g(b, 'defaultProps', { disableScroll: !1 });
let E = (e) => {
        let { type: t = m, width: n, height: i, children: o, className: l, opacity: a = y, onClick: d } = e;
        return (0, r.jsx)(O.Provider, {
            value: {
                type: t,
                opacity: a
            },
            children: (0, r.jsx)('div', {
                className: s()(p.widget, p[c()(t)], l),
                style: {
                    width: n,
                    height: i
                },
                onClick: d,
                children: o
            })
        });
    },
    S = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, r.jsx)(v.Consumer, {
            children: (e) =>
                (0, r.jsx)('div', {
                    className: s()(p.content, { [p.staticSize]: !i }, n),
                    style: e,
                    children: t
                })
        });
    };
((E.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [_, b, S];
    return (0, r.jsx)(O.Consumer, {
        children: (e) => {
            let { opacity: l } = e,
                s = { backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : l), ')') };
            if ('string' == typeof t.type) return o.cloneElement(t, { style: s });
            {
                if (i.includes(t.type))
                    return (0, r.jsx)(v.Provider, {
                        value: s,
                        children: t
                    });
                let e = t.type.displayName;
                throw Error('Widget.Background cannot be wrapped around '.concat(e, '. Pass a DOM node or one of ').concat(i.map((e) => 'Widget.' + e.name).join(',')));
            }
        }
    });
}),
    (E.Body = b),
    (E.Content = S),
    (E.Icon = (e) => {
        let { ref: t, icon: n, label: i, onClick: o, isActive: l, tooltipPosition: a = 'top', size: c = 20, isTutorial: h = !1 } = e;
        return (0, r.jsx)(u.ua7, {
            text: h
                ? (0, r.jsx)('div', {
                      className: p.tutorialTip,
                      children: i
                  })
                : i,
            'aria-label': i,
            position: a,
            forceOpen: h,
            color: h ? u.ua7.Colors.BRAND : u.ua7.Colors.PRIMARY,
            children: (e) => {
                let { onMouseEnter: a, onMouseLeave: u } = e;
                return (0, r.jsx)(d.zx, {
                    buttonRef: t,
                    look: d.zx.Looks.BLANK,
                    size: d.zx.Sizes.NONE,
                    onClick: o,
                    onMouseEnter: a,
                    onMouseLeave: u,
                    className: s()(p.icon, { [p.toggledIconOn]: l }),
                    innerClassName: f.flexCenter,
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
    (E.Bar = _));
let x = E;

n.d(t, {
    ZP: () => N,
    wB: () => v
}),
    n(411104);
var i,
    s,
    l,
    a = n(200651),
    o = n(192379),
    r = n(120356),
    d = n.n(r),
    c = n(877921),
    u = n.n(c),
    h = n(481060),
    p = n(981631),
    g = n(492090),
    m = n(179683);
let f = p.t_t.DEFAULT,
    v = 1,
    Z = o.createContext({
        type: f,
        opacity: v
    }),
    x = o.createContext(void 0),
    S = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, a.jsx)(Z.Consumer, {
            children: (e) => {
                let { type: s } = e;
                return (0, a.jsx)(x.Consumer, {
                    children: (e) =>
                        (0, a.jsx)('div', {
                            className: d()(g.bar, g[u()(s)], n),
                            style: e,
                            ...i,
                            children: t
                        })
                });
            }
        });
    };
class E extends (i = o.PureComponent) {
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, a.jsx)(x.Consumer, {
            children: (i) =>
                (0, a.jsx)(Z.Consumer, {
                    children: (s) => {
                        let l = d()(g.body, g[u()(s.type)], n);
                        return e
                            ? (0, a.jsx)('div', {
                                  className: l,
                                  style: i,
                                  children: t
                              })
                            : (0, a.jsx)(h.Ttm, {
                                  fade: !0,
                                  className: l,
                                  children: t
                              });
                    }
                })
        });
    }
}
(l = { disableScroll: !1 }),
    (s = 'defaultProps') in E
        ? Object.defineProperty(E, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (E[s] = l);
let C = (e) => {
        let { type: t = f, width: n, height: i, children: s, className: l, opacity: o = v, onClick: r } = e;
        return (0, a.jsx)(Z.Provider, {
            value: {
                type: t,
                opacity: o
            },
            children: (0, a.jsx)('div', {
                className: d()(g.widget, g[u()(t)], l),
                style: {
                    width: n,
                    height: i
                },
                onClick: r,
                children: s
            })
        });
    },
    y = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, a.jsx)(x.Consumer, {
            children: (e) =>
                (0, a.jsx)('div', {
                    className: d()(g.content, { [g.staticSize]: !i }, n),
                    style: e,
                    children: t
                })
        });
    };
(C.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [S, E, y];
    return (0, a.jsx)(Z.Consumer, {
        children: (e) => {
            let { opacity: s } = e,
                l = { backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : s), ')') };
            if ('string' == typeof t.type) return o.cloneElement(t, { style: l });
            if (i.includes(t.type))
                return (0, a.jsx)(x.Provider, {
                    value: l,
                    children: t
                });
            {
                let e = t.type.displayName;
                throw Error('Widget.Background cannot be wrapped around '.concat(e, '. Pass a DOM node or one of ').concat(i.map((e) => 'Widget.' + e.name).join(',')));
            }
        }
    });
}),
    (C.Body = E),
    (C.Content = y),
    (C.Icon = (e) => {
        let { icon: t, label: n, onClick: i, isActive: s, tooltipPosition: l = 'top', size: o = 20, isTutorial: r = !1 } = e;
        return (0, a.jsx)(h.ua7, {
            text: r
                ? (0, a.jsx)('div', {
                      className: g.tutorialTip,
                      children: n
                  })
                : n,
            'aria-label': n,
            position: l,
            forceOpen: r,
            color: r ? h.ua7.Colors.BRAND : h.ua7.Colors.BLACK,
            children: (e) => {
                let { onMouseEnter: l, onMouseLeave: r } = e;
                return (0, a.jsx)(h.zxk, {
                    look: h.zxk.Looks.BLANK,
                    size: h.zxk.Sizes.NONE,
                    onClick: i,
                    onMouseEnter: l,
                    onMouseLeave: r,
                    className: d()(g.icon, { [g.toggledIconOn]: s }),
                    innerClassName: m.flexCenter,
                    'aria-label': n,
                    children: (0, a.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        width: o,
                        height: o,
                        role: 'img'
                    })
                });
            }
        });
    }),
    (C.Bar = S);
let N = C;

n.d(t, {
    ZP: () => N,
    wB: () => x
}),
    n(411104);
var i,
    s,
    l,
    r = n(200651),
    o = n(192379),
    a = n(120356),
    d = n.n(a),
    c = n(877921),
    u = n.n(c),
    h = n(481060),
    p = n(981631),
    g = n(513473),
    f = n(652849);
let m = p.t_t.DEFAULT,
    x = 1,
    v = o.createContext({
        type: m,
        opacity: x
    }),
    Z = o.createContext(void 0),
    S = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, r.jsx)(v.Consumer, {
            children: (e) => {
                let { type: s } = e;
                return (0, r.jsx)(Z.Consumer, {
                    children: (e) =>
                        (0, r.jsx)('div', {
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
        return (0, r.jsx)(Z.Consumer, {
            children: (i) =>
                (0, r.jsx)(v.Consumer, {
                    children: (s) => {
                        let l = d()(g.body, g[u()(s.type)], n);
                        return e
                            ? (0, r.jsx)('div', {
                                  className: l,
                                  style: i,
                                  children: t
                              })
                            : (0, r.jsx)(h.Ttm, {
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
        let { type: t = m, width: n, height: i, children: s, className: l, opacity: o = x, onClick: a } = e;
        return (0, r.jsx)(v.Provider, {
            value: {
                type: t,
                opacity: o
            },
            children: (0, r.jsx)('div', {
                className: d()(g.widget, g[u()(t)], l),
                style: {
                    width: n,
                    height: i
                },
                onClick: a,
                children: s
            })
        });
    },
    I = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, r.jsx)(Z.Consumer, {
            children: (e) =>
                (0, r.jsx)('div', {
                    className: d()(g.content, { [g.staticSize]: !i }, n),
                    style: e,
                    children: t
                })
        });
    };
(C.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [S, E, I];
    return (0, r.jsx)(v.Consumer, {
        children: (e) => {
            let { opacity: s } = e,
                l = { backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : s), ')') };
            if ('string' == typeof t.type) return o.cloneElement(t, { style: l });
            if (i.includes(t.type))
                return (0, r.jsx)(Z.Provider, {
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
    (C.Content = I),
    (C.Icon = (e) => {
        let { icon: t, label: n, onClick: i, isActive: s, tooltipPosition: l = 'top', size: o = 20, isTutorial: a = !1 } = e;
        return (0, r.jsx)(h.ua7, {
            text: a
                ? (0, r.jsx)('div', {
                      className: g.tutorialTip,
                      children: n
                  })
                : n,
            'aria-label': n,
            position: l,
            forceOpen: a,
            color: a ? h.ua7.Colors.BRAND : h.ua7.Colors.BLACK,
            children: (e) => {
                let { onMouseEnter: l, onMouseLeave: a } = e;
                return (0, r.jsx)(h.zxk, {
                    look: h.zxk.Looks.BLANK,
                    size: h.zxk.Sizes.NONE,
                    onClick: i,
                    onMouseEnter: l,
                    onMouseLeave: a,
                    className: d()(g.icon, { [g.toggledIconOn]: s }),
                    innerClassName: f.flexCenter,
                    'aria-label': n,
                    children: (0, r.jsx)(t, {
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

n.d(t, {
    wB: function () {
        return x;
    }
}),
    n(411104);
var i,
    s,
    r,
    o,
    a = n(200651),
    l = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(877921),
    h = n.n(u),
    p = n(481060),
    f = n(981631),
    g = n(513473),
    m = n(652849);
let v = f.t_t.DEFAULT,
    x = 1,
    S = l.createContext({
        type: v,
        opacity: x
    }),
    Z = l.createContext(void 0),
    _ = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, a.jsx)(S.Consumer, {
            children: (e) => {
                let { type: s } = e;
                return (0, a.jsx)(Z.Consumer, {
                    children: (e) =>
                        (0, a.jsx)('div', {
                            className: d()(g.bar, g[h()(s)], n),
                            style: e,
                            ...i,
                            children: t
                        })
                });
            }
        });
    };
class E extends (i = l.PureComponent) {
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, a.jsx)(Z.Consumer, {
            children: (i) =>
                (0, a.jsx)(S.Consumer, {
                    children: (s) => {
                        let r = d()(g.body, g[h()(s.type)], n);
                        return e
                            ? (0, a.jsx)('div', {
                                  className: r,
                                  style: i,
                                  children: t
                              })
                            : (0, a.jsx)(p.Scroller, {
                                  fade: !0,
                                  className: r,
                                  children: t
                              });
                    }
                })
        });
    }
}
(o = { disableScroll: !1 }),
    (r = 'defaultProps') in (s = E)
        ? Object.defineProperty(s, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = o);
let C = (e) => {
        let { type: t = v, width: n, height: i, children: s, className: r, opacity: o = x, onClick: l } = e;
        return (0, a.jsx)(S.Provider, {
            value: {
                type: t,
                opacity: o
            },
            children: (0, a.jsx)('div', {
                className: d()(g.widget, g[h()(t)], r),
                style: {
                    width: n,
                    height: i
                },
                onClick: l,
                children: s
            })
        });
    },
    I = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, a.jsx)(Z.Consumer, {
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
    let i = [_, E, I];
    return (0, a.jsx)(S.Consumer, {
        children: (e) => {
            let { opacity: s } = e,
                r = { backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : s), ')') };
            if ('string' == typeof t.type) return l.cloneElement(t, { style: r });
            if (i.includes(t.type))
                return (0, a.jsx)(Z.Provider, {
                    value: r,
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
        let { icon: t, label: n, onClick: i, isActive: s, tooltipPosition: r = 'top', size: o = 20, isTutorial: l = !1 } = e;
        return (0, a.jsx)(p.Tooltip, {
            text: l
                ? (0, a.jsx)('div', {
                      className: g.tutorialTip,
                      children: n
                  })
                : n,
            'aria-label': n,
            position: r,
            forceOpen: l,
            color: l ? p.Tooltip.Colors.BRAND : p.Tooltip.Colors.BLACK,
            children: (e) => {
                let { onMouseEnter: r, onMouseLeave: l } = e;
                return (0, a.jsx)(p.Button, {
                    look: p.Button.Looks.BLANK,
                    size: p.Button.Sizes.NONE,
                    onClick: i,
                    onMouseEnter: r,
                    onMouseLeave: l,
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
    (C.Bar = _),
    (t.ZP = C);

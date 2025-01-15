n.d(t, {
    wB: function () {
        return x;
    }
}),
    n(411104);
var i,
    s,
    r,
    a,
    o = n(200651),
    l = n(192379),
    d = n(120356),
    c = n.n(d),
    u = n(877921),
    h = n.n(u),
    p = n(481060),
    f = n(981631),
    g = n(923663),
    m = n(847854);
let v = f.t_t.DEFAULT,
    x = 1,
    Z = l.createContext({
        type: v,
        opacity: x
    }),
    S = l.createContext(void 0),
    _ = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, o.jsx)(Z.Consumer, {
            children: (e) => {
                let { type: s } = e;
                return (0, o.jsx)(S.Consumer, {
                    children: (e) =>
                        (0, o.jsx)('div', {
                            className: c()(g.bar, g[h()(s)], n),
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
        return (0, o.jsx)(S.Consumer, {
            children: (i) =>
                (0, o.jsx)(Z.Consumer, {
                    children: (s) => {
                        let r = c()(g.body, g[h()(s.type)], n);
                        return e
                            ? (0, o.jsx)('div', {
                                  className: r,
                                  style: i,
                                  children: t
                              })
                            : (0, o.jsx)(p.Scroller, {
                                  fade: !0,
                                  className: r,
                                  children: t
                              });
                    }
                })
        });
    }
}
(a = { disableScroll: !1 }),
    (r = 'defaultProps') in (s = E)
        ? Object.defineProperty(s, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = a);
let C = (e) => {
        let { type: t = v, width: n, height: i, children: s, className: r, opacity: a = x, onClick: l } = e;
        return (0, o.jsx)(Z.Provider, {
            value: {
                type: t,
                opacity: a
            },
            children: (0, o.jsx)('div', {
                className: c()(g.widget, g[h()(t)], r),
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
        return (0, o.jsx)(S.Consumer, {
            children: (e) =>
                (0, o.jsx)('div', {
                    className: c()(g.content, { [g.staticSize]: !i }, n),
                    style: e,
                    children: t
                })
        });
    };
(C.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [_, E, I];
    return (0, o.jsx)(Z.Consumer, {
        children: (e) => {
            let { opacity: s } = e,
                r = { backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : s), ')') };
            if ('string' == typeof t.type) return l.cloneElement(t, { style: r });
            if (i.includes(t.type))
                return (0, o.jsx)(S.Provider, {
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
        let { icon: t, label: n, onClick: i, isActive: s, tooltipPosition: r = 'top', size: a = 20, isTutorial: l = !1 } = e;
        return (0, o.jsx)(p.Tooltip, {
            text: l
                ? (0, o.jsx)('div', {
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
                return (0, o.jsx)(p.Button, {
                    look: p.Button.Looks.BLANK,
                    size: p.Button.Sizes.NONE,
                    onClick: i,
                    onMouseEnter: r,
                    onMouseLeave: l,
                    className: c()(g.icon, { [g.toggledIconOn]: s }),
                    innerClassName: m.flexCenter,
                    'aria-label': n,
                    children: (0, o.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        width: a,
                        height: a,
                        role: 'img'
                    })
                });
            }
        });
    }),
    (C.Bar = _),
    (t.ZP = C);

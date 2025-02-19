n.d(t, {
    Z: () => S,
    j: () => E
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(481060),
    c = n(686546),
    u = n(540059),
    d = n(855981),
    f = n(55543),
    p = n(197042);
function _(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var E = (function (e) {
    return (e[(e.UPDATE = 0)] = 'UPDATE'), (e[(e.NEW = 1)] = 'NEW'), e;
})({});
let v = 24,
    b = 20,
    y = {
        config: {
            friction: 26,
            tension: 700,
            mass: 1
        },
        initial: {
            scale: 1,
            opacity: 1
        },
        from: {
            scale: 0.6,
            opacity: 0
        },
        enter: {
            scale: 1,
            opacity: 1
        },
        leave: {
            scale: 0.6,
            opacity: 0
        }
    };
function O(e) {
    let { className: t, disabled: n = !1, innerClassName: i, childClassName: o, iconClassName: _, icon: m, children: E, onClick: O, isActive: S, onMouseEnter: I, onMouseLeave: T, onFocus: N, onBlur: A, pulse: C, sparkle: R, notification: P, 'aria-label': w, 'aria-expanded': D, 'aria-haspopup': x, 'aria-controls': L } = e,
        M = (0, u.Q3)('ChannelTextAreaButton'),
        k = (0, l.Yzy)(null != E, g(h({}, y), { keys: (e) => (e ? 'children' : 'icon') })),
        j = (e) => {
            let { component: t } = e;
            return null != P
                ? (0, r.jsxs)('div', {
                      className: p.buttonContent,
                      children: [
                          (0, r.jsx)(c.ZP, {
                              className: p.iconMask,
                              mask: c.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: M ? b : v,
                              height: M ? b : v,
                              children: t
                          }),
                          (0, r.jsx)('span', { className: p.notificationDot })
                      ]
                  })
                : t;
        };
    return (0, r.jsxs)(l.zxk, {
        look: l.zxk.Looks.BLANK,
        size: l.zxk.Sizes.NONE,
        'aria-label': w,
        'aria-expanded': D,
        'aria-haspopup': x,
        'aria-controls': L,
        disabled: n,
        className: a()(t, { [p.active]: S }),
        innerClassName: a()(p.button, i, { [p.pulseButton]: C }),
        onClick: O,
        onMouseEnter: I,
        onMouseLeave: T,
        onFocus: N,
        onBlur: A,
        focusProps: {
            offset: {
                top: 4,
                bottom: 4
            }
        },
        children: [
            k((e, t, n) => {
                let { key: i } = n;
                return t
                    ? (0, r.jsx)(
                          s.animated.div,
                          {
                              style: e,
                              className: a()(p.buttonWrapper, o),
                              children: j({ component: E })
                          },
                          i
                      )
                    : null != m
                      ? (0, r.jsx)(
                            s.animated.div,
                            {
                                style: e,
                                className: a()(p.buttonWrapper, o),
                                children: j({
                                    component: (0, r.jsx)(m, {
                                        className: a()(p.icon, _, { [p.pulseIcon]: C }),
                                        color: 'currentColor'
                                    })
                                })
                            },
                            i
                        )
                      : void 0;
            }),
            R &&
                (0, r.jsxs)('div', {
                    className: p.sparkleContainer,
                    children: [(0, r.jsx)(f.Z, { className: p.sparkleStar }), (0, r.jsx)(d.Z, { className: p.sparklePlus })]
                })
        ]
    });
}
let S = i.memo(O);

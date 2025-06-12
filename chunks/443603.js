n.d(t, {
    Z: () => I,
    j: () => E
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(524979),
    l = n(481060),
    c = n(686546),
    u = n(540059),
    d = n(855981),
    _ = n(55543),
    f = n(504684);
function p(e, t, n) {
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
                p(e, t, n[t]);
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
let b = 24,
    y = 20,
    O = {
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
function v(e) {
    let { className: t, disabled: n = !1, innerClassName: i, childClassName: a, iconClassName: p, icon: m, children: E, onClick: v, isActive: I, onMouseEnter: T, onMouseLeave: S, onFocus: A, onBlur: N, pulse: C, sparkle: R, notification: P, 'aria-label': w, 'aria-expanded': D, 'aria-haspopup': L, 'aria-controls': x } = e,
        M = (0, u.Q3)('ChannelTextAreaButton'),
        k = (0, l.Yzy)(null != E, g(h({}, O), { keys: (e) => (e ? 'children' : 'icon') })),
        j = (e) => {
            let { component: t } = e;
            return null != P
                ? (0, r.jsxs)('div', {
                      className: f.buttonContent,
                      children: [
                          (0, r.jsx)(c.ZP, {
                              className: f.iconMask,
                              mask: c.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: M ? y : b,
                              height: M ? y : b,
                              children: t
                          }),
                          (0, r.jsx)('span', { className: f.notificationDot })
                      ]
                  })
                : t;
        };
    return (0, r.jsxs)(l.zxk, {
        look: l.zxk.Looks.BLANK,
        size: l.zxk.Sizes.NONE,
        'aria-label': w,
        'aria-expanded': D,
        'aria-haspopup': L,
        'aria-controls': x,
        disabled: n,
        className: o()(t, { [f.active]: I }),
        innerClassName: o()(f.button, i, { [f.pulseButton]: C }),
        onClick: v,
        onMouseEnter: T,
        onMouseLeave: S,
        onFocus: A,
        onBlur: N,
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
                              className: o()(f.buttonWrapper, a),
                              children: j({ component: E })
                          },
                          i
                      )
                    : null != m
                      ? (0, r.jsx)(
                            s.animated.div,
                            {
                                style: e,
                                className: o()(f.buttonWrapper, a),
                                children: j({
                                    component: (0, r.jsx)(m, {
                                        className: o()(f.icon, p, { [f.pulseIcon]: C }),
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
                    className: f.sparkleContainer,
                    children: [(0, r.jsx)(_.Z, { className: f.sparkleStar }), (0, r.jsx)(d.Z, { className: f.sparklePlus })]
                })
        ]
    });
}
let I = i.memo(v);

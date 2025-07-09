n.d(t, {
    Z: () => v,
    j: () => E
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(264738),
    l = n(755721),
    c = n(481060),
    u = n(686546),
    d = n(855981),
    f = n(55543),
    _ = n(504684);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
    return ((e[(e.UPDATE = 0)] = 'UPDATE'), (e[(e.NEW = 1)] = 'NEW'), e);
})({});
let b = 20,
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
    let { className: t, disabled: n = !1, innerClassName: i, childClassName: a, iconClassName: p, icon: m, children: E, onClick: O, isActive: v, onMouseEnter: I, onMouseLeave: T, onFocus: S, onBlur: A, pulse: N, sparkle: C, notification: R, 'aria-label': P, 'aria-expanded': w, 'aria-haspopup': D, 'aria-controls': L, noHover: x } = e,
        M = (0, c.Yzy)(null != E, g(h({}, y), { keys: (e) => (e ? 'children' : 'icon') })),
        k = (e) => {
            let { component: t } = e;
            return null != R
                ? (0, r.jsxs)('div', {
                      className: _.buttonContent,
                      children: [
                          (0, r.jsx)(u.ZP, {
                              className: _.iconMask,
                              mask: u.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: b,
                              height: b,
                              children: t
                          }),
                          (0, r.jsx)('span', { className: _.notificationDot })
                      ]
                  })
                : t;
        };
    return (0, r.jsxs)(l.zx, {
        look: l.zx.Looks.BLANK,
        size: l.zx.Sizes.NONE,
        'aria-label': P,
        'aria-expanded': w,
        'aria-haspopup': D,
        'aria-controls': L,
        disabled: n,
        className: o()(t, { [_.active]: v }),
        innerClassName: o()(_.button, i, {
            [_.pulseButton]: N,
            [_.noHover]: x
        }),
        onClick: O,
        onMouseEnter: I,
        onMouseLeave: T,
        onFocus: S,
        onBlur: A,
        focusProps: {
            offset: {
                top: 4,
                bottom: 4
            }
        },
        children: [
            M((e, t, n) => {
                let { key: i } = n;
                return t
                    ? (0, r.jsx)(
                          s.animated.div,
                          {
                              style: e,
                              className: o()(_.buttonWrapper, a),
                              children: k({ component: E })
                          },
                          i
                      )
                    : null != m
                      ? (0, r.jsx)(
                            s.animated.div,
                            {
                                style: e,
                                className: o()(_.buttonWrapper, a),
                                children: k({
                                    component: (0, r.jsx)(m, {
                                        className: o()(_.icon, p, { [_.pulseIcon]: N }),
                                        color: 'currentColor'
                                    })
                                })
                            },
                            i
                        )
                      : void 0;
            }),
            C &&
                (0, r.jsxs)('div', {
                    className: _.sparkleContainer,
                    children: [(0, r.jsx)(f.Z, { className: _.sparkleStar }), (0, r.jsx)(d.Z, { className: _.sparklePlus })]
                })
        ]
    });
}
let v = i.memo(O);

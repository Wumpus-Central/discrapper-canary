n.d(t, {
    Z: () => O,
    j: () => g
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(855659),
    l = n(481060),
    c = n(686546),
    u = n(855981),
    d = n(55543),
    _ = n(504684);
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
function p(e) {
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
                f(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var g = (function (e) {
    return ((e[(e.UPDATE = 0)] = 'UPDATE'), (e[(e.NEW = 1)] = 'NEW'), e);
})({});
let E = 20,
    b = {
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
function y(e) {
    let { ref: t, className: n, disabled: i = !1, childClassName: a, iconClassName: f, icon: h, children: g, onClick: y, onDoubleClick: O, isActive: v, onMouseEnter: I, onMouseLeave: T, onFocus: S, onBlur: A, pulse: N, sparkle: C, notification: R, 'aria-label': P, 'aria-expanded': w, 'aria-haspopup': D, 'aria-controls': L, noHover: x } = e,
        k = (0, l.Yzy)(null != g, m(p({}, b), { keys: (e) => (e ? 'children' : 'icon') })),
        M = (e) => {
            let { component: t } = e;
            return null != R
                ? (0, r.jsxs)('div', {
                      className: _.buttonContent,
                      children: [
                          (0, r.jsx)(c.ZP, {
                              className: _.iconMask,
                              mask: c.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: E,
                              height: E,
                              children: t
                          }),
                          (0, r.jsx)('span', { className: _.notificationDot })
                      ]
                  })
                : t;
        };
    return (0, r.jsxs)(l.P3F, {
        innerRef: t,
        'aria-label': P,
        'aria-expanded': w,
        'aria-haspopup': D,
        'aria-controls': L,
        'aria-disabled': i,
        className: o()(n, _.button, {
            [_.active]: v,
            [_.noHover]: x,
            [_.pulseButton]: N,
            [_.disabled]: i
        }),
        onClick: i ? void 0 : y,
        onDoubleClick: i ? void 0 : O,
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
            k((e, t, n) => {
                let { key: i } = n;
                return t
                    ? (0, r.jsx)(
                          s.animated.div,
                          {
                              style: e,
                              className: o()(_.buttonWrapper, a),
                              children: M({ component: g })
                          },
                          i
                      )
                    : null != h
                      ? (0, r.jsx)(
                            s.animated.div,
                            {
                                style: e,
                                className: o()(_.buttonWrapper, a),
                                children: M({
                                    component: (0, r.jsx)(h, {
                                        className: o()(_.icon, f, { [_.pulseIcon]: N }),
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
                    children: [(0, r.jsx)(d.Z, { className: _.sparkleStar }), (0, r.jsx)(u.Z, { className: _.sparklePlus })]
                })
        ]
    });
}
let O = i.memo(y);

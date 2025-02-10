n.d(t, {
    Z: () => v,
    j: () => p
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(642128),
    l = n(481060),
    u = n(686546),
    c = n(540059),
    d = n(855981),
    f = n(55543),
    _ = n(576039),
    p = (function (e) {
        return (e[(e.UPDATE = 0)] = 'UPDATE'), (e[(e.NEW = 1)] = 'NEW'), e;
    })({});
let h = 24,
    m = 20,
    g = {
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
function E(e) {
    let { className: t, disabled: n = !1, innerClassName: r, childClassName: a, iconClassName: p, icon: E, children: v, onClick: y, isActive: I, onMouseEnter: T, onMouseLeave: b, onFocus: S, onBlur: A, pulse: N, sparkle: C, notification: R, 'aria-label': O, 'aria-expanded': D, 'aria-haspopup': L, 'aria-controls': x } = e,
        P = (0, c.Q3)('ChannelTextAreaButton'),
        w = (0, l.Yzy)(null != v, {
            ...g,
            keys: (e) => (e ? 'children' : 'icon')
        }),
        M = (e) => {
            let { component: t } = e;
            return null != R
                ? (0, i.jsxs)('div', {
                      className: _.buttonContent,
                      children: [
                          (0, i.jsx)(u.ZP, {
                              className: _.iconMask,
                              mask: u.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: P ? m : h,
                              height: P ? m : h,
                              children: t
                          }),
                          (0, i.jsx)('span', { className: _.notificationDot })
                      ]
                  })
                : t;
        };
    return (0, i.jsxs)(l.zxk, {
        look: l.zxk.Looks.BLANK,
        size: l.zxk.Sizes.NONE,
        'aria-label': O,
        'aria-expanded': D,
        'aria-haspopup': L,
        'aria-controls': x,
        disabled: n,
        className: s()(t, { [_.active]: I }),
        innerClassName: s()(_.button, r, { [_.pulseButton]: N }),
        onClick: y,
        onMouseEnter: T,
        onMouseLeave: b,
        onFocus: S,
        onBlur: A,
        focusProps: {
            offset: {
                top: 4,
                bottom: 4
            }
        },
        children: [
            w((e, t, n) => {
                let { key: r } = n;
                return t
                    ? (0, i.jsx)(
                          o.animated.div,
                          {
                              style: e,
                              className: s()(_.buttonWrapper, a),
                              children: M({ component: v })
                          },
                          r
                      )
                    : null != E
                      ? (0, i.jsx)(
                            o.animated.div,
                            {
                                style: e,
                                className: s()(_.buttonWrapper, a),
                                children: M({
                                    component: (0, i.jsx)(E, {
                                        className: s()(_.icon, p, { [_.pulseIcon]: N }),
                                        color: 'currentColor'
                                    })
                                })
                            },
                            r
                        )
                      : void 0;
            }),
            C &&
                (0, i.jsxs)('div', {
                    className: _.sparkleContainer,
                    children: [(0, i.jsx)(f.Z, { className: _.sparkleStar }), (0, i.jsx)(d.Z, { className: _.sparklePlus })]
                })
        ]
    });
}
let v = r.memo(E);

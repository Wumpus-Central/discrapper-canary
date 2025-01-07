r.d(n, {
    j: function () {
        return i;
    }
});
var i,
    a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(666912),
    c = r(481060),
    d = r(686546),
    f = r(540059),
    _ = r(855981),
    h = r(55543),
    p = r(198593);
!(function (e) {
    (e[(e.UPDATE = 0)] = 'UPDATE'), (e[(e.NEW = 1)] = 'NEW');
})(i || (i = {}));
let m = 24,
    g = 20,
    E = {
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
    let { className: n, disabled: r = !1, innerClassName: i, childClassName: s, iconClassName: o, icon: v, children: I, onClick: T, isActive: b, onMouseEnter: y, onMouseLeave: S, onFocus: A, onBlur: N, pulse: C, sparkle: R, notification: O, 'aria-label': D, 'aria-expanded': L, 'aria-haspopup': x, 'aria-controls': w } = e,
        P = (0, f.Q3)('ChannelTextAreaButton'),
        M = (0, c.useTransition)(null != I, {
            ...E,
            keys: (e) => (e ? 'children' : 'icon')
        }),
        k = (e) => {
            let { component: n } = e;
            return null != O
                ? (0, a.jsxs)('div', {
                      className: p.buttonContent,
                      children: [
                          (0, a.jsx)(d.ZP, {
                              className: p.iconMask,
                              mask: d.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: P ? g : m,
                              height: P ? g : m,
                              children: n
                          }),
                          (0, a.jsx)('span', { className: p.notificationDot })
                      ]
                  })
                : n;
        };
    return (0, a.jsxs)(c.Button, {
        look: c.Button.Looks.BLANK,
        size: c.Button.Sizes.NONE,
        'aria-label': D,
        'aria-expanded': L,
        'aria-haspopup': x,
        'aria-controls': w,
        disabled: r,
        className: l()(n, { [p.active]: b }),
        innerClassName: l()(p.button, i, { [p.pulseButton]: C }),
        onClick: T,
        onMouseEnter: y,
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
            M((e, n, r) => {
                let { key: i } = r;
                return n
                    ? (0, a.jsx)(
                          u.animated.div,
                          {
                              style: e,
                              className: l()(p.buttonWrapper, s),
                              children: k({ component: I })
                          },
                          i
                      )
                    : null != v
                      ? (0, a.jsx)(
                            u.animated.div,
                            {
                                style: e,
                                className: l()(p.buttonWrapper, s),
                                children: k({
                                    component: (0, a.jsx)(v, {
                                        className: l()(p.icon, o, { [p.pulseIcon]: C }),
                                        color: 'currentColor'
                                    })
                                })
                            },
                            i
                        )
                      : void 0;
            }),
            R &&
                (0, a.jsxs)('div', {
                    className: p.sparkleContainer,
                    children: [(0, a.jsx)(h.Z, { className: p.sparkleStar }), (0, a.jsx)(_.Z, { className: p.sparklePlus })]
                })
        ]
    });
}
n.Z = s.memo(v);

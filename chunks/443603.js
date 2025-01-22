r.d(n, {
    j: function () {
        return i;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(642128),
    c = r(481060),
    d = r(686546),
    f = r(540059),
    p = r(855981),
    h = r(55543),
    _ = r(198593);
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
    let { className: n, disabled: r = !1, innerClassName: i, childClassName: o, iconClassName: s, icon: v, children: y, onClick: b, isActive: I, onMouseEnter: T, onMouseLeave: S, onFocus: A, onBlur: C, pulse: N, sparkle: R, notification: O, 'aria-label': D, 'aria-expanded': x, 'aria-haspopup': L, 'aria-controls': w } = e,
        P = (0, f.Q3)('ChannelTextAreaButton'),
        M = (0, c.useTransition)(null != y, {
            ...E,
            keys: (e) => (e ? 'children' : 'icon')
        }),
        k = (e) => {
            let { component: n } = e;
            return null != O
                ? (0, a.jsxs)('div', {
                      className: _.buttonContent,
                      children: [
                          (0, a.jsx)(d.ZP, {
                              className: _.iconMask,
                              mask: d.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: P ? g : m,
                              height: P ? g : m,
                              children: n
                          }),
                          (0, a.jsx)('span', { className: _.notificationDot })
                      ]
                  })
                : n;
        };
    return (0, a.jsxs)(c.Button, {
        look: c.Button.Looks.BLANK,
        size: c.Button.Sizes.NONE,
        'aria-label': D,
        'aria-expanded': x,
        'aria-haspopup': L,
        'aria-controls': w,
        disabled: r,
        className: l()(n, { [_.active]: I }),
        innerClassName: l()(_.button, i, { [_.pulseButton]: N }),
        onClick: b,
        onMouseEnter: T,
        onMouseLeave: S,
        onFocus: A,
        onBlur: C,
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
                              className: l()(_.buttonWrapper, o),
                              children: k({ component: y })
                          },
                          i
                      )
                    : null != v
                      ? (0, a.jsx)(
                            u.animated.div,
                            {
                                style: e,
                                className: l()(_.buttonWrapper, o),
                                children: k({
                                    component: (0, a.jsx)(v, {
                                        className: l()(_.icon, s, { [_.pulseIcon]: N }),
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
                    className: _.sparkleContainer,
                    children: [(0, a.jsx)(h.Z, { className: _.sparkleStar }), (0, a.jsx)(p.Z, { className: _.sparklePlus })]
                })
        ]
    });
}
n.Z = o.memo(v);

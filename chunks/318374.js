(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(481060),
    u = n(239091),
    d = n(751688),
    f = n(5192),
    _ = n(51144),
    p = n(388032),
    h = n(223390);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.EFr.SIZE_24;
    switch (e) {
        case c.EFr.SIZE_16:
            return h.size16;
        case c.EFr.SIZE_20:
            return h.size20;
        case c.EFr.SIZE_24:
        default:
            return h.size24;
    }
}
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.EFr.SIZE_24;
    switch (e) {
        case c.EFr.SIZE_16:
        case c.EFr.SIZE_20:
            return 'text-xxs/semibold';
        case c.EFr.SIZE_24:
        default:
            return 'text-xs/medium';
    }
}
function v(e) {
    let { users: t, maxUsers: a, guildId: s, channelId: m, className: E, size: v = c.EFr.SIZE_24, overflowCountVariant: I, overflowCountColor: T = 'interactive-normal', overflowCountClassName: S, hideOverflowCount: A = !1, disableUsernameTooltip: N = !1, disableUserPopout: C = !1, onClickOverflow: R, onFocusOverflow: P, onUserClick: w, onUserPopoutRequestClose: D, 'aria-label': L, 'aria-labelledby': x, 'aria-hidden': M } = e,
        [k, j] = i.useState(!1),
        U = y(v),
        G = i.useRef(null),
        B = t.length - a,
        V = B + 1,
        F = B > 0 && !A && !M,
        Z = () =>
            (0, r.jsx)(c.VqE, {
                className: h.popoutWrapper,
                'aria-label': L,
                'aria-labelledby': x,
                children: (0, r.jsx)(c.Ttm, {
                    className: h.scroller,
                    children: t.map((e) =>
                        (0, r.jsx)(
                            d.Z,
                            {
                                user: e,
                                guildId: s,
                                channelId: m,
                                nick: f.ZP.getNickname(s, m, e),
                                disablePopout: 'function' == typeof C ? C(e.id) : C,
                                onClick: w,
                                onPopoutRequestClose: () => {
                                    (j(!1), null == D || D());
                                },
                                onContextMenu: (t) =>
                                    (0, u.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([n.e('70274'), n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    b(g({}, n), {
                                                        user: e,
                                                        guildId: s,
                                                        channelId: m
                                                    })
                                                );
                                        },
                                        { onClose: () => j(!1) }
                                    )
                            },
                            e.id
                        )
                    )
                })
            }),
        H = () => {
            let e = F ? a - 1 : Math.min(t.length, a),
                n = e - 1,
                i = l()(t)
                    .take(e)
                    .map((e, t) => {
                        let i = f.ZP.getNickname(s, m, e),
                            a = null != i ? i : _.ZP.getName(e),
                            l = t === n && !F,
                            u = o()(h.avatar, U, l && h.isLast),
                            d = (0, r.jsx)(c.qEK, {
                                src: e.getAvatarURL(s, 24),
                                size: v,
                                'aria-hidden': !0
                            });
                        return (0, r.jsx)(
                            'li',
                            {
                                className: u,
                                children: N
                                    ? (0, r.jsx)('span', {
                                          role: 'img',
                                          'aria-label': a,
                                          children: d
                                      })
                                    : (0, r.jsx)(c.ua7, {
                                          text: a,
                                          'aria-label': !1,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  'span',
                                                  b(g({}, e), {
                                                      role: 'img',
                                                      'aria-label': a,
                                                      children: d
                                                  })
                                              )
                                      })
                            },
                            e.id
                        );
                    })
                    .value();
            return (0, r.jsx)('ul', {
                className: h.avatars,
                children: i
            });
        },
        Y = () => {
            if (!F) return null;
            let e = null != I ? I : O(v);
            return (0, r.jsx)(
                c.yRy,
                {
                    targetElementRef: G,
                    renderPopout: Z,
                    shouldShow: k,
                    position: 'bottom',
                    onRequestClose: () => j(!1),
                    children: (t) =>
                        (0, r.jsx)(
                            c.P3F,
                            b(g({}, t), {
                                innerRef: G,
                                className: o()(h.overflow, U, S),
                                onFocus: P,
                                onClick: (e) => {
                                    (null == R || R(e), j(!0));
                                },
                                'aria-label': p.intl.formatToPlainString(p.t.R8Z8Qk, { count: V }),
                                children: (0, r.jsx)(c.Text, {
                                    variant: e,
                                    color: T,
                                    children: V > 99 ? '>99' : '+'.concat(V)
                                })
                            })
                        )
                },
                'overflow'
            );
        };
    return t.length <= 0
        ? null
        : (0, r.jsxs)('div', {
              role: 'group',
              'aria-label': L,
              'aria-labelledby': x,
              className: o()(E, h.avatars),
              'aria-hidden': M,
              children: [H(), Y()]
          });
}

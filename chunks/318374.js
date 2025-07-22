(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(755721),
    u = n(481060),
    d = n(239091),
    f = n(751688),
    _ = n(5192),
    p = n(51144),
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
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.EFr.SIZE_24;
    switch (e) {
        case u.EFr.SIZE_16:
            return h.size16;
        case u.EFr.SIZE_20:
            return h.size20;
        case u.EFr.SIZE_24:
        default:
            return h.size24;
    }
}
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.EFr.SIZE_24;
    switch (e) {
        case u.EFr.SIZE_16:
        case u.EFr.SIZE_20:
            return 'text-xxs/semibold';
        case u.EFr.SIZE_24:
        default:
            return 'text-xs/medium';
    }
}
function v(e) {
    let { users: t, maxUsers: a, guildId: s, channelId: m, className: E, size: v = u.EFr.SIZE_24, overflowCountVariant: I, overflowCountColor: T = 'interactive-normal', overflowCountClassName: S, hideOverflowCount: A = !1, disableUsernameTooltip: N = !1, disableUserPopout: C = !1, onClick: R, onFocus: P, onUserClick: w, onUserPopoutRequestClose: D } = e,
        [L, x] = i.useState(!1),
        M = y(v),
        k = i.useRef(null);
    function j() {
        return (0, r.jsx)(u.VqE, {
            className: h.popoutWrapper,
            children: (0, r.jsx)(u.Ttm, {
                className: h.scroller,
                children: t.map((e) =>
                    (0, r.jsx)(
                        f.Z,
                        {
                            user: e,
                            guildId: s,
                            channelId: m,
                            nick: _.ZP.getNickname(s, m, e),
                            disablePopout: 'function' == typeof C ? C(e.id) : C,
                            onClick: w,
                            onPopoutRequestClose: () => {
                                (x(!1), null == D || D());
                            },
                            onContextMenu: (t) =>
                                (0, d.jW)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
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
                                    { onClose: () => x(!1) }
                                )
                        },
                        e.id
                    )
                )
            })
        });
    }
    function U() {
        let e = t.length - a,
            n = e + 1,
            i = e > 0 && !A,
            d = Math.min(t.length, a) - 1,
            f = l()(t)
                .take(a)
                .map((e, t) => {
                    let n = p.ZP.getName(e),
                        a = t === d && !i,
                        l = o()(h.avatar, M, a && h.isLast);
                    return N
                        ? (0, r.jsx)(
                              'div',
                              {
                                  className: l,
                                  children: (0, r.jsx)(u.qEK, {
                                      src: e.getAvatarURL(s, 24),
                                      'aria-label': n,
                                      size: v
                                  })
                              },
                              e.id
                          )
                        : (0, r.jsx)(
                              u.DY3,
                              {
                                  text: n,
                                  className: l,
                                  children: (0, r.jsx)(u.qEK, {
                                      src: e.getAvatarURL(s, 24),
                                      'aria-label': n,
                                      size: v
                                  })
                              },
                              e.id
                          );
                })
                .value();
        if (i) {
            let e = null != I ? I : O(v);
            f[f.length - 1] = (0, r.jsx)(
                u.yRy,
                {
                    targetElementRef: k,
                    renderPopout: j,
                    shouldShow: L,
                    position: 'bottom',
                    onRequestClose: () => x(!1),
                    children: () =>
                        (0, r.jsx)(c.zx, {
                            buttonRef: k,
                            className: o()(h.overflow, M, S),
                            onFocus: P,
                            onClick: (e) => {
                                (null == R || R(e), x(!0));
                            },
                            look: c.zx.Looks.BLANK,
                            size: c.zx.Sizes.NONE,
                            children: (0, r.jsx)(u.Text, {
                                variant: e,
                                color: T,
                                children: n > 99 ? '>99' : '+'.concat(n)
                            })
                        })
                },
                'overflow'
            );
        }
        return f;
    }
    return t.length <= 0
        ? null
        : (0, r.jsx)('div', {
              className: o()(E, h.avatars),
              children: U()
          });
}

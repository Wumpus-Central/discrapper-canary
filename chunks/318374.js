n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(481060),
    u = n(239091),
    d = n(751688),
    f = n(5192),
    _ = n(51144),
    p = n(223390);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { users: t, maxUsers: o, guildId: s, channelId: h, className: g, avatarClassName: b, size: y = c.EFr.SIZE_24, overflowCountVariant: v = 'text-xs/medium', overflowCountColor: O = 'interactive-normal', overflowCountClassName: I, hideOverflowCount: S = !1, disableUsernameTooltip: T = !1, disableUserPopout: N = !1, onClick: A, onFocus: C, onUserClick: R, onUserPopoutRequestClose: P } = e,
        [w, D] = i.useState(!1);
    function L() {
        return (0, r.jsx)(c.VqE, {
            className: p.popoutWrapper,
            children: (0, r.jsx)(c.Ttm, {
                className: p.scroller,
                children: t.map((e) =>
                    (0, r.jsx)(
                        d.Z,
                        {
                            user: e,
                            guildId: s,
                            channelId: h,
                            nick: f.ZP.getNickname(s, h, e),
                            disablePopout: 'function' == typeof N ? N(e.id) : N,
                            onClick: R,
                            onPopoutRequestClose: () => {
                                D(!1), null == P || P();
                            },
                            onContextMenu: (t) =>
                                (0, u.jW)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                                        return (n) =>
                                            (0, r.jsx)(
                                                t,
                                                E(m({}, n), {
                                                    user: e,
                                                    guildId: s,
                                                    channelId: h
                                                })
                                            );
                                    },
                                    { onClose: () => D(!1) }
                                )
                        },
                        e.id
                    )
                )
            })
        });
    }
    function x() {
        let e = l()(t)
                .take(o)
                .map((e) => {
                    let t = _.ZP.getName(e);
                    return T
                        ? (0, r.jsx)(
                              'div',
                              {
                                  className: a()(p.avatar, b),
                                  children: (0, r.jsx)(c.qEK, {
                                      src: e.getAvatarURL(s, 24),
                                      'aria-label': t,
                                      size: y
                                  })
                              },
                              e.id
                          )
                        : (0, r.jsx)(
                              c.DY3,
                              {
                                  text: t,
                                  className: a()(p.avatar, b),
                                  children: (0, r.jsx)(c.qEK, {
                                      src: e.getAvatarURL(s, 24),
                                      'aria-label': t,
                                      size: y
                                  })
                              },
                              e.id
                          );
                })
                .value(),
            n = t.length - o;
        return (
            n > 0 &&
                !S &&
                (e[e.length - 1] = (0, r.jsx)(
                    c.yRy,
                    {
                        renderPopout: L,
                        shouldShow: w,
                        position: 'bottom',
                        onRequestClose: () => D(!1),
                        children: () =>
                            (0, r.jsx)(c.zxk, {
                                className: a()(p.avatar, p.overflow, I),
                                onFocus: C,
                                onClick: (e) => {
                                    null == A || A(e), D(!0);
                                },
                                look: c.zxk.Looks.BLANK,
                                size: c.zxk.Sizes.NONE,
                                children: (0, r.jsxs)(c.Text, {
                                    variant: v,
                                    color: O,
                                    children: ['+', n + 1]
                                })
                            })
                    },
                    'overflow'
                )),
            e
        );
    }
    return t.length <= 0
        ? null
        : (0, r.jsx)('div', {
              className: a()(g, p.avatars),
              children: x()
          });
}

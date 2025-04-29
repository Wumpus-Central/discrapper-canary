n.d(t, { Z: () => O }), n(388685);
var r = n(255367),
    i = n(73800),
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
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.EFr.SIZE_24;
    switch (e) {
        case c.EFr.SIZE_16:
            return p.size16;
        case c.EFr.SIZE_20:
            return p.size20;
        case c.EFr.SIZE_24:
        default:
            return p.size24;
    }
}
function y() {
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
function O(e) {
    let { users: t, maxUsers: o, guildId: s, channelId: h, className: g, size: O = c.EFr.SIZE_24, overflowCountVariant: v, overflowCountColor: I = 'interactive-normal', overflowCountClassName: S, hideOverflowCount: T = !1, disableUsernameTooltip: A = !1, disableUserPopout: N = !1, onClick: C, onFocus: R, onUserClick: P, onUserPopoutRequestClose: w } = e,
        [D, L] = i.useState(!1),
        x = b(O);
    function M() {
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
                            onClick: P,
                            onPopoutRequestClose: () => {
                                L(!1), null == w || w();
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
                                    { onClose: () => L(!1) }
                                )
                        },
                        e.id
                    )
                )
            })
        });
    }
    function k() {
        let e = t.length - o,
            n = e + 1,
            i = e > 0 && !T,
            u = Math.min(t.length, o) - 1,
            d = l()(t)
                .take(o)
                .map((e, t) => {
                    let n = _.ZP.getName(e),
                        o = t === u && !i,
                        l = a()(p.avatar, x, o && p.isLast);
                    return A
                        ? (0, r.jsx)(
                              'div',
                              {
                                  className: l,
                                  children: (0, r.jsx)(c.qEK, {
                                      src: e.getAvatarURL(s, 24),
                                      'aria-label': n,
                                      size: O
                                  })
                              },
                              e.id
                          )
                        : (0, r.jsx)(
                              c.DY3,
                              {
                                  text: n,
                                  className: l,
                                  children: (0, r.jsx)(c.qEK, {
                                      src: e.getAvatarURL(s, 24),
                                      'aria-label': n,
                                      size: O
                                  })
                              },
                              e.id
                          );
                })
                .value();
        if (i) {
            let e = null != v ? v : y(O);
            d[d.length - 1] = (0, r.jsx)(
                c.yRy,
                {
                    renderPopout: M,
                    shouldShow: D,
                    position: 'bottom',
                    onRequestClose: () => L(!1),
                    children: () =>
                        (0, r.jsx)(c.zxk, {
                            className: a()(p.overflow, x, S),
                            onFocus: R,
                            onClick: (e) => {
                                null == C || C(e), L(!0);
                            },
                            look: c.zxk.Looks.BLANK,
                            size: c.zxk.Sizes.NONE,
                            children: (0, r.jsx)(c.Text, {
                                variant: e,
                                color: I,
                                children: n > 99 ? '>99' : '+'.concat(n)
                            })
                        })
                },
                'overflow'
            );
        }
        return d;
    }
    return t.length <= 0
        ? null
        : (0, r.jsx)('div', {
              className: a()(g, p.avatars),
              children: k()
          });
}

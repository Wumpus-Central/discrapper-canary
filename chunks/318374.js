n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(481060),
    c = n(239091),
    d = n(751688),
    f = n(5192),
    _ = n(51144),
    p = n(357498);
function h(e) {
    let { users: t, maxUsers: a, guildId: o, channelId: h, className: m, avatarClassName: g, size: E = u.EFr.SIZE_24, overflowCountVariant: v = 'text-xs/medium', overflowCountColor: y = 'interactive-normal', overflowCountClassName: I, hideOverflowCount: T = !1, disableUsernameTooltip: b = !1, disableUserPopout: S = !1, onClick: A, onFocus: N, onUserClick: C, onUserPopoutRequestClose: R } = e,
        [O, D] = r.useState(!1);
    function x() {
        return (0, i.jsx)(u.VqE, {
            className: p.popoutWrapper,
            children: (0, i.jsx)(u.Ttm, {
                className: p.scroller,
                children: t.map((e) =>
                    (0, i.jsx)(
                        d.Z,
                        {
                            user: e,
                            guildId: o,
                            channelId: h,
                            nick: f.ZP.getNickname(o, h, e),
                            disablePopout: 'function' == typeof S ? S(e.id) : S,
                            onClick: C,
                            onPopoutRequestClose: () => {
                                D(!1), null == R || R();
                            },
                            onContextMenu: (t) =>
                                (0, c.jW)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                                        return (n) =>
                                            (0, i.jsx)(t, {
                                                ...n,
                                                user: e,
                                                guildId: o,
                                                channelId: h
                                            });
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
    function L() {
        let e = l()(t)
                .take(a)
                .map((e) => {
                    let t = _.ZP.getName(e);
                    return b
                        ? (0, i.jsx)(
                              'div',
                              {
                                  className: s()(p.avatar, g),
                                  children: (0, i.jsx)(u.qEK, {
                                      src: e.getAvatarURL(o, 24),
                                      'aria-label': t,
                                      size: E
                                  })
                              },
                              e.id
                          )
                        : (0, i.jsx)(
                              u.DY3,
                              {
                                  text: t,
                                  className: s()(p.avatar, g),
                                  children: (0, i.jsx)(u.qEK, {
                                      src: e.getAvatarURL(o, 24),
                                      'aria-label': t,
                                      size: E
                                  })
                              },
                              e.id
                          );
                })
                .value(),
            n = t.length - a;
        return (
            n > 0 &&
                !T &&
                (e[e.length - 1] = (0, i.jsx)(
                    u.yRy,
                    {
                        renderPopout: x,
                        shouldShow: O,
                        position: 'bottom',
                        onRequestClose: () => D(!1),
                        children: () =>
                            (0, i.jsx)(u.zxk, {
                                className: s()(p.avatar, p.overflow, I),
                                onFocus: N,
                                onClick: (e) => {
                                    null == A || A(e), D(!0);
                                },
                                look: u.zxk.Looks.BLANK,
                                size: u.zxk.Sizes.NONE,
                                children: (0, i.jsxs)(u.Text, {
                                    variant: v,
                                    color: y,
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
        : (0, i.jsx)('div', {
              className: s()(m, p.avatars),
              children: L()
          });
}

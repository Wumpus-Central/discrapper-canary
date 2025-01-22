r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(481060),
    f = r(239091),
    p = r(751688),
    h = r(51144),
    _ = r(357498);
function m(e) {
    let { users: n, maxUsers: i, guildId: s, channelId: u, className: m, avatarClassName: g, onClick: E, onFocus: v, size: y = d.AvatarSizes.SIZE_24, overflowCountVariant: b = 'text-xs/medium', overflowCountColor: I = 'interactive-normal', overflowCountClassName: T, hideOverflowCount: S = !1, disableUsernameTooltip: A = !1, disableUserPopout: C = !1, onUserPopoutClosed: N } = e,
        [R, O] = o.useState(!1);
    function D() {
        return (0, a.jsx)(d.Dialog, {
            className: _.popoutWrapper,
            children: (0, a.jsx)(d.Scroller, {
                className: _.scroller,
                children: n.map((e) =>
                    (0, a.jsx)(
                        p.Z,
                        {
                            user: e,
                            guildId: s,
                            channelId: u,
                            nick: h.ZP.getName(e),
                            disablePopout: 'function' == typeof C ? C(e.id) : C,
                            ignoreModalClicks: !0,
                            onPopoutClose: () => {
                                O(!1), null == N || N();
                            },
                            onContextMenu: (n) =>
                                (0, f.jW)(
                                    n,
                                    async () => {
                                        let { default: n } = await Promise.all([r.e('79695'), r.e('69220'), r.e('351')]).then(r.bind(r, 881351));
                                        return (r) =>
                                            (0, a.jsx)(n, {
                                                ...r,
                                                user: e,
                                                guildId: s,
                                                channelId: u
                                            });
                                    },
                                    { onClose: () => O(!1) }
                                )
                        },
                        e.id
                    )
                )
            })
        });
    }
    function L() {
        let e = c()(n)
                .take(i)
                .map((e) => {
                    let n = h.ZP.getName(e);
                    return A
                        ? (0, a.jsx)(
                              'div',
                              {
                                  className: l()(_.avatar, g),
                                  children: (0, a.jsx)(d.Avatar, {
                                      src: e.getAvatarURL(s, 24),
                                      'aria-label': n,
                                      size: y
                                  })
                              },
                              e.id
                          )
                        : (0, a.jsx)(
                              d.TooltipContainer,
                              {
                                  text: n,
                                  className: l()(_.avatar, g),
                                  children: (0, a.jsx)(d.Avatar, {
                                      src: e.getAvatarURL(s, 24),
                                      'aria-label': n,
                                      size: y
                                  })
                              },
                              e.id
                          );
                })
                .value(),
            r = n.length - i;
        return (
            r > 0 &&
                !S &&
                (e[e.length - 1] = (0, a.jsx)(
                    d.Popout,
                    {
                        renderPopout: D,
                        shouldShow: R,
                        position: 'bottom',
                        onRequestClose: () => O(!1),
                        children: () =>
                            (0, a.jsx)(d.Button, {
                                className: l()(_.avatar, _.overflow, T),
                                onFocus: v,
                                onClick: (e) => {
                                    null == E || E(e), O(!0);
                                },
                                look: d.Button.Looks.BLANK,
                                size: d.Button.Sizes.NONE,
                                children: (0, a.jsxs)(d.Text, {
                                    variant: b,
                                    color: I,
                                    children: ['+', r + 1]
                                })
                            })
                    },
                    'overflow'
                )),
            e
        );
    }
    return n.length <= 0
        ? null
        : (0, a.jsx)('div', {
              className: l()(m, _.avatars),
              children: L()
          });
}

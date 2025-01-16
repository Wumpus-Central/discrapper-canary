r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(481060),
    f = r(239091),
    _ = r(751688),
    h = r(51144),
    p = r(357498);
function m(e) {
    let { users: n, maxUsers: i, guildId: o, channelId: u, className: m, avatarClassName: g, onClick: E, onFocus: v, size: I = d.AvatarSizes.SIZE_24, overflowCountVariant: T = 'text-xs/medium', overflowCountColor: b = 'interactive-normal', overflowCountClassName: y, hideOverflowCount: S = !1, disableUsernameTooltip: A = !1, disableUserPopout: N = !1, onUserPopoutClosed: C } = e,
        [R, O] = s.useState(!1);
    function D() {
        return (0, a.jsx)(d.Dialog, {
            className: p.popoutWrapper,
            children: (0, a.jsx)(d.Scroller, {
                className: p.scroller,
                children: n.map((e) =>
                    (0, a.jsx)(
                        _.Z,
                        {
                            user: e,
                            guildId: o,
                            channelId: u,
                            nick: h.ZP.getName(e),
                            disablePopout: 'function' == typeof N ? N(e.id) : N,
                            ignoreModalClicks: !0,
                            onPopoutClose: () => {
                                O(!1), null == C || C();
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
                                                guildId: o,
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
                                  className: l()(p.avatar, g),
                                  children: (0, a.jsx)(d.Avatar, {
                                      src: e.getAvatarURL(o, 24),
                                      'aria-label': n,
                                      size: I
                                  })
                              },
                              e.id
                          )
                        : (0, a.jsx)(
                              d.TooltipContainer,
                              {
                                  text: n,
                                  className: l()(p.avatar, g),
                                  children: (0, a.jsx)(d.Avatar, {
                                      src: e.getAvatarURL(o, 24),
                                      'aria-label': n,
                                      size: I
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
                                className: l()(p.avatar, p.overflow, y),
                                onFocus: v,
                                onClick: (e) => {
                                    null == E || E(e), O(!0);
                                },
                                look: d.Button.Looks.BLANK,
                                size: d.Button.Sizes.NONE,
                                children: (0, a.jsxs)(d.Text, {
                                    variant: T,
                                    color: b,
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
              className: l()(m, p.avatars),
              children: L()
          });
}

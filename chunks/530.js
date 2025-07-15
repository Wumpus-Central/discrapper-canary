n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(129861),
    l = n(406943),
    c = n(385499),
    u = n(821795),
    d = n(892567),
    f = n(172751),
    _ = n(228168),
    p = n(388032),
    h = n(438361);
function m(e) {
    let { user: t, usernameIcon: n, tags: i, nickname: m, nicknameIcons: g, pronouns: E, className: b, tagClassName: y, isTryItOut: O, onOpenProfile: v, onClose: I, nicknameVariant: T = 'heading-lg/bold' } = e,
        S = (e) =>
            null == v
                ? e
                : (0, r.jsx)(o.P3F, {
                      onClick: v,
                      className: h.clickableUsername,
                      children: e
                  }),
        A = null != E && E.length > 0,
        N = (0, l.D)(t);
    return (0, r.jsxs)('div', {
        className: a()(h.container, { [h.bot]: null != N }, b),
        children: [
            (0, r.jsxs)('div', {
                className: h.usernameRow,
                children: [
                    S(
                        (0, r.jsx)(o.X6q, {
                            className: h.nickname,
                            variant: T,
                            children: (0, r.jsx)(d.Z, {
                                userName: m,
                                displayNameStyles: t.displayNameStyles,
                                effectDisplayType: u.F.ANIMATED
                            })
                        })
                    ),
                    null != N &&
                        (0, r.jsx)(c.Z, {
                            type: N,
                            verified: t.isVerifiedBot()
                        }),
                    null != g &&
                        (0, r.jsx)('div', {
                            className: h.nicknameIcons,
                            children: g
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()(h.tags, {
                    [h.pronouns]: A,
                    [h.bot]: null != N
                }),
                children: [
                    !t.isProvisional &&
                        S(
                            (0, r.jsx)(s.Z, {
                                user: t,
                                usernameIcon: n,
                                forceUsername: !0,
                                forcePomelo: O,
                                className: a()(h.userTag, y),
                                usernameClass: h.userTagUsername,
                                discriminatorClass: h.userTagDiscriminator,
                                hideBotTag: !0
                            })
                        ),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', {
                                    'aria-hidden': 'true',
                                    className: h.dotSpacer
                                }),
                                (0, r.jsx)(o.DY3, {
                                    className: h.pronounsTooltip,
                                    text: p.intl.string(p.t.GI2A8P),
                                    delay: _.vB,
                                    children: (0, r.jsx)(o.Text, {
                                        className: a()(h.pronounsText, y),
                                        variant: 'text-sm/medium',
                                        color: 'header-primary',
                                        children: E
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(f.ZP, {
                        userId: t.id,
                        onClose: I,
                        containerClassName: h.guildTagContainer,
                        className: h.guildTag
                    }),
                    i
                ]
            })
        ]
    });
}

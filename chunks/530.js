n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(129861),
    l = n(406943),
    c = n(385499),
    u = n(172751),
    d = n(228168),
    f = n(388032),
    _ = n(438361);
function p(e) {
    let { user: t, usernameIcon: n, tags: i, nickname: p, nicknameIcons: h, pronouns: m, className: g, tagClassName: E, isTryItOut: b, onOpenProfile: y, onClose: O, nicknameVariant: v = 'heading-lg/bold' } = e,
        I = (e) =>
            null == y
                ? e
                : (0, r.jsx)(a.P3F, {
                      onClick: y,
                      className: _.clickableUsername,
                      children: e
                  }),
        S = null != m && m.length > 0,
        T = (0, l.D)(t);
    return (0, r.jsxs)('div', {
        className: o()(_.container, { [_.bot]: null != T }, g),
        children: [
            (0, r.jsxs)('div', {
                className: _.usernameRow,
                children: [
                    I(
                        (0, r.jsx)(a.X6q, {
                            className: _.nickname,
                            variant: v,
                            children: p
                        })
                    ),
                    null != T &&
                        (0, r.jsx)(c.Z, {
                            type: T,
                            verified: t.isVerifiedBot()
                        }),
                    null != h &&
                        (0, r.jsx)('div', {
                            className: _.nicknameIcons,
                            children: h
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: o()(_.tags, {
                    [_.pronouns]: S,
                    [_.bot]: null != T
                }),
                children: [
                    !t.isProvisional &&
                        I(
                            (0, r.jsx)(s.Z, {
                                user: t,
                                usernameIcon: n,
                                forceUsername: !0,
                                forcePomelo: b,
                                className: o()(_.userTag, E),
                                usernameClass: _.userTagUsername,
                                discriminatorClass: _.userTagDiscriminator,
                                hideBotTag: !0
                            })
                        ),
                    S &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', {
                                    'aria-hidden': 'true',
                                    className: _.dotSpacer
                                }),
                                (0, r.jsx)(a.DY3, {
                                    className: _.pronounsTooltip,
                                    text: f.intl.string(f.t.GI2A8P),
                                    delay: d.vB,
                                    children: (0, r.jsx)(a.Text, {
                                        className: o()(_.pronounsText, E),
                                        variant: 'text-sm/medium',
                                        color: 'header-primary',
                                        children: m
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(u.ZP, {
                        userId: t.id,
                        onClose: O
                    }),
                    i
                ]
            })
        ]
    });
}

n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(129861),
    l = n(406943),
    u = n(385499),
    c = n(979264),
    d = n(228168),
    f = n(388032),
    _ = n(961347);
function p(e) {
    let { user: t, profileType: n, usernameIcon: r, tags: p, nickname: h, nicknameIcons: m, pronouns: g, className: E, isTryItOut: v, onOpenProfile: y, nicknameVariant: I = 'heading-lg/bold', pronounsVariant: b = 'text-sm/medium' } = e,
        T = {
            [_.biteSize]: n === d.y0.BITE_SIZE,
            [_.fullSize]: n === d.y0.FULL_SIZE,
            [_.panel]: n === d.y0.PANEL
        },
        S = (e) =>
            null == y
                ? e
                : (0, i.jsx)(s.P3F, {
                      onClick: y,
                      className: _.clickableUsername,
                      children: e
                  }),
        A = null != g && g.length > 0,
        N = (0, l.D)(t);
    return (0, i.jsxs)('div', {
        className: a()(_.container, { [_.bot]: null != N }, E),
        children: [
            (0, i.jsxs)('div', {
                className: _.usernameRow,
                children: [
                    S(
                        (0, i.jsx)(s.X6q, {
                            className: a()(_.nickname, T),
                            variant: I,
                            children: h
                        })
                    ),
                    null != N &&
                        (0, i.jsx)(u.Z, {
                            type: N,
                            verified: t.isVerifiedBot()
                        }),
                    null != m &&
                        (0, i.jsx)('div', {
                            className: a()(_.nicknameIcons, T),
                            children: m
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: a()(_.tags, T, {
                    [_.pronouns]: A,
                    [_.bot]: null != N
                }),
                children: [
                    S(
                        (0, i.jsx)(o.Z, {
                            user: t,
                            usernameIcon: r,
                            forceUsername: !0,
                            forcePomelo: v,
                            className: _.userTag,
                            usernameClass: _.userTagUsername,
                            discriminatorClass: _.userTagDiscriminator,
                            hideBotTag: !0
                        })
                    ),
                    A &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    'aria-hidden': 'true',
                                    className: _.dotSpacer
                                }),
                                (0, i.jsx)(s.DY3, {
                                    className: _.pronounsTooltip,
                                    text: f.intl.string(f.t.GI2A8P),
                                    delay: d.vB,
                                    children: (0, i.jsx)(s.Text, {
                                        variant: b,
                                        className: _.pronounsText,
                                        color: 'header-primary',
                                        children: g
                                    })
                                })
                            ]
                        }),
                    (0, i.jsx)(c.ZP, {
                        userId: t.id,
                        containerClassName: _.clanTagContainer,
                        className: _.clanTag
                    }),
                    p
                ]
            })
        ]
    });
}

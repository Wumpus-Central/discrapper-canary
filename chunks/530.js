n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(129861),
    l = n(406943),
    c = n(385499),
    u = n(979264),
    d = n(228168),
    f = n(388032),
    p = n(355182);
function _(e) {
    let { user: t, profileType: n, usernameIcon: i, tags: _, nickname: h, nicknameIcons: m, pronouns: g, className: E, isTryItOut: v, onOpenProfile: b, nicknameVariant: y = 'heading-lg/bold', pronounsVariant: O = 'text-sm/medium' } = e,
        S = {
            [p.biteSize]: n === d.y0.BITE_SIZE,
            [p.fullSize]: n === d.y0.FULL_SIZE,
            [p.panel]: n === d.y0.PANEL
        },
        I = (e) =>
            null == b
                ? e
                : (0, r.jsx)(a.P3F, {
                      onClick: b,
                      className: p.clickableUsername,
                      children: e
                  }),
        T = null != g && g.length > 0,
        N = (0, l.D)(t);
    return (0, r.jsxs)('div', {
        className: o()(p.container, { [p.bot]: null != N }, E),
        children: [
            (0, r.jsxs)('div', {
                className: p.usernameRow,
                children: [
                    I(
                        (0, r.jsx)(a.X6q, {
                            className: o()(p.nickname, S),
                            variant: y,
                            children: h
                        })
                    ),
                    null != N &&
                        (0, r.jsx)(c.Z, {
                            type: N,
                            verified: t.isVerifiedBot()
                        }),
                    null != m &&
                        (0, r.jsx)('div', {
                            className: o()(p.nicknameIcons, S),
                            children: m
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: o()(p.tags, S, {
                    [p.pronouns]: T,
                    [p.bot]: null != N
                }),
                children: [
                    I(
                        (0, r.jsx)(s.Z, {
                            user: t,
                            usernameIcon: i,
                            forceUsername: !0,
                            forcePomelo: v,
                            className: p.userTag,
                            usernameClass: p.userTagUsername,
                            discriminatorClass: p.userTagDiscriminator,
                            hideBotTag: !0
                        })
                    ),
                    T &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', {
                                    'aria-hidden': 'true',
                                    className: p.dotSpacer
                                }),
                                (0, r.jsx)(a.DY3, {
                                    className: p.pronounsTooltip,
                                    text: f.NW.string(f.t.GI2A8P),
                                    delay: d.vB,
                                    children: (0, r.jsx)(a.Text, {
                                        variant: O,
                                        className: p.pronounsText,
                                        color: 'header-primary',
                                        children: g
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(u.ZP, {
                        userId: t.id,
                        containerClassName: p.clanTagContainer,
                        className: p.clanTag
                    }),
                    _
                ]
            })
        ]
    });
}

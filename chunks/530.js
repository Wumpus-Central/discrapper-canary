n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(129861),
    l = n(406943),
    c = n(385499),
    u = n(979264),
    d = n(228168),
    f = n(388032),
    _ = n(438361);
function p(e) {
    let { user: t, profileType: n, usernameIcon: i, tags: p, nickname: h, nicknameIcons: m, pronouns: g, className: E, isTryItOut: b, onOpenProfile: y, nicknameVariant: v = 'heading-lg/bold', pronounsVariant: O = 'text-sm/medium' } = e,
        I = {
            [_.biteSize]: n === d.y0.BITE_SIZE,
            [_.fullSize]: n === d.y0.FULL_SIZE,
            [_.panel]: n === d.y0.PANEL
        },
        S = (e) =>
            null == y
                ? e
                : (0, r.jsx)(o.P3F, {
                      onClick: y,
                      className: _.clickableUsername,
                      children: e
                  }),
        T = null != g && g.length > 0,
        N = (0, l.D)(t);
    return (0, r.jsxs)('div', {
        className: a()(_.container, { [_.bot]: null != N }, E),
        children: [
            (0, r.jsxs)('div', {
                className: _.usernameRow,
                children: [
                    S(
                        (0, r.jsx)(o.X6q, {
                            className: a()(_.nickname, I),
                            variant: v,
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
                            className: a()(_.nicknameIcons, I),
                            children: m
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()(_.tags, I, {
                    [_.pronouns]: T,
                    [_.bot]: null != N
                }),
                children: [
                    !t.isProvisional &&
                        S(
                            (0, r.jsx)(s.Z, {
                                user: t,
                                usernameIcon: i,
                                forceUsername: !0,
                                forcePomelo: b,
                                className: _.userTag,
                                usernameClass: _.userTagUsername,
                                discriminatorClass: _.userTagDiscriminator,
                                hideBotTag: !0
                            })
                        ),
                    T &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', {
                                    'aria-hidden': 'true',
                                    className: _.dotSpacer
                                }),
                                (0, r.jsx)(o.DY3, {
                                    className: _.pronounsTooltip,
                                    text: f.NW.string(f.t.GI2A8P),
                                    delay: d.vB,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: O,
                                        className: _.pronounsText,
                                        color: 'header-primary',
                                        children: g
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(u.ZP, {
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

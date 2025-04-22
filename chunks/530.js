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
    let { user: t, usernameIcon: n, tags: i, nickname: p, nicknameIcons: h, pronouns: m, className: g, isTryItOut: E, onOpenProfile: b, onClose: y, nicknameVariant: v = 'heading-lg/bold', pronounsVariant: O = 'text-sm/medium' } = e,
        I = (e) =>
            null == b
                ? e
                : (0, r.jsx)(o.P3F, {
                      onClick: b,
                      className: _.clickableUsername,
                      children: e
                  }),
        S = null != m && m.length > 0,
        T = (0, l.D)(t);
    return (0, r.jsxs)('div', {
        className: a()(_.container, { [_.bot]: null != T }, g),
        children: [
            (0, r.jsxs)('div', {
                className: _.usernameRow,
                children: [
                    I(
                        (0, r.jsx)(o.X6q, {
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
                className: a()(_.tags, {
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
                                forcePomelo: E,
                                className: _.userTag,
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
                                (0, r.jsx)(o.DY3, {
                                    className: _.pronounsTooltip,
                                    text: f.intl.string(f.t.GI2A8P),
                                    delay: d.vB,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: O,
                                        className: _.pronounsText,
                                        color: 'header-primary',
                                        children: m
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(u.ZP, {
                        userId: t.id,
                        containerClassName: _.clanTagContainer,
                        className: _.clanTag,
                        onClose: y
                    }),
                    i
                ]
            })
        ]
    });
}

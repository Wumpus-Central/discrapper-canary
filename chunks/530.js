r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(129861),
    u = r(406943),
    c = r(385499),
    d = r(979264),
    f = r(228168),
    p = r(388032),
    h = r(961347);
function _(e) {
    let { user: n, profileType: r, usernameIcon: a, tags: _, nickname: m, nicknameIcons: g, pronouns: E, className: v, isTryItOut: y, onOpenProfile: b, nicknameVariant: I = 'heading-lg/bold', pronounsVariant: T = 'text-sm/medium' } = e,
        S = {
            [h.biteSize]: r === f.y0.BITE_SIZE,
            [h.fullSize]: r === f.y0.FULL_SIZE,
            [h.panel]: r === f.y0.PANEL
        },
        A = (e) =>
            null == b
                ? e
                : (0, i.jsx)(s.Clickable, {
                      onClick: b,
                      className: h.clickableUsername,
                      children: e
                  }),
        C = null != E && E.length > 0,
        N = (0, u.D)(n);
    return (0, i.jsxs)('div', {
        className: o()(h.container, { [h.bot]: null != N }, v),
        children: [
            (0, i.jsxs)('div', {
                className: h.usernameRow,
                children: [
                    A(
                        (0, i.jsx)(s.Heading, {
                            className: o()(h.nickname, S),
                            variant: I,
                            children: m
                        })
                    ),
                    null != N &&
                        (0, i.jsx)(c.Z, {
                            type: N,
                            verified: n.isVerifiedBot()
                        }),
                    null != g &&
                        (0, i.jsx)('div', {
                            className: o()(h.nicknameIcons, S),
                            children: g
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: o()(h.tags, S, {
                    [h.pronouns]: C,
                    [h.bot]: null != N
                }),
                children: [
                    A(
                        (0, i.jsx)(l.Z, {
                            user: n,
                            usernameIcon: a,
                            forceUsername: !0,
                            forcePomelo: y,
                            className: h.userTag,
                            usernameClass: h.userTagUsername,
                            discriminatorClass: h.userTagDiscriminator,
                            hideBotTag: !0
                        })
                    ),
                    C &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    'aria-hidden': 'true',
                                    className: h.dotSpacer
                                }),
                                (0, i.jsx)(s.TooltipContainer, {
                                    className: h.pronounsTooltip,
                                    text: p.intl.string(p.t.GI2A8P),
                                    delay: f.vB,
                                    children: (0, i.jsx)(s.Text, {
                                        variant: T,
                                        className: h.pronounsText,
                                        color: 'header-primary',
                                        children: E
                                    })
                                })
                            ]
                        }),
                    (0, i.jsx)(d.ZP, {
                        userId: n.id,
                        containerClassName: h.clanTagContainer,
                        className: h.clanTag
                    }),
                    _
                ]
            })
        ]
    });
}

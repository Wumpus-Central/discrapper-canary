r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(129861),
    u = r(406943),
    c = r(385499),
    d = r(979264),
    f = r(228168),
    _ = r(388032),
    h = r(961347);
function p(e) {
    let { user: n, profileType: r, usernameIcon: a, tags: p, nickname: m, nicknameIcons: g, pronouns: E, className: v, isTryItOut: I, onOpenProfile: T, nicknameVariant: b = 'heading-lg/bold', pronounsVariant: y = 'text-sm/medium' } = e,
        S = {
            [h.biteSize]: r === f.y0.BITE_SIZE,
            [h.fullSize]: r === f.y0.FULL_SIZE,
            [h.panel]: r === f.y0.PANEL
        },
        A = (e) =>
            null == T
                ? e
                : (0, i.jsx)(o.Clickable, {
                      onClick: T,
                      className: h.clickableUsername,
                      children: e
                  }),
        N = null != E && E.length > 0,
        C = (0, u.D)(n);
    return (0, i.jsxs)('div', {
        className: s()(h.container, { [h.bot]: null != C }, v),
        children: [
            (0, i.jsxs)('div', {
                className: h.usernameRow,
                children: [
                    A(
                        (0, i.jsx)(o.Heading, {
                            className: s()(h.nickname, S),
                            variant: b,
                            children: m
                        })
                    ),
                    null != C &&
                        (0, i.jsx)(c.Z, {
                            type: C,
                            verified: n.isVerifiedBot()
                        }),
                    null != g &&
                        (0, i.jsx)('div', {
                            className: s()(h.nicknameIcons, S),
                            children: g
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: s()(h.tags, S, {
                    [h.pronouns]: N,
                    [h.bot]: null != C
                }),
                children: [
                    A(
                        (0, i.jsx)(l.Z, {
                            user: n,
                            usernameIcon: a,
                            forceUsername: !0,
                            forcePomelo: I,
                            className: h.userTag,
                            usernameClass: h.userTagUsername,
                            discriminatorClass: h.userTagDiscriminator,
                            hideBotTag: !0
                        })
                    ),
                    N &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    'aria-hidden': 'true',
                                    className: h.dotSpacer
                                }),
                                (0, i.jsx)(o.TooltipContainer, {
                                    className: h.pronounsTooltip,
                                    text: _.intl.string(_.t.GI2A8P),
                                    delay: f.vB,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: y,
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
                    p
                ]
            })
        ]
    });
}

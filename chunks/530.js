n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(129861),
    l = n(406943),
    c = n(385499),
    u = n(181430),
    d = n(821795),
    f = n(892567),
    _ = n(172751),
    p = n(228168),
    h = n(388032),
    m = n(625721);
function g(e) {
    let {
            user: t,
            usernameIcon: n,
            tags: i,
            nickname: g,
            nicknameIcons: E,
            pronouns: b,
            className: y,
            tagClassName: O,
            isTryItOut: v,
            onOpenProfile: I,
            onClose: T,
            nicknameVariant: S = "heading-lg/bold",
        } = e,
        A = (e) =>
            null == I
                ? e
                : (0, r.jsx)(a.kL8, {
                      onClick: I,
                      className: m.clickableUsername,
                      "aria-label": h.intl.string(h.t["+Xp3ho"]),
                      children: e,
                  }),
        N = null != b && b.length > 0,
        C = (0, l.D)(t),
        R = (0, u.Y)({ location: "UserProfileUsername" }) && null != t.displayNameStyles;
    return (0, r.jsxs)("div", {
        className: o()(m.container, { [m.bot]: null != C }, y),
        children: [
            (0, r.jsxs)("div", {
                className: m.usernameRow,
                children: [
                    A(
                        R
                            ? (0, r.jsx)(a.Text, {
                                  variant: S,
                                  children: (0, r.jsx)(f.Z, {
                                      userName: g,
                                      displayNameStyles: t.displayNameStyles,
                                      effectDisplayType: d.F.ANIMATED,
                                      textClassName: m.nicknameWithDisplayNameStyles,
                                      shouldWrap: !0,
                                      loop: !0,
                                      inProfile: !0,
                                  }),
                              })
                            : (0, r.jsx)(a.Text, {
                                  className: m.nickname,
                                  variant: S,
                                  children: g,
                              }),
                    ),
                    null != C &&
                        (0, r.jsx)(c.Z, {
                            type: C,
                            verified: t.isVerifiedBot(),
                        }),
                    null != E &&
                        (0, r.jsx)("div", {
                            className: m.nicknameIcons,
                            children: E,
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: o()(m.tags, {
                    [m.pronouns]: N,
                    [m.bot]: null != C,
                }),
                children: [
                    !t.isProvisional &&
                        A(
                            (0, r.jsx)(s.Z, {
                                user: t,
                                usernameIcon: n,
                                forceUsername: !0,
                                forcePomelo: v,
                                className: o()(m.userTag, O),
                                usernameClass: m.userTagUsername,
                                discriminatorClass: m.userTagDiscriminator,
                                hideBotTag: !0,
                            }),
                        ),
                    N &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    "aria-hidden": "true",
                                    className: m.dotSpacer,
                                }),
                                (0, r.jsx)(a.DY3, {
                                    className: m.pronounsTooltip,
                                    text: h.intl.string(h.t.GI2A8P),
                                    delay: p.vB,
                                    children: (0, r.jsx)(a.Text, {
                                        className: o()(m.pronounsText, O),
                                        variant: "text-sm/medium",
                                        color: "header-primary",
                                        children: b,
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(_.ZP, {
                        userId: t.id,
                        onClose: T,
                        containerClassName: m.guildTagContainer,
                        className: m.guildTag,
                    }),
                    i,
                ],
            }),
        ],
    });
}

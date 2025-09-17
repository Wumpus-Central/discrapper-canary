n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(481060),
    l = n(129861),
    c = n(406943),
    u = n(385499),
    d = n(181430),
    f = n(821795),
    _ = n(892567),
    p = n(172751),
    h = n(228168),
    m = n(388032),
    g = n(954677);
function E(e) {
    let {
            user: t,
            usernameIcon: n,
            tags: i,
            nickname: E,
            nicknameIcons: b,
            displayNameStyles: y = t.displayNameStyles,
            pronouns: O,
            className: v,
            tagClassName: I,
            isTryItOut: T,
            onOpenProfile: S,
            onClose: A,
            nicknameVariant: C = "heading-lg/bold",
        } = e,
        N = (e) =>
            null == S
                ? e
                : (0, r.jsx)(s.kL8, {
                      onClick: S,
                      className: g.clickableUsername,
                      "aria-label": m.intl.string(m.t["+Xp3ho"]),
                      children: e,
                  }),
        R = null != O && O.length > 0,
        P = (0, c.D)(t),
        w = (0, d.Y)({ location: "UserProfileUsername" }) && null != y;
    return (0, r.jsxs)("div", {
        className: a()(g.container, { [g.bot]: null != P }, v),
        children: [
            (0, r.jsxs)("div", {
                className: g.usernameRow,
                children: [
                    N(
                        w
                            ? (0, r.jsx)(s.Text, {
                                  variant: C,
                                  children: (0, r.jsx)(_.Z, {
                                      userName: E,
                                      displayNameStyles: y,
                                      effectDisplayType: f.F.ANIMATED,
                                      textClassName: g.nicknameWithDisplayNameStyles,
                                      shouldWrap: !0,
                                      loop: !0,
                                      inProfile: !0,
                                      shouldUnderlineOnHover: null != S,
                                  }),
                              })
                            : (0, r.jsx)(s.Text, {
                                  className: g.nickname,
                                  variant: C,
                                  children: E,
                              }),
                    ),
                    null != P &&
                        (0, r.jsx)(u.Z, {
                            type: P,
                            verified: t.isVerifiedBot(),
                        }),
                    null != b &&
                        (0, r.jsx)("div", {
                            className: g.nicknameIcons,
                            children: b,
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()(g.tags, {
                    [g.pronouns]: R,
                    [g.bot]: null != P,
                }),
                children: [
                    !t.isProvisional &&
                        N(
                            (0, r.jsx)(l.Z, {
                                user: t,
                                usernameIcon: n,
                                forceUsername: !0,
                                forcePomelo: T,
                                className: a()(g.userTag, I),
                                usernameClass: g.userTagUsername,
                                discriminatorClass: g.userTagDiscriminator,
                                hideBotTag: !0,
                            }),
                        ),
                    R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    "aria-hidden": "true",
                                    className: g.dotSpacer,
                                }),
                                (0, r.jsx)(o.u, {
                                    asContainer: !0,
                                    text: m.intl.string(m.t.GI2A8P),
                                    delay: h.vB,
                                    children: (0, r.jsx)(s.Text, {
                                        className: a()(g.pronounsText, I),
                                        variant: "text-sm/medium",
                                        color: "header-primary",
                                        children: O,
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(p.ZP, {
                        userId: t.id,
                        onClose: A,
                        containerClassName: g.guildTagContainer,
                        className: g.guildTag,
                    }),
                    i,
                ],
            }),
        ],
    });
}

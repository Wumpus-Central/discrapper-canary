n.d(t, { Z: () => E });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(481060),
    l = n(129861),
    c = n(406943),
    u = n(385499),
    d = n(386725),
    f = n(821795),
    p = n(892567),
    _ = n(172751),
    h = n(228168),
    m = n(388032),
    g = n(367701);
function E(e) {
    let {
            user: t,
            guildId: n,
            usernameIcon: i,
            tags: E,
            nickname: b,
            nicknameIcons: y,
            pendingDisplayNameStyles: O,
            pronouns: v,
            primaryGuild: S,
            className: I,
            tagClassName: T,
            isTryItOut: C,
            onOpenProfile: A,
            onClose: N,
            nicknameVariant: P = "heading-lg/bold",
        } = e,
        w = (e) =>
            null == A
                ? e
                : (0, r.jsx)(s.kL8, {
                      onClick: A,
                      className: g.clickableUsername,
                      "aria-label": m.intl.string(m.t["+Xp3hq"]),
                      children: e,
                  }),
        R = null != v && v.length > 0,
        D = (0, c.D)(t),
        x = (0, d.Z)({
            userId: t.id,
            guildId: n,
            pendingDisplayNameStyles: O,
        }),
        L = null != x;
    return (0, r.jsxs)("div", {
        className: a()(g.container, { [g.bot]: null != D }, I),
        children: [
            (0, r.jsxs)("div", {
                className: g.usernameRow,
                children: [
                    w(
                        L
                            ? (0, r.jsx)(s.Text, {
                                  variant: P,
                                  children: (0, r.jsx)(p.Z, {
                                      userName: b,
                                      displayNameStyles: x,
                                      effectDisplayType: f.F.ANIMATED,
                                      textClassName: g.nicknameWithDisplayNameStyles,
                                      shouldWrap: !0,
                                      loop: !0,
                                      inProfile: !0,
                                      shouldUnderlineOnHover: null != A,
                                  }),
                              })
                            : (0, r.jsx)(s.Text, {
                                  className: g.nickname,
                                  variant: P,
                                  children: b,
                              }),
                    ),
                    null != D &&
                        (0, r.jsx)(u.Z, {
                            type: D,
                            verified: t.isVerifiedBot(),
                        }),
                    null != y &&
                        (0, r.jsx)("div", {
                            className: g.nicknameIcons,
                            children: y,
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()(g.tags, {
                    [g.pronouns]: R,
                    [g.bot]: null != D,
                }),
                children: [
                    !t.isProvisional &&
                        w(
                            (0, r.jsx)(l.Z, {
                                user: t,
                                usernameIcon: i,
                                forceUsername: !0,
                                forcePomelo: C,
                                className: a()(g.userTag, T),
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
                                    text: m.intl.string(m.t.GI2A8C),
                                    delay: h.vB,
                                    children: (0, r.jsx)(s.Text, {
                                        className: a()(g.pronounsText, T),
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: v,
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(_.ZP, {
                        primaryGuild: S,
                        userId: t.id,
                        onClose: N,
                        containerClassName: g.guildTagContainer,
                        className: g.guildTag,
                    }),
                    E,
                ],
            }),
        ],
    });
}

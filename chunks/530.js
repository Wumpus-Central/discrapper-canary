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
    d = n(386725),
    f = n(821795),
    _ = n(892567),
    p = n(172751),
    h = n(228168),
    m = n(388032),
    g = n(69295);
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
            className: I,
            tagClassName: T,
            isTryItOut: S,
            onOpenProfile: A,
            onClose: C,
            nicknameVariant: N = "heading-lg/bold",
        } = e,
        R = (e) =>
            null == A
                ? e
                : (0, r.jsx)(s.kL8, {
                      onClick: A,
                      className: g.clickableUsername,
                      "aria-label": m.intl.string(m.t["+Xp3hq"]),
                      children: e,
                  }),
        P = null != v && v.length > 0,
        w = (0, c.D)(t),
        D = (0, d.Z)({
            userId: t.id,
            guildId: n,
            pendingDisplayNameStyles: O,
        }),
        x = null != D;
    return (0, r.jsxs)("div", {
        className: a()(g.container, { [g.bot]: null != w }, I),
        children: [
            (0, r.jsxs)("div", {
                className: g.usernameRow,
                children: [
                    R(
                        x
                            ? (0, r.jsx)(s.Text, {
                                  variant: N,
                                  children: (0, r.jsx)(_.Z, {
                                      userName: b,
                                      displayNameStyles: D,
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
                                  variant: N,
                                  children: b,
                              }),
                    ),
                    null != w &&
                        (0, r.jsx)(u.Z, {
                            type: w,
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
                    [g.pronouns]: P,
                    [g.bot]: null != w,
                }),
                children: [
                    !t.isProvisional &&
                        R(
                            (0, r.jsx)(l.Z, {
                                user: t,
                                usernameIcon: i,
                                forceUsername: !0,
                                forcePomelo: S,
                                className: a()(g.userTag, T),
                                usernameClass: g.userTagUsername,
                                discriminatorClass: g.userTagDiscriminator,
                                hideBotTag: !0,
                            }),
                        ),
                    P &&
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
                                        color: "header-primary",
                                        children: v,
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(p.ZP, {
                        userId: t.id,
                        onClose: C,
                        containerClassName: g.guildTagContainer,
                        className: g.guildTag,
                    }),
                    E,
                ],
            }),
        ],
    });
}

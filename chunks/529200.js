n.d(l, { A: () => T }), n(321073);
var s = n(627968),
    a = n(64700),
    i = n(503698),
    t = n.n(i),
    r = n(534514),
    c = n(849516),
    d = n(97808),
    u = n(778712),
    o = n(939249),
    m = n(834730),
    p = n(571694),
    x = n(47167),
    h = n(713654),
    N = n(235986),
    v = n(137177),
    j = n(548118),
    g = n(776231),
    I = n(885386),
    C = n(486020),
    A = n(821589),
    y = n(375708),
    f = n(306571);
let k = (e) => {
        let { text: l, extra: n } = e;
        return (0, s.jsxs)(r.D, { variant: "heading-md/semibold", className: f.header, children: [l, n] });
    },
    E = (e) => {
        let { resolving: l, children: n } = e;
        return (0, s.jsx)("div", {
            className: f.content,
            children: l
                ? (0, s.jsxs)("div", {
                      className: f.resolvingWrapper,
                      children: [
                          (0, s.jsx)("div", {
                              className: f.resolving,
                              children: (0, s.jsx)("div", { className: f.resolvingBackground }),
                          }),
                          (0, s.jsx)("div", {
                              className: f.resolvingFakeButton,
                              children: (0, s.jsx)("div", { className: f.resolvingBackground }),
                          }),
                      ],
                  })
                : n,
        });
    },
    _ = (e) => {
        let { application: l, guild: n, channel: a, onClick: i, expired: r = !1, user: o, className: m } = e,
            h = (0, x.Ay)(a) ?? "",
            N = I.kt.useSetting();
        if (r)
            return (0, s.jsx)("div", {
                className: f.guildIconExpired,
                children: (0, s.jsx)(c.u, { size: "custom", width: 26, height: 26, color: "currentColor" }),
            });
        let g = null == n || null != n.icon,
            C = t()((0, A.t)(f, "guildIcon", g ? "Image" : "", null != i ? "Joined" : ""), m);
        return null != l
            ? (0, s.jsx)(v.A, { game: l, onClick: i, size: f.applicationIcon, className: C })
            : null != n
              ? (0, s.jsx)(j.Ay, { onClick: i, active: !0, guild: n, className: C, animate: N })
              : null != a
                ? (0, s.jsx)(d.eu, { onClick: i, src: (0, p.Y)(a), size: u._3.SIZE_56, className: C, "aria-label": h })
                : null != o
                  ? (0, s.jsx)(d.eu, {
                        onClick: i,
                        src: o.getAvatarURL(null, 56),
                        size: u._3.SIZE_56,
                        className: C,
                        "aria-label": h,
                    })
                  : null;
    },
    S = (e) => {
        let { title: l, onClick: n, expired: a, children: i } = e,
            t = (0, s.jsx)(r.D, {
                variant: "heading-md/semibold",
                className: (0, A.t)(f, "inviteDestination", a ? "Expired" : null != n ? "Joined" : ""),
                children: l,
            });
        return (0, s.jsxs)(N.A, {
            className: f.guildInfo,
            direction: N.A.Direction.VERTICAL,
            justify: N.A.Justify.CENTER,
            children: [
                null == n ? t : (0, s.jsx)(o.D, { onClick: n, children: t }),
                (0, s.jsx)(m.E, { tag: "strong", className: f.guildDetail, variant: "text-sm/normal", children: i }),
            ],
        });
    },
    G = (e) => {
        let { membersOnline: l, members: n } = e,
            a = [];
        return (
            null != l &&
                l > 0 &&
                a.push(
                    (0, s.jsxs)(
                        "div",
                        {
                            className: f.statusWrapper,
                            children: [
                                (0, s.jsx)("i", { className: f.statusOnline }),
                                (0, s.jsx)("span", {
                                    className: f.count,
                                    children: y.intl.format(y.t["LC+S+m"], { membersOnline: l }),
                                }),
                            ],
                        },
                        "onlineCount",
                    ),
                ),
            null != n &&
                a.push(
                    (0, s.jsxs)(
                        "div",
                        {
                            className: f.statusWrapper,
                            children: [
                                (0, s.jsx)("i", { className: f.statusOffline }),
                                (0, s.jsx)("span", {
                                    className: f.count,
                                    children: y.intl.format(y.t.zRl6XR, { count: n }),
                                }),
                            ],
                        },
                        "memberCount",
                    ),
                ),
            (0, s.jsx)("div", { className: f.statusCounts, children: a })
        );
    },
    b = (e) => {
        let { channel: l, guild: n } = e,
            a = (0, x.Ay)(l),
            i = (0, h.gU)(l, n);
        return null == l || null == i
            ? null
            : (0, s.jsxs)("div", {
                  className: f.channel,
                  children: [
                      (0, s.jsx)(i, {
                          className: f.channelIcon,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                      }),
                      (0, s.jsx)("span", { className: f.channelName, children: a }),
                  ],
              });
    },
    B = (e) => {
        let { children: l, className: n, containerRef: a } = e;
        return (0, s.jsx)("div", { ref: a, className: t()(f.wrapper, n), children: l });
    },
    D = (e) => {
        let { guild: l } = e,
            [n, i] = a.useState(!1),
            r = C.Ay.getGuildSplashURL({ id: l.id, splash: l.splash, size: 400 * (0, g.mZ)() });
        return null == r
            ? null
            : (0, s.jsx)("div", {
                  className: f.inviteSplash,
                  children: (0, s.jsx)("img", {
                      src: r,
                      alt: "",
                      className: t()(f.inviteSplashImage, { [f.inviteSplashImageLoaded]: n }),
                      onLoad: () => i(!0),
                  }),
              });
    },
    P = (e) => {
        let { guild: l, ref: n } = e;
        return (0, s.jsx)("div", {
            className: f.guildNameWrapper,
            ref: n,
            children: (0, s.jsx)("span", { className: f.guildName, children: l.name }),
        });
    },
    R = (e) => {
        let { guildTemplate: l } = e;
        return (0, s.jsx)("div", {
            className: f.guildNameWrapper,
            children: (0, s.jsx)("span", { className: f.guildName, children: l.serializedSourceGuild.name }),
        });
    };
(B.Header = k),
    (B.Body = E),
    (B.Icon = _),
    (B.Info = S),
    (B.Data = G),
    (B.Channel = b),
    (B.GuildSplash = D),
    (B.GuildName = P),
    (B.GuildTemplateName = R),
    (k.displayName = "InviteButton.Header"),
    (E.displayName = "InviteButton.Body"),
    (_.displayName = "InviteButton.Icon"),
    (S.displayName = "InviteButton.Info"),
    (G.displayName = "InviteButton.Data"),
    (b.displayName = "InviteButton.Channel"),
    (D.displayName = "InviteButton.GuildSplash"),
    (P.displayName = "InviteButton.GuildName"),
    (R.displayName = "InviteButton.GuildTemplateName");
let T = B;

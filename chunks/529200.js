t.d(l, { A: () => G }), t(321073);
var n = t(627968),
    a = t(64700),
    s = t(503698),
    i = t.n(s),
    r = t(534514),
    c = t(849516),
    u = t(97808),
    o = t(778712),
    d = t(939249),
    m = t(834730),
    h = t(571694),
    N = t(47167),
    x = t(713654),
    g = t(235986),
    v = t(137177),
    p = t(548118),
    f = t(776231),
    j = t(253932),
    E = t(486020),
    A = t(821589),
    I = t(985018),
    C = t(306571);
let L = (e) => {
        let { text: l, extra: t } = e;
        return (0, n.jsxs)(r.D, { variant: "heading-md/semibold", className: C.header, children: [l, t] });
    },
    y = (e) => {
        let { resolving: l, children: t } = e;
        return (0, n.jsx)("div", {
            className: C.content,
            children: l
                ? (0, n.jsxs)("div", {
                      className: C.resolvingWrapper,
                      children: [
                          (0, n.jsx)("div", {
                              className: C.resolving,
                              children: (0, n.jsx)("div", { className: C.resolvingBackground }),
                          }),
                          (0, n.jsx)("div", {
                              className: C.resolvingFakeButton,
                              children: (0, n.jsx)("div", { className: C.resolvingBackground }),
                          }),
                      ],
                  })
                : t,
        });
    },
    T = (e) => {
        let { application: l, guild: t, channel: a, onClick: s, expired: r = !1, user: d, className: m } = e,
            x = (0, N.Ay)(a) ?? "",
            g = j.kt.useSetting();
        if (r)
            return (0, n.jsx)("div", {
                className: C.guildIconExpired,
                children: (0, n.jsx)(c.u, { size: "custom", width: 26, height: 26, color: "currentColor" }),
            });
        let f = null == t || null != t.icon,
            E = i()((0, A.t)(C, "guildIcon", f ? "Image" : "", null != s ? "Joined" : ""), m);
        return null != l
            ? (0, n.jsx)(v.A, { game: l, onClick: s, size: C.applicationIcon, className: E })
            : null != t
              ? (0, n.jsx)(p.Ay, { onClick: s, active: !0, guild: t, className: E, animate: g })
              : null != a
                ? (0, n.jsx)(u.eu, { onClick: s, src: (0, h.Y)(a), size: o._3.SIZE_56, className: E, "aria-label": x })
                : null != d
                  ? (0, n.jsx)(u.eu, {
                        onClick: s,
                        src: d.getAvatarURL(null, 56),
                        size: o._3.SIZE_56,
                        className: E,
                        "aria-label": x,
                    })
                  : null;
    },
    _ = (e) => {
        let { title: l, onClick: t, expired: a, children: s } = e,
            i = (0, n.jsx)(r.D, {
                variant: "heading-md/semibold",
                className: (0, A.t)(C, "inviteDestination", a ? "Expired" : null != t ? "Joined" : ""),
                children: l,
            });
        return (0, n.jsxs)(g.A, {
            className: C.guildInfo,
            direction: g.A.Direction.VERTICAL,
            justify: g.A.Justify.CENTER,
            children: [
                null == t ? i : (0, n.jsx)(d.D, { onClick: t, children: i }),
                (0, n.jsx)(m.E, { tag: "strong", className: C.guildDetail, variant: "text-sm/normal", children: s }),
            ],
        });
    },
    S = (e) => {
        let { membersOnline: l, members: t } = e,
            a = [];
        return (
            null != l &&
                l > 0 &&
                a.push(
                    (0, n.jsxs)(
                        "div",
                        {
                            className: C.statusWrapper,
                            children: [
                                (0, n.jsx)("i", { className: C.statusOnline }),
                                (0, n.jsx)("span", {
                                    className: C.count,
                                    children: I.intl.format(I.t["LC+S+m"], { membersOnline: l }),
                                }),
                            ],
                        },
                        "onlineCount",
                    ),
                ),
            null != t &&
                a.push(
                    (0, n.jsxs)(
                        "div",
                        {
                            className: C.statusWrapper,
                            children: [
                                (0, n.jsx)("i", { className: C.statusOffline }),
                                (0, n.jsx)("span", {
                                    className: C.count,
                                    children: I.intl.format(I.t.zRl6XR, { count: t }),
                                }),
                            ],
                        },
                        "memberCount",
                    ),
                ),
            (0, n.jsx)("div", { className: C.statusCounts, children: a })
        );
    },
    k = (e) => {
        let { channel: l, guild: t } = e,
            a = (0, N.Ay)(l),
            s = (0, x.gU)(l, t);
        return null == l || null == s
            ? null
            : (0, n.jsxs)("div", {
                  className: C.channel,
                  children: [
                      (0, n.jsx)(s, {
                          className: C.channelIcon,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                      }),
                      (0, n.jsx)("span", { className: C.channelName, children: a }),
                  ],
              });
    },
    B = (e) => {
        let { children: l, className: t, containerRef: a } = e;
        return (0, n.jsx)("div", { ref: a, className: i()(C.wrapper, t), children: l });
    },
    b = (e) => {
        let { guild: l } = e,
            [t, s] = a.useState(!1),
            r = E.Ay.getGuildSplashURL({ id: l.id, splash: l.splash, size: 400 * (0, f.mZ)() });
        return null == r
            ? null
            : (0, n.jsx)("div", {
                  className: C.inviteSplash,
                  children: (0, n.jsx)("img", {
                      src: r,
                      alt: "",
                      className: i()(C.inviteSplashImage, { [C.inviteSplashImageLoaded]: t }),
                      onLoad: () => s(!0),
                  }),
              });
    },
    w = (e) => {
        let { guild: l, ref: t } = e;
        return (0, n.jsx)("div", {
            className: C.guildNameWrapper,
            ref: t,
            children: (0, n.jsx)("span", { className: C.guildName, children: l.name }),
        });
    },
    D = (e) => {
        let { guildTemplate: l } = e;
        return (0, n.jsx)("div", {
            className: C.guildNameWrapper,
            children: (0, n.jsx)("span", { className: C.guildName, children: l.serializedSourceGuild.name }),
        });
    };
(B.Header = L),
    (B.Body = y),
    (B.Icon = T),
    (B.Info = _),
    (B.Data = S),
    (B.Channel = k),
    (B.GuildSplash = b),
    (B.GuildName = w),
    (B.GuildTemplateName = D),
    (L.displayName = "InviteButton.Header"),
    (y.displayName = "InviteButton.Body"),
    (T.displayName = "InviteButton.Icon"),
    (_.displayName = "InviteButton.Info"),
    (S.displayName = "InviteButton.Data"),
    (k.displayName = "InviteButton.Channel"),
    (b.displayName = "InviteButton.GuildSplash"),
    (w.displayName = "InviteButton.GuildName"),
    (D.displayName = "InviteButton.GuildTemplateName");
let G = B;

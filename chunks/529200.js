l.d(t, { A: () => R }), l(321073);
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(397927),
    c = l(571694),
    u = l(47167),
    d = l(713654),
    o = l(235986),
    m = l(769015),
    x = l(263063),
    v = l(776231),
    h = l(253932),
    N = l(486020),
    g = l(821589),
    p = l(985018),
    j = l(457636);
let A = (e) => {
        let { text: t, extra: l } = e;
        return (0, n.jsxs)(r.Heading, { variant: "heading-md/semibold", className: j.header, children: [t, l] });
    },
    E = (e) => {
        let { resolving: t, children: l } = e;
        return (0, n.jsx)("div", {
            className: j.content,
            children: t
                ? (0, n.jsxs)("div", {
                      className: j.resolvingWrapper,
                      children: [
                          (0, n.jsx)("div", {
                              className: j.resolving,
                              children: (0, n.jsx)("div", { className: j.resolvingBackground }),
                          }),
                          (0, n.jsx)("div", {
                              className: j.resolvingFakeButton,
                              children: (0, n.jsx)("div", { className: j.resolvingBackground }),
                          }),
                      ],
                  })
                : l,
        });
    },
    I = (e) => {
        let { application: t, guild: l, channel: s, onClick: i, expired: d = !1, user: o, className: v } = e,
            N = (0, u.Ay)(s) ?? "",
            p = h.kt.useSetting();
        if (d)
            return (0, n.jsx)("div", {
                className: j.guildIconExpired,
                children: (0, n.jsx)(r.u6c, { size: "custom", width: 26, height: 26, color: "currentColor" }),
            });
        let A = null == l || null != l.icon,
            E = a()((0, g.t)(j, "guildIcon", A ? "Image" : "", null != i ? "Joined" : ""), v);
        return null != t
            ? (0, n.jsx)(m.A, { game: t, onClick: i, size: j.applicationIcon, className: E })
            : null != l
              ? (0, n.jsx)(x.Ay, { onClick: i, active: !0, guild: l, className: E, animate: p })
              : null != s
                ? (0, n.jsx)(r.euF, {
                      onClick: i,
                      src: (0, c.Y)(s),
                      size: r._3J.SIZE_56,
                      className: E,
                      "aria-label": N,
                  })
                : null != o
                  ? (0, n.jsx)(r.euF, {
                        onClick: i,
                        src: o.getAvatarURL(null, 56),
                        size: r._3J.SIZE_56,
                        className: E,
                        "aria-label": N,
                    })
                  : null;
    },
    C = (e) => {
        let { title: t, onClick: l, expired: s, children: i } = e,
            a = (0, n.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                className: (0, g.t)(j, "inviteDestination", s ? "Expired" : null != l ? "Joined" : ""),
                children: t,
            });
        return (0, n.jsxs)(o.A, {
            className: j.guildInfo,
            direction: o.A.Direction.VERTICAL,
            justify: o.A.Justify.CENTER,
            children: [
                null == l ? a : (0, n.jsx)(r.DUT, { onClick: l, children: a }),
                (0, n.jsx)(r.Text, { tag: "strong", className: j.guildDetail, variant: "text-sm/normal", children: i }),
            ],
        });
    },
    f = (e) => {
        let { membersOnline: t, members: l } = e,
            s = [];
        return (
            null != t &&
                t > 0 &&
                s.push(
                    (0, n.jsxs)(
                        "div",
                        {
                            className: j.statusWrapper,
                            children: [
                                (0, n.jsx)("i", { className: j.statusOnline }),
                                (0, n.jsx)("span", {
                                    className: j.count,
                                    children: p.intl.format(p.t["LC+S+m"], { membersOnline: t }),
                                }),
                            ],
                        },
                        "onlineCount",
                    ),
                ),
            null != l &&
                s.push(
                    (0, n.jsxs)(
                        "div",
                        {
                            className: j.statusWrapper,
                            children: [
                                (0, n.jsx)("i", { className: j.statusOffline }),
                                (0, n.jsx)("span", {
                                    className: j.count,
                                    children: p.intl.format(p.t.zRl6XR, { count: l }),
                                }),
                            ],
                        },
                        "memberCount",
                    ),
                ),
            (0, n.jsx)("div", { className: j.statusCounts, children: s })
        );
    },
    T = (e) => {
        let { channel: t, guild: l } = e,
            s = (0, u.Ay)(t),
            i = (0, d.gU)(t, l);
        return null == t || null == i
            ? null
            : (0, n.jsxs)("div", {
                  className: j.channel,
                  children: [
                      (0, n.jsx)(i, {
                          className: j.channelIcon,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                      }),
                      (0, n.jsx)("span", { className: j.channelName, children: s }),
                  ],
              });
    },
    y = (e) => {
        let { children: t, className: l, containerRef: s } = e;
        return (0, n.jsx)("div", { ref: s, className: a()(j.wrapper, l), children: t });
    },
    S = (e) => {
        let { guild: t } = e,
            [l, i] = s.useState(!1),
            r = N.Ay.getGuildSplashURL({ id: t.id, splash: t.splash, size: 400 * (0, v.mZ)() });
        return null == r
            ? null
            : (0, n.jsx)("div", {
                  className: j.inviteSplash,
                  children: (0, n.jsx)("img", {
                      src: r,
                      alt: "",
                      className: a()(j.inviteSplashImage, { [j.inviteSplashImageLoaded]: l }),
                      onLoad: () => i(!0),
                  }),
              });
    },
    _ = (e) => {
        let { guild: t, ref: l } = e;
        return (0, n.jsx)("div", {
            className: j.guildNameWrapper,
            ref: l,
            children: (0, n.jsx)("span", { className: j.guildName, children: t.name }),
        });
    },
    k = (e) => {
        let { guildTemplate: t } = e;
        return (0, n.jsx)("div", {
            className: j.guildNameWrapper,
            children: (0, n.jsx)("span", { className: j.guildName, children: t.serializedSourceGuild.name }),
        });
    };
(y.Header = A),
    (y.Body = E),
    (y.Icon = I),
    (y.Info = C),
    (y.Data = f),
    (y.Channel = T),
    (y.GuildSplash = S),
    (y.GuildName = _),
    (y.GuildTemplateName = k),
    (A.displayName = "InviteButton.Header"),
    (E.displayName = "InviteButton.Body"),
    (I.displayName = "InviteButton.Icon"),
    (C.displayName = "InviteButton.Info"),
    (f.displayName = "InviteButton.Data"),
    (T.displayName = "InviteButton.Channel"),
    (S.displayName = "InviteButton.GuildSplash"),
    (_.displayName = "InviteButton.GuildName"),
    (k.displayName = "InviteButton.GuildTemplateName");
let R = y;

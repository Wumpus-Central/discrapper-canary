t.d(l, { A: () => P }), t(321073);
var n = t(627968),
    s = t(64700),
    i = t(503698),
    a = t.n(i),
    r = t(534514),
    c = t(849516),
    d = t(97808),
    u = t(778712),
    o = t(939249),
    m = t(834730),
    x = t(571694),
    v = t(47167),
    h = t(713654),
    N = t(235986),
    g = t(769015),
    p = t(263063),
    j = t(776231),
    A = t(253932),
    E = t(486020),
    I = t(821589),
    f = t(985018),
    C = t(306571);
let T = (e) => {
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
    S = (e) => {
        let { application: l, guild: t, channel: s, onClick: i, expired: r = !1, user: o, className: m } = e,
            h = (0, v.Ay)(s) ?? "",
            N = A.kt.useSetting();
        if (r)
            return (0, n.jsx)("div", {
                className: C.guildIconExpired,
                children: (0, n.jsx)(c.u, { size: "custom", width: 26, height: 26, color: "currentColor" }),
            });
        let j = null == t || null != t.icon,
            E = a()((0, I.t)(C, "guildIcon", j ? "Image" : "", null != i ? "Joined" : ""), m);
        return null != l
            ? (0, n.jsx)(g.A, { game: l, onClick: i, size: C.applicationIcon, className: E })
            : null != t
              ? (0, n.jsx)(p.Ay, { onClick: i, active: !0, guild: t, className: E, animate: N })
              : null != s
                ? (0, n.jsx)(d.eu, { onClick: i, src: (0, x.Y)(s), size: u._3.SIZE_56, className: E, "aria-label": h })
                : null != o
                  ? (0, n.jsx)(d.eu, {
                        onClick: i,
                        src: o.getAvatarURL(null, 56),
                        size: u._3.SIZE_56,
                        className: E,
                        "aria-label": h,
                    })
                  : null;
    },
    _ = (e) => {
        let { title: l, onClick: t, expired: s, children: i } = e,
            a = (0, n.jsx)(r.D, {
                variant: "heading-md/semibold",
                className: (0, I.t)(C, "inviteDestination", s ? "Expired" : null != t ? "Joined" : ""),
                children: l,
            });
        return (0, n.jsxs)(N.A, {
            className: C.guildInfo,
            direction: N.A.Direction.VERTICAL,
            justify: N.A.Justify.CENTER,
            children: [
                null == t ? a : (0, n.jsx)(o.D, { onClick: t, children: a }),
                (0, n.jsx)(m.E, { tag: "strong", className: C.guildDetail, variant: "text-sm/normal", children: i }),
            ],
        });
    },
    k = (e) => {
        let { membersOnline: l, members: t } = e,
            s = [];
        return (
            null != l &&
                l > 0 &&
                s.push(
                    (0, n.jsxs)(
                        "div",
                        {
                            className: C.statusWrapper,
                            children: [
                                (0, n.jsx)("i", { className: C.statusOnline }),
                                (0, n.jsx)("span", {
                                    className: C.count,
                                    children: f.intl.format(f.t["LC+S+m"], { membersOnline: l }),
                                }),
                            ],
                        },
                        "onlineCount",
                    ),
                ),
            null != t &&
                s.push(
                    (0, n.jsxs)(
                        "div",
                        {
                            className: C.statusWrapper,
                            children: [
                                (0, n.jsx)("i", { className: C.statusOffline }),
                                (0, n.jsx)("span", {
                                    className: C.count,
                                    children: f.intl.format(f.t.zRl6XR, { count: t }),
                                }),
                            ],
                        },
                        "memberCount",
                    ),
                ),
            (0, n.jsx)("div", { className: C.statusCounts, children: s })
        );
    },
    w = (e) => {
        let { channel: l, guild: t } = e,
            s = (0, v.Ay)(l),
            i = (0, h.gU)(l, t);
        return null == l || null == i
            ? null
            : (0, n.jsxs)("div", {
                  className: C.channel,
                  children: [
                      (0, n.jsx)(i, {
                          className: C.channelIcon,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                      }),
                      (0, n.jsx)("span", { className: C.channelName, children: s }),
                  ],
              });
    },
    R = (e) => {
        let { children: l, className: t, containerRef: s } = e;
        return (0, n.jsx)("div", { ref: s, className: a()(C.wrapper, t), children: l });
    },
    D = (e) => {
        let { guild: l } = e,
            [t, i] = s.useState(!1),
            r = E.Ay.getGuildSplashURL({ id: l.id, splash: l.splash, size: 400 * (0, j.mZ)() });
        return null == r
            ? null
            : (0, n.jsx)("div", {
                  className: C.inviteSplash,
                  children: (0, n.jsx)("img", {
                      src: r,
                      alt: "",
                      className: a()(C.inviteSplashImage, { [C.inviteSplashImageLoaded]: t }),
                      onLoad: () => i(!0),
                  }),
              });
    },
    L = (e) => {
        let { guild: l, ref: t } = e;
        return (0, n.jsx)("div", {
            className: C.guildNameWrapper,
            ref: t,
            children: (0, n.jsx)("span", { className: C.guildName, children: l.name }),
        });
    },
    b = (e) => {
        let { guildTemplate: l } = e;
        return (0, n.jsx)("div", {
            className: C.guildNameWrapper,
            children: (0, n.jsx)("span", { className: C.guildName, children: l.serializedSourceGuild.name }),
        });
    };
(R.Header = T),
    (R.Body = y),
    (R.Icon = S),
    (R.Info = _),
    (R.Data = k),
    (R.Channel = w),
    (R.GuildSplash = D),
    (R.GuildName = L),
    (R.GuildTemplateName = b),
    (T.displayName = "InviteButton.Header"),
    (y.displayName = "InviteButton.Body"),
    (S.displayName = "InviteButton.Icon"),
    (_.displayName = "InviteButton.Info"),
    (k.displayName = "InviteButton.Data"),
    (w.displayName = "InviteButton.Channel"),
    (D.displayName = "InviteButton.GuildSplash"),
    (L.displayName = "InviteButton.GuildName"),
    (b.displayName = "InviteButton.GuildTemplateName");
let P = R;

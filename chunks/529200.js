n.d(t, { A: () => w }), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(571694),
    c = n(47167),
    u = n(713654),
    d = n(235986),
    f = n(769015),
    p = n(263063),
    _ = n(776231),
    h = n(253932),
    m = n(486020),
    g = n(821589),
    E = n(985018),
    b = n(485366);
let y = (e) => {
        let { text: t, extra: n } = e;
        return (0, r.jsxs)(o.Heading, {
            variant: "heading-md/semibold",
            className: b.header,
            children: [t, n],
        });
    },
    O = (e) => {
        let { resolving: t, children: n } = e;
        return (0, r.jsx)("div", {
            className: b.content,
            children: t
                ? (0, r.jsxs)("div", {
                      className: b.resolvingWrapper,
                      children: [
                          (0, r.jsx)("div", {
                              className: b.resolving,
                              children: (0, r.jsx)("div", { className: b.resolvingBackground }),
                          }),
                          (0, r.jsx)("div", {
                              className: b.resolvingFakeButton,
                              children: (0, r.jsx)("div", { className: b.resolvingBackground }),
                          }),
                      ],
                  })
                : n,
        });
    },
    A = (e) => {
        var t;
        let { application: n, guild: i, channel: a, onClick: u, expired: d = !1, user: _, className: m } = e,
            E = null != (t = (0, c.Ay)(a)) ? t : "",
            y = h.kt.useSetting();
        if (d) return (0, r.jsx)("div", { className: b.guildIconExpired });
        let O = null == i || null != i.icon,
            A = s()((0, g.t)(b, "guildIcon", O ? "Image" : "", null != u ? "Joined" : ""), m);
        return null != n
            ? (0, r.jsx)(f.A, {
                  game: n,
                  onClick: u,
                  size: b.applicationIcon,
                  className: A,
              })
            : null != i
              ? (0, r.jsx)(p.A, {
                    onClick: u,
                    active: !0,
                    guild: i,
                    className: A,
                    animate: y,
                })
              : null != a
                ? (0, r.jsx)(o.euF, {
                      onClick: u,
                      src: (0, l.Y)(a),
                      size: o._3J.SIZE_56,
                      className: A,
                      "aria-label": E,
                  })
                : null != _
                  ? (0, r.jsx)(o.euF, {
                        onClick: u,
                        src: _.getAvatarURL(null, 56),
                        size: o._3J.SIZE_56,
                        className: A,
                        "aria-label": E,
                    })
                  : null;
    },
    v = (e) => {
        let { title: t, onClick: n, expired: i, children: a } = e,
            s = (0, r.jsx)(o.Heading, {
                variant: "heading-md/semibold",
                className: (0, g.t)(b, "inviteDestination", i ? "Expired" : null != n ? "Joined" : ""),
                children: t,
            });
        return (0, r.jsxs)(d.A, {
            className: b.guildInfo,
            direction: d.A.Direction.VERTICAL,
            justify: d.A.Justify.CENTER,
            children: [
                null == n
                    ? s
                    : (0, r.jsx)(o.DUT, {
                          onClick: n,
                          children: s,
                      }),
                (0, r.jsx)(o.Text, {
                    tag: "strong",
                    className: b.guildDetail,
                    variant: "text-sm/normal",
                    children: a,
                }),
            ],
        });
    },
    S = (e) => {
        let { membersOnline: t, members: n } = e,
            i = [];
        return (
            null != t &&
                t > 0 &&
                i.push(
                    (0, r.jsxs)(
                        "div",
                        {
                            className: b.statusWrapper,
                            children: [
                                (0, r.jsx)("i", { className: b.statusOnline }),
                                (0, r.jsx)("span", {
                                    className: b.count,
                                    children: E.intl.format(E.t["LC+S+m"], { membersOnline: t }),
                                }),
                            ],
                        },
                        "onlineCount",
                    ),
                ),
            null != n &&
                i.push(
                    (0, r.jsxs)(
                        "div",
                        {
                            className: b.statusWrapper,
                            children: [
                                (0, r.jsx)("i", { className: b.statusOffline }),
                                (0, r.jsx)("span", {
                                    className: b.count,
                                    children: E.intl.format(E.t.zRl6XR, { count: n }),
                                }),
                            ],
                        },
                        "memberCount",
                    ),
                ),
            (0, r.jsx)("div", {
                className: b.statusCounts,
                children: i,
            })
        );
    },
    I = (e) => {
        let { channel: t, guild: n } = e,
            i = (0, u.gU)(t, n);
        return null == t || null == i
            ? null
            : (0, r.jsxs)("div", {
                  className: b.channel,
                  children: [
                      (0, r.jsx)(i, {
                          className: b.channelIcon,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                      }),
                      (0, r.jsx)("span", {
                          className: b.channelName,
                          children: t.name,
                      }),
                  ],
              });
    },
    T = (e) => {
        let { children: t, className: n, containerRef: i } = e;
        return (0, r.jsx)("div", {
            ref: i,
            className: s()(b.wrapper, n),
            children: t,
        });
    },
    C = (e) => {
        let { guild: t } = e,
            [n, a] = i.useState(!1),
            o = m.Ay.getGuildSplashURL({
                id: t.id,
                splash: t.splash,
                size: 400 * (0, _.mZ)(),
            });
        return null == o
            ? null
            : (0, r.jsx)("div", {
                  className: b.inviteSplash,
                  children: (0, r.jsx)("img", {
                      src: o,
                      alt: "",
                      className: s()(b.inviteSplashImage, { [b.inviteSplashImageLoaded]: n }),
                      onLoad: () => a(!0),
                  }),
              });
    },
    N = (e) => {
        let { guild: t, ref: n } = e;
        return (0, r.jsx)("div", {
            className: b.guildNameWrapper,
            ref: n,
            children: (0, r.jsx)("span", {
                className: b.guildName,
                children: t.name,
            }),
        });
    },
    R = (e) => {
        let { guildTemplate: t } = e;
        return (0, r.jsx)("div", {
            className: b.guildNameWrapper,
            children: (0, r.jsx)("span", {
                className: b.guildName,
                children: t.serializedSourceGuild.name,
            }),
        });
    };
(T.Header = y),
    (T.Body = O),
    (T.Icon = A),
    (T.Info = v),
    (T.Data = S),
    (T.Channel = I),
    (T.GuildSplash = C),
    (T.GuildName = N),
    (T.GuildTemplateName = R),
    (y.displayName = "InviteButton.Header"),
    (O.displayName = "InviteButton.Body"),
    (A.displayName = "InviteButton.Icon"),
    (v.displayName = "InviteButton.Info"),
    (S.displayName = "InviteButton.Data"),
    (I.displayName = "InviteButton.Channel"),
    (C.displayName = "InviteButton.GuildSplash"),
    (N.displayName = "InviteButton.GuildName"),
    (R.displayName = "InviteButton.GuildTemplateName");
let w = T;

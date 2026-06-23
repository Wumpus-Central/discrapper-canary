l.d(n, { A: () => T }), l(321073);
var i = l(627968),
    s = l(64700),
    t = l(503698),
    a = l.n(t),
    r = l(534514),
    c = l(849516),
    u = l(97808),
    d = l(778712),
    o = l(939249),
    m = l(834730),
    h = l(571694),
    p = l(47167),
    x = l(713654),
    v = l(235986),
    N = l(769015),
    j = l(548118),
    g = l(776231),
    I = l(885386),
    f = l(486020),
    C = l(821589),
    A = l(375708),
    y = l(306571);
function k(e) {
    let { text: n, extra: l } = e;
    return (0, i.jsxs)(r.D, { variant: "heading-md/semibold", className: y.header, children: [n, l] });
}
function E(e) {
    let { resolving: n, children: l } = e;
    return (0, i.jsx)("div", {
        className: y.content,
        children: n
            ? (0, i.jsxs)("div", {
                  className: y.resolvingWrapper,
                  children: [
                      (0, i.jsx)("div", {
                          className: y.resolving,
                          children: (0, i.jsx)("div", { className: y.resolvingBackground }),
                      }),
                      (0, i.jsx)("div", {
                          className: y.resolvingFakeButton,
                          children: (0, i.jsx)("div", { className: y.resolvingBackground }),
                      }),
                  ],
              })
            : l,
    });
}
function _(e) {
    let { application: n, guild: l, channel: s, onClick: t, expired: r = !1, user: o, className: m } = e,
        x = (0, p.Ay)(s) ?? "",
        v = I.kt.useSetting();
    if (r)
        return (0, i.jsx)("div", {
            className: y.guildIconExpired,
            children: (0, i.jsx)(c.u, { size: "custom", width: 26, height: 26, color: "currentColor" }),
        });
    let g = null == l || null != l.icon,
        f = a()((0, C.t)(y, "guildIcon", g ? "Image" : "", null != t ? "Joined" : ""), m);
    return null != n
        ? (0, i.jsx)(N.A, { game: n, onClick: t, size: y.applicationIcon, className: f })
        : null != l
          ? (0, i.jsx)(j.Ay, { onClick: t, active: !0, guild: l, className: f, animate: v })
          : null != s
            ? (0, i.jsx)(u.eu, { onClick: t, src: (0, h.Y)(s), size: d._3.SIZE_56, className: f, "aria-label": x })
            : null != o
              ? (0, i.jsx)(u.eu, {
                    onClick: t,
                    src: o.getAvatarURL(null, 56),
                    size: d._3.SIZE_56,
                    className: f,
                    "aria-label": x,
                })
              : null;
}
function S(e) {
    let { title: n, onClick: l, expired: s, children: t, titleVariant: c = "heading-md/semibold" } = e,
        u = (0, i.jsx)(r.D, {
            variant: c,
            className: a()((0, C.t)(y, "inviteDestination", s ? "Expired" : null != l ? "Joined" : ""), {
                [y.inviteDestinationMedium]: "heading-md/medium" === c,
            }),
            children: n,
        });
    return (0, i.jsxs)(v.A, {
        className: y.guildInfo,
        direction: v.A.Direction.VERTICAL,
        justify: v.A.Justify.CENTER,
        children: [
            null == l ? u : (0, i.jsx)(o.D, { onClick: l, children: u }),
            (0, i.jsx)(m.E, { tag: "strong", className: y.guildDetail, variant: "text-sm/normal", children: t }),
        ],
    });
}
function G(e) {
    let { membersOnline: n, members: l } = e,
        s = [];
    return (
        null != n &&
            n > 0 &&
            s.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: y.statusWrapper,
                        children: [
                            (0, i.jsx)("i", { className: y.statusOnline }),
                            (0, i.jsx)("span", {
                                className: y.count,
                                children: A.intl.format(A.t["LC+S+m"], { membersOnline: n }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != l &&
            s.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: y.statusWrapper,
                        children: [
                            (0, i.jsx)("i", { className: y.statusOffline }),
                            (0, i.jsx)("span", {
                                className: y.count,
                                children: A.intl.format(A.t.zRl6XR, { count: l }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, i.jsx)("div", { className: y.statusCounts, children: s })
    );
}
let b = (e) => {
    let { channel: n, guild: l } = e,
        s = (0, p.Ay)(n),
        t = (0, x.gU)(n, l);
    return null == n || null == t
        ? null
        : (0, i.jsxs)("div", {
              className: y.channel,
              children: [
                  (0, i.jsx)(t, {
                      className: y.channelIcon,
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                  }),
                  (0, i.jsx)("span", { className: y.channelName, children: s }),
              ],
          });
};
function B(e) {
    let { children: n, className: l, containerRef: s } = e;
    return (0, i.jsx)("div", { ref: s, className: a()(y.wrapper, l), children: n });
}
function D(e) {
    let { guild: n } = e,
        [l, t] = s.useState(!1),
        r = f.Ay.getGuildSplashURL({ id: n.id, splash: n.splash, size: 400 * (0, g.mZ)() });
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: y.inviteSplash,
              children: (0, i.jsx)("img", {
                  src: r,
                  alt: "",
                  className: a()(y.inviteSplashImage, { [y.inviteSplashImageLoaded]: l }),
                  onLoad: () => t(!0),
              }),
          });
}
function P(e) {
    let { guild: n, ref: l } = e;
    return (0, i.jsx)("div", {
        className: y.guildNameWrapper,
        ref: l,
        children: (0, i.jsx)("span", { className: y.guildName, children: n.name }),
    });
}
function R(e) {
    let { guildTemplate: n } = e;
    return (0, i.jsx)("div", {
        className: y.guildNameWrapper,
        children: (0, i.jsx)("span", { className: y.guildName, children: n.serializedSourceGuild.name }),
    });
}
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

l(321073);
var i = l(477900),
    a = l(582128),
    s = l(503698),
    t = l.n(s),
    r = l(534514),
    c = l(778712),
    u = l(849516),
    d = l(97808),
    o = l(939249),
    m = l(834730),
    h = l(571694),
    p = l(47167),
    v = l(713654),
    N = l(235986),
    x = l(769015),
    j = l(682163),
    g = l(776231),
    I = l(253932),
    C = l(486020),
    f = l(821589),
    y = l(792996),
    A = l(548648);
function k(e) {
    let { text: n, extra: l } = e;
    return (0, i.jsxs)(r.D, { variant: "heading-sm/semibold", className: A.header, children: [n, l] });
}
function E(e) {
    let { resolving: n, children: l } = e;
    return (0, i.jsx)("div", {
        className: A.content,
        children: n
            ? (0, i.jsxs)("div", {
                  className: A.resolvingWrapper,
                  children: [
                      (0, i.jsx)("div", {
                          className: A.resolving,
                          children: (0, i.jsx)("div", { className: A.resolvingBackground }),
                      }),
                      (0, i.jsx)("div", {
                          className: A.resolvingFakeButton,
                          children: (0, i.jsx)("div", { className: A.resolvingBackground }),
                      }),
                  ],
              })
            : l,
    });
}
function _(e) {
    let {
            application: n,
            guild: l,
            channel: a,
            onClick: s,
            expired: r = !1,
            user: o,
            className: m,
            channelIconSize: v = c._3.SIZE_56,
        } = e,
        N = (0, p.Ay)(a) ?? "",
        g = I.kt.useSetting();
    if (r)
        return (0, i.jsx)("div", {
            className: A.guildIconExpired,
            children: (0, i.jsx)(u.EnvelopeIcon, { size: "custom", width: 26, height: 26, color: "currentColor" }),
        });
    let C = null == l || null != l.icon,
        y = t()((0, f.t)(A, "guildIcon", C ? "Image" : "", null != s ? "Joined" : ""), m);
    return null != n
        ? (0, i.jsx)(x.A, { game: n, onClick: s, size: A.applicationIcon, className: y })
        : null != l
          ? (0, i.jsx)(j.Ay, { onClick: s, active: !0, guild: l, className: y, animate: g })
          : null != a
            ? (0, i.jsx)(d.eu, { onClick: s, src: (0, h.Y)(a, (0, c.FT)(v)), size: v, className: y, "aria-label": N })
            : null != o
              ? (0, i.jsx)(d.eu, {
                    onClick: s,
                    src: o.getAvatarURL(null, (0, c.FT)(c._3.SIZE_56)),
                    size: c._3.SIZE_56,
                    className: y,
                    "aria-label": N,
                })
              : null;
}
function b(e) {
    let {
            title: n,
            titleId: l,
            onClick: a,
            expired: s,
            children: c,
            titleVariant: u = "heading-sm/semibold",
            detailVariant: d = "body-sm/normal",
        } = e,
        h = (0, i.jsx)(r.D, {
            id: l,
            variant: u,
            className: t()((0, f.t)(A, "inviteDestination", s ? "Expired" : null != a ? "Joined" : ""), {
                [A.inviteDestinationMedium]: "heading-sm/medium" === u,
            }),
            children: n,
        });
    return (0, i.jsxs)(N.A, {
        className: A.guildInfo,
        direction: N.A.Direction.VERTICAL,
        justify: N.A.Justify.CENTER,
        children: [
            null == a ? h : (0, i.jsx)(o.D, { onClick: a, children: h }),
            (0, i.jsx)(m.E, { tag: "strong", className: A.guildDetail, variant: d, children: c }),
        ],
    });
}
function S(e) {
    let { membersOnline: n, members: l } = e,
        a = [];
    return (
        null != n &&
            n > 0 &&
            a.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: A.statusWrapper,
                        children: [
                            (0, i.jsx)("i", { className: A.statusOnline }),
                            (0, i.jsx)("span", {
                                className: A.count,
                                children: y.intl.format(y.t["LC+S+m"], { membersOnline: n }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != l &&
            a.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: A.statusWrapper,
                        children: [
                            (0, i.jsx)("i", { className: A.statusOffline }),
                            (0, i.jsx)("span", {
                                className: A.count,
                                children: y.intl.format(y.t.zRl6XR, { count: l }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, i.jsx)("div", { className: A.statusCounts, children: a })
    );
}
let G = (e) => {
    let { channel: n, guild: l } = e,
        a = (0, p.Ay)(n),
        s = (0, v.gU)(n, l);
    return null == n || null == s
        ? null
        : (0, i.jsxs)("div", {
              className: A.channel,
              children: [
                  (0, i.jsx)(s, {
                      className: A.channelIcon,
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                  }),
                  (0, i.jsx)("span", { className: A.channelName, children: a }),
              ],
          });
};
function B(e) {
    let { children: n, className: l, containerRef: a, role: s, "aria-labelledby": r } = e;
    return (0, i.jsx)("div", { ref: a, className: t()(A.wrapper, l), role: s, "aria-labelledby": r, children: n });
}
function D(e) {
    let { guild: n } = e,
        [l, s] = a.useState(!1),
        r = C.Ay.getGuildSplashURL({ id: n.id, splash: n.splash, size: 400 * (0, g.mZ)() });
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: A.inviteSplash,
              children: (0, i.jsx)("img", {
                  src: r,
                  alt: "",
                  className: t()(A.inviteSplashImage, { [A.inviteSplashImageLoaded]: l }),
                  onLoad: () => s(!0),
              }),
          });
}
function P(e) {
    let { guild: n, ref: l } = e;
    return (0, i.jsx)("div", {
        className: A.guildNameWrapper,
        ref: l,
        children: (0, i.jsx)("span", { className: A.guildName, children: n.name }),
    });
}
function T(e) {
    let { guildTemplate: n } = e;
    return (0, i.jsx)("div", {
        className: A.guildNameWrapper,
        children: (0, i.jsx)("span", { className: A.guildName, children: n.serializedSourceGuild.name }),
    });
}
((B.Header = k),
    (B.Body = E),
    (B.Icon = _),
    (B.Info = b),
    (B.Data = S),
    (B.Channel = G),
    (B.GuildSplash = D),
    (B.GuildName = P),
    (B.GuildTemplateName = T),
    (k.displayName = "InviteButton.Header"),
    (E.displayName = "InviteButton.Body"),
    (_.displayName = "InviteButton.Icon"),
    (b.displayName = "InviteButton.Info"),
    (S.displayName = "InviteButton.Data"),
    (G.displayName = "InviteButton.Channel"),
    (D.displayName = "InviteButton.GuildSplash"),
    (P.displayName = "InviteButton.GuildName"),
    (T.displayName = "InviteButton.GuildTemplateName"),
    l.d(n, {}, { A: B }));

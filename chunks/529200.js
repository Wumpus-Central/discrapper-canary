l(321073);
var i = l(477900),
    s = l(582128),
    a = l(503698),
    t = l.n(a),
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
            channel: s,
            onClick: a,
            expired: r = !1,
            user: o,
            className: m,
            channelIconSize: v = c._3.SIZE_56,
        } = e,
        N = (0, p.Ay)(s) ?? "",
        g = I.kt.useSetting();
    if (r)
        return (0, i.jsx)("div", {
            className: A.guildIconExpired,
            children: (0, i.jsx)(u.u, { size: "custom", width: 26, height: 26, color: "currentColor" }),
        });
    let C = null == l || null != l.icon,
        y = t()((0, f.t)(A, "guildIcon", C ? "Image" : "", null != a ? "Joined" : ""), m);
    return null != n
        ? (0, i.jsx)(x.A, { game: n, onClick: a, size: A.applicationIcon, className: y })
        : null != l
          ? (0, i.jsx)(j.Ay, { onClick: a, active: !0, guild: l, className: y, animate: g })
          : null != s
            ? (0, i.jsx)(d.eu, { onClick: a, src: (0, h.Y)(s, (0, c.FT)(v)), size: v, className: y, "aria-label": N })
            : null != o
              ? (0, i.jsx)(d.eu, {
                    onClick: a,
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
            onClick: s,
            expired: a,
            children: c,
            titleVariant: u = "heading-sm/semibold",
            detailVariant: d = "body-sm/normal",
        } = e,
        h = (0, i.jsx)(r.D, {
            id: l,
            variant: u,
            className: t()((0, f.t)(A, "inviteDestination", a ? "Expired" : null != s ? "Joined" : ""), {
                [A.inviteDestinationMedium]: "heading-sm/medium" === u,
            }),
            children: n,
        });
    return (0, i.jsxs)(N.A, {
        className: A.guildInfo,
        direction: N.A.Direction.VERTICAL,
        justify: N.A.Justify.CENTER,
        children: [
            null == s ? h : (0, i.jsx)(o.D, { onClick: s, children: h }),
            (0, i.jsx)(m.E, { tag: "strong", className: A.guildDetail, variant: d, children: c }),
        ],
    });
}
function S(e) {
    let { membersOnline: n, members: l } = e,
        s = [];
    return (
        null != n &&
            n > 0 &&
            s.push(
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
            s.push(
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
        (0, i.jsx)("div", { className: A.statusCounts, children: s })
    );
}
let G = (e) => {
    let { channel: n, guild: l } = e,
        s = (0, p.Ay)(n),
        a = (0, v.gU)(n, l);
    return null == n || null == a
        ? null
        : (0, i.jsxs)("div", {
              className: A.channel,
              children: [
                  (0, i.jsx)(a, {
                      className: A.channelIcon,
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                  }),
                  (0, i.jsx)("span", { className: A.channelName, children: s }),
              ],
          });
};
function B(e) {
    let { children: n, className: l, containerRef: s, role: a, "aria-labelledby": r } = e;
    return (0, i.jsx)("div", { ref: s, className: t()(A.wrapper, l), role: a, "aria-labelledby": r, children: n });
}
function D(e) {
    let { guild: n } = e,
        [l, a] = s.useState(!1),
        r = C.Ay.getGuildSplashURL({ id: n.id, splash: n.splash, size: 400 * (0, g.mZ)() });
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: A.inviteSplash,
              children: (0, i.jsx)("img", {
                  src: r,
                  alt: "",
                  className: t()(A.inviteSplashImage, { [A.inviteSplashImageLoaded]: l }),
                  onLoad: () => a(!0),
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

l.d(n, { A: () => R }), l(321073);
var i = l(477900),
    a = l(582128),
    t = l(503698),
    s = l.n(t),
    r = l(297264),
    c = l(778712),
    u = l(849516),
    d = l(97808),
    o = l(939249),
    m = l(834730),
    h = l(571694),
    x = l(47167),
    p = l(174355),
    v = l(235986),
    N = l(769015),
    j = l(548118),
    g = l(776231),
    I = l(885386),
    C = l(486020),
    f = l(821589),
    A = l(375708),
    y = l(223171);
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
    let {
            application: n,
            guild: l,
            channel: a,
            onClick: t,
            expired: r = !1,
            user: o,
            className: m,
            channelIconSize: p = c._3.SIZE_56,
        } = e,
        v = (0, x.Ay)(a) ?? "",
        g = I.kt.useSetting();
    if (r)
        return (0, i.jsx)("div", {
            className: y.guildIconExpired,
            children: (0, i.jsx)(u.u, { size: "custom", width: 26, height: 26, color: "currentColor" }),
        });
    let C = null == l || null != l.icon,
        A = s()((0, f.t)(y, "guildIcon", C ? "Image" : "", null != t ? "Joined" : ""), m);
    return null != n
        ? (0, i.jsx)(N.A, { game: n, onClick: t, size: y.applicationIcon, className: A })
        : null != l
          ? (0, i.jsx)(j.Ay, { onClick: t, active: !0, guild: l, className: A, animate: g })
          : null != a
            ? (0, i.jsx)(d.eu, { onClick: t, src: (0, h.Y)(a, (0, c.FT)(p)), size: p, className: A, "aria-label": v })
            : null != o
              ? (0, i.jsx)(d.eu, {
                    onClick: t,
                    src: o.getAvatarURL(null, (0, c.FT)(c._3.SIZE_56)),
                    size: c._3.SIZE_56,
                    className: A,
                    "aria-label": v,
                })
              : null;
}
function b(e) {
    let {
            title: n,
            titleId: l,
            onClick: a,
            expired: t,
            children: c,
            titleVariant: u = "heading-md/semibold",
            detailVariant: d = "text-sm/normal",
        } = e,
        h = (0, i.jsx)(r.D, {
            id: l,
            variant: u,
            className: s()((0, f.t)(y, "inviteDestination", t ? "Expired" : null != a ? "Joined" : ""), {
                [y.inviteDestinationMedium]: "heading-md/medium" === u,
            }),
            children: n,
        });
    return (0, i.jsxs)(v.A, {
        className: y.guildInfo,
        direction: v.A.Direction.VERTICAL,
        justify: v.A.Justify.CENTER,
        children: [
            null == a ? h : (0, i.jsx)(o.D, { onClick: a, children: h }),
            (0, i.jsx)(m.E, { tag: "strong", className: y.guildDetail, variant: d, children: c }),
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
            a.push(
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
        (0, i.jsx)("div", { className: y.statusCounts, children: a })
    );
}
let G = (e) => {
    let { channel: n, guild: l } = e,
        a = (0, x.Ay)(n),
        t = (0, p.gU)(n, l);
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
                  (0, i.jsx)("span", { className: y.channelName, children: a }),
              ],
          });
};
function B(e) {
    let { children: n, className: l, containerRef: a, role: t, "aria-labelledby": r } = e;
    return (0, i.jsx)("div", { ref: a, className: s()(y.wrapper, l), role: t, "aria-labelledby": r, children: n });
}
function D(e) {
    let { guild: n } = e,
        [l, t] = a.useState(!1),
        r = C.Ay.getGuildSplashURL({ id: n.id, splash: n.splash, size: 400 * (0, g.mZ)() });
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: y.inviteSplash,
              children: (0, i.jsx)("img", {
                  src: r,
                  alt: "",
                  className: s()(y.inviteSplashImage, { [y.inviteSplashImageLoaded]: l }),
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
function T(e) {
    let { guildTemplate: n } = e;
    return (0, i.jsx)("div", {
        className: y.guildNameWrapper,
        children: (0, i.jsx)("span", { className: y.guildName, children: n.serializedSourceGuild.name }),
    });
}
(B.Header = k),
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
    (T.displayName = "InviteButton.GuildTemplateName");
let R = B;

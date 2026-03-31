n.d(t, { EP: () => k, i$: () => B, zF: () => G });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    c = n(990078),
    d = n(397927),
    u = n(429913),
    h = n(709066),
    A = n(47167),
    _ = n(713654),
    m = n(932001),
    g = n(263063),
    p = n(394953),
    f = n(976860),
    x = n(622543),
    E = n(576622),
    I = n(994500),
    C = n(967198),
    N = n(287809),
    T = n(486020),
    S = n(975571),
    b = n(282978),
    y = n(95655),
    v = n(565265),
    j = n(742589),
    R = n(849205),
    O = n(652215),
    L = n(49999),
    M = n(985018),
    D = n(358943);
function U(e) {
    let { channel: t, children: n } = e,
        l = (0, u.h)(t.linkedLobby?.application_id),
        [s, a] = (0, m.kn)([o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == l) return null;
    let r = T.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 14 }),
        [h, A] =
            s !== o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [M.intl.string(M.t["XJVlf/"]), void 0]
                : [
                      (0, i.jsxs)(
                          "div",
                          {
                              className: D.lE,
                              children: [
                                  (0, i.jsx)(d.Text, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: M.intl.string(M.t.YIVr4B),
                                  }),
                                  (0, i.jsx)(d.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: M.intl.format(M.t["16aguo"], {
                                          helpdeskArticle: S.A.getArticleURL(O.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                                  (0, i.jsx)(d.DUT, {
                                      className: D.Q1,
                                      onClick: () => a(L.i.USER_DISMISS),
                                      children: (0, i.jsx)(d.PGe, { className: D.U0, color: "currentColor" }),
                                  }),
                              ],
                          },
                          0,
                      ),
                      M.intl.string(M.t.YIVr4B),
                  ];
    return (0, i.jsx)(
        c.m,
        {
            position: "bottom",
            align: "left",
            __unsupportedReactNodeAsText: h,
            "aria-label": A,
            forceOpen: s === o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (0, i.jsxs)("div", {
                className: D.hl,
                children: [
                    n,
                    (0, i.jsxs)(d.Text, {
                        className: D.iO,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: ["•", (0, i.jsx)("img", { alt: "", src: r, className: D.NB }), l.name],
                    }),
                ],
            }),
        },
        s,
    );
}
function G(e) {
    let {
            channel: t,
            channelName: n,
            parentChannel: s,
            guild: r,
            inSidebar: o = !1,
            handleClick: c,
            handleContextMenu: u,
            handleParentClick: h,
            handleParentContextMenu: m,
            renderFollowButton: g,
        } = e,
        p = (0, _.gU)(t, r),
        { prefix: f, level: x } = (function (e, t) {
            switch (e) {
                case O.rbe.DM:
                    return { prefix: M.intl.string(M.t.EJRzg7), level: 1 };
                case O.rbe.GROUP_DM:
                    return { prefix: M.intl.string(M.t["e5y+gm"]), level: 1 };
                case O.rbe.GUILD_DIRECTORY:
                case O.rbe.GUILD_ANNOUNCEMENT:
                case O.rbe.GUILD_TEXT:
                case O.rbe.GUILD_FORUM:
                case O.rbe.GUILD_MEDIA:
                case O.rbe.GUILD_STAGE_VOICE:
                case O.rbe.GUILD_VOICE:
                    return { prefix: t?.name ?? "", level: 1 };
                case O.rbe.ANNOUNCEMENT_THREAD:
                case O.rbe.PUBLIC_THREAD:
                case O.rbe.PRIVATE_THREAD:
                    return { prefix: M.intl.string(M.t["7Xm5QI"]), level: 2 };
                default:
                    return { prefix: null, level: 1 };
            }
        })(t.type, r),
        E = (0, i.jsxs)(i.Fragment, {
            children: [null != f ? (0, i.jsxs)(d.AC4, { children: [f, ":"] }) : null, " ", n],
        });
    switch (t.type) {
        case O.rbe.DM:
            return (0, i.jsx)(R.A, { level: x, channel: t, handleClick: c, handleContextMenu: u });
        case O.rbe.GROUP_DM:
            if (t.isManaged()) return E;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.AC4, { children: M.intl.string(M.t["e5y+gm"]) }),
                    (0, i.jsx)(y.n, { channel: t }, `channel-${t.id}`),
                ],
            });
        case O.rbe.GUILD_ANNOUNCEMENT:
        case O.rbe.GUILD_TEXT:
        case O.rbe.GUILD_FORUM:
        case O.rbe.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, i.jsxs)(U, {
                      channel: t,
                      children: [
                          w(
                              p,
                              t.type === O.rbe.GUILD_ANNOUNCEMENT
                                  ? M.intl.string(M.t.l1dkSD)
                                  : M.intl.string(M.t.Pnajj0),
                          ),
                          (0, i.jsx)(j.A.Title, { level: x, onContextMenu: u, onClick: c, children: E }),
                      ],
                  })
                : (0, i.jsxs)(l.Fragment, {
                      children: [
                          w(
                              p,
                              t.type === O.rbe.GUILD_ANNOUNCEMENT
                                  ? M.intl.string(M.t.l1dkSD)
                                  : M.intl.string(M.t.Pnajj0),
                          ),
                          (0, i.jsx)(j.A.Title, { level: x, onContextMenu: u, onClick: c, children: E }),
                          null != g ? g() : null,
                      ],
                  });
        case O.rbe.GUILD_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    w(p, M.intl.string(M.t.BVZqJl)),
                    (0, i.jsx)(j.A.Title, { level: x, onContextMenu: u, onClick: c, children: E }),
                ],
            });
        case O.rbe.GUILD_STAGE_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    w(p, M.intl.string(M.t.EErMzA)),
                    (0, i.jsx)(j.A.Title, { level: x, onContextMenu: u, onClick: c, children: E }),
                ],
            });
        case O.rbe.ANNOUNCEMENT_THREAD:
        case O.rbe.PUBLIC_THREAD:
        case O.rbe.PRIVATE_THREAD:
            let C = null;
            if (!o && null != s) {
                let e = (0, _.gU)(s, r);
                C = (0, i.jsxs)(l.Fragment, {
                    children: [
                        w(e, M.intl.string(M.t.Pnajj0)),
                        (0, i.jsx)(j.A.Title, {
                            level: x,
                            onContextMenu: m,
                            onClick: h,
                            className: a()(D.rg, D.or),
                            children: (0, A.m1)(s, N.default, I.A),
                        }),
                        (0, i.jsx)(j.A.Caret, {}),
                    ],
                });
            }
            let T = s?.type != null && O.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    C,
                    w(T ? null : p, M.intl.string(M.t["7Xm5QI"])),
                    (0, i.jsx)(j.A.Title, {
                        level: x,
                        onContextMenu: u,
                        onClick: c,
                        className: a()({ [D.or]: o }),
                        children: E,
                    }),
                ],
            });
        case O.rbe.GUILD_DIRECTORY:
            let S = r?.features.has(O.GuildFeatures.HUB) ? M.intl.formatToPlainString(M.t.Dy2aht, { guildName: n }) : n;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    null !== p ? (0, i.jsx)(j.A.ChannelIcon, { icon: p, "aria-hidden": !0 }) : null,
                    (0, i.jsxs)(j.A.Title, {
                        level: x,
                        onContextMenu: u,
                        onClick: c,
                        children: [null != f ? (0, i.jsxs)(d.AC4, { children: [f, ":"] }) : null, " ", S],
                    }),
                ],
            });
        default:
            return null;
    }
}
let P = (e) => {
    let { channel: t } = e,
        n = (0, r.bG)([N.default], () => N.default.getCurrentUser()),
        s = (0, r.bG)([N.default], () => N.default.getUser(t.getRecipientId())),
        a = (0, r.bG)([x.A], () => (null != s ? x.A.getUserProfile(s.id) : null)),
        o = null != a && (a?.fetchEndedAt ?? 0) > 0;
    return (l.useEffect(() => {
        n?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, E.A)(s.id, s.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0,
            });
    }, [n, s]),
    t.isDM() && n?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, i.jsx)(h.A, { type: h.A.Types.STAFF_ONLY_DM })
            : o && !a.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, i.jsx)(h.A, { type: h.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
};
function k(e, t) {
    switch (e.type) {
        case O.rbe.DM:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(P, { channel: e }), (0, i.jsx)(b.A, { channel: e }, e.id)],
            });
        case O.rbe.GUILD_ANNOUNCEMENT:
        case O.rbe.GUILD_TEXT:
        case O.rbe.GUILD_VOICE:
        case O.rbe.GUILD_STAGE_VOICE:
        case O.rbe.GROUP_DM:
            return null != t ? (0, i.jsx)(v.A, { channel: e, guild: t }, e.id) : null;
        default:
            return null;
    }
}
function w(e, t) {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null !== e && (0, i.jsx)(j.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, i.jsx)(d.AC4, { children: t }),
        ],
    });
}
function B(e) {
    let { guild: t, channel: n, caretPosition: s = "left" } = e,
        a = (0, r.bG)([C.A], () => C.A.getGuildId()),
        o = (0, p.lI)(),
        u = l.useRef(null);
    return (a === O.YYv || o) && null != t
        ? (0, i.jsx)(c.m, {
              asContainer: !0,
              text: t.name,
              targetElementRef: u,
              position: "bottom",
              children: (0, i.jsxs)(d.DUT, {
                  onClick: () => {
                      (0, f.uh)(t.id, n.id);
                  },
                  className: D.ED,
                  children: [
                      "left" === s && (0, i.jsx)(j.A.Caret, { direction: "left" }),
                      (0, i.jsx)("div", {
                          ref: u,
                          children: (0, i.jsx)(g.Ay, {
                              guild: t,
                              size: g.Ay.Sizes.SMALLER,
                              className: D.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, i.jsx)(j.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

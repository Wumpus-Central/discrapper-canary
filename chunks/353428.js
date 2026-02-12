n.d(t, { EP: () => w, i$: () => V, zF: () => U });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    d = n(990078),
    c = n(397927),
    u = n(429913),
    h = n(709066),
    A = n(47167),
    m = n(713654),
    p = n(379848),
    g = n(263063),
    _ = n(394953),
    f = n(976860),
    x = n(622543),
    C = n(576622),
    E = n(994500),
    I = n(967198),
    b = n(287809),
    N = n(486020),
    S = n(975571),
    T = n(282978),
    v = n(95655),
    y = n(565265),
    j = n(742589),
    R = n(849205),
    O = n(652215),
    L = n(49999),
    M = n(985018),
    D = n(638990);
function G(e) {
    let { channel: t, children: n } = e,
        l = (0, u.h)(t.linkedLobby?.application_id),
        [s, a] = (0, p.kn)([o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == l) return null;
    let r = N.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 14 }),
        [h, A] =
            s !== o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [M.intl.string(M.t["XJVlf/"]), void 0]
                : [
                      (0, i.jsxs)(
                          "div",
                          {
                              className: D.lE,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: M.intl.string(M.t.YIVr4B),
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: M.intl.format(M.t["16aguo"], {
                                          helpdeskArticle: S.A.getArticleURL(O.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                                  (0, i.jsx)(c.DUT, {
                                      className: D.Q1,
                                      onClick: () => a(L.i.USER_DISMISS),
                                      children: (0, i.jsx)(c.PGe, { className: D.U0, color: "currentColor" }),
                                  }),
                              ],
                          },
                          0,
                      ),
                      M.intl.string(M.t.YIVr4B),
                  ];
    return (0, i.jsx)(
        d.m,
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
                    (0, i.jsxs)(c.Text, {
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
function U(e) {
    let {
            channel: t,
            channelName: n,
            parentChannel: s,
            guild: r,
            inSidebar: o = !1,
            handleClick: d,
            handleContextMenu: u,
            handleParentClick: h,
            handleParentContextMenu: p,
            renderFollowButton: g,
        } = e,
        _ = (0, m.gU)(t, r),
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
        C = (0, i.jsxs)(i.Fragment, {
            children: [null != f ? (0, i.jsxs)(c.AC4, { children: [f, ":"] }) : null, " ", n],
        });
    switch (t.type) {
        case O.rbe.DM:
            return (0, i.jsx)(R.A, { level: x, channel: t, handleClick: d, handleContextMenu: u });
        case O.rbe.GROUP_DM:
            if (t.isManaged()) return C;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(c.AC4, { children: M.intl.string(M.t["e5y+gm"]) }),
                    (0, i.jsx)(v.n, { channel: t }, `channel-${t.id}`),
                ],
            });
        case O.rbe.GUILD_ANNOUNCEMENT:
        case O.rbe.GUILD_TEXT:
        case O.rbe.GUILD_FORUM:
        case O.rbe.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, i.jsxs)(G, {
                      channel: t,
                      children: [
                          k(
                              _,
                              t.type === O.rbe.GUILD_ANNOUNCEMENT
                                  ? M.intl.string(M.t.l1dkSD)
                                  : M.intl.string(M.t.Pnajj0),
                          ),
                          (0, i.jsx)(j.A.Title, { level: x, onContextMenu: u, onClick: d, children: C }),
                      ],
                  })
                : (0, i.jsxs)(l.Fragment, {
                      children: [
                          k(
                              _,
                              t.type === O.rbe.GUILD_ANNOUNCEMENT
                                  ? M.intl.string(M.t.l1dkSD)
                                  : M.intl.string(M.t.Pnajj0),
                          ),
                          (0, i.jsx)(j.A.Title, { level: x, onContextMenu: u, onClick: d, children: C }),
                          null != g ? g() : null,
                      ],
                  });
        case O.rbe.GUILD_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    k(_, M.intl.string(M.t.BVZqJl)),
                    (0, i.jsx)(j.A.Title, { level: x, onContextMenu: u, onClick: d, children: C }),
                ],
            });
        case O.rbe.GUILD_STAGE_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    k(_, M.intl.string(M.t.EErMzA)),
                    (0, i.jsx)(j.A.Title, { level: x, onContextMenu: u, onClick: d, children: C }),
                ],
            });
        case O.rbe.ANNOUNCEMENT_THREAD:
        case O.rbe.PUBLIC_THREAD:
        case O.rbe.PRIVATE_THREAD:
            let I = null;
            if (!o && null != s) {
                let e = (0, m.gU)(s, r);
                I = (0, i.jsxs)(l.Fragment, {
                    children: [
                        k(e, M.intl.string(M.t.Pnajj0)),
                        (0, i.jsx)(j.A.Title, {
                            level: x,
                            onContextMenu: p,
                            onClick: h,
                            className: a()(D.rg, D.or),
                            children: (0, A.m1)(s, b.default, E.A),
                        }),
                        (0, i.jsx)(j.A.Caret, {}),
                    ],
                });
            }
            let N = s?.type != null && O.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    I,
                    k(N ? null : _, M.intl.string(M.t["7Xm5QI"])),
                    (0, i.jsx)(j.A.Title, {
                        level: x,
                        onContextMenu: u,
                        onClick: d,
                        className: a()({ [D.or]: o }),
                        children: C,
                    }),
                ],
            });
        case O.rbe.GUILD_DIRECTORY:
            let S = r?.features.has(O.GuildFeatures.HUB) ? M.intl.formatToPlainString(M.t.Dy2aht, { guildName: n }) : n;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    null !== _ ? (0, i.jsx)(j.A.ChannelIcon, { icon: _, "aria-hidden": !0 }) : null,
                    (0, i.jsxs)(j.A.Title, {
                        level: x,
                        onContextMenu: u,
                        onClick: d,
                        children: [null != f ? (0, i.jsxs)(c.AC4, { children: [f, ":"] }) : null, " ", S],
                    }),
                ],
            });
        default:
            return null;
    }
}
let P = (e) => {
    let { channel: t } = e,
        n = (0, r.bG)([b.default], () => b.default.getCurrentUser()),
        s = (0, r.bG)([b.default], () => b.default.getUser(t.getRecipientId())),
        a = (0, r.bG)([x.A], () => (null != s ? x.A.getUserProfile(s.id) : null)),
        o = null != a && (a?.fetchEndedAt ?? 0) > 0;
    return (l.useEffect(() => {
        n?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, C.A)(s.id, s.getAvatarURL(void 0, 80), {
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
function w(e, t) {
    switch (e.type) {
        case O.rbe.DM:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(P, { channel: e }), (0, i.jsx)(T.A, { channel: e }, e.id)],
            });
        case O.rbe.GUILD_ANNOUNCEMENT:
        case O.rbe.GUILD_TEXT:
        case O.rbe.GUILD_VOICE:
        case O.rbe.GUILD_STAGE_VOICE:
        case O.rbe.GROUP_DM:
            return null != t ? (0, i.jsx)(y.A, { channel: e, guild: t }, e.id) : null;
        default:
            return null;
    }
}
function k(e, t) {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null !== e && (0, i.jsx)(j.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, i.jsx)(c.AC4, { children: t }),
        ],
    });
}
function V(e) {
    let { guild: t, channel: n, caretPosition: s = "left" } = e,
        a = (0, r.bG)([I.A], () => I.A.getGuildId()),
        o = (0, _.lI)(),
        u = l.useRef(null);
    return (a === O.YYv || o) && null != t
        ? (0, i.jsx)(d.m, {
              asContainer: !0,
              text: t.name,
              targetElementRef: u,
              position: "bottom",
              children: (0, i.jsxs)(c.DUT, {
                  onClick: () => {
                      (0, f.uh)(t.id, n.id);
                  },
                  className: D.ED,
                  children: [
                      "left" === s && (0, i.jsx)(j.A.Caret, { direction: "left" }),
                      (0, i.jsx)("div", {
                          ref: u,
                          children: (0, i.jsx)(g.A, { guild: t, size: g.A.Sizes.SMALLER, className: D.gL, active: !0 }),
                      }),
                      "right" === s && (0, i.jsx)(j.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

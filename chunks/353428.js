n.d(t, { EP: () => w, i$: () => B, zF: () => P });
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
    g = n(713654),
    m = n(379848),
    p = n(263063),
    _ = n(394953),
    x = n(976860),
    f = n(622543),
    E = n(576622),
    C = n(994500),
    I = n(967198),
    S = n(287809),
    b = n(486020),
    N = n(975571),
    T = n(149564),
    j = n(282978),
    v = n(95655),
    y = n(565265),
    R = n(742589),
    O = n(849205),
    L = n(652215),
    D = n(49999),
    M = n(985018),
    G = n(638990);
function U(e) {
    let { channel: t, children: n } = e,
        l = (0, u.h)(t.linkedLobby?.application_id),
        [s, a] = (0, m.kn)([o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == l) return null;
    let r = b.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 14 }),
        [h, A] =
            s !== o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [M.intl.string(M.t["XJVlf/"]), void 0]
                : [
                      (0, i.jsxs)(
                          "div",
                          {
                              className: G.lE,
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
                                          helpdeskArticle: N.A.getArticleURL(L.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                                  (0, i.jsx)(c.DUT, {
                                      className: G.Q1,
                                      onClick: () => a(D.i.USER_DISMISS),
                                      children: (0, i.jsx)(c.PGe, { className: G.U0, color: "currentColor" }),
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
                className: G.hl,
                children: [
                    n,
                    (0, i.jsxs)(c.Text, {
                        className: G.iO,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: ["•", (0, i.jsx)("img", { alt: "", src: r, className: G.NB }), l.name],
                    }),
                ],
            }),
        },
        s,
    );
}
function P(e) {
    let {
            channel: t,
            channelName: n,
            parentChannel: s,
            guild: r,
            inSidebar: o = !1,
            handleClick: d,
            handleContextMenu: u,
            handleParentClick: h,
            handleParentContextMenu: m,
            renderFollowButton: p,
        } = e,
        _ = (0, g.gU)(t, r),
        { prefix: x, level: f } = (function (e, t) {
            switch (e) {
                case L.rbe.DM:
                    return { prefix: M.intl.string(M.t.EJRzg7), level: 1 };
                case L.rbe.GROUP_DM:
                    return { prefix: M.intl.string(M.t["e5y+gm"]), level: 1 };
                case L.rbe.GUILD_DIRECTORY:
                case L.rbe.GUILD_ANNOUNCEMENT:
                case L.rbe.GUILD_TEXT:
                case L.rbe.GUILD_FORUM:
                case L.rbe.GUILD_MEDIA:
                case L.rbe.GUILD_STAGE_VOICE:
                case L.rbe.GUILD_VOICE:
                    return { prefix: t?.name ?? "", level: 1 };
                case L.rbe.ANNOUNCEMENT_THREAD:
                case L.rbe.PUBLIC_THREAD:
                case L.rbe.PRIVATE_THREAD:
                    return { prefix: M.intl.string(M.t["7Xm5QI"]), level: 2 };
                default:
                    return { prefix: null, level: 1 };
            }
        })(t.type, r),
        E = (0, i.jsxs)(i.Fragment, {
            children: [null != x ? (0, i.jsxs)(c.AC4, { children: [x, ":"] }) : null, " ", n],
        });
    switch (t.type) {
        case L.rbe.DM:
            return (0, i.jsx)(O.A, { level: f, channel: t, handleClick: d, handleContextMenu: u });
        case L.rbe.GROUP_DM:
            if (t.isManaged()) return E;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(c.AC4, { children: M.intl.string(M.t["e5y+gm"]) }),
                    (0, i.jsx)(v.n, { channel: t }, `channel-${t.id}`),
                ],
            });
        case L.rbe.GUILD_ANNOUNCEMENT:
        case L.rbe.GUILD_TEXT:
        case L.rbe.GUILD_FORUM:
        case L.rbe.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, i.jsxs)(U, {
                      channel: t,
                      children: [
                          V(
                              _,
                              t.type === L.rbe.GUILD_ANNOUNCEMENT
                                  ? M.intl.string(M.t.l1dkSD)
                                  : M.intl.string(M.t.Pnajj0),
                          ),
                          (0, i.jsx)(R.A.Title, { level: f, onContextMenu: u, onClick: d, children: E }),
                      ],
                  })
                : (0, i.jsxs)(l.Fragment, {
                      children: [
                          V(
                              _,
                              t.type === L.rbe.GUILD_ANNOUNCEMENT
                                  ? M.intl.string(M.t.l1dkSD)
                                  : M.intl.string(M.t.Pnajj0),
                          ),
                          (0, i.jsx)(R.A.Title, { level: f, onContextMenu: u, onClick: d, children: E }),
                          null != p ? p() : null,
                      ],
                  });
        case L.rbe.GUILD_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    V(_, M.intl.string(M.t.BVZqJl)),
                    (0, i.jsx)(R.A.Title, { level: f, onContextMenu: u, onClick: d, children: E }),
                ],
            });
        case L.rbe.GUILD_STAGE_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    V(_, M.intl.string(M.t.EErMzA)),
                    (0, i.jsx)(R.A.Title, { level: f, onContextMenu: u, onClick: d, children: E }),
                ],
            });
        case L.rbe.ANNOUNCEMENT_THREAD:
        case L.rbe.PUBLIC_THREAD:
        case L.rbe.PRIVATE_THREAD:
            let I = null;
            if (!o && null != s) {
                let e = (0, g.gU)(s, r);
                I = (0, i.jsxs)(l.Fragment, {
                    children: [
                        V(e, M.intl.string(M.t.Pnajj0)),
                        (0, i.jsx)(R.A.Title, {
                            level: f,
                            onContextMenu: m,
                            onClick: h,
                            className: a()(G.rg, G.or),
                            children: (0, A.m1)(s, S.default, C.A),
                        }),
                        (0, i.jsx)(R.A.Caret, {}),
                    ],
                });
            }
            let b = s?.type != null && L.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    I,
                    V(b ? null : _, M.intl.string(M.t["7Xm5QI"])),
                    (0, i.jsx)(R.A.Title, {
                        level: f,
                        onContextMenu: u,
                        onClick: d,
                        className: a()({ [G.or]: o, [G.ej]: b, [G.q1]: o && b }),
                        children: E,
                    }),
                ],
            });
        case L.rbe.GUILD_DIRECTORY:
            let N = r?.features.has(L.GuildFeatures.HUB) ? M.intl.formatToPlainString(M.t.Dy2aht, { guildName: n }) : n;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    null !== _ ? (0, i.jsx)(R.A.ChannelIcon, { icon: _, "aria-hidden": !0 }) : null,
                    (0, i.jsxs)(R.A.Title, {
                        level: f,
                        onContextMenu: u,
                        onClick: d,
                        children: [null != x ? (0, i.jsxs)(c.AC4, { children: [x, ":"] }) : null, " ", N],
                    }),
                ],
            });
        default:
            return null;
    }
}
let k = (e) => {
    let { channel: t } = e,
        n = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        s = (0, r.bG)([S.default], () => S.default.getUser(t.getRecipientId())),
        a = (0, T.x)(),
        o = (0, r.bG)([f.A], () => (null != s ? f.A.getUserProfile(s.id) : null)),
        d = null != o && (o?.fetchEndedAt ?? 0) > 0;
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
            : a && d && !o.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, i.jsx)(h.A, { type: h.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
};
function w(e, t) {
    switch (e.type) {
        case L.rbe.DM:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(k, { channel: e }), (0, i.jsx)(j.A, { channel: e }, e.id)],
            });
        case L.rbe.GUILD_ANNOUNCEMENT:
        case L.rbe.GUILD_TEXT:
        case L.rbe.GUILD_VOICE:
        case L.rbe.GUILD_STAGE_VOICE:
        case L.rbe.GROUP_DM:
            return null != t ? (0, i.jsx)(y.A, { channel: e, guild: t }, e.id) : null;
        default:
            return null;
    }
}
function V(e, t) {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null !== e && (0, i.jsx)(R.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, i.jsx)(c.AC4, { children: t }),
        ],
    });
}
function B(e) {
    let { guild: t, channel: n, caretPosition: s = "left" } = e,
        a = (0, r.bG)([I.A], () => I.A.getGuildId()),
        o = (0, _.lI)(),
        u = l.useRef(null);
    return (a === L.YYv || o) && null != t
        ? (0, i.jsx)(d.m, {
              asContainer: !0,
              text: t.name,
              targetElementRef: u,
              position: "bottom",
              children: (0, i.jsxs)(c.DUT, {
                  onClick: () => {
                      (0, x.uh)(t.id, n.id);
                  },
                  className: G.ED,
                  children: [
                      "left" === s && (0, i.jsx)(R.A.Caret, { direction: "left" }),
                      (0, i.jsx)("div", {
                          ref: u,
                          children: (0, i.jsx)(p.A, { guild: t, size: p.A.Sizes.SMALLER, className: G.gL, active: !0 }),
                      }),
                      "right" === s && (0, i.jsx)(R.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

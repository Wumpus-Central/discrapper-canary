n.d(t, { EP: () => B, i$: () => F, zF: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    d = n(990078),
    c = n(834730),
    u = n(939249),
    h = n(789645),
    A = n(140735),
    _ = n(429913),
    m = n(709066),
    g = n(47167),
    p = n(713654),
    f = n(932001),
    E = n(263063),
    x = n(394953),
    I = n(976860),
    C = n(622543),
    b = n(576622),
    N = n(994500),
    S = n(967198),
    v = n(287809),
    T = n(486020),
    y = n(975571),
    j = n(282978),
    R = n(95655),
    L = n(565265),
    O = n(742589),
    G = n(849205),
    M = n(652215),
    D = n(49999),
    U = n(985018),
    P = n(964623);
function w(e) {
    let { channel: t, children: n } = e,
        l = (0, _.h)(t.linkedLobby?.application_id),
        [s, a] = (0, f.kn)([o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == l) return null;
    let r = T.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 14 }),
        [A, m] =
            s !== o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [U.intl.string(U.t["XJVlf/"]), void 0]
                : [
                      (0, i.jsxs)(
                          "div",
                          {
                              className: P.lE,
                              children: [
                                  (0, i.jsx)(c.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: U.intl.string(U.t.YIVr4B),
                                  }),
                                  (0, i.jsx)(c.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: U.intl.format(U.t["16aguo"], {
                                          helpdeskArticle: y.A.getArticleURL(M.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                                  (0, i.jsx)(u.D, {
                                      className: P.Q1,
                                      onClick: () => a(D.i.USER_DISMISS),
                                      children: (0, i.jsx)(h.P, { className: P.U0, color: "currentColor" }),
                                  }),
                              ],
                          },
                          0,
                      ),
                      U.intl.string(U.t.YIVr4B),
                  ];
    return (0, i.jsx)(
        d.m,
        {
            position: "bottom",
            align: "left",
            __unsupportedReactNodeAsText: A,
            "aria-label": m,
            forceOpen: s === o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (0, i.jsxs)("div", {
                className: P.hl,
                children: [
                    n,
                    (0, i.jsxs)(c.E, {
                        className: P.iO,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: ["•", (0, i.jsx)("img", { alt: "", src: r, className: P.NB }), l.name],
                    }),
                ],
            }),
        },
        s,
    );
}
function k(e) {
    let {
            channel: t,
            channelName: n,
            parentChannel: s,
            guild: r,
            inSidebar: o = !1,
            handleClick: d,
            handleContextMenu: c,
            handleParentClick: u,
            handleParentContextMenu: h,
            renderFollowButton: _,
        } = e,
        m = (0, p.gU)(t, r),
        { prefix: f, level: E } = (function (e, t) {
            switch (e) {
                case M.rbe.DM:
                    return { prefix: U.intl.string(U.t.EJRzg7), level: 1 };
                case M.rbe.GROUP_DM:
                    return { prefix: U.intl.string(U.t["e5y+gm"]), level: 1 };
                case M.rbe.GUILD_DIRECTORY:
                case M.rbe.GUILD_ANNOUNCEMENT:
                case M.rbe.GUILD_TEXT:
                case M.rbe.GUILD_FORUM:
                case M.rbe.GUILD_MEDIA:
                case M.rbe.GUILD_STAGE_VOICE:
                case M.rbe.GUILD_VOICE:
                    return { prefix: t?.name ?? "", level: 1 };
                case M.rbe.ANNOUNCEMENT_THREAD:
                case M.rbe.PUBLIC_THREAD:
                case M.rbe.PRIVATE_THREAD:
                    return { prefix: U.intl.string(U.t["7Xm5QI"]), level: 2 };
                default:
                    return { prefix: null, level: 1 };
            }
        })(t.type, r),
        x = (0, i.jsxs)(i.Fragment, {
            children: [null != f ? (0, i.jsxs)(A.A, { children: [f, ":"] }) : null, " ", n],
        });
    switch (t.type) {
        case M.rbe.DM:
            return (0, i.jsx)(G.A, { level: E, channel: t, handleClick: d, handleContextMenu: c });
        case M.rbe.GROUP_DM:
            if (t.isManaged()) return x;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A.A, { children: U.intl.string(U.t["e5y+gm"]) }),
                    (0, i.jsx)(R.n, { channel: t }, `channel-${t.id}`),
                ],
            });
        case M.rbe.GUILD_ANNOUNCEMENT:
        case M.rbe.GUILD_TEXT:
        case M.rbe.GUILD_FORUM:
        case M.rbe.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, i.jsxs)(w, {
                      channel: t,
                      children: [
                          H(
                              m,
                              t.type === M.rbe.GUILD_ANNOUNCEMENT
                                  ? U.intl.string(U.t.l1dkSD)
                                  : U.intl.string(U.t.Pnajj0),
                          ),
                          (0, i.jsx)(O.A.Title, { level: E, onContextMenu: c, onClick: d, children: x }),
                      ],
                  })
                : (0, i.jsxs)(l.Fragment, {
                      children: [
                          H(
                              m,
                              t.type === M.rbe.GUILD_ANNOUNCEMENT
                                  ? U.intl.string(U.t.l1dkSD)
                                  : U.intl.string(U.t.Pnajj0),
                          ),
                          (0, i.jsx)(O.A.Title, { level: E, onContextMenu: c, onClick: d, children: x }),
                          null != _ ? _() : null,
                      ],
                  });
        case M.rbe.GUILD_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    H(m, U.intl.string(U.t.BVZqJl)),
                    (0, i.jsx)(O.A.Title, { level: E, onContextMenu: c, onClick: d, children: x }),
                ],
            });
        case M.rbe.GUILD_STAGE_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    H(m, U.intl.string(U.t.EErMzA)),
                    (0, i.jsx)(O.A.Title, { level: E, onContextMenu: c, onClick: d, children: x }),
                ],
            });
        case M.rbe.ANNOUNCEMENT_THREAD:
        case M.rbe.PUBLIC_THREAD:
        case M.rbe.PRIVATE_THREAD:
            let I = null;
            if (!o && null != s) {
                let e = (0, p.gU)(s, r);
                I = (0, i.jsxs)(l.Fragment, {
                    children: [
                        H(e, U.intl.string(U.t.Pnajj0)),
                        (0, i.jsx)(O.A.Title, {
                            level: E,
                            onContextMenu: h,
                            onClick: u,
                            className: a()(P.rg, P.or),
                            children: (0, g.m1)(s, v.default, N.A),
                        }),
                        (0, i.jsx)(O.A.Caret, {}),
                    ],
                });
            }
            let C = s?.type != null && M.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    I,
                    H(C ? null : m, U.intl.string(U.t["7Xm5QI"])),
                    (0, i.jsx)(O.A.Title, {
                        level: E,
                        onContextMenu: c,
                        onClick: d,
                        className: a()({ [P.or]: o }),
                        children: x,
                    }),
                ],
            });
        case M.rbe.GUILD_DIRECTORY:
            let b = r?.features.has(M.GuildFeatures.HUB) ? U.intl.formatToPlainString(U.t.Dy2aht, { guildName: n }) : n;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    null !== m ? (0, i.jsx)(O.A.ChannelIcon, { icon: m, "aria-hidden": !0 }) : null,
                    (0, i.jsxs)(O.A.Title, {
                        level: E,
                        onContextMenu: c,
                        onClick: d,
                        children: [null != f ? (0, i.jsxs)(A.A, { children: [f, ":"] }) : null, " ", b],
                    }),
                ],
            });
        default:
            return null;
    }
}
let V = (e) => {
    let { channel: t } = e,
        n = (0, r.bG)([v.default], () => v.default.getCurrentUser()),
        s = (0, r.bG)([v.default], () => v.default.getUser(t.getRecipientId())),
        a = (0, r.bG)([C.A], () => (null != s ? C.A.getUserProfile(s.id) : null)),
        o = null != a && (a?.fetchEndedAt ?? 0) > 0;
    return (l.useEffect(() => {
        n?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, b.A)(s.id, s.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0,
            });
    }, [n, s]),
    t.isDM() && n?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, i.jsx)(m.A, { type: m.A.Types.STAFF_ONLY_DM })
            : o && !a.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, i.jsx)(m.A, { type: m.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
};
function B(e, t) {
    switch (e.type) {
        case M.rbe.DM:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(V, { channel: e }), (0, i.jsx)(j.A, { channel: e }, e.id)],
            });
        case M.rbe.GUILD_ANNOUNCEMENT:
        case M.rbe.GUILD_TEXT:
        case M.rbe.GUILD_VOICE:
        case M.rbe.GUILD_STAGE_VOICE:
        case M.rbe.GROUP_DM:
            return null != t ? (0, i.jsx)(L.A, { channel: e, guild: t }, e.id) : null;
        default:
            return null;
    }
}
function H(e, t) {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null !== e && (0, i.jsx)(O.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, i.jsx)(A.A, { children: t }),
        ],
    });
}
function F(e) {
    let { guild: t, channel: n, caretPosition: s = "left" } = e,
        a = (0, r.bG)([S.A], () => S.A.getGuildId()),
        o = (0, x.lI)(),
        c = l.useRef(null);
    return (a === M.YYv || o) && null != t
        ? (0, i.jsx)(d.m, {
              asContainer: !0,
              text: t.name,
              targetElementRef: c,
              position: "bottom",
              children: (0, i.jsxs)(u.D, {
                  onClick: () => {
                      (0, I.uh)(t.id, n.id);
                  },
                  className: P.ED,
                  children: [
                      "left" === s && (0, i.jsx)(O.A.Caret, { direction: "left" }),
                      (0, i.jsx)("div", {
                          ref: c,
                          children: (0, i.jsx)(E.Ay, {
                              guild: t,
                              size: E.Ay.Sizes.SMALLER,
                              className: P.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, i.jsx)(O.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

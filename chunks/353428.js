t.d(n, { EP: () => H, i$: () => z, zF: () => F });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    r = t.n(s),
    a = t(17928),
    c = t(554146),
    o = t(990078),
    d = t(834730),
    u = t(939249),
    h = t(789645),
    x = t(140735),
    m = t(429913),
    A = t(709066),
    g = t(47167),
    N = t(713654),
    j = t(131607),
    I = t(548118),
    E = t(394953),
    p = t(976860),
    C = t(841595),
    b = t(903209),
    T = t(994500),
    _ = t(967198),
    f = t(287809),
    D = t(486020),
    L = t(975571),
    U = t(282978),
    M = t(95655),
    v = t(565265),
    G = t(742589),
    k = t(849205),
    y = t(652215),
    R = t(49999),
    O = t(375708),
    S = t(964623);
function P(e) {
    let { channel: n, children: t } = e,
        i = (0, m.h)(n.linkedLobby?.application_id),
        [s, r] = (0, j.kn)([c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == i) return null;
    let a = D.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 14 }),
        [x, A] =
            s !== c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [O.intl.string(O.t["XJVlf/"]), void 0]
                : [
                      (0, l.jsxs)(
                          "div",
                          {
                              className: S.lE,
                              children: [
                                  (0, l.jsx)(d.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: O.intl.string(O.t.YIVr4B),
                                  }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: O.intl.format(O.t["16aguo"], {
                                          helpdeskArticle: L.A.getArticleURL(y.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                                  (0, l.jsx)(u.D, {
                                      className: S.Q1,
                                      onClick: () => r(R.i.USER_DISMISS),
                                      children: (0, l.jsx)(h.P, { className: S.U0, color: "currentColor" }),
                                  }),
                              ],
                          },
                          0,
                      ),
                      O.intl.string(O.t.YIVr4B),
                  ];
    return (0, l.jsx)(
        o.m,
        {
            position: "bottom",
            align: "left",
            __unsupportedReactNodeAsText: x,
            "aria-label": A,
            forceOpen: s === c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (0, l.jsxs)("div", {
                className: S.hl,
                children: [
                    t,
                    (0, l.jsxs)(d.E, {
                        className: S.iO,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: ["\u2022", (0, l.jsx)("img", { alt: "", src: a, className: S.NB }), i.name],
                    }),
                ],
            }),
        },
        s,
    );
}
function F(e) {
    let {
            channel: n,
            channelName: t,
            parentChannel: s,
            guild: a,
            inSidebar: c = !1,
            handleClick: o,
            handleContextMenu: d,
            handleParentClick: u,
            handleParentContextMenu: h,
            renderFollowButton: m,
        } = e,
        A = (0, N.gU)(n, a),
        { prefix: j, level: I } = (function (e, n) {
            switch (e) {
                case y.rbe.DM:
                    return { prefix: O.intl.string(O.t.EJRzg7), level: 1 };
                case y.rbe.GROUP_DM:
                    return { prefix: O.intl.string(O.t["e5y+gm"]), level: 1 };
                case y.rbe.GUILD_DIRECTORY:
                case y.rbe.GUILD_ANNOUNCEMENT:
                case y.rbe.GUILD_TEXT:
                case y.rbe.GUILD_FORUM:
                case y.rbe.GUILD_MEDIA:
                case y.rbe.GUILD_STAGE_VOICE:
                case y.rbe.GUILD_VOICE:
                    return { prefix: n?.name ?? "", level: 1 };
                case y.rbe.ANNOUNCEMENT_THREAD:
                case y.rbe.PUBLIC_THREAD:
                case y.rbe.PRIVATE_THREAD:
                    return { prefix: O.intl.string(O.t["7Xm5QI"]), level: 2 };
                default:
                    return { prefix: null, level: 1 };
            }
        })(n.type, a),
        E = (0, l.jsxs)(l.Fragment, {
            children: [null != j ? (0, l.jsxs)(x.A, { children: [j, ":"] }) : null, " ", t],
        });
    switch (n.type) {
        case y.rbe.DM:
            return (0, l.jsx)(k.A, { level: I, channel: n, handleClick: o, handleContextMenu: d });
        case y.rbe.GROUP_DM:
            if (n.isManaged()) return E;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(x.A, { children: O.intl.string(O.t["e5y+gm"]) }),
                    (0, l.jsx)(M.n, { channel: n }, `channel-${n.id}`),
                ],
            });
        case y.rbe.GUILD_ANNOUNCEMENT:
        case y.rbe.GUILD_TEXT:
        case y.rbe.GUILD_FORUM:
        case y.rbe.GUILD_MEDIA:
            return null != n.linkedLobby
                ? (0, l.jsxs)(P, {
                      channel: n,
                      children: [
                          B(
                              A,
                              n.type === y.rbe.GUILD_ANNOUNCEMENT
                                  ? O.intl.string(O.t.l1dkSD)
                                  : O.intl.string(O.t.Pnajj0),
                          ),
                          (0, l.jsx)(G.A.Title, { level: I, onContextMenu: d, onClick: o, children: E }),
                      ],
                  })
                : (0, l.jsxs)(i.Fragment, {
                      children: [
                          B(
                              A,
                              n.type === y.rbe.GUILD_ANNOUNCEMENT
                                  ? O.intl.string(O.t.l1dkSD)
                                  : O.intl.string(O.t.Pnajj0),
                          ),
                          (0, l.jsx)(G.A.Title, { level: I, onContextMenu: d, onClick: o, children: E }),
                          null != m ? m() : null,
                      ],
                  });
        case y.rbe.GUILD_VOICE:
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    B(A, O.intl.string(O.t.BVZqJl)),
                    (0, l.jsx)(G.A.Title, { level: I, onContextMenu: d, onClick: o, children: E }),
                ],
            });
        case y.rbe.GUILD_STAGE_VOICE:
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    B(A, O.intl.string(O.t.EErMzA)),
                    (0, l.jsx)(G.A.Title, { level: I, onContextMenu: d, onClick: o, children: E }),
                ],
            });
        case y.rbe.ANNOUNCEMENT_THREAD:
        case y.rbe.PUBLIC_THREAD:
        case y.rbe.PRIVATE_THREAD:
            let p = null;
            if (!c && null != s) {
                let e = (0, N.gU)(s, a);
                p = (0, l.jsxs)(i.Fragment, {
                    children: [
                        B(e, O.intl.string(O.t.Pnajj0)),
                        (0, l.jsx)(G.A.Title, {
                            level: I,
                            onContextMenu: h,
                            onClick: u,
                            className: r()(S.rg, S.or),
                            children: (0, g.m1)(s, f.default, T.A),
                        }),
                        (0, l.jsx)(G.A.Caret, {}),
                    ],
                });
            }
            let C = s?.type != null && y.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    p,
                    B(C ? null : A, O.intl.string(O.t["7Xm5QI"])),
                    (0, l.jsx)(G.A.Title, {
                        level: I,
                        onContextMenu: d,
                        onClick: o,
                        className: r()({ [S.or]: c }),
                        children: E,
                    }),
                ],
            });
        case y.rbe.GUILD_DIRECTORY:
            let b = a?.features.has(y.GuildFeatures.HUB) ? O.intl.formatToPlainString(O.t.Dy2aht, { guildName: t }) : t;
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    null !== A ? (0, l.jsx)(G.A.ChannelIcon, { icon: A, "aria-hidden": !0 }) : null,
                    (0, l.jsxs)(G.A.Title, {
                        level: I,
                        onContextMenu: d,
                        onClick: o,
                        children: [null != j ? (0, l.jsxs)(x.A, { children: [j, ":"] }) : null, " ", b],
                    }),
                ],
            });
        default:
            return null;
    }
}
let V = (e) => {
    let { channel: n } = e,
        t = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        s = (0, a.bG)([f.default], () => f.default.getUser(n.getRecipientId())),
        r = (0, a.bG)([C.A], () => (null != s ? C.A.getUserProfile(s.id) : null)),
        c = null != r && (r?.fetchEndedAt ?? 0) > 0;
    return (i.useEffect(() => {
        t?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, b.A)(s.id, s.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0,
            });
    }, [t, s]),
    n.isDM() && t?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, l.jsx)(A.A, { type: A.A.Types.STAFF_ONLY_DM })
            : c && !r.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, l.jsx)(A.A, { type: A.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
};
function H(e, n) {
    switch (e.type) {
        case y.rbe.DM:
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(V, { channel: e }), (0, l.jsx)(U.A, { channel: e }, e.id)],
            });
        case y.rbe.GUILD_ANNOUNCEMENT:
        case y.rbe.GUILD_TEXT:
        case y.rbe.GUILD_VOICE:
        case y.rbe.GUILD_STAGE_VOICE:
        case y.rbe.GROUP_DM:
            return null != n ? (0, l.jsx)(v.A, { channel: e, guild: n }, e.id) : null;
        default:
            return null;
    }
}
function B(e, n) {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null !== e && (0, l.jsx)(G.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, l.jsx)(x.A, { children: n }),
        ],
    });
}
function z(e) {
    let { guild: n, channel: t, caretPosition: s = "left" } = e,
        r = (0, a.bG)([_.A], () => _.A.getGuildId()),
        c = (0, E.lI)(),
        d = i.useRef(null);
    return (r === y.YYv || c) && null != n
        ? (0, l.jsx)(o.m, {
              asContainer: !0,
              text: n.name,
              targetElementRef: d,
              position: "bottom",
              children: (0, l.jsxs)(u.D, {
                  onClick: () => {
                      (0, p.uh)(n.id, t.id);
                  },
                  className: S.ED,
                  children: [
                      "left" === s && (0, l.jsx)(G.A.Caret, { direction: "left" }),
                      (0, l.jsx)("div", {
                          ref: d,
                          children: (0, l.jsx)(I.Ay, {
                              guild: n,
                              size: I.Ay.Sizes.SMALLER,
                              className: S.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, l.jsx)(G.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

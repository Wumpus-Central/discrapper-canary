t.d(n, { EP: () => J, i$: () => en, zF: () => K });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(17928),
    c = t(554146),
    o = t(990078),
    d = t(834730),
    u = t(939249),
    h = t(789645),
    m = t(140735),
    x = t(730852),
    A = t(672979),
    g = t(397244),
    j = t(714114),
    N = t(394871),
    p = t(429913),
    C = t(709066),
    f = t(47167),
    E = t(713654),
    b = t(131607),
    I = t(409626),
    T = t(692969),
    v = t(548118),
    _ = t(394953),
    D = t(976860),
    U = t(378570),
    L = t(841595),
    M = t(903209),
    k = t(290863),
    y = t(994500),
    G = t(967198),
    S = t(287809),
    R = t(486020),
    O = t(975571),
    P = t(477554),
    F = t(282978),
    V = t(95655),
    H = t(565265),
    z = t(742589),
    B = t(849205),
    w = t(652215),
    X = t(49999),
    Q = t(375708),
    Y = t(964623);
function Z(e) {
    let { channel: n, children: t } = e,
        i = (0, p.h)(n.linkedLobby?.application_id),
        [s, a] = (0, b.kn)([c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == i) return null;
    let r = R.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 14 }),
        [m, x] =
            s !== c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [Q.intl.string(Q.t["XJVlf/"]), void 0]
                : [
                      (0, l.jsxs)(
                          "div",
                          {
                              className: Y.lE,
                              children: [
                                  (0, l.jsx)(d.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: Q.intl.string(Q.t.YIVr4B),
                                  }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: Q.intl.format(Q.t["16aguo"], {
                                          helpdeskArticle: O.A.getArticleURL(w.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                                  (0, l.jsx)(u.D, {
                                      className: Y.Q1,
                                      onClick: () => a(X.i.USER_DISMISS),
                                      children: (0, l.jsx)(h.P, { className: Y.U0, color: "currentColor" }),
                                  }),
                              ],
                          },
                          0,
                      ),
                      Q.intl.string(Q.t.YIVr4B),
                  ];
    return (0, l.jsx)(
        o.m,
        {
            position: "bottom",
            align: "left",
            __unsupportedReactNodeAsText: m,
            "aria-label": x,
            forceOpen: s === c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (0, l.jsxs)("div", {
                className: Y.hl,
                children: [
                    t,
                    (0, l.jsxs)(d.E, {
                        className: Y.iO,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: ["\u2022", (0, l.jsx)("img", { alt: "", src: r, className: Y.NB }), i.name],
                    }),
                ],
            }),
        },
        s,
    );
}
function K(e) {
    let {
            channel: n,
            channelName: t,
            parentChannel: s,
            guild: r,
            inSidebar: c = !1,
            handleClick: o,
            handleContextMenu: d,
            handleParentClick: u,
            handleParentContextMenu: h,
            renderFollowButton: x,
        } = e,
        A = (0, E.gU)(n, r),
        { prefix: g, level: j } = (function (e, n) {
            switch (e) {
                case w.rbe.DM:
                    return { prefix: Q.intl.string(Q.t.EJRzg7), level: 1 };
                case w.rbe.GROUP_DM:
                    return { prefix: Q.intl.string(Q.t["e5y+gm"]), level: 1 };
                case w.rbe.GUILD_DIRECTORY:
                case w.rbe.GUILD_ANNOUNCEMENT:
                case w.rbe.GUILD_TEXT:
                case w.rbe.GUILD_FORUM:
                case w.rbe.GUILD_MEDIA:
                case w.rbe.GUILD_STAGE_VOICE:
                case w.rbe.GUILD_VOICE:
                    return { prefix: n?.name ?? "", level: 1 };
                case w.rbe.ANNOUNCEMENT_THREAD:
                case w.rbe.PUBLIC_THREAD:
                case w.rbe.PRIVATE_THREAD:
                    return { prefix: Q.intl.string(Q.t["7Xm5QI"]), level: 2 };
                default:
                    return { prefix: null, level: 1 };
            }
        })(n.type, r),
        N = (0, l.jsxs)(l.Fragment, {
            children: [null != g ? (0, l.jsxs)(m.A, { children: [g, ":"] }) : null, " ", t],
        });
    switch (n.type) {
        case w.rbe.DM:
            return (0, l.jsx)(B.A, { level: j, channel: n, handleClick: o, handleContextMenu: d });
        case w.rbe.GROUP_DM:
            if (n.isManaged()) return N;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(m.A, { children: Q.intl.string(Q.t["e5y+gm"]) }),
                    (0, l.jsx)(V.n, { channel: n }, `channel-${n.id}`),
                ],
            });
        case w.rbe.GUILD_ANNOUNCEMENT:
        case w.rbe.GUILD_TEXT:
        case w.rbe.GUILD_FORUM:
        case w.rbe.GUILD_MEDIA:
            return null != n.linkedLobby
                ? (0, l.jsxs)(Z, {
                      channel: n,
                      children: [
                          ee(
                              A,
                              n.type === w.rbe.GUILD_ANNOUNCEMENT
                                  ? Q.intl.string(Q.t.l1dkSD)
                                  : Q.intl.string(Q.t.Pnajj0),
                          ),
                          (0, l.jsx)(z.A.Title, { level: j, onContextMenu: d, onClick: o, children: N }),
                      ],
                  })
                : (0, l.jsxs)(i.Fragment, {
                      children: [
                          ee(
                              A,
                              n.type === w.rbe.GUILD_ANNOUNCEMENT
                                  ? Q.intl.string(Q.t.l1dkSD)
                                  : Q.intl.string(Q.t.Pnajj0),
                          ),
                          (0, l.jsx)(z.A.Title, { level: j, onContextMenu: d, onClick: o, children: N }),
                          null != x ? x() : null,
                      ],
                  });
        case w.rbe.GUILD_VOICE:
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    ee(A, Q.intl.string(Q.t.BVZqJl)),
                    (0, l.jsx)(z.A.Title, { level: j, onContextMenu: d, onClick: o, children: N }),
                ],
            });
        case w.rbe.GUILD_STAGE_VOICE:
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    ee(A, Q.intl.string(Q.t.EErMzA)),
                    (0, l.jsx)(z.A.Title, { level: j, onContextMenu: d, onClick: o, children: N }),
                ],
            });
        case w.rbe.ANNOUNCEMENT_THREAD:
        case w.rbe.PUBLIC_THREAD:
        case w.rbe.PRIVATE_THREAD:
            let p = null;
            if (!c && null != s) {
                let e = (0, E.gU)(s, r);
                p = (0, l.jsxs)(i.Fragment, {
                    children: [
                        ee(e, Q.intl.string(Q.t.Pnajj0)),
                        (0, l.jsx)(z.A.Title, {
                            level: j,
                            onContextMenu: h,
                            onClick: u,
                            className: a()(Y.rg, Y.or),
                            children: (0, f.m1)(s, S.default, y.A),
                        }),
                        (0, l.jsx)(z.A.Caret, {}),
                    ],
                });
            }
            let C = s?.type != null && w.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    p,
                    ee(C ? null : A, Q.intl.string(Q.t["7Xm5QI"])),
                    (0, l.jsx)(z.A.Title, {
                        level: j,
                        onContextMenu: d,
                        onClick: o,
                        className: a()({ [Y.or]: c }),
                        children: N,
                    }),
                ],
            });
        case w.rbe.GUILD_DIRECTORY:
            let b = r?.features.has(w.GuildFeatures.HUB) ? Q.intl.formatToPlainString(Q.t.Dy2aht, { guildName: t }) : t;
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    null !== A ? (0, l.jsx)(z.A.ChannelIcon, { icon: A, "aria-hidden": !0 }) : null,
                    (0, l.jsxs)(z.A.Title, {
                        level: j,
                        onContextMenu: d,
                        onClick: o,
                        children: [null != g ? (0, l.jsxs)(m.A, { children: [g, ":"] }) : null, " ", b],
                    }),
                ],
            });
        default:
            return null;
    }
}
function q(e) {
    let { channel: n } = e,
        t = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        s = (0, r.bG)([S.default], () => S.default.getUser(n.getRecipientId())),
        a = (0, r.bG)([L.A], () => (null != s ? L.A.getUserProfile(s.id) : null)),
        c = null != a && (a?.fetchEndedAt ?? 0) > 0;
    return (i.useEffect(() => {
        t?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, M.A)(s.id, s.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0,
            });
    }, [t, s]),
    n.isDM() && t?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, l.jsx)(C.A, { type: C.A.Types.STAFF_ONLY_DM })
            : c && !a.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, l.jsx)(C.A, { type: C.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
}
function W(e) {
    let { channel: n, enabled: t } = e,
        s = n.getRecipientId(),
        [a, c, o] = (0, r.yK)([S.default, k.A], () => [S.default.getUser(s), k.A.getActivities(s), k.A.getStatus(s)], [
            s,
        ]),
        { voiceChannel: h } = (0, j.Ay)({ userId: s }),
        m = (0, g.A)({ activities: c, status: o, applicationStream: null, voiceChannel: h }),
        p = i.useMemo(
            () =>
                c?.filter((e) => {
                    let { type: n } = e;
                    return n !== w.$pd.CUSTOM_STATUS && n !== w.$pd.HANG_STATUS;
                }) ?? [],
            [c],
        ),
        C = i.useMemo(
            () =>
                c?.filter((e) => {
                    let { type: n } = e;
                    return n === w.$pd.CUSTOM_STATUS;
                }) ?? [],
            [c],
        ),
        f = p[0] ?? null,
        E = C.length > 0,
        b = p.length > 0 || null != h,
        v = null != f && (0, A.A)(f) ? f.application_id : void 0,
        _ = (0, T.A)({ applicationId: v, source: I.Ob.DmHeaderActivity, trackEntryPointImpression: !1 }),
        D = null != _ || null != h,
        L = i.useCallback(
            (e) => {
                null != _ ? _(e) : null != h && (x.default.selectVoiceChannel(h.id), (0, U.iN)(h.id));
            },
            [_, h],
        );
    if (!t || !m) return (0, l.jsx)(F.A, { channel: n });
    if (D && E)
        return (0, l.jsxs)("div", {
            className: Y.aQ,
            children: [
                (0, l.jsx)(u.D, {
                    className: Y.gr,
                    onClick: L,
                    children: (0, l.jsx)(N.A, {
                        user: a,
                        activities: p,
                        applicationStream: null,
                        voiceChannel: h,
                        textSize: "sm",
                    }),
                }),
                b && (0, l.jsx)(d.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                (0, l.jsx)(N.A, {
                    user: a,
                    activities: C,
                    applicationStream: null,
                    voiceChannel: null,
                    textSize: "sm",
                }),
            ],
        });
    let M = (0, l.jsx)(N.A, { user: a, activities: c, applicationStream: null, voiceChannel: h, textSize: "sm" });
    return (0, l.jsx)("div", {
        className: Y.aQ,
        children: D ? (0, l.jsx)(u.D, { className: Y.gr, onClick: L, children: M }) : M,
    });
}
function $(e) {
    let { channel: n } = e,
        { enabled: t } = P.A.useConfig({ location: "DMHeaderActivityStatus" });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(q, { channel: n }), (0, l.jsx)(W, { channel: n, enabled: t }, n.id)],
    });
}
function J(e, n) {
    switch (e.type) {
        case w.rbe.DM:
            return (0, l.jsx)($, { channel: e });
        case w.rbe.GUILD_ANNOUNCEMENT:
        case w.rbe.GUILD_TEXT:
        case w.rbe.GUILD_VOICE:
        case w.rbe.GUILD_STAGE_VOICE:
        case w.rbe.GROUP_DM:
            return null != n ? (0, l.jsx)(H.A, { channel: e, guild: n }, e.id) : null;
        default:
            return null;
    }
}
function ee(e, n) {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null !== e && (0, l.jsx)(z.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, l.jsx)(m.A, { children: n }),
        ],
    });
}
function en(e) {
    let { guild: n, channel: t, caretPosition: s = "left" } = e,
        a = (0, r.bG)([G.A], () => G.A.getGuildId()),
        c = (0, _.lI)(),
        d = i.useRef(null);
    return (a === w.YYv || c) && null != n
        ? (0, l.jsx)(o.m, {
              asContainer: !0,
              text: n.name,
              targetElementRef: d,
              position: "bottom",
              children: (0, l.jsxs)(u.D, {
                  onClick: () => {
                      (0, D.uh)(n.id, t.id);
                  },
                  className: Y.ED,
                  children: [
                      "left" === s && (0, l.jsx)(z.A.Caret, { direction: "left" }),
                      (0, l.jsx)("div", {
                          ref: d,
                          children: (0, l.jsx)(v.Ay, {
                              guild: n,
                              size: v.Ay.Sizes.SMALLER,
                              className: Y.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, l.jsx)(z.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

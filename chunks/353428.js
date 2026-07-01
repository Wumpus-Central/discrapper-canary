n.d(t, { EP: () => ee, i$: () => en, zF: () => K });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    c = n(554146),
    o = n(312640),
    d = n(798618),
    u = n(916845),
    h = n(990078),
    m = n(834730),
    x = n(140735),
    A = n(939249),
    g = n(672979),
    j = n(397244),
    p = n(714114),
    N = n(394871),
    f = n(429913),
    C = n(709066),
    E = n(47167),
    b = n(713654),
    I = n(131607),
    T = n(409626),
    v = n(692969),
    D = n(548118),
    _ = n(394953),
    U = n(976860),
    M = n(378570),
    L = n(321191),
    y = n(903209),
    S = n(290863),
    k = n(994500),
    G = n(967198),
    R = n(287809),
    O = n(486020),
    P = n(975571),
    F = n(477554),
    V = n(282978),
    H = n(95655),
    z = n(565265),
    w = n(742589),
    B = n(849205),
    X = n(652215),
    Q = n(49999),
    q = n(375708),
    Y = n(964623);
function Z(e) {
    let { channel: t, children: n } = e,
        s = (0, f.h)(t.linkedLobby?.application_id),
        [a, r] = (0, I.kn)([c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0),
        x = i.useRef(null);
    if (null == s) return null;
    let A = O.Ay.getApplicationIconURL({ id: s.id, icon: s.icon, size: 14 }),
        g = a === c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP,
        j = (0, l.jsxs)("div", {
            ref: x,
            className: Y.hl,
            children: [
                n,
                (0, l.jsxs)(m.E, {
                    className: Y.iO,
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: ["\u2022", (0, l.jsx)("img", { alt: "", src: A, className: Y.NB }), s.name],
                }),
            ],
        });
    return g
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  j,
                  (0, l.jsxs)(o.x, {
                      targetElementRef: x,
                      shouldShow: !0,
                      position: "bottom",
                      alignmentStrategy: "edge",
                      align: "left",
                      onRequestClose: () => r(Q.i.USER_DISMISS),
                      children: [
                          (0, l.jsx)(u.q, { onClick: () => r(Q.i.USER_DISMISS) }),
                          (0, l.jsxs)("div", {
                              className: Y.lE,
                              children: [
                                  (0, l.jsx)(m.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: q.intl.string(q.t.YIVr4B),
                                  }),
                                  (0, l.jsx)(m.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: q.intl.format(q.t.w8VWRT, {
                                          helpdeskArticle: P.A.getArticleURL(X.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(d.F, {}),
                      ],
                  }),
              ],
          })
        : (0, l.jsx)(h.m, { position: "bottom", align: "left", text: q.intl.string(q.t["XJVlf/"]), children: j });
}
function K(e) {
    let {
            channel: t,
            channelName: n,
            parentChannel: s,
            guild: r,
            inSidebar: c = !1,
            handleClick: o,
            handleContextMenu: d,
            handleParentClick: u,
            handleParentContextMenu: h,
            renderFollowButton: m,
        } = e,
        A = (0, b.gU)(t, r),
        { prefix: g, level: j } = (function (e, t) {
            switch (e) {
                case X.rbe.DM:
                    return { prefix: q.intl.string(q.t.EJRzg7), level: 1 };
                case X.rbe.GROUP_DM:
                    return { prefix: q.intl.string(q.t["e5y+gm"]), level: 1 };
                case X.rbe.GUILD_DIRECTORY:
                case X.rbe.GUILD_ANNOUNCEMENT:
                case X.rbe.GUILD_TEXT:
                case X.rbe.GUILD_FORUM:
                case X.rbe.GUILD_MEDIA:
                case X.rbe.GUILD_STAGE_VOICE:
                case X.rbe.GUILD_VOICE:
                    return { prefix: t?.name ?? "", level: 1 };
                case X.rbe.ANNOUNCEMENT_THREAD:
                case X.rbe.PUBLIC_THREAD:
                case X.rbe.PRIVATE_THREAD:
                    return { prefix: q.intl.string(q.t["7Xm5QI"]), level: 2 };
                default:
                    return { prefix: null, level: 1 };
            }
        })(t.type, r),
        p = (0, l.jsxs)(l.Fragment, {
            children: [null != g ? (0, l.jsxs)(x.A, { children: [g, ":"] }) : null, " ", n],
        });
    switch (t.type) {
        case X.rbe.DM:
            return (0, l.jsx)(B.A, { level: j, channel: t, handleClick: o, handleContextMenu: d });
        case X.rbe.GROUP_DM:
            if (t.isManaged()) return p;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(x.A, { children: q.intl.string(q.t["e5y+gm"]) }),
                    (0, l.jsx)(H.n, { channel: t }, `channel-${t.id}`),
                ],
            });
        case X.rbe.GUILD_ANNOUNCEMENT:
        case X.rbe.GUILD_TEXT:
        case X.rbe.GUILD_FORUM:
        case X.rbe.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, l.jsxs)(Z, {
                      channel: t,
                      children: [
                          et(
                              A,
                              t.type === X.rbe.GUILD_ANNOUNCEMENT
                                  ? q.intl.string(q.t.l1dkSD)
                                  : q.intl.string(q.t.Pnajj0),
                          ),
                          (0, l.jsx)(w.A.Title, { level: j, onContextMenu: d, onClick: o, children: p }),
                      ],
                  })
                : (0, l.jsxs)(i.Fragment, {
                      children: [
                          et(
                              A,
                              t.type === X.rbe.GUILD_ANNOUNCEMENT
                                  ? q.intl.string(q.t.l1dkSD)
                                  : q.intl.string(q.t.Pnajj0),
                          ),
                          (0, l.jsx)(w.A.Title, { level: j, onContextMenu: d, onClick: o, children: p }),
                          null != m ? m() : null,
                      ],
                  });
        case X.rbe.GUILD_VOICE:
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    et(A, q.intl.string(q.t.BVZqJl)),
                    (0, l.jsx)(w.A.Title, { level: j, onContextMenu: d, onClick: o, children: p }),
                ],
            });
        case X.rbe.GUILD_STAGE_VOICE:
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    et(A, q.intl.string(q.t.EErMzA)),
                    (0, l.jsx)(w.A.Title, { level: j, onContextMenu: d, onClick: o, children: p }),
                ],
            });
        case X.rbe.ANNOUNCEMENT_THREAD:
        case X.rbe.PUBLIC_THREAD:
        case X.rbe.PRIVATE_THREAD:
            let N = null;
            if (!c && null != s) {
                let e = (0, b.gU)(s, r);
                N = (0, l.jsxs)(i.Fragment, {
                    children: [
                        et(e, q.intl.string(q.t.Pnajj0)),
                        (0, l.jsx)(w.A.Title, {
                            level: j,
                            onContextMenu: h,
                            onClick: u,
                            className: a()(Y.rg, Y.or),
                            children: (0, E.m1)(s, R.default, k.A),
                        }),
                        (0, l.jsx)(w.A.Caret, {}),
                    ],
                });
            }
            let f = s?.type != null && X.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    N,
                    et(f ? null : A, q.intl.string(q.t["7Xm5QI"])),
                    (0, l.jsx)(w.A.Title, {
                        level: j,
                        onContextMenu: d,
                        onClick: o,
                        className: a()({ [Y.or]: c }),
                        children: p,
                    }),
                ],
            });
        case X.rbe.GUILD_DIRECTORY:
            let C = r?.features.has(X.GuildFeatures.HUB) ? q.intl.formatToPlainString(q.t.Dy2aht, { guildName: n }) : n;
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    null !== A ? (0, l.jsx)(w.A.ChannelIcon, { icon: A, "aria-hidden": !0 }) : null,
                    (0, l.jsxs)(w.A.Title, {
                        level: j,
                        onContextMenu: d,
                        onClick: o,
                        children: [null != g ? (0, l.jsxs)(x.A, { children: [g, ":"] }) : null, " ", C],
                    }),
                ],
            });
        default:
            return null;
    }
}
function W(e) {
    let { channel: t } = e,
        n = (0, r.bG)([R.default], () => R.default.getCurrentUser()),
        s = (0, r.bG)([R.default], () => R.default.getUser(t.getRecipientId())),
        a = (0, r.bG)([L.A], () => (null != s ? L.A.getUserProfile(s.id) : null)),
        c = null != a && (a?.fetchEndedAt ?? 0) > 0;
    return (i.useEffect(() => {
        n?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, y.A)(s.id, s.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0,
            });
    }, [n, s]),
    t.isDM() && n?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, l.jsx)(C.A, { type: C.A.Types.STAFF_ONLY_DM })
            : c && !a.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, l.jsx)(C.A, { type: C.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
}
function $(e) {
    let { channel: t, enabled: n } = e,
        s = t.getRecipientId(),
        [a, c, o] = (0, r.yK)([R.default, S.A], () => [R.default.getUser(s), S.A.getActivities(s), S.A.getStatus(s)], [
            s,
        ]),
        { voiceChannel: d } = (0, p.Ay)({ userId: s }),
        u = (0, j.A)({ activities: c, status: o, applicationStream: null, voiceChannel: d }),
        h = i.useMemo(
            () =>
                c?.filter((e) => {
                    let { type: t } = e;
                    return t !== X.$pd.CUSTOM_STATUS && t !== X.$pd.HANG_STATUS;
                }) ?? [],
            [c],
        ),
        x = i.useMemo(
            () =>
                c?.filter((e) => {
                    let { type: t } = e;
                    return t === X.$pd.CUSTOM_STATUS;
                }) ?? [],
            [c],
        ),
        f = h[0] ?? null,
        C = x.length > 0,
        E = h.length > 0 || null != d,
        b = null != f && (0, g.A)(f) ? f.application_id : void 0,
        I = (0, v.A)({
            applicationId: b,
            source: T.GameProfileSources.DmHeaderActivity,
            trackEntryPointImpression: !1,
        }),
        D = null != I || null != d,
        _ = i.useCallback(
            (e) => {
                null != I ? I(e) : null != d && (0, M.iN)(d.id);
            },
            [I, d],
        );
    if (!n || !u) return (0, l.jsx)(V.A, { channel: t });
    if (D && C)
        return (0, l.jsxs)("div", {
            className: Y.aQ,
            children: [
                (0, l.jsx)(A.D, {
                    className: Y.gr,
                    onClick: _,
                    children: (0, l.jsx)(N.A, {
                        user: a,
                        activities: h,
                        applicationStream: null,
                        voiceChannel: d,
                        textSize: "sm",
                    }),
                }),
                E && (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                (0, l.jsx)(N.A, {
                    user: a,
                    activities: x,
                    applicationStream: null,
                    voiceChannel: null,
                    textSize: "sm",
                }),
            ],
        });
    let U = (0, l.jsx)(N.A, { user: a, activities: c, applicationStream: null, voiceChannel: d, textSize: "sm" });
    return (0, l.jsx)("div", {
        className: Y.aQ,
        children: D ? (0, l.jsx)(A.D, { className: Y.gr, onClick: _, children: U }) : U,
    });
}
function J(e) {
    let { channel: t } = e,
        { enabled: n } = F.A.useConfig({ location: "DMHeaderActivityStatus" });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(W, { channel: t }), (0, l.jsx)($, { channel: t, enabled: n }, t.id)],
    });
}
function ee(e, t) {
    switch (e.type) {
        case X.rbe.DM:
            return (0, l.jsx)(J, { channel: e });
        case X.rbe.GUILD_ANNOUNCEMENT:
        case X.rbe.GUILD_TEXT:
        case X.rbe.GUILD_VOICE:
        case X.rbe.GUILD_STAGE_VOICE:
        case X.rbe.GROUP_DM:
            return null != t ? (0, l.jsx)(z.A, { channel: e, guild: t }, e.id) : null;
        default:
            return null;
    }
}
function et(e, t) {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null !== e && (0, l.jsx)(w.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, l.jsx)(x.A, { children: t }),
        ],
    });
}
function en(e) {
    let { guild: t, channel: n, caretPosition: s = "left" } = e,
        a = (0, r.bG)([G.A], () => G.A.getGuildId()),
        c = (0, _.lI)(),
        o = i.useRef(null);
    return (a === X.YYv || c) && null != t
        ? (0, l.jsx)(h.m, {
              asContainer: !0,
              text: t.name,
              targetElementRef: o,
              position: "bottom",
              children: (0, l.jsxs)(A.D, {
                  onClick: () => {
                      (0, U.uh)(t.id, n.id);
                  },
                  className: Y.ED,
                  children: [
                      "left" === s && (0, l.jsx)(w.A.Caret, { direction: "left" }),
                      (0, l.jsx)("div", {
                          ref: o,
                          children: (0, l.jsx)(D.Ay, {
                              guild: t,
                              size: D.Ay.Sizes.SMALLER,
                              className: Y.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, l.jsx)(w.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

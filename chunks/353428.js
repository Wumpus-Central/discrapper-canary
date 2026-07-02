l.d(n, { EP: () => W, i$: () => en, zF: () => q });
var t = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
    a = l(17928),
    c = l(554146),
    o = l(312640),
    d = l(798618),
    u = l(916845),
    h = l(990078),
    x = l(834730),
    m = l(140735),
    A = l(939249),
    g = l(672979),
    j = l(397244),
    E = l(714114),
    N = l(394871),
    f = l(429913),
    C = l(709066),
    p = l(47167),
    b = l(713654),
    T = l(131607),
    v = l(409626),
    I = l(692969),
    _ = l(548118),
    D = l(394953),
    M = l(976860),
    U = l(378570),
    L = l(321191),
    S = l(903209),
    R = l(290863),
    y = l(994500),
    G = l(967198),
    k = l(287809),
    O = l(486020),
    F = l(975571),
    P = l(477554),
    V = l(95655),
    H = l(565265),
    z = l(742589),
    B = l(849205),
    w = l(652215),
    X = l(49999),
    Q = l(375708),
    Y = l(964623);
function Z(e) {
    let { channel: n, children: l } = e,
        s = (0, f.h)(n.linkedLobby?.application_id),
        [r, a] = (0, T.kn)([c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0),
        m = i.useRef(null);
    if (null == s) return null;
    let A = O.Ay.getApplicationIconURL({ id: s.id, icon: s.icon, size: 14 }),
        g = r === c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP,
        j = (0, t.jsxs)("div", {
            ref: m,
            className: Y.hl,
            children: [
                l,
                (0, t.jsxs)(x.E, {
                    className: Y.iO,
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: ["\u2022", (0, t.jsx)("img", { alt: "", src: A, className: Y.NB }), s.name],
                }),
            ],
        });
    return g
        ? (0, t.jsxs)(t.Fragment, {
              children: [
                  j,
                  (0, t.jsxs)(o.x, {
                      targetElementRef: m,
                      shouldShow: !0,
                      position: "bottom",
                      alignmentStrategy: "edge",
                      align: "left",
                      onRequestClose: () => a(X.i.USER_DISMISS),
                      children: [
                          (0, t.jsx)(u.q, { onClick: () => a(X.i.USER_DISMISS) }),
                          (0, t.jsxs)("div", {
                              className: Y.lE,
                              children: [
                                  (0, t.jsx)(x.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: Q.intl.string(Q.t.YIVr4B),
                                  }),
                                  (0, t.jsx)(x.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: Q.intl.format(Q.t.w8VWRT, {
                                          helpdeskArticle: F.A.getArticleURL(w.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                              ],
                          }),
                          (0, t.jsx)(d.F, {}),
                      ],
                  }),
              ],
          })
        : (0, t.jsx)(h.m, { position: "bottom", align: "left", text: Q.intl.string(Q.t["XJVlf/"]), children: j });
}
function q(e) {
    let {
            channel: n,
            channelName: l,
            parentChannel: s,
            guild: a,
            inSidebar: c = !1,
            handleClick: o,
            handleContextMenu: d,
            handleParentClick: u,
            handleParentContextMenu: h,
            renderFollowButton: x,
        } = e,
        A = (0, b.gU)(n, a),
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
        })(n.type, a),
        E = (0, t.jsxs)(t.Fragment, {
            children: [null != g ? (0, t.jsxs)(m.A, { children: [g, ":"] }) : null, " ", l],
        });
    switch (n.type) {
        case w.rbe.DM:
            return (0, t.jsx)(B.A, { level: j, channel: n, handleClick: o, handleContextMenu: d });
        case w.rbe.GROUP_DM:
            if (n.isManaged()) return E;
            return (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(m.A, { children: Q.intl.string(Q.t["e5y+gm"]) }),
                    (0, t.jsx)(V.n, { channel: n }, `channel-${n.id}`),
                ],
            });
        case w.rbe.GUILD_ANNOUNCEMENT:
        case w.rbe.GUILD_TEXT:
        case w.rbe.GUILD_FORUM:
        case w.rbe.GUILD_MEDIA:
            return null != n.linkedLobby
                ? (0, t.jsxs)(Z, {
                      channel: n,
                      children: [
                          ee(
                              A,
                              n.type === w.rbe.GUILD_ANNOUNCEMENT
                                  ? Q.intl.string(Q.t.l1dkSD)
                                  : Q.intl.string(Q.t.Pnajj0),
                          ),
                          (0, t.jsx)(z.A.Title, { level: j, onContextMenu: d, onClick: o, children: E }),
                      ],
                  })
                : (0, t.jsxs)(i.Fragment, {
                      children: [
                          ee(
                              A,
                              n.type === w.rbe.GUILD_ANNOUNCEMENT
                                  ? Q.intl.string(Q.t.l1dkSD)
                                  : Q.intl.string(Q.t.Pnajj0),
                          ),
                          (0, t.jsx)(z.A.Title, { level: j, onContextMenu: d, onClick: o, children: E }),
                          null != x ? x() : null,
                      ],
                  });
        case w.rbe.GUILD_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    ee(A, Q.intl.string(Q.t.BVZqJl)),
                    (0, t.jsx)(z.A.Title, { level: j, onContextMenu: d, onClick: o, children: E }),
                ],
            });
        case w.rbe.GUILD_STAGE_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    ee(A, Q.intl.string(Q.t.EErMzA)),
                    (0, t.jsx)(z.A.Title, { level: j, onContextMenu: d, onClick: o, children: E }),
                ],
            });
        case w.rbe.ANNOUNCEMENT_THREAD:
        case w.rbe.PUBLIC_THREAD:
        case w.rbe.PRIVATE_THREAD:
            let N = null;
            if (!c && null != s) {
                let e = (0, b.gU)(s, a);
                N = (0, t.jsxs)(i.Fragment, {
                    children: [
                        ee(e, Q.intl.string(Q.t.Pnajj0)),
                        (0, t.jsx)(z.A.Title, {
                            level: j,
                            onContextMenu: h,
                            onClick: u,
                            className: r()(Y.rg, Y.or),
                            children: (0, p.m1)(s, k.default, y.A),
                        }),
                        (0, t.jsx)(z.A.Caret, {}),
                    ],
                });
            }
            let f = s?.type != null && w.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    N,
                    ee(f ? null : A, Q.intl.string(Q.t["7Xm5QI"])),
                    (0, t.jsx)(z.A.Title, {
                        level: j,
                        onContextMenu: d,
                        onClick: o,
                        className: r()({ [Y.or]: c }),
                        children: E,
                    }),
                ],
            });
        case w.rbe.GUILD_DIRECTORY:
            let C = a?.features.has(w.GuildFeatures.HUB) ? Q.intl.formatToPlainString(Q.t.Dy2aht, { guildName: l }) : l;
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    null !== A ? (0, t.jsx)(z.A.ChannelIcon, { icon: A, "aria-hidden": !0 }) : null,
                    (0, t.jsxs)(z.A.Title, {
                        level: j,
                        onContextMenu: d,
                        onClick: o,
                        children: [null != g ? (0, t.jsxs)(m.A, { children: [g, ":"] }) : null, " ", C],
                    }),
                ],
            });
        default:
            return null;
    }
}
function J(e) {
    let { channel: n } = e,
        l = (0, a.bG)([k.default], () => k.default.getCurrentUser()),
        s = (0, a.bG)([k.default], () => k.default.getUser(n.getRecipientId())),
        r = (0, a.bG)([L.A], () => (null != s ? L.A.getUserProfile(s.id) : null)),
        c = null != r && (r?.fetchEndedAt ?? 0) > 0;
    return (i.useEffect(() => {
        l?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, S.A)(s.id, s.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0,
            });
    }, [l, s]),
    n.isDM() && l?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, t.jsx)(C.A, { type: C.A.Types.STAFF_ONLY_DM })
            : c && !r.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, t.jsx)(C.A, { type: C.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
}
function K(e) {
    let { channel: n, enabled: l } = e,
        s = n.getRecipientId(),
        [r, c, o] = (0, a.yK)([k.default, R.A], () => [k.default.getUser(s), R.A.getActivities(s), R.A.getStatus(s)], [
            s,
        ]),
        { voiceChannel: d } = (0, E.Ay)({ userId: s }),
        u = (0, j.A)({ activities: c, status: o, applicationStream: null, voiceChannel: d }),
        h = i.useMemo(
            () =>
                c?.filter((e) => {
                    let { type: n } = e;
                    return n !== w.$pd.CUSTOM_STATUS && n !== w.$pd.HANG_STATUS;
                }) ?? [],
            [c],
        ),
        m = i.useMemo(
            () =>
                c?.filter((e) => {
                    let { type: n } = e;
                    return n === w.$pd.CUSTOM_STATUS;
                }) ?? [],
            [c],
        ),
        f = h[0] ?? null,
        C = m.length > 0,
        p = h.length > 0 || null != d,
        b = null != f && (0, g.A)(f) ? f.application_id : void 0,
        T = (0, I.A)({
            applicationId: b,
            source: v.GameProfileSources.DmHeaderActivity,
            trackEntryPointImpression: !1,
        }),
        _ = null != T || null != d,
        D = i.useCallback(
            (e) => {
                null != T ? T(e) : null != d && (0, U.iN)(d.id);
            },
            [T, d],
        );
    if (!l || !u) return null;
    if (_ && C)
        return (0, t.jsxs)("div", {
            className: Y.aQ,
            children: [
                (0, t.jsx)(A.D, {
                    className: Y.gr,
                    onClick: D,
                    children: (0, t.jsx)(N.A, {
                        user: r,
                        activities: h,
                        applicationStream: null,
                        voiceChannel: d,
                        textSize: "sm",
                    }),
                }),
                p && (0, t.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                (0, t.jsx)(N.A, {
                    user: r,
                    activities: m,
                    applicationStream: null,
                    voiceChannel: null,
                    textSize: "sm",
                }),
            ],
        });
    let M = (0, t.jsx)(N.A, { user: r, activities: c, applicationStream: null, voiceChannel: d, textSize: "sm" });
    return (0, t.jsx)("div", {
        className: Y.aQ,
        children: _ ? (0, t.jsx)(A.D, { className: Y.gr, onClick: D, children: M }) : M,
    });
}
function $(e) {
    let { channel: n } = e,
        { enabled: l } = P.A.useConfig({ location: "DMHeaderActivityStatus" });
    return (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(J, { channel: n }), (0, t.jsx)(K, { channel: n, enabled: l }, n.id)],
    });
}
function W(e, n) {
    switch (e.type) {
        case w.rbe.DM:
            return (0, t.jsx)($, { channel: e });
        case w.rbe.GUILD_ANNOUNCEMENT:
        case w.rbe.GUILD_TEXT:
        case w.rbe.GUILD_VOICE:
        case w.rbe.GUILD_STAGE_VOICE:
        case w.rbe.GROUP_DM:
            return null != n ? (0, t.jsx)(H.A, { channel: e, guild: n }, e.id) : null;
        default:
            return null;
    }
}
function ee(e, n) {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null !== e && (0, t.jsx)(z.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, t.jsx)(m.A, { children: n }),
        ],
    });
}
function en(e) {
    let { guild: n, channel: l, caretPosition: s = "left" } = e,
        r = (0, a.bG)([G.A], () => G.A.getGuildId()),
        c = (0, D.lI)(),
        o = i.useRef(null);
    return (r === w.YYv || c) && null != n
        ? (0, t.jsx)(h.m, {
              asContainer: !0,
              text: n.name,
              targetElementRef: o,
              position: "bottom",
              children: (0, t.jsxs)(A.D, {
                  onClick: () => {
                      (0, M.uh)(n.id, l.id);
                  },
                  className: Y.ED,
                  children: [
                      "left" === s && (0, t.jsx)(z.A.Caret, { direction: "left" }),
                      (0, t.jsx)("div", {
                          ref: o,
                          children: (0, t.jsx)(_.Ay, {
                              guild: n,
                              size: _.Ay.Sizes.SMALLER,
                              className: Y.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, t.jsx)(z.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

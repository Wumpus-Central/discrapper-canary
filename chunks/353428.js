n.d(t, { EP: () => et, i$: () => el, zF: () => W });
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
    g = n(730852),
    j = n(672979),
    p = n(397244),
    N = n(714114),
    f = n(394871),
    C = n(429913),
    b = n(709066),
    E = n(47167),
    I = n(713654),
    T = n(131607),
    v = n(409626),
    D = n(692969),
    _ = n(548118),
    U = n(394953),
    M = n(976860),
    L = n(378570),
    y = n(841595),
    k = n(903209),
    S = n(290863),
    G = n(994500),
    R = n(967198),
    O = n(287809),
    P = n(486020),
    F = n(975571),
    V = n(477554),
    H = n(282978),
    z = n(95655),
    w = n(565265),
    B = n(742589),
    X = n(849205),
    Q = n(652215),
    q = n(49999),
    Y = n(375708),
    Z = n(964623);
function K(e) {
    let { channel: t, children: n } = e,
        s = (0, C.h)(t.linkedLobby?.application_id),
        [a, r] = (0, T.kn)([c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0),
        x = i.useRef(null);
    if (null == s) return null;
    let A = P.Ay.getApplicationIconURL({ id: s.id, icon: s.icon, size: 14 }),
        g = a === c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP,
        j = (0, l.jsxs)("div", {
            ref: x,
            className: Z.hl,
            children: [
                n,
                (0, l.jsxs)(m.E, {
                    className: Z.iO,
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: ["\u2022", (0, l.jsx)("img", { alt: "", src: A, className: Z.NB }), s.name],
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
                      onRequestClose: () => r(q.i.USER_DISMISS),
                      children: [
                          (0, l.jsx)(u.q, { onClick: () => r(q.i.USER_DISMISS) }),
                          (0, l.jsxs)("div", {
                              className: Z.lE,
                              children: [
                                  (0, l.jsx)(m.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: Y.intl.string(Y.t.YIVr4B),
                                  }),
                                  (0, l.jsx)(m.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: Y.intl.format(Y.t.w8VWRT, {
                                          helpdeskArticle: F.A.getArticleURL(Q.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(d.F, {}),
                      ],
                  }),
              ],
          })
        : (0, l.jsx)(h.m, { position: "bottom", align: "left", text: Y.intl.string(Y.t["XJVlf/"]), children: j });
}
function W(e) {
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
        A = (0, I.gU)(t, r),
        { prefix: g, level: j } = (function (e, t) {
            switch (e) {
                case Q.rbe.DM:
                    return { prefix: Y.intl.string(Y.t.EJRzg7), level: 1 };
                case Q.rbe.GROUP_DM:
                    return { prefix: Y.intl.string(Y.t["e5y+gm"]), level: 1 };
                case Q.rbe.GUILD_DIRECTORY:
                case Q.rbe.GUILD_ANNOUNCEMENT:
                case Q.rbe.GUILD_TEXT:
                case Q.rbe.GUILD_FORUM:
                case Q.rbe.GUILD_MEDIA:
                case Q.rbe.GUILD_STAGE_VOICE:
                case Q.rbe.GUILD_VOICE:
                    return { prefix: t?.name ?? "", level: 1 };
                case Q.rbe.ANNOUNCEMENT_THREAD:
                case Q.rbe.PUBLIC_THREAD:
                case Q.rbe.PRIVATE_THREAD:
                    return { prefix: Y.intl.string(Y.t["7Xm5QI"]), level: 2 };
                default:
                    return { prefix: null, level: 1 };
            }
        })(t.type, r),
        p = (0, l.jsxs)(l.Fragment, {
            children: [null != g ? (0, l.jsxs)(x.A, { children: [g, ":"] }) : null, " ", n],
        });
    switch (t.type) {
        case Q.rbe.DM:
            return (0, l.jsx)(X.A, { level: j, channel: t, handleClick: o, handleContextMenu: d });
        case Q.rbe.GROUP_DM:
            if (t.isManaged()) return p;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(x.A, { children: Y.intl.string(Y.t["e5y+gm"]) }),
                    (0, l.jsx)(z.n, { channel: t }, `channel-${t.id}`),
                ],
            });
        case Q.rbe.GUILD_ANNOUNCEMENT:
        case Q.rbe.GUILD_TEXT:
        case Q.rbe.GUILD_FORUM:
        case Q.rbe.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, l.jsxs)(K, {
                      channel: t,
                      children: [
                          en(
                              A,
                              t.type === Q.rbe.GUILD_ANNOUNCEMENT
                                  ? Y.intl.string(Y.t.l1dkSD)
                                  : Y.intl.string(Y.t.Pnajj0),
                          ),
                          (0, l.jsx)(B.A.Title, { level: j, onContextMenu: d, onClick: o, children: p }),
                      ],
                  })
                : (0, l.jsxs)(i.Fragment, {
                      children: [
                          en(
                              A,
                              t.type === Q.rbe.GUILD_ANNOUNCEMENT
                                  ? Y.intl.string(Y.t.l1dkSD)
                                  : Y.intl.string(Y.t.Pnajj0),
                          ),
                          (0, l.jsx)(B.A.Title, { level: j, onContextMenu: d, onClick: o, children: p }),
                          null != m ? m() : null,
                      ],
                  });
        case Q.rbe.GUILD_VOICE:
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    en(A, Y.intl.string(Y.t.BVZqJl)),
                    (0, l.jsx)(B.A.Title, { level: j, onContextMenu: d, onClick: o, children: p }),
                ],
            });
        case Q.rbe.GUILD_STAGE_VOICE:
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    en(A, Y.intl.string(Y.t.EErMzA)),
                    (0, l.jsx)(B.A.Title, { level: j, onContextMenu: d, onClick: o, children: p }),
                ],
            });
        case Q.rbe.ANNOUNCEMENT_THREAD:
        case Q.rbe.PUBLIC_THREAD:
        case Q.rbe.PRIVATE_THREAD:
            let N = null;
            if (!c && null != s) {
                let e = (0, I.gU)(s, r);
                N = (0, l.jsxs)(i.Fragment, {
                    children: [
                        en(e, Y.intl.string(Y.t.Pnajj0)),
                        (0, l.jsx)(B.A.Title, {
                            level: j,
                            onContextMenu: h,
                            onClick: u,
                            className: a()(Z.rg, Z.or),
                            children: (0, E.m1)(s, O.default, G.A),
                        }),
                        (0, l.jsx)(B.A.Caret, {}),
                    ],
                });
            }
            let f = s?.type != null && Q.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    N,
                    en(f ? null : A, Y.intl.string(Y.t["7Xm5QI"])),
                    (0, l.jsx)(B.A.Title, {
                        level: j,
                        onContextMenu: d,
                        onClick: o,
                        className: a()({ [Z.or]: c }),
                        children: p,
                    }),
                ],
            });
        case Q.rbe.GUILD_DIRECTORY:
            let C = r?.features.has(Q.GuildFeatures.HUB) ? Y.intl.formatToPlainString(Y.t.Dy2aht, { guildName: n }) : n;
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    null !== A ? (0, l.jsx)(B.A.ChannelIcon, { icon: A, "aria-hidden": !0 }) : null,
                    (0, l.jsxs)(B.A.Title, {
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
function $(e) {
    let { channel: t } = e,
        n = (0, r.bG)([O.default], () => O.default.getCurrentUser()),
        s = (0, r.bG)([O.default], () => O.default.getUser(t.getRecipientId())),
        a = (0, r.bG)([y.A], () => (null != s ? y.A.getUserProfile(s.id) : null)),
        c = null != a && (a?.fetchEndedAt ?? 0) > 0;
    return (i.useEffect(() => {
        n?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, k.A)(s.id, s.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0,
            });
    }, [n, s]),
    t.isDM() && n?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, l.jsx)(b.A, { type: b.A.Types.STAFF_ONLY_DM })
            : c && !a.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, l.jsx)(b.A, { type: b.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
}
function J(e) {
    let { channel: t, enabled: n } = e,
        s = t.getRecipientId(),
        [a, c, o] = (0, r.yK)([O.default, S.A], () => [O.default.getUser(s), S.A.getActivities(s), S.A.getStatus(s)], [
            s,
        ]),
        { voiceChannel: d } = (0, N.Ay)({ userId: s }),
        u = (0, p.A)({ activities: c, status: o, applicationStream: null, voiceChannel: d }),
        h = i.useMemo(
            () =>
                c?.filter((e) => {
                    let { type: t } = e;
                    return t !== Q.$pd.CUSTOM_STATUS && t !== Q.$pd.HANG_STATUS;
                }) ?? [],
            [c],
        ),
        x = i.useMemo(
            () =>
                c?.filter((e) => {
                    let { type: t } = e;
                    return t === Q.$pd.CUSTOM_STATUS;
                }) ?? [],
            [c],
        ),
        C = h[0] ?? null,
        b = x.length > 0,
        E = h.length > 0 || null != d,
        I = null != C && (0, j.A)(C) ? C.application_id : void 0,
        T = (0, D.A)({ applicationId: I, source: v.Ob.DmHeaderActivity, trackEntryPointImpression: !1 }),
        _ = null != T || null != d,
        U = i.useCallback(
            (e) => {
                null != T ? T(e) : null != d && (g.default.selectVoiceChannel(d.id), (0, L.iN)(d.id));
            },
            [T, d],
        );
    if (!n || !u) return (0, l.jsx)(H.A, { channel: t });
    if (_ && b)
        return (0, l.jsxs)("div", {
            className: Z.aQ,
            children: [
                (0, l.jsx)(A.D, {
                    className: Z.gr,
                    onClick: U,
                    children: (0, l.jsx)(f.A, {
                        user: a,
                        activities: h,
                        applicationStream: null,
                        voiceChannel: d,
                        textSize: "sm",
                    }),
                }),
                E && (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                (0, l.jsx)(f.A, {
                    user: a,
                    activities: x,
                    applicationStream: null,
                    voiceChannel: null,
                    textSize: "sm",
                }),
            ],
        });
    let M = (0, l.jsx)(f.A, { user: a, activities: c, applicationStream: null, voiceChannel: d, textSize: "sm" });
    return (0, l.jsx)("div", {
        className: Z.aQ,
        children: _ ? (0, l.jsx)(A.D, { className: Z.gr, onClick: U, children: M }) : M,
    });
}
function ee(e) {
    let { channel: t } = e,
        { enabled: n } = V.A.useConfig({ location: "DMHeaderActivityStatus" });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)($, { channel: t }), (0, l.jsx)(J, { channel: t, enabled: n }, t.id)],
    });
}
function et(e, t) {
    switch (e.type) {
        case Q.rbe.DM:
            return (0, l.jsx)(ee, { channel: e });
        case Q.rbe.GUILD_ANNOUNCEMENT:
        case Q.rbe.GUILD_TEXT:
        case Q.rbe.GUILD_VOICE:
        case Q.rbe.GUILD_STAGE_VOICE:
        case Q.rbe.GROUP_DM:
            return null != t ? (0, l.jsx)(w.A, { channel: e, guild: t }, e.id) : null;
        default:
            return null;
    }
}
function en(e, t) {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null !== e && (0, l.jsx)(B.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, l.jsx)(x.A, { children: t }),
        ],
    });
}
function el(e) {
    let { guild: t, channel: n, caretPosition: s = "left" } = e,
        a = (0, r.bG)([R.A], () => R.A.getGuildId()),
        c = (0, U.lI)(),
        o = i.useRef(null);
    return (a === Q.YYv || c) && null != t
        ? (0, l.jsx)(h.m, {
              asContainer: !0,
              text: t.name,
              targetElementRef: o,
              position: "bottom",
              children: (0, l.jsxs)(A.D, {
                  onClick: () => {
                      (0, M.uh)(t.id, n.id);
                  },
                  className: Z.ED,
                  children: [
                      "left" === s && (0, l.jsx)(B.A.Caret, { direction: "left" }),
                      (0, l.jsx)("div", {
                          ref: o,
                          children: (0, l.jsx)(_.Ay, {
                              guild: t,
                              size: _.Ay.Sizes.SMALLER,
                              className: Z.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, l.jsx)(B.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

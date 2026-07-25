l.d(n, { EP: () => W, i$: () => en, zF: () => Y });
var t = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
    a = l(17928),
    c = l(554146),
    o = l(312640),
    d = l(798618),
    u = l(916845),
    h = l(834730),
    x = l(866665),
    m = l(140735),
    A = l(939249),
    g = l(672979),
    j = l(397244),
    E = l(714114),
    N = l(394871),
    f = l(429913),
    p = l(709066),
    C = l(47167),
    T = l(713654),
    b = l(131607),
    I = l(5180),
    v = l(409626),
    _ = l(692969),
    D = l(548118),
    M = l(394953),
    U = l(976860),
    L = l(378570),
    S = l(321191),
    R = l(903209),
    G = l(290863),
    y = l(994500),
    k = l(967198),
    O = l(287809),
    F = l(486020),
    P = l(975571),
    V = l(95655),
    z = l(565265),
    B = l(742589),
    H = l(849205),
    w = l(652215),
    X = l(49999),
    Q = l(375708),
    Z = l(354919);
function q(e) {
    let { channel: n, children: l } = e,
        s = (0, f.h)(n.linkedLobby?.application_id),
        [r, a] = (0, b.kn)([c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0),
        m = i.useRef(null);
    if (null == s) return null;
    let A = F.Ay.getApplicationIconURL({ id: s.id, icon: s.icon, size: 14 }),
        g = r === c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP,
        j = (0, t.jsxs)("div", {
            ref: m,
            className: Z.hl,
            children: [
                l,
                (0, t.jsxs)(h.E, {
                    className: Z.iO,
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: ["\u2022", (0, t.jsx)("img", { alt: "", src: A, className: Z.NB }), s.name],
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
                              className: Z.lE,
                              children: [
                                  (0, t.jsx)(h.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: Q.intl.string(Q.t.YIVr4B),
                                  }),
                                  (0, t.jsx)(h.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: Q.intl.format(Q.t.w8VWRT, {
                                          helpdeskArticle: P.A.getArticleURL(w.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                              ],
                          }),
                          (0, t.jsx)(d.F, {}),
                      ],
                  }),
              ],
          })
        : (0, t.jsx)(x.m, { position: "bottom", align: "left", text: Q.intl.string(Q.t["XJVlf/"]), children: j });
}
function Y(e) {
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
        A = (0, T.gU)(n, a),
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
            return (0, t.jsx)(H.A, { level: j, channel: n, handleClick: o, handleContextMenu: d });
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
                ? (0, t.jsxs)(q, {
                      channel: n,
                      children: [
                          ee(
                              A,
                              n.type === w.rbe.GUILD_ANNOUNCEMENT
                                  ? Q.intl.string(Q.t.l1dkSD)
                                  : Q.intl.string(Q.t.Pnajj0),
                          ),
                          (0, t.jsx)(B.A.Title, { level: j, onContextMenu: d, onClick: o, children: E }),
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
                          (0, t.jsx)(B.A.Title, { level: j, onContextMenu: d, onClick: o, children: E }),
                          null != x ? x() : null,
                      ],
                  });
        case w.rbe.GUILD_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    ee(A, Q.intl.string(Q.t.BVZqJl)),
                    (0, t.jsx)(B.A.Title, { level: j, onContextMenu: d, onClick: o, children: E }),
                ],
            });
        case w.rbe.GUILD_STAGE_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    ee(A, Q.intl.string(Q.t.EErMzA)),
                    (0, t.jsx)(B.A.Title, { level: j, onContextMenu: d, onClick: o, children: E }),
                ],
            });
        case w.rbe.ANNOUNCEMENT_THREAD:
        case w.rbe.PUBLIC_THREAD:
        case w.rbe.PRIVATE_THREAD:
            let N = null;
            if (!c && null != s) {
                let e = (0, T.gU)(s, a);
                N = (0, t.jsxs)(i.Fragment, {
                    children: [
                        ee(e, Q.intl.string(Q.t.Pnajj0)),
                        (0, t.jsx)(B.A.Title, {
                            level: j,
                            onContextMenu: h,
                            onClick: u,
                            className: r()(Z.rg, Z.or),
                            children: (0, C.m1)(s, O.default, y.A),
                        }),
                        (0, t.jsx)(B.A.Caret, {}),
                    ],
                });
            }
            let f = s?.type != null && w.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    N,
                    ee(f ? null : A, Q.intl.string(Q.t["7Xm5QI"])),
                    (0, t.jsx)(B.A.Title, {
                        level: j,
                        onContextMenu: d,
                        onClick: o,
                        className: r()({ [Z.or]: c }),
                        children: E,
                    }),
                ],
            });
        case w.rbe.GUILD_DIRECTORY:
            let p = a?.features.has(w.GuildFeatures.HUB) ? Q.intl.formatToPlainString(Q.t.Dy2aht, { guildName: l }) : l;
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    null !== A ? (0, t.jsx)(B.A.ChannelIcon, { icon: A, "aria-hidden": !0 }) : null,
                    (0, t.jsxs)(B.A.Title, {
                        level: j,
                        onContextMenu: d,
                        onClick: o,
                        children: [null != g ? (0, t.jsxs)(m.A, { children: [g, ":"] }) : null, " ", p],
                    }),
                ],
            });
        default:
            return null;
    }
}
function J(e) {
    let { channel: n } = e,
        l = (0, a.bG)([O.default], () => O.default.getCurrentUser()),
        s = (0, a.bG)([O.default], () => O.default.getUser(n.getRecipientId())),
        r = (0, a.bG)([S.A], () => (null != s ? S.A.getUserProfile(s.id) : null)),
        c = null != r && (r?.fetchEndedAt ?? 0) > 0;
    return (i.useEffect(() => {
        l?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, R.A)(s.id, s.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0,
            });
    }, [l, s]),
    n.isDM() && l?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, t.jsx)(p.A, { type: p.A.Types.STAFF_ONLY_DM })
            : c && !r.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, t.jsx)(p.A, { type: p.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
}
function $(e) {
    let { channel: n } = e,
        l = n.getRecipientId(),
        [s, r, c] = (0, a.yK)([O.default, G.A], () => [O.default.getUser(l), G.A.getActivities(l), G.A.getStatus(l)], [
            l,
        ]),
        { voiceChannel: o } = (0, E.Ay)({ userId: l }),
        d = (0, j.A)({ activities: r, status: c, applicationStream: null, voiceChannel: o }),
        u = i.useMemo(
            () =>
                r?.filter((e) => {
                    let { type: n } = e;
                    return n !== w.$pd.CUSTOM_STATUS && n !== w.$pd.HANG_STATUS;
                }) ?? [],
            [r],
        ),
        x = i.useMemo(
            () =>
                r?.filter((e) => {
                    let { type: n } = e;
                    return n === w.$pd.CUSTOM_STATUS;
                }) ?? [],
            [r],
        ),
        m = u[0] ?? null,
        f = x.length > 0,
        p = u.length > 0 || null != o,
        C = null != m && (0, g.A)(m) ? m.application_id : void 0,
        T = (0, _.A)({
            applicationId: C,
            source: v.GameProfileSources.DmHeaderActivity,
            trackEntryPointImpression: !1,
        }),
        b = null != T || null != o,
        I = i.useCallback(
            (e) => {
                null != T ? T(e) : null != o && (0, L.iN)(o.id);
            },
            [T, o],
        );
    if (!d) return null;
    if (b && f)
        return (0, t.jsxs)("div", {
            className: Z.aQ,
            children: [
                (0, t.jsx)(A.D, {
                    className: Z.gr,
                    onClick: I,
                    children: (0, t.jsx)(N.A, {
                        user: s,
                        activities: u,
                        applicationStream: null,
                        voiceChannel: o,
                        textSize: "sm",
                    }),
                }),
                p && (0, t.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                (0, t.jsx)(N.A, {
                    user: s,
                    activities: x,
                    applicationStream: null,
                    voiceChannel: null,
                    textSize: "sm",
                }),
            ],
        });
    let D = (0, t.jsx)(N.A, { user: s, activities: r, applicationStream: null, voiceChannel: o, textSize: "sm" });
    return (0, t.jsx)("div", {
        className: Z.aQ,
        children: b ? (0, t.jsx)(A.D, { className: Z.gr, onClick: I, children: D }) : D,
    });
}
function K(e) {
    let { channel: n } = e;
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(J, { channel: n }), (0, t.jsx)($, { channel: n }, n.id)] });
}
function W(e, n) {
    switch (e.type) {
        case w.rbe.DM:
            return (0, t.jsx)(K, { channel: e });
        case w.rbe.GUILD_ANNOUNCEMENT:
        case w.rbe.GUILD_TEXT:
        case w.rbe.GUILD_VOICE:
        case w.rbe.GUILD_STAGE_VOICE:
        case w.rbe.GROUP_DM:
            return null != n ? (0, t.jsx)(z.A, { channel: e, guild: n }, e.id) : null;
        default:
            return null;
    }
}
function ee(e, n) {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null !== e && (0, t.jsx)(B.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, t.jsx)(m.A, { children: n }),
        ],
    });
}
function en(e) {
    let { guild: n, channel: l, caretPosition: s = "left" } = e,
        r = (0, a.bG)([k.A], () => k.A.getGuildId()),
        c = (0, M.lI)(),
        o = i.useRef(null);
    return ((0, I.ai)(r) || c) && null != n
        ? (0, t.jsx)(x.m, {
              asContainer: !0,
              text: n.name,
              targetElementRef: o,
              position: "bottom",
              children: (0, t.jsxs)(A.D, {
                  onClick: function () {
                      null != n && (0, U.uh)(n.id, l.id);
                  },
                  className: Z.ED,
                  children: [
                      "left" === s && (0, t.jsx)(B.A.Caret, { direction: "left" }),
                      (0, t.jsx)("div", {
                          ref: o,
                          children: (0, t.jsx)(D.Ay, {
                              guild: n,
                              size: D.Ay.Sizes.SMALLER,
                              className: Z.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, t.jsx)(B.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

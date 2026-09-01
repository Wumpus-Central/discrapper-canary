l.d(n, { EP: () => ee, i$: () => el, zF: () => Z });
var t = l(477900),
    i = l(582128),
    s = l(503698),
    r = l.n(s),
    a = l(17928),
    c = l(554146),
    o = l(273875),
    u = l(798618),
    d = l(916845),
    h = l(834730),
    x = l(866665),
    m = l(140735),
    A = l(939249),
    g = l(672979),
    j = l(397244),
    E = l(714114),
    b = l(394871),
    N = l(429913),
    C = l(709066),
    f = l(47167),
    p = l(713654),
    I = l(131607),
    T = l(5180),
    _ = l(409626),
    D = l(692969),
    v = l(548118),
    U = l(394953),
    M = l(976860),
    L = l(378570),
    S = l(321191),
    R = l(903209),
    G = l(290863),
    O = l(994500),
    y = l(967198),
    k = l(287809),
    P = l(486020),
    F = l(147036),
    V = l(975571),
    B = l(95655),
    H = l(565265),
    z = l(742589),
    w = l(849205),
    X = l(652215),
    Q = l(49999),
    Y = l(375708),
    J = l(999900);
function K(e) {
    let { channel: n, children: l } = e,
        s = (0, N.h)(n.linkedLobby?.application_id),
        [r, a] = (0, I.kn)([c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0),
        m = i.useRef(null);
    if (null == s) return null;
    let A = P.Ay.getApplicationIconURL({ id: s.id, icon: s.icon, size: 14 }),
        g = r === c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP,
        j = (0, t.jsxs)("div", {
            ref: m,
            className: J.hl,
            children: [
                l,
                (0, t.jsxs)(h.E, {
                    className: J.iO,
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: ["\u2022", (0, t.jsx)("img", { alt: "", src: A, className: J.NB }), s.name],
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
                      onRequestClose: () => a(Q.i.USER_DISMISS),
                      children: [
                          (0, t.jsx)(d.q, { onClick: () => a(Q.i.USER_DISMISS) }),
                          (0, t.jsxs)("div", {
                              className: J.lE,
                              children: [
                                  (0, t.jsx)(h.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: Y.intl.string(Y.t.YIVr4B),
                                  }),
                                  (0, t.jsx)(h.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: Y.intl.format(Y.t.w8VWRT, {
                                          helpdeskArticle: V.A.getArticleURL(X.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                              ],
                          }),
                          (0, t.jsx)(u.F, {}),
                      ],
                  }),
              ],
          })
        : (0, t.jsx)(x.m, { position: "bottom", align: "left", text: Y.intl.string(Y.t["XJVlf/"]), children: j });
}
function Z(e) {
    let {
            channel: n,
            channelName: l,
            parentChannel: s,
            guild: a,
            inSidebar: c = !1,
            handleClick: o,
            handleContextMenu: u,
            handleParentClick: d,
            handleParentContextMenu: h,
            renderFollowButton: x,
        } = e,
        A = (0, p.gU)(n, a),
        { prefix: g, level: j } = (function (e, n) {
            switch (e) {
                case X.rbe.DM:
                    return { prefix: Y.intl.string(Y.t.EJRzg7), level: 1 };
                case X.rbe.GROUP_DM:
                    return { prefix: Y.intl.string(Y.t["e5y+gm"]), level: 1 };
                case X.rbe.GUILD_DIRECTORY:
                case X.rbe.GUILD_ANNOUNCEMENT:
                case X.rbe.GUILD_TEXT:
                case X.rbe.GUILD_FORUM:
                case X.rbe.GUILD_MEDIA:
                case X.rbe.GUILD_STAGE_VOICE:
                case X.rbe.GUILD_VOICE:
                case X.rbe.GUILD_APP:
                    return { prefix: n?.name ?? "", level: 1 };
                case X.rbe.ANNOUNCEMENT_THREAD:
                case X.rbe.PUBLIC_THREAD:
                case X.rbe.PRIVATE_THREAD:
                case X.rbe.MEDIA_THREAD:
                    return { prefix: Y.intl.string(Y.t["7Xm5QI"]), level: 2 };
                case X.rbe.GUILD_CATEGORY:
                case X.rbe.GUILD_STORE:
                case X.rbe.LOBBY:
                case X.rbe.DM_SDK:
                case X.rbe.GUILD_SPACE:
                case X.rbe.UNKNOWN:
                default:
                    return { prefix: null, level: 1 };
            }
        })(n.type, a),
        E = (0, t.jsxs)(t.Fragment, {
            children: [null != g ? (0, t.jsxs)(m.A, { children: [g, ":"] }) : null, " ", l],
        });
    switch (n.type) {
        case X.rbe.DM:
            return (0, t.jsx)(w.A, { level: j, channel: n, handleClick: o, handleContextMenu: u });
        case X.rbe.GROUP_DM:
            if (n.isManaged()) return E;
            return (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(m.A, { children: Y.intl.string(Y.t["e5y+gm"]) }),
                    (0, t.jsx)(B.n, { channel: n }, `channel-${n.id}`),
                ],
            });
        case X.rbe.GUILD_ANNOUNCEMENT:
        case X.rbe.GUILD_TEXT:
        case X.rbe.GUILD_FORUM:
        case X.rbe.GUILD_MEDIA:
        case X.rbe.GUILD_APP:
            return null != n.linkedLobby
                ? (0, t.jsxs)(K, {
                      channel: n,
                      children: [
                          en(A, (0, F.Jg)(n) ?? Y.intl.string(Y.t.Pnajj0)),
                          (0, t.jsx)(z.A.Title, { level: j, onContextMenu: u, onClick: o, children: E }),
                      ],
                  })
                : (0, t.jsxs)(i.Fragment, {
                      children: [
                          en(A, (0, F.Jg)(n) ?? Y.intl.string(Y.t.Pnajj0)),
                          (0, t.jsx)(z.A.Title, { level: j, onContextMenu: u, onClick: o, children: E }),
                          null != x ? x() : null,
                      ],
                  });
        case X.rbe.GUILD_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    en(A, Y.intl.string(Y.t.BVZqJl)),
                    (0, t.jsx)(z.A.Title, { level: j, onContextMenu: u, onClick: o, children: E }),
                ],
            });
        case X.rbe.GUILD_STAGE_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    en(A, Y.intl.string(Y.t.EErMzA)),
                    (0, t.jsx)(z.A.Title, { level: j, onContextMenu: u, onClick: o, children: E }),
                ],
            });
        case X.rbe.ANNOUNCEMENT_THREAD:
        case X.rbe.PUBLIC_THREAD:
        case X.rbe.PRIVATE_THREAD:
        case X.rbe.MEDIA_THREAD:
            let b = null;
            if (!c && null != s) {
                let e = (0, p.gU)(s, a);
                b = (0, t.jsxs)(i.Fragment, {
                    children: [
                        en(e, Y.intl.string(Y.t.Pnajj0)),
                        (0, t.jsx)(z.A.Title, {
                            level: j,
                            onContextMenu: h,
                            onClick: d,
                            className: r()(J.rg, J.or),
                            children: (0, f.m1)(s, k.default, O.A),
                        }),
                        (0, t.jsx)(z.A.Caret, {}),
                    ],
                });
            }
            let N = s?.type != null && X.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    b,
                    en(N ? null : A, Y.intl.string(Y.t["7Xm5QI"])),
                    (0, t.jsx)(z.A.Title, {
                        level: j,
                        onContextMenu: u,
                        onClick: o,
                        className: r()({ [J.or]: c }),
                        children: E,
                    }),
                ],
            });
        case X.rbe.GUILD_DIRECTORY:
            let C = a?.features.has(X.GuildFeatures.HUB) ? Y.intl.formatToPlainString(Y.t.Dy2aht, { guildName: l }) : l;
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    null !== A ? (0, t.jsx)(z.A.ChannelIcon, { icon: A, "aria-hidden": !0 }) : null,
                    (0, t.jsxs)(z.A.Title, {
                        level: j,
                        onContextMenu: u,
                        onClick: o,
                        children: [null != g ? (0, t.jsxs)(m.A, { children: [g, ":"] }) : null, " ", C],
                    }),
                ],
            });
        case X.rbe.GUILD_CATEGORY:
        case X.rbe.GUILD_STORE:
        case X.rbe.GUILD_SPACE:
        case X.rbe.UNKNOWN:
        default:
            return null;
    }
}
function q(e) {
    let { channel: n } = e,
        l = (0, a.bG)([k.default], () => k.default.getCurrentUser()),
        s = (0, a.bG)([k.default], () => k.default.getUser(n.getRecipientId())),
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
            ? (0, t.jsx)(C.A, { type: C.A.Types.STAFF_ONLY_DM })
            : c && !r.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, t.jsx)(C.A, { type: C.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
}
function W(e) {
    let { channel: n } = e,
        l = n.getRecipientId(),
        [s, r, c] = (0, a.yK)([k.default, G.A], () => [k.default.getUser(l), G.A.getActivities(l), G.A.getStatus(l)], [
            l,
        ]),
        { voiceChannel: o } = (0, E.Ay)({ userId: l }),
        u = (0, j.A)({ activities: r, status: c, applicationStream: null, voiceChannel: o }),
        d = i.useMemo(
            () =>
                r?.filter((e) => {
                    let { type: n } = e;
                    return n !== X.$pd.CUSTOM_STATUS && n !== X.$pd.HANG_STATUS;
                }) ?? [],
            [r],
        ),
        x = i.useMemo(
            () =>
                r?.filter((e) => {
                    let { type: n } = e;
                    return n === X.$pd.CUSTOM_STATUS;
                }) ?? [],
            [r],
        ),
        m = d[0] ?? null,
        N = x.length > 0,
        C = d.length > 0 || null != o,
        f = null != m && (0, g.A)(m) ? m.application_id : void 0,
        p = (0, D.A)({
            applicationId: f,
            source: _.GameProfileSources.DmHeaderActivity,
            trackEntryPointImpression: !1,
        }),
        I = null != p || null != o,
        T = i.useCallback(
            (e) => {
                null != p ? p(e) : null != o && (0, L.iN)(o.id);
            },
            [p, o],
        );
    if (!u) return null;
    if (I && N)
        return (0, t.jsxs)("div", {
            className: J.aQ,
            children: [
                (0, t.jsx)(A.D, {
                    className: J.gr,
                    onClick: T,
                    children: (0, t.jsx)(b.A, {
                        user: s,
                        activities: d,
                        applicationStream: null,
                        voiceChannel: o,
                        textSize: "sm",
                    }),
                }),
                C && (0, t.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                (0, t.jsx)(b.A, {
                    user: s,
                    activities: x,
                    applicationStream: null,
                    voiceChannel: null,
                    textSize: "sm",
                }),
            ],
        });
    let v = (0, t.jsx)(b.A, { user: s, activities: r, applicationStream: null, voiceChannel: o, textSize: "sm" });
    return (0, t.jsx)("div", {
        className: J.aQ,
        children: I ? (0, t.jsx)(A.D, { className: J.gr, onClick: T, children: v }) : v,
    });
}
function $(e) {
    let { channel: n } = e;
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(q, { channel: n }), (0, t.jsx)(W, { channel: n }, n.id)] });
}
function ee(e, n) {
    switch (e.type) {
        case X.rbe.DM:
            return (0, t.jsx)($, { channel: e });
        case X.rbe.GUILD_ANNOUNCEMENT:
        case X.rbe.GUILD_TEXT:
        case X.rbe.GUILD_VOICE:
        case X.rbe.GUILD_STAGE_VOICE:
        case X.rbe.GROUP_DM:
        case X.rbe.GUILD_APP:
            return null != n ? (0, t.jsx)(H.A, { channel: e, guild: n }, e.id) : null;
        default:
            return null;
    }
}
function en(e, n) {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null !== e && (0, t.jsx)(z.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, t.jsx)(m.A, { children: n }),
        ],
    });
}
function el(e) {
    let { guild: n, channel: l, caretPosition: s = "left" } = e,
        r = (0, a.bG)([y.A], () => y.A.getGuildId()),
        c = (0, U.lI)(),
        o = i.useRef(null);
    return ((0, T.ai)(r) || c) && null != n
        ? (0, t.jsx)(x.m, {
              asContainer: !0,
              text: n.name,
              targetElementRef: o,
              position: "bottom",
              children: (0, t.jsxs)(A.D, {
                  onClick: function () {
                      null != n && (0, M.uh)(n.id, l.id);
                  },
                  className: J.ED,
                  children: [
                      "left" === s && (0, t.jsx)(z.A.Caret, { direction: "left" }),
                      (0, t.jsx)("div", {
                          ref: o,
                          children: (0, t.jsx)(v.Ay, {
                              guild: n,
                              size: v.Ay.Sizes.SMALLER,
                              className: J.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, t.jsx)(z.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

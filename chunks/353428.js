l.d(n, { EP: () => K, i$: () => ee, zF: () => Z });
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
    v = l(409626),
    I = l(692969),
    _ = l(548118),
    D = l(394953),
    M = l(976860),
    U = l(378570),
    L = l(321191),
    S = l(903209),
    R = l(290863),
    G = l(994500),
    y = l(967198),
    k = l(287809),
    O = l(486020),
    F = l(975571),
    P = l(95655),
    V = l(565265),
    z = l(742589),
    B = l(849205),
    H = l(652215),
    w = l(49999),
    X = l(375708),
    Q = l(354919);
function Y(e) {
    let { channel: n, children: l } = e,
        s = (0, f.h)(n.linkedLobby?.application_id),
        [r, a] = (0, b.kn)([c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0),
        m = i.useRef(null);
    if (null == s) return null;
    let A = O.Ay.getApplicationIconURL({ id: s.id, icon: s.icon, size: 14 }),
        g = r === c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP,
        j = (0, t.jsxs)("div", {
            ref: m,
            className: Q.hl,
            children: [
                l,
                (0, t.jsxs)(h.E, {
                    className: Q.iO,
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: ["\u2022", (0, t.jsx)("img", { alt: "", src: A, className: Q.NB }), s.name],
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
                      onRequestClose: () => a(w.i.USER_DISMISS),
                      children: [
                          (0, t.jsx)(u.q, { onClick: () => a(w.i.USER_DISMISS) }),
                          (0, t.jsxs)("div", {
                              className: Q.lE,
                              children: [
                                  (0, t.jsx)(h.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: X.intl.string(X.t.YIVr4B),
                                  }),
                                  (0, t.jsx)(h.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: X.intl.format(X.t.w8VWRT, {
                                          helpdeskArticle: F.A.getArticleURL(H.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                              ],
                          }),
                          (0, t.jsx)(d.F, {}),
                      ],
                  }),
              ],
          })
        : (0, t.jsx)(x.m, { position: "bottom", align: "left", text: X.intl.string(X.t["XJVlf/"]), children: j });
}
function Z(e) {
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
                case H.rbe.DM:
                    return { prefix: X.intl.string(X.t.EJRzg7), level: 1 };
                case H.rbe.GROUP_DM:
                    return { prefix: X.intl.string(X.t["e5y+gm"]), level: 1 };
                case H.rbe.GUILD_DIRECTORY:
                case H.rbe.GUILD_ANNOUNCEMENT:
                case H.rbe.GUILD_TEXT:
                case H.rbe.GUILD_FORUM:
                case H.rbe.GUILD_MEDIA:
                case H.rbe.GUILD_STAGE_VOICE:
                case H.rbe.GUILD_VOICE:
                    return { prefix: n?.name ?? "", level: 1 };
                case H.rbe.ANNOUNCEMENT_THREAD:
                case H.rbe.PUBLIC_THREAD:
                case H.rbe.PRIVATE_THREAD:
                    return { prefix: X.intl.string(X.t["7Xm5QI"]), level: 2 };
                default:
                    return { prefix: null, level: 1 };
            }
        })(n.type, a),
        E = (0, t.jsxs)(t.Fragment, {
            children: [null != g ? (0, t.jsxs)(m.A, { children: [g, ":"] }) : null, " ", l],
        });
    switch (n.type) {
        case H.rbe.DM:
            return (0, t.jsx)(B.A, { level: j, channel: n, handleClick: o, handleContextMenu: d });
        case H.rbe.GROUP_DM:
            if (n.isManaged()) return E;
            return (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(m.A, { children: X.intl.string(X.t["e5y+gm"]) }),
                    (0, t.jsx)(P.n, { channel: n }, `channel-${n.id}`),
                ],
            });
        case H.rbe.GUILD_ANNOUNCEMENT:
        case H.rbe.GUILD_TEXT:
        case H.rbe.GUILD_FORUM:
        case H.rbe.GUILD_MEDIA:
            return null != n.linkedLobby
                ? (0, t.jsxs)(Y, {
                      channel: n,
                      children: [
                          W(
                              A,
                              n.type === H.rbe.GUILD_ANNOUNCEMENT
                                  ? X.intl.string(X.t.l1dkSD)
                                  : X.intl.string(X.t.Pnajj0),
                          ),
                          (0, t.jsx)(z.A.Title, { level: j, onContextMenu: d, onClick: o, children: E }),
                      ],
                  })
                : (0, t.jsxs)(i.Fragment, {
                      children: [
                          W(
                              A,
                              n.type === H.rbe.GUILD_ANNOUNCEMENT
                                  ? X.intl.string(X.t.l1dkSD)
                                  : X.intl.string(X.t.Pnajj0),
                          ),
                          (0, t.jsx)(z.A.Title, { level: j, onContextMenu: d, onClick: o, children: E }),
                          null != x ? x() : null,
                      ],
                  });
        case H.rbe.GUILD_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    W(A, X.intl.string(X.t.BVZqJl)),
                    (0, t.jsx)(z.A.Title, { level: j, onContextMenu: d, onClick: o, children: E }),
                ],
            });
        case H.rbe.GUILD_STAGE_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    W(A, X.intl.string(X.t.EErMzA)),
                    (0, t.jsx)(z.A.Title, { level: j, onContextMenu: d, onClick: o, children: E }),
                ],
            });
        case H.rbe.ANNOUNCEMENT_THREAD:
        case H.rbe.PUBLIC_THREAD:
        case H.rbe.PRIVATE_THREAD:
            let N = null;
            if (!c && null != s) {
                let e = (0, T.gU)(s, a);
                N = (0, t.jsxs)(i.Fragment, {
                    children: [
                        W(e, X.intl.string(X.t.Pnajj0)),
                        (0, t.jsx)(z.A.Title, {
                            level: j,
                            onContextMenu: h,
                            onClick: u,
                            className: r()(Q.rg, Q.or),
                            children: (0, C.m1)(s, k.default, G.A),
                        }),
                        (0, t.jsx)(z.A.Caret, {}),
                    ],
                });
            }
            let f = s?.type != null && H.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    N,
                    W(f ? null : A, X.intl.string(X.t["7Xm5QI"])),
                    (0, t.jsx)(z.A.Title, {
                        level: j,
                        onContextMenu: d,
                        onClick: o,
                        className: r()({ [Q.or]: c }),
                        children: E,
                    }),
                ],
            });
        case H.rbe.GUILD_DIRECTORY:
            let p = a?.features.has(H.GuildFeatures.HUB) ? X.intl.formatToPlainString(X.t.Dy2aht, { guildName: l }) : l;
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    null !== A ? (0, t.jsx)(z.A.ChannelIcon, { icon: A, "aria-hidden": !0 }) : null,
                    (0, t.jsxs)(z.A.Title, {
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
function q(e) {
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
            ? (0, t.jsx)(p.A, { type: p.A.Types.STAFF_ONLY_DM })
            : c && !r.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, t.jsx)(p.A, { type: p.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
}
function J(e) {
    let { channel: n } = e,
        l = n.getRecipientId(),
        [s, r, c] = (0, a.yK)([k.default, R.A], () => [k.default.getUser(l), R.A.getActivities(l), R.A.getStatus(l)], [
            l,
        ]),
        { voiceChannel: o } = (0, E.Ay)({ userId: l }),
        d = (0, j.A)({ activities: r, status: c, applicationStream: null, voiceChannel: o }),
        u = i.useMemo(
            () =>
                r?.filter((e) => {
                    let { type: n } = e;
                    return n !== H.$pd.CUSTOM_STATUS && n !== H.$pd.HANG_STATUS;
                }) ?? [],
            [r],
        ),
        x = i.useMemo(
            () =>
                r?.filter((e) => {
                    let { type: n } = e;
                    return n === H.$pd.CUSTOM_STATUS;
                }) ?? [],
            [r],
        ),
        m = u[0] ?? null,
        f = x.length > 0,
        p = u.length > 0 || null != o,
        C = null != m && (0, g.A)(m) ? m.application_id : void 0,
        T = (0, I.A)({
            applicationId: C,
            source: v.GameProfileSources.DmHeaderActivity,
            trackEntryPointImpression: !1,
        }),
        b = null != T || null != o,
        _ = i.useCallback(
            (e) => {
                null != T ? T(e) : null != o && (0, U.iN)(o.id);
            },
            [T, o],
        );
    if (!d) return null;
    if (b && f)
        return (0, t.jsxs)("div", {
            className: Q.aQ,
            children: [
                (0, t.jsx)(A.D, {
                    className: Q.gr,
                    onClick: _,
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
        className: Q.aQ,
        children: b ? (0, t.jsx)(A.D, { className: Q.gr, onClick: _, children: D }) : D,
    });
}
function $(e) {
    let { channel: n } = e;
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(q, { channel: n }), (0, t.jsx)(J, { channel: n }, n.id)] });
}
function K(e, n) {
    switch (e.type) {
        case H.rbe.DM:
            return (0, t.jsx)($, { channel: e });
        case H.rbe.GUILD_ANNOUNCEMENT:
        case H.rbe.GUILD_TEXT:
        case H.rbe.GUILD_VOICE:
        case H.rbe.GUILD_STAGE_VOICE:
        case H.rbe.GROUP_DM:
            return null != n ? (0, t.jsx)(V.A, { channel: e, guild: n }, e.id) : null;
        default:
            return null;
    }
}
function W(e, n) {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null !== e && (0, t.jsx)(z.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, t.jsx)(m.A, { children: n }),
        ],
    });
}
function ee(e) {
    let { guild: n, channel: l, caretPosition: s = "left" } = e,
        r = (0, a.bG)([y.A], () => y.A.getGuildId()),
        c = (0, D.lI)(),
        o = i.useRef(null);
    return (r === H.YYv || c) && null != n
        ? (0, t.jsx)(x.m, {
              asContainer: !0,
              text: n.name,
              targetElementRef: o,
              position: "bottom",
              children: (0, t.jsxs)(A.D, {
                  onClick: function () {
                      null != n && (0, M.uh)(n.id, l.id);
                  },
                  className: Q.ED,
                  children: [
                      "left" === s && (0, t.jsx)(z.A.Caret, { direction: "left" }),
                      (0, t.jsx)("div", {
                          ref: o,
                          children: (0, t.jsx)(_.Ay, {
                              guild: n,
                              size: _.Ay.Sizes.SMALLER,
                              className: Q.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, t.jsx)(z.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

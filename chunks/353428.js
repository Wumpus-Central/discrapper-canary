l.d(n, { EP: () => es, i$: () => ea, zF: () => en });
var t = l(477900),
    i = l(582128),
    s = l(503698),
    r = l.n(s),
    a = l(17928),
    c = l(554146),
    o = l(273875),
    d = l(798618),
    u = l(916845),
    x = l(834730),
    h = l(939249),
    m = l(866665),
    A = l(140735),
    j = l(672979),
    g = l(397244),
    E = l(714114),
    f = l(394871),
    p = l(615606),
    b = l(429913),
    N = l(709066),
    I = l(47167),
    C = l(713654),
    T = l(131607),
    D = l(5180),
    _ = l(409626),
    v = l(692969),
    U = l(548118),
    M = l(394953),
    L = l(976860),
    R = l(378570),
    S = l(321191),
    G = l(903209),
    O = l(402860),
    y = l(290863),
    k = l(994500),
    P = l(967198),
    F = l(287809),
    V = l(486020),
    H = l(147036),
    z = l(975571),
    B = l(95655),
    w = l(565265),
    X = l(742589),
    Y = l(849205),
    q = l(652215),
    Q = l(49999),
    K = l(105292),
    Z = l(999900);
function J() {
    return (0, t.jsx)("span", { "aria-hidden": !0, className: Z.rt, children: (0, t.jsx)(X.A.Divider, {}) });
}
function W(e) {
    let { application: n, children: l } = e;
    return (0, t.jsxs)(x.E, {
        className: Z.qp,
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            null != n.icon
                ? (0, t.jsx)("img", {
                      alt: "",
                      src: V.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 14 }),
                      className: Z.Hq,
                  })
                : null,
            (0, t.jsx)("span", { className: Z.Hz, children: n.name }),
            l,
        ],
    });
}
function $(e) {
    let { channel: n, children: l } = e,
        i = (0, p.q)(n);
    if (null == i) return l;
    let { bot: s } = i;
    return (0, t.jsxs)("div", {
        className: Z.RY,
        children: [
            l,
            (0, t.jsx)(J, {}),
            (0, t.jsx)(h.D, {
                className: Z.pj,
                onClick: function () {
                    null != s && (0, O.openUserProfileModal)({ userId: s.id, guildId: n.guild_id, channelId: n.id });
                },
                children: (0, t.jsx)(W, { application: i, children: (0, t.jsx)(N.A, { verified: i.isVerified }) }),
            }),
        ],
    });
}
function ee(e) {
    let { channel: n, children: l } = e,
        s = (0, b.h)(n.linkedLobby?.application_id),
        [r, a] = (0, T.kn)([c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], { bypassAutoDismiss: !0 }),
        h = i.useRef(null);
    if (null == s) return null;
    let A = r === c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP,
        j = (0, t.jsxs)("div", {
            ref: h,
            className: Z.RY,
            children: [l, (0, t.jsx)(J, {}), (0, t.jsx)(W, { application: s })],
        });
    return A
        ? (0, t.jsxs)(t.Fragment, {
              children: [
                  j,
                  (0, t.jsxs)(o.x, {
                      targetElementRef: h,
                      shouldShow: !0,
                      position: "bottom",
                      alignmentStrategy: "edge",
                      align: "left",
                      onRequestClose: () => a(Q.i.USER_DISMISS),
                      children: [
                          (0, t.jsx)(u.q, { onClick: () => a(Q.i.USER_DISMISS) }),
                          (0, t.jsxs)("div", {
                              className: Z.lE,
                              children: [
                                  (0, t.jsx)(x.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: K.intl.string(K.t.YIVr4B),
                                  }),
                                  (0, t.jsx)(x.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: K.intl.format(K.t.w8VWRT, {
                                          helpdeskArticle: z.A.getArticleURL(q.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                              ],
                          }),
                          (0, t.jsx)(d.F, {}),
                      ],
                  }),
              ],
          })
        : (0, t.jsx)(m.m, { position: "bottom", align: "left", text: K.intl.string(K.t["XJVlf/"]), children: j });
}
function en(e) {
    let {
            channel: n,
            channelName: l,
            parentChannel: s,
            guild: a,
            inSidebar: c = !1,
            isAppChannelChatExpanded: o = !1,
            handleClick: d,
            handleContextMenu: u,
            handleParentClick: x,
            handleParentContextMenu: h,
            renderFollowButton: m,
        } = e,
        j = (0, C.gU)(n, a),
        { prefix: g, level: E } = (function (e, n) {
            switch (e) {
                case q.rbe.DM:
                    return { prefix: K.intl.string(K.t.EJRzg7), level: 1 };
                case q.rbe.GROUP_DM:
                    return { prefix: K.intl.string(K.t["e5y+gm"]), level: 1 };
                case q.rbe.GUILD_DIRECTORY:
                case q.rbe.GUILD_ANNOUNCEMENT:
                case q.rbe.GUILD_TEXT:
                case q.rbe.GUILD_FORUM:
                case q.rbe.GUILD_MEDIA:
                case q.rbe.GUILD_STAGE_VOICE:
                case q.rbe.GUILD_VOICE:
                case q.rbe.GUILD_APP:
                    return { prefix: n?.name ?? "", level: 1 };
                case q.rbe.ANNOUNCEMENT_THREAD:
                case q.rbe.PUBLIC_THREAD:
                case q.rbe.PRIVATE_THREAD:
                case q.rbe.MEDIA_THREAD:
                    return { prefix: K.intl.string(K.t["7Xm5QI"]), level: 2 };
                case q.rbe.GUILD_CATEGORY:
                case q.rbe.GUILD_STORE:
                case q.rbe.LOBBY:
                case q.rbe.DM_SDK:
                case q.rbe.GUILD_SPACE:
                case q.rbe.UNKNOWN:
                default:
                    return { prefix: null, level: 1 };
            }
        })(n.type, a),
        f = (0, t.jsxs)(t.Fragment, {
            children: [null != g ? (0, t.jsxs)(A.A, { children: [g, ":"] }) : null, " ", l],
        });
    switch (n.type) {
        case q.rbe.DM:
            return (0, t.jsx)(Y.A, { level: E, channel: n, handleClick: d, handleContextMenu: u });
        case q.rbe.GROUP_DM:
            if (n.isManaged()) return f;
            return (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(A.A, { children: K.intl.string(K.t["e5y+gm"]) }),
                    (0, t.jsx)(B.n, { channel: n }, `channel-${n.id}`),
                ],
            });
        case q.rbe.GUILD_ANNOUNCEMENT:
        case q.rbe.GUILD_TEXT:
        case q.rbe.GUILD_FORUM:
        case q.rbe.GUILD_MEDIA:
        case q.rbe.GUILD_APP: {
            let e = (0, t.jsxs)(t.Fragment, {
                children: [
                    er(j, (0, H.Jg)(n) ?? K.intl.string(K.t.Pnajj0)),
                    (0, t.jsx)(X.A.Title, { level: E, onContextMenu: u, onClick: d, children: f }),
                ],
            });
            if (null != n.linkedLobby) return (0, t.jsx)(ee, { channel: n, children: e });
            if (n.type === q.rbe.GUILD_APP && !c && !o) return (0, t.jsx)($, { channel: n, children: e });
            return (0, t.jsxs)(t.Fragment, { children: [e, null != m ? m() : null] });
        }
        case q.rbe.GUILD_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    er(j, K.intl.string(K.t.BVZqJl)),
                    (0, t.jsx)(X.A.Title, { level: E, onContextMenu: u, onClick: d, children: f }),
                ],
            });
        case q.rbe.GUILD_STAGE_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    er(j, K.intl.string(K.t.EErMzA)),
                    (0, t.jsx)(X.A.Title, { level: E, onContextMenu: u, onClick: d, children: f }),
                ],
            });
        case q.rbe.ANNOUNCEMENT_THREAD:
        case q.rbe.PUBLIC_THREAD:
        case q.rbe.PRIVATE_THREAD:
        case q.rbe.MEDIA_THREAD:
            let p = null;
            if (!c && null != s) {
                let e = (0, C.gU)(s, a);
                p = (0, t.jsxs)(i.Fragment, {
                    children: [
                        er(e, K.intl.string(K.t.Pnajj0)),
                        (0, t.jsx)(X.A.Title, {
                            level: E,
                            onContextMenu: h,
                            onClick: x,
                            className: r()(Z.rg, Z.or),
                            children: (0, I.m1)(s, F.default, k.A),
                        }),
                        (0, t.jsx)(X.A.Caret, {}),
                    ],
                });
            }
            let b = s?.type != null && q.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    p,
                    er(b ? null : j, K.intl.string(K.t["7Xm5QI"])),
                    (0, t.jsx)(X.A.Title, {
                        level: E,
                        onContextMenu: u,
                        onClick: d,
                        className: r()({ [Z.or]: c }),
                        children: f,
                    }),
                ],
            });
        case q.rbe.GUILD_DIRECTORY:
            let N = a?.features.has(q.GuildFeatures.HUB) ? K.intl.formatToPlainString(K.t.Dy2aht, { guildName: l }) : l;
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    null !== j ? (0, t.jsx)(X.A.ChannelIcon, { icon: j, "aria-hidden": !0 }) : null,
                    (0, t.jsxs)(X.A.Title, {
                        level: E,
                        onContextMenu: u,
                        onClick: d,
                        children: [null != g ? (0, t.jsxs)(A.A, { children: [g, ":"] }) : null, " ", N],
                    }),
                ],
            });
        case q.rbe.GUILD_CATEGORY:
        case q.rbe.GUILD_STORE:
        case q.rbe.GUILD_SPACE:
        case q.rbe.UNKNOWN:
        default:
            return null;
    }
}
function el(e) {
    let { channel: n } = e,
        l = (0, a.bG)([F.default], () => F.default.getCurrentUser()),
        s = (0, a.bG)([F.default], () => F.default.getUser(n.getRecipientId())),
        r = (0, a.bG)([S.A], () => (null != s ? S.A.getUserProfile(s.id) : null)),
        c = null != r && (r?.fetchEndedAt ?? 0) > 0;
    return (i.useEffect(() => {
        l?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, G.A)(s.id, s.getAvatarURL(void 0, 80), { withMutualGuilds: !0, withMutualFriendsCount: !0 });
    }, [l, s]),
    n.isDM() && l?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, t.jsx)(N.A, { type: N.A.Types.STAFF_ONLY_DM })
            : c && !r.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, t.jsx)(N.A, { type: N.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
}
function et(e) {
    let { channel: n } = e,
        l = n.getRecipientId(),
        [s, r, c] = (0, a.yK)([F.default, y.A], () => [F.default.getUser(l), y.A.getActivities(l), y.A.getStatus(l)], [
            l,
        ]),
        { voiceChannel: o } = (0, E.Ay)({ userId: l }),
        d = (0, g.A)({ activities: r, status: c, applicationStream: null, voiceChannel: o }),
        u = i.useMemo(
            () =>
                r?.filter((e) => {
                    let { type: n } = e;
                    return n !== q.$pd.CUSTOM_STATUS && n !== q.$pd.HANG_STATUS;
                }) ?? [],
            [r],
        ),
        m = i.useMemo(
            () =>
                r?.filter((e) => {
                    let { type: n } = e;
                    return n === q.$pd.CUSTOM_STATUS;
                }) ?? [],
            [r],
        ),
        A = u[0] ?? null,
        p = m.length > 0,
        b = u.length > 0 || null != o,
        N = null != A && (0, j.A)(A) ? A.application_id : void 0,
        I = (0, v.A)({
            applicationId: N,
            source: _.GameProfileSources.DmHeaderActivity,
            trackEntryPointImpression: !1,
        }),
        C = null != I || null != o,
        T = i.useCallback(
            (e) => {
                null != I ? I(e) : null != o && (0, R.iN)(o.id);
            },
            [I, o],
        );
    if (!d) return null;
    if (C && p)
        return (0, t.jsxs)("div", {
            className: Z.aQ,
            children: [
                (0, t.jsx)(h.D, {
                    className: Z.gr,
                    onClick: T,
                    children: (0, t.jsx)(f.A, {
                        user: s,
                        activities: u,
                        applicationStream: null,
                        voiceChannel: o,
                        textSize: "sm",
                    }),
                }),
                b && (0, t.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                (0, t.jsx)(f.A, {
                    user: s,
                    activities: m,
                    applicationStream: null,
                    voiceChannel: null,
                    textSize: "sm",
                }),
            ],
        });
    let D = (0, t.jsx)(f.A, { user: s, activities: r, applicationStream: null, voiceChannel: o, textSize: "sm" });
    return (0, t.jsx)("div", {
        className: Z.aQ,
        children: C ? (0, t.jsx)(h.D, { className: Z.gr, onClick: T, children: D }) : D,
    });
}
function ei(e) {
    let { channel: n } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(el, { channel: n }), (0, t.jsx)(et, { channel: n }, n.id)],
    });
}
function es(e, n) {
    switch (e.type) {
        case q.rbe.DM:
            return (0, t.jsx)(ei, { channel: e });
        case q.rbe.GUILD_ANNOUNCEMENT:
        case q.rbe.GUILD_TEXT:
        case q.rbe.GUILD_VOICE:
        case q.rbe.GUILD_STAGE_VOICE:
        case q.rbe.GROUP_DM:
        case q.rbe.GUILD_APP:
            return null != n ? (0, t.jsx)(w.A, { channel: e, guild: n }, e.id) : null;
        default:
            return null;
    }
}
function er(e, n) {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null !== e && (0, t.jsx)(X.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, t.jsx)(A.A, { children: n }),
        ],
    });
}
function ea(e) {
    let { guild: n, channel: l, caretPosition: s = "left" } = e,
        r = (0, a.bG)([P.A], () => P.A.getGuildId()),
        c = (0, M.lI)(),
        o = i.useRef(null);
    return ((0, D.ai)(r) || c) && null != n
        ? (0, t.jsx)(m.m, {
              asContainer: !0,
              text: n.name,
              targetElementRef: o,
              position: "bottom",
              children: (0, t.jsxs)(h.D, {
                  onClick: function () {
                      null != n && (0, L.uh)(n.id, l.id);
                  },
                  className: Z.ED,
                  children: [
                      "left" === s && (0, t.jsx)(X.A.Caret, { direction: "left" }),
                      (0, t.jsx)("div", {
                          ref: o,
                          children: (0, t.jsx)(U.Ay, {
                              guild: n,
                              size: U.Ay.Sizes.SMALLER,
                              className: Z.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, t.jsx)(X.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

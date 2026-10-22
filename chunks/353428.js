l.d(n, { EP: () => ea, i$: () => eo, zF: () => et });
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
    p = l(714114),
    E = l(394871),
    f = l(615606),
    b = l(429913),
    N = l(709066),
    I = l(47167),
    C = l(713654),
    T = l(967165),
    _ = l(246338),
    D = l(131607),
    v = l(5180),
    U = l(409626),
    M = l(692969),
    L = l(548118),
    R = l(394953),
    S = l(976860),
    G = l(378570),
    O = l(321191),
    y = l(903209),
    k = l(402860),
    P = l(290863),
    F = l(994500),
    V = l(967198),
    H = l(287809),
    z = l(486020),
    B = l(147036),
    w = l(975571),
    X = l(95655),
    Y = l(565265),
    q = l(742589),
    Q = l(849205),
    K = l(652215),
    Z = l(49999),
    J = l(105292),
    $ = l(999900);
function W() {
    return (0, t.jsx)("span", { "aria-hidden": !0, className: $.rt, children: (0, t.jsx)(q.A.Divider, {}) });
}
function ee(e) {
    let { application: n, children: l } = e;
    return (0, t.jsxs)(x.E, {
        className: $.qp,
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            null != n.icon
                ? (0, t.jsx)("img", {
                      alt: "",
                      src: z.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 14 }),
                      className: $.Hq,
                  })
                : null,
            (0, t.jsx)("span", { className: $.Hz, children: n.name }),
            l,
        ],
    });
}
function en(e) {
    let { channel: n, children: l } = e,
        s = (0, f.q)(n),
        a = (0, _.w$)(n, "HeaderBarAppChannelApplication"),
        c = i.useRef(null);
    if (null == s) return l;
    let { bot: o } = s;
    return (0, t.jsxs)("div", {
        className: $.RY,
        children: [
            l,
            (0, t.jsx)(W, {}),
            (0, t.jsx)(h.D, {
                innerRef: c,
                className: r()($.pj, { [$.To]: a }),
                onClick: function () {
                    null != o && (0, k.openUserProfileModal)({ userId: o.id, guildId: n.guild_id, channelId: n.id });
                },
                children: (0, t.jsx)(ee, { application: s, children: (0, t.jsx)(N.A, { verified: s.isVerified }) }),
            }),
            a
                ? (0, t.jsx)(T.A, {
                      applicationId: s.id,
                      guildId: n.guild_id,
                      targetElementRef: c,
                      position: "bottom",
                      openOnFocus: !0,
                  })
                : null,
        ],
    });
}
function el(e) {
    let { channel: n, children: l } = e,
        s = (0, b.h)(n.linkedLobby?.application_id),
        [r, a] = (0, D.kn)([c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], { bypassAutoDismiss: !0 }),
        h = i.useRef(null);
    if (null == s) return null;
    let A = r === c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP,
        j = (0, t.jsxs)("div", {
            ref: h,
            className: $.RY,
            children: [l, (0, t.jsx)(W, {}), (0, t.jsx)(ee, { application: s })],
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
                      onRequestClose: () => a(Z.i.USER_DISMISS),
                      children: [
                          (0, t.jsx)(u.q, { onClick: () => a(Z.i.USER_DISMISS) }),
                          (0, t.jsxs)("div", {
                              className: $.lE,
                              children: [
                                  (0, t.jsx)(x.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: J.intl.string(J.t.YIVr4B),
                                  }),
                                  (0, t.jsx)(x.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: J.intl.format(J.t.w8VWRT, {
                                          helpdeskArticle: w.A.getArticleURL(K.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                              ],
                          }),
                          (0, t.jsx)(d.F, {}),
                      ],
                  }),
              ],
          })
        : (0, t.jsx)(m.m, { position: "bottom", align: "left", text: J.intl.string(J.t["XJVlf/"]), children: j });
}
function et(e) {
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
        { prefix: g, level: p } = (function (e, n) {
            switch (e) {
                case K.rbe.DM:
                    return { prefix: J.intl.string(J.t.EJRzg7), level: 1 };
                case K.rbe.GROUP_DM:
                    return { prefix: J.intl.string(J.t["e5y+gm"]), level: 1 };
                case K.rbe.GUILD_DIRECTORY:
                case K.rbe.GUILD_ANNOUNCEMENT:
                case K.rbe.GUILD_TEXT:
                case K.rbe.GUILD_FORUM:
                case K.rbe.GUILD_MEDIA:
                case K.rbe.GUILD_STAGE_VOICE:
                case K.rbe.GUILD_VOICE:
                case K.rbe.GUILD_APP:
                    return { prefix: n?.name ?? "", level: 1 };
                case K.rbe.ANNOUNCEMENT_THREAD:
                case K.rbe.PUBLIC_THREAD:
                case K.rbe.PRIVATE_THREAD:
                case K.rbe.MEDIA_THREAD:
                    return { prefix: J.intl.string(J.t["7Xm5QI"]), level: 2 };
                case K.rbe.GUILD_CATEGORY:
                case K.rbe.GUILD_STORE:
                case K.rbe.LOBBY:
                case K.rbe.DM_SDK:
                case K.rbe.GUILD_SPACE:
                case K.rbe.UNKNOWN:
                default:
                    return { prefix: null, level: 1 };
            }
        })(n.type, a),
        E = (0, t.jsxs)(t.Fragment, {
            children: [null != g ? (0, t.jsxs)(A.A, { children: [g, ":"] }) : null, " ", l],
        });
    switch (n.type) {
        case K.rbe.DM:
            return (0, t.jsx)(Q.A, { level: p, channel: n, handleClick: d, handleContextMenu: u });
        case K.rbe.GROUP_DM:
            if (n.isManaged()) return E;
            return (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(A.A, { children: J.intl.string(J.t["e5y+gm"]) }),
                    (0, t.jsx)(X.n, { channel: n }, `channel-${n.id}`),
                ],
            });
        case K.rbe.GUILD_ANNOUNCEMENT:
        case K.rbe.GUILD_TEXT:
        case K.rbe.GUILD_FORUM:
        case K.rbe.GUILD_MEDIA:
        case K.rbe.GUILD_APP: {
            let e = (0, t.jsxs)(t.Fragment, {
                children: [
                    ec(j, (0, B.Jg)(n) ?? J.intl.string(J.t.Pnajj0)),
                    (0, t.jsx)(q.A.Title, { level: p, onContextMenu: u, onClick: d, children: E }),
                ],
            });
            if (null != n.linkedLobby) return (0, t.jsx)(el, { channel: n, children: e });
            if (n.type === K.rbe.GUILD_APP && !c && !o) return (0, t.jsx)(en, { channel: n, children: e });
            return (0, t.jsxs)(t.Fragment, { children: [e, null != m ? m() : null] });
        }
        case K.rbe.GUILD_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    ec(j, J.intl.string(J.t.BVZqJl)),
                    (0, t.jsx)(q.A.Title, { level: p, onContextMenu: u, onClick: d, children: E }),
                ],
            });
        case K.rbe.GUILD_STAGE_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    ec(j, J.intl.string(J.t.EErMzA)),
                    (0, t.jsx)(q.A.Title, { level: p, onContextMenu: u, onClick: d, children: E }),
                ],
            });
        case K.rbe.ANNOUNCEMENT_THREAD:
        case K.rbe.PUBLIC_THREAD:
        case K.rbe.PRIVATE_THREAD:
        case K.rbe.MEDIA_THREAD:
            let f = null;
            if (!c && null != s) {
                let e = (0, C.gU)(s, a);
                f = (0, t.jsxs)(i.Fragment, {
                    children: [
                        ec(e, J.intl.string(J.t.Pnajj0)),
                        (0, t.jsx)(q.A.Title, {
                            level: p,
                            onContextMenu: h,
                            onClick: x,
                            className: r()($.rg, $.or),
                            children: (0, I.m1)(s, H.default, F.A),
                        }),
                        (0, t.jsx)(q.A.Caret, {}),
                    ],
                });
            }
            let b = s?.type != null && K.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    f,
                    ec(b ? null : j, J.intl.string(J.t["7Xm5QI"])),
                    (0, t.jsx)(q.A.Title, {
                        level: p,
                        onContextMenu: u,
                        onClick: d,
                        className: r()({ [$.or]: c }),
                        children: E,
                    }),
                ],
            });
        case K.rbe.GUILD_DIRECTORY:
            let N = a?.features.has(K.GuildFeatures.HUB) ? J.intl.formatToPlainString(J.t.Dy2aht, { guildName: l }) : l;
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    null !== j ? (0, t.jsx)(q.A.ChannelIcon, { icon: j, "aria-hidden": !0 }) : null,
                    (0, t.jsxs)(q.A.Title, {
                        level: p,
                        onContextMenu: u,
                        onClick: d,
                        children: [null != g ? (0, t.jsxs)(A.A, { children: [g, ":"] }) : null, " ", N],
                    }),
                ],
            });
        case K.rbe.GUILD_CATEGORY:
        case K.rbe.GUILD_STORE:
        case K.rbe.GUILD_SPACE:
        case K.rbe.UNKNOWN:
        default:
            return null;
    }
}
function ei(e) {
    let { channel: n } = e,
        l = (0, a.bG)([H.default], () => H.default.getCurrentUser()),
        s = (0, a.bG)([H.default], () => H.default.getUser(n.getRecipientId())),
        r = (0, a.bG)([O.A], () => (null != s ? O.A.getUserProfile(s.id) : null)),
        c = null != r && (r?.fetchEndedAt ?? 0) > 0;
    return (i.useEffect(() => {
        l?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, y.A)(s.id, s.getAvatarURL(void 0, 80), { withMutualGuilds: !0, withMutualFriendsCount: !0 });
    }, [l, s]),
    n.isDM() && l?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, t.jsx)(N.A, { type: N.A.Types.STAFF_ONLY_DM })
            : c && !r.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, t.jsx)(N.A, { type: N.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
}
function es(e) {
    let { channel: n } = e,
        l = n.getRecipientId(),
        [s, r, c] = (0, a.yK)([H.default, P.A], () => [H.default.getUser(l), P.A.getActivities(l), P.A.getStatus(l)], [
            l,
        ]),
        { voiceChannel: o } = (0, p.Ay)({ userId: l }),
        d = (0, g.A)({ activities: r, status: c, applicationStream: null, voiceChannel: o }),
        u = i.useMemo(
            () =>
                r?.filter((e) => {
                    let { type: n } = e;
                    return n !== K.$pd.CUSTOM_STATUS && n !== K.$pd.HANG_STATUS;
                }) ?? [],
            [r],
        ),
        m = i.useMemo(
            () =>
                r?.filter((e) => {
                    let { type: n } = e;
                    return n === K.$pd.CUSTOM_STATUS;
                }) ?? [],
            [r],
        ),
        A = u[0] ?? null,
        f = m.length > 0,
        b = u.length > 0 || null != o,
        N = null != A && (0, j.A)(A) ? A.application_id : void 0,
        I = (0, M.A)({
            applicationId: N,
            source: U.GameProfileSources.DmHeaderActivity,
            trackEntryPointImpression: !1,
        }),
        C = null != I || null != o,
        T = i.useCallback(
            (e) => {
                null != I ? I(e) : null != o && (0, G.iN)(o.id);
            },
            [I, o],
        );
    if (!d) return null;
    if (C && f)
        return (0, t.jsxs)("div", {
            className: $.aQ,
            children: [
                (0, t.jsx)(h.D, {
                    className: $.gr,
                    onClick: T,
                    children: (0, t.jsx)(E.A, {
                        user: s,
                        activities: u,
                        applicationStream: null,
                        voiceChannel: o,
                        textSize: "sm",
                    }),
                }),
                b && (0, t.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                (0, t.jsx)(E.A, {
                    user: s,
                    activities: m,
                    applicationStream: null,
                    voiceChannel: null,
                    textSize: "sm",
                }),
            ],
        });
    let _ = (0, t.jsx)(E.A, { user: s, activities: r, applicationStream: null, voiceChannel: o, textSize: "sm" });
    return (0, t.jsx)("div", {
        className: $.aQ,
        children: C ? (0, t.jsx)(h.D, { className: $.gr, onClick: T, children: _ }) : _,
    });
}
function er(e) {
    let { channel: n } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(ei, { channel: n }), (0, t.jsx)(es, { channel: n }, n.id)],
    });
}
function ea(e, n) {
    switch (e.type) {
        case K.rbe.DM:
            return (0, t.jsx)(er, { channel: e });
        case K.rbe.GUILD_ANNOUNCEMENT:
        case K.rbe.GUILD_TEXT:
        case K.rbe.GUILD_VOICE:
        case K.rbe.GUILD_STAGE_VOICE:
        case K.rbe.GROUP_DM:
        case K.rbe.GUILD_APP:
            return null != n ? (0, t.jsx)(Y.A, { channel: e, guild: n }, e.id) : null;
        default:
            return null;
    }
}
function ec(e, n) {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null !== e && (0, t.jsx)(q.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, t.jsx)(A.A, { children: n }),
        ],
    });
}
function eo(e) {
    let { guild: n, channel: l, caretPosition: s = "left" } = e,
        r = (0, a.bG)([V.A], () => V.A.getGuildId()),
        c = (0, R.lI)(),
        o = i.useRef(null);
    return ((0, v.ai)(r) || c) && null != n
        ? (0, t.jsx)(m.m, {
              asContainer: !0,
              text: n.name,
              targetElementRef: o,
              position: "bottom",
              children: (0, t.jsxs)(h.D, {
                  onClick: function () {
                      null != n && (0, S.uh)(n.id, l.id);
                  },
                  className: $.ED,
                  children: [
                      "left" === s && (0, t.jsx)(q.A.Caret, { direction: "left" }),
                      (0, t.jsx)("div", {
                          ref: o,
                          children: (0, t.jsx)(L.Ay, {
                              guild: n,
                              size: L.Ay.Sizes.SMALLER,
                              className: $.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, t.jsx)(q.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

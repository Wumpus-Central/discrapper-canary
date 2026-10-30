l.d(n, { EP: () => ec, i$: () => ed, zF: () => ei });
var t = l(477900),
    i = l(582128),
    s = l(503698),
    r = l.n(s),
    a = l(350835),
    c = l(17928),
    o = l(554146),
    d = l(273875),
    u = l(798618),
    x = l(916845),
    h = l(834730),
    m = l(939249),
    A = l(866665),
    j = l(140735),
    g = l(672979),
    p = l(397244),
    E = l(714114),
    f = l(394871),
    b = l(615606),
    N = l(429913),
    I = l(709066),
    C = l(47167),
    T = l(713654),
    _ = l(967165),
    D = l(246338),
    v = l(131607),
    U = l(5180),
    M = l(409626),
    L = l(692969),
    R = l(548118),
    S = l(394953),
    G = l(976860),
    O = l(378570),
    y = l(321191),
    k = l(903209),
    P = l(402860),
    F = l(290863),
    V = l(994500),
    H = l(967198),
    z = l(287809),
    B = l(486020),
    w = l(147036),
    X = l(975571),
    Y = l(95655),
    q = l(565265),
    Q = l(742589),
    K = l(849205),
    Z = l(652215),
    J = l(49999),
    $ = l(105292),
    W = l(999900);
function ee() {
    return (0, t.jsx)("span", { "aria-hidden": !0, className: W.rt, children: (0, t.jsx)(Q.A.Divider, {}) });
}
function en(e) {
    let { application: n, children: l } = e;
    return (0, t.jsxs)(h.E, {
        className: W.qp,
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            null != n.icon
                ? (0, t.jsx)("img", {
                      alt: "",
                      src: B.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 14 }),
                      className: W.Hq,
                  })
                : null,
            (0, t.jsx)("span", { className: W.Hz, children: n.name }),
            l,
        ],
    });
}
function el(e) {
    let { channel: n, children: l } = e,
        s = (0, b.q)(n),
        a = (0, D.w$)(n, "HeaderBarAppChannelApplication"),
        c = i.useRef(null);
    if (null == s) return l;
    let { bot: o } = s;
    return (0, t.jsxs)("div", {
        className: W.RY,
        children: [
            l,
            (0, t.jsx)(ee, {}),
            (0, t.jsx)(m.D, {
                innerRef: c,
                className: r()(W.pj, { [W.To]: a }),
                onClick: function () {
                    null != o && (0, P.openUserProfileModal)({ userId: o.id, guildId: n.guild_id, channelId: n.id });
                },
                children: (0, t.jsx)(en, { application: s, children: (0, t.jsx)(I.A, { verified: s.isVerified }) }),
            }),
            a
                ? (0, t.jsx)(_.A, {
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
function et(e) {
    let { channel: n, children: l } = e,
        s = (0, N.h)(n.linkedLobby?.application_id),
        [r, a] = (0, v.kn)([o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], { bypassAutoDismiss: !0 }),
        c = i.useRef(null);
    if (null == s) return null;
    let m = r === o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP,
        j = (0, t.jsxs)("div", {
            ref: c,
            className: W.RY,
            children: [l, (0, t.jsx)(ee, {}), (0, t.jsx)(en, { application: s })],
        });
    return m
        ? (0, t.jsxs)(t.Fragment, {
              children: [
                  j,
                  (0, t.jsxs)(d.x, {
                      targetElementRef: c,
                      shouldShow: !0,
                      position: "bottom",
                      alignmentStrategy: "edge",
                      align: "left",
                      onRequestClose: () => a(J.i.USER_DISMISS),
                      children: [
                          (0, t.jsx)(x.q, { onClick: () => a(J.i.USER_DISMISS) }),
                          (0, t.jsxs)("div", {
                              className: W.lE,
                              children: [
                                  (0, t.jsx)(h.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: $.intl.string($.t.YIVr4B),
                                  }),
                                  (0, t.jsx)(h.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: $.intl.format($.t.w8VWRT, {
                                          helpdeskArticle: X.A.getArticleURL(Z.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                              ],
                          }),
                          (0, t.jsx)(u.F, {}),
                      ],
                  }),
              ],
          })
        : (0, t.jsx)(A.m, { position: "bottom", align: "left", text: $.intl.string($.t["XJVlf/"]), children: j });
}
function ei(e) {
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
        A = (0, T.gU)(n, a),
        { prefix: g, level: p } = (function (e, n) {
            switch (e) {
                case Z.rbe.DM:
                    return { prefix: $.intl.string($.t.EJRzg7), level: 1 };
                case Z.rbe.GROUP_DM:
                    return { prefix: $.intl.string($.t["e5y+gm"]), level: 1 };
                case Z.rbe.GUILD_DIRECTORY:
                case Z.rbe.GUILD_ANNOUNCEMENT:
                case Z.rbe.GUILD_TEXT:
                case Z.rbe.GUILD_FORUM:
                case Z.rbe.GUILD_MEDIA:
                case Z.rbe.GUILD_STAGE_VOICE:
                case Z.rbe.GUILD_VOICE:
                case Z.rbe.GUILD_APP:
                    return { prefix: n?.name ?? "", level: 1 };
                case Z.rbe.ANNOUNCEMENT_THREAD:
                case Z.rbe.PUBLIC_THREAD:
                case Z.rbe.PRIVATE_THREAD:
                case Z.rbe.MEDIA_THREAD:
                    return { prefix: $.intl.string($.t["7Xm5QI"]), level: 2 };
                case Z.rbe.GUILD_CATEGORY:
                case Z.rbe.GUILD_STORE:
                case Z.rbe.LOBBY:
                case Z.rbe.DM_SDK:
                case Z.rbe.GUILD_SPACE:
                case Z.rbe.UNKNOWN:
                default:
                    return { prefix: null, level: 1 };
            }
        })(n.type, a),
        E = (0, t.jsxs)(t.Fragment, {
            children: [null != g ? (0, t.jsxs)(j.A, { children: [g, ":"] }) : null, " ", l],
        });
    switch (n.type) {
        case Z.rbe.DM:
            return (0, t.jsx)(K.A, { level: p, channel: n, handleClick: d, handleContextMenu: u });
        case Z.rbe.GROUP_DM:
            if (n.isManaged()) return E;
            return (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(j.A, { children: $.intl.string($.t["e5y+gm"]) }),
                    (0, t.jsx)(Y.n, { channel: n }, `channel-${n.id}`),
                ],
            });
        case Z.rbe.GUILD_ANNOUNCEMENT:
        case Z.rbe.GUILD_TEXT:
        case Z.rbe.GUILD_FORUM:
        case Z.rbe.GUILD_MEDIA:
        case Z.rbe.GUILD_APP: {
            let e = (0, t.jsxs)(t.Fragment, {
                children: [
                    eo(A, (0, w.Jg)(n) ?? $.intl.string($.t.Pnajj0)),
                    (0, t.jsx)(Q.A.Title, { level: p, onContextMenu: u, onClick: d, children: E }),
                ],
            });
            if (null != n.linkedLobby) return (0, t.jsx)(et, { channel: n, children: e });
            if (n.type === Z.rbe.GUILD_APP && !c && !o) return (0, t.jsx)(el, { channel: n, children: e });
            return (0, t.jsxs)(t.Fragment, { children: [e, null != m ? m() : null] });
        }
        case Z.rbe.GUILD_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    eo(A, $.intl.string($.t.BVZqJl)),
                    (0, t.jsx)(Q.A.Title, { level: p, onContextMenu: u, onClick: d, children: E }),
                ],
            });
        case Z.rbe.GUILD_STAGE_VOICE:
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    eo(A, $.intl.string($.t.EErMzA)),
                    (0, t.jsx)(Q.A.Title, { level: p, onContextMenu: u, onClick: d, children: E }),
                ],
            });
        case Z.rbe.ANNOUNCEMENT_THREAD:
        case Z.rbe.PUBLIC_THREAD:
        case Z.rbe.PRIVATE_THREAD:
        case Z.rbe.MEDIA_THREAD:
            let f = null;
            if (!c && null != s) {
                let e = (0, T.gU)(s, a);
                f = (0, t.jsxs)(i.Fragment, {
                    children: [
                        eo(e, $.intl.string($.t.Pnajj0)),
                        (0, t.jsx)(Q.A.Title, {
                            level: p,
                            onContextMenu: h,
                            onClick: x,
                            className: r()(W.rg, W.or),
                            children: (0, C.m1)(s, z.default, V.A),
                        }),
                        (0, t.jsx)(Q.A.Caret, {}),
                    ],
                });
            }
            let b = s?.type != null && Z.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    f,
                    eo(b ? null : A, $.intl.string($.t["7Xm5QI"])),
                    (0, t.jsx)(Q.A.Title, {
                        level: p,
                        onContextMenu: u,
                        onClick: d,
                        className: r()({ [W.or]: c }),
                        children: E,
                    }),
                ],
            });
        case Z.rbe.GUILD_DIRECTORY:
            let N = a?.features.has(Z.GuildFeatures.HUB) ? $.intl.formatToPlainString($.t.Dy2aht, { guildName: l }) : l;
            return (0, t.jsxs)(i.Fragment, {
                children: [
                    null !== A ? (0, t.jsx)(Q.A.ChannelIcon, { icon: A, "aria-hidden": !0 }) : null,
                    (0, t.jsxs)(Q.A.Title, {
                        level: p,
                        onContextMenu: u,
                        onClick: d,
                        children: [null != g ? (0, t.jsxs)(j.A, { children: [g, ":"] }) : null, " ", N],
                    }),
                ],
            });
        case Z.rbe.GUILD_CATEGORY:
        case Z.rbe.GUILD_STORE:
        case Z.rbe.GUILD_SPACE:
        case Z.rbe.UNKNOWN:
        default:
            return null;
    }
}
function es(e) {
    let { channel: n } = e,
        l = (0, c.bG)([z.default], () => z.default.getCurrentUser()),
        s = (0, c.bG)([z.default], () => z.default.getUser(n.getRecipientId())),
        r = (0, c.bG)([y.A], () => (null != s ? y.A.getUserProfile(s.id) : null)),
        a = null != r && (r?.fetchEndedAt ?? 0) > 0;
    return (i.useEffect(() => {
        l?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, k.A)(s.id, s.getAvatarURL(void 0, 80), { withMutualGuilds: !0, withMutualFriendsCount: !0 });
    }, [l, s]),
    n.isDM() && l?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, t.jsx)(I.A, { type: I.A.Types.STAFF_ONLY_DM })
            : a && !r.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, t.jsx)(I.A, { type: I.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
}
function er(e) {
    let { channel: n } = e,
        l = n.getRecipientId(),
        [s, r, o] = (0, c.yK)([z.default, F.A], () => [z.default.getUser(l), F.A.getActivities(l), F.A.getStatus(l)], [
            l,
        ]),
        { voiceChannel: d } = (0, E.Ay)({ userId: l }),
        u = (0, p.A)({ activities: r, status: o, applicationStream: null, voiceChannel: d }),
        x = i.useMemo(
            () =>
                r?.filter((e) => {
                    let { type: n } = e;
                    return n !== a.$.CUSTOM_STATUS && n !== a.$.HANG_STATUS;
                }) ?? [],
            [r],
        ),
        A = i.useMemo(
            () =>
                r?.filter((e) => {
                    let { type: n } = e;
                    return n === a.$.CUSTOM_STATUS;
                }) ?? [],
            [r],
        ),
        j = x[0] ?? null,
        b = A.length > 0,
        N = x.length > 0 || null != d,
        I = null != j && (0, g.A)(j) ? j.application_id : void 0,
        C = (0, L.A)({
            applicationId: I,
            source: M.GameProfileSources.DmHeaderActivity,
            trackEntryPointImpression: !1,
        }),
        T = null != C || null != d,
        _ = i.useCallback(
            (e) => {
                null != C ? C(e) : null != d && (0, O.iN)(d.id);
            },
            [C, d],
        );
    if (!u) return null;
    if (T && b)
        return (0, t.jsxs)("div", {
            className: W.aQ,
            children: [
                (0, t.jsx)(m.D, {
                    className: W.gr,
                    onClick: _,
                    children: (0, t.jsx)(f.A, {
                        user: s,
                        activities: x,
                        applicationStream: null,
                        voiceChannel: d,
                        textSize: "sm",
                    }),
                }),
                N && (0, t.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                (0, t.jsx)(f.A, {
                    user: s,
                    activities: A,
                    applicationStream: null,
                    voiceChannel: null,
                    textSize: "sm",
                }),
            ],
        });
    let D = (0, t.jsx)(f.A, { user: s, activities: r, applicationStream: null, voiceChannel: d, textSize: "sm" });
    return (0, t.jsx)("div", {
        className: W.aQ,
        children: T ? (0, t.jsx)(m.D, { className: W.gr, onClick: _, children: D }) : D,
    });
}
function ea(e) {
    let { channel: n } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(es, { channel: n }), (0, t.jsx)(er, { channel: n }, n.id)],
    });
}
function ec(e, n, l) {
    switch (e.type) {
        case Z.rbe.DM:
            return (0, t.jsx)(ea, { channel: e });
        case Z.rbe.GUILD_ANNOUNCEMENT:
        case Z.rbe.GUILD_TEXT:
        case Z.rbe.GUILD_VOICE:
        case Z.rbe.GUILD_STAGE_VOICE:
        case Z.rbe.GROUP_DM:
        case Z.rbe.GUILD_APP:
            return null != n ? (0, t.jsx)(q.A, { channel: e, guild: n, leadingDivider: l }, e.id) : null;
        default:
            return null;
    }
}
function eo(e, n) {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null !== e && (0, t.jsx)(Q.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, t.jsx)(j.A, { children: n }),
        ],
    });
}
function ed(e) {
    let { guild: n, channel: l, caretPosition: s = "left" } = e,
        r = (0, c.bG)([H.A], () => H.A.getGuildId()),
        a = (0, S.lI)(),
        o = i.useRef(null);
    return ((0, U.ai)(r) || a) && null != n
        ? (0, t.jsx)(A.m, {
              asContainer: !0,
              text: n.name,
              targetElementRef: o,
              position: "bottom",
              children: (0, t.jsxs)(m.D, {
                  onClick: function () {
                      null != n && (0, G.uh)(n.id, l.id);
                  },
                  className: W.ED,
                  children: [
                      "left" === s && (0, t.jsx)(Q.A.Caret, { direction: "left" }),
                      (0, t.jsx)("div", {
                          ref: o,
                          children: (0, t.jsx)(R.Ay, {
                              guild: n,
                              size: R.Ay.Sizes.SMALLER,
                              className: W.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, t.jsx)(Q.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

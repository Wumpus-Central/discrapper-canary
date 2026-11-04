var t = l(477900),
    i = l(582128),
    s = l(503698),
    r = l.n(s),
    a = l(350835),
    c = l(855986),
    o = l(554146),
    d = l(195118),
    u = l(31188),
    h = l(916845),
    x = l(834730),
    m = l(939249),
    A = l(866665),
    j = l(140735),
    g = l(672979),
    b = l(397244),
    p = l(714114),
    E = l(342312),
    f = l(615606),
    N = l(429913),
    I = l(709066),
    C = l(47167),
    T = l(713654),
    _ = l(967165),
    D = l(522265),
    v = l(104299),
    U = l(246338),
    M = l(263775),
    L = l(5180),
    R = l(409626),
    S = l(692969),
    G = l(682163),
    y = l(394953),
    O = l(976860),
    k = l(378570),
    P = l(851767),
    F = l(917445),
    H = l(702476),
    V = l(290863),
    z = l(994500),
    B = l(967198),
    w = l(287809),
    X = l(486020),
    Y = l(147036),
    q = l(975571),
    Q = l(95655),
    K = l(565265),
    Z = l(742589),
    J = l(849205),
    $ = l(652215),
    W = l(49999),
    ee = l(792996),
    en = l(999900);
function el() {
    return (0, t.jsx)("span", { "aria-hidden": !0, className: en.rt, children: (0, t.jsx)(Z.A.Divider, {}) });
}
function et(e) {
    let { application: n, children: l } = e;
    return (0, t.jsxs)(x.E, {
        className: en.qp,
        variant: "body-sm/medium",
        color: "text-strong",
        children: [
            null != n.icon
                ? (0, t.jsx)("img", {
                      alt: "",
                      src: X.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 14 }),
                      className: en.Hq,
                  })
                : null != n.conjureProjectId
                  ? (0, t.jsx)(v.A, {
                        applicationId: n.id,
                        name: n.name,
                        glyphSize: (0, D.w)(14).glyphSize,
                        className: en.Hq,
                    })
                  : null,
            (0, t.jsx)("span", { className: en.Hz, children: n.name }),
            l,
        ],
    });
}
function ei(e) {
    let { channel: n, children: l } = e,
        s = (0, f.q)(n),
        a = (0, U.w$)(n, "HeaderBarAppChannelApplication"),
        c = i.useRef(null);
    if (null == s) return l;
    let { bot: o } = s;
    return (0, t.jsxs)("div", {
        className: en.RY,
        children: [
            l,
            (0, t.jsx)(el, {}),
            (0, t.jsx)(m.D, {
                innerRef: c,
                className: r()(en.pj, { [en.To]: a }),
                onClick: function () {
                    null != o && (0, H.openUserProfileModal)({ userId: o.id, guildId: n.guild_id, channelId: n.id });
                },
                children: (0, t.jsx)(et, { application: s, children: (0, t.jsx)(I.A, { verified: s.isVerified }) }),
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
function es(e) {
    let { channel: n, children: l } = e,
        s = (0, N.h)(n.linkedLobby?.application_id),
        [r, a] = (0, M.kn)([o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], { bypassAutoDismiss: !0 }),
        c = i.useRef(null);
    if (null == s) return null;
    let m = r === o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP,
        j = (0, t.jsxs)("div", {
            ref: c,
            className: en.RY,
            children: [l, (0, t.jsx)(el, {}), (0, t.jsx)(et, { application: s })],
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
                      onRequestClose: () => a(W.i.USER_DISMISS),
                      children: [
                          (0, t.jsx)(h.q, { onClick: () => a(W.i.USER_DISMISS) }),
                          (0, t.jsxs)("div", {
                              className: en.lE,
                              children: [
                                  (0, t.jsx)(x.E, {
                                      variant: "body-md/semibold",
                                      color: "text-strong",
                                      children: ee.intl.string(ee.t.YIVr4B),
                                  }),
                                  (0, t.jsx)(x.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: ee.intl.format(ee.t.w8VWRT, {
                                          helpdeskArticle: q.A.getArticleURL($.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                              ],
                          }),
                          (0, t.jsx)(u.F, {}),
                      ],
                  }),
              ],
          })
        : (0, t.jsx)(A.m, { position: "bottom", align: "left", text: ee.intl.string(ee.t["XJVlf/"]), children: j });
}
function er(e) {
    let { channel: n } = e,
        l = (0, c.bG)([w.default], () => w.default.getCurrentUser()),
        s = (0, c.bG)([w.default], () => w.default.getUser(n.getRecipientId())),
        r = (0, c.bG)([P.A], () => (null != s ? P.A.getUserProfile(s.id) : null)),
        a = null != r && (r?.fetchEndedAt ?? 0) > 0;
    return (i.useEffect(() => {
        l?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, F.A)(s.id, s.getAvatarURL(void 0, 80), { withMutualGuilds: !0, withMutualFriendsCount: !0 });
    }, [l, s]),
    n.isDM() && l?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, t.jsx)(I.A, { type: I.A.Types.STAFF_ONLY_DM })
            : a && !r.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, t.jsx)(I.A, { type: I.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
}
function ea(e) {
    let { channel: n } = e,
        l = n.getRecipientId(),
        [s, r, o] = (0, c.yK)([w.default, V.A], () => [w.default.getUser(l), V.A.getActivities(l), V.A.getStatus(l)], [
            l,
        ]),
        { voiceChannel: d } = (0, p.Ay)({ userId: l }),
        u = (0, b.A)({ activities: r, status: o, applicationStream: null, voiceChannel: d }),
        h = i.useMemo(
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
        j = h[0] ?? null,
        f = A.length > 0,
        N = h.length > 0 || null != d,
        I = null != j && (0, g.A)(j) ? j.application_id : void 0,
        C = (0, S.A)({
            applicationId: I,
            source: R.GameProfileSources.DmHeaderActivity,
            trackEntryPointImpression: !1,
        }),
        T = null != C || null != d,
        _ = i.useCallback(
            (e) => {
                null != C ? C(e) : null != d && (0, k.iN)(d.id);
            },
            [C, d],
        );
    if (!u) return null;
    if (T && f)
        return (0, t.jsxs)("div", {
            className: en.aQ,
            children: [
                (0, t.jsx)(m.D, {
                    className: en.gr,
                    onClick: _,
                    children: (0, t.jsx)(E.A, {
                        user: s,
                        activities: h,
                        applicationStream: null,
                        voiceChannel: d,
                        textSize: "sm",
                    }),
                }),
                N && (0, t.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: "\u2022" }),
                (0, t.jsx)(E.A, {
                    user: s,
                    activities: A,
                    applicationStream: null,
                    voiceChannel: null,
                    textSize: "sm",
                }),
            ],
        });
    let D = (0, t.jsx)(E.A, { user: s, activities: r, applicationStream: null, voiceChannel: d, textSize: "sm" });
    return (0, t.jsx)("div", {
        className: en.aQ,
        children: T ? (0, t.jsx)(m.D, { className: en.gr, onClick: _, children: D }) : D,
    });
}
function ec(e) {
    let { channel: n } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(er, { channel: n }), (0, t.jsx)(ea, { channel: n }, n.id)],
    });
}
function eo(e, n) {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null !== e && (0, t.jsx)(Z.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, t.jsx)(j.A, { children: n }),
        ],
    });
}
l.d(
    n,
    {},
    {
        EP: function (e, n, l) {
            switch (e.type) {
                case $.rbe.DM:
                    return (0, t.jsx)(ec, { channel: e });
                case $.rbe.GUILD_ANNOUNCEMENT:
                case $.rbe.GUILD_TEXT:
                case $.rbe.GUILD_VOICE:
                case $.rbe.GUILD_STAGE_VOICE:
                case $.rbe.GROUP_DM:
                case $.rbe.GUILD_APP:
                    return null != n ? (0, t.jsx)(K.A, { channel: e, guild: n, leadingDivider: l }, e.id) : null;
                default:
                    return null;
            }
        },
        i$: function (e) {
            let { guild: n, channel: l, caretPosition: s = "left" } = e,
                r = (0, c.bG)([B.A], () => B.A.getGuildId()),
                a = (0, y.lI)(),
                o = i.useRef(null);
            return ((0, L.ai)(r) || a) && null != n
                ? (0, t.jsx)(A.m, {
                      asContainer: !0,
                      text: n.name,
                      targetElementRef: o,
                      position: "bottom",
                      children: (0, t.jsxs)(m.D, {
                          onClick: function () {
                              null != n && (0, O.uh)(n.id, l.id);
                          },
                          className: en.ED,
                          children: [
                              "left" === s && (0, t.jsx)(Z.A.Caret, { direction: "left" }),
                              (0, t.jsx)("div", {
                                  ref: o,
                                  children: (0, t.jsx)(G.Ay, {
                                      guild: n,
                                      size: G.Ay.Sizes.SMALLER,
                                      className: en.gL,
                                      active: !0,
                                  }),
                              }),
                              "right" === s && (0, t.jsx)(Z.A.Caret, { direction: "right" }),
                          ],
                      }),
                  })
                : null;
        },
        zF: function (e) {
            let {
                    channel: n,
                    channelName: l,
                    parentChannel: s,
                    guild: a,
                    inSidebar: c = !1,
                    isAppChannelChatExpanded: o = !1,
                    handleClick: d,
                    handleContextMenu: u,
                    handleParentClick: h,
                    handleParentContextMenu: x,
                    renderFollowButton: m,
                } = e,
                A = (0, T.gU)(n, a),
                { prefix: g, level: b } = (function (e, n) {
                    switch (e) {
                        case $.rbe.DM:
                            return { prefix: ee.intl.string(ee.t.EJRzg7), level: 1 };
                        case $.rbe.GROUP_DM:
                            return { prefix: ee.intl.string(ee.t["e5y+gm"]), level: 1 };
                        case $.rbe.GUILD_DIRECTORY:
                        case $.rbe.GUILD_ANNOUNCEMENT:
                        case $.rbe.GUILD_TEXT:
                        case $.rbe.GUILD_FORUM:
                        case $.rbe.GUILD_MEDIA:
                        case $.rbe.GUILD_STAGE_VOICE:
                        case $.rbe.GUILD_VOICE:
                        case $.rbe.GUILD_APP:
                            return { prefix: n?.name ?? "", level: 1 };
                        case $.rbe.ANNOUNCEMENT_THREAD:
                        case $.rbe.PUBLIC_THREAD:
                        case $.rbe.PRIVATE_THREAD:
                        case $.rbe.MEDIA_THREAD:
                            return { prefix: ee.intl.string(ee.t["7Xm5QI"]), level: 2 };
                        case $.rbe.GUILD_CATEGORY:
                        case $.rbe.GUILD_STORE:
                        case $.rbe.LOBBY:
                        case $.rbe.DM_SDK:
                        case $.rbe.GUILD_SPACE:
                        case $.rbe.UNKNOWN:
                        default:
                            return { prefix: null, level: 1 };
                    }
                })(n.type, a),
                p = (0, t.jsxs)(t.Fragment, {
                    children: [null != g ? (0, t.jsxs)(j.A, { children: [g, ":"] }) : null, " ", l],
                });
            switch (n.type) {
                case $.rbe.DM:
                    return (0, t.jsx)(J.A, { level: b, channel: n, handleClick: d, handleContextMenu: u });
                case $.rbe.GROUP_DM:
                    if (n.isManaged()) return p;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(j.A, { children: ee.intl.string(ee.t["e5y+gm"]) }),
                            (0, t.jsx)(Q.n, { channel: n }, `channel-${n.id}`),
                        ],
                    });
                case $.rbe.GUILD_ANNOUNCEMENT:
                case $.rbe.GUILD_TEXT:
                case $.rbe.GUILD_FORUM:
                case $.rbe.GUILD_MEDIA:
                case $.rbe.GUILD_APP: {
                    let e = (0, t.jsxs)(t.Fragment, {
                        children: [
                            eo(A, (0, Y.Jg)(n) ?? ee.intl.string(ee.t.Pnajj0)),
                            (0, t.jsx)(Z.A.Title, { level: b, onContextMenu: u, onClick: d, children: p }),
                        ],
                    });
                    if (null != n.linkedLobby) return (0, t.jsx)(es, { channel: n, children: e });
                    if (n.type === $.rbe.GUILD_APP && !c && !o) return (0, t.jsx)(ei, { channel: n, children: e });
                    return (0, t.jsxs)(t.Fragment, { children: [e, null != m ? m() : null] });
                }
                case $.rbe.GUILD_VOICE:
                    return (0, t.jsxs)(i.Fragment, {
                        children: [
                            eo(A, ee.intl.string(ee.t.BVZqJl)),
                            (0, t.jsx)(Z.A.Title, { level: b, onContextMenu: u, onClick: d, children: p }),
                        ],
                    });
                case $.rbe.GUILD_STAGE_VOICE:
                    return (0, t.jsxs)(i.Fragment, {
                        children: [
                            eo(A, ee.intl.string(ee.t.EErMzA)),
                            (0, t.jsx)(Z.A.Title, { level: b, onContextMenu: u, onClick: d, children: p }),
                        ],
                    });
                case $.rbe.ANNOUNCEMENT_THREAD:
                case $.rbe.PUBLIC_THREAD:
                case $.rbe.PRIVATE_THREAD:
                case $.rbe.MEDIA_THREAD:
                    let E = null;
                    if (!c && null != s) {
                        let e = (0, T.gU)(s, a);
                        E = (0, t.jsxs)(i.Fragment, {
                            children: [
                                eo(e, ee.intl.string(ee.t.Pnajj0)),
                                (0, t.jsx)(Z.A.Title, {
                                    level: b,
                                    onContextMenu: x,
                                    onClick: h,
                                    className: r()(en.rg, en.or),
                                    children: (0, C.m1)(s, w.default, z.A),
                                }),
                                (0, t.jsx)(Z.A.Caret, {}),
                            ],
                        });
                    }
                    let f = s?.type != null && $.kvI.GUILD_THREADS_ONLY.has(s.type);
                    return (0, t.jsxs)(i.Fragment, {
                        children: [
                            E,
                            eo(f ? null : A, ee.intl.string(ee.t["7Xm5QI"])),
                            (0, t.jsx)(Z.A.Title, {
                                level: b,
                                onContextMenu: u,
                                onClick: d,
                                className: r()({ [en.or]: c }),
                                children: p,
                            }),
                        ],
                    });
                case $.rbe.GUILD_DIRECTORY:
                    let N = a?.features.has($.GuildFeatures.HUB)
                        ? ee.intl.formatToPlainString(ee.t.Dy2aht, { guildName: l })
                        : l;
                    return (0, t.jsxs)(i.Fragment, {
                        children: [
                            null !== A ? (0, t.jsx)(Z.A.ChannelIcon, { icon: A, "aria-hidden": !0 }) : null,
                            (0, t.jsxs)(Z.A.Title, {
                                level: b,
                                onContextMenu: u,
                                onClick: d,
                                children: [null != g ? (0, t.jsxs)(j.A, { children: [g, ":"] }) : null, " ", N],
                            }),
                        ],
                    });
                case $.rbe.GUILD_CATEGORY:
                case $.rbe.GUILD_STORE:
                case $.rbe.GUILD_SPACE:
                case $.rbe.UNKNOWN:
                default:
                    return null;
            }
        },
    },
);

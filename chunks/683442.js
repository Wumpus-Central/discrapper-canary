t.d(n, { i$: () => eU, zF: () => e_, EP: () => eD });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    r = t.n(s),
    a = t(17928),
    c = t(554146),
    o = t(990078),
    d = t(834730),
    u = t(939249),
    h = t(789645),
    x = t(140735),
    m = t(429913),
    A = t(709066),
    g = t(47167),
    N = t(713654),
    j = t(932001),
    I = t(548118),
    E = t(394953),
    p = t(976860),
    C = t(841595),
    b = t(576622),
    T = t(994500),
    _ = t(967198),
    f = t(287809),
    D = t(486020),
    L = t(975571),
    U = t(735438),
    M = t.n(U),
    G = t(3026),
    v = t(245604),
    k = t(777666),
    y = t(104171),
    R = t(793574),
    O = t(688810),
    S = t(919395),
    P = t(975732),
    F = t(696451),
    V = t(71393),
    H = t(583613),
    B = t(403362),
    z = t(58736),
    w = t(518477),
    X = t(985018),
    Y = t(850603);
class Q {
    userId;
    user;
    channelId;
    analyticsLocations;
    constructor({ userId: e, user: n, channelId: t, analyticsLocations: l }) {
        (this.userId = e), (this.user = n), (this.channelId = t), (this.analyticsLocations = l);
    }
    updateData(e) {
        let { userId: n, user: t, channelId: l, analyticsLocations: i } = e;
        (this.userId = n), (this.user = t), (this.channelId = l), (this.analyticsLocations = i);
    }
    generateNicknameGuildPairs = (0, H.L_)((e) =>
        M()(F.Ay.getNicknameGuildsMapping(e?.id ?? this.userId))
            .toPairs()
            .map((e) => {
                let [n, t] = e;
                return [n, t.map((e) => V.A.getGuild(e)?.name).filter(B.Vq)];
            })
            .filter((n) => {
                let [t] = n;
                return t !== e?.globalName;
            })
            .value(),
    );
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderMoreAvatars = () =>
        (0, l.jsx)(
            o.m,
            {
                asContainer: !0,
                tag: "span",
                text: X.intl.string(X.t["UTjRE/"]),
                position: "bottom",
                children: (0, l.jsx)(u.D, {
                    className: Y.OZ,
                    onClick: this.handleClick,
                    children: (0, l.jsx)(v.U, { size: "xs", color: "currentColor", className: Y.WW }),
                }),
            },
            "more-avatars",
        );
    renderNicknamePairs(e) {
        return this.getNicknameGuildPairs().map((n, t) => {
            let [s, r] = n,
                a = (0, l.jsx)(u.D, { tag: "span", onClick: this.handleClick, children: s });
            return (
                r.length > 0 &&
                    (a = (0, l.jsx)(o.m, {
                        asContainer: !0,
                        tag: "span",
                        text: r.join(", "),
                        position: "bottom",
                        shouldShow: e,
                        delay: 50,
                        children: a,
                    })),
                (0, l.jsxs)(i.Fragment, { children: [0 !== t ? ", " : null, a] }, t)
            );
        });
    }
    handleClick = () => {
        (0, P.openUserProfileModal)({
            userId: this.userId,
            channelId: this.channelId,
            sourceAnalyticsLocations: this.analyticsLocations,
            tabSection: w.RP.MUTUAL_GUILDS,
        });
    };
}
function Z(e) {
    let { channel: n } = e,
        t = n.getRecipientId(),
        s = (0, S.EI)(t),
        r = Array(s.length).fill(null),
        { analyticsLocations: c } = (0, O.Ay)(R.A.AKA),
        d = (function (e) {
            let { userId: n, channelId: t, analyticsLocations: l } = e,
                s = (0, a.bG)([f.default], () => f.default.getUser(n), [n]),
                [r] = i.useState(() => new Q({ user: s, userId: n, channelId: t, analyticsLocations: l }));
            return r.updateData({ userId: n, user: s, channelId: t, analyticsLocations: l }), r;
        })({ userId: t, analyticsLocations: c, channelId: n.id }),
        [u, h] = i.useState(!1),
        x = i.useCallback(() => {
            h(!0);
        }, [h]),
        m = i.useCallback(() => {
            h(!1);
        }, [h]);
    return 0 === d.getNicknameGuildPairs().length && 0 === s.length
        ? (0, l.jsx)("div", { className: Y.jH })
        : (0, l.jsxs)(O.f5, {
              value: c,
              children: [
                  (0, l.jsx)(z.cG, { className: Y.yF }),
                  (0, l.jsx)(k.Lp, { text: X.intl.string(X.t.l1QVfj), disableColor: !0, className: Y.RV }),
                  s.length > 0
                      ? (0, l.jsx)(y.Ay, {
                            size: 16,
                            users: r,
                            showUserPopout: !1,
                            renderUser: (e, n, t) => {
                                let i = d.user,
                                    r = s[t];
                                return null == r || null == i
                                    ? null
                                    : (0, l.jsx)(
                                          o.m,
                                          {
                                              asContainer: !0,
                                              text: V.A.getGuild(r)?.name,
                                              position: "bottom",
                                              children: (0, l.jsx)("img", {
                                                  alt: "",
                                                  className: Y.my,
                                                  onClick: d.handleClick,
                                                  src: i.getAvatarURL(r, 16),
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          r[1],
                                      );
                            },
                            renderMoreUsers: d.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: Y.HD,
                        })
                      : null,
                  d.getNicknameGuildPairs().length > 0
                      ? (0, l.jsx)(G.A, {
                            position: "bottom",
                            className: Y.wm,
                            delay: 0,
                            onTooltipShow: x,
                            onTooltipHide: m,
                            children: d.renderNicknamePairs(!u),
                        })
                      : null,
              ],
          });
}
var K = t(254138),
    W = t(661531),
    J = t(778712),
    q = t(22231),
    $ = t(442433),
    ee = t(598104),
    en = t(73028),
    et = t(665691),
    el = t(954571),
    ei = t(652215),
    es = t(762432);
let er = (e) => {
        let { channel: n } = e;
        return (0, et.bG)({ channelId: n.id })
            ? (0, l.jsx)(o.m, {
                  text: X.intl.string(X.t.QyZ4Td),
                  children: (0, l.jsx)(K.m, {
                      size: "xs",
                      "aria-label": X.intl.string(X.t.VHXh8a),
                      color: W.A.colors.INTERACTIVE_TEXT_DEFAULT,
                  }),
              })
            : null;
    },
    ea = i.memo(function (e) {
        let { channel: n } = e,
            i = n.id,
            s = (0, g.Ay)(n);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.m, {
                    asContainer: !0,
                    text: X.intl.string(X.t["5Q9+/L"]),
                    position: "bottom",
                    children: (0, l.jsxs)(u.D, {
                        className: es.cD,
                        onClick: () => {
                            (0, en.U)(i, R.A.HEADER_BAR);
                        },
                        onContextMenu: (e) =>
                            (0, $.L3)(
                                e,
                                () =>
                                    Promise.all([
                                        t.e("26132"),
                                        t.e("46652"),
                                        t.e("93190"),
                                        t.e("91763"),
                                        t.e("38730"),
                                        t.e("34971"),
                                        t.e("42339"),
                                        t.e("98725"),
                                        t.e("40175"),
                                        t.e("43746"),
                                        t.e("90554"),
                                        t.e("12520"),
                                        t.e("53416"),
                                        t.e("60200"),
                                    ])
                                        .then(t.bind(t, 4027))
                                        .then((e) => {
                                            let { default: t } = e;
                                            return (e) => (0, l.jsx)(t, { ...e, channel: n, selected: !0 });
                                        }),
                                { noBlurEvent: !0 },
                            ),
                        onDoubleClick: (e) => e.stopPropagation(),
                        onMouseEnter: () => {
                            el.default.track(ei.HAw.GDM_EDIT_INTERACTED, {
                                channel_id: n.id,
                                action: "entry_point_hovered",
                                location: R.A.HEADER_BAR,
                            });
                        },
                        "aria-label": X.intl.string(X.t["5Q9+/L"]),
                        children: [
                            (0, l.jsx)(ee.A, {
                                className: es.gn,
                                "aria-hidden": !0,
                                channel: n,
                                size: J._3.SIZE_20,
                                facepileSizeOverride: J._3.SIZE_24,
                            }),
                            (0, l.jsx)(d.E, { variant: "text-md/medium", color: "text-strong", children: s ?? "" }),
                            (0, l.jsx)(q.R, { className: es.IZ, size: "xs", color: "currentColor" }),
                        ],
                    }),
                }),
                (0, l.jsx)(er, { channel: n }),
            ],
        });
    });
var ec = t(621466),
    eo = t(192308),
    ed = t(46054),
    eu = t(742589),
    eh = t(221308),
    ex = t(992595);
function em(e) {
    return (
        e.matches("a") ||
        "highlight" === e.className ||
        e.className.includes("mention") ||
        e.className.includes("roleMention") ||
        e.className.includes("emojiContainer")
    );
}
class eA extends i.Component {
    handleOpenTopic = (e) => {
        let n = e.target;
        if ((0, ec.vq)(n)) {
            if (em(n)) return;
            let e = n.parentNode;
            if ((0, ec.vq)(e) && em(e)) return;
        }
        (0, eo.openModalLazy)(async () => {
            let { default: e } = await Promise.all([t.e("45988"), t.e("8939")]).then(t.bind(t, 181094));
            return (n) => (0, l.jsx)(e, { ...n, ...this.props });
        });
    };
    handleContextMenu = (e) => {
        let { channel: n, guild: i } = this.props;
        (0, $.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e("26132"),
                t.e("91763"),
                t.e("35321"),
                t.e("50033"),
                t.e("34971"),
                t.e("9004"),
                t.e("43266"),
                t.e("30997"),
                t.e("12255"),
                t.e("40959"),
                t.e("79995"),
                t.e("98725"),
                t.e("44058"),
                t.e("40175"),
                t.e("43746"),
                t.e("90554"),
                t.e("91377"),
                t.e("35723"),
                t.e("66540"),
                t.e("29542"),
                t.e("59545"),
            ]).then(t.bind(t, 22496));
            return (t) => (0, l.jsx)(e, { ...t, channel: n, guild: i, includeTopic: !0 });
        });
    };
    render() {
        let { channel: e } = this.props;
        if (e.isMultiUserDM()) return null;
        let n = null != e.topic && e.topic.length > 0;
        return null != e.linkedLobby || n
            ? (0, l.jsxs)(i.Fragment, {
                  children: [
                      (0, l.jsx)(eu.A.Divider, {}),
                      (0, l.jsxs)("div", {
                          className: r()(eh.At, eh.lu, ex.PT),
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleOpenTopic,
                          children: [
                              (0, l.jsx)(u.D, {
                                  onClick: this.handleOpenTopic,
                                  "aria-label": X.intl.string(X.t.mKwsSp),
                                  className: eh.h8,
                              }),
                              null == e.linkedLobby || n
                                  ? ed.A.parseTopic(e.topic, !0, { channelId: e.id })
                                  : X.intl.string(X.t["XJVlf/"]),
                          ],
                      }),
                  ],
              })
            : null;
    }
}
var eg = t(702841),
    eN = t(97808),
    ej = t(73392),
    eI = t(290863),
    eE = t(427262),
    ep = t(964623);
function eC(e) {
    let n = e.channel.getRecipientId(),
        t = e.channel.isSystemDM(),
        i = (0, eg.bG)([f.default], () => f.default.getUser(n)),
        s = (0, eg.bG)([eI.A], () => eI.A.getStatus(n)),
        r = (0, eg.bG)([eI.A], () => eI.A.isMobileOnline(n)),
        a = (0, eg.bG)([eI.A], () => eI.A.isVROnline(n)),
        c = (0, eg.bG)([T.A], () => T.A.getNickname(n)),
        d = eE.Ay.useUserTag(i),
        u = (0, ej.a)({ displayNameStyles: i?.displayNameStyles }),
        h = (0, et.bG)({ channelId: e.channel.id });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(x.A, { children: X.intl.string(X.t.EJRzg7) }),
            null != i &&
                !t &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(eN.eu, {
                        status: s,
                        isMobile: r,
                        isVR: a,
                        className: ep.my,
                        size: J._3.SIZE_20,
                        "aria-label": eE.Ay.getName(i),
                        src: i.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, l.jsx)(eu.A.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? ep.or : null,
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(o.m, {
                            text: d,
                            position: "bottom",
                            children: (0, l.jsx)("span", { className: u, children: c ?? eE.Ay.getName(i) }),
                        }),
                        h &&
                            (0, l.jsx)(o.m, {
                                text: X.intl.string(X.t.QyZ4Td),
                                children: (0, l.jsx)(K.m, {
                                    size: "xs",
                                    "aria-label": X.intl.string(X.t.VHXh8a),
                                    color: W.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                    className: ep.vW,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
var eb = t(49999);
function eT(e) {
    let { channel: n, children: t } = e,
        i = (0, m.h)(n.linkedLobby?.application_id),
        [s, r] = (0, j.kn)([c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == i) return null;
    let a = D.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 14 }),
        [x, A] =
            s !== c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [X.intl.string(X.t["XJVlf/"]), void 0]
                : [
                      (0, l.jsxs)(
                          "div",
                          {
                              className: ep.lE,
                              children: [
                                  (0, l.jsx)(d.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: X.intl.string(X.t.YIVr4B),
                                  }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: X.intl.format(X.t["16aguo"], {
                                          helpdeskArticle: L.A.getArticleURL(ei.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                                  (0, l.jsx)(u.D, {
                                      className: ep.Q1,
                                      onClick: () => r(eb.i.USER_DISMISS),
                                      children: (0, l.jsx)(h.P, { className: ep.U0, color: "currentColor" }),
                                  }),
                              ],
                          },
                          0,
                      ),
                      X.intl.string(X.t.YIVr4B),
                  ];
    return (0, l.jsx)(
        o.m,
        {
            position: "bottom",
            align: "left",
            __unsupportedReactNodeAsText: x,
            "aria-label": A,
            forceOpen: s === c.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (0, l.jsxs)("div", {
                className: ep.hl,
                children: [
                    t,
                    (0, l.jsxs)(d.E, {
                        className: ep.iO,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: ["•", (0, l.jsx)("img", { alt: "", src: a, className: ep.NB }), i.name],
                    }),
                ],
            }),
        },
        s,
    );
}
function e_(e) {
    let {
            channel: n,
            channelName: t,
            parentChannel: s,
            guild: a,
            inSidebar: c = !1,
            handleClick: o,
            handleContextMenu: d,
            handleParentClick: u,
            handleParentContextMenu: h,
            renderFollowButton: m,
        } = e,
        A = (0, N.gU)(n, a),
        { prefix: j, level: I } = (function (e, n) {
            switch (e) {
                case ei.rbe.DM:
                    return { prefix: X.intl.string(X.t.EJRzg7), level: 1 };
                case ei.rbe.GROUP_DM:
                    return { prefix: X.intl.string(X.t["e5y+gm"]), level: 1 };
                case ei.rbe.GUILD_DIRECTORY:
                case ei.rbe.GUILD_ANNOUNCEMENT:
                case ei.rbe.GUILD_TEXT:
                case ei.rbe.GUILD_FORUM:
                case ei.rbe.GUILD_MEDIA:
                case ei.rbe.GUILD_STAGE_VOICE:
                case ei.rbe.GUILD_VOICE:
                    return { prefix: n?.name ?? "", level: 1 };
                case ei.rbe.ANNOUNCEMENT_THREAD:
                case ei.rbe.PUBLIC_THREAD:
                case ei.rbe.PRIVATE_THREAD:
                    return { prefix: X.intl.string(X.t["7Xm5QI"]), level: 2 };
                default:
                    return { prefix: null, level: 1 };
            }
        })(n.type, a),
        E = (0, l.jsxs)(l.Fragment, {
            children: [null != j ? (0, l.jsxs)(x.A, { children: [j, ":"] }) : null, " ", t],
        });
    switch (n.type) {
        case ei.rbe.DM:
            return (0, l.jsx)(eC, { level: I, channel: n, handleClick: o, handleContextMenu: d });
        case ei.rbe.GROUP_DM:
            if (n.isManaged()) return E;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(x.A, { children: X.intl.string(X.t["e5y+gm"]) }),
                    (0, l.jsx)(ea, { channel: n }, `channel-${n.id}`),
                ],
            });
        case ei.rbe.GUILD_ANNOUNCEMENT:
        case ei.rbe.GUILD_TEXT:
        case ei.rbe.GUILD_FORUM:
        case ei.rbe.GUILD_MEDIA:
            return null != n.linkedLobby
                ? (0, l.jsxs)(eT, {
                      channel: n,
                      children: [
                          eL(
                              A,
                              n.type === ei.rbe.GUILD_ANNOUNCEMENT
                                  ? X.intl.string(X.t.l1dkSD)
                                  : X.intl.string(X.t.Pnajj0),
                          ),
                          (0, l.jsx)(eu.A.Title, { level: I, onContextMenu: d, onClick: o, children: E }),
                      ],
                  })
                : (0, l.jsxs)(i.Fragment, {
                      children: [
                          eL(
                              A,
                              n.type === ei.rbe.GUILD_ANNOUNCEMENT
                                  ? X.intl.string(X.t.l1dkSD)
                                  : X.intl.string(X.t.Pnajj0),
                          ),
                          (0, l.jsx)(eu.A.Title, { level: I, onContextMenu: d, onClick: o, children: E }),
                          null != m ? m() : null,
                      ],
                  });
        case ei.rbe.GUILD_VOICE:
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    eL(A, X.intl.string(X.t.BVZqJl)),
                    (0, l.jsx)(eu.A.Title, { level: I, onContextMenu: d, onClick: o, children: E }),
                ],
            });
        case ei.rbe.GUILD_STAGE_VOICE:
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    eL(A, X.intl.string(X.t.EErMzA)),
                    (0, l.jsx)(eu.A.Title, { level: I, onContextMenu: d, onClick: o, children: E }),
                ],
            });
        case ei.rbe.ANNOUNCEMENT_THREAD:
        case ei.rbe.PUBLIC_THREAD:
        case ei.rbe.PRIVATE_THREAD:
            let p = null;
            if (!c && null != s) {
                let e = (0, N.gU)(s, a);
                p = (0, l.jsxs)(i.Fragment, {
                    children: [
                        eL(e, X.intl.string(X.t.Pnajj0)),
                        (0, l.jsx)(eu.A.Title, {
                            level: I,
                            onContextMenu: h,
                            onClick: u,
                            className: r()(ep.rg, ep.or),
                            children: (0, g.m1)(s, f.default, T.A),
                        }),
                        (0, l.jsx)(eu.A.Caret, {}),
                    ],
                });
            }
            let C = s?.type != null && ei.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    p,
                    eL(C ? null : A, X.intl.string(X.t["7Xm5QI"])),
                    (0, l.jsx)(eu.A.Title, {
                        level: I,
                        onContextMenu: d,
                        onClick: o,
                        className: r()({ [ep.or]: c }),
                        children: E,
                    }),
                ],
            });
        case ei.rbe.GUILD_DIRECTORY:
            let b = a?.features.has(ei.GuildFeatures.HUB)
                ? X.intl.formatToPlainString(X.t.Dy2aht, { guildName: t })
                : t;
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    null !== A ? (0, l.jsx)(eu.A.ChannelIcon, { icon: A, "aria-hidden": !0 }) : null,
                    (0, l.jsxs)(eu.A.Title, {
                        level: I,
                        onContextMenu: d,
                        onClick: o,
                        children: [null != j ? (0, l.jsxs)(x.A, { children: [j, ":"] }) : null, " ", b],
                    }),
                ],
            });
        default:
            return null;
    }
}
let ef = (e) => {
    let { channel: n } = e,
        t = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        s = (0, a.bG)([f.default], () => f.default.getUser(n.getRecipientId())),
        r = (0, a.bG)([C.A], () => (null != s ? C.A.getUserProfile(s.id) : null)),
        c = null != r && (r?.fetchEndedAt ?? 0) > 0;
    return (i.useEffect(() => {
        t?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, b.A)(s.id, s.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0,
            });
    }, [t, s]),
    n.isDM() && t?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, l.jsx)(A.A, { type: A.A.Types.STAFF_ONLY_DM })
            : c && !r.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, l.jsx)(A.A, { type: A.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
};
function eD(e, n) {
    switch (e.type) {
        case ei.rbe.DM:
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(ef, { channel: e }), (0, l.jsx)(Z, { channel: e }, e.id)],
            });
        case ei.rbe.GUILD_ANNOUNCEMENT:
        case ei.rbe.GUILD_TEXT:
        case ei.rbe.GUILD_VOICE:
        case ei.rbe.GUILD_STAGE_VOICE:
        case ei.rbe.GROUP_DM:
            return null != n ? (0, l.jsx)(eA, { channel: e, guild: n }, e.id) : null;
        default:
            return null;
    }
}
function eL(e, n) {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null !== e && (0, l.jsx)(eu.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, l.jsx)(x.A, { children: n }),
        ],
    });
}
function eU(e) {
    let { guild: n, channel: t, caretPosition: s = "left" } = e,
        r = (0, a.bG)([_.A], () => _.A.getGuildId()),
        c = (0, E.lI)(),
        d = i.useRef(null);
    return (r === ei.YYv || c) && null != n
        ? (0, l.jsx)(o.m, {
              asContainer: !0,
              text: n.name,
              targetElementRef: d,
              position: "bottom",
              children: (0, l.jsxs)(u.D, {
                  onClick: () => {
                      (0, p.uh)(n.id, t.id);
                  },
                  className: ep.ED,
                  children: [
                      "left" === s && (0, l.jsx)(eu.A.Caret, { direction: "left" }),
                      (0, l.jsx)("div", {
                          ref: d,
                          children: (0, l.jsx)(I.Ay, {
                              guild: n,
                              size: I.Ay.Sizes.SMALLER,
                              className: ep.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, l.jsx)(eu.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

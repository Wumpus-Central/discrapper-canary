n.d(t, { i$: () => eR, zF: () => eN, EP: () => ev });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(554146),
    d = n(990078),
    c = n(834730),
    u = n(939249),
    h = n(789645),
    A = n(140735),
    _ = n(429913),
    g = n(709066),
    m = n(47167),
    p = n(713654),
    f = n(932001),
    E = n(548118),
    C = n(394953),
    x = n(976860),
    I = n(841595),
    b = n(576622),
    S = n(994500),
    N = n(967198),
    T = n(287809),
    v = n(486020),
    y = n(975571),
    R = n(735438),
    j = n.n(R),
    L = n(3026),
    O = n(245604),
    G = n(777666),
    M = n(104171),
    D = n(793574),
    U = n(688810),
    P = n(919395),
    w = n(975732),
    k = n(696451),
    V = n(71393),
    B = n(583613),
    H = n(403362),
    F = n(58736),
    W = n(518477),
    K = n(985018),
    Y = n(850603);
class z {
    userId;
    user;
    channelId;
    analyticsLocations;
    constructor({ userId: e, user: t, channelId: n, analyticsLocations: i }) {
        (this.userId = e), (this.user = t), (this.channelId = n), (this.analyticsLocations = i);
    }
    updateData(e) {
        let { userId: t, user: n, channelId: i, analyticsLocations: l } = e;
        (this.userId = t), (this.user = n), (this.channelId = i), (this.analyticsLocations = l);
    }
    generateNicknameGuildPairs = (0, B.L_)((e) =>
        j()(k.Ay.getNicknameGuildsMapping(e?.id ?? this.userId))
            .toPairs()
            .map((e) => {
                let [t, n] = e;
                return [t, n.map((e) => V.A.getGuild(e)?.name).filter(H.Vq)];
            })
            .filter((t) => {
                let [n] = t;
                return n !== e?.globalName;
            })
            .value(),
    );
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderMoreAvatars = () =>
        (0, i.jsx)(
            d.m,
            {
                asContainer: !0,
                tag: "span",
                text: K.intl.string(K.t["UTjRE/"]),
                position: "bottom",
                children: (0, i.jsx)(u.D, {
                    className: Y.OZ,
                    onClick: this.handleClick,
                    children: (0, i.jsx)(O.U, { size: "xs", color: "currentColor", className: Y.WW }),
                }),
            },
            "more-avatars",
        );
    renderNicknamePairs(e) {
        return this.getNicknameGuildPairs().map((t, n) => {
            let [s, r] = t,
                a = (0, i.jsx)(u.D, { tag: "span", onClick: this.handleClick, children: s });
            return (
                r.length > 0 &&
                    (a = (0, i.jsx)(d.m, {
                        asContainer: !0,
                        tag: "span",
                        text: r.join(", "),
                        position: "bottom",
                        shouldShow: e,
                        delay: 50,
                        children: a,
                    })),
                (0, i.jsxs)(l.Fragment, { children: [0 !== n ? ", " : null, a] }, n)
            );
        });
    }
    handleClick = () => {
        (0, w.openUserProfileModal)({
            userId: this.userId,
            channelId: this.channelId,
            sourceAnalyticsLocations: this.analyticsLocations,
            tabSection: W.RP.MUTUAL_GUILDS,
        });
    };
}
function q(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        s = (0, P.EI)(n),
        r = Array(s.length).fill(null),
        { analyticsLocations: o } = (0, U.Ay)(D.A.AKA),
        c = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: i } = e,
                s = (0, a.bG)([T.default], () => T.default.getUser(t), [t]),
                [r] = l.useState(() => new z({ user: s, userId: t, channelId: n, analyticsLocations: i }));
            return r.updateData({ userId: t, user: s, channelId: n, analyticsLocations: i }), r;
        })({ userId: n, analyticsLocations: o, channelId: t.id }),
        [u, h] = l.useState(!1),
        A = l.useCallback(() => {
            h(!0);
        }, [h]),
        _ = l.useCallback(() => {
            h(!1);
        }, [h]);
    return 0 === c.getNicknameGuildPairs().length && 0 === s.length
        ? (0, i.jsx)("div", { className: Y.jH })
        : (0, i.jsxs)(U.f5, {
              value: o,
              children: [
                  (0, i.jsx)(F.cG, { className: Y.yF }),
                  (0, i.jsx)(G.Lp, { text: K.intl.string(K.t.l1QVfj), disableColor: !0, className: Y.RV }),
                  s.length > 0
                      ? (0, i.jsx)(M.Ay, {
                            size: 16,
                            users: r,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                let l = c.user,
                                    r = s[n];
                                return null == r || null == l
                                    ? null
                                    : (0, i.jsx)(
                                          d.m,
                                          {
                                              asContainer: !0,
                                              text: V.A.getGuild(r)?.name,
                                              position: "bottom",
                                              children: (0, i.jsx)("img", {
                                                  alt: "",
                                                  className: Y.my,
                                                  onClick: c.handleClick,
                                                  src: l.getAvatarURL(r, 16),
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          r[1],
                                      );
                            },
                            renderMoreUsers: c.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: Y.HD,
                        })
                      : null,
                  c.getNicknameGuildPairs().length > 0
                      ? (0, i.jsx)(L.A, {
                            position: "bottom",
                            className: Y.wm,
                            delay: 0,
                            onTooltipShow: A,
                            onTooltipHide: _,
                            children: c.renderNicknamePairs(!u),
                        })
                      : null,
              ],
          });
}
var X = n(254138),
    Q = n(661531),
    J = n(778712),
    Z = n(22231),
    $ = n(442433),
    ee = n(598104),
    et = n(73028),
    en = n(665691),
    ei = n(954571),
    el = n(652215),
    es = n(762432);
let er = (e) => {
        let { channel: t } = e;
        return (0, en.bG)({ channelId: t.id })
            ? (0, i.jsx)(d.m, {
                  text: K.intl.string(K.t.QyZ4Td),
                  children: (0, i.jsx)(X.m, {
                      size: "xs",
                      "aria-label": K.intl.string(K.t.VHXh8a),
                      color: Q.A.colors.INTERACTIVE_TEXT_DEFAULT,
                  }),
              })
            : null;
    },
    ea = l.memo(function (e) {
        let { channel: t } = e,
            l = t.id,
            s = (0, m.Ay)(t);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.m, {
                    asContainer: !0,
                    text: K.intl.string(K.t["5Q9+/L"]),
                    position: "bottom",
                    children: (0, i.jsxs)(u.D, {
                        className: es.cD,
                        onClick: () => {
                            (0, et.U)(l, D.A.HEADER_BAR);
                        },
                        onContextMenu: (e) =>
                            (0, $.L3)(
                                e,
                                () =>
                                    Promise.all([n.e("97262"), n.e("43768"), n.e("60200")])
                                        .then(n.bind(n, 4027))
                                        .then((e) => {
                                            let { default: n } = e;
                                            return (e) => (0, i.jsx)(n, { ...e, channel: t, selected: !0 });
                                        }),
                                { noBlurEvent: !0 },
                            ),
                        onDoubleClick: (e) => e.stopPropagation(),
                        onMouseEnter: () => {
                            ei.default.track(el.HAw.GDM_EDIT_INTERACTED, {
                                channel_id: t.id,
                                action: "entry_point_hovered",
                                location: D.A.HEADER_BAR,
                            });
                        },
                        "aria-label": K.intl.string(K.t["5Q9+/L"]),
                        children: [
                            (0, i.jsx)(ee.A, {
                                className: es.gn,
                                "aria-hidden": !0,
                                channel: t,
                                size: J._3.SIZE_20,
                                facepileSizeOverride: J._3.SIZE_24,
                            }),
                            (0, i.jsx)(c.E, { variant: "text-md/medium", color: "text-strong", children: s ?? "" }),
                            (0, i.jsx)(Z.R, { className: es.IZ, size: "xs", color: "currentColor" }),
                        ],
                    }),
                }),
                (0, i.jsx)(er, { channel: t }),
            ],
        });
    });
var eo = n(621466),
    ed = n(192308),
    ec = n(46054),
    eu = n(742589),
    eh = n(221308),
    eA = n(992595);
function e_(e) {
    return (
        e.matches("a") ||
        "highlight" === e.className ||
        e.className.includes("mention") ||
        e.className.includes("roleMention") ||
        e.className.includes("emojiContainer")
    );
}
class eg extends l.Component {
    handleOpenTopic = (e) => {
        let t = e.target;
        if ((0, eo.vq)(t)) {
            if (e_(t)) return;
            let e = t.parentNode;
            if ((0, eo.vq)(e) && e_(e)) return;
        }
        (0, ed.openModalLazy)(async () => {
            let { default: e } = await n.e("8939").then(n.bind(n, 181094));
            return (t) => (0, i.jsx)(e, { ...t, ...this.props });
        });
    };
    handleContextMenu = (e) => {
        let { channel: t, guild: l } = this.props;
        (0, $.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("43768"), n.e("59545"), n.e("43156")]).then(n.bind(n, 22496));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l, includeTopic: !0 });
        });
    };
    render() {
        let { channel: e } = this.props;
        if (e.isMultiUserDM()) return null;
        let t = null != e.topic && e.topic.length > 0;
        return null != e.linkedLobby || t
            ? (0, i.jsxs)(l.Fragment, {
                  children: [
                      (0, i.jsx)(eu.A.Divider, {}),
                      (0, i.jsxs)("div", {
                          className: r()(eh.At, eh.lu, eA.PT),
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleOpenTopic,
                          children: [
                              (0, i.jsx)(u.D, {
                                  onClick: this.handleOpenTopic,
                                  "aria-label": K.intl.string(K.t.mKwsSp),
                                  className: eh.h8,
                              }),
                              null == e.linkedLobby || t
                                  ? ec.A.parseTopic(e.topic, !0, { channelId: e.id })
                                  : K.intl.string(K.t["XJVlf/"]),
                          ],
                      }),
                  ],
              })
            : null;
    }
}
var em = n(702841),
    ep = n(97808),
    ef = n(73392),
    eE = n(290863),
    eC = n(427262),
    ex = n(964623);
function eI(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        l = (0, em.bG)([T.default], () => T.default.getUser(t)),
        s = (0, em.bG)([eE.A], () => eE.A.getStatus(t)),
        r = (0, em.bG)([eE.A], () => eE.A.isMobileOnline(t)),
        a = (0, em.bG)([eE.A], () => eE.A.isVROnline(t)),
        o = (0, em.bG)([S.A], () => S.A.getNickname(t)),
        c = eC.Ay.useUserTag(l),
        u = (0, ef.a)({ displayNameStyles: l?.displayNameStyles }),
        h = (0, en.bG)({ channelId: e.channel.id });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(A.A, { children: K.intl.string(K.t.EJRzg7) }),
            null != l &&
                !n &&
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(ep.eu, {
                        status: s,
                        isMobile: r,
                        isVR: a,
                        className: ex.my,
                        size: J._3.SIZE_20,
                        "aria-label": eC.Ay.getName(l),
                        src: l.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, i.jsx)(eu.A.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? ex.or : null,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(d.m, {
                            text: c,
                            position: "bottom",
                            children: (0, i.jsx)("span", { className: u, children: o ?? eC.Ay.getName(l) }),
                        }),
                        h &&
                            (0, i.jsx)(d.m, {
                                text: K.intl.string(K.t.QyZ4Td),
                                children: (0, i.jsx)(X.m, {
                                    size: "xs",
                                    "aria-label": K.intl.string(K.t.VHXh8a),
                                    color: Q.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                    className: ex.vW,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
var eb = n(49999);
function eS(e) {
    let { channel: t, children: n } = e,
        l = (0, _.h)(t.linkedLobby?.application_id),
        [s, r] = (0, f.kn)([o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == l) return null;
    let a = v.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 14 }),
        [A, g] =
            s !== o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [K.intl.string(K.t["XJVlf/"]), void 0]
                : [
                      (0, i.jsxs)(
                          "div",
                          {
                              className: ex.lE,
                              children: [
                                  (0, i.jsx)(c.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: K.intl.string(K.t.YIVr4B),
                                  }),
                                  (0, i.jsx)(c.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: K.intl.format(K.t["16aguo"], {
                                          helpdeskArticle: y.A.getArticleURL(el.MVz.LINKED_LOBBIES),
                                      }),
                                  }),
                                  (0, i.jsx)(u.D, {
                                      className: ex.Q1,
                                      onClick: () => r(eb.i.USER_DISMISS),
                                      children: (0, i.jsx)(h.P, { className: ex.U0, color: "currentColor" }),
                                  }),
                              ],
                          },
                          0,
                      ),
                      K.intl.string(K.t.YIVr4B),
                  ];
    return (0, i.jsx)(
        d.m,
        {
            position: "bottom",
            align: "left",
            __unsupportedReactNodeAsText: A,
            "aria-label": g,
            forceOpen: s === o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (0, i.jsxs)("div", {
                className: ex.hl,
                children: [
                    n,
                    (0, i.jsxs)(c.E, {
                        className: ex.iO,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: ["•", (0, i.jsx)("img", { alt: "", src: a, className: ex.NB }), l.name],
                    }),
                ],
            }),
        },
        s,
    );
}
function eN(e) {
    let {
            channel: t,
            channelName: n,
            parentChannel: s,
            guild: a,
            inSidebar: o = !1,
            handleClick: d,
            handleContextMenu: c,
            handleParentClick: u,
            handleParentContextMenu: h,
            renderFollowButton: _,
        } = e,
        g = (0, p.gU)(t, a),
        { prefix: f, level: E } = (function (e, t) {
            switch (e) {
                case el.rbe.DM:
                    return { prefix: K.intl.string(K.t.EJRzg7), level: 1 };
                case el.rbe.GROUP_DM:
                    return { prefix: K.intl.string(K.t["e5y+gm"]), level: 1 };
                case el.rbe.GUILD_DIRECTORY:
                case el.rbe.GUILD_ANNOUNCEMENT:
                case el.rbe.GUILD_TEXT:
                case el.rbe.GUILD_FORUM:
                case el.rbe.GUILD_MEDIA:
                case el.rbe.GUILD_STAGE_VOICE:
                case el.rbe.GUILD_VOICE:
                    return { prefix: t?.name ?? "", level: 1 };
                case el.rbe.ANNOUNCEMENT_THREAD:
                case el.rbe.PUBLIC_THREAD:
                case el.rbe.PRIVATE_THREAD:
                    return { prefix: K.intl.string(K.t["7Xm5QI"]), level: 2 };
                default:
                    return { prefix: null, level: 1 };
            }
        })(t.type, a),
        C = (0, i.jsxs)(i.Fragment, {
            children: [null != f ? (0, i.jsxs)(A.A, { children: [f, ":"] }) : null, " ", n],
        });
    switch (t.type) {
        case el.rbe.DM:
            return (0, i.jsx)(eI, { level: E, channel: t, handleClick: d, handleContextMenu: c });
        case el.rbe.GROUP_DM:
            if (t.isManaged()) return C;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A.A, { children: K.intl.string(K.t["e5y+gm"]) }),
                    (0, i.jsx)(ea, { channel: t }, `channel-${t.id}`),
                ],
            });
        case el.rbe.GUILD_ANNOUNCEMENT:
        case el.rbe.GUILD_TEXT:
        case el.rbe.GUILD_FORUM:
        case el.rbe.GUILD_MEDIA:
            return null != t.linkedLobby
                ? (0, i.jsxs)(eS, {
                      channel: t,
                      children: [
                          ey(
                              g,
                              t.type === el.rbe.GUILD_ANNOUNCEMENT
                                  ? K.intl.string(K.t.l1dkSD)
                                  : K.intl.string(K.t.Pnajj0),
                          ),
                          (0, i.jsx)(eu.A.Title, { level: E, onContextMenu: c, onClick: d, children: C }),
                      ],
                  })
                : (0, i.jsxs)(l.Fragment, {
                      children: [
                          ey(
                              g,
                              t.type === el.rbe.GUILD_ANNOUNCEMENT
                                  ? K.intl.string(K.t.l1dkSD)
                                  : K.intl.string(K.t.Pnajj0),
                          ),
                          (0, i.jsx)(eu.A.Title, { level: E, onContextMenu: c, onClick: d, children: C }),
                          null != _ ? _() : null,
                      ],
                  });
        case el.rbe.GUILD_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    ey(g, K.intl.string(K.t.BVZqJl)),
                    (0, i.jsx)(eu.A.Title, { level: E, onContextMenu: c, onClick: d, children: C }),
                ],
            });
        case el.rbe.GUILD_STAGE_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    ey(g, K.intl.string(K.t.EErMzA)),
                    (0, i.jsx)(eu.A.Title, { level: E, onContextMenu: c, onClick: d, children: C }),
                ],
            });
        case el.rbe.ANNOUNCEMENT_THREAD:
        case el.rbe.PUBLIC_THREAD:
        case el.rbe.PRIVATE_THREAD:
            let x = null;
            if (!o && null != s) {
                let e = (0, p.gU)(s, a);
                x = (0, i.jsxs)(l.Fragment, {
                    children: [
                        ey(e, K.intl.string(K.t.Pnajj0)),
                        (0, i.jsx)(eu.A.Title, {
                            level: E,
                            onContextMenu: h,
                            onClick: u,
                            className: r()(ex.rg, ex.or),
                            children: (0, m.m1)(s, T.default, S.A),
                        }),
                        (0, i.jsx)(eu.A.Caret, {}),
                    ],
                });
            }
            let I = s?.type != null && el.kvI.GUILD_THREADS_ONLY.has(s.type);
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    x,
                    ey(I ? null : g, K.intl.string(K.t["7Xm5QI"])),
                    (0, i.jsx)(eu.A.Title, {
                        level: E,
                        onContextMenu: c,
                        onClick: d,
                        className: r()({ [ex.or]: o }),
                        children: C,
                    }),
                ],
            });
        case el.rbe.GUILD_DIRECTORY:
            let b = a?.features.has(el.GuildFeatures.HUB)
                ? K.intl.formatToPlainString(K.t.Dy2aht, { guildName: n })
                : n;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    null !== g ? (0, i.jsx)(eu.A.ChannelIcon, { icon: g, "aria-hidden": !0 }) : null,
                    (0, i.jsxs)(eu.A.Title, {
                        level: E,
                        onContextMenu: c,
                        onClick: d,
                        children: [null != f ? (0, i.jsxs)(A.A, { children: [f, ":"] }) : null, " ", b],
                    }),
                ],
            });
        default:
            return null;
    }
}
let eT = (e) => {
    let { channel: t } = e,
        n = (0, a.bG)([T.default], () => T.default.getCurrentUser()),
        s = (0, a.bG)([T.default], () => T.default.getUser(t.getRecipientId())),
        r = (0, a.bG)([I.A], () => (null != s ? I.A.getUserProfile(s.id) : null)),
        o = null != r && (r?.fetchEndedAt ?? 0) > 0;
    return (l.useEffect(() => {
        n?.isStaff() &&
            null != s &&
            !s.isStaff() &&
            (0, b.A)(s.id, s.getAvatarURL(void 0, 80), {
                dispatchWait: !0,
                withMutualGuilds: !0,
                withMutualFriendsCount: !0,
            });
    }, [n, s]),
    t.isDM() && n?.isStaff() && null != s)
        ? s.isStaff()
            ? (0, i.jsx)(g.A, { type: g.A.Types.STAFF_ONLY_DM })
            : o && !r.badges?.some((e) => e.id.startsWith("staff"))
              ? (0, i.jsx)(g.A, { type: g.A.Types.NOT_STAFF_WARNING })
              : null
        : null;
};
function ev(e, t) {
    switch (e.type) {
        case el.rbe.DM:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(eT, { channel: e }), (0, i.jsx)(q, { channel: e }, e.id)],
            });
        case el.rbe.GUILD_ANNOUNCEMENT:
        case el.rbe.GUILD_TEXT:
        case el.rbe.GUILD_VOICE:
        case el.rbe.GUILD_STAGE_VOICE:
        case el.rbe.GROUP_DM:
            return null != t ? (0, i.jsx)(eg, { channel: e, guild: t }, e.id) : null;
        default:
            return null;
    }
}
function ey(e, t) {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null !== e && (0, i.jsx)(eu.A.ChannelIcon, { icon: e, "aria-hidden": !0 }),
            (0, i.jsx)(A.A, { children: t }),
        ],
    });
}
function eR(e) {
    let { guild: t, channel: n, caretPosition: s = "left" } = e,
        r = (0, a.bG)([N.A], () => N.A.getGuildId()),
        o = (0, C.lI)(),
        c = l.useRef(null);
    return (r === el.YYv || o) && null != t
        ? (0, i.jsx)(d.m, {
              asContainer: !0,
              text: t.name,
              targetElementRef: c,
              position: "bottom",
              children: (0, i.jsxs)(u.D, {
                  onClick: () => {
                      (0, x.uh)(t.id, n.id);
                  },
                  className: ex.ED,
                  children: [
                      "left" === s && (0, i.jsx)(eu.A.Caret, { direction: "left" }),
                      (0, i.jsx)("div", {
                          ref: c,
                          children: (0, i.jsx)(E.Ay, {
                              guild: t,
                              size: E.Ay.Sizes.SMALLER,
                              className: ex.gL,
                              active: !0,
                          }),
                      }),
                      "right" === s && (0, i.jsx)(eu.A.Caret, { direction: "right" }),
                  ],
              }),
          })
        : null;
}

n.d(t, {
    St: () => eb,
    WT: () => ey,
    jL: () => eS,
    wG: () => eT,
    yR: () => eg,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s);
n(603113);
var c = n(442837),
    u = n(704215),
    d = n(692547),
    f = n(36563),
    _ = n(28664),
    p = n(481060),
    h = n(493683),
    m = n(475179),
    g = n(287734),
    E = n(872810),
    b = n(607070),
    y = n(16609),
    O = n(220779),
    v = n(557135),
    I = n(194082),
    T = n(266454),
    S = n(543241),
    A = n(258609),
    C = n(810568),
    N = n(168524),
    R = n(102172),
    P = n(871118),
    w = n(565138),
    D = n(66999),
    x = n(359110),
    L = n(12168),
    M = n(237583),
    j = n(131704),
    k = n(592125),
    U = n(430824),
    G = n(496675),
    B = n(699516),
    Z = n(9156),
    F = n(594174),
    V = n(979651),
    H = n(938475),
    Y = n(626135),
    W = n(768581),
    K = n(5192),
    z = n(379357),
    q = n(26033),
    X = n(91907),
    Q = n(358696),
    J = n(656709),
    $ = n(593294),
    ee = n(192918),
    et = n(22211),
    en = n(206295),
    er = n(111386),
    ei = n(896449),
    ea = n(469153),
    eo = n(206583),
    es = n(981631),
    el = n(959517),
    ec = n(388032),
    eu = n(951948);
function ed(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ef(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ed(e, t, n[t]);
            });
    }
    return e;
}
function e_(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ep(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : e_(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eh(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = em(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function em(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function eg(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: eu.popout,
        children: t,
    });
}
function eE(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: s, secondaryColor: l } = (0, en.Z)(n);
    return (
        null != n && (a.background = "linear-gradient(45deg, ".concat(s, ", ").concat(l, ")")),
        (0, r.jsx)(p.f6W, {
            theme: es.BRd.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsx)("div", {
                    className: o()(eu.hero, e, i),
                    style: a,
                    children: t,
                }),
        })
    );
}
function eb(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: eu.interactionsContainer,
        children: t,
    });
}
function ey(e) {
    let { channel: t, user: n, onReaction: a, entry: o, buttons: s = [], header: f, onVoiceChannelPreview: m } = e,
        [g, E] = i.useState(!1),
        [b, y] = i.useState(null),
        v = i.useRef(null),
        I = (0, c.e7)(
            [G.Z],
            () => null != t && es.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && G.Z.can(es.Plq.SEND_MESSAGES, t),
        ),
        [S, A] = i.useState(!1),
        [C, N] = i.useState(!1),
        { voiceBar: R, joinVoiceButton: P } = eC({
            channel: t,
            entry: o,
            onVoiceChannelPreview: m,
        }),
        { embeddedActivity: w } = (0, $.Z)(o),
        D = eA(w),
        x = null != P && 0 === s.length ? [P] : s,
        L = x.length > 0,
        M = x.length >= 2,
        [j, U] = i.useState(!L),
        B = K.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        Z =
            null != t && g
                ? ec.intl.formatToPlainString(ec.t["8lzR/R"], { channel: "#".concat(t.name) })
                : ec.intl.formatToPlainString(ec.t["4c+CAx"], { channel: "@".concat(B) }),
        F = g ? ec.intl.string(ec.t.Z2CUgn) : ec.intl.string(ec.t.XLGiTG),
        V = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (Y.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: eo.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id,
                    }),
                    (0, T.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    A(!0),
                    N(!1),
                    g)
                )
                    l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
                else {
                    var o;
                    let e = await h.Z.getOrEnsurePrivateChannel(n.id);
                    r = null != (o = k.Z.getChannel(e)) ? o : null;
                }
                return (
                    l()(null != r, "Send channel must be defined"),
                    W({
                        reply: ":".concat(i.name, ":"),
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            N(!0),
                                setTimeout(() => {
                                    A(!1), a(e, t);
                                }, 600);
                        },
                        interactionType: eo.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        H = async (e) => {
            let r;
            if (((0, T.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g))
                l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
            else {
                let e = await h.Z.openPrivateChannel({ recipientIds: n.id }),
                    t = k.Z.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === es.d4z.DM ? eo.xP.DM_REACTION_MESSAGE_SENT : eo.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return W({
                reply: e,
                sendToChannel: r,
                interactionType: i,
                onComplete: a,
                requiresChannelReadiness: !0,
            });
        },
        W = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: a } = e;
            null == b || b.focus(),
                await (0, J.p)({
                    channel: n,
                    content: t,
                    entry: o,
                    whenReady: a,
                    doNotNotifyOnError: !1,
                    location: el.dy.CONTENT_INVENTORY_MEMBERLIST,
                }),
                null == r || r(i, n);
        },
        z = null != f ? f : null != R ? R : null != D ? D : void 0,
        q = () => {
            E((e) => !e), j && (null == b || b.focus());
        },
        X = (e) => {
            U(e), e && (null == b || b.focus());
        };
    return (0, r.jsx)("div", {
        ref: v,
        style: { pointerEvents: S ? "none" : "all" },
        children: (0, r.jsx)(p.EqS, {
            containerRef: v,
            children: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(ea.Z, {
                        sent: C,
                        shown: S,
                        className: eu.toastContainer,
                    }),
                    null != z
                        ? z
                        : (0, r.jsx)(er.Z, {
                              children: (0, r.jsxs)("div", {
                                  className: eu.emojiHotrailShareToChannel,
                                  children: [
                                      (0, r.jsx)(eO, {
                                          channel: t,
                                          onClickSuggestion: V,
                                      }),
                                      (0, r.jsx)(O.dE, { onSelectEmoji: V }),
                                  ],
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: j ? eu.inputContainerShareToChannel : eu.hiddenButRenderedInputField,
                        children: [
                            (0, r.jsx)(O.A7, {
                                placeholder: Z,
                                onEnter: H,
                                setEditorRef: (e) => y(e),
                                channel: g ? t : void 0,
                                showEmojiButton: null != z,
                                className: eu.replyInput,
                                autoFocus: !1,
                                renderAttachButton: I
                                    ? () =>
                                          (0, r.jsx)(_.u, {
                                              text: F,
                                              children: (0, r.jsx)(p.P3F, {
                                                  className: eu.shareToChannelButton,
                                                  onClick: q,
                                                  children: g
                                                      ? (0, r.jsx)(p.VL1, {
                                                            size: "custom",
                                                            width: 20,
                                                            height: 20,
                                                        })
                                                      : (0, r.jsx)(p.lOy, {
                                                            size: "custom",
                                                            width: 20,
                                                            height: 20,
                                                        }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            L &&
                                (0, r.jsx)(p.P3F, {
                                    onClick: () => X(!1),
                                    className: eu.primaryActionPopoutMessageCloseIcon,
                                    children: (0, r.jsx)(p.Dio, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: d.Z.colors.ICON_PRIMARY,
                                    }),
                                }),
                        ],
                    }),
                    !1 === j &&
                        (0, r.jsxs)("div", {
                            className: eu.primaryActionPopoutActionButtons,
                            children: [
                                !M &&
                                    (0, r.jsx)(
                                        p.Button,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => X(!0),
                                            size: M ? "sm" : "md",
                                            text: ec.intl.string(ec.t.OAJQlP),
                                        },
                                        "toggleMessageMode",
                                    ),
                                x,
                            ],
                        }),
                ],
            }),
        }),
    });
}
let eO = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, o] = i.useState(!1);
    i.useEffect(() => {
        o(!0);
    }, []);
    let s = !!b.Z.keyboardModeEnabled && !a,
        l = (0, S.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url,
                      }
                    : {
                          emoji: e,
                          url: (0, W.gT)({
                              id: e.id,
                              animated: e.animated,
                              size: 58,
                          }),
                      },
            );
    return (0, r.jsx)(r.Fragment, {
        children: l.map((e) => {
            let { emoji: t, url: i } = e;
            return null != i
                ? (0, r.jsx)(
                      "div",
                      {
                          children: (0, r.jsx)(_.u, {
                              asContainer: !0,
                              text: ec.intl.formatToPlainString(ec.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": ec.intl.formatToPlainString(ec.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !s && void 0,
                              children: (0, r.jsx)(L.u, {
                                  emoji: t,
                                  isDisabled: !a,
                                  onClick: () => n({ emoji: t }),
                                  className: eu.emoji,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function ev(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: a, onUserPopoutClosed: s } = e,
        l = null == t ? void 0 : t.guild_id,
        { displayParticipants: u, participant1: d, participant2: _, numOtherParticipants: h } = (0, ee.Z)(i, 3),
        m = (0, c.e7)([F.default], () => F.default.getUser(i.author_id)),
        { streamPreviewUrl: g } = (0, et.Z)(i),
        E = null != g,
        b = [d, _];
    return (0, r.jsxs)("div", {
        className: eu.popoutContentHeader,
        children: [
            (0, r.jsxs)("div", {
                className: eu.popoutUserContainer,
                children: [
                    (0, r.jsx)(f.Z, {
                        maxUsers: 3,
                        users: u,
                        size: p.EFr.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: s,
                    }),
                    (0, r.jsx)(p.LZC, {
                        size: 8,
                        horizontal: !0,
                    }),
                    (0, r.jsx)(p.Heading, {
                        variant: "heading-sm/normal",
                        className: o()(eu.popoutUsernames, eu.popoutTextSecondary),
                        children: ec.intl.format(n, {
                            user0: K.ZP.getName(l, null == t ? void 0 : t.id, b[0]),
                            user1: K.ZP.getName(l, null == t ? void 0 : t.id, b[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    p.Text,
                                    {
                                        variant: "text-sm/medium",
                                        className: o()(eu.popoutUsername, eu.popoutTextPrimary),
                                        children: e,
                                    },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    X.Z,
                                    {
                                        textClassName: o()(eu.popoutUsername, eu.popoutTextPrimary),
                                        text: e,
                                        user: b[0],
                                        channel: t,
                                        onPopoutClosed: s,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, r.jsx)(
                                    X.Z,
                                    {
                                        textClassName: o()(eu.popoutUsername, eu.popoutTextPrimary),
                                        text: e,
                                        user: b[1],
                                        channel: t,
                                        onPopoutClosed: s,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            E && (0, r.jsx)(I.ZP, { size: I.ZP.Sizes.SMALL }),
            null != m &&
                (0, r.jsx)(ei.Z, {
                    user: m,
                    channel: t,
                    guildId: l,
                    entry: i,
                    disableGameProfileLinks: a,
                }),
        ],
    });
}
function eI(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(p.P3F, {
              className: eu.maybeClickable,
              onClick: n,
              children: t,
          });
}
function eT(e) {
    var t,
        {
            title: n,
            subtitle: i,
            badges: a,
            children: s,
            onClickThumbnail: l,
            onClickTitle: c,
            onClickSubtitle: u,
            headerIcons: d,
            disableGameProfileLinks: f = !1,
            showCoverImage: _ = !0,
            onUserPopoutClosed: h,
            trackRankingItemInteraction: m,
        } = e,
        g = eh(e, [
            "title",
            "subtitle",
            "badges",
            "children",
            "onClickThumbnail",
            "onClickTitle",
            "onClickSubtitle",
            "headerIcons",
            "disableGameProfileLinks",
            "showCoverImage",
            "onUserPopoutClosed",
            "trackRankingItemInteraction",
        ]);
    let { entry: E } = g,
        b = (0, q.dX)(E),
        y = b ? (null == (t = E.extra) ? void 0 : t.application_id) : void 0,
        O = (0, N.Z)(
            {
                location: "ContentPopout",
                applicationId: f ? void 0 : y,
                source: C.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: E.author_id,
            },
            { onOpened: () => (null == m ? void 0 : m(eo.xP.OPENED_GAME_PROFILE)) },
        ),
        { largeImage: v, smallImage: I } = (0, z.rv)({
            entry: E,
            showCoverImage: _,
        }),
        T = b ? O : void 0;
    return (0, r.jsxs)("div", {
        className: eu.popoutContentWrapper,
        children: [
            (0, r.jsx)(ev, ep(ef({ disableGameProfileLinks: f }, g), { onUserPopoutClosed: h })),
            (0, r.jsxs)(eE, {
                backgroundImgSrc: null == v ? void 0 : v.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: eu.popoutHeroInner,
                        children: [
                            (0, r.jsx)("div", {
                                className: eu.popoutThumbnailContainer,
                                children: (0, r.jsx)(Q.E, {
                                    image: v,
                                    smallImage: I,
                                    aspectRatio: _ ? "none" : void 0,
                                    onClick: null != l ? l : T,
                                    size: Q.J.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: eu.popoutHeroBody,
                                children: [
                                    (0, r.jsx)(eI, {
                                        onClick: null != c ? c : T,
                                        children: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/medium",
                                            className: o()(eu.popoutHeroTextPrimary, {
                                                [eu.popoutHeroTextPrimaryShort]: null != d,
                                            }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != i
                                        ? (0, r.jsx)(eI, {
                                              onClick: null != u ? u : T,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: eu.popoutHeroTextSecondary,
                                                  children: i,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(p.LZC, { size: 8 }),
                                    a,
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: eu.popoutHeaderIcons,
                                children: d,
                            }),
                        ],
                    }),
                    s,
                ],
            }),
        ],
    });
}
function eS(e) {
    var t,
        {
            title: n,
            subtitle: a,
            badges: o,
            stream: s,
            onClickThumbnail: l,
            onClickTitle: u,
            onClickSubtitle: d,
            onUserPopoutClosed: f,
            trackRankingItemInteraction: _,
        } = e,
        h = eh(e, [
            "title",
            "subtitle",
            "badges",
            "stream",
            "onClickThumbnail",
            "onClickTitle",
            "onClickSubtitle",
            "onUserPopoutClosed",
            "trackRankingItemInteraction",
        ]);
    let m = (0, c.e7)([k.Z], () => k.Z.getChannel(null == s ? void 0 : s.channelId)),
        [b] = i.useMemo(() => (0, R.p9)(m, V.Z, U.Z, G.Z, A.default), [m]),
        { entry: y } = h,
        O = (0, q.dX)(y),
        v = O ? (null == (t = y.extra) ? void 0 : t.application_id) : void 0,
        I = (0, N.Z)(
            {
                location: "ContentPopout",
                applicationId: v,
                source: C.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: y.author_id,
            },
            { onOpened: () => (null == _ ? void 0 : _(eo.xP.OPENED_GAME_PROFILE)) },
        ),
        T = O ? I : void 0,
        { activity: S, activityApplication: w, fallbackApplication: D } = (0, $.Z)(y),
        { largeImage: x, smallImage: L } = (0, z.YC)(S, null != w ? w : D),
        { largeImage: M } = (0, z.rv)({ entry: y });
    return (0, r.jsxs)("div", {
        className: eu.popoutContentWrapper,
        children: [
            (0, r.jsx)(ev, ep(ef({}, h), { onUserPopoutClosed: f })),
            (0, r.jsxs)(eE, {
                backgroundImgSrc: null == M ? void 0 : M.src,
                className: eu.streamingPopoutHero,
                children: [
                    (0, r.jsx)(eI, {
                        onClick: b
                            ? () => {
                                  g.default.selectVoiceChannel(s.channelId), (0, E.iV)(s);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: eu.streamingPopoutPreviewContainer,
                            children: [
                                (0, r.jsx)(P.Z, {
                                    className: eu.streamingPopoutImg,
                                    stream: s,
                                }),
                                b &&
                                    (0, r.jsx)("div", {
                                        className: eu.streamCTA,
                                        children: (0, r.jsx)(p.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: ec.intl.string(ec.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eu.streamingPopoutHeader,
                        children: [
                            null != x &&
                                (0, r.jsx)("div", {
                                    className: eu.popoutThumbnailContainer,
                                    children: (0, r.jsx)(Q.E, {
                                        image: x,
                                        smallImage: L,
                                        onClick: null != l ? l : T,
                                        size: Q.J.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: eu.streamingPopoutHeaderText,
                                children: [
                                    (0, r.jsx)(eI, {
                                        onClick: null != u ? u : T,
                                        children: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/semibold",
                                            className: eu.popoutTextPrimary,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != a
                                        ? (0, r.jsx)(eI, {
                                              onClick: null != d ? d : T,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: eu.popoutTextSecondary,
                                                  children: a,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(p.LZC, { size: 8 }),
                                    o,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eA(e) {
    let t = (0, c.e7)([U.Z], () => U.Z.getGuild((0, y.j)(null == e ? void 0 : e.location))),
        n = (0, c.e7)([k.Z], () => k.Z.getChannel((0, y.p)(null == e ? void 0 : e.location))),
        i = (0, c.Wu)([F.default], () => {
            var t, n;
            return null !=
                (n = null == e || null == (t = e.participants) ? void 0 : t.map((e) => F.default.getUser(e.userId)))
                ? n
                : [];
        });
    return null != e && null != t && null != n && j.sR.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: eu.voiceChannelPopoutReactorHeader,
                      children: [
                          (0, r.jsxs)(p.P3F, {
                              "aria-label": ec.intl.string(ec.t["W/A4Qp"]),
                              onClick: () => (0, x.Kh)(n.id),
                              className: eu.voiceChannelPopoutReactorChannel,
                              children: [
                                  (0, r.jsx)(w.Z, {
                                      guild: t,
                                      size: w.Z.Sizes.SMOL,
                                      className: eu.voiceChannelGuildIcon,
                                      active: !0,
                                  }),
                                  (0, r.jsx)(p.Fbu, {
                                      size: "xxs",
                                      color: d.Z.colors.INTERACTIVE_NORMAL,
                                  }),
                                  (0, r.jsx)(p.VL1, {
                                      size: "xs",
                                      color: d.Z.colors.TEXT_DEFAULT,
                                  }),
                                  (0, r.jsx)(p.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: eu.voiceChannelName,
                                      children: null == n ? void 0 : n.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(M.Z, {
                              guildId: t.id,
                              users: i,
                              max: 3,
                              renderUser: (e, n) =>
                                  (0, r.jsx)(p.qEK, {
                                      src: e.getAvatarURL(t.id, 16),
                                      size: p.EFr.SIZE_16,
                                      "aria-label": "avatar",
                                      className: n,
                                  }),
                              renderMoreUsers: (e) =>
                                  (0, r.jsx)("div", {
                                      className: eu.voiceChannelAdditionalParticipants,
                                      children: (0, r.jsx)(p.Text, {
                                          variant: "text-xxs/semibold",
                                          color: "text-default",
                                          children: e,
                                      }),
                                  }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(p.LZC, { size: 16 }),
              ],
          })
        : null;
}
function eC(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: o, channel: s } = (0, et.Z)(n),
        { needSubscriptionToAccess: l } = (0, D.Z)(null == t ? void 0 : t.id),
        u = (0, c.e7)([U.Z], () => (null != s ? U.Z.getGuild(s.guild_id) : void 0)),
        f = (0, c.Wu)([H.ZP], () => (null != s ? H.ZP.getVoiceStatesForChannel(s) : []), [s]),
        h = (0, c.e7)([V.Z], () => V.Z.isInChannel(null == s ? void 0 : s.id)),
        g = i.useMemo(() => {
            for (let e of f) {
                let t = k.Z.getDMFromUserId(e.user.id),
                    n = null != t && Z.ZP.isChannelMuted(null, t),
                    r = B.Z.isBlockedOrIgnored(e.user.id);
                if (n || r) return !0;
            }
            return !1;
        }, [f]);
    if (null == s || null == u)
        return {
            voiceBar: void 0,
            joinVoiceButton: void 0,
        };
    let E = null != o,
        b = () => {
            m.Z.updateChatOpen(s.id, !0), (0, x.Kh)(s.id), null == a || a(s);
        },
        y = () => {
            v.Z.handleVoiceConnect({
                channel: s,
                connected: h,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: !0,
            });
        },
        O = (e) => {
            let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                a = i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              i &&
                                  (0, r.jsx)(p.aNP, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: eu.popoutBlockedWarningIcon,
                                  }),
                              ec.intl.string(ec.t.d6DpXI),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                _.u,
                {
                    "aria-label": i ? ec.intl.string(ec.t.d6DpXI) : null != n && n,
                    __unsupportedReactNodeAsText: a,
                    shouldShow: !0,
                    children: t,
                },
                "voice-preview",
            );
        };
    return {
        voiceBar: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: eu.voiceChannelPopoutReactorHeader,
                    children: [
                        (0, r.jsx)(O, {
                            text: ec.intl.string(ec.t.WIVYqJ),
                            hasRestrictedOrMutedVCParticipant: g,
                            children: (0, r.jsxs)(p.P3F, {
                                "aria-label": ec.intl.string(ec.t.WIVYqJ),
                                onClick: b,
                                className: eu.voiceChannelPopoutReactorChannel,
                                children: [
                                    (0, r.jsx)(w.Z, {
                                        guild: u,
                                        size: w.Z.Sizes.SMOL,
                                        className: eu.voiceChannelGuildIcon,
                                        active: !0,
                                    }),
                                    (0, r.jsx)(p.Fbu, {
                                        size: "xxs",
                                        color: d.Z.colors.INTERACTIVE_NORMAL,
                                    }),
                                    (0, r.jsx)(p.gj8, {
                                        size: "xs",
                                        color: d.Z.colors.TEXT_DEFAULT,
                                    }),
                                    (0, r.jsx)(p.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eu.voiceChannelName,
                                        children: s.name,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(M.Z, {
                            guildId: u.id,
                            users: f,
                            max: 3,
                            renderUser: (e, t) =>
                                (0, r.jsx)(p.qEK, {
                                    src: e.user.getAvatarURL(u.id, 16),
                                    size: p.EFr.SIZE_16,
                                    "aria-label": "avatar",
                                    className: t,
                                }),
                            renderMoreUsers: (e) =>
                                (0, r.jsx)("div", {
                                    className: eu.voiceChannelAdditionalParticipants,
                                    children: (0, r.jsx)(p.Text, {
                                        variant: "text-xxs/semibold",
                                        color: "text-default",
                                        children: e,
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsx)(p.LZC, { size: 16 }),
            ],
        }),
        joinVoiceButton: h
            ? null
            : (0, r.jsx)(O, {
                  hasRestrictedOrMutedVCParticipant: g,
                  children: (0, r.jsx)(p.Button, {
                      onClick: y,
                      fullWidth: !0,
                      text: E ? ec.intl.string(ec.t.I6JG46) : ec.intl.string(ec.t.VJlc0S),
                      icon: E ? p.pzj : p.gj8,
                      variant: "active",
                      size: "md",
                  }),
              }),
    };
}

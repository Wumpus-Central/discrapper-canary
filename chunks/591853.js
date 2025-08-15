n.d(t, {
    Ll: () => eR,
    St: () => ev,
    WT: () => eI,
    jL: () => eC,
    wG: () => eN,
    yR: () => ey,
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
    f = n(481060),
    _ = n(493683),
    p = n(475179),
    h = n(287734),
    m = n(872810),
    g = n(607070),
    E = n(16609),
    b = n(100527),
    y = n(220779),
    O = n(557135),
    v = n(194082),
    I = n(266454),
    T = n(543241),
    S = n(318374),
    A = n(258609),
    N = n(480086),
    C = n(810568),
    R = n(168524),
    P = n(102172),
    w = n(871118),
    D = n(565138),
    L = n(66999),
    x = n(359110),
    M = n(12168),
    k = n(237583),
    j = n(131704),
    U = n(592125),
    G = n(430824),
    B = n(496675),
    V = n(699516),
    F = n(9156),
    Z = n(594174),
    H = n(979651),
    Y = n(938475),
    W = n(626135),
    K = n(768581),
    z = n(5192),
    q = n(379357),
    X = n(26033),
    Q = n(91907),
    J = n(358696),
    $ = n(656709),
    ee = n(593294),
    et = n(192918),
    en = n(22211),
    er = n(206295),
    ei = n(111386),
    ea = n(896449),
    eo = n(469153),
    es = n(206583),
    el = n(981631),
    ec = n(959517),
    eu = n(388032),
    ed = n(951948);
function ef(e, t, n) {
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
function e_() {
    return (e_ =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function ep(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function eh(e) {
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
                ef(e, t, n[t]);
            });
    }
    return e;
}
function em(e, t) {
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
function eg(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : em(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eE(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eb(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eb(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function ey(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: ed.popout,
        children: t,
    });
}
function eO(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: s, secondaryColor: l } = (0, er.Z)(n);
    return (
        null != n && (a.background = "linear-gradient(45deg, ".concat(s, ", ").concat(l, ")")),
        (0, r.jsx)(f.f6W, {
            theme: el.BRd.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsx)("div", {
                    className: o()(ed.hero, e, i),
                    style: a,
                    children: t,
                }),
        })
    );
}
function ev(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: ed.interactionsContainer,
        children: t,
    });
}
function eI(e) {
    let { channel: t, user: n, onReaction: a, entry: o, buttons: s = [], header: p, onVoiceChannelPreview: h } = e,
        [m, g] = i.useState(!1),
        [E, b] = i.useState(null),
        O = (0, c.e7)(
            [B.Z],
            () => null != t && el.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && B.Z.can(el.Plq.SEND_MESSAGES, t),
        ),
        [v, T] = i.useState(!1),
        [S, A] = i.useState(!1),
        { voiceBar: N, joinVoiceButton: C } = ew({
            channel: t,
            entry: o,
            onVoiceChannelPreview: h,
        }),
        { embeddedActivity: R } = (0, ee.Z)(o),
        P = eP(R),
        w = null != C && 0 === s.length ? [C] : s,
        D = w.length > 0,
        L = w.length >= 2,
        [x, M] = i.useState(!D),
        k = z.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        j =
            null != t && m
                ? eu.intl.formatToPlainString(eu.t["8lzR/f"], { channel: "#".concat(t.name) })
                : eu.intl.formatToPlainString(eu.t["4c+CAw"], { channel: "@".concat(k) }),
        G = m ? eu.intl.string(eu.t.Z2CUgo) : eu.intl.string(eu.t.XLGiTE),
        V = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (W.default.track(el.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: es.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id,
                    }),
                    (0, I.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    T(!0),
                    A(!1),
                    m)
                )
                    l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
                else {
                    var o;
                    let e = await _.Z.getOrEnsurePrivateChannel(n.id);
                    r = null != (o = U.Z.getChannel(e)) ? o : null;
                }
                return (
                    l()(null != r, "Send channel must be defined"),
                    Z({
                        reply: ":".concat(i.name, ":"),
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            A(!0),
                                setTimeout(() => {
                                    T(!1), a(e, t);
                                }, 600);
                        },
                        interactionType: es.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        F = async (e) => {
            let r;
            if (((0, I.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), m))
                l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
            else {
                let e = await _.Z.openPrivateChannel({ recipientIds: n.id }),
                    t = U.Z.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === el.d4z.DM ? es.xP.DM_REACTION_MESSAGE_SENT : es.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return Z({
                reply: e,
                sendToChannel: r,
                interactionType: i,
                onComplete: a,
                requiresChannelReadiness: !0,
            });
        },
        Z = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: a } = e;
            null == E || E.focus(),
                await (0, $.p)({
                    channel: n,
                    content: t,
                    entry: o,
                    whenReady: a,
                    doNotNotifyOnError: !1,
                    location: ec.dy.CONTENT_INVENTORY_MEMBERLIST,
                }),
                null == r || r(i, n);
        },
        H = null != p ? p : null != N ? N : null != P ? P : void 0,
        Y = () => {
            g((e) => !e), x && (null == E || E.focus());
        },
        K = (e) => {
            M(e), e && (null == E || E.focus());
        };
    return (0, r.jsxs)("div", {
        style: { pointerEvents: v ? "none" : "all" },
        children: [
            (0, r.jsx)(eo.Z, {
                sent: S,
                shown: v,
                className: ed.toastContainer,
            }),
            null != H
                ? H
                : (0, r.jsx)(ei.Z, {
                      children: (0, r.jsxs)("div", {
                          className: ed.emojiHotrailShareToChannel,
                          children: [
                              (0, r.jsx)(eT, {
                                  channel: t,
                                  onClickSuggestion: V,
                              }),
                              (0, r.jsx)(y.dE, { onSelectEmoji: V }),
                          ],
                      }),
                  }),
            (0, r.jsxs)("div", {
                className: x ? ed.inputContainerShareToChannel : ed.hiddenButRenderedInputField,
                children: [
                    (0, r.jsx)(y.A7, {
                        placeholder: j,
                        onEnter: F,
                        setEditorRef: (e) => b(e),
                        channel: m ? t : void 0,
                        showEmojiButton: null != H,
                        className: ed.replyInput,
                        autoFocus: !1,
                        renderAttachButton: O
                            ? () =>
                                  (0, r.jsx)(f.ua7, {
                                      text: G,
                                      children: (e) =>
                                          (0, r.jsx)(
                                              f.P3F,
                                              eg(eh({}, e), {
                                                  className: ed.shareToChannelButton,
                                                  onClick: Y,
                                                  children: m
                                                      ? (0, r.jsx)(f.VL1, {
                                                            size: "custom",
                                                            width: 20,
                                                            height: 20,
                                                        })
                                                      : (0, r.jsx)(f.lOy, {
                                                            size: "custom",
                                                            width: 20,
                                                            height: 20,
                                                        }),
                                              }),
                                          ),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, r.jsx)(f.P3F, {
                            onClick: () => K(!1),
                            className: ed.primaryActionPopoutMessageCloseIcon,
                            children: (0, r.jsx)(f.Dio, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: d.Z.colors.ICON_PRIMARY,
                            }),
                        }),
                ],
            }),
            !1 === x &&
                (0, r.jsxs)("div", {
                    className: ed.primaryActionPopoutActionButtons,
                    children: [
                        !L &&
                            (0, r.jsx)(
                                f.zxk,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => K(!0),
                                    size: L ? "sm" : "md",
                                    text: eu.intl.string(eu.t.OAJQlJ),
                                },
                                "toggleMessageMode",
                            ),
                        w,
                    ],
                }),
        ],
    });
}
let eT = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, o] = i.useState(!1);
    i.useEffect(() => {
        o(!0);
    }, []);
    let s = !!g.Z.keyboardModeEnabled && !a,
        l = (0, T.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url,
                      }
                    : {
                          emoji: e,
                          url: (0, K.gT)({
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
                          children: (0, r.jsx)(f.DY3, {
                              text: eu.intl.formatToPlainString(eu.t.kilW3t, { emojiName: t.name }),
                              position: "top",
                              "aria-label": eu.intl.formatToPlainString(eu.t.kilW3t, { emojiName: t.name }),
                              color: f.ua7.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, r.jsx)(M.u, {
                                  emoji: t,
                                  isDisabled: !a,
                                  onClick: () => n({ emoji: t }),
                                  className: ed.emoji,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function eS(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: a, onUserPopoutClosed: s } = e,
        l = null == t ? void 0 : t.guild_id,
        { displayParticipants: u, participant1: d, participant2: _, numOtherParticipants: p } = (0, et.Z)(i, 3),
        h = (0, c.e7)([Z.default], () => Z.default.getUser(i.author_id)),
        { streamPreviewUrl: m } = (0, en.Z)(i),
        g = null != m,
        E = [d, _];
    return (0, r.jsxs)("div", {
        className: ed.popoutContentHeader,
        children: [
            (0, r.jsxs)("div", {
                className: ed.popoutUserContainer,
                children: [
                    (0, r.jsx)(S.Z, {
                        maxUsers: 3,
                        users: u,
                        size: f.EFr.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: s,
                    }),
                    (0, r.jsx)(f.LZC, {
                        size: 8,
                        horizontal: !0,
                    }),
                    (0, r.jsx)(f.X6q, {
                        variant: "heading-sm/normal",
                        className: o()(ed.popoutUsernames, ed.popoutTextSecondary),
                        children: eu.intl.format(n, {
                            user0: z.ZP.getName(l, null == t ? void 0 : t.id, E[0]),
                            user1: z.ZP.getName(l, null == t ? void 0 : t.id, E[1]),
                            countOthers: p,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    f.Text,
                                    {
                                        variant: "text-sm/medium",
                                        className: o()(ed.popoutUsername, ed.popoutTextPrimary),
                                        children: e,
                                    },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    Q.Z,
                                    {
                                        textClassName: o()(ed.popoutUsername, ed.popoutTextPrimary),
                                        text: e,
                                        user: E[0],
                                        channel: t,
                                        onPopoutClosed: s,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, r.jsx)(
                                    Q.Z,
                                    {
                                        textClassName: o()(ed.popoutUsername, ed.popoutTextPrimary),
                                        text: e,
                                        user: E[1],
                                        channel: t,
                                        onPopoutClosed: s,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            g && (0, r.jsx)(v.ZP, { size: v.ZP.Sizes.SMALL }),
            null != h &&
                (0, r.jsx)(ea.Z, {
                    user: h,
                    channel: t,
                    guildId: l,
                    entry: i,
                    disableGameProfileLinks: a,
                }),
        ],
    });
}
function eA(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(f.P3F, {
              className: ed.maybeClickable,
              onClick: n,
              children: t,
          });
}
function eN(e) {
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
            disableGameProfileLinks: _ = !1,
            showCoverImage: p = !0,
            onUserPopoutClosed: h,
            trackRankingItemInteraction: m,
        } = e,
        g = eE(e, [
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
        y = (0, X.dX)(E),
        O = y ? (null == (t = E.extra) ? void 0 : t.application_id) : void 0,
        v = (0, N.u)(O, b.Z.MEMBER_LIST),
        I = (0, R.Z)(
            {
                location: "ContentPopout",
                applicationId: _ ? void 0 : O,
                source: C.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: E.author_id,
            },
            { onOpened: () => (null == m ? void 0 : m(es.xP.OPENED_GAME_PROFILE)) },
        ),
        { largeImage: T, smallImage: S } = (0, q.rv)({
            entry: E,
            showCoverImage: p,
        }),
        A = y ? I : void 0;
    return (0, r.jsxs)("div", {
        className: ed.popoutContentWrapper,
        children: [
            (0, r.jsx)(eS, eg(eh({ disableGameProfileLinks: _ }, g), { onUserPopoutClosed: h })),
            (0, r.jsxs)(eO, {
                backgroundImgSrc: null == T ? void 0 : T.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: ed.popoutHeroInner,
                        children: [
                            (0, r.jsx)("div", {
                                className: ed.popoutThumbnailContainer,
                                children: (0, r.jsx)(J.E, {
                                    image: T,
                                    smallImage: S,
                                    aspectRatio: p ? "none" : void 0,
                                    onClick: null != l ? l : A,
                                    size: J.J.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: ed.popoutHeroBody,
                                children: [
                                    (0, r.jsx)(eA, {
                                        onClick: null != c ? c : A,
                                        children: (0, r.jsx)(f.X6q, {
                                            variant: "heading-md/medium",
                                            className: o()(ed.popoutHeroTextPrimary, {
                                                [ed.popoutHeroTextPrimaryShort]: null != d,
                                            }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != i
                                        ? (0, r.jsx)(eA, {
                                              onClick: null != u ? u : A,
                                              children: (0, r.jsx)(f.Text, {
                                                  variant: "text-sm/normal",
                                                  className: ed.popoutHeroTextSecondary,
                                                  children: i,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(f.LZC, { size: 8 }),
                                    a,
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: ed.popoutHeaderIcons,
                                children: d,
                            }),
                        ],
                    }),
                    null != v
                        ? (0, r.jsx)(f.zxk, {
                              icon: v.icon,
                              text: eu.intl.string(v.labelKey),
                              variant: "secondary",
                              onClick: v.openLink,
                              fullWidth: !0,
                          })
                        : null,
                    s,
                ],
            }),
        ],
    });
}
function eC(e) {
    var t,
        {
            title: n,
            subtitle: a,
            badges: o,
            stream: s,
            onClickThumbnail: l,
            onClickTitle: u,
            onClickSubtitle: d,
            onUserPopoutClosed: _,
            trackRankingItemInteraction: p,
        } = e,
        g = eE(e, [
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
    let E = (0, c.e7)([U.Z], () => U.Z.getChannel(null == s ? void 0 : s.channelId)),
        [y] = i.useMemo(() => (0, P.p9)(E, H.Z, G.Z, B.Z, A.Z), [E]),
        { entry: O } = g,
        v = (0, X.dX)(O),
        I = v ? (null == (t = O.extra) ? void 0 : t.application_id) : void 0,
        T = (0, N.u)(I, b.Z.MEMBER_LIST),
        S = (0, R.Z)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: C.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: O.author_id,
            },
            { onOpened: () => (null == p ? void 0 : p(es.xP.OPENED_GAME_PROFILE)) },
        ),
        D = v ? S : void 0,
        { activity: L, activityApplication: x, fallbackApplication: M } = (0, ee.Z)(O),
        { largeImage: k, smallImage: j } = (0, q.YC)(L, null != x ? x : M),
        { largeImage: V } = (0, q.rv)({ entry: O });
    return (0, r.jsxs)("div", {
        className: ed.popoutContentWrapper,
        children: [
            (0, r.jsx)(eS, eg(eh({}, g), { onUserPopoutClosed: _ })),
            (0, r.jsxs)(eO, {
                backgroundImgSrc: null == V ? void 0 : V.src,
                className: ed.streamingPopoutHero,
                children: [
                    (0, r.jsx)(eA, {
                        onClick: y
                            ? () => {
                                  h.default.selectVoiceChannel(s.channelId), (0, m.iV)(s);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: ed.streamingPopoutPreviewContainer,
                            children: [
                                (0, r.jsx)(w.Z, {
                                    className: ed.streamingPopoutImg,
                                    stream: s,
                                }),
                                y &&
                                    (0, r.jsx)("div", {
                                        className: ed.streamCTA,
                                        children: (0, r.jsx)(f.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: eu.intl.string(eu.t["7Xq/nZ"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: ed.streamingPopoutHeader,
                        children: [
                            null != k &&
                                (0, r.jsx)("div", {
                                    className: ed.popoutThumbnailContainer,
                                    children: (0, r.jsx)(J.E, {
                                        image: k,
                                        smallImage: j,
                                        onClick: null != l ? l : D,
                                        size: J.J.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: ed.streamingPopoutHeaderText,
                                children: [
                                    (0, r.jsx)(eA, {
                                        onClick: null != u ? u : D,
                                        children: (0, r.jsx)(f.X6q, {
                                            variant: "heading-md/semibold",
                                            className: ed.popoutTextPrimary,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != a
                                        ? (0, r.jsx)(eA, {
                                              onClick: null != d ? d : D,
                                              children: (0, r.jsx)(f.Text, {
                                                  variant: "text-sm/normal",
                                                  className: ed.popoutTextSecondary,
                                                  children: a,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(f.LZC, { size: 8 }),
                                    o,
                                ],
                            }),
                        ],
                    }),
                    null != T
                        ? (0, r.jsx)(f.zxk, {
                              icon: T.icon,
                              text: eu.intl.string(T.labelKey),
                              variant: "secondary",
                              onClick: T.openLink,
                              fullWidth: !0,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eR(e) {
    var t = e_({}, ep(e));
    return (0, r.jsx)(
        f.zxk,
        eh(
            {
                fullWidth: !0,
                size: "md",
            },
            t,
        ),
    );
}
function eP(e) {
    let t = (0, c.e7)([G.Z], () => G.Z.getGuild((0, E.j)(null == e ? void 0 : e.location))),
        n = (0, c.e7)([U.Z], () => U.Z.getChannel((0, E.p)(null == e ? void 0 : e.location))),
        i = (0, c.Wu)([Z.default], () => {
            var t, n;
            return null !=
                (n = null == e || null == (t = e.participants) ? void 0 : t.map((e) => Z.default.getUser(e.userId)))
                ? n
                : [];
        });
    return null != e && null != t && null != n && j.sR.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: ed.voiceChannelPopoutReactorHeader,
                      children: [
                          (0, r.jsxs)(f.P3F, {
                              "aria-label": eu.intl.string(eu.t["W/A4Qk"]),
                              onClick: () => (0, x.Kh)(n.id),
                              className: ed.voiceChannelPopoutReactorChannel,
                              children: [
                                  (0, r.jsx)(D.Z, {
                                      guild: t,
                                      size: D.Z.Sizes.SMOL,
                                      className: ed.voiceChannelGuildIcon,
                                      active: !0,
                                  }),
                                  (0, r.jsx)(f.Fbu, {
                                      size: "xxs",
                                      color: d.Z.colors.INTERACTIVE_NORMAL,
                                  }),
                                  (0, r.jsx)(f.VL1, {
                                      size: "xs",
                                      color: d.Z.colors.TEXT_DEFAULT,
                                  }),
                                  (0, r.jsx)(f.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: ed.voiceChannelName,
                                      children: null == n ? void 0 : n.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(k.Z, {
                              guildId: t.id,
                              users: i,
                              max: 3,
                              renderUser: (e, n) =>
                                  (0, r.jsx)(f.qEK, {
                                      src: e.getAvatarURL(t.id, 16),
                                      size: f.EFr.SIZE_16,
                                      "aria-label": "avatar",
                                      className: n,
                                  }),
                              renderMoreUsers: (e) =>
                                  (0, r.jsx)("div", {
                                      className: ed.voiceChannelAdditionalParticipants,
                                      children: (0, r.jsx)(f.Text, {
                                          variant: "text-xxs/semibold",
                                          color: "text-default",
                                          children: e,
                                      }),
                                  }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(f.LZC, { size: 16 }),
              ],
          })
        : null;
}
function ew(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: o, channel: s } = (0, en.Z)(n),
        { needSubscriptionToAccess: l } = (0, L.Z)(null == t ? void 0 : t.id),
        u = (0, c.e7)([G.Z], () => (null != s ? G.Z.getGuild(s.guild_id) : void 0)),
        _ = (0, c.Wu)([Y.ZP], () => (null != s ? Y.ZP.getVoiceStatesForChannel(s) : []), [s]),
        h = (0, c.e7)([H.Z], () => H.Z.isInChannel(null == s ? void 0 : s.id)),
        m = i.useMemo(() => {
            for (let e of _) {
                let t = U.Z.getDMFromUserId(e.user.id),
                    n = null != t && F.ZP.isChannelMuted(null, t),
                    r = V.Z.isBlockedOrIgnored(e.user.id);
                if (n || r) return !0;
            }
            return !1;
        }, [_]);
    if (null == s || null == u)
        return {
            voiceBar: void 0,
            joinVoiceButton: void 0,
        };
    let g = null != o,
        E = () => {
            p.Z.updateChatOpen(s.id, !0), (0, x.Kh)(s.id), null == a || a(s);
        },
        b = () => {
            O.Z.handleVoiceConnect({
                channel: s,
                connected: h,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: !0,
            });
        },
        y = (e) => {
            let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                a = i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              i &&
                                  (0, r.jsx)(f.aNP, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: ed.popoutBlockedWarningIcon,
                                  }),
                              eu.intl.string(eu.t.d6DpXF),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                f.ua7,
                {
                    "aria-label": i ? eu.intl.string(eu.t.d6DpXF) : null != n && n,
                    text: a,
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
                    className: ed.voiceChannelPopoutReactorHeader,
                    children: [
                        (0, r.jsx)(y, {
                            text: eu.intl.string(eu.t.WIVYqK),
                            hasRestrictedOrMutedVCParticipant: m,
                            children: (e) =>
                                (0, r.jsxs)(
                                    f.P3F,
                                    eg(eh({}, e), {
                                        "aria-label": eu.intl.string(eu.t.WIVYqK),
                                        onClick: E,
                                        className: ed.voiceChannelPopoutReactorChannel,
                                        children: [
                                            (0, r.jsx)(D.Z, {
                                                guild: u,
                                                size: D.Z.Sizes.SMOL,
                                                className: ed.voiceChannelGuildIcon,
                                                active: !0,
                                            }),
                                            (0, r.jsx)(f.Fbu, {
                                                size: "xxs",
                                                color: d.Z.colors.INTERACTIVE_NORMAL,
                                            }),
                                            (0, r.jsx)(f.gj8, {
                                                size: "xs",
                                                color: d.Z.colors.TEXT_DEFAULT,
                                            }),
                                            (0, r.jsx)(f.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: ed.voiceChannelName,
                                                children: s.name,
                                            }),
                                        ],
                                    }),
                                ),
                        }),
                        (0, r.jsx)(k.Z, {
                            guildId: u.id,
                            users: _,
                            max: 3,
                            renderUser: (e, t) =>
                                (0, r.jsx)(f.qEK, {
                                    src: e.user.getAvatarURL(u.id, 16),
                                    size: f.EFr.SIZE_16,
                                    "aria-label": "avatar",
                                    className: t,
                                }),
                            renderMoreUsers: (e) =>
                                (0, r.jsx)("div", {
                                    className: ed.voiceChannelAdditionalParticipants,
                                    children: (0, r.jsx)(f.Text, {
                                        variant: "text-xxs/semibold",
                                        color: "text-default",
                                        children: e,
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsx)(f.LZC, { size: 16 }),
            ],
        }),
        joinVoiceButton: h
            ? null
            : (0, r.jsx)(y, {
                  hasRestrictedOrMutedVCParticipant: m,
                  children: (e) =>
                      (0, r.jsx)(
                          eR,
                          eg(eh({}, e), {
                              variant: "active",
                              onClick: b,
                              icon: g ? f.pzj : f.gj8,
                              text: g ? eu.intl.string(eu.t["I6JG4+"]) : eu.intl.string(eu.t.VJlc0d),
                          }),
                      ),
              }),
    };
}

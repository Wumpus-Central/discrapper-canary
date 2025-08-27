n.d(t, {
    St: () => eO,
    WT: () => ev,
    jL: () => eC,
    wG: () => eA,
    yR: () => eb,
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
    f = n(28664),
    _ = n(481060),
    p = n(493683),
    h = n(475179),
    m = n(287734),
    g = n(872810),
    E = n(607070),
    b = n(16609),
    y = n(100527),
    O = n(220779),
    v = n(557135),
    I = n(194082),
    T = n(266454),
    S = n(543241),
    A = n(318374),
    C = n(258609),
    N = n(480086),
    R = n(810568),
    P = n(168524),
    w = n(102172),
    D = n(871118),
    x = n(565138),
    L = n(66999),
    j = n(359110),
    M = n(12168),
    k = n(237583),
    U = n(131704),
    G = n(592125),
    B = n(430824),
    Z = n(496675),
    F = n(699516),
    V = n(9156),
    H = n(594174),
    Y = n(979651),
    W = n(938475),
    K = n(626135),
    z = n(768581),
    q = n(5192),
    X = n(379357),
    Q = n(26033),
    J = n(91907),
    $ = n(358696),
    ee = n(656709),
    et = n(593294),
    en = n(192918),
    er = n(22211),
    ei = n(206295),
    ea = n(111386),
    eo = n(896449),
    es = n(469153),
    el = n(206583),
    ec = n(981631),
    eu = n(959517),
    ed = n(388032),
    ef = n(951948);
function e_(e, t, n) {
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
function ep(e) {
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
                e_(e, t, n[t]);
            });
    }
    return e;
}
function eh(e, t) {
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
function em(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eh(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eg(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eE(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eE(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function eb(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: ef.popout,
        children: t,
    });
}
function ey(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: s, secondaryColor: l } = (0, ei.Z)(n);
    return (
        null != n && (a.background = "linear-gradient(45deg, ".concat(s, ", ").concat(l, ")")),
        (0, r.jsx)(_.f6W, {
            theme: ec.BRd.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsx)("div", {
                    className: o()(ef.hero, e, i),
                    style: a,
                    children: t,
                }),
        })
    );
}
function eO(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: ef.interactionsContainer,
        children: t,
    });
}
function ev(e) {
    let { channel: t, user: n, onReaction: a, entry: o, buttons: s = [], header: f, onVoiceChannelPreview: h } = e,
        [m, g] = i.useState(!1),
        [E, b] = i.useState(null),
        y = (0, c.e7)(
            [Z.Z],
            () => null != t && ec.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && Z.Z.can(ec.Plq.SEND_MESSAGES, t),
        ),
        [v, I] = i.useState(!1),
        [S, A] = i.useState(!1),
        { voiceBar: C, joinVoiceButton: N } = eR({
            channel: t,
            entry: o,
            onVoiceChannelPreview: h,
        }),
        { embeddedActivity: R } = (0, et.Z)(o),
        P = eN(R),
        w = null != N && 0 === s.length ? [N] : s,
        D = w.length > 0,
        x = w.length >= 2,
        [L, j] = i.useState(!D),
        M = q.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        k =
            null != t && m
                ? ed.intl.formatToPlainString(ed.t["8lzR/f"], { channel: "#".concat(t.name) })
                : ed.intl.formatToPlainString(ed.t["4c+CAw"], { channel: "@".concat(M) }),
        U = m ? ed.intl.string(ed.t.Z2CUgo) : ed.intl.string(ed.t.XLGiTE),
        B = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (K.default.track(ec.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: el.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id,
                    }),
                    (0, T.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    I(!0),
                    A(!1),
                    m)
                )
                    l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
                else {
                    var o;
                    let e = await p.Z.getOrEnsurePrivateChannel(n.id);
                    r = null != (o = G.Z.getChannel(e)) ? o : null;
                }
                return (
                    l()(null != r, "Send channel must be defined"),
                    V({
                        reply: ":".concat(i.name, ":"),
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            A(!0),
                                setTimeout(() => {
                                    I(!1), a(e, t);
                                }, 600);
                        },
                        interactionType: el.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        F = async (e) => {
            let r;
            if (((0, T.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), m))
                l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
            else {
                let e = await p.Z.openPrivateChannel({ recipientIds: n.id }),
                    t = G.Z.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === ec.d4z.DM ? el.xP.DM_REACTION_MESSAGE_SENT : el.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return V({
                reply: e,
                sendToChannel: r,
                interactionType: i,
                onComplete: a,
                requiresChannelReadiness: !0,
            });
        },
        V = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: a } = e;
            null == E || E.focus(),
                await (0, ee.p)({
                    channel: n,
                    content: t,
                    entry: o,
                    whenReady: a,
                    doNotNotifyOnError: !1,
                    location: eu.dy.CONTENT_INVENTORY_MEMBERLIST,
                }),
                null == r || r(i, n);
        },
        H = null != f ? f : null != C ? C : null != P ? P : void 0,
        Y = () => {
            g((e) => !e), L && (null == E || E.focus());
        },
        W = (e) => {
            j(e), e && (null == E || E.focus());
        };
    return (0, r.jsxs)("div", {
        style: { pointerEvents: v ? "none" : "all" },
        children: [
            (0, r.jsx)(es.Z, {
                sent: S,
                shown: v,
                className: ef.toastContainer,
            }),
            null != H
                ? H
                : (0, r.jsx)(ea.Z, {
                      children: (0, r.jsxs)("div", {
                          className: ef.emojiHotrailShareToChannel,
                          children: [
                              (0, r.jsx)(eI, {
                                  channel: t,
                                  onClickSuggestion: B,
                              }),
                              (0, r.jsx)(O.dE, { onSelectEmoji: B }),
                          ],
                      }),
                  }),
            (0, r.jsxs)("div", {
                className: L ? ef.inputContainerShareToChannel : ef.hiddenButRenderedInputField,
                children: [
                    (0, r.jsx)(O.A7, {
                        placeholder: k,
                        onEnter: F,
                        setEditorRef: (e) => b(e),
                        channel: m ? t : void 0,
                        showEmojiButton: null != H,
                        className: ef.replyInput,
                        autoFocus: !1,
                        renderAttachButton: y
                            ? () =>
                                  (0, r.jsx)(_.ua7, {
                                      text: U,
                                      children: (e) =>
                                          (0, r.jsx)(
                                              _.P3F,
                                              em(ep({}, e), {
                                                  className: ef.shareToChannelButton,
                                                  onClick: Y,
                                                  children: m
                                                      ? (0, r.jsx)(_.VL1, {
                                                            size: "custom",
                                                            width: 20,
                                                            height: 20,
                                                        })
                                                      : (0, r.jsx)(_.lOy, {
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
                        (0, r.jsx)(_.P3F, {
                            onClick: () => W(!1),
                            className: ef.primaryActionPopoutMessageCloseIcon,
                            children: (0, r.jsx)(_.Dio, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: d.Z.colors.ICON_PRIMARY,
                            }),
                        }),
                ],
            }),
            !1 === L &&
                (0, r.jsxs)("div", {
                    className: ef.primaryActionPopoutActionButtons,
                    children: [
                        !x &&
                            (0, r.jsx)(
                                _.zxk,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => W(!0),
                                    size: x ? "sm" : "md",
                                    text: ed.intl.string(ed.t.OAJQlJ),
                                },
                                "toggleMessageMode",
                            ),
                        w,
                    ],
                }),
        ],
    });
}
let eI = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, o] = i.useState(!1);
    i.useEffect(() => {
        o(!0);
    }, []);
    let s = !!E.Z.keyboardModeEnabled && !a,
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
                          url: (0, z.gT)({
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
                          children: (0, r.jsx)(f.u, {
                              asContainer: !0,
                              text: ed.intl.formatToPlainString(ed.t.kilW3t, { emojiName: t.name }),
                              position: "top",
                              "aria-label": ed.intl.formatToPlainString(ed.t.kilW3t, { emojiName: t.name }),
                              shouldShow: !s && void 0,
                              children: (0, r.jsx)(M.u, {
                                  emoji: t,
                                  isDisabled: !a,
                                  onClick: () => n({ emoji: t }),
                                  className: ef.emoji,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function eT(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: a, onUserPopoutClosed: s } = e,
        l = null == t ? void 0 : t.guild_id,
        { displayParticipants: u, participant1: d, participant2: f, numOtherParticipants: p } = (0, en.Z)(i, 3),
        h = (0, c.e7)([H.default], () => H.default.getUser(i.author_id)),
        { streamPreviewUrl: m } = (0, er.Z)(i),
        g = null != m,
        E = [d, f];
    return (0, r.jsxs)("div", {
        className: ef.popoutContentHeader,
        children: [
            (0, r.jsxs)("div", {
                className: ef.popoutUserContainer,
                children: [
                    (0, r.jsx)(A.Z, {
                        maxUsers: 3,
                        users: u,
                        size: _.EFr.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: s,
                    }),
                    (0, r.jsx)(_.LZC, {
                        size: 8,
                        horizontal: !0,
                    }),
                    (0, r.jsx)(_.X6q, {
                        variant: "heading-sm/normal",
                        className: o()(ef.popoutUsernames, ef.popoutTextSecondary),
                        children: ed.intl.format(n, {
                            user0: q.ZP.getName(l, null == t ? void 0 : t.id, E[0]),
                            user1: q.ZP.getName(l, null == t ? void 0 : t.id, E[1]),
                            countOthers: p,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    _.Text,
                                    {
                                        variant: "text-sm/medium",
                                        className: o()(ef.popoutUsername, ef.popoutTextPrimary),
                                        children: e,
                                    },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    J.Z,
                                    {
                                        textClassName: o()(ef.popoutUsername, ef.popoutTextPrimary),
                                        text: e,
                                        user: E[0],
                                        channel: t,
                                        onPopoutClosed: s,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, r.jsx)(
                                    J.Z,
                                    {
                                        textClassName: o()(ef.popoutUsername, ef.popoutTextPrimary),
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
            g && (0, r.jsx)(I.ZP, { size: I.ZP.Sizes.SMALL }),
            null != h &&
                (0, r.jsx)(eo.Z, {
                    user: h,
                    channel: t,
                    guildId: l,
                    entry: i,
                    disableGameProfileLinks: a,
                }),
        ],
    });
}
function eS(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(_.P3F, {
              className: ef.maybeClickable,
              onClick: n,
              children: t,
          });
}
function eA(e) {
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
            showCoverImage: p = !0,
            onUserPopoutClosed: h,
            trackRankingItemInteraction: m,
        } = e,
        g = eg(e, [
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
        b = (0, Q.dX)(E),
        O = b ? (null == (t = E.extra) ? void 0 : t.application_id) : void 0,
        v = (0, N.u)(O, y.Z.MEMBER_LIST),
        I = (0, P.Z)(
            {
                location: "ContentPopout",
                applicationId: f ? void 0 : O,
                source: R.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: E.author_id,
            },
            { onOpened: () => (null == m ? void 0 : m(el.xP.OPENED_GAME_PROFILE)) },
        ),
        { largeImage: T, smallImage: S } = (0, X.rv)({
            entry: E,
            showCoverImage: p,
        }),
        A = b ? I : void 0;
    return (0, r.jsxs)("div", {
        className: ef.popoutContentWrapper,
        children: [
            (0, r.jsx)(eT, em(ep({ disableGameProfileLinks: f }, g), { onUserPopoutClosed: h })),
            (0, r.jsxs)(ey, {
                backgroundImgSrc: null == T ? void 0 : T.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: ef.popoutHeroInner,
                        children: [
                            (0, r.jsx)("div", {
                                className: ef.popoutThumbnailContainer,
                                children: (0, r.jsx)($.E, {
                                    image: T,
                                    smallImage: S,
                                    aspectRatio: p ? "none" : void 0,
                                    onClick: null != l ? l : A,
                                    size: $.J.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: ef.popoutHeroBody,
                                children: [
                                    (0, r.jsx)(eS, {
                                        onClick: null != c ? c : A,
                                        children: (0, r.jsx)(_.X6q, {
                                            variant: "heading-md/medium",
                                            className: o()(ef.popoutHeroTextPrimary, {
                                                [ef.popoutHeroTextPrimaryShort]: null != d,
                                            }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != i
                                        ? (0, r.jsx)(eS, {
                                              onClick: null != u ? u : A,
                                              children: (0, r.jsx)(_.Text, {
                                                  variant: "text-sm/normal",
                                                  className: ef.popoutHeroTextSecondary,
                                                  children: i,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(_.LZC, { size: 8 }),
                                    a,
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: ef.popoutHeaderIcons,
                                children: d,
                            }),
                        ],
                    }),
                    null != v
                        ? (0, r.jsx)(_.zxk, {
                              icon: v.icon,
                              text: ed.intl.string(v.labelKey),
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
            onUserPopoutClosed: f,
            trackRankingItemInteraction: p,
        } = e,
        h = eg(e, [
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
    let E = (0, c.e7)([G.Z], () => G.Z.getChannel(null == s ? void 0 : s.channelId)),
        [b] = i.useMemo(() => (0, w.p9)(E, Y.Z, B.Z, Z.Z, C.Z), [E]),
        { entry: O } = h,
        v = (0, Q.dX)(O),
        I = v ? (null == (t = O.extra) ? void 0 : t.application_id) : void 0,
        T = (0, N.u)(I, y.Z.MEMBER_LIST),
        S = (0, P.Z)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: R.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: O.author_id,
            },
            { onOpened: () => (null == p ? void 0 : p(el.xP.OPENED_GAME_PROFILE)) },
        ),
        A = v ? S : void 0,
        { activity: x, activityApplication: L, fallbackApplication: j } = (0, et.Z)(O),
        { largeImage: M, smallImage: k } = (0, X.YC)(x, null != L ? L : j),
        { largeImage: U } = (0, X.rv)({ entry: O });
    return (0, r.jsxs)("div", {
        className: ef.popoutContentWrapper,
        children: [
            (0, r.jsx)(eT, em(ep({}, h), { onUserPopoutClosed: f })),
            (0, r.jsxs)(ey, {
                backgroundImgSrc: null == U ? void 0 : U.src,
                className: ef.streamingPopoutHero,
                children: [
                    (0, r.jsx)(eS, {
                        onClick: b
                            ? () => {
                                  m.default.selectVoiceChannel(s.channelId), (0, g.iV)(s);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: ef.streamingPopoutPreviewContainer,
                            children: [
                                (0, r.jsx)(D.Z, {
                                    className: ef.streamingPopoutImg,
                                    stream: s,
                                }),
                                b &&
                                    (0, r.jsx)("div", {
                                        className: ef.streamCTA,
                                        children: (0, r.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: ed.intl.string(ed.t["7Xq/nZ"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: ef.streamingPopoutHeader,
                        children: [
                            null != M &&
                                (0, r.jsx)("div", {
                                    className: ef.popoutThumbnailContainer,
                                    children: (0, r.jsx)($.E, {
                                        image: M,
                                        smallImage: k,
                                        onClick: null != l ? l : A,
                                        size: $.J.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: ef.streamingPopoutHeaderText,
                                children: [
                                    (0, r.jsx)(eS, {
                                        onClick: null != u ? u : A,
                                        children: (0, r.jsx)(_.X6q, {
                                            variant: "heading-md/semibold",
                                            className: ef.popoutTextPrimary,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != a
                                        ? (0, r.jsx)(eS, {
                                              onClick: null != d ? d : A,
                                              children: (0, r.jsx)(_.Text, {
                                                  variant: "text-sm/normal",
                                                  className: ef.popoutTextSecondary,
                                                  children: a,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(_.LZC, { size: 8 }),
                                    o,
                                ],
                            }),
                        ],
                    }),
                    null != T
                        ? (0, r.jsx)(_.zxk, {
                              icon: T.icon,
                              text: ed.intl.string(T.labelKey),
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
function eN(e) {
    let t = (0, c.e7)([B.Z], () => B.Z.getGuild((0, b.j)(null == e ? void 0 : e.location))),
        n = (0, c.e7)([G.Z], () => G.Z.getChannel((0, b.p)(null == e ? void 0 : e.location))),
        i = (0, c.Wu)([H.default], () => {
            var t, n;
            return null !=
                (n = null == e || null == (t = e.participants) ? void 0 : t.map((e) => H.default.getUser(e.userId)))
                ? n
                : [];
        });
    return null != e && null != t && null != n && U.sR.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: ef.voiceChannelPopoutReactorHeader,
                      children: [
                          (0, r.jsxs)(_.P3F, {
                              "aria-label": ed.intl.string(ed.t["W/A4Qk"]),
                              onClick: () => (0, j.Kh)(n.id),
                              className: ef.voiceChannelPopoutReactorChannel,
                              children: [
                                  (0, r.jsx)(x.Z, {
                                      guild: t,
                                      size: x.Z.Sizes.SMOL,
                                      className: ef.voiceChannelGuildIcon,
                                      active: !0,
                                  }),
                                  (0, r.jsx)(_.Fbu, {
                                      size: "xxs",
                                      color: d.Z.colors.INTERACTIVE_NORMAL,
                                  }),
                                  (0, r.jsx)(_.VL1, {
                                      size: "xs",
                                      color: d.Z.colors.TEXT_DEFAULT,
                                  }),
                                  (0, r.jsx)(_.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: ef.voiceChannelName,
                                      children: null == n ? void 0 : n.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(k.Z, {
                              guildId: t.id,
                              users: i,
                              max: 3,
                              renderUser: (e, n) =>
                                  (0, r.jsx)(_.qEK, {
                                      src: e.getAvatarURL(t.id, 16),
                                      size: _.EFr.SIZE_16,
                                      "aria-label": "avatar",
                                      className: n,
                                  }),
                              renderMoreUsers: (e) =>
                                  (0, r.jsx)("div", {
                                      className: ef.voiceChannelAdditionalParticipants,
                                      children: (0, r.jsx)(_.Text, {
                                          variant: "text-xxs/semibold",
                                          color: "text-default",
                                          children: e,
                                      }),
                                  }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(_.LZC, { size: 16 }),
              ],
          })
        : null;
}
function eR(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: o, channel: s } = (0, er.Z)(n),
        { needSubscriptionToAccess: l } = (0, L.Z)(null == t ? void 0 : t.id),
        u = (0, c.e7)([B.Z], () => (null != s ? B.Z.getGuild(s.guild_id) : void 0)),
        f = (0, c.Wu)([W.ZP], () => (null != s ? W.ZP.getVoiceStatesForChannel(s) : []), [s]),
        p = (0, c.e7)([Y.Z], () => Y.Z.isInChannel(null == s ? void 0 : s.id)),
        m = i.useMemo(() => {
            for (let e of f) {
                let t = G.Z.getDMFromUserId(e.user.id),
                    n = null != t && V.ZP.isChannelMuted(null, t),
                    r = F.Z.isBlockedOrIgnored(e.user.id);
                if (n || r) return !0;
            }
            return !1;
        }, [f]);
    if (null == s || null == u)
        return {
            voiceBar: void 0,
            joinVoiceButton: void 0,
        };
    let g = null != o,
        E = () => {
            h.Z.updateChatOpen(s.id, !0), (0, j.Kh)(s.id), null == a || a(s);
        },
        b = () => {
            v.Z.handleVoiceConnect({
                channel: s,
                connected: p,
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
                                  (0, r.jsx)(_.aNP, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: ef.popoutBlockedWarningIcon,
                                  }),
                              ed.intl.string(ed.t.d6DpXF),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                _.ua7,
                {
                    "aria-label": i ? ed.intl.string(ed.t.d6DpXF) : null != n && n,
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
                    className: ef.voiceChannelPopoutReactorHeader,
                    children: [
                        (0, r.jsx)(y, {
                            text: ed.intl.string(ed.t.WIVYqK),
                            hasRestrictedOrMutedVCParticipant: m,
                            children: (e) =>
                                (0, r.jsxs)(
                                    _.P3F,
                                    em(ep({}, e), {
                                        "aria-label": ed.intl.string(ed.t.WIVYqK),
                                        onClick: E,
                                        className: ef.voiceChannelPopoutReactorChannel,
                                        children: [
                                            (0, r.jsx)(x.Z, {
                                                guild: u,
                                                size: x.Z.Sizes.SMOL,
                                                className: ef.voiceChannelGuildIcon,
                                                active: !0,
                                            }),
                                            (0, r.jsx)(_.Fbu, {
                                                size: "xxs",
                                                color: d.Z.colors.INTERACTIVE_NORMAL,
                                            }),
                                            (0, r.jsx)(_.gj8, {
                                                size: "xs",
                                                color: d.Z.colors.TEXT_DEFAULT,
                                            }),
                                            (0, r.jsx)(_.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: ef.voiceChannelName,
                                                children: s.name,
                                            }),
                                        ],
                                    }),
                                ),
                        }),
                        (0, r.jsx)(k.Z, {
                            guildId: u.id,
                            users: f,
                            max: 3,
                            renderUser: (e, t) =>
                                (0, r.jsx)(_.qEK, {
                                    src: e.user.getAvatarURL(u.id, 16),
                                    size: _.EFr.SIZE_16,
                                    "aria-label": "avatar",
                                    className: t,
                                }),
                            renderMoreUsers: (e) =>
                                (0, r.jsx)("div", {
                                    className: ef.voiceChannelAdditionalParticipants,
                                    children: (0, r.jsx)(_.Text, {
                                        variant: "text-xxs/semibold",
                                        color: "text-default",
                                        children: e,
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsx)(_.LZC, { size: 16 }),
            ],
        }),
        joinVoiceButton: p
            ? null
            : (0, r.jsx)(y, {
                  hasRestrictedOrMutedVCParticipant: m,
                  children: (e) =>
                      (0, r.jsx)(
                          _.zxk,
                          em(ep({}, e), {
                              onClick: b,
                              fullWidth: !0,
                              text: g ? ed.intl.string(ed.t["I6JG4+"]) : ed.intl.string(ed.t.VJlc0d),
                              icon: g ? _.pzj : _.gj8,
                              variant: "active",
                              size: "md",
                          }),
                      ),
              }),
    };
}

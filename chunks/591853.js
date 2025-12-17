n.d(t, {
    St: () => eS,
    WT: () => eI,
    jL: () => eP,
    wG: () => eN,
    yR: () => eO,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s);
n(24156);
var c = n(442837),
    u = n(704215),
    d = n(692547),
    f = n(36563),
    p = n(28664),
    _ = n(481060),
    m = n(493683),
    h = n(475179),
    g = n(287734),
    E = n(872810),
    b = n(607070),
    y = n(16609),
    O = n(220779),
    v = n(557135),
    S = n(194082),
    I = n(266454),
    T = n(543241),
    C = n(258609),
    A = n(810568),
    N = n(168524),
    P = n(102172),
    R = n(871118),
    w = n(565138),
    D = n(66999),
    x = n(359110),
    L = n(704538),
    j = n(644011),
    M = n(688192),
    k = n(12168),
    U = n(237583),
    G = n(131704),
    Z = n(592125),
    F = n(430824),
    B = n(496675),
    V = n(699516),
    H = n(9156),
    Y = n(594174),
    W = n(979651),
    K = n(938475),
    z = n(626135),
    q = n(768581),
    Q = n(5192),
    X = n(379357),
    J = n(26033),
    $ = n(91907),
    ee = n(358696),
    et = n(656709),
    en = n(593294),
    er = n(192918),
    ei = n(22211),
    ea = n(206295),
    eo = n(111386),
    es = n(896449),
    el = n(469153),
    ec = n(206583),
    eu = n(981631),
    ed = n(959517),
    ef = n(582113),
    ep = n(388032),
    e_ = n(813849);
function em(e, t, n) {
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
                em(e, t, n[t]);
            });
    }
    return e;
}
function eg(e, t) {
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
function eE(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eg(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eb(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ey(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ey(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function eO(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: e_.popout,
        children: t,
    });
}
function ev(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: s, secondaryColor: l } = (0, ea.Z)(n);
    return (
        null != n && (a.background = "linear-gradient(45deg, ".concat(s, ", ").concat(l, ")")),
        (0, r.jsx)(_.f6W, {
            theme: eu.BRd.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsx)("div", {
                    className: o()(e_.hero, e, i),
                    style: a,
                    children: t,
                }),
        })
    );
}
function eS(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: e_.interactionsContainer,
        children: t,
    });
}
function eI(e) {
    let { channel: t, user: n, onReaction: a, entry: o, buttons: s = [], header: f, onVoiceChannelPreview: h } = e,
        [g, E] = i.useState(!1),
        [b, y] = i.useState(null),
        v = i.useRef(null),
        S = (0, c.e7)(
            [B.Z],
            () => null != t && eu.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && B.Z.can(eu.Plq.SEND_MESSAGES, t),
        ),
        [T, C] = i.useState(!1),
        [A, N] = i.useState(!1),
        { voiceBar: P, joinVoiceButton: R } = ew({
            channel: t,
            entry: o,
            onVoiceChannelPreview: h,
        }),
        { embeddedActivity: w } = (0, en.Z)(o),
        D = eR(w),
        x = null != R && 0 === s.length ? [R] : s,
        L = x.length > 0,
        j = x.length >= 2,
        [M, k] = i.useState(!L),
        U = Q.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        G =
            null != t && g
                ? ep.intl.formatToPlainString(ep.t["8lzR/R"], { channel: "#".concat(t.name) })
                : ep.intl.formatToPlainString(ep.t["4c+CAx"], { channel: "@".concat(U) }),
        F = g ? ep.intl.string(ep.t.Z2CUgn) : ep.intl.string(ep.t.XLGiTG),
        V = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (z.default.track(eu.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: ec.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id,
                    }),
                    (0, I.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    C(!0),
                    N(!1),
                    g)
                )
                    l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
                else {
                    var o;
                    let e = await m.Z.getOrEnsurePrivateChannel(n.id);
                    r = null != (o = Z.Z.getChannel(e)) ? o : null;
                }
                return (
                    l()(null != r, "Send channel must be defined"),
                    Y({
                        reply: ":".concat(i.name, ":"),
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            N(!0),
                                setTimeout(() => {
                                    C(!1), a(e, t);
                                }, 600);
                        },
                        interactionType: ec.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        H = async (e) => {
            let r;
            if (((0, I.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g))
                l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
            else {
                let e = await m.Z.openPrivateChannel({ recipientIds: n.id }),
                    t = Z.Z.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === eu.d4z.DM ? ec.xP.DM_REACTION_MESSAGE_SENT : ec.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return Y({
                reply: e,
                sendToChannel: r,
                interactionType: i,
                onComplete: a,
                requiresChannelReadiness: !0,
            });
        },
        Y = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: a } = e;
            null == b || b.focus(),
                await (0, et.p)({
                    channel: n,
                    content: t,
                    entry: o,
                    whenReady: a,
                    doNotNotifyOnError: !1,
                    location: ed.dy.CONTENT_INVENTORY_MEMBERLIST,
                }),
                null == r || r(i, n);
        },
        W = null != f ? f : null != P ? P : null != D ? D : void 0,
        K = () => {
            E((e) => !e), M && (null == b || b.focus());
        },
        q = (e) => {
            k(e), e && (null == b || b.focus());
        };
    return (0, r.jsx)("div", {
        ref: v,
        style: { pointerEvents: T ? "none" : "all" },
        children: (0, r.jsx)(_.EqS, {
            containerRef: v,
            children: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(el.Z, {
                        sent: A,
                        shown: T,
                        className: e_.toastContainer,
                    }),
                    null != W
                        ? W
                        : (0, r.jsx)(eo.Z, {
                              children: (0, r.jsxs)("div", {
                                  className: e_.emojiHotrailShareToChannel,
                                  children: [
                                      (0, r.jsx)(eT, {
                                          channel: t,
                                          onClickSuggestion: V,
                                      }),
                                      (0, r.jsx)(O.dE, { onSelectEmoji: V }),
                                  ],
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: M ? e_.inputContainerShareToChannel : e_.hiddenButRenderedInputField,
                        children: [
                            (0, r.jsx)(O.A7, {
                                placeholder: G,
                                onEnter: H,
                                setEditorRef: (e) => y(e),
                                channel: g ? t : void 0,
                                showEmojiButton: null != W,
                                className: e_.replyInput,
                                autoFocus: !1,
                                renderAttachButton: S
                                    ? () =>
                                          (0, r.jsx)(p.u, {
                                              text: F,
                                              children: (0, r.jsx)(_.P3F, {
                                                  className: e_.shareToChannelButton,
                                                  onClick: K,
                                                  children: g
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
                                          })
                                    : void 0,
                            }),
                            L &&
                                (0, r.jsx)(_.P3F, {
                                    onClick: () => q(!1),
                                    className: e_.primaryActionPopoutMessageCloseIcon,
                                    children: (0, r.jsx)(_.Dio, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: d.Z.colors.ICON_STRONG,
                                    }),
                                }),
                        ],
                    }),
                    !1 === M &&
                        (0, r.jsxs)("div", {
                            className: e_.primaryActionPopoutActionButtons,
                            children: [
                                !j &&
                                    (0, r.jsx)(
                                        _.Button,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => q(!0),
                                            size: j ? "sm" : "md",
                                            text: ep.intl.string(ep.t.OAJQlP),
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
let eT = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, o] = i.useState(!1);
    i.useEffect(() => {
        o(!0);
    }, []);
    let s = !!b.Z.keyboardModeEnabled && !a,
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
                          url: (0, q.gT)({
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
                          children: (0, r.jsx)(p.u, {
                              asContainer: !0,
                              text: ep.intl.formatToPlainString(ep.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": ep.intl.formatToPlainString(ep.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !s && void 0,
                              children: (0, r.jsx)(k.u, {
                                  emoji: t,
                                  isDisabled: !a,
                                  onClick: () => n({ emoji: t }),
                                  className: e_.emoji,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function eC(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: a, onUserPopoutClosed: s } = e,
        l = null == t ? void 0 : t.guild_id,
        { displayParticipants: u, participant1: d, participant2: p, numOtherParticipants: m } = (0, er.Z)(i, 3),
        h = (0, c.e7)([Y.default], () => Y.default.getUser(i.author_id)),
        { streamPreviewUrl: g } = (0, ei.Z)(i),
        E = null != g,
        b = [d, p];
    return (0, r.jsxs)("div", {
        className: e_.popoutContentHeader,
        children: [
            (0, r.jsxs)("div", {
                className: e_.popoutUserContainer,
                children: [
                    (0, r.jsx)(f.Z, {
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
                    (0, r.jsx)(_.Heading, {
                        variant: "heading-sm/normal",
                        className: o()(e_.popoutUsernames, e_.popoutTextSecondary),
                        children: ep.intl.format(n, {
                            user0: Q.ZP.getName(l, null == t ? void 0 : t.id, b[0]),
                            user1: Q.ZP.getName(l, null == t ? void 0 : t.id, b[1]),
                            countOthers: m,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    _.Text,
                                    {
                                        variant: "text-sm/medium",
                                        className: o()(e_.popoutUsername, e_.popoutTextPrimary),
                                        children: e,
                                    },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    $.Z,
                                    {
                                        textClassName: o()(e_.popoutUsername, e_.popoutTextPrimary),
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
                                    $.Z,
                                    {
                                        textClassName: o()(e_.popoutUsername, e_.popoutTextPrimary),
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
            E && (0, r.jsx)(S.ZP, { size: S.ZP.Sizes.SMALL }),
            null != h &&
                (0, r.jsx)(es.Z, {
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
        : (0, r.jsx)(_.P3F, {
              className: e_.maybeClickable,
              onClick: n,
              children: t,
          });
}
function eN(e) {
    var t,
        n,
        i,
        {
            title: a,
            subtitle: s,
            badges: l,
            children: c,
            onClickThumbnail: u,
            onClickTitle: d,
            onClickSubtitle: f,
            headerIcons: p,
            disableGameProfileLinks: m = !1,
            showCoverImage: h = !0,
            onUserPopoutClosed: g,
            trackRankingItemInteraction: E,
        } = e,
        b = eb(e, [
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
    let { entry: y } = b,
        O = (0, J.dX)(y),
        v = O ? (null == (t = y.extra) ? void 0 : t.application_id) : void 0,
        S = (0, N.Z)(
            {
                location: "ContentPopout",
                applicationId: m ? void 0 : v,
                source: A.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: y.author_id,
            },
            { onOpened: () => (null == E ? void 0 : E(ec.xP.OPENED_GAME_PROFILE)) },
        ),
        { largeImage: I, smallImage: T } = (0, X.rv)({
            entry: y,
            showCoverImage: h,
        }),
        C = (0, L.J)({ location: "content_inventory" }),
        P = O ? S : void 0;
    return (0, r.jsxs)("div", {
        className: e_.popoutContentWrapper,
        children: [
            (0, r.jsx)(eC, eE(eh({ disableGameProfileLinks: m }, b), { onUserPopoutClosed: g })),
            (0, r.jsxs)(ev, {
                backgroundImgSrc: null == I ? void 0 : I.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: e_.popoutHeroInner,
                        children: [
                            (0, r.jsx)("div", {
                                className: e_.popoutThumbnailContainer,
                                children: (0, r.jsx)(ee.E, {
                                    image: I,
                                    smallImage: T,
                                    aspectRatio: h ? "none" : void 0,
                                    onClick: null != u ? u : P,
                                    size: ee.J.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: e_.popoutHeroBody,
                                children: [
                                    (0, r.jsx)(eA, {
                                        onClick: null != d ? d : P,
                                        children: (0, r.jsx)(_.Heading, {
                                            variant: "heading-md/medium",
                                            className: o()(e_.popoutHeroTextPrimary, {
                                                [e_.popoutHeroTextPrimaryShort]: null != p,
                                            }),
                                            lineClamp: 3,
                                            children: a,
                                        }),
                                    }),
                                    null != s
                                        ? (0, r.jsx)(eA, {
                                              onClick: null != f ? f : P,
                                              children: (0, r.jsx)(_.Text, {
                                                  variant: "text-sm/normal",
                                                  className: e_.popoutHeroTextSecondary,
                                                  children: s,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(_.LZC, { size: 8 }),
                                    l,
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: e_.popoutHeaderIcons,
                                children: p,
                            }),
                        ],
                    }),
                    c,
                ],
            }),
            C && null != v && ef.RI.has(v)
                ? (0, r.jsx)(j.Z, {
                      className: e_.popoutGiftingBreadcrumb,
                      applicationId: v,
                      userIds: [y.author_id],
                      cardSize: M.U.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: null == (n = b.channel) ? void 0 : n.guild_id,
                      channelId: null == (i = b.channel) ? void 0 : i.id,
                  })
                : null,
        ],
    });
}
function eP(e) {
    var t,
        n,
        a,
        {
            title: o,
            subtitle: s,
            badges: l,
            stream: u,
            onClickThumbnail: d,
            onClickTitle: f,
            onClickSubtitle: p,
            onUserPopoutClosed: m,
            trackRankingItemInteraction: h,
        } = e,
        b = eb(e, [
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
    let y = (0, c.e7)([Z.Z], () => Z.Z.getChannel(null == u ? void 0 : u.channelId)),
        [O] = i.useMemo(() => (0, P.p9)(y, W.Z, F.Z, B.Z, C.default), [y]),
        { entry: v } = b,
        S = (0, J.dX)(v),
        I = S ? (null == (t = v.extra) ? void 0 : t.application_id) : void 0,
        T = (0, N.Z)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: A.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: v.author_id,
            },
            { onOpened: () => (null == h ? void 0 : h(ec.xP.OPENED_GAME_PROFILE)) },
        ),
        w = S ? T : void 0,
        { activity: D, activityApplication: x, fallbackApplication: k } = (0, en.Z)(v),
        { largeImage: U, smallImage: G } = (0, X.YC)(D, null != x ? x : k),
        { largeImage: V } = (0, X.rv)({ entry: v }),
        H = (0, L.J)({ location: "content_inventory" });
    return (0, r.jsxs)("div", {
        className: e_.popoutContentWrapper,
        children: [
            (0, r.jsx)(eC, eE(eh({}, b), { onUserPopoutClosed: m })),
            (0, r.jsxs)(ev, {
                backgroundImgSrc: null == V ? void 0 : V.src,
                className: e_.streamingPopoutHero,
                children: [
                    (0, r.jsx)(eA, {
                        onClick: O
                            ? () => {
                                  g.default.selectVoiceChannel(u.channelId), (0, E.iV)(u);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: e_.streamingPopoutPreviewContainer,
                            children: [
                                (0, r.jsx)(R.Z, {
                                    className: e_.streamingPopoutImg,
                                    stream: u,
                                }),
                                O &&
                                    (0, r.jsx)("div", {
                                        className: e_.streamCTA,
                                        children: (0, r.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: ep.intl.string(ep.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: e_.streamingPopoutHeader,
                        children: [
                            null != U &&
                                (0, r.jsx)("div", {
                                    className: e_.popoutThumbnailContainer,
                                    children: (0, r.jsx)(ee.E, {
                                        image: U,
                                        smallImage: G,
                                        onClick: null != d ? d : w,
                                        size: ee.J.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: e_.streamingPopoutHeaderText,
                                children: [
                                    (0, r.jsx)(eA, {
                                        onClick: null != f ? f : w,
                                        children: (0, r.jsx)(_.Heading, {
                                            variant: "heading-md/semibold",
                                            className: e_.popoutTextPrimary,
                                            lineClamp: 3,
                                            children: o,
                                        }),
                                    }),
                                    null != s
                                        ? (0, r.jsx)(eA, {
                                              onClick: null != p ? p : w,
                                              children: (0, r.jsx)(_.Text, {
                                                  variant: "text-sm/normal",
                                                  className: e_.popoutTextSecondary,
                                                  children: s,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(_.LZC, { size: 8 }),
                                    l,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            H && null != I && ef.RI.has(I)
                ? (0, r.jsx)(j.Z, {
                      className: e_.popoutGiftingBreadcrumb,
                      applicationId: I,
                      userIds: [v.author_id],
                      cardSize: M.U.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: null == (n = b.channel) ? void 0 : n.guild_id,
                      channelId: null == (a = b.channel) ? void 0 : a.id,
                  })
                : null,
        ],
    });
}
function eR(e) {
    let t = (0, c.e7)([F.Z], () => F.Z.getGuild((0, y.j)(null == e ? void 0 : e.location))),
        n = (0, c.e7)([Z.Z], () => Z.Z.getChannel((0, y.p)(null == e ? void 0 : e.location))),
        i = (0, c.Wu)([Y.default], () => {
            var t, n;
            return null !=
                (n = null == e || null == (t = e.participants) ? void 0 : t.map((e) => Y.default.getUser(e.userId)))
                ? n
                : [];
        });
    return null != e && null != t && null != n && G.sR.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: e_.voiceChannelPopoutReactorHeader,
                      children: [
                          (0, r.jsxs)(_.P3F, {
                              "aria-label": ep.intl.string(ep.t["W/A4Qp"]),
                              onClick: () => (0, x.Kh)(n.id),
                              className: e_.voiceChannelPopoutReactorChannel,
                              children: [
                                  (0, r.jsx)(w.Z, {
                                      guild: t,
                                      size: w.Z.Sizes.SMOL,
                                      className: e_.voiceChannelGuildIcon,
                                      active: !0,
                                  }),
                                  (0, r.jsx)(_.Fbu, {
                                      size: "xxs",
                                      color: d.Z.colors.INTERACTIVE_TEXT_DEFAULT,
                                  }),
                                  (0, r.jsx)(_.VL1, {
                                      size: "xs",
                                      color: d.Z.colors.TEXT_DEFAULT,
                                  }),
                                  (0, r.jsx)(_.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: e_.voiceChannelName,
                                      children: null == n ? void 0 : n.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(U.Z, {
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
                                      className: e_.voiceChannelAdditionalParticipants,
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
function ew(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: o, channel: s } = (0, ei.Z)(n),
        { needSubscriptionToAccess: l } = (0, D.Z)(null == t ? void 0 : t.id),
        u = (0, c.e7)([F.Z], () => (null != s ? F.Z.getGuild(s.guild_id) : void 0)),
        f = (0, c.Wu)([K.ZP], () => (null != s ? K.ZP.getVoiceStatesForChannel(s) : []), [s]),
        m = (0, c.e7)([W.Z], () => W.Z.isInChannel(null == s ? void 0 : s.id)),
        g = i.useMemo(() => {
            for (let e of f) {
                let t = Z.Z.getDMFromUserId(e.user.id),
                    n = null != t && H.ZP.isChannelMuted(null, t),
                    r = V.Z.isBlockedOrIgnored(e.user.id);
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
            h.Z.updateChatOpen(s.id, !0), (0, x.Kh)(s.id), null == a || a(s);
        },
        y = () => {
            v.Z.handleVoiceConnect({
                channel: s,
                connected: m,
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
                                  (0, r.jsx)(_.aNP, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: e_.popoutBlockedWarningIcon,
                                  }),
                              ep.intl.string(ep.t.d6DpXI),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                p.u,
                {
                    "aria-label": i ? ep.intl.string(ep.t.d6DpXI) : null != n && n,
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
                    className: e_.voiceChannelPopoutReactorHeader,
                    children: [
                        (0, r.jsx)(O, {
                            text: ep.intl.string(ep.t.WIVYqJ),
                            hasRestrictedOrMutedVCParticipant: g,
                            children: (0, r.jsxs)(_.P3F, {
                                "aria-label": ep.intl.string(ep.t.WIVYqJ),
                                onClick: b,
                                className: e_.voiceChannelPopoutReactorChannel,
                                children: [
                                    (0, r.jsx)(w.Z, {
                                        guild: u,
                                        size: w.Z.Sizes.SMOL,
                                        className: e_.voiceChannelGuildIcon,
                                        active: !0,
                                    }),
                                    (0, r.jsx)(_.Fbu, {
                                        size: "xxs",
                                        color: d.Z.colors.INTERACTIVE_TEXT_DEFAULT,
                                    }),
                                    (0, r.jsx)(_.gj8, {
                                        size: "xs",
                                        color: d.Z.colors.TEXT_DEFAULT,
                                    }),
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: e_.voiceChannelName,
                                        children: s.name,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(U.Z, {
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
                                    className: e_.voiceChannelAdditionalParticipants,
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
        joinVoiceButton: m
            ? null
            : (0, r.jsx)(O, {
                  hasRestrictedOrMutedVCParticipant: g,
                  children: (0, r.jsx)(_.Button, {
                      onClick: y,
                      fullWidth: !0,
                      text: E ? ep.intl.string(ep.t.I6JG46) : ep.intl.string(ep.t.VJlc0S),
                      icon: E ? _.pzj : _.gj8,
                      variant: "active",
                      size: "md",
                  }),
              }),
    };
}

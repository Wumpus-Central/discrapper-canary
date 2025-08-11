n.d(t, {
    Ll: () => eR,
    St: () => ev,
    WT: () => eI,
    jL: () => eC,
    wG: () => eN,
    yR: () => ey,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s);
n(867309);
var c = n(442837),
    u = n(704215),
    d = n(692547),
    f = n(680018),
    _ = n(755721),
    p = n(481060),
    h = n(493683),
    m = n(475179),
    g = n(287734),
    E = n(872810),
    b = n(607070),
    y = n(16609),
    O = n(100527),
    v = n(220779),
    I = n(557135),
    T = n(194082),
    S = n(266454),
    A = n(543241),
    N = n(318374),
    C = n(258609),
    R = n(480086),
    P = n(810568),
    w = n(168524),
    D = n(102172),
    L = n(871118),
    x = n(565138),
    M = n(66999),
    k = n(359110),
    j = n(12168),
    U = n(237583),
    G = n(131704),
    B = n(592125),
    Z = n(430824),
    F = n(496675),
    V = n(699516),
    H = n(9156),
    Y = n(594174),
    W = n(979651),
    K = n(938475),
    z = n(626135),
    q = n(768581),
    X = n(5192),
    Q = n(379357),
    J = n(26033),
    $ = n(91907),
    ee = n(358696),
    et = n(656709),
    en = n(593294),
    er = n(192918),
    ei = n(22211),
    eo = n(206295),
    ea = n(111386),
    es = n(896449),
    el = n(469153),
    ec = n(206583),
    eu = n(981631),
    ed = n(959517),
    ef = n(388032),
    e_ = n(610220);
function ep(e, t, n) {
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
                ep(e, t, n[t]);
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eb(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function ey(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: e_.popout,
        children: t,
    });
}
function eO(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: o = {} } = e,
        { primaryColor: s, secondaryColor: l } = (0, eo.Z)(n);
    return (
        null != n && (o.background = "linear-gradient(45deg, ".concat(s, ", ").concat(l, ")")),
        (0, r.jsx)(p.f6W, {
            theme: eu.BRd.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsx)("div", {
                    className: a()(e_.hero, e, i),
                    style: o,
                    children: t,
                }),
        })
    );
}
function ev(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: e_.interactionsContainer,
        children: t,
    });
}
function eI(e) {
    let { channel: t, user: n, onReaction: o, entry: a, buttons: s = [], header: f, onVoiceChannelPreview: m } = e,
        [g, E] = i.useState(!1),
        [b, y] = i.useState(null),
        O = (0, c.e7)(
            [F.Z],
            () => null != t && eu.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && F.Z.can(eu.Plq.SEND_MESSAGES, t),
        ),
        [I, T] = i.useState(!1),
        [A, N] = i.useState(!1),
        { voiceBar: C, joinVoiceButton: R } = ew({
            channel: t,
            entry: a,
            onVoiceChannelPreview: m,
        }),
        { embeddedActivity: P } = (0, en.Z)(a),
        w = eP(P),
        D = null != R && 0 === s.length ? [R] : s,
        L = D.length > 0,
        x = D.length >= 2,
        [M, k] = i.useState(!L),
        j = X.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        U =
            null != t && g
                ? ef.intl.formatToPlainString(ef.t["8lzR/f"], { channel: "#".concat(t.name) })
                : ef.intl.formatToPlainString(ef.t["4c+CAw"], { channel: "@".concat(j) }),
        G = g ? ef.intl.string(ef.t.Z2CUgo) : ef.intl.string(ef.t.XLGiTE),
        Z = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (z.default.track(eu.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: ec.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id,
                    }),
                    (0, S.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    T(!0),
                    N(!1),
                    g)
                )
                    l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
                else {
                    var a;
                    let e = await h.Z.getOrEnsurePrivateChannel(n.id);
                    r = null != (a = B.Z.getChannel(e)) ? a : null;
                }
                return (
                    l()(null != r, "Send channel must be defined"),
                    H({
                        reply: ":".concat(i.name, ":"),
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            N(!0),
                                setTimeout(() => {
                                    T(!1), o(e, t);
                                }, 600);
                        },
                        interactionType: ec.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        V = async (e) => {
            let r;
            if (((0, S.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g))
                l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
            else {
                let e = await h.Z.openPrivateChannel({ recipientIds: n.id }),
                    t = B.Z.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === eu.d4z.DM ? ec.xP.DM_REACTION_MESSAGE_SENT : ec.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return H({
                reply: e,
                sendToChannel: r,
                interactionType: i,
                onComplete: o,
                requiresChannelReadiness: !0,
            });
        },
        H = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: o } = e;
            null == b || b.focus(),
                await (0, et.p)({
                    channel: n,
                    content: t,
                    entry: a,
                    whenReady: o,
                    doNotNotifyOnError: !1,
                    location: ed.dy.CONTENT_INVENTORY_MEMBERLIST,
                }),
                null == r || r(i, n);
        },
        Y = null != f ? f : null != C ? C : null != w ? w : void 0,
        W = () => {
            E((e) => !e), M && (null == b || b.focus());
        },
        K = (e) => {
            k(e), e && (null == b || b.focus());
        };
    return (0, r.jsxs)("div", {
        style: { pointerEvents: I ? "none" : "all" },
        children: [
            (0, r.jsx)(el.Z, {
                sent: A,
                shown: I,
                className: e_.toastContainer,
            }),
            null != Y
                ? Y
                : (0, r.jsx)(ea.Z, {
                      children: (0, r.jsxs)("div", {
                          className: e_.emojiHotrailShareToChannel,
                          children: [
                              (0, r.jsx)(eT, {
                                  channel: t,
                                  onClickSuggestion: Z,
                              }),
                              (0, r.jsx)(v.dE, { onSelectEmoji: Z }),
                          ],
                      }),
                  }),
            (0, r.jsxs)("div", {
                className: M ? e_.inputContainerShareToChannel : e_.hiddenButRenderedInputField,
                children: [
                    (0, r.jsx)(v.A7, {
                        placeholder: U,
                        onEnter: V,
                        setEditorRef: (e) => y(e),
                        channel: g ? t : void 0,
                        showEmojiButton: null != Y,
                        className: e_.replyInput,
                        autoFocus: !1,
                        renderAttachButton: O
                            ? () =>
                                  (0, r.jsx)(p.ua7, {
                                      text: G,
                                      children: (e) =>
                                          (0, r.jsx)(
                                              p.P3F,
                                              eg(eh({}, e), {
                                                  className: e_.shareToChannelButton,
                                                  onClick: W,
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
                                          ),
                                  })
                            : void 0,
                    }),
                    L &&
                        (0, r.jsx)(p.P3F, {
                            onClick: () => K(!1),
                            className: e_.primaryActionPopoutMessageCloseIcon,
                            children: (0, r.jsx)(p.Dio, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: d.Z.colors.ICON_PRIMARY,
                            }),
                        }),
                ],
            }),
            !1 === M &&
                (0, r.jsxs)("div", {
                    className: e_.primaryActionPopoutActionButtons,
                    children: [
                        (0, r.jsx)(
                            _.zx,
                            {
                                className: e_.secondaryButton,
                                color: _.zx.Colors.PRIMARY,
                                look: _.zx.Looks.FILLED,
                                onClick: () => K(!0),
                                innerClassName: e_.iconButton,
                                size: x ? _.zx.Sizes.MIN : _.zx.Sizes.MEDIUM,
                                children:
                                    !x &&
                                    (0, r.jsx)(p.Text, {
                                        variant: "text-md/semibold",
                                        children: ef.intl.string(ef.t.OAJQlJ),
                                    }),
                            },
                            "toggleMessageMode",
                        ),
                        D,
                    ],
                }),
        ],
    });
}
let eT = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [o, a] = i.useState(!1);
    i.useEffect(() => {
        a(!0);
    }, []);
    let s = !!b.Z.keyboardModeEnabled && !o,
        l = (0, A.wC)(null == t ? void 0 : t.guild_id)
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
                          children: (0, r.jsx)(p.DY3, {
                              text: ef.intl.formatToPlainString(ef.t.kilW3t, { emojiName: t.name }),
                              position: "top",
                              "aria-label": ef.intl.formatToPlainString(ef.t.kilW3t, { emojiName: t.name }),
                              color: p.ua7.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, r.jsx)(j.u, {
                                  emoji: t,
                                  isDisabled: !o,
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
function eS(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: o, onUserPopoutClosed: s } = e,
        l = null == t ? void 0 : t.guild_id,
        { displayParticipants: u, participant1: d, participant2: f, numOtherParticipants: _ } = (0, er.Z)(i, 3),
        h = (0, c.e7)([Y.default], () => Y.default.getUser(i.author_id)),
        { streamPreviewUrl: m } = (0, ei.Z)(i),
        g = null != m,
        E = [d, f];
    return (0, r.jsxs)("div", {
        className: e_.popoutContentHeader,
        children: [
            (0, r.jsxs)("div", {
                className: e_.popoutUserContainer,
                children: [
                    (0, r.jsx)(N.Z, {
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
                    (0, r.jsx)(p.X6q, {
                        variant: "heading-sm/normal",
                        className: a()(e_.popoutUsernames, e_.popoutTextSecondary),
                        children: ef.intl.format(n, {
                            user0: X.ZP.getName(l, null == t ? void 0 : t.id, E[0]),
                            user1: X.ZP.getName(l, null == t ? void 0 : t.id, E[1]),
                            countOthers: _,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    p.Text,
                                    {
                                        variant: "text-sm/medium",
                                        className: a()(e_.popoutUsername, e_.popoutTextPrimary),
                                        children: e,
                                    },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    $.Z,
                                    {
                                        textClassName: a()(e_.popoutUsername, e_.popoutTextPrimary),
                                        text: e,
                                        user: E[0],
                                        channel: t,
                                        onPopoutClosed: s,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, r.jsx)(
                                    $.Z,
                                    {
                                        textClassName: a()(e_.popoutUsername, e_.popoutTextPrimary),
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
            g && (0, r.jsx)(T.ZP, { size: T.ZP.Sizes.SMALL }),
            null != h &&
                (0, r.jsx)(es.Z, {
                    user: h,
                    channel: t,
                    guildId: l,
                    entry: i,
                    disableGameProfileLinks: o,
                }),
        ],
    });
}
function eA(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(p.P3F, {
              className: e_.maybeClickable,
              onClick: n,
              children: t,
          });
}
function eN(e) {
    var t,
        {
            title: n,
            subtitle: i,
            badges: o,
            children: s,
            onClickThumbnail: l,
            onClickTitle: c,
            onClickSubtitle: u,
            headerIcons: d,
            disableGameProfileLinks: _ = !1,
            showCoverImage: h = !0,
            onUserPopoutClosed: m,
            trackRankingItemInteraction: g,
        } = e,
        E = eE(e, [
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
    let { entry: b } = E,
        y = (0, J.dX)(b),
        v = y ? (null == (t = b.extra) ? void 0 : t.application_id) : void 0,
        I = (0, R.u)(v, O.Z.MEMBER_LIST),
        T = (0, w.Z)(
            {
                location: "ContentPopout",
                applicationId: _ ? void 0 : v,
                source: P.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: b.author_id,
            },
            { onOpened: () => (null == g ? void 0 : g(ec.xP.OPENED_GAME_PROFILE)) },
        ),
        { largeImage: S, smallImage: A } = (0, Q.rv)({
            entry: b,
            showCoverImage: h,
        }),
        N = y ? T : void 0;
    return (0, r.jsxs)("div", {
        className: e_.popoutContentWrapper,
        children: [
            (0, r.jsx)(eS, eg(eh({ disableGameProfileLinks: _ }, E), { onUserPopoutClosed: m })),
            (0, r.jsxs)(eO, {
                backgroundImgSrc: null == S ? void 0 : S.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: e_.popoutHeroInner,
                        children: [
                            (0, r.jsx)("div", {
                                className: e_.popoutThumbnailContainer,
                                children: (0, r.jsx)(ee.E, {
                                    image: S,
                                    smallImage: A,
                                    aspectRatio: h ? "none" : void 0,
                                    onClick: null != l ? l : N,
                                    size: ee.J.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: e_.popoutHeroBody,
                                children: [
                                    (0, r.jsx)(eA, {
                                        onClick: null != c ? c : N,
                                        children: (0, r.jsx)(p.X6q, {
                                            variant: "heading-md/medium",
                                            className: a()(e_.popoutHeroTextPrimary, {
                                                [e_.popoutHeroTextPrimaryShort]: null != d,
                                            }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != i
                                        ? (0, r.jsx)(eA, {
                                              onClick: null != u ? u : N,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: e_.popoutHeroTextSecondary,
                                                  children: i,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(p.LZC, { size: 8 }),
                                    o,
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: e_.popoutHeaderIcons,
                                children: d,
                            }),
                        ],
                    }),
                    null != I
                        ? (0, r.jsx)(f.z, {
                              icon: I.icon,
                              text: ef.intl.string(I.labelKey),
                              variant: "secondary",
                              onClick: I.openLink,
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
            subtitle: o,
            badges: a,
            stream: s,
            onClickThumbnail: l,
            onClickTitle: u,
            onClickSubtitle: d,
            onUserPopoutClosed: _,
            trackRankingItemInteraction: h,
        } = e,
        m = eE(e, [
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
    let b = (0, c.e7)([B.Z], () => B.Z.getChannel(null == s ? void 0 : s.channelId)),
        [y] = i.useMemo(() => (0, D.p9)(b, W.Z, Z.Z, F.Z, C.Z), [b]),
        { entry: v } = m,
        I = (0, J.dX)(v),
        T = I ? (null == (t = v.extra) ? void 0 : t.application_id) : void 0,
        S = (0, R.u)(T, O.Z.MEMBER_LIST),
        A = (0, w.Z)(
            {
                location: "ContentPopout",
                applicationId: T,
                source: P.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: v.author_id,
            },
            { onOpened: () => (null == h ? void 0 : h(ec.xP.OPENED_GAME_PROFILE)) },
        ),
        N = I ? A : void 0,
        { activity: x, activityApplication: M, fallbackApplication: k } = (0, en.Z)(v),
        { largeImage: j, smallImage: U } = (0, Q.YC)(x, null != M ? M : k),
        { largeImage: G } = (0, Q.rv)({ entry: v });
    return (0, r.jsxs)("div", {
        className: e_.popoutContentWrapper,
        children: [
            (0, r.jsx)(eS, eg(eh({}, m), { onUserPopoutClosed: _ })),
            (0, r.jsxs)(eO, {
                backgroundImgSrc: null == G ? void 0 : G.src,
                className: e_.streamingPopoutHero,
                children: [
                    (0, r.jsx)(eA, {
                        onClick: y
                            ? () => {
                                  g.default.selectVoiceChannel(s.channelId), (0, E.iV)(s);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: e_.streamingPopoutPreviewContainer,
                            children: [
                                (0, r.jsx)(L.Z, {
                                    className: e_.streamingPopoutImg,
                                    stream: s,
                                }),
                                y &&
                                    (0, r.jsx)("div", {
                                        className: e_.streamCTA,
                                        children: (0, r.jsx)(p.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: ef.intl.string(ef.t["7Xq/nZ"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: e_.streamingPopoutHeader,
                        children: [
                            null != j &&
                                (0, r.jsx)("div", {
                                    className: e_.popoutThumbnailContainer,
                                    children: (0, r.jsx)(ee.E, {
                                        image: j,
                                        smallImage: U,
                                        onClick: null != l ? l : N,
                                        size: ee.J.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: e_.streamingPopoutHeaderText,
                                children: [
                                    (0, r.jsx)(eA, {
                                        onClick: null != u ? u : N,
                                        children: (0, r.jsx)(p.X6q, {
                                            variant: "heading-md/semibold",
                                            className: e_.popoutTextPrimary,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != o
                                        ? (0, r.jsx)(eA, {
                                              onClick: null != d ? d : N,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: e_.popoutTextSecondary,
                                                  children: o,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(p.LZC, { size: 8 }),
                                    a,
                                ],
                            }),
                        ],
                    }),
                    null != S
                        ? (0, r.jsx)(f.z, {
                              icon: S.icon,
                              text: ef.intl.string(S.labelKey),
                              variant: "secondary",
                              onClick: S.openLink,
                              fullWidth: !0,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eR(e) {
    var { IconComponent: t, children: n, className: i } = e,
        o = eE(e, ["IconComponent", "children", "className"]);
    return (0, r.jsxs)(
        _.zx,
        eg(eh({}, o), {
            className: a()(i, e_.primaryButton),
            innerClassName: null != t ? e_.iconButton : void 0,
            size: _.zx.Sizes.MEDIUM,
            children: [
                null != t
                    ? (0, r.jsx)(t, {
                          size: "xs",
                          color: "currentColor",
                      })
                    : null,
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "always-white",
                    children: n,
                }),
            ],
        }),
    );
}
function eP(e) {
    let t = (0, c.e7)([Z.Z], () => Z.Z.getGuild((0, y.j)(null == e ? void 0 : e.location))),
        n = (0, c.e7)([B.Z], () => B.Z.getChannel((0, y.p)(null == e ? void 0 : e.location))),
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
                          (0, r.jsxs)(p.P3F, {
                              "aria-label": ef.intl.string(ef.t["W/A4Qk"]),
                              onClick: () => (0, k.Kh)(n.id),
                              className: e_.voiceChannelPopoutReactorChannel,
                              children: [
                                  (0, r.jsx)(x.Z, {
                                      guild: t,
                                      size: x.Z.Sizes.SMOL,
                                      className: e_.voiceChannelGuildIcon,
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
                                  (0, r.jsx)(p.qEK, {
                                      src: e.getAvatarURL(t.id, 16),
                                      size: p.EFr.SIZE_16,
                                      "aria-label": "avatar",
                                      className: n,
                                  }),
                              renderMoreUsers: (e) =>
                                  (0, r.jsx)("div", {
                                      className: e_.voiceChannelAdditionalParticipants,
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
function ew(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: o } = e,
        { streamPreviewUrl: a, channel: s } = (0, ei.Z)(n),
        { needSubscriptionToAccess: l } = (0, M.Z)(null == t ? void 0 : t.id),
        u = (0, c.e7)([Z.Z], () => (null != s ? Z.Z.getGuild(s.guild_id) : void 0)),
        f = (0, c.Wu)([K.ZP], () => (null != s ? K.ZP.getVoiceStatesForChannel(s) : []), [s]),
        h = (0, c.e7)([W.Z], () => W.Z.isInChannel(null == s ? void 0 : s.id)),
        g = i.useMemo(() => {
            for (let e of f) {
                let t = B.Z.getDMFromUserId(e.user.id),
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
    let E = null != a,
        b = () => {
            m.Z.updateChatOpen(s.id, !0), (0, k.Kh)(s.id), null == o || o(s);
        },
        y = () => {
            I.Z.handleVoiceConnect({
                channel: s,
                connected: h,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: !0,
            });
        },
        O = (e) => {
            let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                o = i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              i &&
                                  (0, r.jsx)(p.aNP, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: e_.popoutBlockedWarningIcon,
                                  }),
                              ef.intl.string(ef.t.d6DpXF),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                p.ua7,
                {
                    "aria-label": i ? ef.intl.string(ef.t.d6DpXF) : null != n && n,
                    text: o,
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
                            text: ef.intl.string(ef.t.WIVYqK),
                            hasRestrictedOrMutedVCParticipant: g,
                            children: (e) =>
                                (0, r.jsxs)(
                                    p.P3F,
                                    eg(eh({}, e), {
                                        "aria-label": ef.intl.string(ef.t.WIVYqK),
                                        onClick: b,
                                        className: e_.voiceChannelPopoutReactorChannel,
                                        children: [
                                            (0, r.jsx)(x.Z, {
                                                guild: u,
                                                size: x.Z.Sizes.SMOL,
                                                className: e_.voiceChannelGuildIcon,
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
                                                className: e_.voiceChannelName,
                                                children: s.name,
                                            }),
                                        ],
                                    }),
                                ),
                        }),
                        (0, r.jsx)(U.Z, {
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
                                    className: e_.voiceChannelAdditionalParticipants,
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
                  children: (e) =>
                      (0, r.jsx)(
                          eR,
                          eg(eh({}, e), {
                              color: _.zx.Colors.GREEN,
                              onClick: y,
                              IconComponent: E ? p.pzj : p.gj8,
                              children: E ? ef.intl.string(ef.t["I6JG4+"]) : ef.intl.string(ef.t.VJlc0d),
                          }),
                      ),
              }),
    };
}

n.d(t, {
    Ll: () => eT,
    St: () => eg,
    WT: () => eE,
    jL: () => eI,
    wG: () => ev,
    yR: () => eh
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s);
n(867309);
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
    b = n(220779),
    y = n(557135),
    O = n(194082),
    v = n(605236),
    I = n(543241),
    T = n(318374),
    S = n(258609),
    A = n(810568),
    N = n(168524),
    C = n(102172),
    R = n(871118),
    P = n(565138),
    w = n(66999),
    D = n(359110),
    L = n(12168),
    x = n(237583),
    k = n(131704),
    M = n(592125),
    j = n(430824),
    U = n(496675),
    G = n(699516),
    B = n(9156),
    V = n(594174),
    F = n(979651),
    Z = n(938475),
    H = n(626135),
    Y = n(768581),
    W = n(5192),
    K = n(379357),
    z = n(26033),
    q = n(91907),
    X = n(358696),
    Q = n(656709),
    J = n(593294),
    $ = n(192918),
    ee = n(22211),
    et = n(206295),
    en = n(111386),
    er = n(896449),
    ei = n(469153),
    ea = n(206583),
    eo = n(981631),
    es = n(388032),
    el = n(610220);
function ec(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                ec(e, t, n[t]);
            });
    }
    return e;
}
function ed(e, t) {
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
function ef(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ed(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function e_(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ep(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ep(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function eh(e) {
    let { children: t } = e,
        n = i.useRef(null);
    return (
        (0, f.Tbt)(n),
        (0, r.jsx)('div', {
            className: el.popout,
            ref: n,
            children: t
        })
    );
}
function em(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: s, secondaryColor: l } = (0, et.Z)(n);
    return (
        null != n && (a.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(l, ')')),
        (0, r.jsx)(f.f6W, {
            theme: eo.BRd.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsx)('div', {
                    className: o()(el.hero, e, i),
                    style: a,
                    children: t
                })
        })
    );
}
function eg(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: el.interactionsContainer,
        children: t
    });
}
function eE(e) {
    let { channel: t, user: n, onReaction: a, entry: o, buttons: s = [], header: p, onVoiceChannelPreview: h } = e,
        [m, g] = i.useState(!1),
        [E, y] = i.useState(null),
        O = (0, c.e7)([U.Z], () => null != t && eo.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && U.Z.can(eo.Plq.SEND_MESSAGES, t)),
        [I, T] = i.useState(!1),
        [S, A] = i.useState(!1),
        { voiceBar: N, joinVoiceButton: C } = eA({
            channel: t,
            entry: o,
            onVoiceChannelPreview: h
        }),
        { embeddedActivity: R } = (0, J.Z)(o),
        P = eS(R),
        w = null != C && 0 === s.length ? [C] : s,
        D = w.length > 0,
        L = w.length >= 2,
        [x, k] = i.useState(!D),
        j = W.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        G = null != t && m ? es.intl.formatToPlainString(es.t['8lzR/f'], { channel: '#'.concat(t.name) }) : es.intl.formatToPlainString(es.t['4c+CAw'], { channel: '@'.concat(j) }),
        B = m ? es.intl.string(es.t.Z2CUgo) : es.intl.string(es.t.XLGiTE),
        V = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (H.default.track(eo.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: ea.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, v.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    T(!0),
                    A(!1),
                    m)
                )
                    l()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (r = t);
                else {
                    var o;
                    let e = await _.Z.getOrEnsurePrivateChannel(n.id);
                    r = null != (o = M.Z.getChannel(e)) ? o : null;
                }
                return (
                    l()(null != r, 'Send channel must be defined'),
                    Z({
                        reply: ':'.concat(i.name, ':'),
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            A(!0),
                                setTimeout(() => {
                                    T(!1), a(e, t);
                                }, 600);
                        },
                        interactionType: ea.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1
                    })
                );
            }
        },
        F = async (e) => {
            let r;
            if (((0, v.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), m)) l()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (r = t);
            else {
                let e = await _.Z.openPrivateChannel({ recipientIds: n.id }),
                    t = M.Z.getChannel(e);
                l()(null != t, 'DM channel must be defined'), (r = t);
            }
            let i = r.type === eo.d4z.DM ? ea.xP.DM_REACTION_MESSAGE_SENT : ea.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return Z({
                reply: e,
                sendToChannel: r,
                interactionType: i,
                onComplete: a,
                requiresChannelReadiness: !0
            });
        },
        Z = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: a } = e;
            null == E || E.focus(),
                await (0, Q.p)({
                    channel: n,
                    content: t,
                    entry: o,
                    whenReady: a
                }),
                null == r || r(i, n);
        },
        Y = null != p ? p : null != N ? N : null != P ? P : void 0;
    return (
        i.useEffect(() => {
            x && (null == E || E.focus());
        }, [E, m, x]),
        (0, r.jsxs)('div', {
            style: { pointerEvents: I ? 'none' : 'all' },
            children: [
                (0, r.jsx)(ei.Z, {
                    sent: S,
                    shown: I,
                    className: el.toastContainer
                }),
                null != Y
                    ? Y
                    : (0, r.jsx)(en.Z, {
                          children: (0, r.jsxs)('div', {
                              className: el.emojiHotrailShareToChannel,
                              children: [
                                  (0, r.jsx)(eb, {
                                      channel: t,
                                      onClickSuggestion: V
                                  }),
                                  (0, r.jsx)(b.dE, { onSelectEmoji: V })
                              ]
                          })
                      }),
                (0, r.jsxs)('div', {
                    className: x ? el.inputContainerShareToChannel : el.hiddenButRenderedInputField,
                    children: [
                        (0, r.jsx)(b.A7, {
                            placeholder: G,
                            onEnter: F,
                            setEditorRef: (e) => y(e),
                            channel: m ? t : void 0,
                            showEmojiButton: null != Y,
                            className: el.replyInput,
                            renderAttachButton: O
                                ? () =>
                                      (0, r.jsx)(f.ua7, {
                                          text: B,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  f.P3F,
                                                  ef(eu({}, e), {
                                                      className: el.shareToChannelButton,
                                                      onClick: () => g((e) => !e),
                                                      children: m
                                                          ? (0, r.jsx)(f.VL1, {
                                                                size: 'custom',
                                                                width: 20,
                                                                height: 20
                                                            })
                                                          : (0, r.jsx)(f.lOy, {
                                                                size: 'custom',
                                                                width: 20,
                                                                height: 20
                                                            })
                                                  })
                                              )
                                      })
                                : void 0
                        }),
                        D &&
                            (0, r.jsx)(f.P3F, {
                                onClick: () => k(!1),
                                className: el.primaryActionPopoutMessageCloseIcon,
                                children: (0, r.jsx)(f.Dio, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    color: d.Z.colors.ICON_PRIMARY
                                })
                            })
                    ]
                }),
                !1 === x &&
                    (0, r.jsxs)('div', {
                        className: el.primaryActionPopoutActionButtons,
                        children: [
                            (0, r.jsx)(
                                f.zxk,
                                {
                                    className: el.secondaryButton,
                                    color: f.zxk.Colors.PRIMARY,
                                    look: f.zxk.Looks.FILLED,
                                    onClick: () => k(!0),
                                    innerClassName: el.iconButton,
                                    size: L ? f.zxk.Sizes.MIN : f.zxk.Sizes.MEDIUM,
                                    children:
                                        !L &&
                                        (0, r.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            children: es.intl.string(es.t.OAJQlJ)
                                        })
                                },
                                'toggleMessageMode'
                            ),
                            w
                        ]
                    })
            ]
        })
    );
}
let eb = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, o] = i.useState(!1);
    i.useEffect(() => {
        o(!0);
    }, []);
    let s = !!g.Z.keyboardModeEnabled && !a,
        l = (0, I.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url
                      }
                    : {
                          emoji: e,
                          url: (0, Y.gT)({
                              id: e.id,
                              animated: e.animated,
                              size: 58
                          })
                      }
            );
    return (0, r.jsx)(r.Fragment, {
        children: l.map((e) => {
            let { emoji: t, url: i } = e;
            return null != i
                ? (0, r.jsx)(
                      'div',
                      {
                          children: (0, r.jsx)(f.DY3, {
                              text: es.intl.formatToPlainString(es.t.kilW3t, { emojiName: t.name }),
                              position: 'top',
                              'aria-label': es.intl.formatToPlainString(es.t.kilW3t, { emojiName: t.name }),
                              color: f.ua7.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, r.jsx)(L.u, {
                                  emoji: t,
                                  isDisabled: !a,
                                  onClick: () => n({ emoji: t }),
                                  className: el.emoji
                              })
                          })
                      },
                      t.name
                  )
                : null;
        })
    });
};
function ey(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: a, onUserPopoutClosed: s } = e,
        l = null == t ? void 0 : t.guild_id,
        { displayParticipants: u, participant1: d, participant2: _, numOtherParticipants: p } = (0, $.Z)(i, 3),
        h = (0, c.e7)([V.default], () => V.default.getUser(i.author_id)),
        { streamPreviewUrl: m } = (0, ee.Z)(i),
        g = null != m,
        E = [d, _];
    return (0, r.jsxs)('div', {
        className: el.popoutContentHeader,
        children: [
            (0, r.jsxs)('div', {
                className: el.popoutUserContainer,
                children: [
                    (0, r.jsx)(T.Z, {
                        maxUsers: 3,
                        users: u,
                        size: f.EFr.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: s
                    }),
                    (0, r.jsx)(f.LZC, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, r.jsx)(f.X6q, {
                        variant: 'heading-sm/normal',
                        className: o()(el.popoutUsernames, el.popoutTextSecondary),
                        children: es.intl.format(n, {
                            user0: W.ZP.getName(l, null == t ? void 0 : t.id, E[0]),
                            user1: W.ZP.getName(l, null == t ? void 0 : t.id, E[1]),
                            countOthers: p,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    f.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: o()(el.popoutUsername, el.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    q.Z,
                                    {
                                        textClassName: o()(el.popoutUsername, el.popoutTextPrimary),
                                        text: e,
                                        user: E[0],
                                        channel: t,
                                        onPopoutClosed: s
                                    },
                                    n
                                ),
                            name1Hook: (e, n) =>
                                (0, r.jsx)(
                                    q.Z,
                                    {
                                        textClassName: o()(el.popoutUsername, el.popoutTextPrimary),
                                        text: e,
                                        user: E[1],
                                        channel: t,
                                        onPopoutClosed: s
                                    },
                                    n
                                )
                        })
                    })
                ]
            }),
            g && (0, r.jsx)(O.ZP, { size: O.ZP.Sizes.SMALL }),
            null != h &&
                (0, r.jsx)(er.Z, {
                    user: h,
                    channel: t,
                    guildId: l,
                    entry: i,
                    disableGameProfileLinks: a
                })
        ]
    });
}
function eO(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(f.P3F, {
              className: el.maybeClickable,
              onClick: n,
              children: t
          });
}
function ev(e) {
    var t,
        { title: n, subtitle: i, badges: a, children: s, onClickThumbnail: l, onClickTitle: c, onClickSubtitle: u, headerIcons: d, disableGameProfileLinks: _ = !1, showCoverImage: p = !0, onUserPopoutClosed: h, trackRankingItemInteraction: m } = e,
        g = e_(e, ['title', 'subtitle', 'badges', 'children', 'onClickThumbnail', 'onClickTitle', 'onClickSubtitle', 'headerIcons', 'disableGameProfileLinks', 'showCoverImage', 'onUserPopoutClosed', 'trackRankingItemInteraction']);
    let { entry: E } = g,
        b = (0, z.dX)(E),
        y = (0, N.Z)(
            {
                location: 'ContentPopout',
                applicationId: b && !_ ? (null == (t = E.extra) ? void 0 : t.application_id) : void 0,
                source: A.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: E.author_id
            },
            { onOpened: () => (null == m ? void 0 : m(ea.xP.OPENED_GAME_PROFILE)) }
        ),
        { largeImage: O, smallImage: v } = (0, K.rv)({
            entry: E,
            showCoverImage: p
        }),
        I = b ? y : void 0;
    return (0, r.jsxs)('div', {
        className: el.popoutContentWrapper,
        children: [
            (0, r.jsx)(ey, ef(eu({ disableGameProfileLinks: _ }, g), { onUserPopoutClosed: h })),
            (0, r.jsxs)(em, {
                backgroundImgSrc: null == O ? void 0 : O.src,
                children: [
                    (0, r.jsxs)('div', {
                        className: el.popoutHeroInner,
                        children: [
                            (0, r.jsx)('div', {
                                className: el.popoutThumbnailContainer,
                                children: (0, r.jsx)(X.E, {
                                    image: O,
                                    smallImage: v,
                                    aspectRatio: p ? 'none' : void 0,
                                    onClick: null != l ? l : I,
                                    size: X.J.SIZE_72
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: el.popoutHeroBody,
                                children: [
                                    (0, r.jsx)(eO, {
                                        onClick: null != c ? c : I,
                                        children: (0, r.jsx)(f.X6q, {
                                            variant: 'heading-md/medium',
                                            className: o()(el.popoutHeroTextPrimary, { [el.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != i
                                        ? (0, r.jsx)(eO, {
                                              onClick: null != u ? u : I,
                                              children: (0, r.jsx)(f.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: el.popoutHeroTextSecondary,
                                                  children: i
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(f.LZC, { size: 8 }),
                                    a
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: el.popoutHeaderIcons,
                                children: d
                            })
                        ]
                    }),
                    s
                ]
            })
        ]
    });
}
function eI(e) {
    var t,
        { title: n, subtitle: a, badges: o, stream: s, onClickThumbnail: l, onClickTitle: u, onClickSubtitle: d, onUserPopoutClosed: _, trackRankingItemInteraction: p } = e,
        g = e_(e, ['title', 'subtitle', 'badges', 'stream', 'onClickThumbnail', 'onClickTitle', 'onClickSubtitle', 'onUserPopoutClosed', 'trackRankingItemInteraction']);
    let E = (0, c.e7)([M.Z], () => M.Z.getChannel(null == s ? void 0 : s.channelId)),
        [b] = i.useMemo(() => (0, C.p9)(E, F.Z, j.Z, U.Z, S.Z), [E]),
        { entry: y } = g,
        O = (0, z.dX)(y),
        v = (0, N.Z)(
            {
                location: 'ContentPopout',
                applicationId: O ? (null == (t = y.extra) ? void 0 : t.application_id) : void 0,
                source: A.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: y.author_id
            },
            { onOpened: () => (null == p ? void 0 : p(ea.xP.OPENED_GAME_PROFILE)) }
        ),
        I = O ? v : void 0,
        { activity: T, activityApplication: P, fallbackApplication: w } = (0, J.Z)(y),
        { largeImage: D, smallImage: L } = (0, K.YC)(T, null != P ? P : w),
        { largeImage: x } = (0, K.rv)({ entry: y });
    return (0, r.jsxs)('div', {
        className: el.popoutContentWrapper,
        children: [
            (0, r.jsx)(ey, ef(eu({}, g), { onUserPopoutClosed: _ })),
            (0, r.jsxs)(em, {
                backgroundImgSrc: null == x ? void 0 : x.src,
                className: el.streamingPopoutHero,
                children: [
                    (0, r.jsx)(eO, {
                        onClick: b
                            ? () => {
                                  h.default.selectVoiceChannel(s.channelId), (0, m.iV)(s);
                              }
                            : void 0,
                        children: (0, r.jsxs)('div', {
                            className: el.streamingPopoutPreviewContainer,
                            children: [
                                (0, r.jsx)(R.Z, {
                                    className: el.streamingPopoutImg,
                                    stream: s
                                }),
                                b &&
                                    (0, r.jsx)('div', {
                                        className: el.streamCTA,
                                        children: (0, r.jsx)(f.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: es.intl.string(es.t['7Xq/nZ'])
                                        })
                                    })
                            ]
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: el.streamingPopoutHeader,
                        children: [
                            null != D &&
                                (0, r.jsx)('div', {
                                    className: el.popoutThumbnailContainer,
                                    children: (0, r.jsx)(X.E, {
                                        image: D,
                                        smallImage: L,
                                        onClick: null != l ? l : I,
                                        size: X.J.SIZE_72
                                    })
                                }),
                            (0, r.jsxs)('div', {
                                className: el.streamingPopoutHeaderText,
                                children: [
                                    (0, r.jsx)(eO, {
                                        onClick: null != u ? u : I,
                                        children: (0, r.jsx)(f.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: el.popoutTextPrimary,
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, r.jsx)(eO, {
                                              onClick: null != d ? d : I,
                                              children: (0, r.jsx)(f.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: el.popoutTextSecondary,
                                                  children: a
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(f.LZC, { size: 8 }),
                                    o
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function eT(e) {
    var { IconComponent: t, children: n, className: i } = e,
        a = e_(e, ['IconComponent', 'children', 'className']);
    return (0, r.jsx)(
        f.zxk,
        ef(eu({}, a), {
            className: o()(i, el.primaryButton),
            innerClassName: null != t ? el.iconButton : void 0,
            size: f.zxk.Sizes.MEDIUM,
            children: (0, r.jsx)(f.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: n
            })
        })
    );
}
function eS(e) {
    let t = (0, c.e7)([j.Z], () => j.Z.getGuild((0, E.j)(null == e ? void 0 : e.location))),
        n = (0, c.e7)([M.Z], () => M.Z.getChannel((0, E.p)(null == e ? void 0 : e.location))),
        i = (0, c.Wu)([V.default], () => {
            var t, n;
            return null != (n = null == e || null == (t = e.participants) ? void 0 : t.map((e) => V.default.getUser(e.userId))) ? n : [];
        });
    return null != e && null != t && null != n && k.sR.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: el.voiceChannelPopoutReactorHeader,
                      children: [
                          (0, r.jsxs)(f.P3F, {
                              'aria-label': es.intl.string(es.t['W/A4Qk']),
                              onClick: () => (0, D.Kh)(n.id),
                              className: el.voiceChannelPopoutReactorChannel,
                              children: [
                                  (0, r.jsx)(P.Z, {
                                      guild: t,
                                      size: P.Z.Sizes.SMOL,
                                      className: el.voiceChannelGuildIcon,
                                      active: !0
                                  }),
                                  (0, r.jsx)(f.Fbu, {
                                      size: 'xxs',
                                      color: d.Z.colors.INTERACTIVE_NORMAL
                                  }),
                                  (0, r.jsx)(f.VL1, {
                                      size: 'xs',
                                      color: d.Z.colors.TEXT_NORMAL
                                  }),
                                  (0, r.jsx)(f.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'text-normal',
                                      className: el.voiceChannelName,
                                      children: null == n ? void 0 : n.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(x.Z, {
                              guildId: t.id,
                              users: i,
                              max: 3,
                              renderUser: (e, n) =>
                                  (0, r.jsx)(f.qEK, {
                                      src: e.getAvatarURL(t.id, 16),
                                      size: f.EFr.SIZE_16,
                                      'aria-label': 'avatar',
                                      className: n
                                  }),
                              renderMoreUsers: (e) =>
                                  (0, r.jsx)('div', {
                                      className: el.voiceChannelAdditionalParticipants,
                                      children: (0, r.jsx)(f.Text, {
                                          variant: 'text-xxs/semibold',
                                          color: 'text-normal',
                                          children: e
                                      })
                                  })
                          })
                      ]
                  }),
                  (0, r.jsx)(f.LZC, { size: 16 })
              ]
          })
        : null;
}
function eA(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: o, channel: s } = (0, ee.Z)(n),
        { needSubscriptionToAccess: l } = (0, w.Z)(null == t ? void 0 : t.id),
        u = (0, c.e7)([j.Z], () => (null != s ? j.Z.getGuild(s.guild_id) : void 0)),
        _ = (0, c.Wu)([Z.ZP], () => (null != s ? Z.ZP.getVoiceStatesForChannel(s) : []), [s]),
        h = (0, c.e7)([F.Z], () => F.Z.isInChannel(null == s ? void 0 : s.id)),
        m = i.useMemo(() => {
            for (let e of _) {
                let t = M.Z.getDMFromUserId(e.user.id),
                    n = null != t && B.ZP.isChannelMuted(null, t),
                    r = G.Z.isBlockedOrIgnored(e.user.id);
                if (n || r) return !0;
            }
            return !1;
        }, [_]);
    if (null == s || null == u)
        return {
            voiceBar: void 0,
            joinVoiceButton: void 0
        };
    let g = null != o,
        E = () => {
            p.Z.updateChatOpen(s.id, !0), (0, D.Kh)(s.id), null == a || a(s);
        },
        b = () => {
            y.Z.handleVoiceConnect({
                channel: s,
                connected: h,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: !0
            });
        },
        O = (e) => {
            let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                a = i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              i &&
                                  (0, r.jsx)(f.aNP, {
                                      size: 'custom',
                                      width: 13,
                                      height: 13,
                                      className: el.popoutBlockedWarningIcon
                                  }),
                              es.intl.string(es.t.d6DpXF)
                          ]
                      })
                    : n;
            return (0, r.jsx)(
                f.ua7,
                {
                    'aria-label': i ? es.intl.string(es.t.d6DpXF) : null != n && n,
                    text: a,
                    shouldShow: !0,
                    children: t
                },
                'voice-preview'
            );
        };
    return {
        voiceBar: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: el.voiceChannelPopoutReactorHeader,
                    children: [
                        (0, r.jsx)(O, {
                            text: es.intl.string(es.t.WIVYqK),
                            hasRestrictedOrMutedVCParticipant: m,
                            children: (e) =>
                                (0, r.jsxs)(
                                    f.P3F,
                                    ef(eu({}, e), {
                                        'aria-label': es.intl.string(es.t.WIVYqK),
                                        onClick: E,
                                        className: el.voiceChannelPopoutReactorChannel,
                                        children: [
                                            (0, r.jsx)(P.Z, {
                                                guild: u,
                                                size: P.Z.Sizes.SMOL,
                                                className: el.voiceChannelGuildIcon,
                                                active: !0
                                            }),
                                            (0, r.jsx)(f.Fbu, {
                                                size: 'xxs',
                                                color: d.Z.colors.INTERACTIVE_NORMAL
                                            }),
                                            (0, r.jsx)(f.gj8, {
                                                size: 'xs',
                                                color: d.Z.colors.TEXT_NORMAL
                                            }),
                                            (0, r.jsx)(f.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'text-normal',
                                                className: el.voiceChannelName,
                                                children: s.name
                                            })
                                        ]
                                    })
                                )
                        }),
                        (0, r.jsx)(x.Z, {
                            guildId: u.id,
                            users: _,
                            max: 3,
                            renderUser: (e, t) =>
                                (0, r.jsx)(f.qEK, {
                                    src: e.user.getAvatarURL(u.id, 16),
                                    size: f.EFr.SIZE_16,
                                    'aria-label': 'avatar',
                                    className: t
                                }),
                            renderMoreUsers: (e) =>
                                (0, r.jsx)('div', {
                                    className: el.voiceChannelAdditionalParticipants,
                                    children: (0, r.jsx)(f.Text, {
                                        variant: 'text-xxs/semibold',
                                        color: 'text-normal',
                                        children: e
                                    })
                                })
                        })
                    ]
                }),
                (0, r.jsx)(f.LZC, { size: 16 })
            ]
        }),
        joinVoiceButton: h
            ? null
            : (0, r.jsx)(O, {
                  hasRestrictedOrMutedVCParticipant: m,
                  children: (e) =>
                      (0, r.jsx)(
                          eT,
                          ef(eu({}, e), {
                              color: f.zxk.Colors.GREEN,
                              onClick: b,
                              IconComponent: g ? f.pzj : f.gj8,
                              children: g ? es.intl.string(es.t['I6JG4+']) : es.intl.string(es.t.VJlc0d)
                          })
                      )
              })
    };
}

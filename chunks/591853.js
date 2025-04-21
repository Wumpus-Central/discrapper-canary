n.d(t, {
    Ll: () => eN,
    St: () => ey,
    WT: () => ev,
    jL: () => eA,
    wG: () => eT,
    yR: () => eE
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s);
n(995295);
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
    y = n(201133),
    v = n(557135),
    O = n(194082),
    I = n(605236),
    S = n(543241),
    T = n(318374),
    A = n(258609),
    N = n(810568),
    C = n(168524),
    R = n(102172),
    P = n(871118),
    w = n(565138),
    D = n(66999),
    L = n(790642),
    x = n(359110),
    M = n(12168),
    k = n(237583),
    j = n(131704),
    U = n(592125),
    G = n(430824),
    B = n(496675),
    F = n(699516),
    V = n(9156),
    Z = n(594174),
    H = n(979651),
    Y = n(938475),
    W = n(626135),
    K = n(768581),
    z = n(5192),
    q = n(379357),
    Q = n(26033),
    X = n(91907),
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
    ec = n(388032),
    eu = n(610220);
function ed(e, t, n) {
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
function ef(e) {
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
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
    return async function () {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        try {
            return await e(...n);
        } catch (e) {
            throw e;
        }
    };
}
function eE(e) {
    let { children: t } = e,
        n = i.useRef(null);
    return (
        (0, f.Tbt)(n),
        (0, r.jsx)('div', {
            className: eu.popout,
            ref: n,
            children: t
        })
    );
}
function eb(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: s, secondaryColor: l } = (0, er.Z)(n);
    return (
        null != n && (a.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(l, ')')),
        (0, r.jsx)(f.f6W, {
            theme: el.BRd.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsx)('div', {
                    className: o()(eu.hero, e, i),
                    style: a,
                    children: t
                })
        })
    );
}
function ey(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: eu.interactionsContainer,
        children: t
    });
}
function ev(e) {
    let { channel: t, user: n, generateReactionImage: a, reactionImageAltText: o, onReaction: s, entry: p, buttons: h = [], header: m, onVoiceChannelPreview: g } = e,
        [E, v] = i.useState(!1),
        [O, S] = i.useState(null),
        T = (0, c.e7)([B.Z], () => null != t && el.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && B.Z.can(el.Plq.SEND_MESSAGES, t)),
        [A, N] = i.useState(!1),
        [C, R] = i.useState(!1),
        { voiceBar: P, joinVoiceButton: w } = eR({
            channel: t,
            entry: p,
            onVoiceChannelPreview: g
        }),
        { embeddedActivity: D } = (0, ee.Z)(p),
        x = eC(D),
        M = null != w && 0 === h.length ? [w] : h,
        k = M.length > 0,
        j = M.length >= 2,
        [G, F] = i.useState(!k),
        V = z.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        Z = null != t && E ? ec.intl.formatToPlainString(ec.t['8lzR/f'], { channel: '#'.concat(t.name) }) : ec.intl.formatToPlainString(ec.t['4c+CAw'], { channel: '@'.concat(V) }),
        H = E ? ec.intl.string(ec.t.Z2CUgo) : ec.intl.string(ec.t.XLGiTE),
        Y = async (e) => {
            let r;
            if (null != e) {
                if (
                    (W.default.track(el.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: es.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, I.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    N(!0),
                    R(!1),
                    E)
                )
                    l()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (r = t);
                else {
                    var i;
                    let e = await _.Z.getOrEnsurePrivateChannel(n.id);
                    r = null != (i = U.Z.getChannel(e)) ? i : null;
                }
                return (
                    l()(null != r, 'Send channel must be defined'),
                    q({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            R(!0),
                                setTimeout(() => {
                                    N(!1), s(e, t);
                                }, 600);
                        },
                        interactionType: es.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1
                    })
                );
            }
        },
        K = async (e) => {
            let r;
            if (((0, I.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), E)) l()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (r = t);
            else {
                let e = await _.Z.openPrivateChannel({ recipientIds: n.id }),
                    t = U.Z.getChannel(e);
                l()(null != t, 'DM channel must be defined'), (r = t);
            }
            let i = r.type === el.d4z.DM ? es.xP.DM_REACTION_MESSAGE_SENT : es.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return q({
                reply: e,
                sendToChannel: r,
                interactionType: i,
                onComplete: s,
                requiresChannelReadiness: !0
            });
        },
        q = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: s } = e;
            if ((null == O || O.focus(), (0, L.Io)('ContentPopout Reactor')))
                await (0, $.p)({
                    channel: n,
                    content: t,
                    entry: p,
                    whenReady: s
                });
            else {
                let e = await eg(a)(n.id);
                l()(null != e, 'Reaction image must be defined'),
                    await (0, y.B)({
                        file: e,
                        channel: n,
                        altText: o,
                        reply: t
                    });
            }
            null == r || r(i, n);
        },
        Q = null != m ? m : null != P ? P : null != x ? x : void 0;
    return (
        i.useEffect(() => {
            G && (null == O || O.focus());
        }, [O, E, G]),
        (0, r.jsxs)('div', {
            style: { pointerEvents: A ? 'none' : 'all' },
            children: [
                (0, r.jsx)(eo.Z, {
                    sent: C,
                    shown: A,
                    className: eu.toastContainer
                }),
                null != Q
                    ? Q
                    : (0, r.jsx)(ei.Z, {
                          children: (0, r.jsxs)('div', {
                              className: eu.emojiHotrailShareToChannel,
                              children: [
                                  (0, r.jsx)(eO, {
                                      channel: t,
                                      onClickSuggestion: Y
                                  }),
                                  (0, r.jsx)(b.dE, { onSelectEmoji: Y })
                              ]
                          })
                      }),
                (0, r.jsxs)('div', {
                    className: G ? eu.inputContainerShareToChannel : eu.hiddenButRenderedInputField,
                    children: [
                        (0, r.jsx)(b.A7, {
                            placeholder: Z,
                            onEnter: K,
                            setEditorRef: (e) => S(e),
                            channel: E ? t : void 0,
                            showEmojiButton: null != Q,
                            className: eu.replyInput,
                            renderAttachButton: T
                                ? () =>
                                      (0, r.jsx)(f.ua7, {
                                          text: H,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  f.P3F,
                                                  ep(ef({}, e), {
                                                      className: eu.shareToChannelButton,
                                                      onClick: () => v((e) => !e),
                                                      children: E
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
                        k &&
                            (0, r.jsx)(f.P3F, {
                                onClick: () => F(!1),
                                className: eu.primaryActionPopoutMessageCloseIcon,
                                children: (0, r.jsx)(f.Dio, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    color: d.Z.colors.ICON_PRIMARY
                                })
                            })
                    ]
                }),
                !1 === G &&
                    (0, r.jsxs)('div', {
                        className: eu.primaryActionPopoutActionButtons,
                        children: [
                            (0, r.jsx)(
                                f.zxk,
                                {
                                    className: eu.secondaryButton,
                                    color: f.zxk.Colors.PRIMARY,
                                    look: f.zxk.Looks.FILLED,
                                    onClick: () => F(!0),
                                    innerClassName: eu.iconButton,
                                    size: j ? f.zxk.Sizes.MIN : f.zxk.Sizes.MEDIUM,
                                    children:
                                        !j &&
                                        (0, r.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            children: ec.intl.string(ec.t.OAJQlJ)
                                        })
                                },
                                'toggleMessageMode'
                            ),
                            M
                        ]
                    })
            ]
        })
    );
}
let eO = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, o] = i.useState(!1);
    i.useEffect(() => {
        o(!0);
    }, []);
    let s = !!g.Z.keyboardModeEnabled && !a,
        l = (0, S.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url
                      }
                    : {
                          emoji: e,
                          url: (0, K.gT)({
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
                              text: ec.intl.formatToPlainString(ec.t.kilW3t, { emojiName: t.name }),
                              position: 'top',
                              'aria-label': ec.intl.formatToPlainString(ec.t.kilW3t, { emojiName: t.name }),
                              color: f.ua7.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, r.jsx)(M.u, {
                                  emoji: t,
                                  isDisabled: !a,
                                  onClick: () => n(t),
                                  className: eu.emoji
                              })
                          })
                      },
                      t.name
                  )
                : null;
        })
    });
};
function eI(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: a, onUserPopoutClosed: s } = e,
        l = null == t ? void 0 : t.guild_id,
        { displayParticipants: u, participant1: d, participant2: _, numOtherParticipants: p } = (0, et.Z)(i, 3),
        h = (0, c.e7)([Z.default], () => Z.default.getUser(i.author_id)),
        { streamPreviewUrl: m } = (0, en.Z)(i),
        g = null != m,
        E = [d, _];
    return (0, r.jsxs)('div', {
        className: eu.popoutContentHeader,
        children: [
            (0, r.jsxs)('div', {
                className: eu.popoutUserContainer,
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
                        className: o()(eu.popoutUsernames, eu.popoutTextSecondary),
                        children: ec.intl.format(n, {
                            user0: z.ZP.getName(l, null == t ? void 0 : t.id, E[0]),
                            user1: z.ZP.getName(l, null == t ? void 0 : t.id, E[1]),
                            countOthers: p,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    f.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: o()(eu.popoutUsername, eu.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    X.Z,
                                    {
                                        textClassName: o()(eu.popoutUsername, eu.popoutTextPrimary),
                                        text: e,
                                        user: E[0],
                                        channel: t,
                                        onPopoutClosed: s
                                    },
                                    n
                                ),
                            name1Hook: (e, n) =>
                                (0, r.jsx)(
                                    X.Z,
                                    {
                                        textClassName: o()(eu.popoutUsername, eu.popoutTextPrimary),
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
                (0, r.jsx)(ea.Z, {
                    user: h,
                    channel: t,
                    guildId: l,
                    entry: i,
                    disableGameProfileLinks: a
                })
        ]
    });
}
function eS(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(f.P3F, {
              className: eu.maybeClickable,
              onClick: n,
              children: t
          });
}
function eT(e) {
    var t,
        { title: n, subtitle: i, badges: a, children: s, onClickThumbnail: l, onClickTitle: c, onClickSubtitle: u, headerIcons: d, disableGameProfileLinks: _ = !1, showCoverImage: p = !0, onUserPopoutClosed: h, trackRankingItemInteraction: m } = e,
        g = eh(e, ['title', 'subtitle', 'badges', 'children', 'onClickThumbnail', 'onClickTitle', 'onClickSubtitle', 'headerIcons', 'disableGameProfileLinks', 'showCoverImage', 'onUserPopoutClosed', 'trackRankingItemInteraction']);
    let { entry: E } = g,
        b = (0, Q.dX)(E),
        y = (0, C.Z)(
            {
                location: 'ContentPopout',
                applicationId: b && !_ ? (null == (t = E.extra) ? void 0 : t.application_id) : void 0,
                source: N.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: E.author_id
            },
            { onOpened: () => (null == m ? void 0 : m(es.xP.OPENED_GAME_PROFILE)) }
        ),
        { largeImage: v, smallImage: O } = (0, q.rv)({
            entry: E,
            showCoverImage: p
        }),
        I = b ? y : void 0;
    return (0, r.jsxs)('div', {
        className: eu.popoutContentWrapper,
        children: [
            (0, r.jsx)(eI, ep(ef({ disableGameProfileLinks: _ }, g), { onUserPopoutClosed: h })),
            (0, r.jsxs)(eb, {
                backgroundImgSrc: null == v ? void 0 : v.src,
                children: [
                    (0, r.jsxs)('div', {
                        className: eu.popoutHeroInner,
                        children: [
                            (0, r.jsx)('div', {
                                className: eu.popoutThumbnailContainer,
                                children: (0, r.jsx)(J.E, {
                                    image: v,
                                    smallImage: O,
                                    aspectRatio: p ? 'none' : void 0,
                                    onClick: null != l ? l : I,
                                    size: J.J.SIZE_72
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: eu.popoutHeroBody,
                                children: [
                                    (0, r.jsx)(eS, {
                                        onClick: null != c ? c : I,
                                        children: (0, r.jsx)(f.X6q, {
                                            variant: 'heading-md/medium',
                                            className: o()(eu.popoutHeroTextPrimary, { [eu.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != i
                                        ? (0, r.jsx)(eS, {
                                              onClick: null != u ? u : I,
                                              children: (0, r.jsx)(f.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: eu.popoutHeroTextSecondary,
                                                  children: i
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(f.LZC, { size: 8 }),
                                    a
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: eu.popoutHeaderIcons,
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
function eA(e) {
    var t,
        { title: n, subtitle: a, badges: o, stream: s, onClickThumbnail: l, onClickTitle: u, onClickSubtitle: d, onUserPopoutClosed: _, trackRankingItemInteraction: p } = e,
        g = eh(e, ['title', 'subtitle', 'badges', 'stream', 'onClickThumbnail', 'onClickTitle', 'onClickSubtitle', 'onUserPopoutClosed', 'trackRankingItemInteraction']);
    let E = (0, c.e7)([U.Z], () => U.Z.getChannel(null == s ? void 0 : s.channelId)),
        [b] = i.useMemo(() => (0, R.p9)(E, H.Z, G.Z, B.Z, A.Z), [E]),
        { entry: y } = g,
        v = (0, Q.dX)(y),
        O = (0, C.Z)(
            {
                location: 'ContentPopout',
                applicationId: v ? (null == (t = y.extra) ? void 0 : t.application_id) : void 0,
                source: N.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: y.author_id
            },
            { onOpened: () => (null == p ? void 0 : p(es.xP.OPENED_GAME_PROFILE)) }
        ),
        I = v ? O : void 0,
        { activity: S, activityApplication: T, fallbackApplication: w } = (0, ee.Z)(y),
        { largeImage: D, smallImage: L } = (0, q.YC)(S, null != T ? T : w),
        { largeImage: x } = (0, q.rv)({ entry: y });
    return (0, r.jsxs)('div', {
        className: eu.popoutContentWrapper,
        children: [
            (0, r.jsx)(eI, ep(ef({}, g), { onUserPopoutClosed: _ })),
            (0, r.jsxs)(eb, {
                backgroundImgSrc: null == x ? void 0 : x.src,
                className: eu.streamingPopoutHero,
                children: [
                    (0, r.jsx)(eS, {
                        onClick: b
                            ? () => {
                                  h.default.selectVoiceChannel(s.channelId), (0, m.iV)(s);
                              }
                            : void 0,
                        children: (0, r.jsxs)('div', {
                            className: eu.streamingPopoutPreviewContainer,
                            children: [
                                (0, r.jsx)(P.Z, {
                                    className: eu.streamingPopoutImg,
                                    stream: s
                                }),
                                b &&
                                    (0, r.jsx)('div', {
                                        className: eu.streamCTA,
                                        children: (0, r.jsx)(f.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: ec.intl.string(ec.t['7Xq/nZ'])
                                        })
                                    })
                            ]
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: eu.streamingPopoutHeader,
                        children: [
                            null != D &&
                                (0, r.jsx)('div', {
                                    className: eu.popoutThumbnailContainer,
                                    children: (0, r.jsx)(J.E, {
                                        image: D,
                                        smallImage: L,
                                        onClick: null != l ? l : I,
                                        size: J.J.SIZE_72
                                    })
                                }),
                            (0, r.jsxs)('div', {
                                className: eu.streamingPopoutHeaderText,
                                children: [
                                    (0, r.jsx)(eS, {
                                        onClick: null != u ? u : I,
                                        children: (0, r.jsx)(f.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: eu.popoutTextPrimary,
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, r.jsx)(eS, {
                                              onClick: null != d ? d : I,
                                              children: (0, r.jsx)(f.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: eu.popoutTextSecondary,
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
function eN(e) {
    var { IconComponent: t, children: n, className: i } = e,
        a = eh(e, ['IconComponent', 'children', 'className']);
    return (0, r.jsx)(
        f.zxk,
        ep(ef({}, a), {
            className: o()(i, eu.primaryButton),
            innerClassName: null != t ? eu.iconButton : void 0,
            size: f.zxk.Sizes.MEDIUM,
            children: (0, r.jsx)(f.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: n
            })
        })
    );
}
function eC(e) {
    let t = (0, c.e7)([G.Z], () => G.Z.getGuild((0, E.jS)(null == e ? void 0 : e.location))),
        n = (0, c.e7)([U.Z], () => U.Z.getChannel((0, E.pY)(null == e ? void 0 : e.location))),
        i = (0, c.Wu)([Z.default], () => {
            var t, n;
            return null != (n = null == e || null == (t = e.participants) ? void 0 : t.map((e) => Z.default.getUser(e.userId))) ? n : [];
        });
    return null != e && null != t && null != n && j.sR.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: eu.voiceChannelPopoutReactorHeader,
                      children: [
                          (0, r.jsxs)(f.P3F, {
                              'aria-label': ec.intl.string(ec.t['W/A4Qk']),
                              onClick: () => (0, x.Kh)(n.id),
                              className: eu.voiceChannelPopoutReactorChannel,
                              children: [
                                  (0, r.jsx)(w.Z, {
                                      guild: t,
                                      size: w.Z.Sizes.SMOL,
                                      className: eu.voiceChannelGuildIcon,
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
                                      className: eu.voiceChannelName,
                                      children: null == n ? void 0 : n.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(k.Z, {
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
                                      className: eu.voiceChannelAdditionalParticipants,
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
function eR(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: o, channel: s } = (0, en.Z)(n),
        { needSubscriptionToAccess: l } = (0, D.Z)(null == t ? void 0 : t.id),
        u = (0, c.e7)([G.Z], () => (null != s ? G.Z.getGuild(s.guild_id) : void 0)),
        _ = (0, c.Wu)([Y.ZP], () => (null != s ? Y.ZP.getVoiceStatesForChannel(s) : []), [s]),
        h = (0, c.e7)([H.Z], () => H.Z.isInChannel(null == s ? void 0 : s.id)),
        m = i.useMemo(() => {
            for (let e of _) {
                let t = U.Z.getDMFromUserId(e.user.id),
                    n = null != t && V.ZP.isChannelMuted(null, t),
                    r = F.Z.isBlockedOrIgnored(e.user.id);
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
            p.Z.updateChatOpen(s.id, !0), (0, x.Kh)(s.id), null == a || a(s);
        },
        b = () => {
            v.Z.handleVoiceConnect({
                channel: s,
                connected: h,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: !0
            });
        },
        y = (e) => {
            let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                a = i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              i &&
                                  (0, r.jsx)(f.aNP, {
                                      size: 'custom',
                                      width: 13,
                                      height: 13,
                                      className: eu.popoutBlockedWarningIcon
                                  }),
                              ec.intl.string(ec.t.d6DpXF)
                          ]
                      })
                    : n;
            return (0, r.jsx)(
                f.ua7,
                {
                    'aria-label': i ? ec.intl.string(ec.t.d6DpXF) : null != n && n,
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
                    className: eu.voiceChannelPopoutReactorHeader,
                    children: [
                        (0, r.jsx)(y, {
                            text: ec.intl.string(ec.t.WIVYqK),
                            hasRestrictedOrMutedVCParticipant: m,
                            children: (e) =>
                                (0, r.jsxs)(
                                    f.P3F,
                                    ep(ef({}, e), {
                                        'aria-label': ec.intl.string(ec.t.WIVYqK),
                                        onClick: E,
                                        className: eu.voiceChannelPopoutReactorChannel,
                                        children: [
                                            (0, r.jsx)(w.Z, {
                                                guild: u,
                                                size: w.Z.Sizes.SMOL,
                                                className: eu.voiceChannelGuildIcon,
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
                                                className: eu.voiceChannelName,
                                                children: s.name
                                            })
                                        ]
                                    })
                                )
                        }),
                        (0, r.jsx)(k.Z, {
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
                                    className: eu.voiceChannelAdditionalParticipants,
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
            : (0, r.jsx)(y, {
                  hasRestrictedOrMutedVCParticipant: m,
                  children: (e) =>
                      (0, r.jsx)(
                          eN,
                          ep(ef({}, e), {
                              color: f.zxk.Colors.GREEN,
                              onClick: b,
                              IconComponent: g ? f.pzj : f.gj8,
                              children: g ? ec.intl.string(ec.t['I6JG4+']) : ec.intl.string(ec.t.VJlc0d)
                          })
                      )
              })
    };
}

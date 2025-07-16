(n.d(t, {
    Ll: () => eS,
    St: () => eE,
    WT: () => eb,
    jL: () => eT,
    wG: () => eI,
    yR: () => em
}),
    n(388685));
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
    f = n(755721),
    _ = n(481060),
    p = n(493683),
    h = n(475179),
    m = n(287734),
    g = n(872810),
    E = n(607070),
    b = n(16609),
    y = n(220779),
    O = n(557135),
    v = n(194082),
    I = n(266454),
    T = n(543241),
    S = n(318374),
    A = n(258609),
    N = n(810568),
    C = n(168524),
    R = n(102172),
    P = n(871118),
    w = n(565138),
    D = n(66999),
    L = n(359110),
    x = n(12168),
    k = n(237583),
    M = n(131704),
    j = n(592125),
    U = n(430824),
    G = n(496675),
    B = n(699516),
    V = n(9156),
    F = n(594174),
    Z = n(979651),
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
    el = n(388032),
    ec = n(610220);
function eu(e, t, n) {
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
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eu(e, t, n[t]);
            }));
    }
    return e;
}
function ef(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function e_(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ef(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ep(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eh(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function eh(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function em(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: ec.popout,
        children: t
    });
}
function eg(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: s, secondaryColor: l } = (0, en.Z)(n);
    return (
        null != n && (a.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(l, ')')),
        (0, r.jsx)(_.f6W, {
            theme: es.BRd.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsx)('div', {
                    className: o()(ec.hero, e, i),
                    style: a,
                    children: t
                })
        })
    );
}
function eE(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: ec.interactionsContainer,
        children: t
    });
}
function eb(e) {
    let { channel: t, user: n, onReaction: a, entry: o, buttons: s = [], header: h, onVoiceChannelPreview: m } = e,
        [g, E] = i.useState(!1),
        [b, O] = i.useState(null),
        v = (0, c.e7)([G.Z], () => null != t && es.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && G.Z.can(es.Plq.SEND_MESSAGES, t)),
        [T, S] = i.useState(!1),
        [A, N] = i.useState(!1),
        { voiceBar: C, joinVoiceButton: R } = eN({
            channel: t,
            entry: o,
            onVoiceChannelPreview: m
        }),
        { embeddedActivity: P } = (0, $.Z)(o),
        w = eA(P),
        D = null != R && 0 === s.length ? [R] : s,
        L = D.length > 0,
        x = D.length >= 2,
        [k, M] = i.useState(!L),
        U = K.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        B = null != t && g ? el.intl.formatToPlainString(el.t['8lzR/f'], { channel: '#'.concat(t.name) }) : el.intl.formatToPlainString(el.t['4c+CAw'], { channel: '@'.concat(U) }),
        V = g ? el.intl.string(el.t.Z2CUgo) : el.intl.string(el.t.XLGiTE),
        F = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (Y.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: eo.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, I.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    S(!0),
                    N(!1),
                    g)
                )
                    (l()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (r = t));
                else {
                    var o;
                    let e = await p.Z.getOrEnsurePrivateChannel(n.id);
                    r = null != (o = j.Z.getChannel(e)) ? o : null;
                }
                return (
                    l()(null != r, 'Send channel must be defined'),
                    H({
                        reply: ':'.concat(i.name, ':'),
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            (N(!0),
                                setTimeout(() => {
                                    (S(!1), a(e, t));
                                }, 600));
                        },
                        interactionType: eo.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1
                    })
                );
            }
        },
        Z = async (e) => {
            let r;
            if (((0, I.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g)) (l()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (r = t));
            else {
                let e = await p.Z.openPrivateChannel({ recipientIds: n.id }),
                    t = j.Z.getChannel(e);
                (l()(null != t, 'DM channel must be defined'), (r = t));
            }
            let i = r.type === es.d4z.DM ? eo.xP.DM_REACTION_MESSAGE_SENT : eo.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return H({
                reply: e,
                sendToChannel: r,
                interactionType: i,
                onComplete: a,
                requiresChannelReadiness: !0
            });
        },
        H = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: a } = e;
            (null == b || b.focus(),
                await (0, J.p)({
                    channel: n,
                    content: t,
                    entry: o,
                    whenReady: a
                }),
                null == r || r(i, n));
        },
        W = null != h ? h : null != C ? C : null != w ? w : void 0,
        z = () => {
            (E((e) => !e), k && (null == b || b.focus()));
        },
        q = (e) => {
            (M(e), e && (null == b || b.focus()));
        };
    return (0, r.jsxs)('div', {
        style: { pointerEvents: T ? 'none' : 'all' },
        children: [
            (0, r.jsx)(ea.Z, {
                sent: A,
                shown: T,
                className: ec.toastContainer
            }),
            null != W
                ? W
                : (0, r.jsx)(er.Z, {
                      children: (0, r.jsxs)('div', {
                          className: ec.emojiHotrailShareToChannel,
                          children: [
                              (0, r.jsx)(ey, {
                                  channel: t,
                                  onClickSuggestion: F
                              }),
                              (0, r.jsx)(y.dE, { onSelectEmoji: F })
                          ]
                      })
                  }),
            (0, r.jsxs)('div', {
                className: k ? ec.inputContainerShareToChannel : ec.hiddenButRenderedInputField,
                children: [
                    (0, r.jsx)(y.A7, {
                        placeholder: B,
                        onEnter: Z,
                        setEditorRef: (e) => O(e),
                        channel: g ? t : void 0,
                        showEmojiButton: null != W,
                        className: ec.replyInput,
                        autoFocus: !1,
                        renderAttachButton: v
                            ? () =>
                                  (0, r.jsx)(_.ua7, {
                                      text: V,
                                      children: (e) =>
                                          (0, r.jsx)(
                                              _.P3F,
                                              e_(ed({}, e), {
                                                  className: ec.shareToChannelButton,
                                                  onClick: z,
                                                  children: g
                                                      ? (0, r.jsx)(_.VL1, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                                      : (0, r.jsx)(_.lOy, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                              })
                                          )
                                  })
                            : void 0
                    }),
                    L &&
                        (0, r.jsx)(_.P3F, {
                            onClick: () => q(!1),
                            className: ec.primaryActionPopoutMessageCloseIcon,
                            children: (0, r.jsx)(_.Dio, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                color: d.Z.colors.ICON_PRIMARY
                            })
                        })
                ]
            }),
            !1 === k &&
                (0, r.jsxs)('div', {
                    className: ec.primaryActionPopoutActionButtons,
                    children: [
                        (0, r.jsx)(
                            f.zx,
                            {
                                className: ec.secondaryButton,
                                color: f.zx.Colors.PRIMARY,
                                look: f.zx.Looks.FILLED,
                                onClick: () => q(!0),
                                innerClassName: ec.iconButton,
                                size: x ? f.zx.Sizes.MIN : f.zx.Sizes.MEDIUM,
                                children:
                                    !x &&
                                    (0, r.jsx)(_.Text, {
                                        variant: 'text-md/semibold',
                                        children: el.intl.string(el.t.OAJQlJ)
                                    })
                            },
                            'toggleMessageMode'
                        ),
                        D
                    ]
                })
        ]
    });
}
let ey = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, o] = i.useState(!1);
    i.useEffect(() => {
        o(!0);
    }, []);
    let s = !!E.Z.keyboardModeEnabled && !a,
        l = (0, T.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url
                      }
                    : {
                          emoji: e,
                          url: (0, W.gT)({
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
                          children: (0, r.jsx)(_.DY3, {
                              text: el.intl.formatToPlainString(el.t.kilW3t, { emojiName: t.name }),
                              position: 'top',
                              'aria-label': el.intl.formatToPlainString(el.t.kilW3t, { emojiName: t.name }),
                              color: _.ua7.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, r.jsx)(x.u, {
                                  emoji: t,
                                  isDisabled: !a,
                                  onClick: () => n({ emoji: t }),
                                  className: ec.emoji
                              })
                          })
                      },
                      t.name
                  )
                : null;
        })
    });
};
function eO(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: a, onUserPopoutClosed: s } = e,
        l = null == t ? void 0 : t.guild_id,
        { displayParticipants: u, participant1: d, participant2: f, numOtherParticipants: p } = (0, ee.Z)(i, 3),
        h = (0, c.e7)([F.default], () => F.default.getUser(i.author_id)),
        { streamPreviewUrl: m } = (0, et.Z)(i),
        g = null != m,
        E = [d, f];
    return (0, r.jsxs)('div', {
        className: ec.popoutContentHeader,
        children: [
            (0, r.jsxs)('div', {
                className: ec.popoutUserContainer,
                children: [
                    (0, r.jsx)(S.Z, {
                        maxUsers: 3,
                        users: u,
                        size: _.EFr.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: s
                    }),
                    (0, r.jsx)(_.LZC, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, r.jsx)(_.X6q, {
                        variant: 'heading-sm/normal',
                        className: o()(ec.popoutUsernames, ec.popoutTextSecondary),
                        children: el.intl.format(n, {
                            user0: K.ZP.getName(l, null == t ? void 0 : t.id, E[0]),
                            user1: K.ZP.getName(l, null == t ? void 0 : t.id, E[1]),
                            countOthers: p,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    _.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: o()(ec.popoutUsername, ec.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    X.Z,
                                    {
                                        textClassName: o()(ec.popoutUsername, ec.popoutTextPrimary),
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
                                        textClassName: o()(ec.popoutUsername, ec.popoutTextPrimary),
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
            g && (0, r.jsx)(v.ZP, { size: v.ZP.Sizes.SMALL }),
            null != h &&
                (0, r.jsx)(ei.Z, {
                    user: h,
                    channel: t,
                    guildId: l,
                    entry: i,
                    disableGameProfileLinks: a
                })
        ]
    });
}
function ev(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(_.P3F, {
              className: ec.maybeClickable,
              onClick: n,
              children: t
          });
}
function eI(e) {
    var t,
        { title: n, subtitle: i, badges: a, children: s, onClickThumbnail: l, onClickTitle: c, onClickSubtitle: u, headerIcons: d, disableGameProfileLinks: f = !1, showCoverImage: p = !0, onUserPopoutClosed: h, trackRankingItemInteraction: m } = e,
        g = ep(e, ['title', 'subtitle', 'badges', 'children', 'onClickThumbnail', 'onClickTitle', 'onClickSubtitle', 'headerIcons', 'disableGameProfileLinks', 'showCoverImage', 'onUserPopoutClosed', 'trackRankingItemInteraction']);
    let { entry: E } = g,
        b = (0, q.dX)(E),
        y = (0, C.Z)(
            {
                location: 'ContentPopout',
                applicationId: b && !f ? (null == (t = E.extra) ? void 0 : t.application_id) : void 0,
                source: N.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: E.author_id
            },
            { onOpened: () => (null == m ? void 0 : m(eo.xP.OPENED_GAME_PROFILE)) }
        ),
        { largeImage: O, smallImage: v } = (0, z.rv)({
            entry: E,
            showCoverImage: p
        }),
        I = b ? y : void 0;
    return (0, r.jsxs)('div', {
        className: ec.popoutContentWrapper,
        children: [
            (0, r.jsx)(eO, e_(ed({ disableGameProfileLinks: f }, g), { onUserPopoutClosed: h })),
            (0, r.jsxs)(eg, {
                backgroundImgSrc: null == O ? void 0 : O.src,
                children: [
                    (0, r.jsxs)('div', {
                        className: ec.popoutHeroInner,
                        children: [
                            (0, r.jsx)('div', {
                                className: ec.popoutThumbnailContainer,
                                children: (0, r.jsx)(Q.E, {
                                    image: O,
                                    smallImage: v,
                                    aspectRatio: p ? 'none' : void 0,
                                    onClick: null != l ? l : I,
                                    size: Q.J.SIZE_72
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: ec.popoutHeroBody,
                                children: [
                                    (0, r.jsx)(ev, {
                                        onClick: null != c ? c : I,
                                        children: (0, r.jsx)(_.X6q, {
                                            variant: 'heading-md/medium',
                                            className: o()(ec.popoutHeroTextPrimary, { [ec.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != i
                                        ? (0, r.jsx)(ev, {
                                              onClick: null != u ? u : I,
                                              children: (0, r.jsx)(_.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ec.popoutHeroTextSecondary,
                                                  children: i
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(_.LZC, { size: 8 }),
                                    a
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: ec.popoutHeaderIcons,
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
function eT(e) {
    var t,
        { title: n, subtitle: a, badges: o, stream: s, onClickThumbnail: l, onClickTitle: u, onClickSubtitle: d, onUserPopoutClosed: f, trackRankingItemInteraction: p } = e,
        h = ep(e, ['title', 'subtitle', 'badges', 'stream', 'onClickThumbnail', 'onClickTitle', 'onClickSubtitle', 'onUserPopoutClosed', 'trackRankingItemInteraction']);
    let E = (0, c.e7)([j.Z], () => j.Z.getChannel(null == s ? void 0 : s.channelId)),
        [b] = i.useMemo(() => (0, R.p9)(E, Z.Z, U.Z, G.Z, A.Z), [E]),
        { entry: y } = h,
        O = (0, q.dX)(y),
        v = (0, C.Z)(
            {
                location: 'ContentPopout',
                applicationId: O ? (null == (t = y.extra) ? void 0 : t.application_id) : void 0,
                source: N.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: y.author_id
            },
            { onOpened: () => (null == p ? void 0 : p(eo.xP.OPENED_GAME_PROFILE)) }
        ),
        I = O ? v : void 0,
        { activity: T, activityApplication: S, fallbackApplication: w } = (0, $.Z)(y),
        { largeImage: D, smallImage: L } = (0, z.YC)(T, null != S ? S : w),
        { largeImage: x } = (0, z.rv)({ entry: y });
    return (0, r.jsxs)('div', {
        className: ec.popoutContentWrapper,
        children: [
            (0, r.jsx)(eO, e_(ed({}, h), { onUserPopoutClosed: f })),
            (0, r.jsxs)(eg, {
                backgroundImgSrc: null == x ? void 0 : x.src,
                className: ec.streamingPopoutHero,
                children: [
                    (0, r.jsx)(ev, {
                        onClick: b
                            ? () => {
                                  (m.default.selectVoiceChannel(s.channelId), (0, g.iV)(s));
                              }
                            : void 0,
                        children: (0, r.jsxs)('div', {
                            className: ec.streamingPopoutPreviewContainer,
                            children: [
                                (0, r.jsx)(P.Z, {
                                    className: ec.streamingPopoutImg,
                                    stream: s
                                }),
                                b &&
                                    (0, r.jsx)('div', {
                                        className: ec.streamCTA,
                                        children: (0, r.jsx)(_.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: el.intl.string(el.t['7Xq/nZ'])
                                        })
                                    })
                            ]
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: ec.streamingPopoutHeader,
                        children: [
                            null != D &&
                                (0, r.jsx)('div', {
                                    className: ec.popoutThumbnailContainer,
                                    children: (0, r.jsx)(Q.E, {
                                        image: D,
                                        smallImage: L,
                                        onClick: null != l ? l : I,
                                        size: Q.J.SIZE_72
                                    })
                                }),
                            (0, r.jsxs)('div', {
                                className: ec.streamingPopoutHeaderText,
                                children: [
                                    (0, r.jsx)(ev, {
                                        onClick: null != u ? u : I,
                                        children: (0, r.jsx)(_.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: ec.popoutTextPrimary,
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, r.jsx)(ev, {
                                              onClick: null != d ? d : I,
                                              children: (0, r.jsx)(_.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ec.popoutTextSecondary,
                                                  children: a
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(_.LZC, { size: 8 }),
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
function eS(e) {
    var { IconComponent: t, children: n, className: i } = e,
        a = ep(e, ['IconComponent', 'children', 'className']);
    return (0, r.jsx)(
        f.zx,
        e_(ed({}, a), {
            className: o()(i, ec.primaryButton),
            innerClassName: null != t ? ec.iconButton : void 0,
            size: f.zx.Sizes.MEDIUM,
            children: (0, r.jsx)(_.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: n
            })
        })
    );
}
function eA(e) {
    let t = (0, c.e7)([U.Z], () => U.Z.getGuild((0, b.j)(null == e ? void 0 : e.location))),
        n = (0, c.e7)([j.Z], () => j.Z.getChannel((0, b.p)(null == e ? void 0 : e.location))),
        i = (0, c.Wu)([F.default], () => {
            var t, n;
            return null != (n = null == e || null == (t = e.participants) ? void 0 : t.map((e) => F.default.getUser(e.userId))) ? n : [];
        });
    return null != e && null != t && null != n && M.sR.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: ec.voiceChannelPopoutReactorHeader,
                      children: [
                          (0, r.jsxs)(_.P3F, {
                              'aria-label': el.intl.string(el.t['W/A4Qk']),
                              onClick: () => (0, L.Kh)(n.id),
                              className: ec.voiceChannelPopoutReactorChannel,
                              children: [
                                  (0, r.jsx)(w.Z, {
                                      guild: t,
                                      size: w.Z.Sizes.SMOL,
                                      className: ec.voiceChannelGuildIcon,
                                      active: !0
                                  }),
                                  (0, r.jsx)(_.Fbu, {
                                      size: 'xxs',
                                      color: d.Z.colors.INTERACTIVE_NORMAL
                                  }),
                                  (0, r.jsx)(_.VL1, {
                                      size: 'xs',
                                      color: d.Z.colors.TEXT_DEFAULT
                                  }),
                                  (0, r.jsx)(_.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'text-default',
                                      className: ec.voiceChannelName,
                                      children: null == n ? void 0 : n.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(k.Z, {
                              guildId: t.id,
                              users: i,
                              max: 3,
                              renderUser: (e, n) =>
                                  (0, r.jsx)(_.qEK, {
                                      src: e.getAvatarURL(t.id, 16),
                                      size: _.EFr.SIZE_16,
                                      'aria-label': 'avatar',
                                      className: n
                                  }),
                              renderMoreUsers: (e) =>
                                  (0, r.jsx)('div', {
                                      className: ec.voiceChannelAdditionalParticipants,
                                      children: (0, r.jsx)(_.Text, {
                                          variant: 'text-xxs/semibold',
                                          color: 'text-default',
                                          children: e
                                      })
                                  })
                          })
                      ]
                  }),
                  (0, r.jsx)(_.LZC, { size: 16 })
              ]
          })
        : null;
}
function eN(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: o, channel: s } = (0, et.Z)(n),
        { needSubscriptionToAccess: l } = (0, D.Z)(null == t ? void 0 : t.id),
        u = (0, c.e7)([U.Z], () => (null != s ? U.Z.getGuild(s.guild_id) : void 0)),
        p = (0, c.Wu)([H.ZP], () => (null != s ? H.ZP.getVoiceStatesForChannel(s) : []), [s]),
        m = (0, c.e7)([Z.Z], () => Z.Z.isInChannel(null == s ? void 0 : s.id)),
        g = i.useMemo(() => {
            for (let e of p) {
                let t = j.Z.getDMFromUserId(e.user.id),
                    n = null != t && V.ZP.isChannelMuted(null, t),
                    r = B.Z.isBlockedOrIgnored(e.user.id);
                if (n || r) return !0;
            }
            return !1;
        }, [p]);
    if (null == s || null == u)
        return {
            voiceBar: void 0,
            joinVoiceButton: void 0
        };
    let E = null != o,
        b = () => {
            (h.Z.updateChatOpen(s.id, !0), (0, L.Kh)(s.id), null == a || a(s));
        },
        y = () => {
            O.Z.handleVoiceConnect({
                channel: s,
                connected: m,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: !0
            });
        },
        v = (e) => {
            let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                a = i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              i &&
                                  (0, r.jsx)(_.aNP, {
                                      size: 'custom',
                                      width: 13,
                                      height: 13,
                                      className: ec.popoutBlockedWarningIcon
                                  }),
                              el.intl.string(el.t.d6DpXF)
                          ]
                      })
                    : n;
            return (0, r.jsx)(
                _.ua7,
                {
                    'aria-label': i ? el.intl.string(el.t.d6DpXF) : null != n && n,
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
                    className: ec.voiceChannelPopoutReactorHeader,
                    children: [
                        (0, r.jsx)(v, {
                            text: el.intl.string(el.t.WIVYqK),
                            hasRestrictedOrMutedVCParticipant: g,
                            children: (e) =>
                                (0, r.jsxs)(
                                    _.P3F,
                                    e_(ed({}, e), {
                                        'aria-label': el.intl.string(el.t.WIVYqK),
                                        onClick: b,
                                        className: ec.voiceChannelPopoutReactorChannel,
                                        children: [
                                            (0, r.jsx)(w.Z, {
                                                guild: u,
                                                size: w.Z.Sizes.SMOL,
                                                className: ec.voiceChannelGuildIcon,
                                                active: !0
                                            }),
                                            (0, r.jsx)(_.Fbu, {
                                                size: 'xxs',
                                                color: d.Z.colors.INTERACTIVE_NORMAL
                                            }),
                                            (0, r.jsx)(_.gj8, {
                                                size: 'xs',
                                                color: d.Z.colors.TEXT_DEFAULT
                                            }),
                                            (0, r.jsx)(_.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'text-default',
                                                className: ec.voiceChannelName,
                                                children: s.name
                                            })
                                        ]
                                    })
                                )
                        }),
                        (0, r.jsx)(k.Z, {
                            guildId: u.id,
                            users: p,
                            max: 3,
                            renderUser: (e, t) =>
                                (0, r.jsx)(_.qEK, {
                                    src: e.user.getAvatarURL(u.id, 16),
                                    size: _.EFr.SIZE_16,
                                    'aria-label': 'avatar',
                                    className: t
                                }),
                            renderMoreUsers: (e) =>
                                (0, r.jsx)('div', {
                                    className: ec.voiceChannelAdditionalParticipants,
                                    children: (0, r.jsx)(_.Text, {
                                        variant: 'text-xxs/semibold',
                                        color: 'text-default',
                                        children: e
                                    })
                                })
                        })
                    ]
                }),
                (0, r.jsx)(_.LZC, { size: 16 })
            ]
        }),
        joinVoiceButton: m
            ? null
            : (0, r.jsx)(v, {
                  hasRestrictedOrMutedVCParticipant: g,
                  children: (e) =>
                      (0, r.jsx)(
                          eS,
                          e_(ed({}, e), {
                              color: f.zx.Colors.GREEN,
                              onClick: y,
                              IconComponent: E ? _.pzj : _.gj8,
                              children: E ? el.intl.string(el.t['I6JG4+']) : el.intl.string(el.t.VJlc0d)
                          })
                      )
              })
    };
}

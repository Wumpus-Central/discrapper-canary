(n.d(t, {
    Ll: () => eN,
    St: () => ey,
    WT: () => eO,
    jL: () => eA,
    wG: () => eS,
    yR: () => eE
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
    f = n(680018),
    _ = n(755721),
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
    A = n(318374),
    N = n(258609),
    C = n(480086),
    R = n(810568),
    P = n(168524),
    w = n(102172),
    D = n(871118),
    L = n(565138),
    x = n(66999),
    k = n(359110),
    M = n(12168),
    j = n(237583),
    U = n(131704),
    G = n(592125),
    B = n(430824),
    V = n(496675),
    F = n(699516),
    Z = n(9156),
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
    eu = n(388032),
    ed = n(610220);
function ef(e, t, n) {
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
function e_(e) {
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
                ef(e, t, n[t]);
            }));
    }
    return e;
}
function ep(e, t) {
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
function eh(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ep(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function em(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eg(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function eg(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function eE(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: ed.popout,
        children: t
    });
}
function eb(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: s, secondaryColor: l } = (0, ei.Z)(n);
    return (
        null != n && (a.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(l, ')')),
        (0, r.jsx)(p.f6W, {
            theme: ec.BRd.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsx)('div', {
                    className: o()(ed.hero, e, i),
                    style: a,
                    children: t
                })
        })
    );
}
function ey(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: ed.interactionsContainer,
        children: t
    });
}
function eO(e) {
    let { channel: t, user: n, onReaction: a, entry: o, buttons: s = [], header: f, onVoiceChannelPreview: m } = e,
        [g, E] = i.useState(!1),
        [b, y] = i.useState(null),
        v = (0, c.e7)([V.Z], () => null != t && ec.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && V.Z.can(ec.Plq.SEND_MESSAGES, t)),
        [I, S] = i.useState(!1),
        [A, N] = i.useState(!1),
        { voiceBar: C, joinVoiceButton: R } = eR({
            channel: t,
            entry: o,
            onVoiceChannelPreview: m
        }),
        { embeddedActivity: P } = (0, et.Z)(o),
        w = eC(P),
        D = null != R && 0 === s.length ? [R] : s,
        L = D.length > 0,
        x = D.length >= 2,
        [k, M] = i.useState(!L),
        j = q.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        U = null != t && g ? eu.intl.formatToPlainString(eu.t['8lzR/f'], { channel: '#'.concat(t.name) }) : eu.intl.formatToPlainString(eu.t['4c+CAw'], { channel: '@'.concat(j) }),
        B = g ? eu.intl.string(eu.t.Z2CUgo) : eu.intl.string(eu.t.XLGiTE),
        F = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (K.default.track(ec.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: el.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, T.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    S(!0),
                    N(!1),
                    g)
                )
                    (l()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (r = t));
                else {
                    var o;
                    let e = await h.Z.getOrEnsurePrivateChannel(n.id);
                    r = null != (o = G.Z.getChannel(e)) ? o : null;
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
                        interactionType: el.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1
                    })
                );
            }
        },
        Z = async (e) => {
            let r;
            if (((0, T.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g)) (l()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (r = t));
            else {
                let e = await h.Z.openPrivateChannel({ recipientIds: n.id }),
                    t = G.Z.getChannel(e);
                (l()(null != t, 'DM channel must be defined'), (r = t));
            }
            let i = r.type === ec.d4z.DM ? el.xP.DM_REACTION_MESSAGE_SENT : el.xP.CHANNEL_REACTION_MESSAGE_SENT;
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
                await (0, ee.p)({
                    channel: n,
                    content: t,
                    entry: o,
                    whenReady: a
                }),
                null == r || r(i, n));
        },
        Y = null != f ? f : null != C ? C : null != w ? w : void 0,
        W = () => {
            (E((e) => !e), k && (null == b || b.focus()));
        },
        z = (e) => {
            (M(e), e && (null == b || b.focus()));
        };
    return (0, r.jsxs)('div', {
        style: { pointerEvents: I ? 'none' : 'all' },
        children: [
            (0, r.jsx)(es.Z, {
                sent: A,
                shown: I,
                className: ed.toastContainer
            }),
            null != Y
                ? Y
                : (0, r.jsx)(ea.Z, {
                      children: (0, r.jsxs)('div', {
                          className: ed.emojiHotrailShareToChannel,
                          children: [
                              (0, r.jsx)(ev, {
                                  channel: t,
                                  onClickSuggestion: F
                              }),
                              (0, r.jsx)(O.dE, { onSelectEmoji: F })
                          ]
                      })
                  }),
            (0, r.jsxs)('div', {
                className: k ? ed.inputContainerShareToChannel : ed.hiddenButRenderedInputField,
                children: [
                    (0, r.jsx)(O.A7, {
                        placeholder: U,
                        onEnter: Z,
                        setEditorRef: (e) => y(e),
                        channel: g ? t : void 0,
                        showEmojiButton: null != Y,
                        className: ed.replyInput,
                        autoFocus: !1,
                        renderAttachButton: v
                            ? () =>
                                  (0, r.jsx)(p.ua7, {
                                      text: B,
                                      children: (e) =>
                                          (0, r.jsx)(
                                              p.P3F,
                                              eh(e_({}, e), {
                                                  className: ed.shareToChannelButton,
                                                  onClick: W,
                                                  children: g
                                                      ? (0, r.jsx)(p.VL1, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                                      : (0, r.jsx)(p.lOy, {
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
                        (0, r.jsx)(p.P3F, {
                            onClick: () => z(!1),
                            className: ed.primaryActionPopoutMessageCloseIcon,
                            children: (0, r.jsx)(p.Dio, {
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
                    className: ed.primaryActionPopoutActionButtons,
                    children: [
                        (0, r.jsx)(
                            _.zx,
                            {
                                className: ed.secondaryButton,
                                color: _.zx.Colors.PRIMARY,
                                look: _.zx.Looks.FILLED,
                                onClick: () => z(!0),
                                innerClassName: ed.iconButton,
                                size: x ? _.zx.Sizes.MIN : _.zx.Sizes.MEDIUM,
                                children:
                                    !x &&
                                    (0, r.jsx)(p.Text, {
                                        variant: 'text-md/semibold',
                                        children: eu.intl.string(eu.t.OAJQlJ)
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
let ev = (e) => {
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
                          url: e.url
                      }
                    : {
                          emoji: e,
                          url: (0, z.gT)({
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
                          children: (0, r.jsx)(p.DY3, {
                              text: eu.intl.formatToPlainString(eu.t.kilW3t, { emojiName: t.name }),
                              position: 'top',
                              'aria-label': eu.intl.formatToPlainString(eu.t.kilW3t, { emojiName: t.name }),
                              color: p.ua7.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, r.jsx)(M.u, {
                                  emoji: t,
                                  isDisabled: !a,
                                  onClick: () => n({ emoji: t }),
                                  className: ed.emoji
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
        { displayParticipants: u, participant1: d, participant2: f, numOtherParticipants: _ } = (0, en.Z)(i, 3),
        h = (0, c.e7)([H.default], () => H.default.getUser(i.author_id)),
        { streamPreviewUrl: m } = (0, er.Z)(i),
        g = null != m,
        E = [d, f];
    return (0, r.jsxs)('div', {
        className: ed.popoutContentHeader,
        children: [
            (0, r.jsxs)('div', {
                className: ed.popoutUserContainer,
                children: [
                    (0, r.jsx)(A.Z, {
                        maxUsers: 3,
                        users: u,
                        size: p.EFr.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: s
                    }),
                    (0, r.jsx)(p.LZC, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, r.jsx)(p.X6q, {
                        variant: 'heading-sm/normal',
                        className: o()(ed.popoutUsernames, ed.popoutTextSecondary),
                        children: eu.intl.format(n, {
                            user0: q.ZP.getName(l, null == t ? void 0 : t.id, E[0]),
                            user1: q.ZP.getName(l, null == t ? void 0 : t.id, E[1]),
                            countOthers: _,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    p.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: o()(ed.popoutUsername, ed.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    J.Z,
                                    {
                                        textClassName: o()(ed.popoutUsername, ed.popoutTextPrimary),
                                        text: e,
                                        user: E[0],
                                        channel: t,
                                        onPopoutClosed: s
                                    },
                                    n
                                ),
                            name1Hook: (e, n) =>
                                (0, r.jsx)(
                                    J.Z,
                                    {
                                        textClassName: o()(ed.popoutUsername, ed.popoutTextPrimary),
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
            g && (0, r.jsx)(I.ZP, { size: I.ZP.Sizes.SMALL }),
            null != h &&
                (0, r.jsx)(eo.Z, {
                    user: h,
                    channel: t,
                    guildId: l,
                    entry: i,
                    disableGameProfileLinks: a
                })
        ]
    });
}
function eT(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(p.P3F, {
              className: ed.maybeClickable,
              onClick: n,
              children: t
          });
}
function eS(e) {
    var t,
        { title: n, subtitle: i, badges: a, children: s, onClickThumbnail: l, onClickTitle: c, onClickSubtitle: u, headerIcons: d, disableGameProfileLinks: _ = !1, showCoverImage: h = !0, onUserPopoutClosed: m, trackRankingItemInteraction: g } = e,
        E = em(e, ['title', 'subtitle', 'badges', 'children', 'onClickThumbnail', 'onClickTitle', 'onClickSubtitle', 'headerIcons', 'disableGameProfileLinks', 'showCoverImage', 'onUserPopoutClosed', 'trackRankingItemInteraction']);
    let { entry: b } = E,
        y = (0, Q.dX)(b),
        O = y ? (null == (t = b.extra) ? void 0 : t.application_id) : void 0,
        v = (0, C.u)(O),
        I = (0, P.Z)(
            {
                location: 'ContentPopout',
                applicationId: _ ? void 0 : O,
                source: R.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: b.author_id
            },
            { onOpened: () => (null == g ? void 0 : g(el.xP.OPENED_GAME_PROFILE)) }
        ),
        { largeImage: T, smallImage: S } = (0, X.rv)({
            entry: b,
            showCoverImage: h
        }),
        A = y ? I : void 0;
    return (0, r.jsxs)('div', {
        className: ed.popoutContentWrapper,
        children: [
            (0, r.jsx)(eI, eh(e_({ disableGameProfileLinks: _ }, E), { onUserPopoutClosed: m })),
            (0, r.jsxs)(eb, {
                backgroundImgSrc: null == T ? void 0 : T.src,
                children: [
                    (0, r.jsxs)('div', {
                        className: ed.popoutHeroInner,
                        children: [
                            (0, r.jsx)('div', {
                                className: ed.popoutThumbnailContainer,
                                children: (0, r.jsx)($.E, {
                                    image: T,
                                    smallImage: S,
                                    aspectRatio: h ? 'none' : void 0,
                                    onClick: null != l ? l : A,
                                    size: $.J.SIZE_72
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: ed.popoutHeroBody,
                                children: [
                                    (0, r.jsx)(eT, {
                                        onClick: null != c ? c : A,
                                        children: (0, r.jsx)(p.X6q, {
                                            variant: 'heading-md/medium',
                                            className: o()(ed.popoutHeroTextPrimary, { [ed.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != i
                                        ? (0, r.jsx)(eT, {
                                              onClick: null != u ? u : A,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ed.popoutHeroTextSecondary,
                                                  children: i
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(p.LZC, { size: 8 }),
                                    a
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: ed.popoutHeaderIcons,
                                children: d
                            })
                        ]
                    }),
                    null != v
                        ? (0, r.jsx)(f.z, {
                              icon: v.icon,
                              text: eu.intl.string(v.labelKey),
                              variant: 'secondary',
                              onClick: v.openLink,
                              fullWidth: !0
                          })
                        : null,
                    s
                ]
            })
        ]
    });
}
function eA(e) {
    var t,
        { title: n, subtitle: a, badges: o, stream: s, onClickThumbnail: l, onClickTitle: u, onClickSubtitle: d, onUserPopoutClosed: _, trackRankingItemInteraction: h } = e,
        m = em(e, ['title', 'subtitle', 'badges', 'stream', 'onClickThumbnail', 'onClickTitle', 'onClickSubtitle', 'onUserPopoutClosed', 'trackRankingItemInteraction']);
    let b = (0, c.e7)([G.Z], () => G.Z.getChannel(null == s ? void 0 : s.channelId)),
        [y] = i.useMemo(() => (0, w.p9)(b, Y.Z, B.Z, V.Z, N.Z), [b]),
        { entry: O } = m,
        v = (0, Q.dX)(O),
        I = v ? (null == (t = O.extra) ? void 0 : t.application_id) : void 0,
        T = (0, C.u)(I),
        S = (0, P.Z)(
            {
                location: 'ContentPopout',
                applicationId: I,
                source: R.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: O.author_id
            },
            { onOpened: () => (null == h ? void 0 : h(el.xP.OPENED_GAME_PROFILE)) }
        ),
        A = v ? S : void 0,
        { activity: L, activityApplication: x, fallbackApplication: k } = (0, et.Z)(O),
        { largeImage: M, smallImage: j } = (0, X.YC)(L, null != x ? x : k),
        { largeImage: U } = (0, X.rv)({ entry: O });
    return (0, r.jsxs)('div', {
        className: ed.popoutContentWrapper,
        children: [
            (0, r.jsx)(eI, eh(e_({}, m), { onUserPopoutClosed: _ })),
            (0, r.jsxs)(eb, {
                backgroundImgSrc: null == U ? void 0 : U.src,
                className: ed.streamingPopoutHero,
                children: [
                    (0, r.jsx)(eT, {
                        onClick: y
                            ? () => {
                                  (g.default.selectVoiceChannel(s.channelId), (0, E.iV)(s));
                              }
                            : void 0,
                        children: (0, r.jsxs)('div', {
                            className: ed.streamingPopoutPreviewContainer,
                            children: [
                                (0, r.jsx)(D.Z, {
                                    className: ed.streamingPopoutImg,
                                    stream: s
                                }),
                                y &&
                                    (0, r.jsx)('div', {
                                        className: ed.streamCTA,
                                        children: (0, r.jsx)(p.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: eu.intl.string(eu.t['7Xq/nZ'])
                                        })
                                    })
                            ]
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: ed.streamingPopoutHeader,
                        children: [
                            null != M &&
                                (0, r.jsx)('div', {
                                    className: ed.popoutThumbnailContainer,
                                    children: (0, r.jsx)($.E, {
                                        image: M,
                                        smallImage: j,
                                        onClick: null != l ? l : A,
                                        size: $.J.SIZE_72
                                    })
                                }),
                            (0, r.jsxs)('div', {
                                className: ed.streamingPopoutHeaderText,
                                children: [
                                    (0, r.jsx)(eT, {
                                        onClick: null != u ? u : A,
                                        children: (0, r.jsx)(p.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: ed.popoutTextPrimary,
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, r.jsx)(eT, {
                                              onClick: null != d ? d : A,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ed.popoutTextSecondary,
                                                  children: a
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(p.LZC, { size: 8 }),
                                    o
                                ]
                            })
                        ]
                    }),
                    null != T
                        ? (0, r.jsx)(f.z, {
                              icon: T.icon,
                              text: eu.intl.string(T.labelKey),
                              variant: 'secondary',
                              onClick: T.openLink,
                              fullWidth: !0
                          })
                        : null
                ]
            })
        ]
    });
}
function eN(e) {
    var { IconComponent: t, children: n, className: i } = e,
        a = em(e, ['IconComponent', 'children', 'className']);
    return (0, r.jsxs)(
        _.zx,
        eh(e_({}, a), {
            className: o()(i, ed.primaryButton),
            innerClassName: null != t ? ed.iconButton : void 0,
            size: _.zx.Sizes.MEDIUM,
            children: [
                null != t
                    ? (0, r.jsx)(t, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, r.jsx)(p.Text, {
                    variant: 'text-md/semibold',
                    color: 'always-white',
                    children: n
                })
            ]
        })
    );
}
function eC(e) {
    let t = (0, c.e7)([B.Z], () => B.Z.getGuild((0, y.j)(null == e ? void 0 : e.location))),
        n = (0, c.e7)([G.Z], () => G.Z.getChannel((0, y.p)(null == e ? void 0 : e.location))),
        i = (0, c.Wu)([H.default], () => {
            var t, n;
            return null != (n = null == e || null == (t = e.participants) ? void 0 : t.map((e) => H.default.getUser(e.userId))) ? n : [];
        });
    return null != e && null != t && null != n && U.sR.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: ed.voiceChannelPopoutReactorHeader,
                      children: [
                          (0, r.jsxs)(p.P3F, {
                              'aria-label': eu.intl.string(eu.t['W/A4Qk']),
                              onClick: () => (0, k.Kh)(n.id),
                              className: ed.voiceChannelPopoutReactorChannel,
                              children: [
                                  (0, r.jsx)(L.Z, {
                                      guild: t,
                                      size: L.Z.Sizes.SMOL,
                                      className: ed.voiceChannelGuildIcon,
                                      active: !0
                                  }),
                                  (0, r.jsx)(p.Fbu, {
                                      size: 'xxs',
                                      color: d.Z.colors.INTERACTIVE_NORMAL
                                  }),
                                  (0, r.jsx)(p.VL1, {
                                      size: 'xs',
                                      color: d.Z.colors.TEXT_DEFAULT
                                  }),
                                  (0, r.jsx)(p.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'text-default',
                                      className: ed.voiceChannelName,
                                      children: null == n ? void 0 : n.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(j.Z, {
                              guildId: t.id,
                              users: i,
                              max: 3,
                              renderUser: (e, n) =>
                                  (0, r.jsx)(p.qEK, {
                                      src: e.getAvatarURL(t.id, 16),
                                      size: p.EFr.SIZE_16,
                                      'aria-label': 'avatar',
                                      className: n
                                  }),
                              renderMoreUsers: (e) =>
                                  (0, r.jsx)('div', {
                                      className: ed.voiceChannelAdditionalParticipants,
                                      children: (0, r.jsx)(p.Text, {
                                          variant: 'text-xxs/semibold',
                                          color: 'text-default',
                                          children: e
                                      })
                                  })
                          })
                      ]
                  }),
                  (0, r.jsx)(p.LZC, { size: 16 })
              ]
          })
        : null;
}
function eR(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: o, channel: s } = (0, er.Z)(n),
        { needSubscriptionToAccess: l } = (0, x.Z)(null == t ? void 0 : t.id),
        u = (0, c.e7)([B.Z], () => (null != s ? B.Z.getGuild(s.guild_id) : void 0)),
        f = (0, c.Wu)([W.ZP], () => (null != s ? W.ZP.getVoiceStatesForChannel(s) : []), [s]),
        h = (0, c.e7)([Y.Z], () => Y.Z.isInChannel(null == s ? void 0 : s.id)),
        g = i.useMemo(() => {
            for (let e of f) {
                let t = G.Z.getDMFromUserId(e.user.id),
                    n = null != t && Z.ZP.isChannelMuted(null, t),
                    r = F.Z.isBlockedOrIgnored(e.user.id);
                if (n || r) return !0;
            }
            return !1;
        }, [f]);
    if (null == s || null == u)
        return {
            voiceBar: void 0,
            joinVoiceButton: void 0
        };
    let E = null != o,
        b = () => {
            (m.Z.updateChatOpen(s.id, !0), (0, k.Kh)(s.id), null == a || a(s));
        },
        y = () => {
            v.Z.handleVoiceConnect({
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
                                  (0, r.jsx)(p.aNP, {
                                      size: 'custom',
                                      width: 13,
                                      height: 13,
                                      className: ed.popoutBlockedWarningIcon
                                  }),
                              eu.intl.string(eu.t.d6DpXF)
                          ]
                      })
                    : n;
            return (0, r.jsx)(
                p.ua7,
                {
                    'aria-label': i ? eu.intl.string(eu.t.d6DpXF) : null != n && n,
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
                    className: ed.voiceChannelPopoutReactorHeader,
                    children: [
                        (0, r.jsx)(O, {
                            text: eu.intl.string(eu.t.WIVYqK),
                            hasRestrictedOrMutedVCParticipant: g,
                            children: (e) =>
                                (0, r.jsxs)(
                                    p.P3F,
                                    eh(e_({}, e), {
                                        'aria-label': eu.intl.string(eu.t.WIVYqK),
                                        onClick: b,
                                        className: ed.voiceChannelPopoutReactorChannel,
                                        children: [
                                            (0, r.jsx)(L.Z, {
                                                guild: u,
                                                size: L.Z.Sizes.SMOL,
                                                className: ed.voiceChannelGuildIcon,
                                                active: !0
                                            }),
                                            (0, r.jsx)(p.Fbu, {
                                                size: 'xxs',
                                                color: d.Z.colors.INTERACTIVE_NORMAL
                                            }),
                                            (0, r.jsx)(p.gj8, {
                                                size: 'xs',
                                                color: d.Z.colors.TEXT_DEFAULT
                                            }),
                                            (0, r.jsx)(p.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'text-default',
                                                className: ed.voiceChannelName,
                                                children: s.name
                                            })
                                        ]
                                    })
                                )
                        }),
                        (0, r.jsx)(j.Z, {
                            guildId: u.id,
                            users: f,
                            max: 3,
                            renderUser: (e, t) =>
                                (0, r.jsx)(p.qEK, {
                                    src: e.user.getAvatarURL(u.id, 16),
                                    size: p.EFr.SIZE_16,
                                    'aria-label': 'avatar',
                                    className: t
                                }),
                            renderMoreUsers: (e) =>
                                (0, r.jsx)('div', {
                                    className: ed.voiceChannelAdditionalParticipants,
                                    children: (0, r.jsx)(p.Text, {
                                        variant: 'text-xxs/semibold',
                                        color: 'text-default',
                                        children: e
                                    })
                                })
                        })
                    ]
                }),
                (0, r.jsx)(p.LZC, { size: 16 })
            ]
        }),
        joinVoiceButton: h
            ? null
            : (0, r.jsx)(O, {
                  hasRestrictedOrMutedVCParticipant: g,
                  children: (e) =>
                      (0, r.jsx)(
                          eN,
                          eh(e_({}, e), {
                              color: _.zx.Colors.GREEN,
                              onClick: y,
                              IconComponent: E ? p.pzj : p.gj8,
                              children: E ? eu.intl.string(eu.t['I6JG4+']) : eu.intl.string(eu.t.VJlc0d)
                          })
                      )
              })
    };
}

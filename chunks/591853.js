(n.d(t, {
    Ll: () => eC,
    St: () => eO,
    WT: () => ev,
    jL: () => eN,
    wG: () => eA,
    yR: () => eb
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
    V = n(430824),
    F = n(496675),
    Z = n(699516),
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
    ea = n(206295),
    eo = n(111386),
    es = n(896449),
    el = n(469153),
    ec = n(206583),
    eu = n(981631),
    ed = n(388032),
    ef = n(610220);
function e_(e, t, n) {
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
function ep(e) {
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
                e_(e, t, n[t]);
            }));
    }
    return e;
}
function eh(e, t) {
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
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function eE(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function eb(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: ef.popout,
        children: t
    });
}
function ey(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: s, secondaryColor: l } = (0, ea.Z)(n);
    return (
        null != n && (a.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(l, ')')),
        (0, r.jsx)(p.f6W, {
            theme: eu.BRd.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsx)('div', {
                    className: o()(ef.hero, e, i),
                    style: a,
                    children: t
                })
        })
    );
}
function eO(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: ef.interactionsContainer,
        children: t
    });
}
function ev(e) {
    let { channel: t, user: n, onReaction: a, entry: o, buttons: s = [], header: f, onVoiceChannelPreview: m } = e,
        [g, E] = i.useState(!1),
        [b, y] = i.useState(null),
        O = (0, c.e7)([F.Z], () => null != t && eu.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && F.Z.can(eu.Plq.SEND_MESSAGES, t)),
        [I, T] = i.useState(!1),
        [A, N] = i.useState(!1),
        { voiceBar: C, joinVoiceButton: R } = eP({
            channel: t,
            entry: o,
            onVoiceChannelPreview: m
        }),
        { embeddedActivity: P } = (0, en.Z)(o),
        w = eR(P),
        D = null != R && 0 === s.length ? [R] : s,
        L = D.length > 0,
        x = D.length >= 2,
        [M, k] = i.useState(!L),
        j = X.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        U = null != t && g ? ed.intl.formatToPlainString(ed.t['8lzR/f'], { channel: '#'.concat(t.name) }) : ed.intl.formatToPlainString(ed.t['4c+CAw'], { channel: '@'.concat(j) }),
        G = g ? ed.intl.string(ed.t.Z2CUgo) : ed.intl.string(ed.t.XLGiTE),
        V = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (z.default.track(eu.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: ec.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, S.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    T(!0),
                    N(!1),
                    g)
                )
                    (l()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (r = t));
                else {
                    var o;
                    let e = await h.Z.getOrEnsurePrivateChannel(n.id);
                    r = null != (o = B.Z.getChannel(e)) ? o : null;
                }
                return (
                    l()(null != r, 'Send channel must be defined'),
                    H({
                        reply: ':'.concat(i.name, ':'),
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            (N(!0),
                                setTimeout(() => {
                                    (T(!1), a(e, t));
                                }, 600));
                        },
                        interactionType: ec.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1
                    })
                );
            }
        },
        Z = async (e) => {
            let r;
            if (((0, S.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g)) (l()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (r = t));
            else {
                let e = await h.Z.openPrivateChannel({ recipientIds: n.id }),
                    t = B.Z.getChannel(e);
                (l()(null != t, 'DM channel must be defined'), (r = t));
            }
            let i = r.type === eu.d4z.DM ? ec.xP.DM_REACTION_MESSAGE_SENT : ec.xP.CHANNEL_REACTION_MESSAGE_SENT;
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
                await (0, et.p)({
                    channel: n,
                    content: t,
                    entry: o,
                    whenReady: a
                }),
                null == r || r(i, n));
        },
        Y = null != f ? f : null != C ? C : null != w ? w : void 0,
        W = () => {
            (E((e) => !e), M && (null == b || b.focus()));
        },
        K = (e) => {
            (k(e), e && (null == b || b.focus()));
        };
    return (0, r.jsxs)('div', {
        style: { pointerEvents: I ? 'none' : 'all' },
        children: [
            (0, r.jsx)(el.Z, {
                sent: A,
                shown: I,
                className: ef.toastContainer
            }),
            null != Y
                ? Y
                : (0, r.jsx)(eo.Z, {
                      children: (0, r.jsxs)('div', {
                          className: ef.emojiHotrailShareToChannel,
                          children: [
                              (0, r.jsx)(eI, {
                                  channel: t,
                                  onClickSuggestion: V
                              }),
                              (0, r.jsx)(v.dE, { onSelectEmoji: V })
                          ]
                      })
                  }),
            (0, r.jsxs)('div', {
                className: M ? ef.inputContainerShareToChannel : ef.hiddenButRenderedInputField,
                children: [
                    (0, r.jsx)(v.A7, {
                        placeholder: U,
                        onEnter: Z,
                        setEditorRef: (e) => y(e),
                        channel: g ? t : void 0,
                        showEmojiButton: null != Y,
                        className: ef.replyInput,
                        autoFocus: !1,
                        renderAttachButton: O
                            ? () =>
                                  (0, r.jsx)(p.ua7, {
                                      text: G,
                                      children: (e) =>
                                          (0, r.jsx)(
                                              p.P3F,
                                              em(ep({}, e), {
                                                  className: ef.shareToChannelButton,
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
                            onClick: () => K(!1),
                            className: ef.primaryActionPopoutMessageCloseIcon,
                            children: (0, r.jsx)(p.Dio, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                color: d.Z.colors.ICON_PRIMARY
                            })
                        })
                ]
            }),
            !1 === M &&
                (0, r.jsxs)('div', {
                    className: ef.primaryActionPopoutActionButtons,
                    children: [
                        (0, r.jsx)(
                            _.zx,
                            {
                                className: ef.secondaryButton,
                                color: _.zx.Colors.PRIMARY,
                                look: _.zx.Looks.FILLED,
                                onClick: () => K(!0),
                                innerClassName: ef.iconButton,
                                size: x ? _.zx.Sizes.MIN : _.zx.Sizes.MEDIUM,
                                children:
                                    !x &&
                                    (0, r.jsx)(p.Text, {
                                        variant: 'text-md/semibold',
                                        children: ed.intl.string(ed.t.OAJQlJ)
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
let eI = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, o] = i.useState(!1);
    i.useEffect(() => {
        o(!0);
    }, []);
    let s = !!b.Z.keyboardModeEnabled && !a,
        l = (0, A.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url
                      }
                    : {
                          emoji: e,
                          url: (0, q.gT)({
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
                              text: ed.intl.formatToPlainString(ed.t.kilW3t, { emojiName: t.name }),
                              position: 'top',
                              'aria-label': ed.intl.formatToPlainString(ed.t.kilW3t, { emojiName: t.name }),
                              color: p.ua7.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, r.jsx)(j.u, {
                                  emoji: t,
                                  isDisabled: !a,
                                  onClick: () => n({ emoji: t }),
                                  className: ef.emoji
                              })
                          })
                      },
                      t.name
                  )
                : null;
        })
    });
};
function eT(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: a, onUserPopoutClosed: s } = e,
        l = null == t ? void 0 : t.guild_id,
        { displayParticipants: u, participant1: d, participant2: f, numOtherParticipants: _ } = (0, er.Z)(i, 3),
        h = (0, c.e7)([Y.default], () => Y.default.getUser(i.author_id)),
        { streamPreviewUrl: m } = (0, ei.Z)(i),
        g = null != m,
        E = [d, f];
    return (0, r.jsxs)('div', {
        className: ef.popoutContentHeader,
        children: [
            (0, r.jsxs)('div', {
                className: ef.popoutUserContainer,
                children: [
                    (0, r.jsx)(N.Z, {
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
                        className: o()(ef.popoutUsernames, ef.popoutTextSecondary),
                        children: ed.intl.format(n, {
                            user0: X.ZP.getName(l, null == t ? void 0 : t.id, E[0]),
                            user1: X.ZP.getName(l, null == t ? void 0 : t.id, E[1]),
                            countOthers: _,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    p.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: o()(ef.popoutUsername, ef.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    $.Z,
                                    {
                                        textClassName: o()(ef.popoutUsername, ef.popoutTextPrimary),
                                        text: e,
                                        user: E[0],
                                        channel: t,
                                        onPopoutClosed: s
                                    },
                                    n
                                ),
                            name1Hook: (e, n) =>
                                (0, r.jsx)(
                                    $.Z,
                                    {
                                        textClassName: o()(ef.popoutUsername, ef.popoutTextPrimary),
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
            g && (0, r.jsx)(T.ZP, { size: T.ZP.Sizes.SMALL }),
            null != h &&
                (0, r.jsx)(es.Z, {
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
        : (0, r.jsx)(p.P3F, {
              className: ef.maybeClickable,
              onClick: n,
              children: t
          });
}
function eA(e) {
    var t,
        { title: n, subtitle: i, badges: a, children: s, onClickThumbnail: l, onClickTitle: c, onClickSubtitle: u, headerIcons: d, disableGameProfileLinks: _ = !1, showCoverImage: h = !0, onUserPopoutClosed: m, trackRankingItemInteraction: g } = e,
        E = eg(e, ['title', 'subtitle', 'badges', 'children', 'onClickThumbnail', 'onClickTitle', 'onClickSubtitle', 'headerIcons', 'disableGameProfileLinks', 'showCoverImage', 'onUserPopoutClosed', 'trackRankingItemInteraction']);
    let { entry: b } = E,
        y = (0, J.dX)(b),
        v = y ? (null == (t = b.extra) ? void 0 : t.application_id) : void 0,
        I = (0, R.u)(v, O.Z.MEMBER_LIST),
        T = (0, w.Z)(
            {
                location: 'ContentPopout',
                applicationId: _ ? void 0 : v,
                source: P.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: b.author_id
            },
            { onOpened: () => (null == g ? void 0 : g(ec.xP.OPENED_GAME_PROFILE)) }
        ),
        { largeImage: S, smallImage: A } = (0, Q.rv)({
            entry: b,
            showCoverImage: h
        }),
        N = y ? T : void 0;
    return (0, r.jsxs)('div', {
        className: ef.popoutContentWrapper,
        children: [
            (0, r.jsx)(eT, em(ep({ disableGameProfileLinks: _ }, E), { onUserPopoutClosed: m })),
            (0, r.jsxs)(ey, {
                backgroundImgSrc: null == S ? void 0 : S.src,
                children: [
                    (0, r.jsxs)('div', {
                        className: ef.popoutHeroInner,
                        children: [
                            (0, r.jsx)('div', {
                                className: ef.popoutThumbnailContainer,
                                children: (0, r.jsx)(ee.E, {
                                    image: S,
                                    smallImage: A,
                                    aspectRatio: h ? 'none' : void 0,
                                    onClick: null != l ? l : N,
                                    size: ee.J.SIZE_72
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: ef.popoutHeroBody,
                                children: [
                                    (0, r.jsx)(eS, {
                                        onClick: null != c ? c : N,
                                        children: (0, r.jsx)(p.X6q, {
                                            variant: 'heading-md/medium',
                                            className: o()(ef.popoutHeroTextPrimary, { [ef.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != i
                                        ? (0, r.jsx)(eS, {
                                              onClick: null != u ? u : N,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ef.popoutHeroTextSecondary,
                                                  children: i
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(p.LZC, { size: 8 }),
                                    a
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: ef.popoutHeaderIcons,
                                children: d
                            })
                        ]
                    }),
                    null != I
                        ? (0, r.jsx)(f.z, {
                              icon: I.icon,
                              text: ed.intl.string(I.labelKey),
                              variant: 'secondary',
                              onClick: I.openLink,
                              fullWidth: !0
                          })
                        : null,
                    s
                ]
            })
        ]
    });
}
function eN(e) {
    var t,
        { title: n, subtitle: a, badges: o, stream: s, onClickThumbnail: l, onClickTitle: u, onClickSubtitle: d, onUserPopoutClosed: _, trackRankingItemInteraction: h } = e,
        m = eg(e, ['title', 'subtitle', 'badges', 'stream', 'onClickThumbnail', 'onClickTitle', 'onClickSubtitle', 'onUserPopoutClosed', 'trackRankingItemInteraction']);
    let b = (0, c.e7)([B.Z], () => B.Z.getChannel(null == s ? void 0 : s.channelId)),
        [y] = i.useMemo(() => (0, D.p9)(b, W.Z, V.Z, F.Z, C.Z), [b]),
        { entry: v } = m,
        I = (0, J.dX)(v),
        T = I ? (null == (t = v.extra) ? void 0 : t.application_id) : void 0,
        S = (0, R.u)(T, O.Z.MEMBER_LIST),
        A = (0, w.Z)(
            {
                location: 'ContentPopout',
                applicationId: T,
                source: P.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: v.author_id
            },
            { onOpened: () => (null == h ? void 0 : h(ec.xP.OPENED_GAME_PROFILE)) }
        ),
        N = I ? A : void 0,
        { activity: x, activityApplication: M, fallbackApplication: k } = (0, en.Z)(v),
        { largeImage: j, smallImage: U } = (0, Q.YC)(x, null != M ? M : k),
        { largeImage: G } = (0, Q.rv)({ entry: v });
    return (0, r.jsxs)('div', {
        className: ef.popoutContentWrapper,
        children: [
            (0, r.jsx)(eT, em(ep({}, m), { onUserPopoutClosed: _ })),
            (0, r.jsxs)(ey, {
                backgroundImgSrc: null == G ? void 0 : G.src,
                className: ef.streamingPopoutHero,
                children: [
                    (0, r.jsx)(eS, {
                        onClick: y
                            ? () => {
                                  (g.default.selectVoiceChannel(s.channelId), (0, E.iV)(s));
                              }
                            : void 0,
                        children: (0, r.jsxs)('div', {
                            className: ef.streamingPopoutPreviewContainer,
                            children: [
                                (0, r.jsx)(L.Z, {
                                    className: ef.streamingPopoutImg,
                                    stream: s
                                }),
                                y &&
                                    (0, r.jsx)('div', {
                                        className: ef.streamCTA,
                                        children: (0, r.jsx)(p.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: ed.intl.string(ed.t['7Xq/nZ'])
                                        })
                                    })
                            ]
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: ef.streamingPopoutHeader,
                        children: [
                            null != j &&
                                (0, r.jsx)('div', {
                                    className: ef.popoutThumbnailContainer,
                                    children: (0, r.jsx)(ee.E, {
                                        image: j,
                                        smallImage: U,
                                        onClick: null != l ? l : N,
                                        size: ee.J.SIZE_72
                                    })
                                }),
                            (0, r.jsxs)('div', {
                                className: ef.streamingPopoutHeaderText,
                                children: [
                                    (0, r.jsx)(eS, {
                                        onClick: null != u ? u : N,
                                        children: (0, r.jsx)(p.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: ef.popoutTextPrimary,
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, r.jsx)(eS, {
                                              onClick: null != d ? d : N,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ef.popoutTextSecondary,
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
                    null != S
                        ? (0, r.jsx)(f.z, {
                              icon: S.icon,
                              text: ed.intl.string(S.labelKey),
                              variant: 'secondary',
                              onClick: S.openLink,
                              fullWidth: !0
                          })
                        : null
                ]
            })
        ]
    });
}
function eC(e) {
    var { IconComponent: t, children: n, className: i } = e,
        a = eg(e, ['IconComponent', 'children', 'className']);
    return (0, r.jsxs)(
        _.zx,
        em(ep({}, a), {
            className: o()(i, ef.primaryButton),
            innerClassName: null != t ? ef.iconButton : void 0,
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
function eR(e) {
    let t = (0, c.e7)([V.Z], () => V.Z.getGuild((0, y.j)(null == e ? void 0 : e.location))),
        n = (0, c.e7)([B.Z], () => B.Z.getChannel((0, y.p)(null == e ? void 0 : e.location))),
        i = (0, c.Wu)([Y.default], () => {
            var t, n;
            return null != (n = null == e || null == (t = e.participants) ? void 0 : t.map((e) => Y.default.getUser(e.userId))) ? n : [];
        });
    return null != e && null != t && null != n && G.sR.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: ef.voiceChannelPopoutReactorHeader,
                      children: [
                          (0, r.jsxs)(p.P3F, {
                              'aria-label': ed.intl.string(ed.t['W/A4Qk']),
                              onClick: () => (0, k.Kh)(n.id),
                              className: ef.voiceChannelPopoutReactorChannel,
                              children: [
                                  (0, r.jsx)(x.Z, {
                                      guild: t,
                                      size: x.Z.Sizes.SMOL,
                                      className: ef.voiceChannelGuildIcon,
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
                                      className: ef.voiceChannelName,
                                      children: null == n ? void 0 : n.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(U.Z, {
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
                                      className: ef.voiceChannelAdditionalParticipants,
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
function eP(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: o, channel: s } = (0, ei.Z)(n),
        { needSubscriptionToAccess: l } = (0, M.Z)(null == t ? void 0 : t.id),
        u = (0, c.e7)([V.Z], () => (null != s ? V.Z.getGuild(s.guild_id) : void 0)),
        f = (0, c.Wu)([K.ZP], () => (null != s ? K.ZP.getVoiceStatesForChannel(s) : []), [s]),
        h = (0, c.e7)([W.Z], () => W.Z.isInChannel(null == s ? void 0 : s.id)),
        g = i.useMemo(() => {
            for (let e of f) {
                let t = B.Z.getDMFromUserId(e.user.id),
                    n = null != t && H.ZP.isChannelMuted(null, t),
                    r = Z.Z.isBlockedOrIgnored(e.user.id);
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
            I.Z.handleVoiceConnect({
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
                                      className: ef.popoutBlockedWarningIcon
                                  }),
                              ed.intl.string(ed.t.d6DpXF)
                          ]
                      })
                    : n;
            return (0, r.jsx)(
                p.ua7,
                {
                    'aria-label': i ? ed.intl.string(ed.t.d6DpXF) : null != n && n,
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
                    className: ef.voiceChannelPopoutReactorHeader,
                    children: [
                        (0, r.jsx)(O, {
                            text: ed.intl.string(ed.t.WIVYqK),
                            hasRestrictedOrMutedVCParticipant: g,
                            children: (e) =>
                                (0, r.jsxs)(
                                    p.P3F,
                                    em(ep({}, e), {
                                        'aria-label': ed.intl.string(ed.t.WIVYqK),
                                        onClick: b,
                                        className: ef.voiceChannelPopoutReactorChannel,
                                        children: [
                                            (0, r.jsx)(x.Z, {
                                                guild: u,
                                                size: x.Z.Sizes.SMOL,
                                                className: ef.voiceChannelGuildIcon,
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
                                                className: ef.voiceChannelName,
                                                children: s.name
                                            })
                                        ]
                                    })
                                )
                        }),
                        (0, r.jsx)(U.Z, {
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
                                    className: ef.voiceChannelAdditionalParticipants,
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
                          eC,
                          em(ep({}, e), {
                              color: _.zx.Colors.GREEN,
                              onClick: y,
                              IconComponent: E ? p.pzj : p.gj8,
                              children: E ? ed.intl.string(ed.t['I6JG4+']) : ed.intl.string(ed.t.VJlc0d)
                          })
                      )
              })
    };
}

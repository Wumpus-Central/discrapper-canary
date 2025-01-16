n.d(t, {
    Ll: function () {
        return ej;
    },
    St: function () {
        return eh;
    },
    WT: function () {
        return ep;
    },
    jL: function () {
        return eI;
    },
    wG: function () {
        return ef;
    },
    yR: function () {
        return ed;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    o = n(512722),
    s = n.n(o);
n(995295);
var u = n(442837),
    c = n(704215),
    d = n(692547),
    m = n(481060),
    x = n(493683),
    h = n(475179),
    p = n(287734),
    C = n(872810),
    v = n(607070),
    g = n(16609),
    f = n(220779),
    I = n(201133),
    j = n(557135),
    Z = n(194082),
    P = n(605236),
    L = n(543241),
    N = n(318374),
    T = n(258609),
    y = n(810568),
    _ = n(168524),
    A = n(102172),
    E = n(871118),
    S = n(565138),
    R = n(66999),
    M = n(790642),
    k = n(359110),
    w = n(12168),
    O = n(237583),
    b = n(131704),
    H = n(592125),
    V = n(430824),
    B = n(496675),
    D = n(699516),
    U = n(9156),
    G = n(594174),
    z = n(979651),
    Y = n(938475),
    W = n(626135),
    q = n(768581),
    F = n(5192),
    J = n(379357),
    X = n(26033),
    K = n(91907),
    $ = n(358696),
    Q = n(656709),
    ee = n(593294),
    et = n(192918),
    en = n(22211),
    el = n(206295),
    ea = n(111386),
    ei = n(896449),
    er = n(469153),
    eo = n(206583),
    es = n(981631),
    eu = n(388032),
    ec = n(179546);
function ed(e) {
    let { children: t } = e,
        n = a.useRef(null);
    return (
        (0, m.useFocusLock)(n),
        (0, l.jsx)('div', {
            className: ec.popout,
            ref: n,
            children: t
        })
    );
}
function em(e) {
    let { children: t, backgroundImgSrc: n, className: a, style: i = {} } = e,
        { primaryColor: o, secondaryColor: s } = (0, el.Z)(n);
    return (
        null != n && (i.background = 'linear-gradient(45deg, '.concat(o, ', ').concat(s, ')')),
        (0, l.jsx)(m.ThemeProvider, {
            theme: es.BRd.DARK,
            children: (e) =>
                (0, l.jsx)('div', {
                    'data-disable-adaptive-theme': !0,
                    className: r()(ec.hero, e, a),
                    style: i,
                    children: t
                })
        })
    );
}
let ex = a.createContext(null);
function eh(e) {
    let { children: t } = e,
        n = a.useRef(null);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: ec.interactionsContainerHeader,
                ref: (e) => (n.current = e)
            }),
            (0, l.jsx)('div', {
                className: ec.interactionsContainer,
                children: (0, l.jsx)(ex.Provider, {
                    value: n.current,
                    children: t
                })
            })
        ]
    });
}
function ep(e) {
    let { channel: t, user: n, generateReactionImage: i, reactionImageAltText: r, onReaction: o, entry: p, buttons: C = [], header: v, onVoiceChannelPreview: Z } = e,
        [L, N] = a.useState(!1),
        [T, y] = a.useState(null),
        _ = (0, u.e7)([B.Z], () => null != t && es.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && B.Z.can(es.Plq.SEND_MESSAGES, t)),
        [A, E] = a.useState(!1),
        [w, q] = a.useState(!1),
        { voiceBar: J, joinVoiceButton: X } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: o } = (0, en.Z)(n),
                { needSubscriptionToAccess: s } = (0, R.Z)(null == t ? void 0 : t.id),
                c = (0, u.e7)([V.Z], () => (null != o ? V.Z.getGuild(o.guild_id) : void 0)),
                x = (0, u.Wu)([Y.ZP], () => (null != o ? Y.ZP.getVoiceStatesForChannel(o) : []), [o]),
                p = (0, u.e7)([z.Z], () => z.Z.isInChannel(null == o ? void 0 : o.id)),
                C = a.useMemo(() => {
                    for (let e of x) {
                        let t = H.Z.getDMFromUserId(e.user.id),
                            n = null != t && U.ZP.isChannelMuted(null, t),
                            l = D.Z.isBlockedOrIgnored(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [x]);
            if (null == o || null == c)
                return {
                    voiceBar: void 0,
                    joinVoiceButton: void 0
                };
            let v = null != r,
                g = () => {
                    h.Z.updateChatOpen(o.id, !0), (0, k.Kh)(o.id), null == i || i(o);
                },
                f = () => {
                    j.Z.handleVoiceConnect({
                        channel: o,
                        connected: p,
                        needSubscriptionToAccess: s,
                        routeDirectlyToChannel: !0
                    });
                },
                I = (e) => {
                    let { children: t, text: n, hasRestrictedOrMutedVCParticipant: a } = e,
                        i = a
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      a &&
                                          (0, l.jsx)(m.WarningIcon, {
                                              size: 'custom',
                                              width: 13,
                                              height: 13,
                                              className: ec.popoutBlockedWarningIcon
                                          }),
                                      eu.intl.string(eu.t.d6DpXF)
                                  ]
                              })
                            : n;
                    return (0, l.jsx)(
                        m.Tooltip,
                        {
                            'aria-label': a ? eu.intl.string(eu.t.d6DpXF) : null != n && n,
                            text: i,
                            shouldShow: !0,
                            children: t
                        },
                        'voice-preview'
                    );
                },
                Z = (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)('div', {
                            className: ec.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, l.jsx)(I, {
                                    text: eu.intl.string(eu.t.WIVYqK),
                                    hasRestrictedOrMutedVCParticipant: C,
                                    children: (e) =>
                                        (0, l.jsxs)(m.Clickable, {
                                            ...e,
                                            'aria-label': eu.intl.string(eu.t.WIVYqK),
                                            onClick: g,
                                            className: ec.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, l.jsx)(S.Z, {
                                                    guild: c,
                                                    size: S.Z.Sizes.SMOL,
                                                    className: ec.voiceChannelGuildIcon,
                                                    active: !0
                                                }),
                                                (0, l.jsx)(m.ChevronSmallRightIcon, {
                                                    size: 'xxs',
                                                    color: d.Z.colors.INTERACTIVE_NORMAL
                                                }),
                                                (0, l.jsx)(m.VoiceNormalIcon, {
                                                    size: 'xs',
                                                    color: d.Z.colors.TEXT_NORMAL
                                                }),
                                                (0, l.jsx)(m.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-normal',
                                                    className: ec.voiceChannelName,
                                                    children: o.name
                                                })
                                            ]
                                        })
                                }),
                                (0, l.jsx)(O.Z, {
                                    guildId: c.id,
                                    users: x,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(m.Avatar, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: m.AvatarSizes.SIZE_16,
                                            'aria-label': 'avatar',
                                            className: t
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)('div', {
                                            className: ec.voiceChannelAdditionalParticipants,
                                            children: (0, l.jsx)(m.Text, {
                                                variant: 'text-xxs/semibold',
                                                color: 'text-normal',
                                                children: e
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, l.jsx)('div', { className: ec.primaryActionPopoutDivider })
                    ]
                });
            return {
                voiceBar: Z,
                joinVoiceButton: p
                    ? null
                    : (0, l.jsx)(I, {
                          hasRestrictedOrMutedVCParticipant: C,
                          children: (e) =>
                              (0, l.jsx)(ej, {
                                  ...e,
                                  color: m.Button.Colors.GREEN,
                                  onClick: f,
                                  IconComponent: v ? m.ScreenIcon : m.VoiceNormalIcon,
                                  children: v ? eu.intl.string(eu.t['I6JG4+']) : eu.intl.string(eu.t.VJlc0d)
                              })
                      })
            };
        })({
            channel: t,
            entry: p,
            onVoiceChannelPreview: Z
        }),
        { embeddedActivity: K } = (0, ee.Z)(p),
        $ = (function (e) {
            let t = (0, u.e7)([V.Z], () => V.Z.getGuild((0, g.j)(null == e ? void 0 : e.location))),
                n = (0, u.e7)([H.Z], () => H.Z.getChannel((0, g.p)(null == e ? void 0 : e.location))),
                a = (0, u.Wu)([G.default], () => {
                    var t, n;
                    return null !== (n = null == e ? void 0 : null === (t = e.participants) || void 0 === t ? void 0 : t.map((e) => G.default.getUser(e.userId))) && void 0 !== n ? n : [];
                });
            return null != e && null != t && null != n && b.sR.has(n.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: ec.voiceChannelPopoutReactorHeader,
                              children: [
                                  (0, l.jsxs)(m.Clickable, {
                                      'aria-label': eu.intl.string(eu.t['W/A4Qk']),
                                      onClick: () => (0, k.Kh)(n.id),
                                      className: ec.voiceChannelPopoutReactorChannel,
                                      children: [
                                          (0, l.jsx)(S.Z, {
                                              guild: t,
                                              size: S.Z.Sizes.SMOL,
                                              className: ec.voiceChannelGuildIcon,
                                              active: !0
                                          }),
                                          (0, l.jsx)(m.ChevronSmallRightIcon, {
                                              size: 'xxs',
                                              color: d.Z.colors.INTERACTIVE_NORMAL
                                          }),
                                          (0, l.jsx)(m.TextIcon, {
                                              size: 'xs',
                                              color: d.Z.colors.TEXT_NORMAL
                                          }),
                                          (0, l.jsx)(m.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'text-normal',
                                              className: ec.voiceChannelName,
                                              children: null == n ? void 0 : n.name
                                          })
                                      ]
                                  }),
                                  (0, l.jsx)(O.Z, {
                                      guildId: t.id,
                                      users: a,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(m.Avatar, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: m.AvatarSizes.SIZE_16,
                                              'aria-label': 'avatar',
                                              className: n
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)('div', {
                                              className: ec.voiceChannelAdditionalParticipants,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-normal',
                                                  children: e
                                              })
                                          })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', { className: ec.primaryActionPopoutDivider })
                      ]
                  })
                : null;
        })(K),
        et = null != X && 0 === C.length ? [X] : C,
        el = et.length > 0,
        ei = et.length >= 2,
        [ed, em] = a.useState(!el),
        ex = F.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        eh = null != t && L ? eu.intl.formatToPlainString(eu.t['8lzR/f'], { channel: '#'.concat(t.name) }) : eu.intl.formatToPlainString(eu.t['4c+CAw'], { channel: '@'.concat(ex) }),
        ep = L ? eu.intl.string(eu.t.Z2CUgo) : eu.intl.string(eu.t.XLGiTE),
        ev = async (e) => {
            let l;
            if (null != e) {
                if (
                    (W.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: eo.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, P.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    E(!0),
                    q(!1),
                    L)
                )
                    s()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
                else {
                    var a;
                    let e = await x.Z.getOrEnsurePrivateChannel(n.id);
                    l = null !== (a = H.Z.getChannel(e)) && void 0 !== a ? a : null;
                }
                return (
                    s()(null != l, 'Send channel must be defined'),
                    ef({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: l,
                        onComplete: (e, t) => {
                            q(!0),
                                setTimeout(() => {
                                    E(!1), o(e, t);
                                }, 600);
                        },
                        interactionType: eo.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1
                    })
                );
            }
        },
        eg = async (e) => {
            let l;
            if (((0, P.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), L)) s()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
            else {
                let e = await x.Z.openPrivateChannel(n.id, !1, !1),
                    t = H.Z.getChannel(e);
                s()(null != t, 'DM channel must be defined'), (l = t);
            }
            let a = l.type === es.d4z.DM ? eo.xP.DM_REACTION_MESSAGE_SENT : eo.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return ef({
                reply: e,
                sendToChannel: l,
                interactionType: a,
                onComplete: o,
                requiresChannelReadiness: !0
            });
        },
        ef = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: l, interactionType: a, requiresChannelReadiness: o } = e;
            if ((null == T || T.focus(), (0, M.Io)('ContentPopout Reactor')))
                await (0, Q.p)({
                    channel: n,
                    content: t,
                    entry: p,
                    whenReady: o
                });
            else {
                var u;
                let e = await ((u = i),
                async function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    try {
                        return await u(...t);
                    } catch (e) {
                        throw e;
                    }
                })(n.id);
                s()(null != e, 'Reaction image must be defined'),
                    await (0, I.B)({
                        file: e,
                        channel: n,
                        altText: r,
                        reply: t
                    });
            }
            null == l || l(a, n);
        },
        eI = null != v ? v : null != J ? J : null != $ ? $ : void 0;
    return (
        a.useEffect(() => {
            ed && (null == T || T.focus());
        }, [T, L, ed]),
        (0, l.jsxs)('div', {
            style: { pointerEvents: A ? 'none' : 'all' },
            children: [
                (0, l.jsx)(er.Z, {
                    sent: w,
                    shown: A,
                    className: ec.toastContainer
                }),
                null != eI
                    ? eI
                    : (0, l.jsx)(ea.Z, {
                          children: (0, l.jsxs)('div', {
                              className: ec.emojiHotrailShareToChannel,
                              children: [
                                  (0, l.jsx)(eC, {
                                      channel: t,
                                      onClickSuggestion: ev
                                  }),
                                  (0, l.jsx)(f.dE, { onSelectEmoji: ev })
                              ]
                          })
                      }),
                (0, l.jsxs)('div', {
                    className: ed ? ec.inputContainerShareToChannel : ec.hiddenButRenderedInputField,
                    children: [
                        (0, l.jsx)(f.A7, {
                            placeholder: eh,
                            onEnter: eg,
                            setEditorRef: (e) => y(e),
                            channel: L ? t : void 0,
                            showEmojiButton: null != eI,
                            renderAttachButton: _
                                ? () =>
                                      (0, l.jsx)(m.Tooltip, {
                                          text: ep,
                                          children: (e) =>
                                              (0, l.jsx)(m.Clickable, {
                                                  ...e,
                                                  className: ec.shareToChannelButton,
                                                  onClick: () => N((e) => !e),
                                                  children: L
                                                      ? (0, l.jsx)(m.TextIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                                      : (0, l.jsx)(m.AtIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                              })
                                      })
                                : void 0
                        }),
                        el &&
                            (0, l.jsx)(m.Clickable, {
                                onClick: () => em(!1),
                                className: ec.primaryActionPopoutMessageCloseIcon,
                                children: (0, l.jsx)(m.XSmallIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    color: d.Z.colors.ICON_PRIMARY
                                })
                            })
                    ]
                }),
                !1 === ed &&
                    (0, l.jsxs)('div', {
                        className: ec.primaryActionPopoutActionButtons,
                        children: [
                            (0, l.jsxs)(
                                m.Button,
                                {
                                    className: ec.secondaryButton,
                                    color: m.Button.Colors.PRIMARY,
                                    look: m.Button.Looks.FILLED,
                                    onClick: () => em(!0),
                                    innerClassName: ec.iconButton,
                                    size: ei ? m.Button.Sizes.MIN : m.Button.Sizes.LARGE,
                                    children: [
                                        (0, l.jsx)(m.ChatIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20
                                        }),
                                        !ei &&
                                            (0, l.jsx)(m.Text, {
                                                variant: 'text-md/semibold',
                                                children: eu.intl.string(eu.t.OAJQlJ)
                                            })
                                    ]
                                },
                                'toggleMessageMode'
                            ),
                            et
                        ]
                    })
            ]
        })
    );
}
let eC = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = a.useState(!1);
    a.useEffect(() => {
        r(!0);
    }, []);
    let o = !!v.Z.keyboardModeEnabled && !i,
        s = (0, L.wC)(null == t ? void 0 : t.guild_id)
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
    return (0, l.jsx)(l.Fragment, {
        children: s.map((e) => {
            let { emoji: t, url: a } = e;
            return null != a
                ? (0, l.jsx)(
                      'div',
                      {
                          children: (0, l.jsx)(m.TooltipContainer, {
                              text: eu.intl.formatToPlainString(eu.t.kilW3t, { emojiName: t.name }),
                              position: 'top',
                              'aria-label': eu.intl.formatToPlainString(eu.t.kilW3t, { emojiName: t.name }),
                              color: m.Tooltip.Colors.PRIMARY,
                              shouldShow: !o && void 0,
                              children: (0, l.jsx)(w.u, {
                                  emoji: t,
                                  isDisabled: !i,
                                  onClick: () => n(t),
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
function ev(e) {
    let { channel: t, userDescription: n, entry: a, disableGameProfileLinks: i, onUserPopoutClosed: o } = e,
        s = null == t ? void 0 : t.guild_id,
        { displayParticipants: c, participant1: d, participant2: x, numOtherParticipants: h } = (0, et.Z)(a, 3),
        p = (0, u.e7)([G.default], () => G.default.getUser(a.author_id)),
        { streamPreviewUrl: C } = (0, en.Z)(a),
        v = [d, x];
    return (0, l.jsxs)('div', {
        className: ec.popoutContentHeader,
        children: [
            (0, l.jsxs)('div', {
                className: ec.popoutUserContainer,
                children: [
                    (0, l.jsx)(N.Z, {
                        maxUsers: 3,
                        users: c,
                        size: m.AvatarSizes.SIZE_24,
                        avatarClassName: ec.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutClosed: o
                    }),
                    (0, l.jsx)(m.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, l.jsx)(m.Heading, {
                        variant: 'heading-sm/normal',
                        className: ec.popoutTextSecondary,
                        children: eu.intl.format(n, {
                            user0: F.ZP.getName(s, null == t ? void 0 : t.id, v[0]),
                            user1: F.ZP.getName(s, null == t ? void 0 : t.id, v[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    m.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    K.Z,
                                    {
                                        textClassName: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        text: e,
                                        user: v[0],
                                        channel: t,
                                        onPopoutClosed: o
                                    },
                                    n
                                ),
                            name1Hook: (e, n) =>
                                (0, l.jsx)(
                                    K.Z,
                                    {
                                        textClassName: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        text: e,
                                        user: v[1],
                                        channel: t,
                                        onPopoutClosed: o
                                    },
                                    n
                                )
                        })
                    })
                ]
            }),
            null != C && (0, l.jsx)(Z.ZP, { size: Z.ZP.Sizes.SMALL }),
            null != p &&
                (0, l.jsx)(ei.Z, {
                    user: p,
                    channel: t,
                    guildId: s,
                    entry: a,
                    disableGameProfileLinks: i
                })
        ]
    });
}
function eg(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? (0, l.jsx)(l.Fragment, { children: t })
        : (0, l.jsx)(m.Clickable, {
              className: ec.maybeClickable,
              onClick: n,
              children: t
          });
}
function ef(e) {
    var t;
    let { title: n, subtitle: a, badges: i, children: o, onClickThumbnail: s, onClickTitle: u, onClickSubtitle: c, headerIcons: d, disableGameProfileLinks: x = !1, showCoverImage: h = !0, onUserPopoutClosed: p, trackRankingItemInteraction: C, ...v } = e,
        { entry: g } = v,
        f = (0, X.dX)(g),
        I = (0, _.Z)(
            {
                location: 'ContentPopout',
                applicationId: f && !x ? (null === (t = g.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: y.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: g.author_id
            },
            { onOpened: () => (null == C ? void 0 : C(eo.xP.OPENED_GAME_PROFILE)) }
        ),
        { largeImage: j, smallImage: Z } = (0, J.rv)({
            entry: g,
            showCoverImage: h
        }),
        P = f ? I : void 0;
    return (0, l.jsxs)('div', {
        className: ec.popoutContentWrapper,
        children: [
            (0, l.jsx)(ev, {
                disableGameProfileLinks: x,
                ...v,
                onUserPopoutClosed: p
            }),
            (0, l.jsxs)(em, {
                backgroundImgSrc: null == j ? void 0 : j.src,
                children: [
                    (0, l.jsxs)('div', {
                        className: ec.popoutHeroInner,
                        children: [
                            (0, l.jsx)('div', {
                                className: ec.popoutThumbnailContainer,
                                children: (0, l.jsx)($.E, {
                                    image: j,
                                    smallImage: Z,
                                    aspectRatio: h ? 'none' : void 0,
                                    onClick: null != s ? s : P,
                                    size: $.J.SIZE_72
                                })
                            }),
                            (0, l.jsxs)('div', {
                                className: ec.popoutHeroBody,
                                children: [
                                    (0, l.jsx)(eg, {
                                        onClick: null != u ? u : P,
                                        children: (0, l.jsx)(m.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(ec.popoutHeroTextPrimary, { [ec.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, l.jsx)(eg, {
                                              onClick: null != c ? c : P,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ec.popoutHeroTextSecondary,
                                                  children: a
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(m.Spacer, { size: 8 }),
                                    i
                                ]
                            }),
                            (0, l.jsx)('div', {
                                className: ec.popoutHeaderIcons,
                                children: d
                            })
                        ]
                    }),
                    o
                ]
            })
        ]
    });
}
function eI(e) {
    var t;
    let { title: n, subtitle: i, badges: r, stream: o, onClickThumbnail: s, onClickTitle: c, onClickSubtitle: d, onUserPopoutClosed: x, trackRankingItemInteraction: h, ...v } = e,
        g = (0, u.e7)([H.Z], () => H.Z.getChannel(null == o ? void 0 : o.channelId)),
        [f] = a.useMemo(() => (0, A.p9)(g, z.Z, V.Z, B.Z, T.Z), [g]),
        { entry: I } = v,
        j = (0, X.dX)(I),
        Z = (0, _.Z)(
            {
                location: 'ContentPopout',
                applicationId: j ? (null === (t = I.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: y.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: I.author_id
            },
            { onOpened: () => (null == h ? void 0 : h(eo.xP.OPENED_GAME_PROFILE)) }
        ),
        P = j ? Z : void 0,
        { activity: L, activityApplication: N, fallbackApplication: S } = (0, ee.Z)(I),
        { largeImage: R, smallImage: M } = (0, J.YC)(L, null != N ? N : S);
    return null == o
        ? null
        : (0, l.jsxs)('div', {
              className: ec.popoutContentWrapper,
              children: [
                  (0, l.jsx)(ev, {
                      ...v,
                      onUserPopoutClosed: x
                  }),
                  (0, l.jsxs)('div', {
                      className: ec.streamingPopoutHero,
                      children: [
                          (0, l.jsx)(eg, {
                              onClick: f
                                  ? () => {
                                        p.default.selectVoiceChannel(o.channelId), (0, C.iV)(o);
                                    }
                                  : void 0,
                              children: (0, l.jsxs)('div', {
                                  className: ec.streamingPopoutPreviewContainer,
                                  children: [
                                      (0, l.jsx)(E.Z, {
                                          className: ec.streamingPopoutImg,
                                          stream: o
                                      }),
                                      f &&
                                          (0, l.jsx)('div', {
                                              className: ec.streamCTA,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-md/normal',
                                                  children: eu.intl.string(eu.t['7Xq/nZ'])
                                              })
                                          })
                                  ]
                              })
                          }),
                          (0, l.jsxs)('div', {
                              className: ec.streamingPopoutHeader,
                              children: [
                                  null != R &&
                                      (0, l.jsx)('div', {
                                          className: ec.popoutThumbnailContainer,
                                          children: (0, l.jsx)($.E, {
                                              image: R,
                                              smallImage: M,
                                              onClick: null != s ? s : P,
                                              size: $.J.SIZE_72
                                          })
                                      }),
                                  (0, l.jsxs)('div', {
                                      className: ec.streamingPopoutHeaderText,
                                      children: [
                                          (0, l.jsx)(eg, {
                                              onClick: null != c ? c : P,
                                              children: (0, l.jsx)(m.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: ec.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: n
                                              })
                                          }),
                                          null != i
                                              ? (0, l.jsx)(eg, {
                                                    onClick: null != d ? d : P,
                                                    children: (0, l.jsx)(m.Text, {
                                                        variant: 'text-sm/normal',
                                                        className: ec.popoutTextSecondary,
                                                        children: i
                                                    })
                                                })
                                              : null,
                                          (0, l.jsx)(m.Spacer, { size: 8 }),
                                          r
                                      ]
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
function ej(e) {
    let { IconComponent: t, children: n, className: a, ...i } = e;
    return (0, l.jsxs)(m.Button, {
        ...i,
        className: r()(a, ec.primaryButton),
        innerClassName: null != t ? ec.iconButton : void 0,
        size: m.Button.Sizes.LARGE,
        children: [
            null != t
                ? (0, l.jsx)(t, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: d.Z.colors.WHITE
                  })
                : null,
            (0, l.jsx)(m.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: n
            })
        ]
    });
}

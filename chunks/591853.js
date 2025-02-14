n.d(t, {
    Ll: () => ef,
    St: () => eh,
    WT: () => ep,
    jL: () => eI,
    wG: () => ej,
    yR: () => eu
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    o = n(512722),
    s = n.n(o);
n(995295);
var c = n(442837),
    d = n(704215),
    u = n(692547),
    m = n(481060),
    x = n(493683),
    h = n(475179),
    p = n(287734),
    g = n(872810),
    v = n(607070),
    C = n(16609),
    j = n(220779),
    I = n(201133),
    f = n(557135),
    P = n(194082),
    y = n(605236),
    N = n(543241),
    Z = n(318374),
    T = n(258609),
    A = n(810568),
    E = n(168524),
    _ = n(102172),
    S = n(871118),
    R = n(565138),
    k = n(66999),
    w = n(790642),
    O = n(359110),
    b = n(12168),
    M = n(237583),
    L = n(131704),
    z = n(592125),
    B = n(430824),
    H = n(496675),
    U = n(699516),
    D = n(9156),
    G = n(594174),
    F = n(979651),
    V = n(938475),
    Y = n(626135),
    q = n(768581),
    W = n(5192),
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
    ec = n(388032),
    ed = n(687765);
function eu(e) {
    let { children: t } = e,
        n = a.useRef(null);
    return (
        (0, m.Tbt)(n),
        (0, l.jsx)('div', {
            className: ed.popout,
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
        (0, l.jsx)(m.f6W, {
            theme: es.BRd.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, l.jsx)('div', {
                    className: r()(ed.hero, e, a),
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
                className: ed.interactionsContainerHeader,
                ref: (e) => (n.current = e)
            }),
            (0, l.jsx)('div', {
                className: ed.interactionsContainer,
                children: (0, l.jsx)(ex.Provider, {
                    value: n.current,
                    children: t
                })
            })
        ]
    });
}
function ep(e) {
    let { channel: t, user: n, generateReactionImage: i, reactionImageAltText: r, onReaction: o, entry: p, buttons: g = [], header: v, onVoiceChannelPreview: P } = e,
        [N, Z] = a.useState(!1),
        [T, A] = a.useState(null),
        E = (0, c.e7)([H.Z], () => null != t && es.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && H.Z.can(es.Plq.SEND_MESSAGES, t)),
        [_, S] = a.useState(!1),
        [b, q] = a.useState(!1),
        { voiceBar: J, joinVoiceButton: X } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: o } = (0, en.Z)(n),
                { needSubscriptionToAccess: s } = (0, k.Z)(null == t ? void 0 : t.id),
                d = (0, c.e7)([B.Z], () => (null != o ? B.Z.getGuild(o.guild_id) : void 0)),
                x = (0, c.Wu)([V.ZP], () => (null != o ? V.ZP.getVoiceStatesForChannel(o) : []), [o]),
                p = (0, c.e7)([F.Z], () => F.Z.isInChannel(null == o ? void 0 : o.id)),
                g = a.useMemo(() => {
                    for (let e of x) {
                        let t = z.Z.getDMFromUserId(e.user.id),
                            n = null != t && D.ZP.isChannelMuted(null, t),
                            l = U.Z.isBlockedOrIgnored(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [x]);
            if (null == o || null == d)
                return {
                    voiceBar: void 0,
                    joinVoiceButton: void 0
                };
            let v = null != r,
                C = () => {
                    h.Z.updateChatOpen(o.id, !0), (0, O.Kh)(o.id), null == i || i(o);
                },
                j = () => {
                    f.Z.handleVoiceConnect({
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
                                          (0, l.jsx)(m.aNP, {
                                              size: 'custom',
                                              width: 13,
                                              height: 13,
                                              className: ed.popoutBlockedWarningIcon
                                          }),
                                      ec.intl.string(ec.t.d6DpXF)
                                  ]
                              })
                            : n;
                    return (0, l.jsx)(
                        m.ua7,
                        {
                            'aria-label': a ? ec.intl.string(ec.t.d6DpXF) : null != n && n,
                            text: i,
                            shouldShow: !0,
                            children: t
                        },
                        'voice-preview'
                    );
                };
            return {
                voiceBar: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)('div', {
                            className: ed.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, l.jsx)(I, {
                                    text: ec.intl.string(ec.t.WIVYqK),
                                    hasRestrictedOrMutedVCParticipant: g,
                                    children: (e) =>
                                        (0, l.jsxs)(m.P3F, {
                                            ...e,
                                            'aria-label': ec.intl.string(ec.t.WIVYqK),
                                            onClick: C,
                                            className: ed.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, l.jsx)(R.Z, {
                                                    guild: d,
                                                    size: R.Z.Sizes.SMOL,
                                                    className: ed.voiceChannelGuildIcon,
                                                    active: !0
                                                }),
                                                (0, l.jsx)(m.Fbu, {
                                                    size: 'xxs',
                                                    color: u.Z.colors.INTERACTIVE_NORMAL
                                                }),
                                                (0, l.jsx)(m.gj8, {
                                                    size: 'xs',
                                                    color: u.Z.colors.TEXT_NORMAL
                                                }),
                                                (0, l.jsx)(m.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-normal',
                                                    className: ed.voiceChannelName,
                                                    children: o.name
                                                })
                                            ]
                                        })
                                }),
                                (0, l.jsx)(M.Z, {
                                    guildId: d.id,
                                    users: x,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(m.qEK, {
                                            src: e.user.getAvatarURL(d.id, 16),
                                            size: m.EFr.SIZE_16,
                                            'aria-label': 'avatar',
                                            className: t
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)('div', {
                                            className: ed.voiceChannelAdditionalParticipants,
                                            children: (0, l.jsx)(m.Text, {
                                                variant: 'text-xxs/semibold',
                                                color: 'text-normal',
                                                children: e
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, l.jsx)('div', { className: ed.primaryActionPopoutDivider })
                    ]
                }),
                joinVoiceButton: p
                    ? null
                    : (0, l.jsx)(I, {
                          hasRestrictedOrMutedVCParticipant: g,
                          children: (e) =>
                              (0, l.jsx)(ef, {
                                  ...e,
                                  color: m.zxk.Colors.GREEN,
                                  onClick: j,
                                  IconComponent: v ? m.pzj : m.gj8,
                                  children: v ? ec.intl.string(ec.t['I6JG4+']) : ec.intl.string(ec.t.VJlc0d)
                              })
                      })
            };
        })({
            channel: t,
            entry: p,
            onVoiceChannelPreview: P
        }),
        { embeddedActivity: K } = (0, ee.Z)(p),
        $ = (function (e) {
            let t = (0, c.e7)([B.Z], () => B.Z.getGuild((0, C.jS)(null == e ? void 0 : e.location))),
                n = (0, c.e7)([z.Z], () => z.Z.getChannel((0, C.pY)(null == e ? void 0 : e.location))),
                a = (0, c.Wu)([G.default], () => {
                    var t, n;
                    return null !== (n = null == e ? void 0 : null === (t = e.participants) || void 0 === t ? void 0 : t.map((e) => G.default.getUser(e.userId))) && void 0 !== n ? n : [];
                });
            return null != e && null != t && null != n && L.sR.has(n.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: ed.voiceChannelPopoutReactorHeader,
                              children: [
                                  (0, l.jsxs)(m.P3F, {
                                      'aria-label': ec.intl.string(ec.t['W/A4Qk']),
                                      onClick: () => (0, O.Kh)(n.id),
                                      className: ed.voiceChannelPopoutReactorChannel,
                                      children: [
                                          (0, l.jsx)(R.Z, {
                                              guild: t,
                                              size: R.Z.Sizes.SMOL,
                                              className: ed.voiceChannelGuildIcon,
                                              active: !0
                                          }),
                                          (0, l.jsx)(m.Fbu, {
                                              size: 'xxs',
                                              color: u.Z.colors.INTERACTIVE_NORMAL
                                          }),
                                          (0, l.jsx)(m.VL1, {
                                              size: 'xs',
                                              color: u.Z.colors.TEXT_NORMAL
                                          }),
                                          (0, l.jsx)(m.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'text-normal',
                                              className: ed.voiceChannelName,
                                              children: null == n ? void 0 : n.name
                                          })
                                      ]
                                  }),
                                  (0, l.jsx)(M.Z, {
                                      guildId: t.id,
                                      users: a,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(m.qEK, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: m.EFr.SIZE_16,
                                              'aria-label': 'avatar',
                                              className: n
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)('div', {
                                              className: ed.voiceChannelAdditionalParticipants,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-normal',
                                                  children: e
                                              })
                                          })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', { className: ed.primaryActionPopoutDivider })
                      ]
                  })
                : null;
        })(K),
        et = null != X && 0 === g.length ? [X] : g,
        el = et.length > 0,
        ei = et.length >= 2,
        [eu, em] = a.useState(!el),
        ex = W.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        eh = null != t && N ? ec.intl.formatToPlainString(ec.t['8lzR/f'], { channel: '#'.concat(t.name) }) : ec.intl.formatToPlainString(ec.t['4c+CAw'], { channel: '@'.concat(ex) }),
        ep = N ? ec.intl.string(ec.t.Z2CUgo) : ec.intl.string(ec.t.XLGiTE),
        ev = async (e) => {
            let l;
            if (null != e) {
                if (
                    (Y.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: eo.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, y.EW)(d.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    S(!0),
                    q(!1),
                    N)
                )
                    s()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
                else {
                    var a;
                    let e = await x.Z.getOrEnsurePrivateChannel(n.id);
                    l = null !== (a = z.Z.getChannel(e)) && void 0 !== a ? a : null;
                }
                return (
                    s()(null != l, 'Send channel must be defined'),
                    ej({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: l,
                        onComplete: (e, t) => {
                            q(!0),
                                setTimeout(() => {
                                    S(!1), o(e, t);
                                }, 600);
                        },
                        interactionType: eo.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1
                    })
                );
            }
        },
        eC = async (e) => {
            let l;
            if (((0, y.EW)(d.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), N)) s()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
            else {
                let e = await x.Z.openPrivateChannel(n.id, !1, !1),
                    t = z.Z.getChannel(e);
                s()(null != t, 'DM channel must be defined'), (l = t);
            }
            let a = l.type === es.d4z.DM ? eo.xP.DM_REACTION_MESSAGE_SENT : eo.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return ej({
                reply: e,
                sendToChannel: l,
                interactionType: a,
                onComplete: o,
                requiresChannelReadiness: !0
            });
        },
        ej = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: l, interactionType: a, requiresChannelReadiness: o } = e;
            if ((null == T || T.focus(), (0, w.Io)('ContentPopout Reactor')))
                await (0, Q.p)({
                    channel: n,
                    content: t,
                    entry: p,
                    whenReady: o
                });
            else {
                let e = await (async function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    try {
                        return await i(...t);
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
            eu && (null == T || T.focus());
        }, [T, N, eu]),
        (0, l.jsxs)('div', {
            style: { pointerEvents: _ ? 'none' : 'all' },
            children: [
                (0, l.jsx)(er.Z, {
                    sent: b,
                    shown: _,
                    className: ed.toastContainer
                }),
                null != eI
                    ? eI
                    : (0, l.jsx)(ea.Z, {
                          children: (0, l.jsxs)('div', {
                              className: ed.emojiHotrailShareToChannel,
                              children: [
                                  (0, l.jsx)(eg, {
                                      channel: t,
                                      onClickSuggestion: ev
                                  }),
                                  (0, l.jsx)(j.dE, { onSelectEmoji: ev })
                              ]
                          })
                      }),
                (0, l.jsxs)('div', {
                    className: eu ? ed.inputContainerShareToChannel : ed.hiddenButRenderedInputField,
                    children: [
                        (0, l.jsx)(j.A7, {
                            placeholder: eh,
                            onEnter: eC,
                            setEditorRef: (e) => A(e),
                            channel: N ? t : void 0,
                            showEmojiButton: null != eI,
                            renderAttachButton: E
                                ? () =>
                                      (0, l.jsx)(m.ua7, {
                                          text: ep,
                                          children: (e) =>
                                              (0, l.jsx)(m.P3F, {
                                                  ...e,
                                                  className: ed.shareToChannelButton,
                                                  onClick: () => Z((e) => !e),
                                                  children: N
                                                      ? (0, l.jsx)(m.VL1, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                                      : (0, l.jsx)(m.lOy, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                              })
                                      })
                                : void 0
                        }),
                        el &&
                            (0, l.jsx)(m.P3F, {
                                onClick: () => em(!1),
                                className: ed.primaryActionPopoutMessageCloseIcon,
                                children: (0, l.jsx)(m.Dio, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    color: u.Z.colors.ICON_PRIMARY
                                })
                            })
                    ]
                }),
                !1 === eu &&
                    (0, l.jsxs)('div', {
                        className: ed.primaryActionPopoutActionButtons,
                        children: [
                            (0, l.jsxs)(
                                m.zxk,
                                {
                                    className: ed.secondaryButton,
                                    color: m.zxk.Colors.PRIMARY,
                                    look: m.zxk.Looks.FILLED,
                                    onClick: () => em(!0),
                                    innerClassName: ed.iconButton,
                                    size: ei ? m.zxk.Sizes.MIN : m.zxk.Sizes.LARGE,
                                    children: [
                                        (0, l.jsx)(m.kBi, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20
                                        }),
                                        !ei &&
                                            (0, l.jsx)(m.Text, {
                                                variant: 'text-md/semibold',
                                                children: ec.intl.string(ec.t.OAJQlJ)
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
let eg = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = a.useState(!1);
    a.useEffect(() => {
        r(!0);
    }, []);
    let o = !!v.Z.keyboardModeEnabled && !i,
        s = (0, N.wC)(null == t ? void 0 : t.guild_id)
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
                          children: (0, l.jsx)(m.DY3, {
                              text: ec.intl.formatToPlainString(ec.t.kilW3t, { emojiName: t.name }),
                              position: 'top',
                              'aria-label': ec.intl.formatToPlainString(ec.t.kilW3t, { emojiName: t.name }),
                              color: m.ua7.Colors.PRIMARY,
                              shouldShow: !o && void 0,
                              children: (0, l.jsx)(b.u, {
                                  emoji: t,
                                  isDisabled: !i,
                                  onClick: () => n(t),
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
function ev(e) {
    let { channel: t, userDescription: n, entry: a, disableGameProfileLinks: i, onUserPopoutClosed: o } = e,
        s = null == t ? void 0 : t.guild_id,
        { displayParticipants: d, participant1: u, participant2: x, numOtherParticipants: h } = (0, et.Z)(a, 3),
        p = (0, c.e7)([G.default], () => G.default.getUser(a.author_id)),
        { streamPreviewUrl: g } = (0, en.Z)(a),
        v = [u, x];
    return (0, l.jsxs)('div', {
        className: ed.popoutContentHeader,
        children: [
            (0, l.jsxs)('div', {
                className: ed.popoutUserContainer,
                children: [
                    (0, l.jsx)(Z.Z, {
                        maxUsers: 3,
                        users: d,
                        size: m.EFr.SIZE_24,
                        avatarClassName: ed.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: o
                    }),
                    (0, l.jsx)(m.LZC, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, l.jsx)(m.X6q, {
                        variant: 'heading-sm/normal',
                        className: ed.popoutTextSecondary,
                        children: ec.intl.format(n, {
                            user0: W.ZP.getName(s, null == t ? void 0 : t.id, v[0]),
                            user1: W.ZP.getName(s, null == t ? void 0 : t.id, v[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    m.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: r()(ed.popoutUsername, ed.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    K.Z,
                                    {
                                        textClassName: r()(ed.popoutUsername, ed.popoutTextPrimary),
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
                                        textClassName: r()(ed.popoutUsername, ed.popoutTextPrimary),
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
            null != g && (0, l.jsx)(P.ZP, { size: P.ZP.Sizes.SMALL }),
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
function eC(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? (0, l.jsx)(l.Fragment, { children: t })
        : (0, l.jsx)(m.P3F, {
              className: ed.maybeClickable,
              onClick: n,
              children: t
          });
}
function ej(e) {
    var t;
    let { title: n, subtitle: a, badges: i, children: o, onClickThumbnail: s, onClickTitle: c, onClickSubtitle: d, headerIcons: u, disableGameProfileLinks: x = !1, showCoverImage: h = !0, onUserPopoutClosed: p, trackRankingItemInteraction: g, ...v } = e,
        { entry: C } = v,
        j = (0, X.dX)(C),
        I = (0, E.Z)(
            {
                location: 'ContentPopout',
                applicationId: j && !x ? (null === (t = C.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: A.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: C.author_id
            },
            { onOpened: () => (null == g ? void 0 : g(eo.xP.OPENED_GAME_PROFILE)) }
        ),
        { largeImage: f, smallImage: P } = (0, J.rv)({
            entry: C,
            showCoverImage: h
        }),
        y = j ? I : void 0;
    return (0, l.jsxs)('div', {
        className: ed.popoutContentWrapper,
        children: [
            (0, l.jsx)(ev, {
                disableGameProfileLinks: x,
                ...v,
                onUserPopoutClosed: p
            }),
            (0, l.jsxs)(em, {
                backgroundImgSrc: null == f ? void 0 : f.src,
                children: [
                    (0, l.jsxs)('div', {
                        className: ed.popoutHeroInner,
                        children: [
                            (0, l.jsx)('div', {
                                className: ed.popoutThumbnailContainer,
                                children: (0, l.jsx)($.E, {
                                    image: f,
                                    smallImage: P,
                                    aspectRatio: h ? 'none' : void 0,
                                    onClick: null != s ? s : y,
                                    size: $.J.SIZE_72
                                })
                            }),
                            (0, l.jsxs)('div', {
                                className: ed.popoutHeroBody,
                                children: [
                                    (0, l.jsx)(eC, {
                                        onClick: null != c ? c : y,
                                        children: (0, l.jsx)(m.X6q, {
                                            variant: 'heading-md/medium',
                                            className: r()(ed.popoutHeroTextPrimary, { [ed.popoutHeroTextPrimaryShort]: null != u }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, l.jsx)(eC, {
                                              onClick: null != d ? d : y,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ed.popoutHeroTextSecondary,
                                                  children: a
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(m.LZC, { size: 8 }),
                                    i
                                ]
                            }),
                            (0, l.jsx)('div', {
                                className: ed.popoutHeaderIcons,
                                children: u
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
    let { title: n, subtitle: i, badges: r, stream: o, onClickThumbnail: s, onClickTitle: d, onClickSubtitle: u, onUserPopoutClosed: x, trackRankingItemInteraction: h, ...v } = e,
        C = (0, c.e7)([z.Z], () => z.Z.getChannel(null == o ? void 0 : o.channelId)),
        [j] = a.useMemo(() => (0, _.p9)(C, F.Z, B.Z, H.Z, T.Z), [C]),
        { entry: I } = v,
        f = (0, X.dX)(I),
        P = (0, E.Z)(
            {
                location: 'ContentPopout',
                applicationId: f ? (null === (t = I.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: A.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: I.author_id
            },
            { onOpened: () => (null == h ? void 0 : h(eo.xP.OPENED_GAME_PROFILE)) }
        ),
        y = f ? P : void 0,
        { activity: N, activityApplication: Z, fallbackApplication: R } = (0, ee.Z)(I),
        { largeImage: k, smallImage: w } = (0, J.YC)(N, null != Z ? Z : R),
        { largeImage: O } = (0, J.rv)({ entry: I });
    return (0, l.jsxs)('div', {
        className: ed.popoutContentWrapper,
        children: [
            (0, l.jsx)(ev, {
                ...v,
                onUserPopoutClosed: x
            }),
            (0, l.jsxs)(em, {
                backgroundImgSrc: null == O ? void 0 : O.src,
                className: ed.streamingPopoutHero,
                children: [
                    (0, l.jsx)(eC, {
                        onClick: j
                            ? () => {
                                  p.default.selectVoiceChannel(o.channelId), (0, g.iV)(o);
                              }
                            : void 0,
                        children: (0, l.jsxs)('div', {
                            className: ed.streamingPopoutPreviewContainer,
                            children: [
                                (0, l.jsx)(S.Z, {
                                    className: ed.streamingPopoutImg,
                                    stream: o
                                }),
                                j &&
                                    (0, l.jsx)('div', {
                                        className: ed.streamCTA,
                                        children: (0, l.jsx)(m.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: ec.intl.string(ec.t['7Xq/nZ'])
                                        })
                                    })
                            ]
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: ed.streamingPopoutHeader,
                        children: [
                            null != k &&
                                (0, l.jsx)('div', {
                                    className: ed.popoutThumbnailContainer,
                                    children: (0, l.jsx)($.E, {
                                        image: k,
                                        smallImage: w,
                                        onClick: null != s ? s : y,
                                        size: $.J.SIZE_72
                                    })
                                }),
                            (0, l.jsxs)('div', {
                                className: ed.streamingPopoutHeaderText,
                                children: [
                                    (0, l.jsx)(eC, {
                                        onClick: null != d ? d : y,
                                        children: (0, l.jsx)(m.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: ed.popoutTextPrimary,
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != i
                                        ? (0, l.jsx)(eC, {
                                              onClick: null != u ? u : y,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ed.popoutTextSecondary,
                                                  children: i
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(m.LZC, { size: 8 }),
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
function ef(e) {
    let { IconComponent: t, children: n, className: a, ...i } = e;
    return (0, l.jsxs)(m.zxk, {
        ...i,
        className: r()(a, ed.primaryButton),
        innerClassName: null != t ? ed.iconButton : void 0,
        size: m.zxk.Sizes.LARGE,
        children: [
            null != t
                ? (0, l.jsx)(t, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: u.Z.colors.WHITE
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

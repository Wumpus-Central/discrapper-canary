n.d(t, {
    PZ: () => et,
    Qj: () => ea,
    ZP: () => es
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    u = n(568611),
    d = n(91192),
    c = n(873546),
    E = n(442837),
    C = n(481060),
    _ = n(493683),
    h = n(239091),
    I = n(420660),
    g = n(468363),
    T = n(297369),
    S = n(500885),
    N = n(956221),
    A = n(771173),
    f = n(372276),
    p = n(385499),
    L = n(570908),
    v = n(702321),
    Z = n(201895),
    m = n(43267),
    P = n(933557),
    D = n(979264),
    U = n(711406),
    R = n(318870),
    O = n(163889),
    x = n(111028),
    G = n(540059),
    M = n(853856),
    b = n(93687),
    y = n(785232),
    j = n(878857),
    H = n(565640),
    w = n(518950),
    k = n(199902),
    V = n(158776),
    F = n(306680),
    B = n(699516),
    K = n(111583),
    W = n(9156),
    z = n(594174),
    Q = n(709054),
    Y = n(998502),
    q = n(981631),
    X = n(388032),
    J = n(24259);
let $ = Y.ZP.getEnableHardwareAcceleration() ? C.Xo$ : C.qEK,
    ee = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    et = (e) =>
        (0, l.jsx)(C.P3F, {
            className: J.closeButton,
            ...e,
            focusProps: {
                offset: {
                    top: -2,
                    bottom: -2,
                    left: -2,
                    right: 6
                }
            },
            children: (0, l.jsx)(C.Dio, {
                size: 'md',
                color: 'currentColor',
                className: J.closeIcon
            })
        }),
    en = () =>
        (0, l.jsx)(C.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        }),
    el = () =>
        (0, l.jsx)(C.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        }),
    ei = () =>
        (0, l.jsx)(C.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        });
function ea(e) {
    let { route: t, selected: n, icon: i, iconClassName: a, avatarWithTextClassName: s, interactiveClassName: o, text: d, children: E, locationState: _, onClick: h, className: I, role: g, 'aria-posinset': T, 'aria-setsize': S, ...N } = e,
        A = (0, G.Q3)('PrivateChannelLinkButton');
    return (0, l.jsx)(O.Z, {
        className: r()(J.channel, { [J.fullWidth]: c.tq }, I),
        onClick: h,
        role: g,
        focusProps: {
            within: !0,
            ...ee
        },
        'aria-posinset': T,
        'aria-setsize': S,
        children: (0, l.jsx)(C.vjx, {
            as: 'div',
            selected: n,
            className: r()(o, J.interactive, J.linkButton, { [J.interactiveSelected]: n }),
            children: (0, l.jsxs)(u.rU, {
                to: {
                    pathname: t,
                    state: _
                },
                className: J.link,
                ...N,
                children: [
                    (0, l.jsx)(L.Z, {
                        selected: n,
                        muted: !1,
                        avatar: (0, l.jsx)(i, {
                            size: A ? 'refresh_sm' : void 0,
                            className: r()(J.linkButtonIcon, a),
                            color: 'currentColor'
                        }),
                        name: d,
                        innerClassName: r()(J.avatarWithText, s)
                    }),
                    E
                ]
            })
        })
    });
}
function er(e) {
    var t;
    let { channel: a, isGDMFacepileEnabled: s, selected: c = !1, user: g, activities: S, applicationStream: N, entry: G, voiceChannel: b, isTyping: H, status: k, isMobile: V, nameplate: K, 'aria-posinset': z, 'aria-setsize': Q } = e,
        [Y, ea] = i.useState(!1),
        er = i.useRef(null),
        es = i.useRef(null),
        {
            avatarSrc: eo,
            avatarDecorationSrc: eu,
            eventHandlers: ed
        } = (0, w.Z)({
            user: g,
            size: C.EFr.SIZE_32,
            animateOnHover: !(c || Y)
        }),
        ec = (0, E.e7)([W.ZP], () => W.ZP.isChannelMuted(a.getGuildId(), a.id)),
        { ignored: eE, blocked: eC } = (0, E.cj)([B.Z], () => ({
            ignored: B.Z.isIgnored(a.getRecipientId()),
            blocked: B.Z.isBlocked(a.getRecipientId())
        })),
        e_ = (0, E.e7)([F.ZP], () => F.ZP.getMentionCount(a.id) > 0),
        eh = (0, P.ZP)(a),
        eI = (0, E.e7)([M.Z], () => M.Z.isFavorite(a.id)),
        eg = () => {
            ea(!0);
        },
        eT = () => {
            ea(!1);
        },
        eS = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), _.Z.closePrivateChannel(a.id, c, t);
        },
        eN = () => {
            _.Z.preload(q.ME, a.id);
        },
        eA = (e) => {
            e.stopPropagation();
        },
        ef = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = er.current) || void 0 === t || t.click();
            }
        },
        ep = (e) => {
            a.isMultiUserDM()
                ? (0, h.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('25421'), n.e('45439')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, l.jsx)(e, {
                                  ...t,
                                  channel: a,
                                  selected: c
                              });
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, h.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('33862'), n.e('70205'), n.e('98783'), n.e('75878'), n.e('56826'), n.e('70540')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(e, {
                              ...t,
                              user: g,
                              channel: a,
                              channelSelected: c
                          });
                  });
        },
        eL = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = X.intl.formatToPlainString(X.t.hJ5Ap6, { name: eh }),
                i = X.intl.format(X.t.SSIVOj, { name: eh });
            a.isManaged() && ((t = X.intl.formatToPlainString(X.t.hVGjER, { name: eh })), (i = X.intl.format(X.t.IK1Qvr, { name: eh }))),
                (0, C.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, l.jsx)(e, {
                            header: t,
                            body: i,
                            onSubmit: eS,
                            ...n
                        });
                });
        },
        ev = () =>
            a.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: J.subtext,
                      children: (0, v.Z)(a.id) ? X.intl.string(X.t.FL5T09) : X.intl.string(X.t.NnY5lZ)
                  })
                : a.isMultiUserDM() && null == b
                  ? (0, l.jsx)('div', {
                        className: J.subtext,
                        children: X.intl.format(X.t.CxSA5O, { members: a.recipients.length + 1 })
                    })
                  : (0, T.Z)({
                          activities: S,
                          status: k,
                          applicationStream: N,
                          voiceChannel: b
                      })
                    ? (0, l.jsx)(A.Z, {
                          location: 'PrivateChannel',
                          user: g,
                          activities: S,
                          voiceChannel: b,
                          applicationStream: N,
                          animate: Y,
                          emojiClassName: ec ? J.mutedEmoji : void 0
                      })
                    : null != G
                      ? (0, l.jsx)(f.Z, { entry: G })
                      : null,
        eZ = () => {
            let e = C.EFr.SIZE_32;
            if (a.isMultiUserDM())
                return a.recipients.length >= 2 && s && null == a.icon
                    ? (0, l.jsx)(y.Z, {
                          'aria-hidden': !0,
                          recipients: a.recipients,
                          size: e,
                          isTyping: H,
                          status: k
                      })
                    : (0, l.jsx)($, {
                          ...ed,
                          src: (0, m.x)(a),
                          'aria-hidden': !0,
                          size: e,
                          status: H ? q.Skl.ONLINE : k,
                          isTyping: H
                      });
            o()(null != g, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                g.isSystemUser() || (t = (0, I.Z)(S) ? q.Skl.STREAMING : k),
                (0, l.jsx)($, {
                    ...ed,
                    size: C.EFr.SIZE_32,
                    src: eo,
                    avatarDecoration: eu,
                    status: t,
                    isMobile: V,
                    isTyping: H,
                    'aria-label': g.username,
                    statusTooltip: !0
                })
            );
        },
        em = a.isMultiUserDM(),
        eP = a.isSystemDM(),
        eD = (0, j.Q)(),
        eU = !em && !eP && a.type === q.d4z.DM,
        eR = eU && (null == g ? void 0 : g.primaryGuild) != null,
        eO = eU && eE,
        ex = eU && eC,
        eG = eR
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eh,
                      (0, l.jsx)(D.ZP, {
                          primaryGuild: null == g ? void 0 : g.primaryGuild,
                          userId: null == g ? void 0 : g.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: J.clanTag
                      })
                  ]
              })
            : eh,
        eM = null !== (t = ec || eO || ex) && void 0 !== t && t;
    return (0, l.jsx)(d.mh, {
        id: a.id,
        children: (e) => {
            let { role: t, ...n } = e;
            return (0, l.jsx)(U.Z, {
                placement: R.QY.PrivateChannel,
                namePlate: K,
                selected: c,
                hover: Y,
                children: (0, l.jsx)(O.Z, {
                    className: r()(J.channel, J.dm),
                    role: t,
                    focusProps: {
                        ...ee,
                        focusTarget: er,
                        ringTarget: es
                    },
                    ref: es,
                    onMouseEnter: eg,
                    onMouseLeave: eT,
                    onMouseDown: eN,
                    onContextMenu: ep,
                    'aria-setsize': Q,
                    'aria-posinset': z,
                    children: (0, l.jsxs)(C.vjx, {
                        className: r()(J.interactive, {
                            [J.interactiveSystemDM]: eD && eP,
                            [J.interactiveSelected]: c && null == K
                        }),
                        as: 'div',
                        onClick: ef,
                        muted: eM,
                        selected: c,
                        children: [
                            (0, l.jsx)(u.rU, {
                                innerRef: er,
                                to: q.Z5c.CHANNEL(q.ME, a.id),
                                className: J.link,
                                'aria-label': (0, Z.ZP)({
                                    channel: a,
                                    unread: e_
                                }),
                                ...n,
                                children: (0, l.jsx)(L.Z, {
                                    avatar: eZ(),
                                    selected: c,
                                    highlighted: e_,
                                    muted: eM,
                                    subText: ev(),
                                    name: (0, l.jsx)(x.Z, {
                                        tooltipClassName: J.overflowTooltip,
                                        children: eG
                                    }),
                                    decorators: a.isSystemDM()
                                        ? (0, l.jsx)(p.Z, {
                                              className: J.decorator,
                                              type: p.Z.Types.SYSTEM_DM,
                                              verified: !0
                                          })
                                        : null
                                })
                            }),
                            eI ? (0, l.jsx)(en, {}) : null,
                            eO ? (0, l.jsx)(el, {}) : null,
                            ex ? (0, l.jsx)(ei, {}) : null,
                            (0, l.jsx)(et, {
                                'aria-label': em ? X.intl.string(X.t['26C4oq']) : X.intl.string(X.t.jsvgc3),
                                onClick: em ? eL : eS,
                                onMouseDown: eA
                            })
                        ]
                    })
                })
            });
        }
    });
}
let es = (e) => {
    let { channel: t, selected: n, nameplate: i, ...a } = e,
        r = (0, E.e7)([z.default], () => z.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: s, isTypingIndicatorEnabled: o, isFacepileEnabled: u } = b.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        d = null == r ? void 0 : r.id,
        c = (0, E.cj)(
            [V.Z, k.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (s) {
                        let n = V.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === q.Skl.ONLINE) && (e = q.Skl.ONLINE);
                    }
                } else null != d && (e = V.Z.getStatus(d));
                return {
                    status: e,
                    activities: null != d ? V.Z.getActivities(d) : null,
                    applicationStream: null != d ? k.Z.getAnyStreamForUser(d) : null,
                    isMobile: null != d && V.Z.isMobileOnline(d)
                };
            },
            [t, d, s]
        ),
        C = (0, H.Z)(null == r ? void 0 : r.id, 'PrivateChannel'),
        { voiceActivityStatusEnabled: _ } = (0, g.U)({ location: 'PrivateChannel' }),
        { voiceChannel: h } = (0, N.Z)({ userId: d }),
        { callChannel: I } = (0, S.Z)({
            userId: d,
            channelId: t.id
        }),
        T = (0, E.e7)(
            [z.default, K.Z],
            () =>
                t.isMultiUserDM()
                    ? !!o &&
                      Q.default.keys(K.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = z.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != r && K.Z.isTyping(t.id, t.getRecipientId()),
            [t, r, o]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(er, {
              channel: t,
              selected: n,
              isTyping: T,
              status: c.status === q.Skl.ONLINE ? q.Skl.ONLINE : void 0,
              voiceChannel: _ ? I : void 0,
              isGDMFacepileEnabled: u,
              ...a
          })
        : (0, l.jsx)(er, {
              channel: t,
              selected: n,
              user: r,
              entry: C,
              voiceChannel: !_ || (null == h ? void 0 : h.isMultiUserDM()) ? void 0 : h,
              isTyping: T,
              nameplate: i,
              ...a,
              ...c
          });
};

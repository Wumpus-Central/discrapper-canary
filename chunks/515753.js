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
    h = n(493683),
    _ = n(239091),
    I = n(420660),
    g = n(468363),
    T = n(297369),
    S = n(500885),
    f = n(956221),
    A = n(771173),
    N = n(372276),
    p = n(385499),
    v = n(570908),
    L = n(702321),
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
    F = n(158776),
    V = n(306680),
    B = n(699516),
    K = n(111583),
    Q = n(9156),
    W = n(594174),
    z = n(709054),
    Y = n(998502),
    q = n(981631),
    X = n(388032),
    J = n(613038);
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
    let { route: t, selected: n, icon: i, iconClassName: a, avatarWithTextClassName: s, interactiveClassName: o, text: d, children: E, locationState: h, onClick: _, className: I, role: g, 'aria-posinset': T, 'aria-setsize': S, ...f } = e,
        A = (0, G.Q3)('PrivateChannelLinkButton');
    return (0, l.jsx)(O.Z, {
        className: r()(J.channel, { [J.fullWidth]: c.tq }, I),
        onClick: _,
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
                    state: h
                },
                className: J.link,
                ...f,
                children: [
                    (0, l.jsx)(v.Z, {
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
    let { channel: a, isGDMFacepileEnabled: s, selected: c = !1, user: g, activities: S, applicationStream: f, entry: G, voiceChannel: b, isTyping: H, status: k, isMobile: F, nameplate: K, 'aria-posinset': W, 'aria-setsize': z } = e,
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
        ec = (0, E.e7)([Q.ZP], () => Q.ZP.isChannelMuted(a.getGuildId(), a.id)),
        { ignored: eE, blocked: eC } = (0, E.cj)([B.Z], () => ({
            ignored: B.Z.isIgnored(a.getRecipientId()),
            blocked: B.Z.isBlocked(a.getRecipientId())
        })),
        eh = (0, E.e7)([V.ZP], () => V.ZP.getMentionCount(a.id) > 0),
        e_ = (0, P.ZP)(a),
        eI = (0, E.e7)([M.Z], () => M.Z.isFavorite(a.id)),
        eg = () => {
            ea(!0);
        },
        eT = () => {
            ea(!1);
        },
        eS = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(a.id, c, t);
        },
        ef = () => {
            h.Z.preload(q.ME, a.id);
        },
        eA = (e) => {
            e.stopPropagation();
        },
        eN = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = er.current) || void 0 === t || t.click();
            }
        },
        ep = (e) => {
            a.isMultiUserDM()
                ? (0, _.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('25421'), n.e('28406')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, l.jsx)(e, {
                                  ...t,
                                  channel: a,
                                  selected: c
                              });
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, _.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('33862'), n.e('70205'), n.e('98783'), n.e('75878'), n.e('56826'), n.e('88786')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(e, {
                              ...t,
                              user: g,
                              channel: a,
                              channelSelected: c
                          });
                  });
        },
        ev = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = X.intl.formatToPlainString(X.t.hJ5Ap6, { name: e_ }),
                i = X.intl.format(X.t.SSIVOj, { name: e_ });
            a.isManaged() && ((t = X.intl.formatToPlainString(X.t.hVGjER, { name: e_ })), (i = X.intl.format(X.t.IK1Qvr, { name: e_ }))),
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
        eL = () =>
            a.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: J.subtext,
                      children: (0, L.Z)(a.id) ? X.intl.string(X.t.FL5T09) : X.intl.string(X.t.NnY5lZ)
                  })
                : a.isMultiUserDM() && null == b
                  ? (0, l.jsx)('div', {
                        className: J.subtext,
                        children: X.intl.format(X.t.CxSA5O, { members: a.recipients.length + 1 })
                    })
                  : (0, T.Z)({
                          activities: S,
                          status: k,
                          applicationStream: f,
                          voiceChannel: b
                      })
                    ? (0, l.jsx)(A.Z, {
                          location: 'PrivateChannel',
                          user: g,
                          activities: S,
                          voiceChannel: b,
                          applicationStream: f,
                          animate: Y,
                          emojiClassName: ec ? J.mutedEmoji : void 0
                      })
                    : null != G
                      ? (0, l.jsx)(N.Z, { entry: G })
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
                    isMobile: F,
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
                      e_,
                      (0, l.jsx)(D.ZP, {
                          primaryGuild: null == g ? void 0 : g.primaryGuild,
                          userId: null == g ? void 0 : g.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: J.clanTag
                      })
                  ]
              })
            : e_,
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
                    onMouseDown: ef,
                    onContextMenu: ep,
                    'aria-setsize': z,
                    'aria-posinset': W,
                    children: (0, l.jsxs)(C.vjx, {
                        className: r()(J.interactive, {
                            [J.interactiveSystemDM]: eD && eP,
                            [J.interactiveSelected]: c && null == K
                        }),
                        as: 'div',
                        onClick: eN,
                        muted: eM,
                        selected: c,
                        children: [
                            (0, l.jsx)(u.rU, {
                                innerRef: er,
                                to: q.Z5c.CHANNEL(q.ME, a.id),
                                className: J.link,
                                'aria-label': (0, Z.ZP)({
                                    channel: a,
                                    unread: eh
                                }),
                                ...n,
                                children: (0, l.jsx)(v.Z, {
                                    avatar: eZ(),
                                    selected: c,
                                    highlighted: eh,
                                    muted: eM,
                                    subText: eL(),
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
                                onClick: em ? ev : eS,
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
        r = (0, E.e7)([W.default], () => W.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: s, isTypingIndicatorEnabled: o, isFacepileEnabled: u } = b.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        d = null == r ? void 0 : r.id,
        c = (0, E.cj)(
            [F.Z, k.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (s) {
                        let n = F.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === q.Skl.ONLINE) && (e = q.Skl.ONLINE);
                    }
                } else null != d && (e = F.Z.getStatus(d));
                return {
                    status: e,
                    activities: null != d ? F.Z.getActivities(d) : null,
                    applicationStream: null != d ? k.Z.getAnyStreamForUser(d) : null,
                    isMobile: null != d && F.Z.isMobileOnline(d)
                };
            },
            [t, d, s]
        ),
        C = (0, H.Z)(null == r ? void 0 : r.id, 'PrivateChannel'),
        { voiceActivityStatusEnabled: h } = (0, g.U)({ location: 'PrivateChannel' }),
        { voiceChannel: _ } = (0, f.Z)({ userId: d }),
        { callChannel: I } = (0, S.Z)({
            userId: d,
            channelId: t.id
        }),
        T = (0, E.e7)(
            [W.default, K.Z],
            () =>
                t.isMultiUserDM()
                    ? !!o &&
                      z.default.keys(K.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = W.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
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
              voiceChannel: h ? I : void 0,
              isGDMFacepileEnabled: u,
              ...a
          })
        : (0, l.jsx)(er, {
              channel: t,
              selected: n,
              user: r,
              entry: C,
              voiceChannel: !h || (null == _ ? void 0 : _.isMultiUserDM()) ? void 0 : _,
              isTyping: T,
              nameplate: i,
              ...a,
              ...c
          });
};

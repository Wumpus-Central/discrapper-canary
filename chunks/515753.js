n.d(t, {
    PZ: () => ee,
    Qj: () => ei,
    ZP: () => er
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
    S = n(956221),
    A = n(771173),
    f = n(372276),
    N = n(385499),
    p = n(570908),
    L = n(702321),
    m = n(201895),
    v = n(43267),
    Z = n(933557),
    P = n(979264),
    D = n(163889),
    U = n(111028),
    R = n(540059),
    O = n(853856),
    x = n(93687),
    G = n(785232),
    M = n(359135),
    b = n(516817),
    y = n(878857),
    j = n(565640),
    H = n(518950),
    w = n(199902),
    k = n(158776),
    F = n(306680),
    V = n(699516),
    B = n(111583),
    K = n(9156),
    Q = n(594174),
    W = n(709054),
    z = n(998502),
    Y = n(981631),
    q = n(388032),
    X = n(613038);
let J = z.ZP.getEnableHardwareAcceleration() ? C.Xo$ : C.qEK,
    $ = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    ee = (e) =>
        (0, l.jsx)(C.P3F, {
            className: X.closeButton,
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
                className: X.closeIcon
            })
        }),
    et = () =>
        (0, l.jsx)(C.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    en = () =>
        (0, l.jsx)(C.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    el = () =>
        (0, l.jsx)(C.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        });
function ei(e) {
    let { route: t, selected: n, icon: i, iconClassName: a, avatarWithTextClassName: s, interactiveClassName: o, text: d, children: E, locationState: _, onClick: h, className: I, role: g, 'aria-posinset': T, 'aria-setsize': S, ...A } = e,
        f = (0, R.Q3)('PrivateChannelLinkButton');
    return (0, l.jsx)(D.Z, {
        className: r()(X.channel, { [X.fullWidth]: c.tq }, I),
        onClick: h,
        role: g,
        focusProps: {
            within: !0,
            ...$
        },
        'aria-posinset': T,
        'aria-setsize': S,
        children: (0, l.jsx)(C.vjx, {
            as: 'div',
            selected: n,
            className: r()(o, X.interactive, X.linkButton, { [X.interactiveSelected]: n }),
            children: (0, l.jsxs)(u.rU, {
                to: {
                    pathname: t,
                    state: _
                },
                className: X.link,
                ...A,
                children: [
                    (0, l.jsx)(p.Z, {
                        selected: n,
                        muted: !1,
                        avatar: (0, l.jsx)(i, {
                            size: f ? 'refresh_sm' : void 0,
                            className: r()(X.linkButtonIcon, a),
                            color: 'currentColor'
                        }),
                        name: d,
                        innerClassName: r()(X.avatarWithText, s)
                    }),
                    E
                ]
            })
        })
    });
}
function ea(e) {
    var t;
    let { channel: a, isGDMFacepileEnabled: s, selected: c = !1, user: g, activities: S, applicationStream: R, entry: x, voiceChannel: j, isTyping: w, status: k, isMobile: B, nameplate: Q, 'aria-posinset': W, 'aria-setsize': z } = e,
        [ei, ea] = i.useState(!1),
        er = i.useRef(null),
        es = i.useRef(null),
        {
            avatarSrc: eo,
            avatarDecorationSrc: eu,
            eventHandlers: ed
        } = (0, H.Z)({
            user: g,
            size: C.EFr.SIZE_32,
            animateOnHover: !(c || ei)
        }),
        ec = (0, E.e7)([K.ZP], () => K.ZP.isChannelMuted(a.getGuildId(), a.id)),
        { ignored: eE, blocked: eC } = (0, E.cj)([V.Z], () => ({
            ignored: V.Z.isIgnored(a.getRecipientId()),
            blocked: V.Z.isBlocked(a.getRecipientId())
        })),
        e_ = (0, E.e7)([F.ZP], () => F.ZP.getMentionCount(a.id) > 0),
        eh = (0, Z.ZP)(a),
        eI = (0, E.e7)([O.Z], () => O.Z.isFavorite(a.id)),
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
        eA = () => {
            _.Z.preload(Y.ME, a.id);
        },
        ef = (e) => {
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
                ? (0, h.jW)(
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
                : (0, h.jW)(e, async () => {
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
        eL = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = q.intl.formatToPlainString(q.t.hJ5Ap6, { name: eh }),
                i = q.intl.format(q.t.SSIVOj, { name: eh });
            a.isManaged() && ((t = q.intl.formatToPlainString(q.t.hVGjER, { name: eh })), (i = q.intl.format(q.t.IK1Qvr, { name: eh }))),
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
        em = () =>
            a.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: X.subtext,
                      children: (0, L.Z)(a.id) ? q.intl.string(q.t.FL5T09) : q.intl.string(q.t.NnY5lZ)
                  })
                : a.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: X.subtext,
                        children: q.intl.format(q.t.CxSA5O, { members: a.recipients.length + 1 })
                    })
                  : (0, T.Z)({
                          activities: S,
                          status: k,
                          applicationStream: R,
                          voiceChannel: j
                      })
                    ? (0, l.jsx)(A.Z, {
                          location: 'PrivateChannel',
                          user: g,
                          activities: S,
                          voiceChannel: j,
                          applicationStream: R,
                          animate: ei,
                          emojiClassName: ec ? X.mutedEmoji : void 0
                      })
                    : null != x
                      ? (0, l.jsx)(f.Z, { entry: x })
                      : null,
        ev = () => {
            let e = C.EFr.SIZE_32;
            if (a.isMultiUserDM())
                return a.recipients.length >= 2 && s && null == a.icon
                    ? (0, l.jsx)(G.Z, {
                          'aria-hidden': !0,
                          recipients: a.recipients,
                          size: e,
                          isTyping: w,
                          status: k
                      })
                    : (0, l.jsx)(J, {
                          ...ed,
                          src: (0, v.x)(a),
                          'aria-hidden': !0,
                          size: e,
                          status: w ? Y.Skl.ONLINE : k,
                          isTyping: w
                      });
            o()(null != g, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                g.isSystemUser() || (t = (0, I.Z)(S) ? Y.Skl.STREAMING : k),
                (0, l.jsx)(J, {
                    ...ed,
                    size: C.EFr.SIZE_32,
                    src: eo,
                    avatarDecoration: eu,
                    status: t,
                    isMobile: B,
                    isTyping: w,
                    'aria-label': g.username,
                    statusTooltip: !0
                })
            );
        },
        eZ = a.isMultiUserDM(),
        eP = a.isSystemDM(),
        eD = (0, y.Q)(),
        eU = !eZ && !eP && a.type === Y.d4z.DM,
        eR = eU && (null == g ? void 0 : g.primaryGuild) != null,
        eO = eU && eE,
        ex = eU && eC,
        eG = eR
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eh,
                      (0, l.jsx)(P.ZP, {
                          primaryGuild: null == g ? void 0 : g.primaryGuild,
                          userId: null == g ? void 0 : g.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: X.clanTag
                      })
                  ]
              })
            : eh,
        eM = null !== (t = ec || eO || ex) && void 0 !== t && t;
    return (0, l.jsx)(d.mh, {
        id: a.id,
        children: (e) => {
            let { role: t, ...n } = e;
            return (0, l.jsx)(b.Z, {
                placement: M.QY.PrivateChannel,
                nameplate: Q,
                selected: c,
                hover: ei,
                children: (0, l.jsx)(D.Z, {
                    className: r()(X.channel, X.dm),
                    role: t,
                    focusProps: {
                        ...$,
                        focusTarget: er,
                        ringTarget: es
                    },
                    ref: es,
                    onMouseEnter: eg,
                    onMouseLeave: eT,
                    onMouseDown: eA,
                    onContextMenu: ep,
                    'aria-setsize': z,
                    'aria-posinset': W,
                    children: (0, l.jsxs)(C.vjx, {
                        className: r()(X.interactive, {
                            [X.interactiveSystemDM]: eD && eP,
                            [X.interactiveSelected]: c && null == Q
                        }),
                        as: 'div',
                        onClick: eN,
                        muted: eM,
                        selected: c,
                        children: [
                            (0, l.jsx)(u.rU, {
                                innerRef: er,
                                to: Y.Z5c.CHANNEL(Y.ME, a.id),
                                className: X.link,
                                'aria-label': (0, m.ZP)({
                                    channel: a,
                                    unread: e_
                                }),
                                ...n,
                                children: (0, l.jsx)(p.Z, {
                                    avatar: ev(),
                                    selected: c,
                                    highlighted: e_,
                                    muted: eM,
                                    subText: em(),
                                    name: (0, l.jsx)(U.Z, {
                                        tooltipClassName: X.overflowTooltip,
                                        children: eG
                                    }),
                                    decorators: a.isSystemDM()
                                        ? (0, l.jsx)(N.Z, {
                                              className: X.decorator,
                                              type: N.Z.Types.SYSTEM_DM,
                                              verified: !0
                                          })
                                        : null
                                })
                            }),
                            eI ? (0, l.jsx)(et, {}) : null,
                            eO ? (0, l.jsx)(en, {}) : null,
                            ex ? (0, l.jsx)(el, {}) : null,
                            (0, l.jsx)(ee, {
                                'aria-label': eZ ? q.intl.string(q.t['26C4oq']) : q.intl.string(q.t.jsvgc3),
                                onClick: eZ ? eL : eS,
                                onMouseDown: ef
                            })
                        ]
                    })
                })
            });
        }
    });
}
let er = (e) => {
    let { channel: t, selected: n, nameplate: i, ...a } = e,
        r = (0, E.e7)([Q.default], () => Q.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: s, isTypingIndicatorEnabled: o, isFacepileEnabled: u } = x.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        d = null == r ? void 0 : r.id,
        c = (0, E.cj)(
            [k.Z, w.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (s) {
                        let n = k.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === Y.Skl.ONLINE) && (e = Y.Skl.ONLINE);
                    }
                } else null != d && (e = k.Z.getStatus(d));
                return {
                    status: e,
                    activities: null != d ? k.Z.getActivities(d) : null,
                    applicationStream: null != d ? w.Z.getAnyStreamForUser(d) : null,
                    isMobile: null != d && k.Z.isMobileOnline(d)
                };
            },
            [t, d, s]
        ),
        C = (0, j.Z)(null == r ? void 0 : r.id, 'PrivateChannel'),
        { voiceActivityStatusEnabled: _ } = (0, g.U)({ location: 'PrivateChannel' }),
        { voiceChannel: h } = (0, S.Z)({ userId: d }),
        I = (0, E.e7)(
            [Q.default, B.Z],
            () =>
                t.isMultiUserDM()
                    ? !!o &&
                      W.default.keys(B.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = Q.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != r && B.Z.isTyping(t.id, t.getRecipientId()),
            [t, r, o]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(ea, {
              channel: t,
              selected: n,
              isTyping: I,
              status: c.status === Y.Skl.ONLINE ? Y.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: u,
              ...a
          })
        : (0, l.jsx)(ea, {
              channel: t,
              selected: n,
              user: r,
              entry: C,
              voiceChannel: _ ? h : void 0,
              isTyping: I,
              nameplate: i,
              ...a,
              ...c
          });
};

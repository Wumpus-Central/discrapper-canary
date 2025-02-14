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
    _ = n(481060),
    h = n(493683),
    C = n(239091),
    T = n(420660),
    I = n(468363),
    g = n(297369),
    S = n(956221),
    f = n(771173),
    p = n(372276),
    A = n(385499),
    N = n(570908),
    L = n(702321),
    v = n(201895),
    m = n(43267),
    Z = n(933557),
    P = n(979264),
    D = n(163889),
    R = n(111028),
    U = n(540059),
    O = n(853856),
    x = n(93687),
    G = n(785232),
    M = n(359135),
    b = n(516817),
    y = n(878857),
    H = n(565640),
    j = n(518950),
    w = n(199902),
    k = n(158776),
    F = n(306680),
    V = n(699516),
    B = n(111583),
    K = n(9156),
    W = n(594174),
    z = n(709054),
    Q = n(998502),
    Y = n(981631),
    X = n(388032),
    q = n(613038);
let J = Q.ZP.getEnableHardwareAcceleration() ? _.Xo$ : _.qEK,
    $ = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    ee = (e) =>
        (0, l.jsx)(_.P3F, {
            className: q.closeButton,
            ...e,
            focusProps: {
                offset: {
                    top: -2,
                    bottom: -2,
                    left: -2,
                    right: 6
                }
            },
            children: (0, l.jsx)(_.Dio, {
                size: 'md',
                color: 'currentColor',
                className: q.closeIcon
            })
        }),
    et = () =>
        (0, l.jsx)(_.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        }),
    en = () =>
        (0, l.jsx)(_.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        }),
    el = () =>
        (0, l.jsx)(_.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        });
function ei(e) {
    let { route: t, selected: n, icon: i, iconClassName: a, avatarWithTextClassName: s, interactiveClassName: o, text: d, children: E, locationState: h, onClick: C, className: T, role: I, 'aria-posinset': g, 'aria-setsize': S, ...f } = e,
        p = (0, U.Q3)('PrivateChannelLinkButton');
    return (0, l.jsx)(D.Z, {
        className: r()(q.channel, { [q.fullWidth]: c.tq }, T),
        onClick: C,
        role: I,
        focusProps: {
            within: !0,
            ...$
        },
        'aria-posinset': g,
        'aria-setsize': S,
        children: (0, l.jsx)(_.vjx, {
            as: 'div',
            selected: n,
            className: r()(o, q.interactive, q.linkButton, { [q.interactiveSelected]: n }),
            children: (0, l.jsxs)(u.rU, {
                to: {
                    pathname: t,
                    state: h
                },
                className: q.link,
                ...f,
                children: [
                    (0, l.jsx)(N.Z, {
                        selected: n,
                        muted: !1,
                        avatar: (0, l.jsx)(i, {
                            size: p ? 'refresh_sm' : void 0,
                            className: r()(q.linkButtonIcon, a),
                            color: 'currentColor'
                        }),
                        name: d,
                        innerClassName: r()(q.avatarWithText, s)
                    }),
                    E
                ]
            })
        })
    });
}
function ea(e) {
    var t;
    let { channel: a, isGDMFacepileEnabled: s, selected: c = !1, user: I, activities: S, applicationStream: U, entry: x, voiceChannel: H, isTyping: w, status: k, isMobile: B, nameplate: W, 'aria-posinset': z, 'aria-setsize': Q } = e,
        [ei, ea] = i.useState(!1),
        er = i.useRef(null),
        es = i.useRef(null),
        {
            avatarSrc: eo,
            avatarDecorationSrc: eu,
            eventHandlers: ed
        } = (0, j.Z)({
            user: I,
            size: _.EFr.SIZE_32,
            animateOnHover: !(c || ei)
        }),
        ec = (0, E.e7)([K.ZP], () => K.ZP.isChannelMuted(a.getGuildId(), a.id)),
        { ignored: eE, blocked: e_ } = (0, E.cj)([V.Z], () => ({
            ignored: V.Z.isIgnored(a.getRecipientId()),
            blocked: V.Z.isBlocked(a.getRecipientId())
        })),
        eh = (0, E.e7)([F.ZP], () => F.ZP.getMentionCount(a.id) > 0),
        eC = (0, Z.ZP)(a),
        eT = (0, E.e7)([O.Z], () => O.Z.isFavorite(a.id)),
        eI = () => {
            ea(!0);
        },
        eg = () => {
            ea(!1);
        },
        eS = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(a.id, c, t);
        },
        ef = () => {
            h.Z.preload(Y.ME, a.id);
        },
        ep = (e) => {
            e.stopPropagation();
        },
        eA = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = er.current) || void 0 === t || t.click();
            }
        },
        eN = (e) => {
            a.isMultiUserDM()
                ? (0, C.jW)(
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
                : (0, C.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('33862'), n.e('70205'), n.e('98783'), n.e('98254'), n.e('56826'), n.e('88786')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(e, {
                              ...t,
                              user: I,
                              channel: a,
                              channelSelected: c
                          });
                  });
        },
        eL = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = X.intl.formatToPlainString(X.t.hJ5Ap6, { name: eC }),
                i = X.intl.format(X.t.SSIVOj, { name: eC });
            a.isManaged() && ((t = X.intl.formatToPlainString(X.t.hVGjER, { name: eC })), (i = X.intl.format(X.t.IK1Qvr, { name: eC }))),
                (0, _.ZDy)(async () => {
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
                      className: q.subtext,
                      children: (0, L.Z)(a.id) ? X.intl.string(X.t.FL5T09) : X.intl.string(X.t.NnY5lZ)
                  })
                : a.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: q.subtext,
                        children: X.intl.format(X.t.CxSA5O, { members: a.recipients.length + 1 })
                    })
                  : (0, g.Z)({
                          activities: S,
                          status: k,
                          applicationStream: U,
                          voiceChannel: H
                      })
                    ? (0, l.jsx)(f.Z, {
                          location: 'PrivateChannel',
                          user: I,
                          activities: S,
                          voiceChannel: H,
                          applicationStream: U,
                          animate: ei,
                          emojiClassName: ec ? q.mutedEmoji : void 0
                      })
                    : null != x
                      ? (0, l.jsx)(p.Z, { entry: x })
                      : null,
        em = () => {
            let e = _.EFr.SIZE_32;
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
                          src: (0, m.x)(a),
                          'aria-hidden': !0,
                          size: e,
                          status: w ? Y.Skl.ONLINE : k,
                          isTyping: w
                      });
            o()(null != I, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                I.isSystemUser() || (t = (0, T.Z)(S) ? Y.Skl.STREAMING : k),
                (0, l.jsx)(J, {
                    ...ed,
                    size: _.EFr.SIZE_32,
                    src: eo,
                    avatarDecoration: eu,
                    status: t,
                    isMobile: B,
                    isTyping: w,
                    'aria-label': I.username,
                    statusTooltip: !0
                })
            );
        },
        eZ = a.isMultiUserDM(),
        eP = a.isSystemDM(),
        eD = (0, y.Q)(),
        eR = !eZ && !eP && a.type === Y.d4z.DM,
        eU = eR && (null == I ? void 0 : I.primaryGuild) != null,
        eO = eR && eE,
        ex = eR && e_,
        eG = eU
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eC,
                      (0, l.jsx)(P.ZP, {
                          primaryGuild: null == I ? void 0 : I.primaryGuild,
                          userId: null == I ? void 0 : I.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: q.clanTag
                      })
                  ]
              })
            : eC,
        eM = null !== (t = ec || eO || ex) && void 0 !== t && t;
    return (0, l.jsx)(d.mh, {
        id: a.id,
        children: (e) => {
            let { role: t, ...n } = e;
            return (0, l.jsx)(b.Z, {
                placement: M.QY.PrivateChannel,
                nameplate: W,
                selected: c,
                hover: ei,
                children: (0, l.jsx)(D.Z, {
                    className: r()(q.channel, q.dm),
                    role: t,
                    focusProps: {
                        ...$,
                        focusTarget: er,
                        ringTarget: es
                    },
                    ref: es,
                    onMouseEnter: eI,
                    onMouseLeave: eg,
                    onMouseDown: ef,
                    onContextMenu: eN,
                    'aria-setsize': Q,
                    'aria-posinset': z,
                    children: (0, l.jsxs)(_.vjx, {
                        className: r()(q.interactive, {
                            [q.interactiveSystemDM]: eD && eP,
                            [q.interactiveSelected]: c && null == W
                        }),
                        as: 'div',
                        onClick: eA,
                        muted: eM,
                        selected: c,
                        children: [
                            (0, l.jsx)(u.rU, {
                                innerRef: er,
                                to: Y.Z5c.CHANNEL(Y.ME, a.id),
                                className: q.link,
                                'aria-label': (0, v.ZP)({
                                    channel: a,
                                    unread: eh
                                }),
                                ...n,
                                children: (0, l.jsx)(N.Z, {
                                    avatar: em(),
                                    selected: c,
                                    highlighted: eh,
                                    muted: eM,
                                    subText: ev(),
                                    name: (0, l.jsx)(R.Z, {
                                        tooltipClassName: q.overflowTooltip,
                                        children: eG
                                    }),
                                    decorators: a.isSystemDM()
                                        ? (0, l.jsx)(A.Z, {
                                              className: q.decorator,
                                              type: A.Z.Types.SYSTEM_DM,
                                              verified: !0
                                          })
                                        : null
                                })
                            }),
                            eT ? (0, l.jsx)(et, {}) : null,
                            eO ? (0, l.jsx)(en, {}) : null,
                            ex ? (0, l.jsx)(el, {}) : null,
                            (0, l.jsx)(ee, {
                                'aria-label': eZ ? X.intl.string(X.t['26C4oq']) : X.intl.string(X.t.jsvgc3),
                                onClick: eZ ? eL : eS,
                                onMouseDown: ep
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
        r = (0, E.e7)([W.default], () => W.default.getUser(t.getRecipientId())),
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
        _ = (0, H.Z)(null == r ? void 0 : r.id, 'PrivateChannel'),
        { voiceActivityStatusEnabled: h } = (0, I.U)({ location: 'PrivateChannel' }),
        { voiceChannel: C } = (0, S.Z)({ userId: d }),
        T = (0, E.e7)(
            [W.default, B.Z],
            () =>
                t.isMultiUserDM()
                    ? !!o &&
                      z.default.keys(B.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = W.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != r && B.Z.isTyping(t.id, t.getRecipientId()),
            [t, r, o]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(ea, {
              channel: t,
              selected: n,
              isTyping: T,
              status: c.status === Y.Skl.ONLINE ? Y.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: u,
              ...a
          })
        : (0, l.jsx)(ea, {
              channel: t,
              selected: n,
              user: r,
              entry: _,
              voiceChannel: h ? C : void 0,
              isTyping: T,
              nameplate: i,
              ...a,
              ...c
          });
};

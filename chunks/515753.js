n.d(t, {
    PZ: () => el,
    Qj: () => ea,
    RS: () => es,
    ZP: () => ec
}),
    n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
    c = n(568611),
    u = n(91192),
    d = n(873546),
    E = n(442837),
    f = n(481060),
    h = n(493683),
    _ = n(239091),
    p = n(420660),
    C = n(468363),
    O = n(297369),
    g = n(956221),
    T = n(771173),
    I = n(385499),
    S = n(570908),
    N = n(702321),
    A = n(201895),
    b = n(43267),
    v = n(933557),
    m = n(979264),
    P = n(163889),
    y = n(111028),
    L = n(540059),
    Z = n(853856),
    D = n(93687),
    R = n(785232),
    j = n(850020),
    U = n(379839),
    x = n(359135),
    w = n(516817),
    M = n(878857),
    G = n(518950),
    H = n(199902),
    k = n(158776),
    V = n(306680),
    F = n(699516),
    B = n(111583),
    W = n(9156),
    K = n(594174),
    z = n(709054),
    Y = n(998502),
    Q = n(981631),
    q = n(388032),
    X = n(85496);
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ee(e, t) {
    if (null == e) return {};
    var n,
        l,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                i = Object.keys(e);
            for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let et = Y.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    en = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    el = (e) => {
        let { nameplate: t } = e,
            n = (0, U.A)(t);
        return (0, l.jsx)(
            f.P3F,
            $(J({ className: X.closeButton }, e), {
                focusProps: {
                    offset: {
                        top: -2,
                        bottom: -2,
                        left: -2,
                        right: 6
                    }
                },
                children: (0, l.jsx)('div', {
                    style: n,
                    className: o()({ [X.closeButtonBackgroundPlated]: null != t }),
                    children: (0, l.jsx)(f.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(X.closeIcon, { [X.closeIconPlated]: null != t })
                    })
                })
            })
        );
    },
    er = () =>
        (0, l.jsx)(f.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    ei = () =>
        (0, l.jsx)(f.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    eo = () =>
        (0, l.jsx)(f.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    ea = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: i, avatarWithTextClassName: a, interactiveClassName: s, text: u, children: E, locationState: h, onClick: _, className: p, role: C, 'aria-posinset': O, 'aria-setsize': g, listItemRef: T } = e,
            I = ee(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let N = (0, L.Q3)('PrivateChannelLinkButton');
        return (0, l.jsx)(P.Z, {
            className: o()(X.channel, { [X.fullWidth]: d.tq }, p),
            onClick: _,
            role: C,
            focusProps: J({ within: !0 }, en),
            'aria-posinset': O,
            'aria-setsize': g,
            ref: T,
            children: (0, l.jsx)(f.vjx, {
                as: 'div',
                selected: n,
                className: o()(s, X.interactive, X.linkButton, { [X.interactiveSelected]: n }),
                children: (0, l.jsxs)(
                    c.rU,
                    $(
                        J(
                            {
                                to: {
                                    pathname: t,
                                    state: h
                                },
                                className: X.link
                            },
                            I
                        ),
                        {
                            children: [
                                (0, l.jsx)(S.Z, {
                                    selected: n,
                                    muted: !1,
                                    avatar: (0, l.jsx)(r, {
                                        size: N ? 'refresh_sm' : void 0,
                                        className: o()(X.linkButtonIcon, i),
                                        color: 'currentColor'
                                    }),
                                    name: u,
                                    innerClassName: o()(X.avatarWithText, a)
                                }),
                                E
                            ]
                        }
                    )
                )
            })
        });
    };
function es(e) {
    var t;
    let { channel: i, isGDMFacepileEnabled: a, selected: d = !1, user: C, activities: g, applicationStream: L, voiceChannel: D, isTyping: j, status: U, isMobile: H, nameplate: k, 'aria-posinset': B, 'aria-setsize': K } = e,
        [z, Y] = r.useState(!1),
        ea = r.useRef(null),
        es = r.useRef(null),
        {
            avatarSrc: ec,
            avatarDecorationSrc: eu,
            eventHandlers: ed
        } = (0, G.Z)({
            user: C,
            size: f.EFr.SIZE_32,
            animateOnHover: !(d || z)
        }),
        eE = (0, E.e7)([W.ZP], () => W.ZP.isChannelMuted(i.getGuildId(), i.id)),
        { ignored: ef, blocked: eh } = (0, E.cj)([F.Z], () => ({
            ignored: F.Z.isIgnored(i.getRecipientId()),
            blocked: F.Z.isBlocked(i.getRecipientId())
        })),
        e_ = (0, E.e7)([V.ZP], () => V.ZP.getMentionCount(i.id) > 0),
        ep = (0, v.ZP)(i),
        eC = (0, E.e7)([Z.Z], () => Z.Z.isFavorite(i.id)),
        eO = () => {
            Y(!0);
        },
        eg = () => {
            Y(!1);
        },
        eT = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(i.id, d, t);
        },
        eI = () => {
            h.Z.preload(Q.ME, i.id);
        },
        eS = (e) => {
            e.stopPropagation();
        },
        eN = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = ea.current) || void 0 === t || t.click();
            }
        },
        eA = (e) => {
            i.isMultiUserDM()
                ? (0, _.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('53912'), n.e('94091')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, l.jsx)(
                                  e,
                                  $(J({}, t), {
                                      channel: i,
                                      selected: d
                                  })
                              );
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, _.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('98254'), n.e('56826'), n.e('67740')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              $(J({}, t), {
                                  user: C,
                                  channel: i,
                                  channelSelected: d
                              })
                          );
                  });
        },
        eb = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = q.NW.formatToPlainString(q.t.hJ5Ap6, { name: ep }),
                r = q.NW.format(q.t.SSIVOj, { name: ep });
            i.isManaged() && ((t = q.NW.formatToPlainString(q.t.hVGjER, { name: ep })), (r = q.NW.format(q.t.IK1Qvr, { name: ep }))),
                (0, f.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, l.jsx)(
                            e,
                            J(
                                {
                                    header: t,
                                    body: r,
                                    onSubmit: eT
                                },
                                n
                            )
                        );
                });
        },
        ev = () =>
            i.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: X.subtext,
                      children: (0, N.Z)(i.id) ? q.NW.string(q.t.FL5T09) : q.NW.string(q.t.NnY5lZ)
                  })
                : i.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: X.subtext,
                        children: q.NW.format(q.t.CxSA5O, { members: i.recipients.length + 1 })
                    })
                  : (0, O.Z)({
                          activities: g,
                          status: U,
                          applicationStream: L,
                          voiceChannel: D
                      })
                    ? (0, l.jsx)(T.Z, {
                          location: 'PrivateChannel',
                          user: C,
                          activities: g,
                          voiceChannel: D,
                          applicationStream: L,
                          animate: z,
                          emojiClassName: eE ? X.mutedEmoji : void 0
                      })
                    : null,
        em = () => {
            let e = f.EFr.SIZE_32;
            if (i.isMultiUserDM())
                return i.recipients.length >= 2 && a && null == i.icon
                    ? (0, l.jsx)(R.Z, {
                          'aria-hidden': !0,
                          recipients: i.recipients,
                          size: e,
                          isTyping: j,
                          status: U
                      })
                    : (0, l.jsx)(
                          et,
                          $(J({}, ed), {
                              src: (0, b.x)(i),
                              'aria-hidden': !0,
                              size: e,
                              status: j ? Q.Skl.ONLINE : U,
                              isTyping: j
                          })
                      );
            s()(null != C, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                C.isSystemUser() || (t = (0, p.Z)(g) ? Q.Skl.STREAMING : U),
                (0, l.jsx)(
                    et,
                    $(J({}, ed), {
                        size: f.EFr.SIZE_32,
                        src: ec,
                        avatarDecoration: eu,
                        status: t,
                        isMobile: H,
                        isTyping: j,
                        'aria-label': C.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eP = i.isMultiUserDM(),
        ey = i.isSystemDM(),
        eL = (0, M.Q)(),
        eZ = !eP && !ey && i.type === Q.d4z.DM,
        eD = eZ && (null == C ? void 0 : C.primaryGuild) != null,
        eR = eZ && ef,
        ej = eZ && eh,
        eU = eD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      ep,
                      (0, l.jsx)(m.ZP, {
                          primaryGuild: null == C ? void 0 : C.primaryGuild,
                          userId: null == C ? void 0 : C.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: X.clanTag
                      })
                  ]
              })
            : ep,
        ex = null !== (t = eE || eR || ej) && void 0 !== t && t,
        ew = r.useRef(null);
    return (0, l.jsx)(u.mh, {
        id: i.id,
        children: (e) => {
            var { role: t } = e,
                n = ee(e, ['role']);
            return (0, l.jsx)(P.Z, {
                className: o()(X.channel, X.dm),
                role: t,
                focusProps: $(J({}, en), {
                    focusTarget: ea,
                    ringTarget: es
                }),
                ref: es,
                onMouseEnter: eO,
                onMouseLeave: eg,
                onMouseDown: eI,
                onContextMenu: eA,
                'aria-setsize': K,
                'aria-posinset': B,
                children: (0, l.jsxs)(f.vjx, {
                    className: o()(X.interactive, {
                        [X.interactiveSystemDM]: eL && ey,
                        [X.interactiveSelected]: d,
                        [X.platedWrapper]: null != k
                    }),
                    as: 'div',
                    onClick: eN,
                    muted: ex,
                    selected: d,
                    children: [
                        (0, l.jsx)(w.Z, {
                            nameplate: k,
                            selected: d,
                            hovered: z,
                            content: ew.current,
                            placement: x.i.CHANNEL
                        }),
                        (0, l.jsx)(
                            c.rU,
                            $(
                                J(
                                    {
                                        innerRef: ea,
                                        to: Q.Z5c.CHANNEL(Q.ME, i.id),
                                        className: o()(X.link, { [X.plated]: null != k }),
                                        'aria-label': (0, A.ZP)({
                                            channel: i,
                                            unread: e_
                                        })
                                    },
                                    n
                                ),
                                {
                                    children: (0, l.jsx)(S.Z, {
                                        ref: ew,
                                        avatar: em(),
                                        selected: d,
                                        highlighted: e_,
                                        muted: ex,
                                        subText: ev(),
                                        name: (0, l.jsx)(y.Z, {
                                            tooltipClassName: X.overflowTooltip,
                                            children: eU
                                        }),
                                        decorators: i.isSystemDM()
                                            ? (0, l.jsx)(I.Z, {
                                                  className: X.decorator,
                                                  type: I.Z.Types.SYSTEM_DM,
                                                  verified: !0
                                              })
                                            : null
                                    })
                                }
                            )
                        ),
                        eC ? (0, l.jsx)(er, {}) : null,
                        eR ? (0, l.jsx)(ei, {}) : null,
                        ej ? (0, l.jsx)(eo, {}) : null,
                        (0, l.jsx)(el, {
                            'aria-label': eP ? q.NW.string(q.t['26C4oq']) : q.NW.string(q.t.jsvgc3),
                            onClick: eP ? eb : eT,
                            onMouseDown: eS,
                            nameplate: k
                        })
                    ]
                })
            });
        }
    });
}
let ec = (e) => {
    var { channel: t, selected: n } = e,
        r = ee(e, ['channel', 'selected']);
    let i = (0, E.e7)([K.default], () => K.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: a, isFacepileEnabled: s } = D.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == i ? void 0 : i.id,
        u = (0, E.cj)(
            [k.Z, H.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
                        let n = k.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === Q.Skl.ONLINE) && (e = Q.Skl.ONLINE);
                    }
                } else null != c && (e = k.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? k.Z.getActivities(c) : null,
                    applicationStream: null != c ? H.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && k.Z.isMobileOnline(c)
                };
            },
            [t, c, o]
        ),
        { voiceActivityStatusEnabled: d } = (0, C.U)({ location: 'PrivateChannel' }),
        { voiceChannel: f } = (0, g.Z)({
            userId: c,
            surface: 'private-channel'
        }),
        h = (0, j.K)({
            location: 'PrivateChannel',
            user: i,
            privateChannel: t
        }),
        _ = (0, E.e7)(
            [K.default, B.Z],
            () =>
                t.isMultiUserDM()
                    ? !!a &&
                      z.default.keys(B.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = K.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != i && B.Z.isTyping(t.id, t.getRecipientId()),
            [t, i, a]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(
              es,
              J(
                  {
                      channel: t,
                      selected: n,
                      isTyping: _,
                      status: u.status === Q.Skl.ONLINE ? Q.Skl.ONLINE : void 0,
                      isGDMFacepileEnabled: s
                  },
                  r
              )
          )
        : (0, l.jsx)(
              es,
              J(
                  {
                      channel: t,
                      selected: n,
                      user: i,
                      voiceChannel: d ? f : void 0,
                      isTyping: _,
                      nameplate: h
                  },
                  r,
                  u
              )
          );
};

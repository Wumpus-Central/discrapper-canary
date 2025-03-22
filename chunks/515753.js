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
    p = n(493683),
    h = n(239091),
    C = n(420660),
    _ = n(468363),
    O = n(326255),
    g = n(956221),
    S = n(747017),
    T = n(385499),
    I = n(570908),
    N = n(702321),
    b = n(201895),
    v = n(43267),
    m = n(933557),
    A = n(979264),
    P = n(163889),
    y = n(111028),
    L = n(540059),
    R = n(853856),
    j = n(93687),
    Z = n(785232),
    D = n(850020),
    U = n(379839),
    x = n(359135),
    w = n(516817),
    M = n(878857),
    G = n(518950),
    k = n(199902),
    H = n(158776),
    F = n(306680),
    V = n(699516),
    B = n(111583),
    W = n(9156),
    z = n(594174),
    K = n(709054),
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
        var { route: t, selected: n, icon: r, iconClassName: i, avatarWithTextClassName: a, interactiveClassName: s, text: u, children: E, locationState: p, onClick: h, className: C, role: _, 'aria-posinset': O, 'aria-setsize': g, listItemRef: S } = e,
            T = ee(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let N = (0, L.Q3)('PrivateChannelLinkButton');
        return (0, l.jsx)(P.Z, {
            className: o()(X.channel, { [X.fullWidth]: d.tq }, C),
            onClick: h,
            role: _,
            focusProps: J({ within: !0 }, en),
            'aria-posinset': O,
            'aria-setsize': g,
            ref: S,
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
                                    state: p
                                },
                                className: X.link
                            },
                            T
                        ),
                        {
                            children: [
                                (0, l.jsx)(I.Z, {
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
    let { channel: i, isGDMFacepileEnabled: a, selected: d = !1, user: _, activities: g, applicationStream: L, voiceChannel: j, isTyping: D, status: U, isMobile: k, nameplate: H, 'aria-posinset': B, 'aria-setsize': z } = e,
        [K, Y] = r.useState(!1),
        ea = r.useRef(null),
        es = r.useRef(null),
        {
            avatarSrc: ec,
            avatarDecorationSrc: eu,
            eventHandlers: ed
        } = (0, G.Z)({
            user: _,
            size: f.EFr.SIZE_32,
            animateOnHover: !(d || K)
        }),
        eE = (0, E.e7)([W.ZP], () => W.ZP.isChannelMuted(i.getGuildId(), i.id)),
        { ignored: ef, blocked: ep } = (0, E.cj)([V.Z], () => ({
            ignored: V.Z.isIgnored(i.getRecipientId()),
            blocked: V.Z.isBlocked(i.getRecipientId())
        })),
        eh = (0, E.e7)([F.ZP], () => F.ZP.getMentionCount(i.id) > 0),
        eC = (0, m.ZP)(i),
        e_ = (0, E.e7)([R.Z], () => R.Z.isFavorite(i.id)),
        eO = () => {
            Y(!0);
        },
        eg = () => {
            Y(!1);
        },
        eS = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), p.Z.closePrivateChannel(i.id, d, t);
        },
        eT = () => {
            p.Z.preload(Q.ME, i.id);
        },
        eI = (e) => {
            e.stopPropagation();
        },
        eN = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = ea.current) || void 0 === t || t.click();
            }
        },
        eb = (e) => {
            i.isMultiUserDM()
                ? (0, h.jW)(
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
                : (0, h.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('98254'), n.e('56826'), n.e('67740')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              $(J({}, t), {
                                  user: _,
                                  channel: i,
                                  channelSelected: d
                              })
                          );
                  });
        },
        ev = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = q.NW.formatToPlainString(q.t.hJ5Ap6, { name: eC }),
                r = q.NW.format(q.t.SSIVOj, { name: eC });
            i.isManaged() && ((t = q.NW.formatToPlainString(q.t.hVGjER, { name: eC })), (r = q.NW.format(q.t.IK1Qvr, { name: eC }))),
                (0, f.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, l.jsx)(
                            e,
                            J(
                                {
                                    header: t,
                                    body: r,
                                    onSubmit: eS
                                },
                                n
                            )
                        );
                });
        },
        em = () =>
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
                          voiceChannel: j
                      })
                    ? (0, l.jsx)(S.Z, {
                          user: _,
                          activities: g,
                          voiceChannel: j,
                          applicationStream: L,
                          animate: K,
                          emojiClassName: eE ? X.mutedEmoji : void 0
                      })
                    : null,
        eA = () => {
            let e = f.EFr.SIZE_32;
            if (i.isMultiUserDM())
                return i.recipients.length >= 2 && a && null == i.icon
                    ? (0, l.jsx)(Z.Z, {
                          'aria-hidden': !0,
                          recipients: i.recipients,
                          size: e,
                          isTyping: D,
                          status: U
                      })
                    : (0, l.jsx)(
                          et,
                          $(J({}, ed), {
                              src: (0, v.x)(i),
                              'aria-hidden': !0,
                              size: e,
                              status: D ? Q.Skl.ONLINE : U,
                              isTyping: D
                          })
                      );
            s()(null != _, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                _.isSystemUser() || (t = (0, C.Z)(g) ? Q.Skl.STREAMING : U),
                (0, l.jsx)(
                    et,
                    $(J({}, ed), {
                        size: f.EFr.SIZE_32,
                        src: ec,
                        avatarDecoration: eu,
                        status: t,
                        isMobile: k,
                        isTyping: D,
                        'aria-label': _.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eP = i.isMultiUserDM(),
        ey = i.isSystemDM(),
        eL = (0, M.Q)(),
        eR = !eP && !ey && i.type === Q.d4z.DM,
        ej = eR && (null == _ ? void 0 : _.primaryGuild) != null,
        eZ = eR && ef,
        eD = eR && ep,
        eU = ej
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eC,
                      (0, l.jsx)(A.ZP, {
                          primaryGuild: null == _ ? void 0 : _.primaryGuild,
                          userId: null == _ ? void 0 : _.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: X.clanTag
                      })
                  ]
              })
            : eC,
        [ex, ew] = r.useState(!1),
        eM = null !== (t = eE || eZ || eD) && void 0 !== t && t,
        eG = r.useRef(null);
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
                onFocus: () => ew(!0),
                onBlur: () => ew(!1),
                onMouseEnter: eO,
                onMouseLeave: eg,
                onMouseDown: eT,
                onContextMenu: eb,
                'aria-setsize': z,
                'aria-posinset': B,
                children: (0, l.jsxs)(f.vjx, {
                    className: o()(X.interactive, {
                        [X.interactiveSystemDM]: eL && ey,
                        [X.interactiveSelected]: d,
                        [X.platedWrapper]: null != H
                    }),
                    as: 'div',
                    onClick: eN,
                    muted: eM,
                    selected: d,
                    children: [
                        (0, l.jsx)(w.Z, {
                            nameplate: H,
                            selected: d,
                            hovered: K,
                            content: eG.current,
                            placement: x.i.CHANNEL
                        }),
                        (0, l.jsx)(
                            c.rU,
                            $(
                                J(
                                    {
                                        innerRef: ea,
                                        to: Q.Z5c.CHANNEL(Q.ME, i.id),
                                        className: o()(X.link, {
                                            [X.plated]: null != H,
                                            [X.platedHover]: null != H && (K || ex)
                                        }),
                                        'aria-label': (0, b.ZP)({
                                            channel: i,
                                            unread: eh
                                        })
                                    },
                                    n
                                ),
                                {
                                    children: (0, l.jsx)(I.Z, {
                                        ref: eG,
                                        avatar: eA(),
                                        selected: d,
                                        highlighted: eh,
                                        muted: eM,
                                        subText: em(),
                                        name: (0, l.jsx)(y.Z, {
                                            tooltipClassName: X.overflowTooltip,
                                            children: eU
                                        }),
                                        decorators: i.isSystemDM()
                                            ? (0, l.jsx)(T.Z, {
                                                  className: X.decorator,
                                                  type: T.Z.Types.SYSTEM_DM,
                                                  verified: !0
                                              })
                                            : null
                                    })
                                }
                            )
                        ),
                        e_ ? (0, l.jsx)(er, {}) : null,
                        eZ ? (0, l.jsx)(ei, {}) : null,
                        eD ? (0, l.jsx)(eo, {}) : null,
                        (0, l.jsx)(el, {
                            'aria-label': eP ? q.NW.string(q.t['26C4oq']) : q.NW.string(q.t.jsvgc3),
                            onClick: eP ? ev : eS,
                            onMouseDown: eI,
                            nameplate: H
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
    let i = (0, E.e7)([z.default], () => z.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: a, isFacepileEnabled: s } = j.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == i ? void 0 : i.id,
        u = (0, E.cj)(
            [H.Z, k.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
                        let n = H.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === Q.Skl.ONLINE) && (e = Q.Skl.ONLINE);
                    }
                } else null != c && (e = H.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? H.Z.getActivities(c) : null,
                    applicationStream: null != c ? k.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && H.Z.isMobileOnline(c)
                };
            },
            [t, c, o]
        ),
        { voiceActivityStatusEnabled: d } = (0, _.U)({ location: 'PrivateChannel' }),
        { voiceChannel: f } = (0, g.Z)({
            userId: c,
            surface: 'private-channel'
        }),
        p = (0, D.K)({
            location: 'PrivateChannel',
            user: i,
            privateChannel: t
        }),
        h = (0, E.e7)(
            [z.default, B.Z],
            () =>
                t.isMultiUserDM()
                    ? !!a &&
                      K.default.keys(B.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = z.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
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
                      isTyping: h,
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
                      isTyping: h,
                      nameplate: p
                  },
                  r,
                  u
              )
          );
};

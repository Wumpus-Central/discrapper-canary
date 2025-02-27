n.d(t, {
    PZ: () => et,
    Qj: () => ei,
    RS: () => eo,
    ZP: () => ea
}),
    n(47120);
var r = n(200651),
    l = n(192379),
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
    C = n(420660),
    p = n(468363),
    O = n(297369),
    g = n(956221),
    T = n(771173),
    I = n(385499),
    S = n(570908),
    N = n(702321),
    A = n(201895),
    v = n(43267),
    b = n(933557),
    m = n(979264),
    P = n(163889),
    y = n(111028),
    L = n(540059),
    D = n(853856),
    R = n(93687),
    Z = n(785232),
    j = n(850020),
    U = n(516817),
    w = n(878857),
    x = n(518950),
    M = n(199902),
    G = n(158776),
    H = n(306680),
    k = n(699516),
    F = n(111583),
    V = n(9156),
    B = n(594174),
    W = n(709054),
    z = n(998502),
    K = n(981631),
    Y = n(388032),
    Q = n(759693);
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function J(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let $ = z.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    ee = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    et = (e) =>
        (0, r.jsx)(
            f.P3F,
            X(q({ className: Q.closeButton }, e), {
                focusProps: {
                    offset: {
                        top: -2,
                        bottom: -2,
                        left: -2,
                        right: 6
                    }
                },
                children: (0, r.jsx)(f.Dio, {
                    size: 'md',
                    color: 'currentColor',
                    className: Q.closeIcon
                })
            })
        ),
    en = () =>
        (0, r.jsx)(f.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: Q.favoriteIcon
        }),
    er = () =>
        (0, r.jsx)(f.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: Q.favoriteIcon
        }),
    el = () =>
        (0, r.jsx)(f.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: Q.favoriteIcon
        }),
    ei = (e) => {
        var { route: t, selected: n, icon: l, iconClassName: i, avatarWithTextClassName: a, interactiveClassName: s, text: u, children: E, locationState: h, onClick: _, className: C, role: p, 'aria-posinset': O, 'aria-setsize': g, listItemRef: T } = e,
            I = J(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let N = (0, L.Q3)('PrivateChannelLinkButton');
        return (0, r.jsx)(P.Z, {
            className: o()(Q.channel, { [Q.fullWidth]: d.tq }, C),
            onClick: _,
            role: p,
            focusProps: q({ within: !0 }, ee),
            'aria-posinset': O,
            'aria-setsize': g,
            ref: T,
            children: (0, r.jsx)(f.vjx, {
                as: 'div',
                selected: n,
                className: o()(s, Q.interactive, Q.linkButton, { [Q.interactiveSelected]: n }),
                children: (0, r.jsxs)(
                    c.rU,
                    X(
                        q(
                            {
                                to: {
                                    pathname: t,
                                    state: h
                                },
                                className: Q.link
                            },
                            I
                        ),
                        {
                            children: [
                                (0, r.jsx)(S.Z, {
                                    selected: n,
                                    muted: !1,
                                    avatar: (0, r.jsx)(l, {
                                        size: N ? 'refresh_sm' : void 0,
                                        className: o()(Q.linkButtonIcon, i),
                                        color: 'currentColor'
                                    }),
                                    name: u,
                                    innerClassName: o()(Q.avatarWithText, a)
                                }),
                                E
                            ]
                        }
                    )
                )
            })
        });
    };
function eo(e) {
    var t;
    let { channel: i, isGDMFacepileEnabled: a, selected: d = !1, user: p, activities: g, applicationStream: L, voiceChannel: R, isTyping: j, status: M, isMobile: G, nameplate: F, 'aria-posinset': B, 'aria-setsize': W } = e,
        [z, ei] = l.useState(!1),
        eo = l.useRef(null),
        ea = l.useRef(null),
        {
            avatarSrc: es,
            avatarDecorationSrc: ec,
            eventHandlers: eu
        } = (0, x.Z)({
            user: p,
            size: f.EFr.SIZE_32,
            animateOnHover: !(d || z)
        }),
        ed = (0, E.e7)([V.ZP], () => V.ZP.isChannelMuted(i.getGuildId(), i.id)),
        { ignored: eE, blocked: ef } = (0, E.cj)([k.Z], () => ({
            ignored: k.Z.isIgnored(i.getRecipientId()),
            blocked: k.Z.isBlocked(i.getRecipientId())
        })),
        eh = (0, E.e7)([H.ZP], () => H.ZP.getMentionCount(i.id) > 0),
        e_ = (0, b.ZP)(i),
        eC = (0, E.e7)([D.Z], () => D.Z.isFavorite(i.id)),
        ep = () => {
            ei(!0);
        },
        eO = () => {
            ei(!1);
        },
        eg = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(i.id, d, t);
        },
        eT = () => {
            h.Z.preload(K.ME, i.id);
        },
        eI = (e) => {
            e.stopPropagation();
        },
        eS = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = eo.current) || void 0 === t || t.click();
            }
        },
        eN = (e) => {
            i.isMultiUserDM()
                ? (0, _.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('25421'), n.e('80243')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  X(q({}, t), {
                                      channel: i,
                                      selected: d
                                  })
                              );
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, _.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('98254'), n.e('56826'), n.e('11401')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              X(q({}, t), {
                                  user: p,
                                  channel: i,
                                  channelSelected: d
                              })
                          );
                  });
        },
        eA = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = Y.NW.formatToPlainString(Y.t.hJ5Ap6, { name: e_ }),
                l = Y.NW.format(Y.t.SSIVOj, { name: e_ });
            i.isManaged() && ((t = Y.NW.formatToPlainString(Y.t.hVGjER, { name: e_ })), (l = Y.NW.format(Y.t.IK1Qvr, { name: e_ }))),
                (0, f.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            q(
                                {
                                    header: t,
                                    body: l,
                                    onSubmit: eg
                                },
                                n
                            )
                        );
                });
        },
        ev = () =>
            i.isSystemDM()
                ? (0, r.jsx)('div', {
                      className: Q.subtext,
                      children: (0, N.Z)(i.id) ? Y.NW.string(Y.t.FL5T09) : Y.NW.string(Y.t.NnY5lZ)
                  })
                : i.isMultiUserDM()
                  ? (0, r.jsx)('div', {
                        className: Q.subtext,
                        children: Y.NW.format(Y.t.CxSA5O, { members: i.recipients.length + 1 })
                    })
                  : (0, O.Z)({
                          activities: g,
                          status: M,
                          applicationStream: L,
                          voiceChannel: R
                      })
                    ? (0, r.jsx)(T.Z, {
                          location: 'PrivateChannel',
                          user: p,
                          activities: g,
                          voiceChannel: R,
                          applicationStream: L,
                          animate: z,
                          emojiClassName: ed ? Q.mutedEmoji : void 0
                      })
                    : null,
        eb = () => {
            let e = f.EFr.SIZE_32;
            if (i.isMultiUserDM())
                return i.recipients.length >= 2 && a && null == i.icon
                    ? (0, r.jsx)(Z.Z, {
                          'aria-hidden': !0,
                          recipients: i.recipients,
                          size: e,
                          isTyping: j,
                          status: M
                      })
                    : (0, r.jsx)(
                          $,
                          X(q({}, eu), {
                              src: (0, v.x)(i),
                              'aria-hidden': !0,
                              size: e,
                              status: j ? K.Skl.ONLINE : M,
                              isTyping: j
                          })
                      );
            s()(null != p, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                p.isSystemUser() || (t = (0, C.Z)(g) ? K.Skl.STREAMING : M),
                (0, r.jsx)(
                    $,
                    X(q({}, eu), {
                        size: f.EFr.SIZE_32,
                        src: es,
                        avatarDecoration: ec,
                        status: t,
                        isMobile: G,
                        isTyping: j,
                        'aria-label': p.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        em = i.isMultiUserDM(),
        eP = i.isSystemDM(),
        ey = (0, w.Q)(),
        eL = !em && !eP && i.type === K.d4z.DM,
        eD = eL && (null == p ? void 0 : p.primaryGuild) != null,
        eR = eL && eE,
        eZ = eL && ef,
        ej = eD
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      e_,
                      (0, r.jsx)(m.ZP, {
                          primaryGuild: null == p ? void 0 : p.primaryGuild,
                          userId: null == p ? void 0 : p.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: Q.clanTag
                      })
                  ]
              })
            : e_,
        eU = null !== (t = ed || eR || eZ) && void 0 !== t && t,
        ew = l.useRef(null);
    return (0, r.jsx)(u.mh, {
        id: i.id,
        children: (e) => {
            var { role: t } = e,
                n = J(e, ['role']);
            return (0, r.jsx)(P.Z, {
                className: o()(Q.channel, Q.dm),
                role: t,
                focusProps: X(q({}, ee), {
                    focusTarget: eo,
                    ringTarget: ea
                }),
                ref: ea,
                onMouseEnter: ep,
                onMouseLeave: eO,
                onMouseDown: eT,
                onContextMenu: eN,
                'aria-setsize': W,
                'aria-posinset': B,
                children: (0, r.jsxs)(f.vjx, {
                    className: o()(Q.interactive, {
                        [Q.interactiveSystemDM]: ey && eP,
                        [Q.interactiveSelected]: d,
                        [Q.platedWrapper]: null != F
                    }),
                    as: 'div',
                    onClick: eS,
                    muted: eU,
                    selected: d,
                    children: [
                        (0, r.jsx)(U.Z, {
                            nameplate: F,
                            selected: d,
                            hovered: z,
                            content: ew.current
                        }),
                        (0, r.jsx)(
                            c.rU,
                            X(
                                q(
                                    {
                                        innerRef: eo,
                                        to: K.Z5c.CHANNEL(K.ME, i.id),
                                        className: o()(Q.link, { [Q.plated]: null != F }),
                                        'aria-label': (0, A.ZP)({
                                            channel: i,
                                            unread: eh
                                        })
                                    },
                                    n
                                ),
                                {
                                    children: (0, r.jsx)(S.Z, {
                                        ref: ew,
                                        avatar: eb(),
                                        selected: d,
                                        highlighted: eh,
                                        muted: eU,
                                        subText: ev(),
                                        name: (0, r.jsx)(y.Z, {
                                            tooltipClassName: Q.overflowTooltip,
                                            children: ej
                                        }),
                                        decorators: i.isSystemDM()
                                            ? (0, r.jsx)(I.Z, {
                                                  className: Q.decorator,
                                                  type: I.Z.Types.SYSTEM_DM,
                                                  verified: !0
                                              })
                                            : null
                                    })
                                }
                            )
                        ),
                        eC ? (0, r.jsx)(en, {}) : null,
                        eR ? (0, r.jsx)(er, {}) : null,
                        eZ ? (0, r.jsx)(el, {}) : null,
                        (0, r.jsx)(et, {
                            'aria-label': em ? Y.NW.string(Y.t['26C4oq']) : Y.NW.string(Y.t.jsvgc3),
                            onClick: em ? eA : eg,
                            onMouseDown: eI
                        })
                    ]
                })
            });
        }
    });
}
let ea = (e) => {
    var { channel: t, selected: n } = e,
        l = J(e, ['channel', 'selected']);
    let i = (0, E.e7)([B.default], () => B.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: a, isFacepileEnabled: s } = R.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == i ? void 0 : i.id,
        u = (0, E.cj)(
            [G.Z, M.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
                        let n = G.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === K.Skl.ONLINE) && (e = K.Skl.ONLINE);
                    }
                } else null != c && (e = G.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? G.Z.getActivities(c) : null,
                    applicationStream: null != c ? M.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && G.Z.isMobileOnline(c)
                };
            },
            [t, c, o]
        ),
        { voiceActivityStatusEnabled: d } = (0, p.U)({ location: 'PrivateChannel' }),
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
            [B.default, F.Z],
            () =>
                t.isMultiUserDM()
                    ? !!a &&
                      W.default.keys(F.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = B.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != i && F.Z.isTyping(t.id, t.getRecipientId()),
            [t, i, a]
        );
    return t.isMultiUserDM()
        ? (0, r.jsx)(
              eo,
              q(
                  {
                      channel: t,
                      selected: n,
                      isTyping: _,
                      status: u.status === K.Skl.ONLINE ? K.Skl.ONLINE : void 0,
                      isGDMFacepileEnabled: s
                  },
                  l
              )
          )
        : (0, r.jsx)(
              eo,
              q(
                  {
                      channel: t,
                      selected: n,
                      user: i,
                      voiceChannel: d ? f : void 0,
                      isTyping: _,
                      nameplate: h
                  },
                  l,
                  u
              )
          );
};

n.d(t, {
    PZ: () => ee,
    Qj: () => er,
    ZP: () => ea
}),
    n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    c = n(568611),
    u = n(91192),
    d = n(873546),
    E = n(442837),
    f = n(481060),
    h = n(493683),
    p = n(239091),
    C = n(420660),
    _ = n(468363),
    g = n(297369),
    O = n(956221),
    T = n(771173),
    I = n(385499),
    S = n(570908),
    N = n(702321),
    v = n(201895),
    m = n(43267),
    b = n(933557),
    A = n(979264),
    P = n(163889),
    y = n(111028),
    L = n(540059),
    Z = n(853856),
    j = n(93687),
    D = n(785232),
    R = n(516817),
    U = n(878857),
    x = n(518950),
    w = n(199902),
    M = n(158776),
    G = n(306680),
    k = n(699516),
    H = n(111583),
    F = n(9156),
    V = n(594174),
    B = n(709054),
    W = n(998502),
    z = n(981631),
    K = n(388032),
    Q = n(759693);
function Y(e) {
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
function q(e, t) {
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
function X(e, t) {
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
let J = W.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    $ = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    ee = (e) =>
        (0, l.jsx)(
            f.P3F,
            q(Y({ className: Q.closeButton }, e), {
                focusProps: {
                    offset: {
                        top: -2,
                        bottom: -2,
                        left: -2,
                        right: 6
                    }
                },
                children: (0, l.jsx)(f.Dio, {
                    size: 'md',
                    color: 'currentColor',
                    className: Q.closeIcon
                })
            })
        ),
    et = () =>
        (0, l.jsx)(f.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: Q.favoriteIcon
        }),
    en = () =>
        (0, l.jsx)(f.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: Q.favoriteIcon
        }),
    el = () =>
        (0, l.jsx)(f.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: Q.favoriteIcon
        }),
    er = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: i, avatarWithTextClassName: o, interactiveClassName: s, text: u, children: E, locationState: h, onClick: p, className: C, role: _, 'aria-posinset': g, 'aria-setsize': O, listItemRef: T } = e,
            I = X(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let N = (0, L.Q3)('PrivateChannelLinkButton');
        return (0, l.jsx)(P.Z, {
            className: a()(Q.channel, { [Q.fullWidth]: d.tq }, C),
            onClick: p,
            role: _,
            focusProps: Y({ within: !0 }, $),
            'aria-posinset': g,
            'aria-setsize': O,
            ref: T,
            children: (0, l.jsx)(f.vjx, {
                as: 'div',
                selected: n,
                className: a()(s, Q.interactive, Q.linkButton, { [Q.interactiveSelected]: n }),
                children: (0, l.jsxs)(
                    c.rU,
                    q(
                        Y(
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
                                (0, l.jsx)(S.Z, {
                                    selected: n,
                                    muted: !1,
                                    avatar: (0, l.jsx)(r, {
                                        size: N ? 'refresh_sm' : void 0,
                                        className: a()(Q.linkButtonIcon, i),
                                        color: 'currentColor'
                                    }),
                                    name: u,
                                    innerClassName: a()(Q.avatarWithText, o)
                                }),
                                E
                            ]
                        }
                    )
                )
            })
        });
    };
function ei(e) {
    var t;
    let { channel: i, isGDMFacepileEnabled: o, selected: d = !1, user: _, activities: O, applicationStream: L, voiceChannel: j, isTyping: w, status: M, isMobile: H, nameplate: V, 'aria-posinset': B, 'aria-setsize': W } = e,
        [er, ei] = r.useState(!1),
        ea = r.useRef(null),
        eo = r.useRef(null),
        {
            avatarSrc: es,
            avatarDecorationSrc: ec,
            eventHandlers: eu
        } = (0, x.Z)({
            user: _,
            size: f.EFr.SIZE_32,
            animateOnHover: !(d || er)
        }),
        ed = (0, E.e7)([F.ZP], () => F.ZP.isChannelMuted(i.getGuildId(), i.id)),
        { ignored: eE, blocked: ef } = (0, E.cj)([k.Z], () => ({
            ignored: k.Z.isIgnored(i.getRecipientId()),
            blocked: k.Z.isBlocked(i.getRecipientId())
        })),
        eh = (0, E.e7)([G.ZP], () => G.ZP.getMentionCount(i.id) > 0),
        ep = (0, b.ZP)(i),
        eC = (0, E.e7)([Z.Z], () => Z.Z.isFavorite(i.id)),
        e_ = () => {
            ei(!0);
        },
        eg = () => {
            ei(!1);
        },
        eO = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(i.id, d, t);
        },
        eT = () => {
            h.Z.preload(z.ME, i.id);
        },
        eI = (e) => {
            e.stopPropagation();
        },
        eS = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = ea.current) || void 0 === t || t.click();
            }
        },
        eN = (e) => {
            i.isMultiUserDM()
                ? (0, p.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('25421'), n.e('80243')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, l.jsx)(
                                  e,
                                  q(Y({}, t), {
                                      channel: i,
                                      selected: d
                                  })
                              );
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, p.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('98254'), n.e('56826'), n.e('11401')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              q(Y({}, t), {
                                  user: _,
                                  channel: i,
                                  channelSelected: d
                              })
                          );
                  });
        },
        ev = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = K.NW.formatToPlainString(K.t.hJ5Ap6, { name: ep }),
                r = K.NW.format(K.t.SSIVOj, { name: ep });
            i.isManaged() && ((t = K.NW.formatToPlainString(K.t.hVGjER, { name: ep })), (r = K.NW.format(K.t.IK1Qvr, { name: ep }))),
                (0, f.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, l.jsx)(
                            e,
                            Y(
                                {
                                    header: t,
                                    body: r,
                                    onSubmit: eO
                                },
                                n
                            )
                        );
                });
        },
        em = () =>
            i.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: Q.subtext,
                      children: (0, N.Z)(i.id) ? K.NW.string(K.t.FL5T09) : K.NW.string(K.t.NnY5lZ)
                  })
                : i.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: Q.subtext,
                        children: K.NW.format(K.t.CxSA5O, { members: i.recipients.length + 1 })
                    })
                  : (0, g.Z)({
                          activities: O,
                          status: M,
                          applicationStream: L,
                          voiceChannel: j
                      })
                    ? (0, l.jsx)(T.Z, {
                          location: 'PrivateChannel',
                          user: _,
                          activities: O,
                          voiceChannel: j,
                          applicationStream: L,
                          animate: er,
                          emojiClassName: ed ? Q.mutedEmoji : void 0
                      })
                    : null,
        eb = () => {
            let e = f.EFr.SIZE_32;
            if (i.isMultiUserDM())
                return i.recipients.length >= 2 && o && null == i.icon
                    ? (0, l.jsx)(D.Z, {
                          'aria-hidden': !0,
                          recipients: i.recipients,
                          size: e,
                          isTyping: w,
                          status: M
                      })
                    : (0, l.jsx)(
                          J,
                          q(Y({}, eu), {
                              src: (0, m.x)(i),
                              'aria-hidden': !0,
                              size: e,
                              status: w ? z.Skl.ONLINE : M,
                              isTyping: w
                          })
                      );
            s()(null != _, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                _.isSystemUser() || (t = (0, C.Z)(O) ? z.Skl.STREAMING : M),
                (0, l.jsx)(
                    J,
                    q(Y({}, eu), {
                        size: f.EFr.SIZE_32,
                        src: es,
                        avatarDecoration: ec,
                        status: t,
                        isMobile: H,
                        isTyping: w,
                        'aria-label': _.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eA = i.isMultiUserDM(),
        eP = i.isSystemDM(),
        ey = (0, U.Q)(),
        eL = !eA && !eP && i.type === z.d4z.DM,
        eZ = eL && (null == _ ? void 0 : _.primaryGuild) != null,
        ej = eL && eE,
        eD = eL && ef,
        eR = eZ
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      ep,
                      (0, l.jsx)(A.ZP, {
                          primaryGuild: null == _ ? void 0 : _.primaryGuild,
                          userId: null == _ ? void 0 : _.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: Q.clanTag
                      })
                  ]
              })
            : ep,
        eU = null !== (t = ed || ej || eD) && void 0 !== t && t,
        ex = r.useRef(null);
    return (0, l.jsx)(u.mh, {
        id: i.id,
        children: (e) => {
            var { role: t } = e,
                n = X(e, ['role']);
            return (0, l.jsx)(P.Z, {
                className: a()(Q.channel, Q.dm),
                role: t,
                focusProps: q(Y({}, $), {
                    focusTarget: ea,
                    ringTarget: eo
                }),
                ref: eo,
                onMouseEnter: e_,
                onMouseLeave: eg,
                onMouseDown: eT,
                onContextMenu: eN,
                'aria-setsize': W,
                'aria-posinset': B,
                children: (0, l.jsxs)(f.vjx, {
                    className: a()(Q.interactive, {
                        [Q.interactiveSystemDM]: ey && eP,
                        [Q.interactiveSelected]: d,
                        [Q.platedWrapper]: null != V
                    }),
                    as: 'div',
                    onClick: eS,
                    muted: eU,
                    selected: d,
                    children: [
                        (0, l.jsx)(R.Z, {
                            nameplate: V,
                            selected: d,
                            hovered: er,
                            content: ex.current
                        }),
                        (0, l.jsx)(
                            c.rU,
                            q(
                                Y(
                                    {
                                        innerRef: ea,
                                        to: z.Z5c.CHANNEL(z.ME, i.id),
                                        className: a()(Q.link, { [Q.plated]: null != V }),
                                        'aria-label': (0, v.ZP)({
                                            channel: i,
                                            unread: eh
                                        })
                                    },
                                    n
                                ),
                                {
                                    children: (0, l.jsx)(S.Z, {
                                        ref: ex,
                                        avatar: eb(),
                                        selected: d,
                                        highlighted: eh,
                                        muted: eU,
                                        subText: em(),
                                        name: (0, l.jsx)(y.Z, {
                                            tooltipClassName: Q.overflowTooltip,
                                            children: eR
                                        }),
                                        decorators: i.isSystemDM()
                                            ? (0, l.jsx)(I.Z, {
                                                  className: Q.decorator,
                                                  type: I.Z.Types.SYSTEM_DM,
                                                  verified: !0
                                              })
                                            : null
                                    })
                                }
                            )
                        ),
                        eC ? (0, l.jsx)(et, {}) : null,
                        ej ? (0, l.jsx)(en, {}) : null,
                        eD ? (0, l.jsx)(el, {}) : null,
                        (0, l.jsx)(ee, {
                            'aria-label': eA ? K.NW.string(K.t['26C4oq']) : K.NW.string(K.t.jsvgc3),
                            onClick: eA ? ev : eO,
                            onMouseDown: eI
                        })
                    ]
                })
            });
        }
    });
}
let ea = (e) => {
    var { channel: t, selected: n, nameplate: r } = e,
        i = X(e, ['channel', 'selected', 'nameplate']);
    let a = (0, E.e7)([V.default], () => V.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: s, isFacepileEnabled: c } = j.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        u = null == a ? void 0 : a.id,
        d = (0, E.cj)(
            [M.Z, w.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
                        let n = M.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === z.Skl.ONLINE) && (e = z.Skl.ONLINE);
                    }
                } else null != u && (e = M.Z.getStatus(u));
                return {
                    status: e,
                    activities: null != u ? M.Z.getActivities(u) : null,
                    applicationStream: null != u ? w.Z.getAnyStreamForUser(u) : null,
                    isMobile: null != u && M.Z.isMobileOnline(u)
                };
            },
            [t, u, o]
        ),
        { voiceActivityStatusEnabled: f } = (0, _.U)({ location: 'PrivateChannel' }),
        { voiceChannel: h } = (0, O.Z)({
            userId: u,
            surface: 'private-channel'
        }),
        p = (0, E.e7)(
            [V.default, H.Z],
            () =>
                t.isMultiUserDM()
                    ? !!s &&
                      B.default.keys(H.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = V.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != a && H.Z.isTyping(t.id, t.getRecipientId()),
            [t, a, s]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(
              ei,
              Y(
                  {
                      channel: t,
                      selected: n,
                      isTyping: p,
                      status: d.status === z.Skl.ONLINE ? z.Skl.ONLINE : void 0,
                      isGDMFacepileEnabled: c
                  },
                  i
              )
          )
        : (0, l.jsx)(
              ei,
              Y(
                  {
                      channel: t,
                      selected: n,
                      user: a,
                      voiceChannel: f ? h : void 0,
                      isTyping: p,
                      nameplate: r
                  },
                  i,
                  d
              )
          );
};

n.d(t, {
    PZ: () => en,
    Qj: () => eo,
    RS: () => ea,
    ZP: () => es
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
    C = n(420660),
    p = n(468363),
    g = n(297369),
    O = n(956221),
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
    U = n(379839),
    x = n(516817),
    w = n(878857),
    M = n(518950),
    G = n(199902),
    H = n(158776),
    k = n(306680),
    V = n(699516),
    F = n(111583),
    B = n(9156),
    W = n(594174),
    K = n(709054),
    z = n(998502),
    Y = n(981631),
    Q = n(388032),
    q = n(85496);
function X(e) {
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
function J(e, t) {
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
function $(e, t) {
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
let ee = z.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    et = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    en = (e) => {
        let { nameplate: t } = e,
            n = (0, U.A)(t);
        return (0, l.jsx)(
            f.P3F,
            J(X({ className: q.closeButton }, e), {
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
                    className: o()({ [q.closeButtonBackgroundPlated]: null != t }),
                    children: (0, l.jsx)(f.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(q.closeIcon, { [q.closeIconPlated]: null != t })
                    })
                })
            })
        );
    },
    el = () =>
        (0, l.jsx)(f.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        }),
    er = () =>
        (0, l.jsx)(f.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        }),
    ei = () =>
        (0, l.jsx)(f.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        }),
    eo = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: i, avatarWithTextClassName: a, interactiveClassName: s, text: u, children: E, locationState: h, onClick: _, className: C, role: p, 'aria-posinset': g, 'aria-setsize': O, listItemRef: T } = e,
            I = $(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let N = (0, L.Q3)('PrivateChannelLinkButton');
        return (0, l.jsx)(P.Z, {
            className: o()(q.channel, { [q.fullWidth]: d.tq }, C),
            onClick: _,
            role: p,
            focusProps: X({ within: !0 }, et),
            'aria-posinset': g,
            'aria-setsize': O,
            ref: T,
            children: (0, l.jsx)(f.vjx, {
                as: 'div',
                selected: n,
                className: o()(s, q.interactive, q.linkButton, { [q.interactiveSelected]: n }),
                children: (0, l.jsxs)(
                    c.rU,
                    J(
                        X(
                            {
                                to: {
                                    pathname: t,
                                    state: h
                                },
                                className: q.link
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
                                        className: o()(q.linkButtonIcon, i),
                                        color: 'currentColor'
                                    }),
                                    name: u,
                                    innerClassName: o()(q.avatarWithText, a)
                                }),
                                E
                            ]
                        }
                    )
                )
            })
        });
    };
function ea(e) {
    var t;
    let { channel: i, isGDMFacepileEnabled: a, selected: d = !1, user: p, activities: O, applicationStream: L, voiceChannel: R, isTyping: j, status: U, isMobile: G, nameplate: H, 'aria-posinset': F, 'aria-setsize': W } = e,
        [K, z] = r.useState(!1),
        eo = r.useRef(null),
        ea = r.useRef(null),
        {
            avatarSrc: es,
            avatarDecorationSrc: ec,
            eventHandlers: eu
        } = (0, M.Z)({
            user: p,
            size: f.EFr.SIZE_32,
            animateOnHover: !(d || K)
        }),
        ed = (0, E.e7)([B.ZP], () => B.ZP.isChannelMuted(i.getGuildId(), i.id)),
        { ignored: eE, blocked: ef } = (0, E.cj)([V.Z], () => ({
            ignored: V.Z.isIgnored(i.getRecipientId()),
            blocked: V.Z.isBlocked(i.getRecipientId())
        })),
        eh = (0, E.e7)([k.ZP], () => k.ZP.getMentionCount(i.id) > 0),
        e_ = (0, b.ZP)(i),
        eC = (0, E.e7)([D.Z], () => D.Z.isFavorite(i.id)),
        ep = () => {
            z(!0);
        },
        eg = () => {
            z(!1);
        },
        eO = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(i.id, d, t);
        },
        eT = () => {
            h.Z.preload(Y.ME, i.id);
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
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('25421'), n.e('69584')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, l.jsx)(
                                  e,
                                  J(X({}, t), {
                                      channel: i,
                                      selected: d
                                  })
                              );
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, _.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('98254'), n.e('56826'), n.e('92053')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              J(X({}, t), {
                                  user: p,
                                  channel: i,
                                  channelSelected: d
                              })
                          );
                  });
        },
        eA = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = Q.NW.formatToPlainString(Q.t.hJ5Ap6, { name: e_ }),
                r = Q.NW.format(Q.t.SSIVOj, { name: e_ });
            i.isManaged() && ((t = Q.NW.formatToPlainString(Q.t.hVGjER, { name: e_ })), (r = Q.NW.format(Q.t.IK1Qvr, { name: e_ }))),
                (0, f.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, l.jsx)(
                            e,
                            X(
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
        ev = () =>
            i.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: q.subtext,
                      children: (0, N.Z)(i.id) ? Q.NW.string(Q.t.FL5T09) : Q.NW.string(Q.t.NnY5lZ)
                  })
                : i.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: q.subtext,
                        children: Q.NW.format(Q.t.CxSA5O, { members: i.recipients.length + 1 })
                    })
                  : (0, g.Z)({
                          activities: O,
                          status: U,
                          applicationStream: L,
                          voiceChannel: R
                      })
                    ? (0, l.jsx)(T.Z, {
                          location: 'PrivateChannel',
                          user: p,
                          activities: O,
                          voiceChannel: R,
                          applicationStream: L,
                          animate: K,
                          emojiClassName: ed ? q.mutedEmoji : void 0
                      })
                    : null,
        eb = () => {
            let e = f.EFr.SIZE_32;
            if (i.isMultiUserDM())
                return i.recipients.length >= 2 && a && null == i.icon
                    ? (0, l.jsx)(Z.Z, {
                          'aria-hidden': !0,
                          recipients: i.recipients,
                          size: e,
                          isTyping: j,
                          status: U
                      })
                    : (0, l.jsx)(
                          ee,
                          J(X({}, eu), {
                              src: (0, v.x)(i),
                              'aria-hidden': !0,
                              size: e,
                              status: j ? Y.Skl.ONLINE : U,
                              isTyping: j
                          })
                      );
            s()(null != p, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                p.isSystemUser() || (t = (0, C.Z)(O) ? Y.Skl.STREAMING : U),
                (0, l.jsx)(
                    ee,
                    J(X({}, eu), {
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
        eL = !em && !eP && i.type === Y.d4z.DM,
        eD = eL && (null == p ? void 0 : p.primaryGuild) != null,
        eR = eL && eE,
        eZ = eL && ef,
        ej = eD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e_,
                      (0, l.jsx)(m.ZP, {
                          primaryGuild: null == p ? void 0 : p.primaryGuild,
                          userId: null == p ? void 0 : p.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: q.clanTag
                      })
                  ]
              })
            : e_,
        eU = null !== (t = ed || eR || eZ) && void 0 !== t && t,
        ex = r.useRef(null);
    return (0, l.jsx)(u.mh, {
        id: i.id,
        children: (e) => {
            var { role: t } = e,
                n = $(e, ['role']);
            return (0, l.jsx)(P.Z, {
                className: o()(q.channel, q.dm),
                role: t,
                focusProps: J(X({}, et), {
                    focusTarget: eo,
                    ringTarget: ea
                }),
                ref: ea,
                onMouseEnter: ep,
                onMouseLeave: eg,
                onMouseDown: eT,
                onContextMenu: eN,
                'aria-setsize': W,
                'aria-posinset': F,
                children: (0, l.jsxs)(f.vjx, {
                    className: o()(q.interactive, {
                        [q.interactiveSystemDM]: ey && eP,
                        [q.interactiveSelected]: d,
                        [q.platedWrapper]: null != H
                    }),
                    as: 'div',
                    onClick: eS,
                    muted: eU,
                    selected: d,
                    children: [
                        (0, l.jsx)(x.Z, {
                            nameplate: H,
                            selected: d,
                            hovered: K,
                            content: ex.current
                        }),
                        (0, l.jsx)(
                            c.rU,
                            J(
                                X(
                                    {
                                        innerRef: eo,
                                        to: Y.Z5c.CHANNEL(Y.ME, i.id),
                                        className: o()(q.link, { [q.plated]: null != H }),
                                        'aria-label': (0, A.ZP)({
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
                                        subText: ev(),
                                        name: (0, l.jsx)(y.Z, {
                                            tooltipClassName: q.overflowTooltip,
                                            children: ej
                                        }),
                                        decorators: i.isSystemDM()
                                            ? (0, l.jsx)(I.Z, {
                                                  className: q.decorator,
                                                  type: I.Z.Types.SYSTEM_DM,
                                                  verified: !0
                                              })
                                            : null
                                    })
                                }
                            )
                        ),
                        eC ? (0, l.jsx)(el, {}) : null,
                        eR ? (0, l.jsx)(er, {}) : null,
                        eZ ? (0, l.jsx)(ei, {}) : null,
                        (0, l.jsx)(en, {
                            'aria-label': em ? Q.NW.string(Q.t['26C4oq']) : Q.NW.string(Q.t.jsvgc3),
                            onClick: em ? eA : eO,
                            onMouseDown: eI,
                            nameplate: H
                        })
                    ]
                })
            });
        }
    });
}
let es = (e) => {
    var { channel: t, selected: n } = e,
        r = $(e, ['channel', 'selected']);
    let i = (0, E.e7)([W.default], () => W.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: a, isFacepileEnabled: s } = R.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == i ? void 0 : i.id,
        u = (0, E.cj)(
            [H.Z, G.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
                        let n = H.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === Y.Skl.ONLINE) && (e = Y.Skl.ONLINE);
                    }
                } else null != c && (e = H.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? H.Z.getActivities(c) : null,
                    applicationStream: null != c ? G.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && H.Z.isMobileOnline(c)
                };
            },
            [t, c, o]
        ),
        { voiceActivityStatusEnabled: d } = (0, p.U)({ location: 'PrivateChannel' }),
        { voiceChannel: f } = (0, O.Z)({
            userId: c,
            surface: 'private-channel'
        }),
        h = (0, j.K)({
            location: 'PrivateChannel',
            user: i,
            privateChannel: t
        }),
        _ = (0, E.e7)(
            [W.default, F.Z],
            () =>
                t.isMultiUserDM()
                    ? !!a &&
                      K.default.keys(F.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = W.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != i && F.Z.isTyping(t.id, t.getRecipientId()),
            [t, i, a]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(
              ea,
              X(
                  {
                      channel: t,
                      selected: n,
                      isTyping: _,
                      status: u.status === Y.Skl.ONLINE ? Y.Skl.ONLINE : void 0,
                      isGDMFacepileEnabled: s
                  },
                  r
              )
          )
        : (0, l.jsx)(
              ea,
              X(
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

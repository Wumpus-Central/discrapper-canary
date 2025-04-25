n.d(t, {
    PZ: () => er,
    Qj: () => eo,
    RS: () => ec,
    ZP: () => ed
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(512722),
    o = n.n(a),
    c = n(568611),
    d = n(91192),
    u = n(873546),
    m = n(442837),
    p = n(481060),
    g = n(493683),
    h = n(239091),
    f = n(420660),
    b = n(468363),
    _ = n(326255),
    x = n(956221),
    E = n(747017),
    j = n(385499),
    C = n(570908),
    O = n(702321),
    S = n(201895),
    v = n(43267),
    T = n(933557),
    I = n(163889),
    N = n(111028),
    y = n(540059),
    A = n(853856),
    P = n(93687),
    R = n(785232),
    D = n(172751),
    Z = n(850020),
    w = n(379839),
    k = n(359135),
    L = n(516817),
    B = n(273388),
    M = n(878857),
    U = n(518950),
    V = n(199902),
    G = n(158776),
    F = n(306680),
    H = n(699516),
    z = n(111583),
    W = n(9156),
    Y = n(594174),
    K = n(709054),
    q = n(998502),
    X = n(981631),
    Q = n(388032),
    J = n(425154);
function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function et(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                s = Object.keys(e);
            for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let en = q.ZP.getEnableHardwareAcceleration() ? p.Xo$ : p.qEK,
    ei = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    er = (e) => {
        let { nameplate: t } = e,
            n = (0, w.A)(t);
        return (0, i.jsx)(
            p.P3F,
            ee(
                $(
                    {
                        className: l()(J.closeButton, { [J.closeButtonPlated]: null != t }),
                        style: n
                    },
                    e
                ),
                {
                    focusProps: {
                        offset: {
                            top: -2,
                            bottom: -2,
                            left: -2,
                            right: 6
                        }
                    },
                    children: (0, i.jsx)('div', {
                        className: l()({ [J.innerCloseButtonPlated]: null != t }),
                        children: (0, i.jsx)(p.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: l()(J.closeIcon, { [J.closeIconPlated]: null != t })
                        })
                    })
                }
            )
        );
    },
    es = () =>
        (0, i.jsx)(p.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        }),
    el = () =>
        (0, i.jsx)(p.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        }),
    ea = () =>
        (0, i.jsx)(p.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        }),
    eo = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: s, avatarWithTextClassName: a, interactiveClassName: o, text: d, children: m, locationState: g, onClick: h, className: f, role: b, 'aria-posinset': _, 'aria-setsize': x, listItemRef: E } = e,
            j = et(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let O = (0, y.Q3)('PrivateChannelLinkButton');
        return (0, i.jsx)(I.Z, {
            className: l()(J.channel, { [J.fullWidth]: u.tq }, f),
            onClick: h,
            role: b,
            focusProps: $({ within: !0 }, ei),
            'aria-posinset': _,
            'aria-setsize': x,
            ref: E,
            children: (0, i.jsx)(p.vjx, {
                as: 'div',
                selected: n,
                className: l()(o, J.interactive, J.linkButton, { [J.interactiveSelected]: n }),
                children: (0, i.jsxs)(
                    c.rU,
                    ee(
                        $(
                            {
                                to: {
                                    pathname: t,
                                    state: g
                                },
                                className: J.link
                            },
                            j
                        ),
                        {
                            children: [
                                (0, i.jsx)(C.Z, {
                                    muted: !1,
                                    avatar: (0, i.jsx)(r, {
                                        size: O ? 'refresh_sm' : void 0,
                                        className: l()(J.linkButtonIcon, s),
                                        color: 'currentColor'
                                    }),
                                    name: d,
                                    innerClassName: l()(J.avatarWithText, a)
                                }),
                                m
                            ]
                        }
                    )
                )
            })
        });
    };
function ec(e) {
    let { channel: t, isGDMFacepileEnabled: s, selected: a = !1, user: u, activities: b, applicationStream: x, voiceChannel: y, isTyping: P, status: Z, isMobile: w, nameplate: V, 'aria-posinset': G, 'aria-setsize': z } = e,
        [Y, K] = r.useState(!1),
        q = r.useRef(null),
        eo = r.useRef(null),
        {
            avatarSrc: ec,
            avatarDecorationSrc: ed,
            eventHandlers: eu
        } = (0, U.Z)({
            user: u,
            size: p.EFr.SIZE_32,
            animateOnHover: !(a || Y)
        }),
        em = t.isMultiUserDM(),
        ep = t.isSystemDM(),
        eg = (0, M.Q)(),
        eh = !em && !ep && t.type === X.d4z.DM,
        ef = eh && (null == u ? void 0 : u.primaryGuild) != null,
        eb = (0, m.e7)([W.ZP], () => W.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: e_, blocked: ex } = (0, m.cj)([H.Z], () => ({
            ignored: H.Z.isIgnored(t.getRecipientId()),
            blocked: H.Z.isBlocked(t.getRecipientId())
        })),
        eE = eh && e_,
        ej = eh && ex,
        eC = (eb || eE || ej) && !(a || Y),
        eO = (0, m.e7)([F.ZP], () => F.ZP.getMentionCount(t.id) > 0),
        eS = (0, T.ZP)(t),
        ev = (0, m.e7)([A.Z], () => A.Z.isFavorite(t.id)),
        eT = (0, B.L)('PrivateChannel'),
        eI = null != V && (a || Y),
        eN = () => {
            K(!0);
        },
        ey = () => {
            K(!1);
        },
        eA = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), g.Z.closePrivateChannel(t.id, a, n);
        },
        eP = () => {
            g.Z.preload(X.ME, t.id);
        },
        eR = (e) => {
            e.stopPropagation();
        },
        eD = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = q.current) || t.click();
            }
        },
        eZ = (e) => {
            t.isMultiUserDM()
                ? (0, h.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('53912'), n.e('33731')]).then(n.bind(n, 354741));
                          return (n) =>
                              (0, i.jsx)(
                                  e,
                                  ee($({}, n), {
                                      channel: t,
                                      selected: a
                                  })
                              );
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, h.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('53912'), n.e('98254'), n.e('56826'), n.e('8967')]).then(n.bind(n, 131404));
                      return (n) =>
                          (0, i.jsx)(
                              e,
                              ee($({}, n), {
                                  user: u,
                                  channel: t,
                                  channelSelected: a
                              })
                          );
                  });
        },
        ew = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = Q.intl.formatToPlainString(Q.t.hJ5Ap6, { name: eS }),
                s = Q.intl.format(Q.t.SSIVOj, { name: eS });
            t.isManaged() && ((r = Q.intl.formatToPlainString(Q.t.hVGjER, { name: eS })), (s = Q.intl.format(Q.t.IK1Qvr, { name: eS }))),
                (0, p.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            $(
                                {
                                    header: r,
                                    body: s,
                                    onSubmit: eA
                                },
                                t
                            )
                        );
                });
        },
        ek = () =>
            t.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: J.subtext,
                      children: (0, O.Z)(t.id) ? Q.intl.string(Q.t.FL5T09) : Q.intl.string(Q.t.NnY5lZ)
                  })
                : t.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: J.subtext,
                        children: Q.intl.format(Q.t.CxSA5O, { members: t.recipients.length + 1 })
                    })
                  : (0, _.Z)({
                          activities: b,
                          status: Z,
                          applicationStream: x,
                          voiceChannel: y
                      })
                    ? (0, i.jsx)(E.Z, {
                          user: u,
                          activities: b,
                          voiceChannel: y,
                          applicationStream: x,
                          animate: Y,
                          textClassName: J.activityStatusText,
                          iconClassName: eC ? J.mutedIcon : void 0
                      })
                    : null,
        eL = () => {
            let e = p.EFr.SIZE_32;
            if (t.isMultiUserDM())
                if (t.recipients.length >= 2 && s && null == t.icon)
                    return (0, i.jsx)(R.Z, {
                        'aria-hidden': !0,
                        recipients: t.recipients,
                        size: e,
                        isTyping: P,
                        status: Z
                    });
                else
                    return (0, i.jsx)(
                        en,
                        ee($({}, eu), {
                            src: (0, v.x)(t),
                            'aria-hidden': !0,
                            size: e,
                            status: P ? X.Skl.ONLINE : Z,
                            isTyping: P
                        })
                    );
            o()(null != u, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let n = null;
            return (
                u.isSystemUser() || (n = (0, f.Z)(b) ? X.Skl.STREAMING : Z),
                (0, i.jsx)(
                    en,
                    ee($({}, eu), {
                        size: p.EFr.SIZE_32,
                        src: ec,
                        avatarDecoration: ed,
                        status: n,
                        isMobile: w,
                        isTyping: P,
                        'aria-label': u.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eB = ef
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eS,
                      (0, i.jsx)(D.ZP, {
                          primaryGuild: null == u ? void 0 : u.primaryGuild,
                          userId: null == u ? void 0 : u.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: J.clanTag
                      })
                  ]
              })
            : eS,
        eM = r.useRef(null);
    return (0, i.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                r = et(e, ['role']);
            return (0, i.jsxs)(I.Z, {
                className: l()(J.channel, J.dm),
                role: n,
                focusProps: ee($({}, ei), {
                    focusTarget: q,
                    ringTarget: eo
                }),
                ref: eo,
                onMouseEnter: eN,
                onMouseLeave: ey,
                onMouseDown: eP,
                onContextMenu: eZ,
                'aria-setsize': z,
                'aria-posinset': G,
                children: [
                    eT && eO ? (0, i.jsx)('div', { className: l()(J.unreadPill, { [J.muted]: eC }) }) : null,
                    (0, i.jsxs)(p.vjx, {
                        className: l()(J.interactive, {
                            [J.interactiveSystemDM]: eg && ep,
                            [J.interactiveSelected]: a
                        }),
                        as: 'div',
                        onClick: eD,
                        muted: eC,
                        selected: a,
                        children: [
                            (0, i.jsx)(L.Z, {
                                nameplate: eI ? V : void 0,
                                selected: a,
                                hovered: Y,
                                content: eM,
                                placement: k.i.CHANNEL
                            }),
                            (0, i.jsx)(
                                c.rU,
                                ee(
                                    $(
                                        {
                                            innerRef: q,
                                            to: X.Z5c.CHANNEL(X.ME, t.id),
                                            className: l()(J.link, { [J.linkPlated]: eI }),
                                            'aria-label': (0, S.ZP)({
                                                channel: t,
                                                unread: eO
                                            })
                                        },
                                        r
                                    ),
                                    {
                                        children: (0, i.jsx)(C.Z, {
                                            ref: eM,
                                            avatar: eL(),
                                            highlighted: eO && !(eT && eC),
                                            muted: eC,
                                            subText: ek(),
                                            name: (0, i.jsx)(N.Z, {
                                                tooltipClassName: J.overflowTooltip,
                                                children: eB
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, i.jsx)(j.Z, {
                                                      className: J.decorator,
                                                      type: j.Z.Types.SYSTEM_DM,
                                                      verified: !0
                                                  })
                                                : null
                                        })
                                    }
                                )
                            ),
                            ev ? (0, i.jsx)(es, {}) : null,
                            eE ? (0, i.jsx)(el, {}) : null,
                            ej ? (0, i.jsx)(ea, {}) : null,
                            (0, i.jsx)(er, {
                                'aria-label': em ? Q.intl.string(Q.t['26C4oq']) : Q.intl.string(Q.t.jsvgc3),
                                onClick: em ? ew : eA,
                                onMouseDown: eR,
                                nameplate: V
                            })
                        ]
                    })
                ]
            });
        }
    });
}
let ed =
    12633 == n.j
        ? (e) => {
              var { channel: t, selected: n } = e,
                  r = et(e, ['channel', 'selected']);
              let s = (0, m.e7)([Y.default], () => Y.default.getUser(t.getRecipientId())),
                  { isStatusIndicatorEnabled: l, isTypingIndicatorEnabled: a, isFacepileEnabled: o } = P.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
                  c = null == s ? void 0 : s.id,
                  d = (0, m.cj)(
                      [G.Z, V.Z],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              if (l) {
                                  let n = G.Z.getState().statuses;
                                  t.recipients.some((e) => n[e] === X.Skl.ONLINE) && (e = X.Skl.ONLINE);
                              }
                          } else null != c && (e = G.Z.getStatus(c));
                          return {
                              status: e,
                              activities: null != c ? G.Z.getActivities(c) : null,
                              applicationStream: null != c ? V.Z.getAnyStreamForUser(c) : null,
                              isMobile: null != c && G.Z.isMobileOnline(c)
                          };
                      },
                      [t, c, l]
                  ),
                  { voiceActivityStatusEnabled: u } = (0, b.U)({ location: 'PrivateChannel' }),
                  { voiceChannel: p } = (0, x.Z)({ userId: c }),
                  g = (0, Z.K)({
                      location: 'PrivateChannel',
                      user: s
                  }),
                  h = (0, m.e7)(
                      [Y.default, z.Z],
                      () => {
                          if (t.isMultiUserDM())
                              if (a)
                                  return K.default.keys(z.Z.getTypingUsers(t.id)).some((e) => {
                                      var t;
                                      return e !== (null == (t = Y.default.getCurrentUser()) ? void 0 : t.id);
                                  });
                              else return !1;
                          return null != s && z.Z.isTyping(t.id, t.getRecipientId());
                      },
                      [t, s, a]
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(
                        ec,
                        $(
                            {
                                channel: t,
                                selected: n,
                                isTyping: h,
                                status: d.status === X.Skl.ONLINE ? X.Skl.ONLINE : void 0,
                                isGDMFacepileEnabled: o
                            },
                            r
                        )
                    )
                  : (0, i.jsx)(
                        ec,
                        $(
                            {
                                channel: t,
                                selected: n,
                                user: s,
                                voiceChannel: u ? p : void 0,
                                isTyping: h,
                                nameplate: g
                            },
                            r,
                            d
                        )
                    );
          }
        : null;

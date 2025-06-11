n.d(t, {
    PZ: () => er,
    Qj: () => eo,
    RS: () => ec,
    ZP: () => ed
}),
    n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(512722),
    o = n.n(a),
    c = n(688642),
    d = n(91192),
    u = n(873546),
    m = n(442837),
    g = n(481060),
    p = n(493683),
    h = n(239091),
    f = n(420660),
    b = n(468363),
    _ = n(326255),
    x = n(956221),
    E = n(771173),
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
    Y = n(9156),
    W = n(594174),
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
let en = q.ZP.getEnableHardwareAcceleration() ? g.Xo$ : g.qEK,
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
            g.P3F,
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
                        children: (0, i.jsx)(g.Dio, {
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
        (0, i.jsx)(g.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        }),
    el = () =>
        (0, i.jsx)(g.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        }),
    ea = () =>
        (0, i.jsx)(g.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        }),
    eo = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: s, interactiveClassName: a, text: o, children: d, locationState: m, onClick: p, className: h, role: f, 'aria-posinset': b, 'aria-setsize': _, listItemRef: x } = e,
            E = et(e, ['route', 'selected', 'icon', 'iconClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let j = (0, y.Q3)('PrivateChannelLinkButton');
        return (0, i.jsx)(I.Z, {
            className: l()(J.channel, { [J.fullWidth]: u.tq }, h),
            onClick: p,
            role: f,
            focusProps: $({ within: !0 }, ei),
            'aria-posinset': b,
            'aria-setsize': _,
            ref: x,
            children: (0, i.jsx)(g.vjx, {
                as: 'div',
                selected: n,
                className: l()(a, J.interactive, J.linkButton, { [J.interactiveSelected]: n }),
                children: (0, i.jsxs)(
                    c.rU,
                    ee(
                        $(
                            {
                                to: {
                                    pathname: t,
                                    state: m
                                },
                                className: J.link
                            },
                            E
                        ),
                        {
                            children: [
                                (0, i.jsx)(C.Z, {
                                    muted: !1,
                                    avatar: (0, i.jsx)(r, {
                                        size: j ? 'refresh_sm' : void 0,
                                        className: l()(J.linkButtonIcon, s),
                                        color: 'currentColor'
                                    }),
                                    name: o,
                                    innerClassName: J.avatarWithText
                                }),
                                d
                            ]
                        }
                    )
                )
            })
        });
    };
function ec(e) {
    let { channel: t, isGDMFacepileEnabled: s, selected: a = !1, user: u, activities: b, applicationStream: x, voiceChannel: y, isTyping: P, status: Z, isMobile: w, nameplate: V, ref: G, 'aria-posinset': z, 'aria-setsize': W } = e,
        [K, q] = r.useState(!1),
        [eo, ec] = r.useState(!1),
        ed = r.useRef(null),
        eu = r.useRef(null),
        em = null != G ? G : eu,
        {
            avatarSrc: eg,
            avatarDecorationSrc: ep,
            eventHandlers: eh
        } = (0, U.Z)({
            user: u,
            size: g.EFr.SIZE_32,
            animateOnHover: !(a || K || eo)
        }),
        ef = t.isMultiUserDM(),
        eb = t.isSystemDM(),
        e_ = (0, M.Q)(),
        ex = !ef && !eb && t.type === X.d4z.DM,
        eE = ex && (null == u ? void 0 : u.primaryGuild) != null,
        ej = (0, m.e7)([Y.ZP], () => Y.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eC, blocked: eO } = (0, m.cj)([H.Z], () => ({
            ignored: H.Z.isIgnored(t.getRecipientId()),
            blocked: H.Z.isBlocked(t.getRecipientId())
        })),
        eS = ex && eC,
        ev = ex && eO,
        eT = (ej || eS || ev) && !(a || K),
        eI = (0, m.e7)([F.ZP], () => F.ZP.getMentionCount(t.id) > 0),
        eN = (0, T.ZP)(t),
        ey = (0, m.e7)([A.Z], () => A.Z.isFavorite(t.id)),
        eA = (0, B.L)('PrivateChannel'),
        eP = null != V && (a || K),
        eR = () => {
            q(!0);
        },
        eD = () => {
            q(!1);
        },
        eZ = () => {
            ec(!0);
        },
        ew = () => {
            ec(!1);
        },
        ek = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), p.Z.closePrivateChannel(t.id, a, n);
        },
        eL = () => {
            p.Z.preload(X.ME, t.id);
        },
        eB = (e) => {
            e.stopPropagation();
        },
        eM = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ed.current) || t.click();
            }
        },
        eU = (e) => {
            t.isMultiUserDM()
                ? (0, h.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('53912'), n.e('19549')]).then(n.bind(n, 354741));
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
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('36084'), n.e('56826'), n.e('30215')]).then(n.bind(n, 131404));
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
        eV = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = Q.intl.formatToPlainString(Q.t.hJ5Ap6, { name: eN }),
                s = Q.intl.format(Q.t.SSIVOj, { name: eN });
            t.isManaged() && ((r = Q.intl.formatToPlainString(Q.t.hVGjER, { name: eN })), (s = Q.intl.format(Q.t.IK1Qvr, { name: eN }))),
                (0, g.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            $(
                                {
                                    header: r,
                                    body: s,
                                    onSubmit: ek
                                },
                                t
                            )
                        );
                });
        },
        eG = () =>
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
                          location: 'PrivateChannel',
                          user: u,
                          activities: b,
                          voiceChannel: y,
                          applicationStream: x,
                          animateEmoji: K || eo,
                          textClassName: J.activityStatusText,
                          iconClassName: eT ? J.mutedIcon : void 0
                      })
                    : null,
        eF = () => {
            let e = g.EFr.SIZE_32;
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
                        ee($({}, eh), {
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
                    ee($({}, eh), {
                        size: g.EFr.SIZE_32,
                        src: eg,
                        avatarDecoration: ep,
                        status: n,
                        isMobile: w,
                        isTyping: P,
                        'aria-label': u.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eH = eE
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eN,
                      (0, i.jsx)(D.ZP, {
                          primaryGuild: null == u ? void 0 : u.primaryGuild,
                          userId: null == u ? void 0 : u.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: J.clanTag
                      })
                  ]
              })
            : eN,
        ez = r.useRef(null);
    return (0, i.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                r = et(e, ['role']);
            return (0, i.jsxs)(I.Z, {
                className: l()(J.channel, J.dm),
                role: n,
                focusProps: ee($({}, ei), {
                    focusTarget: ed,
                    ringTarget: em
                }),
                ref: em,
                onMouseEnter: eR,
                onMouseLeave: eD,
                onMouseDown: eL,
                onFocus: eZ,
                onBlur: ew,
                onContextMenu: eU,
                'aria-setsize': W,
                'aria-posinset': z,
                children: [
                    eA && eI ? (0, i.jsx)('div', { className: l()(J.unreadPill, { [J.muted]: eT }) }) : null,
                    (0, i.jsxs)(g.vjx, {
                        className: l()(J.interactive, {
                            [J.interactiveSystemDM]: e_ && eb,
                            [J.interactiveSelected]: a
                        }),
                        as: 'div',
                        onClick: eM,
                        muted: eT,
                        selected: a,
                        children: [
                            (0, i.jsx)(L.Z, {
                                nameplate: eP ? V : void 0,
                                selected: a,
                                hovered: K,
                                content: ez,
                                placement: k.i.CHANNEL
                            }),
                            (0, i.jsx)(
                                c.rU,
                                ee(
                                    $(
                                        {
                                            innerRef: ed,
                                            to: X.Z5c.CHANNEL(X.ME, t.id),
                                            className: l()(J.link, { [J.linkPlated]: eP }),
                                            'aria-label': (0, S.ZP)({
                                                channel: t,
                                                unread: eI
                                            })
                                        },
                                        r
                                    ),
                                    {
                                        children: (0, i.jsx)(C.Z, {
                                            ref: ez,
                                            avatar: eF(),
                                            highlighted: eI && !(eA && eT),
                                            muted: eT,
                                            subText: eG(),
                                            name: (0, i.jsx)(N.Z, {
                                                tooltipClassName: J.overflowTooltip,
                                                children: eH
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
                            ey ? (0, i.jsx)(es, {}) : null,
                            eS ? (0, i.jsx)(el, {}) : null,
                            ev ? (0, i.jsx)(ea, {}) : null,
                            (0, i.jsx)(er, {
                                'aria-label': ef ? Q.intl.string(Q.t['26C4oq']) : Q.intl.string(Q.t.jsvgc3),
                                onClick: ef ? eV : ek,
                                onMouseDown: eB,
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
              let s = (0, m.e7)([W.default], () => W.default.getUser(t.getRecipientId())),
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
                  { voiceChannel: g } = (0, x.Z)({ userId: c }),
                  p = (0, Z.K)({ user: s }),
                  h = (0, m.e7)(
                      [W.default, z.Z],
                      () => {
                          if (t.isMultiUserDM())
                              if (a)
                                  return K.default.keys(z.Z.getTypingUsers(t.id)).some((e) => {
                                      var t;
                                      return e !== (null == (t = W.default.getCurrentUser()) ? void 0 : t.id);
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
                                voiceChannel: u ? g : void 0,
                                isTyping: h,
                                nameplate: p
                            },
                            r,
                            d
                        )
                    );
          }
        : null;

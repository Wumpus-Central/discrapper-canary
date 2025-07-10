(n.d(t, {
    PZ: () => ei,
    Qj: () => el,
    RS: () => eo,
    ZP: () => ec
}),
    n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(688642),
    d = n(91192),
    u = n(873546),
    m = n(442837),
    p = n(481060),
    g = n(493683),
    h = n(239091),
    f = n(420660),
    b = n(468363),
    x = n(326255),
    _ = n(956221),
    j = n(771173),
    E = n(385499),
    O = n(570908),
    C = n(702321),
    v = n(201895),
    S = n(43267),
    T = n(933557),
    N = n(163889),
    I = n(111028),
    y = n(853856),
    A = n(93687),
    P = n(785232),
    R = n(172751),
    D = n(850020),
    Z = n(379839),
    w = n(359135),
    k = n(516817),
    L = n(273388),
    B = n(878857),
    M = n(518950),
    U = n(199902),
    V = n(158776),
    G = n(306680),
    F = n(699516),
    H = n(111583),
    z = n(9156),
    W = n(594174),
    Y = n(709054),
    K = n(998502),
    q = n(981631),
    X = n(388032),
    J = n(425154);
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
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
function ee(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                s = Object.keys(e);
            for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
}
let et = K.ZP.getEnableHardwareAcceleration() ? p.Xo$ : p.qEK,
    en = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    ei = (e) => {
        let { nameplate: t } = e,
            n = (0, Z.A)(t);
        return (0, i.jsx)(
            p.P3F,
            $(
                Q(
                    {
                        className: a()(J.closeButton, { [J.closeButtonPlated]: null != t }),
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
                        className: a()({ [J.innerCloseButtonPlated]: null != t }),
                        children: (0, i.jsx)(p.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: a()(J.closeIcon, { [J.closeIconPlated]: null != t })
                        })
                    })
                }
            )
        );
    },
    er = () =>
        (0, i.jsx)(p.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        }),
    es = () =>
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
    el = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: s, interactiveClassName: l, text: o, children: d, locationState: m, onClick: g, className: h, role: f, 'aria-posinset': b, 'aria-setsize': x, listItemRef: _ } = e,
            j = ee(e, ['route', 'selected', 'icon', 'iconClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        return (0, i.jsx)(N.Z, {
            className: a()(J.channel, { [J.fullWidth]: u.tq }, h),
            onClick: g,
            role: f,
            focusProps: Q({ within: !0 }, en),
            'aria-posinset': b,
            'aria-setsize': x,
            ref: _,
            children: (0, i.jsx)(p.vjx, {
                as: 'div',
                selected: n,
                className: a()(l, J.interactive, J.linkButton, { [J.interactiveSelected]: n }),
                children: (0, i.jsxs)(
                    c.rU,
                    $(
                        Q(
                            {
                                to: {
                                    pathname: t,
                                    state: m
                                },
                                className: J.link
                            },
                            j
                        ),
                        {
                            children: [
                                (0, i.jsx)(O.Z, {
                                    muted: !1,
                                    avatar: (0, i.jsx)(r, {
                                        size: 'refresh_sm',
                                        className: a()(J.linkButtonIcon, s),
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
function eo(e) {
    let { channel: t, isGDMFacepileEnabled: s, selected: l = !1, user: u, activities: b, applicationStream: _, voiceChannel: A, isTyping: D, status: Z, isMobile: U, nameplate: V, ref: H, 'aria-posinset': W, 'aria-setsize': Y } = e,
        [K, el] = r.useState(!1),
        [eo, ec] = r.useState(!1),
        ed = r.useRef(null),
        eu = r.useRef(null),
        em = null != H ? H : eu,
        {
            avatarSrc: ep,
            avatarDecorationSrc: eg,
            eventHandlers: eh
        } = (0, M.Z)({
            userId: null == u ? void 0 : u.id,
            size: p.EFr.SIZE_32,
            animateOnHover: !(l || K || eo)
        }),
        ef = t.isMultiUserDM(),
        eb = t.isSystemDM(),
        ex = (0, B.Q)(),
        e_ = !ef && !eb && t.type === q.d4z.DM,
        ej = e_ && (null == u ? void 0 : u.primaryGuild) != null,
        eE = (0, m.e7)([z.ZP], () => z.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eO, blocked: eC } = (0, m.cj)([F.Z], () => ({
            ignored: F.Z.isIgnored(t.getRecipientId()),
            blocked: F.Z.isBlocked(t.getRecipientId())
        })),
        ev = e_ && eO,
        eS = e_ && eC,
        eT = (eE || ev || eS) && !(l || K),
        eN = (0, m.e7)([G.ZP], () => G.ZP.getMentionCount(t.id) > 0),
        eI = (0, T.ZP)(t),
        ey = (0, m.e7)([y.Z], () => y.Z.isFavorite(t.id)),
        eA = (0, L.L)('PrivateChannel'),
        eP = null != V && (l || K),
        eR = () => {
            el(!0);
        },
        eD = () => {
            el(!1);
        },
        eZ = () => {
            ec(!0);
        },
        ew = () => {
            ec(!1);
        },
        ek = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            (null != e && (e.preventDefault(), e.stopPropagation()), g.Z.closePrivateChannel(t.id, l, n));
        },
        eL = () => {
            g.Z.preload(q.ME, t.id);
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
                          let { default: e } = await Promise.all([n.e('79695'), n.e('90508'), n.e('70205'), n.e('53912'), n.e('19549')]).then(n.bind(n, 354741));
                          return (n) =>
                              (0, i.jsx)(
                                  e,
                                  $(Q({}, n), {
                                      channel: t,
                                      selected: l
                                  })
                              );
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, h.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('90508'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('15114'), n.e('56826'), n.e('10815')]).then(n.bind(n, 131404));
                      return (n) =>
                          (0, i.jsx)(
                              e,
                              $(Q({}, n), {
                                  user: u,
                                  channel: t,
                                  channelSelected: l
                              })
                          );
                  });
        },
        eV = (e) => {
            (e.preventDefault(), e.stopPropagation());
            let r = X.intl.formatToPlainString(X.t.hJ5Ap6, { name: eI }),
                s = X.intl.format(X.t.SSIVOj, { name: eI });
            (t.isManaged() && ((r = X.intl.formatToPlainString(X.t.hVGjER, { name: eI })), (s = X.intl.format(X.t.IK1Qvr, { name: eI }))),
                (0, p.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            Q(
                                {
                                    header: r,
                                    body: s,
                                    onSubmit: ek
                                },
                                t
                            )
                        );
                }));
        },
        eG = () =>
            t.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: J.subtext,
                      children: (0, C.Z)(t.id) ? X.intl.string(X.t.FL5T09) : X.intl.string(X.t.NnY5lZ)
                  })
                : t.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: J.subtext,
                        children: X.intl.format(X.t.CxSA5O, { members: t.recipients.length + 1 })
                    })
                  : (0, x.Z)({
                          activities: b,
                          status: Z,
                          applicationStream: _,
                          voiceChannel: A
                      })
                    ? (0, i.jsx)(j.Z, {
                          location: 'PrivateChannel',
                          user: u,
                          activities: b,
                          voiceChannel: A,
                          applicationStream: _,
                          animateEmoji: K || eo,
                          textClassName: J.activityStatusText,
                          iconClassName: eT ? J.mutedIcon : void 0
                      })
                    : null,
        eF = () => {
            let e = p.EFr.SIZE_32;
            if (t.isMultiUserDM())
                if (t.recipients.length >= 2 && s && null == t.icon)
                    return (0, i.jsx)(P.Z, {
                        'aria-hidden': !0,
                        recipients: t.recipients,
                        size: e,
                        isTyping: D,
                        status: Z
                    });
                else
                    return (0, i.jsx)(
                        et,
                        $(Q({}, eh), {
                            src: (0, S.x)(t),
                            'aria-hidden': !0,
                            size: e,
                            status: D ? q.Skl.ONLINE : Z,
                            isTyping: D
                        })
                    );
            o()(null != u, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let n = null;
            return (
                u.isSystemUser() || (n = (0, f.Z)(b) ? q.Skl.STREAMING : Z),
                (0, i.jsx)(
                    et,
                    $(Q({}, eh), {
                        size: p.EFr.SIZE_32,
                        src: ep,
                        avatarDecoration: eg,
                        status: n,
                        isMobile: U,
                        isTyping: D,
                        'aria-label': u.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eH = ej
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eI,
                      (0, i.jsx)(R.ZP, {
                          primaryGuild: null == u ? void 0 : u.primaryGuild,
                          userId: null == u ? void 0 : u.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(J.clanTag, { [J.clanTagMuted]: eT })
                      })
                  ]
              })
            : eI,
        ez = r.useRef(null);
    return (0, i.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                r = ee(e, ['role']);
            return (0, i.jsxs)(N.Z, {
                className: a()(J.channel, J.dm),
                role: n,
                focusProps: $(Q({}, en), {
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
                'aria-setsize': Y,
                'aria-posinset': W,
                children: [
                    eA && eN ? (0, i.jsx)('div', { className: a()(J.unreadPill, { [J.muted]: eT }) }) : null,
                    (0, i.jsxs)(p.vjx, {
                        className: a()(J.interactive, {
                            [J.interactiveSystemDM]: ex && eb,
                            [J.interactiveSelected]: l
                        }),
                        as: 'div',
                        onClick: eM,
                        muted: eT,
                        selected: l,
                        children: [
                            (0, i.jsx)(k.Z, {
                                nameplate: eP ? V : void 0,
                                selected: l,
                                hovered: K,
                                content: ez,
                                placement: w.i.CHANNEL
                            }),
                            (0, i.jsx)(
                                c.rU,
                                $(
                                    Q(
                                        {
                                            innerRef: ed,
                                            to: q.Z5c.CHANNEL(q.ME, t.id),
                                            className: a()(J.link, { [J.linkPlated]: eP }),
                                            'aria-label': (0, v.ZP)({
                                                channel: t,
                                                unread: eN
                                            })
                                        },
                                        r
                                    ),
                                    {
                                        children: (0, i.jsx)(O.Z, {
                                            ref: ez,
                                            avatar: eF(),
                                            highlighted: eN && !(eA && eT),
                                            muted: eT,
                                            subText: eG(),
                                            name: (0, i.jsx)(I.Z, {
                                                tooltipClassName: J.overflowTooltip,
                                                children: eH
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, i.jsx)(E.Z, {
                                                      className: J.decorator,
                                                      type: E.Z.Types.SYSTEM_DM,
                                                      verified: !0
                                                  })
                                                : null
                                        })
                                    }
                                )
                            ),
                            ey ? (0, i.jsx)(er, {}) : null,
                            ev ? (0, i.jsx)(es, {}) : null,
                            eS ? (0, i.jsx)(ea, {}) : null,
                            (0, i.jsx)(ei, {
                                'aria-label': ef ? X.intl.string(X.t['26C4oq']) : X.intl.string(X.t.jsvgc3),
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
let ec =
    12633 == n.j
        ? (e) => {
              var { channel: t, selected: n } = e,
                  r = ee(e, ['channel', 'selected']);
              let s = (0, m.e7)([W.default], () => W.default.getUser(t.getRecipientId())),
                  { isStatusIndicatorEnabled: a, isTypingIndicatorEnabled: l, isFacepileEnabled: o } = A.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
                  c = null == s ? void 0 : s.id,
                  d = (0, m.cj)(
                      [V.Z, U.Z],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              if (a) {
                                  let n = V.Z.getState().statuses;
                                  t.recipients.some((e) => n[e] === q.Skl.ONLINE) && (e = q.Skl.ONLINE);
                              }
                          } else null != c && (e = V.Z.getStatus(c));
                          return {
                              status: e,
                              activities: null != c ? V.Z.getActivities(c) : null,
                              applicationStream: null != c ? U.Z.getAnyStreamForUser(c) : null,
                              isMobile: null != c && V.Z.isMobileOnline(c)
                          };
                      },
                      [t, c, a]
                  ),
                  { voiceActivityStatusEnabled: u } = (0, b.U)({ location: 'PrivateChannel' }),
                  { voiceChannel: p } = (0, _.Z)({ userId: c }),
                  g = (0, D.K)({ user: s }),
                  h = (0, m.e7)(
                      [W.default, H.Z],
                      () => {
                          if (t.isMultiUserDM())
                              if (l)
                                  return Y.default.keys(H.Z.getTypingUsers(t.id)).some((e) => {
                                      var t;
                                      return e !== (null == (t = W.default.getCurrentUser()) ? void 0 : t.id);
                                  });
                              else return !1;
                          return null != s && H.Z.isTyping(t.id, t.getRecipientId());
                      },
                      [t, s, l]
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(
                        eo,
                        Q(
                            {
                                channel: t,
                                selected: n,
                                isTyping: h,
                                status: d.status === q.Skl.ONLINE ? q.Skl.ONLINE : void 0,
                                isGDMFacepileEnabled: o
                            },
                            r
                        )
                    )
                  : (0, i.jsx)(
                        eo,
                        Q(
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

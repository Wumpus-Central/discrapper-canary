(n.d(t, {
    PZ: () => er,
    Qj: () => eo,
    RS: () => ec,
    ZP: () => ed
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
    y = n(7284),
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
    J = n(388032),
    Q = n(425154);
function $(e) {
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
            for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
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
                        className: a()(Q.closeButton, { [Q.closeButtonPlated]: null != t }),
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
                        className: a()({ [Q.innerCloseButtonPlated]: null != t }),
                        children: (0, i.jsx)(p.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: a()(Q.closeIcon, { [Q.closeIconPlated]: null != t })
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
            className: Q.favoriteIcon
        }),
    ea = () =>
        (0, i.jsx)(p.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: Q.favoriteIcon
        }),
    el = () =>
        (0, i.jsx)(p.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: Q.favoriteIcon
        }),
    eo = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: s, interactiveClassName: l, text: o, children: d, locationState: m, onClick: g, className: h, role: f, 'aria-posinset': b, 'aria-setsize': x, listItemRef: _ } = e,
            j = et(e, ['route', 'selected', 'icon', 'iconClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        return (0, i.jsx)(N.Z, {
            className: a()(Q.channel, { [Q.fullWidth]: u.tq }, h),
            onClick: g,
            role: f,
            focusProps: $({ within: !0 }, ei),
            'aria-posinset': b,
            'aria-setsize': x,
            ref: _,
            children: (0, i.jsx)(p.vjx, {
                as: 'div',
                selected: n,
                className: a()(l, Q.interactive, Q.linkButton, { [Q.interactiveSelected]: n }),
                children: (0, i.jsxs)(
                    c.rU,
                    ee(
                        $(
                            {
                                to: {
                                    pathname: t,
                                    state: m
                                },
                                className: Q.link
                            },
                            j
                        ),
                        {
                            children: [
                                (0, i.jsx)(O.Z, {
                                    muted: !1,
                                    avatar: (0, i.jsx)(r, {
                                        size: 'refresh_sm',
                                        className: a()(Q.linkButtonIcon, s),
                                        color: 'currentColor'
                                    }),
                                    name: o,
                                    innerClassName: Q.avatarWithText
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
    let { channel: t, isGDMFacepileEnabled: s, selected: l = !1, user: u, activities: b, applicationStream: _, voiceChannel: P, isTyping: Z, status: w, isMobile: V, nameplate: G, ref: z, 'aria-posinset': Y, 'aria-setsize': K } = e,
        [q, eo] = r.useState(!1),
        [ec, ed] = r.useState(!1),
        eu = r.useRef(null),
        em = r.useRef(null),
        ep = null != z ? z : em,
        {
            avatarSrc: eg,
            avatarDecorationSrc: eh,
            eventHandlers: ef
        } = (0, U.Z)({
            userId: null == u ? void 0 : u.id,
            size: p.EFr.SIZE_32,
            animateOnHover: !(l || q || ec)
        }),
        eb = t.isMultiUserDM(),
        ex = t.isSystemDM(),
        e_ = (0, M.Q)(),
        ej = !eb && !ex && t.type === X.d4z.DM,
        eE = ej && (null == u ? void 0 : u.primaryGuild) != null,
        eO = (0, m.e7)([W.ZP], () => W.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eC, blocked: ev } = (0, m.cj)([H.Z], () => ({
            ignored: H.Z.isIgnored(t.getRecipientId()),
            blocked: H.Z.isBlocked(t.getRecipientId())
        })),
        eS = ej && eC,
        eT = ej && ev,
        eN = (eO || eS || eT) && !(l || q),
        eI = (0, m.e7)([F.ZP], () => F.ZP.getMentionCount(t.id) > 0),
        ey = (0, T.ZP)(t),
        eA = (0, m.e7)([A.Z], () => A.Z.isFavorite(t.id)),
        eP = (0, B.L)('PrivateChannel'),
        eR = (0, y.j)({ displayNameStyles: null == u ? void 0 : u.displayNameStyles }),
        eD = null != G && (l || q),
        eZ = () => {
            eo(!0);
        },
        ew = () => {
            eo(!1);
        },
        ek = () => {
            ed(!0);
        },
        eL = () => {
            ed(!1);
        },
        eB = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            (null != e && (e.preventDefault(), e.stopPropagation()), g.Z.closePrivateChannel(t.id, l, n));
        },
        eM = () => {
            g.Z.preload(X.ME, t.id);
        },
        eU = (e) => {
            e.stopPropagation();
        },
        eV = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = eu.current) || t.click();
            }
        },
        eG = (e) => {
            t.isMultiUserDM()
                ? (0, h.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('90508'), n.e('70205'), n.e('53912'), n.e('19549')]).then(n.bind(n, 354741));
                          return (n) =>
                              (0, i.jsx)(
                                  e,
                                  ee($({}, n), {
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
                              ee($({}, n), {
                                  user: u,
                                  channel: t,
                                  channelSelected: l
                              })
                          );
                  });
        },
        eF = (e) => {
            (e.preventDefault(), e.stopPropagation());
            let r = J.intl.formatToPlainString(J.t.hJ5Ap6, { name: ey }),
                s = J.intl.format(J.t.SSIVOj, { name: ey });
            (t.isManaged() && ((r = J.intl.formatToPlainString(J.t.hVGjER, { name: ey })), (s = J.intl.format(J.t.IK1Qvr, { name: ey }))),
                (0, p.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            $(
                                {
                                    header: r,
                                    body: s,
                                    onSubmit: eB
                                },
                                t
                            )
                        );
                }));
        },
        eH = () =>
            t.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: Q.subtext,
                      children: (0, C.Z)(t.id) ? J.intl.string(J.t.FL5T09) : J.intl.string(J.t.NnY5lZ)
                  })
                : t.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: Q.subtext,
                        children: J.intl.format(J.t.CxSA5O, { members: t.recipients.length + 1 })
                    })
                  : (0, x.Z)({
                          activities: b,
                          status: w,
                          applicationStream: _,
                          voiceChannel: P
                      })
                    ? (0, i.jsx)(j.Z, {
                          location: 'PrivateChannel',
                          user: u,
                          activities: b,
                          voiceChannel: P,
                          applicationStream: _,
                          animateEmoji: q || ec,
                          textClassName: Q.activityStatusText,
                          iconClassName: eN ? Q.mutedIcon : void 0
                      })
                    : null,
        ez = () => {
            let e = p.EFr.SIZE_32;
            if (t.isMultiUserDM())
                if (t.recipients.length >= 2 && s && null == t.icon)
                    return (0, i.jsx)(R.Z, {
                        'aria-hidden': !0,
                        recipients: t.recipients,
                        size: e,
                        isTyping: Z,
                        status: w
                    });
                else
                    return (0, i.jsx)(
                        en,
                        ee($({}, ef), {
                            src: (0, S.x)(t),
                            'aria-hidden': !0,
                            size: e,
                            status: Z ? X.Skl.ONLINE : w,
                            isTyping: Z
                        })
                    );
            o()(null != u, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let n = null;
            return (
                u.isSystemUser() || (n = (0, f.Z)(b) ? X.Skl.STREAMING : w),
                (0, i.jsx)(
                    en,
                    ee($({}, ef), {
                        size: p.EFr.SIZE_32,
                        src: eg,
                        avatarDecoration: eh,
                        status: n,
                        isMobile: V,
                        isTyping: Z,
                        'aria-label': u.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eW = eE
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      ey,
                      (0, i.jsx)(D.ZP, {
                          primaryGuild: null == u ? void 0 : u.primaryGuild,
                          userId: null == u ? void 0 : u.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(Q.clanTag, { [Q.clanTagMuted]: eN })
                      })
                  ]
              })
            : ey,
        eY = r.useRef(null);
    return (0, i.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                r = et(e, ['role']);
            return (0, i.jsxs)(N.Z, {
                className: a()(Q.channel, Q.dm),
                role: n,
                focusProps: ee($({}, ei), {
                    focusTarget: eu,
                    ringTarget: ep
                }),
                ref: ep,
                onMouseEnter: eZ,
                onMouseLeave: ew,
                onMouseDown: eM,
                onFocus: ek,
                onBlur: eL,
                onContextMenu: eG,
                'aria-setsize': K,
                'aria-posinset': Y,
                children: [
                    eP && eI ? (0, i.jsx)('div', { className: a()(Q.unreadPill, { [Q.muted]: eN }) }) : null,
                    (0, i.jsxs)(p.vjx, {
                        className: a()(Q.interactive, {
                            [Q.interactiveSystemDM]: e_ && ex,
                            [Q.interactiveSelected]: l
                        }),
                        as: 'div',
                        onClick: eV,
                        muted: eN,
                        selected: l,
                        children: [
                            (0, i.jsx)(L.Z, {
                                nameplate: eD ? G : void 0,
                                selected: l,
                                hovered: q,
                                content: eY,
                                placement: k.i.CHANNEL
                            }),
                            (0, i.jsx)(
                                c.rU,
                                ee(
                                    $(
                                        {
                                            innerRef: eu,
                                            to: X.Z5c.CHANNEL(X.ME, t.id),
                                            className: a()(Q.link, { [Q.linkPlated]: eD }),
                                            'aria-label': (0, v.ZP)({
                                                channel: t,
                                                unread: eI
                                            })
                                        },
                                        r
                                    ),
                                    {
                                        children: (0, i.jsx)(O.Z, {
                                            ref: eY,
                                            avatar: ez(),
                                            highlighted: eI && !(eP && eN),
                                            muted: eN,
                                            subText: eH(),
                                            name: (0, i.jsx)(I.Z, {
                                                tooltipClassName: Q.overflowTooltip,
                                                children: eW
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, i.jsx)(E.Z, {
                                                      className: Q.decorator,
                                                      type: E.Z.Types.SYSTEM_DM,
                                                      verified: !0
                                                  })
                                                : null,
                                            innerClassName: eR
                                        })
                                    }
                                )
                            ),
                            eA ? (0, i.jsx)(es, {}) : null,
                            eS ? (0, i.jsx)(ea, {}) : null,
                            eT ? (0, i.jsx)(el, {}) : null,
                            (0, i.jsx)(er, {
                                'aria-label': eb ? J.intl.string(J.t['26C4oq']) : J.intl.string(J.t.jsvgc3),
                                onClick: eb ? eF : eB,
                                onMouseDown: eU,
                                nameplate: G
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
                  { isStatusIndicatorEnabled: a, isTypingIndicatorEnabled: l, isFacepileEnabled: o } = P.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
                  c = null == s ? void 0 : s.id,
                  d = (0, m.cj)(
                      [G.Z, V.Z],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              if (a) {
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
                      [t, c, a]
                  ),
                  { voiceActivityStatusEnabled: u } = (0, b.U)({ location: 'PrivateChannel' }),
                  { voiceChannel: p } = (0, _.Z)({ userId: c }),
                  g = (0, Z.K)({ user: s }),
                  h = (0, m.e7)(
                      [Y.default, z.Z],
                      () => {
                          if (t.isMultiUserDM())
                              if (l)
                                  return K.default.keys(z.Z.getTypingUsers(t.id)).some((e) => {
                                      var t;
                                      return e !== (null == (t = Y.default.getCurrentUser()) ? void 0 : t.id);
                                  });
                              else return !1;
                          return null != s && z.Z.isTyping(t.id, t.getRecipientId());
                      },
                      [t, s, l]
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

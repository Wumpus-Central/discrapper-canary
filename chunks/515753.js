n.d(t, {
    PZ: () => ei,
    Qj: () => ea,
    RS: () => eo,
    ZP: () => ec
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
    Y = n(594174),
    W = n(709054),
    K = n(998502),
    q = n(981631),
    X = n(388032),
    Q = n(425154);
function J(e) {
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
            for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let et = K.ZP.getEnableHardwareAcceleration() ? g.Xo$ : g.qEK,
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
            g.P3F,
            $(
                J(
                    {
                        className: l()(Q.closeButton, { [Q.closeButtonPlated]: null != t }),
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
                        className: l()({ [Q.innerCloseButtonPlated]: null != t }),
                        children: (0, i.jsx)(g.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: l()(Q.closeIcon, { [Q.closeIconPlated]: null != t })
                        })
                    })
                }
            )
        );
    },
    er = () =>
        (0, i.jsx)(g.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: Q.favoriteIcon
        }),
    es = () =>
        (0, i.jsx)(g.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: Q.favoriteIcon
        }),
    el = () =>
        (0, i.jsx)(g.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: Q.favoriteIcon
        }),
    ea = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: s, interactiveClassName: a, text: o, children: d, locationState: m, onClick: p, className: h, role: f, 'aria-posinset': b, 'aria-setsize': _, listItemRef: x } = e,
            E = ee(e, ['route', 'selected', 'icon', 'iconClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        return (0, i.jsx)(I.Z, {
            className: l()(Q.channel, { [Q.fullWidth]: u.tq }, h),
            onClick: p,
            role: f,
            focusProps: J({ within: !0 }, en),
            'aria-posinset': b,
            'aria-setsize': _,
            ref: x,
            children: (0, i.jsx)(g.vjx, {
                as: 'div',
                selected: n,
                className: l()(a, Q.interactive, Q.linkButton, { [Q.interactiveSelected]: n }),
                children: (0, i.jsxs)(
                    c.rU,
                    $(
                        J(
                            {
                                to: {
                                    pathname: t,
                                    state: m
                                },
                                className: Q.link
                            },
                            E
                        ),
                        {
                            children: [
                                (0, i.jsx)(C.Z, {
                                    muted: !1,
                                    avatar: (0, i.jsx)(r, {
                                        size: 'refresh_sm',
                                        className: l()(Q.linkButtonIcon, s),
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
function eo(e) {
    let { channel: t, isGDMFacepileEnabled: s, selected: a = !1, user: u, activities: b, applicationStream: x, voiceChannel: A, isTyping: D, status: Z, isMobile: U, nameplate: V, ref: H, 'aria-posinset': Y, 'aria-setsize': W } = e,
        [K, ea] = r.useState(!1),
        [eo, ec] = r.useState(!1),
        ed = r.useRef(null),
        eu = r.useRef(null),
        em = null != H ? H : eu,
        {
            avatarSrc: eg,
            avatarDecorationSrc: ep,
            eventHandlers: eh
        } = (0, M.Z)({
            user: u,
            size: g.EFr.SIZE_32,
            animateOnHover: !(a || K || eo)
        }),
        ef = t.isMultiUserDM(),
        eb = t.isSystemDM(),
        e_ = (0, B.Q)(),
        ex = !ef && !eb && t.type === q.d4z.DM,
        eE = ex && (null == u ? void 0 : u.primaryGuild) != null,
        ej = (0, m.e7)([z.ZP], () => z.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eC, blocked: eO } = (0, m.cj)([F.Z], () => ({
            ignored: F.Z.isIgnored(t.getRecipientId()),
            blocked: F.Z.isBlocked(t.getRecipientId())
        })),
        eS = ex && eC,
        ev = ex && eO,
        eT = (ej || eS || ev) && !(a || K),
        eI = (0, m.e7)([G.ZP], () => G.ZP.getMentionCount(t.id) > 0),
        eN = (0, T.ZP)(t),
        ey = (0, m.e7)([y.Z], () => y.Z.isFavorite(t.id)),
        eA = (0, L.L)('PrivateChannel'),
        eP = null != V && (a || K),
        eR = () => {
            ea(!0);
        },
        eD = () => {
            ea(!1);
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
            p.Z.preload(q.ME, t.id);
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
                                  $(J({}, n), {
                                      channel: t,
                                      selected: a
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
                              $(J({}, n), {
                                  user: u,
                                  channel: t,
                                  channelSelected: a
                              })
                          );
                  });
        },
        eV = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = X.intl.formatToPlainString(X.t.hJ5Ap6, { name: eN }),
                s = X.intl.format(X.t.SSIVOj, { name: eN });
            t.isManaged() && ((r = X.intl.formatToPlainString(X.t.hVGjER, { name: eN })), (s = X.intl.format(X.t.IK1Qvr, { name: eN }))),
                (0, g.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            J(
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
                      className: Q.subtext,
                      children: (0, O.Z)(t.id) ? X.intl.string(X.t.FL5T09) : X.intl.string(X.t.NnY5lZ)
                  })
                : t.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: Q.subtext,
                        children: X.intl.format(X.t.CxSA5O, { members: t.recipients.length + 1 })
                    })
                  : (0, _.Z)({
                          activities: b,
                          status: Z,
                          applicationStream: x,
                          voiceChannel: A
                      })
                    ? (0, i.jsx)(E.Z, {
                          location: 'PrivateChannel',
                          user: u,
                          activities: b,
                          voiceChannel: A,
                          applicationStream: x,
                          animateEmoji: K || eo,
                          textClassName: Q.activityStatusText,
                          iconClassName: eT ? Q.mutedIcon : void 0
                      })
                    : null,
        eF = () => {
            let e = g.EFr.SIZE_32;
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
                        $(J({}, eh), {
                            src: (0, v.x)(t),
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
                    $(J({}, eh), {
                        size: g.EFr.SIZE_32,
                        src: eg,
                        avatarDecoration: ep,
                        status: n,
                        isMobile: U,
                        isTyping: D,
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
                      (0, i.jsx)(R.ZP, {
                          primaryGuild: null == u ? void 0 : u.primaryGuild,
                          userId: null == u ? void 0 : u.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: Q.clanTag
                      })
                  ]
              })
            : eN,
        ez = r.useRef(null);
    return (0, i.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                r = ee(e, ['role']);
            return (0, i.jsxs)(I.Z, {
                className: l()(Q.channel, Q.dm),
                role: n,
                focusProps: $(J({}, en), {
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
                'aria-posinset': Y,
                children: [
                    eA && eI ? (0, i.jsx)('div', { className: l()(Q.unreadPill, { [Q.muted]: eT }) }) : null,
                    (0, i.jsxs)(g.vjx, {
                        className: l()(Q.interactive, {
                            [Q.interactiveSystemDM]: e_ && eb,
                            [Q.interactiveSelected]: a
                        }),
                        as: 'div',
                        onClick: eM,
                        muted: eT,
                        selected: a,
                        children: [
                            (0, i.jsx)(k.Z, {
                                nameplate: eP ? V : void 0,
                                selected: a,
                                hovered: K,
                                content: ez,
                                placement: w.i.CHANNEL
                            }),
                            (0, i.jsx)(
                                c.rU,
                                $(
                                    J(
                                        {
                                            innerRef: ed,
                                            to: q.Z5c.CHANNEL(q.ME, t.id),
                                            className: l()(Q.link, { [Q.linkPlated]: eP }),
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
                                                tooltipClassName: Q.overflowTooltip,
                                                children: eH
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, i.jsx)(j.Z, {
                                                      className: Q.decorator,
                                                      type: j.Z.Types.SYSTEM_DM,
                                                      verified: !0
                                                  })
                                                : null
                                        })
                                    }
                                )
                            ),
                            ey ? (0, i.jsx)(er, {}) : null,
                            eS ? (0, i.jsx)(es, {}) : null,
                            ev ? (0, i.jsx)(el, {}) : null,
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
              let s = (0, m.e7)([Y.default], () => Y.default.getUser(t.getRecipientId())),
                  { isStatusIndicatorEnabled: l, isTypingIndicatorEnabled: a, isFacepileEnabled: o } = A.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
                  c = null == s ? void 0 : s.id,
                  d = (0, m.cj)(
                      [V.Z, U.Z],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              if (l) {
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
                      [t, c, l]
                  ),
                  { voiceActivityStatusEnabled: u } = (0, b.U)({ location: 'PrivateChannel' }),
                  { voiceChannel: g } = (0, x.Z)({ userId: c }),
                  p = (0, D.K)({ user: s }),
                  h = (0, m.e7)(
                      [Y.default, H.Z],
                      () => {
                          if (t.isMultiUserDM())
                              if (a)
                                  return W.default.keys(H.Z.getTypingUsers(t.id)).some((e) => {
                                      var t;
                                      return e !== (null == (t = Y.default.getCurrentUser()) ? void 0 : t.id);
                                  });
                              else return !1;
                          return null != s && H.Z.isTyping(t.id, t.getRecipientId());
                      },
                      [t, s, a]
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(
                        eo,
                        J(
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
                        J(
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

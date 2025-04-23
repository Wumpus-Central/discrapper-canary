n.d(t, {
    PZ: () => es,
    Qj: () => ec,
    RS: () => ed,
    ZP: () => eu
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
    g = n(481060),
    p = n(493683),
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
    Z = n(598062),
    w = n(850020),
    k = n(379839),
    L = n(359135),
    B = n(516817),
    M = n(273388),
    U = n(878857),
    V = n(518950),
    G = n(199902),
    F = n(158776),
    H = n(306680),
    z = n(699516),
    W = n(111583),
    Y = n(9156),
    K = n(594174),
    q = n(709054),
    X = n(998502),
    Q = n(981631),
    J = n(388032),
    $ = n(425154);
function ee(e) {
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
function et(e, t) {
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
function en(e, t) {
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
let ei = X.ZP.getEnableHardwareAcceleration() ? g.Xo$ : g.qEK,
    er = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    es = (e) => {
        let { nameplate: t } = e,
            n = (0, k.A)(t);
        return (0, i.jsx)(
            g.P3F,
            et(
                ee(
                    {
                        className: l()($.closeButton, { [$.closeButtonPlated]: null != t }),
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
                        className: l()({ [$.innerCloseButtonPlated]: null != t }),
                        children: (0, i.jsx)(g.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: l()($.closeIcon, { [$.closeIconPlated]: null != t })
                        })
                    })
                }
            )
        );
    },
    el = () =>
        (0, i.jsx)(g.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: $.favoriteIcon
        }),
    ea = () =>
        (0, i.jsx)(g.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: $.favoriteIcon
        }),
    eo = () =>
        (0, i.jsx)(g.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: $.favoriteIcon
        }),
    ec = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: s, avatarWithTextClassName: a, interactiveClassName: o, text: d, children: m, locationState: p, onClick: h, className: f, role: b, 'aria-posinset': _, 'aria-setsize': x, listItemRef: E } = e,
            j = en(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let O = (0, y.Q3)('PrivateChannelLinkButton');
        return (0, i.jsx)(I.Z, {
            className: l()($.channel, { [$.fullWidth]: u.tq }, f),
            onClick: h,
            role: b,
            focusProps: ee({ within: !0 }, er),
            'aria-posinset': _,
            'aria-setsize': x,
            ref: E,
            children: (0, i.jsx)(g.vjx, {
                as: 'div',
                selected: n,
                className: l()(o, $.interactive, $.linkButton, { [$.interactiveSelected]: n }),
                children: (0, i.jsxs)(
                    c.rU,
                    et(
                        ee(
                            {
                                to: {
                                    pathname: t,
                                    state: p
                                },
                                className: $.link
                            },
                            j
                        ),
                        {
                            children: [
                                (0, i.jsx)(C.Z, {
                                    muted: !1,
                                    avatar: (0, i.jsx)(r, {
                                        size: O ? 'refresh_sm' : void 0,
                                        className: l()($.linkButtonIcon, s),
                                        color: 'currentColor'
                                    }),
                                    name: d,
                                    innerClassName: l()($.avatarWithText, a)
                                }),
                                m
                            ]
                        }
                    )
                )
            })
        });
    };
function ed(e) {
    let { channel: t, isGDMFacepileEnabled: s, selected: a = !1, user: u, activities: b, applicationStream: x, voiceChannel: y, isTyping: P, status: w, isMobile: k, nameplate: G, 'aria-posinset': F, 'aria-setsize': W } = e,
        [K, q] = r.useState(!1),
        X = r.useRef(null),
        ec = r.useRef(null),
        {
            avatarSrc: ed,
            avatarDecorationSrc: eu,
            eventHandlers: em
        } = (0, V.Z)({
            user: u,
            size: g.EFr.SIZE_32,
            animateOnHover: !(a || K)
        }),
        eg = t.isMultiUserDM(),
        ep = t.isSystemDM(),
        eh = (0, U.Q)(),
        ef = !eg && !ep && t.type === Q.d4z.DM,
        eb = ef && (null == u ? void 0 : u.primaryGuild) != null,
        e_ = (0, m.e7)([Y.ZP], () => Y.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: ex, blocked: eE } = (0, m.cj)([z.Z], () => ({
            ignored: z.Z.isIgnored(t.getRecipientId()),
            blocked: z.Z.isBlocked(t.getRecipientId())
        })),
        ej = ef && ex,
        eC = ef && eE,
        eO = (e_ || ej || eC) && !(a || K),
        eS = (0, m.e7)([H.ZP], () => H.ZP.getMentionCount(t.id) > 0),
        ev = (0, T.ZP)(t),
        eT = (0, m.e7)([A.Z], () => A.Z.isFavorite(t.id)),
        eI = (0, M.L)('PrivateChannel'),
        eN = (0, Z.AK)('PrivateChannel') ? null != G && (a || K) : null != G,
        ey = () => {
            q(!0);
        },
        eA = () => {
            q(!1);
        },
        eP = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), p.Z.closePrivateChannel(t.id, a, n);
        },
        eR = () => {
            p.Z.preload(Q.ME, t.id);
        },
        eD = (e) => {
            e.stopPropagation();
        },
        eZ = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = X.current) || t.click();
            }
        },
        ew = (e) => {
            t.isMultiUserDM()
                ? (0, h.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('53912'), n.e('19549')]).then(n.bind(n, 354741));
                          return (n) =>
                              (0, i.jsx)(
                                  e,
                                  et(ee({}, n), {
                                      channel: t,
                                      selected: a
                                  })
                              );
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, h.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('98254'), n.e('56826'), n.e('6589')]).then(n.bind(n, 131404));
                      return (n) =>
                          (0, i.jsx)(
                              e,
                              et(ee({}, n), {
                                  user: u,
                                  channel: t,
                                  channelSelected: a
                              })
                          );
                  });
        },
        ek = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = J.intl.formatToPlainString(J.t.hJ5Ap6, { name: ev }),
                s = J.intl.format(J.t.SSIVOj, { name: ev });
            t.isManaged() && ((r = J.intl.formatToPlainString(J.t.hVGjER, { name: ev })), (s = J.intl.format(J.t.IK1Qvr, { name: ev }))),
                (0, g.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            ee(
                                {
                                    header: r,
                                    body: s,
                                    onSubmit: eP
                                },
                                t
                            )
                        );
                });
        },
        eL = () =>
            t.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: $.subtext,
                      children: (0, O.Z)(t.id) ? J.intl.string(J.t.FL5T09) : J.intl.string(J.t.NnY5lZ)
                  })
                : t.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: $.subtext,
                        children: J.intl.format(J.t.CxSA5O, { members: t.recipients.length + 1 })
                    })
                  : (0, _.Z)({
                          activities: b,
                          status: w,
                          applicationStream: x,
                          voiceChannel: y
                      })
                    ? (0, i.jsx)(E.Z, {
                          user: u,
                          activities: b,
                          voiceChannel: y,
                          applicationStream: x,
                          animate: K,
                          textClassName: $.activityStatusText,
                          iconClassName: eO ? $.mutedIcon : void 0
                      })
                    : null,
        eB = () => {
            let e = g.EFr.SIZE_32;
            if (t.isMultiUserDM())
                if (t.recipients.length >= 2 && s && null == t.icon)
                    return (0, i.jsx)(R.Z, {
                        'aria-hidden': !0,
                        recipients: t.recipients,
                        size: e,
                        isTyping: P,
                        status: w
                    });
                else
                    return (0, i.jsx)(
                        ei,
                        et(ee({}, em), {
                            src: (0, v.x)(t),
                            'aria-hidden': !0,
                            size: e,
                            status: P ? Q.Skl.ONLINE : w,
                            isTyping: P
                        })
                    );
            o()(null != u, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let n = null;
            return (
                u.isSystemUser() || (n = (0, f.Z)(b) ? Q.Skl.STREAMING : w),
                (0, i.jsx)(
                    ei,
                    et(ee({}, em), {
                        size: g.EFr.SIZE_32,
                        src: ed,
                        avatarDecoration: eu,
                        status: n,
                        isMobile: k,
                        isTyping: P,
                        'aria-label': u.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eM = eb
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      ev,
                      (0, i.jsx)(D.ZP, {
                          primaryGuild: null == u ? void 0 : u.primaryGuild,
                          userId: null == u ? void 0 : u.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: $.clanTag
                      })
                  ]
              })
            : ev,
        eU = r.useRef(null);
    return (0, i.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                r = en(e, ['role']);
            return (0, i.jsxs)(I.Z, {
                className: l()($.channel, $.dm),
                role: n,
                focusProps: et(ee({}, er), {
                    focusTarget: X,
                    ringTarget: ec
                }),
                ref: ec,
                onMouseEnter: ey,
                onMouseLeave: eA,
                onMouseDown: eR,
                onContextMenu: ew,
                'aria-setsize': W,
                'aria-posinset': F,
                children: [
                    eI && eS ? (0, i.jsx)('div', { className: l()($.unreadPill, { [$.muted]: eO }) }) : null,
                    (0, i.jsxs)(g.vjx, {
                        className: l()($.interactive, {
                            [$.interactiveSystemDM]: eh && ep,
                            [$.interactiveSelected]: a
                        }),
                        as: 'div',
                        onClick: eZ,
                        muted: eO,
                        selected: a,
                        children: [
                            (0, i.jsx)(B.Z, {
                                nameplate: eN ? G : void 0,
                                selected: a,
                                hovered: K,
                                content: eU,
                                placement: L.i.CHANNEL
                            }),
                            (0, i.jsx)(
                                c.rU,
                                et(
                                    ee(
                                        {
                                            innerRef: X,
                                            to: Q.Z5c.CHANNEL(Q.ME, t.id),
                                            className: l()($.link, { [$.linkPlated]: eN }),
                                            'aria-label': (0, S.ZP)({
                                                channel: t,
                                                unread: eS
                                            })
                                        },
                                        r
                                    ),
                                    {
                                        children: (0, i.jsx)(C.Z, {
                                            ref: eU,
                                            avatar: eB(),
                                            highlighted: eS && !(eI && eO),
                                            muted: eO,
                                            subText: eL(),
                                            name: (0, i.jsx)(N.Z, {
                                                tooltipClassName: $.overflowTooltip,
                                                children: eM
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, i.jsx)(j.Z, {
                                                      className: $.decorator,
                                                      type: j.Z.Types.SYSTEM_DM,
                                                      verified: !0
                                                  })
                                                : null
                                        })
                                    }
                                )
                            ),
                            eT ? (0, i.jsx)(el, {}) : null,
                            ej ? (0, i.jsx)(ea, {}) : null,
                            eC ? (0, i.jsx)(eo, {}) : null,
                            (0, i.jsx)(es, {
                                'aria-label': eg ? J.intl.string(J.t['26C4oq']) : J.intl.string(J.t.jsvgc3),
                                onClick: eg ? ek : eP,
                                onMouseDown: eD,
                                nameplate: G
                            })
                        ]
                    })
                ]
            });
        }
    });
}
let eu =
    12633 == n.j
        ? (e) => {
              var { channel: t, selected: n } = e,
                  r = en(e, ['channel', 'selected']);
              let s = (0, m.e7)([K.default], () => K.default.getUser(t.getRecipientId())),
                  { isStatusIndicatorEnabled: l, isTypingIndicatorEnabled: a, isFacepileEnabled: o } = P.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
                  c = null == s ? void 0 : s.id,
                  d = (0, m.cj)(
                      [F.Z, G.Z],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              if (l) {
                                  let n = F.Z.getState().statuses;
                                  t.recipients.some((e) => n[e] === Q.Skl.ONLINE) && (e = Q.Skl.ONLINE);
                              }
                          } else null != c && (e = F.Z.getStatus(c));
                          return {
                              status: e,
                              activities: null != c ? F.Z.getActivities(c) : null,
                              applicationStream: null != c ? G.Z.getAnyStreamForUser(c) : null,
                              isMobile: null != c && F.Z.isMobileOnline(c)
                          };
                      },
                      [t, c, l]
                  ),
                  { voiceActivityStatusEnabled: u } = (0, b.U)({ location: 'PrivateChannel' }),
                  { voiceChannel: g } = (0, x.Z)({ userId: c }),
                  p = (0, w.K)({
                      location: 'PrivateChannel',
                      user: s,
                      privateChannel: t
                  }),
                  h = (0, m.e7)(
                      [K.default, W.Z],
                      () => {
                          if (t.isMultiUserDM())
                              if (a)
                                  return q.default.keys(W.Z.getTypingUsers(t.id)).some((e) => {
                                      var t;
                                      return e !== (null == (t = K.default.getCurrentUser()) ? void 0 : t.id);
                                  });
                              else return !1;
                          return null != s && W.Z.isTyping(t.id, t.getRecipientId());
                      },
                      [t, s, a]
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(
                        ed,
                        ee(
                            {
                                channel: t,
                                selected: n,
                                isTyping: h,
                                status: d.status === Q.Skl.ONLINE ? Q.Skl.ONLINE : void 0,
                                isGDMFacepileEnabled: o
                            },
                            r
                        )
                    )
                  : (0, i.jsx)(
                        ed,
                        ee(
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

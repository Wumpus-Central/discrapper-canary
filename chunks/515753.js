(n.d(t, {
    PZ: () => es,
    Qj: () => ec,
    RS: () => ed,
    ZP: () => eu
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
    y = n(821795),
    A = n(892567),
    P = n(853856),
    R = n(93687),
    D = n(785232),
    Z = n(172751),
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
    J = n(981631),
    Q = n(388032),
    $ = n(425154);
function ee(e) {
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
            for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
}
let ei = X.ZP.getEnableHardwareAcceleration() ? p.Xo$ : p.qEK,
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
            p.P3F,
            et(
                ee(
                    {
                        className: a()($.closeButton, { [$.closeButtonPlated]: null != t }),
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
                        className: a()({ [$.innerCloseButtonPlated]: null != t }),
                        children: (0, i.jsx)(p.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: a()($.closeIcon, { [$.closeIconPlated]: null != t })
                        })
                    })
                }
            )
        );
    },
    ea = () =>
        (0, i.jsx)(p.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: $.favoriteIcon
        }),
    el = () =>
        (0, i.jsx)(p.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: $.favoriteIcon
        }),
    eo = () =>
        (0, i.jsx)(p.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: $.favoriteIcon
        }),
    ec = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: s, interactiveClassName: l, text: o, children: d, locationState: m, onClick: g, className: h, role: f, 'aria-posinset': b, 'aria-setsize': x, listItemRef: _ } = e,
            j = en(e, ['route', 'selected', 'icon', 'iconClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        return (0, i.jsx)(N.Z, {
            className: a()($.channel, { [$.fullWidth]: u.tq }, h),
            onClick: g,
            role: f,
            focusProps: ee({ within: !0 }, er),
            'aria-posinset': b,
            'aria-setsize': x,
            ref: _,
            children: (0, i.jsx)(p.vjx, {
                as: 'div',
                selected: n,
                className: a()(l, $.interactive, $.linkButton, { [$.interactiveSelected]: n }),
                children: (0, i.jsxs)(
                    c.rU,
                    et(
                        ee(
                            {
                                to: {
                                    pathname: t,
                                    state: m
                                },
                                className: $.link
                            },
                            j
                        ),
                        {
                            children: [
                                (0, i.jsx)(O.Z, {
                                    muted: !1,
                                    avatar: (0, i.jsx)(r, {
                                        size: 'refresh_sm',
                                        className: a()($.linkButtonIcon, s),
                                        color: 'currentColor'
                                    }),
                                    name: o,
                                    innerClassName: $.avatarWithText
                                }),
                                d
                            ]
                        }
                    )
                )
            })
        });
    };
function ed(e) {
    let { channel: t, isGDMFacepileEnabled: s, selected: l = !1, user: u, activities: b, applicationStream: _, voiceChannel: R, isTyping: w, status: k, isMobile: G, nameplate: F, ref: W, 'aria-posinset': K, 'aria-setsize': q } = e,
        [X, ec] = r.useState(!1),
        [ed, eu] = r.useState(!1),
        em = r.useRef(null),
        ep = r.useRef(null),
        eg = null != W ? W : ep,
        {
            avatarSrc: eh,
            avatarDecorationSrc: ef,
            eventHandlers: eb
        } = (0, V.Z)({
            userId: null == u ? void 0 : u.id,
            size: p.EFr.SIZE_32,
            animateOnHover: !(l || X || ed)
        }),
        ex = t.isMultiUserDM(),
        e_ = t.isSystemDM(),
        ej = (0, U.Q)(),
        eE = !ex && !e_ && t.type === J.d4z.DM,
        eO = eE && (null == u ? void 0 : u.primaryGuild) != null,
        eC = (0, m.e7)([Y.ZP], () => Y.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: ev, blocked: eS } = (0, m.cj)([z.Z], () => ({
            ignored: z.Z.isIgnored(t.getRecipientId()),
            blocked: z.Z.isBlocked(t.getRecipientId())
        })),
        eT = eE && ev,
        eN = eE && eS,
        eI = (eC || eT || eN) && !(l || X),
        ey = (0, m.e7)([H.ZP], () => H.ZP.getMentionCount(t.id) > 0),
        eA = (0, T.ZP)(t),
        eP = (0, m.e7)([P.Z], () => P.Z.isFavorite(t.id)),
        eR = (0, M.L)('PrivateChannel'),
        eD = null != F && (l || X),
        eZ = () => {
            ec(!0);
        },
        ew = () => {
            ec(!1);
        },
        ek = () => {
            eu(!0);
        },
        eL = () => {
            eu(!1);
        },
        eB = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            (null != e && (e.preventDefault(), e.stopPropagation()), g.Z.closePrivateChannel(t.id, l, n));
        },
        eM = () => {
            g.Z.preload(J.ME, t.id);
        },
        eU = (e) => {
            e.stopPropagation();
        },
        eV = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = em.current) || t.click();
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
                                  et(ee({}, n), {
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
                              et(ee({}, n), {
                                  user: u,
                                  channel: t,
                                  channelSelected: l
                              })
                          );
                  });
        },
        eF = (e) => {
            (e.preventDefault(), e.stopPropagation());
            let r = Q.intl.formatToPlainString(Q.t.hJ5Ap6, { name: eA }),
                s = Q.intl.format(Q.t.SSIVOj, { name: eA });
            (t.isManaged() && ((r = Q.intl.formatToPlainString(Q.t.hVGjER, { name: eA })), (s = Q.intl.format(Q.t.IK1Qvr, { name: eA }))),
                (0, p.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            ee(
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
                      className: $.subtext,
                      children: (0, C.Z)(t.id) ? Q.intl.string(Q.t.FL5T09) : Q.intl.string(Q.t.NnY5lZ)
                  })
                : t.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: $.subtext,
                        children: Q.intl.format(Q.t.CxSA5O, { members: t.recipients.length + 1 })
                    })
                  : (0, x.Z)({
                          activities: b,
                          status: k,
                          applicationStream: _,
                          voiceChannel: R
                      })
                    ? (0, i.jsx)(j.Z, {
                          location: 'PrivateChannel',
                          user: u,
                          activities: b,
                          voiceChannel: R,
                          applicationStream: _,
                          animateEmoji: X || ed,
                          textClassName: $.activityStatusText,
                          iconClassName: eI ? $.mutedIcon : void 0
                      })
                    : null,
        ez = () => {
            let e = p.EFr.SIZE_32;
            if (t.isMultiUserDM())
                if (t.recipients.length >= 2 && s && null == t.icon)
                    return (0, i.jsx)(D.Z, {
                        'aria-hidden': !0,
                        recipients: t.recipients,
                        size: e,
                        isTyping: w,
                        status: k
                    });
                else
                    return (0, i.jsx)(
                        ei,
                        et(ee({}, eb), {
                            src: (0, S.x)(t),
                            'aria-hidden': !0,
                            size: e,
                            status: w ? J.Skl.ONLINE : k,
                            isTyping: w
                        })
                    );
            o()(null != u, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let n = null;
            return (
                u.isSystemUser() || (n = (0, f.Z)(b) ? J.Skl.STREAMING : k),
                (0, i.jsx)(
                    ei,
                    et(ee({}, eb), {
                        size: p.EFr.SIZE_32,
                        src: eh,
                        avatarDecoration: ef,
                        status: n,
                        isMobile: G,
                        isTyping: w,
                        'aria-label': u.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eW = (0, i.jsx)(A.Z, {
            userName: eA,
            displayNameStyles: null == u ? void 0 : u.displayNameStyles,
            effectDisplayType: X || l ? y.F.ANIMATED : y.F.PLAIN
        }),
        eY = eO
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eW,
                      (0, i.jsx)(Z.ZP, {
                          primaryGuild: null == u ? void 0 : u.primaryGuild,
                          userId: null == u ? void 0 : u.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()($.clanTag, { [$.clanTagMuted]: eI })
                      })
                  ]
              })
            : eW,
        eK = r.useRef(null);
    return (0, i.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                r = en(e, ['role']);
            return (0, i.jsxs)(N.Z, {
                className: a()($.channel, $.dm),
                role: n,
                focusProps: et(ee({}, er), {
                    focusTarget: em,
                    ringTarget: eg
                }),
                ref: eg,
                onMouseEnter: eZ,
                onMouseLeave: ew,
                onMouseDown: eM,
                onFocus: ek,
                onBlur: eL,
                onContextMenu: eG,
                'aria-setsize': q,
                'aria-posinset': K,
                children: [
                    eR && ey ? (0, i.jsx)('div', { className: a()($.unreadPill, { [$.muted]: eI }) }) : null,
                    (0, i.jsxs)(p.vjx, {
                        className: a()($.interactive, {
                            [$.interactiveSystemDM]: ej && e_,
                            [$.interactiveSelected]: l
                        }),
                        as: 'div',
                        onClick: eV,
                        muted: eI,
                        selected: l,
                        children: [
                            (0, i.jsx)(B.Z, {
                                nameplate: eD ? F : void 0,
                                selected: l,
                                hovered: X,
                                content: eK,
                                placement: L.i.CHANNEL
                            }),
                            (0, i.jsx)(
                                c.rU,
                                et(
                                    ee(
                                        {
                                            innerRef: em,
                                            to: J.Z5c.CHANNEL(J.ME, t.id),
                                            className: a()($.link, { [$.linkPlated]: eD }),
                                            'aria-label': (0, v.ZP)({
                                                channel: t,
                                                unread: ey
                                            })
                                        },
                                        r
                                    ),
                                    {
                                        children: (0, i.jsx)(O.Z, {
                                            ref: eK,
                                            avatar: ez(),
                                            highlighted: ey && !(eR && eI),
                                            muted: eI,
                                            subText: eH(),
                                            name: (0, i.jsx)(I.Z, {
                                                className: a()($.overflowTooltip, { [$.withDisplayNameStyles]: null == u ? void 0 : u.displayNameStyles }),
                                                children: eY
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, i.jsx)(E.Z, {
                                                      className: $.decorator,
                                                      type: E.Z.Types.SYSTEM_DM,
                                                      verified: !0
                                                  })
                                                : null
                                        })
                                    }
                                )
                            ),
                            eP ? (0, i.jsx)(ea, {}) : null,
                            eT ? (0, i.jsx)(el, {}) : null,
                            eN ? (0, i.jsx)(eo, {}) : null,
                            (0, i.jsx)(es, {
                                'aria-label': ex ? Q.intl.string(Q.t['26C4oq']) : Q.intl.string(Q.t.jsvgc3),
                                onClick: ex ? eF : eB,
                                onMouseDown: eU,
                                nameplate: F
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
                  { isStatusIndicatorEnabled: a, isTypingIndicatorEnabled: l, isFacepileEnabled: o } = R.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
                  c = null == s ? void 0 : s.id,
                  d = (0, m.cj)(
                      [F.Z, G.Z],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              if (a) {
                                  let n = F.Z.getState().statuses;
                                  t.recipients.some((e) => n[e] === J.Skl.ONLINE) && (e = J.Skl.ONLINE);
                              }
                          } else null != c && (e = F.Z.getStatus(c));
                          return {
                              status: e,
                              activities: null != c ? F.Z.getActivities(c) : null,
                              applicationStream: null != c ? G.Z.getAnyStreamForUser(c) : null,
                              isMobile: null != c && F.Z.isMobileOnline(c)
                          };
                      },
                      [t, c, a]
                  ),
                  { voiceActivityStatusEnabled: u } = (0, b.U)({ location: 'PrivateChannel' }),
                  { voiceChannel: p } = (0, _.Z)({ userId: c }),
                  g = (0, w.K)({ user: s }),
                  h = (0, m.e7)(
                      [K.default, W.Z],
                      () => {
                          if (t.isMultiUserDM())
                              if (l)
                                  return q.default.keys(W.Z.getTypingUsers(t.id)).some((e) => {
                                      var t;
                                      return e !== (null == (t = K.default.getCurrentUser()) ? void 0 : t.id);
                                  });
                              else return !1;
                          return null != s && W.Z.isTyping(t.id, t.getRecipientId());
                      },
                      [t, s, l]
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(
                        ed,
                        ee(
                            {
                                channel: t,
                                selected: n,
                                isTyping: h,
                                status: d.status === J.Skl.ONLINE ? J.Skl.ONLINE : void 0,
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

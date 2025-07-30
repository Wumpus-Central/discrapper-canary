(n.d(t, {
    Qj: () => ec,
    RS: () => ed,
    ZP: () => eu,
    bU: () => es
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
    D = n(489618),
    Z = n(785232),
    w = n(172751),
    k = n(850020),
    L = n(379839),
    B = n(359135),
    M = n(516817),
    U = n(878857),
    V = n(518950),
    G = n(199902),
    F = n(158776),
    H = n(306680),
    W = n(699516),
    z = n(111583),
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
        var { nameplate: t, icon: n, forceShow: r = !1 } = e,
            s = en(e, ['nameplate', 'icon', 'forceShow']);
        let l = (0, L.A)(t);
        return (0, i.jsx)(
            p.P3F,
            et(
                ee(
                    {
                        className: a()($.closeButton, {
                            [$.closeButtonPlated]: null != t,
                            [$.closeButtonForceShow]: r
                        }),
                        style: l
                    },
                    s
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
                        children: (0, i.jsx)(n, {
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
    let { channel: t, isGDMFacepileEnabled: s, selected: l = !1, user: u, activities: b, applicationStream: _, voiceChannel: R, isTyping: k, status: L, isMobile: G, nameplate: F, ref: z, 'aria-posinset': K, 'aria-setsize': q } = e,
        [X, ec] = r.useState(!1),
        [ed, eu] = r.useState(!1),
        [em, ep] = r.useState(!1),
        eg = r.useRef(null),
        eh = r.useRef(null),
        ef = null != z ? z : eh,
        {
            avatarSrc: eb,
            avatarDecorationSrc: ex,
            eventHandlers: e_
        } = (0, V.Z)({
            userId: null == u ? void 0 : u.id,
            size: p.EFr.SIZE_32,
            animateOnHover: !(l || X || ed || em)
        }),
        ej = t.isMultiUserDM(),
        eE = t.isSystemDM(),
        eO = (0, U.Q)(),
        eC = !ej && !eE && t.type === J.d4z.DM,
        ev = eC && (null == u ? void 0 : u.primaryGuild) != null,
        eS = (0, m.e7)([Y.ZP], () => Y.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eT, blocked: eN } = (0, m.cj)([W.Z], () => ({
            ignored: W.Z.isIgnored(t.getRecipientId()),
            blocked: W.Z.isBlocked(t.getRecipientId())
        })),
        eI = eC && eT,
        ey = eC && eN,
        eA = (eS || eI || ey) && !(l || X),
        eP = (0, m.e7)([H.ZP], () => H.ZP.getMentionCount(t.id) > 0),
        eR = (0, T.ZP)(t),
        eD = (0, m.e7)([P.Z], () => P.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: eZ } = D.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        ew = null != F && (l || X || em),
        ek = () => {
            ec(!0);
        },
        eL = () => {
            ec(!1);
        },
        eB = () => {
            eu(!0);
        },
        eM = () => {
            eu(!1);
        },
        eU = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            (null != e && (e.preventDefault(), e.stopPropagation()), g.Z.closePrivateChannel(t.id, l, n));
        },
        eV = () => {
            g.Z.preload(J.ME, t.id);
        },
        eG = (e) => {
            e.stopPropagation();
        },
        eF = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = eg.current) || t.click();
            }
        },
        eH = (e) => {
            (ep(!0),
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
                          {
                              noBlurEvent: !0,
                              onClose: () => ep(!1)
                          }
                      )
                    : (0, h.jW)(
                          e,
                          async () => {
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
                          },
                          { onClose: () => ep(!1) }
                      ));
        },
        eW = (e) => {
            (e.preventDefault(), e.stopPropagation());
            let r = Q.intl.formatToPlainString(Q.t.hJ5Ap6, { name: eR }),
                s = Q.intl.format(Q.t.SSIVOj, { name: eR });
            (t.isManaged() && ((r = Q.intl.formatToPlainString(Q.t.hVGjER, { name: eR })), (s = Q.intl.format(Q.t.IK1Qvr, { name: eR }))),
                (0, p.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            ee(
                                {
                                    header: r,
                                    body: s,
                                    onSubmit: eU
                                },
                                t
                            )
                        );
                }));
        },
        ez = () =>
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
                          status: L,
                          applicationStream: _,
                          voiceChannel: R
                      })
                    ? (0, i.jsx)(j.Z, {
                          location: 'PrivateChannel',
                          user: u,
                          activities: b,
                          voiceChannel: R,
                          applicationStream: _,
                          animateEmoji: X || ed || em,
                          textClassName: $.activityStatusText,
                          iconClassName: eA ? $.mutedIcon : void 0
                      })
                    : null,
        eY = () => {
            let e = p.EFr.SIZE_32;
            if (t.isMultiUserDM())
                if (t.recipients.length >= 2 && s && null == t.icon)
                    return (0, i.jsx)(Z.Z, {
                        'aria-hidden': !0,
                        recipients: t.recipients,
                        size: e,
                        isTyping: k,
                        status: L
                    });
                else
                    return (0, i.jsx)(
                        ei,
                        et(ee({}, e_), {
                            src: (0, S.x)(t),
                            'aria-hidden': !0,
                            size: e,
                            status: k ? J.Skl.ONLINE : L,
                            isTyping: k
                        })
                    );
            o()(null != u, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let n = null;
            return (
                u.isSystemUser() || (n = (0, f.Z)(b) ? J.Skl.STREAMING : L),
                (0, i.jsx)(
                    ei,
                    et(ee({}, e_), {
                        size: p.EFr.SIZE_32,
                        src: eb,
                        avatarDecoration: ex,
                        status: n,
                        isMobile: G,
                        isTyping: k,
                        'aria-label': u.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eK = (0, i.jsx)(A.Z, {
            userName: eR,
            displayNameStyles: null == u ? void 0 : u.displayNameStyles,
            effectDisplayType: X || l || em ? y.F.ANIMATED : y.F.PLAIN
        }),
        eq = ev
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eK,
                      (0, i.jsx)(w.ZP, {
                          primaryGuild: null == u ? void 0 : u.primaryGuild,
                          userId: null == u ? void 0 : u.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()($.clanTag, { [$.clanTagMuted]: eA })
                      })
                  ]
              })
            : eK,
        eX = r.useRef(null);
    return (0, i.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                r = en(e, ['role']);
            return (0, i.jsxs)(N.Z, {
                className: a()($.channel, $.dm),
                role: n,
                focusProps: et(ee({}, er), {
                    focusTarget: eg,
                    ringTarget: ef
                }),
                ref: ef,
                onMouseEnter: ek,
                onMouseLeave: eL,
                onMouseDown: eV,
                onFocus: eB,
                onBlur: eM,
                onContextMenu: eH,
                'aria-setsize': q,
                'aria-posinset': K,
                children: [
                    eP ? (0, i.jsx)('div', { className: a()($.unreadPill, { [$.muted]: eA }) }) : null,
                    (0, i.jsxs)(p.vjx, {
                        className: a()($.interactive, {
                            [$.interactiveSystemDM]: eO && eE,
                            [$.interactiveSelected]: l || em
                        }),
                        as: 'div',
                        onClick: eF,
                        muted: eA,
                        selected: l,
                        children: [
                            (0, i.jsx)(M.Z, {
                                nameplate: ew ? F : void 0,
                                selected: l,
                                hovered: X,
                                content: eX,
                                placement: B.i.CHANNEL
                            }),
                            (0, i.jsx)(
                                c.rU,
                                et(
                                    ee(
                                        {
                                            innerRef: eg,
                                            to: J.Z5c.CHANNEL(J.ME, t.id),
                                            className: a()($.link, { [$.linkPlated]: ew }),
                                            'aria-label': (0, v.ZP)({
                                                channel: t,
                                                unread: eP
                                            })
                                        },
                                        r
                                    ),
                                    {
                                        children: (0, i.jsx)(O.Z, {
                                            ref: eX,
                                            avatar: eY(),
                                            highlighted: eP && !eA,
                                            muted: eA,
                                            subText: ez(),
                                            name: (0, i.jsx)(I.Z, {
                                                className: a()($.overflowTooltip, { [$.withDisplayNameStyles]: null == u ? void 0 : u.displayNameStyles }),
                                                children: eq
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
                            eD ? (0, i.jsx)(ea, {}) : null,
                            eI ? (0, i.jsx)(el, {}) : null,
                            ey ? (0, i.jsx)(eo, {}) : null,
                            eZ
                                ? (0, i.jsx)(es, {
                                      icon: p.xhG,
                                      'aria-label': Q.intl.string(Q.t.PdRCRk),
                                      onClick: eH,
                                      onMouseDown: eG,
                                      nameplate: F,
                                      forceShow: em
                                  })
                                : (0, i.jsx)(es, {
                                      icon: p.Dio,
                                      'aria-label': ej ? Q.intl.string(Q.t['26C4oq']) : Q.intl.string(Q.t.jsvgc3),
                                      onClick: ej ? eW : eU,
                                      onMouseDown: eG,
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
                  g = (0, k.K)({ user: s }),
                  h = (0, m.e7)(
                      [K.default, z.Z],
                      () => {
                          if (t.isMultiUserDM())
                              if (l)
                                  return q.default.keys(z.Z.getTypingUsers(t.id)).some((e) => {
                                      var t;
                                      return e !== (null == (t = K.default.getCurrentUser()) ? void 0 : t.id);
                                  });
                              else return !1;
                          return null != s && z.Z.isTyping(t.id, t.getRecipientId());
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

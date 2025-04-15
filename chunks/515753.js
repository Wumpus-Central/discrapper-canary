n.d(t, {
    PZ: () => es,
    Qj: () => ec,
    RS: () => ed,
    ZP: () => eu
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
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
    N = n(956221),
    x = n(747017),
    E = n(385499),
    j = n(570908),
    C = n(702321),
    O = n(201895),
    S = n(43267),
    v = n(933557),
    T = n(979264),
    I = n(163889),
    y = n(111028),
    A = n(540059),
    P = n(853856),
    R = n(93687),
    D = n(785232),
    Z = n(598062),
    w = n(850020),
    k = n(379839),
    W = n(359135),
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
    K = n(594174),
    q = n(709054),
    X = n(998502),
    Q = n(981631),
    J = n(388032),
    $ = n(425154);
function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
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
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let er = X.ZP.getEnableHardwareAcceleration() ? g.Xo$ : g.qEK,
    ei = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    es = (e) => {
        let { nameplate: t } = e,
            n = (0, k.A)(t);
        return (0, r.jsx)(
            g.P3F,
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
                    children: (0, r.jsx)('div', {
                        className: a()({ [$.innerCloseButtonPlated]: null != t }),
                        children: (0, r.jsx)(g.Dio, {
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
        (0, r.jsx)(g.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: $.favoriteIcon
        }),
    el = () =>
        (0, r.jsx)(g.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: $.favoriteIcon
        }),
    eo = () =>
        (0, r.jsx)(g.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: $.favoriteIcon
        }),
    ec = (e) => {
        var { route: t, selected: n, icon: i, iconClassName: s, avatarWithTextClassName: l, interactiveClassName: o, text: d, children: m, locationState: p, onClick: h, className: f, role: b, 'aria-posinset': _, 'aria-setsize': N, listItemRef: x } = e,
            E = en(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let C = (0, A.Q3)('PrivateChannelLinkButton');
        return (0, r.jsx)(I.Z, {
            className: a()($.channel, { [$.fullWidth]: u.tq }, f),
            onClick: h,
            role: b,
            focusProps: ee({ within: !0 }, ei),
            'aria-posinset': _,
            'aria-setsize': N,
            ref: x,
            children: (0, r.jsx)(g.vjx, {
                as: 'div',
                selected: n,
                className: a()(o, $.interactive, $.linkButton, { [$.interactiveSelected]: n }),
                children: (0, r.jsxs)(
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
                            E
                        ),
                        {
                            children: [
                                (0, r.jsx)(j.Z, {
                                    selected: n,
                                    muted: !1,
                                    avatar: (0, r.jsx)(i, {
                                        size: C ? 'refresh_sm' : void 0,
                                        className: a()($.linkButtonIcon, s),
                                        color: 'currentColor'
                                    }),
                                    name: d,
                                    innerClassName: a()($.avatarWithText, l)
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
    var t;
    let { channel: s, isGDMFacepileEnabled: l, selected: u = !1, user: b, activities: N, applicationStream: A, voiceChannel: R, isTyping: w, status: k, isMobile: V, nameplate: G, 'aria-posinset': z, 'aria-setsize': K } = e,
        [q, X] = i.useState(!1),
        ec = i.useRef(null),
        ed = i.useRef(null),
        {
            avatarSrc: eu,
            avatarDecorationSrc: em,
            eventHandlers: eg
        } = (0, U.Z)({
            user: b,
            size: g.EFr.SIZE_32,
            animateOnHover: !(u || q)
        }),
        ep = (0, m.e7)([Y.ZP], () => Y.ZP.isChannelMuted(s.getGuildId(), s.id)),
        { ignored: eh, blocked: ef } = (0, m.cj)([H.Z], () => ({
            ignored: H.Z.isIgnored(s.getRecipientId()),
            blocked: H.Z.isBlocked(s.getRecipientId())
        })),
        eb = (0, m.e7)([F.ZP], () => F.ZP.getMentionCount(s.id) > 0),
        e_ = (0, v.ZP)(s),
        eN = (0, m.e7)([P.Z], () => P.Z.isFavorite(s.id)),
        ex = (0, B.L)('PrivateChannel'),
        eE = (0, Z.AK)('PrivateChannel') ? null != G && (u || q) : null != G,
        ej = () => {
            X(!0);
        },
        eC = () => {
            X(!1);
        },
        eO = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), p.Z.closePrivateChannel(s.id, u, t);
        },
        eS = () => {
            p.Z.preload(Q.ME, s.id);
        },
        ev = (e) => {
            e.stopPropagation();
        },
        eT = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ec.current) || t.click();
            }
        },
        eI = (e) => {
            s.isMultiUserDM()
                ? (0, h.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('53912'), n.e('19549')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  et(ee({}, t), {
                                      channel: s,
                                      selected: u
                                  })
                              );
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, h.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('98254'), n.e('56826'), n.e('6589')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              et(ee({}, t), {
                                  user: b,
                                  channel: s,
                                  channelSelected: u
                              })
                          );
                  });
        },
        ey = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = J.NW.formatToPlainString(J.t.hJ5Ap6, { name: e_ }),
                i = J.NW.format(J.t.SSIVOj, { name: e_ });
            s.isManaged() && ((t = J.NW.formatToPlainString(J.t.hVGjER, { name: e_ })), (i = J.NW.format(J.t.IK1Qvr, { name: e_ }))),
                (0, g.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            ee(
                                {
                                    header: t,
                                    body: i,
                                    onSubmit: eO
                                },
                                n
                            )
                        );
                });
        },
        eA = () =>
            s.isSystemDM()
                ? (0, r.jsx)('div', {
                      className: $.subtext,
                      children: (0, C.Z)(s.id) ? J.NW.string(J.t.FL5T09) : J.NW.string(J.t.NnY5lZ)
                  })
                : s.isMultiUserDM()
                  ? (0, r.jsx)('div', {
                        className: $.subtext,
                        children: J.NW.format(J.t.CxSA5O, { members: s.recipients.length + 1 })
                    })
                  : (0, _.Z)({
                          activities: N,
                          status: k,
                          applicationStream: A,
                          voiceChannel: R
                      })
                    ? (0, r.jsx)(x.Z, {
                          user: b,
                          activities: N,
                          voiceChannel: R,
                          applicationStream: A,
                          animate: q,
                          emojiClassName: ep ? $.mutedEmoji : void 0
                      })
                    : null,
        eP = () => {
            let e = g.EFr.SIZE_32;
            if (s.isMultiUserDM())
                if (s.recipients.length >= 2 && l && null == s.icon)
                    return (0, r.jsx)(D.Z, {
                        'aria-hidden': !0,
                        recipients: s.recipients,
                        size: e,
                        isTyping: w,
                        status: k
                    });
                else
                    return (0, r.jsx)(
                        er,
                        et(ee({}, eg), {
                            src: (0, S.x)(s),
                            'aria-hidden': !0,
                            size: e,
                            status: w ? Q.Skl.ONLINE : k,
                            isTyping: w
                        })
                    );
            o()(null != b, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                b.isSystemUser() || (t = (0, f.Z)(N) ? Q.Skl.STREAMING : k),
                (0, r.jsx)(
                    er,
                    et(ee({}, eg), {
                        size: g.EFr.SIZE_32,
                        src: eu,
                        avatarDecoration: em,
                        status: t,
                        isMobile: V,
                        isTyping: w,
                        'aria-label': b.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eR = s.isMultiUserDM(),
        eD = s.isSystemDM(),
        eZ = (0, M.Q)(),
        ew = !eR && !eD && s.type === Q.d4z.DM,
        ek = ew && (null == b ? void 0 : b.primaryGuild) != null,
        eW = ew && eh,
        eL = ew && ef,
        eB = ek
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      e_,
                      (0, r.jsx)(T.ZP, {
                          primaryGuild: null == b ? void 0 : b.primaryGuild,
                          userId: null == b ? void 0 : b.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: $.clanTag
                      })
                  ]
              })
            : e_,
        eM = null != (t = ep || eW || eL) && t,
        eU = i.useRef(null);
    return (0, r.jsx)(d.mh, {
        id: s.id,
        children: (e) => {
            var { role: t } = e,
                n = en(e, ['role']);
            return (0, r.jsxs)(I.Z, {
                className: a()($.channel, $.dm),
                role: t,
                focusProps: et(ee({}, ei), {
                    focusTarget: ec,
                    ringTarget: ed
                }),
                ref: ed,
                onMouseEnter: ej,
                onMouseLeave: eC,
                onMouseDown: eS,
                onContextMenu: eI,
                'aria-setsize': K,
                'aria-posinset': z,
                children: [
                    ex && eb ? (0, r.jsx)('div', { className: a()($.unreadPill, { [$.muted]: eM }) }) : null,
                    (0, r.jsxs)(g.vjx, {
                        className: a()($.interactive, {
                            [$.interactiveSystemDM]: eZ && eD,
                            [$.interactiveSelected]: u
                        }),
                        as: 'div',
                        onClick: eT,
                        muted: eM,
                        selected: u,
                        children: [
                            (0, r.jsx)(L.Z, {
                                nameplate: eE ? G : void 0,
                                selected: u,
                                hovered: q,
                                content: eU,
                                placement: W.i.CHANNEL
                            }),
                            (0, r.jsx)(
                                c.rU,
                                et(
                                    ee(
                                        {
                                            innerRef: ec,
                                            to: Q.Z5c.CHANNEL(Q.ME, s.id),
                                            className: a()($.link, { [$.linkPlated]: eE }),
                                            'aria-label': (0, O.ZP)({
                                                channel: s,
                                                unread: eb
                                            })
                                        },
                                        n
                                    ),
                                    {
                                        children: (0, r.jsx)(j.Z, {
                                            ref: eU,
                                            avatar: eP(),
                                            selected: u,
                                            highlighted: eb && !(ex && eM),
                                            muted: eM,
                                            subText: eA(),
                                            name: (0, r.jsx)(y.Z, {
                                                tooltipClassName: $.overflowTooltip,
                                                children: eB
                                            }),
                                            decorators: s.isSystemDM()
                                                ? (0, r.jsx)(E.Z, {
                                                      className: $.decorator,
                                                      type: E.Z.Types.SYSTEM_DM,
                                                      verified: !0
                                                  })
                                                : null
                                        })
                                    }
                                )
                            ),
                            eN ? (0, r.jsx)(ea, {}) : null,
                            eW ? (0, r.jsx)(el, {}) : null,
                            eL ? (0, r.jsx)(eo, {}) : null,
                            (0, r.jsx)(es, {
                                'aria-label': eR ? J.NW.string(J.t['26C4oq']) : J.NW.string(J.t.jsvgc3),
                                onClick: eR ? ey : eO,
                                onMouseDown: ev,
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
                  i = en(e, ['channel', 'selected']);
              let s = (0, m.e7)([K.default], () => K.default.getUser(t.getRecipientId())),
                  { isStatusIndicatorEnabled: a, isTypingIndicatorEnabled: l, isFacepileEnabled: o } = R.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
                  c = null == s ? void 0 : s.id,
                  d = (0, m.cj)(
                      [G.Z, V.Z],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              if (a) {
                                  let n = G.Z.getState().statuses;
                                  t.recipients.some((e) => n[e] === Q.Skl.ONLINE) && (e = Q.Skl.ONLINE);
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
                  { voiceChannel: g } = (0, N.Z)({
                      userId: c,
                      surface: 'private-channel'
                  }),
                  p = (0, w.K)({
                      location: 'PrivateChannel',
                      user: s,
                      privateChannel: t
                  }),
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
                  ? (0, r.jsx)(
                        ed,
                        ee(
                            {
                                channel: t,
                                selected: n,
                                isTyping: h,
                                status: d.status === Q.Skl.ONLINE ? Q.Skl.ONLINE : void 0,
                                isGDMFacepileEnabled: o
                            },
                            i
                        )
                    )
                  : (0, r.jsx)(
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
                            i,
                            d
                        )
                    );
          }
        : null;

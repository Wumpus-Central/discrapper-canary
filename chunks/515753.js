n.d(t, {
    PZ: () => ei,
    Qj: () => eu,
    RS: () => ec,
    ZP: () => ed
}),
    n(388685);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
    u = n(568611),
    c = n(91192),
    d = n(873546),
    E = n(442837),
    f = n(481060),
    C = n(493683),
    _ = n(239091),
    p = n(420660),
    h = n(468363),
    g = n(326255),
    I = n(956221),
    O = n(747017),
    T = n(385499),
    S = n(570908),
    N = n(702321),
    A = n(201895),
    m = n(43267),
    P = n(933557),
    b = n(979264),
    v = n(163889),
    L = n(111028),
    y = n(540059),
    R = n(853856),
    D = n(93687),
    Z = n(785232),
    j = n(598062),
    U = n(850020),
    x = n(379839),
    w = n(359135),
    M = n(516817),
    G = n(273388),
    k = n(878857),
    H = n(518950),
    V = n(199902),
    F = n(158776),
    B = n(306680),
    W = n(699516),
    K = n(111583),
    z = n(9156),
    Y = n(594174),
    Q = n(709054),
    q = n(998502),
    X = n(981631),
    J = n(388032),
    $ = n(425154);
function ee(e) {
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
function et(e, t) {
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
function en(e, t) {
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
let el = q.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    er = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    ei = (e) => {
        let { nameplate: t } = e,
            n = (0, x.A)(t);
        return (0, l.jsx)(
            f.P3F,
            et(
                ee(
                    {
                        className: o()($.closeButton, { [$.closeButtonPlated]: null != t }),
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
                    children: (0, l.jsx)('div', {
                        className: o()({ [$.innerCloseButtonPlated]: null != t }),
                        children: (0, l.jsx)(f.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: o()($.closeIcon, { [$.closeIconPlated]: null != t })
                        })
                    })
                }
            )
        );
    },
    eo = () =>
        (0, l.jsx)(f.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: $.favoriteIcon
        }),
    ea = () =>
        (0, l.jsx)(f.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: $.favoriteIcon
        }),
    es = () =>
        (0, l.jsx)(f.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: $.favoriteIcon
        }),
    eu = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: i, avatarWithTextClassName: a, interactiveClassName: s, text: c, children: E, locationState: C, onClick: _, className: p, role: h, 'aria-posinset': g, 'aria-setsize': I, listItemRef: O } = e,
            T = en(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let N = (0, y.Q3)('PrivateChannelLinkButton');
        return (0, l.jsx)(v.Z, {
            className: o()($.channel, { [$.fullWidth]: d.tq }, p),
            onClick: _,
            role: h,
            focusProps: ee({ within: !0 }, er),
            'aria-posinset': g,
            'aria-setsize': I,
            ref: O,
            children: (0, l.jsx)(f.vjx, {
                as: 'div',
                selected: n,
                className: o()(s, $.interactive, $.linkButton, { [$.interactiveSelected]: n }),
                children: (0, l.jsxs)(
                    u.rU,
                    et(
                        ee(
                            {
                                to: {
                                    pathname: t,
                                    state: C
                                },
                                className: $.link
                            },
                            T
                        ),
                        {
                            children: [
                                (0, l.jsx)(S.Z, {
                                    selected: n,
                                    muted: !1,
                                    avatar: (0, l.jsx)(r, {
                                        size: N ? 'refresh_sm' : void 0,
                                        className: o()($.linkButtonIcon, i),
                                        color: 'currentColor'
                                    }),
                                    name: c,
                                    innerClassName: o()($.avatarWithText, a)
                                }),
                                E
                            ]
                        }
                    )
                )
            })
        });
    };
function ec(e) {
    var t;
    let { channel: i, isGDMFacepileEnabled: a, selected: d = !1, user: h, activities: I, applicationStream: y, voiceChannel: D, isTyping: U, status: x, isMobile: V, nameplate: F, 'aria-posinset': K, 'aria-setsize': Y } = e,
        [Q, q] = r.useState(!1),
        eu = r.useRef(null),
        ec = r.useRef(null),
        {
            avatarSrc: ed,
            avatarDecorationSrc: eE,
            eventHandlers: ef
        } = (0, H.Z)({
            user: h,
            size: f.EFr.SIZE_32,
            animateOnHover: !(d || Q)
        }),
        eC = (0, E.e7)([z.ZP], () => z.ZP.isChannelMuted(i.getGuildId(), i.id)),
        { ignored: e_, blocked: ep } = (0, E.cj)([W.Z], () => ({
            ignored: W.Z.isIgnored(i.getRecipientId()),
            blocked: W.Z.isBlocked(i.getRecipientId())
        })),
        eh = (0, E.e7)([B.ZP], () => B.ZP.getMentionCount(i.id) > 0),
        eg = (0, P.ZP)(i),
        eI = (0, E.e7)([R.Z], () => R.Z.isFavorite(i.id)),
        eO = (0, G.L)('PrivateChannel'),
        eT = (0, j.AK)('PrivateChannel') ? null != F && (d || Q) : null != F,
        eS = () => {
            q(!0);
        },
        eN = () => {
            q(!1);
        },
        eA = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), C.Z.closePrivateChannel(i.id, d, t);
        },
        em = () => {
            C.Z.preload(X.ME, i.id);
        },
        eP = (e) => {
            e.stopPropagation();
        },
        eb = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = eu.current) || t.click();
            }
        },
        ev = (e) => {
            i.isMultiUserDM()
                ? (0, _.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('53912'), n.e('19549')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, l.jsx)(
                                  e,
                                  et(ee({}, t), {
                                      channel: i,
                                      selected: d
                                  })
                              );
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, _.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('98254'), n.e('56826'), n.e('6589')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              et(ee({}, t), {
                                  user: h,
                                  channel: i,
                                  channelSelected: d
                              })
                          );
                  });
        },
        eL = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = J.NW.formatToPlainString(J.t.hJ5Ap6, { name: eg }),
                r = J.NW.format(J.t.SSIVOj, { name: eg });
            i.isManaged() && ((t = J.NW.formatToPlainString(J.t.hVGjER, { name: eg })), (r = J.NW.format(J.t.IK1Qvr, { name: eg }))),
                (0, f.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, l.jsx)(
                            e,
                            ee(
                                {
                                    header: t,
                                    body: r,
                                    onSubmit: eA
                                },
                                n
                            )
                        );
                });
        },
        ey = () =>
            i.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: $.subtext,
                      children: (0, N.Z)(i.id) ? J.NW.string(J.t.FL5T09) : J.NW.string(J.t.NnY5lZ)
                  })
                : i.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: $.subtext,
                        children: J.NW.format(J.t.CxSA5O, { members: i.recipients.length + 1 })
                    })
                  : (0, g.Z)({
                          activities: I,
                          status: x,
                          applicationStream: y,
                          voiceChannel: D
                      })
                    ? (0, l.jsx)(O.Z, {
                          user: h,
                          activities: I,
                          voiceChannel: D,
                          applicationStream: y,
                          animate: Q,
                          emojiClassName: eC ? $.mutedEmoji : void 0
                      })
                    : null,
        eR = () => {
            let e = f.EFr.SIZE_32;
            if (i.isMultiUserDM())
                if (i.recipients.length >= 2 && a && null == i.icon)
                    return (0, l.jsx)(Z.Z, {
                        'aria-hidden': !0,
                        recipients: i.recipients,
                        size: e,
                        isTyping: U,
                        status: x
                    });
                else
                    return (0, l.jsx)(
                        el,
                        et(ee({}, ef), {
                            src: (0, m.x)(i),
                            'aria-hidden': !0,
                            size: e,
                            status: U ? X.Skl.ONLINE : x,
                            isTyping: U
                        })
                    );
            s()(null != h, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                h.isSystemUser() || (t = (0, p.Z)(I) ? X.Skl.STREAMING : x),
                (0, l.jsx)(
                    el,
                    et(ee({}, ef), {
                        size: f.EFr.SIZE_32,
                        src: ed,
                        avatarDecoration: eE,
                        status: t,
                        isMobile: V,
                        isTyping: U,
                        'aria-label': h.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eD = i.isMultiUserDM(),
        eZ = i.isSystemDM(),
        ej = (0, k.Q)(),
        eU = !eD && !eZ && i.type === X.d4z.DM,
        ex = eU && (null == h ? void 0 : h.primaryGuild) != null,
        ew = eU && e_,
        eM = eU && ep,
        eG = ex
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eg,
                      (0, l.jsx)(b.ZP, {
                          primaryGuild: null == h ? void 0 : h.primaryGuild,
                          userId: null == h ? void 0 : h.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: $.clanTag
                      })
                  ]
              })
            : eg,
        ek = null != (t = eC || ew || eM) && t,
        eH = r.useRef(null);
    return (0, l.jsx)(c.mh, {
        id: i.id,
        children: (e) => {
            var { role: t } = e,
                n = en(e, ['role']);
            return (0, l.jsxs)(v.Z, {
                className: o()($.channel, $.dm),
                role: t,
                focusProps: et(ee({}, er), {
                    focusTarget: eu,
                    ringTarget: ec
                }),
                ref: ec,
                onMouseEnter: eS,
                onMouseLeave: eN,
                onMouseDown: em,
                onContextMenu: ev,
                'aria-setsize': Y,
                'aria-posinset': K,
                children: [
                    eO && eh ? (0, l.jsx)('div', { className: o()($.unreadPill, { [$.muted]: ek }) }) : null,
                    (0, l.jsxs)(f.vjx, {
                        className: o()($.interactive, {
                            [$.interactiveSystemDM]: ej && eZ,
                            [$.interactiveSelected]: d,
                            [$.platedWrapper]: eT
                        }),
                        as: 'div',
                        onClick: eb,
                        muted: ek,
                        selected: d,
                        children: [
                            (0, l.jsx)(M.Z, {
                                nameplate: eT ? F : void 0,
                                selected: d,
                                hovered: Q,
                                content: eH,
                                placement: w.i.CHANNEL
                            }),
                            (0, l.jsx)(
                                u.rU,
                                et(
                                    ee(
                                        {
                                            innerRef: eu,
                                            to: X.Z5c.CHANNEL(X.ME, i.id),
                                            className: o()($.link, { [$.linkPlated]: eT }),
                                            'aria-label': (0, A.ZP)({
                                                channel: i,
                                                unread: eh
                                            })
                                        },
                                        n
                                    ),
                                    {
                                        children: (0, l.jsx)(S.Z, {
                                            ref: eH,
                                            avatar: eR(),
                                            selected: d,
                                            highlighted: eh && !(eO && ek),
                                            muted: ek,
                                            subText: ey(),
                                            name: (0, l.jsx)(L.Z, {
                                                tooltipClassName: $.overflowTooltip,
                                                children: eG
                                            }),
                                            decorators: i.isSystemDM()
                                                ? (0, l.jsx)(T.Z, {
                                                      className: $.decorator,
                                                      type: T.Z.Types.SYSTEM_DM,
                                                      verified: !0
                                                  })
                                                : null
                                        })
                                    }
                                )
                            ),
                            eI ? (0, l.jsx)(eo, {}) : null,
                            ew ? (0, l.jsx)(ea, {}) : null,
                            eM ? (0, l.jsx)(es, {}) : null,
                            (0, l.jsx)(ei, {
                                'aria-label': eD ? J.NW.string(J.t['26C4oq']) : J.NW.string(J.t.jsvgc3),
                                onClick: eD ? eL : eA,
                                onMouseDown: eP,
                                nameplate: F
                            })
                        ]
                    })
                ]
            });
        }
    });
}
let ed = (e) => {
    var { channel: t, selected: n } = e,
        r = en(e, ['channel', 'selected']);
    let i = (0, E.e7)([Y.default], () => Y.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: a, isFacepileEnabled: s } = D.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        u = null == i ? void 0 : i.id,
        c = (0, E.cj)(
            [F.Z, V.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
                        let n = F.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === X.Skl.ONLINE) && (e = X.Skl.ONLINE);
                    }
                } else null != u && (e = F.Z.getStatus(u));
                return {
                    status: e,
                    activities: null != u ? F.Z.getActivities(u) : null,
                    applicationStream: null != u ? V.Z.getAnyStreamForUser(u) : null,
                    isMobile: null != u && F.Z.isMobileOnline(u)
                };
            },
            [t, u, o]
        ),
        { voiceActivityStatusEnabled: d } = (0, h.U)({ location: 'PrivateChannel' }),
        { voiceChannel: f } = (0, I.Z)({
            userId: u,
            surface: 'private-channel'
        }),
        C = (0, U.K)({
            location: 'PrivateChannel',
            user: i,
            privateChannel: t
        }),
        _ = (0, E.e7)(
            [Y.default, K.Z],
            () => {
                if (t.isMultiUserDM())
                    if (a)
                        return Q.default.keys(K.Z.getTypingUsers(t.id)).some((e) => {
                            var t;
                            return e !== (null == (t = Y.default.getCurrentUser()) ? void 0 : t.id);
                        });
                    else return !1;
                return null != i && K.Z.isTyping(t.id, t.getRecipientId());
            },
            [t, i, a]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(
              ec,
              ee(
                  {
                      channel: t,
                      selected: n,
                      isTyping: _,
                      status: c.status === X.Skl.ONLINE ? X.Skl.ONLINE : void 0,
                      isGDMFacepileEnabled: s
                  },
                  r
              )
          )
        : (0, l.jsx)(
              ec,
              ee(
                  {
                      channel: t,
                      selected: n,
                      user: i,
                      voiceChannel: d ? f : void 0,
                      isTyping: _,
                      nameplate: C
                  },
                  r,
                  c
              )
          );
};

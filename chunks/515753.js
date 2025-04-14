n.d(t, {
    PZ: () => er,
    Qj: () => es,
    RS: () => eu,
    ZP: () => ec
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
    j = n(850020),
    U = n(379839),
    x = n(359135),
    w = n(516817),
    M = n(273388),
    G = n(878857),
    k = n(518950),
    H = n(199902),
    V = n(158776),
    F = n(306680),
    B = n(699516),
    W = n(111583),
    K = n(9156),
    z = n(594174),
    Y = n(709054),
    Q = n(998502),
    q = n(981631),
    X = n(388032),
    J = n(425154);
function $(e) {
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
function ee(e, t) {
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
function et(e, t) {
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
let en = Q.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    el = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    er = (e) => {
        let { nameplate: t } = e,
            n = (0, U.A)(t);
        return (0, l.jsx)(
            f.P3F,
            ee(
                $(
                    {
                        className: o()(J.closeButton, { [J.closeButtonPlated]: null != t }),
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
                        className: o()({ [J.innerCloseButtonPlated]: null != t }),
                        children: (0, l.jsx)(f.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: o()(J.closeIcon, { [J.closeIconPlated]: null != t })
                        })
                    })
                }
            )
        );
    },
    ei = () =>
        (0, l.jsx)(f.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        }),
    eo = () =>
        (0, l.jsx)(f.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        }),
    ea = () =>
        (0, l.jsx)(f.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: J.favoriteIcon
        }),
    es = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: i, avatarWithTextClassName: a, interactiveClassName: s, text: c, children: E, locationState: C, onClick: _, className: p, role: h, 'aria-posinset': g, 'aria-setsize': I, listItemRef: O } = e,
            T = et(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let N = (0, y.Q3)('PrivateChannelLinkButton');
        return (0, l.jsx)(v.Z, {
            className: o()(J.channel, { [J.fullWidth]: d.tq }, p),
            onClick: _,
            role: h,
            focusProps: $({ within: !0 }, el),
            'aria-posinset': g,
            'aria-setsize': I,
            ref: O,
            children: (0, l.jsx)(f.vjx, {
                as: 'div',
                selected: n,
                className: o()(s, J.interactive, J.linkButton, { [J.interactiveSelected]: n }),
                children: (0, l.jsxs)(
                    u.rU,
                    ee(
                        $(
                            {
                                to: {
                                    pathname: t,
                                    state: C
                                },
                                className: J.link
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
                                        className: o()(J.linkButtonIcon, i),
                                        color: 'currentColor'
                                    }),
                                    name: c,
                                    innerClassName: o()(J.avatarWithText, a)
                                }),
                                E
                            ]
                        }
                    )
                )
            })
        });
    };
function eu(e) {
    var t;
    let { channel: i, isGDMFacepileEnabled: a, selected: d = !1, user: h, activities: I, applicationStream: y, voiceChannel: D, isTyping: j, status: U, isMobile: H, nameplate: V, 'aria-posinset': W, 'aria-setsize': z } = e,
        [Y, Q] = r.useState(!1),
        es = r.useRef(null),
        eu = r.useRef(null),
        {
            avatarSrc: ec,
            avatarDecorationSrc: ed,
            eventHandlers: eE
        } = (0, k.Z)({
            user: h,
            size: f.EFr.SIZE_32,
            animateOnHover: !(d || Y)
        }),
        ef = (0, E.e7)([K.ZP], () => K.ZP.isChannelMuted(i.getGuildId(), i.id)),
        { ignored: eC, blocked: e_ } = (0, E.cj)([B.Z], () => ({
            ignored: B.Z.isIgnored(i.getRecipientId()),
            blocked: B.Z.isBlocked(i.getRecipientId())
        })),
        ep = (0, E.e7)([F.ZP], () => F.ZP.getMentionCount(i.id) > 0),
        eh = (0, P.ZP)(i),
        eg = (0, E.e7)([R.Z], () => R.Z.isFavorite(i.id)),
        eI = (0, M.L)('PrivateChannel'),
        eO = () => {
            Q(!0);
        },
        eT = () => {
            Q(!1);
        },
        eS = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), C.Z.closePrivateChannel(i.id, d, t);
        },
        eN = () => {
            C.Z.preload(q.ME, i.id);
        },
        eA = (e) => {
            e.stopPropagation();
        },
        em = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = es.current) || t.click();
            }
        },
        eP = (e) => {
            i.isMultiUserDM()
                ? (0, _.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('53912'), n.e('19549')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, l.jsx)(
                                  e,
                                  ee($({}, t), {
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
                              ee($({}, t), {
                                  user: h,
                                  channel: i,
                                  channelSelected: d
                              })
                          );
                  });
        },
        eb = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = X.NW.formatToPlainString(X.t.hJ5Ap6, { name: eh }),
                r = X.NW.format(X.t.SSIVOj, { name: eh });
            i.isManaged() && ((t = X.NW.formatToPlainString(X.t.hVGjER, { name: eh })), (r = X.NW.format(X.t.IK1Qvr, { name: eh }))),
                (0, f.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, l.jsx)(
                            e,
                            $(
                                {
                                    header: t,
                                    body: r,
                                    onSubmit: eS
                                },
                                n
                            )
                        );
                });
        },
        ev = () =>
            i.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: J.subtext,
                      children: (0, N.Z)(i.id) ? X.NW.string(X.t.FL5T09) : X.NW.string(X.t.NnY5lZ)
                  })
                : i.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: J.subtext,
                        children: X.NW.format(X.t.CxSA5O, { members: i.recipients.length + 1 })
                    })
                  : (0, g.Z)({
                          activities: I,
                          status: U,
                          applicationStream: y,
                          voiceChannel: D
                      })
                    ? (0, l.jsx)(O.Z, {
                          user: h,
                          activities: I,
                          voiceChannel: D,
                          applicationStream: y,
                          animate: Y,
                          emojiClassName: ef ? J.mutedEmoji : void 0
                      })
                    : null,
        eL = () => {
            let e = f.EFr.SIZE_32;
            if (i.isMultiUserDM())
                if (i.recipients.length >= 2 && a && null == i.icon)
                    return (0, l.jsx)(Z.Z, {
                        'aria-hidden': !0,
                        recipients: i.recipients,
                        size: e,
                        isTyping: j,
                        status: U
                    });
                else
                    return (0, l.jsx)(
                        en,
                        ee($({}, eE), {
                            src: (0, m.x)(i),
                            'aria-hidden': !0,
                            size: e,
                            status: j ? q.Skl.ONLINE : U,
                            isTyping: j
                        })
                    );
            s()(null != h, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                h.isSystemUser() || (t = (0, p.Z)(I) ? q.Skl.STREAMING : U),
                (0, l.jsx)(
                    en,
                    ee($({}, eE), {
                        size: f.EFr.SIZE_32,
                        src: ec,
                        avatarDecoration: ed,
                        status: t,
                        isMobile: H,
                        isTyping: j,
                        'aria-label': h.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        ey = i.isMultiUserDM(),
        eR = i.isSystemDM(),
        eD = (0, G.Q)(),
        eZ = !ey && !eR && i.type === q.d4z.DM,
        ej = eZ && (null == h ? void 0 : h.primaryGuild) != null,
        eU = eZ && eC,
        ex = eZ && e_,
        ew = ej
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eh,
                      (0, l.jsx)(b.ZP, {
                          primaryGuild: null == h ? void 0 : h.primaryGuild,
                          userId: null == h ? void 0 : h.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: J.clanTag
                      })
                  ]
              })
            : eh,
        eM = null != (t = ef || eU || ex) && t,
        eG = r.useRef(null);
    return (0, l.jsx)(c.mh, {
        id: i.id,
        children: (e) => {
            var { role: t } = e,
                n = et(e, ['role']);
            return (0, l.jsxs)(v.Z, {
                className: o()(J.channel, J.dm),
                role: t,
                focusProps: ee($({}, el), {
                    focusTarget: es,
                    ringTarget: eu
                }),
                ref: eu,
                onMouseEnter: eO,
                onMouseLeave: eT,
                onMouseDown: eN,
                onContextMenu: eP,
                'aria-setsize': z,
                'aria-posinset': W,
                children: [
                    eI && ep ? (0, l.jsx)('div', { className: o()(J.unreadPill, { [J.muted]: eM }) }) : null,
                    (0, l.jsxs)(f.vjx, {
                        className: o()(J.interactive, {
                            [J.interactiveSystemDM]: eD && eR,
                            [J.interactiveSelected]: d,
                            [J.platedWrapper]: null != V
                        }),
                        as: 'div',
                        onClick: em,
                        muted: eM,
                        selected: d,
                        children: [
                            (0, l.jsx)(w.Z, {
                                nameplate: V,
                                selected: d,
                                hovered: Y,
                                content: eG,
                                placement: x.i.CHANNEL
                            }),
                            (0, l.jsx)(
                                u.rU,
                                ee(
                                    $(
                                        {
                                            innerRef: es,
                                            to: q.Z5c.CHANNEL(q.ME, i.id),
                                            className: o()(J.link, { [J.linkPlated]: null != V }),
                                            'aria-label': (0, A.ZP)({
                                                channel: i,
                                                unread: ep
                                            })
                                        },
                                        n
                                    ),
                                    {
                                        children: (0, l.jsx)(S.Z, {
                                            ref: eG,
                                            avatar: eL(),
                                            selected: d,
                                            highlighted: ep && !(eI && eM),
                                            muted: eM,
                                            subText: ev(),
                                            name: (0, l.jsx)(L.Z, {
                                                tooltipClassName: J.overflowTooltip,
                                                children: ew
                                            }),
                                            decorators: i.isSystemDM()
                                                ? (0, l.jsx)(T.Z, {
                                                      className: J.decorator,
                                                      type: T.Z.Types.SYSTEM_DM,
                                                      verified: !0
                                                  })
                                                : null
                                        })
                                    }
                                )
                            ),
                            eg ? (0, l.jsx)(ei, {}) : null,
                            eU ? (0, l.jsx)(eo, {}) : null,
                            ex ? (0, l.jsx)(ea, {}) : null,
                            (0, l.jsx)(er, {
                                'aria-label': ey ? X.NW.string(X.t['26C4oq']) : X.NW.string(X.t.jsvgc3),
                                onClick: ey ? eb : eS,
                                onMouseDown: eA,
                                nameplate: V
                            })
                        ]
                    })
                ]
            });
        }
    });
}
let ec = (e) => {
    var { channel: t, selected: n } = e,
        r = et(e, ['channel', 'selected']);
    let i = (0, E.e7)([z.default], () => z.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: a, isFacepileEnabled: s } = D.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        u = null == i ? void 0 : i.id,
        c = (0, E.cj)(
            [V.Z, H.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
                        let n = V.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === q.Skl.ONLINE) && (e = q.Skl.ONLINE);
                    }
                } else null != u && (e = V.Z.getStatus(u));
                return {
                    status: e,
                    activities: null != u ? V.Z.getActivities(u) : null,
                    applicationStream: null != u ? H.Z.getAnyStreamForUser(u) : null,
                    isMobile: null != u && V.Z.isMobileOnline(u)
                };
            },
            [t, u, o]
        ),
        { voiceActivityStatusEnabled: d } = (0, h.U)({ location: 'PrivateChannel' }),
        { voiceChannel: f } = (0, I.Z)({
            userId: u,
            surface: 'private-channel'
        }),
        C = (0, j.K)({
            location: 'PrivateChannel',
            user: i,
            privateChannel: t
        }),
        _ = (0, E.e7)(
            [z.default, W.Z],
            () => {
                if (t.isMultiUserDM())
                    if (a)
                        return Y.default.keys(W.Z.getTypingUsers(t.id)).some((e) => {
                            var t;
                            return e !== (null == (t = z.default.getCurrentUser()) ? void 0 : t.id);
                        });
                    else return !1;
                return null != i && W.Z.isTyping(t.id, t.getRecipientId());
            },
            [t, i, a]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(
              eu,
              $(
                  {
                      channel: t,
                      selected: n,
                      isTyping: _,
                      status: c.status === q.Skl.ONLINE ? q.Skl.ONLINE : void 0,
                      isGDMFacepileEnabled: s
                  },
                  r
              )
          )
        : (0, l.jsx)(
              eu,
              $(
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

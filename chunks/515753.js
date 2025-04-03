n.d(t, {
    PZ: () => er,
    Qj: () => ea,
    RS: () => es,
    ZP: () => ec
}),
    n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
    c = n(568611),
    u = n(91192),
    d = n(873546),
    E = n(442837),
    f = n(481060),
    p = n(493683),
    h = n(239091),
    C = n(420660),
    _ = n(468363),
    O = n(326255),
    g = n(956221),
    S = n(747017),
    I = n(385499),
    T = n(570908),
    b = n(702321),
    N = n(201895),
    m = n(43267),
    A = n(933557),
    v = n(979264),
    P = n(163889),
    y = n(111028),
    L = n(540059),
    R = n(853856),
    Z = n(93687),
    j = n(785232),
    D = n(850020),
    U = n(379839),
    x = n(359135),
    w = n(516817),
    M = n(878857),
    G = n(518950),
    k = n(199902),
    H = n(158776),
    V = n(306680),
    F = n(699516),
    B = n(111583),
    W = n(9156),
    K = n(594174),
    z = n(709054),
    Y = n(998502),
    Q = n(981631),
    q = n(388032),
    X = n(425154);
function J(e) {
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
function $(e, t) {
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
function ee(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let et = Y.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    en = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    er = (e) => {
        let { nameplate: t } = e,
            n = (0, U.A)(t);
        return (0, r.jsx)(
            f.P3F,
            $(
                J(
                    {
                        className: o()(X.closeButton, { [X.closeButtonPlated]: null != t }),
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
                        className: o()({ [X.innerCloseButtonPlated]: null != t }),
                        children: (0, r.jsx)(f.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: o()(X.closeIcon, { [X.closeIconPlated]: null != t })
                        })
                    })
                }
            )
        );
    },
    el = () =>
        (0, r.jsx)(f.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    ei = () =>
        (0, r.jsx)(f.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    eo = () =>
        (0, r.jsx)(f.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    ea = (e) => {
        var { route: t, selected: n, icon: l, iconClassName: i, avatarWithTextClassName: a, interactiveClassName: s, text: u, children: E, locationState: p, onClick: h, className: C, role: _, 'aria-posinset': O, 'aria-setsize': g, listItemRef: S } = e,
            I = ee(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let b = (0, L.Q3)('PrivateChannelLinkButton');
        return (0, r.jsx)(P.Z, {
            className: o()(X.channel, { [X.fullWidth]: d.tq }, C),
            onClick: h,
            role: _,
            focusProps: J({ within: !0 }, en),
            'aria-posinset': O,
            'aria-setsize': g,
            ref: S,
            children: (0, r.jsx)(f.vjx, {
                as: 'div',
                selected: n,
                className: o()(s, X.interactive, X.linkButton, { [X.interactiveSelected]: n }),
                children: (0, r.jsxs)(
                    c.rU,
                    $(
                        J(
                            {
                                to: {
                                    pathname: t,
                                    state: p
                                },
                                className: X.link
                            },
                            I
                        ),
                        {
                            children: [
                                (0, r.jsx)(T.Z, {
                                    selected: n,
                                    muted: !1,
                                    avatar: (0, r.jsx)(l, {
                                        size: b ? 'refresh_sm' : void 0,
                                        className: o()(X.linkButtonIcon, i),
                                        color: 'currentColor'
                                    }),
                                    name: u,
                                    innerClassName: o()(X.avatarWithText, a)
                                }),
                                E
                            ]
                        }
                    )
                )
            })
        });
    };
function es(e) {
    var t;
    let { channel: i, isGDMFacepileEnabled: a, selected: d = !1, user: _, activities: g, applicationStream: L, voiceChannel: Z, isTyping: D, status: U, isMobile: k, nameplate: H, 'aria-posinset': B, 'aria-setsize': K } = e,
        [z, Y] = l.useState(!1),
        ea = l.useRef(null),
        es = l.useRef(null),
        {
            avatarSrc: ec,
            avatarDecorationSrc: eu,
            eventHandlers: ed
        } = (0, G.Z)({
            user: _,
            size: f.EFr.SIZE_32,
            animateOnHover: !(d || z)
        }),
        eE = (0, E.e7)([W.ZP], () => W.ZP.isChannelMuted(i.getGuildId(), i.id)),
        { ignored: ef, blocked: ep } = (0, E.cj)([F.Z], () => ({
            ignored: F.Z.isIgnored(i.getRecipientId()),
            blocked: F.Z.isBlocked(i.getRecipientId())
        })),
        eh = (0, E.e7)([V.ZP], () => V.ZP.getMentionCount(i.id) > 0),
        eC = (0, A.ZP)(i),
        e_ = (0, E.e7)([R.Z], () => R.Z.isFavorite(i.id)),
        eO = () => {
            Y(!0);
        },
        eg = () => {
            Y(!1);
        },
        eS = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), p.Z.closePrivateChannel(i.id, d, t);
        },
        eI = () => {
            p.Z.preload(Q.ME, i.id);
        },
        eT = (e) => {
            e.stopPropagation();
        },
        eb = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ea.current) || t.click();
            }
        },
        eN = (e) => {
            i.isMultiUserDM()
                ? (0, h.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('53912'), n.e('19549')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  $(J({}, t), {
                                      channel: i,
                                      selected: d
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
                              $(J({}, t), {
                                  user: _,
                                  channel: i,
                                  channelSelected: d
                              })
                          );
                  });
        },
        em = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = q.NW.formatToPlainString(q.t.hJ5Ap6, { name: eC }),
                l = q.NW.format(q.t.SSIVOj, { name: eC });
            i.isManaged() && ((t = q.NW.formatToPlainString(q.t.hVGjER, { name: eC })), (l = q.NW.format(q.t.IK1Qvr, { name: eC }))),
                (0, f.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            J(
                                {
                                    header: t,
                                    body: l,
                                    onSubmit: eS
                                },
                                n
                            )
                        );
                });
        },
        eA = () =>
            i.isSystemDM()
                ? (0, r.jsx)('div', {
                      className: X.subtext,
                      children: (0, b.Z)(i.id) ? q.NW.string(q.t.FL5T09) : q.NW.string(q.t.NnY5lZ)
                  })
                : i.isMultiUserDM()
                  ? (0, r.jsx)('div', {
                        className: X.subtext,
                        children: q.NW.format(q.t.CxSA5O, { members: i.recipients.length + 1 })
                    })
                  : (0, O.Z)({
                          activities: g,
                          status: U,
                          applicationStream: L,
                          voiceChannel: Z
                      })
                    ? (0, r.jsx)(S.Z, {
                          user: _,
                          activities: g,
                          voiceChannel: Z,
                          applicationStream: L,
                          animate: z,
                          emojiClassName: eE ? X.mutedEmoji : void 0
                      })
                    : null,
        ev = () => {
            let e = f.EFr.SIZE_32;
            if (i.isMultiUserDM())
                if (i.recipients.length >= 2 && a && null == i.icon)
                    return (0, r.jsx)(j.Z, {
                        'aria-hidden': !0,
                        recipients: i.recipients,
                        size: e,
                        isTyping: D,
                        status: U
                    });
                else
                    return (0, r.jsx)(
                        et,
                        $(J({}, ed), {
                            src: (0, m.x)(i),
                            'aria-hidden': !0,
                            size: e,
                            status: D ? Q.Skl.ONLINE : U,
                            isTyping: D
                        })
                    );
            s()(null != _, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                _.isSystemUser() || (t = (0, C.Z)(g) ? Q.Skl.STREAMING : U),
                (0, r.jsx)(
                    et,
                    $(J({}, ed), {
                        size: f.EFr.SIZE_32,
                        src: ec,
                        avatarDecoration: eu,
                        status: t,
                        isMobile: k,
                        isTyping: D,
                        'aria-label': _.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eP = i.isMultiUserDM(),
        ey = i.isSystemDM(),
        eL = (0, M.Q)(),
        eR = !eP && !ey && i.type === Q.d4z.DM,
        eZ = eR && (null == _ ? void 0 : _.primaryGuild) != null,
        ej = eR && ef,
        eD = eR && ep,
        eU = eZ
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      eC,
                      (0, r.jsx)(v.ZP, {
                          primaryGuild: null == _ ? void 0 : _.primaryGuild,
                          userId: null == _ ? void 0 : _.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: X.clanTag
                      })
                  ]
              })
            : eC,
        ex = null != (t = eE || ej || eD) && t,
        ew = l.useRef(null);
    return (0, r.jsx)(u.mh, {
        id: i.id,
        children: (e) => {
            var { role: t } = e,
                n = ee(e, ['role']);
            return (0, r.jsx)(P.Z, {
                className: o()(X.channel, X.dm),
                role: t,
                focusProps: $(J({}, en), {
                    focusTarget: ea,
                    ringTarget: es
                }),
                ref: es,
                onMouseEnter: eO,
                onMouseLeave: eg,
                onMouseDown: eI,
                onContextMenu: eN,
                'aria-setsize': K,
                'aria-posinset': B,
                children: (0, r.jsxs)(f.vjx, {
                    className: o()(X.interactive, {
                        [X.interactiveSystemDM]: eL && ey,
                        [X.interactiveSelected]: d,
                        [X.platedWrapper]: null != H
                    }),
                    as: 'div',
                    onClick: eb,
                    muted: ex,
                    selected: d,
                    children: [
                        (0, r.jsx)(w.Z, {
                            nameplate: H,
                            selected: d,
                            hovered: z,
                            content: ew,
                            placement: x.i.CHANNEL
                        }),
                        (0, r.jsx)(
                            c.rU,
                            $(
                                J(
                                    {
                                        innerRef: ea,
                                        to: Q.Z5c.CHANNEL(Q.ME, i.id),
                                        className: o()(X.link, { [X.linkPlated]: null != H }),
                                        'aria-label': (0, N.ZP)({
                                            channel: i,
                                            unread: eh
                                        })
                                    },
                                    n
                                ),
                                {
                                    children: (0, r.jsx)(T.Z, {
                                        ref: ew,
                                        avatar: ev(),
                                        selected: d,
                                        highlighted: eh,
                                        muted: ex,
                                        subText: eA(),
                                        name: (0, r.jsx)(y.Z, {
                                            tooltipClassName: X.overflowTooltip,
                                            children: eU
                                        }),
                                        decorators: i.isSystemDM()
                                            ? (0, r.jsx)(I.Z, {
                                                  className: X.decorator,
                                                  type: I.Z.Types.SYSTEM_DM,
                                                  verified: !0
                                              })
                                            : null
                                    })
                                }
                            )
                        ),
                        e_ ? (0, r.jsx)(el, {}) : null,
                        ej ? (0, r.jsx)(ei, {}) : null,
                        eD ? (0, r.jsx)(eo, {}) : null,
                        (0, r.jsx)(er, {
                            'aria-label': eP ? q.NW.string(q.t['26C4oq']) : q.NW.string(q.t.jsvgc3),
                            onClick: eP ? em : eS,
                            onMouseDown: eT,
                            nameplate: H
                        })
                    ]
                })
            });
        }
    });
}
let ec = (e) => {
    var { channel: t, selected: n } = e,
        l = ee(e, ['channel', 'selected']);
    let i = (0, E.e7)([K.default], () => K.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: a, isFacepileEnabled: s } = Z.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == i ? void 0 : i.id,
        u = (0, E.cj)(
            [H.Z, k.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
                        let n = H.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === Q.Skl.ONLINE) && (e = Q.Skl.ONLINE);
                    }
                } else null != c && (e = H.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? H.Z.getActivities(c) : null,
                    applicationStream: null != c ? k.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && H.Z.isMobileOnline(c)
                };
            },
            [t, c, o]
        ),
        { voiceActivityStatusEnabled: d } = (0, _.U)({ location: 'PrivateChannel' }),
        { voiceChannel: f } = (0, g.Z)({
            userId: c,
            surface: 'private-channel'
        }),
        p = (0, D.K)({
            location: 'PrivateChannel',
            user: i,
            privateChannel: t
        }),
        h = (0, E.e7)(
            [K.default, B.Z],
            () => {
                if (t.isMultiUserDM())
                    if (a)
                        return z.default.keys(B.Z.getTypingUsers(t.id)).some((e) => {
                            var t;
                            return e !== (null == (t = K.default.getCurrentUser()) ? void 0 : t.id);
                        });
                    else return !1;
                return null != i && B.Z.isTyping(t.id, t.getRecipientId());
            },
            [t, i, a]
        );
    return t.isMultiUserDM()
        ? (0, r.jsx)(
              es,
              J(
                  {
                      channel: t,
                      selected: n,
                      isTyping: h,
                      status: u.status === Q.Skl.ONLINE ? Q.Skl.ONLINE : void 0,
                      isGDMFacepileEnabled: s
                  },
                  l
              )
          )
        : (0, r.jsx)(
              es,
              J(
                  {
                      channel: t,
                      selected: n,
                      user: i,
                      voiceChannel: d ? f : void 0,
                      isTyping: h,
                      nameplate: p
                  },
                  l,
                  u
              )
          );
};

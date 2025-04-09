n.d(t, {
    PZ: () => el,
    Qj: () => ea,
    RS: () => es,
    ZP: () => eu
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
    p = n(239091),
    _ = n(420660),
    h = n(468363),
    g = n(326255),
    S = n(956221),
    O = n(747017),
    I = n(385499),
    T = n(570908),
    N = n(702321),
    m = n(201895),
    A = n(43267),
    b = n(933557),
    P = n(979264),
    v = n(163889),
    y = n(111028),
    L = n(540059),
    R = n(853856),
    D = n(93687),
    Z = n(785232),
    j = n(850020),
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
function $(e, t) {
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
function ee(e, t) {
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
let et = Y.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    en = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    el = (e) => {
        let { nameplate: t } = e,
            n = (0, U.A)(t);
        return (0, l.jsx)(
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
                    children: (0, l.jsx)('div', {
                        className: o()({ [X.innerCloseButtonPlated]: null != t }),
                        children: (0, l.jsx)(f.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: o()(X.closeIcon, { [X.closeIconPlated]: null != t })
                        })
                    })
                }
            )
        );
    },
    er = () =>
        (0, l.jsx)(f.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    ei = () =>
        (0, l.jsx)(f.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    eo = () =>
        (0, l.jsx)(f.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    ea = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: i, avatarWithTextClassName: a, interactiveClassName: s, text: c, children: E, locationState: C, onClick: p, className: _, role: h, 'aria-posinset': g, 'aria-setsize': S, listItemRef: O } = e,
            I = ee(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let N = (0, L.Q3)('PrivateChannelLinkButton');
        return (0, l.jsx)(v.Z, {
            className: o()(X.channel, { [X.fullWidth]: d.tq }, _),
            onClick: p,
            role: h,
            focusProps: J({ within: !0 }, en),
            'aria-posinset': g,
            'aria-setsize': S,
            ref: O,
            children: (0, l.jsx)(f.vjx, {
                as: 'div',
                selected: n,
                className: o()(s, X.interactive, X.linkButton, { [X.interactiveSelected]: n }),
                children: (0, l.jsxs)(
                    u.rU,
                    $(
                        J(
                            {
                                to: {
                                    pathname: t,
                                    state: C
                                },
                                className: X.link
                            },
                            I
                        ),
                        {
                            children: [
                                (0, l.jsx)(T.Z, {
                                    selected: n,
                                    muted: !1,
                                    avatar: (0, l.jsx)(r, {
                                        size: N ? 'refresh_sm' : void 0,
                                        className: o()(X.linkButtonIcon, i),
                                        color: 'currentColor'
                                    }),
                                    name: c,
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
    let { channel: i, isGDMFacepileEnabled: a, selected: d = !1, user: h, activities: S, applicationStream: L, voiceChannel: D, isTyping: j, status: U, isMobile: k, nameplate: H, 'aria-posinset': B, 'aria-setsize': K } = e,
        [z, Y] = r.useState(!1),
        ea = r.useRef(null),
        es = r.useRef(null),
        {
            avatarSrc: eu,
            avatarDecorationSrc: ec,
            eventHandlers: ed
        } = (0, G.Z)({
            user: h,
            size: f.EFr.SIZE_32,
            animateOnHover: !(d || z)
        }),
        eE = (0, E.e7)([W.ZP], () => W.ZP.isChannelMuted(i.getGuildId(), i.id)),
        { ignored: ef, blocked: eC } = (0, E.cj)([F.Z], () => ({
            ignored: F.Z.isIgnored(i.getRecipientId()),
            blocked: F.Z.isBlocked(i.getRecipientId())
        })),
        ep = (0, E.e7)([V.ZP], () => V.ZP.getMentionCount(i.id) > 0),
        e_ = (0, b.ZP)(i),
        eh = (0, E.e7)([R.Z], () => R.Z.isFavorite(i.id)),
        eg = () => {
            Y(!0);
        },
        eS = () => {
            Y(!1);
        },
        eO = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), C.Z.closePrivateChannel(i.id, d, t);
        },
        eI = () => {
            C.Z.preload(Q.ME, i.id);
        },
        eT = (e) => {
            e.stopPropagation();
        },
        eN = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ea.current) || t.click();
            }
        },
        em = (e) => {
            i.isMultiUserDM()
                ? (0, p.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('53912'), n.e('19549')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, l.jsx)(
                                  e,
                                  $(J({}, t), {
                                      channel: i,
                                      selected: d
                                  })
                              );
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, p.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('98254'), n.e('56826'), n.e('6589')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              $(J({}, t), {
                                  user: h,
                                  channel: i,
                                  channelSelected: d
                              })
                          );
                  });
        },
        eA = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = q.NW.formatToPlainString(q.t.hJ5Ap6, { name: e_ }),
                r = q.NW.format(q.t.SSIVOj, { name: e_ });
            i.isManaged() && ((t = q.NW.formatToPlainString(q.t.hVGjER, { name: e_ })), (r = q.NW.format(q.t.IK1Qvr, { name: e_ }))),
                (0, f.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, l.jsx)(
                            e,
                            J(
                                {
                                    header: t,
                                    body: r,
                                    onSubmit: eO
                                },
                                n
                            )
                        );
                });
        },
        eb = () =>
            i.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: X.subtext,
                      children: (0, N.Z)(i.id) ? q.NW.string(q.t.FL5T09) : q.NW.string(q.t.NnY5lZ)
                  })
                : i.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: X.subtext,
                        children: q.NW.format(q.t.CxSA5O, { members: i.recipients.length + 1 })
                    })
                  : (0, g.Z)({
                          activities: S,
                          status: U,
                          applicationStream: L,
                          voiceChannel: D
                      })
                    ? (0, l.jsx)(O.Z, {
                          user: h,
                          activities: S,
                          voiceChannel: D,
                          applicationStream: L,
                          animate: z,
                          emojiClassName: eE ? X.mutedEmoji : void 0
                      })
                    : null,
        eP = () => {
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
                        et,
                        $(J({}, ed), {
                            src: (0, A.x)(i),
                            'aria-hidden': !0,
                            size: e,
                            status: j ? Q.Skl.ONLINE : U,
                            isTyping: j
                        })
                    );
            s()(null != h, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                h.isSystemUser() || (t = (0, _.Z)(S) ? Q.Skl.STREAMING : U),
                (0, l.jsx)(
                    et,
                    $(J({}, ed), {
                        size: f.EFr.SIZE_32,
                        src: eu,
                        avatarDecoration: ec,
                        status: t,
                        isMobile: k,
                        isTyping: j,
                        'aria-label': h.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        ev = i.isMultiUserDM(),
        ey = i.isSystemDM(),
        eL = (0, M.Q)(),
        eR = !ev && !ey && i.type === Q.d4z.DM,
        eD = eR && (null == h ? void 0 : h.primaryGuild) != null,
        eZ = eR && ef,
        ej = eR && eC,
        eU = eD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e_,
                      (0, l.jsx)(P.ZP, {
                          primaryGuild: null == h ? void 0 : h.primaryGuild,
                          userId: null == h ? void 0 : h.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: X.clanTag
                      })
                  ]
              })
            : e_,
        ex = null != (t = eE || eZ || ej) && t,
        ew = r.useRef(null);
    return (0, l.jsx)(c.mh, {
        id: i.id,
        children: (e) => {
            var { role: t } = e,
                n = ee(e, ['role']);
            return (0, l.jsxs)(v.Z, {
                className: o()(X.channel, X.dm),
                role: t,
                focusProps: $(J({}, en), {
                    focusTarget: ea,
                    ringTarget: es
                }),
                ref: es,
                onMouseEnter: eg,
                onMouseLeave: eS,
                onMouseDown: eI,
                onContextMenu: em,
                'aria-setsize': K,
                'aria-posinset': B,
                children: [
                    ep ? (0, l.jsx)('div', { className: o()(X.unreadPill, { [X.muted]: ex }) }) : null,
                    (0, l.jsxs)(f.vjx, {
                        className: o()(X.interactive, {
                            [X.interactiveSystemDM]: eL && ey,
                            [X.interactiveSelected]: d,
                            [X.platedWrapper]: null != H
                        }),
                        as: 'div',
                        onClick: eN,
                        muted: ex,
                        selected: d,
                        children: [
                            (0, l.jsx)(w.Z, {
                                nameplate: H,
                                selected: d,
                                hovered: z,
                                content: ew,
                                placement: x.i.CHANNEL
                            }),
                            (0, l.jsx)(
                                u.rU,
                                $(
                                    J(
                                        {
                                            innerRef: ea,
                                            to: Q.Z5c.CHANNEL(Q.ME, i.id),
                                            className: o()(X.link, { [X.linkPlated]: null != H }),
                                            'aria-label': (0, m.ZP)({
                                                channel: i,
                                                unread: ep
                                            })
                                        },
                                        n
                                    ),
                                    {
                                        children: (0, l.jsx)(T.Z, {
                                            ref: ew,
                                            avatar: eP(),
                                            selected: d,
                                            highlighted: ep,
                                            muted: ex,
                                            subText: eb(),
                                            name: (0, l.jsx)(y.Z, {
                                                tooltipClassName: X.overflowTooltip,
                                                children: eU
                                            }),
                                            decorators: i.isSystemDM()
                                                ? (0, l.jsx)(I.Z, {
                                                      className: X.decorator,
                                                      type: I.Z.Types.SYSTEM_DM,
                                                      verified: !0
                                                  })
                                                : null
                                        })
                                    }
                                )
                            ),
                            eh ? (0, l.jsx)(er, {}) : null,
                            eZ ? (0, l.jsx)(ei, {}) : null,
                            ej ? (0, l.jsx)(eo, {}) : null,
                            (0, l.jsx)(el, {
                                'aria-label': ev ? q.NW.string(q.t['26C4oq']) : q.NW.string(q.t.jsvgc3),
                                onClick: ev ? eA : eO,
                                onMouseDown: eT,
                                nameplate: H
                            })
                        ]
                    })
                ]
            });
        }
    });
}
let eu = (e) => {
    var { channel: t, selected: n } = e,
        r = ee(e, ['channel', 'selected']);
    let i = (0, E.e7)([K.default], () => K.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: a, isFacepileEnabled: s } = D.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        u = null == i ? void 0 : i.id,
        c = (0, E.cj)(
            [H.Z, k.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
                        let n = H.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === Q.Skl.ONLINE) && (e = Q.Skl.ONLINE);
                    }
                } else null != u && (e = H.Z.getStatus(u));
                return {
                    status: e,
                    activities: null != u ? H.Z.getActivities(u) : null,
                    applicationStream: null != u ? k.Z.getAnyStreamForUser(u) : null,
                    isMobile: null != u && H.Z.isMobileOnline(u)
                };
            },
            [t, u, o]
        ),
        { voiceActivityStatusEnabled: d } = (0, h.U)({ location: 'PrivateChannel' }),
        { voiceChannel: f } = (0, S.Z)({
            userId: u,
            surface: 'private-channel'
        }),
        C = (0, j.K)({
            location: 'PrivateChannel',
            user: i,
            privateChannel: t
        }),
        p = (0, E.e7)(
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
        ? (0, l.jsx)(
              es,
              J(
                  {
                      channel: t,
                      selected: n,
                      isTyping: p,
                      status: c.status === Q.Skl.ONLINE ? Q.Skl.ONLINE : void 0,
                      isGDMFacepileEnabled: s
                  },
                  r
              )
          )
        : (0, l.jsx)(
              es,
              J(
                  {
                      channel: t,
                      selected: n,
                      user: i,
                      voiceChannel: d ? f : void 0,
                      isTyping: p,
                      nameplate: C
                  },
                  r,
                  c
              )
          );
};

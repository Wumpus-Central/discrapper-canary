n.d(t, {
    PZ: () => en,
    Qj: () => eo,
    ZP: () => es
}),
    n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
    c = n(568611),
    u = n(91192),
    d = n(873546),
    E = n(442837),
    h = n(481060),
    f = n(493683),
    p = n(239091),
    C = n(420660),
    _ = n(468363),
    g = n(297369),
    I = n(956221),
    T = n(771173),
    O = n(372276),
    S = n(385499),
    N = n(570908),
    m = n(702321),
    v = n(201895),
    b = n(43267),
    A = n(933557),
    P = n(979264),
    y = n(163889),
    L = n(111028),
    j = n(540059),
    Z = n(853856),
    D = n(93687),
    x = n(785232),
    R = n(516817),
    U = n(878857),
    w = n(565640),
    k = n(518950),
    G = n(199902),
    M = n(158776),
    H = n(306680),
    F = n(699516),
    V = n(111583),
    W = n(9156),
    z = n(594174),
    B = n(709054),
    K = n(998502),
    Q = n(981631),
    Y = n(388032),
    X = n(759693);
function q(e) {
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
function J(e, t) {
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
function $(e, t) {
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
let ee = K.ZP.getEnableHardwareAcceleration() ? h.Xo$ : h.qEK,
    et = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    en = (e) =>
        (0, l.jsx)(
            h.P3F,
            J(q({ className: X.closeButton }, e), {
                focusProps: {
                    offset: {
                        top: -2,
                        bottom: -2,
                        left: -2,
                        right: 6
                    }
                },
                children: (0, l.jsx)(h.Dio, {
                    size: 'md',
                    color: 'currentColor',
                    className: X.closeIcon
                })
            })
        ),
    el = () =>
        (0, l.jsx)(h.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    er = () =>
        (0, l.jsx)(h.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        }),
    ei = () =>
        (0, l.jsx)(h.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: X.favoriteIcon
        });
function eo(e) {
    var { route: t, selected: n, icon: r, iconClassName: i, avatarWithTextClassName: a, interactiveClassName: s, text: u, children: E, locationState: f, onClick: p, className: C, role: _, 'aria-posinset': g, 'aria-setsize': I } = e,
        T = $(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize']);
    let O = (0, j.Q3)('PrivateChannelLinkButton');
    return (0, l.jsx)(y.Z, {
        className: o()(X.channel, { [X.fullWidth]: d.tq }, C),
        onClick: p,
        role: _,
        focusProps: q({ within: !0 }, et),
        'aria-posinset': g,
        'aria-setsize': I,
        children: (0, l.jsx)(h.vjx, {
            as: 'div',
            selected: n,
            className: o()(s, X.interactive, X.linkButton, { [X.interactiveSelected]: n }),
            children: (0, l.jsxs)(
                c.rU,
                J(
                    q(
                        {
                            to: {
                                pathname: t,
                                state: f
                            },
                            className: X.link
                        },
                        T
                    ),
                    {
                        children: [
                            (0, l.jsx)(N.Z, {
                                selected: n,
                                muted: !1,
                                avatar: (0, l.jsx)(r, {
                                    size: O ? 'refresh_sm' : void 0,
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
}
function ea(e) {
    var t;
    let { channel: i, isGDMFacepileEnabled: a, selected: d = !1, user: _, activities: I, applicationStream: j, entry: D, voiceChannel: w, isTyping: G, status: M, isMobile: V, nameplate: z, 'aria-posinset': B, 'aria-setsize': K } = e,
        [eo, ea] = r.useState(!1),
        es = r.useRef(null),
        ec = r.useRef(null),
        {
            avatarSrc: eu,
            avatarDecorationSrc: ed,
            eventHandlers: eE
        } = (0, k.Z)({
            user: _,
            size: h.EFr.SIZE_32,
            animateOnHover: !(d || eo)
        }),
        eh = (0, E.e7)([W.ZP], () => W.ZP.isChannelMuted(i.getGuildId(), i.id)),
        { ignored: ef, blocked: ep } = (0, E.cj)([F.Z], () => ({
            ignored: F.Z.isIgnored(i.getRecipientId()),
            blocked: F.Z.isBlocked(i.getRecipientId())
        })),
        eC = (0, E.e7)([H.ZP], () => H.ZP.getMentionCount(i.id) > 0),
        e_ = (0, A.ZP)(i),
        eg = (0, E.e7)([Z.Z], () => Z.Z.isFavorite(i.id)),
        eI = () => {
            ea(!0);
        },
        eT = () => {
            ea(!1);
        },
        eO = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), f.Z.closePrivateChannel(i.id, d, t);
        },
        eS = () => {
            f.Z.preload(Q.ME, i.id);
        },
        eN = (e) => {
            e.stopPropagation();
        },
        em = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = es.current) || void 0 === t || t.click();
            }
        },
        ev = (e) => {
            i.isMultiUserDM()
                ? (0, p.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('25421'), n.e('80243')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, l.jsx)(
                                  e,
                                  J(q({}, t), {
                                      channel: i,
                                      selected: d
                                  })
                              );
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, p.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('98254'), n.e('56826'), n.e('11401')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              J(q({}, t), {
                                  user: _,
                                  channel: i,
                                  channelSelected: d
                              })
                          );
                  });
        },
        eb = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = Y.NW.formatToPlainString(Y.t.hJ5Ap6, { name: e_ }),
                r = Y.NW.format(Y.t.SSIVOj, { name: e_ });
            i.isManaged() && ((t = Y.NW.formatToPlainString(Y.t.hVGjER, { name: e_ })), (r = Y.NW.format(Y.t.IK1Qvr, { name: e_ }))),
                (0, h.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, l.jsx)(
                            e,
                            q(
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
        eA = () =>
            i.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: X.subtext,
                      children: (0, m.Z)(i.id) ? Y.NW.string(Y.t.FL5T09) : Y.NW.string(Y.t.NnY5lZ)
                  })
                : i.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: X.subtext,
                        children: Y.NW.format(Y.t.CxSA5O, { members: i.recipients.length + 1 })
                    })
                  : (0, g.Z)({
                          activities: I,
                          status: M,
                          applicationStream: j,
                          voiceChannel: w
                      })
                    ? (0, l.jsx)(T.Z, {
                          location: 'PrivateChannel',
                          user: _,
                          activities: I,
                          voiceChannel: w,
                          applicationStream: j,
                          animate: eo,
                          emojiClassName: eh ? X.mutedEmoji : void 0
                      })
                    : null != D
                      ? (0, l.jsx)(O.Z, { entry: D })
                      : null,
        eP = () => {
            let e = h.EFr.SIZE_32;
            if (i.isMultiUserDM())
                return i.recipients.length >= 2 && a && null == i.icon
                    ? (0, l.jsx)(x.Z, {
                          'aria-hidden': !0,
                          recipients: i.recipients,
                          size: e,
                          isTyping: G,
                          status: M
                      })
                    : (0, l.jsx)(
                          ee,
                          J(q({}, eE), {
                              src: (0, b.x)(i),
                              'aria-hidden': !0,
                              size: e,
                              status: G ? Q.Skl.ONLINE : M,
                              isTyping: G
                          })
                      );
            s()(null != _, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                _.isSystemUser() || (t = (0, C.Z)(I) ? Q.Skl.STREAMING : M),
                (0, l.jsx)(
                    ee,
                    J(q({}, eE), {
                        size: h.EFr.SIZE_32,
                        src: eu,
                        avatarDecoration: ed,
                        status: t,
                        isMobile: V,
                        isTyping: G,
                        'aria-label': _.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        ey = i.isMultiUserDM(),
        eL = i.isSystemDM(),
        ej = (0, U.Q)(),
        eZ = !ey && !eL && i.type === Q.d4z.DM,
        eD = eZ && (null == _ ? void 0 : _.primaryGuild) != null,
        ex = eZ && ef,
        eR = eZ && ep,
        eU = eD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e_,
                      (0, l.jsx)(P.ZP, {
                          primaryGuild: null == _ ? void 0 : _.primaryGuild,
                          userId: null == _ ? void 0 : _.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: X.clanTag
                      })
                  ]
              })
            : e_,
        ew = null !== (t = eh || ex || eR) && void 0 !== t && t;
    return (0, l.jsx)(u.mh, {
        id: i.id,
        children: (e) => {
            var { role: t } = e,
                n = $(e, ['role']);
            return (0, l.jsx)(y.Z, {
                className: o()(X.channel, X.dm),
                role: t,
                focusProps: J(q({}, et), {
                    focusTarget: es,
                    ringTarget: ec
                }),
                ref: ec,
                onMouseEnter: eI,
                onMouseLeave: eT,
                onMouseDown: eS,
                onContextMenu: ev,
                'aria-setsize': K,
                'aria-posinset': B,
                children: (0, l.jsxs)(h.vjx, {
                    className: o()(X.interactive, {
                        [X.interactiveSystemDM]: ej && eL,
                        [X.interactiveSelected]: d
                    }),
                    as: 'div',
                    onClick: em,
                    muted: ew,
                    selected: d,
                    children: [
                        (0, l.jsx)(R.Z, {
                            nameplate: z,
                            selected: d,
                            hovered: eo
                        }),
                        (0, l.jsx)(
                            c.rU,
                            J(
                                q(
                                    {
                                        innerRef: es,
                                        to: Q.Z5c.CHANNEL(Q.ME, i.id),
                                        className: X.link,
                                        'aria-label': (0, v.ZP)({
                                            channel: i,
                                            unread: eC
                                        })
                                    },
                                    n
                                ),
                                {
                                    children: (0, l.jsx)(N.Z, {
                                        avatar: eP(),
                                        selected: d,
                                        highlighted: eC,
                                        muted: ew,
                                        subText: eA(),
                                        name: (0, l.jsx)(L.Z, {
                                            tooltipClassName: X.overflowTooltip,
                                            children: eU
                                        }),
                                        decorators: i.isSystemDM()
                                            ? (0, l.jsx)(S.Z, {
                                                  className: X.decorator,
                                                  type: S.Z.Types.SYSTEM_DM,
                                                  verified: !0
                                              })
                                            : null
                                    })
                                }
                            )
                        ),
                        eg ? (0, l.jsx)(el, {}) : null,
                        ex ? (0, l.jsx)(er, {}) : null,
                        eR ? (0, l.jsx)(ei, {}) : null,
                        (0, l.jsx)(en, {
                            'aria-label': ey ? Y.NW.string(Y.t['26C4oq']) : Y.NW.string(Y.t.jsvgc3),
                            onClick: ey ? eb : eO,
                            onMouseDown: eN
                        })
                    ]
                })
            });
        }
    });
}
let es = (e) => {
    var { channel: t, selected: n, nameplate: r } = e,
        i = $(e, ['channel', 'selected', 'nameplate']);
    let o = (0, E.e7)([z.default], () => z.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: a, isTypingIndicatorEnabled: s, isFacepileEnabled: c } = D.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        u = null == o ? void 0 : o.id,
        d = (0, E.cj)(
            [M.Z, G.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (a) {
                        let n = M.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === Q.Skl.ONLINE) && (e = Q.Skl.ONLINE);
                    }
                } else null != u && (e = M.Z.getStatus(u));
                return {
                    status: e,
                    activities: null != u ? M.Z.getActivities(u) : null,
                    applicationStream: null != u ? G.Z.getAnyStreamForUser(u) : null,
                    isMobile: null != u && M.Z.isMobileOnline(u)
                };
            },
            [t, u, a]
        ),
        h = (0, w.Z)(null == o ? void 0 : o.id, 'PrivateChannel'),
        { voiceActivityStatusEnabled: f } = (0, _.U)({ location: 'PrivateChannel' }),
        { voiceChannel: p } = (0, I.Z)({
            userId: u,
            surface: 'private-channel'
        }),
        C = (0, E.e7)(
            [z.default, V.Z],
            () =>
                t.isMultiUserDM()
                    ? !!s &&
                      B.default.keys(V.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = z.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != o && V.Z.isTyping(t.id, t.getRecipientId()),
            [t, o, s]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(
              ea,
              q(
                  {
                      channel: t,
                      selected: n,
                      isTyping: C,
                      status: d.status === Q.Skl.ONLINE ? Q.Skl.ONLINE : void 0,
                      isGDMFacepileEnabled: c
                  },
                  i
              )
          )
        : (0, l.jsx)(
              ea,
              q(
                  {
                      channel: t,
                      selected: n,
                      user: o,
                      entry: h,
                      voiceChannel: f ? p : void 0,
                      isTyping: C,
                      nameplate: r
                  },
                  i,
                  d
              )
          );
};

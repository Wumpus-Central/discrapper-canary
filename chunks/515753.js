n.d(t, {
    PZ: () => en,
    Qj: () => ea,
    ZP: () => es
}),
    n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    c = n(568611),
    u = n(91192),
    d = n(873546),
    E = n(442837),
    f = n(481060),
    C = n(493683),
    _ = n(239091),
    h = n(420660),
    p = n(468363),
    O = n(297369),
    g = n(956221),
    T = n(771173),
    I = n(372276),
    S = n(385499),
    N = n(570908),
    A = n(702321),
    v = n(201895),
    b = n(43267),
    m = n(933557),
    y = n(979264),
    P = n(163889),
    L = n(111028),
    R = n(540059),
    Z = n(853856),
    D = n(93687),
    j = n(785232),
    U = n(516817),
    x = n(878857),
    w = n(565640),
    M = n(518950),
    G = n(199902),
    H = n(158776),
    k = n(306680),
    F = n(699516),
    V = n(111583),
    B = n(9156),
    W = n(594174),
    K = n(709054),
    Y = n(998502),
    z = n(981631),
    Q = n(388032),
    q = n(759693);
function X(e) {
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
let ee = Y.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    et = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    en = (e) =>
        (0, l.jsx)(
            f.P3F,
            J(X({ className: q.closeButton }, e), {
                focusProps: {
                    offset: {
                        top: -2,
                        bottom: -2,
                        left: -2,
                        right: 6
                    }
                },
                children: (0, l.jsx)(f.Dio, {
                    size: 'md',
                    color: 'currentColor',
                    className: q.closeIcon
                })
            })
        ),
    el = () =>
        (0, l.jsx)(f.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        }),
    er = () =>
        (0, l.jsx)(f.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        }),
    ei = () =>
        (0, l.jsx)(f.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        }),
    ea = (e) => {
        var { route: t, selected: n, icon: r, iconClassName: i, avatarWithTextClassName: o, interactiveClassName: s, text: u, children: E, locationState: C, onClick: _, className: h, role: p, 'aria-posinset': O, 'aria-setsize': g, listItemRef: T } = e,
            I = $(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize', 'listItemRef']);
        let S = (0, R.Q3)('PrivateChannelLinkButton');
        return (0, l.jsx)(P.Z, {
            className: a()(q.channel, { [q.fullWidth]: d.tq }, h),
            onClick: _,
            role: p,
            focusProps: X({ within: !0 }, et),
            'aria-posinset': O,
            'aria-setsize': g,
            ref: T,
            children: (0, l.jsx)(f.vjx, {
                as: 'div',
                selected: n,
                className: a()(s, q.interactive, q.linkButton, { [q.interactiveSelected]: n }),
                children: (0, l.jsxs)(
                    c.rU,
                    J(
                        X(
                            {
                                to: {
                                    pathname: t,
                                    state: C
                                },
                                className: q.link
                            },
                            I
                        ),
                        {
                            children: [
                                (0, l.jsx)(N.Z, {
                                    selected: n,
                                    muted: !1,
                                    avatar: (0, l.jsx)(r, {
                                        size: S ? 'refresh_sm' : void 0,
                                        className: a()(q.linkButtonIcon, i),
                                        color: 'currentColor'
                                    }),
                                    name: u,
                                    innerClassName: a()(q.avatarWithText, o)
                                }),
                                E
                            ]
                        }
                    )
                )
            })
        });
    };
function eo(e) {
    var t;
    let { channel: i, isGDMFacepileEnabled: o, selected: d = !1, user: p, activities: g, applicationStream: R, entry: D, voiceChannel: w, isTyping: G, status: H, isMobile: V, nameplate: W, 'aria-posinset': K, 'aria-setsize': Y } = e,
        [ea, eo] = r.useState(!1),
        es = r.useRef(null),
        ec = r.useRef(null),
        {
            avatarSrc: eu,
            avatarDecorationSrc: ed,
            eventHandlers: eE
        } = (0, M.Z)({
            user: p,
            size: f.EFr.SIZE_32,
            animateOnHover: !(d || ea)
        }),
        ef = (0, E.e7)([B.ZP], () => B.ZP.isChannelMuted(i.getGuildId(), i.id)),
        { ignored: eC, blocked: e_ } = (0, E.cj)([F.Z], () => ({
            ignored: F.Z.isIgnored(i.getRecipientId()),
            blocked: F.Z.isBlocked(i.getRecipientId())
        })),
        eh = (0, E.e7)([k.ZP], () => k.ZP.getMentionCount(i.id) > 0),
        ep = (0, m.ZP)(i),
        eO = (0, E.e7)([Z.Z], () => Z.Z.isFavorite(i.id)),
        eg = () => {
            eo(!0);
        },
        eT = () => {
            eo(!1);
        },
        eI = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), C.Z.closePrivateChannel(i.id, d, t);
        },
        eS = () => {
            C.Z.preload(z.ME, i.id);
        },
        eN = (e) => {
            e.stopPropagation();
        },
        eA = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = es.current) || void 0 === t || t.click();
            }
        },
        ev = (e) => {
            i.isMultiUserDM()
                ? (0, _.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('25421'), n.e('80243')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, l.jsx)(
                                  e,
                                  J(X({}, t), {
                                      channel: i,
                                      selected: d
                                  })
                              );
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, _.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('98254'), n.e('56826'), n.e('11401')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              J(X({}, t), {
                                  user: p,
                                  channel: i,
                                  channelSelected: d
                              })
                          );
                  });
        },
        eb = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = Q.NW.formatToPlainString(Q.t.hJ5Ap6, { name: ep }),
                r = Q.NW.format(Q.t.SSIVOj, { name: ep });
            i.isManaged() && ((t = Q.NW.formatToPlainString(Q.t.hVGjER, { name: ep })), (r = Q.NW.format(Q.t.IK1Qvr, { name: ep }))),
                (0, f.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, l.jsx)(
                            e,
                            X(
                                {
                                    header: t,
                                    body: r,
                                    onSubmit: eI
                                },
                                n
                            )
                        );
                });
        },
        em = () =>
            i.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: q.subtext,
                      children: (0, A.Z)(i.id) ? Q.NW.string(Q.t.FL5T09) : Q.NW.string(Q.t.NnY5lZ)
                  })
                : i.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: q.subtext,
                        children: Q.NW.format(Q.t.CxSA5O, { members: i.recipients.length + 1 })
                    })
                  : (0, O.Z)({
                          activities: g,
                          status: H,
                          applicationStream: R,
                          voiceChannel: w
                      })
                    ? (0, l.jsx)(T.Z, {
                          location: 'PrivateChannel',
                          user: p,
                          activities: g,
                          voiceChannel: w,
                          applicationStream: R,
                          animate: ea,
                          emojiClassName: ef ? q.mutedEmoji : void 0
                      })
                    : null != D
                      ? (0, l.jsx)(I.Z, { entry: D })
                      : null,
        ey = () => {
            let e = f.EFr.SIZE_32;
            if (i.isMultiUserDM())
                return i.recipients.length >= 2 && o && null == i.icon
                    ? (0, l.jsx)(j.Z, {
                          'aria-hidden': !0,
                          recipients: i.recipients,
                          size: e,
                          isTyping: G,
                          status: H
                      })
                    : (0, l.jsx)(
                          ee,
                          J(X({}, eE), {
                              src: (0, b.x)(i),
                              'aria-hidden': !0,
                              size: e,
                              status: G ? z.Skl.ONLINE : H,
                              isTyping: G
                          })
                      );
            s()(null != p, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                p.isSystemUser() || (t = (0, h.Z)(g) ? z.Skl.STREAMING : H),
                (0, l.jsx)(
                    ee,
                    J(X({}, eE), {
                        size: f.EFr.SIZE_32,
                        src: eu,
                        avatarDecoration: ed,
                        status: t,
                        isMobile: V,
                        isTyping: G,
                        'aria-label': p.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eP = i.isMultiUserDM(),
        eL = i.isSystemDM(),
        eR = (0, x.Q)(),
        eZ = !eP && !eL && i.type === z.d4z.DM,
        eD = eZ && (null == p ? void 0 : p.primaryGuild) != null,
        ej = eZ && eC,
        eU = eZ && e_,
        ex = eD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      ep,
                      (0, l.jsx)(y.ZP, {
                          primaryGuild: null == p ? void 0 : p.primaryGuild,
                          userId: null == p ? void 0 : p.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: q.clanTag
                      })
                  ]
              })
            : ep,
        ew = null !== (t = ef || ej || eU) && void 0 !== t && t;
    return (0, l.jsx)(u.mh, {
        id: i.id,
        children: (e) => {
            var { role: t } = e,
                n = $(e, ['role']);
            return (0, l.jsx)(P.Z, {
                className: a()(q.channel, q.dm),
                role: t,
                focusProps: J(X({}, et), {
                    focusTarget: es,
                    ringTarget: ec
                }),
                ref: ec,
                onMouseEnter: eg,
                onMouseLeave: eT,
                onMouseDown: eS,
                onContextMenu: ev,
                'aria-setsize': Y,
                'aria-posinset': K,
                children: (0, l.jsxs)(f.vjx, {
                    className: a()(q.interactive, {
                        [q.interactiveSystemDM]: eR && eL,
                        [q.interactiveSelected]: d
                    }),
                    as: 'div',
                    onClick: eA,
                    muted: ew,
                    selected: d,
                    children: [
                        (0, l.jsx)(U.Z, {
                            nameplate: W,
                            selected: d,
                            hovered: ea
                        }),
                        (0, l.jsx)(
                            c.rU,
                            J(
                                X(
                                    {
                                        innerRef: es,
                                        to: z.Z5c.CHANNEL(z.ME, i.id),
                                        className: q.link,
                                        'aria-label': (0, v.ZP)({
                                            channel: i,
                                            unread: eh
                                        })
                                    },
                                    n
                                ),
                                {
                                    children: (0, l.jsx)(N.Z, {
                                        avatar: ey(),
                                        selected: d,
                                        highlighted: eh,
                                        muted: ew,
                                        subText: em(),
                                        name: (0, l.jsx)(L.Z, {
                                            tooltipClassName: q.overflowTooltip,
                                            children: ex
                                        }),
                                        decorators: i.isSystemDM()
                                            ? (0, l.jsx)(S.Z, {
                                                  className: q.decorator,
                                                  type: S.Z.Types.SYSTEM_DM,
                                                  verified: !0
                                              })
                                            : null
                                    })
                                }
                            )
                        ),
                        eO ? (0, l.jsx)(el, {}) : null,
                        ej ? (0, l.jsx)(er, {}) : null,
                        eU ? (0, l.jsx)(ei, {}) : null,
                        (0, l.jsx)(en, {
                            'aria-label': eP ? Q.NW.string(Q.t['26C4oq']) : Q.NW.string(Q.t.jsvgc3),
                            onClick: eP ? eb : eI,
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
    let a = (0, E.e7)([W.default], () => W.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: s, isFacepileEnabled: c } = D.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        u = null == a ? void 0 : a.id,
        d = (0, E.cj)(
            [H.Z, G.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
                        let n = H.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === z.Skl.ONLINE) && (e = z.Skl.ONLINE);
                    }
                } else null != u && (e = H.Z.getStatus(u));
                return {
                    status: e,
                    activities: null != u ? H.Z.getActivities(u) : null,
                    applicationStream: null != u ? G.Z.getAnyStreamForUser(u) : null,
                    isMobile: null != u && H.Z.isMobileOnline(u)
                };
            },
            [t, u, o]
        ),
        f = (0, w.Z)(null == a ? void 0 : a.id, 'PrivateChannel'),
        { voiceActivityStatusEnabled: C } = (0, p.U)({ location: 'PrivateChannel' }),
        { voiceChannel: _ } = (0, g.Z)({
            userId: u,
            surface: 'private-channel'
        }),
        h = (0, E.e7)(
            [W.default, V.Z],
            () =>
                t.isMultiUserDM()
                    ? !!s &&
                      K.default.keys(V.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = W.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != a && V.Z.isTyping(t.id, t.getRecipientId()),
            [t, a, s]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(
              eo,
              X(
                  {
                      channel: t,
                      selected: n,
                      isTyping: h,
                      status: d.status === z.Skl.ONLINE ? z.Skl.ONLINE : void 0,
                      isGDMFacepileEnabled: c
                  },
                  i
              )
          )
        : (0, l.jsx)(
              eo,
              X(
                  {
                      channel: t,
                      selected: n,
                      user: a,
                      entry: f,
                      voiceChannel: C ? _ : void 0,
                      isTyping: h,
                      nameplate: r
                  },
                  i,
                  d
              )
          );
};

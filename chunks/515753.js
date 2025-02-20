n.d(t, {
    PZ: () => el,
    Qj: () => eo,
    ZP: () => ec
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
    R = n(359135),
    U = n(516817),
    w = n(878857),
    k = n(565640),
    G = n(518950),
    M = n(199902),
    H = n(158776),
    F = n(306680),
    V = n(699516),
    W = n(111583),
    z = n(9156),
    B = n(594174),
    K = n(709054),
    Q = n(998502),
    Y = n(981631),
    X = n(388032),
    q = n(759693);
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
let et = Q.ZP.getEnableHardwareAcceleration() ? h.Xo$ : h.qEK,
    en = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    el = (e) =>
        (0, l.jsx)(
            h.P3F,
            $(J({ className: q.closeButton }, e), {
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
                    className: q.closeIcon
                })
            })
        ),
    er = () =>
        (0, l.jsx)(h.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        }),
    ei = () =>
        (0, l.jsx)(h.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        }),
    ea = () =>
        (0, l.jsx)(h.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        });
function eo(e) {
    var { route: t, selected: n, icon: r, iconClassName: i, avatarWithTextClassName: o, interactiveClassName: s, text: u, children: E, locationState: f, onClick: p, className: C, role: _, 'aria-posinset': g, 'aria-setsize': I } = e,
        T = ee(e, ['route', 'selected', 'icon', 'iconClassName', 'avatarWithTextClassName', 'interactiveClassName', 'text', 'children', 'locationState', 'onClick', 'className', 'role', 'aria-posinset', 'aria-setsize']);
    let O = (0, j.Q3)('PrivateChannelLinkButton');
    return (0, l.jsx)(y.Z, {
        className: a()(q.channel, { [q.fullWidth]: d.tq }, C),
        onClick: p,
        role: _,
        focusProps: J({ within: !0 }, en),
        'aria-posinset': g,
        'aria-setsize': I,
        children: (0, l.jsx)(h.vjx, {
            as: 'div',
            selected: n,
            className: a()(s, q.interactive, q.linkButton, { [q.interactiveSelected]: n }),
            children: (0, l.jsxs)(
                c.rU,
                $(
                    J(
                        {
                            to: {
                                pathname: t,
                                state: f
                            },
                            className: q.link
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
}
function es(e) {
    var t;
    let { channel: i, isGDMFacepileEnabled: o, selected: d = !1, user: _, activities: I, applicationStream: j, entry: D, voiceChannel: k, isTyping: M, status: H, isMobile: W, nameplate: B, 'aria-posinset': K, 'aria-setsize': Q } = e,
        [eo, es] = r.useState(!1),
        ec = r.useRef(null),
        eu = r.useRef(null),
        {
            avatarSrc: ed,
            avatarDecorationSrc: eE,
            eventHandlers: eh
        } = (0, G.Z)({
            user: _,
            size: h.EFr.SIZE_32,
            animateOnHover: !(d || eo)
        }),
        ef = (0, E.e7)([z.ZP], () => z.ZP.isChannelMuted(i.getGuildId(), i.id)),
        { ignored: ep, blocked: eC } = (0, E.cj)([V.Z], () => ({
            ignored: V.Z.isIgnored(i.getRecipientId()),
            blocked: V.Z.isBlocked(i.getRecipientId())
        })),
        e_ = (0, E.e7)([F.ZP], () => F.ZP.getMentionCount(i.id) > 0),
        eg = (0, A.ZP)(i),
        eI = (0, E.e7)([Z.Z], () => Z.Z.isFavorite(i.id)),
        eT = () => {
            es(!0);
        },
        eO = () => {
            es(!1);
        },
        eS = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), f.Z.closePrivateChannel(i.id, d, t);
        },
        eN = () => {
            f.Z.preload(Y.ME, i.id);
        },
        em = (e) => {
            e.stopPropagation();
        },
        ev = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = ec.current) || void 0 === t || t.click();
            }
        },
        eb = (e) => {
            i.isMultiUserDM()
                ? (0, p.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('25421'), n.e('80243')]).then(n.bind(n, 354741));
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
                      let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('98254'), n.e('56826'), n.e('11401')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              $(J({}, t), {
                                  user: _,
                                  channel: i,
                                  channelSelected: d
                              })
                          );
                  });
        },
        eA = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = X.NW.formatToPlainString(X.t.hJ5Ap6, { name: eg }),
                r = X.NW.format(X.t.SSIVOj, { name: eg });
            i.isManaged() && ((t = X.NW.formatToPlainString(X.t.hVGjER, { name: eg })), (r = X.NW.format(X.t.IK1Qvr, { name: eg }))),
                (0, h.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, l.jsx)(
                            e,
                            J(
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
        eP = () =>
            i.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: q.subtext,
                      children: (0, m.Z)(i.id) ? X.NW.string(X.t.FL5T09) : X.NW.string(X.t.NnY5lZ)
                  })
                : i.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: q.subtext,
                        children: X.NW.format(X.t.CxSA5O, { members: i.recipients.length + 1 })
                    })
                  : (0, g.Z)({
                          activities: I,
                          status: H,
                          applicationStream: j,
                          voiceChannel: k
                      })
                    ? (0, l.jsx)(T.Z, {
                          location: 'PrivateChannel',
                          user: _,
                          activities: I,
                          voiceChannel: k,
                          applicationStream: j,
                          animate: eo,
                          emojiClassName: ef ? q.mutedEmoji : void 0
                      })
                    : null != D
                      ? (0, l.jsx)(O.Z, { entry: D })
                      : null,
        ey = () => {
            let e = h.EFr.SIZE_32;
            if (i.isMultiUserDM())
                return i.recipients.length >= 2 && o && null == i.icon
                    ? (0, l.jsx)(x.Z, {
                          'aria-hidden': !0,
                          recipients: i.recipients,
                          size: e,
                          isTyping: M,
                          status: H
                      })
                    : (0, l.jsx)(
                          et,
                          $(J({}, eh), {
                              src: (0, b.x)(i),
                              'aria-hidden': !0,
                              size: e,
                              status: M ? Y.Skl.ONLINE : H,
                              isTyping: M
                          })
                      );
            s()(null != _, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                _.isSystemUser() || (t = (0, C.Z)(I) ? Y.Skl.STREAMING : H),
                (0, l.jsx)(
                    et,
                    $(J({}, eh), {
                        size: h.EFr.SIZE_32,
                        src: ed,
                        avatarDecoration: eE,
                        status: t,
                        isMobile: W,
                        isTyping: M,
                        'aria-label': _.username,
                        statusTooltip: !0
                    })
                )
            );
        },
        eL = i.isMultiUserDM(),
        ej = i.isSystemDM(),
        eZ = (0, w.Q)(),
        eD = !eL && !ej && i.type === Y.d4z.DM,
        ex = eD && (null == _ ? void 0 : _.primaryGuild) != null,
        eR = eD && ep,
        eU = eD && eC,
        ew = ex
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eg,
                      (0, l.jsx)(P.ZP, {
                          primaryGuild: null == _ ? void 0 : _.primaryGuild,
                          userId: null == _ ? void 0 : _.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: q.clanTag
                      })
                  ]
              })
            : eg,
        ek = null !== (t = ef || eR || eU) && void 0 !== t && t;
    return (0, l.jsx)(u.mh, {
        id: i.id,
        children: (e) => {
            var { role: t } = e,
                n = ee(e, ['role']);
            return (0, l.jsx)(U.Z, {
                placement: R.QY.PrivateChannel,
                nameplate: B,
                selected: d,
                hover: eo,
                children: (0, l.jsx)(y.Z, {
                    className: a()(q.channel, q.dm),
                    role: t,
                    focusProps: $(J({}, en), {
                        focusTarget: ec,
                        ringTarget: eu
                    }),
                    ref: eu,
                    onMouseEnter: eT,
                    onMouseLeave: eO,
                    onMouseDown: eN,
                    onContextMenu: eb,
                    'aria-setsize': Q,
                    'aria-posinset': K,
                    children: (0, l.jsxs)(h.vjx, {
                        className: a()(q.interactive, {
                            [q.interactiveSystemDM]: eZ && ej,
                            [q.interactiveSelected]: d && null == B
                        }),
                        as: 'div',
                        onClick: ev,
                        muted: ek,
                        selected: d,
                        children: [
                            (0, l.jsx)(
                                c.rU,
                                $(
                                    J(
                                        {
                                            innerRef: ec,
                                            to: Y.Z5c.CHANNEL(Y.ME, i.id),
                                            className: q.link,
                                            'aria-label': (0, v.ZP)({
                                                channel: i,
                                                unread: e_
                                            })
                                        },
                                        n
                                    ),
                                    {
                                        children: (0, l.jsx)(N.Z, {
                                            avatar: ey(),
                                            selected: d,
                                            highlighted: e_,
                                            muted: ek,
                                            subText: eP(),
                                            name: (0, l.jsx)(L.Z, {
                                                tooltipClassName: q.overflowTooltip,
                                                children: ew
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
                            eI ? (0, l.jsx)(er, {}) : null,
                            eR ? (0, l.jsx)(ei, {}) : null,
                            eU ? (0, l.jsx)(ea, {}) : null,
                            (0, l.jsx)(el, {
                                'aria-label': eL ? X.NW.string(X.t['26C4oq']) : X.NW.string(X.t.jsvgc3),
                                onClick: eL ? eA : eS,
                                onMouseDown: em
                            })
                        ]
                    })
                })
            });
        }
    });
}
let ec = (e) => {
    var { channel: t, selected: n, nameplate: r } = e,
        i = ee(e, ['channel', 'selected', 'nameplate']);
    let a = (0, E.e7)([B.default], () => B.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: s, isFacepileEnabled: c } = D.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        u = null == a ? void 0 : a.id,
        d = (0, E.cj)(
            [H.Z, M.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
                        let n = H.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === Y.Skl.ONLINE) && (e = Y.Skl.ONLINE);
                    }
                } else null != u && (e = H.Z.getStatus(u));
                return {
                    status: e,
                    activities: null != u ? H.Z.getActivities(u) : null,
                    applicationStream: null != u ? M.Z.getAnyStreamForUser(u) : null,
                    isMobile: null != u && H.Z.isMobileOnline(u)
                };
            },
            [t, u, o]
        ),
        h = (0, k.Z)(null == a ? void 0 : a.id, 'PrivateChannel'),
        { voiceActivityStatusEnabled: f } = (0, _.U)({ location: 'PrivateChannel' }),
        { voiceChannel: p } = (0, I.Z)({
            userId: u,
            surface: 'private-channel'
        }),
        C = (0, E.e7)(
            [B.default, W.Z],
            () =>
                t.isMultiUserDM()
                    ? !!s &&
                      K.default.keys(W.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = B.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != a && W.Z.isTyping(t.id, t.getRecipientId()),
            [t, a, s]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(
              es,
              J(
                  {
                      channel: t,
                      selected: n,
                      isTyping: C,
                      status: d.status === Y.Skl.ONLINE ? Y.Skl.ONLINE : void 0,
                      isGDMFacepileEnabled: c
                  },
                  i
              )
          )
        : (0, l.jsx)(
              es,
              J(
                  {
                      channel: t,
                      selected: n,
                      user: a,
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

n.d(t, {
    PZ: () => J,
    Qj: () => ee,
    ZP: () => en
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    c = n(568611),
    d = n(91192),
    u = n(873546),
    h = n(442837),
    p = n(481060),
    m = n(493683),
    g = n(239091),
    f = n(420660),
    _ = n(297369),
    v = n(771173),
    x = n(372276),
    C = n(385499),
    Z = n(570908),
    I = n(702321),
    b = n(201895),
    S = n(43267),
    N = n(933557),
    E = n(979264),
    j = n(163889),
    y = n(111028),
    P = n(540059),
    A = n(853856),
    T = n(93687),
    w = n(785232),
    R = n(878857),
    L = n(565640),
    M = n(518950),
    D = n(199902),
    G = n(158776),
    k = n(306680),
    B = n(699516),
    O = n(111583),
    U = n(9156),
    V = n(594174),
    F = n(709054),
    H = n(998502),
    z = n(981631),
    W = n(388032),
    q = n(926540);
let Y = H.ZP.getEnableHardwareAcceleration() ? p.Xo$ : p.qEK,
    Q = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    J = (e) =>
        (0, i.jsx)(p.P3F, {
            className: q.closeButton,
            ...e,
            focusProps: {
                offset: {
                    top: -2,
                    bottom: -2,
                    left: -2,
                    right: 6
                }
            },
            children: (0, i.jsx)(p.Dio, {
                size: 'md',
                color: 'currentColor',
                className: q.closeIcon
            })
        }),
    K = () =>
        (0, i.jsx)(p.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        }),
    X = () =>
        (0, i.jsx)(p.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        }),
    $ = () =>
        (0, i.jsx)(p.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: q.favoriteIcon
        });
function ee(e) {
    let { route: t, selected: n, icon: l, iconClassName: r, avatarWithTextClassName: o, interactiveClassName: s, text: d, children: h, locationState: m, onClick: g, className: f, role: _, 'aria-posinset': v, 'aria-setsize': x, ...C } = e,
        I = (0, P.Q3)('PrivateChannelLinkButton');
    return (0, i.jsx)(j.Z, {
        className: a()(q.channel, { [q.fullWidth]: u.tq }, f),
        onClick: g,
        role: _,
        focusProps: {
            within: !0,
            ...Q
        },
        'aria-posinset': v,
        'aria-setsize': x,
        children: (0, i.jsx)(p.vjx, {
            as: 'div',
            selected: n,
            className: a()(s, q.interactive, q.linkButton, { [q.interactiveSelected]: n }),
            children: (0, i.jsxs)(c.rU, {
                to: {
                    pathname: t,
                    state: m
                },
                className: q.link,
                ...C,
                children: [
                    (0, i.jsx)(Z.Z, {
                        selected: n,
                        muted: !1,
                        avatar: (0, i.jsx)(l, {
                            size: I ? 'refresh_sm' : void 0,
                            className: a()(q.linkButtonIcon, r),
                            color: 'currentColor'
                        }),
                        name: d,
                        innerClassName: a()(q.avatarWithText, o)
                    }),
                    h
                ]
            })
        })
    });
}
function et(e) {
    var t;
    let { channel: r, isGDMFacepileEnabled: o, selected: u = !1, user: P, activities: T, applicationStream: L, entry: D, isTyping: G, status: O, isMobile: V, 'aria-posinset': F, 'aria-setsize': H } = e,
        [ee, et] = l.useState(!1),
        en = l.useRef(null),
        ei = l.useRef(null),
        {
            avatarSrc: el,
            avatarDecorationSrc: er,
            eventHandlers: ea
        } = (0, M.Z)({
            user: P,
            size: p.EFr.SIZE_32,
            animateOnHover: !(u || ee)
        }),
        eo = (0, h.e7)([U.ZP], () => U.ZP.isChannelMuted(r.getGuildId(), r.id)),
        { ignored: es, blocked: ec } = (0, h.cj)([B.Z], () => ({
            ignored: B.Z.isIgnored(r.getRecipientId()),
            blocked: B.Z.isBlocked(r.getRecipientId())
        })),
        ed = (0, h.e7)([k.ZP], () => k.ZP.getMentionCount(r.id) > 0),
        eu = (0, N.ZP)(r),
        eh = (0, h.e7)([A.Z], () => A.Z.isFavorite(r.id)),
        ep = () => {
            et(!0);
        },
        em = () => {
            et(!1);
        },
        eg = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), m.Z.closePrivateChannel(r.id, u, t);
        },
        ef = () => {
            m.Z.preload(z.ME, r.id);
        },
        e_ = (e) => {
            e.stopPropagation();
        },
        ev = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = en.current) || void 0 === t || t.click();
            }
        },
        ex = (e) => {
            r.isMultiUserDM()
                ? (0, g.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, i.jsx)(e, {
                                  ...t,
                                  channel: r,
                                  selected: u
                              });
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, g.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('56826'), n.e('5606')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              user: P,
                              channel: r,
                              channelSelected: u
                          });
                  });
        },
        eC = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = W.intl.formatToPlainString(W.t.hJ5Ap6, { name: eu }),
                l = W.intl.format(W.t.SSIVOj, { name: eu });
            r.isManaged() && ((t = W.intl.formatToPlainString(W.t.hVGjER, { name: eu })), (l = W.intl.format(W.t.IK1Qvr, { name: eu }))),
                (0, p.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, i.jsx)(e, {
                            header: t,
                            body: l,
                            onSubmit: eg,
                            ...n
                        });
                });
        },
        eZ = () =>
            r.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: q.subtext,
                      children: (0, I.Z)(r.id) ? W.intl.string(W.t.FL5T09) : W.intl.string(W.t.NnY5lZ)
                  })
                : r.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: q.subtext,
                        children: W.intl.format(W.t.CxSA5O, { members: r.recipients.length + 1 })
                    })
                  : (0, _.Z)(T, O)
                    ? (0, i.jsx)(v.Z, {
                          location: 'PrivateChannel',
                          user: P,
                          activities: T,
                          applicationStream: L,
                          animate: ee,
                          emojiClassName: eo ? q.mutedEmoji : void 0
                      })
                    : null != D
                      ? (0, i.jsx)(x.Z, { entry: D })
                      : null,
        eI = () => {
            let e = p.EFr.SIZE_32;
            if (r.isMultiUserDM())
                return r.recipients.length >= 2 && o && null == r.icon
                    ? (0, i.jsx)(w.Z, {
                          'aria-hidden': !0,
                          recipients: r.recipients,
                          size: e,
                          isTyping: G,
                          status: O
                      })
                    : (0, i.jsx)(Y, {
                          ...ea,
                          src: (0, S.x)(r),
                          'aria-hidden': !0,
                          size: e,
                          status: G ? z.Skl.ONLINE : O,
                          isTyping: G
                      });
            s()(null != P, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                P.isSystemUser() || (t = (0, f.Z)(T) ? z.Skl.STREAMING : O),
                (0, i.jsx)(Y, {
                    ...ea,
                    size: p.EFr.SIZE_32,
                    src: el,
                    avatarDecoration: er,
                    status: t,
                    isMobile: V,
                    isTyping: G,
                    'aria-label': P.username,
                    statusTooltip: !0
                })
            );
        },
        eb = r.isMultiUserDM(),
        eS = r.isSystemDM(),
        eN = (0, R.Q)(),
        eE = !eb && !eS && r.type === z.d4z.DM,
        ej = eE && (null == P ? void 0 : P.primaryGuild) != null,
        ey = eE && es,
        eP = eE && ec,
        eA = ej
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eu,
                      (0, i.jsx)(E.ZP, {
                          primaryGuild: null == P ? void 0 : P.primaryGuild,
                          userId: null == P ? void 0 : P.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: q.clanTag
                      })
                  ]
              })
            : eu,
        eT = null !== (t = eo || ey || eP) && void 0 !== t && t;
    return (0, i.jsx)(d.mh, {
        id: r.id,
        children: (e) => {
            let { role: t, ...n } = e;
            return (0, i.jsx)(j.Z, {
                className: a()(q.channel, q.dm),
                role: t,
                focusProps: {
                    ...Q,
                    focusTarget: en,
                    ringTarget: ei
                },
                ref: ei,
                onMouseEnter: ep,
                onMouseLeave: em,
                onMouseDown: ef,
                onContextMenu: ex,
                'aria-setsize': H,
                'aria-posinset': F,
                children: (0, i.jsxs)(p.vjx, {
                    className: a()(q.interactive, {
                        [q.interactiveSystemDM]: eN && eS,
                        [q.interactiveSelected]: u
                    }),
                    as: 'div',
                    onClick: ev,
                    muted: eT,
                    selected: u,
                    children: [
                        (0, i.jsx)(c.rU, {
                            innerRef: en,
                            to: z.Z5c.CHANNEL(z.ME, r.id),
                            className: q.link,
                            'aria-label': (0, b.ZP)({
                                channel: r,
                                unread: ed
                            }),
                            ...n,
                            children: (0, i.jsx)(Z.Z, {
                                avatar: eI(),
                                selected: u,
                                highlighted: ed,
                                muted: eT,
                                subText: eZ(),
                                name: (0, i.jsx)(y.Z, {
                                    tooltipClassName: q.overflowTooltip,
                                    children: eA
                                }),
                                decorators: r.isSystemDM()
                                    ? (0, i.jsx)(C.Z, {
                                          className: q.decorator,
                                          type: C.Z.Types.SYSTEM_DM,
                                          verified: !0
                                      })
                                    : null
                            })
                        }),
                        eh ? (0, i.jsx)(K, {}) : null,
                        ey ? (0, i.jsx)(X, {}) : null,
                        eP ? (0, i.jsx)($, {}) : null,
                        (0, i.jsx)(J, {
                            'aria-label': eb ? W.intl.string(W.t['26C4oq']) : W.intl.string(W.t.jsvgc3),
                            onClick: eb ? eC : eg,
                            onMouseDown: e_
                        })
                    ]
                })
            });
        }
    });
}
let en = (e) => {
    let { channel: t, selected: n, ...l } = e,
        r = (0, h.e7)([V.default], () => V.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: a, isTypingIndicatorEnabled: o, isFacepileEnabled: s } = T.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == r ? void 0 : r.id,
        d = (0, h.cj)(
            [G.Z, D.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (a) {
                        let n = G.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === z.Skl.ONLINE) && (e = z.Skl.ONLINE);
                    }
                } else null != c && (e = G.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? G.Z.getActivities(c) : null,
                    applicationStream: null != c ? D.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && G.Z.isMobileOnline(c)
                };
            },
            [t, c, a]
        ),
        u = (0, L.Z)(null == r ? void 0 : r.id, 'PrivateChannel'),
        p = (0, h.e7)(
            [V.default, O.Z],
            () =>
                t.isMultiUserDM()
                    ? !!o &&
                      F.default.keys(O.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = V.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != r && O.Z.isTyping(t.id, t.getRecipientId()),
            [t, r, o]
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)(et, {
              channel: t,
              selected: n,
              isTyping: p,
              status: d.status === z.Skl.ONLINE ? z.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: s,
              ...l
          })
        : (0, i.jsx)(et, {
              channel: t,
              selected: n,
              user: r,
              entry: u,
              isTyping: p,
              ...l,
              ...d
          });
};

n.d(t, {
    PZ: () => J,
    Qj: () => en,
    ZP: () => ei
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    u = n(568611),
    d = n(91192),
    c = n(873546),
    E = n(442837),
    _ = n(481060),
    C = n(493683),
    h = n(239091),
    T = n(420660),
    I = n(297369),
    S = n(771173),
    g = n(372276),
    A = n(385499),
    p = n(570908),
    f = n(702321),
    N = n(201895),
    L = n(43267),
    P = n(933557),
    Z = n(979264),
    v = n(711406),
    m = n(318870),
    D = n(163889),
    R = n(111028),
    U = n(540059),
    O = n(853856),
    G = n(93687),
    x = n(785232),
    M = n(878857),
    H = n(565640),
    y = n(518950),
    b = n(199902),
    j = n(158776),
    w = n(306680),
    F = n(699516),
    V = n(111583),
    k = n(9156),
    B = n(594174),
    K = n(709054),
    W = n(998502),
    Y = n(981631),
    Q = n(388032),
    z = n(926540);
let X = W.ZP.getEnableHardwareAcceleration() ? _.Xo$ : _.qEK,
    q = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    J = (e) =>
        (0, l.jsx)(_.P3F, {
            className: z.closeButton,
            ...e,
            focusProps: {
                offset: {
                    top: -2,
                    bottom: -2,
                    left: -2,
                    right: 6
                }
            },
            children: (0, l.jsx)(_.Dio, {
                size: 'md',
                color: 'currentColor',
                className: z.closeIcon
            })
        }),
    $ = () =>
        (0, l.jsx)(_.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: z.favoriteIcon
        }),
    ee = () =>
        (0, l.jsx)(_.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: z.favoriteIcon
        }),
    et = () =>
        (0, l.jsx)(_.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: z.favoriteIcon
        });
function en(e) {
    let { route: t, selected: n, icon: i, iconClassName: a, avatarWithTextClassName: s, interactiveClassName: o, text: d, children: E, locationState: C, onClick: h, className: T, role: I, 'aria-posinset': S, 'aria-setsize': g, ...A } = e,
        f = (0, U.Q3)('PrivateChannelLinkButton');
    return (0, l.jsx)(D.Z, {
        className: r()(z.channel, { [z.fullWidth]: c.tq }, T),
        onClick: h,
        role: I,
        focusProps: {
            within: !0,
            ...q
        },
        'aria-posinset': S,
        'aria-setsize': g,
        children: (0, l.jsx)(_.vjx, {
            as: 'div',
            selected: n,
            className: r()(o, z.interactive, z.linkButton, { [z.interactiveSelected]: n }),
            children: (0, l.jsxs)(u.rU, {
                to: {
                    pathname: t,
                    state: C
                },
                className: z.link,
                ...A,
                children: [
                    (0, l.jsx)(p.Z, {
                        selected: n,
                        muted: !1,
                        avatar: (0, l.jsx)(i, {
                            size: f ? 'refresh_sm' : void 0,
                            className: r()(z.linkButtonIcon, a),
                            color: 'currentColor'
                        }),
                        name: d,
                        innerClassName: r()(z.avatarWithText, s)
                    }),
                    E
                ]
            })
        })
    });
}
function el(e) {
    var t;
    let { channel: a, isGDMFacepileEnabled: s, selected: c = !1, user: U, activities: G, applicationStream: H, entry: b, isTyping: j, status: V, isMobile: B, nameplate: K, 'aria-posinset': W, 'aria-setsize': en } = e,
        [el, ei] = i.useState(!1),
        ea = i.useRef(null),
        er = i.useRef(null),
        {
            avatarSrc: es,
            avatarDecorationSrc: eo,
            eventHandlers: eu
        } = (0, y.Z)({
            user: U,
            size: _.EFr.SIZE_32,
            animateOnHover: !(c || el)
        }),
        ed = (0, E.e7)([k.ZP], () => k.ZP.isChannelMuted(a.getGuildId(), a.id)),
        { ignored: ec, blocked: eE } = (0, E.cj)([F.Z], () => ({
            ignored: F.Z.isIgnored(a.getRecipientId()),
            blocked: F.Z.isBlocked(a.getRecipientId())
        })),
        e_ = (0, E.e7)([w.ZP], () => w.ZP.getMentionCount(a.id) > 0),
        eC = (0, P.ZP)(a),
        eh = (0, E.e7)([O.Z], () => O.Z.isFavorite(a.id)),
        eT = () => {
            ei(!0);
        },
        eI = () => {
            ei(!1);
        },
        eS = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), C.Z.closePrivateChannel(a.id, c, t);
        },
        eg = () => {
            C.Z.preload(Y.ME, a.id);
        },
        eA = (e) => {
            e.stopPropagation();
        },
        ep = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = ea.current) || void 0 === t || t.click();
            }
        },
        ef = (e) => {
            a.isMultiUserDM()
                ? (0, h.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('25421'), n.e('70865')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, l.jsx)(e, {
                                  ...t,
                                  channel: a,
                                  selected: c
                              });
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, h.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('33862'), n.e('70205'), n.e('98783'), n.e('75878'), n.e('56826'), n.e('38399')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, l.jsx)(e, {
                              ...t,
                              user: U,
                              channel: a,
                              channelSelected: c
                          });
                  });
        },
        eN = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = Q.intl.formatToPlainString(Q.t.hJ5Ap6, { name: eC }),
                i = Q.intl.format(Q.t.SSIVOj, { name: eC });
            a.isManaged() && ((t = Q.intl.formatToPlainString(Q.t.hVGjER, { name: eC })), (i = Q.intl.format(Q.t.IK1Qvr, { name: eC }))),
                (0, _.ZDy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, l.jsx)(e, {
                            header: t,
                            body: i,
                            onSubmit: eS,
                            ...n
                        });
                });
        },
        eL = () =>
            a.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: z.subtext,
                      children: (0, f.Z)(a.id) ? Q.intl.string(Q.t.FL5T09) : Q.intl.string(Q.t.NnY5lZ)
                  })
                : a.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: z.subtext,
                        children: Q.intl.format(Q.t.CxSA5O, { members: a.recipients.length + 1 })
                    })
                  : (0, I.Z)(G, V)
                    ? (0, l.jsx)(S.Z, {
                          location: 'PrivateChannel',
                          user: U,
                          activities: G,
                          applicationStream: H,
                          animate: el,
                          emojiClassName: ed ? z.mutedEmoji : void 0
                      })
                    : null != b
                      ? (0, l.jsx)(g.Z, { entry: b })
                      : null,
        eP = () => {
            let e = _.EFr.SIZE_32;
            if (a.isMultiUserDM())
                return a.recipients.length >= 2 && s && null == a.icon
                    ? (0, l.jsx)(x.Z, {
                          'aria-hidden': !0,
                          recipients: a.recipients,
                          size: e,
                          isTyping: j,
                          status: V
                      })
                    : (0, l.jsx)(X, {
                          ...eu,
                          src: (0, L.x)(a),
                          'aria-hidden': !0,
                          size: e,
                          status: j ? Y.Skl.ONLINE : V,
                          isTyping: j
                      });
            o()(null != U, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                U.isSystemUser() || (t = (0, T.Z)(G) ? Y.Skl.STREAMING : V),
                (0, l.jsx)(X, {
                    ...eu,
                    size: _.EFr.SIZE_32,
                    src: es,
                    avatarDecoration: eo,
                    status: t,
                    isMobile: B,
                    isTyping: j,
                    'aria-label': U.username,
                    statusTooltip: !0
                })
            );
        },
        eZ = a.isMultiUserDM(),
        ev = a.isSystemDM(),
        em = (0, M.Q)(),
        eD = !eZ && !ev && a.type === Y.d4z.DM,
        eR = eD && (null == U ? void 0 : U.primaryGuild) != null,
        eU = eD && ec,
        eO = eD && eE,
        eG = eR
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eC,
                      (0, l.jsx)(Z.ZP, {
                          primaryGuild: null == U ? void 0 : U.primaryGuild,
                          userId: null == U ? void 0 : U.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: z.clanTag
                      })
                  ]
              })
            : eC,
        ex = null !== (t = ed || eU || eO) && void 0 !== t && t;
    return (0, l.jsx)(d.mh, {
        id: a.id,
        children: (e) => {
            let { role: t, ...n } = e;
            return (0, l.jsx)(v.Z, {
                placement: m.QY.PrivateChannel,
                namePlate: K,
                selected: c,
                hover: el,
                children: (0, l.jsx)(D.Z, {
                    className: r()(z.channel, z.dm),
                    role: t,
                    focusProps: {
                        ...q,
                        focusTarget: ea,
                        ringTarget: er
                    },
                    ref: er,
                    onMouseEnter: eT,
                    onMouseLeave: eI,
                    onMouseDown: eg,
                    onContextMenu: ef,
                    'aria-setsize': en,
                    'aria-posinset': W,
                    children: (0, l.jsxs)(_.vjx, {
                        className: r()(z.interactive, {
                            [z.interactiveSystemDM]: em && ev,
                            [z.interactiveSelected]: c && null == K
                        }),
                        as: 'div',
                        onClick: ep,
                        muted: ex,
                        selected: c,
                        children: [
                            (0, l.jsx)(u.rU, {
                                innerRef: ea,
                                to: Y.Z5c.CHANNEL(Y.ME, a.id),
                                className: z.link,
                                'aria-label': (0, N.ZP)({
                                    channel: a,
                                    unread: e_
                                }),
                                ...n,
                                children: (0, l.jsx)(p.Z, {
                                    avatar: eP(),
                                    selected: c,
                                    highlighted: e_,
                                    muted: ex,
                                    subText: eL(),
                                    name: (0, l.jsx)(R.Z, {
                                        tooltipClassName: z.overflowTooltip,
                                        children: eG
                                    }),
                                    decorators: a.isSystemDM()
                                        ? (0, l.jsx)(A.Z, {
                                              className: z.decorator,
                                              type: A.Z.Types.SYSTEM_DM,
                                              verified: !0
                                          })
                                        : null
                                })
                            }),
                            eh ? (0, l.jsx)($, {}) : null,
                            eU ? (0, l.jsx)(ee, {}) : null,
                            eO ? (0, l.jsx)(et, {}) : null,
                            (0, l.jsx)(J, {
                                'aria-label': eZ ? Q.intl.string(Q.t['26C4oq']) : Q.intl.string(Q.t.jsvgc3),
                                onClick: eZ ? eN : eS,
                                onMouseDown: eA
                            })
                        ]
                    })
                })
            });
        }
    });
}
let ei = (e) => {
    let { channel: t, selected: n, nameplate: i, ...a } = e,
        r = (0, E.e7)([B.default], () => B.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: s, isTypingIndicatorEnabled: o, isFacepileEnabled: u } = G.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        d = null == r ? void 0 : r.id,
        c = (0, E.cj)(
            [j.Z, b.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (s) {
                        let n = j.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === Y.Skl.ONLINE) && (e = Y.Skl.ONLINE);
                    }
                } else null != d && (e = j.Z.getStatus(d));
                return {
                    status: e,
                    activities: null != d ? j.Z.getActivities(d) : null,
                    applicationStream: null != d ? b.Z.getAnyStreamForUser(d) : null,
                    isMobile: null != d && j.Z.isMobileOnline(d)
                };
            },
            [t, d, s]
        ),
        _ = (0, H.Z)(null == r ? void 0 : r.id, 'PrivateChannel'),
        C = (0, E.e7)(
            [B.default, V.Z],
            () =>
                t.isMultiUserDM()
                    ? !!o &&
                      K.default.keys(V.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = B.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != r && V.Z.isTyping(t.id, t.getRecipientId()),
            [t, r, o]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(el, {
              channel: t,
              selected: n,
              isTyping: C,
              status: c.status === Y.Skl.ONLINE ? Y.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: u,
              ...a
          })
        : (0, l.jsx)(el, {
              channel: t,
              selected: n,
              user: r,
              entry: _,
              isTyping: C,
              nameplate: i,
              ...a,
              ...c
          });
};

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
    g = n(771173),
    S = n(372276),
    N = n(385499),
    f = n(570908),
    A = n(702321),
    p = n(201895),
    L = n(43267),
    m = n(933557),
    v = n(979264),
    P = n(711406),
    Z = n(318870),
    D = n(163889),
    R = n(111028),
    U = n(540059),
    O = n(853856),
    x = n(93687),
    G = n(785232),
    M = n(878857),
    b = n(565640),
    j = n(518950),
    y = n(199902),
    H = n(158776),
    w = n(306680),
    F = n(699516),
    k = n(111583),
    V = n(9156),
    B = n(594174),
    K = n(709054),
    W = n(998502),
    z = n(981631),
    Q = n(388032),
    Y = n(926540);
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
            className: Y.closeButton,
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
                className: Y.closeIcon
            })
        }),
    $ = () =>
        (0, l.jsx)(_.r7p, {
            size: 'xs',
            color: 'currentColor',
            className: Y.favoriteIcon
        }),
    ee = () =>
        (0, l.jsx)(_.kZF, {
            size: 'xs',
            color: 'currentColor',
            className: Y.favoriteIcon
        }),
    et = () =>
        (0, l.jsx)(_.t6m, {
            size: 'xs',
            color: 'currentColor',
            className: Y.favoriteIcon
        });
function en(e) {
    let { route: t, selected: n, icon: i, iconClassName: a, avatarWithTextClassName: s, interactiveClassName: o, text: d, children: E, locationState: C, onClick: h, className: T, role: I, 'aria-posinset': g, 'aria-setsize': S, ...N } = e,
        A = (0, U.Q3)('PrivateChannelLinkButton');
    return (0, l.jsx)(D.Z, {
        className: r()(Y.channel, { [Y.fullWidth]: c.tq }, T),
        onClick: h,
        role: I,
        focusProps: {
            within: !0,
            ...q
        },
        'aria-posinset': g,
        'aria-setsize': S,
        children: (0, l.jsx)(_.vjx, {
            as: 'div',
            selected: n,
            className: r()(o, Y.interactive, Y.linkButton, { [Y.interactiveSelected]: n }),
            children: (0, l.jsxs)(u.rU, {
                to: {
                    pathname: t,
                    state: C
                },
                className: Y.link,
                ...N,
                children: [
                    (0, l.jsx)(f.Z, {
                        selected: n,
                        muted: !1,
                        avatar: (0, l.jsx)(i, {
                            size: A ? 'refresh_sm' : void 0,
                            className: r()(Y.linkButtonIcon, a),
                            color: 'currentColor'
                        }),
                        name: d,
                        innerClassName: r()(Y.avatarWithText, s)
                    }),
                    E
                ]
            })
        })
    });
}
function el(e) {
    var t;
    let { channel: a, isGDMFacepileEnabled: s, selected: c = !1, user: U, activities: x, applicationStream: b, entry: y, isTyping: H, status: k, isMobile: B, nameplate: K, 'aria-posinset': W, 'aria-setsize': en } = e,
        [el, ei] = i.useState(!1),
        ea = i.useRef(null),
        er = i.useRef(null),
        {
            avatarSrc: es,
            avatarDecorationSrc: eo,
            eventHandlers: eu
        } = (0, j.Z)({
            user: U,
            size: _.EFr.SIZE_32,
            animateOnHover: !(c || el)
        }),
        ed = (0, E.e7)([V.ZP], () => V.ZP.isChannelMuted(a.getGuildId(), a.id)),
        { ignored: ec, blocked: eE } = (0, E.cj)([F.Z], () => ({
            ignored: F.Z.isIgnored(a.getRecipientId()),
            blocked: F.Z.isBlocked(a.getRecipientId())
        })),
        e_ = (0, E.e7)([w.ZP], () => w.ZP.getMentionCount(a.id) > 0),
        eC = (0, m.ZP)(a),
        eh = (0, E.e7)([O.Z], () => O.Z.isFavorite(a.id)),
        eT = () => {
            ei(!0);
        },
        eI = () => {
            ei(!1);
        },
        eg = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), C.Z.closePrivateChannel(a.id, c, t);
        },
        eS = () => {
            C.Z.preload(z.ME, a.id);
        },
        eN = (e) => {
            e.stopPropagation();
        },
        ef = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = ea.current) || void 0 === t || t.click();
            }
        },
        eA = (e) => {
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
        ep = (e) => {
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
                            onSubmit: eg,
                            ...n
                        });
                });
        },
        eL = () =>
            a.isSystemDM()
                ? (0, l.jsx)('div', {
                      className: Y.subtext,
                      children: (0, A.Z)(a.id) ? Q.intl.string(Q.t.FL5T09) : Q.intl.string(Q.t.NnY5lZ)
                  })
                : a.isMultiUserDM()
                  ? (0, l.jsx)('div', {
                        className: Y.subtext,
                        children: Q.intl.format(Q.t.CxSA5O, { members: a.recipients.length + 1 })
                    })
                  : (0, I.Z)(x, k)
                    ? (0, l.jsx)(g.Z, {
                          location: 'PrivateChannel',
                          user: U,
                          activities: x,
                          applicationStream: b,
                          animate: el,
                          emojiClassName: ed ? Y.mutedEmoji : void 0
                      })
                    : null != y
                      ? (0, l.jsx)(S.Z, { entry: y })
                      : null,
        em = () => {
            let e = _.EFr.SIZE_32;
            if (a.isMultiUserDM())
                return a.recipients.length >= 2 && s && null == a.icon
                    ? (0, l.jsx)(G.Z, {
                          'aria-hidden': !0,
                          recipients: a.recipients,
                          size: e,
                          isTyping: H,
                          status: k
                      })
                    : (0, l.jsx)(X, {
                          ...eu,
                          src: (0, L.x)(a),
                          'aria-hidden': !0,
                          size: e,
                          status: H ? z.Skl.ONLINE : k,
                          isTyping: H
                      });
            o()(null != U, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                U.isSystemUser() || (t = (0, T.Z)(x) ? z.Skl.STREAMING : k),
                (0, l.jsx)(X, {
                    ...eu,
                    size: _.EFr.SIZE_32,
                    src: es,
                    avatarDecoration: eo,
                    status: t,
                    isMobile: B,
                    isTyping: H,
                    'aria-label': U.username,
                    statusTooltip: !0
                })
            );
        },
        ev = a.isMultiUserDM(),
        eP = a.isSystemDM(),
        eZ = (0, M.Q)(),
        eD = !ev && !eP && a.type === z.d4z.DM,
        eR = eD && (null == U ? void 0 : U.primaryGuild) != null,
        eU = eD && ec,
        eO = eD && eE,
        ex = eR
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eC,
                      (0, l.jsx)(v.ZP, {
                          primaryGuild: null == U ? void 0 : U.primaryGuild,
                          userId: null == U ? void 0 : U.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: Y.clanTag
                      })
                  ]
              })
            : eC,
        eG = null !== (t = ed || eU || eO) && void 0 !== t && t;
    return (0, l.jsx)(d.mh, {
        id: a.id,
        children: (e) => {
            let { role: t, ...n } = e;
            return (0, l.jsx)(P.Z, {
                placement: Z.QY.PrivateChannel,
                namePlate: K,
                selected: c,
                hover: el,
                children: (0, l.jsx)(D.Z, {
                    className: r()(Y.channel, Y.dm),
                    role: t,
                    focusProps: {
                        ...q,
                        focusTarget: ea,
                        ringTarget: er
                    },
                    ref: er,
                    onMouseEnter: eT,
                    onMouseLeave: eI,
                    onMouseDown: eS,
                    onContextMenu: eA,
                    'aria-setsize': en,
                    'aria-posinset': W,
                    children: (0, l.jsxs)(_.vjx, {
                        className: r()(Y.interactive, {
                            [Y.interactiveSystemDM]: eZ && eP,
                            [Y.interactiveSelected]: c && null == K
                        }),
                        as: 'div',
                        onClick: ef,
                        muted: eG,
                        selected: c,
                        children: [
                            (0, l.jsx)(u.rU, {
                                innerRef: ea,
                                to: z.Z5c.CHANNEL(z.ME, a.id),
                                className: Y.link,
                                'aria-label': (0, p.ZP)({
                                    channel: a,
                                    unread: e_
                                }),
                                ...n,
                                children: (0, l.jsx)(f.Z, {
                                    avatar: em(),
                                    selected: c,
                                    highlighted: e_,
                                    muted: eG,
                                    subText: eL(),
                                    name: (0, l.jsx)(R.Z, {
                                        tooltipClassName: Y.overflowTooltip,
                                        children: ex
                                    }),
                                    decorators: a.isSystemDM()
                                        ? (0, l.jsx)(N.Z, {
                                              className: Y.decorator,
                                              type: N.Z.Types.SYSTEM_DM,
                                              verified: !0
                                          })
                                        : null
                                })
                            }),
                            eh ? (0, l.jsx)($, {}) : null,
                            eU ? (0, l.jsx)(ee, {}) : null,
                            eO ? (0, l.jsx)(et, {}) : null,
                            (0, l.jsx)(J, {
                                'aria-label': ev ? Q.intl.string(Q.t['26C4oq']) : Q.intl.string(Q.t.jsvgc3),
                                onClick: ev ? ep : eg,
                                onMouseDown: eN
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
        { isStatusIndicatorEnabled: s, isTypingIndicatorEnabled: o, isFacepileEnabled: u } = x.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        d = null == r ? void 0 : r.id,
        c = (0, E.cj)(
            [H.Z, y.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (s) {
                        let n = H.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === z.Skl.ONLINE) && (e = z.Skl.ONLINE);
                    }
                } else null != d && (e = H.Z.getStatus(d));
                return {
                    status: e,
                    activities: null != d ? H.Z.getActivities(d) : null,
                    applicationStream: null != d ? y.Z.getAnyStreamForUser(d) : null,
                    isMobile: null != d && H.Z.isMobileOnline(d)
                };
            },
            [t, d, s]
        ),
        _ = (0, b.Z)(null == r ? void 0 : r.id, 'PrivateChannel'),
        C = (0, E.e7)(
            [B.default, k.Z],
            () =>
                t.isMultiUserDM()
                    ? !!o &&
                      K.default.keys(k.Z.getTypingUsers(t.id)).some((e) => {
                          var t;
                          return e !== (null === (t = B.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                      })
                    : null != r && k.Z.isTyping(t.id, t.getRecipientId()),
            [t, r, o]
        );
    return t.isMultiUserDM()
        ? (0, l.jsx)(el, {
              channel: t,
              selected: n,
              isTyping: C,
              status: c.status === z.Skl.ONLINE ? z.Skl.ONLINE : void 0,
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

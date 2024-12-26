n.d(t, {
    PZ: function () {
        return Q;
    },
    Qj: function () {
        return $;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    c = n(568611),
    u = n(91192),
    d = n(873546),
    h = n(442837),
    p = n(481060),
    f = n(493683),
    m = n(239091),
    g = n(420660),
    v = n(385499),
    C = n(570908),
    x = n(702321),
    Z = n(201895),
    I = n(43267),
    _ = n(933557),
    b = n(979264),
    S = n(588688),
    N = n(163889),
    E = n(111028),
    y = n(540059),
    j = n(853856),
    T = n(93687),
    P = n(785232),
    A = n(878857),
    w = n(565640),
    M = n(518950),
    L = n(199902),
    R = n(158776),
    D = n(306680),
    G = n(699516),
    k = n(111583),
    B = n(9156),
    U = n(594174),
    O = n(709054),
    V = n(998502),
    H = n(788307),
    F = n(981631),
    W = n(388032),
    z = n(926540);
let q = V.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
    Y = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    Q = (e) =>
        (0, i.jsx)(p.Clickable, {
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
            children: (0, i.jsx)(p.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: z.closeIcon
            })
        }),
    J = () =>
        (0, i.jsx)(p.StarIcon, {
            size: 'xs',
            color: 'currentColor',
            className: z.favoriteIcon
        }),
    K = () =>
        (0, i.jsx)(p.EyeSlashIcon, {
            size: 'xs',
            color: 'currentColor',
            className: z.favoriteIcon
        }),
    X = () =>
        (0, i.jsx)(p.DenyIcon, {
            size: 'xs',
            color: 'currentColor',
            className: z.favoriteIcon
        });
function $(e) {
    let { route: t, selected: n, icon: l, iconClassName: r, avatarWithTextClassName: o, interactiveClassName: s, text: u, children: h, locationState: f, onClick: m, className: g, role: v, 'aria-posinset': x, 'aria-setsize': Z, ...I } = e,
        _ = (0, y.Q3)('PrivateChannelLinkButton');
    return (0, i.jsx)(N.Z, {
        className: a()(z.channel, { [z.fullWidth]: d.tq }, g),
        onClick: m,
        role: v,
        focusProps: {
            within: !0,
            ...Y
        },
        'aria-posinset': x,
        'aria-setsize': Z,
        children: (0, i.jsx)(p.Interactive, {
            as: 'div',
            selected: n,
            className: a()(s, z.interactive, z.linkButton, { [z.interactiveSelected]: n }),
            children: (0, i.jsxs)(c.rU, {
                to: {
                    pathname: t,
                    state: f
                },
                className: z.link,
                ...I,
                children: [
                    (0, i.jsx)(C.Z, {
                        selected: n,
                        muted: !1,
                        avatar: (0, i.jsx)(l, {
                            size: _ ? 'refresh_sm' : void 0,
                            className: a()(z.linkButtonIcon, r),
                            color: 'currentColor'
                        }),
                        name: u,
                        innerClassName: a()(z.avatarWithText, o)
                    }),
                    h
                ]
            })
        })
    });
}
function ee(e) {
    var t;
    let { channel: r, isGDMFacepileEnabled: o, selected: d = !1, user: y, activities: T, applicationStream: w, entry: L, isTyping: R, status: k, isMobile: U, 'aria-posinset': O, 'aria-setsize': V } = e,
        [$, ee] = l.useState(!1),
        et = l.useRef(null),
        en = l.useRef(null),
        {
            avatarSrc: ei,
            avatarDecorationSrc: el,
            eventHandlers: er
        } = (0, M.Z)({
            user: y,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(d || $)
        }),
        ea = (0, h.e7)([B.ZP], () => B.ZP.isChannelMuted(r.getGuildId(), r.id)),
        { ignored: eo, blocked: es } = (0, h.cj)([G.Z], () => ({
            ignored: G.Z.isIgnored(r.getRecipientId()),
            blocked: G.Z.isBlocked(r.getRecipientId())
        })),
        ec = (0, h.e7)([D.ZP], () => D.ZP.getMentionCount(r.id) > 0),
        eu = (0, _.ZP)(r),
        ed = (0, h.e7)([j.Z], () => j.Z.isFavorite(r.id)),
        eh = () => {
            ee(!0);
        },
        ep = () => {
            ee(!1);
        },
        ef = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), f.Z.closePrivateChannel(r.id, d, t);
        },
        em = () => {
            f.Z.preload(F.ME, r.id);
        },
        eg = (e) => {
            e.stopPropagation();
        },
        ev = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = et.current) || void 0 === t || t.click();
            }
        },
        eC = (e) => {
            r.isMultiUserDM()
                ? (0, m.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, i.jsx)(e, {
                                  ...t,
                                  channel: r,
                                  selected: d
                              });
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, m.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('5606')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              user: y,
                              channel: r,
                              channelSelected: d
                          });
                  });
        },
        ex = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = W.intl.formatToPlainString(W.t.hJ5Ap6, { name: eu }),
                l = W.intl.format(W.t.SSIVOj, { name: eu });
            r.isManaged() && ((t = W.intl.formatToPlainString(W.t.hVGjER, { name: eu })), (l = W.intl.format(W.t.IK1Qvr, { name: eu }))),
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, i.jsx)(e, {
                            header: t,
                            body: l,
                            onSubmit: ef,
                            ...n
                        });
                });
        },
        eZ = () => {
            let e = {
                className: z.activity,
                textClassName: z.activityText,
                emojiClassName: a()(z.activityEmoji, { [z.mutedEmoji]: ea })
            };
            return r.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: z.subtext,
                      children: (0, x.Z)(r.id) ? W.intl.string(W.t.FL5T09) : W.intl.string(W.t.NnY5lZ)
                  })
                : r.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: z.subtext,
                        children: W.intl.format(W.t.CxSA5O, { members: r.recipients.length + 1 })
                    })
                  : k !== F.Skl.OFFLINE && k !== F.Skl.INVISIBLE && null != T && T.length > 0
                    ? (0, i.jsx)(H.ZP, {
                          ...e,
                          activities: T,
                          applicationStream: w,
                          animate: $,
                          hideTooltip: !0,
                          user: y
                      })
                    : null != L
                      ? (0, i.jsx)(S.Z, {
                            ...e,
                            entry: L
                        })
                      : null;
        },
        eI = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (r.isMultiUserDM())
                return r.recipients.length >= 2 && o && null == r.icon
                    ? (0, i.jsx)(P.Z, {
                          'aria-hidden': !0,
                          recipients: r.recipients,
                          size: e,
                          isTyping: R,
                          status: k
                      })
                    : (0, i.jsx)(q, {
                          ...er,
                          src: (0, I.x)(r),
                          'aria-hidden': !0,
                          size: e,
                          status: R ? F.Skl.ONLINE : k,
                          isTyping: R
                      });
            s()(null != y, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                !y.isSystemUser() && (t = (0, g.Z)(T) ? F.Skl.STREAMING : k),
                (0, i.jsx)(q, {
                    ...er,
                    size: p.AvatarSizes.SIZE_32,
                    src: ei,
                    avatarDecoration: el,
                    status: t,
                    isMobile: U,
                    isTyping: R,
                    'aria-label': y.username,
                    statusTooltip: !0
                })
            );
        },
        e_ = r.isMultiUserDM(),
        eb = r.isSystemDM(),
        eS = (0, A.Q)(),
        eN = !e_ && !eb && r.type === F.d4z.DM,
        eE = eN && (null == y ? void 0 : y.primaryGuild) != null,
        ey = eN && eo,
        ej = eN && es,
        eT = eE
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eu,
                      (0, i.jsx)(b.ZP, {
                          primaryGuild: null == y ? void 0 : y.primaryGuild,
                          userId: null == y ? void 0 : y.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: z.clanTag
                      })
                  ]
              })
            : eu,
        eP = null !== (t = ea || ey || ej) && void 0 !== t && t;
    return (0, i.jsx)(u.mh, {
        id: r.id,
        children: (e) => {
            let { role: t, ...n } = e;
            return (0, i.jsx)(N.Z, {
                className: a()(z.channel, z.dm),
                role: t,
                focusProps: {
                    ...Y,
                    focusTarget: et,
                    ringTarget: en
                },
                ref: en,
                onMouseEnter: eh,
                onMouseLeave: ep,
                onMouseDown: em,
                onContextMenu: eC,
                'aria-setsize': V,
                'aria-posinset': O,
                children: (0, i.jsxs)(p.Interactive, {
                    className: a()(z.interactive, {
                        [z.interactiveSystemDM]: eS && eb,
                        [z.interactiveSelected]: d
                    }),
                    as: 'div',
                    onClick: ev,
                    muted: eP,
                    selected: d,
                    children: [
                        (0, i.jsx)(c.rU, {
                            innerRef: et,
                            to: F.Z5c.CHANNEL(F.ME, r.id),
                            className: z.link,
                            'aria-label': (0, Z.ZP)({
                                channel: r,
                                unread: ec
                            }),
                            ...n,
                            children: (0, i.jsx)(C.Z, {
                                avatar: eI(),
                                selected: d,
                                highlighted: ec,
                                muted: eP,
                                subText: eZ(),
                                name: (0, i.jsx)(E.Z, {
                                    tooltipClassName: z.overflowTooltip,
                                    children: eT
                                }),
                                decorators: r.isSystemDM()
                                    ? (0, i.jsx)(v.Z, {
                                          className: z.decorator,
                                          type: v.Z.Types.SYSTEM_DM,
                                          verified: !0
                                      })
                                    : null
                            })
                        }),
                        ed ? (0, i.jsx)(J, {}) : null,
                        ey ? (0, i.jsx)(K, {}) : null,
                        ej ? (0, i.jsx)(X, {}) : null,
                        (0, i.jsx)(Q, {
                            'aria-label': e_ ? W.intl.string(W.t['26C4oq']) : W.intl.string(W.t.jsvgc3),
                            onClick: e_ ? ex : ef,
                            onMouseDown: eg
                        })
                    ]
                })
            });
        }
    });
}
t.ZP = (e) => {
    let { channel: t, selected: n, ...l } = e,
        r = (0, h.e7)([U.default], () => U.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: a, isTypingIndicatorEnabled: o, isFacepileEnabled: s } = T.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == r ? void 0 : r.id,
        u = (0, h.cj)(
            [R.Z, L.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (a) {
                        let n = R.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === F.Skl.ONLINE) && (e = F.Skl.ONLINE);
                    }
                } else null != c && (e = R.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? R.Z.getActivities(c) : null,
                    applicationStream: null != c ? L.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && R.Z.isMobileOnline(c)
                };
            },
            [t, c, a]
        ),
        d = (0, w.Z)(null == r ? void 0 : r.id, 'PrivateChannel'),
        p = (0, h.e7)(
            [U.default, k.Z],
            () => {
                if (t.isMultiUserDM())
                    return (
                        !!o &&
                        O.default.keys(k.Z.getTypingUsers(t.id)).some((e) => {
                            var t;
                            return e !== (null === (t = U.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                        })
                    );
                if (null != r) return k.Z.isTyping(t.id, t.getRecipientId());
                return !1;
            },
            [t, r, o]
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)(ee, {
              channel: t,
              selected: n,
              isTyping: p,
              status: u.status === F.Skl.ONLINE ? F.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: s,
              ...l
          })
        : (0, i.jsx)(ee, {
              channel: t,
              selected: n,
              user: r,
              entry: d,
              isTyping: p,
              ...l,
              ...u
          });
};

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
    m = n(493683),
    f = n(239091),
    g = n(420660),
    v = n(747017),
    C = n(372276),
    x = n(385499),
    I = n(570908),
    _ = n(702321),
    Z = n(201895),
    b = n(43267),
    S = n(933557),
    N = n(979264),
    E = n(163889),
    y = n(111028),
    j = n(540059),
    T = n(853856),
    A = n(93687),
    P = n(785232),
    w = n(878857),
    M = n(565640),
    L = n(518950),
    R = n(199902),
    D = n(158776),
    G = n(306680),
    k = n(699516),
    B = n(111583),
    U = n(9156),
    O = n(594174),
    V = n(709054),
    H = n(998502),
    F = n(981631),
    W = n(388032),
    z = n(926540);
let q = H.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
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
    let { route: t, selected: n, icon: l, iconClassName: r, avatarWithTextClassName: o, interactiveClassName: s, text: u, children: h, locationState: m, onClick: f, className: g, role: v, 'aria-posinset': C, 'aria-setsize': x, ..._ } = e,
        Z = (0, j.Q3)('PrivateChannelLinkButton');
    return (0, i.jsx)(E.Z, {
        className: a()(z.channel, { [z.fullWidth]: d.tq }, g),
        onClick: f,
        role: v,
        focusProps: {
            within: !0,
            ...Y
        },
        'aria-posinset': C,
        'aria-setsize': x,
        children: (0, i.jsx)(p.Interactive, {
            as: 'div',
            selected: n,
            className: a()(s, z.interactive, z.linkButton, { [z.interactiveSelected]: n }),
            children: (0, i.jsxs)(c.rU, {
                to: {
                    pathname: t,
                    state: m
                },
                className: z.link,
                ..._,
                children: [
                    (0, i.jsx)(I.Z, {
                        selected: n,
                        muted: !1,
                        avatar: (0, i.jsx)(l, {
                            size: Z ? 'refresh_sm' : void 0,
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
    let { channel: r, isGDMFacepileEnabled: o, selected: d = !1, user: j, activities: A, applicationStream: M, entry: R, isTyping: D, status: B, isMobile: O, 'aria-posinset': V, 'aria-setsize': H } = e,
        [$, ee] = l.useState(!1),
        et = l.useRef(null),
        en = l.useRef(null),
        {
            avatarSrc: ei,
            avatarDecorationSrc: el,
            eventHandlers: er
        } = (0, L.Z)({
            user: j,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(d || $)
        }),
        ea = (0, h.e7)([U.ZP], () => U.ZP.isChannelMuted(r.getGuildId(), r.id)),
        { ignored: eo, blocked: es } = (0, h.cj)([k.Z], () => ({
            ignored: k.Z.isIgnored(r.getRecipientId()),
            blocked: k.Z.isBlocked(r.getRecipientId())
        })),
        ec = (0, h.e7)([G.ZP], () => G.ZP.getMentionCount(r.id) > 0),
        eu = (0, S.ZP)(r),
        ed = (0, h.e7)([T.Z], () => T.Z.isFavorite(r.id)),
        eh = () => {
            ee(!0);
        },
        ep = () => {
            ee(!1);
        },
        em = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), m.Z.closePrivateChannel(r.id, d, t);
        },
        ef = () => {
            m.Z.preload(F.ME, r.id);
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
                ? (0, f.jW)(
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
                : (0, f.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('5606')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              user: j,
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
                            onSubmit: em,
                            ...n
                        });
                });
        },
        eI = () => {
            let e = {
                className: z.activity,
                textClassName: z.activityText,
                emojiClassName: a()(z.activityEmoji, { [z.mutedEmoji]: ea })
            };
            return r.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: z.subtext,
                      children: (0, _.Z)(r.id) ? W.intl.string(W.t.FL5T09) : W.intl.string(W.t.NnY5lZ)
                  })
                : r.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: z.subtext,
                        children: W.intl.format(W.t.CxSA5O, { members: r.recipients.length + 1 })
                    })
                  : B !== F.Skl.OFFLINE && B !== F.Skl.INVISIBLE && null != A && A.length > 0
                    ? (0, i.jsx)(v.Z, {
                          ...e,
                          activities: A,
                          applicationStream: M,
                          animate: $,
                          hideTooltip: !0,
                          user: j
                      })
                    : null != R
                      ? (0, i.jsx)(C.Z, {
                            ...e,
                            entry: R
                        })
                      : null;
        },
        e_ = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (r.isMultiUserDM())
                return r.recipients.length >= 2 && o && null == r.icon
                    ? (0, i.jsx)(P.Z, {
                          'aria-hidden': !0,
                          recipients: r.recipients,
                          size: e,
                          isTyping: D,
                          status: B
                      })
                    : (0, i.jsx)(q, {
                          ...er,
                          src: (0, b.x)(r),
                          'aria-hidden': !0,
                          size: e,
                          status: D ? F.Skl.ONLINE : B,
                          isTyping: D
                      });
            s()(null != j, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                !j.isSystemUser() && (t = (0, g.Z)(A) ? F.Skl.STREAMING : B),
                (0, i.jsx)(q, {
                    ...er,
                    size: p.AvatarSizes.SIZE_32,
                    src: ei,
                    avatarDecoration: el,
                    status: t,
                    isMobile: O,
                    isTyping: D,
                    'aria-label': j.username,
                    statusTooltip: !0
                })
            );
        },
        eZ = r.isMultiUserDM(),
        eb = r.isSystemDM(),
        eS = (0, w.Q)(),
        eN = !eZ && !eb && r.type === F.d4z.DM,
        eE = eN && (null == j ? void 0 : j.primaryGuild) != null,
        ey = eN && eo,
        ej = eN && es,
        eT = eE
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eu,
                      (0, i.jsx)(N.ZP, {
                          primaryGuild: null == j ? void 0 : j.primaryGuild,
                          userId: null == j ? void 0 : j.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: z.clanTag
                      })
                  ]
              })
            : eu,
        eA = null !== (t = ea || ey || ej) && void 0 !== t && t;
    return (0, i.jsx)(u.mh, {
        id: r.id,
        children: (e) => {
            let { role: t, ...n } = e;
            return (0, i.jsx)(E.Z, {
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
                onMouseDown: ef,
                onContextMenu: eC,
                'aria-setsize': H,
                'aria-posinset': V,
                children: (0, i.jsxs)(p.Interactive, {
                    className: a()(z.interactive, {
                        [z.interactiveSystemDM]: eS && eb,
                        [z.interactiveSelected]: d
                    }),
                    as: 'div',
                    onClick: ev,
                    muted: eA,
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
                            children: (0, i.jsx)(I.Z, {
                                avatar: e_(),
                                selected: d,
                                highlighted: ec,
                                muted: eA,
                                subText: eI(),
                                name: (0, i.jsx)(y.Z, {
                                    tooltipClassName: z.overflowTooltip,
                                    children: eT
                                }),
                                decorators: r.isSystemDM()
                                    ? (0, i.jsx)(x.Z, {
                                          className: z.decorator,
                                          type: x.Z.Types.SYSTEM_DM,
                                          verified: !0
                                      })
                                    : null
                            })
                        }),
                        ed ? (0, i.jsx)(J, {}) : null,
                        ey ? (0, i.jsx)(K, {}) : null,
                        ej ? (0, i.jsx)(X, {}) : null,
                        (0, i.jsx)(Q, {
                            'aria-label': eZ ? W.intl.string(W.t['26C4oq']) : W.intl.string(W.t.jsvgc3),
                            onClick: eZ ? ex : em,
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
        r = (0, h.e7)([O.default], () => O.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: a, isTypingIndicatorEnabled: o, isFacepileEnabled: s } = A.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == r ? void 0 : r.id,
        u = (0, h.cj)(
            [D.Z, R.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (a) {
                        let n = D.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === F.Skl.ONLINE) && (e = F.Skl.ONLINE);
                    }
                } else null != c && (e = D.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? D.Z.getActivities(c) : null,
                    applicationStream: null != c ? R.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && D.Z.isMobileOnline(c)
                };
            },
            [t, c, a]
        ),
        d = (0, M.Z)(null == r ? void 0 : r.id, 'PrivateChannel'),
        p = (0, h.e7)(
            [O.default, B.Z],
            () => {
                if (t.isMultiUserDM())
                    return (
                        !!o &&
                        V.default.keys(B.Z.getTypingUsers(t.id)).some((e) => {
                            var t;
                            return e !== (null === (t = O.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                        })
                    );
                if (null != r) return B.Z.isTyping(t.id, t.getRecipientId());
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

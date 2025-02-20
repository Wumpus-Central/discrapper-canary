n.d(t, {
    ZP: () => en,
    lX: () => et
}),
    n(47120),
    n(653041),
    n(789020);
var i = n(200651),
    r = n(192379),
    o = n(512722),
    l = n.n(o),
    a = n(661869),
    s = n(876215),
    c = n(884439),
    u = n(442837),
    d = n(481060),
    p = n(278323),
    f = n(24124),
    h = n(493683),
    g = n(13245),
    _ = n(99690),
    m = n(493773),
    v = n(549879),
    O = n(620662),
    b = n(835473),
    y = n(194082),
    E = n(297781),
    x = n(656709),
    I = n(567409),
    S = n(225559),
    C = n(703656),
    j = n(93127),
    w = n(814443),
    Z = n(752048),
    N = n(409057),
    P = n(199902),
    T = n(592125),
    k = n(293273),
    A = n(158776),
    D = n(699516),
    R = n(594174),
    L = n(801077),
    W = n(237997),
    M = n(630388),
    z = n(5192),
    V = n(709054),
    U = n(444295),
    F = n(388627),
    B = n(981631),
    G = n(388032),
    H = n(52281);
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e) {
    let { entry: t, currentUserActivity: n, idx: o } = e,
        a = (0, u.e7)([R.default], () => R.default.getUser(t.author_id)),
        [s, c] = r.useState('unsent'),
        [f, _] = r.useState(!1);
    r.useEffect(() => {
        if ('sent' === s) {
            let e = setTimeout(() => _(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [s]);
    let m = null != n && (0, O.Z)(n, B.xjy.JOIN),
        b = async (e) => {
            if (null != a && 'unsent' === s) {
                e.stopPropagation();
                try {
                    if ((c('sending'), m))
                        await p.Z.sendActivityInviteUser({
                            type: B.mFx.JOIN,
                            userId: a.id,
                            activity: n,
                            location: B.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await h.Z.getOrEnsurePrivateChannel(a.id),
                            n = null !== (i = T.Z.getChannel(e)) && void 0 !== i ? i : null;
                        l()(null != n, 'Send channel must be defined'),
                            (0, C.uL)(B.Z5c.CHANNEL(n.guild_id, n.id)),
                            (0, v.i)(B.IlC.OVERLAY),
                            !0 === t.extra.fake_inventory_item
                                ? await (0, x.k)({
                                      channel: n,
                                      content: G.NW.string(G.t.DwAcMz),
                                      whenReady: !0
                                  })
                                : await (0, x.p)({
                                      channel: n,
                                      content: G.NW.string(G.t.DwAcMz),
                                      entry: t,
                                      whenReady: !0
                                  });
                    }
                    g.Z.track(B.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: a.id,
                        target_content_entry_id: t.id,
                        target_index: o
                    }),
                        (0, U.Ws)(B.Odu.ACTIVITY, {
                            type: U.Qu.INVITE,
                            value: U.bk.INVITE_SENT,
                            userId: a.id
                        }),
                        c('sent');
                } catch (e) {
                    c('unsent');
                }
            }
        },
        y = async () => {
            var e;
            if (null == a) return;
            let t = await h.Z.getOrEnsurePrivateChannel(a.id),
                n = null !== (e = T.Z.getChannel(t)) && void 0 !== e ? e : null;
            l()(null != n, 'Send channel must be defined'),
                (0, C.uL)(B.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, v.i)(B.IlC.OVERLAY),
                (0, U.Ws)(B.Odu.ACTIVITY, {
                    type: U.Qu.REDIRECT,
                    value: U.bk.CHAT,
                    userId: a.id
                });
        },
        E = m ? G.NW.string(G.t['3fRyS0']) : G.NW.string(G.t.y9eo7e),
        I = m
            ? (0, i.jsx)(d.ejJ, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(d.Uuj, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(d.ua7, {
        text: E,
        'aria-label': E,
        children: (e) =>
            (0, i.jsx)(
                d.zxk,
                Q(Y({}, e), {
                    submitting: 'sending' === s,
                    onClick: f ? y : b,
                    className: H.inviteButton,
                    wrapperClassName: H.inviteButtonWrapper,
                    innerClassName: H.inviteButtonInner,
                    color: d.Ttl.TRANSPARENT,
                    look: d.iLD.FILLED,
                    size: d.PhG.ICON,
                    grow: !1,
                    children:
                        'sent' === s
                            ? f
                                ? (0, i.jsx)(d.kBi, {
                                      color: 'currentColor',
                                      size: 'sm'
                                  })
                                : (0, i.jsx)(d.kSu, {
                                      color: 'currentColor',
                                      size: 'sm'
                                  })
                            : I
                })
            )
    });
}
function X(e) {
    var t;
    let { entry: n, currentUserActivity: o } = e,
        l = (0, u.e7)([R.default], () => R.default.getUser(n.author_id)),
        a = null !== (t = null == o ? void 0 : o.application_id) && void 0 !== t ? t : n.extra.application_id,
        s = (0, u.e7)([A.Z], () => (null != l ? A.Z.getApplicationActivity(l.id, a) : null), [a, l]),
        [c, f] = r.useState('unsent');
    if (!(null != s && (0, O.Z)(s, B.xjy.JOIN))) return null;
    let h = async (e) => {
            if (null != l && 'unsent' === c) {
                e.stopPropagation();
                try {
                    f('sending'),
                        await p.Z.sendActivityInviteUser({
                            type: B.mFx.JOIN_REQUEST,
                            userId: l.id,
                            activity: s,
                            location: B.Sbl.UNLOCKED_OVERLAY
                        }),
                        (0, U.Ws)(B.Odu.ACTIVITY, {
                            type: U.Qu.INVITE,
                            value: U.bk.JOIN_REQUEST_SENT,
                            userId: l.id
                        }),
                        f('sent');
                } catch (e) {
                    f('unsent');
                }
            }
        },
        g = G.NW.string(G.t.OKsSCQ);
    return (0, i.jsx)(d.ua7, {
        text: g,
        'aria-label': g,
        children: (e) =>
            (0, i.jsx)(
                d.zxk,
                Q(Y({}, e), {
                    submitting: 'sending' === c,
                    onClick: h,
                    className: H.inviteButton,
                    wrapperClassName: H.inviteButtonWrapper,
                    innerClassName: H.inviteButtonInner,
                    color: d.Ttl.TRANSPARENT,
                    look: d.iLD.FILLED,
                    size: d.PhG.ICON,
                    grow: !1,
                    children:
                        'sent' === c
                            ? (0, i.jsx)(d.kSu, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, i.jsx)(d.V9, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                })
            )
    });
}
function J(e) {
    let { entry: t, currentUserActivity: n, idx: r } = e,
        o = (0, u.e7)([R.default], () => R.default.getUser(t.author_id)),
        l = (0, u.e7)([P.Z], () => (null != o ? P.Z.getAnyStreamForUser(o.id) : null), [o]),
        { isMobileOnline: a, status: s } = (0, u.cj)(
            [A.Z],
            () =>
                null == o
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: A.Z.isMobileOnline(o.id),
                          status: A.Z.getStatus(o.id)
                      },
            [o]
        );
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              className: H.row,
              children: [
                  (0, i.jsx)(_.Z, {
                      className: H.avatar,
                      user: o,
                      isMobile: a,
                      status: s
                  }),
                  (0, i.jsxs)('div', {
                      className: H.details,
                      children: [
                          (0, i.jsxs)('div', {
                              className: H.usernameWrapper,
                              children: [
                                  (0, i.jsx)(d.Text, {
                                      className: H.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: z.ZP.getName(void 0, void 0, o)
                                  }),
                                  null != l && (0, i.jsx)(y.ZP, { className: H.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(E.Gk, {
                              location: E.Gt.OVERLAY,
                              className: H.badgesContainer,
                              children: [E.OV, E.wO, E.f, E.v1, E.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(X, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r
                  }),
                  (0, i.jsx)(K, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r
                  })
              ]
          });
}
function q(e) {
    let { entries: t, currentUserActivity: n } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                J,
                {
                    idx: t,
                    entry: e,
                    currentUserActivity: n
                },
                t
            )
        )
    });
}
function $(e, t) {
    return t.reduce((t, n) => {
        if (n.type !== B.GOo.USER) return t;
        let i = n.party.currentActivities;
        if (0 === i.length) return t;
        for (let n of i) n.game.id === e && null != n.activity && t.push(n);
        return t;
    }, []);
}
function ee(e) {
    let { gamingId: t, maxUserShowCount: n, userAffinityThresholdV1: i = 35, userAffinityThresholdV2: o = 0.0029 } = e,
        l = (0, I.Ns)(t);
    (0, m.ZP)(() => {
        (0, j.W)(), (0, j._)();
    });
    let d = (0, u.e7)([k.Z], () => (null == t ? null : k.Z.getApplicationActivity(t)), [t]),
        p = (0, u.Wu)(
            [L.Z, D.Z, w.Z, Z.Z],
            () => {
                if (null == t) return [];
                let e = L.Z.nowPlayingCards,
                    n = {
                        v1: i,
                        v2: o
                    };
                return $(t, e).filter((e) => {
                    var t;
                    let i = e.activityUser.id,
                        r = D.Z.isFriend(i);
                    return (
                        !!(function (e, t, n) {
                            let { v1: i } = n;
                            return null == e ? t : e > i || t;
                        })(null === (t = w.Z.getUserAffinity(i)) || void 0 === t ? void 0 : t.affinity, r, n) ||
                        (function (e, t, n) {
                            let { v2: i } = n;
                            if (null == e) return t;
                            let { communicationProbability: r, dmProbability: o, serverMessageProbability: l, vcProbability: a } = e;
                            switch (!0) {
                                case r > i:
                                case o > i:
                                case l > i:
                                case a > i:
                                    return !0;
                                default:
                                    return t;
                            }
                        })(Z.Z.getUserAffinity(i), r, n)
                    );
                });
            },
            [t, i, o]
        );
    return (
        (0, m.ZP)(() => (S.L(), () => S.v())),
        {
            entries: r.useMemo(() => {
                let e = l.filter((e) => !p.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...p.map((e) =>
                            (function (e) {
                                var t, n, i, r, o, l, u;
                                let d = null !== (o = null === (n = e.activity) || void 0 === n ? void 0 : null === (t = n.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== o ? o : Date.now();
                                return {
                                    id: V.default.fromTimestamp(d),
                                    author_id: e.activityUser.id,
                                    extra: {
                                        type: 'played_game_extra',
                                        game_name: null !== (l = null === (i = e.activity) || void 0 === i ? void 0 : i.name) && void 0 !== l ? l : e.game.name,
                                        application_id: null !== (u = null === (r = e.activity) || void 0 === r ? void 0 : r.application_id) && void 0 !== u ? u : e.game.id,
                                        fake_inventory_item: !0
                                    },
                                    content_type: s.s.PLAYED_GAME,
                                    author_type: a.i.USER,
                                    participants: e.playingMembers.map((e) => e.id),
                                    traits: [
                                        {
                                            type: c.N.IS_LIVE,
                                            is_live: !0
                                        }
                                    ]
                                };
                            })(e)
                        ),
                        ...e
                    ];
                return null != n ? t.slice(0, n) : t;
            }, [l, p, n]),
            currentUserActivity: d
        }
    );
}
function et(e) {
    let t = ee(e);
    return (0, i.jsx)(q, Y({}, t));
}
function en(e) {
    let { locked: t } = e,
        n = (0, F.II)(),
        o = null == n ? void 0 : n.id,
        l = null == n ? void 0 : n.altId,
        a = (0, I.Ns)(o),
        s = (0, u.e7)([R.default], () => R.default.getCurrentUser()),
        p = null != l ? l : o,
        h = (0, u.e7)([k.Z], () => (null == p ? null : k.Z.getApplicationActivity(p)), [p]),
        g = (0, u.e7)([L.Z], () => (null != p ? $(p, L.Z.nowPlayingCards) : []), [p]);
    (0, m.ZP)(() => (S.L(), () => S.v()));
    let _ = null != h && (0, O.Z)(h, B.xjy.JOIN),
        v = (0, b.q)(null == h ? void 0 : h.application_id),
        y = null != v && (0, M.yE)(v.flags, B.udG.EMBEDDED),
        E = ee({
            gamingId: p,
            userAffinityThresholdV1: 17.5,
            userAffinityThresholdV2: 0.00145,
            maxUserShowCount: 12
        }),
        x = E.entries;
    return (r.useEffect(() => {
        if (null == h || t) return;
        let e = new Set([...a.map((e) => e.author_id), ...g.map((e) => e.activityUser.id)]),
            n = Array.from(e).filter(
                (e) =>
                    null !=
                    x.find((t) => {
                        let { author_id: n } = t;
                        return e === n;
                    })
            ),
            i = Array.from(e).filter((e) => {
                let t = x.find((t) => {
                    let { author_id: n } = t;
                    return e === n;
                });
                return (
                    null != t &&
                    t.traits.find((e) => {
                        let { type: t } = e;
                        return t === c.N.IS_LIVE;
                    })
                );
            });
        (0, U.zi)(B.Odu.ACTIVITY, {
            locked: W.Z.isInstanceLocked(),
            shownUserIds: Array.from(n),
            liveUserIds: i,
            contentInventoryIds: a.map((e) => e.id)
        });
    }, [a, g, t, h, x]),
    t)
        ? null
        : 0 === a.length && null == h
          ? null
          : (0, i.jsxs)('div', {
                className: H.container,
                children: [
                    null != h && null != s
                        ? (0, i.jsx)(N.Z, {
                              className: H.activityCard,
                              activity: h,
                              user: s,
                              currentUser: s,
                              appContext: B.IlC.OVERLAY
                          })
                        : null,
                    _ && !y
                        ? (0, i.jsx)(d.zxk, {
                              className: H.inviteFriendsButton,
                              onClick: () => {
                                  (0, f.h7)(h, !1, B.IlC.POPOUT),
                                      (0, U.Ws)(B.Odu.ACTIVITY, {
                                          type: U.Qu.INVITE,
                                          value: U.bk.PANEL_OPENED
                                      });
                              },
                              size: d.PhG.SMALL,
                              color: d.Ttl.PRIMARY,
                              children: G.NW.string(G.t['6Qgren'])
                          })
                        : null,
                    (0, i.jsx)(q, Y({}, E))
                ]
            });
}

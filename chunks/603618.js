n.d(t, {
    ZP: () => ei,
    lE: () => en,
    lX: () => et
}),
    n(388685),
    n(539854),
    n(997841);
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
    h = n(24124),
    f = n(493683),
    m = n(13245),
    g = n(99690),
    y = n(493773),
    O = n(549879),
    v = n(620662),
    b = n(835473),
    _ = n(194082),
    E = n(297781),
    x = n(656709),
    I = n(567409),
    j = n(225559),
    C = n(703656),
    S = n(93127),
    Z = n(814443),
    N = n(752048),
    w = n(409057),
    P = n(199902),
    T = n(592125),
    k = n(293273),
    A = n(158776),
    D = n(699516),
    L = n(594174),
    R = n(801077),
    M = n(237997),
    V = n(630388),
    z = n(5192),
    U = n(709054),
    W = n(444295),
    G = n(388627),
    B = n(981631),
    F = n(388032),
    H = n(800621);
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
        a = (0, u.e7)([L.default], () => L.default.getUser(t.author_id)),
        [s, c] = r.useState('unsent'),
        [h, g] = r.useState(!1);
    r.useEffect(() => {
        if ('sent' === s) {
            let e = setTimeout(() => g(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [s]);
    let y = null != n && (0, v.Z)(n, B.xjy.JOIN),
        b = async (e) => {
            if (null != a && 'unsent' === s) {
                e.stopPropagation();
                try {
                    if ((c('sending'), y))
                        await p.Z.sendActivityInviteUser({
                            type: B.mFx.JOIN,
                            userId: a.id,
                            activity: n,
                            location: B.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await f.Z.getOrEnsurePrivateChannel(a.id),
                            n = null != (i = T.Z.getChannel(e)) ? i : null;
                        l()(null != n, 'Send channel must be defined'),
                            (0, C.uL)(B.Z5c.CHANNEL(n.guild_id, n.id)),
                            (0, O.i)(B.IlC.OVERLAY, !0),
                            !0 === t.extra.fake_inventory_item
                                ? await (0, x.k)({
                                      channel: n,
                                      content: F.intl.formatToPlainString(F.t.UVBA9v, { gameName: t.extra.game_name }),
                                      whenReady: !0
                                  })
                                : await (0, x.p)({
                                      channel: n,
                                      content: F.intl.string(F.t.DwAcMz),
                                      entry: t,
                                      whenReady: !0
                                  });
                    }
                    m.Z.track(B.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: a.id,
                        target_content_entry_id: t.id,
                        target_index: o
                    }),
                        (0, W.Ws)(B.Odu.ACTIVITY, {
                            type: W.Qu.INVITE,
                            value: W.bk.INVITE_SENT,
                            userId: a.id
                        }),
                        c('sent');
                } catch (e) {
                    c('unsent');
                }
            }
        },
        _ = async () => {
            var e;
            if (null == a) return;
            let t = await f.Z.getOrEnsurePrivateChannel(a.id),
                n = null != (e = T.Z.getChannel(t)) ? e : null;
            l()(null != n, 'Send channel must be defined'),
                (0, C.uL)(B.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, O.i)(B.IlC.OVERLAY, !0),
                (0, W.Ws)(B.Odu.ACTIVITY, {
                    type: W.Qu.REDIRECT,
                    value: W.bk.CHAT,
                    userId: a.id
                });
        },
        E = y ? F.intl.string(F.t['3fRyS0']) : F.intl.string(F.t.XHxDIS),
        I = y
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
                    onClick: h ? _ : b,
                    className: H.inviteButton,
                    wrapperClassName: H.inviteButtonWrapper,
                    innerClassName: H.inviteButtonInner,
                    color: d.Ttl.TRANSPARENT,
                    look: d.iLD.FILLED,
                    size: d.PhG.ICON,
                    grow: !1,
                    children:
                        'sent' === s
                            ? h
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
        l = (0, u.e7)([L.default], () => L.default.getUser(n.author_id)),
        a = null != (t = null == o ? void 0 : o.application_id) ? t : n.extra.application_id,
        s = (0, u.e7)([A.Z], () => (null != l ? A.Z.getApplicationActivity(l.id, a) : null), [a, l]),
        [c, h] = r.useState('unsent');
    if (!(null != s && (0, v.Z)(s, B.xjy.JOIN))) return null;
    let f = async (e) => {
            if (null != l && 'unsent' === c) {
                e.stopPropagation();
                try {
                    h('sending'),
                        await p.Z.sendActivityInviteUser({
                            type: B.mFx.JOIN_REQUEST,
                            userId: l.id,
                            activity: s,
                            location: B.Sbl.UNLOCKED_OVERLAY
                        }),
                        (0, W.Ws)(B.Odu.ACTIVITY, {
                            type: W.Qu.INVITE,
                            value: W.bk.JOIN_REQUEST_SENT,
                            userId: l.id
                        }),
                        h('sent');
                } catch (e) {
                    h('unsent');
                }
            }
        },
        m = F.intl.string(F.t.OKsSCQ);
    return (0, i.jsx)(d.ua7, {
        text: m,
        'aria-label': m,
        children: (e) =>
            (0, i.jsx)(
                d.zxk,
                Q(Y({}, e), {
                    submitting: 'sending' === c,
                    onClick: f,
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
        o = (0, u.e7)([L.default], () => L.default.getUser(t.author_id)),
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
                  (0, i.jsx)(g.Z, {
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
                                  null != l && (0, i.jsx)(_.ZP, { className: H.liveIndicator })
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
    return new Set(e.map((e) => e.author_id));
}
function $(e) {
    let { entries: t, currentUserActivity: n, className: o, hideHeader: l = !1 } = e,
        a = (0, W.ee)(() => q(t), [t]),
        s = (0, W.ee)(
            () =>
                new Set(
                    Array.from(q(t)).filter((e) => {
                        let n = t.find((t) => {
                            let { author_id: n } = t;
                            return e === n;
                        });
                        return (
                            null != n &&
                            n.traits.find((e) => {
                                let { type: t } = e;
                                return t === c.N.IS_LIVE;
                            })
                        );
                    })
                ),
            [t]
        ),
        u = (0, W.ee)(() => new Set(t.map((e) => e.id)), [t]);
    return (r.useEffect(() => {
        (0, W.zi)(B.Odu.ACTIVITY, {
            locked: M.default.isInstanceLocked(),
            shownUserIds: Array.from(a),
            liveUserIds: Array.from(s),
            contentInventoryIds: Array.from(u)
        });
    }, [a, s, u]),
    0 === t.length)
        ? null
        : (0, i.jsxs)('div', {
              className: o,
              children: [
                  !l &&
                      (0, i.jsx)('div', {
                          className: H.contentInventoryHeader,
                          children: (0, i.jsx)(d.Text, {
                              variant: 'text-xs/medium',
                              color: 'header-secondary',
                              tag: 'div',
                              children: F.intl.string(F.t.y9eo7e)
                          })
                      }),
                  t.map((e, t) =>
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
              ]
          });
}
function ee(e) {
    let { gamingId: t, maxUserShowCount: n, userAffinityThresholdV1: i = 35, userAffinityThresholdV2: o = 0.0029 } = e,
        l = (0, I.Ns)(t);
    (0, y.ZP)(() => {
        (0, S.W)(), (0, S._)();
    });
    let d = (0, u.e7)([k.Z], () => (null == t ? null : k.Z.getApplicationActivity(t)), [t]),
        p = (0, u.Wu)(
            [R.Z, D.Z, Z.Z, N.Z],
            () => {
                if (null == t) return [];
                let e = R.Z.nowPlayingCards,
                    n = {
                        v1: i,
                        v2: o
                    };
                return e
                    .reduce((e, n) => {
                        if (n.type !== B.GOo.USER) return e;
                        let i = n.party.currentActivities;
                        if (0 === i.length) return e;
                        for (let n of i) n.game.id === t && null != n.activity && e.push(n);
                        return e;
                    }, [])
                    .filter((e) => {
                        var t;
                        let i = e.activityUser.id,
                            r = D.Z.isFriend(i);
                        return (
                            !!(function (e, t, n) {
                                let { v1: i } = n;
                                return null == e ? t : e > i || t;
                            })(null == (t = Z.Z.getUserAffinity(i)) ? void 0 : t.affinity, r, n) ||
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
                            })(N.Z.getUserAffinity(i), r, n)
                        );
                    });
            },
            [t, i, o]
        );
    return (
        (0, y.ZP)(() => (j.L(), () => j.v())),
        {
            entries: r.useMemo(() => {
                let e = l.filter((e) => !p.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...p.map((e) =>
                            (function (e) {
                                var t, n, i, r, o, l, u;
                                let d = null != (o = null == (n = e.activity) || null == (t = n.timestamps) ? void 0 : t.start) ? o : Date.now();
                                return {
                                    id: U.default.fromTimestamp(d),
                                    author_id: e.activityUser.id,
                                    extra: {
                                        type: 'played_game_extra',
                                        game_name: null != (l = null == (i = e.activity) ? void 0 : i.name) ? l : e.game.name,
                                        application_id: null != (u = null == (r = e.activity) ? void 0 : r.application_id) ? u : e.game.id,
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
    return (0, i.jsx)($, Q(Y({}, t), { className: e.className }));
}
function en(e) {
    let { activity: t, currentUser: n, showInviteButton: r = !0 } = e,
        o = null != t && (0, v.Z)(t, B.xjy.JOIN),
        l = (0, b.q)(null == t ? void 0 : t.application_id),
        a = null != l && (0, V.yE)(l.flags, B.udG.EMBEDDED);
    return null == t || null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(w.Z, {
                      className: H.activityCard,
                      activity: t,
                      user: n,
                      currentUser: n,
                      appContext: B.IlC.OVERLAY
                  }),
                  o && !a && r
                      ? (0, i.jsx)(d.zxk, {
                            className: H.inviteFriendsButton,
                            onClick: () => {
                                (0, h.h7)(t, !1, B.IlC.POPOUT),
                                    (0, W.Ws)(B.Odu.ACTIVITY, {
                                        type: W.Qu.INVITE,
                                        value: W.bk.PANEL_OPENED
                                    });
                            },
                            size: d.PhG.SMALL,
                            color: d.Ttl.PRIMARY,
                            children: F.intl.string(F.t['6Qgren'])
                        })
                      : null
              ]
          });
}
function ei(e) {
    let { locked: t } = e,
        n = (0, G.II)(),
        r = null == n ? void 0 : n.id,
        o = null == n ? void 0 : n.altId,
        l = (0, I.Ns)(r),
        a = (0, u.e7)([L.default], () => L.default.getCurrentUser()),
        s = null != o ? o : r,
        c = (0, u.e7)([k.Z], () => (null == s ? null : k.Z.getApplicationActivity(s)), [s]);
    (0, y.ZP)(() => (j.L(), () => j.v()));
    let d = ee({
        gamingId: s,
        userAffinityThresholdV1: 17.5,
        userAffinityThresholdV2: 0.00145,
        maxUserShowCount: 12
    });
    return t || (0 === l.length && null == c)
        ? null
        : (0, i.jsxs)('div', {
              className: H.container,
              children: [
                  (0, i.jsx)(en, {
                      activity: c,
                      currentUser: a
                  }),
                  (0, i.jsx)(
                      $,
                      Q(Y({}, d), {
                          className: H.contentInventoryContainer,
                          hideHeader: !0
                      })
                  )
              ]
          });
}

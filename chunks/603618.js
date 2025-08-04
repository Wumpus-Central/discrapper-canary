(n.d(t, {
    ZP: () => ei,
    lE: () => en,
    lX: () => et
}),
    n(388685),
    n(539854),
    n(997841));
var i = n(255367),
    r = n(73800),
    o = n(512722),
    l = n.n(o),
    a = n(661869),
    s = n(876215),
    c = n(884439),
    u = n(442837),
    d = n(755721),
    p = n(481060),
    f = n(278323),
    h = n(24124),
    m = n(493683),
    g = n(13245),
    y = n(99690),
    O = n(493773),
    b = n(549879),
    v = n(620662),
    E = n(835473),
    _ = n(194082),
    x = n(297781),
    I = n(656709),
    S = n(692701),
    j = n(225559),
    C = n(703656),
    N = n(93127),
    w = n(752048),
    Z = n(409057),
    P = n(199902),
    T = n(592125),
    k = n(293273),
    A = n(158776),
    D = n(699516),
    R = n(594174),
    L = n(801077),
    M = n(237997),
    z = n(630388),
    U = n(5192),
    V = n(709054),
    W = n(444295),
    G = n(388627),
    F = n(981631),
    B = n(388032),
    H = n(800621);
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
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
        [h, y] = r.useState(!1);
    r.useEffect(() => {
        if ('sent' === s) {
            let e = setTimeout(() => y(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [s]);
    let O = null != n && (0, v.Z)(n, F.xjy.JOIN),
        E = async (e) => {
            if (null != a && 'unsent' === s) {
                e.stopPropagation();
                try {
                    if ((c('sending'), O))
                        await f.Z.sendActivityInviteUser({
                            type: F.mFx.JOIN,
                            userId: a.id,
                            activity: n,
                            location: F.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await m.Z.getOrEnsurePrivateChannel(a.id),
                            n = null != (i = T.Z.getChannel(e)) ? i : null;
                        (l()(null != n, 'Send channel must be defined'),
                            (0, C.uL)(F.Z5c.CHANNEL(n.guild_id, n.id)),
                            (0, b.i)(F.IlC.OVERLAY, !0),
                            'fake_inventory_item' in t.extra && !0 === t.extra.fake_inventory_item
                                ? await (0, I.k)({
                                      channel: n,
                                      content: B.intl.formatToPlainString(B.t.UVBA9v, { gameName: t.extra.game_name }),
                                      whenReady: !0
                                  })
                                : await (0, I.p)({
                                      channel: n,
                                      content: B.intl.string(B.t.DwAcMz),
                                      entry: t,
                                      whenReady: !0
                                  }));
                    }
                    (g.Z.track(F.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: a.id,
                        target_content_entry_id: t.id,
                        target_index: o
                    }),
                        (0, W.Ws)(F.Odu.ACTIVITY, {
                            type: W.Qu.INVITE,
                            value: W.bk.INVITE_SENT,
                            userId: a.id
                        }),
                        c('sent'));
                } catch (e) {
                    c('unsent');
                }
            }
        },
        _ = async () => {
            var e;
            if (null == a) return;
            let t = await m.Z.getOrEnsurePrivateChannel(a.id),
                n = null != (e = T.Z.getChannel(t)) ? e : null;
            (l()(null != n, 'Send channel must be defined'),
                (0, C.uL)(F.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, b.i)(F.IlC.OVERLAY, !0),
                (0, W.Ws)(F.Odu.ACTIVITY, {
                    type: W.Qu.REDIRECT,
                    value: W.bk.CHAT,
                    userId: a.id
                }));
        },
        x = O ? B.intl.string(B.t['3fRyS0']) : B.intl.string(B.t.XHxDIS),
        S = O
            ? (0, i.jsx)(p.ejJ, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(p.Uuj, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(p.ua7, {
        text: x,
        'aria-label': x,
        children: (e) =>
            (0, i.jsx)(
                d.zx,
                Q(Y({}, e), {
                    submitting: 'sending' === s,
                    onClick: h ? _ : E,
                    className: H.inviteButton,
                    wrapperClassName: H.inviteButtonWrapper,
                    innerClassName: H.inviteButtonInner,
                    color: d.Tt.TRANSPARENT,
                    look: d.iL.FILLED,
                    size: d.Ph.ICON,
                    grow: !1,
                    children:
                        'sent' === s
                            ? h
                                ? (0, i.jsx)(p.kBi, {
                                      color: 'currentColor',
                                      size: 'sm'
                                  })
                                : (0, i.jsx)(p.kSu, {
                                      color: 'currentColor',
                                      size: 'sm'
                                  })
                            : S
                })
            )
    });
}
function X(e) {
    var t;
    let { entry: n, currentUserActivity: o } = e,
        l = (0, u.e7)([R.default], () => R.default.getUser(n.author_id)),
        a = null != (t = null == o ? void 0 : o.application_id) ? t : n.extra.application_id,
        s = (0, u.e7)([A.Z], () => (null != l ? A.Z.getApplicationActivity(l.id, a) : null), [a, l]),
        [c, h] = r.useState('unsent');
    if (!(null != s && (0, v.Z)(s, F.xjy.JOIN))) return null;
    let m = async (e) => {
            if (null != l && 'unsent' === c) {
                e.stopPropagation();
                try {
                    (h('sending'),
                        await f.Z.sendActivityInviteUser({
                            type: F.mFx.JOIN_REQUEST,
                            userId: l.id,
                            activity: s,
                            location: F.Sbl.UNLOCKED_OVERLAY
                        }),
                        (0, W.Ws)(F.Odu.ACTIVITY, {
                            type: W.Qu.INVITE,
                            value: W.bk.JOIN_REQUEST_SENT,
                            userId: l.id
                        }),
                        h('sent'));
                } catch (e) {
                    h('unsent');
                }
            }
        },
        g = B.intl.string(B.t.OKsSCQ);
    return (0, i.jsx)(p.ua7, {
        text: g,
        'aria-label': g,
        children: (e) =>
            (0, i.jsx)(
                d.zx,
                Q(Y({}, e), {
                    submitting: 'sending' === c,
                    onClick: m,
                    className: H.inviteButton,
                    wrapperClassName: H.inviteButtonWrapper,
                    innerClassName: H.inviteButtonInner,
                    color: d.Tt.TRANSPARENT,
                    look: d.iL.FILLED,
                    size: d.Ph.ICON,
                    grow: !1,
                    children:
                        'sent' === c
                            ? (0, i.jsx)(p.kSu, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, i.jsx)(p.V9, {
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
                  (0, i.jsx)(y.Z, {
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
                                  (0, i.jsx)(p.Text, {
                                      className: H.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: U.ZP.getName(void 0, void 0, o)
                                  }),
                                  null != l && (0, i.jsx)(_.ZP, { className: H.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(x.Gk, {
                              location: x.Gt.OVERLAY,
                              className: H.badgesContainer,
                              children: [x.OV, x.wO, x.f, x.v1, x.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
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
        (0, W.zi)(F.Odu.ACTIVITY, {
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
                          children: (0, i.jsx)(p.Text, {
                              variant: 'text-xs/medium',
                              color: 'header-secondary',
                              tag: 'div',
                              children: B.intl.string(B.t.y9eo7e)
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
    let { gamingId: t, maxUserShowCount: n, userAffinityThresholdV2: i = 0.0029 } = e,
        o = (0, S.Z)(t, 'useLiveActivityRows');
    (0, O.ZP)(() => {
        (0, N._)();
    });
    let l = (0, u.e7)([k.Z], () => (null == t ? null : k.Z.getApplicationActivity(t)), [t]),
        d = (0, u.Wu)(
            [L.Z, D.Z, w.Z],
            () => {
                if (null == t) return [];
                let e = L.Z.nowPlayingCards,
                    n = { v2: i };
                return e
                    .reduce((e, n) => {
                        if (n.type !== F.GOo.USER) return e;
                        let i = n.party.currentActivities;
                        if (0 === i.length) return e;
                        for (let n of i) n.game.id === t && null != n.activity && e.push(n);
                        return e;
                    }, [])
                    .filter((e) => {
                        let t = e.activityUser.id,
                            i = D.Z.isFriend(t);
                        return (function (e, t, n) {
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
                        })(w.Z.getUserAffinity(t), i, n);
                    });
            },
            [t, i]
        );
    return (
        (0, O.ZP)(() => (j.L(), () => j.v())),
        {
            entries: r.useMemo(() => {
                let e = o.filter((e) => !d.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...d.map((e) =>
                            (function (e) {
                                var t, n, i, r, o, l, u;
                                let d = null != (o = null == (n = e.activity) || null == (t = n.timestamps) ? void 0 : t.start) ? o : Date.now();
                                return {
                                    id: V.default.fromTimestamp(d),
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
            }, [o, d, n]),
            currentUserActivity: l
        }
    );
}
function et(e) {
    let t = ee(e);
    return (0, i.jsx)($, Q(Y({}, t), { className: e.className }));
}
function en(e) {
    let { activity: t, currentUser: n, showInviteButton: r = !0 } = e,
        o = null != t && (0, v.Z)(t, F.xjy.JOIN),
        l = (0, E.q)(null == t ? void 0 : t.application_id),
        a = null != l && (0, z.yE)(l.flags, F.udG.EMBEDDED);
    return null == t || null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(Z.Z, {
                      className: H.activityCard,
                      activity: t,
                      user: n,
                      currentUser: n,
                      appContext: F.IlC.OVERLAY
                  }),
                  o && !a && r
                      ? (0, i.jsx)(d.zx, {
                            className: H.inviteFriendsButton,
                            onClick: () => {
                                ((0, h.h7)(t, !1, F.IlC.POPOUT),
                                    (0, W.Ws)(F.Odu.ACTIVITY, {
                                        type: W.Qu.INVITE,
                                        value: W.bk.PANEL_OPENED
                                    }));
                            },
                            size: d.Ph.SMALL,
                            color: d.Tt.PRIMARY,
                            children: B.intl.string(B.t['6Qgren'])
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
        l = (0, S.Z)(r, 'ActivityWidget'),
        a = (0, u.e7)([R.default], () => R.default.getCurrentUser()),
        s = null != o ? o : r,
        c = (0, u.e7)([k.Z], () => (null == s ? null : k.Z.getApplicationActivity(s)), [s]);
    (0, O.ZP)(() => (j.L(), () => j.v()));
    let d = ee({
        gamingId: s,
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

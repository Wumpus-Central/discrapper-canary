n.d(t, {
    ZP: () => en,
    lE: () => et,
    lX: () => ee
}),
    n(388685),
    n(539854),
    n(997841);
var i = n(255367),
    r = n(73800),
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
    m = n(13245),
    g = n(99690),
    y = n(493773),
    O = n(549879),
    b = n(620662),
    v = n(835473),
    E = n(194082),
    _ = n(297781),
    x = n(656709),
    I = n(692701),
    S = n(225559),
    j = n(703656),
    C = n(93127),
    N = n(752048),
    w = n(409057),
    Z = n(199902),
    P = n(592125),
    T = n(293273),
    k = n(158776),
    D = n(699516),
    A = n(594174),
    R = n(801077),
    L = n(237997),
    M = n(630388),
    z = n(5192),
    U = n(709054),
    V = n(444295),
    W = n(388627),
    G = n(981631),
    F = n(388032),
    B = n(800621);
function H(e) {
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
function Y(e, t) {
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
function Q(e) {
    let { entry: t, currentUserActivity: n, idx: o } = e,
        a = (0, u.e7)([A.default], () => A.default.getUser(t.author_id)),
        [s, c] = r.useState('unsent'),
        [f, g] = r.useState(!1);
    r.useEffect(() => {
        if ('sent' === s) {
            let e = setTimeout(() => g(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [s]);
    let y = null != n && (0, b.Z)(n, G.xjy.JOIN),
        v = async (e) => {
            if (null != a && 'unsent' === s) {
                e.stopPropagation();
                try {
                    if ((c('sending'), y))
                        await p.Z.sendActivityInviteUser({
                            type: G.mFx.JOIN,
                            userId: a.id,
                            activity: n,
                            location: G.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await h.Z.getOrEnsurePrivateChannel(a.id),
                            n = null != (i = P.Z.getChannel(e)) ? i : null;
                        l()(null != n, 'Send channel must be defined'),
                            (0, j.uL)(G.Z5c.CHANNEL(n.guild_id, n.id)),
                            (0, O.i)(G.IlC.OVERLAY, !0),
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
                    m.Z.track(G.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: a.id,
                        target_content_entry_id: t.id,
                        target_index: o
                    }),
                        (0, V.Ws)(G.Odu.ACTIVITY, {
                            type: V.Qu.INVITE,
                            value: V.bk.INVITE_SENT,
                            userId: a.id
                        }),
                        c('sent');
                } catch (e) {
                    c('unsent');
                }
            }
        },
        E = async () => {
            var e;
            if (null == a) return;
            let t = await h.Z.getOrEnsurePrivateChannel(a.id),
                n = null != (e = P.Z.getChannel(t)) ? e : null;
            l()(null != n, 'Send channel must be defined'),
                (0, j.uL)(G.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, O.i)(G.IlC.OVERLAY, !0),
                (0, V.Ws)(G.Odu.ACTIVITY, {
                    type: V.Qu.REDIRECT,
                    value: V.bk.CHAT,
                    userId: a.id
                });
        },
        _ = y ? F.intl.string(F.t['3fRyS0']) : F.intl.string(F.t.XHxDIS),
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
        text: _,
        'aria-label': _,
        children: (e) =>
            (0, i.jsx)(
                d.zxk,
                Y(H({}, e), {
                    submitting: 'sending' === s,
                    onClick: f ? E : v,
                    className: B.inviteButton,
                    wrapperClassName: B.inviteButtonWrapper,
                    innerClassName: B.inviteButtonInner,
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
function K(e) {
    var t;
    let { entry: n, currentUserActivity: o } = e,
        l = (0, u.e7)([A.default], () => A.default.getUser(n.author_id)),
        a = null != (t = null == o ? void 0 : o.application_id) ? t : n.extra.application_id,
        s = (0, u.e7)([k.Z], () => (null != l ? k.Z.getApplicationActivity(l.id, a) : null), [a, l]),
        [c, f] = r.useState('unsent');
    if (!(null != s && (0, b.Z)(s, G.xjy.JOIN))) return null;
    let h = async (e) => {
            if (null != l && 'unsent' === c) {
                e.stopPropagation();
                try {
                    f('sending'),
                        await p.Z.sendActivityInviteUser({
                            type: G.mFx.JOIN_REQUEST,
                            userId: l.id,
                            activity: s,
                            location: G.Sbl.UNLOCKED_OVERLAY
                        }),
                        (0, V.Ws)(G.Odu.ACTIVITY, {
                            type: V.Qu.INVITE,
                            value: V.bk.JOIN_REQUEST_SENT,
                            userId: l.id
                        }),
                        f('sent');
                } catch (e) {
                    f('unsent');
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
                Y(H({}, e), {
                    submitting: 'sending' === c,
                    onClick: h,
                    className: B.inviteButton,
                    wrapperClassName: B.inviteButtonWrapper,
                    innerClassName: B.inviteButtonInner,
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
function X(e) {
    let { entry: t, currentUserActivity: n, idx: r } = e,
        o = (0, u.e7)([A.default], () => A.default.getUser(t.author_id)),
        l = (0, u.e7)([Z.Z], () => (null != o ? Z.Z.getAnyStreamForUser(o.id) : null), [o]),
        { isMobileOnline: a, status: s } = (0, u.cj)(
            [k.Z],
            () =>
                null == o
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: k.Z.isMobileOnline(o.id),
                          status: k.Z.getStatus(o.id)
                      },
            [o]
        );
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              className: B.row,
              children: [
                  (0, i.jsx)(g.Z, {
                      className: B.avatar,
                      user: o,
                      isMobile: a,
                      status: s
                  }),
                  (0, i.jsxs)('div', {
                      className: B.details,
                      children: [
                          (0, i.jsxs)('div', {
                              className: B.usernameWrapper,
                              children: [
                                  (0, i.jsx)(d.Text, {
                                      className: B.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: z.ZP.getName(void 0, void 0, o)
                                  }),
                                  null != l && (0, i.jsx)(E.ZP, { className: B.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(_.Gk, {
                              location: _.Gt.OVERLAY,
                              className: B.badgesContainer,
                              children: [_.OV, _.wO, _.f, _.v1, _.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(K, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r
                  }),
                  (0, i.jsx)(Q, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r
                  })
              ]
          });
}
function J(e) {
    return new Set(e.map((e) => e.author_id));
}
function q(e) {
    let { entries: t, currentUserActivity: n, className: o, hideHeader: l = !1 } = e,
        a = (0, V.ee)(() => J(t), [t]),
        s = (0, V.ee)(
            () =>
                new Set(
                    Array.from(J(t)).filter((e) => {
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
        u = (0, V.ee)(() => new Set(t.map((e) => e.id)), [t]);
    return (r.useEffect(() => {
        (0, V.zi)(G.Odu.ACTIVITY, {
            locked: L.default.isInstanceLocked(),
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
                          className: B.contentInventoryHeader,
                          children: (0, i.jsx)(d.Text, {
                              variant: 'text-xs/medium',
                              color: 'header-secondary',
                              tag: 'div',
                              children: F.intl.string(F.t.y9eo7e)
                          })
                      }),
                  t.map((e, t) =>
                      (0, i.jsx)(
                          X,
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
function $(e) {
    let { gamingId: t, maxUserShowCount: n, userAffinityThresholdV2: i = 0.0029 } = e,
        o = (0, I.Z)(t, 'useLiveActivityRows');
    (0, y.ZP)(() => {
        (0, C._)();
    });
    let l = (0, u.e7)([T.Z], () => (null == t ? null : T.Z.getApplicationActivity(t)), [t]),
        d = (0, u.Wu)(
            [R.Z, D.Z, N.Z],
            () => {
                if (null == t) return [];
                let e = R.Z.nowPlayingCards,
                    n = { v2: i };
                return e
                    .reduce((e, n) => {
                        if (n.type !== G.GOo.USER) return e;
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
                        })(N.Z.getUserAffinity(t), i, n);
                    });
            },
            [t, i]
        );
    return (
        (0, y.ZP)(() => (S.L(), () => S.v())),
        {
            entries: r.useMemo(() => {
                let e = o.filter((e) => !d.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...d.map((e) =>
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
            }, [o, d, n]),
            currentUserActivity: l
        }
    );
}
function ee(e) {
    let t = $(e);
    return (0, i.jsx)(q, Y(H({}, t), { className: e.className }));
}
function et(e) {
    let { activity: t, currentUser: n, showInviteButton: r = !0 } = e,
        o = null != t && (0, b.Z)(t, G.xjy.JOIN),
        l = (0, v.q)(null == t ? void 0 : t.application_id),
        a = null != l && (0, M.yE)(l.flags, G.udG.EMBEDDED);
    return null == t || null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(w.Z, {
                      className: B.activityCard,
                      activity: t,
                      user: n,
                      currentUser: n,
                      appContext: G.IlC.OVERLAY
                  }),
                  o && !a && r
                      ? (0, i.jsx)(d.zxk, {
                            className: B.inviteFriendsButton,
                            onClick: () => {
                                (0, f.h7)(t, !1, G.IlC.POPOUT),
                                    (0, V.Ws)(G.Odu.ACTIVITY, {
                                        type: V.Qu.INVITE,
                                        value: V.bk.PANEL_OPENED
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
function en(e) {
    let { locked: t } = e,
        n = (0, W.II)(),
        r = null == n ? void 0 : n.id,
        o = null == n ? void 0 : n.altId,
        l = (0, I.Z)(r, 'ActivityWidget'),
        a = (0, u.e7)([A.default], () => A.default.getCurrentUser()),
        s = null != o ? o : r,
        c = (0, u.e7)([T.Z], () => (null == s ? null : T.Z.getApplicationActivity(s)), [s]);
    (0, y.ZP)(() => (S.L(), () => S.v()));
    let d = $({
        gamingId: s,
        userAffinityThresholdV2: 0.00145,
        maxUserShowCount: 12
    });
    return t || (0 === l.length && null == c)
        ? null
        : (0, i.jsxs)('div', {
              className: B.container,
              children: [
                  (0, i.jsx)(et, {
                      activity: c,
                      currentUser: a
                  }),
                  (0, i.jsx)(
                      q,
                      Y(H({}, d), {
                          className: B.contentInventoryContainer,
                          hideHeader: !0
                      })
                  )
              ]
          });
}

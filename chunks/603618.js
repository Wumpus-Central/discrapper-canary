n.d(t, {
    ZP: () => en,
    lX: () => et
}),
    n(47120),
    n(653041),
    n(789020);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(661869),
    s = n(876215),
    u = n(884439),
    c = n(442837),
    d = n(481060),
    p = n(278323),
    h = n(24124),
    f = n(493683),
    m = n(13245),
    g = n(99690),
    O = n(493773),
    v = n(549879),
    y = n(620662),
    E = n(835473),
    b = n(194082),
    j = n(297781),
    x = n(656709),
    I = n(567409),
    S = n(225559),
    N = n(703656),
    C = n(93127),
    Z = n(814443),
    w = n(752048),
    P = n(409057),
    _ = n(199902),
    T = n(592125),
    D = n(293273),
    k = n(158776),
    A = n(699516),
    L = n(594174),
    R = n(801077),
    W = n(237997),
    M = n(630388),
    V = n(5192),
    z = n(709054),
    U = n(444295),
    G = n(388627),
    F = n(981631),
    Y = n(388032),
    H = n(281254);
function B(e) {
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
    let { entry: t, currentUserActivity: n, idx: l } = e,
        a = (0, c.e7)([L.default], () => L.default.getUser(t.author_id)),
        [s, u] = r.useState('unsent'),
        [h, g] = r.useState(!1);
    r.useEffect(() => {
        if ('sent' === s) {
            let e = setTimeout(() => g(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [s]);
    let O = null != n && (0, y.Z)(n, F.xjy.JOIN),
        E = async (e) => {
            if (null != a && 'unsent' === s) {
                e.stopPropagation();
                try {
                    if ((u('sending'), O))
                        await p.Z.sendActivityInviteUser({
                            type: F.mFx.JOIN,
                            userId: a.id,
                            activity: n,
                            location: F.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await f.Z.getOrEnsurePrivateChannel(a.id),
                            n = null !== (i = T.Z.getChannel(e)) && void 0 !== i ? i : null;
                        o()(null != n, 'Send channel must be defined'),
                            (0, N.uL)(F.Z5c.CHANNEL(n.guild_id, n.id)),
                            (0, v.i)(F.IlC.OVERLAY, !0),
                            !0 === t.extra.fake_inventory_item
                                ? await (0, x.k)({
                                      channel: n,
                                      content: Y.NW.formatToPlainString(Y.t.UVBA9v, { gameName: t.extra.game_name }),
                                      whenReady: !0
                                  })
                                : await (0, x.p)({
                                      channel: n,
                                      content: Y.NW.string(Y.t.DwAcMz),
                                      entry: t,
                                      whenReady: !0
                                  });
                    }
                    m.Z.track(F.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: a.id,
                        target_content_entry_id: t.id,
                        target_index: l
                    }),
                        (0, U.Ws)(F.Odu.ACTIVITY, {
                            type: U.Qu.INVITE,
                            value: U.bk.INVITE_SENT,
                            userId: a.id
                        }),
                        u('sent');
                } catch (e) {
                    u('unsent');
                }
            }
        },
        b = async () => {
            var e;
            if (null == a) return;
            let t = await f.Z.getOrEnsurePrivateChannel(a.id),
                n = null !== (e = T.Z.getChannel(t)) && void 0 !== e ? e : null;
            o()(null != n, 'Send channel must be defined'),
                (0, N.uL)(F.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, v.i)(F.IlC.OVERLAY, !0),
                (0, U.Ws)(F.Odu.ACTIVITY, {
                    type: U.Qu.REDIRECT,
                    value: U.bk.CHAT,
                    userId: a.id
                });
        },
        j = O ? Y.NW.string(Y.t['3fRyS0']) : Y.NW.string(Y.t.XHxDIS),
        I = O
            ? (0, i.jsx)(d.ejJ, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(d.Uuj, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(d.ua7, {
        text: j,
        'aria-label': j,
        children: (e) =>
            (0, i.jsx)(
                d.zxk,
                Q(B({}, e), {
                    submitting: 'sending' === s,
                    onClick: h ? b : E,
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
    let { entry: n, currentUserActivity: l } = e,
        o = (0, c.e7)([L.default], () => L.default.getUser(n.author_id)),
        a = null !== (t = null == l ? void 0 : l.application_id) && void 0 !== t ? t : n.extra.application_id,
        s = (0, c.e7)([k.Z], () => (null != o ? k.Z.getApplicationActivity(o.id, a) : null), [a, o]),
        [u, h] = r.useState('unsent');
    if (!(null != s && (0, y.Z)(s, F.xjy.JOIN))) return null;
    let f = async (e) => {
            if (null != o && 'unsent' === u) {
                e.stopPropagation();
                try {
                    h('sending'),
                        await p.Z.sendActivityInviteUser({
                            type: F.mFx.JOIN_REQUEST,
                            userId: o.id,
                            activity: s,
                            location: F.Sbl.UNLOCKED_OVERLAY
                        }),
                        (0, U.Ws)(F.Odu.ACTIVITY, {
                            type: U.Qu.INVITE,
                            value: U.bk.JOIN_REQUEST_SENT,
                            userId: o.id
                        }),
                        h('sent');
                } catch (e) {
                    h('unsent');
                }
            }
        },
        m = Y.NW.string(Y.t.OKsSCQ);
    return (0, i.jsx)(d.ua7, {
        text: m,
        'aria-label': m,
        children: (e) =>
            (0, i.jsx)(
                d.zxk,
                Q(B({}, e), {
                    submitting: 'sending' === u,
                    onClick: f,
                    className: H.inviteButton,
                    wrapperClassName: H.inviteButtonWrapper,
                    innerClassName: H.inviteButtonInner,
                    color: d.Ttl.TRANSPARENT,
                    look: d.iLD.FILLED,
                    size: d.PhG.ICON,
                    grow: !1,
                    children:
                        'sent' === u
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
        l = (0, c.e7)([L.default], () => L.default.getUser(t.author_id)),
        o = (0, c.e7)([_.Z], () => (null != l ? _.Z.getAnyStreamForUser(l.id) : null), [l]),
        { isMobileOnline: a, status: s } = (0, c.cj)(
            [k.Z],
            () =>
                null == l
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: k.Z.isMobileOnline(l.id),
                          status: k.Z.getStatus(l.id)
                      },
            [l]
        );
    return null == l
        ? null
        : (0, i.jsxs)('div', {
              className: H.row,
              children: [
                  (0, i.jsx)(g.Z, {
                      className: H.avatar,
                      user: l,
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
                                      children: V.ZP.getName(void 0, void 0, l)
                                  }),
                                  null != o && (0, i.jsx)(b.ZP, { className: H.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(j.Gk, {
                              location: j.Gt.OVERLAY,
                              className: H.badgesContainer,
                              children: [j.OV, j.wO, j.f, j.v1, j.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
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
    let { entries: t, currentUserActivity: n, className: l, hideHeader: o = !1 } = e,
        a = (0, U.ee)(() => q(t), [t]),
        s = (0, U.ee)(
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
                                return t === u.N.IS_LIVE;
                            })
                        );
                    })
                ),
            [t]
        ),
        c = (0, U.ee)(() => new Set(t.map((e) => e.id)), [t]);
    return (r.useEffect(() => {
        (0, U.zi)(F.Odu.ACTIVITY, {
            locked: W.default.isInstanceLocked(),
            shownUserIds: Array.from(a),
            liveUserIds: Array.from(s),
            contentInventoryIds: Array.from(c)
        });
    }, [a, s, c]),
    0 === t.length)
        ? null
        : (0, i.jsxs)('div', {
              className: l,
              children: [
                  !o &&
                      (0, i.jsx)('div', {
                          className: H.contentInventoryHeader,
                          children: (0, i.jsx)(d.Text, {
                              variant: 'text-xs/medium',
                              color: 'header-secondary',
                              tag: 'div',
                              children: Y.NW.string(Y.t.y9eo7e)
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
    let { gamingId: t, maxUserShowCount: n, userAffinityThresholdV1: i = 35, userAffinityThresholdV2: l = 0.0029 } = e,
        o = (0, I.Ns)(t);
    (0, O.ZP)(() => {
        (0, C.W)(), (0, C._)();
    });
    let d = (0, c.e7)([D.Z], () => (null == t ? null : D.Z.getApplicationActivity(t)), [t]),
        p = (0, c.Wu)(
            [R.Z, A.Z, Z.Z, w.Z],
            () => {
                if (null == t) return [];
                let e = R.Z.nowPlayingCards,
                    n = {
                        v1: i,
                        v2: l
                    };
                return e
                    .reduce((e, n) => {
                        if (n.type !== F.GOo.USER) return e;
                        let i = n.party.currentActivities;
                        if (0 === i.length) return e;
                        for (let n of i) n.game.id === t && null != n.activity && e.push(n);
                        return e;
                    }, [])
                    .filter((e) => {
                        var t;
                        let i = e.activityUser.id,
                            r = A.Z.isFriend(i);
                        return (
                            !!(function (e, t, n) {
                                let { v1: i } = n;
                                return null == e ? t : e > i || t;
                            })(null === (t = Z.Z.getUserAffinity(i)) || void 0 === t ? void 0 : t.affinity, r, n) ||
                            (function (e, t, n) {
                                let { v2: i } = n;
                                if (null == e) return t;
                                let { communicationProbability: r, dmProbability: l, serverMessageProbability: o, vcProbability: a } = e;
                                switch (!0) {
                                    case r > i:
                                    case l > i:
                                    case o > i:
                                    case a > i:
                                        return !0;
                                    default:
                                        return t;
                                }
                            })(w.Z.getUserAffinity(i), r, n)
                        );
                    });
            },
            [t, i, l]
        );
    return (
        (0, O.ZP)(() => (S.L(), () => S.v())),
        {
            entries: r.useMemo(() => {
                let e = o.filter((e) => !p.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...p.map((e) =>
                            (function (e) {
                                var t, n, i, r, l, o, c;
                                let d = null !== (l = null === (n = e.activity) || void 0 === n ? void 0 : null === (t = n.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== l ? l : Date.now();
                                return {
                                    id: z.default.fromTimestamp(d),
                                    author_id: e.activityUser.id,
                                    extra: {
                                        type: 'played_game_extra',
                                        game_name: null !== (o = null === (i = e.activity) || void 0 === i ? void 0 : i.name) && void 0 !== o ? o : e.game.name,
                                        application_id: null !== (c = null === (r = e.activity) || void 0 === r ? void 0 : r.application_id) && void 0 !== c ? c : e.game.id,
                                        fake_inventory_item: !0
                                    },
                                    content_type: s.s.PLAYED_GAME,
                                    author_type: a.i.USER,
                                    participants: e.playingMembers.map((e) => e.id),
                                    traits: [
                                        {
                                            type: u.N.IS_LIVE,
                                            is_live: !0
                                        }
                                    ]
                                };
                            })(e)
                        ),
                        ...e
                    ];
                return null != n ? t.slice(0, n) : t;
            }, [o, p, n]),
            currentUserActivity: d
        }
    );
}
function et(e) {
    let t = ee(e);
    return (0, i.jsx)($, Q(B({}, t), { className: e.className }));
}
function en(e) {
    let { locked: t } = e,
        n = (0, G.II)(),
        r = null == n ? void 0 : n.id,
        l = null == n ? void 0 : n.altId,
        o = (0, I.Ns)(r),
        a = (0, c.e7)([L.default], () => L.default.getCurrentUser()),
        s = null != l ? l : r,
        u = (0, c.e7)([D.Z], () => (null == s ? null : D.Z.getApplicationActivity(s)), [s]);
    (0, O.ZP)(() => (S.L(), () => S.v()));
    let p = null != u && (0, y.Z)(u, F.xjy.JOIN),
        f = (0, E.q)(null == u ? void 0 : u.application_id),
        m = null != f && (0, M.yE)(f.flags, F.udG.EMBEDDED),
        g = ee({
            gamingId: s,
            userAffinityThresholdV1: 17.5,
            userAffinityThresholdV2: 0.00145,
            maxUserShowCount: 12
        });
    return t
        ? null
        : 0 === o.length && null == u
          ? null
          : (0, i.jsxs)('div', {
                className: H.container,
                children: [
                    null != u && null != a
                        ? (0, i.jsx)(P.Z, {
                              className: H.activityCard,
                              activity: u,
                              user: a,
                              currentUser: a,
                              appContext: F.IlC.OVERLAY
                          })
                        : null,
                    p && !m
                        ? (0, i.jsx)(d.zxk, {
                              className: H.inviteFriendsButton,
                              onClick: () => {
                                  (0, h.h7)(u, !1, F.IlC.POPOUT),
                                      (0, U.Ws)(F.Odu.ACTIVITY, {
                                          type: U.Qu.INVITE,
                                          value: U.bk.PANEL_OPENED
                                      });
                              },
                              size: d.PhG.SMALL,
                              color: d.Ttl.PRIMARY,
                              children: Y.NW.string(Y.t['6Qgren'])
                          })
                        : null,
                    (0, i.jsx)(
                        $,
                        Q(B({}, g), {
                            className: H.contentInventoryContainer,
                            hideHeader: !0
                        })
                    )
                ]
            });
}

n.d(t, {
    ZP: () => ee,
    lX: () => $
}),
    n(47120),
    n(724458),
    n(653041),
    n(789020);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    o = n.n(r),
    a = n(661869),
    s = n(876215),
    d = n(884439),
    u = n(442837),
    c = n(481060),
    h = n(278323),
    _ = n(24124),
    p = n(493683),
    f = n(13245),
    m = n(99690),
    g = n(493773),
    v = n(549879),
    E = n(620662),
    x = n(835473),
    I = n(194082),
    C = n(297781),
    S = n(656709),
    Z = n(567409),
    y = n(225559),
    O = n(703656),
    N = n(93127),
    b = n(814443),
    T = n(428598),
    w = n(409057),
    A = n(199902),
    j = n(592125),
    k = n(293273),
    R = n(158776),
    L = n(699516),
    D = n(594174),
    P = n(801077),
    M = n(237997),
    z = n(630388),
    V = n(5192),
    W = n(709054),
    U = n(444295),
    F = n(388627),
    B = n(981631),
    G = n(388032),
    H = n(422163);
function Y(e) {
    let { entry: t, currentUserActivity: n, idx: r } = e,
        a = (0, u.e7)([D.default], () => D.default.getUser(t.author_id)),
        [s, d] = l.useState('unsent'),
        [_, m] = l.useState(!1);
    l.useEffect(() => {
        if ('sent' === s) {
            let e = setTimeout(() => m(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [s]);
    let g = null != n && (0, E.Z)(n, B.xjy.JOIN),
        x = async (e) => {
            if (null != a && 'unsent' === s) {
                e.stopPropagation();
                try {
                    if ((d('sending'), g))
                        await h.Z.sendActivityInviteUser({
                            type: B.mFx.JOIN,
                            userId: a.id,
                            activity: n,
                            location: B.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await p.Z.getOrEnsurePrivateChannel(a.id),
                            n = null !== (i = j.Z.getChannel(e)) && void 0 !== i ? i : null;
                        o()(null != n, 'Send channel must be defined'),
                            (0, O.uL)(B.Z5c.CHANNEL(n.guild_id, n.id)),
                            (0, v.i)(B.IlC.OVERLAY),
                            !0 === t.extra.fake_inventory_item
                                ? await (0, S.k)({
                                      channel: n,
                                      content: G.intl.string(G.t.DwAcMz),
                                      whenReady: !0
                                  })
                                : await (0, S.p)({
                                      channel: n,
                                      content: G.intl.string(G.t.DwAcMz),
                                      entry: t,
                                      whenReady: !0
                                  });
                    }
                    f.Z.track(B.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: a.id,
                        target_content_entry_id: t.id,
                        target_index: r
                    }),
                        (0, U.Ws)(B.Odu.ACTIVITY, {
                            type: U.Qu.INVITE,
                            value: U.bk.INVITE_SENT,
                            userId: a.id
                        }),
                        d('sent');
                } catch (e) {
                    d('unsent');
                }
            }
        },
        I = async () => {
            var e;
            if (null == a) return;
            let t = await p.Z.getOrEnsurePrivateChannel(a.id),
                n = null !== (e = j.Z.getChannel(t)) && void 0 !== e ? e : null;
            o()(null != n, 'Send channel must be defined'),
                (0, O.uL)(B.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, v.i)(B.IlC.OVERLAY),
                (0, U.Ws)(B.Odu.ACTIVITY, {
                    type: U.Qu.REDIRECT,
                    value: U.bk.CHAT,
                    userId: a.id
                });
        },
        C = g ? G.intl.string(G.t['3fRyS0']) : G.intl.string(G.t.y9eo7e),
        Z = g
            ? (0, i.jsx)(c.ejJ, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(c.Uuj, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(c.ua7, {
        text: C,
        'aria-label': C,
        children: (e) =>
            (0, i.jsx)(c.zxk, {
                ...e,
                submitting: 'sending' === s,
                onClick: _ ? I : x,
                className: H.inviteButton,
                wrapperClassName: H.inviteButtonWrapper,
                innerClassName: H.inviteButtonInner,
                color: c.Ttl.TRANSPARENT,
                look: c.iLD.FILLED,
                size: c.PhG.ICON,
                grow: !1,
                children:
                    'sent' === s
                        ? _
                            ? (0, i.jsx)(c.kBi, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, i.jsx)(c.kSu, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                        : Z
            })
    });
}
function Q(e) {
    var t;
    let { entry: n, currentUserActivity: r } = e,
        o = (0, u.e7)([D.default], () => D.default.getUser(n.author_id)),
        a = null !== (t = null == r ? void 0 : r.application_id) && void 0 !== t ? t : n.extra.application_id,
        s = (0, u.e7)([R.Z], () => (null != o ? R.Z.getApplicationActivity(o.id, a) : null), [a, o]),
        [d, _] = l.useState('unsent');
    if (!(null != s && (0, E.Z)(s, B.xjy.JOIN))) return null;
    let p = async (e) => {
            if (null != o && 'unsent' === d) {
                e.stopPropagation();
                try {
                    _('sending'),
                        await h.Z.sendActivityInviteUser({
                            type: B.mFx.JOIN_REQUEST,
                            userId: o.id,
                            activity: s,
                            location: B.Sbl.UNLOCKED_OVERLAY
                        }),
                        (0, U.Ws)(B.Odu.ACTIVITY, {
                            type: U.Qu.INVITE,
                            value: U.bk.JOIN_REQUEST_SENT,
                            userId: o.id
                        }),
                        _('sent');
                } catch (e) {
                    _('unsent');
                }
            }
        },
        f = G.intl.string(G.t.OKsSCQ);
    return (0, i.jsx)(c.ua7, {
        text: f,
        'aria-label': f,
        children: (e) =>
            (0, i.jsx)(c.zxk, {
                ...e,
                submitting: 'sending' === d,
                onClick: p,
                className: H.inviteButton,
                wrapperClassName: H.inviteButtonWrapper,
                innerClassName: H.inviteButtonInner,
                color: c.Ttl.TRANSPARENT,
                look: c.iLD.FILLED,
                size: c.PhG.ICON,
                grow: !1,
                children:
                    'sent' === d
                        ? (0, i.jsx)(c.kSu, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, i.jsx)(c.V9, {
                              color: 'currentColor',
                              size: 'sm'
                          })
            })
    });
}
function K(e) {
    let { entry: t, currentUserActivity: n, idx: l } = e,
        r = (0, u.e7)([D.default], () => D.default.getUser(t.author_id)),
        o = (0, u.e7)([A.Z], () => (null != r ? A.Z.getAnyStreamForUser(r.id) : null), [r]),
        { isMobileOnline: a, status: s } = (0, u.cj)(
            [R.Z],
            () =>
                null == r
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: R.Z.isMobileOnline(r.id),
                          status: R.Z.getStatus(r.id)
                      },
            [r]
        );
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: H.row,
              children: [
                  (0, i.jsx)(m.Z, {
                      className: H.avatar,
                      user: r,
                      isMobile: a,
                      status: s
                  }),
                  (0, i.jsxs)('div', {
                      className: H.details,
                      children: [
                          (0, i.jsxs)('div', {
                              className: H.usernameWrapper,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      className: H.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: V.ZP.getName(void 0, void 0, r)
                                  }),
                                  null != o && (0, i.jsx)(I.ZP, { className: H.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(C.Gk, {
                              location: C.Gt.OVERLAY,
                              className: H.badgesContainer,
                              children: [C.OV, C.wO, C.f, C.v1, C.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(Q, {
                      entry: t,
                      currentUserActivity: n,
                      idx: l
                  }),
                  (0, i.jsx)(Y, {
                      entry: t,
                      currentUserActivity: n,
                      idx: l
                  })
              ]
          });
}
function X(e) {
    let { entries: t, currentUserActivity: n } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                K,
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
function J(e, t) {
    return t.reduce((t, n) => {
        if (n.type !== B.GOo.USER) return t;
        let i = n.party.currentActivities;
        if (0 === i.length) return t;
        for (let n of i) n.game.id === e && null != n.activity && t.push(n);
        return t;
    }, []);
}
function q(e) {
    let { gamingId: t, maxUserShowCount: n, userAffinityThresholdV1: i = 35, userAffinityThresholdV2: r = 0.0029 } = e,
        o = (0, Z.Ns)(t);
    (0, g.ZP)(() => {
        (0, N.W)(), (0, N._)();
    });
    let c = (0, u.e7)([k.Z], () => (null == t ? null : k.Z.getApplicationActivity(t)), [t]),
        h = (0, u.Wu)(
            [P.Z, L.Z, b.Z],
            () => {
                if (null == t) return [];
                let e = P.Z.nowPlayingCards,
                    n = {
                        v1: i,
                        v2: r
                    };
                return J(t, e).filter((e) => {
                    var t;
                    let i = e.activityUser.id,
                        l = L.Z.isFriend(i);
                    return (
                        !!(function (e, t, n) {
                            let { v1: i } = n;
                            return null == e ? t : e > i || t;
                        })(null === (t = b.Z.getUserAffinity(i)) || void 0 === t ? void 0 : t.affinity, l, n) ||
                        (function (e, t, n) {
                            let { v2: i } = n;
                            if (null == e) return t;
                            let { communicationProbability: l, dmProbability: r, serverMessageProbability: o, vcProbability: a } = e;
                            switch (!0) {
                                case l > i:
                                case r > i:
                                case o > i:
                                case a > i:
                                    return !0;
                                default:
                                    return t;
                            }
                        })(T.Z.getUserAffinity(i), l, n)
                    );
                });
            },
            [t, i, r]
        );
    return (
        (0, g.ZP)(() => (y.L(), () => y.v())),
        {
            entries: l.useMemo(() => {
                let e = o.filter((e) => !h.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...h.map((e) =>
                            (function (e) {
                                var t, n, i, l, r, o, u;
                                let c = null !== (r = null === (n = e.activity) || void 0 === n ? void 0 : null === (t = n.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== r ? r : Date.now();
                                return {
                                    id: W.default.fromTimestamp(c),
                                    author_id: e.activityUser.id,
                                    extra: {
                                        type: 'played_game_extra',
                                        game_name: null !== (o = null === (i = e.activity) || void 0 === i ? void 0 : i.name) && void 0 !== o ? o : e.game.name,
                                        application_id: null !== (u = null === (l = e.activity) || void 0 === l ? void 0 : l.application_id) && void 0 !== u ? u : e.game.id,
                                        fake_inventory_item: !0
                                    },
                                    content_type: s.s.PLAYED_GAME,
                                    author_type: a.i.USER,
                                    participants: e.playingMembers.map((e) => e.id),
                                    traits: [
                                        {
                                            type: d.N.IS_LIVE,
                                            is_live: !0
                                        }
                                    ]
                                };
                            })(e)
                        ),
                        ...e
                    ];
                return null != n ? t.slice(0, n) : t;
            }, [o, h, n]),
            currentUserActivity: c
        }
    );
}
function $(e) {
    let t = q(e);
    return (0, i.jsx)(X, { ...t });
}
function ee(e) {
    let { locked: t } = e,
        n = (0, F.II)(),
        r = null == n ? void 0 : n.id,
        o = null == n ? void 0 : n.altId,
        a = (0, Z.Ns)(r),
        s = (0, u.e7)([D.default], () => D.default.getCurrentUser()),
        h = null != o ? o : r,
        p = (0, u.e7)([k.Z], () => (null == h ? null : k.Z.getApplicationActivity(h)), [h]),
        f = (0, u.e7)([P.Z], () => (null != h ? J(h, P.Z.nowPlayingCards) : []), [h]);
    (0, g.ZP)(() => (y.L(), () => y.v()));
    let m = null != p && (0, E.Z)(p, B.xjy.JOIN),
        v = (0, x.q)(null == p ? void 0 : p.application_id),
        I = null != v && (0, z.yE)(v.flags, B.udG.EMBEDDED),
        C = q({
            gamingId: h,
            userAffinityThresholdV1: 17.5,
            userAffinityThresholdV2: 0.00145,
            maxUserShowCount: 12
        }),
        S = C.entries;
    return (
        l.useEffect(() => {
            if (null == p || t) return;
            let e = new Set([...a.map((e) => e.author_id), ...f.map((e) => e.activityUser.id)]),
                n = Array.from(e).filter(
                    (e) =>
                        null !=
                        S.find((t) => {
                            let { author_id: n } = t;
                            return e === n;
                        })
                ),
                i = Array.from(e).filter((e) => {
                    let t = S.find((t) => {
                        let { author_id: n } = t;
                        return e === n;
                    });
                    return (
                        null != t &&
                        t.traits.find((e) => {
                            let { type: t } = e;
                            return t === d.N.IS_LIVE;
                        })
                    );
                });
            (0, U.zi)(B.Odu.ACTIVITY, {
                locked: M.Z.isInstanceLocked(),
                shownUserIds: Array.from(n),
                liveUserIds: i,
                contentInventoryIds: a.map((e) => e.id)
            });
        }, [a, f, t, p, S]),
        0 === a.length && null == p
            ? null
            : (0, i.jsxs)('div', {
                  className: H.container,
                  children: [
                      null != p && null != s
                          ? (0, i.jsx)(w.Z, {
                                className: H.activityCard,
                                activity: p,
                                user: s,
                                currentUser: s,
                                appContext: B.IlC.OVERLAY
                            })
                          : null,
                      m && !I
                          ? (0, i.jsx)(c.zxk, {
                                className: H.inviteFriendsButton,
                                onClick: () => {
                                    (0, _.h7)(p, !1, B.IlC.POPOUT),
                                        (0, U.Ws)(B.Odu.ACTIVITY, {
                                            type: U.Qu.INVITE,
                                            value: U.bk.PANEL_OPENED
                                        });
                                },
                                size: c.PhG.SMALL,
                                color: c.Ttl.PRIMARY,
                                children: G.intl.string(G.t['6Qgren'])
                            })
                          : null,
                      (0, i.jsx)(X, { ...C })
                  ]
              })
    );
}

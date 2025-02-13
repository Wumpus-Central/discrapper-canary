n.d(t, {
    ZP: () => K,
    lX: () => Q
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
    c = n(442837),
    u = n(481060),
    h = n(278323),
    _ = n(24124),
    p = n(493683),
    f = n(13245),
    g = n(99690),
    m = n(493773),
    v = n(549879),
    E = n(620662),
    I = n(835473),
    x = n(194082),
    C = n(297781),
    S = n(656709),
    Z = n(567409),
    y = n(225559),
    b = n(703656),
    O = n(409057),
    N = n(199902),
    T = n(592125),
    w = n(293273),
    A = n(158776),
    k = n(594174),
    j = n(801077),
    R = n(237997),
    L = n(630388),
    D = n(5192),
    P = n(709054),
    M = n(444295),
    z = n(388627),
    V = n(981631),
    W = n(388032),
    U = n(147812);
function F(e) {
    let { entry: t, currentUserActivity: n, idx: r } = e,
        a = (0, c.e7)([k.default], () => k.default.getUser(t.author_id)),
        [s, d] = l.useState('unsent'),
        [_, g] = l.useState(!1);
    l.useEffect(() => {
        if ('sent' === s) {
            let e = setTimeout(() => g(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [s]);
    let m = null != n && (0, E.Z)(n, V.xjy.JOIN),
        I = async (e) => {
            if (null != a && 'unsent' === s) {
                e.stopPropagation();
                try {
                    if ((d('sending'), m))
                        await h.Z.sendActivityInviteUser({
                            type: V.mFx.JOIN,
                            userId: a.id,
                            activity: n,
                            location: V.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await p.Z.getOrEnsurePrivateChannel(a.id),
                            n = null !== (i = T.Z.getChannel(e)) && void 0 !== i ? i : null;
                        o()(null != n, 'Send channel must be defined'),
                            (0, b.uL)(V.Z5c.CHANNEL(n.guild_id, n.id)),
                            (0, v.i)(V.IlC.OVERLAY),
                            await (0, S.p)({
                                channel: n,
                                content: W.intl.string(W.t.DwAcMz),
                                entry: t,
                                whenReady: !0
                            });
                    }
                    f.Z.track(V.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: a.id,
                        target_content_entry_id: t.id,
                        target_index: r
                    }),
                        (0, M.Ws)(V.Odu.ACTIVITY, {
                            type: M.Qu.INVITE,
                            value: M.bk.INVITE_SENT,
                            userId: a.id
                        }),
                        d('sent');
                } catch (e) {
                    d('unsent');
                }
            }
        },
        x = async () => {
            var e;
            if (null == a) return;
            let t = await p.Z.getOrEnsurePrivateChannel(a.id),
                n = null !== (e = T.Z.getChannel(t)) && void 0 !== e ? e : null;
            o()(null != n, 'Send channel must be defined'),
                (0, b.uL)(V.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, v.i)(V.IlC.OVERLAY),
                (0, M.Ws)(V.Odu.ACTIVITY, {
                    type: M.Qu.REDIRECT,
                    value: M.bk.CHAT,
                    userId: a.id
                });
        },
        C = m ? W.intl.string(W.t['3fRyS0']) : W.intl.string(W.t.y9eo7e),
        Z = m
            ? (0, i.jsx)(u.ejJ, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(u.Uuj, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(u.ua7, {
        text: C,
        'aria-label': C,
        children: (e) =>
            (0, i.jsx)(u.zxk, {
                ...e,
                submitting: 'sending' === s,
                onClick: _ ? x : I,
                className: U.inviteButton,
                wrapperClassName: U.inviteButtonWrapper,
                innerClassName: U.inviteButtonInner,
                color: u.Ttl.TRANSPARENT,
                look: u.iLD.FILLED,
                size: u.PhG.ICON,
                grow: !1,
                children:
                    'sent' === s
                        ? _
                            ? (0, i.jsx)(u.kBi, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, i.jsx)(u.kSu, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                        : Z
            })
    });
}
function G(e) {
    var t;
    let { entry: n, currentUserActivity: r } = e,
        o = (0, c.e7)([k.default], () => k.default.getUser(n.author_id)),
        a = null !== (t = null == r ? void 0 : r.application_id) && void 0 !== t ? t : n.extra.application_id,
        s = (0, c.e7)([A.Z], () => (null != o ? A.Z.getApplicationActivity(o.id, a) : null), [a, o]),
        [d, _] = l.useState('unsent');
    if (!(null != s && (0, E.Z)(s, V.xjy.JOIN))) return null;
    let p = async (e) => {
            if (null != o && 'unsent' === d) {
                e.stopPropagation();
                try {
                    _('sending'),
                        await h.Z.sendActivityInviteUser({
                            type: V.mFx.JOIN_REQUEST,
                            userId: o.id,
                            activity: s,
                            location: V.Sbl.UNLOCKED_OVERLAY
                        }),
                        (0, M.Ws)(V.Odu.ACTIVITY, {
                            type: M.Qu.INVITE,
                            value: M.bk.JOIN_REQUEST_SENT,
                            userId: o.id
                        }),
                        _('sent');
                } catch (e) {
                    _('unsent');
                }
            }
        },
        f = W.intl.string(W.t.OKsSCQ);
    return (0, i.jsx)(u.ua7, {
        text: f,
        'aria-label': f,
        children: (e) =>
            (0, i.jsx)(u.zxk, {
                ...e,
                submitting: 'sending' === d,
                onClick: p,
                className: U.inviteButton,
                wrapperClassName: U.inviteButtonWrapper,
                innerClassName: U.inviteButtonInner,
                color: u.Ttl.TRANSPARENT,
                look: u.iLD.FILLED,
                size: u.PhG.ICON,
                grow: !1,
                children:
                    'sent' === d
                        ? (0, i.jsx)(u.kSu, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, i.jsx)(u.V9, {
                              color: 'currentColor',
                              size: 'sm'
                          })
            })
    });
}
function B(e) {
    let { entry: t, currentUserActivity: n, idx: l } = e,
        r = (0, c.e7)([k.default], () => k.default.getUser(t.author_id)),
        o = (0, c.e7)([N.Z], () => (null != r ? N.Z.getAnyStreamForUser(r.id) : null), [r]),
        { isMobileOnline: a, status: s } = (0, c.cj)(
            [A.Z],
            () =>
                null == r
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: A.Z.isMobileOnline(r.id),
                          status: A.Z.getStatus(r.id)
                      },
            [r]
        );
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: U.row,
              children: [
                  (0, i.jsx)(g.Z, {
                      className: U.avatar,
                      user: r,
                      isMobile: a,
                      status: s
                  }),
                  (0, i.jsxs)('div', {
                      className: U.details,
                      children: [
                          (0, i.jsxs)('div', {
                              className: U.usernameWrapper,
                              children: [
                                  (0, i.jsx)(u.Text, {
                                      className: U.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: D.ZP.getName(void 0, void 0, r)
                                  }),
                                  null != o && (0, i.jsx)(x.ZP, { className: U.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(C.Gk, {
                              location: C.Gt.OVERLAY,
                              className: U.badgesContainer,
                              children: [C.OV, C.wO, C.f, C.v1, C.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(G, {
                      entry: t,
                      currentUserActivity: n,
                      idx: l
                  }),
                  (0, i.jsx)(F, {
                      entry: t,
                      currentUserActivity: n,
                      idx: l
                  })
              ]
          });
}
function H(e) {
    let { entries: t, currentUserActivity: n } = e,
        l = t.slice(0, 5);
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e, t) =>
            (0, i.jsx)(
                B,
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
function Y(e, t) {
    return t.reduce((t, n) => {
        if (n.type !== V.GOo.USER) return t;
        let i = n.party.currentActivities;
        if (0 === i.length) return t;
        for (let n of i) n.game.id === e && null != n.activity && t.push(n);
        return t;
    }, []);
}
function Q(e) {
    let { gamingId: t } = e,
        n = (0, Z.Ns)(t),
        r = (0, c.e7)([w.Z], () => (null == t ? null : w.Z.getApplicationActivity(t)), [t]),
        o = (0, c.e7)([j.Z], () => (null != t ? Y(t, j.Z.nowPlayingCards) : []), [t]);
    (0, m.ZP)(() => (y.L(), () => y.v()));
    let u = l.useMemo(() => {
        let e = n.filter((e) => !o.some((t) => t.activityUser.id === e.author_id));
        return [
            ...o.map((e) =>
                (function (e) {
                    var t, n, i, l, r, o, c;
                    let u = null !== (r = null === (n = e.activity) || void 0 === n ? void 0 : null === (t = n.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== r ? r : Date.now();
                    return {
                        id: P.default.fromTimestamp(u),
                        author_id: e.activityUser.id,
                        extra: {
                            type: 'played_game_extra',
                            game_name: null !== (o = null === (i = e.activity) || void 0 === i ? void 0 : i.name) && void 0 !== o ? o : e.game.name,
                            application_id: null !== (c = null === (l = e.activity) || void 0 === l ? void 0 : l.application_id) && void 0 !== c ? c : e.game.id
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
    }, [n, o]);
    return (0, i.jsx)(H, {
        entries: u,
        currentUserActivity: r
    });
}
function K(e) {
    let { locked: t } = e,
        n = (0, z.II)(),
        r = null == n ? void 0 : n.id,
        o = null == n ? void 0 : n.altId,
        a = (0, Z.Ns)(r),
        s = (0, c.e7)([k.default], () => k.default.getCurrentUser()),
        d = null != o ? o : r,
        h = (0, c.e7)([w.Z], () => (null == d ? null : w.Z.getApplicationActivity(d)), [d]),
        p = (0, c.e7)([j.Z], () => (null != d ? Y(d, j.Z.nowPlayingCards) : []), [d]);
    (0, m.ZP)(() => (y.L(), () => y.v()));
    let f = null != h && (0, E.Z)(h, V.xjy.JOIN),
        g = (0, I.q)(null == h ? void 0 : h.application_id),
        v = null != g && (0, L.yE)(g.flags, V.udG.EMBEDDED);
    return (
        l.useEffect(() => {
            if (null == h || t) return;
            let e = a.map((e) => e.author_id),
                n = p.map((e) => e.activityUser.id);
            (0, M.zi)(V.Odu.ACTIVITY, {
                locked: R.Z.isInstanceLocked(),
                shownUserIds: Array.from(new Set([...e, ...n])),
                liveUserIds: [],
                contentInventoryIds: a.map((e) => e.id)
            });
        }, [a, p, t, h]),
        0 === a.length && null == h
            ? null
            : (0, i.jsxs)('div', {
                  className: U.container,
                  children: [
                      null != h && null != s
                          ? (0, i.jsx)(O.Z, {
                                className: U.activityCard,
                                activity: h,
                                user: s,
                                currentUser: s,
                                appContext: V.IlC.OVERLAY
                            })
                          : null,
                      f && !v
                          ? (0, i.jsx)(u.zxk, {
                                className: U.inviteFriendsButton,
                                onClick: () => {
                                    (0, _.h7)(h, !1, V.IlC.POPOUT),
                                        (0, M.Ws)(V.Odu.ACTIVITY, {
                                            type: M.Qu.INVITE,
                                            value: M.bk.PANEL_OPENED
                                        });
                                },
                                size: u.PhG.SMALL,
                                color: u.Ttl.PRIMARY,
                                children: W.intl.string(W.t['6Qgren'])
                            })
                          : null,
                      (0, i.jsx)(Q, { gamingId: d })
                  ]
              })
    );
}

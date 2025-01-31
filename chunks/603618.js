i.d(e, {
    Z: () => U,
    i: () => P
}),
    i(47120),
    i(789020);
var n = i(200651),
    l = i(192379),
    s = i(512722),
    o = i.n(s),
    r = i(442837),
    a = i(481060),
    d = i(278323),
    u = i(24124),
    c = i(493683),
    h = i(13245),
    E = i(99690),
    p = i(620662),
    S = i(835473),
    f = i(194082),
    g = i(297781),
    _ = i(656709),
    m = i(567409),
    v = i(703656),
    I = i(409057),
    Z = i(199902),
    O = i(592125),
    C = i(293273),
    N = i(158776),
    y = i(594174),
    T = i(630388),
    R = i(5192),
    x = i(358085),
    A = i(998502),
    D = i(388627),
    L = i(981631),
    M = i(388032),
    w = i(13663);
function z(t) {
    let { entry: e, currentUserActivity: i, idx: s } = t,
        u = (0, r.e7)([y.default], () => y.default.getUser(e.author_id)),
        [E, S] = l.useState('unsent'),
        [f, g] = l.useState(!1);
    l.useEffect(() => {
        if ('sent' === E) {
            let t = setTimeout(() => g(!0), 2000);
            return () => clearTimeout(t);
        }
    }, [E]);
    let m = null != i && (0, p.Z)(i, L.xjy.JOIN),
        I = async (t) => {
            if (null != u && 'unsent' === E) {
                t.stopPropagation();
                try {
                    if ((S('sending'), m))
                        await d.Z.sendActivityInviteUser({
                            type: L.mFx.JOIN,
                            userId: u.id,
                            activity: i,
                            location: L.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var n;
                        let t = await c.Z.getOrEnsurePrivateChannel(u.id),
                            i = null !== (n = O.Z.getChannel(t)) && void 0 !== n ? n : null;
                        o()(null != i, 'Send channel must be defined'),
                            (0, v.uL)(L.Z5c.CHANNEL(i.guild_id, i.id)),
                            await (0, _.p)({
                                channel: i,
                                content: M.intl.string(M.t.DwAcMz),
                                entry: e,
                                whenReady: !0
                            });
                    }
                    h.Z.track(L.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: u.id,
                        target_content_entry_id: e.id,
                        target_index: s
                    }),
                        S('sent');
                } catch (t) {
                    S('unsent');
                }
            }
        },
        Z = async () => {
            var t;
            if (null == u) return;
            let e = await c.Z.getOrEnsurePrivateChannel(u.id),
                i = null !== (t = O.Z.getChannel(e)) && void 0 !== t ? t : null;
            o()(null != i, 'Send channel must be defined'), (0, v.uL)(L.Z5c.CHANNEL(i.guild_id, i.id)), x.isPlatformEmbedded && A.ZP.focus();
        },
        C = m ? M.intl.string(M.t['3fRyS0']) : M.intl.string(M.t.y9eo7e),
        N = m
            ? (0, n.jsx)(a.ejJ, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, n.jsx)(a.Uuj, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, n.jsx)(a.ua7, {
        text: C,
        'aria-label': C,
        children: (t) =>
            (0, n.jsx)(a.zxk, {
                ...t,
                submitting: 'sending' === E,
                onClick: f ? Z : I,
                className: w.inviteButton,
                wrapperClassName: w.inviteButtonWrapper,
                innerClassName: w.inviteButtonInner,
                color: a.Ttl.TRANSPARENT,
                look: a.iLD.FILLED,
                size: a.PhG.ICON,
                grow: !1,
                children:
                    'sent' === E
                        ? f
                            ? (0, n.jsx)(a.kBi, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, n.jsx)(a.kSu, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                        : N
            })
    });
}
function k(t) {
    var e;
    let { entry: i, currentUserActivity: s } = t,
        o = (0, r.e7)([y.default], () => y.default.getUser(i.author_id)),
        u = null !== (e = null == s ? void 0 : s.application_id) && void 0 !== e ? e : i.extra.application_id,
        c = (0, r.e7)([N.Z], () => (null != o ? N.Z.getApplicationActivity(o.id, u) : null), [u, o]),
        [h, E] = l.useState('unsent');
    if (!(null != c && (0, p.Z)(c, L.xjy.JOIN))) return null;
    let S = async (t) => {
            if (null != o && 'unsent' === h) {
                t.stopPropagation();
                try {
                    E('sending'),
                        await d.Z.sendActivityInviteUser({
                            type: L.mFx.JOIN_REQUEST,
                            userId: o.id,
                            activity: c,
                            location: L.Sbl.UNLOCKED_OVERLAY
                        }),
                        E('sent');
                } catch (t) {
                    E('unsent');
                }
            }
        },
        f = M.intl.string(M.t.OKsSCQ);
    return (0, n.jsx)(a.ua7, {
        text: f,
        'aria-label': f,
        children: (t) =>
            (0, n.jsx)(a.zxk, {
                ...t,
                submitting: 'sending' === h,
                onClick: S,
                className: w.inviteButton,
                wrapperClassName: w.inviteButtonWrapper,
                innerClassName: w.inviteButtonInner,
                color: a.Ttl.TRANSPARENT,
                look: a.iLD.FILLED,
                size: a.PhG.ICON,
                grow: !1,
                children:
                    'sent' === h
                        ? (0, n.jsx)(a.kSu, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, n.jsx)(a.V9, {
                              color: 'currentColor',
                              size: 'sm'
                          })
            })
    });
}
function b(t) {
    let { entry: e, currentUserActivity: i, idx: l } = t,
        s = (0, r.e7)([y.default], () => y.default.getUser(e.author_id)),
        o = (0, r.e7)([Z.Z], () => (null != s ? Z.Z.getAnyStreamForUser(s.id) : null), [s]),
        { isMobileOnline: d, status: u } = (0, r.cj)(
            [N.Z],
            () =>
                null == s
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: N.Z.isMobileOnline(s.id),
                          status: N.Z.getStatus(s.id)
                      },
            [s]
        );
    return null == s
        ? null
        : (0, n.jsxs)('div', {
              className: w.row,
              children: [
                  (0, n.jsx)(E.Z, {
                      className: w.avatar,
                      user: s,
                      isMobile: d,
                      status: u
                  }),
                  (0, n.jsxs)('div', {
                      className: w.details,
                      children: [
                          (0, n.jsxs)('div', {
                              className: w.usernameWrapper,
                              children: [
                                  (0, n.jsx)(a.Text, {
                                      className: w.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: R.ZP.getName(void 0, void 0, s)
                                  }),
                                  null != o && (0, n.jsx)(f.ZP, { className: w.liveIndicator })
                              ]
                          }),
                          (0, n.jsx)(g.Gk, {
                              location: g.Gt.OVERLAY,
                              className: w.badgesContainer,
                              children: [g.OV, g.wO, g.f, g.v1, g.pQ].map((t, i) => (0, n.jsx)(t, { entry: e }, 'entry-'.concat(i)))
                          })
                      ]
                  }),
                  (0, n.jsx)(k, {
                      entry: e,
                      currentUserActivity: i,
                      idx: l
                  }),
                  (0, n.jsx)(z, {
                      entry: e,
                      currentUserActivity: i,
                      idx: l
                  })
              ]
          });
}
function P(t) {
    let { entries: e, currentUserActivity: i } = t,
        l = e.slice(0, 5);
    return (0, n.jsx)(n.Fragment, {
        children: l.map((t, e) =>
            (0, n.jsx)(
                b,
                {
                    idx: e,
                    entry: t,
                    currentUserActivity: i
                },
                e
            )
        )
    });
}
function U() {
    let t = (0, D.II)(),
        e = null == t ? void 0 : t.id,
        i = null == t ? void 0 : t.altId,
        l = (0, m.Ns)(e),
        s = (0, r.e7)([y.default], () => y.default.getCurrentUser()),
        o = (0, r.e7)([C.Z], () => (null != i ? C.Z.getApplicationActivity(i) : null != e ? C.Z.getApplicationActivity(e) : null)),
        d = null != o && (0, p.Z)(o, L.xjy.JOIN),
        c = (0, S.q)(null == o ? void 0 : o.application_id),
        h = null != c && (0, T.yE)(c.flags, L.udG.EMBEDDED);
    return 0 === l.length && null == o
        ? null
        : (0, n.jsxs)('div', {
              className: w.container,
              children: [
                  null != o && null != s
                      ? (0, n.jsx)(I.Z, {
                            className: w.activityCard,
                            activity: o,
                            user: s,
                            currentUser: s
                        })
                      : null,
                  d && !h
                      ? (0, n.jsx)(a.zxk, {
                            className: w.inviteFriendsButton,
                            onClick: () => (0, u.h7)(o, !1, L.IlC.POPOUT),
                            size: a.PhG.SMALL,
                            color: a.Ttl.PRIMARY,
                            children: M.intl.string(M.t['6Qgren'])
                        })
                      : null,
                  (0, n.jsx)(P, {
                      entries: l,
                      currentUserActivity: o
                  })
              ]
          });
}

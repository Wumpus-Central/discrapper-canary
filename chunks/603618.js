n.d(t, {
    Z: () => V,
    i: () => z
}),
    n(47120),
    n(789020);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    d = n(278323),
    c = n(24124),
    u = n(493683),
    h = n(13245),
    _ = n(99690),
    p = n(549879),
    f = n(620662),
    g = n(835473),
    m = n(194082),
    v = n(297781),
    E = n(656709),
    I = n(567409),
    x = n(703656),
    C = n(409057),
    S = n(199902),
    Z = n(592125),
    y = n(293273),
    b = n(158776),
    O = n(594174),
    N = n(237997),
    T = n(630388),
    w = n(5192),
    k = n(444295),
    A = n(388627),
    j = n(981631),
    R = n(388032),
    L = n(147812);
function D(e) {
    let { entry: t, currentUserActivity: n, idx: l } = e,
        c = (0, a.e7)([O.default], () => O.default.getUser(t.author_id)),
        [_, g] = r.useState('unsent'),
        [m, v] = r.useState(!1);
    r.useEffect(() => {
        if ('sent' === _) {
            let e = setTimeout(() => v(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [_]);
    let I = null != n && (0, f.Z)(n, j.xjy.JOIN),
        C = async (e) => {
            if (null != c && 'unsent' === _) {
                e.stopPropagation();
                try {
                    if ((g('sending'), I))
                        await d.Z.sendActivityInviteUser({
                            type: j.mFx.JOIN,
                            userId: c.id,
                            activity: n,
                            location: j.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await u.Z.getOrEnsurePrivateChannel(c.id),
                            n = null !== (i = Z.Z.getChannel(e)) && void 0 !== i ? i : null;
                        o()(null != n, 'Send channel must be defined'),
                            (0, x.uL)(j.Z5c.CHANNEL(n.guild_id, n.id)),
                            (0, p.i)(j.IlC.OVERLAY),
                            await (0, E.p)({
                                channel: n,
                                content: R.intl.string(R.t.DwAcMz),
                                entry: t,
                                whenReady: !0
                            });
                    }
                    h.Z.track(j.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: c.id,
                        target_content_entry_id: t.id,
                        target_index: l
                    }),
                        (0, k.Ws)(j.Odu.ACTIVITY, {
                            type: k.Qu.INVITE,
                            value: k.bk.INVITE_SENT,
                            userId: c.id
                        }),
                        g('sent');
                } catch (e) {
                    g('unsent');
                }
            }
        },
        S = async () => {
            var e;
            if (null == c) return;
            let t = await u.Z.getOrEnsurePrivateChannel(c.id),
                n = null !== (e = Z.Z.getChannel(t)) && void 0 !== e ? e : null;
            o()(null != n, 'Send channel must be defined'),
                (0, x.uL)(j.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, p.i)(j.IlC.OVERLAY),
                (0, k.Ws)(j.Odu.ACTIVITY, {
                    type: k.Qu.REDIRECT,
                    value: k.bk.CHAT,
                    userId: c.id
                });
        },
        y = I ? R.intl.string(R.t['3fRyS0']) : R.intl.string(R.t.y9eo7e),
        b = I
            ? (0, i.jsx)(s.ejJ, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(s.Uuj, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(s.ua7, {
        text: y,
        'aria-label': y,
        children: (e) =>
            (0, i.jsx)(s.zxk, {
                ...e,
                submitting: 'sending' === _,
                onClick: m ? S : C,
                className: L.inviteButton,
                wrapperClassName: L.inviteButtonWrapper,
                innerClassName: L.inviteButtonInner,
                color: s.Ttl.TRANSPARENT,
                look: s.iLD.FILLED,
                size: s.PhG.ICON,
                grow: !1,
                children:
                    'sent' === _
                        ? m
                            ? (0, i.jsx)(s.kBi, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, i.jsx)(s.kSu, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                        : b
            })
    });
}
function P(e) {
    var t;
    let { entry: n, currentUserActivity: l } = e,
        o = (0, a.e7)([O.default], () => O.default.getUser(n.author_id)),
        c = null !== (t = null == l ? void 0 : l.application_id) && void 0 !== t ? t : n.extra.application_id,
        u = (0, a.e7)([b.Z], () => (null != o ? b.Z.getApplicationActivity(o.id, c) : null), [c, o]),
        [h, _] = r.useState('unsent');
    if (!(null != u && (0, f.Z)(u, j.xjy.JOIN))) return null;
    let p = async (e) => {
            if (null != o && 'unsent' === h) {
                e.stopPropagation();
                try {
                    _('sending'),
                        await d.Z.sendActivityInviteUser({
                            type: j.mFx.JOIN_REQUEST,
                            userId: o.id,
                            activity: u,
                            location: j.Sbl.UNLOCKED_OVERLAY
                        }),
                        (0, k.Ws)(j.Odu.ACTIVITY, {
                            type: k.Qu.INVITE,
                            value: k.bk.JOIN_REQUEST_SENT,
                            userId: o.id
                        }),
                        _('sent');
                } catch (e) {
                    _('unsent');
                }
            }
        },
        g = R.intl.string(R.t.OKsSCQ);
    return (0, i.jsx)(s.ua7, {
        text: g,
        'aria-label': g,
        children: (e) =>
            (0, i.jsx)(s.zxk, {
                ...e,
                submitting: 'sending' === h,
                onClick: p,
                className: L.inviteButton,
                wrapperClassName: L.inviteButtonWrapper,
                innerClassName: L.inviteButtonInner,
                color: s.Ttl.TRANSPARENT,
                look: s.iLD.FILLED,
                size: s.PhG.ICON,
                grow: !1,
                children:
                    'sent' === h
                        ? (0, i.jsx)(s.kSu, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, i.jsx)(s.V9, {
                              color: 'currentColor',
                              size: 'sm'
                          })
            })
    });
}
function M(e) {
    let { entry: t, currentUserActivity: n, idx: r } = e,
        l = (0, a.e7)([O.default], () => O.default.getUser(t.author_id)),
        o = (0, a.e7)([S.Z], () => (null != l ? S.Z.getAnyStreamForUser(l.id) : null), [l]),
        { isMobileOnline: d, status: c } = (0, a.cj)(
            [b.Z],
            () =>
                null == l
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: b.Z.isMobileOnline(l.id),
                          status: b.Z.getStatus(l.id)
                      },
            [l]
        );
    return null == l
        ? null
        : (0, i.jsxs)('div', {
              className: L.row,
              children: [
                  (0, i.jsx)(_.Z, {
                      className: L.avatar,
                      user: l,
                      isMobile: d,
                      status: c
                  }),
                  (0, i.jsxs)('div', {
                      className: L.details,
                      children: [
                          (0, i.jsxs)('div', {
                              className: L.usernameWrapper,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      className: L.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: w.ZP.getName(void 0, void 0, l)
                                  }),
                                  null != o && (0, i.jsx)(m.ZP, { className: L.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(v.Gk, {
                              location: v.Gt.OVERLAY,
                              className: L.badgesContainer,
                              children: [v.OV, v.wO, v.f, v.v1, v.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(P, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r
                  }),
                  (0, i.jsx)(D, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r
                  })
              ]
          });
}
function z(e) {
    let { entries: t, currentUserActivity: n } = e,
        r = t.slice(0, 5);
    return (0, i.jsx)(i.Fragment, {
        children: r.map((e, t) =>
            (0, i.jsx)(
                M,
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
function V(e) {
    let { locked: t } = e,
        n = (0, A.II)(),
        l = null == n ? void 0 : n.id,
        o = null == n ? void 0 : n.altId,
        d = (0, I.Ns)(l),
        u = (0, a.e7)([O.default], () => O.default.getCurrentUser()),
        h = (0, a.e7)([y.Z], () => (null != o ? y.Z.getApplicationActivity(o) : null != l ? y.Z.getApplicationActivity(l) : null)),
        _ = null != h && (0, f.Z)(h, j.xjy.JOIN),
        p = (0, g.q)(null == h ? void 0 : h.application_id),
        m = null != p && (0, T.yE)(p.flags, j.udG.EMBEDDED);
    return (
        r.useEffect(() => {
            if (null == h || t) return;
            let e = d.map((e) => e.author_id);
            (0, k.zi)(j.Odu.ACTIVITY, {
                locked: N.Z.isInstanceLocked(),
                shownUserIds: Array.from(e),
                liveUserIds: [],
                contentInventoryIds: d.map((e) => e.id)
            });
        }, [d, t, h]),
        0 === d.length && null == h
            ? null
            : (0, i.jsxs)('div', {
                  className: L.container,
                  children: [
                      null != h && null != u
                          ? (0, i.jsx)(C.Z, {
                                className: L.activityCard,
                                activity: h,
                                user: u,
                                currentUser: u,
                                appContext: j.IlC.OVERLAY
                            })
                          : null,
                      _ && !m
                          ? (0, i.jsx)(s.zxk, {
                                className: L.inviteFriendsButton,
                                onClick: () => {
                                    (0, c.h7)(h, !1, j.IlC.POPOUT),
                                        (0, k.Ws)(j.Odu.ACTIVITY, {
                                            type: k.Qu.INVITE,
                                            value: k.bk.PANEL_OPENED
                                        });
                                },
                                size: s.PhG.SMALL,
                                color: s.Ttl.PRIMARY,
                                children: R.intl.string(R.t['6Qgren'])
                            })
                          : null,
                      (0, i.jsx)(z, {
                          entries: d,
                          currentUserActivity: h
                      })
                  ]
              })
    );
}

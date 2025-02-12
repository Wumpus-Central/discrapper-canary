n.d(t, {
    Z: () => V,
    i: () => z
}),
    n(47120),
    n(789020);
var i = n(200651),
    o = n(192379),
    r = n(512722),
    l = n.n(r),
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
    x = n(656709),
    E = n(567409),
    C = n(703656),
    Z = n(409057),
    I = n(199902),
    S = n(592125),
    b = n(293273),
    y = n(158776),
    w = n(594174),
    O = n(630388),
    N = n(5192),
    T = n(358085),
    j = n(998502),
    k = n(388627),
    R = n(981631),
    A = n(388032),
    L = n(147812);
function P(e) {
    let { entry: t, currentUserActivity: n, idx: r } = e,
        c = (0, a.e7)([w.default], () => w.default.getUser(t.author_id)),
        [_, g] = o.useState('unsent'),
        [m, v] = o.useState(!1);
    o.useEffect(() => {
        if ('sent' === _) {
            let e = setTimeout(() => v(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [_]);
    let E = null != n && (0, f.Z)(n, R.xjy.JOIN),
        Z = async (e) => {
            if (null != c && 'unsent' === _) {
                e.stopPropagation();
                try {
                    if ((g('sending'), E))
                        await d.Z.sendActivityInviteUser({
                            type: R.mFx.JOIN,
                            userId: c.id,
                            activity: n,
                            location: R.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await u.Z.getOrEnsurePrivateChannel(c.id),
                            n = null !== (i = S.Z.getChannel(e)) && void 0 !== i ? i : null;
                        l()(null != n, 'Send channel must be defined'),
                            (0, C.uL)(R.Z5c.CHANNEL(n.guild_id, n.id)),
                            (0, p.i)(R.IlC.OVERLAY),
                            await (0, x.p)({
                                channel: n,
                                content: A.intl.string(A.t.DwAcMz),
                                entry: t,
                                whenReady: !0
                            });
                    }
                    h.Z.track(R.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: c.id,
                        target_content_entry_id: t.id,
                        target_index: r
                    }),
                        g('sent');
                } catch (e) {
                    g('unsent');
                }
            }
        },
        I = async () => {
            var e;
            if (null == c) return;
            let t = await u.Z.getOrEnsurePrivateChannel(c.id),
                n = null !== (e = S.Z.getChannel(t)) && void 0 !== e ? e : null;
            l()(null != n, 'Send channel must be defined'), (0, C.uL)(R.Z5c.CHANNEL(n.guild_id, n.id)), (0, p.i)(R.IlC.OVERLAY), T.isPlatformEmbedded && j.ZP.focus();
        },
        b = E ? A.intl.string(A.t['3fRyS0']) : A.intl.string(A.t.y9eo7e),
        y = E
            ? (0, i.jsx)(s.ejJ, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(s.Uuj, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(s.ua7, {
        text: b,
        'aria-label': b,
        children: (e) =>
            (0, i.jsx)(s.zxk, {
                ...e,
                submitting: 'sending' === _,
                onClick: m ? I : Z,
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
                        : y
            })
    });
}
function D(e) {
    var t;
    let { entry: n, currentUserActivity: r } = e,
        l = (0, a.e7)([w.default], () => w.default.getUser(n.author_id)),
        c = null !== (t = null == r ? void 0 : r.application_id) && void 0 !== t ? t : n.extra.application_id,
        u = (0, a.e7)([y.Z], () => (null != l ? y.Z.getApplicationActivity(l.id, c) : null), [c, l]),
        [h, _] = o.useState('unsent');
    if (!(null != u && (0, f.Z)(u, R.xjy.JOIN))) return null;
    let p = async (e) => {
            if (null != l && 'unsent' === h) {
                e.stopPropagation();
                try {
                    _('sending'),
                        await d.Z.sendActivityInviteUser({
                            type: R.mFx.JOIN_REQUEST,
                            userId: l.id,
                            activity: u,
                            location: R.Sbl.UNLOCKED_OVERLAY
                        }),
                        _('sent');
                } catch (e) {
                    _('unsent');
                }
            }
        },
        g = A.intl.string(A.t.OKsSCQ);
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
    let { entry: t, currentUserActivity: n, idx: o } = e,
        r = (0, a.e7)([w.default], () => w.default.getUser(t.author_id)),
        l = (0, a.e7)([I.Z], () => (null != r ? I.Z.getAnyStreamForUser(r.id) : null), [r]),
        { isMobileOnline: d, status: c } = (0, a.cj)(
            [y.Z],
            () =>
                null == r
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: y.Z.isMobileOnline(r.id),
                          status: y.Z.getStatus(r.id)
                      },
            [r]
        );
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: L.row,
              children: [
                  (0, i.jsx)(_.Z, {
                      className: L.avatar,
                      user: r,
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
                                      children: N.ZP.getName(void 0, void 0, r)
                                  }),
                                  null != l && (0, i.jsx)(m.ZP, { className: L.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(v.Gk, {
                              location: v.Gt.OVERLAY,
                              className: L.badgesContainer,
                              children: [v.OV, v.wO, v.f, v.v1, v.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(D, {
                      entry: t,
                      currentUserActivity: n,
                      idx: o
                  }),
                  (0, i.jsx)(P, {
                      entry: t,
                      currentUserActivity: n,
                      idx: o
                  })
              ]
          });
}
function z(e) {
    let { entries: t, currentUserActivity: n } = e,
        o = t.slice(0, 5);
    return (0, i.jsx)(i.Fragment, {
        children: o.map((e, t) =>
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
function V() {
    let e = (0, k.II)(),
        t = null == e ? void 0 : e.id,
        n = null == e ? void 0 : e.altId,
        o = (0, E.Ns)(t),
        r = (0, a.e7)([w.default], () => w.default.getCurrentUser()),
        l = (0, a.e7)([b.Z], () => (null != n ? b.Z.getApplicationActivity(n) : null != t ? b.Z.getApplicationActivity(t) : null)),
        d = null != l && (0, f.Z)(l, R.xjy.JOIN),
        u = (0, g.q)(null == l ? void 0 : l.application_id),
        h = null != u && (0, O.yE)(u.flags, R.udG.EMBEDDED);
    return 0 === o.length && null == l
        ? null
        : (0, i.jsxs)('div', {
              className: L.container,
              children: [
                  null != l && null != r
                      ? (0, i.jsx)(Z.Z, {
                            className: L.activityCard,
                            activity: l,
                            user: r,
                            currentUser: r,
                            appContext: R.IlC.OVERLAY
                        })
                      : null,
                  d && !h
                      ? (0, i.jsx)(s.zxk, {
                            className: L.inviteFriendsButton,
                            onClick: () => (0, c.h7)(l, !1, R.IlC.POPOUT),
                            size: s.PhG.SMALL,
                            color: s.Ttl.PRIMARY,
                            children: A.intl.string(A.t['6Qgren'])
                        })
                      : null,
                  (0, i.jsx)(z, {
                      entries: o,
                      currentUserActivity: l
                  })
              ]
          });
}

n.d(t, {
    Z: () => z,
    i: () => D
}),
    n(47120),
    n(789020);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    d = n(278323),
    c = n(24124),
    u = n(493683),
    h = n(13245),
    _ = n(99690),
    p = n(620662),
    g = n(835473),
    f = n(194082),
    m = n(297781),
    v = n(656709),
    x = n(567409),
    E = n(703656),
    Z = n(409057),
    C = n(199902),
    I = n(592125),
    S = n(293273),
    b = n(158776),
    y = n(594174),
    N = n(630388),
    w = n(5192),
    T = n(358085),
    O = n(998502),
    j = n(388627),
    k = n(981631),
    R = n(388032),
    A = n(13663);
function L(e) {
    let { entry: t, currentUserActivity: n, idx: r } = e,
        c = (0, a.e7)([y.default], () => y.default.getUser(t.author_id)),
        [_, g] = l.useState('unsent'),
        [f, m] = l.useState(!1);
    l.useEffect(() => {
        if ('sent' === _) {
            let e = setTimeout(() => m(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [_]);
    let x = null != n && (0, p.Z)(n, k.xjy.JOIN),
        Z = async (e) => {
            if (null != c && 'unsent' === _) {
                e.stopPropagation();
                try {
                    if ((g('sending'), x))
                        await d.Z.sendActivityInviteUser({
                            type: k.mFx.JOIN,
                            userId: c.id,
                            activity: n,
                            location: k.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await u.Z.getOrEnsurePrivateChannel(c.id),
                            n = null !== (i = I.Z.getChannel(e)) && void 0 !== i ? i : null;
                        o()(null != n, 'Send channel must be defined'),
                            (0, E.uL)(k.Z5c.CHANNEL(n.guild_id, n.id)),
                            await (0, v.p)({
                                channel: n,
                                content: R.intl.string(R.t.DwAcMz),
                                entry: t,
                                whenReady: !0
                            });
                    }
                    h.Z.track(k.rMx.OVERLAY_GAME_INVITE_SENT, {
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
        C = async () => {
            var e;
            if (null == c) return;
            let t = await u.Z.getOrEnsurePrivateChannel(c.id),
                n = null !== (e = I.Z.getChannel(t)) && void 0 !== e ? e : null;
            o()(null != n, 'Send channel must be defined'), (0, E.uL)(k.Z5c.CHANNEL(n.guild_id, n.id)), T.isPlatformEmbedded && O.ZP.focus();
        },
        S = x ? R.intl.string(R.t['3fRyS0']) : R.intl.string(R.t.y9eo7e),
        b = x
            ? (0, i.jsx)(s.ejJ, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(s.Uuj, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(s.ua7, {
        text: S,
        'aria-label': S,
        children: (e) =>
            (0, i.jsx)(s.zxk, {
                ...e,
                submitting: 'sending' === _,
                onClick: f ? C : Z,
                className: A.inviteButton,
                wrapperClassName: A.inviteButtonWrapper,
                innerClassName: A.inviteButtonInner,
                color: s.Ttl.TRANSPARENT,
                look: s.iLD.FILLED,
                size: s.PhG.ICON,
                grow: !1,
                children:
                    'sent' === _
                        ? f
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
function M(e) {
    var t;
    let { entry: n, currentUserActivity: r } = e,
        o = (0, a.e7)([y.default], () => y.default.getUser(n.author_id)),
        c = null !== (t = null == r ? void 0 : r.application_id) && void 0 !== t ? t : n.extra.application_id,
        u = (0, a.e7)([b.Z], () => (null != o ? b.Z.getApplicationActivity(o.id, c) : null), [c, o]),
        [h, _] = l.useState('unsent');
    if (!(null != u && (0, p.Z)(u, k.xjy.JOIN))) return null;
    let g = async (e) => {
            if (null != o && 'unsent' === h) {
                e.stopPropagation();
                try {
                    _('sending'),
                        await d.Z.sendActivityInviteUser({
                            type: k.mFx.JOIN_REQUEST,
                            userId: o.id,
                            activity: u,
                            location: k.Sbl.UNLOCKED_OVERLAY
                        }),
                        _('sent');
                } catch (e) {
                    _('unsent');
                }
            }
        },
        f = R.intl.string(R.t.OKsSCQ);
    return (0, i.jsx)(s.ua7, {
        text: f,
        'aria-label': f,
        children: (e) =>
            (0, i.jsx)(s.zxk, {
                ...e,
                submitting: 'sending' === h,
                onClick: g,
                className: A.inviteButton,
                wrapperClassName: A.inviteButtonWrapper,
                innerClassName: A.inviteButtonInner,
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
function P(e) {
    let { entry: t, currentUserActivity: n, idx: l } = e,
        r = (0, a.e7)([y.default], () => y.default.getUser(t.author_id)),
        o = (0, a.e7)([C.Z], () => (null != r ? C.Z.getAnyStreamForUser(r.id) : null), [r]),
        { isMobileOnline: d, status: c } = (0, a.cj)(
            [b.Z],
            () =>
                null == r
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: b.Z.isMobileOnline(r.id),
                          status: b.Z.getStatus(r.id)
                      },
            [r]
        );
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: A.row,
              children: [
                  (0, i.jsx)(_.Z, {
                      className: A.avatar,
                      user: r,
                      isMobile: d,
                      status: c
                  }),
                  (0, i.jsxs)('div', {
                      className: A.details,
                      children: [
                          (0, i.jsxs)('div', {
                              className: A.usernameWrapper,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      className: A.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: w.ZP.getName(void 0, void 0, r)
                                  }),
                                  null != o && (0, i.jsx)(f.ZP, { className: A.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(m.Gk, {
                              location: m.Gt.OVERLAY,
                              className: A.badgesContainer,
                              children: [m.OV, m.wO, m.f, m.v1, m.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(M, {
                      entry: t,
                      currentUserActivity: n,
                      idx: l
                  }),
                  (0, i.jsx)(L, {
                      entry: t,
                      currentUserActivity: n,
                      idx: l
                  })
              ]
          });
}
function D(e) {
    let { entries: t, currentUserActivity: n } = e,
        l = t.slice(0, 5);
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e, t) =>
            (0, i.jsx)(
                P,
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
function z() {
    let e = (0, j.II)(),
        t = null == e ? void 0 : e.id,
        n = null == e ? void 0 : e.altId,
        l = (0, x.Ns)(t),
        r = (0, a.e7)([y.default], () => y.default.getCurrentUser()),
        o = (0, a.e7)([S.Z], () => (null != n ? S.Z.getApplicationActivity(n) : null != t ? S.Z.getApplicationActivity(t) : null)),
        d = null != o && (0, p.Z)(o, k.xjy.JOIN),
        u = (0, g.q)(null == o ? void 0 : o.application_id),
        h = null != u && (0, N.yE)(u.flags, k.udG.EMBEDDED);
    return 0 === l.length && null == o
        ? null
        : (0, i.jsxs)('div', {
              className: A.container,
              children: [
                  null != o && null != r
                      ? (0, i.jsx)(Z.Z, {
                            className: A.activityCard,
                            activity: o,
                            user: r,
                            currentUser: r
                        })
                      : null,
                  d && !h
                      ? (0, i.jsx)(s.zxk, {
                            className: A.inviteFriendsButton,
                            onClick: () => (0, c.h7)(o, !1, k.IlC.POPOUT),
                            size: s.PhG.SMALL,
                            color: s.Ttl.PRIMARY,
                            children: R.intl.string(R.t['6Qgren'])
                        })
                      : null,
                  (0, i.jsx)(D, {
                      entries: l,
                      currentUserActivity: o
                  })
              ]
          });
}

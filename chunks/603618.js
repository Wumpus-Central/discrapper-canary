n.d(t, {
    Z: () => z,
    i: () => M
}),
    n(47120),
    n(789020);
var i = n(200651),
    r = n(192379),
    o = n(512722),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    d = n(278323),
    c = n(24124),
    u = n(493683),
    h = n(13245),
    _ = n(99690),
    p = n(620662),
    f = n(835473),
    g = n(194082),
    m = n(297781),
    v = n(656709),
    x = n(567409),
    E = n(703656),
    C = n(409057),
    Z = n(199902),
    S = n(592125),
    I = n(293273),
    y = n(158776),
    b = n(594174),
    w = n(630388),
    N = n(5192),
    O = n(358085),
    T = n(998502),
    j = n(388627),
    k = n(981631),
    R = n(388032),
    A = n(13663);
function L(e) {
    let { entry: t, currentUserActivity: n, idx: o } = e,
        c = (0, a.e7)([b.default], () => b.default.getUser(t.author_id)),
        [_, f] = r.useState('unsent'),
        [g, m] = r.useState(!1);
    r.useEffect(() => {
        if ('sent' === _) {
            let e = setTimeout(() => m(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [_]);
    let x = null != n && (0, p.Z)(n, k.xjy.JOIN),
        C = async (e) => {
            if (null != c && 'unsent' === _) {
                e.stopPropagation();
                try {
                    if ((f('sending'), x))
                        await d.Z.sendActivityInviteUser({
                            type: k.mFx.JOIN,
                            userId: c.id,
                            activity: n,
                            location: k.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await u.Z.getOrEnsurePrivateChannel(c.id),
                            n = null !== (i = S.Z.getChannel(e)) && void 0 !== i ? i : null;
                        l()(null != n, 'Send channel must be defined'),
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
                        target_index: o
                    }),
                        f('sent');
                } catch (e) {
                    f('unsent');
                }
            }
        },
        Z = async () => {
            var e;
            if (null == c) return;
            let t = await u.Z.getOrEnsurePrivateChannel(c.id),
                n = null !== (e = S.Z.getChannel(t)) && void 0 !== e ? e : null;
            l()(null != n, 'Send channel must be defined'), (0, E.uL)(k.Z5c.CHANNEL(n.guild_id, n.id)), O.isPlatformEmbedded && T.ZP.focus();
        },
        I = x ? R.intl.string(R.t['3fRyS0']) : R.intl.string(R.t.y9eo7e),
        y = x
            ? (0, i.jsx)(s.ejJ, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(s.Uuj, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(s.ua7, {
        text: I,
        'aria-label': I,
        children: (e) =>
            (0, i.jsx)(s.zxk, {
                ...e,
                submitting: 'sending' === _,
                onClick: g ? Z : C,
                className: A.inviteButton,
                wrapperClassName: A.inviteButtonWrapper,
                innerClassName: A.inviteButtonInner,
                color: s.Ttl.TRANSPARENT,
                look: s.iLD.FILLED,
                size: s.PhG.ICON,
                grow: !1,
                children:
                    'sent' === _
                        ? g
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
function P(e) {
    var t;
    let { entry: n, currentUserActivity: o } = e,
        l = (0, a.e7)([b.default], () => b.default.getUser(n.author_id)),
        c = null !== (t = null == o ? void 0 : o.application_id) && void 0 !== t ? t : n.extra.application_id,
        u = (0, a.e7)([y.Z], () => (null != l ? y.Z.getApplicationActivity(l.id, c) : null), [c, l]),
        [h, _] = r.useState('unsent');
    if (!(null != u && (0, p.Z)(u, k.xjy.JOIN))) return null;
    let f = async (e) => {
            if (null != l && 'unsent' === h) {
                e.stopPropagation();
                try {
                    _('sending'),
                        await d.Z.sendActivityInviteUser({
                            type: k.mFx.JOIN_REQUEST,
                            userId: l.id,
                            activity: u,
                            location: k.Sbl.UNLOCKED_OVERLAY
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
                onClick: f,
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
function D(e) {
    let { entry: t, currentUserActivity: n, idx: r } = e,
        o = (0, a.e7)([b.default], () => b.default.getUser(t.author_id)),
        l = (0, a.e7)([Z.Z], () => (null != o ? Z.Z.getAnyStreamForUser(o.id) : null), [o]),
        { isMobileOnline: d, status: c } = (0, a.cj)(
            [y.Z],
            () =>
                null == o
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: y.Z.isMobileOnline(o.id),
                          status: y.Z.getStatus(o.id)
                      },
            [o]
        );
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              className: A.row,
              children: [
                  (0, i.jsx)(_.Z, {
                      className: A.avatar,
                      user: o,
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
                                      children: N.ZP.getName(void 0, void 0, o)
                                  }),
                                  null != l && (0, i.jsx)(g.ZP, { className: A.liveIndicator })
                              ]
                          }),
                          (0, i.jsx)(m.Gk, {
                              location: m.Gt.OVERLAY,
                              className: A.badgesContainer,
                              children: [m.OV, m.wO, m.f, m.v1, m.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(P, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r
                  }),
                  (0, i.jsx)(L, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r
                  })
              ]
          });
}
function M(e) {
    let { entries: t, currentUserActivity: n } = e,
        r = t.slice(0, 5);
    return (0, i.jsx)(i.Fragment, {
        children: r.map((e, t) =>
            (0, i.jsx)(
                D,
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
        r = (0, x.Ns)(t),
        o = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        l = (0, a.e7)([I.Z], () => (null != n ? I.Z.getApplicationActivity(n) : null != t ? I.Z.getApplicationActivity(t) : null)),
        d = null != l && (0, p.Z)(l, k.xjy.JOIN),
        u = (0, f.q)(null == l ? void 0 : l.application_id),
        h = null != u && (0, w.yE)(u.flags, k.udG.EMBEDDED);
    return 0 === r.length && null == l
        ? null
        : (0, i.jsxs)('div', {
              className: A.container,
              children: [
                  null != l && null != o
                      ? (0, i.jsx)(C.Z, {
                            className: A.activityCard,
                            activity: l,
                            user: o,
                            currentUser: o
                        })
                      : null,
                  d && !h
                      ? (0, i.jsx)(s.zxk, {
                            className: A.inviteFriendsButton,
                            onClick: () => (0, c.h7)(l, !1, k.IlC.POPOUT),
                            size: s.PhG.SMALL,
                            color: s.Ttl.PRIMARY,
                            children: R.intl.string(R.t['6Qgren'])
                        })
                      : null,
                  (0, i.jsx)(M, {
                      entries: r,
                      currentUserActivity: l
                  })
              ]
          });
}

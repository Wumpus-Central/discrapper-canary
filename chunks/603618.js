i.d(e, {
    Z: function () {
        return U;
    },
    i: function () {
        return P;
    }
}),
    i(47120),
    i(789020);
var n = i(200651),
    l = i(192379),
    o = i(512722),
    r = i.n(o),
    s = i(442837),
    a = i(481060),
    u = i(278323),
    d = i(24124),
    c = i(493683),
    h = i(13245),
    E = i(99690),
    p = i(620662),
    f = i(835473),
    S = i(194082),
    _ = i(297781),
    g = i(656709),
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
    M = i(388627),
    D = i(981631),
    L = i(388032),
    w = i(13663);
function z(t) {
    let { entry: e, currentUserActivity: i, idx: o } = t,
        d = (0, s.e7)([y.default], () => y.default.getUser(e.author_id)),
        [E, f] = l.useState('unsent'),
        [S, _] = l.useState(!1);
    l.useEffect(() => {
        if ('sent' === E) {
            let t = setTimeout(() => _(!0), 2000);
            return () => clearTimeout(t);
        }
    }, [E]);
    let m = null != i && (0, p.Z)(i, D.xjy.JOIN),
        I = async (t) => {
            if (null != d && 'unsent' === E) {
                t.stopPropagation();
                try {
                    if ((f('sending'), m))
                        await u.Z.sendActivityInviteUser({
                            type: D.mFx.JOIN,
                            userId: d.id,
                            activity: i,
                            location: D.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var n;
                        let t = await c.Z.getOrEnsurePrivateChannel(d.id),
                            i = null !== (n = O.Z.getChannel(t)) && void 0 !== n ? n : null;
                        r()(null != i, 'Send channel must be defined'),
                            (0, v.uL)(D.Z5c.CHANNEL(i.guild_id, i.id)),
                            await (0, g.p)({
                                channel: i,
                                content: L.intl.string(L.t.DwAcMz),
                                entry: e,
                                whenReady: !0
                            });
                    }
                    h.Z.track(D.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: d.id,
                        target_content_entry_id: e.id,
                        target_index: o
                    }),
                        f('sent');
                } catch (t) {
                    f('unsent');
                }
            }
        },
        Z = async () => {
            var t;
            if (null == d) return;
            let e = await c.Z.getOrEnsurePrivateChannel(d.id),
                i = null !== (t = O.Z.getChannel(e)) && void 0 !== t ? t : null;
            r()(null != i, 'Send channel must be defined'), (0, v.uL)(D.Z5c.CHANNEL(i.guild_id, i.id)), x.isPlatformEmbedded && A.ZP.focus();
        },
        C = m ? L.intl.string(L.t['3fRyS0']) : L.intl.string(L.t.y9eo7e),
        N = m
            ? (0, n.jsx)(a.GroupPlusIcon, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, n.jsx)(a.SendMessageIcon, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, n.jsx)(a.Tooltip, {
        text: C,
        'aria-label': C,
        children: (t) =>
            (0, n.jsx)(a.Button, {
                ...t,
                submitting: 'sending' === E,
                onClick: S ? Z : I,
                className: w.inviteButton,
                wrapperClassName: w.inviteButtonWrapper,
                innerClassName: w.inviteButtonInner,
                color: a.ButtonColors.TRANSPARENT,
                look: a.ButtonLooks.FILLED,
                size: a.ButtonSizes.ICON,
                grow: !1,
                children:
                    'sent' === E
                        ? S
                            ? (0, n.jsx)(a.ChatIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, n.jsx)(a.CheckmarkSmallBoldIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                        : N
            })
    });
}
function k(t) {
    var e;
    let { entry: i, currentUserActivity: o } = t,
        r = (0, s.e7)([y.default], () => y.default.getUser(i.author_id)),
        d = null !== (e = null == o ? void 0 : o.application_id) && void 0 !== e ? e : i.extra.application_id,
        c = (0, s.e7)([N.Z], () => (null != r ? N.Z.getApplicationActivity(r.id, d) : null), [d, r]),
        [h, E] = l.useState('unsent');
    if (!(null != c && (0, p.Z)(c, D.xjy.JOIN))) return null;
    let f = async (t) => {
            if (null != r && 'unsent' === h) {
                t.stopPropagation();
                try {
                    E('sending'),
                        await u.Z.sendActivityInviteUser({
                            type: D.mFx.JOIN_REQUEST,
                            userId: r.id,
                            activity: c,
                            location: D.Sbl.UNLOCKED_OVERLAY
                        }),
                        E('sent');
                } catch (t) {
                    E('unsent');
                }
            }
        },
        S = L.intl.string(L.t.OKsSCQ);
    return (0, n.jsx)(a.Tooltip, {
        text: S,
        'aria-label': S,
        children: (t) =>
            (0, n.jsx)(a.Button, {
                ...t,
                submitting: 'sending' === h,
                onClick: f,
                className: w.inviteButton,
                wrapperClassName: w.inviteButtonWrapper,
                innerClassName: w.inviteButtonInner,
                color: a.ButtonColors.TRANSPARENT,
                look: a.ButtonLooks.FILLED,
                size: a.ButtonSizes.ICON,
                grow: !1,
                children:
                    'sent' === h
                        ? (0, n.jsx)(a.CheckmarkSmallBoldIcon, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, n.jsx)(a.HandRequestSpeakIcon, {
                              color: 'currentColor',
                              size: 'sm'
                          })
            })
    });
}
function b(t) {
    let { entry: e, currentUserActivity: i, idx: l } = t,
        o = (0, s.e7)([y.default], () => y.default.getUser(e.author_id)),
        r = (0, s.e7)([Z.Z], () => (null != o ? Z.Z.getAnyStreamForUser(o.id) : null), [o]),
        { isMobileOnline: u, status: d } = (0, s.cj)(
            [N.Z],
            () =>
                null == o
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: N.Z.isMobileOnline(o.id),
                          status: N.Z.getStatus(o.id)
                      },
            [o]
        );
    return null == o
        ? null
        : (0, n.jsxs)('div', {
              className: w.row,
              children: [
                  (0, n.jsx)(E.Z, {
                      className: w.avatar,
                      user: o,
                      isMobile: u,
                      status: d
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
                                      children: R.ZP.getName(void 0, void 0, o)
                                  }),
                                  null != r && (0, n.jsx)(S.ZP, { className: w.liveIndicator })
                              ]
                          }),
                          (0, n.jsx)(_.Gk, {
                              location: _.Gt.OVERLAY,
                              className: w.badgesContainer,
                              children: [_.OV, _.wO, _.f, _.v1, _.pQ].map((t, i) => (0, n.jsx)(t, { entry: e }, 'entry-'.concat(i)))
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
    let t = (0, M.II)(),
        e = null == t ? void 0 : t.id,
        i = null == t ? void 0 : t.altId,
        l = (0, m.Ns)(e),
        o = (0, s.e7)([y.default], () => y.default.getCurrentUser()),
        r = (0, s.e7)([C.Z], () => (null != i ? C.Z.getApplicationActivity(i) : null != e ? C.Z.getApplicationActivity(e) : null)),
        u = null != r && (0, p.Z)(r, D.xjy.JOIN),
        c = (0, f.q)(null == r ? void 0 : r.application_id),
        h = null != c && (0, T.yE)(c.flags, D.udG.EMBEDDED);
    return 0 === l.length && null == r
        ? null
        : (0, n.jsxs)('div', {
              className: w.container,
              children: [
                  null != r && null != o
                      ? (0, n.jsx)(I.Z, {
                            className: w.activityCard,
                            activity: r,
                            user: o,
                            currentUser: o
                        })
                      : null,
                  u && !h
                      ? (0, n.jsx)(a.Button, {
                            className: w.inviteFriendsButton,
                            onClick: () => (0, d.h7)(r, !1, D.IlC.POPOUT),
                            size: a.ButtonSizes.SMALL,
                            color: a.ButtonColors.PRIMARY,
                            children: L.intl.string(L.t['6Qgren'])
                        })
                      : null,
                  (0, n.jsx)(P, {
                      entries: l,
                      currentUserActivity: r
                  })
              ]
          });
}

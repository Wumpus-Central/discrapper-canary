i.d(t, {
    Z: function () {
        return P;
    },
    i: function () {
        return j;
    }
}),
    i(47120),
    i(789020);
var n = i(200651),
    l = i(192379),
    o = i(512722),
    s = i.n(o),
    r = i(442837),
    a = i(481060),
    u = i(278323),
    d = i(24124),
    c = i(493683),
    h = i(13245),
    f = i(99690),
    p = i(620662),
    E = i(835473),
    m = i(194082),
    v = i(297781),
    g = i(656709),
    S = i(567409),
    _ = i(703656),
    Z = i(409057),
    C = i(199902),
    O = i(592125),
    I = i(293273),
    N = i(158776),
    y = i(594174),
    x = i(630388),
    b = i(5192),
    T = i(358085),
    R = i(998502),
    k = i(388627),
    A = i(981631),
    z = i(388032),
    M = i(13663);
function L(e) {
    let { entry: t, currentUserActivity: i, idx: o } = e,
        d = (0, r.e7)([y.default], () => y.default.getUser(t.author_id)),
        [f, E] = l.useState('unsent'),
        [m, v] = l.useState(!1);
    l.useEffect(() => {
        if ('sent' === f) {
            let e = setTimeout(() => v(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [f]);
    let S = null != i && (0, p.Z)(i, A.xjy.JOIN),
        Z = async (e) => {
            if (null != d && 'unsent' === f) {
                e.stopPropagation();
                try {
                    if ((E('sending'), S))
                        await u.Z.sendActivityInviteUser({
                            type: A.mFx.JOIN,
                            userId: d.id,
                            activity: i,
                            location: A.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var n;
                        let e = await c.Z.getOrEnsurePrivateChannel(d.id),
                            i = null !== (n = O.Z.getChannel(e)) && void 0 !== n ? n : null;
                        s()(null != i, 'Send channel must be defined'),
                            (0, _.uL)(A.Z5c.CHANNEL(i.guild_id, i.id)),
                            await (0, g.p)({
                                channel: i,
                                content: z.intl.string(z.t.DwAcMz),
                                entry: t,
                                whenReady: !0
                            });
                    }
                    h.Z.track(A.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: d.id,
                        target_content_entry_id: t.id,
                        target_index: o
                    }),
                        E('sent');
                } catch (e) {
                    E('unsent');
                }
            }
        },
        C = async () => {
            var e;
            if (null == d) return;
            let t = await c.Z.getOrEnsurePrivateChannel(d.id),
                i = null !== (e = O.Z.getChannel(t)) && void 0 !== e ? e : null;
            s()(null != i, 'Send channel must be defined'), (0, _.uL)(A.Z5c.CHANNEL(i.guild_id, i.id)), T.isPlatformEmbedded && R.ZP.focus();
        },
        I = S ? z.intl.string(z.t['3fRyS0']) : z.intl.string(z.t.y9eo7e),
        N = S
            ? (0, n.jsx)(a.GroupPlusIcon, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, n.jsx)(a.SendMessageIcon, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, n.jsx)(a.Tooltip, {
        text: I,
        'aria-label': I,
        children: (e) =>
            (0, n.jsx)(a.Button, {
                ...e,
                submitting: 'sending' === f,
                onClick: m ? C : Z,
                className: M.inviteButton,
                wrapperClassName: M.inviteButtonWrapper,
                innerClassName: M.inviteButtonInner,
                color: a.ButtonColors.TRANSPARENT,
                look: a.ButtonLooks.FILLED,
                size: a.ButtonSizes.ICON,
                grow: !1,
                children:
                    'sent' === f
                        ? m
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
function w(e) {
    var t;
    let { entry: i, currentUserActivity: o } = e,
        s = (0, r.e7)([y.default], () => y.default.getUser(i.author_id)),
        d = null !== (t = null == o ? void 0 : o.application_id) && void 0 !== t ? t : i.extra.application_id,
        c = (0, r.e7)([N.Z], () => (null != s ? N.Z.getApplicationActivity(s.id, d) : null), [d, s]),
        [h, f] = l.useState('unsent');
    if (!(null != c && (0, p.Z)(c, A.xjy.JOIN))) return null;
    let E = async (e) => {
            if (null != s && 'unsent' === h) {
                e.stopPropagation();
                try {
                    f('sending'),
                        await u.Z.sendActivityInviteUser({
                            type: A.mFx.JOIN_REQUEST,
                            userId: s.id,
                            activity: c,
                            location: A.Sbl.UNLOCKED_OVERLAY
                        }),
                        f('sent');
                } catch (e) {
                    f('unsent');
                }
            }
        },
        m = z.intl.string(z.t.OKsSCQ);
    return (0, n.jsx)(a.Tooltip, {
        text: m,
        'aria-label': m,
        children: (e) =>
            (0, n.jsx)(a.Button, {
                ...e,
                submitting: 'sending' === h,
                onClick: E,
                className: M.inviteButton,
                wrapperClassName: M.inviteButtonWrapper,
                innerClassName: M.inviteButtonInner,
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
function D(e) {
    let { entry: t, currentUserActivity: i, idx: l } = e,
        o = (0, r.e7)([y.default], () => y.default.getUser(t.author_id)),
        s = (0, r.e7)([C.Z], () => (null != o ? C.Z.getAnyStreamForUser(o.id) : null), [o]),
        { isMobileOnline: u, status: d } = (0, r.cj)(
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
              className: M.row,
              children: [
                  (0, n.jsx)(f.Z, {
                      className: M.avatar,
                      user: o,
                      isMobile: u,
                      status: d
                  }),
                  (0, n.jsxs)('div', {
                      className: M.details,
                      children: [
                          (0, n.jsxs)('div', {
                              className: M.usernameWrapper,
                              children: [
                                  (0, n.jsx)(a.Text, {
                                      className: M.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: b.ZP.getName(void 0, void 0, o)
                                  }),
                                  null != s && (0, n.jsx)(m.ZP, { className: M.liveIndicator })
                              ]
                          }),
                          (0, n.jsx)(v.Gk, {
                              location: v.Gt.OVERLAY,
                              className: M.badgesContainer,
                              children: [v.OV, v.wO, v.f, v.v1, v.pQ].map((e, i) => (0, n.jsx)(e, { entry: t }, 'entry-'.concat(i)))
                          })
                      ]
                  }),
                  (0, n.jsx)(w, {
                      entry: t,
                      currentUserActivity: i,
                      idx: l
                  }),
                  (0, n.jsx)(L, {
                      entry: t,
                      currentUserActivity: i,
                      idx: l
                  })
              ]
          });
}
function j(e) {
    let { entries: t, currentUserActivity: i } = e,
        l = t.slice(0, 5);
    return (0, n.jsx)(n.Fragment, {
        children: l.map((e, t) =>
            (0, n.jsx)(
                D,
                {
                    idx: t,
                    entry: e,
                    currentUserActivity: i
                },
                t
            )
        )
    });
}
function P() {
    let e = (0, k.II)(),
        t = null == e ? void 0 : e.id,
        i = null == e ? void 0 : e.altId,
        l = (0, S.Ns)(t),
        o = (0, r.e7)([y.default], () => y.default.getCurrentUser()),
        s = (0, r.e7)([I.Z], () => (null != i ? I.Z.getApplicationActivity(i) : null != t ? I.Z.getApplicationActivity(t) : null)),
        u = null != s && (0, p.Z)(s, A.xjy.JOIN),
        c = (0, E.q)(null == s ? void 0 : s.application_id),
        h = null != c && (0, x.yE)(c.flags, A.udG.EMBEDDED);
    return 0 === l.length && null == s
        ? null
        : (0, n.jsxs)('div', {
              className: M.container,
              children: [
                  null != s && null != o
                      ? (0, n.jsx)(Z.Z, {
                            className: M.activityCard,
                            activity: s,
                            user: o,
                            currentUser: o
                        })
                      : null,
                  u && !h
                      ? (0, n.jsx)(a.Button, {
                            className: M.inviteFriendsButton,
                            onClick: () => (0, d.h7)(s, !1, A.IlC.POPOUT),
                            size: a.ButtonSizes.SMALL,
                            color: a.ButtonColors.PRIMARY,
                            children: z.intl.string(z.t['6Qgren'])
                        })
                      : null,
                  (0, n.jsx)(j, {
                      entries: l,
                      currentUserActivity: s
                  })
              ]
          });
}

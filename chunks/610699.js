(n.d(t, { Z: () => k }), n(539854), n(361932), n(187205));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(447543),
    p = n(317381),
    m = n(100527),
    f = n(906732),
    g = n(758199),
    _ = n(943762),
    h = n(914498),
    b = n(880251),
    E = n(515344),
    C = n(835473),
    x = n(471445),
    v = n(111028),
    O = n(592125),
    y = n(430824),
    j = n(496675),
    I = n(594174),
    S = n(626135),
    T = n(768581),
    N = n(411198),
    P = n(358595),
    A = n(981631),
    w = n(245335),
    Z = n(388032),
    R = n(582909);
function L(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, r.jsxs)(
                    'div',
                    {
                        className: R.statusWrapper,
                        children: [
                            (0, r.jsx)('i', { className: R.statusOnline }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: R.count,
                                color: i,
                                children: Z.intl.format(Z.t['LC+S+v'], { membersOnline: n })
                            })
                        ]
                    },
                    'onlineCount'
                )
            ),
        null != t &&
            l.push(
                (0, r.jsxs)(
                    'div',
                    {
                        className: R.statusWrapper,
                        children: [
                            (0, r.jsx)('i', { className: R.statusOffline }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: R.count,
                                color: i,
                                children: Z.intl.format(Z.t.zRl6XV, { count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, r.jsx)('div', {
            className: R.statusCounts,
            children: l
        })
    );
}
function D(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e;
    if (null != t && null != n) {
        let e = (0, x.KS)(t, n);
        return (0, r.jsxs)('div', {
            className: a()(R.channel, { [R.ended]: i }),
            children: [
                null != e
                    ? (0, r.jsx)(e, {
                          className: R.channelIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, r.jsx)(v.Z, {
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: l,
                        children: Z.intl.format(Z.t['dc+LW1'], {
                            channelName: t.name,
                            serverName: n.name
                        })
                    })
                })
            ]
        });
    }
    return null != n
        ? (0, r.jsx)('div', {
              className: a()(R.channel, { [R.ended]: i }),
              children: (0, r.jsx)(v.Z, {
                  children: (0, r.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      color: l,
                      children: Z.intl.format(Z.t.u0vaDA, { guildName: n.name })
                  })
              })
          })
        : null;
}
function k(e) {
    var t, n;
    let l,
        { invite: a, message: o, getAcceptInviteContext: u } = e,
        { approximate_member_count: g, approximate_presence_count: _, target_type: h, target_application: b } = a;
    s()(h === w.Iq.EMBEDDED_APPLICATION && null != b, 'invalid application invite');
    let E = i.useCallback(() => {
            var e;
            S.default.track(A.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: b.id,
                invite_inviter_id: null == (e = a.inviter) ? void 0 : e.id
            });
        }, [null == (t = a.inviter) ? void 0 : t.id, b.id]),
        x = (0, c.e7)([y.Z], () => (null != a.guild ? y.Z.getGuild(a.guild.id) : null), [a]),
        v = (0, C.Z)([b.id])[0],
        T = (0, c.e7)([p.ZP], () => {
            var e;
            return (null == a ? void 0 : a.channel) != null && (null == (e = p.ZP.getSelfEmbeddedActivityForChannel(a.channel.id)) ? void 0 : e.applicationId) === b.id;
        }),
        R = (0, c.e7)([p.ZP], () => {
            var e;
            return ((null == (e = a.channel) ? void 0 : e.id) != null ? p.ZP.getEmbeddedActivitiesForChannel(a.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return b.id === t;
            });
        }),
        L = O.Z.getChannel(null == (n = a.channel) ? void 0 : n.id),
        D = (0, c.e7)([j.Z], () => null != L && j.Z.can(A.Plq.USE_EMBEDDED_ACTIVITIES, L), [L]),
        { analyticsLocations: k } = (0, f.ZP)(m.Z.INVITE_EMBED),
        U = (0, c.Wu)(
            [p.ZP],
            () =>
                null != L
                    ? p.ZP.getEmbeddedActivitiesForChannel(L.id)
                          .filter((e) => e.applicationId === b.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [L, b.id]
        ),
        F = (0, c.Wu)([I.default], () => U.map((e) => I.default.getUser(e)).filter((e) => null != e), [U]),
        B = i.useCallback(() => {
            ((0, d.r$)(
                {
                    invite: a,
                    action: 'accept',
                    inviter_id: o.author.id,
                    invite_message_id: o.id
                },
                k
            ),
                d.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: a.code,
                    context: u('Invite Button Embed'),
                    analyticsLocations: k
                }));
        }, [a, o, k, u]),
        G = a.state === A.r2o.ACCEPTING,
        H = null != x;
    if (null == x) {
        if (null == a.guild) return (0, r.jsx)(P.Z, {});
        x = (0, N.Qs)(a.guild);
    }
    let V = (H && !D) || (H && T);
    return (H && T && (l = Z.intl.string(Z.t.wJNK8P)), D || (l = Z.intl.string(Z.t.hHGrW1)), null == a.code || '' === a.code || null == v)
        ? null
        : (0, r.jsx)(f.Gt, {
              value: k,
              children: (0, r.jsx)(M, {
                  app: v,
                  activityUsers: F,
                  isMember: H,
                  channel: L,
                  guild: x,
                  members: g,
                  membersOnline: _,
                  isActivityActive: R,
                  submitting: G,
                  isDisabled: V,
                  tooltip: l,
                  handleAcceptInvite: B,
                  onView: E
              })
          });
}
function M(e) {
    var t, n;
    let { app: l, activityUsers: a, isMember: o, channel: s, guild: c, members: u, membersOnline: d, isActivityActive: p, submitting: m, isDisabled: f, tooltip: C, handleAcceptInvite: x, onView: v } = e,
        { bot: O, icon: y } = l,
        j = T.ZP.getApplicationIconURL({
            id: l.id,
            icon: y,
            bot: O
        }),
        I = (0, E.G)(l),
        S = (0, b.E)(l),
        N = a.length,
        P = i.useMemo(
            () => [
                {
                    label: o ? (p ? Z.intl.string(Z.t.VJlc0d) : Z.intl.string(Z.t.RscU7O)) : Z.intl.string(Z.t['2BP08P']),
                    trackingArea: o ? h.j_.PLAY : h.j_.JOIN_SERVER,
                    submitting: m,
                    disabledReason: f && null != C ? C : void 0,
                    onClick: x
                }
            ],
            [x, p, f, o, m, C]
        );
    return (0, r.jsx)(
        g.W,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })(
            {
                header: l.name,
                title: Z.intl.string(Z.t['7vb6n5']),
                iconSrc: j
            },
            S
        )),
        (n = n =
            {
                onClickBanner: I,
                info: (0, r.jsxs)('div', {
                    className: R.infoWrapper,
                    children: [
                        (0, r.jsx)(D, {
                            channel: s,
                            guild: c,
                            hasEnded: !p,
                            textColor: 'none'
                        }),
                        o
                            ? N > 0 &&
                              (0, r.jsx)(_.K, {
                                  activityUsers: a,
                                  guildId: c.id,
                                  activityText: Z.intl.string(Z.t.BMTj29)
                              })
                            : (0, r.jsx)(L, {
                                  members: u,
                                  membersOnline: d,
                                  textColor: 'none'
                              })
                    ]
                }),
                actions: P,
                onClickContent: I,
                trackingConfig: {
                    id: l.id,
                    linkType: h.Un.ACTIVITY_INVITE,
                    onView: v
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}

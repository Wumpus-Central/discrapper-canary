n.d(t, { Z: () => L }), n(539854), n(361932), n(187205), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
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
    h = n(758199),
    g = n(943762),
    _ = n(914498),
    b = n(880251),
    x = n(208444),
    y = n(835473),
    E = n(471445),
    v = n(111028),
    O = n(601964),
    j = n(592125),
    C = n(430824),
    S = n(496675),
    I = n(594174),
    N = n(626135),
    T = n(768581),
    P = n(358595),
    A = n(981631),
    w = n(245335),
    Z = n(388032),
    R = n(582909);
function k(e) {
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
        let e = (0, E.KS)(t, n);
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
function L(e) {
    var t, n;
    let l,
        { invite: a, message: o, getAcceptInviteContext: u } = e,
        { approximate_member_count: h, approximate_presence_count: g, target_type: _, target_application: b } = a;
    s()(_ === w.Iq.EMBEDDED_APPLICATION && null != b, 'invalid application invite');
    let x = i.useCallback(() => {
            var e;
            N.default.track(A.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: b.id,
                invite_inviter_id: null == (e = a.inviter) ? void 0 : e.id
            });
        }, [null == (t = a.inviter) ? void 0 : t.id, b.id]),
        E = (0, c.e7)([C.Z], () => (null != a.guild ? C.Z.getGuild(a.guild.id) : null), [a]),
        v = (0, y.Z)([b.id])[0],
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
        k = j.Z.getChannel(null == (n = a.channel) ? void 0 : n.id),
        D = (0, c.e7)([S.Z], () => null != k && S.Z.can(A.Plq.USE_EMBEDDED_ACTIVITIES, k), [k]),
        { analyticsLocations: L } = (0, f.ZP)(m.Z.INVITE_EMBED),
        U = (0, c.Wu)(
            [p.ZP],
            () =>
                null != k
                    ? p.ZP.getEmbeddedActivitiesForChannel(k.id)
                          .filter((e) => e.applicationId === b.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [k, b.id]
        ),
        F = (0, c.Wu)([I.default], () => U.map((e) => I.default.getUser(e)).filter((e) => null != e), [U]),
        B = i.useCallback(() => {
            (0, d.r$)(
                {
                    invite: a,
                    action: 'accept',
                    inviter_id: o.author.id,
                    invite_message_id: o.id
                },
                L
            ),
                d.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: a.code,
                    context: u('Invite Button Embed'),
                    analyticsLocations: L
                });
        }, [a, o, L, u]),
        G = a.state === A.r2o.ACCEPTING,
        H = null != E;
    if (null == E) {
        if (null == a.guild) return (0, r.jsx)(P.Z, {});
        E = new O.ZP(a.guild);
    }
    let V = (H && !D) || (H && T);
    return (H && T && (l = Z.intl.string(Z.t.wJNK8P)), D || (l = Z.intl.string(Z.t.hHGrW1)), null == a.code || '' === a.code || null == v)
        ? null
        : (0, r.jsx)(f.Gt, {
              value: L,
              children: (0, r.jsx)(M, {
                  app: v,
                  invite: a,
                  activityUsers: F,
                  isMember: H,
                  channel: k,
                  guild: E,
                  members: h,
                  membersOnline: g,
                  isActivityActive: R,
                  submitting: G,
                  isDisabled: V,
                  tooltip: l,
                  handleAcceptInvite: B,
                  onView: x
              })
          });
}
function M(e) {
    var t, n;
    let { app: l, invite: a, activityUsers: o, isMember: s, channel: c, guild: u, members: d, membersOnline: p, isActivityActive: m, submitting: f, isDisabled: y, tooltip: E, handleAcceptInvite: v, onView: O } = e,
        j = new URL(a.code, 'https://discord.gg').toString(),
        { bot: C, icon: S } = l,
        I = T.ZP.getApplicationIconURL({
            id: l.id,
            icon: S,
            bot: C
        }),
        N = (0, x.z)(l),
        P = (0, b.E)(l),
        A = o.length,
        w = i.useMemo(() => {
            let e = [
                {
                    label: s ? (m ? Z.intl.string(Z.t.VJlc0d) : Z.intl.string(Z.t.RscU7O)) : Z.intl.string(Z.t['2BP08P']),
                    trackingArea: s ? _.j_.PLAY : _.j_.JOIN_SERVER,
                    submitting: f,
                    disabledReason: y && null != E ? E : void 0,
                    onClick: v
                }
            ];
            return null != N && e.push(N), e;
        }, [v, m, y, s, f, E, N]);
    return (0, r.jsx)(
        h.W,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                header: l.name,
                title: Z.intl.string(Z.t['7vb6n5']),
                iconSrc: I,
                embedUrl: j
            },
            P
        )),
        (n = n =
            {
                info: (0, r.jsxs)('div', {
                    className: R.infoWrapper,
                    children: [
                        (0, r.jsx)(D, {
                            channel: c,
                            guild: u,
                            hasEnded: !m,
                            textColor: 'none'
                        }),
                        s
                            ? A > 0 &&
                              (0, r.jsx)(g.K, {
                                  activityUsers: o,
                                  guildId: u.id,
                                  activityText: Z.intl.string(Z.t.BMTj29)
                              })
                            : (0, r.jsx)(k, {
                                  members: d,
                                  membersOnline: p,
                                  textColor: 'none'
                              })
                    ]
                }),
                actions: w,
                trackingConfig: {
                    id: l.id,
                    linkType: _.Un.ACTIVITY_INVITE,
                    onView: O
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

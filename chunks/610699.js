n.d(t, { Z: () => L }), n(539854), n(361932), n(187205), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
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
    N = n(592125),
    j = n(430824),
    C = n(496675),
    S = n(594174),
    I = n(626135),
    T = n(768581),
    P = n(358595),
    A = n(981631),
    w = n(245335),
    Z = n(388032),
    R = n(582909);
function k(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        a = [];
    return (
        null != n &&
            n > 0 &&
            a.push(
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
                                children: Z.NW.format(Z.t['LC+S+v'], { membersOnline: n })
                            })
                        ]
                    },
                    'onlineCount'
                )
            ),
        null != t &&
            a.push(
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
                                children: Z.NW.format(Z.t.zRl6XV, { count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, r.jsx)('div', {
            className: R.statusCounts,
            children: a
        })
    );
}
function D(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: a } = e;
    if (null != t && null != n) {
        let e = (0, E.KS)(t, n);
        return (0, r.jsxs)('div', {
            className: l()(R.channel, { [R.ended]: i }),
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
                        color: a,
                        children: Z.NW.format(Z.t['dc+LW1'], {
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
              className: l()(R.channel, { [R.ended]: i }),
              children: (0, r.jsx)(v.Z, {
                  children: (0, r.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      color: a,
                      children: Z.NW.format(Z.t.u0vaDA, { guildName: n.name })
                  })
              })
          })
        : null;
}
function L(e) {
    var t, n;
    let a,
        { invite: l, getAcceptInviteContext: o } = e,
        { approximate_member_count: u, approximate_presence_count: h, target_type: g, target_application: _ } = l;
    s()(g === w.Iq.EMBEDDED_APPLICATION && null != _, 'invalid application invite');
    let b = i.useCallback(() => {
            var e;
            I.default.track(A.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: _.id,
                invite_inviter_id: null == (e = l.inviter) ? void 0 : e.id
            });
        }, [null == (t = l.inviter) ? void 0 : t.id, _.id]),
        x = (0, c.e7)([j.Z], () => (null != l.guild ? j.Z.getGuild(l.guild.id) : null), [l]),
        E = (0, y.Z)([_.id])[0],
        v = (0, c.e7)([p.ZP], () => {
            var e;
            return (null == l ? void 0 : l.channel) != null && (null == (e = p.ZP.getSelfEmbeddedActivityForChannel(l.channel.id)) ? void 0 : e.applicationId) === _.id;
        }),
        T = (0, c.e7)([p.ZP], () => {
            var e;
            return ((null == (e = l.channel) ? void 0 : e.id) != null ? p.ZP.getEmbeddedActivitiesForChannel(l.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return _.id === t;
            });
        }),
        R = N.Z.getChannel(null == (n = l.channel) ? void 0 : n.id),
        k = (0, c.e7)([C.Z], () => null != R && C.Z.can(A.Plq.USE_EMBEDDED_ACTIVITIES, R), [R]),
        { analyticsLocations: D } = (0, f.ZP)(m.Z.INVITE_EMBED),
        L = (0, c.Wu)(
            [p.ZP],
            () =>
                null != R
                    ? p.ZP.getEmbeddedActivitiesForChannel(R.id)
                          .filter((e) => e.applicationId === _.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [R, _.id]
        ),
        W = (0, c.Wu)([S.default], () => L.map((e) => S.default.getUser(e)).filter((e) => null != e), [L]),
        U = i.useCallback(() => {
            (0, d.r$)(l, 'accept', D),
                d.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: l.code,
                    context: o('Invite Button Embed'),
                    analyticsLocations: D
                });
        }, [l, D, o]),
        F = l.state === A.r2o.ACCEPTING,
        B = null != x;
    if (null == x) {
        if (null == l.guild) return (0, r.jsx)(P.Z, {});
        x = new O.ZP(l.guild);
    }
    let G = (B && !k) || (B && v);
    return (B && v && (a = Z.NW.string(Z.t.wJNK8P)), k || (a = Z.NW.string(Z.t.hHGrW1)), null == l.code || '' === l.code || null == E)
        ? null
        : (0, r.jsx)(f.Gt, {
              value: D,
              children: (0, r.jsx)(M, {
                  app: E,
                  invite: l,
                  activityUsers: W,
                  isMember: B,
                  channel: R,
                  guild: x,
                  members: u,
                  membersOnline: h,
                  isActivityActive: T,
                  submitting: F,
                  isDisabled: G,
                  tooltip: a,
                  handleAcceptInvite: U,
                  onView: b
              })
          });
}
function M(e) {
    var t, n;
    let { app: a, invite: l, activityUsers: o, isMember: s, channel: c, guild: u, members: d, membersOnline: p, isActivityActive: m, submitting: f, isDisabled: y, tooltip: E, handleAcceptInvite: v, onView: O } = e,
        N = new URL(l.code, 'https://discord.gg').toString(),
        { bot: j, icon: C } = a,
        S = T.ZP.getApplicationIconURL({
            id: a.id,
            icon: C,
            bot: j
        }),
        I = (0, x.z)(a),
        P = (0, b.E)(a),
        A = o.length,
        w = i.useMemo(() => {
            let e = [
                {
                    label: s ? (m ? Z.NW.string(Z.t.VJlc0d) : Z.NW.string(Z.t.RscU7O)) : Z.NW.string(Z.t['2BP08P']),
                    trackingArea: s ? _.j_.PLAY : _.j_.JOIN_SERVER,
                    submitting: f,
                    disabledReason: y && null != E ? E : void 0,
                    onClick: v
                }
            ];
            return null != I && e.push(I), e;
        }, [v, m, y, s, f, E, I]);
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
                header: a.name,
                title: Z.NW.string(Z.t['7vb6n5']),
                iconSrc: S,
                embedUrl: N
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
                                  activityText: Z.NW.string(Z.t.BMTj29)
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
                    id: a.id,
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

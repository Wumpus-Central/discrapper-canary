(n.d(t, { Z: () => Z }), n(539854), n(361932), n(187205));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(447543),
    f = n(317381),
    _ = n(100527),
    p = n(906732),
    h = n(758199),
    m = n(943762),
    g = n(914498),
    E = n(880251),
    b = n(515344),
    y = n(835473),
    O = n(471445),
    v = n(111028),
    I = n(592125),
    T = n(430824),
    S = n(496675),
    A = n(594174),
    N = n(626135),
    C = n(768581),
    w = n(411198),
    R = n(358595),
    P = n(981631),
    D = n(245335),
    L = n(388032),
    x = n(582909);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
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
                k(e, t, n[t]);
            }));
    }
    return e;
}
function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        a = [];
    return (
        null != n &&
            n > 0 &&
            a.push(
                (0, r.jsxs)(
                    'div',
                    {
                        className: x.statusWrapper,
                        children: [
                            (0, r.jsx)('i', { className: x.statusOnline }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: x.count,
                                color: i,
                                children: L.intl.format(L.t['LC+S+v'], { membersOnline: n })
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
                        className: x.statusWrapper,
                        children: [
                            (0, r.jsx)('i', { className: x.statusOffline }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: x.count,
                                color: i,
                                children: L.intl.format(L.t.zRl6XV, { count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, r.jsx)('div', {
            className: x.statusCounts,
            children: a
        })
    );
}
function B(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: a } = e;
    if (null != t && null != n) {
        let e = (0, O.KS)(t, n);
        return (0, r.jsxs)('div', {
            className: o()(x.channel, { [x.ended]: i }),
            children: [
                null != e
                    ? (0, r.jsx)(e, {
                          className: x.channelIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, r.jsx)(v.Z, {
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: a,
                        children: L.intl.format(L.t['dc+LW1'], {
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
              className: o()(x.channel, { [x.ended]: i }),
              children: (0, r.jsx)(v.Z, {
                  children: (0, r.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      color: a,
                      children: L.intl.format(L.t.u0vaDA, { guildName: n.name })
                  })
              })
          })
        : null;
}
function Z(e) {
    var t, n;
    let a,
        { invite: o, message: s, getAcceptInviteContext: u } = e,
        { approximate_member_count: h, approximate_presence_count: m, target_type: g, target_application: E } = o;
    l()(g === D.Iq.EMBEDDED_APPLICATION && null != E, 'invalid application invite');
    let b = i.useCallback(() => {
            var e;
            N.default.track(P.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: E.id,
                invite_inviter_id: null == (e = o.inviter) ? void 0 : e.id
            });
        }, [null == (t = o.inviter) ? void 0 : t.id, E.id]),
        O = (0, c.e7)([T.Z], () => (null != o.guild ? T.Z.getGuild(o.guild.id) : null), [o]),
        v = (0, y.Z)([E.id])[0],
        C = (0, c.e7)([f.ZP], () => {
            var e;
            return (null == o ? void 0 : o.channel) != null && (null == (e = f.ZP.getSelfEmbeddedActivityForChannel(o.channel.id)) ? void 0 : e.applicationId) === E.id;
        }),
        x = (0, c.e7)([f.ZP], () => {
            var e;
            return ((null == (e = o.channel) ? void 0 : e.id) != null ? f.ZP.getEmbeddedActivitiesForChannel(o.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return E.id === t;
            });
        }),
        k = I.Z.getChannel(null == (n = o.channel) ? void 0 : n.id),
        j = (0, c.e7)([S.Z], () => null != k && S.Z.can(P.Plq.USE_EMBEDDED_ACTIVITIES, k), [k]),
        { analyticsLocations: M } = (0, p.ZP)(_.Z.INVITE_EMBED),
        U = (0, c.Wu)(
            [f.ZP],
            () =>
                null != k
                    ? f.ZP.getEmbeddedActivitiesForChannel(k.id)
                          .filter((e) => e.applicationId === E.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [k, E.id]
        ),
        G = (0, c.Wu)([A.default], () => U.map((e) => A.default.getUser(e)).filter((e) => null != e), [U]),
        B = i.useCallback(() => {
            ((0, d.r$)(
                {
                    invite: o,
                    action: 'accept',
                    inviter_id: s.author.id,
                    invite_message_id: s.id
                },
                M
            ),
                d.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: o.code,
                    context: u('Invite Button Embed'),
                    analyticsLocations: M
                }));
        }, [o, s, M, u]),
        Z = o.state === P.r2o.ACCEPTING,
        V = null != O;
    if (null == O) {
        if (null == o.guild) return (0, r.jsx)(R.Z, {});
        O = (0, w.Qs)(o.guild);
    }
    let H = (V && !j) || (V && C);
    return (V && C && (a = L.intl.string(L.t.wJNK8P)), j || (a = L.intl.string(L.t.hHGrW1)), null == o.code || '' === o.code || null == v)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: M,
              children: (0, r.jsx)(F, {
                  app: v,
                  activityUsers: G,
                  isMember: V,
                  channel: k,
                  guild: O,
                  members: h,
                  membersOnline: m,
                  isActivityActive: x,
                  submitting: Z,
                  isDisabled: H,
                  tooltip: a,
                  handleAcceptInvite: B,
                  onView: b
              })
          });
}
function F(e) {
    let { app: t, activityUsers: n, isMember: a, channel: o, guild: s, members: l, membersOnline: c, isActivityActive: u, submitting: d, isDisabled: f, tooltip: _, handleAcceptInvite: p, onView: y } = e,
        { bot: O, icon: v } = t,
        I = C.ZP.getApplicationIconURL({
            id: t.id,
            icon: v,
            bot: O
        }),
        T = (0, b.G)(t),
        S = (0, E.E)(t),
        A = n.length,
        N = i.useMemo(
            () => [
                {
                    label: a ? (u ? L.intl.string(L.t.VJlc0d) : L.intl.string(L.t.RscU7O)) : L.intl.string(L.t['2BP08P']),
                    trackingArea: a ? g.j_.PLAY : g.j_.JOIN_SERVER,
                    submitting: d,
                    disabledReason: f && null != _ ? _ : void 0,
                    onClick: p
                }
            ],
            [p, u, f, a, d, _]
        );
    return (0, r.jsx)(
        h.W,
        U(
            j(
                {
                    header: t.name,
                    title: L.intl.string(L.t['7vb6n5']),
                    iconSrc: I
                },
                S
            ),
            {
                onClickBanner: T,
                info: (0, r.jsxs)('div', {
                    className: x.infoWrapper,
                    children: [
                        (0, r.jsx)(B, {
                            channel: o,
                            guild: s,
                            hasEnded: !u,
                            textColor: 'none'
                        }),
                        a
                            ? A > 0 &&
                              (0, r.jsx)(m.K, {
                                  activityUsers: n,
                                  guildId: s.id,
                                  activityText: L.intl.string(L.t.BMTj29)
                              })
                            : (0, r.jsx)(G, {
                                  members: l,
                                  membersOnline: c,
                                  textColor: 'none'
                              })
                    ]
                }),
                actions: N,
                onClickContent: T,
                trackingConfig: {
                    id: t.id,
                    linkType: g.Un.ACTIVITY_INVITE,
                    onView: y
                }
            }
        )
    );
}

n.d(t, { Z: () => Q }), n(653041), n(47120), n(13667), n(390547), n(301563), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(512722),
    s = n.n(l),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    p = n(447543),
    m = n(434650),
    f = n(317381),
    h = n(778569),
    g = n(182906),
    _ = n(884338),
    b = n(100527),
    v = n(906732),
    y = n(321231),
    x = n(758199),
    O = n(943762),
    E = n(914498),
    j = n(880251),
    N = n(208444),
    C = n(835473),
    I = n(471445),
    S = n(111028),
    T = n(955415),
    P = n(747127),
    A = n(601964),
    w = n(592125),
    Z = n(430824),
    k = n(496675),
    R = n(594174),
    D = n(626135),
    L = n(768581),
    M = n(624138),
    W = n(358595),
    F = n(981631),
    U = n(245335),
    B = n(388032),
    G = n(40774);
function H(e) {
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
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let z = (0, M.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
    K = (0, M.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
    Y = (0, M.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);
function X(e) {
    let { members: t, membersOnline: n, isLarge: i, isStacked: a, textColor: l } = e,
        s = [];
    return (
        null != n &&
            n > 0 &&
            s.push(
                (0, r.jsxs)(
                    'div',
                    {
                        className: G.statusWrapper,
                        children: [
                            (0, r.jsx)('i', { className: G.statusOnline }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: G.count,
                                color: l,
                                children: B.NW.format(B.t['LC+S+v'], { membersOnline: n })
                            })
                        ]
                    },
                    'onlineCount'
                )
            ),
        null != t &&
            s.push(
                (0, r.jsxs)(
                    'div',
                    {
                        className: G.statusWrapper,
                        children: [
                            (0, r.jsx)('i', { className: G.statusOffline }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: G.count,
                                color: l,
                                children: B.NW.format(B.t.zRl6XV, { count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, r.jsx)('div', {
            className: o()(G.statusCounts, {
                [G.large]: i,
                [G.stacked]: a
            }),
            children: s
        })
    );
}
function q(e) {
    let { channel: t, guild: n, isStacked: i, hasEnded: a, textColor: l } = e;
    if (null != t && null != n) {
        let e = (0, I.KS)(t, n);
        return (0, r.jsxs)('div', {
            className: o()(G.channel, {
                [G.stacked]: i,
                [G.ended]: a
            }),
            children: [
                null != e
                    ? (0, r.jsx)(e, {
                          className: G.channelIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, r.jsx)(S.Z, {
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: l,
                        children: B.NW.format(B.t['dc+LW1'], {
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
              className: o()(G.channel, {
                  [G.stacked]: i,
                  [G.ended]: a
              }),
              children: (0, r.jsx)(S.Z, {
                  children: (0, r.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      color: l,
                      children: B.NW.format(B.t.u0vaDA, { guildName: n.name })
                  })
              })
          })
        : null;
}
function Q(e) {
    var t, n, a;
    let l,
        d,
        { invite: x, getAcceptInviteContext: O } = e,
        { approximate_member_count: E, approximate_presence_count: j, target_type: N, target_application: I } = x;
    s()(N === U.Iq.EMBEDDED_APPLICATION && null != I, 'invalid application invite');
    let S = i.useRef(null),
        [L, M] = i.useState(!1),
        [Q, $] = i.useState(!1),
        [, ee] = i.useState(!1),
        et = i.useCallback(
            (e) => {
                e &&
                    ee((e) => {
                        if (!e) {
                            var t;
                            D.default.track(F.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                                application_id: I.id,
                                invite_inviter_id: null === (t = x.inviter) || void 0 === t ? void 0 : t.id
                            });
                        }
                        return !0;
                    });
            },
            [null === (t = x.inviter) || void 0 === t ? void 0 : t.id, I.id]
        ),
        en = (0, m.O)(et),
        er = (0, P.Z)(S, en);
    i.useEffect(() => {
        let e = new ResizeObserver(() =>
                (function () {
                    var e;
                    let t = null === (e = S.current) || void 0 === e ? void 0 : e.offsetWidth;
                    null != t && (M(t < Y + K), $(t <= 2 * z));
                })()
            ),
            t = S.current;
        return (
            null != t && e.observe(t),
            () => {
                e.disconnect();
            }
        );
    }, [S, M, $]);
    let ei = (0, c.e7)([Z.Z], () => (null != x.guild ? Z.Z.getGuild(x.guild.id) : null), [x]),
        ea = (0, C.Z)([I.id])[0],
        eo = (0, c.e7)([f.ZP], () => {
            var e;
            return (null == x ? void 0 : x.channel) != null && (null === (e = f.ZP.getSelfEmbeddedActivityForChannel(x.channel.id)) || void 0 === e ? void 0 : e.applicationId) === I.id;
        }),
        el = (0, c.e7)([f.ZP], () => {
            var e;
            return ((null === (e = x.channel) || void 0 === e ? void 0 : e.id) != null ? f.ZP.getEmbeddedActivitiesForChannel(x.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return I.id === t;
            });
        }),
        es = w.Z.getChannel(null === (n = x.channel) || void 0 === n ? void 0 : n.id),
        ec = (0, c.e7)([k.Z], () => null != es && k.Z.can(F.Plq.USE_EMBEDDED_ACTIVITIES, es), [es]),
        { analyticsLocations: ed } = (0, v.ZP)(b.Z.INVITE_EMBED),
        eu = (0, h.Z)({
            applicationId: I.id,
            size: z,
            names: ['embedded_cover']
        }),
        ep = (0, c.Wu)(
            [f.ZP],
            () =>
                null != es
                    ? f.ZP.getEmbeddedActivitiesForChannel(es.id)
                          .filter((e) => e.applicationId === I.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [es, I.id]
        ),
        em = (0, c.Wu)([R.default], () => ep.map((e) => R.default.getUser(e)).filter((e) => null != e), [ep]),
        ef = i.useCallback(() => {
            (0, p.r$)(x, 'accept', ed),
                p.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: x.code,
                    context: O('Invite Button Embed'),
                    analyticsLocations: ed
                });
        }, [x, ed, O]),
        eh = x.state === F.r2o.ACCEPTING,
        eg = null != ei;
    if (null == ei) {
        if (null == x.guild) return (0, r.jsx)(W.Z, {});
        ei = new A.ZP(x.guild);
    }
    let e_ = (eg && !ec) || (eg && eo);
    eg && eo && (l = B.NW.string(B.t.wJNK8P)), ec || (l = B.NW.string(B.t.hHGrW1)), (d = eo ? B.NW.string(B.t.KC26NT) : el || !eg ? B.NW.string(B.t.VJlc0d) : B.NW.string(B.t.I0v0Qk));
    let { enabled: eb } = y.G.useExperiment({ location: 'EmbeddedApplicationInvite' });
    return null == x.code || '' === x.code
        ? null
        : eb && null != ea
          ? (0, r.jsx)(J, {
                app: ea,
                invite: x,
                activityUsers: em,
                isMember: eg,
                channel: es,
                guild: ei,
                members: E,
                membersOnline: j,
                isActivityActive: el,
                submitting: eh,
                isDisabled: e_,
                tooltip: l,
                handleAcceptInvite: ef,
                onView: () => et(!0)
            })
          : (0, r.jsxs)('div', {
                className: G.container,
                ref: er,
                children: [
                    (0, r.jsx)('div', {
                        className: o()(G.imgContainer, {
                            [G.large]: L,
                            [G.stacked]: Q
                        }),
                        children: (0, r.jsx)(g.Z, {
                            imageBackground: eu,
                            applicationName: null !== (a = null == ea ? void 0 : ea.name) && void 0 !== a ? a : '',
                            imageClassName: o()(G.img, {
                                [G.large]: L,
                                [G.stacked]: Q
                            }),
                            imageNotFoundClassName: o()(G.brokenImg, {
                                [G.large]: L,
                                [G.stacked]: Q
                            })
                        })
                    }),
                    (0, r.jsxs)(T.Z, {
                        className: o()(G.content, {
                            [G.large]: L,
                            [G.stacked]: Q
                        }),
                        children: [
                            (0, r.jsxs)('div', {
                                className: G.info,
                                children: [
                                    (0, r.jsx)(u.vwX, { children: eg ? B.NW.string(B.t['1ckx+P']) : B.NW.string(B.t.BoQUFR) }),
                                    (0, r.jsx)(u.X6q, {
                                        className: G.heading,
                                        variant: 'heading-xl/semibold',
                                        children: null == ea ? void 0 : ea.name
                                    }),
                                    (0, r.jsx)(q, {
                                        channel: es,
                                        guild: ei,
                                        isStacked: Q,
                                        hasEnded: !el
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: o()(G.currentState, {
                                    [G.large]: L,
                                    [G.split]: !el && Q
                                }),
                                children: [
                                    !el && eg
                                        ? (0, r.jsxs)('div', {
                                              className: o()(G.endedNote, { [G.large]: L }),
                                              children: [
                                                  (0, r.jsx)(u.Text, {
                                                      variant: 'text-xs/medium',
                                                      children: B.NW.string(B.t.JBnc7O)
                                                  }),
                                                  (0, r.jsx)(u.Text, {
                                                      variant: 'text-xs/medium',
                                                      children: B.NW.string(B.t.lEvDDQ)
                                                  })
                                              ]
                                          })
                                        : null,
                                    eg
                                        ? null
                                        : (0, r.jsx)(X, {
                                              members: E,
                                              membersOnline: j,
                                              isLarge: L,
                                              isStacked: Q
                                          }),
                                    (0, r.jsxs)('div', {
                                        className: G.cta,
                                        children: [
                                            null != ei && el
                                                ? (0, r.jsx)('div', {
                                                      className: G.avatars,
                                                      children: (0, r.jsx)(_.Z, {
                                                          guildId: ei.id,
                                                          users: em,
                                                          max: 4
                                                      })
                                                  })
                                                : null,
                                            (0, r.jsx)(u.ua7, {
                                                text: l,
                                                children: (e) => {
                                                    var { onClick: t } = e,
                                                        n = (function (e, t) {
                                                            if (null == e) return {};
                                                            var n,
                                                                r,
                                                                i = (function (e, t) {
                                                                    if (null == e) return {};
                                                                    var n,
                                                                        r,
                                                                        i = {},
                                                                        a = Object.keys(e);
                                                                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                                    return i;
                                                                })(e, t);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var a = Object.getOwnPropertySymbols(e);
                                                                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                                            }
                                                            return i;
                                                        })(e, ['onClick']);
                                                    return (0, r.jsx)(
                                                        u.zxk,
                                                        V(
                                                            H(
                                                                {
                                                                    className: G.actionButton,
                                                                    onClick: () => {
                                                                        ef(), null == t || t();
                                                                    },
                                                                    wrapperClassName: G.tooltipButtonWrapper
                                                                },
                                                                n
                                                            ),
                                                            {
                                                                submitting: eh,
                                                                disabled: e_,
                                                                color: u.Ttl.GREEN,
                                                                children: d
                                                            }
                                                        )
                                                    );
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            });
}
function J(e) {
    let { app: t, invite: n, activityUsers: a, isMember: o, channel: l, guild: s, members: c, membersOnline: d, isActivityActive: u, submitting: p, isDisabled: m, tooltip: f, handleAcceptInvite: h, onView: g } = e,
        _ = new URL(n.code, 'https://discord.gg').toString(),
        { bot: b, icon: v } = t,
        y = L.ZP.getApplicationIconURL({
            id: t.id,
            icon: v,
            bot: b
        }),
        C = (0, N.z)(t),
        I = (0, j.E)(t),
        S = a.length,
        T = i.useMemo(() => {
            let e = [
                {
                    label: o ? (u ? B.NW.string(B.t.VJlc0d) : B.NW.string(B.t.RscU7O)) : B.NW.string(B.t['2BP08P']),
                    trackingArea: o ? E.j_.PLAY : E.j_.JOIN_SERVER,
                    submitting: p,
                    disabledReason: m && null != f ? f : void 0,
                    onClick: h
                }
            ];
            return null != C && e.push(C), e;
        }, [h, u, m, o, p, f, C]);
    return (0, r.jsx)(
        x.W,
        V(
            H(
                {
                    header: t.name,
                    title: B.NW.string(B.t['7vb6n5']),
                    iconSrc: y,
                    embedUrl: _
                },
                I
            ),
            {
                info: (0, r.jsxs)('div', {
                    className: G.infoWrapper,
                    children: [
                        (0, r.jsx)(q, {
                            channel: l,
                            guild: s,
                            isStacked: !1,
                            hasEnded: !u,
                            textColor: 'none'
                        }),
                        o
                            ? S > 0 &&
                              (0, r.jsx)(O.K, {
                                  activityUsers: a,
                                  guildId: s.id,
                                  activityText: B.NW.string(B.t.BMTj29)
                              })
                            : (0, r.jsx)(X, {
                                  members: c,
                                  membersOnline: d,
                                  isLarge: !1,
                                  isStacked: !1,
                                  textColor: 'none'
                              })
                    ]
                }),
                actions: T,
                trackingConfig: {
                    id: t.id,
                    linkType: E.Un.ACTIVITY_INVITE,
                    onView: g
                }
            }
        )
    );
}

n.d(t, { Z: () => Q }), n(653041), n(47120), n(13667), n(390547), n(301563), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    p = n(447543),
    m = n(434650),
    f = n(317381),
    h = n(778569),
    g = n(182906),
    _ = n(884338),
    b = n(100527),
    x = n(906732),
    y = n(321231),
    E = n(758199),
    v = n(943762),
    O = n(914498),
    N = n(880251),
    j = n(208444),
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
    U = n(981631),
    F = n(245335),
    B = n(388032),
    G = n(582909);
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
let z = (0, M.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
    K = (0, M.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
    Y = (0, M.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);
function X(e) {
    let { members: t, membersOnline: n, isLarge: i, isStacked: a, textColor: o } = e,
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
                            (0, r.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: G.count,
                                color: o,
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
                            (0, r.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: G.count,
                                color: o,
                                children: B.NW.format(B.t.zRl6XV, { count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, r.jsx)('div', {
            className: l()(G.statusCounts, {
                [G.large]: i,
                [G.stacked]: a
            }),
            children: s
        })
    );
}
function q(e) {
    let { channel: t, guild: n, isStacked: i, hasEnded: a, textColor: o } = e;
    if (null != t && null != n) {
        let e = (0, I.KS)(t, n);
        return (0, r.jsxs)('div', {
            className: l()(G.channel, {
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
                    children: (0, r.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: o,
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
              className: l()(G.channel, {
                  [G.stacked]: i,
                  [G.ended]: a
              }),
              children: (0, r.jsx)(S.Z, {
                  children: (0, r.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      color: o,
                      children: B.NW.format(B.t.u0vaDA, { guildName: n.name })
                  })
              })
          })
        : null;
}
function Q(e) {
    var t, n, a;
    let o,
        u,
        { invite: E, getAcceptInviteContext: v } = e,
        { approximate_member_count: O, approximate_presence_count: N, target_type: j, target_application: I } = E;
    s()(j === F.Iq.EMBEDDED_APPLICATION && null != I, 'invalid application invite');
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
                            D.default.track(U.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                                application_id: I.id,
                                invite_inviter_id: null == (t = E.inviter) ? void 0 : t.id
                            });
                        }
                        return !0;
                    });
            },
            [null == (t = E.inviter) ? void 0 : t.id, I.id]
        ),
        en = (0, m.O)(et),
        er = (0, P.Z)(S, en);
    i.useEffect(() => {
        let e = new ResizeObserver(() =>
                (function () {
                    var e;
                    let t = null == (e = S.current) ? void 0 : e.offsetWidth;
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
    let ei = (0, c.e7)([Z.Z], () => (null != E.guild ? Z.Z.getGuild(E.guild.id) : null), [E]),
        ea = (0, C.Z)([I.id])[0],
        el = (0, c.e7)([f.ZP], () => {
            var e;
            return (null == E ? void 0 : E.channel) != null && (null == (e = f.ZP.getSelfEmbeddedActivityForChannel(E.channel.id)) ? void 0 : e.applicationId) === I.id;
        }),
        eo = (0, c.e7)([f.ZP], () => {
            var e;
            return ((null == (e = E.channel) ? void 0 : e.id) != null ? f.ZP.getEmbeddedActivitiesForChannel(E.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return I.id === t;
            });
        }),
        es = w.Z.getChannel(null == (n = E.channel) ? void 0 : n.id),
        ec = (0, c.e7)([k.Z], () => null != es && k.Z.can(U.Plq.USE_EMBEDDED_ACTIVITIES, es), [es]),
        { analyticsLocations: eu } = (0, x.ZP)(b.Z.INVITE_EMBED),
        ed = (0, h.Z)({
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
            (0, p.r$)(E, 'accept', eu),
                p.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: E.code,
                    context: v('Invite Button Embed'),
                    analyticsLocations: eu
                });
        }, [E, eu, v]),
        eh = E.state === U.r2o.ACCEPTING,
        eg = null != ei;
    if (null == ei) {
        if (null == E.guild) return (0, r.jsx)(W.Z, {});
        ei = new A.ZP(E.guild);
    }
    let e_ = (eg && !ec) || (eg && el);
    eg && el && (o = B.NW.string(B.t.wJNK8P)), ec || (o = B.NW.string(B.t.hHGrW1)), (u = el ? B.NW.string(B.t.KC26NT) : eo || !eg ? B.NW.string(B.t.VJlc0d) : B.NW.string(B.t.I0v0Qk));
    let { enabled: eb } = y.G.useExperiment({ location: 'EmbeddedApplicationInvite' });
    return null == E.code || '' === E.code
        ? null
        : eb && null != ea
          ? (0, r.jsx)(J, {
                app: ea,
                invite: E,
                activityUsers: em,
                isMember: eg,
                channel: es,
                guild: ei,
                members: O,
                membersOnline: N,
                isActivityActive: eo,
                submitting: eh,
                isDisabled: e_,
                tooltip: o,
                handleAcceptInvite: ef,
                onView: () => et(!0)
            })
          : (0, r.jsxs)('div', {
                className: G.container,
                ref: er,
                children: [
                    (0, r.jsx)('div', {
                        className: l()(G.imgContainer, {
                            [G.large]: L,
                            [G.stacked]: Q
                        }),
                        children: (0, r.jsx)(g.Z, {
                            imageBackground: ed,
                            applicationName: null != (a = null == ea ? void 0 : ea.name) ? a : '',
                            imageClassName: l()(G.img, {
                                [G.large]: L,
                                [G.stacked]: Q
                            }),
                            imageNotFoundClassName: l()(G.brokenImg, {
                                [G.large]: L,
                                [G.stacked]: Q
                            })
                        })
                    }),
                    (0, r.jsxs)(T.Z, {
                        className: l()(G.content, {
                            [G.large]: L,
                            [G.stacked]: Q
                        }),
                        children: [
                            (0, r.jsxs)('div', {
                                className: G.info,
                                children: [
                                    (0, r.jsx)(d.vwX, { children: eg ? B.NW.string(B.t['1ckx+P']) : B.NW.string(B.t.BoQUFR) }),
                                    (0, r.jsx)(d.X6q, {
                                        className: G.heading,
                                        variant: 'heading-xl/semibold',
                                        children: null == ea ? void 0 : ea.name
                                    }),
                                    (0, r.jsx)(q, {
                                        channel: es,
                                        guild: ei,
                                        isStacked: Q,
                                        hasEnded: !eo
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: l()(G.currentState, {
                                    [G.large]: L,
                                    [G.split]: !eo && Q
                                }),
                                children: [
                                    !eo && eg
                                        ? (0, r.jsxs)('div', {
                                              className: l()(G.endedNote, { [G.large]: L }),
                                              children: [
                                                  (0, r.jsx)(d.Text, {
                                                      variant: 'text-xs/medium',
                                                      children: B.NW.string(B.t.JBnc7O)
                                                  }),
                                                  (0, r.jsx)(d.Text, {
                                                      variant: 'text-xs/medium',
                                                      children: B.NW.string(B.t.lEvDDQ)
                                                  })
                                              ]
                                          })
                                        : null,
                                    eg
                                        ? null
                                        : (0, r.jsx)(X, {
                                              members: O,
                                              membersOnline: N,
                                              isLarge: L,
                                              isStacked: Q
                                          }),
                                    (0, r.jsxs)('div', {
                                        className: G.cta,
                                        children: [
                                            null != ei && eo
                                                ? (0, r.jsx)('div', {
                                                      className: G.avatars,
                                                      children: (0, r.jsx)(_.Z, {
                                                          guildId: ei.id,
                                                          users: em,
                                                          max: 4
                                                      })
                                                  })
                                                : null,
                                            (0, r.jsx)(d.ua7, {
                                                text: o,
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
                                                        d.zxk,
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
                                                                color: d.Ttl.GREEN,
                                                                children: u
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
    let { app: t, invite: n, activityUsers: a, isMember: l, channel: o, guild: s, members: c, membersOnline: u, isActivityActive: d, submitting: p, isDisabled: m, tooltip: f, handleAcceptInvite: h, onView: g } = e,
        _ = new URL(n.code, 'https://discord.gg').toString(),
        { bot: b, icon: x } = t,
        y = L.ZP.getApplicationIconURL({
            id: t.id,
            icon: x,
            bot: b
        }),
        C = (0, j.z)(t),
        I = (0, N.E)(t),
        S = a.length,
        T = i.useMemo(() => {
            let e = [
                {
                    label: l ? (d ? B.NW.string(B.t.VJlc0d) : B.NW.string(B.t.RscU7O)) : B.NW.string(B.t['2BP08P']),
                    trackingArea: l ? O.j_.PLAY : O.j_.JOIN_SERVER,
                    submitting: p,
                    disabledReason: m && null != f ? f : void 0,
                    onClick: h
                }
            ];
            return null != C && e.push(C), e;
        }, [h, d, m, l, p, f, C]);
    return (0, r.jsx)(
        E.W,
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
                            channel: o,
                            guild: s,
                            isStacked: !1,
                            hasEnded: !d,
                            textColor: 'none'
                        }),
                        l
                            ? S > 0 &&
                              (0, r.jsx)(v.K, {
                                  activityUsers: a,
                                  guildId: s.id,
                                  activityText: B.NW.string(B.t.BMTj29)
                              })
                            : (0, r.jsx)(X, {
                                  members: c,
                                  membersOnline: u,
                                  isLarge: !1,
                                  isStacked: !1,
                                  textColor: 'none'
                              })
                    ]
                }),
                actions: T,
                trackingConfig: {
                    id: t.id,
                    linkType: O.Un.ACTIVITY_INVITE,
                    onView: g
                }
            }
        )
    );
}

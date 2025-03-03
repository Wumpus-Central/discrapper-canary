n.d(t, { Z: () => q }), n(653041), n(47120), n(13667), n(390547), n(301563), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
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
    E = n(880251),
    j = n(208444),
    N = n(835473),
    C = n(471445),
    I = n(111028),
    S = n(955415),
    T = n(747127),
    P = n(601964),
    A = n(592125),
    w = n(430824),
    Z = n(496675),
    k = n(594174),
    R = n(626135),
    L = n(768581),
    D = n(624138),
    M = n(358595),
    W = n(981631),
    F = n(245335),
    U = n(388032),
    B = n(40774);
function G(e) {
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
function H(e, t) {
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
let V = (0, D.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
    z = (0, D.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
    K = (0, D.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);
function Y(e) {
    let { members: t, membersOnline: n, isLarge: i, isStacked: a } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, r.jsxs)(
                    'div',
                    {
                        className: B.statusWrapper,
                        children: [
                            (0, r.jsx)('i', { className: B.statusOnline }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: B.count,
                                children: U.NW.format(U.t['LC+S+v'], { membersOnline: n })
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
                        className: B.statusWrapper,
                        children: [
                            (0, r.jsx)('i', { className: B.statusOffline }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: B.count,
                                children: U.NW.format(U.t.zRl6XV, { count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, r.jsx)('div', {
            className: o()(B.statusCounts, {
                [B.large]: i,
                [B.stacked]: a
            }),
            children: l
        })
    );
}
function X(e) {
    let { channel: t, guild: n, isStacked: i, hasEnded: a } = e;
    if (null != t && null != n) {
        let e = (0, C.KS)(t, n);
        return (0, r.jsxs)('div', {
            className: o()(B.channel, {
                [B.stacked]: i,
                [B.ended]: a
            }),
            children: [
                null != e
                    ? (0, r.jsx)(e, {
                          className: B.channelIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, r.jsx)(I.Z, {
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        children: U.NW.format(U.t['dc+LW1'], {
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
              className: o()(B.channel, {
                  [B.stacked]: i,
                  [B.ended]: a
              }),
              children: (0, r.jsx)(I.Z, {
                  children: (0, r.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      children: U.NW.format(U.t.u0vaDA, { guildName: n.name })
                  })
              })
          })
        : null;
}
function q(e) {
    var t, n, a;
    let l,
        d,
        { invite: x, getAcceptInviteContext: O } = e,
        { approximate_member_count: E, approximate_presence_count: j, target_type: C, target_application: I } = x;
    s()(C === F.Iq.EMBEDDED_APPLICATION && null != I, 'invalid application invite');
    let L = i.useRef(null),
        [D, q] = i.useState(!1),
        [J, $] = i.useState(!1),
        [, ee] = i.useState(!1),
        et = i.useCallback(
            (e) => {
                e &&
                    ee((e) => {
                        if (!e) {
                            var t;
                            R.default.track(W.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
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
        er = (0, T.Z)(L, en);
    i.useEffect(() => {
        let e = new ResizeObserver(() =>
                (function () {
                    var e;
                    let t = null === (e = L.current) || void 0 === e ? void 0 : e.offsetWidth;
                    null != t && (q(t < K + z), $(t <= 2 * V));
                })()
            ),
            t = L.current;
        return (
            null != t && e.observe(t),
            () => {
                e.disconnect();
            }
        );
    }, [L, q, $]);
    let ei = (0, c.e7)([w.Z], () => (null != x.guild ? w.Z.getGuild(x.guild.id) : null), [x]),
        ea = (0, N.Z)([I.id])[0],
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
        es = A.Z.getChannel(null === (n = x.channel) || void 0 === n ? void 0 : n.id),
        ec = (0, c.e7)([Z.Z], () => null != es && Z.Z.can(W.Plq.USE_EMBEDDED_ACTIVITIES, es), [es]),
        { analyticsLocations: ed } = (0, v.ZP)(b.Z.INVITE_EMBED),
        eu = (0, h.Z)({
            applicationId: I.id,
            size: V,
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
        em = (0, c.Wu)([k.default], () => ep.map((e) => k.default.getUser(e)).filter((e) => null != e), [ep]),
        ef = i.useCallback(() => {
            (0, p.r$)(x, 'accept', ed),
                p.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: x.code,
                    context: O('Invite Button Embed'),
                    analyticsLocations: ed
                });
        }, [x, ed, O]),
        eh = x.state === W.r2o.ACCEPTING,
        eg = null != ei;
    if (null == ei) {
        if (null == x.guild) return (0, r.jsx)(M.Z, {});
        ei = new P.ZP(x.guild);
    }
    let e_ = (eg && !ec) || (eg && eo);
    eg && eo && (l = U.NW.string(U.t.wJNK8P)), ec || (l = U.NW.string(U.t.hHGrW1)), (d = eo ? U.NW.string(U.t.KC26NT) : el || !eg ? U.NW.string(U.t.VJlc0d) : U.NW.string(U.t.I0v0Qk));
    let { enabled: eb } = y.G.useExperiment({ location: 'EmbeddedApplicationInvite' });
    return null == x.code || '' === x.code
        ? null
        : eb && null != ea
          ? (0, r.jsx)('div', {
                ref: en,
                children: (0, r.jsx)(Q, {
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
                    handleAcceptInvite: ef
                })
            })
          : (0, r.jsxs)('div', {
                className: B.container,
                ref: er,
                children: [
                    (0, r.jsx)('div', {
                        className: o()(B.imgContainer, {
                            [B.large]: D,
                            [B.stacked]: J
                        }),
                        children: (0, r.jsx)(g.Z, {
                            imageBackground: eu,
                            applicationName: null !== (a = null == ea ? void 0 : ea.name) && void 0 !== a ? a : '',
                            imageClassName: o()(B.img, {
                                [B.large]: D,
                                [B.stacked]: J
                            }),
                            imageNotFoundClassName: o()(B.brokenImg, {
                                [B.large]: D,
                                [B.stacked]: J
                            })
                        })
                    }),
                    (0, r.jsxs)(S.Z, {
                        className: o()(B.content, {
                            [B.large]: D,
                            [B.stacked]: J
                        }),
                        children: [
                            (0, r.jsxs)('div', {
                                className: B.info,
                                children: [
                                    (0, r.jsx)(u.vwX, { children: eg ? U.NW.string(U.t['1ckx+P']) : U.NW.string(U.t.BoQUFR) }),
                                    (0, r.jsx)(u.X6q, {
                                        className: B.heading,
                                        variant: 'heading-xl/semibold',
                                        children: null == ea ? void 0 : ea.name
                                    }),
                                    (0, r.jsx)(X, {
                                        channel: es,
                                        guild: ei,
                                        isStacked: J,
                                        hasEnded: !el
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: o()(B.currentState, {
                                    [B.large]: D,
                                    [B.split]: !el && J
                                }),
                                children: [
                                    !el && eg
                                        ? (0, r.jsxs)('div', {
                                              className: o()(B.endedNote, { [B.large]: D }),
                                              children: [
                                                  (0, r.jsx)(u.Text, {
                                                      variant: 'text-xs/medium',
                                                      children: U.NW.string(U.t.JBnc7O)
                                                  }),
                                                  (0, r.jsx)(u.Text, {
                                                      variant: 'text-xs/medium',
                                                      children: U.NW.string(U.t.lEvDDQ)
                                                  })
                                              ]
                                          })
                                        : null,
                                    eg
                                        ? null
                                        : (0, r.jsx)(Y, {
                                              members: E,
                                              membersOnline: j,
                                              isLarge: D,
                                              isStacked: J
                                          }),
                                    (0, r.jsxs)('div', {
                                        className: B.cta,
                                        children: [
                                            null != ei && el
                                                ? (0, r.jsx)('div', {
                                                      className: B.avatars,
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
                                                        H(
                                                            G(
                                                                {
                                                                    className: B.actionButton,
                                                                    onClick: () => {
                                                                        ef(), null == t || t();
                                                                    },
                                                                    wrapperClassName: B.tooltipButtonWrapper
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
function Q(e) {
    let { app: t, invite: n, activityUsers: a, isMember: o, channel: l, guild: s, members: c, membersOnline: d, isActivityActive: u, submitting: p, isDisabled: m, tooltip: f, handleAcceptInvite: h } = e,
        g = new URL(n.code, 'https://discord.gg').toString(),
        { bot: _, icon: b } = t,
        v = L.ZP.getApplicationIconURL({
            id: t.id,
            icon: b,
            bot: _
        }),
        y = (0, j.z)(t),
        N = (0, E.E)(t),
        C = a.length,
        I = i.useMemo(() => {
            let e = [
                {
                    label: o ? (u ? U.NW.string(U.t.VJlc0d) : U.NW.string(U.t.RscU7O)) : U.NW.string(U.t['2BP08P']),
                    submitting: p,
                    disabledReason: m && null != f ? f : void 0,
                    onClick: h
                }
            ];
            return null != y && e.push(y), e;
        }, [h, u, m, o, p, f, y]);
    return (0, r.jsx)(
        x.W,
        H(
            G(
                {
                    header: t.name,
                    title: U.NW.string(U.t['7vb6n5']),
                    iconSrc: v,
                    embedUrl: g
                },
                N
            ),
            {
                info: (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(X, {
                            channel: l,
                            guild: s,
                            isStacked: !1,
                            hasEnded: !u
                        }),
                        o
                            ? C > 0 &&
                              (0, r.jsx)(O.K, {
                                  activityUsers: a,
                                  guildId: s.id,
                                  activityText: U.NW.string(U.t.BMTj29)
                              })
                            : (0, r.jsx)(Y, {
                                  members: c,
                                  membersOnline: d,
                                  isLarge: !1,
                                  isStacked: !1
                              })
                    ]
                }),
                actions: I
            }
        )
    );
}

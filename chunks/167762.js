n.d(t, {
    Or: () => en,
    r1: () => et
}),
    n(388685),
    n(539854),
    n(642613);
var i = n(200651),
    r = n(192379),
    l = n(658722),
    o = n.n(l),
    s = n(512969),
    a = n(91192),
    c = n(442837),
    u = n(481060),
    d = n(278323),
    g = n(493683),
    p = n(239091),
    f = n(529103),
    N = n(194359),
    h = n(549879),
    m = n(724757),
    y = n(620662),
    O = n(420660),
    S = n(326255),
    b = n(956221),
    v = n(747017),
    I = n(297781),
    E = n(82295),
    j = n(554300),
    C = n(558602),
    P = n(567409),
    Z = n(373662),
    w = n(850020),
    T = n(814443),
    _ = n(518950),
    x = n(670188),
    A = n(199902),
    G = n(158776),
    k = n(699516),
    U = n(885110),
    D = n(594174),
    F = n(979651),
    R = n(151459),
    M = n(981631),
    L = n(388032),
    W = n(288779);
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Y(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                l = Object.keys(e);
            for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let q = u.EFr.SIZE_32,
    H = {
        INCOMING: 0,
        SAME_ACTIVITY: 1,
        ACTIVITIES: 2,
        SUGGESTIONS: 3,
        ONLINE: 4,
        OFFLINE: 5
    },
    J = [I.OV, I.wO, I.f, I.v1, I.pQ],
    B = r.memo((e) => {
        let { user: t, activities: l = [], gameProfileEntry: o, index: s, closeParentPopout: f, isSuggestion: m, isIncomingRequest: E = !1, appContext: P } = e,
            {
                avatarDecorationSrc: T,
                avatarSrc: D,
                eventHandlers: F
            } = (0, _.Z)({
                user: t,
                size: q,
                animateOnHover: !0,
                guildId: null
            }),
            R = (0, a.JA)(''.concat(s)),
            [Y, H] = r.useState(!1),
            [B, K] = r.useState({}),
            Q = l.filter((e) => e.type === M.IIU.PLAYING && (0, y.Z)(e, M.xjy.JOIN)),
            X = (0, c.Wu)([U.Z], () => U.Z.getActivities().filter((e) => e.type === M.IIU.PLAYING && (0, y.Z)(e, M.xjy.JOIN))),
            { voiceChannel: $ } = (0, b.Z)({
                userId: t.id,
                surface: 'friends-popout'
            }),
            ee = (0, c.e7)([k.Z], () => k.Z.getRelationshipType(t.id)),
            et = (0, w.K)({
                location: 'friends-popout',
                user: t
            }),
            {
                status: en,
                applicationStream: ei,
                isMobile: er,
                newStatus: el
            } = (0, c.cj)(
                [G.Z, A.Z],
                () => {
                    let e = G.Z.getStatus(t.id),
                        n = A.Z.getAnyStreamForUser(t.id),
                        i = G.Z.isMobileOnline(t.id),
                        r = (0, O.Z)(l) ? M.Skl.STREAMING : e;
                    return {
                        status: e,
                        applicationStream: n,
                        isMobile: i,
                        newStatus: r
                    };
                },
                [t.id, l]
            ),
            eo = r.useCallback(() => {
                H(!0);
            }, []),
            es = r.useCallback(() => {
                H(!1);
            }, []),
            ea = r.useCallback(() => {
                if (null != o) {
                    let e = o.traits,
                        t = z(V({}, o), { traits: e.slice(0, 3) });
                    return (0, i.jsx)(I.Gk, {
                        location: I.Gt.FRIENDS_POPOUT,
                        className: W.badgesContainer,
                        children: J.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                    });
                }
                if (
                    !(0, S.Z)({
                        activities: l,
                        status: en,
                        applicationStream: ei,
                        voiceChannel: $
                    })
                )
                    return null;
                let e = !(0, C.Z)({
                    activity:
                        null == l
                            ? void 0
                            : l.find((e) => {
                                  let { type: t } = e;
                                  return t === M.IIU.CUSTOM_STATUS;
                              }),
                    user: t
                });
                return (0, i.jsx)(v.Z, {
                    user: t,
                    activities: l,
                    applicationStream: ei,
                    voiceChannel: $,
                    animate: !1,
                    hideEmoji: e,
                    hasQuest: !1,
                    textClassName: W.activityText
                });
            }, [t, l, en, ei, $, o]),
            ec = r.useCallback(
                (e) => {
                    (0, p.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                z(V({}, n), {
                                    user: t,
                                    appContext: P
                                })
                            );
                    });
                },
                [t, P]
            ),
            eu = r.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, h.i)(P, !0), g.Z.openPrivateChannel(t.id), null != f && f();
                },
                [t.id, f, P]
            ),
            ed = r.useCallback(
                (e) => {
                    e.preventDefault(),
                        e.stopPropagation(),
                        N.Z.addRelationship({
                            userId: t.id,
                            context: { location: 'friends-popout' }
                        });
                },
                [t.id]
            ),
            eg = async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !B[n.application_id]))
                    try {
                        K((e) => z(V({}, e), { [n.application_id]: !0 })),
                            await d.Z.sendActivityInviteUser({
                                type: M.mFx.JOIN,
                                userId: t.id,
                                activity: n,
                                location: M.Sbl.FRIENDS_POPOUT
                            }),
                            K((e) => z(V({}, e), { [n.application_id]: !1 }));
                    } finally {
                        K((e) => z(V({}, e), { [n.application_id]: !1 }));
                    }
            },
            ep = async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !B[n.application_id]))
                    try {
                        K((e) => z(V({}, e), { [n.application_id]: !0 })),
                            await d.Z.sendActivityInviteUser({
                                type: M.mFx.JOIN_REQUEST,
                                userId: t.id,
                                activity: n,
                                location: M.Sbl.FRIENDS_POPOUT
                            }),
                            K((e) => z(V({}, e), { [n.application_id]: !1 }));
                    } finally {
                        K((e) => z(V({}, e), { [n.application_id]: !1 }));
                    }
            },
            ef = () =>
                E || ee === M.OGo.PENDING_INCOMING
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(Z.sF, {
                                  label: L.NW.string(L.t.MMlhsr),
                                  icon: u.dz2,
                                  onClick: (e) => {
                                      e.preventDefault(),
                                          e.stopPropagation(),
                                          N.Z.addRelationship({
                                              userId: t.id,
                                              context: { location: 'friends-popout' }
                                          });
                                  }
                              }),
                              (0, i.jsx)(Z.sF, {
                                  label: L.NW.string(L.t.ytCpKi),
                                  icon: u.Dio,
                                  onClick: (e) => {
                                      e.preventDefault(), e.stopPropagation(), N.Z.removeRelationship(t.id, { location: 'friends-popout' });
                                  }
                              })
                          ]
                      })
                    : m
                      ? ee === M.OGo.PENDING_OUTGOING
                          ? (0, i.jsx)(Z.sF, {
                                label: L.NW.string(L.t['bTfA//']),
                                icon: u.iHX,
                                onClick: (e) => {
                                    e.preventDefault(), e.stopPropagation(), N.Z.cancelFriendRequest(t.id, { location: 'friends-popout' });
                                }
                            })
                          : (0, i.jsx)(Z.sF, {
                                label: L.NW.string(L.t.w5uwoK),
                                icon: u.oLu,
                                onClick: ed
                            })
                      : null,
            eN = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        Q.map((e) =>
                            (0, i.jsx)(
                                Z.sF,
                                {
                                    label: B[e.application_id] ? L.NW.string(L.t['8BEiNj']) : L.NW.string(L.t.OKsSCQ),
                                    icon: B[e.application_id] ? u.dz2 : u.V9,
                                    onClick: (t) => ep(t, e)
                                },
                                e.application_id
                            )
                        ),
                        X.map((e) => {
                            var n;
                            return (0, i.jsx)(
                                Z.sF,
                                {
                                    label: B[e.application_id]
                                        ? L.NW.string(L.t['8BEiNj'])
                                        : L.NW.formatToPlainString(L.t['KHLo+P'], {
                                              channel: null != (n = t.globalName) ? n : t.username,
                                              game: e.name
                                          }),
                                    icon: B[e.application_id] ? u.dz2 : u.ejJ,
                                    onClick: (t) => eg(t, e)
                                },
                                e.application_id
                            );
                        })
                    ]
                });
        return (0, i.jsx)(x.Z, {
            user: t,
            position: 'left',
            spacing: 16,
            children: (e, n) => {
                var r;
                let { isShown: l } = n;
                return (0, i.jsxs)('div', {
                    className: W.row,
                    children: [
                        (0, i.jsx)(
                            j.Z,
                            V(
                                {
                                    innerClassName: W.rowInner,
                                    onContextMenu: ec,
                                    onMouseEnter: eo,
                                    onMouseLeave: es,
                                    avatar: (0, i.jsx)(
                                        u.qEK,
                                        z(V({}, F), {
                                            size: q,
                                            src: D,
                                            isMobile: er,
                                            isTyping: !1,
                                            status: el,
                                            className: W.avatar,
                                            'aria-label': t.username,
                                            statusTooltip: !0,
                                            avatarDecoration: T
                                        })
                                    ),
                                    name: (0, i.jsx)('span', {
                                        className: W.username,
                                        children: null != (r = t.globalName) ? r : t.username
                                    }),
                                    subText: ea(),
                                    selected: l,
                                    nameplate: et,
                                    hovered: Y
                                },
                                e,
                                R
                            )
                        ),
                        (0, i.jsxs)(Z.ZP, {
                            className: W.hoverBar,
                            children: [
                                ef(),
                                eN(),
                                !E &&
                                    (0, i.jsx)(Z.sF, {
                                        label: L.NW.string(L.t['g33r/P']),
                                        icon: u.kBi,
                                        onClick: eu
                                    }),
                                (0, i.jsx)(Z.sF, {
                                    label: L.NW.string(L.t.UKOtz8),
                                    icon: u.xhG,
                                    onClick: ec
                                })
                            ]
                        })
                    ]
                });
            }
        });
    });
B.displayName = 'FriendRow';
let K = () =>
        (0, c.e7)([k.Z, D.default, G.Z], () => {
            let e = k.Z.getRelationships(),
                t = [];
            for (let [n, i] of Object.entries(e)) {
                if (i !== M.OGo.PENDING_INCOMING) continue;
                let e = D.default.getUser(n);
                if (null != e) {
                    let i = k.Z.getSince(n),
                        r = null != i ? new Date(i).getTime() : 0;
                    t.push({
                        user: e,
                        activities: G.Z.getActivities(n),
                        timestamp: r
                    });
                }
            }
            return t.sort((e, t) => t.timestamp - e.timestamp), t;
        }),
    Q = () =>
        (0, c.e7)([T.Z, D.default, G.Z, k.Z, F.Z], () => {
            let e = T.Z.getUserAffinitiesMap(),
                t = [];
            for (let [n, i] of e.entries()) {
                if (k.Z.isFriend(n) || i.affinity <= 10) continue;
                let e = D.default.getUser(n);
                if (null != e) {
                    let r = G.Z.getActivities(n),
                        l = F.Z.getVoiceStateForUser(n),
                        o = (null == l ? void 0 : l.channelId) != null;
                    (r.length > 0 || o) &&
                        t.push({
                            user: e,
                            activities: r,
                            affinity: i.affinity
                        });
                }
            }
            return t.sort((e, t) => t.affinity - e.affinity);
        }),
    X = () => {
        let e = (0, c.e7)([U.Z], () => U.Z.getPrimaryActivity()),
            t = null == e ? void 0 : e.application_id,
            n = (0, P.Ns)(t);
        return (0, c.e7)(
            [k.Z, D.default, G.Z, F.Z],
            () => {
                let i = (null == e ? void 0 : e.name) != null && null != t,
                    r = {
                        activities: [],
                        sameActivity: [],
                        online: [],
                        offline: []
                    },
                    l = new Map();
                for (let e of (i &&
                    null != t &&
                    null != n &&
                    n.length > 0 &&
                    n.forEach((e) => {
                        let t = e.author_id;
                        if (!k.Z.isFriend(t)) return;
                        let n = D.default.getUser(t);
                        null != n &&
                            l.set(t, {
                                user: n,
                                activities: [],
                                gameProfileEntry: e
                            });
                    }),
                k.Z.getFriendIDs())) {
                    let n = D.default.getUser(e);
                    if (null == n) continue;
                    let o = G.Z.getStatus(e),
                        s = G.Z.getActivities(e),
                        a = F.Z.getVoiceStateForUser(e),
                        c = (null == a ? void 0 : a.channelId) != null,
                        u = s.filter((e) => e.type === M.IIU.PLAYING || e.type === M.IIU.LISTENING || e.type === M.IIU.WATCHING || e.type === M.IIU.STREAMING),
                        d = u.filter((e) => e.application_id === t);
                    i && d.length > 0
                        ? (r.sameActivity.push({
                              user: n,
                              activities: d
                          }),
                          l.delete(e))
                        : u.length > 0
                          ? r.activities.push({
                                user: n,
                                activities: u
                            })
                          : c
                            ? r.activities.push({
                                  user: n,
                                  activities: s
                              })
                            : o === M.Skl.ONLINE || o === M.Skl.IDLE || o === M.Skl.DND
                              ? r.online.push({
                                    user: n,
                                    activities: s
                                })
                              : r.offline.push({
                                    user: n,
                                    activities: s
                                });
                }
                let o = (e, t) => {
                    var n, i;
                    let r = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
                        l = (null != (i = t.user.globalName) ? i : t.user.username).toLowerCase();
                    return r.localeCompare(l);
                };
                if ((r.sameActivity.sort(o), l.size > 0)) {
                    let e = Array.from(l.values()).sort(o);
                    r.sameActivity.push(...e);
                }
                return r.activities.sort(o), r.online.sort(o), r.offline.sort(o), r;
            },
            [n, e, t]
        );
    },
    $ = () => {
        let e = K(),
            t = Q(),
            n = X(),
            i = (0, c.e7)([U.Z], () => U.Z.getPrimaryActivity());
        return r.useMemo(() => {
            var r;
            return {
                incoming: e,
                suggestions: t,
                activities: n.activities,
                sameActivity: n.sameActivity,
                online: n.online,
                offline: n.offline,
                currentActivityName: null != (r = null == i ? void 0 : i.name) ? r : ''
            };
        }, [e, t, n, i]);
    },
    ee = (e) => {
        let [t, n] = r.useState(''),
            i = r.useCallback(
                (e) => {
                    if (0 === t.length) return e;
                    let n = t.toLowerCase();
                    return e.filter((e) => {
                        let { user: t, activities: i } = e;
                        return !!(o()(n, t.username.toLowerCase()) || (null != t.globalName && o()(n, t.globalName.toLowerCase()))) || (null == i ? void 0 : i.some((e) => null != e.name && o()(n, e.name.toLowerCase())));
                    });
                },
                [t]
            ),
            l = r.useMemo(
                () => ({
                    incoming: i(e.incoming),
                    suggestions: i(e.suggestions),
                    activities: i(e.activities),
                    sameActivity: i(e.sameActivity),
                    online: i(e.online),
                    offline: i(e.offline)
                }),
                [e, i]
            ),
            s = r.useCallback(() => n(''), []);
        return z(V({}, l), {
            searchQuery: t,
            setSearchQuery: n,
            handleSearchClear: s
        });
    },
    et = r.memo(function (e) {
        let { containerClassName: t, listClassName: l, closePopout: o, renderHeader: c, autoFocus: d = !1, appContext: g = M.IlC.APP } = e,
            [N, h] = r.useState([H.SUGGESTIONS, H.INCOMING]),
            y = r.useRef(null),
            O = (0, m.Z)('friends-popout', y),
            S = (0, s.k6)(),
            b = $(),
            v = ee(b),
            { searchQuery: I, setSearchQuery: j, handleSearchClear: C } = v,
            P = Y(v, ['searchQuery', 'setSearchQuery', 'handleSearchClear']),
            Z = r.useCallback((e) => {
                h((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
            }, []),
            w = r.useCallback(
                (e) => {
                    (0, p.jW)(e, async () => {
                        let { default: e } = await n.e('23087').then(n.bind(n, 29131));
                        return (t) => (0, i.jsx)(e, z(V({}, t), { onClose: o }));
                    });
                },
                [o]
            ),
            T = r.useCallback(
                (e) => {
                    let { section: t } = e,
                        n = '',
                        r = 0;
                    switch (t) {
                        case H.INCOMING:
                            (n = L.NW.string(L.t.fyA119)), (r = P.incoming.length);
                            break;
                        case H.SAME_ACTIVITY:
                            (n = b.currentActivityName), (r = P.sameActivity.length);
                            break;
                        case H.SUGGESTIONS:
                            (n = L.NW.string(L.t.qm9dSk)), (r = P.suggestions.length);
                            break;
                        case H.ACTIVITIES:
                            (n = L.NW.string(L.t.TxqPQU)), (r = P.activities.length);
                            break;
                        case H.ONLINE:
                            (n = L.NW.string(L.t.WbGtnJ)), (r = P.online.length);
                            break;
                        case H.OFFLINE:
                            (n = L.NW.string(L.t.Vv0abG)), (r = P.offline.length);
                    }
                    let l = (t === H.SUGGESTIONS || t === H.INCOMING) && r > 3,
                        o = N.includes(t);
                    return (0, i.jsxs)(E.Z, {
                        className: W.section,
                        children: [
                            (0, i.jsx)(u.nn4, {
                                children: L.NW.format(L.t.UaqbkZ, {
                                    title: n,
                                    count: r
                                })
                            }),
                            (0, i.jsxs)(u.P3F, {
                                onClick: () => l && Z(t),
                                'aria-hidden': !0,
                                className: l ? W.sectionCollapsible : void 0,
                                children: [
                                    n,
                                    ' \u2014 ',
                                    r,
                                    l
                                        ? o
                                            ? (0, i.jsx)(u.Fbu, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: W.chevronIcon
                                              })
                                            : (0, i.jsx)(u.CJ0, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: W.chevronIcon
                                              })
                                        : null
                                ]
                            })
                        ]
                    });
                },
                [b.currentActivityName, P.incoming.length, P.sameActivity.length, P.suggestions.length, P.activities.length, P.online.length, P.offline.length, N, Z]
            ),
            _ = r.useCallback(
                (e) => {
                    let t,
                        n = !1;
                    return (e.section === H.INCOMING ? ((t = P.incoming[e.row]), (n = !0)) : (t = e.section === H.SAME_ACTIVITY ? P.sameActivity[e.row] : e.section === H.SUGGESTIONS ? P.suggestions[e.row] : e.section === H.ACTIVITIES ? P.activities[e.row] : e.section === H.ONLINE ? P.online[e.row] : P.offline[e.row]), null == t || null == t.user)
                        ? null
                        : (0, i.jsx)(
                              B,
                              z(V({}, t), {
                                  index: e.row,
                                  closeParentPopout: o,
                                  isSuggestion: e.section === H.SUGGESTIONS || n,
                                  isIncomingRequest: n,
                                  appContext: g
                              }),
                              t.user.id
                          );
                },
                [P, o, g]
            ),
            { showSuggestions: x } = (0, R.Z)(),
            A = r.useMemo(() => {
                let e = x ? (N.includes(H.SUGGESTIONS) ? Math.min(3, P.suggestions.length) : P.suggestions.length) : 0;
                return [N.includes(H.INCOMING) ? Math.min(3, P.incoming.length) : P.incoming.length, P.sameActivity.length, P.activities.length, e, P.online.length, P.offline.length];
            }, [P, N, x]),
            G = Object.values(P).every((e) => 0 === e.length);
        return (0, i.jsxs)(u.VqE, {
            className: t,
            children: [
                null != c
                    ? (0, i.jsx)('div', {
                          className: W.header,
                          children: c()
                      })
                    : (0, i.jsxs)('div', {
                          className: W.header,
                          children: [
                              (0, i.jsx)(u.X6q, {
                                  variant: 'heading-lg/semibold',
                                  children: L.NW.string(L.t.TdEu5e)
                              }),
                              (0, i.jsxs)('div', {
                                  className: W.controlButtons,
                                  children: [
                                      (0, i.jsx)(u.M0o, {
                                          tooltip: L.NW.string(L.t.w5uwoK),
                                          color: u.YX$.TERTIARY,
                                          icon: (0, i.jsx)(u.oLu, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          }),
                                          className: W.controlButton,
                                          onClick: () => {
                                              f.Z.setSection(M.pJs.ADD_FRIEND), S.push(M.Z5c.FRIENDS), null == o || o();
                                          }
                                      }),
                                      (0, i.jsx)(u.M0o, {
                                          tooltip: L.NW.string(L.t['3D5yo6']),
                                          color: u.YX$.TERTIARY,
                                          icon: (0, i.jsx)(u.xhG, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          }),
                                          className: W.controlButton,
                                          onClick: w
                                      })
                                  ]
                              })
                          ]
                      }),
                (0, i.jsx)('div', {
                    className: W.searchContainer,
                    children: (0, i.jsx)(u.E1j, {
                        query: I,
                        onChange: j,
                        onClear: C,
                        placeholder: L.NW.string(L.t['5h0QOD']),
                        size: u.E1j.Sizes.MEDIUM,
                        autoFocus: d
                    })
                }),
                G
                    ? (0, i.jsx)('div', {
                          className: W.emptyStateContainer,
                          children: (0, i.jsx)(u.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: L.NW.string(L.t['7sW4h4'])
                          })
                      })
                    : (0, i.jsx)(a.bG, {
                          navigator: O,
                          children: (0, i.jsx)(a.SJ, {
                              children: (e) => {
                                  var { ref: t, role: n } = e,
                                      r = Y(e, ['ref', 'role']);
                                  return (0, i.jsx)(u.Wdt, {
                                      children: (e) =>
                                          (0, i.jsx)(
                                              u.aVo,
                                              V(
                                                  {
                                                      innerRole: n,
                                                      innerAriaLabel: L.NW.string(L.t.TdEu5e),
                                                      ref: (e) => {
                                                          var n;
                                                          (y.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                                      },
                                                      className: l,
                                                      sectionHeight: 40,
                                                      rowHeight: 42,
                                                      sidebarHeight: 0,
                                                      renderSection: T,
                                                      renderRow: _,
                                                      sections: A,
                                                      paddingTop: 0,
                                                      paddingBottom: 0
                                                  },
                                                  r,
                                                  e
                                              )
                                          )
                                  });
                              }
                          })
                      })
            ]
        });
    });
function en(e) {
    let { onOpen: t, onClose: n, children: l, popoutPosition: o, popoutAlign: s } = e,
        [a, c] = r.useState(!1),
        d = r.useCallback(() => {
            c(!1), null == n || n();
        }, [n]),
        g = r.useCallback(() => {
            c((e) => {
                let i = !e;
                return i ? null == t || t() : null == n || n(), i;
            });
        }, [n, t]),
        p = r.useCallback(
            () =>
                (0, i.jsx)(et, {
                    containerClassName: W.container,
                    listClassName: W.list,
                    closePopout: d,
                    autoFocus: !0
                }),
            [d]
        );
    return (0, i.jsx)(u.yRy, {
        animation: u.yRy.Animation.NONE,
        position: o,
        align: s,
        autoInvert: !1,
        shouldShow: a,
        onRequestClose: d,
        renderPopout: p,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return l(g, n, e);
        }
    });
}

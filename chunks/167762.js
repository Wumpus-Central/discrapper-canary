n.d(t, {
    Or: () => ei,
    r1: () => en
}),
    n(388685),
    n(539854),
    n(642613);
var i = n(255367),
    r = n(73800),
    l = n(91192),
    s = n(442837),
    a = n(481060),
    o = n(278323),
    c = n(493683),
    u = n(239091),
    f = n(194359),
    d = n(549879),
    p = n(724757),
    g = n(620662),
    O = n(420660),
    y = n(326255),
    h = n(956221),
    m = n(747017),
    N = n(297781),
    S = n(82295),
    v = n(554300),
    E = n(558602),
    b = n(567409),
    I = n(373662),
    j = n(850020),
    P = n(886118),
    C = n(301801),
    Z = n(814443),
    w = n(518950),
    _ = n(670188),
    T = n(199902),
    A = n(158776),
    G = n(699516),
    U = n(885110),
    k = n(594174),
    x = n(979651),
    R = n(823379),
    D = n(151459),
    F = n(981631),
    L = n(388032),
    M = n(288779);
function q(e) {
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
function V(e, t) {
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
let W = a.EFr.SIZE_32,
    Y = {
        FRIEND_REQUESTS: 0,
        SAME_ACTIVITY: 1,
        ACTIVITIES: 2,
        SUGGESTIONS: 3,
        ONLINE: 4,
        OFFLINE: 5
    },
    Q = [N.OV, N.wO, N.f, N.v1, N.pQ],
    J = r.memo((e) => {
        let { user: t, activities: p = [], gameProfileEntry: S, index: b, closeParentPopout: P, isSuggestion: C, relationshipType: Z, appContext: G, nickname: k } = e,
            {
                avatarDecorationSrc: x,
                avatarSrc: R,
                eventHandlers: D
            } = (0, w.Z)({
                user: t,
                size: W,
                animateOnHover: !0,
                guildId: null
            }),
            V = (0, l.JA)(''.concat(b)),
            [Y, J] = r.useState(!1),
            [K, B] = r.useState({}),
            H = p.filter((e) => e.type === F.IIU.PLAYING && (0, g.Z)(e, F.xjy.JOIN)),
            X = (0, s.Wu)([U.Z], () => U.Z.getActivities().filter((e) => e.type === F.IIU.PLAYING && (0, g.Z)(e, F.xjy.JOIN))),
            { voiceChannel: $ } = (0, h.Z)({ userId: t.id }),
            ee = (0, j.K)({
                location: 'friends-popout',
                user: t
            }),
            {
                status: et,
                applicationStream: en,
                isMobile: ei,
                newStatus: er
            } = (0, s.cj)(
                [A.Z, T.Z],
                () => {
                    let e = A.Z.getStatus(t.id),
                        n = T.Z.getAnyStreamForUser(t.id),
                        i = A.Z.isMobileOnline(t.id),
                        r = (0, O.Z)(p) ? F.Skl.STREAMING : e;
                    return {
                        status: e,
                        applicationStream: n,
                        isMobile: i,
                        newStatus: r
                    };
                },
                [t.id, p]
            ),
            el = r.useCallback(() => {
                J(!0);
            }, []),
            es = r.useCallback(() => {
                J(!1);
            }, []),
            ea = r.useCallback(() => {
                if (null != S) {
                    let e = S.traits,
                        t = z(q({}, S), { traits: e.slice(0, 3) });
                    return (0, i.jsx)(N.Gk, {
                        location: N.Gt.FRIENDS_POPOUT,
                        className: M.badgesContainer,
                        children: Q.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                    });
                }
                if (
                    !(0, y.Z)({
                        activities: p,
                        status: et,
                        applicationStream: en,
                        voiceChannel: $
                    })
                )
                    return null;
                let e = !(0, E.Z)({
                    activity:
                        null == p
                            ? void 0
                            : p.find((e) => {
                                  let { type: t } = e;
                                  return t === F.IIU.CUSTOM_STATUS;
                              }),
                    user: t
                });
                return (0, i.jsx)(m.Z, {
                    user: t,
                    activities: p,
                    applicationStream: en,
                    voiceChannel: $,
                    animate: !1,
                    hideEmoji: e,
                    hasQuest: !1
                });
            }, [t, p, et, en, $, S]),
            eo = r.useCallback(
                (e) => {
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                z(q({}, n), {
                                    user: t,
                                    appContext: G
                                })
                            );
                    });
                },
                [t, G]
            ),
            ec = r.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, d.i)(G, !0), c.Z.openPrivateChannel({ recipientIds: t.id }), null != P && P();
                },
                [t.id, P, G]
            ),
            eu = r.useCallback(
                (e) => {
                    e.preventDefault(),
                        e.stopPropagation(),
                        f.Z.addRelationship({
                            userId: t.id,
                            context: { location: 'friends-popout' }
                        });
                },
                [t.id]
            ),
            ef = async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !K[n.application_id]))
                    try {
                        B((e) => z(q({}, e), { [n.application_id]: !0 })),
                            await o.Z.sendActivityInviteUser({
                                type: F.mFx.JOIN,
                                userId: t.id,
                                activity: n,
                                location: F.Sbl.FRIENDS_POPOUT
                            }),
                            B((e) => z(q({}, e), { [n.application_id]: !1 }));
                    } finally {
                        B((e) => z(q({}, e), { [n.application_id]: !1 }));
                    }
            },
            ed = async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !K[n.application_id]))
                    try {
                        B((e) => z(q({}, e), { [n.application_id]: !0 })),
                            await o.Z.sendActivityInviteUser({
                                type: F.mFx.JOIN_REQUEST,
                                userId: t.id,
                                activity: n,
                                location: F.Sbl.FRIENDS_POPOUT
                            }),
                            B((e) => z(q({}, e), { [n.application_id]: !1 }));
                    } finally {
                        B((e) => z(q({}, e), { [n.application_id]: !1 }));
                    }
            },
            ep = () =>
                Z === F.OGo.PENDING_INCOMING
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(I.sF, {
                                  label: L.intl.string(L.t.MMlhsr),
                                  icon: a.dz2,
                                  onClick: (e) => {
                                      e.preventDefault(),
                                          e.stopPropagation(),
                                          f.Z.addRelationship({
                                              userId: t.id,
                                              context: { location: 'friends-popout' }
                                          });
                                  }
                              }),
                              (0, i.jsx)(I.sF, {
                                  label: L.intl.string(L.t.ytCpKi),
                                  icon: a.Dio,
                                  onClick: (e) => {
                                      e.preventDefault(), e.stopPropagation(), f.Z.removeRelationship(t.id, { location: 'friends-popout' });
                                  }
                              })
                          ]
                      })
                    : Z === F.OGo.PENDING_OUTGOING
                      ? (0, i.jsx)(I.sF, {
                            label: L.intl.string(L.t['bTfA//']),
                            icon: a.iHX,
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), f.Z.cancelFriendRequest(t.id, { location: 'friends-popout' });
                            }
                        })
                      : C
                        ? (0, i.jsx)(I.sF, {
                              label: L.intl.string(L.t.w5uwoK),
                              icon: a.oLu,
                              onClick: eu
                          })
                        : null,
            eg = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        H.map((e) =>
                            (0, i.jsx)(
                                I.sF,
                                {
                                    label: K[e.application_id] ? L.intl.string(L.t['8BEiNj']) : L.intl.string(L.t.OKsSCQ),
                                    icon: K[e.application_id] ? a.dz2 : a.V9,
                                    onClick: (t) => ed(t, e)
                                },
                                e.application_id
                            )
                        ),
                        X.map((e) => {
                            var n;
                            return (0, i.jsx)(
                                I.sF,
                                {
                                    label: K[e.application_id]
                                        ? L.intl.string(L.t['8BEiNj'])
                                        : L.intl.formatToPlainString(L.t['KHLo+P'], {
                                              channel: null != (n = t.globalName) ? n : t.username,
                                              game: e.name
                                          }),
                                    icon: K[e.application_id] ? a.dz2 : a.ejJ,
                                    onClick: (t) => ef(t, e)
                                },
                                e.application_id
                            );
                        })
                    ]
                });
        return (0, i.jsx)(_.Z, {
            user: t,
            position: 'left',
            spacing: 16,
            children: (e, n) => {
                var r;
                let { isShown: l } = n;
                return (0, i.jsxs)('div', {
                    className: M.row,
                    children: [
                        (0, i.jsx)(
                            v.Z,
                            q(
                                {
                                    innerClassName: M.rowInner,
                                    onContextMenu: eo,
                                    onMouseEnter: el,
                                    onMouseLeave: es,
                                    avatar: (0, i.jsx)(
                                        a.qEK,
                                        z(q({}, D), {
                                            size: W,
                                            src: R,
                                            isMobile: ei,
                                            isTyping: !1,
                                            status: er,
                                            className: M.avatar,
                                            'aria-label': t.username,
                                            statusTooltip: !0,
                                            avatarDecoration: x
                                        })
                                    ),
                                    name: (0, i.jsx)('span', {
                                        className: M.username,
                                        children: null != (r = null != k ? k : t.globalName) ? r : t.username
                                    }),
                                    subText: ea(),
                                    selected: l,
                                    nameplate: ee,
                                    hovered: Y
                                },
                                e,
                                V
                            )
                        ),
                        (0, i.jsxs)(I.ZP, {
                            className: M.hoverBar,
                            children: [
                                ep(),
                                eg(),
                                Z !== F.OGo.PENDING_INCOMING &&
                                    Z !== F.OGo.PENDING_OUTGOING &&
                                    (0, i.jsx)(I.sF, {
                                        label: L.intl.string(L.t['g33r/P']),
                                        icon: a.kBi,
                                        onClick: ec
                                    }),
                                (0, i.jsx)(I.sF, {
                                    label: L.intl.string(L.t.UKOtz8),
                                    icon: a.xhG,
                                    onClick: eo
                                })
                            ]
                        })
                    ]
                });
            }
        });
    });
J.displayName = 'FriendRow';
let K = () => {
        let e = (0, s.e7)([U.Z], () => U.Z.getPrimaryActivity()),
            t = null == e ? void 0 : e.application_id,
            n = (0, b.Ns)(t);
        return (0, s.e7)(
            [G.Z, k.default, A.Z, x.Z],
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
                        if (!G.Z.isFriend(t)) return;
                        let n = k.default.getUser(t);
                        null != n &&
                            l.set(t, {
                                user: n,
                                activities: [],
                                gameProfileEntry: e,
                                nickname: G.Z.getNickname(t)
                            });
                    }),
                G.Z.getFriendIDs())) {
                    let n = k.default.getUser(e);
                    if (null == n) continue;
                    let s = A.Z.getStatus(e),
                        a = A.Z.getActivities(e),
                        o = G.Z.getNickname(e),
                        c = x.Z.getVoiceStateForUser(e),
                        u = (null == c ? void 0 : c.channelId) != null,
                        f = a.filter((e) => e.type === F.IIU.PLAYING || e.type === F.IIU.LISTENING || e.type === F.IIU.WATCHING || e.type === F.IIU.STREAMING),
                        d = f.filter((e) => e.application_id === t),
                        p = i && d.length > 0,
                        g = {
                            user: n,
                            activities: p ? d : f,
                            nickname: o
                        };
                    p ? (r.sameActivity.push(g), l.delete(e)) : f.length > 0 ? r.activities.push(g) : u ? r.activities.push(z(q({}, g), { activities: a })) : s === F.Skl.ONLINE || s === F.Skl.IDLE || s === F.Skl.DND ? r.online.push(g) : r.offline.push(g);
                }
                let s = (e, t) => {
                    var n, i;
                    let r = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
                        l = (null != (i = t.user.globalName) ? i : t.user.username).toLowerCase();
                    return r.localeCompare(l);
                };
                if ((r.sameActivity.sort(s), l.size > 0)) {
                    let e = Array.from(l.values()).sort(s);
                    r.sameActivity.push(...e);
                }
                return r.activities.sort(s), r.online.sort(s), r.offline.sort(s), r;
            },
            [n, e, t]
        );
    },
    B = () =>
        (0, s.e7)([G.Z, k.default, A.Z], () => {
            let e = G.Z.getRelationships(),
                t = [];
            for (let [n, i] of Object.entries(e)) {
                if (i !== F.OGo.PENDING_INCOMING && i !== F.OGo.PENDING_OUTGOING) continue;
                let e = k.default.getUser(n);
                if (null != e) {
                    let r = G.Z.getSince(n),
                        l = null != r ? new Date(r).getTime() : 0;
                    t.push({
                        user: e,
                        activities: A.Z.getActivities(n),
                        timestamp: l,
                        nickname: G.Z.getNickname(n),
                        relationshipType: i
                    });
                }
            }
            return t.sort((e, t) => t.timestamp - e.timestamp), t;
        }),
    H = () =>
        (0, s.e7)([Z.Z, k.default, A.Z, G.Z, x.Z], () => {
            let e = Z.Z.getUserAffinitiesMap(),
                t = [];
            for (let [n, i] of e.entries()) {
                let e = G.Z.getRelationshipType(n);
                if (G.Z.isFriend(n) || i.affinity <= 20 || e === F.OGo.PENDING_INCOMING || e === F.OGo.PENDING_OUTGOING) continue;
                let r = k.default.getUser(n);
                if (null != r) {
                    let e = A.Z.getActivities(n),
                        l = x.Z.getVoiceStateForUser(n),
                        s = (null == l ? void 0 : l.channelId) != null;
                    t.push({
                        user: r,
                        activities: e,
                        affinity: i.affinity,
                        hasActivity: e.length > 0 || s,
                        nickname: G.Z.getNickname(n)
                    });
                }
            }
            return t.sort((e, t) => {
                let n = 1000 * !!e.hasActivity + e.affinity;
                return 1000 * !!t.hasActivity + t.affinity - n;
            });
        }),
    X = () => {
        let e = B(),
            t = H(),
            n = K(),
            i = (0, s.e7)([U.Z], () => U.Z.getPrimaryActivity());
        return r.useMemo(() => {
            var r;
            return {
                friendRequests: e,
                suggestions: t,
                activities: n.activities,
                sameActivity: n.sameActivity,
                online: n.online,
                offline: n.offline,
                currentActivityName: null != (r = null == i ? void 0 : i.name) ? r : ''
            };
        }, [e, t, n, i]);
    },
    $ = {
        searchType: P.S.FUZZY,
        searchStringGenerator: (e) => {
            let { user: t, activities: n, nickname: i } = e;
            return [t.username, t.globalName, i, ...n.map((e) => e.name)].filter(R.lm);
        },
        sortType: P.E.JARO_WINKLER,
        throttleMs: 100
    };
function ee(e, t) {
    let [n, i] = r.useState(t),
        l = r.useCallback(() => i(t), [t]);
    return (0, C.BO)(e, t, i, $), [n, l];
}
let et = (e) => {
        let [t, n] = r.useState(''),
            [i, l] = ee(t, e.friendRequests),
            [s, a] = ee(t, e.suggestions),
            [o, c] = ee(t, e.sameActivity),
            [u, f] = ee(t, e.activities),
            [d, p] = ee(t, e.online),
            [g, O] = ee(t, e.offline),
            y = r.useCallback(() => {
                n(''), l(), a(), c(), f(), p(), O();
            }, [l, a, c, f, p, O]);
        return {
            friendRequests: i,
            suggestions: s,
            sameActivity: o,
            activities: u,
            online: d,
            offline: g,
            currentActivityName: e.currentActivityName,
            searchQuery: t,
            setSearchQuery: n,
            handleSearchClear: y
        };
    },
    en = r.memo(function (e) {
        let { containerClassName: t, listClassName: s, closePopout: o, renderHeader: c, autoFocus: f = !1, appContext: d = F.IlC.APP } = e,
            [g, O] = r.useState([Y.SUGGESTIONS, Y.FRIEND_REQUESTS]),
            y = r.useRef(null),
            h = (0, p.Z)('friends-popout', y),
            m = X(),
            N = et(m),
            { searchQuery: v, setSearchQuery: E, handleSearchClear: b } = N,
            I = V(N, ['searchQuery', 'setSearchQuery', 'handleSearchClear']),
            j = r.useCallback((e) => {
                O((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
            }, []),
            P = r.useCallback(
                (e) => {
                    (0, u.jW)(e, async () => {
                        let { default: e } = await n.e('23087').then(n.bind(n, 29131));
                        return (t) => (0, i.jsx)(e, z(q({}, t), { onClose: o }));
                    });
                },
                [o]
            ),
            C = r.useCallback(() => {
                (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('49078').then(n.bind(n, 539725));
                    return (t) => (0, i.jsx)(e, q({}, t));
                });
            }, []),
            Z = r.useCallback(
                (e) => {
                    let { section: t } = e,
                        n = '',
                        r = 0;
                    switch (t) {
                        case Y.FRIEND_REQUESTS:
                            (n = L.intl.string(L.t.fyA119)), (r = I.friendRequests.length);
                            break;
                        case Y.SAME_ACTIVITY:
                            (n = m.currentActivityName), (r = I.sameActivity.length);
                            break;
                        case Y.SUGGESTIONS:
                            (n = L.intl.string(L.t.qm9dSk)), (r = I.suggestions.length);
                            break;
                        case Y.ACTIVITIES:
                            (n = L.intl.string(L.t.TxqPQU)), (r = I.activities.length);
                            break;
                        case Y.ONLINE:
                            (n = L.intl.string(L.t.WbGtnJ)), (r = I.online.length);
                            break;
                        case Y.OFFLINE:
                            (n = L.intl.string(L.t.Vv0abG)), (r = I.offline.length);
                    }
                    let l = (t === Y.SUGGESTIONS || t === Y.FRIEND_REQUESTS) && r > 3,
                        s = g.includes(t);
                    return (0, i.jsxs)(S.Z, {
                        className: M.section,
                        children: [
                            (0, i.jsx)(a.nn4, {
                                children: L.intl.format(L.t.UaqbkZ, {
                                    title: n,
                                    count: r
                                })
                            }),
                            (0, i.jsxs)(a.P3F, {
                                onClick: () => l && j(t),
                                'aria-hidden': !0,
                                className: l ? M.sectionCollapsible : void 0,
                                children: [
                                    n,
                                    ' \u2014 ',
                                    r,
                                    l
                                        ? s
                                            ? (0, i.jsx)(a.Fbu, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: M.chevronIcon
                                              })
                                            : (0, i.jsx)(a.CJ0, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: M.chevronIcon
                                              })
                                        : null
                                ]
                            })
                        ]
                    });
                },
                [m.currentActivityName, I.friendRequests.length, I.sameActivity.length, I.suggestions.length, I.activities.length, I.online.length, I.offline.length, g, j]
            ),
            w = r.useCallback(
                (e) => {
                    let t;
                    return null == (t = e.section === Y.FRIEND_REQUESTS ? I.friendRequests[e.row] : e.section === Y.SAME_ACTIVITY ? I.sameActivity[e.row] : e.section === Y.SUGGESTIONS ? I.suggestions[e.row] : e.section === Y.ACTIVITIES ? I.activities[e.row] : e.section === Y.ONLINE ? I.online[e.row] : I.offline[e.row]) || null == t.user
                        ? null
                        : (0, i.jsx)(
                              J,
                              z(q({}, t), {
                                  index: e.row,
                                  closeParentPopout: o,
                                  isSuggestion: e.section === Y.SUGGESTIONS,
                                  appContext: d
                              }),
                              ''.concat(e.section, ':').concat(t.user.id)
                          );
                },
                [I, o, d]
            ),
            { showSuggestions: _ } = (0, D.Z)(),
            T = r.useMemo(() => {
                let e = _ ? (g.includes(Y.SUGGESTIONS) ? Math.min(3, I.suggestions.length) : I.suggestions.length) : 0;
                return [g.includes(Y.FRIEND_REQUESTS) ? Math.min(3, I.friendRequests.length) : I.friendRequests.length, I.sameActivity.length, I.activities.length, e, I.online.length, I.offline.length];
            }, [I, g, _]),
            A = Object.values(I).every((e) => 0 === e.length);
        return (0, i.jsxs)('div', {
            className: t,
            children: [
                null != c
                    ? (0, i.jsx)('div', {
                          className: M.header,
                          children: c()
                      })
                    : (0, i.jsxs)('div', {
                          className: M.header,
                          children: [
                              (0, i.jsx)(a.X6q, {
                                  variant: 'heading-lg/semibold',
                                  children: L.intl.string(L.t.TdEu5e)
                              }),
                              (0, i.jsxs)('div', {
                                  className: M.controlButtons,
                                  children: [
                                      (0, i.jsx)(a.M0o, {
                                          tooltip: L.intl.string(L.t.w5uwoK),
                                          color: a.YX$.TERTIARY,
                                          icon: (0, i.jsx)(a.oLu, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          }),
                                          className: M.controlButton,
                                          onClick: C
                                      }),
                                      (0, i.jsx)(a.M0o, {
                                          tooltip: L.intl.string(L.t['3D5yo6']),
                                          color: a.YX$.TERTIARY,
                                          icon: (0, i.jsx)(a.xhG, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          }),
                                          className: M.controlButton,
                                          onClick: P
                                      })
                                  ]
                              })
                          ]
                      }),
                (0, i.jsx)('div', {
                    className: M.searchContainer,
                    children: (0, i.jsx)(a.E1j, {
                        query: v,
                        onChange: E,
                        onClear: b,
                        placeholder: L.intl.string(L.t['5h0QOD']),
                        size: a.E1j.Sizes.MEDIUM,
                        autoFocus: f
                    })
                }),
                A
                    ? (0, i.jsx)('div', {
                          className: M.emptyStateContainer,
                          children: (0, i.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: L.intl.string(L.t['7sW4h4'])
                          })
                      })
                    : (0, i.jsx)(l.bG, {
                          navigator: h,
                          children: (0, i.jsx)(l.SJ, {
                              children: (e) => {
                                  var { ref: t, role: n } = e,
                                      r = V(e, ['ref', 'role']);
                                  return (0, i.jsx)(a.Wdt, {
                                      children: (e) =>
                                          (0, i.jsx)(
                                              a.aVo,
                                              q(
                                                  {
                                                      innerRole: n,
                                                      innerAriaLabel: L.intl.string(L.t.TdEu5e),
                                                      ref: (e) => {
                                                          var n;
                                                          (y.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                                      },
                                                      className: s,
                                                      sectionHeight: 40,
                                                      rowHeight: 42,
                                                      sidebarHeight: 0,
                                                      renderSection: Z,
                                                      renderRow: w,
                                                      sections: T,
                                                      paddingTop: 4,
                                                      paddingBottom: 4
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
function ei(e) {
    let { onOpen: t, onClose: n, children: l, popoutPosition: s, popoutAlign: o } = e,
        [c, u] = r.useState(!1),
        f = r.useCallback(() => {
            u(!1), null == n || n();
        }, [n]),
        d = r.useCallback(() => {
            u((e) => {
                let i = !e;
                return i ? null == t || t() : null == n || n(), i;
            });
        }, [n, t]),
        p = r.useCallback(
            () =>
                (0, i.jsx)(en, {
                    containerClassName: M.container,
                    listClassName: M.list,
                    closePopout: f,
                    autoFocus: !0
                }),
            [f]
        );
    return (0, i.jsx)(a.yRy, {
        animation: a.yRy.Animation.NONE,
        position: s,
        align: o,
        autoInvert: !1,
        shouldShow: c,
        onRequestClose: f,
        renderPopout: p,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return l(d, n, e);
        }
    });
}

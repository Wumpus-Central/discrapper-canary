n.d(t, {
    Or: () => ei,
    r1: () => en
}),
    n(388685),
    n(539854),
    n(642613);
var i = n(200651),
    r = n(192379),
    l = n(91192),
    s = n(442837),
    o = n(481060),
    a = n(278323),
    u = n(493683),
    c = n(239091),
    d = n(194359),
    f = n(549879),
    g = n(724757),
    p = n(620662),
    O = n(420660),
    y = n(326255),
    h = n(956221),
    v = n(747017),
    m = n(297781),
    N = n(82295),
    S = n(554300),
    b = n(558602),
    E = n(567409),
    I = n(373662),
    j = n(850020),
    P = n(886118),
    Z = n(301801),
    C = n(814443),
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
let V = o.EFr.SIZE_32,
    W = {
        FRIEND_REQUESTS: 0,
        SAME_ACTIVITY: 1,
        ACTIVITIES: 2,
        SUGGESTIONS: 3,
        ONLINE: 4,
        OFFLINE: 5
    },
    Q = [m.OV, m.wO, m.f, m.v1, m.pQ],
    J = r.memo((e) => {
        let { user: t, activities: g = [], gameProfileEntry: N, index: E, closeParentPopout: P, isSuggestion: Z, relationshipType: C, appContext: G, nickname: k } = e,
            {
                avatarDecorationSrc: x,
                avatarSrc: R,
                eventHandlers: D
            } = (0, w.Z)({
                user: t,
                size: V,
                animateOnHover: !0,
                guildId: null
            }),
            Y = (0, l.JA)(''.concat(E)),
            [W, J] = r.useState(!1),
            [K, B] = r.useState({}),
            H = g.filter((e) => e.type === F.IIU.PLAYING && (0, p.Z)(e, F.xjy.JOIN)),
            X = (0, s.Wu)([U.Z], () => U.Z.getActivities().filter((e) => e.type === F.IIU.PLAYING && (0, p.Z)(e, F.xjy.JOIN))),
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
                        r = (0, O.Z)(g) ? F.Skl.STREAMING : e;
                    return {
                        status: e,
                        applicationStream: n,
                        isMobile: i,
                        newStatus: r
                    };
                },
                [t.id, g]
            ),
            el = r.useCallback(() => {
                J(!0);
            }, []),
            es = r.useCallback(() => {
                J(!1);
            }, []),
            eo = r.useCallback(() => {
                if (null != N) {
                    let e = N.traits,
                        t = z(q({}, N), { traits: e.slice(0, 3) });
                    return (0, i.jsx)(m.Gk, {
                        location: m.Gt.FRIENDS_POPOUT,
                        className: M.badgesContainer,
                        children: Q.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                    });
                }
                if (
                    !(0, y.Z)({
                        activities: g,
                        status: et,
                        applicationStream: en,
                        voiceChannel: $
                    })
                )
                    return null;
                let e = !(0, b.Z)({
                    activity:
                        null == g
                            ? void 0
                            : g.find((e) => {
                                  let { type: t } = e;
                                  return t === F.IIU.CUSTOM_STATUS;
                              }),
                    user: t
                });
                return (0, i.jsx)(v.Z, {
                    user: t,
                    activities: g,
                    applicationStream: en,
                    voiceChannel: $,
                    animate: !1,
                    hideEmoji: e,
                    hasQuest: !1
                });
            }, [t, g, et, en, $, N]),
            ea = r.useCallback(
                (e) => {
                    (0, c.jW)(e, async () => {
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
            eu = r.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, f.i)(G, !0), u.Z.openPrivateChannel({ recipientIds: t.id }), null != P && P();
                },
                [t.id, P, G]
            ),
            ec = r.useCallback(
                (e) => {
                    e.preventDefault(),
                        e.stopPropagation(),
                        d.Z.addRelationship({
                            userId: t.id,
                            context: { location: 'friends-popout' }
                        });
                },
                [t.id]
            ),
            ed = async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !K[n.application_id]))
                    try {
                        B((e) => z(q({}, e), { [n.application_id]: !0 })),
                            await a.Z.sendActivityInviteUser({
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
            ef = async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !K[n.application_id]))
                    try {
                        B((e) => z(q({}, e), { [n.application_id]: !0 })),
                            await a.Z.sendActivityInviteUser({
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
            eg = () =>
                C === F.OGo.PENDING_INCOMING
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(I.sF, {
                                  label: L.intl.string(L.t.MMlhsr),
                                  icon: o.dz2,
                                  onClick: (e) => {
                                      e.preventDefault(),
                                          e.stopPropagation(),
                                          d.Z.addRelationship({
                                              userId: t.id,
                                              context: { location: 'friends-popout' }
                                          });
                                  }
                              }),
                              (0, i.jsx)(I.sF, {
                                  label: L.intl.string(L.t.ytCpKi),
                                  icon: o.Dio,
                                  onClick: (e) => {
                                      e.preventDefault(), e.stopPropagation(), d.Z.removeRelationship(t.id, { location: 'friends-popout' });
                                  }
                              })
                          ]
                      })
                    : C === F.OGo.PENDING_OUTGOING
                      ? (0, i.jsx)(I.sF, {
                            label: L.intl.string(L.t['bTfA//']),
                            icon: o.iHX,
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), d.Z.cancelFriendRequest(t.id, { location: 'friends-popout' });
                            }
                        })
                      : Z
                        ? (0, i.jsx)(I.sF, {
                              label: L.intl.string(L.t.w5uwoK),
                              icon: o.oLu,
                              onClick: ec
                          })
                        : null,
            ep = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        H.map((e) =>
                            (0, i.jsx)(
                                I.sF,
                                {
                                    label: K[e.application_id] ? L.intl.string(L.t['8BEiNj']) : L.intl.string(L.t.OKsSCQ),
                                    icon: K[e.application_id] ? o.dz2 : o.V9,
                                    onClick: (t) => ef(t, e)
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
                                    icon: K[e.application_id] ? o.dz2 : o.ejJ,
                                    onClick: (t) => ed(t, e)
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
                            S.Z,
                            q(
                                {
                                    innerClassName: M.rowInner,
                                    onContextMenu: ea,
                                    onMouseEnter: el,
                                    onMouseLeave: es,
                                    avatar: (0, i.jsx)(
                                        o.qEK,
                                        z(q({}, D), {
                                            size: V,
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
                                    subText: eo(),
                                    selected: l,
                                    nameplate: ee,
                                    hovered: W
                                },
                                e,
                                Y
                            )
                        ),
                        (0, i.jsxs)(I.ZP, {
                            className: M.hoverBar,
                            children: [
                                eg(),
                                ep(),
                                C !== F.OGo.PENDING_INCOMING &&
                                    C !== F.OGo.PENDING_OUTGOING &&
                                    (0, i.jsx)(I.sF, {
                                        label: L.intl.string(L.t['g33r/P']),
                                        icon: o.kBi,
                                        onClick: eu
                                    }),
                                (0, i.jsx)(I.sF, {
                                    label: L.intl.string(L.t.UKOtz8),
                                    icon: o.xhG,
                                    onClick: ea
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
            n = (0, E.Ns)(t);
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
                        o = A.Z.getActivities(e),
                        a = G.Z.getNickname(e),
                        u = x.Z.getVoiceStateForUser(e),
                        c = (null == u ? void 0 : u.channelId) != null,
                        d = o.filter((e) => e.type === F.IIU.PLAYING || e.type === F.IIU.LISTENING || e.type === F.IIU.WATCHING || e.type === F.IIU.STREAMING),
                        f = d.filter((e) => e.application_id === t),
                        g = i && f.length > 0,
                        p = {
                            user: n,
                            activities: g ? f : d,
                            nickname: a
                        };
                    g ? (r.sameActivity.push(p), l.delete(e)) : d.length > 0 ? r.activities.push(p) : c ? r.activities.push(z(q({}, p), { activities: o })) : s === F.Skl.ONLINE || s === F.Skl.IDLE || s === F.Skl.DND ? r.online.push(p) : r.offline.push(p);
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
        (0, s.e7)([C.Z, k.default, A.Z, G.Z, x.Z], () => {
            let e = C.Z.getUserAffinitiesMap(),
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
    return (0, Z.BO)(e, t, i, $), [n, l];
}
let et = (e) => {
        let [t, n] = r.useState(''),
            [i, l] = ee(t, e.friendRequests),
            [s, o] = ee(t, e.suggestions),
            [a, u] = ee(t, e.sameActivity),
            [c, d] = ee(t, e.activities),
            [f, g] = ee(t, e.online),
            [p, O] = ee(t, e.offline),
            y = r.useCallback(() => {
                n(''), l(), o(), u(), d(), g(), O();
            }, [l, o, u, d, g, O]);
        return {
            friendRequests: i,
            suggestions: s,
            sameActivity: a,
            activities: c,
            online: f,
            offline: p,
            currentActivityName: e.currentActivityName,
            searchQuery: t,
            setSearchQuery: n,
            handleSearchClear: y
        };
    },
    en = r.memo(function (e) {
        let { containerClassName: t, listClassName: s, closePopout: a, renderHeader: u, autoFocus: d = !1, appContext: f = F.IlC.APP } = e,
            [p, O] = r.useState([W.SUGGESTIONS, W.FRIEND_REQUESTS]),
            y = r.useRef(null),
            h = (0, g.Z)('friends-popout', y),
            v = X(),
            m = et(v),
            { searchQuery: S, setSearchQuery: b, handleSearchClear: E } = m,
            I = Y(m, ['searchQuery', 'setSearchQuery', 'handleSearchClear']),
            j = r.useCallback((e) => {
                O((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
            }, []),
            P = r.useCallback(
                (e) => {
                    (0, c.jW)(e, async () => {
                        let { default: e } = await n.e('23087').then(n.bind(n, 29131));
                        return (t) => (0, i.jsx)(e, z(q({}, t), { onClose: a }));
                    });
                },
                [a]
            ),
            Z = r.useCallback(() => {
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('49078').then(n.bind(n, 539725));
                    return (t) => (0, i.jsx)(e, q({}, t));
                });
            }, []),
            C = r.useCallback(
                (e) => {
                    let { section: t } = e,
                        n = '',
                        r = 0;
                    switch (t) {
                        case W.FRIEND_REQUESTS:
                            (n = L.intl.string(L.t.fyA119)), (r = I.friendRequests.length);
                            break;
                        case W.SAME_ACTIVITY:
                            (n = v.currentActivityName), (r = I.sameActivity.length);
                            break;
                        case W.SUGGESTIONS:
                            (n = L.intl.string(L.t.qm9dSk)), (r = I.suggestions.length);
                            break;
                        case W.ACTIVITIES:
                            (n = L.intl.string(L.t.TxqPQU)), (r = I.activities.length);
                            break;
                        case W.ONLINE:
                            (n = L.intl.string(L.t.WbGtnJ)), (r = I.online.length);
                            break;
                        case W.OFFLINE:
                            (n = L.intl.string(L.t.Vv0abG)), (r = I.offline.length);
                    }
                    let l = (t === W.SUGGESTIONS || t === W.FRIEND_REQUESTS) && r > 3,
                        s = p.includes(t);
                    return (0, i.jsxs)(N.Z, {
                        className: M.section,
                        children: [
                            (0, i.jsx)(o.nn4, {
                                children: L.intl.format(L.t.UaqbkZ, {
                                    title: n,
                                    count: r
                                })
                            }),
                            (0, i.jsxs)(o.P3F, {
                                onClick: () => l && j(t),
                                'aria-hidden': !0,
                                className: l ? M.sectionCollapsible : void 0,
                                children: [
                                    n,
                                    ' \u2014 ',
                                    r,
                                    l
                                        ? s
                                            ? (0, i.jsx)(o.Fbu, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: M.chevronIcon
                                              })
                                            : (0, i.jsx)(o.CJ0, {
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
                [v.currentActivityName, I.friendRequests.length, I.sameActivity.length, I.suggestions.length, I.activities.length, I.online.length, I.offline.length, p, j]
            ),
            w = r.useCallback(
                (e) => {
                    let t;
                    return null == (t = e.section === W.FRIEND_REQUESTS ? I.friendRequests[e.row] : e.section === W.SAME_ACTIVITY ? I.sameActivity[e.row] : e.section === W.SUGGESTIONS ? I.suggestions[e.row] : e.section === W.ACTIVITIES ? I.activities[e.row] : e.section === W.ONLINE ? I.online[e.row] : I.offline[e.row]) || null == t.user
                        ? null
                        : (0, i.jsx)(
                              J,
                              z(q({}, t), {
                                  index: e.row,
                                  closeParentPopout: a,
                                  isSuggestion: e.section === W.SUGGESTIONS,
                                  appContext: f
                              }),
                              ''.concat(e.section, ':').concat(t.user.id)
                          );
                },
                [I, a, f]
            ),
            { showSuggestions: _ } = (0, D.Z)(),
            T = r.useMemo(() => {
                let e = _ ? (p.includes(W.SUGGESTIONS) ? Math.min(3, I.suggestions.length) : I.suggestions.length) : 0;
                return [p.includes(W.FRIEND_REQUESTS) ? Math.min(3, I.friendRequests.length) : I.friendRequests.length, I.sameActivity.length, I.activities.length, e, I.online.length, I.offline.length];
            }, [I, p, _]),
            A = Object.values(I).every((e) => 0 === e.length);
        return (0, i.jsxs)('div', {
            className: t,
            children: [
                null != u
                    ? (0, i.jsx)('div', {
                          className: M.header,
                          children: u()
                      })
                    : (0, i.jsxs)('div', {
                          className: M.header,
                          children: [
                              (0, i.jsx)(o.X6q, {
                                  variant: 'heading-lg/semibold',
                                  children: L.intl.string(L.t.TdEu5e)
                              }),
                              (0, i.jsxs)('div', {
                                  className: M.controlButtons,
                                  children: [
                                      (0, i.jsx)(o.M0o, {
                                          tooltip: L.intl.string(L.t.w5uwoK),
                                          color: o.YX$.TERTIARY,
                                          icon: (0, i.jsx)(o.oLu, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          }),
                                          className: M.controlButton,
                                          onClick: Z
                                      }),
                                      (0, i.jsx)(o.M0o, {
                                          tooltip: L.intl.string(L.t['3D5yo6']),
                                          color: o.YX$.TERTIARY,
                                          icon: (0, i.jsx)(o.xhG, {
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
                    children: (0, i.jsx)(o.E1j, {
                        query: S,
                        onChange: b,
                        onClear: E,
                        placeholder: L.intl.string(L.t['5h0QOD']),
                        size: o.E1j.Sizes.MEDIUM,
                        autoFocus: d
                    })
                }),
                A
                    ? (0, i.jsx)('div', {
                          className: M.emptyStateContainer,
                          children: (0, i.jsx)(o.Text, {
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
                                      r = Y(e, ['ref', 'role']);
                                  return (0, i.jsx)(o.Wdt, {
                                      children: (e) =>
                                          (0, i.jsx)(
                                              o.aVo,
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
                                                      renderSection: C,
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
    let { onOpen: t, onClose: n, children: l, popoutPosition: s, popoutAlign: a } = e,
        [u, c] = r.useState(!1),
        d = r.useCallback(() => {
            c(!1), null == n || n();
        }, [n]),
        f = r.useCallback(() => {
            c((e) => {
                let i = !e;
                return i ? null == t || t() : null == n || n(), i;
            });
        }, [n, t]),
        g = r.useCallback(
            () =>
                (0, i.jsx)(en, {
                    containerClassName: M.container,
                    listClassName: M.list,
                    closePopout: d,
                    autoFocus: !0
                }),
            [d]
        );
    return (0, i.jsx)(o.yRy, {
        animation: o.yRy.Animation.NONE,
        position: s,
        align: a,
        autoInvert: !1,
        shouldShow: u,
        onRequestClose: d,
        renderPopout: g,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return l(f, n, e);
        }
    });
}

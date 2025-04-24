n.d(t, {
    Or: () => ee,
    r1: () => $
}),
    n(388685),
    n(539854),
    n(642613);
var i = n(200651),
    l = n(192379),
    r = n(658722),
    o = n.n(r),
    s = n(91192),
    a = n(442837),
    u = n(481060),
    c = n(278323),
    d = n(493683),
    f = n(239091),
    g = n(194359),
    p = n(549879),
    h = n(724757),
    y = n(620662),
    O = n(420660),
    N = n(326255),
    v = n(956221),
    m = n(747017),
    S = n(297781),
    b = n(82295),
    I = n(554300),
    E = n(558602),
    j = n(567409),
    C = n(373662),
    P = n(850020),
    Z = n(814443),
    w = n(518950),
    _ = n(670188),
    T = n(199902),
    G = n(158776),
    A = n(699516),
    x = n(885110),
    U = n(594174),
    k = n(979651),
    D = n(151459),
    R = n(981631),
    F = n(388032),
    L = n(288779);
function M(e) {
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
function q(e, t) {
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
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                l = {},
                r = Object.keys(e);
            for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let z = u.EFr.SIZE_32,
    Q = {
        FRIEND_REQUESTS: 0,
        SAME_ACTIVITY: 1,
        ACTIVITIES: 2,
        SUGGESTIONS: 3,
        ONLINE: 4,
        OFFLINE: 5
    },
    Y = [S.OV, S.wO, S.f, S.v1, S.pQ],
    W = l.memo((e) => {
        let { user: t, activities: r = [], gameProfileEntry: o, index: h, closeParentPopout: b, isSuggestion: j, relationshipType: Z, appContext: A, nickname: U } = e,
            {
                avatarDecorationSrc: k,
                avatarSrc: D,
                eventHandlers: V
            } = (0, w.Z)({
                user: t,
                size: z,
                animateOnHover: !0,
                guildId: null
            }),
            Q = (0, s.JA)(''.concat(h)),
            [W, H] = l.useState(!1),
            [B, J] = l.useState({}),
            K = r.filter((e) => e.type === R.IIU.PLAYING && (0, y.Z)(e, R.xjy.JOIN)),
            X = (0, a.Wu)([x.Z], () => x.Z.getActivities().filter((e) => e.type === R.IIU.PLAYING && (0, y.Z)(e, R.xjy.JOIN))),
            { voiceChannel: $ } = (0, v.Z)({ userId: t.id }),
            ee = (0, P.K)({
                location: 'friends-popout',
                user: t
            }),
            {
                status: et,
                applicationStream: en,
                isMobile: ei,
                newStatus: el
            } = (0, a.cj)(
                [G.Z, T.Z],
                () => {
                    let e = G.Z.getStatus(t.id),
                        n = T.Z.getAnyStreamForUser(t.id),
                        i = G.Z.isMobileOnline(t.id),
                        l = (0, O.Z)(r) ? R.Skl.STREAMING : e;
                    return {
                        status: e,
                        applicationStream: n,
                        isMobile: i,
                        newStatus: l
                    };
                },
                [t.id, r]
            ),
            er = l.useCallback(() => {
                H(!0);
            }, []),
            eo = l.useCallback(() => {
                H(!1);
            }, []),
            es = l.useCallback(() => {
                if (null != o) {
                    let e = o.traits,
                        t = q(M({}, o), { traits: e.slice(0, 3) });
                    return (0, i.jsx)(S.Gk, {
                        location: S.Gt.FRIENDS_POPOUT,
                        className: L.badgesContainer,
                        children: Y.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                    });
                }
                if (
                    !(0, N.Z)({
                        activities: r,
                        status: et,
                        applicationStream: en,
                        voiceChannel: $
                    })
                )
                    return null;
                let e = !(0, E.Z)({
                    activity:
                        null == r
                            ? void 0
                            : r.find((e) => {
                                  let { type: t } = e;
                                  return t === R.IIU.CUSTOM_STATUS;
                              }),
                    user: t
                });
                return (0, i.jsx)(m.Z, {
                    user: t,
                    activities: r,
                    applicationStream: en,
                    voiceChannel: $,
                    animate: !1,
                    hideEmoji: e,
                    hasQuest: !1
                });
            }, [t, r, et, en, $, o]),
            ea = l.useCallback(
                (e) => {
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                q(M({}, n), {
                                    user: t,
                                    appContext: A
                                })
                            );
                    });
                },
                [t, A]
            ),
            eu = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, p.i)(A, !0), d.Z.openPrivateChannel({ recipientIds: t.id }), null != b && b();
                },
                [t.id, b, A]
            ),
            ec = l.useCallback(
                (e) => {
                    e.preventDefault(),
                        e.stopPropagation(),
                        g.Z.addRelationship({
                            userId: t.id,
                            context: { location: 'friends-popout' }
                        });
                },
                [t.id]
            ),
            ed = async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !B[n.application_id]))
                    try {
                        J((e) => q(M({}, e), { [n.application_id]: !0 })),
                            await c.Z.sendActivityInviteUser({
                                type: R.mFx.JOIN,
                                userId: t.id,
                                activity: n,
                                location: R.Sbl.FRIENDS_POPOUT
                            }),
                            J((e) => q(M({}, e), { [n.application_id]: !1 }));
                    } finally {
                        J((e) => q(M({}, e), { [n.application_id]: !1 }));
                    }
            },
            ef = async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !B[n.application_id]))
                    try {
                        J((e) => q(M({}, e), { [n.application_id]: !0 })),
                            await c.Z.sendActivityInviteUser({
                                type: R.mFx.JOIN_REQUEST,
                                userId: t.id,
                                activity: n,
                                location: R.Sbl.FRIENDS_POPOUT
                            }),
                            J((e) => q(M({}, e), { [n.application_id]: !1 }));
                    } finally {
                        J((e) => q(M({}, e), { [n.application_id]: !1 }));
                    }
            },
            eg = () =>
                Z === R.OGo.PENDING_INCOMING
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(C.sF, {
                                  label: F.intl.string(F.t.MMlhsr),
                                  icon: u.dz2,
                                  onClick: (e) => {
                                      e.preventDefault(),
                                          e.stopPropagation(),
                                          g.Z.addRelationship({
                                              userId: t.id,
                                              context: { location: 'friends-popout' }
                                          });
                                  }
                              }),
                              (0, i.jsx)(C.sF, {
                                  label: F.intl.string(F.t.ytCpKi),
                                  icon: u.Dio,
                                  onClick: (e) => {
                                      e.preventDefault(), e.stopPropagation(), g.Z.removeRelationship(t.id, { location: 'friends-popout' });
                                  }
                              })
                          ]
                      })
                    : Z === R.OGo.PENDING_OUTGOING
                      ? (0, i.jsx)(C.sF, {
                            label: F.intl.string(F.t['bTfA//']),
                            icon: u.iHX,
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), g.Z.cancelFriendRequest(t.id, { location: 'friends-popout' });
                            }
                        })
                      : j
                        ? (0, i.jsx)(C.sF, {
                              label: F.intl.string(F.t.w5uwoK),
                              icon: u.oLu,
                              onClick: ec
                          })
                        : null,
            ep = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        K.map((e) =>
                            (0, i.jsx)(
                                C.sF,
                                {
                                    label: B[e.application_id] ? F.intl.string(F.t['8BEiNj']) : F.intl.string(F.t.OKsSCQ),
                                    icon: B[e.application_id] ? u.dz2 : u.V9,
                                    onClick: (t) => ef(t, e)
                                },
                                e.application_id
                            )
                        ),
                        X.map((e) => {
                            var n;
                            return (0, i.jsx)(
                                C.sF,
                                {
                                    label: B[e.application_id]
                                        ? F.intl.string(F.t['8BEiNj'])
                                        : F.intl.formatToPlainString(F.t['KHLo+P'], {
                                              channel: null != (n = t.globalName) ? n : t.username,
                                              game: e.name
                                          }),
                                    icon: B[e.application_id] ? u.dz2 : u.ejJ,
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
                var l;
                let { isShown: r } = n;
                return (0, i.jsxs)('div', {
                    className: L.row,
                    children: [
                        (0, i.jsx)(
                            I.Z,
                            M(
                                {
                                    innerClassName: L.rowInner,
                                    onContextMenu: ea,
                                    onMouseEnter: er,
                                    onMouseLeave: eo,
                                    avatar: (0, i.jsx)(
                                        u.qEK,
                                        q(M({}, V), {
                                            size: z,
                                            src: D,
                                            isMobile: ei,
                                            isTyping: !1,
                                            status: el,
                                            className: L.avatar,
                                            'aria-label': t.username,
                                            statusTooltip: !0,
                                            avatarDecoration: k
                                        })
                                    ),
                                    name: (0, i.jsx)('span', {
                                        className: L.username,
                                        children: null != (l = null != U ? U : t.globalName) ? l : t.username
                                    }),
                                    subText: es(),
                                    selected: r,
                                    nameplate: ee,
                                    hovered: W
                                },
                                e,
                                Q
                            )
                        ),
                        (0, i.jsxs)(C.ZP, {
                            className: L.hoverBar,
                            children: [
                                eg(),
                                ep(),
                                Z !== R.OGo.PENDING_INCOMING &&
                                    Z !== R.OGo.PENDING_OUTGOING &&
                                    (0, i.jsx)(C.sF, {
                                        label: F.intl.string(F.t['g33r/P']),
                                        icon: u.kBi,
                                        onClick: eu
                                    }),
                                (0, i.jsx)(C.sF, {
                                    label: F.intl.string(F.t.UKOtz8),
                                    icon: u.xhG,
                                    onClick: ea
                                })
                            ]
                        })
                    ]
                });
            }
        });
    });
W.displayName = 'FriendRow';
let H = () => {
        let e = (0, a.e7)([x.Z], () => x.Z.getPrimaryActivity()),
            t = null == e ? void 0 : e.application_id,
            n = (0, j.Ns)(t);
        return (0, a.e7)(
            [A.Z, U.default, G.Z, k.Z],
            () => {
                let i = (null == e ? void 0 : e.name) != null && null != t,
                    l = {
                        activities: [],
                        sameActivity: [],
                        online: [],
                        offline: []
                    },
                    r = new Map();
                for (let e of (i &&
                    null != t &&
                    null != n &&
                    n.length > 0 &&
                    n.forEach((e) => {
                        let t = e.author_id;
                        if (!A.Z.isFriend(t)) return;
                        let n = U.default.getUser(t);
                        null != n &&
                            r.set(t, {
                                user: n,
                                activities: [],
                                gameProfileEntry: e,
                                nickname: A.Z.getNickname(t)
                            });
                    }),
                A.Z.getFriendIDs())) {
                    let n = U.default.getUser(e);
                    if (null == n) continue;
                    let o = G.Z.getStatus(e),
                        s = G.Z.getActivities(e),
                        a = A.Z.getNickname(e),
                        u = k.Z.getVoiceStateForUser(e),
                        c = (null == u ? void 0 : u.channelId) != null,
                        d = s.filter((e) => e.type === R.IIU.PLAYING || e.type === R.IIU.LISTENING || e.type === R.IIU.WATCHING || e.type === R.IIU.STREAMING),
                        f = d.filter((e) => e.application_id === t),
                        g = i && f.length > 0,
                        p = {
                            user: n,
                            activities: g ? f : d,
                            nickname: a
                        };
                    g ? (l.sameActivity.push(p), r.delete(e)) : d.length > 0 ? l.activities.push(p) : c ? l.activities.push(q(M({}, p), { activities: s })) : o === R.Skl.ONLINE || o === R.Skl.IDLE || o === R.Skl.DND ? l.online.push(p) : l.offline.push(p);
                }
                let o = (e, t) => {
                    var n, i;
                    let l = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
                        r = (null != (i = t.user.globalName) ? i : t.user.username).toLowerCase();
                    return l.localeCompare(r);
                };
                if ((l.sameActivity.sort(o), r.size > 0)) {
                    let e = Array.from(r.values()).sort(o);
                    l.sameActivity.push(...e);
                }
                return l.activities.sort(o), l.online.sort(o), l.offline.sort(o), l;
            },
            [n, e, t]
        );
    },
    B = () =>
        (0, a.e7)([A.Z, U.default, G.Z], () => {
            let e = A.Z.getRelationships(),
                t = [];
            for (let [n, i] of Object.entries(e)) {
                if (i !== R.OGo.PENDING_INCOMING && i !== R.OGo.PENDING_OUTGOING) continue;
                let e = U.default.getUser(n);
                if (null != e) {
                    let l = A.Z.getSince(n),
                        r = null != l ? new Date(l).getTime() : 0;
                    t.push({
                        user: e,
                        activities: G.Z.getActivities(n),
                        timestamp: r,
                        nickname: A.Z.getNickname(n),
                        relationshipType: i
                    });
                }
            }
            return t.sort((e, t) => t.timestamp - e.timestamp), t;
        }),
    J = () =>
        (0, a.e7)([Z.Z, U.default, G.Z, A.Z, k.Z], () => {
            let e = Z.Z.getUserAffinitiesMap(),
                t = [];
            for (let [n, i] of e.entries()) {
                let e = A.Z.getRelationshipType(n);
                if (A.Z.isFriend(n) || i.affinity <= 20 || e === R.OGo.PENDING_INCOMING || e === R.OGo.PENDING_OUTGOING) continue;
                let l = U.default.getUser(n);
                if (null != l) {
                    let e = G.Z.getActivities(n),
                        r = k.Z.getVoiceStateForUser(n),
                        o = (null == r ? void 0 : r.channelId) != null;
                    t.push({
                        user: l,
                        activities: e,
                        affinity: i.affinity,
                        hasActivity: e.length > 0 || o,
                        nickname: A.Z.getNickname(n)
                    });
                }
            }
            return t.sort((e, t) => {
                let n = 1000 * !!e.hasActivity + e.affinity;
                return 1000 * !!t.hasActivity + t.affinity - n;
            });
        }),
    K = () => {
        let e = B(),
            t = J(),
            n = H(),
            i = (0, a.e7)([x.Z], () => x.Z.getPrimaryActivity());
        return l.useMemo(() => {
            var l;
            return {
                friendRequests: e,
                suggestions: t,
                activities: n.activities,
                sameActivity: n.sameActivity,
                online: n.online,
                offline: n.offline,
                currentActivityName: null != (l = null == i ? void 0 : i.name) ? l : ''
            };
        }, [e, t, n, i]);
    },
    X = (e) => {
        let [t, n] = l.useState(''),
            i = l.useCallback(
                (e) => {
                    if (0 === t.length) return e;
                    let n = t.toLowerCase();
                    return e.filter((e) => {
                        let { user: t, activities: i, nickname: l } = e;
                        return !!(o()(n, t.username.toLowerCase()) || (null != t.globalName && o()(n, t.globalName.toLowerCase())) || (null != l && o()(n, l.toLowerCase()))) || (null == i ? void 0 : i.some((e) => null != e.name && o()(n, e.name.toLowerCase())));
                    });
                },
                [t]
            ),
            r = l.useMemo(
                () => ({
                    friendRequests: i(e.friendRequests),
                    suggestions: i(e.suggestions),
                    activities: i(e.activities),
                    sameActivity: i(e.sameActivity),
                    online: i(e.online),
                    offline: i(e.offline)
                }),
                [e, i]
            ),
            s = l.useCallback(() => n(''), []);
        return q(M({}, r), {
            searchQuery: t,
            setSearchQuery: n,
            handleSearchClear: s
        });
    },
    $ = l.memo(function (e) {
        let { containerClassName: t, listClassName: r, closePopout: o, renderHeader: a, autoFocus: c = !1, appContext: d = R.IlC.APP } = e,
            [g, p] = l.useState([Q.SUGGESTIONS, Q.FRIEND_REQUESTS]),
            y = l.useRef(null),
            O = (0, h.Z)('friends-popout', y),
            N = K(),
            v = X(N),
            { searchQuery: m, setSearchQuery: S, handleSearchClear: I } = v,
            E = V(v, ['searchQuery', 'setSearchQuery', 'handleSearchClear']),
            j = l.useCallback((e) => {
                p((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
            }, []),
            C = l.useCallback(
                (e) => {
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e('23087').then(n.bind(n, 29131));
                        return (t) => (0, i.jsx)(e, q(M({}, t), { onClose: o }));
                    });
                },
                [o]
            ),
            P = l.useCallback(() => {
                (0, u.ZDy)(async () => {
                    let { default: e } = await n.e('49078').then(n.bind(n, 539725));
                    return (t) => (0, i.jsx)(e, M({}, t));
                });
            }, []),
            Z = l.useCallback(
                (e) => {
                    let { section: t } = e,
                        n = '',
                        l = 0;
                    switch (t) {
                        case Q.FRIEND_REQUESTS:
                            (n = F.intl.string(F.t.fyA119)), (l = E.friendRequests.length);
                            break;
                        case Q.SAME_ACTIVITY:
                            (n = N.currentActivityName), (l = E.sameActivity.length);
                            break;
                        case Q.SUGGESTIONS:
                            (n = F.intl.string(F.t.qm9dSk)), (l = E.suggestions.length);
                            break;
                        case Q.ACTIVITIES:
                            (n = F.intl.string(F.t.TxqPQU)), (l = E.activities.length);
                            break;
                        case Q.ONLINE:
                            (n = F.intl.string(F.t.WbGtnJ)), (l = E.online.length);
                            break;
                        case Q.OFFLINE:
                            (n = F.intl.string(F.t.Vv0abG)), (l = E.offline.length);
                    }
                    let r = (t === Q.SUGGESTIONS || t === Q.FRIEND_REQUESTS) && l > 3,
                        o = g.includes(t);
                    return (0, i.jsxs)(b.Z, {
                        className: L.section,
                        children: [
                            (0, i.jsx)(u.nn4, {
                                children: F.intl.format(F.t.UaqbkZ, {
                                    title: n,
                                    count: l
                                })
                            }),
                            (0, i.jsxs)(u.P3F, {
                                onClick: () => r && j(t),
                                'aria-hidden': !0,
                                className: r ? L.sectionCollapsible : void 0,
                                children: [
                                    n,
                                    ' \u2014 ',
                                    l,
                                    r
                                        ? o
                                            ? (0, i.jsx)(u.Fbu, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: L.chevronIcon
                                              })
                                            : (0, i.jsx)(u.CJ0, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: L.chevronIcon
                                              })
                                        : null
                                ]
                            })
                        ]
                    });
                },
                [N.currentActivityName, E.friendRequests.length, E.sameActivity.length, E.suggestions.length, E.activities.length, E.online.length, E.offline.length, g, j]
            ),
            w = l.useCallback(
                (e) => {
                    let t;
                    return null == (t = e.section === Q.FRIEND_REQUESTS ? E.friendRequests[e.row] : e.section === Q.SAME_ACTIVITY ? E.sameActivity[e.row] : e.section === Q.SUGGESTIONS ? E.suggestions[e.row] : e.section === Q.ACTIVITIES ? E.activities[e.row] : e.section === Q.ONLINE ? E.online[e.row] : E.offline[e.row]) || null == t.user
                        ? null
                        : (0, i.jsx)(
                              W,
                              q(M({}, t), {
                                  index: e.row,
                                  closeParentPopout: o,
                                  isSuggestion: e.section === Q.SUGGESTIONS,
                                  appContext: d
                              }),
                              ''.concat(e.section, ':').concat(t.user.id)
                          );
                },
                [E, o, d]
            ),
            { showSuggestions: _ } = (0, D.Z)(),
            T = l.useMemo(() => {
                let e = _ ? (g.includes(Q.SUGGESTIONS) ? Math.min(3, E.suggestions.length) : E.suggestions.length) : 0;
                return [g.includes(Q.FRIEND_REQUESTS) ? Math.min(3, E.friendRequests.length) : E.friendRequests.length, E.sameActivity.length, E.activities.length, e, E.online.length, E.offline.length];
            }, [E, g, _]),
            G = Object.values(E).every((e) => 0 === e.length);
        return (0, i.jsxs)(u.VqE, {
            className: t,
            children: [
                null != a
                    ? (0, i.jsx)('div', {
                          className: L.header,
                          children: a()
                      })
                    : (0, i.jsxs)('div', {
                          className: L.header,
                          children: [
                              (0, i.jsx)(u.X6q, {
                                  variant: 'heading-lg/semibold',
                                  children: F.intl.string(F.t.TdEu5e)
                              }),
                              (0, i.jsxs)('div', {
                                  className: L.controlButtons,
                                  children: [
                                      (0, i.jsx)(u.M0o, {
                                          tooltip: F.intl.string(F.t.w5uwoK),
                                          color: u.YX$.TERTIARY,
                                          icon: (0, i.jsx)(u.oLu, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          }),
                                          className: L.controlButton,
                                          onClick: P
                                      }),
                                      (0, i.jsx)(u.M0o, {
                                          tooltip: F.intl.string(F.t['3D5yo6']),
                                          color: u.YX$.TERTIARY,
                                          icon: (0, i.jsx)(u.xhG, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          }),
                                          className: L.controlButton,
                                          onClick: C
                                      })
                                  ]
                              })
                          ]
                      }),
                (0, i.jsx)('div', {
                    className: L.searchContainer,
                    children: (0, i.jsx)(u.E1j, {
                        query: m,
                        onChange: S,
                        onClear: I,
                        placeholder: F.intl.string(F.t['5h0QOD']),
                        size: u.E1j.Sizes.MEDIUM,
                        autoFocus: c
                    })
                }),
                G
                    ? (0, i.jsx)('div', {
                          className: L.emptyStateContainer,
                          children: (0, i.jsx)(u.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: F.intl.string(F.t['7sW4h4'])
                          })
                      })
                    : (0, i.jsx)(s.bG, {
                          navigator: O,
                          children: (0, i.jsx)(s.SJ, {
                              children: (e) => {
                                  var { ref: t, role: n } = e,
                                      l = V(e, ['ref', 'role']);
                                  return (0, i.jsx)(u.Wdt, {
                                      children: (e) =>
                                          (0, i.jsx)(
                                              u.aVo,
                                              M(
                                                  {
                                                      innerRole: n,
                                                      innerAriaLabel: F.intl.string(F.t.TdEu5e),
                                                      ref: (e) => {
                                                          var n;
                                                          (y.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                                      },
                                                      className: r,
                                                      sectionHeight: 40,
                                                      rowHeight: 42,
                                                      sidebarHeight: 0,
                                                      renderSection: Z,
                                                      renderRow: w,
                                                      sections: T,
                                                      paddingTop: 0,
                                                      paddingBottom: 0
                                                  },
                                                  l,
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
function ee(e) {
    let { onOpen: t, onClose: n, children: r, popoutPosition: o, popoutAlign: s } = e,
        [a, c] = l.useState(!1),
        d = l.useCallback(() => {
            c(!1), null == n || n();
        }, [n]),
        f = l.useCallback(() => {
            c((e) => {
                let i = !e;
                return i ? null == t || t() : null == n || n(), i;
            });
        }, [n, t]),
        g = l.useCallback(
            () =>
                (0, i.jsx)($, {
                    containerClassName: L.container,
                    listClassName: L.list,
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
        renderPopout: g,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return r(f, n, e);
        }
    });
}

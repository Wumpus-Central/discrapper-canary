n.d(t, {
    Or: () => ee,
    r1: () => $
}),
    n(388685),
    n(539854),
    n(642613);
var i = n(200651),
    r = n(192379),
    l = n(658722),
    s = n.n(l),
    a = n(91192),
    o = n(442837),
    c = n(481060),
    u = n(278323),
    d = n(493683),
    p = n(239091),
    f = n(194359),
    g = n(549879),
    N = n(724757),
    h = n(620662),
    O = n(420660),
    y = n(326255),
    m = n(956221),
    S = n(747017),
    I = n(297781),
    b = n(82295),
    v = n(554300),
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
    k = n(594174),
    U = n(979651),
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
function W(e, t) {
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
function q(e, t) {
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
let V = c.EFr.SIZE_32,
    z = {
        FRIEND_REQUESTS: 0,
        SAME_ACTIVITY: 1,
        ACTIVITIES: 2,
        SUGGESTIONS: 3,
        ONLINE: 4,
        OFFLINE: 5
    },
    Q = [I.OV, I.wO, I.f, I.v1, I.pQ],
    Y = r.memo((e) => {
        let { user: t, activities: l = [], gameProfileEntry: s, index: N, closeParentPopout: b, isSuggestion: j, relationshipType: Z, appContext: A, nickname: k } = e,
            {
                avatarDecorationSrc: U,
                avatarSrc: D,
                eventHandlers: q
            } = (0, w.Z)({
                user: t,
                size: V,
                animateOnHover: !0,
                guildId: null
            }),
            z = (0, a.JA)(''.concat(N)),
            [Y, H] = r.useState(!1),
            [B, J] = r.useState({}),
            K = l.filter((e) => e.type === R.IIU.PLAYING && (0, h.Z)(e, R.xjy.JOIN)),
            X = (0, o.Wu)([x.Z], () => x.Z.getActivities().filter((e) => e.type === R.IIU.PLAYING && (0, h.Z)(e, R.xjy.JOIN))),
            { voiceChannel: $ } = (0, m.Z)({ userId: t.id }),
            ee = (0, P.K)({
                location: 'friends-popout',
                user: t
            }),
            {
                status: et,
                applicationStream: en,
                isMobile: ei,
                newStatus: er
            } = (0, o.cj)(
                [G.Z, T.Z],
                () => {
                    let e = G.Z.getStatus(t.id),
                        n = T.Z.getAnyStreamForUser(t.id),
                        i = G.Z.isMobileOnline(t.id),
                        r = (0, O.Z)(l) ? R.Skl.STREAMING : e;
                    return {
                        status: e,
                        applicationStream: n,
                        isMobile: i,
                        newStatus: r
                    };
                },
                [t.id, l]
            ),
            el = r.useCallback(() => {
                H(!0);
            }, []),
            es = r.useCallback(() => {
                H(!1);
            }, []),
            ea = r.useCallback(() => {
                if (null != s) {
                    let e = s.traits,
                        t = W(M({}, s), { traits: e.slice(0, 3) });
                    return (0, i.jsx)(I.Gk, {
                        location: I.Gt.FRIENDS_POPOUT,
                        className: L.badgesContainer,
                        children: Q.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                    });
                }
                if (
                    !(0, y.Z)({
                        activities: l,
                        status: et,
                        applicationStream: en,
                        voiceChannel: $
                    })
                )
                    return null;
                let e = !(0, E.Z)({
                    activity:
                        null == l
                            ? void 0
                            : l.find((e) => {
                                  let { type: t } = e;
                                  return t === R.IIU.CUSTOM_STATUS;
                              }),
                    user: t
                });
                return (0, i.jsx)(S.Z, {
                    user: t,
                    activities: l,
                    applicationStream: en,
                    voiceChannel: $,
                    animate: !1,
                    hideEmoji: e,
                    hasQuest: !1
                });
            }, [t, l, et, en, $, s]),
            eo = r.useCallback(
                (e) => {
                    (0, p.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                W(M({}, n), {
                                    user: t,
                                    appContext: A
                                })
                            );
                    });
                },
                [t, A]
            ),
            ec = r.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, g.i)(A, !0), d.Z.openPrivateChannel({ recipientIds: t.id }), null != b && b();
                },
                [t.id, b, A]
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
            ed = async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !B[n.application_id]))
                    try {
                        J((e) => W(M({}, e), { [n.application_id]: !0 })),
                            await u.Z.sendActivityInviteUser({
                                type: R.mFx.JOIN,
                                userId: t.id,
                                activity: n,
                                location: R.Sbl.FRIENDS_POPOUT
                            }),
                            J((e) => W(M({}, e), { [n.application_id]: !1 }));
                    } finally {
                        J((e) => W(M({}, e), { [n.application_id]: !1 }));
                    }
            },
            ep = async (e, n) => {
                if ((e.preventDefault(), e.stopPropagation(), null != n.application_id && '' !== n.application_id && !B[n.application_id]))
                    try {
                        J((e) => W(M({}, e), { [n.application_id]: !0 })),
                            await u.Z.sendActivityInviteUser({
                                type: R.mFx.JOIN_REQUEST,
                                userId: t.id,
                                activity: n,
                                location: R.Sbl.FRIENDS_POPOUT
                            }),
                            J((e) => W(M({}, e), { [n.application_id]: !1 }));
                    } finally {
                        J((e) => W(M({}, e), { [n.application_id]: !1 }));
                    }
            },
            ef = () =>
                Z === R.OGo.PENDING_INCOMING
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(C.sF, {
                                  label: F.NW.string(F.t.MMlhsr),
                                  icon: c.dz2,
                                  onClick: (e) => {
                                      e.preventDefault(),
                                          e.stopPropagation(),
                                          f.Z.addRelationship({
                                              userId: t.id,
                                              context: { location: 'friends-popout' }
                                          });
                                  }
                              }),
                              (0, i.jsx)(C.sF, {
                                  label: F.NW.string(F.t.ytCpKi),
                                  icon: c.Dio,
                                  onClick: (e) => {
                                      e.preventDefault(), e.stopPropagation(), f.Z.removeRelationship(t.id, { location: 'friends-popout' });
                                  }
                              })
                          ]
                      })
                    : Z === R.OGo.PENDING_OUTGOING
                      ? (0, i.jsx)(C.sF, {
                            label: F.NW.string(F.t['bTfA//']),
                            icon: c.iHX,
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), f.Z.cancelFriendRequest(t.id, { location: 'friends-popout' });
                            }
                        })
                      : j
                        ? (0, i.jsx)(C.sF, {
                              label: F.NW.string(F.t.w5uwoK),
                              icon: c.oLu,
                              onClick: eu
                          })
                        : null,
            eg = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        K.map((e) =>
                            (0, i.jsx)(
                                C.sF,
                                {
                                    label: B[e.application_id] ? F.NW.string(F.t['8BEiNj']) : F.NW.string(F.t.OKsSCQ),
                                    icon: B[e.application_id] ? c.dz2 : c.V9,
                                    onClick: (t) => ep(t, e)
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
                                        ? F.NW.string(F.t['8BEiNj'])
                                        : F.NW.formatToPlainString(F.t['KHLo+P'], {
                                              channel: null != (n = t.globalName) ? n : t.username,
                                              game: e.name
                                          }),
                                    icon: B[e.application_id] ? c.dz2 : c.ejJ,
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
                    className: L.row,
                    children: [
                        (0, i.jsx)(
                            v.Z,
                            M(
                                {
                                    innerClassName: L.rowInner,
                                    onContextMenu: eo,
                                    onMouseEnter: el,
                                    onMouseLeave: es,
                                    avatar: (0, i.jsx)(
                                        c.qEK,
                                        W(M({}, q), {
                                            size: V,
                                            src: D,
                                            isMobile: ei,
                                            isTyping: !1,
                                            status: er,
                                            className: L.avatar,
                                            'aria-label': t.username,
                                            statusTooltip: !0,
                                            avatarDecoration: U
                                        })
                                    ),
                                    name: (0, i.jsx)('span', {
                                        className: L.username,
                                        children: null != (r = null != k ? k : t.globalName) ? r : t.username
                                    }),
                                    subText: ea(),
                                    selected: l,
                                    nameplate: ee,
                                    hovered: Y
                                },
                                e,
                                z
                            )
                        ),
                        (0, i.jsxs)(C.ZP, {
                            className: L.hoverBar,
                            children: [
                                ef(),
                                eg(),
                                Z !== R.OGo.PENDING_INCOMING &&
                                    Z !== R.OGo.PENDING_OUTGOING &&
                                    (0, i.jsx)(C.sF, {
                                        label: F.NW.string(F.t['g33r/P']),
                                        icon: c.kBi,
                                        onClick: ec
                                    }),
                                (0, i.jsx)(C.sF, {
                                    label: F.NW.string(F.t.UKOtz8),
                                    icon: c.xhG,
                                    onClick: eo
                                })
                            ]
                        })
                    ]
                });
            }
        });
    });
Y.displayName = 'FriendRow';
let H = () => {
        let e = (0, o.e7)([x.Z], () => x.Z.getPrimaryActivity()),
            t = null == e ? void 0 : e.application_id,
            n = (0, j.Ns)(t);
        return (0, o.e7)(
            [A.Z, k.default, G.Z, U.Z],
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
                        if (!A.Z.isFriend(t)) return;
                        let n = k.default.getUser(t);
                        null != n &&
                            l.set(t, {
                                user: n,
                                activities: [],
                                gameProfileEntry: e,
                                nickname: A.Z.getNickname(t)
                            });
                    }),
                A.Z.getFriendIDs())) {
                    let n = k.default.getUser(e);
                    if (null == n) continue;
                    let s = G.Z.getStatus(e),
                        a = G.Z.getActivities(e),
                        o = A.Z.getNickname(e),
                        c = U.Z.getVoiceStateForUser(e),
                        u = (null == c ? void 0 : c.channelId) != null,
                        d = a.filter((e) => e.type === R.IIU.PLAYING || e.type === R.IIU.LISTENING || e.type === R.IIU.WATCHING || e.type === R.IIU.STREAMING),
                        p = d.filter((e) => e.application_id === t),
                        f = i && p.length > 0,
                        g = {
                            user: n,
                            activities: f ? p : d,
                            nickname: o
                        };
                    f ? (r.sameActivity.push(g), l.delete(e)) : d.length > 0 ? r.activities.push(g) : u ? r.activities.push(W(M({}, g), { activities: a })) : s === R.Skl.ONLINE || s === R.Skl.IDLE || s === R.Skl.DND ? r.online.push(g) : r.offline.push(g);
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
        (0, o.e7)([A.Z, k.default, G.Z], () => {
            let e = A.Z.getRelationships(),
                t = [];
            for (let [n, i] of Object.entries(e)) {
                if (i !== R.OGo.PENDING_INCOMING && i !== R.OGo.PENDING_OUTGOING) continue;
                let e = k.default.getUser(n);
                if (null != e) {
                    let r = A.Z.getSince(n),
                        l = null != r ? new Date(r).getTime() : 0;
                    t.push({
                        user: e,
                        activities: G.Z.getActivities(n),
                        timestamp: l,
                        nickname: A.Z.getNickname(n),
                        relationshipType: i
                    });
                }
            }
            return t.sort((e, t) => t.timestamp - e.timestamp), t;
        }),
    J = () =>
        (0, o.e7)([Z.Z, k.default, G.Z, A.Z, U.Z], () => {
            let e = Z.Z.getUserAffinitiesMap(),
                t = [];
            for (let [n, i] of e.entries()) {
                let e = A.Z.getRelationshipType(n);
                if (A.Z.isFriend(n) || i.affinity <= 20 || e === R.OGo.PENDING_INCOMING || e === R.OGo.PENDING_OUTGOING) continue;
                let r = k.default.getUser(n);
                if (null != r) {
                    let e = G.Z.getActivities(n),
                        l = U.Z.getVoiceStateForUser(n),
                        s = (null == l ? void 0 : l.channelId) != null;
                    t.push({
                        user: r,
                        activities: e,
                        affinity: i.affinity,
                        hasActivity: e.length > 0 || s,
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
            i = (0, o.e7)([x.Z], () => x.Z.getPrimaryActivity());
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
    X = (e) => {
        let [t, n] = r.useState(''),
            i = r.useCallback(
                (e) => {
                    if (0 === t.length) return e;
                    let n = t.toLowerCase();
                    return e.filter((e) => {
                        let { user: t, activities: i, nickname: r } = e;
                        return !!(s()(n, t.username.toLowerCase()) || (null != t.globalName && s()(n, t.globalName.toLowerCase())) || (null != r && s()(n, r.toLowerCase()))) || (null == i ? void 0 : i.some((e) => null != e.name && s()(n, e.name.toLowerCase())));
                    });
                },
                [t]
            ),
            l = r.useMemo(
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
            a = r.useCallback(() => n(''), []);
        return W(M({}, l), {
            searchQuery: t,
            setSearchQuery: n,
            handleSearchClear: a
        });
    },
    $ = r.memo(function (e) {
        let { containerClassName: t, listClassName: l, closePopout: s, renderHeader: o, autoFocus: u = !1, appContext: d = R.IlC.APP } = e,
            [f, g] = r.useState([z.SUGGESTIONS, z.FRIEND_REQUESTS]),
            h = r.useRef(null),
            O = (0, N.Z)('friends-popout', h),
            y = K(),
            m = X(y),
            { searchQuery: S, setSearchQuery: I, handleSearchClear: v } = m,
            E = q(m, ['searchQuery', 'setSearchQuery', 'handleSearchClear']),
            j = r.useCallback((e) => {
                g((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
            }, []),
            C = r.useCallback(
                (e) => {
                    (0, p.jW)(e, async () => {
                        let { default: e } = await n.e('23087').then(n.bind(n, 29131));
                        return (t) => (0, i.jsx)(e, W(M({}, t), { onClose: s }));
                    });
                },
                [s]
            ),
            P = r.useCallback(() => {
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e('49078').then(n.bind(n, 539725));
                    return (t) => (0, i.jsx)(e, M({}, t));
                });
            }, []),
            Z = r.useCallback(
                (e) => {
                    let { section: t } = e,
                        n = '',
                        r = 0;
                    switch (t) {
                        case z.FRIEND_REQUESTS:
                            (n = F.NW.string(F.t.fyA119)), (r = E.friendRequests.length);
                            break;
                        case z.SAME_ACTIVITY:
                            (n = y.currentActivityName), (r = E.sameActivity.length);
                            break;
                        case z.SUGGESTIONS:
                            (n = F.NW.string(F.t.qm9dSk)), (r = E.suggestions.length);
                            break;
                        case z.ACTIVITIES:
                            (n = F.NW.string(F.t.TxqPQU)), (r = E.activities.length);
                            break;
                        case z.ONLINE:
                            (n = F.NW.string(F.t.WbGtnJ)), (r = E.online.length);
                            break;
                        case z.OFFLINE:
                            (n = F.NW.string(F.t.Vv0abG)), (r = E.offline.length);
                    }
                    let l = (t === z.SUGGESTIONS || t === z.FRIEND_REQUESTS) && r > 3,
                        s = f.includes(t);
                    return (0, i.jsxs)(b.Z, {
                        className: L.section,
                        children: [
                            (0, i.jsx)(c.nn4, {
                                children: F.NW.format(F.t.UaqbkZ, {
                                    title: n,
                                    count: r
                                })
                            }),
                            (0, i.jsxs)(c.P3F, {
                                onClick: () => l && j(t),
                                'aria-hidden': !0,
                                className: l ? L.sectionCollapsible : void 0,
                                children: [
                                    n,
                                    ' \u2014 ',
                                    r,
                                    l
                                        ? s
                                            ? (0, i.jsx)(c.Fbu, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: L.chevronIcon
                                              })
                                            : (0, i.jsx)(c.CJ0, {
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
                [y.currentActivityName, E.friendRequests.length, E.sameActivity.length, E.suggestions.length, E.activities.length, E.online.length, E.offline.length, f, j]
            ),
            w = r.useCallback(
                (e) => {
                    let t;
                    return null == (t = e.section === z.FRIEND_REQUESTS ? E.friendRequests[e.row] : e.section === z.SAME_ACTIVITY ? E.sameActivity[e.row] : e.section === z.SUGGESTIONS ? E.suggestions[e.row] : e.section === z.ACTIVITIES ? E.activities[e.row] : e.section === z.ONLINE ? E.online[e.row] : E.offline[e.row]) || null == t.user
                        ? null
                        : (0, i.jsx)(
                              Y,
                              W(M({}, t), {
                                  index: e.row,
                                  closeParentPopout: s,
                                  isSuggestion: e.section === z.SUGGESTIONS,
                                  appContext: d
                              }),
                              ''.concat(e.section, ':').concat(t.user.id)
                          );
                },
                [E, s, d]
            ),
            { showSuggestions: _ } = (0, D.Z)(),
            T = r.useMemo(() => {
                let e = _ ? (f.includes(z.SUGGESTIONS) ? Math.min(3, E.suggestions.length) : E.suggestions.length) : 0;
                return [f.includes(z.FRIEND_REQUESTS) ? Math.min(3, E.friendRequests.length) : E.friendRequests.length, E.sameActivity.length, E.activities.length, e, E.online.length, E.offline.length];
            }, [E, f, _]),
            G = Object.values(E).every((e) => 0 === e.length);
        return (0, i.jsxs)(c.VqE, {
            className: t,
            children: [
                null != o
                    ? (0, i.jsx)('div', {
                          className: L.header,
                          children: o()
                      })
                    : (0, i.jsxs)('div', {
                          className: L.header,
                          children: [
                              (0, i.jsx)(c.X6q, {
                                  variant: 'heading-lg/semibold',
                                  children: F.NW.string(F.t.TdEu5e)
                              }),
                              (0, i.jsxs)('div', {
                                  className: L.controlButtons,
                                  children: [
                                      (0, i.jsx)(c.M0o, {
                                          tooltip: F.NW.string(F.t.w5uwoK),
                                          color: c.YX$.TERTIARY,
                                          icon: (0, i.jsx)(c.oLu, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          }),
                                          className: L.controlButton,
                                          onClick: P
                                      }),
                                      (0, i.jsx)(c.M0o, {
                                          tooltip: F.NW.string(F.t['3D5yo6']),
                                          color: c.YX$.TERTIARY,
                                          icon: (0, i.jsx)(c.xhG, {
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
                    children: (0, i.jsx)(c.E1j, {
                        query: S,
                        onChange: I,
                        onClear: v,
                        placeholder: F.NW.string(F.t['5h0QOD']),
                        size: c.E1j.Sizes.MEDIUM,
                        autoFocus: u
                    })
                }),
                G
                    ? (0, i.jsx)('div', {
                          className: L.emptyStateContainer,
                          children: (0, i.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: F.NW.string(F.t['7sW4h4'])
                          })
                      })
                    : (0, i.jsx)(a.bG, {
                          navigator: O,
                          children: (0, i.jsx)(a.SJ, {
                              children: (e) => {
                                  var { ref: t, role: n } = e,
                                      r = q(e, ['ref', 'role']);
                                  return (0, i.jsx)(c.Wdt, {
                                      children: (e) =>
                                          (0, i.jsx)(
                                              c.aVo,
                                              M(
                                                  {
                                                      innerRole: n,
                                                      innerAriaLabel: F.NW.string(F.t.TdEu5e),
                                                      ref: (e) => {
                                                          var n;
                                                          (h.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                                      },
                                                      className: l,
                                                      sectionHeight: 40,
                                                      rowHeight: 42,
                                                      sidebarHeight: 0,
                                                      renderSection: Z,
                                                      renderRow: w,
                                                      sections: T,
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
function ee(e) {
    let { onOpen: t, onClose: n, children: l, popoutPosition: s, popoutAlign: a } = e,
        [o, u] = r.useState(!1),
        d = r.useCallback(() => {
            u(!1), null == n || n();
        }, [n]),
        p = r.useCallback(() => {
            u((e) => {
                let i = !e;
                return i ? null == t || t() : null == n || n(), i;
            });
        }, [n, t]),
        f = r.useCallback(
            () =>
                (0, i.jsx)($, {
                    containerClassName: L.container,
                    listClassName: L.list,
                    closePopout: d,
                    autoFocus: !0
                }),
            [d]
        );
    return (0, i.jsx)(c.yRy, {
        animation: c.yRy.Animation.NONE,
        position: s,
        align: a,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: f,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return l(p, n, e);
        }
    });
}

n.d(t, { O: () => $ }), n(47120), n(653041), n(230036);
var r = n(200651),
    i = n(192379),
    l = n(658722),
    o = n.n(l),
    a = n(512969),
    s = n(91192),
    c = n(442837),
    u = n(481060),
    d = n(493683),
    p = n(239091),
    h = n(529103),
    f = n(194359),
    g = n(724757),
    m = n(420660),
    b = n(326255),
    _ = n(956221),
    E = n(747017),
    O = n(297781),
    N = n(82295),
    v = n(554300),
    y = n(558602),
    I = n(567409),
    C = n(373662),
    S = n(850020),
    T = n(814443),
    P = n(518950),
    j = n(184301),
    A = n(347475),
    Z = n(199902),
    x = n(158776),
    w = n(699516),
    L = n(885110),
    R = n(594174),
    D = n(979651),
    k = n(151459),
    M = n(981631),
    U = n(388032),
    G = n(883709);
function W(e) {
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
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let H = u.EFr.SIZE_32,
    F = {
        INCOMING: 0,
        SAME_ACTIVITY: 1,
        ACTIVITIES: 2,
        SUGGESTIONS: 3,
        ONLINE: 4,
        OFFLINE: 5
    },
    z = [O.OV, O.wO, O.f, O.v1, O.pQ],
    Y = i.memo((e) => {
        let { user: t, activities: l = [], gameProfileEntry: o, index: a, closeParentPopout: h, isSuggestion: g, isIncomingRequest: N = !1 } = e,
            {
                avatarDecorationSrc: I,
                avatarSrc: T,
                eventHandlers: L
            } = (0, P.Z)({
                user: t,
                size: H,
                animateOnHover: !0,
                guildId: null
            }),
            R = (0, s.JA)(''.concat(a)),
            [D, k] = i.useState(!1),
            { voiceChannel: B } = (0, _.Z)({
                userId: t.id,
                surface: 'friends-popout'
            }),
            F = (0, c.e7)([w.Z], () => w.Z.getRelationshipType(t.id)),
            Y = (0, S.K)({
                location: 'friends-popout',
                user: t
            }),
            {
                status: K,
                applicationStream: q,
                isMobile: Q,
                newStatus: X
            } = (0, c.cj)(
                [x.Z, Z.Z],
                () => {
                    let e = x.Z.getStatus(t.id),
                        n = Z.Z.getAnyStreamForUser(t.id),
                        r = x.Z.isMobileOnline(t.id),
                        i = (0, m.Z)(l) ? M.Skl.STREAMING : e;
                    return {
                        status: e,
                        applicationStream: n,
                        isMobile: r,
                        newStatus: i
                    };
                },
                [t.id, l]
            ),
            J = i.useCallback(() => {
                k(!0);
            }, []),
            $ = i.useCallback(() => {
                k(!1);
            }, []),
            ee = i.useCallback(() => {
                if (null != o) {
                    let e = o.traits,
                        t = V(W({}, o), { traits: e.slice(0, 3) });
                    return (0, r.jsx)(O.Gk, {
                        location: O.Gt.FRIENDS_POPOUT,
                        className: G.badgesContainer,
                        children: z.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                    });
                }
                if (
                    !(0, b.Z)({
                        activities: l,
                        status: K,
                        applicationStream: q,
                        voiceChannel: B
                    })
                )
                    return null;
                let e = !(0, y.Z)({
                    activity:
                        null == l
                            ? void 0
                            : l.find((e) => {
                                  let { type: t } = e;
                                  return t === M.IIU.CUSTOM_STATUS;
                              }),
                    user: t
                });
                return (0, r.jsx)(E.Z, {
                    user: t,
                    activities: l,
                    applicationStream: q,
                    voiceChannel: B,
                    animate: !1,
                    hideEmoji: e,
                    hasQuest: !1,
                    textClassName: G.activityText
                });
            }, [t, l, K, q, B, o]),
            et = i.useCallback(
                (e) => {
                    (0, p.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('36463')]).then(n.bind(n, 881351));
                        return (n) => (0, r.jsx)(e, V(W({}, n), { user: t }));
                    });
                },
                [t]
            ),
            en = i.useCallback(() => (0, j.Z)(t), [t]),
            er = i.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), d.Z.openPrivateChannel(t.id), null != h && h();
                },
                [t.id, h]
            ),
            ei = i.useCallback(
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
            el = i.useCallback((e) => (0, r.jsx)(A.Z, V(W({}, e), { userId: t.id })), [t.id]),
            eo = () =>
                N || F === M.OGo.PENDING_INCOMING
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(C.sF, {
                                  label: U.NW.string(U.t.MMlhsr),
                                  icon: u.dz2,
                                  onClick: (e) => {
                                      e.preventDefault(),
                                          e.stopPropagation(),
                                          f.Z.addRelationship({
                                              userId: t.id,
                                              context: { location: 'friends-popout' }
                                          });
                                  }
                              }),
                              (0, r.jsx)(C.sF, {
                                  label: U.NW.string(U.t.ytCpKi),
                                  icon: u.Dio,
                                  onClick: (e) => {
                                      e.preventDefault(), e.stopPropagation(), f.Z.removeRelationship(t.id, { location: 'friends-popout' });
                                  }
                              })
                          ]
                      })
                    : g
                      ? F === M.OGo.PENDING_OUTGOING
                          ? (0, r.jsx)(C.sF, {
                                label: U.NW.string(U.t['bTfA//']),
                                icon: u.iHX,
                                onClick: (e) => {
                                    e.preventDefault(), e.stopPropagation(), f.Z.cancelFriendRequest(t.id, { location: 'friends-popout' });
                                }
                            })
                          : (0, r.jsx)(C.sF, {
                                label: U.NW.string(U.t.w5uwoK),
                                icon: u.oLu,
                                onClick: ei
                            })
                      : null;
        return (0, r.jsx)(u.yRy, {
            position: 'left',
            spacing: 16,
            preload: en,
            renderPopout: el,
            children: (e, n) => {
                var i;
                let { isShown: l } = n;
                return (0, r.jsxs)('div', {
                    className: G.row,
                    children: [
                        (0, r.jsx)(
                            v.Z,
                            W(
                                {
                                    innerClassName: G.rowInner,
                                    onContextMenu: et,
                                    onMouseEnter: J,
                                    onMouseLeave: $,
                                    avatar: (0, r.jsx)(
                                        u.qEK,
                                        V(W({}, L), {
                                            size: H,
                                            src: T,
                                            isMobile: Q,
                                            isTyping: !1,
                                            status: X,
                                            className: G.avatar,
                                            'aria-label': t.username,
                                            statusTooltip: !0,
                                            avatarDecoration: I
                                        })
                                    ),
                                    name: (0, r.jsx)('span', {
                                        className: G.username,
                                        children: null !== (i = t.globalName) && void 0 !== i ? i : t.username
                                    }),
                                    subText: ee(),
                                    selected: l,
                                    nameplate: Y,
                                    hovered: D
                                },
                                e,
                                R
                            )
                        ),
                        (0, r.jsxs)(C.ZP, {
                            className: G.hoverBar,
                            children: [
                                !N &&
                                    (0, r.jsx)(C.sF, {
                                        label: U.NW.string(U.t['g33r/P']),
                                        icon: u.kBi,
                                        onClick: er
                                    }),
                                eo(),
                                (0, r.jsx)(C.sF, {
                                    label: U.NW.string(U.t.UKOtz8),
                                    icon: u.xhG,
                                    onClick: et
                                })
                            ]
                        })
                    ]
                });
            }
        });
    });
Y.displayName = 'FriendRow';
let K = () =>
        (0, c.e7)([w.Z, R.default, x.Z], () => {
            let e = w.Z.getRelationships(),
                t = [];
            for (let [n, r] of Object.entries(e)) {
                if (r !== M.OGo.PENDING_INCOMING) continue;
                let e = R.default.getUser(n);
                if (null != e) {
                    let r = w.Z.getSince(n),
                        i = null != r ? new Date(r).getTime() : 0;
                    t.push({
                        user: e,
                        activities: x.Z.getActivities(n),
                        timestamp: i
                    });
                }
            }
            return t.sort((e, t) => t.timestamp - e.timestamp), t;
        }),
    q = () =>
        (0, c.e7)([T.Z, R.default, x.Z, w.Z, D.Z], () => {
            let e = T.Z.getUserAffinitiesMap(),
                t = [];
            for (let [n, r] of e.entries()) {
                if (w.Z.isFriend(n) || r.affinity <= 10) continue;
                let e = R.default.getUser(n);
                if (null != e) {
                    let i = x.Z.getActivities(n),
                        l = D.Z.getVoiceStateForUser(n),
                        o = (null == l ? void 0 : l.channelId) != null;
                    (i.length > 0 || o) &&
                        t.push({
                            user: e,
                            activities: i,
                            affinity: r.affinity
                        });
                }
            }
            return t.sort((e, t) => t.affinity - e.affinity);
        }),
    Q = () => {
        let e = (0, c.e7)([L.Z], () => L.Z.getPrimaryActivity()),
            t = null == e ? void 0 : e.application_id,
            n = (0, I.Ns)(t);
        return (0, c.e7)(
            [w.Z, R.default, x.Z, D.Z],
            () => {
                let r = (null == e ? void 0 : e.name) != null && null != t,
                    i = {
                        activities: [],
                        sameActivity: [],
                        online: [],
                        offline: []
                    },
                    l = new Map();
                for (let e of (r &&
                    null != t &&
                    null != n &&
                    n.length > 0 &&
                    n.forEach((e) => {
                        let t = e.author_id;
                        if (!w.Z.isFriend(t)) return;
                        let n = R.default.getUser(t);
                        null != n &&
                            l.set(t, {
                                user: n,
                                activities: [],
                                gameProfileEntry: e
                            });
                    }),
                w.Z.getFriendIDs())) {
                    let n = R.default.getUser(e);
                    if (null == n) continue;
                    let o = x.Z.getStatus(e),
                        a = x.Z.getActivities(e),
                        s = D.Z.getVoiceStateForUser(e),
                        c = (null == s ? void 0 : s.channelId) != null,
                        u = a.filter((e) => e.type === M.IIU.PLAYING || e.type === M.IIU.LISTENING || e.type === M.IIU.WATCHING || e.type === M.IIU.STREAMING),
                        d = u.filter((e) => e.application_id === t);
                    r && d.length > 0
                        ? (i.sameActivity.push({
                              user: n,
                              activities: d
                          }),
                          l.delete(e))
                        : u.length > 0
                          ? i.activities.push({
                                user: n,
                                activities: u
                            })
                          : c
                            ? i.activities.push({
                                  user: n,
                                  activities: a
                              })
                            : o === M.Skl.ONLINE || o === M.Skl.IDLE || o === M.Skl.DND
                              ? i.online.push({
                                    user: n,
                                    activities: a
                                })
                              : i.offline.push({
                                    user: n,
                                    activities: a
                                });
                }
                let o = (e, t) => {
                    var n, r;
                    let i = (null !== (n = e.user.globalName) && void 0 !== n ? n : e.user.username).toLowerCase(),
                        l = (null !== (r = t.user.globalName) && void 0 !== r ? r : t.user.username).toLowerCase();
                    return i.localeCompare(l);
                };
                if ((i.sameActivity.sort(o), l.size > 0)) {
                    let e = Array.from(l.values()).sort(o);
                    i.sameActivity.push(...e);
                }
                return i.activities.sort(o), i.online.sort(o), i.offline.sort(o), i;
            },
            [n, e, t]
        );
    },
    X = () => {
        let e = K(),
            t = q(),
            n = Q(),
            r = (0, c.e7)([L.Z], () => L.Z.getPrimaryActivity());
        return i.useMemo(() => {
            var i;
            return {
                incoming: e,
                suggestions: t,
                activities: n.activities,
                sameActivity: n.sameActivity,
                online: n.online,
                offline: n.offline,
                currentActivityName: null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : ''
            };
        }, [e, t, n, r]);
    },
    J = (e) => {
        let [t, n] = i.useState(''),
            r = i.useCallback(
                (e) => {
                    if (0 === t.length) return e;
                    let n = t.toLowerCase();
                    return e.filter((e) => {
                        let { user: t, activities: r } = e;
                        return !!(o()(n, t.username.toLowerCase()) || (null != t.globalName && o()(n, t.globalName.toLowerCase()))) || (null == r ? void 0 : r.some((e) => null != e.name && o()(n, e.name.toLowerCase())));
                    });
                },
                [t]
            ),
            l = i.useMemo(
                () => ({
                    incoming: r(e.incoming),
                    suggestions: r(e.suggestions),
                    activities: r(e.activities),
                    sameActivity: r(e.sameActivity),
                    online: r(e.online),
                    offline: r(e.offline)
                }),
                [e, r]
            ),
            a = i.useCallback(() => n(''), []);
        return V(W({}, l), {
            searchQuery: t,
            setSearchQuery: n,
            handleSearchClear: a
        });
    };
function $(e) {
    let { onOpen: t, onClose: l, children: o, popoutPosition: c, popoutAlign: d } = e,
        [f, m] = i.useState(!1),
        [b, _] = i.useState([F.SUGGESTIONS, F.INCOMING]),
        E = i.useRef(null),
        O = (0, g.Z)('friends-popout', E),
        v = (0, a.k6)(),
        y = X(),
        I = J(y),
        { searchQuery: C, setSearchQuery: S, handleSearchClear: T } = I,
        P = B(I, ['searchQuery', 'setSearchQuery', 'handleSearchClear']),
        j = i.useCallback(() => {
            m(!1), null == l || l();
        }, [l]),
        A = i.useCallback(() => {
            m((e) => {
                let n = !e;
                return n ? null == t || t() : null == l || l(), n;
            });
        }, [l, t]),
        Z = i.useCallback((e) => {
            _((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
        }, []),
        x = i.useCallback(
            (e) => {
                (0, p.jW)(e, async () => {
                    let { default: e } = await n.e('23087').then(n.bind(n, 29131));
                    return (t) => (0, r.jsx)(e, V(W({}, t), { onClose: j }));
                });
            },
            [j]
        ),
        w = i.useCallback(
            (e) => {
                let { section: t } = e,
                    n = '',
                    i = 0;
                switch (t) {
                    case F.INCOMING:
                        (n = U.NW.string(U.t.fyA119)), (i = P.incoming.length);
                        break;
                    case F.SAME_ACTIVITY:
                        (n = y.currentActivityName), (i = P.sameActivity.length);
                        break;
                    case F.SUGGESTIONS:
                        (n = U.NW.string(U.t.qm9dSk)), (i = P.suggestions.length);
                        break;
                    case F.ACTIVITIES:
                        (n = U.NW.string(U.t.TxqPQU)), (i = P.activities.length);
                        break;
                    case F.ONLINE:
                        (n = U.NW.string(U.t.WbGtnJ)), (i = P.online.length);
                        break;
                    case F.OFFLINE:
                        (n = U.NW.string(U.t.Vv0abG)), (i = P.offline.length);
                }
                let l = (t === F.SUGGESTIONS || t === F.INCOMING) && i > 3,
                    o = b.includes(t);
                return (0, r.jsxs)(N.Z, {
                    className: G.section,
                    children: [
                        (0, r.jsx)(u.nn4, {
                            children: U.NW.format(U.t.UaqbkZ, {
                                title: n,
                                count: i
                            })
                        }),
                        (0, r.jsxs)(u.P3F, {
                            onClick: () => l && Z(t),
                            'aria-hidden': !0,
                            className: l ? G.sectionCollapsible : void 0,
                            children: [
                                n,
                                ' \u2014 ',
                                i,
                                l
                                    ? o
                                        ? (0, r.jsx)(u.Fbu, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: G.chevronIcon
                                          })
                                        : (0, r.jsx)(u.CJ0, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: G.chevronIcon
                                          })
                                    : null
                            ]
                        })
                    ]
                });
            },
            [y.currentActivityName, P.incoming.length, P.sameActivity.length, P.suggestions.length, P.activities.length, P.online.length, P.offline.length, b, Z]
        ),
        L = i.useCallback(
            (e) => {
                let t;
                let n = !1;
                return (e.section === F.INCOMING ? ((t = P.incoming[e.row]), (n = !0)) : (t = e.section === F.SAME_ACTIVITY ? P.sameActivity[e.row] : e.section === F.SUGGESTIONS ? P.suggestions[e.row] : e.section === F.ACTIVITIES ? P.activities[e.row] : e.section === F.ONLINE ? P.online[e.row] : P.offline[e.row]), null == t || null == t.user)
                    ? null
                    : (0, r.jsx)(
                          Y,
                          V(W({}, t), {
                              index: e.row,
                              closeParentPopout: j,
                              isSuggestion: e.section === F.SUGGESTIONS || n,
                              isIncomingRequest: n
                          }),
                          t.user.id
                      );
            },
            [P, j]
        ),
        { showSuggestions: R } = (0, k.Z)(),
        D = i.useMemo(() => {
            let e = R ? (b.includes(F.SUGGESTIONS) ? Math.min(3, P.suggestions.length) : P.suggestions.length) : 0;
            return [b.includes(F.INCOMING) ? Math.min(3, P.incoming.length) : P.incoming.length, P.sameActivity.length, P.activities.length, e, P.online.length, P.offline.length];
        }, [P, b, R]),
        H = i.useCallback(
            (e) => {
                let {} = e,
                    t = Object.values(P).every((e) => 0 === e.length);
                return (0, r.jsxs)(u.VqE, {
                    className: G.container,
                    children: [
                        (0, r.jsxs)('div', {
                            className: G.header,
                            children: [
                                (0, r.jsx)(u.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: U.NW.string(U.t.TdEu5e)
                                }),
                                (0, r.jsxs)('div', {
                                    className: G.controlButtons,
                                    children: [
                                        (0, r.jsx)(u.M0o, {
                                            tooltip: U.NW.string(U.t.w5uwoK),
                                            color: u.YX$.TERTIARY,
                                            icon: (0, r.jsx)(u.oLu, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            className: G.controlButton,
                                            onClick: () => {
                                                h.Z.setSection(M.pJs.ADD_FRIEND), v.push(M.Z5c.FRIENDS), j();
                                            }
                                        }),
                                        (0, r.jsx)(u.M0o, {
                                            tooltip: U.NW.string(U.t['3D5yo6']),
                                            color: u.YX$.TERTIARY,
                                            icon: (0, r.jsx)(u.xhG, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            className: G.controlButton,
                                            onClick: x
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: G.searchContainer,
                            children: (0, r.jsx)(u.E1j, {
                                query: C,
                                onChange: S,
                                onClear: T,
                                placeholder: U.NW.string(U.t['5h0QOD']),
                                size: u.E1j.Sizes.MEDIUM,
                                autoFocus: !0
                            })
                        }),
                        t
                            ? (0, r.jsx)('div', {
                                  className: G.emptyStateContainer,
                                  children: (0, r.jsx)(u.Text, {
                                      variant: 'text-md/normal',
                                      color: 'text-muted',
                                      children: U.NW.string(U.t['7sW4h4'])
                                  })
                              })
                            : (0, r.jsx)(s.bG, {
                                  navigator: O,
                                  children: (0, r.jsx)(s.SJ, {
                                      children: (e) => {
                                          var { ref: t, role: n } = e,
                                              i = B(e, ['ref', 'role']);
                                          return (0, r.jsx)(u.Wdt, {
                                              children: (e) =>
                                                  (0, r.jsx)(
                                                      u.aVo,
                                                      W(
                                                          {
                                                              innerRole: n,
                                                              innerAriaLabel: U.NW.string(U.t.TdEu5e),
                                                              ref: (e) => {
                                                                  var n;
                                                                  (E.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                                                              },
                                                              className: G.list,
                                                              sectionHeight: 40,
                                                              rowHeight: 42,
                                                              sidebarHeight: 0,
                                                              renderSection: w,
                                                              renderRow: L,
                                                              sections: D,
                                                              paddingTop: 0,
                                                              paddingBottom: 0
                                                          },
                                                          i,
                                                          e
                                                      )
                                                  )
                                          });
                                      }
                                  })
                              })
                    ]
                });
            },
            [C, S, T, O, w, L, D, v, j, P, x]
        );
    return (0, r.jsx)(u.yRy, {
        animation: u.yRy.Animation.NONE,
        position: c,
        align: d,
        autoInvert: !1,
        shouldShow: f,
        onRequestClose: j,
        renderPopout: H,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return o(A, n, e);
        }
    });
}

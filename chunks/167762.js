n.d(t, { O: () => X }), n(47120), n(653041), n(230036);
var r = n(200651),
    i = n(192379),
    l = n(658722),
    a = n.n(l),
    o = n(512969),
    s = n(91192),
    c = n(442837),
    u = n(481060),
    d = n(493683),
    p = n(239091),
    h = n(529103),
    f = n(194359),
    g = n(724757),
    m = n(420660),
    b = n(297369),
    _ = n(956221),
    E = n(771173),
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
    D = n(981631),
    k = n(388032),
    M = n(883709);
function U(e) {
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
function G(e, t) {
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
function W(e, t) {
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
let V = u.EFr.SIZE_32,
    B = {
        INCOMING: 0,
        SAME_ACTIVITY: 1,
        ACTIVITIES: 2,
        SUGGESTIONS: 3,
        ONLINE: 4,
        OFFLINE: 5
    },
    H = [O.OV, O.wO, O.f, O.v1, O.pQ],
    F = i.memo((e) => {
        let { user: t, activities: l = [], gameProfileEntry: a, index: o, closeParentPopout: h, isSuggestion: g, isIncomingRequest: N = !1 } = e,
            {
                avatarDecorationSrc: I,
                avatarSrc: T,
                eventHandlers: L
            } = (0, P.Z)({
                user: t,
                size: V,
                animateOnHover: !0,
                guildId: null
            }),
            R = (0, s.JA)(''.concat(o)),
            [W, B] = i.useState(!1),
            { voiceChannel: F } = (0, _.Z)({
                userId: t.id,
                surface: 'friends-popout'
            }),
            z = (0, c.e7)([w.Z], () => w.Z.getRelationshipType(t.id)),
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
                        i = (0, m.Z)(l) ? D.Skl.STREAMING : e;
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
                B(!0);
            }, []),
            $ = i.useCallback(() => {
                B(!1);
            }, []),
            ee = i.useCallback(() => {
                if (null != a) {
                    let e = a.traits,
                        t = G(U({}, a), { traits: e.slice(0, 3) });
                    return (0, r.jsx)(O.Gk, {
                        location: O.Gt.FRIENDS_POPOUT,
                        className: M.badgesContainer,
                        children: H.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                    });
                }
                if (
                    !(0, b.Z)({
                        activities: l,
                        status: K,
                        applicationStream: q,
                        voiceChannel: F
                    })
                )
                    return null;
                let e = !(0, y.Z)({
                    activity:
                        null == l
                            ? void 0
                            : l.find((e) => {
                                  let { type: t } = e;
                                  return t === D.IIU.CUSTOM_STATUS;
                              }),
                    user: t
                });
                return (0, r.jsx)(E.Z, {
                    location: 'MemberListItem',
                    user: t,
                    activities: l,
                    applicationStream: q,
                    voiceChannel: F,
                    animate: !1,
                    hideEmoji: e,
                    hasQuest: !1,
                    textClassName: M.activityText
                });
            }, [t, l, K, q, F, a]),
            et = i.useCallback(
                (e) => {
                    (0, p.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('36463')]).then(n.bind(n, 881351));
                        return (n) => (0, r.jsx)(e, G(U({}, n), { user: t }));
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
            el = i.useCallback((e) => (0, r.jsx)(A.Z, G(U({}, e), { userId: t.id })), [t.id]),
            ea = () =>
                N || z === D.OGo.PENDING_INCOMING
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(C.sF, {
                                  label: k.NW.string(k.t.MMlhsr),
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
                                  label: k.NW.string(k.t.ytCpKi),
                                  icon: u.Dio,
                                  onClick: (e) => {
                                      e.preventDefault(), e.stopPropagation(), f.Z.removeRelationship(t.id, { location: 'friends-popout' });
                                  }
                              })
                          ]
                      })
                    : g
                      ? z === D.OGo.PENDING_OUTGOING
                          ? (0, r.jsx)(C.sF, {
                                label: k.NW.string(k.t['bTfA//']),
                                icon: u.iHX,
                                onClick: (e) => {
                                    e.preventDefault(), e.stopPropagation(), f.Z.cancelFriendRequest(t.id, { location: 'friends-popout' });
                                }
                            })
                          : (0, r.jsx)(C.sF, {
                                label: k.NW.string(k.t.w5uwoK),
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
                    className: M.row,
                    children: [
                        (0, r.jsx)(
                            v.Z,
                            U(
                                {
                                    innerClassName: M.rowInner,
                                    onContextMenu: et,
                                    onMouseEnter: J,
                                    onMouseLeave: $,
                                    avatar: (0, r.jsx)(
                                        u.qEK,
                                        G(U({}, L), {
                                            size: V,
                                            src: T,
                                            isMobile: Q,
                                            isTyping: !1,
                                            status: X,
                                            className: M.avatar,
                                            'aria-label': t.username,
                                            statusTooltip: !0,
                                            avatarDecoration: I
                                        })
                                    ),
                                    name: (0, r.jsx)('span', {
                                        className: M.username,
                                        children: null !== (i = t.globalName) && void 0 !== i ? i : t.username
                                    }),
                                    subText: ee(),
                                    selected: l,
                                    nameplate: Y,
                                    hovered: W
                                },
                                e,
                                R
                            )
                        ),
                        (0, r.jsxs)(C.ZP, {
                            className: M.hoverBar,
                            children: [
                                !N &&
                                    (0, r.jsx)(C.sF, {
                                        label: k.NW.string(k.t['g33r/P']),
                                        icon: u.kBi,
                                        onClick: er
                                    }),
                                ea(),
                                (0, r.jsx)(C.sF, {
                                    label: k.NW.string(k.t.UKOtz8),
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
F.displayName = 'FriendRow';
let z = () =>
        (0, c.e7)([w.Z, R.default, x.Z], () => {
            let e = w.Z.getRelationships(),
                t = [];
            for (let [n, r] of Object.entries(e)) {
                if (r !== D.OGo.PENDING_INCOMING) continue;
                let e = R.default.getUser(n);
                null != e &&
                    t.push({
                        user: e,
                        activities: x.Z.getActivities(n)
                    });
            }
            return t;
        }),
    Y = () =>
        (0, c.e7)([T.Z, R.default, x.Z, w.Z], () => {
            let e = T.Z.getUserAffinitiesMap(),
                t = [];
            for (let [n, r] of e.entries()) {
                if (w.Z.isFriend(n) || r.affinity <= 10) continue;
                let e = R.default.getUser(n);
                if (null != e) {
                    let i = x.Z.getActivities(n);
                    if (0 === i.length) continue;
                    t.push({
                        user: e,
                        activities: i,
                        affinity: r.affinity
                    });
                }
            }
            return t.sort((e, t) => t.affinity - e.affinity), t.slice(0, 5);
        }),
    K = () => {
        let e = (0, c.e7)([L.Z], () => L.Z.getPrimaryActivity()),
            t = null == e ? void 0 : e.application_id,
            n = (0, I.Ns)(t);
        return (0, c.e7)(
            [w.Z, x.Z, R.default],
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
                    let a = x.Z.getStatus(e),
                        o = x.Z.getActivities(e),
                        s = o.filter((e) => e.type === D.IIU.PLAYING || e.type === D.IIU.LISTENING || e.type === D.IIU.WATCHING || e.type === D.IIU.STREAMING),
                        c = s.filter((e) => e.application_id === t);
                    r && c.length > 0
                        ? (i.sameActivity.push({
                              user: n,
                              activities: c
                          }),
                          l.delete(e))
                        : s.length > 0
                          ? i.activities.push({
                                user: n,
                                activities: s
                            })
                          : a === D.Skl.ONLINE || a === D.Skl.IDLE || a === D.Skl.DND
                            ? i.online.push({
                                  user: n,
                                  activities: o
                              })
                            : i.offline.push({
                                  user: n,
                                  activities: o
                              });
                }
                let a = (e, t) => {
                    var n, r;
                    let i = (null !== (n = e.user.globalName) && void 0 !== n ? n : e.user.username).toLowerCase(),
                        l = (null !== (r = t.user.globalName) && void 0 !== r ? r : t.user.username).toLowerCase();
                    return i.localeCompare(l);
                };
                if ((i.sameActivity.sort(a), l.size > 0)) {
                    let e = Array.from(l.values()).sort(a);
                    i.sameActivity.push(...e);
                }
                return i.activities.sort(a), i.online.sort(a), i.offline.sort(a), i;
            },
            [n, e, t]
        );
    },
    q = () => {
        let e = z(),
            t = Y(),
            n = K(),
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
    Q = (e) => {
        let [t, n] = i.useState(''),
            r = i.useCallback(
                (e) => {
                    if (0 === t.length) return e;
                    let n = t.toLowerCase();
                    return e.filter((e) => {
                        let { user: t, activities: r } = e;
                        return !!(a()(n, t.username.toLowerCase()) || (null != t.globalName && a()(n, t.globalName.toLowerCase()))) || (null == r ? void 0 : r.some((e) => null != e.name && a()(n, e.name.toLowerCase())));
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
            o = i.useCallback(() => n(''), []);
        return G(U({}, l), {
            searchQuery: t,
            setSearchQuery: n,
            handleSearchClear: o
        });
    };
function X(e) {
    let { onOpen: t, onClose: n, children: l, popoutPosition: a, popoutAlign: c } = e,
        [d, p] = i.useState(!1),
        f = i.useRef(null),
        m = (0, g.Z)('friends-popout', f),
        b = (0, o.k6)(),
        _ = q(),
        E = Q(_),
        { searchQuery: O, setSearchQuery: v, handleSearchClear: y } = E,
        I = W(E, ['searchQuery', 'setSearchQuery', 'handleSearchClear']),
        C = i.useCallback(() => {
            p(!1), null == n || n();
        }, [n]),
        S = i.useCallback(() => {
            p((e) => {
                let r = !e;
                return r ? null == t || t() : null == n || n(), r;
            });
        }, [n, t]),
        T = i.useCallback(
            (e) => {
                let { section: t } = e,
                    n = '';
                switch (t) {
                    case B.INCOMING:
                        n = k.NW.string(k.t.fyA119);
                        break;
                    case B.SAME_ACTIVITY:
                        n = _.currentActivityName;
                        break;
                    case B.SUGGESTIONS:
                        n = k.NW.string(k.t.qm9dSk);
                        break;
                    case B.ACTIVITIES:
                        n = k.NW.string(k.t.IC5Anp);
                        break;
                    case B.ONLINE:
                        n = k.NW.formatToPlainString(k.t.BagU2d, { online: I.online.length });
                        break;
                    case B.OFFLINE:
                        n = k.NW.formatToPlainString(k.t.QLzahI, { offline: I.offline.length });
                }
                return (0, r.jsxs)(N.Z, {
                    className: M.section,
                    children: [
                        (0, r.jsx)(u.nn4, { children: n }),
                        (0, r.jsx)('span', {
                            'aria-hidden': !0,
                            children: n
                        })
                    ]
                });
            },
            [_.currentActivityName, I.online.length, I.offline.length]
        ),
        P = i.useCallback(
            (e) => {
                let t;
                let n = !1;
                return (e.section === B.INCOMING ? ((t = I.incoming[e.row]), (n = !0)) : (t = e.section === B.SAME_ACTIVITY ? I.sameActivity[e.row] : e.section === B.SUGGESTIONS ? I.suggestions[e.row] : e.section === B.ACTIVITIES ? I.activities[e.row] : e.section === B.ONLINE ? I.online[e.row] : I.offline[e.row]), null == t || null == t.user)
                    ? null
                    : (0, r.jsx)(
                          F,
                          G(U({}, t), {
                              index: e.row,
                              closeParentPopout: C,
                              isSuggestion: e.section === B.SUGGESTIONS || n,
                              isIncomingRequest: n
                          }),
                          t.user.id
                      );
            },
            [I, C]
        ),
        j = i.useMemo(() => [I.incoming.length, I.sameActivity.length, I.activities.length, I.suggestions.length, I.online.length, I.offline.length], [I]),
        A = i.useCallback(
            (e) => {
                let {} = e,
                    t = Object.values(I).every((e) => 0 === e.length);
                return (0, r.jsxs)(u.VqE, {
                    className: M.container,
                    children: [
                        (0, r.jsxs)('div', {
                            className: M.header,
                            children: [
                                (0, r.jsx)(u.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: k.NW.string(k.t.TdEu5e)
                                }),
                                (0, r.jsx)(u.M0o, {
                                    tooltip: k.NW.string(k.t.w5uwoK),
                                    color: u.YX$.TERTIARY,
                                    icon: (0, r.jsx)(u.oLu, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    className: M.controlButton,
                                    onClick: () => {
                                        h.Z.setSection(D.pJs.ADD_FRIEND), b.push(D.Z5c.FRIENDS), C();
                                    }
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: M.searchContainer,
                            children: (0, r.jsx)(u.E1j, {
                                query: O,
                                onChange: v,
                                onClear: y,
                                placeholder: k.NW.string(k.t['5h0QOD']),
                                size: u.E1j.Sizes.MEDIUM,
                                autoFocus: !0
                            })
                        }),
                        t
                            ? (0, r.jsx)('div', {
                                  className: M.emptyStateContainer,
                                  children: (0, r.jsx)(u.Text, {
                                      variant: 'text-md/normal',
                                      color: 'text-muted',
                                      children: k.NW.string(k.t['7sW4h4'])
                                  })
                              })
                            : (0, r.jsx)(s.bG, {
                                  navigator: m,
                                  children: (0, r.jsx)(s.SJ, {
                                      children: (e) => {
                                          var { ref: t, role: n } = e,
                                              i = W(e, ['ref', 'role']);
                                          return (0, r.jsx)(u.Wdt, {
                                              children: (e) =>
                                                  (0, r.jsx)(
                                                      u.aVo,
                                                      U(
                                                          {
                                                              innerRole: n,
                                                              innerAriaLabel: k.NW.string(k.t.TdEu5e),
                                                              ref: (e) => {
                                                                  var n;
                                                                  (f.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                                                              },
                                                              className: M.list,
                                                              sectionHeight: 40,
                                                              rowHeight: 42,
                                                              sidebarHeight: 0,
                                                              renderSection: T,
                                                              renderRow: P,
                                                              sections: j,
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
            [O, v, y, m, T, P, j, b, C, I]
        );
    return (0, r.jsx)(u.yRy, {
        animation: u.yRy.Animation.NONE,
        position: a,
        align: c,
        autoInvert: !1,
        shouldShow: d,
        onRequestClose: C,
        renderPopout: A,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return l(S, n, e);
        }
    });
}

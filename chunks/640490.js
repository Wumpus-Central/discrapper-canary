n.d(t, {
    F: () => K,
}),
    n(638769),
    n(896048),
    n(733351),
    n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(735438),
    o = n(837381),
    u = n(311907),
    c = n(435371),
    d = n(397927),
    h = n(803306),
    p = n(928039),
    f = n(485947),
    g = n(545059),
    m = n(290863),
    y = n(994500),
    A = n(287809),
    v = n(256415),
    b = n(996439),
    E = n(810412),
    O = n(914853),
    x = n(483392),
    _ = n(236884),
    S = n(542080),
    I = n(67103),
    j = n(406595),
    T = n(535973),
    C = n(125117),
    N = n(876891),
    w = n(652215),
    P = n(895867),
    D = n(985018),
    R = n(488494),
    k = n(416001);

function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function L(e, t) {
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

function U(e, t) {
    if (null == e) return {};
    var n,
        i,
        r,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
            (i = n[r]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                l = Object.getOwnPropertyNames(e);
            for (i = 0; i < l.length; i++)
                (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            (i = n[r]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l;
}

function G(e) {
    let { isCollapsed: t } = e;
    return (0, i.jsx)(x.C, {
        isCollapsed: t,
        size: "md",
        className: k.t4,
    });
}

function V(e) {
    let {
            groupId: t,
            groupName: n,
            displayText: r,
            isCollapsed: l,
            canCollapse: s,
            onToggle: o,
            isReorderDisabled: u,
            draggedGroupId: c,
            dropTargetGroupId: h,
            dropTargetPosition: p,
            getDragHandleProps: g,
        } = e,
        m = !u,
        y = null != c && c === t,
        A = null != h && h === t,
        v = A && p === T.I.BEFORE,
        b = A && p === T.I.AFTER,
        E = (0, N.mM)({
            groupId: t,
            groupName: n,
        });
    return (0, i.jsx)(f.A, {
        className: a()(k.uW, {
            [R.EU]: m,
            [R.Me]: y,
            [R.hV]: A,
            [R.nH]: v,
            [R._M]: b,
        }),
        children: (0, i.jsx)(
            "div",
            L(M({}, g(t, m)), {
                onContextMenu: E,
                children: (0, i.jsxs)(d.DUT, {
                    onClick: () => s && o(),
                    "aria-hidden": !0,
                    className: s ? k.Ws : void 0,
                    children: [
                        r,
                        s
                            ? (0, i.jsx)(G, {
                                  isCollapsed: l,
                              })
                            : null,
                    ],
                }),
            }),
        ),
    });
}

function z(e) {
    let { displayText: t, isCollapsed: n, canCollapse: r, onToggle: l, rightAccessory: a } = e;
    return (0, i.jsx)(f.A, {
        className: k.uW,
        children: (0, i.jsxs)("div", {
            className: k.bV,
            children: [
                (0, i.jsxs)(d.DUT, {
                    onClick: () => r && l(),
                    "aria-hidden": !0,
                    className: r ? k.Ws : void 0,
                    children: [
                        t,
                        r
                            ? (0, i.jsx)(G, {
                                  isCollapsed: n,
                              })
                            : null,
                    ],
                }),
                a,
            ],
        }),
    });
}

function F(e) {
    return Array.from(e).sort();
}
let H = (0, s.throttle)(
    (e) => {
        (0, E.Y)(w.uss.FRIENDS, {
            locked: v.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    {
        leading: !0,
        trailing: !1,
    },
);

function Y() {}

function K(e) {
    let { onAction: t, onFriendVisible: n } = e,
        [l, a] = r.useState(new Set()),
        [f, v] = r.useState(new Set()),
        x = r.useCallback(
            (e, t, i) => {
                a((n) => {
                    if (t) {
                        if (n.has(e)) return n;
                        n.add(e);
                    } else {
                        if (!n.has(e)) return n;
                        n.delete(e);
                    }
                    return new Set(n);
                }),
                    v((n) => {
                        if (i && t) {
                            if (n.has(e)) return n;
                            n.add(e);
                        } else {
                            if (!n.has(e)) return n;
                            n.delete(e);
                        }
                        return new Set(n);
                    }),
                    null == n || n(e, t, i);
            },
            [n],
        ),
        N = (0, E.Dk)(() => l, [l]),
        R = (0, E.Dk)(() => f, [f]);
    r.useEffect(() => {
        0 !== N.size &&
            H({
                shownUserIds: F(N),
                liveUserIds: F(R),
            });
    }, [N, R]);
    let G = (0, C.b)(),
        K = (0, C.n)(G),
        { searchQuery: W, setSearchQuery: B, clearSearch: Z } = K,
        X = U(K, ["searchQuery", "setSearchQuery", "clearSearch"]),
        { showSuggestions: J, setShowSuggestions: Q } = (0, S.A)(),
        q = W.trim().length > 0,
        $ = r.useMemo(() => X.groups.filter((e) => e.users.length > 0), [X.groups]),
        ee = r.useMemo(() => G.groups.map((e) => e.id), [G.groups]),
        {
            draggedGroupId: et,
            dropTargetGroupId: en,
            dropTargetPosition: ei,
            getDragHandleProps: er,
        } = (0, T.s)({
            groupIds: ee,
            isDisabled: q,
            onCommitNewOrder: g.A.reorderGroups,
        }),
        [el, ea] = (0, u.bG)([j.A], () => j.A.getFavoriteTargetIdsForTab(O.x.FRIENDS), [], b.D),
        es = (0, u.bG)([A.default, m.A, y.A], () => {
            let e = [];
            for (let t of el) {
                let n = A.default.getUser(t);
                null != n &&
                    e.push({
                        user: n,
                        activities: m.A.getActivities(t),
                        nickname: y.A.getNickname(t),
                    });
            }
            return e;
        }, [el]),
        eo = r.useRef(new Set());
    r.useEffect(() => {
        for (let e of el)
            null == A.default.getUser(e) &&
                (eo.current.has(e) ||
                    (eo.current.add(e),
                    (0, h.wz)(e).catch(() => {
                        eo.current.delete(e);
                    })));
    }, [el]);
    let eu = r.useMemo(() => {
            let e = W.trim().toLowerCase();
            return "" === e
                ? es
                : es.filter((t) => {
                      let { user: n, activities: i, nickname: r } = t;
                      return [n.username, n.globalName, r, ...i.map((e) => e.name)]
                          .filter((e) => null != e && "" !== e.trim())
                          .some((t) => t.toLowerCase().includes(e));
                  });
        }, [es, W]),
        ec = ea > 0 && eu.length > 0,
        ed =
            !ec &&
            0 === $.length &&
            0 === X.friendRequests.length &&
            (!J || 0 === X.suggestions.length) &&
            0 === X.sameActivity.length &&
            0 === X.inGame.length &&
            0 === X.activities.length &&
            0 === X.online.length &&
            0 === X.offline.length,
        [eh, ep] = r.useState(["FRIEND_REQUESTS", "OFFLINE"]),
        ef = r.useRef(null),
        eg = (0, p.A)("friends-popout", ef),
        em = r.useCallback((e) => {
            ep((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
        }, []),
        ey = r.useCallback(
            (e) => {
                e.stopPropagation(), Q(!1);
            },
            [Q],
        ),
        eA = r.useCallback(
            (0, s.debounce)(
                () => {
                    null == t || t(I.x.SEARCH_FRIENDS);
                },
                1e3,
                {
                    leading: !0,
                    trailing: !1,
                },
            ),
            [t],
        ),
        ev = r.useCallback(
            (e) => {
                var t;
                B(e), eA(), null == (t = ef.current) || t.scrollToTop();
            },
            [B, eA],
        ),
        eb = r.useCallback(() => {
            var e;
            Z(), eA(), null == (e = ef.current) || e.scrollToTop();
        }, [Z, eA]),
        eE = r.useMemo(() => {
            let e = (e) => eh.includes(e),
                t = (e) => {
                    let t = m.A.getStatus(e);
                    return t !== w.clD.ONLINE && t !== w.clD.IDLE && t !== w.clD.DND;
                };
            if (ed)
                return [
                    {
                        kind: "EMPTY_STATE",
                        key: "EMPTY_STATE",
                        title: "",
                        count: 0,
                        length: 1,
                        rows: [],
                    },
                ];
            let n = [];
            if (ec) {
                let i = e("FAVORITES") ? eu.filter((e) => !t(e.user.id)) : eu;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: D.intl.string(P.default.GKTlS6),
                    count: eu.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (X.friendRequests.length > 0) {
                let t = X.friendRequests,
                    i = e("FRIEND_REQUESTS") ? [] : t;
                n.push({
                    kind: "FRIEND_REQUESTS",
                    key: "FRIEND_REQUESTS",
                    title: D.intl.formatToPlainString(D.t.xxFCW8, {
                        count: t.length,
                    }),
                    count: t.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            for (let i of $) {
                let r = "GROUP:".concat(i.id),
                    l = i.users,
                    a = e(r) ? l.filter((e) => !t(e.user.id)) : l;
                n.push({
                    kind: "GROUP",
                    key: r,
                    title: i.name,
                    count: l.length,
                    rows: a,
                    length: Math.max(a.length, 1),
                    group: i,
                });
            }
            if (X.sameActivity.length > 0) {
                let t = X.sameActivity,
                    i = e("SAME_ACTIVITY") ? [] : t;
                n.push({
                    kind: "SAME_ACTIVITY",
                    key: "SAME_ACTIVITY",
                    title: G.currentActivityName,
                    count: t.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (X.inGame.length > 0) {
                let t = X.inGame,
                    i = e("IN_GAME") ? [] : t;
                n.push({
                    kind: "IN_GAME",
                    key: "IN_GAME",
                    title: D.intl.string(P.default.trKJoT),
                    count: t.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (X.activities.length > 0) {
                let t = X.activities,
                    i = e("ACTIVITIES") ? [] : t;
                n.push({
                    kind: "ACTIVITIES",
                    key: "ACTIVITIES",
                    title: D.intl.string(D.t.TxqPQR),
                    count: t.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (J && X.suggestions.length > 0) {
                let t = X.suggestions,
                    i = e("SUGGESTIONS") ? [] : t;
                n.push({
                    kind: "SUGGESTIONS",
                    key: "SUGGESTIONS",
                    title: D.intl.string(D.t.qm9dSj),
                    count: t.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (X.online.length > 0) {
                let t = X.online,
                    i = e("ONLINE") ? [] : t;
                n.push({
                    kind: "ONLINE",
                    key: "ONLINE",
                    title: D.intl.string(D.t.WbGtnH),
                    count: t.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (X.offline.length > 0) {
                let t = X.offline,
                    i = e("OFFLINE") ? [] : t;
                n.push({
                    kind: "OFFLINE",
                    key: "OFFLINE",
                    title: D.intl.string(D.t.Vv0abJ),
                    count: t.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            return n;
        }, [
            eh,
            X.friendRequests,
            $,
            X.sameActivity,
            X.activities,
            X.inGame,
            X.suggestions,
            X.online,
            X.offline,
            G.currentActivityName,
            ed,
            J,
            ec,
            eu,
        ]),
        eO = r.useCallback((e) => eE[e], [eE]),
        ex = r.useCallback((e, t) => "EMPTY_STATE" !== e.kind, []),
        e_ = r.useCallback(
            (e) => {
                var t, n;
                let { section: r } = e,
                    l = eO(r);
                if (null == l || "EMPTY_STATE" === l.kind) return null;
                let a = eh.includes(l.key),
                    s = l.title,
                    o = l.count,
                    u = "GROUP" === l.kind,
                    h = a && "FRIEND_REQUESTS" !== l.kind ? "".concat(s, " (").concat(o, ")") : s,
                    p = ex(l, eh);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(d.AC4, {
                            children: D.intl.format(D.t.Uaqbke, {
                                title: s,
                                count: o,
                            }),
                        }),
                        u
                            ? (0, i.jsx)(V, {
                                  groupId: null != (t = null == (n = l.group) ? void 0 : n.id) ? t : "",
                                  groupName: s,
                                  displayText: h,
                                  isCollapsed: a,
                                  canCollapse: p,
                                  onToggle: () => em(l.key),
                                  isReorderDisabled: q,
                                  draggedGroupId: et,
                                  dropTargetGroupId: en,
                                  dropTargetPosition: ei,
                                  getDragHandleProps: er,
                              })
                            : (0, i.jsx)(z, {
                                  displayText: h,
                                  isCollapsed: a,
                                  canCollapse: p,
                                  onToggle: () => em(l.key),
                                  rightAccessory:
                                      "SUGGESTIONS" === l.kind
                                          ? (0, i.jsx)(c.m_, {
                                                text: D.intl.string(D.t.N86XcP),
                                                children: (0, i.jsx)(d.DUT, {
                                                    className: k.LQ,
                                                    "aria-label": D.intl.string(D.t.N86XcP),
                                                    onClick: ey,
                                                    children: (0, i.jsx)(d.aXh, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                    }),
                                                }),
                                            })
                                          : null,
                              }),
                    ],
                });
            },
            [eO, eh, em, q, et, en, ei, er, ex, ey],
        ),
        eS = r.useCallback(
            (e) => {
                let n;
                if (ed)
                    return (0, i.jsx)(
                        "div",
                        {
                            className: k.y7,
                            children: (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: D.intl.string(D.t["7sW4h1"]),
                            }),
                        },
                        "friends-popout-empty",
                    );
                let r = eO(e.section);
                if (null == r) return null;
                if ("GROUP" === r.kind) {
                    var l;
                    n = null == (l = r.group) ? void 0 : l.id;
                }
                let a = r.rows[e.row];
                return null == a || null == a.user
                    ? null
                    : (0, i.jsx)(
                          "div",
                          {
                              children: (0, i.jsx)(
                                  _.Z,
                                  L(M({}, a), {
                                      closeParentPopout: Y,
                                      isSuggestion: "SUGGESTIONS" === r.kind,
                                      shouldHighlightIfRecentlyAdded: "FAVORITES" === r.kind,
                                      appContext: w.BRT.OVERLAY,
                                      onAction: t,
                                      onFriendVisible: x,
                                      friendGroupId: n,
                                  }),
                              ),
                          },
                          "".concat(e.section, ":").concat(a.user.id),
                      );
            },
            [eO, ed, Y, t, x],
        ),
        eI = r.useMemo(() => eE.map((e) => e.length), [eE]),
        ej = r.useCallback(() => 40, []),
        eT = r.useCallback(
            (e) => {
                if (ed) return 300;
                let t = eO(e);
                return null == t ? 50 : 50 * (0 !== t.rows.length);
            },
            [eO, ed],
        );
    return (0, i.jsxs)("div", {
        className: k.kL,
        children: [
            (0, i.jsx)("div", {
                className: k.MT,
                children: (0, i.jsx)(d.IWV, {
                    query: W,
                    onChange: ev,
                    onClear: eb,
                    placeholder: D.intl.string(D.t.lLDtTK),
                    size: "md",
                }),
            }),
            (0, i.jsx)(o.hD, {
                navigator: eg,
                children: (0, i.jsx)(o.PR, {
                    children: (e) => {
                        let { ref: t, role: n } = e,
                            r = U(e, ["ref", "role"]);
                        return (0, i.jsx)(d.skg, {
                            children: (e) =>
                                (0, i.jsx)(
                                    d.B8B,
                                    M(
                                        {
                                            innerRole: n,
                                            innerAriaLabel: D.intl.string(D.t.TdEu5X),
                                            ref: (e) => {
                                                var n;
                                                (ef.current = e),
                                                    (t.current =
                                                        null != (n = null == e ? void 0 : e.getScrollerNode())
                                                            ? n
                                                            : null);
                                            },
                                            className: k.p_,
                                            sectionHeight: ej,
                                            rowHeight: eT,
                                            sidebarHeight: 0,
                                            renderSection: e_,
                                            renderRow: eS,
                                            sections: eI,
                                            paddingBottom: 8,
                                        },
                                        r,
                                        e,
                                    ),
                                ),
                        });
                    },
                }),
            }),
        ],
    });
}

n.d(t, {
    F: () => W,
}),
    n(638769),
    n(896048),
    n(733351),
    n(321073);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n(837381),
    u = n(311907),
    c = n(435371),
    d = n(397927),
    h = n(803306),
    g = n(928039),
    f = n(485947),
    p = n(545059),
    I = n(290863),
    m = n(994500),
    E = n(287809),
    A = n(256415),
    y = n(996439),
    S = n(810412),
    v = n(914853),
    O = n(483392),
    b = n(236884),
    N = n(542080),
    T = n(67103),
    _ = n(406595),
    C = n(535973),
    x = n(125117),
    D = n(652215),
    M = n(895867),
    j = n(985018),
    w = n(488494),
    P = n(416001);

function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function G(e, t) {
    if (null == e) return {};
    var n,
        l,
        r,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                i = Object.getOwnPropertyNames(e);
            for (l = 0; l < i.length; l++)
                (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i;
}

function L(e) {
    let { isCollapsed: t } = e;
    return (0, l.jsx)(O.C, {
        isCollapsed: t,
        size: "md",
        className: P.t4,
    });
}

function k(e) {
    let {
            groupId: t,
            groupName: n,
            displayText: r,
            isCollapsed: i,
            canCollapse: a,
            onToggle: o,
            onContextMenu: u,
            isReorderDisabled: c,
            draggedGroupId: h,
            dropTargetGroupId: g,
            dropTargetPosition: p,
            getDragHandleProps: I,
        } = e,
        m = !c,
        E = null != g && g === t,
        A = E && p === C.I.BEFORE,
        y = E && p === C.I.AFTER;
    return (0, l.jsx)(f.A, {
        className: s()(P.uW, {
            [w.EU]: m,
            [w.Me]: null != h && h === t,
            [w.hV]: E,
            [w.nH]: A,
            [w._M]: y,
        }),
        children: (0, l.jsx)(
            "div",
            U(R({}, I(t, m)), {
                onContextMenu: u,
                children: (0, l.jsxs)(d.DUT, {
                    onClick: () => a && o(),
                    "aria-hidden": !0,
                    className: a ? P.Ws : void 0,
                    children: [
                        r,
                        a
                            ? (0, l.jsx)(L, {
                                  isCollapsed: i,
                              })
                            : null,
                    ],
                }),
            }),
        ),
    });
}

function F(e) {
    let { displayText: t, isCollapsed: n, canCollapse: r, onToggle: i, rightAccessory: s } = e;
    return (0, l.jsx)(f.A, {
        className: P.uW,
        children: (0, l.jsxs)("div", {
            className: P.bV,
            children: [
                (0, l.jsxs)(d.DUT, {
                    onClick: () => r && i(),
                    "aria-hidden": !0,
                    className: r ? P.Ws : void 0,
                    children: [
                        t,
                        r
                            ? (0, l.jsx)(L, {
                                  isCollapsed: n,
                              })
                            : null,
                    ],
                }),
                s,
            ],
        }),
    });
}

function V(e) {
    return Array.from(e).sort();
}
let H = (0, a.throttle)(
    (e) => {
        (0, S.Y)(D.uss.FRIENDS, {
            locked: A.default.isInstanceLocked(),
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

function W(e) {
    let { onPrimaryAction: t, onContextMenu: n, onFriendVisible: i } = e,
        [s, f] = r.useState(new Set()),
        [A, O] = r.useState(new Set()),
        w = r.useCallback(
            (e, t, n) => {
                f((n) => {
                    if (t) {
                        if (n.has(e)) return n;
                        n.add(e);
                    } else {
                        if (!n.has(e)) return n;
                        n.delete(e);
                    }
                    return new Set(n);
                }),
                    O((l) => {
                        if (n && t) {
                            if (l.has(e)) return l;
                            l.add(e);
                        } else {
                            if (!l.has(e)) return l;
                            l.delete(e);
                        }
                        return new Set(l);
                    }),
                    null == i || i(e, t, n);
            },
            [i],
        ),
        L = (0, S.Dk)(() => s, [s]),
        W = (0, S.Dk)(() => A, [A]);
    r.useEffect(() => {
        0 !== L.size &&
            H({
                shownUserIds: V(L),
                liveUserIds: V(W),
            });
    }, [L, W]);
    let z = (0, x.b)(),
        B = (0, x.n)(z),
        { searchQuery: K, setSearchQuery: X, clearSearch: Q } = B,
        Z = G(B, ["searchQuery", "setSearchQuery", "clearSearch"]),
        { showSuggestions: q, setShowSuggestions: J } = (0, N.A)(),
        $ = K.trim().length > 0,
        ee = r.useMemo(() => Z.groups.filter((e) => e.users.length > 0), [Z.groups]),
        et = r.useMemo(() => z.groups.map((e) => e.id), [z.groups]),
        {
            draggedGroupId: en,
            dropTargetGroupId: el,
            dropTargetPosition: er,
            getDragHandleProps: ei,
        } = (0, C.s)({
            groupIds: et,
            isDisabled: $,
            onCommitNewOrder: p.A.reorderGroups,
        }),
        [es, ea] = (0, u.bG)([_.A], () => _.A.getFavoriteTargetIdsForTab(v.x.FRIENDS), [], y.D),
        eo = (0, u.bG)([E.default, I.A, m.A], () => {
            let e = [];
            for (let t of es) {
                let n = E.default.getUser(t);
                null != n &&
                    e.push({
                        user: n,
                        activities: I.A.getActivities(t),
                        nickname: m.A.getNickname(t),
                    });
            }
            return e;
        }, [es]),
        eu = r.useRef(new Set());
    r.useEffect(() => {
        for (let e of es)
            null == E.default.getUser(e) &&
                (eu.current.has(e) ||
                    (eu.current.add(e),
                    (0, h.wz)(e).catch(() => {
                        eu.current.delete(e);
                    })));
    }, [es]);
    let ec = r.useMemo(() => {
            let e = K.trim().toLowerCase();
            return "" === e
                ? eo
                : eo.filter((t) => {
                      let { user: n, activities: l, nickname: r } = t;
                      return [n.username, n.globalName, r, ...l.map((e) => e.name)]
                          .filter((e) => null != e && "" !== e.trim())
                          .some((t) => t.toLowerCase().includes(e));
                  });
        }, [eo, K]),
        ed = ea > 0 && ec.length > 0,
        eh =
            !ed &&
            0 === ee.length &&
            0 === Z.friendRequests.length &&
            (!q || 0 === Z.suggestions.length) &&
            0 === Z.sameActivity.length &&
            0 === Z.inGame.length &&
            0 === Z.activities.length &&
            0 === Z.online.length &&
            0 === Z.offline.length,
        [eg, ef] = r.useState(["FRIEND_REQUESTS", "OFFLINE"]),
        ep = r.useRef(null),
        eI = (0, g.A)("friends-popout", ep),
        em = r.useCallback((e) => {
            ef((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
        }, []),
        eE = r.useCallback(
            (e) => {
                e.stopPropagation(), J(!1);
            },
            [J],
        ),
        eA = r.useCallback(
            (0, a.debounce)(
                () => {
                    null == t ||
                        t({
                            type: T.c.SEARCH_FRIENDS,
                        });
                },
                1e3,
                {
                    leading: !0,
                    trailing: !1,
                },
            ),
            [t],
        ),
        ey = r.useCallback(
            (e) => {
                var t;
                X(e), eA(), null == (t = ep.current) || t.scrollToTop();
            },
            [X, eA],
        ),
        eS = r.useCallback(() => {
            var e;
            Q(), eA(), null == (e = ep.current) || e.scrollToTop();
        }, [Q, eA]),
        ev = r.useMemo(() => {
            let e = (e) => eg.includes(e),
                t = (e) => {
                    let t = I.A.getStatus(e);
                    return t !== D.clD.ONLINE && t !== D.clD.IDLE && t !== D.clD.DND;
                };
            if (eh)
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
            if (ed) {
                let l = e("FAVORITES") ? ec.filter((e) => !t(e.user.id)) : ec;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: j.intl.string(M.default.GKTlS6),
                    count: ec.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (Z.friendRequests.length > 0) {
                let t = Z.friendRequests,
                    l = e("FRIEND_REQUESTS") ? [] : t;
                n.push({
                    kind: "FRIEND_REQUESTS",
                    key: "FRIEND_REQUESTS",
                    title: j.intl.formatToPlainString(j.t.xxFCW8, {
                        count: t.length,
                    }),
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            for (let l of ee) {
                let r = "GROUP:".concat(l.id),
                    i = l.users,
                    s = e(r) ? i.filter((e) => !t(e.user.id)) : i;
                n.push({
                    kind: "GROUP",
                    key: r,
                    title: l.name,
                    count: i.length,
                    rows: s,
                    length: Math.max(s.length, 1),
                    group: l,
                });
            }
            if (Z.sameActivity.length > 0) {
                let t = Z.sameActivity,
                    l = e("SAME_ACTIVITY") ? [] : t;
                n.push({
                    kind: "SAME_ACTIVITY",
                    key: "SAME_ACTIVITY",
                    title: z.currentActivityName,
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (Z.inGame.length > 0) {
                let t = Z.inGame,
                    l = e("IN_GAME") ? [] : t;
                n.push({
                    kind: "IN_GAME",
                    key: "IN_GAME",
                    title: j.intl.string(M.default.trKJoT),
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (Z.activities.length > 0) {
                let t = Z.activities,
                    l = e("ACTIVITIES") ? [] : t;
                n.push({
                    kind: "ACTIVITIES",
                    key: "ACTIVITIES",
                    title: j.intl.string(j.t.TxqPQR),
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (q && Z.suggestions.length > 0) {
                let t = Z.suggestions,
                    l = e("SUGGESTIONS") ? [] : t;
                n.push({
                    kind: "SUGGESTIONS",
                    key: "SUGGESTIONS",
                    title: j.intl.string(j.t.qm9dSj),
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (Z.online.length > 0) {
                let t = Z.online,
                    l = e("ONLINE") ? [] : t;
                n.push({
                    kind: "ONLINE",
                    key: "ONLINE",
                    title: j.intl.string(j.t.WbGtnH),
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (Z.offline.length > 0) {
                let t = Z.offline,
                    l = e("OFFLINE") ? [] : t;
                n.push({
                    kind: "OFFLINE",
                    key: "OFFLINE",
                    title: j.intl.string(j.t.Vv0abJ),
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            return n;
        }, [
            eg,
            Z.friendRequests,
            ee,
            Z.sameActivity,
            Z.activities,
            Z.inGame,
            Z.suggestions,
            Z.online,
            Z.offline,
            z.currentActivityName,
            eh,
            q,
            ed,
            ec,
        ]),
        eO = r.useCallback((e) => ev[e], [ev]),
        eb = r.useCallback((e, t) => "EMPTY_STATE" !== e.kind, []),
        eN = r.useCallback(
            (e) => {
                var t, r;
                let { section: i } = e,
                    s = eO(i);
                if (null == s || "EMPTY_STATE" === s.kind) return null;
                let a = eg.includes(s.key),
                    o = s.title,
                    u = s.count,
                    h = "GROUP" === s.kind,
                    g = a && "FRIEND_REQUESTS" !== s.kind ? "".concat(o, " (").concat(u, ")") : o,
                    f = eb(s, eg),
                    p =
                        h && null != n
                            ? (e) => {
                                  var t, l;
                                  n({
                                      type: T.K.FRIEND_GROUP,
                                      event: e,
                                      groupId: null != (t = null == (l = s.group) ? void 0 : l.id) ? t : "",
                                      groupName: o,
                                  });
                              }
                            : void 0;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(d.AC4, {
                            children: j.intl.format(j.t.Uaqbke, {
                                title: o,
                                count: u,
                            }),
                        }),
                        h
                            ? (0, l.jsx)(k, {
                                  groupId: null != (t = null == (r = s.group) ? void 0 : r.id) ? t : "",
                                  groupName: o,
                                  displayText: g,
                                  isCollapsed: a,
                                  canCollapse: f,
                                  onToggle: () => em(s.key),
                                  onContextMenu: p,
                                  isReorderDisabled: $,
                                  draggedGroupId: en,
                                  dropTargetGroupId: el,
                                  dropTargetPosition: er,
                                  getDragHandleProps: ei,
                              })
                            : (0, l.jsx)(F, {
                                  displayText: g,
                                  isCollapsed: a,
                                  canCollapse: f,
                                  onToggle: () => em(s.key),
                                  rightAccessory:
                                      "SUGGESTIONS" === s.kind
                                          ? (0, l.jsx)(c.m_, {
                                                text: j.intl.string(j.t.N86XcP),
                                                children: (0, l.jsx)(d.DUT, {
                                                    className: P.LQ,
                                                    "aria-label": j.intl.string(j.t.N86XcP),
                                                    onClick: eE,
                                                    children: (0, l.jsx)(d.aXh, {
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
            [eO, eg, em, $, en, el, er, ei, eb, eE, n],
        ),
        eT = r.useCallback(
            (e) => {
                let r;
                if (eh)
                    return (0, l.jsx)(
                        "div",
                        {
                            className: P.y7,
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: j.intl.string(j.t["7sW4h1"]),
                            }),
                        },
                        "friends-popout-empty",
                    );
                let i = eO(e.section);
                if (null == i) return null;
                if ("GROUP" === i.kind) {
                    var s;
                    r = null == (s = i.group) ? void 0 : s.id;
                }
                let a = i.rows[e.row];
                return null == a || null == a.user
                    ? null
                    : (0, l.jsx)(
                          "div",
                          {
                              children: (0, l.jsx)(
                                  b.Z,
                                  U(R({}, a), {
                                      closeParentPopout: Y,
                                      isSuggestion: "SUGGESTIONS" === i.kind,
                                      shouldHighlightIfRecentlyAdded: "FAVORITES" === i.kind,
                                      appContext: D.BRT.OVERLAY,
                                      onPrimaryAction: t,
                                      onContextMenu: n,
                                      onFriendVisible: w,
                                      friendGroupId: r,
                                  }),
                              ),
                          },
                          "".concat(e.section, ":").concat(a.user.id),
                      );
            },
            [eO, eh, Y, t, n, w],
        ),
        e_ = r.useMemo(() => ev.map((e) => e.length), [ev]),
        eC = r.useCallback(() => 40, []),
        ex = r.useCallback(
            (e) => {
                if (eh) return 300;
                let t = eO(e);
                return null == t ? 50 : 50 * (0 !== t.rows.length);
            },
            [eO, eh],
        );
    return (0, l.jsxs)("div", {
        className: P.kL,
        children: [
            (0, l.jsx)("div", {
                className: P.MT,
                children: (0, l.jsx)(d.IWV, {
                    query: K,
                    onChange: ey,
                    onClear: eS,
                    placeholder: j.intl.string(j.t.lLDtTK),
                    size: "md",
                }),
            }),
            (0, l.jsx)(o.hD, {
                navigator: eI,
                children: (0, l.jsx)(o.PR, {
                    children: (e) => {
                        let { ref: t, role: n } = e,
                            r = G(e, ["ref", "role"]);
                        return (0, l.jsx)(d.skg, {
                            children: (e) =>
                                (0, l.jsx)(
                                    d.B8B,
                                    R(
                                        {
                                            innerRole: n,
                                            innerAriaLabel: j.intl.string(j.t.TdEu5X),
                                            ref: (e) => {
                                                var n;
                                                (ep.current = e),
                                                    (t.current =
                                                        null != (n = null == e ? void 0 : e.getScrollerNode())
                                                            ? n
                                                            : null);
                                            },
                                            className: P.p_,
                                            sectionHeight: eC,
                                            rowHeight: ex,
                                            sidebarHeight: 0,
                                            renderSection: eN,
                                            renderRow: eT,
                                            sections: e_,
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

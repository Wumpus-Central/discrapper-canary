n.d(t, { F: () => V }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    u = n(837381),
    o = n(311907),
    d = n(435371),
    c = n(397927),
    h = n(803306),
    g = n(928039),
    I = n(485947),
    E = n(545059),
    A = n(290863),
    f = n(994500),
    m = n(287809),
    S = n(256415),
    p = n(996439),
    N = n(810412),
    T = n(914853),
    _ = n(483392),
    y = n(236884),
    C = n(542080),
    x = n(67103),
    v = n(406595),
    M = n(535973),
    D = n(125117),
    R = n(652215),
    U = n(895867),
    O = n(985018),
    G = n(488494),
    b = n(416001);
function w(e) {
    let { isCollapsed: t } = e;
    return (0, l.jsx)(_.C, { isCollapsed: t, size: "md", className: b.t4 });
}
function L(e) {
    let {
            groupId: t,
            groupName: n,
            displayText: i,
            isCollapsed: s,
            canCollapse: a,
            onToggle: u,
            onContextMenu: o,
            isReorderDisabled: d,
            draggedGroupId: h,
            dropTargetGroupId: g,
            dropTargetPosition: E,
            getDragHandleProps: A,
        } = e,
        f = !d,
        m = null != g && g === t,
        S = m && E === M.I.BEFORE,
        p = m && E === M.I.AFTER;
    return (0, l.jsx)(I.A, {
        className: r()(b.uW, { [G.EU]: f, [G.Me]: null != h && h === t, [G.hV]: m, [G.nH]: S, [G._M]: p }),
        children: (0, l.jsx)("div", {
            ...A(t, f),
            onContextMenu: o,
            children: (0, l.jsxs)(c.DUT, {
                onClick: () => a && u(),
                "aria-hidden": !0,
                className: a ? b.Ws : void 0,
                children: [i, a ? (0, l.jsx)(w, { isCollapsed: s }) : null],
            }),
        }),
    });
}
function k(e) {
    let { displayText: t, isCollapsed: n, canCollapse: i, onToggle: s, rightAccessory: r } = e;
    return (0, l.jsx)(I.A, {
        className: b.uW,
        children: (0, l.jsxs)("div", {
            className: b.bV,
            children: [
                (0, l.jsxs)(c.DUT, {
                    onClick: () => i && s(),
                    "aria-hidden": !0,
                    className: i ? b.Ws : void 0,
                    children: [t, i ? (0, l.jsx)(w, { isCollapsed: n }) : null],
                }),
                r,
            ],
        }),
    });
}
function F(e) {
    return Array.from(e).sort();
}
let P = (0, a.throttle)(
    (e) => {
        (0, N.Y)(R.uss.FRIENDS, {
            locked: S.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    { leading: !0, trailing: !1 },
);
function j() {}
function V(e) {
    let { onPrimaryAction: t, onContextMenu: n, onFriendVisible: s } = e,
        [r, I] = i.useState(new Set()),
        [S, _] = i.useState(new Set()),
        G = i.useCallback(
            (e, t, n) => {
                I((n) => {
                    if (t) {
                        if (n.has(e)) return n;
                        n.add(e);
                    } else {
                        if (!n.has(e)) return n;
                        n.delete(e);
                    }
                    return new Set(n);
                }),
                    _((l) => {
                        if (n && t) {
                            if (l.has(e)) return l;
                            l.add(e);
                        } else {
                            if (!l.has(e)) return l;
                            l.delete(e);
                        }
                        return new Set(l);
                    }),
                    s?.(e, t, n);
            },
            [s],
        ),
        w = (0, N.Dk)(() => r, [r]),
        V = (0, N.Dk)(() => S, [S]);
    i.useEffect(() => {
        0 !== w.size && P({ shownUserIds: F(w), liveUserIds: F(V) });
    }, [w, V]);
    let H = (0, D.b)(),
        { searchQuery: Y, setSearchQuery: z, clearSearch: W, ...B } = (0, D.n)(H),
        { showSuggestions: $, setShowSuggestions: X } = (0, C.A)(),
        K = Y.trim().length > 0,
        Q = i.useMemo(() => B.groups.filter((e) => e.users.length > 0), [B.groups]),
        Z = i.useMemo(() => H.groups.map((e) => e.id), [H.groups]),
        {
            draggedGroupId: q,
            dropTargetGroupId: J,
            dropTargetPosition: ee,
            getDragHandleProps: et,
        } = (0, M.s)({ groupIds: Z, isDisabled: K, onCommitNewOrder: E.A.reorderGroups }),
        [en, el] = (0, o.bG)([v.A], () => v.A.getFavoriteTargetIdsForTab(T.x.FRIENDS), [], p.D),
        ei = (0, o.bG)([m.default, A.A, f.A], () => {
            let e = [];
            for (let t of en) {
                let n = m.default.getUser(t);
                null != n && e.push({ user: n, activities: A.A.getActivities(t), nickname: f.A.getNickname(t) });
            }
            return e;
        }, [en]),
        es = i.useRef(new Set());
    i.useEffect(() => {
        for (let e of en)
            null == m.default.getUser(e) &&
                (es.current.has(e) ||
                    (es.current.add(e),
                    (0, h.wz)(e).catch(() => {
                        es.current.delete(e);
                    })));
    }, [en]);
    let er = i.useMemo(() => {
            let e = Y.trim().toLowerCase();
            return "" === e
                ? ei
                : ei.filter((t) => {
                      let { user: n, activities: l, nickname: i } = t;
                      return [n.username, n.globalName, i, ...l.map((e) => e.name)]
                          .filter((e) => null != e && "" !== e.trim())
                          .some((t) => t.toLowerCase().includes(e));
                  });
        }, [ei, Y]),
        ea = el > 0 && er.length > 0,
        eu =
            !ea &&
            0 === Q.length &&
            0 === B.friendRequests.length &&
            (!$ || 0 === B.suggestions.length) &&
            0 === B.sameActivity.length &&
            0 === B.inGame.length &&
            0 === B.activities.length &&
            0 === B.online.length &&
            0 === B.offline.length,
        [eo, ed] = i.useState(["FRIEND_REQUESTS", "OFFLINE"]),
        ec = i.useRef(null),
        eh = (0, g.A)("friends-popout", ec),
        eg = i.useCallback((e) => {
            ed((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
        }, []),
        eI = i.useCallback(
            (e) => {
                e.stopPropagation(), X(!1);
            },
            [X],
        ),
        eE = i.useCallback(
            (0, a.debounce)(
                () => {
                    t?.({ type: x.c.SEARCH_FRIENDS });
                },
                1e3,
                { leading: !0, trailing: !1 },
            ),
            [t],
        ),
        eA = i.useCallback(
            (e) => {
                z(e), eE(), ec.current?.scrollToTop();
            },
            [z, eE],
        ),
        ef = i.useCallback(() => {
            W(), eE(), ec.current?.scrollToTop();
        }, [W, eE]),
        em = i.useMemo(() => {
            let e = (e) => eo.includes(e),
                t = (e) => {
                    let t = A.A.getStatus(e);
                    return t !== R.clD.ONLINE && t !== R.clD.IDLE && t !== R.clD.DND;
                };
            if (eu) return [{ kind: "EMPTY_STATE", key: "EMPTY_STATE", title: "", count: 0, length: 1, rows: [] }];
            let n = [];
            if (ea) {
                let l = e("FAVORITES") ? er.filter((e) => !t(e.user.id)) : er;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: O.intl.string(U.default.GKTlS6),
                    count: er.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (B.friendRequests.length > 0) {
                let t = B.friendRequests,
                    l = e("FRIEND_REQUESTS") ? [] : t;
                n.push({
                    kind: "FRIEND_REQUESTS",
                    key: "FRIEND_REQUESTS",
                    title: O.intl.formatToPlainString(O.t.xxFCW8, { count: t.length }),
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            for (let l of Q) {
                let i = `GROUP:${l.id}`,
                    s = l.users,
                    r = e(i) ? s.filter((e) => !t(e.user.id)) : s;
                n.push({
                    kind: "GROUP",
                    key: i,
                    title: l.name,
                    count: s.length,
                    rows: r,
                    length: Math.max(r.length, 1),
                    group: l,
                });
            }
            if (B.sameActivity.length > 0) {
                let t = B.sameActivity,
                    l = e("SAME_ACTIVITY") ? [] : t;
                n.push({
                    kind: "SAME_ACTIVITY",
                    key: "SAME_ACTIVITY",
                    title: H.currentActivityName,
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (B.inGame.length > 0) {
                let t = B.inGame,
                    l = e("IN_GAME") ? [] : t;
                n.push({
                    kind: "IN_GAME",
                    key: "IN_GAME",
                    title: O.intl.string(U.default.trKJoT),
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (B.activities.length > 0) {
                let t = B.activities,
                    l = e("ACTIVITIES") ? [] : t;
                n.push({
                    kind: "ACTIVITIES",
                    key: "ACTIVITIES",
                    title: O.intl.string(O.t.TxqPQR),
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if ($ && B.suggestions.length > 0) {
                let t = B.suggestions,
                    l = e("SUGGESTIONS") ? [] : t;
                n.push({
                    kind: "SUGGESTIONS",
                    key: "SUGGESTIONS",
                    title: O.intl.string(O.t.qm9dSj),
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (B.online.length > 0) {
                let t = B.online,
                    l = e("ONLINE") ? [] : t;
                n.push({
                    kind: "ONLINE",
                    key: "ONLINE",
                    title: O.intl.string(O.t.WbGtnH),
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (B.offline.length > 0) {
                let t = B.offline,
                    l = e("OFFLINE") ? [] : t;
                n.push({
                    kind: "OFFLINE",
                    key: "OFFLINE",
                    title: O.intl.string(O.t.Vv0abJ),
                    count: t.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            return n;
        }, [
            eo,
            B.friendRequests,
            Q,
            B.sameActivity,
            B.activities,
            B.inGame,
            B.suggestions,
            B.online,
            B.offline,
            H.currentActivityName,
            eu,
            $,
            ea,
            er,
        ]),
        eS = i.useCallback((e) => em[e], [em]),
        ep = i.useCallback((e, t) => "EMPTY_STATE" !== e.kind, []),
        eN = i.useCallback(
            (e) => {
                let { section: t } = e,
                    i = eS(t);
                if (null == i || "EMPTY_STATE" === i.kind) return null;
                let s = eo.includes(i.key),
                    r = i.title,
                    a = i.count,
                    u = "GROUP" === i.kind,
                    o = s && "FRIEND_REQUESTS" !== i.kind ? `${r} (${a})` : r,
                    h = ep(i, eo),
                    g =
                        u && null != n
                            ? (e) => {
                                  n({ type: x.K.FRIEND_GROUP, event: e, groupId: i.group?.id ?? "", groupName: r });
                              }
                            : void 0;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(c.AC4, { children: O.intl.format(O.t.Uaqbke, { title: r, count: a }) }),
                        u
                            ? (0, l.jsx)(L, {
                                  groupId: i.group?.id ?? "",
                                  groupName: r,
                                  displayText: o,
                                  isCollapsed: s,
                                  canCollapse: h,
                                  onToggle: () => eg(i.key),
                                  onContextMenu: g,
                                  isReorderDisabled: K,
                                  draggedGroupId: q,
                                  dropTargetGroupId: J,
                                  dropTargetPosition: ee,
                                  getDragHandleProps: et,
                              })
                            : (0, l.jsx)(k, {
                                  displayText: o,
                                  isCollapsed: s,
                                  canCollapse: h,
                                  onToggle: () => eg(i.key),
                                  rightAccessory:
                                      "SUGGESTIONS" === i.kind
                                          ? (0, l.jsx)(d.m_, {
                                                text: O.intl.string(O.t.N86XcP),
                                                children: (0, l.jsx)(c.DUT, {
                                                    className: b.LQ,
                                                    "aria-label": O.intl.string(O.t.N86XcP),
                                                    onClick: eI,
                                                    children: (0, l.jsx)(c.aXh, { size: "xs", color: "currentColor" }),
                                                }),
                                            })
                                          : null,
                              }),
                    ],
                });
            },
            [eS, eo, eg, K, q, J, ee, et, ep, eI, n],
        ),
        eT = i.useCallback(
            (e) => {
                let i;
                if (eu)
                    return (0, l.jsx)(
                        "div",
                        {
                            className: b.y7,
                            children: (0, l.jsx)(c.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: O.intl.string(O.t["7sW4h1"]),
                            }),
                        },
                        "friends-popout-empty",
                    );
                let s = eS(e.section);
                if (null == s) return null;
                "GROUP" === s.kind && (i = s.group?.id);
                let r = s.rows[e.row];
                return null == r || null == r.user
                    ? null
                    : (0, l.jsx)(
                          "div",
                          {
                              children: (0, l.jsx)(y.Z, {
                                  ...r,
                                  closeParentPopout: j,
                                  isSuggestion: "SUGGESTIONS" === s.kind,
                                  shouldHighlightIfRecentlyAdded: "FAVORITES" === s.kind,
                                  appContext: R.BRT.OVERLAY,
                                  onPrimaryAction: t,
                                  onContextMenu: n,
                                  onFriendVisible: G,
                                  friendGroupId: i,
                              }),
                          },
                          `${e.section}:${r.user.id}`,
                      );
            },
            [eS, eu, j, t, n, G],
        ),
        e_ = i.useMemo(() => em.map((e) => e.length), [em]),
        ey = i.useCallback(() => 40, []),
        eC = i.useCallback(
            (e) => {
                if (eu) return 300;
                let t = eS(e);
                return null == t ? 50 : 50 * (0 !== t.rows.length);
            },
            [eS, eu],
        );
    return (0, l.jsxs)("div", {
        className: b.kL,
        children: [
            (0, l.jsx)("div", {
                className: b.MT,
                children: (0, l.jsx)(c.IWV, {
                    query: Y,
                    onChange: eA,
                    onClear: ef,
                    placeholder: O.intl.string(O.t.lLDtTK),
                    size: "md",
                }),
            }),
            (0, l.jsx)(u.hD, {
                navigator: eh,
                children: (0, l.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...i } = e;
                        return (0, l.jsx)(c.skg, {
                            children: (e) =>
                                (0, l.jsx)(c.B8B, {
                                    innerRole: n,
                                    innerAriaLabel: O.intl.string(O.t.TdEu5X),
                                    ref: (e) => {
                                        (ec.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: b.p_,
                                    sectionHeight: ey,
                                    rowHeight: eC,
                                    sidebarHeight: 0,
                                    renderSection: eN,
                                    renderRow: eT,
                                    sections: e_,
                                    paddingBottom: 8,
                                    ...i,
                                    ...e,
                                }),
                        });
                    },
                }),
            }),
        ],
    });
}

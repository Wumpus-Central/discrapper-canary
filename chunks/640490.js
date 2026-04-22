n.d(t, { F: () => W }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(735438),
    u = n(837381),
    o = n(311907),
    d = n(990078),
    c = n(939249),
    h = n(140735),
    g = n(285796),
    m = n(834730),
    I = n(892547),
    E = n(312138),
    A = n(475825),
    f = n(803306),
    p = n(928039),
    S = n(485947),
    N = n(545059),
    x = n(290863),
    T = n(994500),
    _ = n(287809),
    y = n(256415),
    v = n(996439),
    C = n(810412),
    R = n(914853),
    D = n(483392),
    b = n(236884),
    j = n(542080),
    M = n(179917),
    k = n(419072),
    O = n(67103),
    w = n(554932),
    L = n(406595),
    F = n(557404),
    G = n(535973),
    U = n(125117),
    P = n(652215),
    V = n(499214),
    H = n(985018),
    Y = n(150045),
    K = n(894564);
function z(e) {
    let {
            groupId: t,
            groupName: n,
            displayText: i,
            isCollapsed: r,
            onToggle: a,
            onContextMenu: u,
            isReorderDisabled: o,
            draggedGroupId: d,
            dropTargetGroupId: h,
            dropTargetPosition: g,
            getDragHandleProps: m,
        } = e,
        I = !o,
        E = null != h && h === t,
        A = E && g === G.I.BEFORE,
        f = E && g === G.I.AFTER;
    return (0, l.jsx)(S.A, {
        className: s()(K.uW, { [Y.EU]: I, [Y.Me]: null != d && d === t, [Y.hV]: E, [Y.nH]: A, [Y._M]: f }),
        children: (0, l.jsx)("div", {
            ...m(t, I),
            onContextMenu: u,
            children: (0, l.jsxs)(c.D, {
                onClick: a,
                "aria-hidden": !0,
                className: K.Ws,
                children: [i, (0, l.jsx)(D.C, { isCollapsed: r, size: "md", className: K.t4 })],
            }),
        }),
    });
}
function X(e) {
    return Array.from(e).sort();
}
let Z = (0, a.throttle)(
    (e) => {
        (0, C.Y)(P.uss.FRIENDS, {
            locked: y.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    { leading: !0, trailing: !1 },
);
function B() {}
function W(e) {
    let { onPrimaryAction: t, onContextMenu: n, onFriendVisible: r } = e,
        [s, S] = i.useState(new Set()),
        [y, D] = i.useState(new Set()),
        Y = i.useCallback(
            (e, t, n) => {
                S((n) => {
                    if (t) {
                        if (n.has(e)) return n;
                        n.add(e);
                    } else {
                        if (!n.has(e)) return n;
                        n.delete(e);
                    }
                    return new Set(n);
                }),
                    D((l) => {
                        if (n && t) {
                            if (l.has(e)) return l;
                            l.add(e);
                        } else {
                            if (!l.has(e)) return l;
                            l.delete(e);
                        }
                        return new Set(l);
                    }),
                    r?.(e, t, n);
            },
            [r],
        ),
        W = (0, C.Dk)(() => s, [s]),
        $ = (0, C.Dk)(() => y, [y]);
    i.useEffect(() => {
        0 !== W.size && Z({ shownUserIds: X(W), liveUserIds: X($) });
    }, [W, $]);
    let q = (0, U.b)(),
        { searchQuery: Q, setSearchQuery: J, clearSearch: ee, ...et } = (0, U.n)(q),
        { showSuggestions: en, setShowSuggestions: el } = (0, j.A)(),
        ei = Q.trim().length > 0,
        er = i.useMemo(() => et.groups.filter((e) => e.users.length > 0), [et.groups]),
        es = i.useMemo(() => q.groups.map((e) => e.id), [q.groups]),
        {
            draggedGroupId: ea,
            dropTargetGroupId: eu,
            dropTargetPosition: eo,
            getDragHandleProps: ed,
        } = (0, G.s)({ groupIds: es, isDisabled: ei, onCommitNewOrder: N.A.reorderGroups }),
        [ec, eh] = (0, o.bG)([L.A], () => L.A.getFavoriteTargetIdsForTab(R.x.FRIENDS), [], v.D),
        eg = (0, o.bG)([_.default, x.A, T.A], () => {
            let e = [];
            for (let t of ec) {
                let n = _.default.getUser(t);
                null != n && e.push({ user: n, activities: x.A.getActivities(t), nickname: T.A.getNickname(t) });
            }
            return e;
        }, [ec]),
        em = i.useRef(new Set());
    i.useEffect(() => {
        for (let e of ec)
            null == _.default.getUser(e) &&
                (em.current.has(e) ||
                    (em.current.add(e),
                    (0, f.wz)(e).catch(() => {
                        em.current.delete(e);
                    })));
    }, [ec]);
    let eI = i.useMemo(() => {
            let e = Q.trim().toLowerCase();
            return "" === e
                ? eg
                : eg.filter((t) => {
                      let { user: n, activities: l, nickname: i } = t;
                      return [n.username, n.globalName, i, ...l.map((e) => e.name)]
                          .filter((e) => null != e && "" !== e.trim())
                          .some((t) => t.toLowerCase().includes(e));
                  });
        }, [eg, Q]),
        eE = eh > 0 && eI.length > 0,
        eA =
            !eE &&
            0 === er.length &&
            0 === et.friendRequests.length &&
            (!en || 0 === et.suggestions.length) &&
            0 === et.sameActivity.length &&
            0 === et.inGame.length &&
            0 === et.activities.length &&
            0 === et.online.length &&
            0 === et.offline.length,
        ef = (0, o.bG)([k.A], () => k.A.getCollapsedSectionOverridesForTab(R.x.FRIENDS), []),
        ep = i.useRef(null),
        eS = (0, p.A)("friends-popout", ep),
        eN = i.useCallback((e) => {
            (0, w.G)({ tab: R.x.FRIENDS, sectionKey: e });
        }, []),
        ex = i.useCallback((e) => ef[e] ?? k.A.isSectionCollapsedByDefault(R.x.FRIENDS, e), [ef]),
        eT = i.useCallback(
            (e) => {
                e.stopPropagation(), el(!1);
            },
            [el],
        ),
        e_ = i.useCallback(
            (0, a.debounce)(
                () => {
                    t?.({ type: O.c.SEARCH_FRIENDS });
                },
                1e3,
                { leading: !0, trailing: !1 },
            ),
            [t],
        ),
        ey = i.useCallback(
            (e) => {
                J(e), e_(), ep.current?.scrollToTop();
            },
            [J, e_],
        ),
        ev = i.useCallback(() => {
            ee(), e_(), ep.current?.scrollToTop();
        }, [ee, e_]),
        eC = i.useMemo(() => {
            let e = (e) => {
                let t = x.A.getStatus(e);
                return t !== P.clD.ONLINE && t !== P.clD.IDLE && t !== P.clD.DND;
            };
            if (eA) return [{ kind: "EMPTY_STATE", key: "EMPTY_STATE", title: "", count: 0, length: 1, rows: [] }];
            let t = [];
            if (eE) {
                let n = ex("FAVORITES") ? eI.filter((t) => !e(t.user.id)) : eI;
                t.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: H.intl.string(V.default.GKTlS6),
                    count: eI.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (et.friendRequests.length > 0) {
                let e = et.friendRequests,
                    n = ex("FRIEND_REQUESTS") ? [] : e;
                t.push({
                    kind: "FRIEND_REQUESTS",
                    key: "FRIEND_REQUESTS",
                    title: H.intl.formatToPlainString(H.t.xxFCW8, { count: e.length }),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            for (let n of er) {
                let l = `GROUP:${n.id}`,
                    i = n.users,
                    r = ex(l) ? i.filter((t) => !e(t.user.id)) : i;
                t.push({
                    kind: "GROUP",
                    key: l,
                    title: n.name,
                    count: i.length,
                    rows: r,
                    length: Math.max(r.length, 1),
                    group: n,
                });
            }
            if (et.sameActivity.length > 0) {
                let e = et.sameActivity,
                    n = ex("SAME_ACTIVITY") ? [] : e;
                t.push({
                    kind: "SAME_ACTIVITY",
                    key: "SAME_ACTIVITY",
                    title: q.currentActivityName,
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (et.inGame.length > 0) {
                let e = et.inGame,
                    n = ex("IN_GAME") ? [] : e;
                t.push({
                    kind: "IN_GAME",
                    key: "IN_GAME",
                    title: H.intl.string(V.default.trKJoT),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (et.activities.length > 0) {
                let e = et.activities,
                    n = ex("ACTIVITIES") ? [] : e;
                t.push({
                    kind: "ACTIVITIES",
                    key: "ACTIVITIES",
                    title: H.intl.string(H.t.TxqPQR),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (en && et.suggestions.length > 0) {
                let e = et.suggestions,
                    n = ex("SUGGESTIONS") ? [] : e;
                t.push({
                    kind: "SUGGESTIONS",
                    key: "SUGGESTIONS",
                    title: H.intl.string(H.t.qm9dSj),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (et.online.length > 0) {
                let e = et.online,
                    n = ex("ONLINE") ? [] : e;
                t.push({
                    kind: "ONLINE",
                    key: "ONLINE",
                    title: H.intl.string(H.t.WbGtnH),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (et.offline.length > 0) {
                let e = et.offline,
                    n = ex("OFFLINE") ? [] : e;
                t.push({
                    kind: "OFFLINE",
                    key: "OFFLINE",
                    title: H.intl.string(H.t.Vv0abJ),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            return t;
        }, [
            ex,
            et.friendRequests,
            er,
            et.sameActivity,
            et.activities,
            et.inGame,
            et.suggestions,
            et.online,
            et.offline,
            q.currentActivityName,
            eA,
            en,
            eE,
            eI,
        ]),
        eR = i.useCallback((e) => eC[e], [eC]),
        eD = i.useCallback(
            (e) => {
                let { section: t } = e,
                    i = eR(t);
                if (null == i || "EMPTY_STATE" === i.kind) return null;
                let r = ex(i.key),
                    s = i.title,
                    a = i.count,
                    u = "GROUP" === i.kind,
                    o = r && "FRIEND_REQUESTS" !== i.kind ? `${s} (${a})` : s,
                    m =
                        u && null != n
                            ? (e) => {
                                  n({ type: O.K.FRIEND_GROUP, event: e, groupId: i.group?.id ?? "", groupName: s });
                              }
                            : void 0;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(h.A, { children: H.intl.format(H.t.Uaqbke, { title: s, count: a }) }),
                        u
                            ? (0, l.jsx)(z, {
                                  groupId: i.group?.id ?? "",
                                  groupName: s,
                                  displayText: o,
                                  isCollapsed: r,
                                  onToggle: () => eN(i.key),
                                  onContextMenu: m,
                                  isReorderDisabled: ei,
                                  draggedGroupId: ea,
                                  dropTargetGroupId: eu,
                                  dropTargetPosition: eo,
                                  getDragHandleProps: ed,
                              })
                            : (0, l.jsx)(M.I, {
                                  title: s,
                                  count: "FRIEND_REQUESTS" === i.kind ? void 0 : a,
                                  isCollapsed: r,
                                  canCollapse: !0,
                                  onToggle: () => eN(i.key),
                                  rightAccessory:
                                      "SUGGESTIONS" === i.kind
                                          ? (0, l.jsx)(d.m, {
                                                text: H.intl.string(H.t.N86XcP),
                                                children: (0, l.jsx)(c.D, {
                                                    className: K.LQ,
                                                    "aria-label": H.intl.string(H.t.N86XcP),
                                                    onClick: eT,
                                                    children: (0, l.jsx)(g.a, { size: "xs", color: "currentColor" }),
                                                }),
                                            })
                                          : null,
                              }),
                    ],
                });
            },
            [eR, ex, eN, ei, ea, eu, eo, ed, eT, n],
        ),
        eb = i.useCallback(
            (e) => {
                let i;
                if (eA)
                    return (0, l.jsx)(
                        "div",
                        {
                            className: K.y7,
                            children: (0, l.jsx)(m.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: H.intl.string(H.t["7sW4h1"]),
                            }),
                        },
                        "friends-popout-empty",
                    );
                let r = eR(e.section);
                if (null == r) return null;
                "GROUP" === r.kind && (i = r.group?.id);
                let s = r.rows[e.row];
                return null == s || null == s.user
                    ? null
                    : (0, l.jsx)(
                          "div",
                          {
                              children: (0, l.jsx)(b.Z, {
                                  ...s,
                                  closeParentPopout: B,
                                  isSuggestion: "SUGGESTIONS" === r.kind,
                                  shouldHighlightIfRecentlyAdded: "FAVORITES" === r.kind,
                                  appContext: P.BRT.OVERLAY,
                                  onPrimaryAction: t,
                                  onContextMenu: n,
                                  onFriendVisible: Y,
                                  friendGroupId: i,
                              }),
                          },
                          `${e.section}:${s.user.id}`,
                      );
            },
            [eR, eA, B, t, n, Y],
        ),
        ej = i.useMemo(() => eC.map((e) => e.length), [eC]),
        eM = i.useCallback(
            (e) => {
                let t = eC.findIndex((e) => "FAVORITES" === e.kind);
                if (-1 === t) return null;
                let n = eC[t],
                    l = n?.rows.findIndex((t) => t.user.id === e) ?? -1;
                return -1 !== l ? { section: t, row: l } : null;
            },
            [eC],
        ),
        ek = i.useCallback(() => {
            let e = eC.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [eC]);
    (0, F.$)({
        scrollerRef: ep,
        favoriteTargetIds: ec,
        getScrollTargetForTargetId: (e) => eM(e),
        getFallbackScrollTarget: ek,
        padding: 8,
        animate: !1,
    });
    let eO = i.useCallback(() => 40, []),
        ew = i.useCallback(
            (e) => {
                if (eA) return 300;
                let t = eR(e);
                return null == t ? 50 : 50 * (0 !== t.rows.length);
            },
            [eR, eA],
        );
    return (0, l.jsxs)("div", {
        className: K.kL,
        children: [
            (0, l.jsx)("div", {
                className: K.MT,
                children: (0, l.jsx)(I.I, {
                    query: Q,
                    onChange: ey,
                    onClear: ev,
                    placeholder: H.intl.string(H.t.lLDtTK),
                    size: "md",
                }),
            }),
            (0, l.jsx)(u.hD, {
                navigator: eS,
                children: (0, l.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...i } = e;
                        return (0, l.jsx)(E.sk, {
                            children: (e) =>
                                (0, l.jsx)(A.OZ, {
                                    innerRole: n,
                                    innerAriaLabel: H.intl.string(H.t.TdEu5X),
                                    ref: (e) => {
                                        (ep.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: K.p_,
                                    sectionHeight: eO,
                                    rowHeight: ew,
                                    sidebarHeight: 0,
                                    renderSection: eD,
                                    renderRow: eb,
                                    sections: ej,
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

n.d(t, { F: () => Y }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(735438),
    u = n(837381),
    o = n(311907),
    d = n(435371),
    c = n(397927),
    h = n(803306),
    g = n(928039),
    I = n(485947),
    A = n(545059),
    f = n(290863),
    E = n(994500),
    m = n(287809),
    S = n(256415),
    _ = n(996439),
    p = n(810412),
    N = n(914853),
    T = n(483392),
    y = n(236884),
    C = n(542080),
    x = n(179917),
    v = n(419072),
    M = n(67103),
    D = n(554932),
    R = n(406595),
    O = n(557404),
    U = n(535973),
    G = n(125117),
    w = n(652215),
    L = n(895867),
    F = n(985018),
    b = n(488494),
    k = n(416001);
function P(e) {
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
            getDragHandleProps: A,
        } = e,
        f = !o,
        E = null != h && h === t,
        m = E && g === U.I.BEFORE,
        S = E && g === U.I.AFTER;
    return (0, l.jsx)(I.A, {
        className: s()(k.uW, { [b.EU]: f, [b.Me]: null != d && d === t, [b.hV]: E, [b.nH]: m, [b._M]: S }),
        children: (0, l.jsx)("div", {
            ...A(t, f),
            onContextMenu: u,
            children: (0, l.jsxs)(c.DUT, {
                onClick: a,
                "aria-hidden": !0,
                className: k.Ws,
                children: [i, (0, l.jsx)(T.C, { isCollapsed: r, size: "md", className: k.t4 })],
            }),
        }),
    });
}
function j(e) {
    return Array.from(e).sort();
}
let V = (0, a.throttle)(
    (e) => {
        (0, p.Y)(w.uss.FRIENDS, {
            locked: S.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    { leading: !0, trailing: !1 },
);
function H() {}
function Y(e) {
    let { onPrimaryAction: t, onContextMenu: n, onFriendVisible: r } = e,
        [s, I] = i.useState(new Set()),
        [S, T] = i.useState(new Set()),
        b = i.useCallback(
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
                    T((l) => {
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
        Y = (0, p.Dk)(() => s, [s]),
        W = (0, p.Dk)(() => S, [S]);
    i.useEffect(() => {
        0 !== Y.size && V({ shownUserIds: j(Y), liveUserIds: j(W) });
    }, [Y, W]);
    let z = (0, G.b)(),
        { searchQuery: B, setSearchQuery: $, clearSearch: K, ...X } = (0, G.n)(z),
        { showSuggestions: Z, setShowSuggestions: Q } = (0, C.A)(),
        J = B.trim().length > 0,
        q = i.useMemo(() => X.groups.filter((e) => e.users.length > 0), [X.groups]),
        ee = i.useMemo(() => z.groups.map((e) => e.id), [z.groups]),
        {
            draggedGroupId: et,
            dropTargetGroupId: en,
            dropTargetPosition: el,
            getDragHandleProps: ei,
        } = (0, U.s)({ groupIds: ee, isDisabled: J, onCommitNewOrder: A.A.reorderGroups }),
        [er, es] = (0, o.bG)([R.A], () => R.A.getFavoriteTargetIdsForTab(N.x.FRIENDS), [], _.D),
        ea = (0, o.bG)([m.default, f.A, E.A], () => {
            let e = [];
            for (let t of er) {
                let n = m.default.getUser(t);
                null != n && e.push({ user: n, activities: f.A.getActivities(t), nickname: E.A.getNickname(t) });
            }
            return e;
        }, [er]),
        eu = i.useRef(new Set());
    i.useEffect(() => {
        for (let e of er)
            null == m.default.getUser(e) &&
                (eu.current.has(e) ||
                    (eu.current.add(e),
                    (0, h.wz)(e).catch(() => {
                        eu.current.delete(e);
                    })));
    }, [er]);
    let eo = i.useMemo(() => {
            let e = B.trim().toLowerCase();
            return "" === e
                ? ea
                : ea.filter((t) => {
                      let { user: n, activities: l, nickname: i } = t;
                      return [n.username, n.globalName, i, ...l.map((e) => e.name)]
                          .filter((e) => null != e && "" !== e.trim())
                          .some((t) => t.toLowerCase().includes(e));
                  });
        }, [ea, B]),
        ed = es > 0 && eo.length > 0,
        ec =
            !ed &&
            0 === q.length &&
            0 === X.friendRequests.length &&
            (!Z || 0 === X.suggestions.length) &&
            0 === X.sameActivity.length &&
            0 === X.inGame.length &&
            0 === X.activities.length &&
            0 === X.online.length &&
            0 === X.offline.length,
        eh = (0, o.bG)([v.A], () => v.A.getCollapsedSectionOverridesForTab(N.x.FRIENDS), []),
        eg = i.useRef(null),
        eI = (0, g.A)("friends-popout", eg),
        eA = i.useCallback((e) => {
            (0, D.G)({ tab: N.x.FRIENDS, sectionKey: e });
        }, []),
        ef = i.useCallback((e) => eh[e] ?? v.A.isSectionCollapsedByDefault(N.x.FRIENDS, e), [eh]),
        eE = i.useCallback(
            (e) => {
                e.stopPropagation(), Q(!1);
            },
            [Q],
        ),
        em = i.useCallback(
            (0, a.debounce)(
                () => {
                    t?.({ type: M.c.SEARCH_FRIENDS });
                },
                1e3,
                { leading: !0, trailing: !1 },
            ),
            [t],
        ),
        eS = i.useCallback(
            (e) => {
                $(e), em(), eg.current?.scrollToTop();
            },
            [$, em],
        ),
        e_ = i.useCallback(() => {
            K(), em(), eg.current?.scrollToTop();
        }, [K, em]),
        ep = i.useMemo(() => {
            let e = (e) => {
                let t = f.A.getStatus(e);
                return t !== w.clD.ONLINE && t !== w.clD.IDLE && t !== w.clD.DND;
            };
            if (ec) return [{ kind: "EMPTY_STATE", key: "EMPTY_STATE", title: "", count: 0, length: 1, rows: [] }];
            let t = [];
            if (ed) {
                let n = ef("FAVORITES") ? eo.filter((t) => !e(t.user.id)) : eo;
                t.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: F.intl.string(L.default.GKTlS6),
                    count: eo.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (X.friendRequests.length > 0) {
                let e = X.friendRequests,
                    n = ef("FRIEND_REQUESTS") ? [] : e;
                t.push({
                    kind: "FRIEND_REQUESTS",
                    key: "FRIEND_REQUESTS",
                    title: F.intl.formatToPlainString(F.t.xxFCW8, { count: e.length }),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            for (let n of q) {
                let l = `GROUP:${n.id}`,
                    i = n.users,
                    r = ef(l) ? i.filter((t) => !e(t.user.id)) : i;
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
            if (X.sameActivity.length > 0) {
                let e = X.sameActivity,
                    n = ef("SAME_ACTIVITY") ? [] : e;
                t.push({
                    kind: "SAME_ACTIVITY",
                    key: "SAME_ACTIVITY",
                    title: z.currentActivityName,
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (X.inGame.length > 0) {
                let e = X.inGame,
                    n = ef("IN_GAME") ? [] : e;
                t.push({
                    kind: "IN_GAME",
                    key: "IN_GAME",
                    title: F.intl.string(L.default.trKJoT),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (X.activities.length > 0) {
                let e = X.activities,
                    n = ef("ACTIVITIES") ? [] : e;
                t.push({
                    kind: "ACTIVITIES",
                    key: "ACTIVITIES",
                    title: F.intl.string(F.t.TxqPQR),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (Z && X.suggestions.length > 0) {
                let e = X.suggestions,
                    n = ef("SUGGESTIONS") ? [] : e;
                t.push({
                    kind: "SUGGESTIONS",
                    key: "SUGGESTIONS",
                    title: F.intl.string(F.t.qm9dSj),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (X.online.length > 0) {
                let e = X.online,
                    n = ef("ONLINE") ? [] : e;
                t.push({
                    kind: "ONLINE",
                    key: "ONLINE",
                    title: F.intl.string(F.t.WbGtnH),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            if (X.offline.length > 0) {
                let e = X.offline,
                    n = ef("OFFLINE") ? [] : e;
                t.push({
                    kind: "OFFLINE",
                    key: "OFFLINE",
                    title: F.intl.string(F.t.Vv0abJ),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1),
                });
            }
            return t;
        }, [
            ef,
            X.friendRequests,
            q,
            X.sameActivity,
            X.activities,
            X.inGame,
            X.suggestions,
            X.online,
            X.offline,
            z.currentActivityName,
            ec,
            Z,
            ed,
            eo,
        ]),
        eN = i.useCallback((e) => ep[e], [ep]),
        eT = i.useCallback(
            (e) => {
                let { section: t } = e,
                    i = eN(t);
                if (null == i || "EMPTY_STATE" === i.kind) return null;
                let r = ef(i.key),
                    s = i.title,
                    a = i.count,
                    u = "GROUP" === i.kind,
                    o = r && "FRIEND_REQUESTS" !== i.kind ? `${s} (${a})` : s,
                    h =
                        u && null != n
                            ? (e) => {
                                  n({ type: M.K.FRIEND_GROUP, event: e, groupId: i.group?.id ?? "", groupName: s });
                              }
                            : void 0;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(c.AC4, { children: F.intl.format(F.t.Uaqbke, { title: s, count: a }) }),
                        u
                            ? (0, l.jsx)(P, {
                                  groupId: i.group?.id ?? "",
                                  groupName: s,
                                  displayText: o,
                                  isCollapsed: r,
                                  onToggle: () => eA(i.key),
                                  onContextMenu: h,
                                  isReorderDisabled: J,
                                  draggedGroupId: et,
                                  dropTargetGroupId: en,
                                  dropTargetPosition: el,
                                  getDragHandleProps: ei,
                              })
                            : (0, l.jsx)(x.I, {
                                  title: s,
                                  count: "FRIEND_REQUESTS" === i.kind ? void 0 : a,
                                  isCollapsed: r,
                                  canCollapse: !0,
                                  onToggle: () => eA(i.key),
                                  rightAccessory:
                                      "SUGGESTIONS" === i.kind
                                          ? (0, l.jsx)(d.m_, {
                                                text: F.intl.string(F.t.N86XcP),
                                                children: (0, l.jsx)(c.DUT, {
                                                    className: k.LQ,
                                                    "aria-label": F.intl.string(F.t.N86XcP),
                                                    onClick: eE,
                                                    children: (0, l.jsx)(c.aXh, { size: "xs", color: "currentColor" }),
                                                }),
                                            })
                                          : null,
                              }),
                    ],
                });
            },
            [eN, ef, eA, J, et, en, el, ei, eE, n],
        ),
        ey = i.useCallback(
            (e) => {
                let i;
                if (ec)
                    return (0, l.jsx)(
                        "div",
                        {
                            className: k.y7,
                            children: (0, l.jsx)(c.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: F.intl.string(F.t["7sW4h1"]),
                            }),
                        },
                        "friends-popout-empty",
                    );
                let r = eN(e.section);
                if (null == r) return null;
                "GROUP" === r.kind && (i = r.group?.id);
                let s = r.rows[e.row];
                return null == s || null == s.user
                    ? null
                    : (0, l.jsx)(
                          "div",
                          {
                              children: (0, l.jsx)(y.Z, {
                                  ...s,
                                  closeParentPopout: H,
                                  isSuggestion: "SUGGESTIONS" === r.kind,
                                  shouldHighlightIfRecentlyAdded: "FAVORITES" === r.kind,
                                  appContext: w.BRT.OVERLAY,
                                  onPrimaryAction: t,
                                  onContextMenu: n,
                                  onFriendVisible: b,
                                  friendGroupId: i,
                              }),
                          },
                          `${e.section}:${s.user.id}`,
                      );
            },
            [eN, ec, H, t, n, b],
        ),
        eC = i.useMemo(() => ep.map((e) => e.length), [ep]),
        ex = i.useCallback(
            (e) => {
                let t = ep.findIndex((e) => "FAVORITES" === e.kind);
                if (-1 === t) return null;
                let n = ep[t],
                    l = n?.rows.findIndex((t) => t.user.id === e) ?? -1;
                return -1 !== l ? { section: t, row: l } : null;
            },
            [ep],
        ),
        ev = i.useCallback(() => {
            let e = ep.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [ep]);
    (0, O.$)({
        scrollerRef: eg,
        favoriteTargetIds: er,
        getScrollTargetForTargetId: (e) => ex(e),
        getFallbackScrollTarget: ev,
        padding: 8,
        animate: !1,
    });
    let eM = i.useCallback(() => 40, []),
        eD = i.useCallback(
            (e) => {
                if (ec) return 300;
                let t = eN(e);
                return null == t ? 50 : 50 * (0 !== t.rows.length);
            },
            [eN, ec],
        );
    return (0, l.jsxs)("div", {
        className: k.kL,
        children: [
            (0, l.jsx)("div", {
                className: k.MT,
                children: (0, l.jsx)(c.IWV, {
                    query: B,
                    onChange: eS,
                    onClear: e_,
                    placeholder: F.intl.string(F.t.lLDtTK),
                    size: "md",
                }),
            }),
            (0, l.jsx)(u.hD, {
                navigator: eI,
                children: (0, l.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...i } = e;
                        return (0, l.jsx)(c.skg, {
                            children: (e) =>
                                (0, l.jsx)(c.B8B, {
                                    innerRole: n,
                                    innerAriaLabel: F.intl.string(F.t.TdEu5X),
                                    ref: (e) => {
                                        (eg.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: k.p_,
                                    sectionHeight: eM,
                                    rowHeight: eD,
                                    sidebarHeight: 0,
                                    renderSection: eT,
                                    renderRow: ey,
                                    sections: eC,
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

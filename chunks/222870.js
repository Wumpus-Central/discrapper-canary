n.d(t, { t: () => P }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(735438),
    s = n(837381),
    a = n(311907),
    u = n(397927),
    o = n(928039),
    d = n(47167),
    c = n(379078),
    h = n(704554),
    g = n(594831),
    I = n(734057),
    A = n(71393),
    f = n(222823),
    E = n(994500),
    m = n(287809),
    S = n(645959),
    p = n(256415),
    N = n(403362),
    T = n(996439),
    _ = n(810412),
    C = n(914853),
    y = n(179917),
    x = n(419072),
    M = n(437331),
    v = n(91868),
    D = n(554932),
    R = n(406595),
    U = n(557404),
    O = n(652215),
    G = n(895867),
    w = n(985018),
    F = n(416001);
function L(e) {
    return Array.from(e).sort();
}
let b = (0, r.throttle)(
        (e) => {
            (0, _.Y)(O.uss.FRIENDS, {
                locked: p.default.isInstanceLocked(),
                shownUserIds: e.shownUserIds,
                liveUserIds: [],
                contentInventoryIds: e.contentInventoryIds,
            });
        },
        3e3,
        { leading: !0, trailing: !1 },
    ),
    k = {
        searchType: c.n.REGEX,
        sortType: c.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { channel: t } = e,
                n = [(0, d.m1)(t, m.default, E.A), t.name, t.id];
            if (t.isDM()) {
                let e = t.getRecipientId(),
                    l = m.default.getUser(e),
                    i = E.A.getNickname(e);
                n.push(l?.username, l?.globalName, i);
            } else if (t.isMultiUserDM())
                for (let e of t.recipients ?? []) {
                    let t = m.default.getUser(e),
                        l = E.A.getNickname(e);
                    n.push(t?.username, t?.globalName, l);
                }
            let l = null != t.guild_id ? (A.A.getGuild(t.guild_id)?.name ?? null) : null;
            return null != l && n.push(l), n.filter(N.Vq);
        },
        throttleMs: 100,
    };
function P() {
    let e,
        { onPrimaryAction: t, onContextMenu: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [r, d] = i.useState(""),
        c = r.trim().toLowerCase(),
        A =
            ((e = (0, g.Dz)()),
            (0, a.yK)([S.default, I.A], () => {
                let t = [];
                for (let e of S.default.getPrivateChannelIds()) {
                    let n = I.A.getChannel(e);
                    null != n && t.push({ channel: n, voiceStates: [] });
                }
                for (let n of e) t.push(n);
                return t;
            }, [e])),
        [E, m] = i.useState([]);
    (0, h.RT)(r, A, m, k);
    let p = i.useRef(null),
        N = (0, o.A)("friends-widget-messages", p),
        [O, P] = (0, a.bG)([R.A], () => R.A.getFavoriteTargetIdsForTab(C.x.MESSAGES), [], T.D),
        [j, V] = (0, a.bG)(
            [v.A],
            () => {
                let [e, t] = v.A.getRows(v.Y.ACTIVE_NOW),
                    [n] = v.A.getRows(v.Y.DMS),
                    [l] = v.A.getRows(v.Y.RECENT_TEXT),
                    i = n.slice(0, 5),
                    r = l.slice(0, 8);
                return [{ activeNowRows: e.slice(0, 8), dmRows: i, recentTextRows: r }, t];
            },
            [],
            T.D,
        ),
        H = (0, a.bG)([x.A], () => x.A.getCollapsedSectionOverridesForTab(C.x.MESSAGES), []),
        Y = i.useCallback((e) => {
            (0, D.G)({ tab: C.x.MESSAGES, sectionKey: e });
        }, []),
        W = i.useMemo(() => {
            let e = new Set();
            for (let t of O) e.add(t);
            for (let t of j.dmRows) e.add(t.channelId);
            for (let t of j.activeNowRows) e.add(t.channelId);
            for (let t of j.recentTextRows) e.add(t.channelId);
            return Array.from(e);
        }, [O, j.activeNowRows, j.dmRows, j.recentTextRows]),
        { unreadOrMentionChannels: z } = (0, a.cf)([f.Ay], () => {
            let e = new Set();
            for (let t of W) {
                let n = f.Ay.hasUnread(t),
                    l = f.Ay.getMentionCount(t),
                    i = f.Ay.getIsMentionLowImportance(t),
                    r = l > 0 && !i;
                (n || r) && e.add(t);
            }
            return { unreadOrMentionChannels: e };
        }, [W]),
        $ = i.useMemo(() => {
            let e = (e) => !0 === H[e],
                t = (e) => z.has(e),
                n = [];
            if (0 === V) return [];
            if ("" !== c)
                return (
                    n.push({
                        kind: "SEARCH_RESULTS",
                        key: "SEARCH_RESULTS",
                        title: w.intl.string(G.default.HGimIS),
                        count: E.length,
                        channelIds: E.map((e) => e.channel.id),
                        length: E.length,
                    }),
                    n
                );
            if (O.length > 0 && P > 0) {
                let l = e("FAVORITES") ? O.filter(t) : O;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: w.intl.string(G.default.GKTlS6),
                    count: O.length,
                    channelIds: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (j.activeNowRows.length > 0) {
                let t = j.activeNowRows.map((e) => e.channelId),
                    l = e("ACTIVE_NOW") ? [] : t;
                n.push({
                    kind: "ACTIVE_NOW",
                    key: "ACTIVE_NOW",
                    title: w.intl.string(G.default.d3yO98),
                    count: t.length,
                    channelIds: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (j.dmRows.length > 0) {
                let l = j.dmRows.map((e) => e.channelId),
                    i = e("DMS") ? l.filter(t) : l;
                n.push({
                    kind: "DMS",
                    key: "DMS",
                    title: w.intl.string(w.t.YUU0RF),
                    count: l.length,
                    channelIds: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (j.recentTextRows.length > 0) {
                let l = j.recentTextRows.map((e) => e.channelId),
                    i = e("TEXT_CHANNELS") ? l.filter(t) : l;
                n.push({
                    kind: "TEXT_CHANNELS",
                    key: "TEXT_CHANNELS",
                    title: w.intl.string(G.default.uC6Lhg),
                    count: l.length,
                    channelIds: i,
                    length: Math.max(i.length, 1),
                });
            }
            return n;
        }, [H, z, c, O, j.activeNowRows, j.dmRows, j.recentTextRows, P, E, V]),
        B = i.useMemo(() => $.map((e) => e.length), [$]),
        K = i.useCallback(
            (e) => {
                let t = $.findIndex((e) => "FAVORITES" === e.kind);
                if (-1 === t) {
                    for (let t = 0; t < $.length; t += 1) {
                        let n = $[t].channelIds.findIndex((t) => t === e);
                        if (-1 !== n) return { section: t, row: n };
                    }
                    return null;
                }
                let n = $[t],
                    l = n?.channelIds.findIndex((t) => t === e) ?? -1;
                return -1 !== l ? { section: t, row: l } : null;
            },
            [$],
        ),
        X = i.useCallback(() => {
            let e = $.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [$]);
    (0, U.$)({
        scrollerRef: p,
        favoriteTargetIds: O,
        getScrollTargetForTargetId: (e) => K(e),
        getFallbackScrollTarget: X,
        padding: 8,
        animate: !1,
    });
    let Z = (0, _.Dk)(() => {
            let e = new Set();
            for (let t of $) for (let n of t.channelIds) e.add(n);
            return e;
        }, [$]),
        { shownUserIds: Q, contentInventoryIds: J } = (0, a.bG)(
            [],
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let l of e) {
                        let e = I.A.getChannel(l);
                        if (null != e) {
                            if (e.isDM()) {
                                let n = e.getRecipientId?.() ?? null;
                                null != n && t.add(n);
                                continue;
                            }
                            if (e.isMultiUserDM()) {
                                for (let n of e.recipients ?? []) t.add(n);
                                continue;
                            }
                            n.add(l);
                        }
                    }
                    return { shownUserIds: t, contentInventoryIds: n };
                })(Z),
            [Z],
        ),
        q = (0, _.Dk)(() => Q, [Q]),
        ee = (0, _.Dk)(() => J, [J]);
    i.useEffect(() => {
        (0 !== q.size || 0 !== ee.size) && b({ shownUserIds: L(q), contentInventoryIds: L(ee) });
    }, [q, ee]);
    let et = i.useCallback((e) => $[e], [$]),
        en = i.useCallback(
            (e) => {
                let { section: t } = e,
                    n = et(t);
                if (null == n) return null;
                let i = "SEARCH_RESULTS" !== n.kind,
                    r = i && !0 === H[n.key];
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(u.AC4, { children: n.title }),
                        (0, l.jsx)(y.I, {
                            title: n.title,
                            count: n.count,
                            isCollapsed: r,
                            canCollapse: i,
                            onToggle: () => Y(n.key),
                        }),
                    ],
                });
            },
            [H, et, Y],
        ),
        el = i.useCallback(
            (e) => {
                let i = et(e.section);
                if (null == i) return null;
                let r = i.channelIds[e.row];
                if (null == r) return null;
                let s = `${i.key}:${e.row}`;
                return (0, l.jsx)(
                    M.V,
                    {
                        channelId: r,
                        listItemId: s,
                        shouldHighlightIfRecentlyAdded: "FAVORITES" === i.kind,
                        onPrimaryAction: t,
                        onContextMenu: n,
                    },
                    s,
                );
            },
            [et, n, t],
        ),
        ei = i.useCallback(() => 40, []),
        er = i.useCallback(
            (e, t) => {
                let n = et(e);
                return null == n ? 50 : 50 * (null != n.channelIds[t]);
            },
            [et],
        ),
        es = i.useCallback((e) => {
            d(e), p.current?.scrollToTop();
        }, []);
    return (0, l.jsxs)("div", {
        className: F.kL,
        children: [
            (0, l.jsx)("div", {
                className: F.MT,
                children: (0, l.jsx)(u.IWV, {
                    query: r,
                    onChange: es,
                    onClear: () => d(""),
                    placeholder: w.intl.string(G.default["xB/0Z9"]),
                    size: "md",
                }),
            }),
            (0, l.jsx)(s.hD, {
                navigator: N,
                children: (0, l.jsx)(s.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...i } = e;
                        return (0, l.jsx)(u.skg, {
                            children: (e) =>
                                (0, l.jsx)(u.B8B, {
                                    innerRole: n,
                                    innerAriaLabel: w.intl.string(w.t.OIgYlQ),
                                    ref: (e) => {
                                        (p.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: F.p_,
                                    sectionHeight: ei,
                                    rowHeight: er,
                                    sidebarHeight: 0,
                                    renderSection: en,
                                    renderRow: el,
                                    sections: B,
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

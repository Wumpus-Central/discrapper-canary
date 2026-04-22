n.d(t, { t: () => H }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(735438),
    s = n(837381),
    a = n(311907),
    u = n(140735),
    o = n(892547),
    d = n(312138),
    c = n(475825),
    h = n(928039),
    g = n(47167),
    m = n(379078),
    I = n(704554),
    E = n(594831),
    A = n(734057),
    f = n(71393),
    p = n(222823),
    S = n(994500),
    N = n(287809),
    x = n(645959),
    T = n(256415),
    _ = n(403362),
    y = n(996439),
    v = n(810412),
    C = n(914853),
    R = n(179917),
    D = n(419072),
    b = n(437331),
    j = n(91868),
    M = n(554932),
    k = n(406595),
    O = n(557404),
    w = n(652215),
    L = n(21197),
    F = n(985018),
    G = n(188644);
function U(e) {
    return Array.from(e).sort();
}
let P = (0, r.throttle)(
        (e) => {
            (0, v.Y)(w.uss.FRIENDS, {
                locked: T.default.isInstanceLocked(),
                shownUserIds: e.shownUserIds,
                liveUserIds: [],
                contentInventoryIds: e.contentInventoryIds,
            });
        },
        3e3,
        { leading: !0, trailing: !1 },
    ),
    V = {
        searchType: m.n.REGEX,
        sortType: m.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { channel: t } = e,
                n = [(0, g.m1)(t, N.default, S.A), t.name, t.id];
            if (t.isDM()) {
                let e = t.getRecipientId(),
                    l = N.default.getUser(e),
                    i = S.A.getNickname(e);
                n.push(l?.username, l?.globalName, i);
            } else if (t.isMultiUserDM())
                for (let e of t.recipients ?? []) {
                    let t = N.default.getUser(e),
                        l = S.A.getNickname(e);
                    n.push(t?.username, t?.globalName, l);
                }
            let l = null != t.guild_id ? (f.A.getGuild(t.guild_id)?.name ?? null) : null;
            return null != l && n.push(l), n.filter(_.Vq);
        },
        throttleMs: 100,
    };
function H() {
    let e,
        { onPrimaryAction: t, onContextMenu: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [r, g] = i.useState(""),
        m = r.trim().toLowerCase(),
        f =
            ((e = (0, E.Dz)()),
            (0, a.yK)([x.default, A.A], () => {
                let t = [];
                for (let e of x.default.getPrivateChannelIds()) {
                    let n = A.A.getChannel(e);
                    null != n && t.push({ channel: n, voiceStates: [] });
                }
                for (let n of e) t.push(n);
                return t;
            }, [e])),
        [S, N] = i.useState([]);
    (0, I.RT)(r, f, N, V);
    let T = i.useRef(null),
        _ = (0, h.A)("friends-widget-messages", T),
        [w, H] = (0, a.bG)([k.A], () => k.A.getFavoriteTargetIdsForTab(C.x.MESSAGES), [], y.D),
        [Y, K] = (0, a.bG)(
            [j.A],
            () => {
                let [e, t] = j.A.getRows(j.Y.ACTIVE_NOW),
                    [n] = j.A.getRows(j.Y.DMS),
                    [l] = j.A.getRows(j.Y.RECENT_TEXT),
                    i = n.slice(0, 5),
                    r = l.slice(0, 8);
                return [{ activeNowRows: e.slice(0, 8), dmRows: i, recentTextRows: r }, t];
            },
            [],
            y.D,
        ),
        z = (0, a.bG)([D.A], () => D.A.getCollapsedSectionOverridesForTab(C.x.MESSAGES), []),
        X = i.useCallback((e) => {
            (0, M.G)({ tab: C.x.MESSAGES, sectionKey: e });
        }, []),
        Z = i.useMemo(() => {
            let e = new Set();
            for (let t of w) e.add(t);
            for (let t of Y.dmRows) e.add(t.channelId);
            for (let t of Y.activeNowRows) e.add(t.channelId);
            for (let t of Y.recentTextRows) e.add(t.channelId);
            return Array.from(e);
        }, [w, Y.activeNowRows, Y.dmRows, Y.recentTextRows]),
        { unreadOrMentionChannels: B } = (0, a.cf)([p.Ay], () => {
            let e = new Set();
            for (let t of Z) {
                let n = p.Ay.hasUnread(t),
                    l = p.Ay.getMentionCount(t),
                    i = p.Ay.getIsMentionLowImportance(t),
                    r = l > 0 && !i;
                (n || r) && e.add(t);
            }
            return { unreadOrMentionChannels: e };
        }, [Z]),
        W = i.useMemo(() => {
            let e = (e) => !0 === z[e],
                t = (e) => B.has(e),
                n = [];
            if (0 === K) return [];
            if ("" !== m)
                return (
                    n.push({
                        kind: "SEARCH_RESULTS",
                        key: "SEARCH_RESULTS",
                        title: F.intl.string(L.default.HGimIS),
                        count: S.length,
                        channelIds: S.map((e) => e.channel.id),
                        length: S.length,
                    }),
                    n
                );
            if (w.length > 0 && H > 0) {
                let l = e("FAVORITES") ? w.filter(t) : w;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: F.intl.string(L.default.GKTlS6),
                    count: w.length,
                    channelIds: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (Y.activeNowRows.length > 0) {
                let t = Y.activeNowRows.map((e) => e.channelId),
                    l = e("ACTIVE_NOW") ? [] : t;
                n.push({
                    kind: "ACTIVE_NOW",
                    key: "ACTIVE_NOW",
                    title: F.intl.string(L.default.d3yO98),
                    count: t.length,
                    channelIds: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (Y.dmRows.length > 0) {
                let l = Y.dmRows.map((e) => e.channelId),
                    i = e("DMS") ? l.filter(t) : l;
                n.push({
                    kind: "DMS",
                    key: "DMS",
                    title: F.intl.string(F.t.YUU0RF),
                    count: l.length,
                    channelIds: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (Y.recentTextRows.length > 0) {
                let l = Y.recentTextRows.map((e) => e.channelId),
                    i = e("TEXT_CHANNELS") ? l.filter(t) : l;
                n.push({
                    kind: "TEXT_CHANNELS",
                    key: "TEXT_CHANNELS",
                    title: F.intl.string(L.default.uC6Lhg),
                    count: l.length,
                    channelIds: i,
                    length: Math.max(i.length, 1),
                });
            }
            return n;
        }, [z, B, m, w, Y.activeNowRows, Y.dmRows, Y.recentTextRows, H, S, K]),
        $ = i.useMemo(() => W.map((e) => e.length), [W]),
        q = i.useCallback(
            (e) => {
                let t = W.findIndex((e) => "FAVORITES" === e.kind);
                if (-1 === t) {
                    for (let t = 0; t < W.length; t += 1) {
                        let n = W[t].channelIds.findIndex((t) => t === e);
                        if (-1 !== n) return { section: t, row: n };
                    }
                    return null;
                }
                let n = W[t],
                    l = n?.channelIds.findIndex((t) => t === e) ?? -1;
                return -1 !== l ? { section: t, row: l } : null;
            },
            [W],
        ),
        Q = i.useCallback(() => {
            let e = W.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [W]);
    (0, O.$)({
        scrollerRef: T,
        favoriteTargetIds: w,
        getScrollTargetForTargetId: (e) => q(e),
        getFallbackScrollTarget: Q,
        padding: 8,
        animate: !1,
    });
    let J = (0, v.Dk)(() => {
            let e = new Set();
            for (let t of W) for (let n of t.channelIds) e.add(n);
            return e;
        }, [W]),
        { shownUserIds: ee, contentInventoryIds: et } = (0, a.bG)(
            [],
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let l of e) {
                        let e = A.A.getChannel(l);
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
                })(J),
            [J],
        ),
        en = (0, v.Dk)(() => ee, [ee]),
        el = (0, v.Dk)(() => et, [et]);
    i.useEffect(() => {
        (0 !== en.size || 0 !== el.size) && P({ shownUserIds: U(en), contentInventoryIds: U(el) });
    }, [en, el]);
    let ei = i.useCallback((e) => W[e], [W]),
        er = i.useCallback(
            (e) => {
                let { section: t } = e,
                    n = ei(t);
                if (null == n) return null;
                let i = "SEARCH_RESULTS" !== n.kind,
                    r = i && !0 === z[n.key];
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(u.A, { children: n.title }),
                        (0, l.jsx)(R.I, {
                            title: n.title,
                            count: n.count,
                            isCollapsed: r,
                            canCollapse: i,
                            onToggle: () => X(n.key),
                        }),
                    ],
                });
            },
            [z, ei, X],
        ),
        es = i.useCallback(
            (e) => {
                let i = ei(e.section);
                if (null == i) return null;
                let r = i.channelIds[e.row];
                if (null == r) return null;
                let s = `${i.key}:${e.row}`;
                return (0, l.jsx)(
                    b.V,
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
            [ei, n, t],
        ),
        ea = i.useCallback(() => 40, []),
        eu = i.useCallback(
            (e, t) => {
                let n = ei(e);
                return null == n ? 50 : 50 * (null != n.channelIds[t]);
            },
            [ei],
        ),
        eo = i.useCallback((e) => {
            g(e), T.current?.scrollToTop();
        }, []);
    return (0, l.jsxs)("div", {
        className: G.kL,
        children: [
            (0, l.jsx)("div", {
                className: G.MT,
                children: (0, l.jsx)(o.I, {
                    query: r,
                    onChange: eo,
                    onClear: () => g(""),
                    placeholder: F.intl.string(L.default["xB/0Z9"]),
                    size: "md",
                }),
            }),
            (0, l.jsx)(s.hD, {
                navigator: _,
                children: (0, l.jsx)(s.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...i } = e;
                        return (0, l.jsx)(d.sk, {
                            children: (e) =>
                                (0, l.jsx)(c.OZ, {
                                    innerRole: n,
                                    innerAriaLabel: F.intl.string(F.t.OIgYlQ),
                                    ref: (e) => {
                                        (T.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: G.p_,
                                    sectionHeight: ea,
                                    rowHeight: eu,
                                    sidebarHeight: 0,
                                    renderSection: er,
                                    renderRow: es,
                                    sections: $,
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

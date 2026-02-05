n.d(t, { t: () => L }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(735438),
    r = n(837381),
    a = n(311907),
    u = n(397927),
    o = n(928039),
    d = n(47167),
    c = n(485947),
    h = n(379078),
    g = n(704554),
    I = n(594831),
    E = n(734057),
    f = n(71393),
    A = n(994500),
    m = n(287809),
    S = n(645959),
    p = n(256415),
    N = n(403362),
    T = n(996439),
    _ = n(810412),
    y = n(914853),
    C = n(437331),
    x = n(91868),
    v = n(406595),
    M = n(652215),
    D = n(895867),
    R = n(985018),
    U = n(416001);
function O(e) {
    return Array.from(e).sort();
}
let G = (0, s.throttle)(
        (e) => {
            (0, _.Y)(M.uss.FRIENDS, {
                locked: p.default.isInstanceLocked(),
                shownUserIds: e.shownUserIds,
                liveUserIds: [],
                contentInventoryIds: e.contentInventoryIds,
            });
        },
        3e3,
        { leading: !0, trailing: !1 },
    ),
    b = {
        searchType: h.n.REGEX,
        sortType: h.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { channel: t } = e,
                n = [(0, d.m1)(t, m.default, A.A), t.name, t.id];
            if (t.isDM()) {
                let e = t.getRecipientId(),
                    l = m.default.getUser(e),
                    i = A.A.getNickname(e);
                n.push(l?.username, l?.globalName, i);
            } else if (t.isMultiUserDM())
                for (let e of t.recipients ?? []) {
                    let t = m.default.getUser(e),
                        l = A.A.getNickname(e);
                    n.push(t?.username, t?.globalName, l);
                }
            let l = null != t.guild_id ? (f.A.getGuild(t.guild_id)?.name ?? null) : null;
            return null != l && n.push(l), n.filter(N.Vq);
        },
        throttleMs: 100,
    };
function w(e) {
    let { title: t } = e;
    return (0, l.jsx)(c.A, { className: U.uW, children: t });
}
function L() {
    let e,
        { onPrimaryAction: t, onContextMenu: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [s, d] = i.useState(""),
        c = s.trim().toLowerCase(),
        h =
            ((e = (0, I.Dz)()),
            (0, a.yK)([S.default, E.A], () => {
                let t = [];
                for (let e of S.default.getPrivateChannelIds()) {
                    let n = E.A.getChannel(e);
                    null != n && t.push({ channel: n, voiceStates: [] });
                }
                for (let n of e) t.push(n);
                return t;
            }, [e])),
        [f, A] = i.useState([]);
    (0, g.RT)(s, h, A, b);
    let m = i.useRef(null),
        p = (0, o.A)("friends-widget-messages", m),
        [N, M] = (0, a.bG)([v.A], () => v.A.getFavoriteTargetIdsForTab(y.x.MESSAGES), [], T.D),
        [L, k] = (0, a.bG)(
            [x.A],
            () => {
                let [e, t] = x.A.getRows(x.Y.ACTIVE_NOW),
                    [n] = x.A.getRows(x.Y.DMS),
                    [l] = x.A.getRows(x.Y.RECENT_TEXT),
                    i = n.slice(0, 5),
                    s = l.slice(0, 8);
                return [{ activeNowRows: e.slice(0, 10), dmRows: i, recentTextRows: s }, t];
            },
            [],
            T.D,
        ),
        F = i.useMemo(() => {
            let e = [];
            return 0 === k
                ? []
                : ("" !== c
                      ? e.push({
                            kind: "SEARCH_RESULTS",
                            key: "SEARCH_RESULTS",
                            title: R.intl.string(D.default.HGimIS),
                            channelIds: f.map((e) => e.channel.id),
                            length: f.length,
                        })
                      : (N.length > 0 &&
                            M > 0 &&
                            e.push({
                                kind: "FAVORITES",
                                key: "FAVORITES",
                                title: R.intl.string(D.default.GKTlS6),
                                channelIds: N,
                                length: N.length,
                            }),
                        L.dmRows.length > 0 &&
                            e.push({
                                kind: "DMS",
                                key: "DMS",
                                title: R.intl.string(R.t.YUU0RF),
                                channelIds: L.dmRows.map((e) => e.channelId),
                                length: L.dmRows.length,
                            }),
                        L.activeNowRows.length > 0 &&
                            e.push({
                                kind: "ACTIVE_NOW",
                                key: "ACTIVE_NOW",
                                title: R.intl.string(D.default.d3yO98),
                                channelIds: L.activeNowRows.map((e) => e.channelId),
                                length: L.activeNowRows.length,
                            }),
                        L.recentTextRows.length > 0 &&
                            e.push({
                                kind: "TEXT_CHANNELS",
                                key: "TEXT_CHANNELS",
                                title: R.intl.string(D.default.uC6Lhg),
                                channelIds: L.recentTextRows.map((e) => e.channelId),
                                length: L.recentTextRows.length,
                            })),
                  e);
        }, [c, N, L.activeNowRows, L.dmRows, L.recentTextRows, M, f, k]),
        P = i.useMemo(() => F.map((e) => e.length), [F]),
        j = (0, _.Dk)(() => {
            let e = new Set();
            for (let t of F) for (let n of t.channelIds) e.add(n);
            return e;
        }, [F]),
        { shownUserIds: V, contentInventoryIds: H } = (0, a.bG)(
            [],
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let l of e) {
                        let e = E.A.getChannel(l);
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
                })(j),
            [j],
        ),
        Y = (0, _.Dk)(() => V, [V]),
        z = (0, _.Dk)(() => H, [H]);
    i.useEffect(() => {
        (0 !== Y.size || 0 !== z.size) && G({ shownUserIds: O(Y), contentInventoryIds: O(z) });
    }, [Y, z]);
    let W = i.useCallback((e) => F[e], [F]),
        B = i.useCallback(
            (e) => {
                let { section: t } = e,
                    n = W(t);
                return null == n
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [(0, l.jsx)(u.AC4, { children: n.title }), (0, l.jsx)(w, { title: n.title })],
                      });
            },
            [W],
        ),
        $ = i.useCallback(
            (e) => {
                let i = W(e.section);
                if (null == i) return null;
                let s = `${i.key}:${e.row}`;
                switch (i.kind) {
                    case "SEARCH_RESULTS": {
                        let i = f[e.row].channel;
                        if (null == i) return null;
                        return (0, l.jsx)(
                            C.V,
                            { channelId: i.id, listItemId: s, onPrimaryAction: t, onContextMenu: n },
                            s,
                        );
                    }
                    case "FAVORITES": {
                        let r = i.channelIds[e.row];
                        if (null == r) return null;
                        return (0, l.jsx)(
                            C.V,
                            {
                                channelId: r,
                                listItemId: s,
                                shouldHighlightIfRecentlyAdded: !0,
                                onPrimaryAction: t,
                                onContextMenu: n,
                            },
                            s,
                        );
                    }
                    case "ACTIVE_NOW": {
                        let r = i.channelIds[e.row];
                        if (null == r) return null;
                        return (0, l.jsx)(
                            C.V,
                            { channelId: r, listItemId: s, onPrimaryAction: t, onContextMenu: n },
                            s,
                        );
                    }
                    case "DMS":
                        let r;
                        return null == (r = i.channelIds[e.row])
                            ? null
                            : (0, l.jsx)(C.V, { channelId: r, listItemId: s, onPrimaryAction: t, onContextMenu: n }, s);
                    case "TEXT_CHANNELS": {
                        let r = i.channelIds[e.row];
                        if (null == r) return null;
                        return (0, l.jsx)(
                            C.V,
                            { channelId: r, listItemId: s, onPrimaryAction: t, onContextMenu: n },
                            s,
                        );
                    }
                    default:
                        return i.kind, null;
                }
            },
            [W, n, t, f],
        ),
        X = i.useCallback(() => 40, []),
        K = i.useCallback(() => 50, []),
        Q = i.useCallback((e) => {
            d(e), m.current?.scrollToTop();
        }, []);
    return (0, l.jsxs)("div", {
        className: U.kL,
        children: [
            (0, l.jsx)("div", {
                className: U.MT,
                children: (0, l.jsx)(u.IWV, {
                    query: s,
                    onChange: Q,
                    onClear: () => d(""),
                    placeholder: R.intl.string(D.default["xB/0Z9"]),
                    size: "md",
                }),
            }),
            (0, l.jsx)(r.hD, {
                navigator: p,
                children: (0, l.jsx)(r.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...i } = e;
                        return (0, l.jsx)(u.skg, {
                            children: (e) =>
                                (0, l.jsx)(u.B8B, {
                                    innerRole: n,
                                    innerAriaLabel: R.intl.string(R.t.OIgYlQ),
                                    ref: (e) => {
                                        (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: U.p_,
                                    sectionHeight: X,
                                    rowHeight: K,
                                    sidebarHeight: 0,
                                    renderSection: B,
                                    renderRow: $,
                                    sections: P,
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

n.d(t, {
    t: () => L,
}),
    n(638769),
    n(896048),
    n(321073),
    n(733351);
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n(837381),
    s = n(311907),
    o = n(397927),
    u = n(928039),
    c = n(47167),
    d = n(485947),
    h = n(379078),
    p = n(704554),
    f = n(594831),
    g = n(734057),
    m = n(71393),
    y = n(994500),
    A = n(287809),
    v = n(645959),
    b = n(256415),
    E = n(403362),
    O = n(996439),
    x = n(810412),
    _ = n(914853),
    S = n(437331),
    I = n(91868),
    j = n(406595),
    T = n(652215),
    C = n(895867),
    N = n(985018),
    w = n(416001);

function P(e) {
    return Array.from(e).sort();
}
let D = (0, l.throttle)(
        (e) => {
            (0, x.Y)(T.uss.FRIENDS, {
                locked: b.default.isInstanceLocked(),
                shownUserIds: e.shownUserIds,
                liveUserIds: [],
                contentInventoryIds: e.contentInventoryIds,
            });
        },
        3e3,
        {
            leading: !0,
            trailing: !1,
        },
    ),
    R = {
        searchType: h.n.REGEX,
        sortType: h.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            var t, n, i;
            let { channel: r } = e,
                l = [(0, c.m1)(r, A.default, y.A), r.name, r.id];
            if (r.isDM()) {
                let e = r.getRecipientId(),
                    t = A.default.getUser(e),
                    n = y.A.getNickname(e);
                l.push(null == t ? void 0 : t.username, null == t ? void 0 : t.globalName, n);
            } else if (r.isMultiUserDM())
                for (let e of null != (i = r.recipients) ? i : []) {
                    let t = A.default.getUser(e),
                        n = y.A.getNickname(e);
                    l.push(null == t ? void 0 : t.username, null == t ? void 0 : t.globalName, n);
                }
            let a =
                null != r.guild_id && null != (t = null == (n = m.A.getGuild(r.guild_id)) ? void 0 : n.name) ? t : null;
            return null != a && l.push(a), l.filter(E.Vq);
        },
        throttleMs: 100,
    };

function k(e) {
    let { title: t } = e;
    return (0, i.jsx)(d.A, {
        className: w.uW,
        children: t,
    });
}

function M(e) {
    let { channelId: t, listItemId: n } = e;
    return (0, i.jsx)(S.V, {
        channelId: t,
        listItemId: n,
    });
}

function L() {
    let e,
        [t, n] = r.useState(""),
        l = t.trim().toLowerCase(),
        c =
            ((e = (0, f.Dz)()),
            (0, s.yK)([v.A, g.A], () => {
                let t = [];
                for (let e of v.A.getPrivateChannelIds()) {
                    let n = g.A.getChannel(e);
                    null != n &&
                        t.push({
                            channel: n,
                            voiceStates: [],
                        });
                }
                for (let n of e) t.push(n);
                return t;
            }, [e])),
        [d, h] = r.useState([]);
    (0, p.RT)(t, c, h, R);
    let m = r.useRef(null),
        y = (0, u.A)("friends-widget-messages", m),
        [A, b] = (0, s.bG)([j.A], () => j.A.getFavoriteTargetIdsForTab(_.x.MESSAGES), [], O.D),
        [E, T] = (0, s.bG)(
            [I.A],
            () => {
                let [e, t] = I.A.getRows(I.Y.ACTIVE_NOW),
                    [n] = I.A.getRows(I.Y.DMS),
                    [i] = I.A.getRows(I.Y.RECENT_TEXT),
                    r = n.slice(0, 5),
                    l = i.slice(0, 8);
                return [
                    {
                        activeNowRows: e.slice(0, 10),
                        dmRows: r,
                        recentTextRows: l,
                    },
                    t,
                ];
            },
            [],
            O.D,
        ),
        L = r.useMemo(() => {
            let e = [];
            return 0 === T
                ? []
                : ("" !== l
                      ? e.push({
                            kind: "SEARCH_RESULTS",
                            key: "SEARCH_RESULTS",
                            title: N.intl.string(C.default.HGimIS),
                            channelIds: d.map((e) => e.channel.id),
                            length: d.length,
                        })
                      : (A.length > 0 &&
                            b > 0 &&
                            e.push({
                                kind: "FAVORITES",
                                key: "FAVORITES",
                                title: N.intl.string(C.default.GKTlS6),
                                channelIds: A,
                                length: A.length,
                            }),
                        E.dmRows.length > 0 &&
                            e.push({
                                kind: "DMS",
                                key: "DMS",
                                title: N.intl.string(N.t.YUU0RF),
                                channelIds: E.dmRows.map((e) => e.channelId),
                                length: E.dmRows.length,
                            }),
                        E.activeNowRows.length > 0 &&
                            e.push({
                                kind: "ACTIVE_NOW",
                                key: "ACTIVE_NOW",
                                title: N.intl.string(C.default.d3yO98),
                                channelIds: E.activeNowRows.map((e) => e.channelId),
                                length: E.activeNowRows.length,
                            }),
                        E.recentTextRows.length > 0 &&
                            e.push({
                                kind: "TEXT_CHANNELS",
                                key: "TEXT_CHANNELS",
                                title: N.intl.string(C.default.uC6Lhg),
                                channelIds: E.recentTextRows.map((e) => e.channelId),
                                length: E.recentTextRows.length,
                            })),
                  e);
        }, [l, A, E.activeNowRows, E.dmRows, E.recentTextRows, b, d, T]),
        U = r.useMemo(() => L.map((e) => e.length), [L]),
        G = (0, x.Dk)(() => {
            let e = new Set();
            for (let t of L) for (let n of t.channelIds) e.add(n);
            return e;
        }, [L]),
        { shownUserIds: V, contentInventoryIds: z } = (0, s.bG)(
            [],
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let a of e) {
                        var i, r, l;
                        let e = g.A.getChannel(a);
                        if (null != e) {
                            if (e.isDM()) {
                                let n = null != (i = null == (r = e.getRecipientId) ? void 0 : r.call(e)) ? i : null;
                                null != n && t.add(n);
                                continue;
                            }
                            if (e.isMultiUserDM()) {
                                for (let n of null != (l = e.recipients) ? l : []) t.add(n);
                                continue;
                            }
                            n.add(a);
                        }
                    }
                    return {
                        shownUserIds: t,
                        contentInventoryIds: n,
                    };
                })(G),
            [G],
        ),
        F = (0, x.Dk)(() => V, [V]),
        H = (0, x.Dk)(() => z, [z]);
    r.useEffect(() => {
        (0 !== F.size || 0 !== H.size) &&
            D({
                shownUserIds: P(F),
                contentInventoryIds: P(H),
            });
    }, [F, H]);
    let Y = r.useCallback((e) => L[e], [L]),
        K = r.useCallback(
            (e) => {
                let { section: t } = e,
                    n = Y(t);
                return null == n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(o.AC4, {
                                  children: n.title,
                              }),
                              (0, i.jsx)(k, {
                                  title: n.title,
                              }),
                          ],
                      });
            },
            [Y],
        ),
        W = r.useCallback(
            (e) => {
                let t = Y(e.section);
                if (null == t) return null;
                let n = "".concat(t.key, ":").concat(e.row);
                switch (t.kind) {
                    case "SEARCH_RESULTS": {
                        let t = d[e.row].channel;
                        if (null == t) return null;
                        return (0, i.jsx)(
                            S.V,
                            {
                                channelId: t.id,
                                listItemId: n,
                            },
                            n,
                        );
                    }
                    case "FAVORITES": {
                        let r = t.channelIds[e.row];
                        if (null == r) return null;
                        return (0, i.jsx)(
                            S.V,
                            {
                                channelId: r,
                                listItemId: n,
                                shouldHighlightIfRecentlyAdded: !0,
                            },
                            n,
                        );
                    }
                    case "ACTIVE_NOW": {
                        let r = t.channelIds[e.row];
                        if (null == r) return null;
                        return (0, i.jsx)(
                            M,
                            {
                                channelId: r,
                                listItemId: n,
                            },
                            n,
                        );
                    }
                    case "DMS":
                        let r;
                        return null == (r = t.channelIds[e.row])
                            ? null
                            : (0, i.jsx)(
                                  S.V,
                                  {
                                      channelId: r,
                                      listItemId: n,
                                  },
                                  n,
                              );
                    case "TEXT_CHANNELS": {
                        let r = t.channelIds[e.row];
                        if (null == r) return null;
                        return (0, i.jsx)(
                            S.V,
                            {
                                channelId: r,
                                listItemId: n,
                            },
                            n,
                        );
                    }
                    default:
                        return t.kind, null;
                }
            },
            [Y, d],
        ),
        B = r.useCallback(() => 40, []),
        Z = r.useCallback(() => 50, []),
        X = r.useCallback((e) => {
            var t;
            n(e), null == (t = m.current) || t.scrollToTop();
        }, []);
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [
            (0, i.jsx)("div", {
                className: w.MT,
                children: (0, i.jsx)(o.IWV, {
                    query: t,
                    onChange: X,
                    onClear: () => n(""),
                    placeholder: N.intl.string(C.default["xB/0Z9"]),
                    size: "md",
                }),
            }),
            (0, i.jsx)(a.hD, {
                navigator: y,
                children: (0, i.jsx)(a.PR, {
                    children: (e) => {
                        let { ref: t, role: n } = e,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    r,
                                    l = {};
                                if ("u" > typeof Reflect && Reflect.ownKeys) {
                                    for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                                        (i = n[r]),
                                            !(t.indexOf(i) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, i) &&
                                                (l[i] = e[i]);
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
                                            (n = l[i]),
                                                !(t.indexOf(n) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                    (r[n] = e[n]);
                                        return r;
                                    })(e, t)),
                                    Object.getOwnPropertySymbols)
                                )
                                    for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                                        (i = n[r]),
                                            !(t.indexOf(i) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, i) &&
                                                (l[i] = e[i]);
                                return l;
                            })(e, ["ref", "role"]);
                        return (0, i.jsx)(o.skg, {
                            children: (e) =>
                                (0, i.jsx)(
                                    o.B8B,
                                    (function (e) {
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
                                    })(
                                        {
                                            innerRole: n,
                                            innerAriaLabel: N.intl.string(N.t.OIgYlQ),
                                            ref: (e) => {
                                                var n;
                                                (m.current = e),
                                                    (t.current =
                                                        null != (n = null == e ? void 0 : e.getScrollerNode())
                                                            ? n
                                                            : null);
                                            },
                                            className: w.p_,
                                            sectionHeight: B,
                                            rowHeight: Z,
                                            sidebarHeight: 0,
                                            renderSection: K,
                                            renderRow: W,
                                            sections: U,
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

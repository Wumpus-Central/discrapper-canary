n.d(t, { Z: () => R }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(392711),
    o = n.n(s),
    c = n(876215),
    d = n(126313),
    u = n(442837),
    m = n(433517),
    p = n(481060),
    h = n(570140),
    f = n(812206),
    b = n(835473),
    x = n(681619),
    g = n(810568),
    v = n(168524),
    j = n(404577),
    y = n(823379),
    C = n(550532),
    _ = n(71585),
    S = n(146282),
    E = n(780106),
    T = n(650613),
    O = n(789086),
    N = n(206583),
    P = n(738299),
    w = n(663618);
let I = [
    {
        key: "type",
        cellClassName: l()(P.cell, P.cellType),
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(p.Text, {
                variant: "text-md/semibold",
                children: c.s[t],
            });
        },
    },
    {
        key: "count",
        cellClassName: l()(P.cell, P.cellCount),
        render(e) {
            let { entries: t } = e;
            return (0, a.jsx)("div", {
                children: (0, a.jsx)(p.Text, {
                    variant: "text-md/normal",
                    children: t.length,
                }),
            });
        },
    },
    {
        key: "only?",
        cellClassName: P.cell,
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(k, { type: t });
        },
    },
];
function k(e) {
    var t, n;
    let { type: r } = e,
        i = (0, u.e7)([S.Z], () => S.Z.getFilters()),
        l = null != (n = null == i || null == (t = i.types) ? void 0 : t.has(r)) && n;
    return (0, a.jsx)(p.rsf, {
        checked: l,
        onChange: function () {
            l
                ? h.Z.dispatch({
                      type: "CONTENT_INVENTORY_SET_FILTERS",
                      filters: void 0,
                  })
                : h.Z.dispatch({
                      type: "CONTENT_INVENTORY_SET_FILTERS",
                      filters: { types: new Set([r]) },
                  });
        },
    });
}
function R() {
    var e, t;
    let n = (0, u.e7)([S.Z], () => S.Z.getFeed(N.YN.GLOBAL_FEED)),
        i = (0, u.e7)([S.Z], () => S.Z.getDebugImpressionCappingDisabled()),
        l = (0, u.e7)([_.Z], () => _.Z.getDebugFastImpressionCappingEnabled()),
        s = (function (e) {
            let t = o().groupBy(e, (e) => e.content_type);
            return Object.keys(t).map((e) => {
                let n = t[e];
                return {
                    key: "".concat(e),
                    type: n[0].content_type,
                    entries: n,
                };
            });
        })(null == n || null == (e = n.entries) ? void 0 : e.map((e) => e.content)),
        c = (0, u.e7)([S.Z], () => {
            var e;
            return (null == (e = S.Z.getFeedState(N.YN.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [k, R] = r.useState(""),
        Z = (0, u.e7)([j.Z, f.Z], () => {
            var e, t, n;
            return parseInt(k) > 0
                ? k
                : null != (n = null == (e = j.Z.getGameByName(k)) ? void 0 : e.id)
                  ? n
                  : null == (t = f.Z.getApplicationByName(k))
                    ? void 0
                    : t.id;
        }, [k]),
        D = (0, v.Z)({
            applicationId: Z,
            location: "DevToolsContentInventory",
            source: g.m1.DevTools,
        }),
        M = Object.entries(null != (t = m.K.get("GameProfileModal")) ? t : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        L = (0, b.Z)(M).filter(y.lm),
        U = (0, u.e7)([C.Z], () => C.Z.getFakeGameToShow());
    return (0, a.jsx)("div", {
        className: w.panel,
        children: (0, a.jsxs)(p.zJl, {
            className: P.content,
            children: [
                (0, a.jsxs)(p.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(p.Text, {
                            variant: "text-md/semibold",
                            children: "Inventory",
                        }),
                        s.length > 0 &&
                            (0, a.jsx)(x.Z, {
                                columns: I,
                                data: s,
                            }),
                        (0, a.jsx)(O.Z, {}),
                        (0, a.jsx)(p.Button, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: N.YN.GLOBAL_FEED,
                                    feature: d.L.INBOX,
                                });
                            },
                            loading: c,
                        }),
                    ],
                }),
                (0, a.jsxs)(p.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(p.Text, {
                            variant: "text-md/semibold",
                            children: "Impression Capping",
                        }),
                        (0, a.jsx)(p.Button, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, a.jsx)(p.Button, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, a.jsx)(p.Button, {
                            variant: "primary",
                            text: i ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, a.jsx)(p.Button, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, a.jsx)(T.Z, {}),
                (0, a.jsxs)(p.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(p.Text, {
                            variant: "text-md/semibold",
                            children: "Game Profile",
                        }),
                        (0, a.jsx)(p.oil, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && R(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key &&
                                    (k === e.currentTarget.value ? null == D || D(e) : R(e.currentTarget.value));
                            },
                            error:
                                k.length > 0 && null == D
                                    ? "No game profile for ".concat(null != Z ? Z : k + " - try by id", ".")
                                    : void 0,
                            helperText: null != D ? "Game profile found" : void 0,
                        }),
                        (0, a.jsx)("ul", {
                            children: L.map((e) =>
                                (0, a.jsx)(
                                    "li",
                                    { children: (0, a.jsx)(A, { application: e }) },
                                    "follow-game-".concat(e.id),
                                ),
                            ),
                        }),
                    ],
                }),
                (0, a.jsxs)(p.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(p.Text, {
                            variant: "text-md/semibold",
                            children: "Activity Sharing",
                        }),
                        (0, a.jsx)(p.PhF, {
                            label: "Force show game",
                            options: E.h.map((e) => ({
                                label: e,
                                value: e,
                                id: e,
                            })),
                            value: U,
                            onSelectionChange: function (e) {
                                h.Z.dispatch({
                                    type: "CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING",
                                    gameToShow: e,
                                });
                            },
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let A = (e) => {
    let { application: t } = e,
        n = (0, v.Z)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: g.m1.DevTools,
        });
    return (0, a.jsx)(p.P3F, {
        onClick: n,
        children: (0, a.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.name,
        }),
    });
};

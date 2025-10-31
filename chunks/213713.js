n.d(t, { Z: () => R }), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(876215),
    d = n(126313),
    u = n(442837),
    m = n(433517),
    p = n(481060),
    h = n(570140),
    x = n(812206),
    g = n(835473),
    f = n(246992),
    b = n(681619),
    v = n(810568),
    j = n(168524),
    _ = n(77498),
    y = n(823379),
    C = n(550532),
    S = n(71585),
    E = n(146282),
    T = n(780106),
    N = n(650613),
    O = n(789086),
    P = n(206583),
    w = n(680027),
    I = n(451429);
let k = [
    {
        key: "type",
        cellClassName: r()(w.cell, w.cellType),
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
        cellClassName: r()(w.cell, w.cellCount),
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
        cellClassName: w.cell,
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(A, { type: t });
        },
    },
];
function A(e) {
    var t, n;
    let { type: i } = e,
        l = (0, u.e7)([E.Z], () => E.Z.getFilters()),
        r = null != (n = null == l || null == (t = l.types) ? void 0 : t.has(i)) && n;
    return (0, a.jsx)(p.rsf, {
        checked: r,
        onChange: function () {
            r
                ? h.Z.dispatch({
                      type: "CONTENT_INVENTORY_SET_FILTERS",
                      filters: void 0,
                  })
                : h.Z.dispatch({
                      type: "CONTENT_INVENTORY_SET_FILTERS",
                      filters: { types: new Set([i]) },
                  });
        },
    });
}
function R() {
    var e, t;
    let n = (0, u.e7)([E.Z], () => E.Z.getFeed(P.YN.GLOBAL_FEED)),
        l = (0, u.e7)([E.Z], () => E.Z.getDebugImpressionCappingDisabled()),
        r = (0, u.e7)([S.Z], () => S.Z.getDebugFastImpressionCappingEnabled()),
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
        c = (0, u.e7)([E.Z], () => {
            var e;
            return (null == (e = E.Z.getFeedState(P.YN.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [A, R] = i.useState(""),
        D = (0, u.e7)([_.Z, x.Z], () => {
            var e, t, n;
            return parseInt(A) > 0
                ? A
                : null != (n = null == (e = _.Z.getGameByName(A)) ? void 0 : e.id)
                  ? n
                  : null == (t = x.Z.getApplicationByName(A))
                    ? void 0
                    : t.id;
        }, [A]),
        L = (0, j.Z)({
            applicationId: D,
            location: "DevToolsContentInventory",
            source: v.m1.DevTools,
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
        U = (0, g.Z)(M).filter(y.lm),
        F = (0, u.e7)([C.Z], () => C.Z.getFakeGameToShow());
    return (0, a.jsx)("div", {
        className: I.panel,
        children: (0, a.jsxs)(p.zJl, {
            className: w.content,
            children: [
                (0, a.jsxs)(p.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(p.Text, {
                            variant: "text-md/semibold",
                            children: "Inventory",
                        }),
                        s.length > 0 &&
                            (0, a.jsx)(b.Z, {
                                columns: k,
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
                                    feedId: P.YN.GLOBAL_FEED,
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
                            text: l ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, a.jsx)(p.Button, {
                            variant: "primary",
                            text: r ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, a.jsx)(N.Z, {}),
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
                                    (A === e.currentTarget.value ? null == L || L(e) : R(e.currentTarget.value));
                            },
                            error:
                                A.length > 0 && null == L
                                    ? "No game profile for ".concat(null != D ? D : A + " - try by id", ".")
                                    : void 0,
                            successMessage: null != L ? "Game profile found" : void 0,
                        }),
                        (0, a.jsx)("ul", {
                            children: U.map((e) =>
                                (0, a.jsx)(
                                    "li",
                                    { children: (0, a.jsx)(Z, { application: e }) },
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
                        (0, a.jsx)(p.Text, {
                            variant: "text-md/normal",
                            children: "Force show game:",
                        }),
                        (0, a.jsx)(p.PhF, {
                            options: T.h.map((e) => ({
                                label: e,
                                value: e,
                            })),
                            isSelected: (e) => e === F,
                            select: function (e) {
                                h.Z.dispatch({
                                    type: "CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING",
                                    gameToShow: e,
                                });
                            },
                            serialize: (e) => e,
                            popoutLayerContext: f.O$,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let Z = (e) => {
    let { application: t } = e,
        n = (0, j.Z)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: v.m1.DevTools,
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

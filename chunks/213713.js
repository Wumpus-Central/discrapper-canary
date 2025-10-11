n.d(t, { Z: () => A }), n(388685);
var a = n(951288),
    r = n(647438),
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
    x = n(812206),
    f = n(835473),
    b = n(246992),
    g = n(681619),
    v = n(810568),
    j = n(168524),
    _ = n(77498),
    y = n(823379),
    C = n(550532),
    E = n(71585),
    S = n(146282),
    T = n(780106),
    O = n(650613),
    N = n(789086),
    P = n(206583),
    I = n(680027),
    w = n(451429);
let R = [
    {
        key: "type",
        cellClassName: l()(I.cell, I.cellType),
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
        cellClassName: l()(I.cell, I.cellCount),
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
        cellClassName: I.cell,
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
function A() {
    var e, t;
    let n = (0, u.e7)([S.Z], () => S.Z.getFeed(P.YN.GLOBAL_FEED)),
        i = (0, u.e7)([S.Z], () => S.Z.getDebugImpressionCappingDisabled()),
        l = (0, u.e7)([E.Z], () => E.Z.getDebugFastImpressionCappingEnabled()),
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
            return (null == (e = S.Z.getFeedState(P.YN.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [k, A] = r.useState(""),
        D = (0, u.e7)([_.Z, x.Z], () => {
            var e, t, n;
            return parseInt(k) > 0
                ? k
                : null != (n = null == (e = _.Z.getGameByName(k)) ? void 0 : e.id)
                  ? n
                  : null == (t = x.Z.getApplicationByName(k))
                    ? void 0
                    : t.id;
        }, [k]),
        M = (0, j.Z)({
            applicationId: D,
            location: "DevToolsContentInventory",
            source: v.m1.DevTools,
        }),
        L = Object.entries(null != (t = m.K.get("GameProfileModal")) ? t : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        U = (0, f.Z)(L).filter(y.lm),
        F = (0, u.e7)([C.Z], () => C.Z.getFakeGameToShow());
    return (0, a.jsx)("div", {
        className: w.panel,
        children: (0, a.jsxs)(p.zJl, {
            className: I.content,
            children: [
                (0, a.jsxs)(p.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(p.Text, {
                            variant: "text-md/semibold",
                            children: "Inventory",
                        }),
                        s.length > 0 &&
                            (0, a.jsx)(g.Z, {
                                columns: R,
                                data: s,
                            }),
                        (0, a.jsx)(N.Z, {}),
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
                (0, a.jsx)(O.Z, {}),
                (0, a.jsxs)(p.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(p.Text, {
                            variant: "text-md/semibold",
                            children: "Game Profile",
                        }),
                        (0, a.jsx)(p.oil, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && A(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key &&
                                    (k === e.currentTarget.value ? null == M || M(e) : A(e.currentTarget.value));
                            },
                            error:
                                k.length > 0 && null == M
                                    ? "No game profile for ".concat(null != D ? D : k + " - try by id", ".")
                                    : void 0,
                            successMessage: null != M ? "Game profile found" : void 0,
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
                            popoutLayerContext: b.O$,
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

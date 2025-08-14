a.d(t, { Z: () => A }), a(388685);
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(392711),
    o = a.n(s),
    c = a(876215),
    d = a(126313),
    u = a(442837),
    m = a(433517),
    x = a(755721),
    h = a(481060),
    p = a(570140),
    b = a(812206),
    f = a(835473),
    v = a(246992),
    j = a(681619),
    g = a(810568),
    _ = a(168524),
    y = a(77498),
    C = a(823379),
    N = a(550532),
    O = a(71585),
    T = a(146282),
    E = a(780106),
    S = a(650613),
    P = a(789086),
    w = a(206583),
    I = a(680027),
    k = a(451429);
let R = [
    {
        key: "type",
        cellClassName: i()(I.cell, I.cellType),
        render(e) {
            let { type: t } = e;
            return (0, n.jsx)(h.Text, {
                variant: "text-md/semibold",
                children: c.s[t],
            });
        },
    },
    {
        key: "count",
        cellClassName: i()(I.cell, I.cellCount),
        render(e) {
            let { entries: t } = e;
            return (0, n.jsx)("div", {
                children: (0, n.jsx)(h.Text, {
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
            return (0, n.jsx)(Z, { type: t });
        },
    },
];
function Z(e) {
    var t, a;
    let { type: r } = e,
        l = (0, u.e7)([T.Z], () => T.Z.getFilters()),
        i = null != (a = null == l || null == (t = l.types) ? void 0 : t.has(r)) && a;
    return (0, n.jsx)(h.XZJ, {
        value: i,
        onClick: function () {
            i
                ? p.Z.dispatch({
                      type: "CONTENT_INVENTORY_SET_FILTERS",
                      filters: void 0,
                  })
                : p.Z.dispatch({
                      type: "CONTENT_INVENTORY_SET_FILTERS",
                      filters: { types: new Set([r]) },
                  });
        },
    });
}
function A() {
    var e, t;
    let a = (0, u.e7)([T.Z], () => T.Z.getFeed(w.YN.GLOBAL_FEED)),
        l = (0, u.e7)([T.Z], () => T.Z.getDebugImpressionCappingDisabled()),
        i = (0, u.e7)([O.Z], () => O.Z.getDebugFastImpressionCappingEnabled()),
        s = (function (e) {
            let t = o().groupBy(e, (e) => e.content_type);
            return Object.keys(t).map((e) => {
                let a = t[e];
                return {
                    key: "".concat(e),
                    type: a[0].content_type,
                    entries: a,
                };
            });
        })(null == a || null == (e = a.entries) ? void 0 : e.map((e) => e.content)),
        c = (0, u.e7)([T.Z], () => {
            var e;
            return (null == (e = T.Z.getFeedState(w.YN.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [Z, A] = r.useState(""),
        L = (0, u.e7)([y.Z, b.Z], () => {
            var e, t, a;
            return parseInt(Z) > 0
                ? Z
                : null != (a = null == (e = y.Z.getGameByName(Z)) ? void 0 : e.id)
                  ? a
                  : null == (t = b.Z.getApplicationByName(Z))
                    ? void 0
                    : t.id;
        }, [Z]),
        B = (0, _.Z)({
            applicationId: L,
            location: "DevToolsContentInventory",
            source: g.m1.DevTools,
        }),
        M = Object.entries(null != (t = m.K.get("GameProfileModal")) ? t : {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        F = (0, f.Z)(M).filter(C.lm),
        U = (0, u.e7)([N.Z], () => N.Z.getFakeGameToShow());
    return (0, n.jsx)("div", {
        className: k.panel,
        children: (0, n.jsxs)(h.zJl, {
            className: I.content,
            children: [
                (0, n.jsxs)(h.hjN, {
                    children: [
                        (0, n.jsx)(h.vwX, { children: "Inventory" }),
                        s.length > 0 &&
                            (0, n.jsx)(j.Z, {
                                columns: R,
                                data: s,
                            }),
                        (0, n.jsx)(h.LZC, { size: 8 }),
                        (0, n.jsx)(P.Z, {}),
                        (0, n.jsx)(h.zxk, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: w.YN.GLOBAL_FEED,
                                    feature: d.L.INBOX,
                                });
                            },
                            loading: c,
                        }),
                    ],
                }),
                (0, n.jsxs)(h.hjN, {
                    children: [
                        (0, n.jsx)(h.vwX, { children: "Impression Capping" }),
                        (0, n.jsx)(h.zxk, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, n.jsx)(h.LZC, { size: 8 }),
                        (0, n.jsx)(h.zxk, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, n.jsx)(h.LZC, { size: 8 }),
                        (0, n.jsx)(h.zxk, {
                            variant: "primary",
                            text: l ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, n.jsx)(h.LZC, { size: 8 }),
                        (0, n.jsx)(h.zxk, {
                            variant: "primary",
                            text: i ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, n.jsx)(S.Z, {}),
                (0, n.jsxs)(h.hjN, {
                    children: [
                        (0, n.jsx)(h.vwX, { children: "Game Profile" }),
                        (0, n.jsx)(x.Is, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && A(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key &&
                                    (Z === e.currentTarget.value ? null == B || B(e) : A(e.currentTarget.value));
                            },
                            error:
                                Z.length > 0 && null == B
                                    ? "No game profile for ".concat(null != L ? L : Z + " - try by id", ".")
                                    : void 0,
                            style: null != B ? { border: "1px solid green" } : {},
                        }),
                        (0, n.jsx)("ul", {
                            children: F.map((e) =>
                                (0, n.jsx)(
                                    "li",
                                    { children: (0, n.jsx)(D, { application: e }) },
                                    "follow-game-".concat(e.id),
                                ),
                            ),
                        }),
                    ],
                }),
                (0, n.jsxs)(h.hjN, {
                    children: [
                        (0, n.jsx)(h.vwX, { children: "Activity Sharing" }),
                        (0, n.jsx)(h.Text, {
                            variant: "text-md/normal",
                            children: "Force show game:",
                        }),
                        (0, n.jsx)(h.PhF, {
                            options: E.h.map((e) => ({
                                label: e,
                                value: e,
                            })),
                            isSelected: (e) => e === U,
                            select: function (e) {
                                p.Z.dispatch({
                                    type: "CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING",
                                    gameToShow: e,
                                });
                            },
                            serialize: (e) => e,
                            popoutLayerContext: v.O$,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let D = (e) => {
    let { application: t } = e,
        a = (0, _.Z)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: g.m1.DevTools,
        });
    return (0, n.jsx)(h.P3F, {
        onClick: a,
        style: {
            margin: "2px",
            cursor: "pointer",
        },
        children: (0, n.jsx)(h.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.name,
        }),
    });
};

n.d(t, { Z: () => Z }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(876215),
    d = n(126313),
    u = n(442837),
    m = n(433517),
    h = n(481060),
    p = n(570140),
    x = n(812206),
    b = n(835473),
    f = n(246992),
    g = n(681619),
    v = n(810568),
    j = n(168524),
    _ = n(77498),
    y = n(823379),
    C = n(550532),
    N = n(71585),
    E = n(146282),
    T = n(780106),
    S = n(650613),
    O = n(789086),
    P = n(206583),
    k = n(680027),
    R = n(451429);
let w = [
    {
        key: "type",
        cellClassName: i()(k.cell, k.cellType),
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(h.Text, {
                variant: "text-md/semibold",
                children: c.s[t],
            });
        },
    },
    {
        key: "count",
        cellClassName: i()(k.cell, k.cellCount),
        render(e) {
            let { entries: t } = e;
            return (0, a.jsx)("div", {
                children: (0, a.jsx)(h.Text, {
                    variant: "text-md/normal",
                    children: t.length,
                }),
            });
        },
    },
    {
        key: "only?",
        cellClassName: k.cell,
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(I, { type: t });
        },
    },
];
function I(e) {
    var t, n;
    let { type: r } = e,
        l = (0, u.e7)([E.Z], () => E.Z.getFilters()),
        i = null != (n = null == l || null == (t = l.types) ? void 0 : t.has(r)) && n;
    return (0, a.jsx)(h.XZJ, {
        checked: i,
        onChange: function () {
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
function Z() {
    var e, t;
    let n = (0, u.e7)([E.Z], () => E.Z.getFeed(P.YN.GLOBAL_FEED)),
        l = (0, u.e7)([E.Z], () => E.Z.getDebugImpressionCappingDisabled()),
        i = (0, u.e7)([N.Z], () => N.Z.getDebugFastImpressionCappingEnabled()),
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
        [I, Z] = r.useState(""),
        D = (0, u.e7)([_.Z, x.Z], () => {
            var e, t, n;
            return parseInt(I) > 0
                ? I
                : null != (n = null == (e = _.Z.getGameByName(I)) ? void 0 : e.id)
                  ? n
                  : null == (t = x.Z.getApplicationByName(I))
                    ? void 0
                    : t.id;
        }, [I]),
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
        U = (0, b.Z)(M).filter(y.lm),
        F = (0, u.e7)([C.Z], () => C.Z.getFakeGameToShow());
    return (0, a.jsx)("div", {
        className: R.panel,
        children: (0, a.jsxs)(h.zJl, {
            className: k.content,
            children: [
                (0, a.jsxs)(h.hjN, {
                    children: [
                        (0, a.jsx)(h.vwX, { children: "Inventory" }),
                        s.length > 0 &&
                            (0, a.jsx)(g.Z, {
                                columns: w,
                                data: s,
                            }),
                        (0, a.jsx)(h.LZC, { size: 8 }),
                        (0, a.jsx)(O.Z, {}),
                        (0, a.jsx)(h.zxk, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: P.YN.GLOBAL_FEED,
                                    feature: d.L.INBOX,
                                });
                            },
                            loading: c,
                        }),
                    ],
                }),
                (0, a.jsxs)(h.hjN, {
                    children: [
                        (0, a.jsx)(h.vwX, { children: "Impression Capping" }),
                        (0, a.jsx)(h.zxk, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, a.jsx)(h.LZC, { size: 8 }),
                        (0, a.jsx)(h.zxk, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, a.jsx)(h.LZC, { size: 8 }),
                        (0, a.jsx)(h.zxk, {
                            variant: "primary",
                            text: l ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, a.jsx)(h.LZC, { size: 8 }),
                        (0, a.jsx)(h.zxk, {
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
                (0, a.jsx)(S.Z, {}),
                (0, a.jsxs)(h.hjN, {
                    children: [
                        (0, a.jsx)(h.vwX, { children: "Game Profile" }),
                        (0, a.jsx)(h.oil, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && Z(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key &&
                                    (I === e.currentTarget.value ? null == L || L(e) : Z(e.currentTarget.value));
                            },
                            error:
                                I.length > 0 && null == L
                                    ? "No game profile for ".concat(null != D ? D : I + " - try by id", ".")
                                    : void 0,
                            successMessage: null != L ? "Game profile found" : void 0,
                        }),
                        (0, a.jsx)("ul", {
                            children: U.map((e) =>
                                (0, a.jsx)(
                                    "li",
                                    { children: (0, a.jsx)(A, { application: e }) },
                                    "follow-game-".concat(e.id),
                                ),
                            ),
                        }),
                    ],
                }),
                (0, a.jsxs)(h.hjN, {
                    children: [
                        (0, a.jsx)(h.vwX, { children: "Activity Sharing" }),
                        (0, a.jsx)(h.Text, {
                            variant: "text-md/normal",
                            children: "Force show game:",
                        }),
                        (0, a.jsx)(h.PhF, {
                            options: T.h.map((e) => ({
                                label: e,
                                value: e,
                            })),
                            isSelected: (e) => e === F,
                            select: function (e) {
                                p.Z.dispatch({
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
let A = (e) => {
    let { application: t } = e,
        n = (0, j.Z)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: v.m1.DevTools,
        });
    return (0, a.jsx)(h.P3F, {
        onClick: n,
        style: {
            margin: "2px",
            cursor: "pointer",
        },
        children: (0, a.jsx)(h.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.name,
        }),
    });
};

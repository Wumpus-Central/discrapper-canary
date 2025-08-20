a.d(t, { Z: () => Z }), a(388685);
var n = a(951288),
    r = a(647438),
    l = a(120356),
    i = a.n(l),
    s = a(392711),
    o = a.n(s),
    c = a(876215),
    d = a(126313),
    u = a(442837),
    m = a(433517),
    x = a(481060),
    h = a(570140),
    p = a(812206),
    v = a(835473),
    b = a(246992),
    f = a(681619),
    j = a(810568),
    g = a(168524),
    _ = a(77498),
    y = a(823379),
    C = a(550532),
    N = a(71585),
    O = a(146282),
    E = a(780106),
    T = a(650613),
    S = a(789086),
    P = a(206583),
    w = a(680027),
    I = a(451429);
let k = [
    {
        key: "type",
        cellClassName: i()(w.cell, w.cellType),
        render(e) {
            let { type: t } = e;
            return (0, n.jsx)(x.Text, {
                variant: "text-md/semibold",
                children: c.s[t],
            });
        },
    },
    {
        key: "count",
        cellClassName: i()(w.cell, w.cellCount),
        render(e) {
            let { entries: t } = e;
            return (0, n.jsx)("div", {
                children: (0, n.jsx)(x.Text, {
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
            return (0, n.jsx)(R, { type: t });
        },
    },
];
function R(e) {
    var t, a;
    let { type: r } = e,
        l = (0, u.e7)([O.Z], () => O.Z.getFilters()),
        i = null != (a = null == l || null == (t = l.types) ? void 0 : t.has(r)) && a;
    return (0, n.jsx)(x.XZJ, {
        value: i,
        onClick: function () {
            i
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
function Z() {
    var e, t;
    let a = (0, u.e7)([O.Z], () => O.Z.getFeed(P.YN.GLOBAL_FEED)),
        l = (0, u.e7)([O.Z], () => O.Z.getDebugImpressionCappingDisabled()),
        i = (0, u.e7)([N.Z], () => N.Z.getDebugFastImpressionCappingEnabled()),
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
        c = (0, u.e7)([O.Z], () => {
            var e;
            return (null == (e = O.Z.getFeedState(P.YN.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [R, Z] = r.useState(""),
        D = (0, u.e7)([_.Z, p.Z], () => {
            var e, t, a;
            return parseInt(R) > 0
                ? R
                : null != (a = null == (e = _.Z.getGameByName(R)) ? void 0 : e.id)
                  ? a
                  : null == (t = p.Z.getApplicationByName(R))
                    ? void 0
                    : t.id;
        }, [R]),
        L = (0, g.Z)({
            applicationId: D,
            location: "DevToolsContentInventory",
            source: j.m1.DevTools,
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
        z = (0, v.Z)(M).filter(y.lm),
        F = (0, u.e7)([C.Z], () => C.Z.getFakeGameToShow());
    return (0, n.jsx)("div", {
        className: I.panel,
        children: (0, n.jsxs)(x.zJl, {
            className: w.content,
            children: [
                (0, n.jsxs)(x.hjN, {
                    children: [
                        (0, n.jsx)(x.vwX, { children: "Inventory" }),
                        s.length > 0 &&
                            (0, n.jsx)(f.Z, {
                                columns: k,
                                data: s,
                            }),
                        (0, n.jsx)(x.LZC, { size: 8 }),
                        (0, n.jsx)(S.Z, {}),
                        (0, n.jsx)(x.zxk, {
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
                (0, n.jsxs)(x.hjN, {
                    children: [
                        (0, n.jsx)(x.vwX, { children: "Impression Capping" }),
                        (0, n.jsx)(x.zxk, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, n.jsx)(x.LZC, { size: 8 }),
                        (0, n.jsx)(x.zxk, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, n.jsx)(x.LZC, { size: 8 }),
                        (0, n.jsx)(x.zxk, {
                            variant: "primary",
                            text: l ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, n.jsx)(x.LZC, { size: 8 }),
                        (0, n.jsx)(x.zxk, {
                            variant: "primary",
                            text: i ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, n.jsx)(T.Z, {}),
                (0, n.jsxs)(x.hjN, {
                    children: [
                        (0, n.jsx)(x.vwX, { children: "Game Profile" }),
                        (0, n.jsx)(x.oil, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && Z(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key &&
                                    (R === e.currentTarget.value ? null == L || L(e) : Z(e.currentTarget.value));
                            },
                            error:
                                R.length > 0 && null == L
                                    ? "No game profile for ".concat(null != D ? D : R + " - try by id", ".")
                                    : void 0,
                            successMessage: null != L ? "Game profile found" : void 0,
                        }),
                        (0, n.jsx)("ul", {
                            children: z.map((e) =>
                                (0, n.jsx)(
                                    "li",
                                    { children: (0, n.jsx)(A, { application: e }) },
                                    "follow-game-".concat(e.id),
                                ),
                            ),
                        }),
                    ],
                }),
                (0, n.jsxs)(x.hjN, {
                    children: [
                        (0, n.jsx)(x.vwX, { children: "Activity Sharing" }),
                        (0, n.jsx)(x.Text, {
                            variant: "text-md/normal",
                            children: "Force show game:",
                        }),
                        (0, n.jsx)(x.PhF, {
                            options: E.h.map((e) => ({
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
let A = (e) => {
    let { application: t } = e,
        a = (0, g.Z)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: j.m1.DevTools,
        });
    return (0, n.jsx)(x.P3F, {
        onClick: a,
        style: {
            margin: "2px",
            cursor: "pointer",
        },
        children: (0, n.jsx)(x.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.name,
        }),
    });
};

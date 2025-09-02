n.d(t, { Z: () => A }), n(388685);
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
    x = n(755721),
    h = n(481060),
    p = n(570140),
    f = n(812206),
    v = n(835473),
    b = n(246992),
    j = n(681619),
    g = n(810568),
    _ = n(168524),
    y = n(77498),
    C = n(823379),
    N = n(550532),
    E = n(71585),
    O = n(146282),
    T = n(780106),
    S = n(650613),
    P = n(789086),
    w = n(206583),
    I = n(680027),
    k = n(451429);
let R = [
    {
        key: "type",
        cellClassName: i()(I.cell, I.cellType),
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
        cellClassName: i()(I.cell, I.cellCount),
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
        cellClassName: I.cell,
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(Z, { type: t });
        },
    },
];
function Z(e) {
    var t, n;
    let { type: r } = e,
        l = (0, u.e7)([O.Z], () => O.Z.getFilters()),
        i = null != (n = null == l || null == (t = l.types) ? void 0 : t.has(r)) && n;
    return (0, a.jsx)(x.$q, {
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
    let n = (0, u.e7)([O.Z], () => O.Z.getFeed(w.YN.GLOBAL_FEED)),
        l = (0, u.e7)([O.Z], () => O.Z.getDebugImpressionCappingDisabled()),
        i = (0, u.e7)([E.Z], () => E.Z.getDebugFastImpressionCappingEnabled()),
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
        c = (0, u.e7)([O.Z], () => {
            var e;
            return (null == (e = O.Z.getFeedState(w.YN.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [x, Z] = r.useState(""),
        A = (0, u.e7)([y.Z, f.Z], () => {
            var e, t, n;
            return parseInt(x) > 0
                ? x
                : null != (n = null == (e = y.Z.getGameByName(x)) ? void 0 : e.id)
                  ? n
                  : null == (t = f.Z.getApplicationByName(x))
                    ? void 0
                    : t.id;
        }, [x]),
        L = (0, _.Z)({
            applicationId: A,
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
        F = (0, v.Z)(M).filter(C.lm),
        U = (0, u.e7)([N.Z], () => N.Z.getFakeGameToShow());
    return (0, a.jsx)("div", {
        className: k.panel,
        children: (0, a.jsxs)(h.zJl, {
            className: I.content,
            children: [
                (0, a.jsxs)(h.hjN, {
                    children: [
                        (0, a.jsx)(h.vwX, { children: "Inventory" }),
                        s.length > 0 &&
                            (0, a.jsx)(j.Z, {
                                columns: R,
                                data: s,
                            }),
                        (0, a.jsx)(h.LZC, { size: 8 }),
                        (0, a.jsx)(P.Z, {}),
                        (0, a.jsx)(h.zxk, {
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
                                    (x === e.currentTarget.value ? null == L || L(e) : Z(e.currentTarget.value));
                            },
                            error:
                                x.length > 0 && null == L
                                    ? "No game profile for ".concat(null != A ? A : x + " - try by id", ".")
                                    : void 0,
                            successMessage: null != L ? "Game profile found" : void 0,
                        }),
                        (0, a.jsx)("ul", {
                            children: F.map((e) =>
                                (0, a.jsx)(
                                    "li",
                                    { children: (0, a.jsx)(D, { application: e }) },
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
                            isSelected: (e) => e === U,
                            select: function (e) {
                                p.Z.dispatch({
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
let D = (e) => {
    let { application: t } = e,
        n = (0, _.Z)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: g.m1.DevTools,
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

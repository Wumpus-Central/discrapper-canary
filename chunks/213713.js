n.d(t, { Z: () => Z }), n(388685);
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
    p = n(199849),
    h = n(481060),
    f = n(570140),
    x = n(812206),
    b = n(835473),
    g = n(246992),
    v = n(681619),
    j = n(810568),
    y = n(168524),
    C = n(77498),
    _ = n(823379),
    S = n(550532),
    E = n(71585),
    T = n(146282),
    O = n(780106),
    N = n(650613),
    P = n(789086),
    w = n(206583),
    I = n(738299),
    k = n(663618);
let R = [
    {
        key: "type",
        cellClassName: l()(I.cell, I.cellType),
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
        cellClassName: l()(I.cell, I.cellCount),
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
            return (0, a.jsx)(A, { type: t });
        },
    },
];
function A(e) {
    var t, n;
    let { type: r } = e,
        i = (0, u.e7)([T.Z], () => T.Z.getFilters()),
        l = null != (n = null == i || null == (t = i.types) ? void 0 : t.has(r)) && n;
    return (0, a.jsx)(h.rsf, {
        checked: l,
        onChange: function () {
            l
                ? f.Z.dispatch({
                      type: "CONTENT_INVENTORY_SET_FILTERS",
                      filters: void 0,
                  })
                : f.Z.dispatch({
                      type: "CONTENT_INVENTORY_SET_FILTERS",
                      filters: { types: new Set([r]) },
                  });
        },
    });
}
function Z() {
    var e, t;
    let n = (0, u.e7)([T.Z], () => T.Z.getFeed(w.YN.GLOBAL_FEED)),
        i = (0, u.e7)([T.Z], () => T.Z.getDebugImpressionCappingDisabled()),
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
        c = (0, u.e7)([T.Z], () => {
            var e;
            return (null == (e = T.Z.getFeedState(w.YN.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [A, Z] = r.useState(""),
        L = (0, u.e7)([C.Z, x.Z], () => {
            var e, t, n;
            return parseInt(A) > 0
                ? A
                : null != (n = null == (e = C.Z.getGameByName(A)) ? void 0 : e.id)
                  ? n
                  : null == (t = x.Z.getApplicationByName(A))
                    ? void 0
                    : t.id;
        }, [A]),
        M = (0, y.Z)({
            applicationId: L,
            location: "DevToolsContentInventory",
            source: j.m1.DevTools,
        }),
        U = Object.entries(null != (t = m.K.get("GameProfileModal")) ? t : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        B = (0, b.Z)(U).filter(_.lm),
        F = (0, u.e7)([S.Z], () => S.Z.getFakeGameToShow());
    return (0, a.jsx)("div", {
        className: k.panel,
        children: (0, a.jsxs)(h.zJl, {
            className: I.content,
            children: [
                (0, a.jsxs)(h.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(h.Text, {
                            variant: "text-md/semibold",
                            children: "Inventory",
                        }),
                        s.length > 0 &&
                            (0, a.jsx)(v.Z, {
                                columns: R,
                                data: s,
                            }),
                        (0, a.jsx)(P.Z, {}),
                        (0, a.jsx)(h.Button, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                f.Z.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: w.YN.GLOBAL_FEED,
                                    feature: d.L.INBOX,
                                });
                            },
                            loading: c,
                        }),
                    ],
                }),
                (0, a.jsxs)(h.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(h.Text, {
                            variant: "text-md/semibold",
                            children: "Impression Capping",
                        }),
                        (0, a.jsx)(h.Button, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                f.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, a.jsx)(h.Button, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                f.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, a.jsx)(h.Button, {
                            variant: "primary",
                            text: i ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                f.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, a.jsx)(h.Button, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                f.Z.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, a.jsx)(N.Z, {}),
                (0, a.jsxs)(h.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(h.Text, {
                            variant: "text-md/semibold",
                            children: "Game Profile",
                        }),
                        (0, a.jsx)(h.oil, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && Z(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key &&
                                    (A === e.currentTarget.value ? null == M || M(e) : Z(e.currentTarget.value));
                            },
                            error:
                                A.length > 0 && null == M
                                    ? "No game profile for ".concat(null != L ? L : A + " - try by id", ".")
                                    : void 0,
                            helperText: null != M ? "Game profile found" : void 0,
                        }),
                        (0, a.jsx)("ul", {
                            children: B.map((e) =>
                                (0, a.jsx)(
                                    "li",
                                    { children: (0, a.jsx)(D, { application: e }) },
                                    "follow-game-".concat(e.id),
                                ),
                            ),
                        }),
                    ],
                }),
                (0, a.jsxs)(h.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(h.Text, {
                            variant: "text-md/semibold",
                            children: "Activity Sharing",
                        }),
                        (0, a.jsx)(h.Text, {
                            variant: "text-md/normal",
                            children: "Force show game:",
                        }),
                        (0, a.jsx)(p.B6, {
                            options: O.h.map((e) => ({
                                label: e,
                                value: e,
                            })),
                            isSelected: (e) => e === F,
                            select: function (e) {
                                f.Z.dispatch({
                                    type: "CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING",
                                    gameToShow: e,
                                });
                            },
                            serialize: (e) => e,
                            popoutLayerContext: g.O$,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let D = (e) => {
    let { application: t } = e,
        n = (0, y.Z)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: j.m1.DevTools,
        });
    return (0, a.jsx)(h.P3F, {
        onClick: n,
        children: (0, a.jsx)(h.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.name,
        }),
    });
};

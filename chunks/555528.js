"use strict";
let r, i;
n.d(t, { A: () => H }), n(321073);
var a = n(735438),
    s = n.n(a),
    o = n(835245),
    l = n(311907),
    u = n(506774),
    c = n(73153),
    d = n(435090),
    _ = n(639180),
    f = n(5463),
    p = n(881957),
    h = n(652215);
n(644434);
let m = "migrated",
    g = 0.02,
    E = 0.01,
    A = {
        [h.uss.GUILDS]: {
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: p.X.OPTIONAL,
            defaultSettings: {
                anchor: { left: 0.175, top: 0.05, bottom: void 0, right: void 0 },
                size: { width: "auto", height: 0.65 },
                pinned: !1,
                minSize: { width: 312, height: 300 },
            },
            version: 0,
        },
        [h.uss.TEXT]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: p.X.OPTIONAL,
            defaultSettings: {
                anchor: { left: 0.26, top: 0.05, bottom: void 0, right: void 0 },
                size: { width: 0.565, height: 0.65 },
                pinned: !0,
                minSize: { width: 430, height: 300 },
            },
            version: 0,
        },
        [h.uss.VOICE]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: p.X.REQUIRED,
            defaultSettings: {
                anchor: { left: 0.011, top: 0.011, bottom: void 0, right: void 0 },
                size: { width: "auto", height: "auto" },
                pinned: !0,
                minSize: { width: 272, height: 100 },
            },
            version: 0,
        },
        [h.uss.GUILDS_TEXT]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: p.X.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: { left: void 0, top: 0.05, bottom: void 0, right: 0.25 },
                size: { width: 0.6, height: 0.45 },
                pinned: !1,
                minSize: { height: 300, width: 610 },
            },
            version: 0,
        },
        [h.uss.VOICE_V3]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: p.X.REQUIRED,
            defaultSettings: {
                anchor: { left: E, top: 0.35, bottom: void 0, right: void 0 },
                size: { width: "auto", height: "auto" },
                pinned: !0,
                minSize: { width: 272, height: 24 },
            },
            version: 4,
        },
        [h.uss.VIDEO]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: p.X.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: { left: E, top: void 0, bottom: g, right: void 0 },
                size: { fixed: !0, width: 408, height: 128 },
                pinned: !0,
                minSize: { width: 128, height: 128 },
            },
            version: 4,
        },
        [h.uss.GO_LIVE]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: p.X.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: { left: void 0, top: void 0, bottom: g, right: E },
                size: { fixed: !0, width: 256, height: 144 },
                pinned: !1,
                minSize: { width: 276, height: 164 },
            },
            version: 4,
        },
        [h.uss.QUICK_ACTIONS]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: p.X.REQUIRED,
            defaultSettings: {
                anchor: { left: 0.34, top: g, bottom: void 0, right: void 0 },
                size: { width: "auto", height: "auto" },
                pinned: !1,
                minSize: { width: 216, height: 56 },
            },
            version: 4,
        },
        [h.uss.NOTIFICATIONS]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: p.X.REQUIRED,
            defaultSettings: {
                anchor: { left: E, top: g, bottom: void 0, right: void 0 },
                size: { height: "auto", width: "auto" },
                pinned: !0,
                minSize: { width: 320, height: 100 },
            },
            version: 4,
        },
        [h.uss.ACTIVITY]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: p.X.REQUIRED,
            defaultSettings: {
                anchor: { left: void 0, top: 0.35, bottom: void 0, right: E },
                size: { height: "auto", width: "auto" },
                pinned: !1,
                minSize: { width: 320, height: 100 },
            },
            version: 4,
        },
        [h.uss.TEXT_CHAT_V3]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: p.X.REQUIRED,
            defaultSettings: {
                anchor: { left: void 0, top: 7 * g, bottom: void 0, right: 26 * E },
                size: { fixed: !0, height: 372, width: 500 },
                minSize: { width: 350, height: 100 },
                pinned: !1,
            },
            version: 4,
        },
        [h.uss.FRIENDS]: {
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !0,
            constrainAutoSizeToExplicitResizeEvents: !0,
            layoutPolicy: p.X.REQUIRED,
            defaultSettings: {
                anchor: { left: void 0, top: 7 * g, bottom: 15 * g, right: E },
                size: { fixed: !0, height: "auto", width: 350 },
                minSize: { width: 350, height: 350 },
                pinned: !1,
            },
            version: 4,
        },
        [h.uss.CLICK_ZONE_DEBUG]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: p.X.DEBUG,
            defaultSettings: {
                anchor: { left: void 0, top: 0.35, bottom: void 0, right: 0.35 },
                size: { height: "auto", width: "auto" },
                pinned: !0,
                minSize: { width: 50, height: 50 },
            },
            version: 4,
        },
        [h.uss.PERFORMANCE_DEBUG]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: p.X.DEBUG,
            defaultSettings: {
                anchor: { left: void 0, top: 0.1, bottom: void 0, right: 0.1 },
                size: { height: "auto", width: "auto" },
                pinned: !0,
                minSize: { width: 120, height: 300 },
            },
            version: 4,
        },
    };
function I(e) {
    let { layoutId: t, widgets: n, version: a, defaultResolution: s } = e;
    if (null != r[t] && r[t].version === a) return !1;
    let l = [];
    n.forEach((e, t) => {
        let n = T(e.type),
            r = { ...e, zIndex: t };
        "" === r.id && (r.id = (0, o.A)()),
            null != n &&
                ((r.pinned = n.pinned),
                -1 !== n.anchor.left && (r.anchor = (0, f.NO)(n.anchor, s)),
                -1 !== n.size.width && (r.size = (0, f.R9)(n.size, s))),
            (i = { ...i, [r.id]: new _.A(r) }),
            l.push(r.id);
    }),
        (r = { ...r, [t]: new d.A({ id: t, widgets: l, version: a }) });
}
function T(e) {
    let t = r[m];
    if (null != t)
        for (let n of t.widgets) {
            let t = i[n];
            if (null != t && t.type === e) return t;
        }
    return null;
}
function y(e, t) {
    let n = i[e];
    if (null == n) return !1;
    let a = r[n.layoutId];
    return null != a && t(n, a);
}
function S(e) {
    let { widgetId: t, anchor: n, size: r, opacity: i, minSize: a, defaultSize: s } = e;
    return y(t, (e, t) => O({ widget: e, anchor: n, size: r, opacity: i, minSize: a, defaultSize: s }));
}
function v(e) {
    let { widgetId: t } = e;
    return y(t, (e, t) => C(t, e.id));
}
function C(e, t) {
    let n = G(e);
    n.sort((e, t) => e.zIndex - t.zIndex);
    let r = n.findIndex((e) => e.id === t);
    if (r === n.length - 1) return !1;
    n.push(n.splice(r, 1)[0]);
    for (let e = 0; e < n.length; e++) k(n[e], e);
    return !0;
}
function b(e) {
    let { widgetId: t, meta: n } = e;
    return y(t, (e, t) => {
        N(e, n);
    });
}
function N(e, t) {
    i = { ...i, [e.id]: e.merge({ meta: { ...(e.meta ?? {}), ...t } }) };
}
function R(e) {
    let { widgetId: t, pinned: n } = e;
    return y(t, (e, t) => {
        U(e, n);
    });
}
function O(e) {
    let { widget: t, anchor: n, size: r, opacity: a, minSize: s, defaultSize: o } = e;
    if (
        ((i = {
            ...i,
            [t.id]: t.merge({
                anchor: n ?? t.anchor,
                size: r ?? t.size,
                opacity: a ?? t.opacity,
                minSize: s ?? t.minSize,
            }),
        }),
        null != o)
    ) {
        let e = A[t.type];
        null != e && (e.defaultSettings.size = { fixed: e.defaultSettings.size.fixed, ...o });
    }
}
function D(e) {
    i = { ...i, [e.id]: e.merge({ showExtrasHintTimestamp: Date.now() }) };
}
function L(e) {
    let { widgetId: t } = e;
    return y(t, (e, t) => {
        D(e);
    });
}
function w(e) {
    let { widgetId: t } = e;
    (i = { ...i }),
        delete i[t],
        s().forEach(r, (e, n) => {
            if (n === m) return;
            let i = e.widgets.indexOf(t);
            if (i >= 0) {
                let t = [...e.widgets];
                t.splice(i, 1), (r = { ...r, [n]: e.set("widgets", t) });
            }
        });
}
function x(e) {
    let { layoutId: t } = e,
        n = r[t];
    if (null == n) return !1;
    n.widgets.forEach((e) => {
        (i = { ...i }), delete i[e];
    }),
        (r = { ...r, [n.id]: n.set("widgets", []) });
}
function P(e) {
    let { widgetConfigs: t } = e;
    t.forEach((e) => {
        let t = new _.A(e),
            n = r[t.layoutId];
        if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
        (t = t.set("zIndex", n.widgets.length)), (i = { ...i, [t.id]: t });
        let a = [...n.widgets, t.id];
        r = { ...r, [n.id]: n.set("widgets", a) };
    });
}
function M(e) {
    let { widgetType: t, defaultConfig: n } = e;
    A[t] = { ...A[t], ...n };
}
function k(e, t) {
    i = { ...i, [e.id]: e.set("zIndex", t) };
}
function U(e, t) {
    i = { ...i, [e.id]: e.set("pinned", t ?? !e.pinned) };
}
function G(e) {
    let t = [];
    return (
        e.widgets.forEach((e) => {
            let n = i[e];
            null != n && t.push(n);
        }),
        t
    );
}
function V(e) {
    let t = {};
    return (
        s().forEach(e, (e, n) => {
            t[n] = new d.A(e);
        }),
        t
    );
}
function F(e) {
    let t = {};
    return (
        s().forEach(e, (e, n) => {
            t[n] = new _.A(e);
        }),
        t
    );
}
function B(e) {
    let t = A[e];
    if (null != t) return t.defaultSettings;
}
class j extends l.Ay.PersistedStore {
    static displayName = "LayoutStore";
    static persistKey = "LayoutStore";
    static migrations = [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: r } = { ...u.w.get("OverlayStore") };
            if (5 === r && e) {
                let r = m,
                    i = [],
                    a = e.map((e) => {
                        let a = null != t ? t[e] : null,
                            s = null != n ? n[e] : null,
                            o = {
                                id: e,
                                layoutId: r,
                                type: e,
                                anchor: a || { top: -1, left: -1, bottom: null, right: null },
                                size: s || { width: -1, height: -1 },
                                pinned: !0,
                                zIndex: 0,
                            };
                        return i.push([o.id, o]), o.id;
                    }),
                    s = { id: r, widgets: a };
                return { layouts: [[r, s]], widgets: i };
            }
            return { layouts: [], widgets: [] };
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                r = new Set(Object.keys(h.uss)),
                i = Array.from(n).filter((e) => {
                    let [t] = e;
                    return !r.has(t);
                }),
                a = Array.from(t).filter((e) => {
                    let [t] = e;
                    return t !== m;
                });
            return (
                a.forEach((e) => {
                    let [t, n] = e,
                        r = null,
                        a = null;
                    if (
                        (n.widgets.find((e) => {
                            let n = i.find((n) => {
                                let [r, i] = n;
                                return r === e && i.layoutId === t;
                            });
                            return (
                                null != n &&
                                (null == a && n[1].type === h.uss.VOICE && (a = n[0]),
                                null == r && n[1].type === h.uss.TEXT && (r = n[1].pinned),
                                (null != r && null != a) || void 0)
                            );
                        }),
                        r || null == a)
                    )
                        return;
                    let s = (0, o.A)();
                    n.widgets = [a, s];
                    let l = B(h.uss.GUILDS_TEXT);
                    null != l && i.push([s, { ...l, type: h.uss.GUILDS_TEXT, id: s, layoutId: t, zIndex: 2 }]);
                }),
                { widgets: i, layouts: a }
            );
        },
        (e) => {
            let { layouts: t, widgets: n } = e;
            return {
                layouts: t.reduce((e, t) => {
                    let [n, r] = t;
                    return (e[n] = r), e;
                }, {}),
                widgets: n.reduce((e, t) => {
                    let [n, r] = t;
                    return (e[n] = r), e;
                }, {}),
            };
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                r = {};
            for (let e in t) {
                let n = t[e];
                r[e] = { ...n, version: 0 };
            }
            return { layouts: r, widgets: n };
        },
    ];
    initialize(e) {
        null != e && null != e.layouts && null != e.widgets
            ? ((r = V(e.layouts)), (i = F(e.widgets)))
            : ((r = {}), (i = {}));
        let t = !1,
            n = [];
        s().forEach(A, (e, t) => {
            e.layoutPolicy === p.X.REQUIRED && n.push(t);
        }),
            s().forEach(r, (e, a) => {
                let s = this.getWidgetsForLayout(a),
                    l = !1;
                for (let r of n) {
                    let n = s.find((e) => e.type === r);
                    if (null != n || A[r].version !== e.version) continue;
                    l = t = !0;
                    let u = (0, o.A)(),
                        c = B(r);
                    if (null == c) return;
                    (n = new _.A({ ...c, type: r, id: u, layoutId: a, zIndex: s.length })),
                        s.push(n),
                        (i = { ...i, [u]: n });
                }
                l &&
                    ((e = e.set(
                        "widgets",
                        s.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                    )),
                    (r = { ...r, [a]: e }));
            }),
            s().forEach(i, (e, n) => {
                let a = r[e.layoutId];
                (null == a || 0 > a.widgets.indexOf(n)) && ((i = { ...i }), delete i[n], (t = !0));
            }),
            t && (this.persist(), this.emitChange());
    }
    getState() {
        return { layouts: r, widgets: i };
    }
    getLayouts() {
        return r;
    }
    getLayout(e) {
        return r[e];
    }
    getAllWidgets() {
        return i;
    }
    getWidget(e) {
        return i[e];
    }
    getWidgetsForLayout(e) {
        let t = this.getLayout(e);
        return null == t
            ? []
            : t.widgets.reduce((e, t) => {
                  let n = this.getWidget(t);
                  return null != n && e.push(n), e;
              }, []);
    }
    getAllUnpinnedPinnedWidgets(e) {
        let t = this.getWidgetsForLayout(e),
            n = [];
        return (
            t.forEach((e) => {
                let t = this.getWidgetConfig(e.type);
                if (null == t) {
                    e.pinned || n.push(e.type);
                    return;
                }
                t.layoutPolicy === p.X.REQUIRED || e.pinned || n.push(e.type);
            }),
            n
        );
    }
    getWidgetConfig(e) {
        return A[e];
    }
    getWidgetDefaultSettings(e) {
        return B(e);
    }
    getWidgetType(e) {
        let t = i[e];
        return null != t ? t.type : "";
    }
    getWidgetsByType(e) {
        return Object.values(i).filter((t) => t.type === e);
    }
    getWidgetsByTypeAndLayout(e, t) {
        return Object.values(i).filter((n) => n.type === e && n.layoutId === t);
    }
    getRegisteredWidgets() {
        return A;
    }
    getDefaultLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = [];
        return (
            s().forEach(this.getRegisteredWidgets(), (r, i) => {
                switch (r.layoutPolicy) {
                    case p.X.REQUIRED:
                    case p.X.OPTIONAL_DEFAULT:
                        if ((r.version ?? 0) === t) {
                            let t = B(i);
                            if (null == t) return;
                            n.push({ ...t, type: i, id: (0, o.A)(), layoutId: e });
                        }
                }
            }),
            n
        );
    }
}
let H = new j(c.h, {
    LAYOUT_CREATE: I,
    LAYOUT_SET_PINNED: R,
    LAYOUT_UPDATE_WIDGET: S,
    LAYOUT_SET_TOP_WIDGET: v,
    LAYOUT_DELETE_WIDGET: w,
    LAYOUT_DELETE_ALL_WIDGETS: x,
    LAYOUT_CREATE_WIDGETS: P,
    LAYOUT_SET_WIDGET_META: b,
    LAYOUT_SHOW_OVERLAY_EXTRAS_HINT: L,
    LAYOUT_SET_DEFAULT_CONFIG: M,
});

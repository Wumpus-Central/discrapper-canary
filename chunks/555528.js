"use strict";
let r, i;
n.d(t, { A: () => T }), n(321073);
var s = n(735438),
    a = n.n(s),
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
let E = "migrated",
    m = {
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
                anchor: { left: 0.01, top: 0.35, bottom: void 0, right: void 0 },
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
                anchor: { left: 0.01, top: void 0, bottom: 0.02, right: void 0 },
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
                anchor: { left: void 0, top: void 0, bottom: 0.02, right: 0.01 },
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
                anchor: { left: 0.34, top: 0.02, bottom: void 0, right: void 0 },
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
                anchor: { left: 0.01, top: 0.02, bottom: void 0, right: void 0 },
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
                anchor: { left: void 0, top: 0.35, bottom: void 0, right: 0.01 },
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
                anchor: { left: void 0, top: 0.14, bottom: void 0, right: 0.26 },
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
                anchor: { left: void 0, top: 0.14, bottom: 0.3, right: 0.01 },
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
function g(e, t) {
    let n = i[e];
    if (null == n) return !1;
    let s = r[n.layoutId];
    return null != s && t(n, s);
}
function A(e) {
    let t = m[e];
    if (null != t) return t.defaultSettings;
}
class I extends l.Ay.PersistedStore {
    static displayName = "LayoutStore";
    static persistKey = "LayoutStore";
    static migrations = [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: r } = { ...u.w.get("OverlayStore") };
            if (5 === r && e) {
                let r = [],
                    i = e.map((e) => {
                        let i = null != t ? t[e] : null,
                            s = null != n ? n[e] : null,
                            a = {
                                id: e,
                                layoutId: E,
                                type: e,
                                anchor: i || { top: -1, left: -1, bottom: null, right: null },
                                size: s || { width: -1, height: -1 },
                                pinned: !0,
                                zIndex: 0,
                            };
                        return r.push([a.id, a]), a.id;
                    });
                return { layouts: [[E, { id: E, widgets: i }]], widgets: r };
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
                s = Array.from(t).filter((e) => {
                    let [t] = e;
                    return t !== E;
                });
            return (
                s.forEach((e) => {
                    let [t, n] = e,
                        r = null,
                        s = null;
                    if (
                        (n.widgets.find((e) => {
                            let n = i.find((n) => {
                                let [r, i] = n;
                                return r === e && i.layoutId === t;
                            });
                            return (
                                null != n &&
                                (null == s && n[1].type === h.uss.VOICE && (s = n[0]),
                                null == r && n[1].type === h.uss.TEXT && (r = n[1].pinned),
                                (null != r && null != s) || void 0)
                            );
                        }),
                        r || null == s)
                    )
                        return;
                    let a = (0, o.A)();
                    n.widgets = [s, a];
                    let l = A(h.uss.GUILDS_TEXT);
                    null != l && i.push([a, { ...l, type: h.uss.GUILDS_TEXT, id: a, layoutId: t, zIndex: 2 }]);
                }),
                { widgets: i, layouts: s }
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
        if (null != e && null != e.layouts && null != e.widgets) {
            var t, n;
            let s, o;
            (t = e.layouts),
                (s = {}),
                a().forEach(t, (e, t) => {
                    s[t] = new d.A(e);
                }),
                (r = s),
                (n = e.widgets),
                (o = {}),
                a().forEach(n, (e, t) => {
                    o[t] = new _.A(e);
                }),
                (i = o);
        } else (r = {}), (i = {});
        let s = !1,
            l = [];
        a().forEach(m, (e, t) => {
            e.layoutPolicy === p.X.REQUIRED && l.push(t);
        }),
            a().forEach(r, (e, t) => {
                let n = this.getWidgetsForLayout(t),
                    a = !1;
                for (let r of l) {
                    let l = n.find((e) => e.type === r);
                    if (null != l || m[r].version !== e.version) continue;
                    a = s = !0;
                    let u = (0, o.A)(),
                        c = A(r);
                    if (null == c) return;
                    (l = new _.A({ ...c, type: r, id: u, layoutId: t, zIndex: n.length })),
                        n.push(l),
                        (i = { ...i, [u]: l });
                }
                a &&
                    ((e = e.set(
                        "widgets",
                        n.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                    )),
                    (r = { ...r, [t]: e }));
            }),
            a().forEach(i, (e, t) => {
                let n = r[e.layoutId];
                (null == n || 0 > n.widgets.indexOf(t)) && ((i = { ...i }), delete i[t], (s = !0));
            }),
            s && (this.persist(), this.emitChange());
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
        return m[e];
    }
    getWidgetDefaultSettings(e) {
        return A(e);
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
        return m;
    }
    getDefaultLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = [];
        return (
            a().forEach(this.getRegisteredWidgets(), (r, i) => {
                switch (r.layoutPolicy) {
                    case p.X.REQUIRED:
                    case p.X.OPTIONAL_DEFAULT:
                        if ((r.version ?? 0) === t) {
                            let t = A(i);
                            if (null == t) return;
                            n.push({ ...t, type: i, id: (0, o.A)(), layoutId: e });
                        }
                }
            }),
            n
        );
    }
}
let T = new I(c.h, {
    LAYOUT_CREATE: function (e) {
        let { layoutId: t, widgets: n, version: s, defaultResolution: a } = e;
        if (null != r[t] && r[t].version === s) return !1;
        let l = [];
        n.forEach((e, t) => {
            let n = (function (e) {
                    let t = r[E];
                    if (null != t)
                        for (let n of t.widgets) {
                            let t = i[n];
                            if (null != t && t.type === e) return t;
                        }
                    return null;
                })(e.type),
                s = { ...e, zIndex: t };
            "" === s.id && (s.id = (0, o.A)()),
                null != n &&
                    ((s.pinned = n.pinned),
                    -1 !== n.anchor.left && (s.anchor = (0, f.NO)(n.anchor, a)),
                    -1 !== n.size.width && (s.size = (0, f.R9)(n.size, a))),
                (i = { ...i, [s.id]: new _.A(s) }),
                l.push(s.id);
        }),
            (r = { ...r, [t]: new d.A({ id: t, widgets: l, version: s }) });
    },
    LAYOUT_SET_PINNED: function (e) {
        let { widgetId: t, pinned: n } = e;
        return g(t, (e, t) => {
            var r, s;
            (r = e), (s = n), (i = { ...i, [r.id]: r.set("pinned", s ?? !r.pinned) });
        });
    },
    LAYOUT_UPDATE_WIDGET: function (e) {
        let { widgetId: t, anchor: n, size: r, opacity: s, minSize: a, defaultSize: o } = e;
        return g(t, (e, t) =>
            (function (e) {
                let { widget: t, anchor: n, size: r, opacity: s, minSize: a, defaultSize: o } = e;
                if (
                    ((i = {
                        ...i,
                        [t.id]: t.merge({
                            anchor: n ?? t.anchor,
                            size: r ?? t.size,
                            opacity: s ?? t.opacity,
                            minSize: a ?? t.minSize,
                        }),
                    }),
                    null != o)
                ) {
                    let e = m[t.type];
                    null != e && (e.defaultSettings.size = { fixed: e.defaultSettings.size.fixed, ...o });
                }
            })({ widget: e, anchor: n, size: r, opacity: s, minSize: a, defaultSize: o }),
        );
    },
    LAYOUT_SET_TOP_WIDGET: function (e) {
        let { widgetId: t } = e;
        return g(t, (e, t) =>
            (function (e, t) {
                let n,
                    r =
                        ((n = []),
                        e.widgets.forEach((e) => {
                            let t = i[e];
                            null != t && n.push(t);
                        }),
                        n);
                r.sort((e, t) => e.zIndex - t.zIndex);
                let s = r.findIndex((e) => e.id === t);
                if (s === r.length - 1) return !1;
                r.push(r.splice(s, 1)[0]);
                for (let e = 0; e < r.length; e++) {
                    var a, o;
                    (a = r[e]), (o = e), (i = { ...i, [a.id]: a.set("zIndex", o) });
                }
                return !0;
            })(t, e.id),
        );
    },
    LAYOUT_DELETE_WIDGET: function (e) {
        let { widgetId: t } = e;
        (i = { ...i }),
            delete i[t],
            a().forEach(r, (e, n) => {
                if (n === E) return;
                let i = e.widgets.indexOf(t);
                if (i >= 0) {
                    let t = [...e.widgets];
                    t.splice(i, 1), (r = { ...r, [n]: e.set("widgets", t) });
                }
            });
    },
    LAYOUT_DELETE_ALL_WIDGETS: function (e) {
        let { layoutId: t } = e,
            n = r[t];
        if (null == n) return !1;
        n.widgets.forEach((e) => {
            (i = { ...i }), delete i[e];
        }),
            (r = { ...r, [n.id]: n.set("widgets", []) });
    },
    LAYOUT_CREATE_WIDGETS: function (e) {
        let { widgetConfigs: t } = e;
        t.forEach((e) => {
            let t = new _.A(e),
                n = r[t.layoutId];
            if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
            (t = t.set("zIndex", n.widgets.length)), (i = { ...i, [t.id]: t });
            let s = [...n.widgets, t.id];
            r = { ...r, [n.id]: n.set("widgets", s) };
        });
    },
    LAYOUT_SET_WIDGET_META: function (e) {
        let { widgetId: t, meta: n } = e;
        return g(t, (e, t) => {
            var r, s;
            (r = e), (s = n), (i = { ...i, [r.id]: r.merge({ meta: { ...(r.meta ?? {}), ...s } }) });
        });
    },
    LAYOUT_SHOW_OVERLAY_EXTRAS_HINT: function (e) {
        let { widgetId: t } = e;
        return g(t, (e, t) => {
            i = { ...i, [e.id]: e.merge({ showExtrasHintTimestamp: Date.now() }) };
        });
    },
    LAYOUT_SET_DEFAULT_CONFIG: function (e) {
        let { widgetType: t, defaultConfig: n } = e;
        m[t] = { ...m[t], ...n };
    },
});

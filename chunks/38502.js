"use strict";
let i, r;
n.d(t, { A: () => N }), n(321073);
var s,
    a = n(735438),
    o = n.n(a),
    l = n(132500),
    d = n(17928),
    _ = n(506774),
    u = n(228366),
    c = n(315069);
class E extends c.A {
    id;
    widgets;
    version;
    constructor(e) {
        super(), (this.version = Number(e.version) ?? 0), (this.id = e.id || ""), (this.widgets = e.widgets || []);
    }
}
class h extends c.A {
    id;
    layoutId;
    type;
    anchor;
    size;
    minSize;
    pinned;
    showExtrasHintTimestamp;
    zIndex;
    opacity;
    meta;
    constructor(e) {
        super(), (this.id = e.id || ""), (this.layoutId = e.layoutId || ""), (this.type = e.type);
        const t = e.anchor ?? {},
            n = e.size ?? {};
        let i = "number" == typeof t.top ? t.top : void 0,
            r = "number" == typeof t.bottom ? t.bottom : void 0,
            s = "number" == typeof t.left ? t.left : void 0,
            a = "number" == typeof t.right ? t.right : void 0;
        const o = null != i && null != r && "auto" === n.height;
        o || (null != r ? (i = void 0) : (r = void 0)),
            (null != s && null != a && "auto" === n.width) || (null != a ? (s = void 0) : (a = void 0)),
            null == i && null == r && (i = 0),
            null == s && null == a && (s = 0),
            (this.anchor = { top: i, left: s, bottom: r, right: a }),
            (this.size = { width: 0, height: 0, ...e.size }),
            (this.minSize = { width: void 0, height: void 0, ...e.minSize }),
            (this.pinned = !!e.pinned),
            (this.zIndex = e.zIndex || 0),
            (this.opacity = e.opacity ?? 1),
            (this.meta = { ...e.meta }),
            null != e.showExtrasHintTimestamp && (this.showExtrasHintTimestamp = e.showExtrasHintTimestamp);
    }
}
var m = n(5463),
    f =
        (((s = {}).DEBUG = "DEBUG"),
        (s.REQUIRED = "REQUIRED"),
        (s.OPTIONAL = "OPTIONAL"),
        (s.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT"),
        s),
    g = n(652215);
n(644434);
let p = "migrated",
    A = {
        [g.uss.GUILDS]: {
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: f.OPTIONAL,
            defaultSettings: {
                anchor: { left: 0.175, top: 0.05, bottom: void 0, right: void 0 },
                size: { width: "auto", height: 0.65 },
                pinned: !1,
                minSize: { width: 312, height: 300 },
            },
            version: 0,
        },
        [g.uss.TEXT]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: f.OPTIONAL,
            defaultSettings: {
                anchor: { left: 0.26, top: 0.05, bottom: void 0, right: void 0 },
                size: { width: 0.565, height: 0.65 },
                pinned: !0,
                minSize: { width: 430, height: 300 },
            },
            version: 0,
        },
        [g.uss.VOICE]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: f.REQUIRED,
            defaultSettings: {
                anchor: { left: 0.011, top: 0.011, bottom: void 0, right: void 0 },
                size: { width: "auto", height: "auto" },
                pinned: !0,
                minSize: { width: 272, height: 100 },
            },
            version: 0,
        },
        [g.uss.GUILDS_TEXT]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: f.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: { left: void 0, top: 0.05, bottom: void 0, right: 0.25 },
                size: { width: 0.6, height: 0.45 },
                pinned: !1,
                minSize: { height: 300, width: 610 },
            },
            version: 0,
        },
        [g.uss.VOICE_V3]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: f.REQUIRED,
            defaultSettings: {
                anchor: { left: 0.01, top: 0.35, bottom: void 0, right: void 0 },
                size: { width: "auto", height: "auto" },
                pinned: !0,
                minSize: { width: 272, height: 24 },
            },
            version: 4,
        },
        [g.uss.VIDEO]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: f.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: { left: 0.01, top: void 0, bottom: 0.02, right: void 0 },
                size: { fixed: !0, width: 408, height: 128 },
                pinned: !0,
                minSize: { width: 128, height: 128 },
            },
            version: 4,
        },
        [g.uss.GO_LIVE]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: f.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: { left: void 0, top: void 0, bottom: 0.02, right: 0.01 },
                size: { fixed: !0, width: 256, height: 144 },
                pinned: !1,
                minSize: { width: 276, height: 164 },
            },
            version: 4,
        },
        [g.uss.QUICK_ACTIONS]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: f.REQUIRED,
            defaultSettings: {
                anchor: { left: 0.34, top: 0.02, bottom: void 0, right: void 0 },
                size: { width: "auto", height: "auto" },
                pinned: !1,
                minSize: { width: 216, height: 56 },
            },
            version: 4,
        },
        [g.uss.NOTIFICATIONS]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: f.REQUIRED,
            defaultSettings: {
                anchor: { left: 0.01, top: 0.02, bottom: void 0, right: void 0 },
                size: { height: "auto", width: "auto" },
                pinned: !0,
                minSize: { width: 320, height: 100 },
            },
            version: 4,
        },
        [g.uss.ACTIVITY]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: f.REQUIRED,
            defaultSettings: {
                anchor: { left: void 0, top: 0.35, bottom: void 0, right: 0.01 },
                size: { height: "auto", width: "auto" },
                pinned: !1,
                minSize: { width: 320, height: 100 },
            },
            version: 4,
        },
        [g.uss.TEXT_CHAT_V3]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: f.REQUIRED,
            defaultSettings: {
                anchor: { left: void 0, top: 0.14, bottom: void 0, right: 0.26 },
                size: { fixed: !0, height: 372, width: 500 },
                minSize: { width: 350, height: 100 },
                pinned: !1,
            },
            version: 4,
        },
        [g.uss.FRIENDS]: {
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !0,
            constrainAutoSizeToExplicitResizeEvents: !0,
            layoutPolicy: f.REQUIRED,
            defaultSettings: {
                anchor: { left: void 0, top: 0.14, bottom: 0.3, right: 0.01 },
                size: { fixed: !0, height: "auto", width: 350 },
                minSize: { width: 350, height: 350 },
                pinned: !1,
            },
            version: 4,
        },
        [g.uss.CLICK_ZONE_DEBUG]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: f.DEBUG,
            defaultSettings: {
                anchor: { left: void 0, top: 0.35, bottom: void 0, right: 0.35 },
                size: { height: "auto", width: "auto" },
                pinned: !0,
                minSize: { width: 50, height: 50 },
            },
            version: 4,
        },
        [g.uss.PERFORMANCE_DEBUG]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: f.DEBUG,
            defaultSettings: {
                anchor: { left: void 0, top: 0.1, bottom: void 0, right: 0.1 },
                size: { height: "auto", width: "auto" },
                pinned: !0,
                minSize: { width: 120, height: 300 },
            },
            version: 4,
        },
    };
function I(e, t) {
    let n = r[e];
    if (null == n) return !1;
    let s = i[n.layoutId];
    return null != s && t(n, s);
}
function T(e) {
    let t = A[e];
    if (null != t) return t.defaultSettings;
}
class S extends d.Ay.PersistedStore {
    static displayName = "LayoutStore";
    static persistKey = "LayoutStore";
    static migrations = [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: i } = { ..._.w.get("OverlayStore") };
            if (5 === i && e) {
                let i = [],
                    r = e.map((e) => {
                        let r = null != t ? t[e] : null,
                            s = null != n ? n[e] : null,
                            a = {
                                id: e,
                                layoutId: p,
                                type: e,
                                anchor: r || { top: -1, left: -1, bottom: null, right: null },
                                size: s || { width: -1, height: -1 },
                                pinned: !0,
                                zIndex: 0,
                            };
                        return i.push([a.id, a]), a.id;
                    });
                return { layouts: [[p, { id: p, widgets: r }]], widgets: i };
            }
            return { layouts: [], widgets: [] };
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                i = new Set(Object.keys(g.uss)),
                r = Array.from(n).filter((e) => {
                    let [t] = e;
                    return !i.has(t);
                }),
                s = Array.from(t).filter((e) => {
                    let [t] = e;
                    return t !== p;
                });
            return (
                s.forEach((e) => {
                    let [t, n] = e,
                        i = null,
                        s = null;
                    if (
                        (n.widgets.find((e) => {
                            let n = r.find((n) => {
                                let [i, r] = n;
                                return i === e && r.layoutId === t;
                            });
                            return (
                                null != n &&
                                (null == s && n[1].type === g.uss.VOICE && (s = n[0]),
                                null == i && n[1].type === g.uss.TEXT && (i = n[1].pinned),
                                (null != i && null != s) || void 0)
                            );
                        }),
                        i || null == s)
                    )
                        return;
                    let a = (0, l.A)();
                    n.widgets = [s, a];
                    let o = T(g.uss.GUILDS_TEXT);
                    null != o && r.push([a, { ...o, type: g.uss.GUILDS_TEXT, id: a, layoutId: t, zIndex: 2 }]);
                }),
                { widgets: r, layouts: s }
            );
        },
        (e) => {
            let { layouts: t, widgets: n } = e;
            return {
                layouts: t.reduce((e, t) => {
                    let [n, i] = t;
                    return (e[n] = i), e;
                }, {}),
                widgets: n.reduce((e, t) => {
                    let [n, i] = t;
                    return (e[n] = i), e;
                }, {}),
            };
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                i = {};
            for (let e in t) {
                let n = t[e];
                i[e] = { ...n, version: 0 };
            }
            return { layouts: i, widgets: n };
        },
    ];
    initialize(e) {
        if (null != e && null != e.layouts && null != e.widgets) {
            var t, n;
            let s, a;
            (t = e.layouts),
                (s = {}),
                o().forEach(t, (e, t) => {
                    s[t] = new E(e);
                }),
                (i = s),
                (n = e.widgets),
                (a = {}),
                o().forEach(n, (e, t) => {
                    a[t] = new h(e);
                }),
                (r = a);
        } else (i = {}), (r = {});
        let s = !1,
            a = [];
        o().forEach(A, (e, t) => {
            e.layoutPolicy === f.REQUIRED && a.push(t);
        }),
            o().forEach(i, (e, t) => {
                let n = this.getWidgetsForLayout(t),
                    o = !1;
                for (let i of a) {
                    let a = n.find((e) => e.type === i);
                    if (null != a || A[i].version !== e.version) continue;
                    o = s = !0;
                    let d = (0, l.A)(),
                        _ = T(i);
                    if (null == _) return;
                    (a = new h({ ..._, type: i, id: d, layoutId: t, zIndex: n.length })),
                        n.push(a),
                        (r = { ...r, [d]: a });
                }
                o &&
                    ((e = e.set(
                        "widgets",
                        n.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                    )),
                    (i = { ...i, [t]: e }));
            }),
            o().forEach(r, (e, t) => {
                let n = i[e.layoutId];
                (null == n || 0 > n.widgets.indexOf(t)) && ((r = { ...r }), delete r[t], (s = !0));
            }),
            s && (this.persist(), this.emitChange());
    }
    getState() {
        return { layouts: i, widgets: r };
    }
    getLayouts() {
        return i;
    }
    getLayout(e) {
        return i[e];
    }
    getAllWidgets() {
        return r;
    }
    getWidget(e) {
        return r[e];
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
                t.layoutPolicy === f.REQUIRED || e.pinned || n.push(e.type);
            }),
            n
        );
    }
    getWidgetConfig(e) {
        return A[e];
    }
    getWidgetDefaultSettings(e) {
        return T(e);
    }
    getWidgetType(e) {
        let t = r[e];
        return null != t ? t.type : "";
    }
    getWidgetsByType(e) {
        return Object.values(r).filter((t) => t.type === e);
    }
    getWidgetsByTypeAndLayout(e, t) {
        return Object.values(r).filter((n) => n.type === e && n.layoutId === t);
    }
    getRegisteredWidgets() {
        return A;
    }
    getDefaultLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = [];
        return (
            o().forEach(this.getRegisteredWidgets(), (i, r) => {
                switch (i.layoutPolicy) {
                    case f.REQUIRED:
                    case f.OPTIONAL_DEFAULT:
                        if ((i.version ?? 0) === t) {
                            let t = T(r);
                            if (null == t) return;
                            n.push({ ...t, type: r, id: (0, l.A)(), layoutId: e });
                        }
                }
            }),
            n
        );
    }
}
let N = new S(u.h, {
    LAYOUT_CREATE: function (e) {
        let { layoutId: t, widgets: n, version: s, defaultResolution: a } = e;
        if (null != i[t] && i[t].version === s) return !1;
        let o = [];
        n.forEach((e, t) => {
            let n = (function (e) {
                    let t = i[p];
                    if (null != t)
                        for (let n of t.widgets) {
                            let t = r[n];
                            if (null != t && t.type === e) return t;
                        }
                    return null;
                })(e.type),
                s = { ...e, zIndex: t };
            "" === s.id && (s.id = (0, l.A)()),
                null != n &&
                    ((s.pinned = n.pinned),
                    -1 !== n.anchor.left && (s.anchor = (0, m.NO)(n.anchor, a)),
                    -1 !== n.size.width && (s.size = (0, m.R9)(n.size, a))),
                (r = { ...r, [s.id]: new h(s) }),
                o.push(s.id);
        }),
            (i = { ...i, [t]: new E({ id: t, widgets: o, version: s }) });
    },
    LAYOUT_SET_PINNED: function (e) {
        let { widgetId: t, pinned: n } = e;
        return I(t, (e, t) => {
            var i, s;
            (i = e), (s = n), (r = { ...r, [i.id]: i.set("pinned", s ?? !i.pinned) });
        });
    },
    LAYOUT_UPDATE_WIDGET: function (e) {
        let { widgetId: t, anchor: n, size: i, opacity: s, minSize: a, defaultSize: o } = e;
        return I(t, (e, t) =>
            (function (e) {
                let { widget: t, anchor: n, size: i, opacity: s, minSize: a, defaultSize: o } = e;
                if (
                    ((r = {
                        ...r,
                        [t.id]: t.merge({
                            anchor: n ?? t.anchor,
                            size: i ?? t.size,
                            opacity: s ?? t.opacity,
                            minSize: a ?? t.minSize,
                        }),
                    }),
                    null != o)
                ) {
                    let e = A[t.type];
                    null != e && (e.defaultSettings.size = { fixed: e.defaultSettings.size.fixed, ...o });
                }
            })({ widget: e, anchor: n, size: i, opacity: s, minSize: a, defaultSize: o }),
        );
    },
    LAYOUT_SET_TOP_WIDGET: function (e) {
        let { widgetId: t } = e;
        return I(t, (e, t) =>
            (function (e, t) {
                let n,
                    i =
                        ((n = []),
                        e.widgets.forEach((e) => {
                            let t = r[e];
                            null != t && n.push(t);
                        }),
                        n);
                i.sort((e, t) => e.zIndex - t.zIndex);
                let s = i.findIndex((e) => e.id === t);
                if (s === i.length - 1) return !1;
                i.push(i.splice(s, 1)[0]);
                for (let e = 0; e < i.length; e++) {
                    var a, o;
                    (a = i[e]), (o = e), (r = { ...r, [a.id]: a.set("zIndex", o) });
                }
                return !0;
            })(t, e.id),
        );
    },
    LAYOUT_DELETE_WIDGET: function (e) {
        let { widgetId: t } = e;
        (r = { ...r }),
            delete r[t],
            o().forEach(i, (e, n) => {
                if (n === p) return;
                let r = e.widgets.indexOf(t);
                if (r >= 0) {
                    let t = [...e.widgets];
                    t.splice(r, 1), (i = { ...i, [n]: e.set("widgets", t) });
                }
            });
    },
    LAYOUT_DELETE_ALL_WIDGETS: function (e) {
        let { layoutId: t } = e,
            n = i[t];
        if (null == n) return !1;
        n.widgets.forEach((e) => {
            (r = { ...r }), delete r[e];
        }),
            (i = { ...i, [n.id]: n.set("widgets", []) });
    },
    LAYOUT_CREATE_WIDGETS: function (e) {
        let { widgetConfigs: t } = e;
        t.forEach((e) => {
            let t = new h(e),
                n = i[t.layoutId];
            if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
            (t = t.set("zIndex", n.widgets.length)), (r = { ...r, [t.id]: t });
            let s = [...n.widgets, t.id];
            i = { ...i, [n.id]: n.set("widgets", s) };
        });
    },
    LAYOUT_SET_WIDGET_META: function (e) {
        let { widgetId: t, meta: n } = e;
        return I(t, (e, t) => {
            var i, s;
            (i = e), (s = n), (r = { ...r, [i.id]: i.merge({ meta: { ...(i.meta ?? {}), ...s } }) });
        });
    },
    LAYOUT_SHOW_OVERLAY_EXTRAS_HINT: function (e) {
        let { widgetId: t } = e;
        return I(t, (e, t) => {
            r = { ...r, [e.id]: e.merge({ showExtrasHintTimestamp: Date.now() }) };
        });
    },
    LAYOUT_SET_DEFAULT_CONFIG: function (e) {
        let { widgetType: t, defaultConfig: n } = e;
        A[t] = { ...A[t], ...n };
    },
});

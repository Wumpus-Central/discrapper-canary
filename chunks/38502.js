"use strict";
let i, r;
n.d(t, { A: () => N }), n(321073);
var a,
    s = n(435558),
    l = n.n(s),
    o = n(132500),
    d = n(17928),
    c = n(506774),
    u = n(228366),
    _ = n(315069);
class E extends _.A {
    id;
    widgets;
    version;
    constructor(e) {
        super(), (this.version = Number(e.version) ?? 0), (this.id = e.id || ""), (this.widgets = e.widgets || []);
    }
}
class A extends _.A {
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
            a = "number" == typeof t.left ? t.left : void 0,
            s = "number" == typeof t.right ? t.right : void 0;
        const l = null != i && null != r && "auto" === n.height;
        l || (null != r ? (i = void 0) : (r = void 0)),
            (null != a && null != s && "auto" === n.width) || (null != s ? (a = void 0) : (s = void 0)),
            null == i && null == r && (i = 0),
            null == a && null == s && (a = 0),
            (this.anchor = { top: i, left: a, bottom: r, right: s }),
            (this.size = { width: 0, height: 0, ...e.size }),
            (this.minSize = { width: void 0, height: void 0, ...e.minSize }),
            (this.pinned = !!e.pinned),
            (this.zIndex = e.zIndex || 0),
            (this.opacity = e.opacity ?? 1),
            (this.meta = { ...e.meta }),
            null != e.showExtrasHintTimestamp && (this.showExtrasHintTimestamp = e.showExtrasHintTimestamp);
    }
}
var h = n(5463),
    I =
        (((a = {}).DEBUG = "DEBUG"),
        (a.REQUIRED = "REQUIRED"),
        (a.OPTIONAL = "OPTIONAL"),
        (a.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT"),
        a),
    f = n(652215);
n(644434);
let p = "migrated",
    T = {
        [f.uss.GUILDS]: {
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: I.OPTIONAL,
            defaultSettings: {
                anchor: { left: 0.175, top: 0.05, bottom: void 0, right: void 0 },
                size: { width: "auto", height: 0.65 },
                pinned: !1,
                minSize: { width: 312, height: 300 },
            },
            version: 0,
        },
        [f.uss.TEXT]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: I.OPTIONAL,
            defaultSettings: {
                anchor: { left: 0.26, top: 0.05, bottom: void 0, right: void 0 },
                size: { width: 0.565, height: 0.65 },
                pinned: !0,
                minSize: { width: 430, height: 300 },
            },
            version: 0,
        },
        [f.uss.VOICE]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: I.REQUIRED,
            defaultSettings: {
                anchor: { left: 0.011, top: 0.011, bottom: void 0, right: void 0 },
                size: { width: "auto", height: "auto" },
                pinned: !0,
                minSize: { width: 272, height: 100 },
            },
            version: 0,
        },
        [f.uss.GUILDS_TEXT]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: I.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: { left: void 0, top: 0.05, bottom: void 0, right: 0.25 },
                size: { width: 0.6, height: 0.45 },
                pinned: !1,
                minSize: { height: 300, width: 610 },
            },
            version: 0,
        },
        [f.uss.VOICE_V3]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: I.REQUIRED,
            defaultSettings: {
                anchor: { left: 0.01, top: 0.35, bottom: void 0, right: void 0 },
                size: { width: "auto", height: "auto" },
                pinned: !0,
                minSize: { width: 272, height: 24 },
            },
            version: 4,
        },
        [f.uss.VIDEO]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: I.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: { left: 0.01, top: void 0, bottom: 0.02, right: void 0 },
                size: { fixed: !0, width: 408, height: 128 },
                pinned: !0,
                minSize: { width: 128, height: 128 },
            },
            version: 4,
        },
        [f.uss.GO_LIVE]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: I.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: { left: void 0, top: void 0, bottom: 0.02, right: 0.01 },
                size: { fixed: !0, width: 256, height: 144 },
                pinned: !1,
                minSize: { width: 276, height: 164 },
            },
            version: 4,
        },
        [f.uss.QUICK_ACTIONS]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: I.REQUIRED,
            defaultSettings: {
                anchor: { left: 0.34, top: 0.02, bottom: void 0, right: void 0 },
                size: { width: "auto", height: "auto" },
                pinned: !1,
                minSize: { width: 216, height: 56 },
            },
            version: 4,
        },
        [f.uss.NOTIFICATIONS]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: I.REQUIRED,
            defaultSettings: {
                anchor: { left: 0.01, top: 0.02, bottom: void 0, right: void 0 },
                size: { height: "auto", width: "auto" },
                pinned: !0,
                minSize: { width: 320, height: 100 },
            },
            version: 4,
        },
        [f.uss.ACTIVITY]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: I.REQUIRED,
            defaultSettings: {
                anchor: { left: void 0, top: 0.35, bottom: void 0, right: 0.01 },
                size: { height: "auto", width: "auto" },
                pinned: !1,
                minSize: { width: 320, height: 100 },
            },
            version: 4,
        },
        [f.uss.TEXT_CHAT_V3]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: I.REQUIRED,
            defaultSettings: {
                anchor: { left: void 0, top: 0.14, bottom: void 0, right: 0.26 },
                size: { fixed: !0, height: 372, width: 500 },
                minSize: { width: 350, height: 100 },
                pinned: !1,
            },
            version: 4,
        },
        [f.uss.FRIENDS]: {
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !0,
            constrainAutoSizeToExplicitResizeEvents: !0,
            layoutPolicy: I.REQUIRED,
            defaultSettings: {
                anchor: { left: void 0, top: 0.14, bottom: 0.3, right: 0.01 },
                size: { fixed: !0, height: "auto", width: 350 },
                minSize: { width: 350, height: 350 },
                pinned: !1,
            },
            version: 4,
        },
        [f.uss.CLICK_ZONE_DEBUG]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: I.DEBUG,
            defaultSettings: {
                anchor: { left: void 0, top: 0.35, bottom: void 0, right: 0.35 },
                size: { height: "auto", width: "auto" },
                pinned: !0,
                minSize: { width: 50, height: 50 },
            },
            version: 4,
        },
        [f.uss.PERFORMANCE_DEBUG]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: I.DEBUG,
            defaultSettings: {
                anchor: { left: void 0, top: 0.1, bottom: void 0, right: 0.1 },
                size: { height: "auto", width: "auto" },
                pinned: !0,
                minSize: { width: 120, height: 300 },
            },
            version: 4,
        },
    };
function m(e, t) {
    let n = r[e];
    if (null == n) return !1;
    let a = i[n.layoutId];
    return null != a && t(n, a);
}
function g(e) {
    let t = T[e];
    if (null != t) return t.defaultSettings;
}
class S extends d.Ay.PersistedStore {
    static displayName = "LayoutStore";
    static persistKey = "LayoutStore";
    static migrations = [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: i } = { ...c.w.get("OverlayStore") };
            if (5 === i && e) {
                let i = [],
                    r = e.map((e) => {
                        let r = null != t ? t[e] : null,
                            a = null != n ? n[e] : null,
                            s = {
                                id: e,
                                layoutId: p,
                                type: e,
                                anchor: r || { top: -1, left: -1, bottom: null, right: null },
                                size: a || { width: -1, height: -1 },
                                pinned: !0,
                                zIndex: 0,
                            };
                        return i.push([s.id, s]), s.id;
                    });
                return { layouts: [[p, { id: p, widgets: r }]], widgets: i };
            }
            return { layouts: [], widgets: [] };
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                i = new Set(Object.keys(f.uss)),
                r = Array.from(n).filter((e) => {
                    let [t] = e;
                    return !i.has(t);
                }),
                a = Array.from(t).filter((e) => {
                    let [t] = e;
                    return t !== p;
                });
            return (
                a.forEach((e) => {
                    let [t, n] = e,
                        i = null,
                        a = null;
                    if (
                        (n.widgets.find((e) => {
                            let n = r.find((n) => {
                                let [i, r] = n;
                                return i === e && r.layoutId === t;
                            });
                            return (
                                null != n &&
                                (null == a && n[1].type === f.uss.VOICE && (a = n[0]),
                                null == i && n[1].type === f.uss.TEXT && (i = n[1].pinned),
                                (null != i && null != a) || void 0)
                            );
                        }),
                        i || null == a)
                    )
                        return;
                    let s = (0, o.A)();
                    n.widgets = [a, s];
                    let l = g(f.uss.GUILDS_TEXT);
                    null != l && r.push([s, { ...l, type: f.uss.GUILDS_TEXT, id: s, layoutId: t, zIndex: 2 }]);
                }),
                { widgets: r, layouts: a }
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
            let a, s;
            (t = e.layouts),
                (a = {}),
                l().forEach(t, (e, t) => {
                    a[t] = new E(e);
                }),
                (i = a),
                (n = e.widgets),
                (s = {}),
                l().forEach(n, (e, t) => {
                    s[t] = new A(e);
                }),
                (r = s);
        } else (i = {}), (r = {});
        let a = !1,
            s = [];
        l().forEach(T, (e, t) => {
            e.layoutPolicy === I.REQUIRED && s.push(t);
        }),
            l().forEach(i, (e, t) => {
                let n = this.getWidgetsForLayout(t),
                    l = !1;
                for (let i of s) {
                    let s = n.find((e) => e.type === i);
                    if (null != s || T[i].version !== e.version) continue;
                    l = a = !0;
                    let d = (0, o.A)(),
                        c = g(i);
                    if (null == c) return;
                    (s = new A({ ...c, type: i, id: d, layoutId: t, zIndex: n.length })),
                        n.push(s),
                        (r = { ...r, [d]: s });
                }
                l &&
                    ((e = e.set(
                        "widgets",
                        n.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                    )),
                    (i = { ...i, [t]: e }));
            }),
            l().forEach(r, (e, t) => {
                let n = i[e.layoutId];
                (null == n || 0 > n.widgets.indexOf(t)) && ((r = { ...r }), delete r[t], (a = !0));
            }),
            a && (this.persist(), this.emitChange());
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
                t.layoutPolicy === I.REQUIRED || e.pinned || n.push(e.type);
            }),
            n
        );
    }
    getWidgetConfig(e) {
        return T[e];
    }
    getWidgetDefaultSettings(e) {
        return g(e);
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
        return T;
    }
    getDefaultLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = [];
        return (
            l().forEach(this.getRegisteredWidgets(), (i, r) => {
                switch (i.layoutPolicy) {
                    case I.REQUIRED:
                    case I.OPTIONAL_DEFAULT:
                        if ((i.version ?? 0) === t) {
                            let t = g(r);
                            if (null == t) return;
                            n.push({ ...t, type: r, id: (0, o.A)(), layoutId: e });
                        }
                }
            }),
            n
        );
    }
}
let N = new S(u.h, {
    LAYOUT_CREATE: function (e) {
        let { layoutId: t, widgets: n, version: a, defaultResolution: s } = e;
        if (null != i[t] && i[t].version === a) return !1;
        let l = [];
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
                a = { ...e, zIndex: t };
            "" === a.id && (a.id = (0, o.A)()),
                null != n &&
                    ((a.pinned = n.pinned),
                    -1 !== n.anchor.left && (a.anchor = (0, h.NO)(n.anchor, s)),
                    -1 !== n.size.width && (a.size = (0, h.R9)(n.size, s))),
                (r = { ...r, [a.id]: new A(a) }),
                l.push(a.id);
        }),
            (i = { ...i, [t]: new E({ id: t, widgets: l, version: a }) });
    },
    LAYOUT_SET_PINNED: function (e) {
        let { widgetId: t, pinned: n } = e;
        return m(t, (e, t) => {
            var i, a;
            (i = e), (a = n), (r = { ...r, [i.id]: i.set("pinned", a ?? !i.pinned) });
        });
    },
    LAYOUT_UPDATE_WIDGET: function (e) {
        let { widgetId: t, anchor: n, size: i, opacity: a, minSize: s, defaultSize: l } = e;
        return m(t, (e, t) =>
            (function (e) {
                let { widget: t, anchor: n, size: i, opacity: a, minSize: s, defaultSize: l } = e;
                if (
                    ((r = {
                        ...r,
                        [t.id]: t.merge({
                            anchor: n ?? t.anchor,
                            size: i ?? t.size,
                            opacity: a ?? t.opacity,
                            minSize: s ?? t.minSize,
                        }),
                    }),
                    null != l)
                ) {
                    let e = T[t.type];
                    null != e && (e.defaultSettings.size = { fixed: e.defaultSettings.size.fixed, ...l });
                }
            })({ widget: e, anchor: n, size: i, opacity: a, minSize: s, defaultSize: l }),
        );
    },
    LAYOUT_SET_TOP_WIDGET: function (e) {
        let { widgetId: t } = e;
        return m(t, (e, t) =>
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
                let a = i.findIndex((e) => e.id === t);
                if (a === i.length - 1) return !1;
                i.push(i.splice(a, 1)[0]);
                for (let e = 0; e < i.length; e++) {
                    var s, l;
                    (s = i[e]), (l = e), (r = { ...r, [s.id]: s.set("zIndex", l) });
                }
                return !0;
            })(t, e.id),
        );
    },
    LAYOUT_DELETE_WIDGET: function (e) {
        let { widgetId: t } = e;
        (r = { ...r }),
            delete r[t],
            l().forEach(i, (e, n) => {
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
            let t = new A(e),
                n = i[t.layoutId];
            if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
            (t = t.set("zIndex", n.widgets.length)), (r = { ...r, [t.id]: t });
            let a = [...n.widgets, t.id];
            i = { ...i, [n.id]: n.set("widgets", a) };
        });
    },
    LAYOUT_SET_WIDGET_META: function (e) {
        let { widgetId: t, meta: n } = e;
        return m(t, (e, t) => {
            var i, a;
            (i = e), (a = n), (r = { ...r, [i.id]: i.merge({ meta: { ...(i.meta ?? {}), ...a } }) });
        });
    },
    LAYOUT_SHOW_OVERLAY_EXTRAS_HINT: function (e) {
        let { widgetId: t } = e;
        return m(t, (e, t) => {
            r = { ...r, [e.id]: e.merge({ showExtrasHintTimestamp: Date.now() }) };
        });
    },
    LAYOUT_SET_DEFAULT_CONFIG: function (e) {
        let { widgetType: t, defaultConfig: n } = e;
        T[t] = { ...T[t], ...n };
    },
});

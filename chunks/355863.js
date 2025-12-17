let r, i;
n.d(t, { Z: () => q }), n(539854), n(388685), n(642613), n(415506);
var a,
    o = n(392711),
    s = n.n(o),
    l = n(772848),
    c = n(442837),
    u = n(433517),
    d = n(570140),
    f = n(131792),
    p = n(252982),
    _ = n(434529),
    m = n(647711),
    h = n(981631),
    g = n(757744);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = "migrated",
    S = 0.02,
    I = 0.01,
    T = {
        [h.Odu.GUILDS]: {
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: m.W.OPTIONAL,
            defaultSettings: {
                anchor: {
                    left: 0.175,
                    top: 0.05,
                    bottom: void 0,
                    right: void 0,
                },
                size: {
                    width: "auto",
                    height: 0.65,
                },
                pinned: !1,
                minSize: {
                    width: 312,
                    height: 300,
                },
            },
            version: g.bv,
        },
        [h.Odu.TEXT]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: m.W.OPTIONAL,
            defaultSettings: {
                anchor: {
                    left: 0.26,
                    top: 0.05,
                    bottom: void 0,
                    right: void 0,
                },
                size: {
                    width: 0.565,
                    height: 0.65,
                },
                pinned: !0,
                minSize: {
                    width: 430,
                    height: 300,
                },
            },
            version: g.bv,
        },
        [h.Odu.VOICE]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: m.W.REQUIRED,
            defaultSettings: {
                anchor: {
                    left: 0.011,
                    top: 0.011,
                    bottom: void 0,
                    right: void 0,
                },
                size: {
                    width: "auto",
                    height: "auto",
                },
                pinned: !0,
                minSize: {
                    width: 272,
                    height: 100,
                },
            },
            version: g.bv,
        },
        [h.Odu.GUILDS_TEXT]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: m.W.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: 0.05,
                    bottom: void 0,
                    right: 0.25,
                },
                size: {
                    width: 0.6,
                    height: 0.45,
                },
                pinned: !1,
                minSize: {
                    height: 300,
                    width: 610,
                },
            },
            version: g.bv,
        },
        [h.Odu.VOICE_V3]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: m.W.REQUIRED,
            defaultSettings: {
                anchor: {
                    left: I,
                    top: 0.35,
                    bottom: void 0,
                    right: void 0,
                },
                size: {
                    width: "auto",
                    height: "auto",
                },
                pinned: !0,
                minSize: {
                    width: 272,
                    height: 24,
                },
            },
            version: g.HN,
        },
        [h.Odu.VIDEO]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: m.W.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: {
                    left: I,
                    top: void 0,
                    bottom: S,
                    right: void 0,
                },
                size: {
                    fixed: !0,
                    width: 408,
                    height: 128,
                },
                pinned: !0,
                minSize: {
                    width: 128,
                    height: 128,
                },
            },
            version: g.HN,
        },
        [h.Odu.GO_LIVE]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: m.W.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: void 0,
                    bottom: S,
                    right: I,
                },
                size: {
                    fixed: !0,
                    width: 256,
                    height: 144,
                },
                pinned: !1,
                minSize: {
                    width: 276,
                    height: 164,
                },
            },
            version: g.HN,
        },
        [h.Odu.QUICK_ACTIONS]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: m.W.REQUIRED,
            defaultSettings: {
                anchor: {
                    left: 0.34,
                    top: S,
                    bottom: void 0,
                    right: void 0,
                },
                size: {
                    width: "auto",
                    height: "auto",
                },
                pinned: !1,
                minSize: {
                    width: 216,
                    height: 56,
                },
            },
            version: g.HN,
        },
        [h.Odu.NOTIFICATIONS]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: m.W.REQUIRED,
            defaultSettings: {
                anchor: {
                    left: I,
                    top: S,
                    bottom: void 0,
                    right: void 0,
                },
                size: {
                    height: "auto",
                    width: "auto",
                },
                pinned: !0,
                minSize: {
                    width: 320,
                    height: 100,
                },
            },
            version: g.HN,
        },
        [h.Odu.ACTIVITY]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: m.W.REQUIRED,
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: 0.35,
                    bottom: void 0,
                    right: I,
                },
                size: {
                    height: "auto",
                    width: "auto",
                },
                pinned: !1,
                minSize: {
                    width: 320,
                    height: 100,
                },
            },
            version: g.HN,
        },
        [h.Odu.FRIENDS]: {
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: m.W.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: 6 * S,
                    bottom: void 0,
                    right: I,
                },
                size: {
                    fixed: !0,
                    height: 500,
                    width: 350,
                },
                minSize: {
                    width: 350,
                    height: 350,
                },
                pinned: !1,
            },
            version: g.HN,
        },
        [h.Odu.CLICK_ZONE_DEBUG]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: m.W.DEBUG,
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: 0.35,
                    bottom: void 0,
                    right: 0.35,
                },
                size: {
                    height: "auto",
                    width: "auto",
                },
                pinned: !0,
                minSize: {
                    width: 50,
                    height: 50,
                },
            },
            version: g.HN,
        },
        [h.Odu.PERFORMANCE_DEBUG]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: m.W.DEBUG,
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: 0.1,
                    bottom: void 0,
                    right: 0.1,
                },
                size: {
                    height: "auto",
                    width: "auto",
                },
                pinned: !0,
                minSize: {
                    width: 120,
                    height: 300,
                },
            },
            version: g.HN,
        },
    };
function C(e) {
    let { layoutId: t, widgets: n, version: a, defaultResolution: o } = e;
    if (null != r[t] && r[t].version === a) return !1;
    let s = [];
    n.forEach((e, t) => {
        let n = A(e.type),
            r = O(b({}, e), { zIndex: t });
        "" === r.id && (r.id = (0, l.Z)()),
            null != n &&
                ((r.pinned = n.pinned),
                -1 !== n.anchor.left && (r.anchor = (0, _.jL)(n.anchor, o)),
                -1 !== n.size.width && (r.size = (0, _.Ox)(n.size, o))),
            (i = O(b({}, i), { [r.id]: new p.Z(r) })),
            s.push(r.id);
    }),
        (r = O(b({}, r), {
            [t]: new f.Z({
                id: t,
                widgets: s,
                version: a,
            }),
        }));
}
function A(e) {
    let t = r[v];
    if (null != t)
        for (let n of t.widgets) {
            let t = i[n];
            if (null != t && t.type === e) return t;
        }
    return null;
}
function N(e, t) {
    let n = i[e];
    if (null == n) return !1;
    let a = r[n.layoutId];
    return null != a && t(n, a);
}
function P(e) {
    let { widgetId: t, anchor: n, size: r, opacity: i, minSize: a, defaultSize: o } = e;
    return N(t, (e, t) =>
        j({
            widget: e,
            anchor: n,
            size: r,
            opacity: i,
            minSize: a,
            defaultSize: o,
        }),
    );
}
function R(e) {
    let { widgetId: t } = e;
    return N(t, (e, t) => w(t, e.id));
}
function w(e, t) {
    let n = H(e);
    n.sort((e, t) => e.zIndex - t.zIndex);
    let r = n.findIndex((e) => e.id === t);
    if (r === n.length - 1) return !1;
    n.push(n.splice(r, 1)[0]);
    for (let e = 0; e < n.length; e++) B(n[e], e);
    return !0;
}
function D(e) {
    let { widgetId: t, meta: n } = e;
    return N(t, (e, t) => {
        x(e, n);
    });
}
function x(e, t) {
    var n;
    i = O(b({}, i), { [e.id]: e.merge({ meta: b({}, null != (n = e.meta) ? n : {}, t) }) });
}
function L(e) {
    let { widgetId: t, pinned: n } = e;
    return N(t, (e, t) => {
        V(e, n);
    });
}
function j(e) {
    let { widget: t, anchor: n, size: r, opacity: a, minSize: o, defaultSize: s } = e;
    if (
        ((i = O(b({}, i), {
            [t.id]: t.merge({
                anchor: null != n ? n : t.anchor,
                size: null != r ? r : t.size,
                opacity: null != a ? a : t.opacity,
                minSize: null != o ? o : t.minSize,
            }),
        })),
        null != s)
    ) {
        let e = T[t.type];
        null != e && (e.defaultSettings.size = b({ fixed: e.defaultSettings.size.fixed }, s));
    }
}
function M(e) {
    i = O(b({}, i), { [e.id]: e.merge({ showExtrasHintTimestamp: Date.now() }) });
}
function k(e) {
    let { widgetId: t } = e;
    return N(t, (e, t) => {
        M(e);
    });
}
function U(e) {
    let { widgetId: t } = e;
    (i = b({}, i)),
        delete i[t],
        s().forEach(r, (e, n) => {
            if (n === v) return;
            let i = e.widgets.indexOf(t);
            if (i >= 0) {
                let t = [...e.widgets];
                t.splice(i, 1), (r = O(b({}, r), { [n]: e.set("widgets", t) }));
            }
        });
}
function G(e) {
    let { layoutId: t } = e,
        n = r[t];
    if (null == n) return !1;
    n.widgets.forEach((e) => {
        (i = b({}, i)), delete i[e];
    }),
        (r = O(b({}, r), { [n.id]: n.set("widgets", []) }));
}
function Z(e) {
    let { widgetConfigs: t } = e;
    t.forEach((e) => {
        let t = new p.Z(e),
            n = r[t.layoutId];
        if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
        (t = t.set("zIndex", n.widgets.length)), (i = O(b({}, i), { [t.id]: t }));
        let a = [...n.widgets, t.id];
        r = O(b({}, r), { [n.id]: n.set("widgets", a) });
    });
}
function F(e) {
    let { widgetType: t, defaultConfig: n } = e;
    T[t] = b({}, T[t], n);
}
function B(e, t) {
    i = O(b({}, i), { [e.id]: e.set("zIndex", t) });
}
function V(e, t) {
    i = O(b({}, i), { [e.id]: e.set("pinned", null != t ? t : !e.pinned) });
}
function H(e) {
    let t = [];
    return (
        e.widgets.forEach((e) => {
            let n = i[e];
            null != n && t.push(n);
        }),
        t
    );
}
function Y(e) {
    let t = {};
    return (
        s().forEach(e, (e, n) => {
            t[n] = new f.Z(e);
        }),
        t
    );
}
function W(e) {
    let t = {};
    return (
        s().forEach(e, (e, n) => {
            t[n] = new p.Z(e);
        }),
        t
    );
}
function K(e) {
    let t = T[e];
    if (null != t) return t.defaultSettings;
}
class z extends (a = c.ZP.PersistedStore) {
    initialize(e) {
        null != e && null != e.layouts && null != e.widgets
            ? ((r = Y(e.layouts)), (i = W(e.widgets)))
            : ((r = {}), (i = {}));
        let t = !1,
            n = [];
        s().forEach(T, (e, t) => {
            e.layoutPolicy === m.W.REQUIRED && n.push(t);
        }),
            s().forEach(r, (e, a) => {
                let o = this.getWidgetsForLayout(a),
                    s = !1;
                for (let r of n) {
                    let n = o.find((e) => e.type === r);
                    if (null != n || T[r].version !== e.version) continue;
                    s = t = !0;
                    let c = (0, l.Z)(),
                        u = K(r);
                    if (null == u) return;
                    (n = new p.Z(
                        O(b({}, u), {
                            type: r,
                            id: c,
                            layoutId: a,
                            zIndex: o.length,
                        }),
                    )),
                        o.push(n),
                        (i = O(b({}, i), { [c]: n }));
                }
                s &&
                    ((e = e.set(
                        "widgets",
                        o.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                    )),
                    (r = O(b({}, r), { [a]: e })));
            }),
            s().forEach(i, (e, n) => {
                let a = r[e.layoutId];
                (null == a || 0 > a.widgets.indexOf(n)) && ((i = b({}, i)), delete i[n], (t = !0));
            }),
            t && (this.persist(), this.emitChange());
    }
    getState() {
        return {
            layouts: r,
            widgets: i,
        };
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
                t.layoutPolicy === m.W.REQUIRED || e.pinned || n.push(e.type);
            }),
            n
        );
    }
    getWidgetConfig(e) {
        return T[e];
    }
    getWidgetDefaultSettings(e) {
        return K(e);
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
        return T;
    }
    getDefaultLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = [];
        return (
            s().forEach(this.getRegisteredWidgets(), (r, i) => {
                switch (r.layoutPolicy) {
                    case m.W.REQUIRED:
                    case m.W.OPTIONAL_DEFAULT:
                        var a;
                        if ((null != (a = r.version) ? a : 0) === t) {
                            let t = K(i);
                            if (null == t) return;
                            n.push(
                                O(b({}, t), {
                                    type: i,
                                    id: (0, l.Z)(),
                                    layoutId: e,
                                }),
                            );
                        }
                }
            }),
            n
        );
    }
}
E(z, "displayName", "LayoutStore"),
    E(z, "persistKey", "LayoutStore"),
    E(z, "migrations", [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: r } = b({}, u.K.get("OverlayStore"));
            if (5 === r && e) {
                let r = v,
                    i = [],
                    a = e.map((e) => {
                        let a = null != t ? t[e] : null,
                            o = null != n ? n[e] : null,
                            s = {
                                id: e,
                                layoutId: r,
                                type: e,
                                anchor: a || {
                                    top: -1,
                                    left: -1,
                                    bottom: null,
                                    right: null,
                                },
                                size: o || {
                                    width: -1,
                                    height: -1,
                                },
                                pinned: !0,
                                zIndex: 0,
                            };
                        return i.push([s.id, s]), s.id;
                    }),
                    o = {
                        id: r,
                        widgets: a,
                    };
                return {
                    layouts: [[r, o]],
                    widgets: i,
                };
            }
            return {
                layouts: [],
                widgets: [],
            };
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                r = new Set(Object.keys(h.Odu)),
                i = Array.from(n).filter((e) => {
                    let [t] = e;
                    return !r.has(t);
                }),
                a = Array.from(t).filter((e) => {
                    let [t] = e;
                    return t !== v;
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
                                (null == a && n[1].type === h.Odu.VOICE && (a = n[0]),
                                null == r && n[1].type === h.Odu.TEXT && (r = n[1].pinned),
                                (null != r && null != a) || void 0)
                            );
                        }),
                        r || null == a)
                    )
                        return;
                    let o = (0, l.Z)();
                    n.widgets = [a, o];
                    let s = K(h.Odu.GUILDS_TEXT);
                    null != s &&
                        i.push([
                            o,
                            O(b({}, s), {
                                type: h.Odu.GUILDS_TEXT,
                                id: o,
                                layoutId: t,
                                zIndex: 2,
                            }),
                        ]);
                }),
                {
                    widgets: i,
                    layouts: a,
                }
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
                r[e] = O(b({}, n), { version: g.bv });
            }
            return {
                layouts: r,
                widgets: n,
            };
        },
    ]);
let q = new z(d.Z, {
    LAYOUT_CREATE: C,
    LAYOUT_SET_PINNED: L,
    LAYOUT_UPDATE_WIDGET: P,
    LAYOUT_SET_TOP_WIDGET: R,
    LAYOUT_DELETE_WIDGET: U,
    LAYOUT_DELETE_ALL_WIDGETS: G,
    LAYOUT_CREATE_WIDGETS: Z,
    LAYOUT_SET_WIDGET_META: D,
    LAYOUT_SHOW_OVERLAY_EXTRAS_HINT: k,
    LAYOUT_SET_DEFAULT_CONFIG: F,
});

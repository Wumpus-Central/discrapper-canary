let r, i;
n.d(t, { A: () => q }), n(321073), n(896048), n(638769), n(65821);
var a,
    s = n(735438),
    o = n.n(s),
    l = n(835245),
    c = n(311907),
    u = n(506774),
    d = n(73153),
    f = n(435090),
    p = n(639180),
    _ = n(5463),
    h = n(881957),
    m = n(652215);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(644434);
let O = "migrated",
    A = 0.02,
    v = 0.01,
    S = {
        [m.uss.GUILDS]: {
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: h.X.OPTIONAL,
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
            version: 0,
        },
        [m.uss.TEXT]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: h.X.OPTIONAL,
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
            version: 0,
        },
        [m.uss.VOICE]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: h.X.REQUIRED,
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
            version: 0,
        },
        [m.uss.GUILDS_TEXT]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: h.X.OPTIONAL_DEFAULT,
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
            version: 0,
        },
        [m.uss.VOICE_V3]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: h.X.REQUIRED,
            defaultSettings: {
                anchor: {
                    left: v,
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
            version: 3,
        },
        [m.uss.VIDEO]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: h.X.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: {
                    left: v,
                    top: void 0,
                    bottom: A,
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
            version: 3,
        },
        [m.uss.GO_LIVE]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: h.X.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: void 0,
                    bottom: A,
                    right: v,
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
            version: 3,
        },
        [m.uss.QUICK_ACTIONS]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: h.X.REQUIRED,
            defaultSettings: {
                anchor: {
                    left: 0.34,
                    top: A,
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
            version: 3,
        },
        [m.uss.NOTIFICATIONS]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: h.X.REQUIRED,
            defaultSettings: {
                anchor: {
                    left: v,
                    top: A,
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
            version: 3,
        },
        [m.uss.ACTIVITY]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: h.X.REQUIRED,
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: 0.35,
                    bottom: void 0,
                    right: v,
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
            version: 3,
        },
        [m.uss.FRIENDS]: {
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: h.X.OPTIONAL_DEFAULT,
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: 6 * A,
                    bottom: void 0,
                    right: v,
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
            version: 3,
        },
        [m.uss.CLICK_ZONE_DEBUG]: {
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: h.X.DEBUG,
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
            version: 3,
        },
        [m.uss.PERFORMANCE_DEBUG]: {
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: h.X.DEBUG,
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
            version: 3,
        },
    };
function I(e) {
    let { layoutId: t, widgets: n, version: a, defaultResolution: s } = e;
    if (null != r[t] && r[t].version === a) return !1;
    let o = [];
    n.forEach((e, t) => {
        let n = T(e.type),
            r = y(E({}, e), { zIndex: t });
        "" === r.id && (r.id = (0, l.A)()),
            null != n &&
                ((r.pinned = n.pinned),
                -1 !== n.anchor.left && (r.anchor = (0, _.NO)(n.anchor, s)),
                -1 !== n.size.width && (r.size = (0, _.R9)(n.size, s))),
            (i = y(E({}, i), { [r.id]: new p.A(r) })),
            o.push(r.id);
    }),
        (r = y(E({}, r), {
            [t]: new f.A({
                id: t,
                widgets: o,
                version: a,
            }),
        }));
}
function T(e) {
    let t = r[O];
    if (null != t)
        for (let n of t.widgets) {
            let t = i[n];
            if (null != t && t.type === e) return t;
        }
    return null;
}
function C(e, t) {
    let n = i[e];
    if (null == n) return !1;
    let a = r[n.layoutId];
    return null != a && t(n, a);
}
function N(e) {
    let { widgetId: t, anchor: n, size: r, opacity: i, minSize: a, defaultSize: s } = e;
    return C(t, (e, t) =>
        L({
            widget: e,
            anchor: n,
            size: r,
            opacity: i,
            minSize: a,
            defaultSize: s,
        }),
    );
}
function R(e) {
    let { widgetId: t } = e;
    return C(t, (e, t) => w(t, e.id));
}
function w(e, t) {
    let n = H(e);
    n.sort((e, t) => e.zIndex - t.zIndex);
    let r = n.findIndex((e) => e.id === t);
    if (r === n.length - 1) return !1;
    n.push(n.splice(r, 1)[0]);
    for (let e = 0; e < n.length; e++) F(n[e], e);
    return !0;
}
function P(e) {
    let { widgetId: t, meta: n } = e;
    return C(t, (e, t) => {
        D(e, n);
    });
}
function D(e, t) {
    var n;
    i = y(E({}, i), { [e.id]: e.merge({ meta: E({}, null != (n = e.meta) ? n : {}, t) }) });
}
function x(e) {
    let { widgetId: t, pinned: n } = e;
    return C(t, (e, t) => {
        B(e, n);
    });
}
function L(e) {
    let { widget: t, anchor: n, size: r, opacity: a, minSize: s, defaultSize: o } = e;
    if (
        ((i = y(E({}, i), {
            [t.id]: t.merge({
                anchor: null != n ? n : t.anchor,
                size: null != r ? r : t.size,
                opacity: null != a ? a : t.opacity,
                minSize: null != s ? s : t.minSize,
            }),
        })),
        null != o)
    ) {
        let e = S[t.type];
        null != e && (e.defaultSettings.size = E({ fixed: e.defaultSettings.size.fixed }, o));
    }
}
function j(e) {
    i = y(E({}, i), { [e.id]: e.merge({ showExtrasHintTimestamp: Date.now() }) });
}
function M(e) {
    let { widgetId: t } = e;
    return C(t, (e, t) => {
        j(e);
    });
}
function k(e) {
    let { widgetId: t } = e;
    (i = E({}, i)),
        delete i[t],
        o().forEach(r, (e, n) => {
            if (n === O) return;
            let i = e.widgets.indexOf(t);
            if (i >= 0) {
                let t = [...e.widgets];
                t.splice(i, 1), (r = y(E({}, r), { [n]: e.set("widgets", t) }));
            }
        });
}
function U(e) {
    let { layoutId: t } = e,
        n = r[t];
    if (null == n) return !1;
    n.widgets.forEach((e) => {
        (i = E({}, i)), delete i[e];
    }),
        (r = y(E({}, r), { [n.id]: n.set("widgets", []) }));
}
function G(e) {
    let { widgetConfigs: t } = e;
    t.forEach((e) => {
        let t = new p.A(e),
            n = r[t.layoutId];
        if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
        (t = t.set("zIndex", n.widgets.length)), (i = y(E({}, i), { [t.id]: t }));
        let a = [...n.widgets, t.id];
        r = y(E({}, r), { [n.id]: n.set("widgets", a) });
    });
}
function V(e) {
    let { widgetType: t, defaultConfig: n } = e;
    S[t] = E({}, S[t], n);
}
function F(e, t) {
    i = y(E({}, i), { [e.id]: e.set("zIndex", t) });
}
function B(e, t) {
    i = y(E({}, i), { [e.id]: e.set("pinned", null != t ? t : !e.pinned) });
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
        o().forEach(e, (e, n) => {
            t[n] = new f.A(e);
        }),
        t
    );
}
function W(e) {
    let t = {};
    return (
        o().forEach(e, (e, n) => {
            t[n] = new p.A(e);
        }),
        t
    );
}
function K(e) {
    let t = S[e];
    if (null != t) return t.defaultSettings;
}
class z extends (a = c.Ay.PersistedStore) {
    initialize(e) {
        null != e && null != e.layouts && null != e.widgets
            ? ((r = Y(e.layouts)), (i = W(e.widgets)))
            : ((r = {}), (i = {}));
        let t = !1,
            n = [];
        o().forEach(S, (e, t) => {
            e.layoutPolicy === h.X.REQUIRED && n.push(t);
        }),
            o().forEach(r, (e, a) => {
                let s = this.getWidgetsForLayout(a),
                    o = !1;
                for (let r of n) {
                    let n = s.find((e) => e.type === r);
                    if (null != n || S[r].version !== e.version) continue;
                    o = t = !0;
                    let c = (0, l.A)(),
                        u = K(r);
                    if (null == u) return;
                    (n = new p.A(
                        y(E({}, u), {
                            type: r,
                            id: c,
                            layoutId: a,
                            zIndex: s.length,
                        }),
                    )),
                        s.push(n),
                        (i = y(E({}, i), { [c]: n }));
                }
                o &&
                    ((e = e.set(
                        "widgets",
                        s.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                    )),
                    (r = y(E({}, r), { [a]: e })));
            }),
            o().forEach(i, (e, n) => {
                let a = r[e.layoutId];
                (null == a || 0 > a.widgets.indexOf(n)) && ((i = E({}, i)), delete i[n], (t = !0));
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
                t.layoutPolicy === h.X.REQUIRED || e.pinned || n.push(e.type);
            }),
            n
        );
    }
    getWidgetConfig(e) {
        return S[e];
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
        return S;
    }
    getDefaultLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = [];
        return (
            o().forEach(this.getRegisteredWidgets(), (r, i) => {
                switch (r.layoutPolicy) {
                    case h.X.REQUIRED:
                    case h.X.OPTIONAL_DEFAULT:
                        var a;
                        if ((null != (a = r.version) ? a : 0) === t) {
                            let t = K(i);
                            if (null == t) return;
                            n.push(
                                y(E({}, t), {
                                    type: i,
                                    id: (0, l.A)(),
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
g(z, "displayName", "LayoutStore"),
    g(z, "persistKey", "LayoutStore"),
    g(z, "migrations", [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: r } = E({}, u.w.get("OverlayStore"));
            if (5 === r && e) {
                let r = O,
                    i = [],
                    a = e.map((e) => {
                        let a = null != t ? t[e] : null,
                            s = null != n ? n[e] : null,
                            o = {
                                id: e,
                                layoutId: r,
                                type: e,
                                anchor: a || {
                                    top: -1,
                                    left: -1,
                                    bottom: null,
                                    right: null,
                                },
                                size: s || {
                                    width: -1,
                                    height: -1,
                                },
                                pinned: !0,
                                zIndex: 0,
                            };
                        return i.push([o.id, o]), o.id;
                    }),
                    s = {
                        id: r,
                        widgets: a,
                    };
                return {
                    layouts: [[r, s]],
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
                r = new Set(Object.keys(m.uss)),
                i = Array.from(n).filter((e) => {
                    let [t] = e;
                    return !r.has(t);
                }),
                a = Array.from(t).filter((e) => {
                    let [t] = e;
                    return t !== O;
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
                                (null == a && n[1].type === m.uss.VOICE && (a = n[0]),
                                null == r && n[1].type === m.uss.TEXT && (r = n[1].pinned),
                                (null != r && null != a) || void 0)
                            );
                        }),
                        r || null == a)
                    )
                        return;
                    let s = (0, l.A)();
                    n.widgets = [a, s];
                    let o = K(m.uss.GUILDS_TEXT);
                    null != o &&
                        i.push([
                            s,
                            y(E({}, o), {
                                type: m.uss.GUILDS_TEXT,
                                id: s,
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
                r[e] = y(E({}, n), { version: 0 });
            }
            return {
                layouts: r,
                widgets: n,
            };
        },
    ]);
let q = new z(d.h, {
    LAYOUT_CREATE: I,
    LAYOUT_SET_PINNED: x,
    LAYOUT_UPDATE_WIDGET: N,
    LAYOUT_SET_TOP_WIDGET: R,
    LAYOUT_DELETE_WIDGET: k,
    LAYOUT_DELETE_ALL_WIDGETS: U,
    LAYOUT_CREATE_WIDGETS: G,
    LAYOUT_SET_WIDGET_META: P,
    LAYOUT_SHOW_OVERLAY_EXTRAS_HINT: M,
    LAYOUT_SET_DEFAULT_CONFIG: V,
});

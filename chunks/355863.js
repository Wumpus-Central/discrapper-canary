let r, i;
n.d(t, { Z: () => W }), n(653041), n(47120), n(230036), n(411104);
var o,
    a = n(392711),
    s = n.n(a),
    l = n(772848),
    c = n(442837),
    u = n(433517),
    d = n(570140),
    f = n(131792),
    _ = n(252982),
    p = n(434529),
    h = n(981631),
    m = n(757744);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
let v = 'migrated',
    O = 0.02,
    I = 0.01,
    S = {
        [h.Odu.GUILDS]: {
            minSize: {
                width: 312,
                height: 300
            },
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: 'OPTIONAL',
            defaultSettings: {
                anchor: {
                    left: 0.175,
                    top: 0.05,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    width: 'auto',
                    height: 0.65
                },
                pinned: !1
            }
        },
        [h.Odu.TEXT]: {
            minSize: {
                width: 430,
                height: 300
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: 'OPTIONAL',
            defaultSettings: {
                anchor: {
                    left: 0.26,
                    top: 0.05,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    width: 0.565,
                    height: 0.65
                },
                pinned: !0
            }
        },
        [h.Odu.VOICE]: {
            minSize: {
                width: 272,
                height: 100
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: 'REQUIRED',
            defaultSettings: {
                anchor: {
                    left: 0.011,
                    top: 0.011,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    width: 'auto',
                    height: 'auto'
                },
                pinned: !0
            }
        },
        [h.Odu.GUILDS_TEXT]: {
            minSize: {
                height: 300,
                width: 610
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: 'OPTIONAL_DEFAULT',
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: 0.05,
                    bottom: void 0,
                    right: 0.25
                },
                size: {
                    width: 0.6,
                    height: 0.45
                },
                pinned: !1
            }
        },
        [h.Odu.VOICE_V3]: {
            minSize: {
                width: 272,
                height: 24
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: 'REQUIRED',
            defaultSettings: {
                anchor: {
                    left: I,
                    top: 0.35,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    width: 'auto',
                    height: 'auto'
                },
                pinned: !0
            },
            version: m.H
        },
        [h.Odu.VIDEO]: {
            minSize: {
                width: 128,
                height: 128
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: 'OPTIONAL_DEFAULT',
            defaultSettings: {
                anchor: {
                    left: I,
                    top: void 0,
                    bottom: O,
                    right: void 0
                },
                size: {
                    fixed: !0,
                    width: 408,
                    height: 128
                },
                pinned: !0
            },
            version: m.H
        },
        [h.Odu.GO_LIVE]: {
            minSize: {
                width: 276,
                height: 164
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: 'OPTIONAL_DEFAULT',
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: void 0,
                    bottom: O,
                    right: I
                },
                size: {
                    fixed: !0,
                    width: 256,
                    height: 144
                },
                pinned: !1
            },
            version: m.H
        },
        [h.Odu.QUICK_ACTIONS]: {
            minSize: {
                width: 216,
                height: 56
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: 'REQUIRED',
            defaultSettings: {
                anchor: {
                    left: 0.34,
                    top: O,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    width: 'auto',
                    height: 'auto'
                },
                pinned: !1
            },
            version: m.H
        },
        [h.Odu.NOTIFICATIONS]: {
            minSize: {
                width: 320,
                height: 100
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: 'REQUIRED',
            defaultSettings: {
                anchor: {
                    left: I,
                    top: O,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    height: 'auto',
                    width: 'auto'
                },
                pinned: !0
            },
            version: m.H
        },
        [h.Odu.ACTIVITY]: {
            minSize: {
                width: 320,
                height: 100
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: 'REQUIRED',
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: 0.35,
                    bottom: void 0,
                    right: I
                },
                size: {
                    height: 'auto',
                    width: 'auto'
                },
                pinned: !1
            },
            version: m.H
        },
        [h.Odu.FRIENDS]: {
            minSize: {
                width: 350,
                height: 350
            },
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: 'OPTIONAL_DEFAULT',
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: O,
                    bottom: void 0,
                    right: I
                },
                size: {
                    fixed: !0,
                    height: 500,
                    width: 350
                },
                pinned: !1
            },
            version: m.H
        },
        [h.Odu.CLICK_ZONE_DEBUG]: {
            minSize: {
                width: 50,
                height: 50
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: 'DEBUG',
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: 0.35,
                    bottom: void 0,
                    right: 0.35
                },
                size: {
                    height: 'auto',
                    width: 'auto'
                },
                pinned: !0
            },
            version: m.H
        },
        [h.Odu.PERFORMANCE_DEBUG]: {
            minSize: {
                width: 120,
                height: 300
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: 'DEBUG',
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: 0.1,
                    bottom: void 0,
                    right: 0.1
                },
                size: {
                    height: 'auto',
                    width: 'auto'
                },
                pinned: !0
            },
            version: m.H
        }
    };
function T(e) {
    let { layoutId: t, widgets: n, version: o, defaultResolution: a } = e;
    if (null != r[t] && r[t].version === o) return !1;
    let s = [];
    n.forEach((e, t) => {
        let n = N(e.type),
            r = y(E({}, e), { zIndex: t });
        '' === r.id && (r.id = (0, l.Z)()), null != n && ((r.pinned = n.pinned), -1 !== n.anchor.left && (r.anchor = (0, p.jL)(n.anchor, a)), -1 !== n.size.width && (r.size = (0, p.Ox)(n.size, a))), (i = y(E({}, i), { [r.id]: new _.Z(r) })), s.push(r.id);
    }),
        (r = y(E({}, r), {
            [t]: new f.Z({
                id: t,
                widgets: s,
                version: o
            })
        }));
}
function N(e) {
    let t = r[v];
    if (null != t)
        for (let n of t.widgets) {
            let t = i[n];
            if (null != t && t.type === e) return t;
        }
    return null;
}
function A(e, t) {
    let n = i[e];
    if (null == n) return !1;
    let o = r[n.layoutId];
    return null != o && t(n, o);
}
function C(e) {
    let { widgetId: t, anchor: n, size: r, opacity: i } = e;
    return A(t, (e, t) => x(e, n, r, i));
}
function R(e) {
    let { widgetId: t } = e;
    return A(t, (e, t) => P(t, e.id));
}
function P(e, t) {
    let n = B(e);
    n.sort((e, t) => e.zIndex - t.zIndex);
    let r = n.findIndex((e) => e.id === t);
    if (r === n.length - 1) return !1;
    n.push(n.splice(r, 1)[0]);
    for (let e = 0; e < n.length; e++) U(n[e], e);
    return !0;
}
function w(e) {
    let { widgetId: t, meta: n } = e;
    return A(t, (e, t) => {
        D(e, n);
    });
}
function D(e, t) {
    var n;
    i = y(E({}, i), { [e.id]: e.merge({ meta: E({}, null != (n = e.meta) ? n : {}, t) }) });
}
function L(e) {
    let { widgetId: t } = e;
    return A(t, (e, t) => {
        G(e);
    });
}
function x(e, t, n, r) {
    i = y(E({}, i), {
        [e.id]: e.merge({
            anchor: null != t ? t : e.anchor,
            size: null != n ? n : e.size,
            opacity: null != r ? r : e.opacity
        })
    });
}
function M(e) {
    let { widgetId: t } = e;
    (i = E({}, i)),
        delete i[t],
        s().forEach(r, (e, n) => {
            if (n === v) return;
            let i = e.widgets.indexOf(t);
            if (i >= 0) {
                let t = [...e.widgets];
                t.splice(i, 1), (r = y(E({}, r), { [n]: e.set('widgets', t) }));
            }
        });
}
function k(e) {
    let { layoutId: t } = e,
        n = r[t];
    if (null == n) return !1;
    n.widgets.forEach((e) => {
        (i = E({}, i)), delete i[e];
    }),
        (r = y(E({}, r), { [n.id]: n.set('widgets', []) }));
}
function j(e) {
    let { widgetConfigs: t } = e;
    t.forEach((e) => {
        let t = new _.Z(e),
            n = r[t.layoutId];
        if (null == n) throw Error('LayoutStore - handleAddWidget: Invalid layoutId');
        (t = t.set('zIndex', n.widgets.length)), (i = y(E({}, i), { [t.id]: t }));
        let o = [...n.widgets, t.id];
        r = y(E({}, r), { [n.id]: n.set('widgets', o) });
    });
}
function U(e, t) {
    i = y(E({}, i), { [e.id]: e.set('zIndex', t) });
}
function G(e) {
    i = y(E({}, i), { [e.id]: e.set('pinned', !e.pinned) });
}
function B(e) {
    let t = [];
    return (
        e.widgets.forEach((e) => {
            let n = i[e];
            null != n && t.push(n);
        }),
        t
    );
}
function F(e) {
    let t = {};
    return (
        s().forEach(e, (e, n) => {
            t[n] = new f.Z(e);
        }),
        t
    );
}
function V(e) {
    let t = {};
    return (
        s().forEach(e, (e, n) => {
            t[n] = new _.Z(e);
        }),
        t
    );
}
function Z(e) {
    var t;
    return null == (t = S[e]) ? void 0 : t.defaultSettings;
}
class H extends (o = c.ZP.PersistedStore) {
    initialize(e) {
        null != e && null != e.layouts && null != e.widgets ? ((r = F(e.layouts)), (i = V(e.widgets))) : ((r = {}), (i = {}));
        let t = !1,
            n = [];
        s().forEach(S, (e, t) => {
            'REQUIRED' === e.layoutPolicy && n.push(t);
        }),
            s().forEach(r, (e, o) => {
                let a = this.getWidgetsForLayout(o),
                    s = !1;
                for (let r of n) {
                    let n = a.find((e) => e.type === r);
                    if (null != n || S[r].version !== e.version) continue;
                    s = t = !0;
                    let c = (0, l.Z)();
                    (n = new _.Z(
                        y(E({}, this.getWidgetDefaultSettings(r)), {
                            type: r,
                            id: c,
                            layoutId: o,
                            zIndex: a.length
                        })
                    )),
                        a.push(n),
                        (i = y(E({}, i), { [c]: n }));
                }
                s &&
                    ((e = e.set(
                        'widgets',
                        a.map((e) => {
                            let { id: t } = e;
                            return t;
                        })
                    )),
                    (r = y(E({}, r), { [o]: e })));
            }),
            s().forEach(i, (e, n) => {
                let o = r[e.layoutId];
                (null == o || 0 > o.widgets.indexOf(n)) && ((i = E({}, i)), delete i[n], (t = !0));
            }),
            t && (this.persist(), this.emitChange());
    }
    getState() {
        return {
            layouts: r,
            widgets: i
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
                'REQUIRED' === t.layoutPolicy || e.pinned || n.push(e.type);
            }),
            n
        );
    }
    getWidgetConfig(e) {
        return S[e];
    }
    getWidgetDefaultSettings(e) {
        return Z(e);
    }
    getWidgetType(e) {
        let t = i[e];
        return null != t ? t.type : '';
    }
    getRegisteredWidgets() {
        return S;
    }
    getDefaultLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = [];
        return (
            s().forEach(this.getRegisteredWidgets(), (r, i) => {
                switch (r.layoutPolicy) {
                    case 'REQUIRED':
                    case 'OPTIONAL_DEFAULT':
                        var o;
                        (null != (o = r.version) ? o : 0) === t &&
                            n.push(
                                y(E({}, r.defaultSettings), {
                                    type: i,
                                    id: (0, l.Z)(),
                                    layoutId: e
                                })
                            );
                }
            }),
            n
        );
    }
}
g(H, 'displayName', 'LayoutStore'),
    g(H, 'persistKey', 'LayoutStore'),
    g(H, 'migrations', [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: r } = E({}, u.K.get('OverlayStore'));
            if (5 === r && e) {
                let r = v,
                    i = [],
                    o = e.map((e) => {
                        let o = null != t ? t[e] : null,
                            a = null != n ? n[e] : null,
                            s = {
                                id: e,
                                layoutId: r,
                                type: e,
                                anchor: o || {
                                    top: -1,
                                    left: -1,
                                    bottom: null,
                                    right: null
                                },
                                size: a || {
                                    width: -1,
                                    height: -1
                                },
                                pinned: !0,
                                zIndex: 0
                            };
                        return i.push([s.id, s]), s.id;
                    }),
                    a = {
                        id: r,
                        widgets: o
                    };
                return {
                    layouts: [[r, a]],
                    widgets: i
                };
            }
            return {
                layouts: [],
                widgets: []
            };
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                r = new Set(Object.keys(h.Odu)),
                i = Array.from(n).filter((e) => {
                    let [t] = e;
                    return !r.has(t);
                }),
                o = Array.from(t).filter((e) => {
                    let [t] = e;
                    return t !== v;
                });
            return (
                o.forEach((e) => {
                    let [t, n] = e,
                        r = null,
                        o = null;
                    if (
                        (n.widgets.find((e) => {
                            let n = i.find((n) => {
                                let [r, i] = n;
                                return r === e && i.layoutId === t;
                            });
                            return null != n && (null == o && n[1].type === h.Odu.VOICE && (o = n[0]), null == r && n[1].type === h.Odu.TEXT && (r = n[1].pinned), (null != r && null != o) || void 0);
                        }),
                        r || null == o)
                    )
                        return;
                    let a = (0, l.Z)();
                    (n.widgets = [o, a]),
                        i.push([
                            a,
                            y(E({}, Z(h.Odu.GUILDS_TEXT)), {
                                type: h.Odu.GUILDS_TEXT,
                                id: a,
                                layoutId: t,
                                zIndex: 2
                            })
                        ]);
                }),
                {
                    widgets: i,
                    layouts: o
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
                }, {})
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
                widgets: n
            };
        }
    ]);
let W = new H(d.Z, {
    LAYOUT_CREATE: T,
    LAYOUT_SET_PINNED: L,
    LAYOUT_UPDATE_WIDGET: C,
    LAYOUT_SET_TOP_WIDGET: R,
    LAYOUT_DELETE_WIDGET: M,
    LAYOUT_DELETE_ALL_WIDGETS: k,
    LAYOUT_CREATE_WIDGETS: j,
    LAYOUT_SET_WIDGET_META: w
});

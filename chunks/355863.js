let i, r;
n.d(t, { Z: () => F }), n(653041), n(47120), n(411104), n(724458);
var a,
    s = n(392711),
    o = n.n(s),
    l = n(772848),
    u = n(442837),
    c = n(433517),
    d = n(570140),
    f = n(131792),
    _ = n(252982),
    p = n(434529),
    h = n(981631);
function m(e, t, n) {
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
let g = 'migrated',
    E = 0.04,
    v = 0.02,
    y = {
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
                    left: v,
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
            version: 1
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
                    left: v,
                    top: void 0,
                    bottom: E,
                    right: void 0
                },
                size: {
                    fixed: !0,
                    width: 408,
                    height: 128
                },
                pinned: !0
            },
            version: 1
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
                    bottom: E,
                    right: v
                },
                size: {
                    fixed: !0,
                    width: 256,
                    height: 144
                },
                pinned: !1
            },
            version: 1
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
                    top: E,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    width: 'auto',
                    height: 'auto'
                },
                pinned: !1
            },
            version: 1
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
                    left: v,
                    top: E,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    height: 'auto',
                    width: 'auto'
                },
                pinned: !0
            },
            version: 1
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
                    right: v
                },
                size: {
                    height: 'auto',
                    width: 'auto'
                },
                pinned: !1
            },
            version: 1
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
            version: 1
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
            }
        }
    };
function I(e) {
    let { layoutId: t, widgets: n, version: a, defaultResolution: s } = e;
    if (null != i[t] && i[t].version === a) return !1;
    let o = [];
    n.forEach((e, t) => {
        let n = T(e.type),
            i = {
                ...e,
                zIndex: t
            };
        '' === i.id && (i.id = (0, l.Z)()),
            null != n && ((i.pinned = n.pinned), -1 !== n.anchor.left && (i.anchor = (0, p.jL)(n.anchor, s)), -1 !== n.size.width && (i.size = (0, p.Ox)(n.size, s))),
            (r = {
                ...r,
                [i.id]: new _.Z(i)
            }),
            o.push(i.id);
    }),
        (i = {
            ...i,
            [t]: new f.Z({
                id: t,
                widgets: o,
                version: a
            })
        });
}
function T(e) {
    let t = i[g];
    if (null != t)
        for (let n of t.widgets) {
            let t = r[n];
            if (null != t && t.type === e) return t;
        }
    return null;
}
function b(e, t) {
    let n = r[e];
    if (null == n) return !1;
    let a = i[n.layoutId];
    return null != a && t(n, a);
}
function S(e) {
    let { widgetId: t, anchor: n, size: i, opacity: r } = e;
    return b(t, (e, t) => D(e, n, i, r));
}
function A(e) {
    let { widgetId: t } = e;
    return b(t, (e, t) => N(t, e.id));
}
function N(e, t) {
    let n = k(e);
    n.sort((e, t) => e.zIndex - t.zIndex);
    let i = n.findIndex((e) => e.id === t);
    if (i === n.length - 1) return !1;
    n.push(n.splice(i, 1)[0]);
    for (let e = 0; e < n.length; e++) w(n[e], e);
    return !0;
}
function C(e) {
    let { widgetId: t, meta: n } = e;
    return b(t, (e, t) => {
        R(e, n);
    });
}
function R(e, t) {
    var n;
    r = {
        ...r,
        [e.id]: e.merge({
            meta: {
                ...(null !== (n = e.meta) && void 0 !== n ? n : {}),
                ...t
            }
        })
    };
}
function O(e) {
    let { widgetId: t } = e;
    return b(t, (e, t) => {
        M(e);
    });
}
function D(e, t, n, i) {
    r = {
        ...r,
        [e.id]: e.merge({
            anchor: null != t ? t : e.anchor,
            size: null != n ? n : e.size,
            opacity: null != i ? i : e.opacity
        })
    };
}
function L(e) {
    let { widgetId: t } = e;
    (r = { ...r }),
        delete r[t],
        o().forEach(i, (e, n) => {
            if (n === g) return;
            let r = e.widgets.indexOf(t);
            if (r >= 0) {
                let t = [...e.widgets];
                t.splice(r, 1),
                    (i = {
                        ...i,
                        [n]: e.set('widgets', t)
                    });
            }
        });
}
function x(e) {
    let { layoutId: t } = e,
        n = i[t];
    if (null == n) return !1;
    n.widgets.forEach((e) => {
        (r = { ...r }), delete r[e];
    }),
        (i = {
            ...i,
            [n.id]: n.set('widgets', [])
        });
}
function P(e) {
    let { widgetConfigs: t } = e;
    t.forEach((e) => {
        let t = new _.Z(e),
            n = i[t.layoutId];
        if (null == n) throw Error('LayoutStore - handleAddWidget: Invalid layoutId');
        (t = t.set('zIndex', n.widgets.length)),
            (r = {
                ...r,
                [t.id]: t
            });
        let a = [...n.widgets, t.id];
        i = {
            ...i,
            [n.id]: n.set('widgets', a)
        };
    });
}
function w(e, t) {
    r = {
        ...r,
        [e.id]: e.set('zIndex', t)
    };
}
function M(e) {
    r = {
        ...r,
        [e.id]: e.set('pinned', !e.pinned)
    };
}
function k(e) {
    let t = [];
    return (
        e.widgets.forEach((e) => {
            let n = r[e];
            null != n && t.push(n);
        }),
        t
    );
}
function U(e) {
    let t = {};
    return (
        o().forEach(e, (e, n) => {
            t[n] = new f.Z(e);
        }),
        t
    );
}
function G(e) {
    let t = {};
    return (
        o().forEach(e, (e, n) => {
            t[n] = new _.Z(e);
        }),
        t
    );
}
function B(e) {
    var t;
    return null === (t = y[e]) || void 0 === t ? void 0 : t.defaultSettings;
}
class Z extends (a = u.ZP.PersistedStore) {
    initialize(e) {
        null != e && null != e.layouts && null != e.widgets ? ((i = U(e.layouts)), (r = G(e.widgets))) : ((i = {}), (r = {}));
        let t = !1,
            n = [];
        o().forEach(y, (e, t) => {
            'REQUIRED' === e.layoutPolicy && n.push(t);
        }),
            o().forEach(i, (e, a) => {
                let s = this.getWidgetsForLayout(a),
                    o = !1;
                for (let i of n) {
                    let n = s.find((e) => e.type === i);
                    if (null != n || y[i].version !== e.version) continue;
                    o = t = !0;
                    let u = (0, l.Z)();
                    (n = new _.Z({
                        ...this.getWidgetDefaultSettings(i),
                        type: i,
                        id: u,
                        layoutId: a,
                        zIndex: s.length
                    })),
                        s.push(n),
                        (r = {
                            ...r,
                            [u]: n
                        });
                }
                o &&
                    ((e = e.set(
                        'widgets',
                        s.map((e) => {
                            let { id: t } = e;
                            return t;
                        })
                    )),
                    (i = {
                        ...i,
                        [a]: e
                    }));
            }),
            o().forEach(r, (e, n) => {
                let a = i[e.layoutId];
                (null == a || 0 > a.widgets.indexOf(n)) && ((r = { ...r }), delete r[n], (t = !0));
            }),
            t && (this.persist(), this.emitChange());
    }
    getState() {
        return {
            layouts: i,
            widgets: r
        };
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
                'REQUIRED' === t.layoutPolicy || e.pinned || n.push(e.type);
            }),
            n
        );
    }
    getWidgetConfig(e) {
        return y[e];
    }
    getWidgetDefaultSettings(e) {
        return B(e);
    }
    getWidgetType(e) {
        let t = r[e];
        return null != t ? t.type : '';
    }
    getRegisteredWidgets() {
        return y;
    }
    getDefaultLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = [];
        return (
            o().forEach(this.getRegisteredWidgets(), (i, r) => {
                switch (i.layoutPolicy) {
                    case 'REQUIRED':
                    case 'OPTIONAL_DEFAULT':
                        var a;
                        (null !== (a = i.version) && void 0 !== a ? a : 0) === t &&
                            n.push({
                                ...i.defaultSettings,
                                type: r,
                                id: (0, l.Z)(),
                                layoutId: e
                            });
                }
            }),
            n
        );
    }
}
m(Z, 'displayName', 'LayoutStore'),
    m(Z, 'persistKey', 'LayoutStore'),
    m(Z, 'migrations', [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: i } = { ...c.K.get('OverlayStore') };
            if (5 === i && e) {
                let i = g,
                    r = [],
                    a = e.map((e) => {
                        let a = null != t ? t[e] : null,
                            s = null != n ? n[e] : null,
                            o = {
                                id: e,
                                layoutId: i,
                                type: e,
                                anchor: a || {
                                    top: -1,
                                    left: -1,
                                    bottom: null,
                                    right: null
                                },
                                size: s || {
                                    width: -1,
                                    height: -1
                                },
                                pinned: !0,
                                zIndex: 0
                            };
                        return r.push([o.id, o]), o.id;
                    }),
                    s = {
                        id: i,
                        widgets: a
                    };
                return {
                    layouts: [[i, s]],
                    widgets: r
                };
            }
            return {
                layouts: [],
                widgets: []
            };
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                i = new Set(Object.keys(h.Odu)),
                r = Array.from(n).filter((e) => {
                    let [t] = e;
                    return !i.has(t);
                }),
                a = Array.from(t).filter((e) => {
                    let [t] = e;
                    return t !== g;
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
                            return null != n && (null == a && n[1].type === h.Odu.VOICE && (a = n[0]), null == i && n[1].type === h.Odu.TEXT && (i = n[1].pinned), (null != i && null != a) || void 0);
                        }),
                        i || null == a)
                    )
                        return;
                    let s = (0, l.Z)();
                    (n.widgets = [a, s]),
                        r.push([
                            s,
                            {
                                ...B(h.Odu.GUILDS_TEXT),
                                type: h.Odu.GUILDS_TEXT,
                                id: s,
                                layoutId: t,
                                zIndex: 2
                            }
                        ]);
                }),
                {
                    widgets: r,
                    layouts: a
                }
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
                }, {})
            };
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                i = {};
            for (let e in t) {
                let n = t[e];
                i[e] = {
                    ...n,
                    version: 0
                };
            }
            return {
                layouts: i,
                widgets: n
            };
        }
    ]);
let F = new Z(d.Z, {
    LAYOUT_CREATE: I,
    LAYOUT_SET_PINNED: O,
    LAYOUT_UPDATE_WIDGET: S,
    LAYOUT_SET_TOP_WIDGET: A,
    LAYOUT_DELETE_WIDGET: L,
    LAYOUT_DELETE_ALL_WIDGETS: x,
    LAYOUT_CREATE_WIDGETS: P,
    LAYOUT_SET_WIDGET_META: C
});

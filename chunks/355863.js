let i, a;
var o,
    s,
    l = r(653041);
var u = r(47120);
var c = r(411104);
var d = r(724458);
var f = r(392711),
    p = r.n(f),
    h = r(772848),
    _ = r(442837),
    m = r(433517),
    g = r(570140),
    E = r(131792),
    v = r(252982),
    y = r(434529),
    b = r(981631);
function I(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.DEBUG = 'DEBUG'), (e.REQUIRED = 'REQUIRED'), (e.OPTIONAL = 'OPTIONAL'), (e.OPTIONAL_DEFAULT = 'OPTIONAL_DEFAULT');
})(o || (o = {}));
let T = 'migrated',
    S = {
        [b.Odu.GUILDS]: {
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
                    top: 0.15,
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
        [b.Odu.TEXT]: {
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
                    top: 0.15,
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
        [b.Odu.VOICE]: {
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
        [b.Odu.VOICE_V3]: {
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
                    left: 0.01,
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
        [b.Odu.VIDEO]: {
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
                    left: 0.35,
                    top: 0,
                    bottom: void 0,
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
        [b.Odu.GUILDS_TEXT]: {
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
                    left: 0.15,
                    top: 0.15,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    width: 0.7,
                    height: 0.65
                },
                pinned: !1
            }
        },
        [b.Odu.GO_LIVE]: {
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
                    bottom: 0.04,
                    right: 0.02
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
        [b.Odu.QUICK_ACTIONS]: {
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
                    left: 0.3,
                    top: void 0,
                    bottom: 0.04,
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
        [b.Odu.NOTIFICATIONS]: {
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
                    left: 0,
                    top: 0,
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
        [b.Odu.ACTIVITY]: {
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
                    right: 0.01
                },
                size: {
                    height: 'auto',
                    width: 'auto'
                },
                pinned: !1
            },
            version: 1
        },
        [b.Odu.CLICK_ZONE_DEBUG]: {
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
        [b.Odu.PERFORMANCE_DEBUG]: {
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
function A(e) {
    let { layoutId: n, widgets: r, version: o, defaultResolution: s } = e;
    if (null != i[n] && i[n].version === o) return !1;
    let l = [];
    r.forEach((e, n) => {
        let r = C(e.type),
            i = {
                ...e,
                zIndex: n
            };
        '' === i.id && (i.id = (0, h.Z)()),
            null != r && ((i.pinned = r.pinned), -1 !== r.anchor.left && (i.anchor = (0, y.jL)(r.anchor, s)), -1 !== r.size.width && (i.size = (0, y.Ox)(r.size, s))),
            (a = {
                ...a,
                [i.id]: new v.Z(i)
            }),
            l.push(i.id);
    }),
        (i = {
            ...i,
            [n]: new E.Z({
                id: n,
                widgets: l,
                version: o
            })
        });
}
function C(e) {
    let n = i[T];
    if (null != n)
        for (let r of n.widgets) {
            let n = a[r];
            if (null != n && n.type === e) return n;
        }
    return null;
}
function N(e, n) {
    let r = a[e];
    if (null == r) return !1;
    let o = i[r.layoutId];
    return null != o && n(r, o);
}
function R(e) {
    let { widgetId: n, anchor: r, size: i, opacity: a } = e;
    return N(n, (e, n) => P(e, r, i, a));
}
function O(e) {
    let { widgetId: n } = e;
    return N(n, (e, n) => D(n, e.id));
}
function D(e, n) {
    let r = Z(e);
    r.sort((e, n) => e.zIndex - n.zIndex);
    let i = r.findIndex((e) => e.id === n);
    if (i === r.length - 1) return !1;
    r.push(r.splice(i, 1)[0]);
    for (let e = 0; e < r.length; e++) B(r[e], e);
    return !0;
}
function L(e) {
    let { widgetId: n, meta: r } = e;
    return N(n, (e, n) => {
        x(e, r);
    });
}
function x(e, n) {
    var r;
    a = {
        ...a,
        [e.id]: e.merge({
            meta: {
                ...(null !== (r = e.meta) && void 0 !== r ? r : {}),
                ...n
            }
        })
    };
}
function w(e) {
    let { widgetId: n } = e;
    return N(n, (e, n) => {
        G(e);
    });
}
function P(e, n, r, i) {
    a = {
        ...a,
        [e.id]: e.merge({
            anchor: null != n ? n : e.anchor,
            size: null != r ? r : e.size,
            opacity: null != i ? i : e.opacity
        })
    };
}
function M(e) {
    let { widgetId: n } = e;
    (a = { ...a }),
        delete a[n],
        p().forEach(i, (e, r) => {
            if (r === T) return;
            let a = e.widgets.indexOf(n);
            if (a >= 0) {
                let n = [...e.widgets];
                n.splice(a, 1),
                    (i = {
                        ...i,
                        [r]: e.set('widgets', n)
                    });
            }
        });
}
function k(e) {
    let { layoutId: n } = e,
        r = i[n];
    if (null == r) return !1;
    r.widgets.forEach((e) => {
        (a = { ...a }), delete a[e];
    }),
        (i = {
            ...i,
            [r.id]: r.set('widgets', [])
        });
}
function U(e) {
    let { widgetConfigs: n } = e;
    n.forEach((e) => {
        let n = new v.Z(e),
            r = i[n.layoutId];
        if (null == r) throw Error('LayoutStore - handleAddWidget: Invalid layoutId');
        (n = n.set('zIndex', r.widgets.length)),
            (a = {
                ...a,
                [n.id]: n
            });
        let o = [...r.widgets, n.id];
        i = {
            ...i,
            [r.id]: r.set('widgets', o)
        };
    });
}
function B(e, n) {
    a = {
        ...a,
        [e.id]: e.set('zIndex', n)
    };
}
function G(e) {
    a = {
        ...a,
        [e.id]: e.set('pinned', !e.pinned)
    };
}
function Z(e) {
    let n = [];
    return (
        e.widgets.forEach((e) => {
            let r = a[e];
            null != r && n.push(r);
        }),
        n
    );
}
function F(e) {
    let n = {};
    return (
        p().forEach(e, (e, r) => {
            n[r] = new E.Z(e);
        }),
        n
    );
}
function V(e) {
    let n = {};
    return (
        p().forEach(e, (e, r) => {
            n[r] = new v.Z(e);
        }),
        n
    );
}
function j(e) {
    var n;
    return null === (n = S[e]) || void 0 === n ? void 0 : n.defaultSettings;
}
class H extends (s = _.ZP.PersistedStore) {
    initialize(e) {
        null != e && null != e.layouts && null != e.widgets ? ((i = F(e.layouts)), (a = V(e.widgets))) : ((i = {}), (a = {}));
        let n = !1,
            r = [];
        p().forEach(S, (e, n) => {
            'REQUIRED' === e.layoutPolicy && r.push(n);
        }),
            p().forEach(i, (e, o) => {
                let s = this.getWidgetsForLayout(o),
                    l = !1;
                for (let i of r) {
                    let r = s.find((e) => e.type === i);
                    if (null != r || S[i].version !== e.version) continue;
                    l = n = !0;
                    let u = (0, h.Z)();
                    (r = new v.Z({
                        ...this.getWidgetDefaultSettings(i),
                        type: i,
                        id: u,
                        layoutId: o,
                        zIndex: s.length
                    })),
                        s.push(r),
                        (a = {
                            ...a,
                            [u]: r
                        });
                }
                l &&
                    ((e = e.set(
                        'widgets',
                        s.map((e) => {
                            let { id: n } = e;
                            return n;
                        })
                    )),
                    (i = {
                        ...i,
                        [o]: e
                    }));
            }),
            p().forEach(a, (e, r) => {
                let o = i[e.layoutId];
                (null == o || 0 > o.widgets.indexOf(r)) && ((a = { ...a }), delete a[r], (n = !0));
            }),
            n && (this.persist(), this.emitChange());
    }
    getState() {
        return {
            layouts: i,
            widgets: a
        };
    }
    getLayouts() {
        return i;
    }
    getLayout(e) {
        return i[e];
    }
    getAllWidgets() {
        return a;
    }
    getWidget(e) {
        return a[e];
    }
    getWidgetsForLayout(e) {
        let n = this.getLayout(e);
        return null == n
            ? []
            : n.widgets.reduce((e, n) => {
                  let r = this.getWidget(n);
                  return null != r && e.push(r), e;
              }, []);
    }
    getWidgetConfig(e) {
        return S[e];
    }
    getWidgetDefaultSettings(e) {
        return j(e);
    }
    getWidgetType(e) {
        let n = a[e];
        return null != n ? n.type : '';
    }
    getRegisteredWidgets() {
        return S;
    }
    getDefaultLayout(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = [];
        return (
            p().forEach(this.getRegisteredWidgets(), (i, a) => {
                switch (i.layoutPolicy) {
                    case 'REQUIRED':
                    case 'OPTIONAL_DEFAULT':
                        var o;
                        (null !== (o = i.version) && void 0 !== o ? o : 0) === n &&
                            r.push({
                                ...i.defaultSettings,
                                type: a,
                                id: (0, h.Z)(),
                                layoutId: e
                            });
                }
            }),
            r
        );
    }
}
I(H, 'displayName', 'LayoutStore'),
    I(H, 'persistKey', 'LayoutStore'),
    I(H, 'migrations', [
        () => {
            let { pinnedWidgets: e, positions: n, sizes: r, v: i } = { ...m.K.get('OverlayStore') };
            if (5 === i && e) {
                let i = T,
                    a = [],
                    o = e.map((e) => {
                        let o = null != n ? n[e] : null,
                            s = null != r ? r[e] : null,
                            l = {
                                id: e,
                                layoutId: i,
                                type: e,
                                anchor: o || {
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
                        return a.push([l.id, l]), l.id;
                    }),
                    s = {
                        id: i,
                        widgets: o
                    };
                return {
                    layouts: [[i, s]],
                    widgets: a
                };
            }
            return {
                layouts: [],
                widgets: []
            };
        },
        (e) => {
            let { layouts: n, widgets: r } = e,
                i = new Set(Object.keys(b.Odu)),
                a = Array.from(r).filter((e) => {
                    let [n] = e;
                    return !i.has(n);
                }),
                o = Array.from(n).filter((e) => {
                    let [n] = e;
                    return n !== T;
                });
            return (
                o.forEach((e) => {
                    let [n, r] = e,
                        i = null,
                        o = null;
                    if (
                        (r.widgets.find((e) => {
                            let r = a.find((r) => {
                                let [i, a] = r;
                                return i === e && a.layoutId === n;
                            });
                            return null != r && (null == o && r[1].type === b.Odu.VOICE && (o = r[0]), null == i && r[1].type === b.Odu.TEXT && (i = r[1].pinned), (null != i && null != o) || void 0);
                        }),
                        i || null == o)
                    )
                        return;
                    let s = (0, h.Z)();
                    (r.widgets = [o, s]),
                        a.push([
                            s,
                            {
                                ...j(b.Odu.GUILDS_TEXT),
                                type: b.Odu.GUILDS_TEXT,
                                id: s,
                                layoutId: n,
                                zIndex: 2
                            }
                        ]);
                }),
                {
                    widgets: a,
                    layouts: o
                }
            );
        },
        (e) => {
            let { layouts: n, widgets: r } = e,
                i = n.reduce((e, n) => {
                    let [r, i] = n;
                    return (e[r] = i), e;
                }, {});
            return {
                layouts: i,
                widgets: r.reduce((e, n) => {
                    let [r, i] = n;
                    return (e[r] = i), e;
                }, {})
            };
        },
        (e) => {
            let { layouts: n, widgets: r } = e,
                i = {};
            for (let e in n) {
                let r = n[e];
                i[e] = {
                    ...r,
                    version: 0
                };
            }
            return {
                layouts: i,
                widgets: r
            };
        }
    ]),
    (n.Z = new H(g.Z, {
        LAYOUT_CREATE: A,
        LAYOUT_SET_PINNED: w,
        LAYOUT_UPDATE_WIDGET: R,
        LAYOUT_SET_TOP_WIDGET: O,
        LAYOUT_DELETE_WIDGET: M,
        LAYOUT_DELETE_ALL_WIDGETS: k,
        LAYOUT_CREATE_WIDGETS: U,
        LAYOUT_SET_WIDGET_META: L
    }));

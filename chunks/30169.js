"use strict";
n.d(t, { W: () => tA });
var i,
    r,
    s,
    a = {};
n.r(a), n.d(a, { FILE: () => g, HTML: () => T, TEXT: () => I, URL: () => A });
var o = n(627968),
    l = n(64700);
function u(e) {
    var t = null;
    return function () {
        return null == t && (t = e()), t;
    };
}
function c(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var d = (function () {
        var e;
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            c(this, "entered", []), c(this, "isNodeInDocument", void 0), (this.isNodeInDocument = e);
        }
        return (
            (e = [
                {
                    key: "enter",
                    value: function (e) {
                        var t,
                            n,
                            i,
                            r,
                            s,
                            a = this,
                            o = this.entered.length;
                        return (
                            (this.entered =
                                ((t = this.entered.filter(function (t) {
                                    return a.isNodeInDocument(t) && (!t.contains || t.contains(e));
                                })),
                                (n = [e]),
                                (i = new Set()),
                                (r = function (e) {
                                    return i.add(e);
                                }),
                                t.forEach(r),
                                n.forEach(r),
                                (s = []),
                                i.forEach(function (e) {
                                    return s.push(e);
                                }),
                                s)),
                            0 === o && this.entered.length > 0
                        );
                    },
                },
                {
                    key: "leave",
                    value: function (e) {
                        var t,
                            n = this.entered.length;
                        return (
                            (this.entered =
                                ((t = this.entered.filter(this.isNodeInDocument)),
                                t.filter(function (t) {
                                    return t !== e;
                                }))),
                            n > 0 && 0 === this.entered.length
                        );
                    },
                },
                {
                    key: "reset",
                    value: function () {
                        this.entered = [];
                    },
                },
            ]),
            (function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                }
            })(t.prototype, e),
            t
        );
    })(),
    _ = u(function () {
        return /firefox/i.test(navigator.userAgent);
    }),
    f = u(function () {
        return !!window.safari;
    });
function h(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var p = (function () {
    var e;
    function t(e, n) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        h(this, "xs", void 0),
            h(this, "ys", void 0),
            h(this, "c1s", void 0),
            h(this, "c2s", void 0),
            h(this, "c3s", void 0);
        for (var i, r, s, a = e.length, o = [], l = 0; l < a; l++) o.push(l);
        o.sort(function (t, n) {
            return e[t] < e[n] ? -1 : 1;
        });
        for (var u = [], c = [], d = [], _ = 0; _ < a - 1; _++)
            (i = e[_ + 1] - e[_]), (r = n[_ + 1] - n[_]), c.push(i), u.push(r), d.push(r / i);
        for (var f = [d[0]], p = 0; p < c.length - 1; p++) {
            var E = d[p],
                m = d[p + 1];
            if (E * m <= 0) f.push(0);
            else {
                i = c[p];
                var g = c[p + 1],
                    A = i + g;
                f.push((3 * A) / ((A + g) / E + (A + i) / m));
            }
        }
        f.push(d[d.length - 1]);
        for (var I = [], T = [], S = 0; S < f.length - 1; S++) {
            s = d[S];
            var N = f[S],
                y = 1 / c[S],
                C = N + f[S + 1] - s - s;
            I.push((s - N - C) * y), T.push(C * y * y);
        }
        (this.xs = e), (this.ys = n), (this.c1s = f), (this.c2s = I), (this.c3s = T);
    }
    return (
        (e = [
            {
                key: "interpolate",
                value: function (e) {
                    var t,
                        n = this.xs,
                        i = this.ys,
                        r = this.c1s,
                        s = this.c2s,
                        a = this.c3s,
                        o = n.length - 1;
                    if (e === n[o]) return i[o];
                    for (var l = 0, u = a.length - 1; l <= u; ) {
                        var c = n[(t = Math.floor(0.5 * (l + u)))];
                        if (c < e) l = t + 1;
                        else {
                            if (!(c > e)) return i[t];
                            u = t - 1;
                        }
                    }
                    var d = e - n[(o = Math.max(0, u))],
                        _ = d * d;
                    return i[o] + r[o] * d + s[o] * _ + a[o] * d * _;
                },
            },
        ]),
        (function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
            }
        })(t.prototype, e),
        t
    );
})();
function E(e) {
    var t = 1 === e.nodeType ? e : e.parentElement;
    if (!t) return null;
    var n = t.getBoundingClientRect(),
        i = n.top;
    return { x: n.left, y: i };
}
function m(e) {
    return { x: e.clientX, y: e.clientY };
}
var g = "__NATIVE_FILE__",
    A = "__NATIVE_URL__",
    I = "__NATIVE_TEXT__",
    T = "__NATIVE_HTML__";
function S(e, t, n) {
    var i = t.reduce(function (t, n) {
        return t || e.getData(n);
    }, "");
    return null != i ? i : n;
}
function N(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var y =
    (N((r = {}), g, {
        exposeProperties: {
            files: function (e) {
                return Array.prototype.slice.call(e.files);
            },
            items: function (e) {
                return e.items;
            },
        },
        matchesTypes: ["Files"],
    }),
    N(r, T, {
        exposeProperties: {
            html: function (e, t) {
                return S(e, t, "");
            },
        },
        matchesTypes: ["Html", "text/html"],
    }),
    N(r, A, {
        exposeProperties: {
            urls: function (e, t) {
                return S(e, t, "").split("\n");
            },
        },
        matchesTypes: ["Url", "text/uri-list"],
    }),
    N(r, I, {
        exposeProperties: {
            text: function (e, t) {
                return S(e, t, "");
            },
        },
        matchesTypes: ["Text", "text/plain"],
    }),
    r);
function C(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var v = (function () {
    var e;
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        C(this, "item", void 0),
            C(this, "config", void 0),
            (this.config = e),
            (this.item = {}),
            this.initializeExposedProperties();
    }
    return (
        (e = [
            {
                key: "initializeExposedProperties",
                value: function () {
                    var e = this;
                    Object.keys(this.config.exposeProperties).forEach(function (t) {
                        Object.defineProperty(e.item, t, {
                            configurable: !0,
                            enumerable: !0,
                            get: function () {
                                return (
                                    console.warn(
                                        "Browser doesn't allow reading \"".concat(t, '" until the drop event.'),
                                    ),
                                    null
                                );
                            },
                        });
                    });
                },
            },
            {
                key: "loadDataTransfer",
                value: function (e) {
                    var t = this;
                    if (e) {
                        var n = {};
                        Object.keys(this.config.exposeProperties).forEach(function (i) {
                            n[i] = {
                                value: t.config.exposeProperties[i](e, t.config.matchesTypes),
                                configurable: !0,
                                enumerable: !0,
                            };
                        }),
                            Object.defineProperties(this.item, n);
                    }
                },
            },
            {
                key: "canDrag",
                value: function () {
                    return !0;
                },
            },
            {
                key: "beginDrag",
                value: function () {
                    return this.item;
                },
            },
            {
                key: "isDragging",
                value: function (e, t) {
                    return t === e.getSourceId();
                },
            },
            { key: "endDrag", value: function () {} },
        ]),
        (function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
            }
        })(t.prototype, e),
        t
    );
})();
function O(e) {
    if (!e) return null;
    var t = Array.prototype.slice.call(e.types || []);
    return (
        Object.keys(y).filter(function (e) {
            return y[e].matchesTypes.some(function (e) {
                return t.indexOf(e) > -1;
            });
        })[0] || null
    );
}
function R(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var b = (function () {
    var e;
    function t(e, n) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        R(this, "ownerDocument", null),
            R(this, "globalContext", void 0),
            R(this, "optionsArgs", void 0),
            (this.globalContext = e),
            (this.optionsArgs = n);
    }
    return (
        (e = [
            {
                key: "window",
                get: function () {
                    return this.globalContext ? this.globalContext : "u" > typeof window ? window : void 0;
                },
            },
            {
                key: "document",
                get: function () {
                    var e;
                    return null != (e = this.globalContext) && e.document
                        ? this.globalContext.document
                        : this.window
                          ? this.window.document
                          : void 0;
                },
            },
            {
                key: "rootElement",
                get: function () {
                    var e;
                    return (null == (e = this.optionsArgs) ? void 0 : e.rootElement) || this.window;
                },
            },
        ]),
        (function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
            }
        })(t.prototype, e),
        t
    );
})();
function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? D(Object(n), !0).forEach(function (t) {
                  w(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : D(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function w(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var M = (function () {
    var e;
    function t(e, n, i) {
        var r = this;
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        w(this, "options", void 0),
            w(this, "actions", void 0),
            w(this, "monitor", void 0),
            w(this, "registry", void 0),
            w(this, "enterLeaveCounter", void 0),
            w(this, "sourcePreviewNodes", new Map()),
            w(this, "sourcePreviewNodeOptions", new Map()),
            w(this, "sourceNodes", new Map()),
            w(this, "sourceNodeOptions", new Map()),
            w(this, "dragStartSourceIds", null),
            w(this, "dropTargetIds", []),
            w(this, "dragEnterTargetIds", []),
            w(this, "currentNativeSource", null),
            w(this, "currentNativeHandle", null),
            w(this, "currentDragSourceNode", null),
            w(this, "altKeyPressed", !1),
            w(this, "mouseMoveTimeoutTimer", null),
            w(this, "asyncEndDragFrameId", null),
            w(this, "dragOverTargetIds", null),
            w(this, "getSourceClientOffset", function (e) {
                var t = r.sourceNodes.get(e);
                return (t && E(t)) || null;
            }),
            w(this, "endDragNativeItem", function () {
                r.isDraggingNativeItem() &&
                    (r.actions.endDrag(),
                    r.currentNativeHandle && r.registry.removeSource(r.currentNativeHandle),
                    (r.currentNativeHandle = null),
                    (r.currentNativeSource = null));
            }),
            w(this, "isNodeInDocument", function (e) {
                return !!(e && r.document && r.document.body && r.document.body.contains(e));
            }),
            w(this, "endDragIfSourceWasRemovedFromDOM", function () {
                var e = r.currentDragSourceNode;
                !(null == e || r.isNodeInDocument(e)) &&
                    r.clearCurrentDragSourceNode() &&
                    r.monitor.isDragging() &&
                    r.actions.endDrag();
            }),
            w(this, "handleTopDragStartCapture", function () {
                r.clearCurrentDragSourceNode(), (r.dragStartSourceIds = []);
            }),
            w(this, "handleTopDragStart", function (e) {
                if (!e.defaultPrevented) {
                    var t = r.dragStartSourceIds;
                    r.dragStartSourceIds = null;
                    var n = m(e);
                    r.monitor.isDragging() && r.actions.endDrag(),
                        r.actions.beginDrag(t || [], {
                            publishSource: !1,
                            getSourceClientOffset: r.getSourceClientOffset,
                            clientOffset: n,
                        });
                    var i = e.dataTransfer,
                        s = O(i);
                    if (r.monitor.isDragging()) {
                        if (i && "function" == typeof i.setDragImage) {
                            var a = r.monitor.getSourceId(),
                                o = r.sourceNodes.get(a),
                                l = r.sourcePreviewNodes.get(a) || o;
                            if (l) {
                                var u,
                                    c,
                                    d,
                                    h,
                                    g,
                                    A,
                                    I,
                                    T,
                                    S,
                                    N,
                                    y,
                                    C,
                                    v,
                                    R,
                                    b,
                                    D,
                                    L,
                                    w,
                                    M = r.getCurrentSourcePreviewNodeOptions(),
                                    P = M.anchorX,
                                    x = M.anchorY,
                                    U = M.offsetX,
                                    k = M.offsetY,
                                    G =
                                        ((u = { anchorX: P, anchorY: x }),
                                        (c = { offsetX: U, offsetY: k }),
                                        (g = E(
                                            (h =
                                                "IMG" === l.nodeName &&
                                                (_() || !(null != (d = document.documentElement) && d.contains(l))))
                                                ? o
                                                : l,
                                        )),
                                        (A = { x: n.x - g.x, y: n.y - g.y }),
                                        (I = o.offsetWidth),
                                        (T = o.offsetHeight),
                                        (S = u.anchorX),
                                        (N = u.anchorY),
                                        (R = ((y = h ? l.width : I),
                                        (C = h ? l.height : T),
                                        f() && h && ((C /= window.devicePixelRatio), (y /= window.devicePixelRatio)),
                                        (v = { dragPreviewWidth: y, dragPreviewHeight: C })).dragPreviewWidth),
                                        (b = v.dragPreviewHeight),
                                        (D = c.offsetX),
                                        (L = c.offsetY),
                                        {
                                            x:
                                                0 === D || D
                                                    ? D
                                                    : new p([0, 0.5, 1], [A.x, (A.x / I) * R, A.x + R - I]).interpolate(
                                                          S,
                                                      ),
                                            y:
                                                0 === L || L
                                                    ? L
                                                    : ((w = new p(
                                                          [0, 0.5, 1],
                                                          [A.y, (A.y / T) * b, A.y + b - T],
                                                      ).interpolate(N)),
                                                      f() && h && (w += (window.devicePixelRatio - 1) * b),
                                                      w),
                                        });
                                i.setDragImage(l, G.x, G.y);
                            }
                        }
                        try {
                            null == i || i.setData("application/json", {});
                        } catch (e) {}
                        r.setCurrentDragSourceNode(e.target),
                            r.getCurrentSourcePreviewNodeOptions().captureDraggingState
                                ? r.actions.publishDragSource()
                                : setTimeout(function () {
                                      return r.actions.publishDragSource();
                                  }, 0);
                    } else if (s) r.beginDragNativeItem(s);
                    else {
                        if (
                            i &&
                            !i.types &&
                            ((e.target && !e.target.hasAttribute) || !e.target.hasAttribute("draggable"))
                        )
                            return;
                        e.preventDefault();
                    }
                }
            }),
            w(this, "handleTopDragEndCapture", function () {
                r.clearCurrentDragSourceNode() && r.monitor.isDragging() && r.actions.endDrag();
            }),
            w(this, "handleTopDragEnterCapture", function (e) {
                if (((r.dragEnterTargetIds = []), !(!r.enterLeaveCounter.enter(e.target) || r.monitor.isDragging()))) {
                    var t = e.dataTransfer,
                        n = O(t);
                    n && r.beginDragNativeItem(n, t);
                }
            }),
            w(this, "handleTopDragEnter", function (e) {
                var t = r.dragEnterTargetIds;
                (r.dragEnterTargetIds = []),
                    r.monitor.isDragging() &&
                        ((r.altKeyPressed = e.altKey),
                        t.length > 0 && r.actions.hover(t, { clientOffset: m(e) }),
                        t.some(function (e) {
                            return r.monitor.canDropOnTarget(e);
                        }) &&
                            (e.preventDefault(),
                            e.dataTransfer && (e.dataTransfer.dropEffect = r.getCurrentDropEffect())));
            }),
            w(this, "handleTopDragOverCapture", function () {
                r.dragOverTargetIds = [];
            }),
            w(this, "handleTopDragOver", function (e) {
                var t = r.dragOverTargetIds;
                if (((r.dragOverTargetIds = []), !r.monitor.isDragging())) {
                    e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
                    return;
                }
                (r.altKeyPressed = e.altKey),
                    r.actions.hover(t || [], { clientOffset: m(e) }),
                    (t || []).some(function (e) {
                        return r.monitor.canDropOnTarget(e);
                    })
                        ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = r.getCurrentDropEffect()))
                        : r.isDraggingNativeItem()
                          ? e.preventDefault()
                          : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
            }),
            w(this, "handleTopDragLeaveCapture", function (e) {
                r.isDraggingNativeItem() && e.preventDefault(),
                    r.enterLeaveCounter.leave(e.target) &&
                        r.isDraggingNativeItem() &&
                        setTimeout(function () {
                            return r.endDragNativeItem();
                        }, 0);
            }),
            w(this, "handleTopDropCapture", function (e) {
                if (((r.dropTargetIds = []), r.isDraggingNativeItem())) {
                    var t;
                    e.preventDefault(), null == (t = r.currentNativeSource) || t.loadDataTransfer(e.dataTransfer);
                } else O(e.dataTransfer) && e.preventDefault();
                r.enterLeaveCounter.reset();
            }),
            w(this, "handleTopDrop", function (e) {
                var t = r.dropTargetIds;
                (r.dropTargetIds = []),
                    r.actions.hover(t, { clientOffset: m(e) }),
                    r.actions.drop({ dropEffect: r.getCurrentDropEffect() }),
                    r.isDraggingNativeItem() ? r.endDragNativeItem() : r.monitor.isDragging() && r.actions.endDrag();
            }),
            w(this, "handleSelectStart", function (e) {
                var t = e.target;
                "function" != typeof t.dragDrop ||
                    "INPUT" === t.tagName ||
                    "SELECT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    (e.preventDefault(), t.dragDrop());
            }),
            (this.options = new b(n, i)),
            (this.actions = e.getActions()),
            (this.monitor = e.getMonitor()),
            (this.registry = e.getRegistry()),
            (this.enterLeaveCounter = new d(this.isNodeInDocument));
    }
    return (
        (e = [
            {
                key: "profile",
                value: function () {
                    var e, t;
                    return {
                        sourcePreviewNodes: this.sourcePreviewNodes.size,
                        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                        sourceNodeOptions: this.sourceNodeOptions.size,
                        sourceNodes: this.sourceNodes.size,
                        dragStartSourceIds: (null == (e = this.dragStartSourceIds) ? void 0 : e.length) || 0,
                        dropTargetIds: this.dropTargetIds.length,
                        dragEnterTargetIds: this.dragEnterTargetIds.length,
                        dragOverTargetIds: (null == (t = this.dragOverTargetIds) ? void 0 : t.length) || 0,
                    };
                },
            },
            {
                key: "window",
                get: function () {
                    return this.options.window;
                },
            },
            {
                key: "document",
                get: function () {
                    return this.options.document;
                },
            },
            {
                key: "rootElement",
                get: function () {
                    return this.options.rootElement;
                },
            },
            {
                key: "setup",
                value: function () {
                    var e = this.rootElement;
                    if (void 0 !== e) {
                        if (e.__isReactDndBackendSetUp) throw Error("Cannot have two HTML5 backends at the same time.");
                        (e.__isReactDndBackendSetUp = !0), this.addEventListeners(e);
                    }
                },
            },
            {
                key: "teardown",
                value: function () {
                    var e,
                        t = this.rootElement;
                    void 0 !== t &&
                        ((t.__isReactDndBackendSetUp = !1),
                        this.removeEventListeners(this.rootElement),
                        this.clearCurrentDragSourceNode(),
                        this.asyncEndDragFrameId &&
                            (null == (e = this.window) || e.cancelAnimationFrame(this.asyncEndDragFrameId)));
                },
            },
            {
                key: "connectDragPreview",
                value: function (e, t, n) {
                    var i = this;
                    return (
                        this.sourcePreviewNodeOptions.set(e, n),
                        this.sourcePreviewNodes.set(e, t),
                        function () {
                            i.sourcePreviewNodes.delete(e), i.sourcePreviewNodeOptions.delete(e);
                        }
                    );
                },
            },
            {
                key: "connectDragSource",
                value: function (e, t, n) {
                    var i = this;
                    this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
                    var r = function (t) {
                            return i.handleDragStart(t, e);
                        },
                        s = function (e) {
                            return i.handleSelectStart(e);
                        };
                    return (
                        t.setAttribute("draggable", "true"),
                        t.addEventListener("dragstart", r),
                        t.addEventListener("selectstart", s),
                        function () {
                            i.sourceNodes.delete(e),
                                i.sourceNodeOptions.delete(e),
                                t.removeEventListener("dragstart", r),
                                t.removeEventListener("selectstart", s),
                                t.setAttribute("draggable", "false");
                        }
                    );
                },
            },
            {
                key: "connectDropTarget",
                value: function (e, t) {
                    var n = this,
                        i = function (t) {
                            return n.handleDragEnter(t, e);
                        },
                        r = function (t) {
                            return n.handleDragOver(t, e);
                        },
                        s = function (t) {
                            return n.handleDrop(t, e);
                        };
                    return (
                        t.addEventListener("dragenter", i),
                        t.addEventListener("dragover", r),
                        t.addEventListener("drop", s),
                        function () {
                            t.removeEventListener("dragenter", i),
                                t.removeEventListener("dragover", r),
                                t.removeEventListener("drop", s);
                        }
                    );
                },
            },
            {
                key: "addEventListeners",
                value: function (e) {
                    e.addEventListener &&
                        (e.addEventListener("dragstart", this.handleTopDragStart),
                        e.addEventListener("dragstart", this.handleTopDragStartCapture, !0),
                        e.addEventListener("dragend", this.handleTopDragEndCapture, !0),
                        e.addEventListener("dragenter", this.handleTopDragEnter),
                        e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0),
                        e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0),
                        e.addEventListener("dragover", this.handleTopDragOver),
                        e.addEventListener("dragover", this.handleTopDragOverCapture, !0),
                        e.addEventListener("drop", this.handleTopDrop),
                        e.addEventListener("drop", this.handleTopDropCapture, !0));
                },
            },
            {
                key: "removeEventListeners",
                value: function (e) {
                    e.removeEventListener &&
                        (e.removeEventListener("dragstart", this.handleTopDragStart),
                        e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0),
                        e.removeEventListener("dragend", this.handleTopDragEndCapture, !0),
                        e.removeEventListener("dragenter", this.handleTopDragEnter),
                        e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0),
                        e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0),
                        e.removeEventListener("dragover", this.handleTopDragOver),
                        e.removeEventListener("dragover", this.handleTopDragOverCapture, !0),
                        e.removeEventListener("drop", this.handleTopDrop),
                        e.removeEventListener("drop", this.handleTopDropCapture, !0));
                },
            },
            {
                key: "getCurrentSourceNodeOptions",
                value: function () {
                    var e = this.monitor.getSourceId(),
                        t = this.sourceNodeOptions.get(e);
                    return L({ dropEffect: this.altKeyPressed ? "copy" : "move" }, t || {});
                },
            },
            {
                key: "getCurrentDropEffect",
                value: function () {
                    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
                },
            },
            {
                key: "getCurrentSourcePreviewNodeOptions",
                value: function () {
                    var e = this.monitor.getSourceId();
                    return L(
                        { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
                        this.sourcePreviewNodeOptions.get(e) || {},
                    );
                },
            },
            {
                key: "isDraggingNativeItem",
                value: function () {
                    var e = this.monitor.getItemType();
                    return Object.keys(a).some(function (t) {
                        return a[t] === e;
                    });
                },
            },
            {
                key: "beginDragNativeItem",
                value: function (e, t) {
                    var n;
                    this.clearCurrentDragSourceNode(),
                        (this.currentNativeSource = ((n = new v(y[e])).loadDataTransfer(t), n)),
                        (this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource)),
                        this.actions.beginDrag([this.currentNativeHandle]);
                },
            },
            {
                key: "setCurrentDragSourceNode",
                value: function (e) {
                    var t = this;
                    this.clearCurrentDragSourceNode(),
                        (this.currentDragSourceNode = e),
                        (this.mouseMoveTimeoutTimer = setTimeout(function () {
                            var e;
                            return null == (e = t.rootElement)
                                ? void 0
                                : e.addEventListener("mousemove", t.endDragIfSourceWasRemovedFromDOM, !0);
                        }, 1e3));
                },
            },
            {
                key: "clearCurrentDragSourceNode",
                value: function () {
                    if (this.currentDragSourceNode) {
                        if (((this.currentDragSourceNode = null), this.rootElement)) {
                            var e;
                            null == (e = this.window) || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0),
                                this.rootElement.removeEventListener(
                                    "mousemove",
                                    this.endDragIfSourceWasRemovedFromDOM,
                                    !0,
                                );
                        }
                        return (this.mouseMoveTimeoutTimer = null), !0;
                    }
                    return !1;
                },
            },
            {
                key: "handleDragStart",
                value: function (e, t) {
                    e.defaultPrevented ||
                        (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(t));
                },
            },
            {
                key: "handleDragEnter",
                value: function (e, t) {
                    this.dragEnterTargetIds.unshift(t);
                },
            },
            {
                key: "handleDragOver",
                value: function (e, t) {
                    null === this.dragOverTargetIds && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(t);
                },
            },
            {
                key: "handleDrop",
                value: function (e, t) {
                    this.dropTargetIds.unshift(t);
                },
            },
        ]),
        (function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
            }
        })(t.prototype, e),
        t
    );
})();
let P = (e, t) => ({ event: e, check: t });
var x = n(321733),
    U = "dnd-core/INIT_COORDS",
    k = "dnd-core/BEGIN_DRAG",
    G = "dnd-core/PUBLISH_DRAG_SOURCE",
    F = "dnd-core/HOVER",
    V = "dnd-core/DROP",
    B = "dnd-core/END_DRAG";
function H(e, t) {
    return { type: U, payload: { sourceClientOffset: t || null, clientOffset: e || null } };
}
function j(e) {
    return (j =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function Y(e) {
    return "object" === j(e);
}
var W = { type: U, payload: { clientOffset: null, sourceClientOffset: null } };
function K(e, t) {
    return null === t
        ? null === e
        : Array.isArray(e)
          ? e.some(function (e) {
                return e === t;
            })
          : e === t;
}
function z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? z(Object(n), !0).forEach(function (t) {
                  var i, r, s;
                  (i = e),
                      (r = t),
                      (s = n[t]),
                      r in i
                          ? Object.defineProperty(i, r, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                          : (i[r] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : z(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var q = (function () {
    var e;
    function t(e, n) {
        var i = this;
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
                var e = i.store.getState().refCount > 0;
                i.backend &&
                    (e && !i.isSetUp
                        ? (i.backend.setup(), (i.isSetUp = !0))
                        : !e && i.isSetUp && (i.backend.teardown(), (i.isSetUp = !1)));
            }),
            (this.store = e),
            (this.monitor = n),
            e.subscribe(this.handleRefCountChange);
    }
    return (
        (e = [
            {
                key: "receiveBackend",
                value: function (e) {
                    this.backend = e;
                },
            },
            {
                key: "getMonitor",
                value: function () {
                    return this.monitor;
                },
            },
            {
                key: "getBackend",
                value: function () {
                    return this.backend;
                },
            },
            {
                key: "getRegistry",
                value: function () {
                    return this.monitor.registry;
                },
            },
            {
                key: "getActions",
                value: function () {
                    var e,
                        t,
                        n,
                        i,
                        r,
                        s = this,
                        a = this.store.dispatch,
                        o = {
                            beginDrag:
                                ((e = this),
                                function () {
                                    var t,
                                        n,
                                        i,
                                        r,
                                        s,
                                        a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        o =
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : { publishSource: !0 },
                                        l = o.publishSource,
                                        u = o.clientOffset,
                                        c = o.getSourceClientOffset,
                                        d = e.getMonitor(),
                                        _ = e.getRegistry();
                                    e.dispatch(H(u)),
                                        (t = a),
                                        (n = d),
                                        (i = _),
                                        (0, x.V)(!n.isDragging(), "Cannot call beginDrag while dragging."),
                                        t.forEach(function (e) {
                                            (0, x.V)(i.getSource(e), "Expected sourceIds to be registered.");
                                        });
                                    var f = (function (e, t) {
                                        for (var n = null, i = e.length - 1; i >= 0; i--)
                                            if (t.canDragSource(e[i])) {
                                                n = e[i];
                                                break;
                                            }
                                        return n;
                                    })(a, d);
                                    if (null === f) return void e.dispatch(W);
                                    var h = null;
                                    if (u) {
                                        if (!c) throw Error("getSourceClientOffset must be defined");
                                        (r = c),
                                            (0, x.V)(
                                                "function" == typeof r,
                                                "When clientOffset is provided, getSourceClientOffset must be a function.",
                                            ),
                                            (h = c(f));
                                    }
                                    e.dispatch(H(u, h));
                                    var p = _.getSource(f).beginDrag(d, f);
                                    if (null != p) {
                                        return (
                                            (s = p),
                                            (0, x.V)(Y(s), "Item must be an object."),
                                            _.pinSource(f),
                                            {
                                                type: k,
                                                payload: {
                                                    itemType: _.getSourceType(f),
                                                    item: p,
                                                    sourceId: f,
                                                    clientOffset: u || null,
                                                    sourceClientOffset: h || null,
                                                    isSourcePublic: !!(void 0 === l || l),
                                                },
                                            }
                                        );
                                    }
                                }),
                            publishDragSource:
                                ((t = this),
                                function () {
                                    if (t.getMonitor().isDragging()) return { type: G };
                                }),
                            hover:
                                ((n = this),
                                function (e) {
                                    var t,
                                        i,
                                        r,
                                        s,
                                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        o = a.clientOffset;
                                    (t = e), (0, x.V)(Array.isArray(t), "Expected targetIds to be an array.");
                                    var l = e.slice(0),
                                        u = n.getMonitor(),
                                        c = n.getRegistry();
                                    return (
                                        (function (e, t, n) {
                                            (0, x.V)(t.isDragging(), "Cannot call hover while not dragging."),
                                                (0, x.V)(!t.didDrop(), "Cannot call hover after drop.");
                                            for (var i = 0; i < e.length; i++) {
                                                var r = e[i];
                                                (0, x.V)(
                                                    e.lastIndexOf(r) === i,
                                                    "Expected targetIds to be unique in the passed array.",
                                                );
                                                var s = n.getTarget(r);
                                                (0, x.V)(s, "Expected targetIds to be registered.");
                                            }
                                        })(l, u, c),
                                        (function (e, t, n) {
                                            for (var i = e.length - 1; i >= 0; i--) {
                                                var r = e[i];
                                                K(t.getTargetType(r), n) || e.splice(i, 1);
                                            }
                                        })(l, c, u.getItemType()),
                                        (i = l),
                                        (r = u),
                                        (s = c),
                                        i.forEach(function (e) {
                                            s.getTarget(e).hover(r, e);
                                        }),
                                        { type: F, payload: { targetIds: l, clientOffset: o || null } }
                                    );
                                }),
                            drop:
                                ((i = this),
                                function () {
                                    var e,
                                        t,
                                        n,
                                        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        s = i.getMonitor(),
                                        a = i.getRegistry();
                                    (e = s),
                                        (0, x.V)(e.isDragging(), "Cannot call drop while not dragging."),
                                        (0, x.V)(!e.didDrop(), "Cannot call drop twice during one drag operation."),
                                        ((n = (t = s).getTargetIds().filter(t.canDropOnTarget, t)).reverse(),
                                        n).forEach(function (e, t) {
                                            var n,
                                                o,
                                                l,
                                                u,
                                                c,
                                                d,
                                                _,
                                                f =
                                                    ((n = e),
                                                    (o = t),
                                                    (l = a),
                                                    (u = s),
                                                    (_ = d = (c = l.getTarget(n)) ? c.drop(u, n) : void 0),
                                                    (0, x.V)(
                                                        void 0 === _ || Y(_),
                                                        "Drop result must either be an object or undefined.",
                                                    ),
                                                    void 0 === d && (d = 0 === o ? {} : u.getDropResult()),
                                                    d),
                                                h = { type: V, payload: { dropResult: $($({}, r), f) } };
                                            i.dispatch(h);
                                        });
                                }),
                            endDrag:
                                ((r = this),
                                function () {
                                    var e,
                                        t = r.getMonitor(),
                                        n = r.getRegistry();
                                    (e = t), (0, x.V)(e.isDragging(), "Cannot call endDrag while not dragging.");
                                    var i = t.getSourceId();
                                    return (
                                        null != i && (n.getSource(i, !0).endDrag(t, i), n.unpinSource()), { type: B }
                                    );
                                }),
                        };
                    return Object.keys(o).reduce(function (e, t) {
                        var n = o[t];
                        return (
                            (e[t] = function () {
                                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                                var r = n.apply(s, t);
                                void 0 !== r && a(r);
                            }),
                            e
                        );
                    }, {});
                },
            },
            {
                key: "dispatch",
                value: function (e) {
                    this.store.dispatch(e);
                },
            },
        ]),
        (function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
            }
        })(t.prototype, e),
        t
    );
})();
function Z(e) {
    return (
        "Minified Redux error #" +
        e +
        "; visit https://redux.js.org/Errors?code=" +
        e +
        " for the full message or use the non-minified dev environment for full errors. "
    );
}
n(416886);
var X = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
    Q = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
    },
    J = {
        INIT: "@@redux/INIT" + Q(),
        REPLACE: "@@redux/REPLACE" + Q(),
        PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + Q();
        },
    },
    ee = function (e, t) {
        return e === t;
    };
function et(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function en(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? et(Object(n), !0).forEach(function (t) {
                  var i, r, s;
                  (i = e),
                      (r = t),
                      (s = n[t]),
                      r in i
                          ? Object.defineProperty(i, r, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                          : (i[r] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : et(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ei = { initialSourceClientOffset: null, initialClientOffset: null, clientOffset: null },
    er = "dnd-core/ADD_SOURCE",
    es = "dnd-core/ADD_TARGET",
    ea = "dnd-core/REMOVE_SOURCE",
    eo = "dnd-core/REMOVE_TARGET";
function el(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? el(Object(n), !0).forEach(function (t) {
                  var i, r, s;
                  (i = e),
                      (r = t),
                      (s = n[t]),
                      r in i
                          ? Object.defineProperty(i, r, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                          : (i[r] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : el(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ec = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
    },
    ed = [],
    e_ = [];
function ef(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function eh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ef(Object(n), !0).forEach(function (t) {
                  var i, r, s;
                  (i = e),
                      (r = t),
                      (s = n[t]),
                      r in i
                          ? Object.defineProperty(i, r, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                          : (i[r] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ef(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function ep() {
    var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 ? arguments[1] : void 0;
    return {
        dirtyHandlerIds: (function () {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var e,
                t,
                n,
                i = arguments.length > 1 ? arguments[1] : void 0;
            switch (i.type) {
                case F:
                    break;
                case er:
                case es:
                case eo:
                case ea:
                    return ed;
                default:
                    return e_;
            }
            var r = i.payload,
                s = r.targetIds,
                a = void 0 === s ? [] : s,
                o = r.prevTargetIds,
                l = void 0 === o ? [] : o,
                u =
                    ((e = new Map()),
                    (t = function (t) {
                        e.set(t, e.has(t) ? e.get(t) + 1 : 1);
                    }),
                    a.forEach(t),
                    l.forEach(t),
                    (n = []),
                    e.forEach(function (e, t) {
                        1 === e && n.push(t);
                    }),
                    n);
            if (
                !(
                    u.length > 0 ||
                    !(function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee;
                        if (e.length !== t.length) return !1;
                        for (var i = 0; i < e.length; ++i) if (!n(e[i], t[i])) return !1;
                        return !0;
                    })(a, l)
                )
            )
                return ed;
            var c = l[l.length - 1],
                d = a[a.length - 1];
            return c !== d && (c && u.push(c), d && u.push(d)), u;
        })(t.dirtyHandlerIds, {
            type: n.type,
            payload: eh(
                eh({}, n.payload),
                {},
                {
                    prevTargetIds:
                        ((e = []),
                        "dragOperation.targetIds".split(".").reduce(function (t, n) {
                            return t && t[n] ? t[n] : e || null;
                        }, t)),
                },
            ),
        }),
        dragOffset: (function () {
            var e,
                t,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ei,
                i = arguments.length > 1 ? arguments[1] : void 0,
                r = i.payload;
            switch (i.type) {
                case U:
                case k:
                    return {
                        initialSourceClientOffset: r.sourceClientOffset,
                        initialClientOffset: r.clientOffset,
                        clientOffset: r.clientOffset,
                    };
                case F:
                    if (
                        ((e = n.clientOffset),
                        (t = r.clientOffset),
                        (!e && !t) || (e && t && e.x === t.x && e.y === t.y))
                    )
                        return n;
                    return en(en({}, n), {}, { clientOffset: r.clientOffset });
                case B:
                case V:
                    return ei;
                default:
                    return n;
            }
        })(t.dragOffset, n),
        refCount: (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case er:
                case es:
                    return e + 1;
                case ea:
                case eo:
                    return e - 1;
                default:
                    return e;
            }
        })(t.refCount, n),
        dragOperation: (function () {
            var e,
                t,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec,
                i = arguments.length > 1 ? arguments[1] : void 0,
                r = i.payload;
            switch (i.type) {
                case k:
                    return eu(
                        eu({}, n),
                        {},
                        {
                            itemType: r.itemType,
                            item: r.item,
                            sourceId: r.sourceId,
                            isSourcePublic: r.isSourcePublic,
                            dropResult: null,
                            didDrop: !1,
                        },
                    );
                case G:
                    return eu(eu({}, n), {}, { isSourcePublic: !0 });
                case F:
                    return eu(eu({}, n), {}, { targetIds: r.targetIds });
                case eo:
                    if (-1 === n.targetIds.indexOf(r.targetId)) return n;
                    return eu(
                        eu({}, n),
                        {},
                        {
                            targetIds:
                                ((e = n.targetIds),
                                (t = r.targetId),
                                e.filter(function (e) {
                                    return e !== t;
                                })),
                        },
                    );
                case V:
                    return eu(eu({}, n), {}, { dropResult: r.dropResult, didDrop: !0, targetIds: [] });
                case B:
                    return eu(
                        eu({}, n),
                        {},
                        {
                            itemType: null,
                            item: null,
                            sourceId: null,
                            dropResult: null,
                            didDrop: !1,
                            isSourcePublic: null,
                            targetIds: [],
                        },
                    );
                default:
                    return n;
            }
        })(t.dragOperation, n),
        stateId: (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return e + 1;
        })(t.stateId),
    };
}
function eE(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
}
(ed.__IS_NONE__ = !0), (e_.__IS_ALL__ = !0);
var em = (function () {
        var e;
        function t(e, n) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (this.store = e), (this.registry = n);
        }
        return (
            (e = [
                {
                    key: "subscribeToStateChange",
                    value: function (e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { handlerIds: void 0 },
                            i = n.handlerIds;
                        (0, x.V)("function" == typeof e, "listener must be a function."),
                            (0, x.V)(
                                void 0 === i || Array.isArray(i),
                                "handlerIds, when specified, must be an array of strings.",
                            );
                        var r = this.store.getState().stateId;
                        return this.store.subscribe(function () {
                            var n = t.store.getState(),
                                s = n.stateId;
                            try {
                                s === r ||
                                    (s === r + 1 &&
                                        !(function (e, t) {
                                            return (
                                                e !== ed &&
                                                (e === e_ ||
                                                    void 0 === t ||
                                                    t.filter(function (t) {
                                                        return e.indexOf(t) > -1;
                                                    }).length > 0)
                                            );
                                        })(n.dirtyHandlerIds, i)) ||
                                    e();
                            } finally {
                                r = s;
                            }
                        });
                    },
                },
                {
                    key: "subscribeToOffsetChange",
                    value: function (e) {
                        var t = this;
                        (0, x.V)("function" == typeof e, "listener must be a function.");
                        var n = this.store.getState().dragOffset;
                        return this.store.subscribe(function () {
                            var i = t.store.getState().dragOffset;
                            i !== n && ((n = i), e());
                        });
                    },
                },
                {
                    key: "canDragSource",
                    value: function (e) {
                        if (!e) return !1;
                        var t = this.registry.getSource(e);
                        return (
                            (0, x.V)(t, "Expected to find a valid source. sourceId=".concat(e)),
                            !this.isDragging() && t.canDrag(this, e)
                        );
                    },
                },
                {
                    key: "canDropOnTarget",
                    value: function (e) {
                        if (!e) return !1;
                        var t = this.registry.getTarget(e);
                        return (
                            (0, x.V)(t, "Expected to find a valid target. targetId=".concat(e)),
                            !(!this.isDragging() || this.didDrop()) &&
                                K(this.registry.getTargetType(e), this.getItemType()) &&
                                t.canDrop(this, e)
                        );
                    },
                },
                {
                    key: "isDragging",
                    value: function () {
                        return !!this.getItemType();
                    },
                },
                {
                    key: "isDraggingSource",
                    value: function (e) {
                        if (!e) return !1;
                        var t = this.registry.getSource(e, !0);
                        return (
                            (0, x.V)(t, "Expected to find a valid source. sourceId=".concat(e)),
                            !!this.isDragging() &&
                                !!this.isSourcePublic() &&
                                this.registry.getSourceType(e) === this.getItemType() &&
                                t.isDragging(this, e)
                        );
                    },
                },
                {
                    key: "isOverTarget",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shallow: !1 };
                        if (!e) return !1;
                        var n = t.shallow;
                        if (!this.isDragging()) return !1;
                        var i = this.registry.getTargetType(e),
                            r = this.getItemType();
                        if (r && !K(i, r)) return !1;
                        var s = this.getTargetIds();
                        if (!s.length) return !1;
                        var a = s.indexOf(e);
                        return n ? a === s.length - 1 : a > -1;
                    },
                },
                {
                    key: "getItemType",
                    value: function () {
                        return this.store.getState().dragOperation.itemType;
                    },
                },
                {
                    key: "getItem",
                    value: function () {
                        return this.store.getState().dragOperation.item;
                    },
                },
                {
                    key: "getSourceId",
                    value: function () {
                        return this.store.getState().dragOperation.sourceId;
                    },
                },
                {
                    key: "getTargetIds",
                    value: function () {
                        return this.store.getState().dragOperation.targetIds;
                    },
                },
                {
                    key: "getDropResult",
                    value: function () {
                        return this.store.getState().dragOperation.dropResult;
                    },
                },
                {
                    key: "didDrop",
                    value: function () {
                        return this.store.getState().dragOperation.didDrop;
                    },
                },
                {
                    key: "isSourcePublic",
                    value: function () {
                        return !!this.store.getState().dragOperation.isSourcePublic;
                    },
                },
                {
                    key: "getInitialClientOffset",
                    value: function () {
                        return this.store.getState().dragOffset.initialClientOffset;
                    },
                },
                {
                    key: "getInitialSourceClientOffset",
                    value: function () {
                        return this.store.getState().dragOffset.initialSourceClientOffset;
                    },
                },
                {
                    key: "getClientOffset",
                    value: function () {
                        return this.store.getState().dragOffset.clientOffset;
                    },
                },
                {
                    key: "getSourceClientOffset",
                    value: function () {
                        return (function (e) {
                            var t = e.clientOffset,
                                n = e.initialClientOffset,
                                i = e.initialSourceClientOffset;
                            return t && n && i ? eE({ x: t.x + i.x, y: t.y + i.y }, n) : null;
                        })(this.store.getState().dragOffset);
                    },
                },
                {
                    key: "getDifferenceFromInitialOffset",
                    value: function () {
                        var e, t, n;
                        return (
                            (t = (e = this.store.getState().dragOffset).clientOffset),
                            (n = e.initialClientOffset),
                            t && n ? eE(t, n) : null
                        );
                    },
                },
            ]),
            (function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                }
            })(t.prototype, e),
            t
        );
    })(),
    eg = 0;
function eA(e) {
    return (eA =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function eI(e, t) {
    t && Array.isArray(e)
        ? e.forEach(function (e) {
              return eI(e, !1);
          })
        : (0, x.V)(
              "string" == typeof e || "symbol" === eA(e),
              t
                  ? "Type can only be a string, a symbol, or an array of either."
                  : "Type can only be a string or a symbol.",
          );
}
((i = s || (s = {})).SOURCE = "SOURCE"), (i.TARGET = "TARGET");
let eT = "u" > typeof global ? global : self,
    eS = eT.MutationObserver || eT.WebKitMutationObserver;
function eN(e) {
    return function () {
        let t = setTimeout(i, 0),
            n = setInterval(i, 50);
        function i() {
            clearTimeout(t), clearInterval(n), e();
        }
    };
}
let ey =
    "function" == typeof eS
        ? function (e) {
              let t = 1,
                  n = new eS(e),
                  i = document.createTextNode("");
              return (
                  n.observe(i, { characterData: !0 }),
                  function () {
                      i.data = t = -t;
                  }
              );
          }
        : eN;
class eC {
    call() {
        try {
            this.task && this.task();
        } catch (e) {
            this.onError(e);
        } finally {
            (this.task = null), this.release(this);
        }
    }
    constructor(e, t) {
        (this.onError = e), (this.release = t), (this.task = null);
    }
}
let ev = new (class {
        enqueueTask(e) {
            let { queue: t, requestFlush: n } = this;
            t.length || (n(), (this.flushing = !0)), (t[t.length] = e);
        }
        constructor() {
            (this.queue = []),
                (this.pendingErrors = []),
                (this.flushing = !1),
                (this.index = 0),
                (this.capacity = 1024),
                (this.flush = () => {
                    let { queue: e } = this;
                    for (; this.index < e.length; ) {
                        let t = this.index;
                        if ((this.index++, e[t].call(), this.index > this.capacity)) {
                            for (let t = 0, n = e.length - this.index; t < n; t++) e[t] = e[t + this.index];
                            (e.length -= this.index), (this.index = 0);
                        }
                    }
                    (e.length = 0), (this.index = 0), (this.flushing = !1);
                }),
                (this.registerPendingError = (e) => {
                    this.pendingErrors.push(e), this.requestErrorThrow();
                }),
                (this.requestFlush = ey(this.flush)),
                (this.requestErrorThrow = eN(() => {
                    if (this.pendingErrors.length) throw this.pendingErrors.shift();
                }));
        }
    })(),
    eO = new (class {
        create(e) {
            let t = this.freeTasks,
                n = t.length ? t.pop() : new eC(this.onError, (e) => (t[t.length] = e));
            return (n.task = e), n;
        }
        constructor(e) {
            (this.onError = e), (this.freeTasks = []);
        }
    })(ev.registerPendingError);
function eR(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function eb(e) {
    switch (e[0]) {
        case "S":
            return s.SOURCE;
        case "T":
            return s.TARGET;
        default:
            (0, x.V)(!1, "Cannot parse handler ID: ".concat(e));
    }
}
function eD(e, t) {
    var n = e.entries(),
        i = !1;
    do {
        var r,
            s = n.next(),
            a = s.done;
        if (
            ((function (e) {
                if (Array.isArray(e)) return e;
            })((r = s.value)) ||
                (function (e) {
                    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            n = !0,
                            i = !1,
                            r = void 0;
                        try {
                            for (
                                var s, a = e[Symbol.iterator]();
                                !(n = (s = a.next()).done) && (t.push(s.value), 2 !== t.length);
                                n = !0
                            );
                        } catch (e) {
                            (i = !0), (r = e);
                        } finally {
                            try {
                                n || null == a.return || a.return();
                            } finally {
                                if (i) throw r;
                            }
                        }
                        return t;
                    }
                })(r) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return eR(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return eR(e, 2);
                    }
                })(r) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })())[1] === t
        )
            return !0;
        i = !!a;
    } while (!i);
    return !1;
}
var eL = (function () {
        var e;
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (this.types = new Map()),
                (this.dragSources = new Map()),
                (this.dropTargets = new Map()),
                (this.pinnedSourceId = null),
                (this.pinnedSource = null),
                (this.store = e);
        }
        return (
            (e = [
                {
                    key: "addSource",
                    value: function (e, t) {
                        eI(e),
                            (0, x.V)("function" == typeof t.canDrag, "Expected canDrag to be a function."),
                            (0, x.V)("function" == typeof t.beginDrag, "Expected beginDrag to be a function."),
                            (0, x.V)("function" == typeof t.endDrag, "Expected endDrag to be a function.");
                        var n = this.addHandler(s.SOURCE, e, t);
                        return this.store.dispatch({ type: er, payload: { sourceId: n } }), n;
                    },
                },
                {
                    key: "addTarget",
                    value: function (e, t) {
                        eI(e, !0),
                            (0, x.V)("function" == typeof t.canDrop, "Expected canDrop to be a function."),
                            (0, x.V)("function" == typeof t.hover, "Expected hover to be a function."),
                            (0, x.V)("function" == typeof t.drop, "Expected beginDrag to be a function.");
                        var n = this.addHandler(s.TARGET, e, t);
                        return this.store.dispatch({ type: es, payload: { targetId: n } }), n;
                    },
                },
                {
                    key: "containsHandler",
                    value: function (e) {
                        return eD(this.dragSources, e) || eD(this.dropTargets, e);
                    },
                },
                {
                    key: "getSource",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return (
                            (0, x.V)(this.isSourceId(e), "Expected a valid source ID."),
                            t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e)
                        );
                    },
                },
                {
                    key: "getTarget",
                    value: function (e) {
                        return (0, x.V)(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
                    },
                },
                {
                    key: "getSourceType",
                    value: function (e) {
                        return (0, x.V)(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
                    },
                },
                {
                    key: "getTargetType",
                    value: function (e) {
                        return (0, x.V)(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
                    },
                },
                {
                    key: "isSourceId",
                    value: function (e) {
                        return eb(e) === s.SOURCE;
                    },
                },
                {
                    key: "isTargetId",
                    value: function (e) {
                        return eb(e) === s.TARGET;
                    },
                },
                {
                    key: "removeSource",
                    value: function (e) {
                        var t = this;
                        (0, x.V)(this.getSource(e), "Expected an existing source."),
                            this.store.dispatch({ type: ea, payload: { sourceId: e } }),
                            ev.enqueueTask(
                                eO.create(function () {
                                    t.dragSources.delete(e), t.types.delete(e);
                                }),
                            );
                    },
                },
                {
                    key: "removeTarget",
                    value: function (e) {
                        (0, x.V)(this.getTarget(e), "Expected an existing target."),
                            this.store.dispatch({ type: eo, payload: { targetId: e } }),
                            this.dropTargets.delete(e),
                            this.types.delete(e);
                    },
                },
                {
                    key: "pinSource",
                    value: function (e) {
                        var t = this.getSource(e);
                        (0, x.V)(t, "Expected an existing source."), (this.pinnedSourceId = e), (this.pinnedSource = t);
                    },
                },
                {
                    key: "unpinSource",
                    value: function () {
                        (0, x.V)(this.pinnedSource, "No source is pinned at the time."),
                            (this.pinnedSourceId = null),
                            (this.pinnedSource = null);
                    },
                },
                {
                    key: "addHandler",
                    value: function (e, t, n) {
                        var i = (function (e) {
                            var t = (eg++).toString();
                            switch (e) {
                                case s.SOURCE:
                                    return "S".concat(t);
                                case s.TARGET:
                                    return "T".concat(t);
                                default:
                                    throw Error("Unknown Handler Role: ".concat(e));
                            }
                        })(e);
                        return (
                            this.types.set(i, t),
                            e === s.SOURCE ? this.dragSources.set(i, n) : e === s.TARGET && this.dropTargets.set(i, n),
                            i
                        );
                    },
                },
            ]),
            (function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                }
            })(t.prototype, e),
            t
        );
    })(),
    ew = n(75375),
    eM = ["children"];
function eP(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
var ex = 0,
    eU = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
    ek = (0, l.memo)(function (e) {
        var t,
            n,
            i = e.children,
            r =
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(
                    (n =
                        "manager" in
                        (t = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        r = {},
                                        s = Object.keys(e);
                                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(e);
                                for (i = 0; i < s.length; i++)
                                    (n = s[i]),
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (r[n] = e[n]);
                            }
                            return r;
                        })(e, eM))
                            ? [{ dragDropManager: t.manager }, !1]
                            : [
                                  (function (e) {
                                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG(),
                                          n = arguments.length > 2 ? arguments[2] : void 0,
                                          i = arguments.length > 3 ? arguments[3] : void 0;
                                      return (
                                          t[eU] ||
                                              (t[eU] = {
                                                  dragDropManager: (function (e) {
                                                      var t,
                                                          n,
                                                          i =
                                                              arguments.length > 1 && void 0 !== arguments[1]
                                                                  ? arguments[1]
                                                                  : void 0,
                                                          r =
                                                              arguments.length > 2 && void 0 !== arguments[2]
                                                                  ? arguments[2]
                                                                  : {},
                                                          s =
                                                              arguments.length > 3 &&
                                                              void 0 !== arguments[3] &&
                                                              arguments[3],
                                                          a =
                                                              ((t = s),
                                                              (n =
                                                                  "u" > typeof window &&
                                                                  window.__REDUX_DEVTOOLS_EXTENSION__),
                                                              (function e(t, n, i) {
                                                                  if (
                                                                      ("function" == typeof n &&
                                                                          "function" == typeof i) ||
                                                                      ("function" == typeof i &&
                                                                          "function" == typeof arguments[3])
                                                                  )
                                                                      throw Error(Z(0));
                                                                  if (
                                                                      ("function" == typeof n &&
                                                                          void 0 === i &&
                                                                          ((i = n), (n = void 0)),
                                                                      void 0 !== i)
                                                                  ) {
                                                                      if ("function" != typeof i) throw Error(Z(1));
                                                                      return i(e)(t, n);
                                                                  }
                                                                  if ("function" != typeof t) throw Error(Z(2));
                                                                  var r,
                                                                      s = t,
                                                                      a = n,
                                                                      o = [],
                                                                      l = o,
                                                                      u = !1;
                                                                  function c() {
                                                                      l === o && (l = o.slice());
                                                                  }
                                                                  function d() {
                                                                      if (u) throw Error(Z(3));
                                                                      return a;
                                                                  }
                                                                  function _(e) {
                                                                      if ("function" != typeof e) throw Error(Z(4));
                                                                      if (u) throw Error(Z(5));
                                                                      var t = !0;
                                                                      return (
                                                                          c(),
                                                                          l.push(e),
                                                                          function () {
                                                                              if (t) {
                                                                                  if (u) throw Error(Z(6));
                                                                                  (t = !1), c();
                                                                                  var n = l.indexOf(e);
                                                                                  l.splice(n, 1), (o = null);
                                                                              }
                                                                          }
                                                                      );
                                                                  }
                                                                  function f(e) {
                                                                      if (
                                                                          !(function (e) {
                                                                              if ("object" != typeof e || null === e)
                                                                                  return !1;
                                                                              for (
                                                                                  var t = e;
                                                                                  null !== Object.getPrototypeOf(t);
                                                                              )
                                                                                  t = Object.getPrototypeOf(t);
                                                                              return Object.getPrototypeOf(e) === t;
                                                                          })(e)
                                                                      )
                                                                          throw Error(Z(7));
                                                                      if (void 0 === e.type) throw Error(Z(8));
                                                                      if (u) throw Error(Z(9));
                                                                      try {
                                                                          (u = !0), (a = s(a, e));
                                                                      } finally {
                                                                          u = !1;
                                                                      }
                                                                      for (var t = (o = l), n = 0; n < t.length; n++)
                                                                          (0, t[n])();
                                                                      return e;
                                                                  }
                                                                  return (
                                                                      f({ type: J.INIT }),
                                                                      ((r = {
                                                                          dispatch: f,
                                                                          subscribe: _,
                                                                          getState: d,
                                                                          replaceReducer: function (e) {
                                                                              if ("function" != typeof e)
                                                                                  throw Error(Z(10));
                                                                              (s = e), f({ type: J.REPLACE });
                                                                          },
                                                                      })[X] = function () {
                                                                          var e;
                                                                          return (
                                                                              ((e = {
                                                                                  subscribe: function (e) {
                                                                                      if (
                                                                                          "object" != typeof e ||
                                                                                          null === e
                                                                                      )
                                                                                          throw Error(Z(11));
                                                                                      function t() {
                                                                                          e.next && e.next(d());
                                                                                      }
                                                                                      return t(), { unsubscribe: _(t) };
                                                                                  },
                                                                              })[X] = function () {
                                                                                  return this;
                                                                              }),
                                                                              e
                                                                          );
                                                                      }),
                                                                      r
                                                                  );
                                                              })(
                                                                  ep,
                                                                  t &&
                                                                      n &&
                                                                      n({ name: "dnd-core", instanceId: "dnd-core" }),
                                                              )),
                                                          o = new em(a, new eL(a)),
                                                          l = new q(a, o),
                                                          u = e(l, i, r);
                                                      return l.receiveBackend(u), l;
                                                  })(e, t, n, i),
                                              }),
                                          t[eU]
                                      );
                                  })(t.backend, t.context, t.options, t.debugMode),
                                  !t.context,
                              ]),
                ) ||
                (function (e) {
                    var t,
                        n,
                        i = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != i) {
                        var r = [],
                            s = !0,
                            a = !1;
                        try {
                            for (
                                i = i.call(e);
                                !(s = (t = i.next()).done) && (r.push(t.value), 2 !== r.length);
                                s = !0
                            );
                        } catch (e) {
                            (a = !0), (n = e);
                        } finally {
                            try {
                                s || null == i.return || i.return();
                            } finally {
                                if (a) throw n;
                            }
                        }
                        return r;
                    }
                })(n) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return eP(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return eP(e, 2);
                    }
                })(n) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })(),
            s = r[0],
            a = r[1];
        return (
            (0, l.useEffect)(function () {
                if (a) {
                    var e = eG();
                    return (
                        ++ex,
                        function () {
                            0 == --ex && (e[eU] = null);
                        }
                    );
                }
            }, []),
            (0, o.jsx)(ew.M.Provider, Object.assign({ value: s }, { children: i }), void 0)
        );
    });
function eG() {
    return void 0 !== n.g ? n.g : window;
}
function eF(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
function eV(e, t) {
    var n,
        i,
        r = eB(e, t, "get");
    return (n = e), (i = r).get ? i.get.call(n) : i.value;
}
function eB(e, t, n) {
    if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
}
var eH = new WeakMap();
class ej {
    constructor() {
        !(function (e, t, n) {
            (function (e, t) {
                if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
            })(e, t),
                t.set(e, n);
        })(this, eH, { writable: !0, value: void 0 }),
            eF(this, "register", (e) => {
                eV(this, eH).push(e);
            }),
            eF(this, "unregister", (e) => {
                let t;
                for (; -1 !== (t = eV(this, eH).indexOf(e)); ) eV(this, eH).splice(t, 1);
            }),
            eF(this, "backendChanged", (e) => {
                for (let t of eV(this, eH)) t.backendChanged(e);
            }),
            (function (e, t, n) {
                var i = eB(e, t, "set"),
                    r = e,
                    s = i,
                    a = n;
                if (s.set) s.set.call(r, a);
                else {
                    if (!s.writable) throw TypeError("attempted to set read only private field");
                    s.value = a;
                }
            })(this, eH, []);
    }
}
function eY(e, t, n) {
    (function (e, t) {
        if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
    })(e, t),
        t.set(e, n);
}
function eW(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
function eK(e, t) {
    var n,
        i,
        r = e$(e, t, "get");
    return (n = e), (i = r).get ? i.get.call(n) : i.value;
}
function ez(e, t, n) {
    var i = e$(e, t, "set");
    return (
        (function (e, t, n) {
            if (t.set) t.set.call(e, n);
            else {
                if (!t.writable) throw TypeError("attempted to set read only private field");
                t.value = n;
            }
        })(e, i, n),
        n
    );
}
function e$(e, t, n) {
    if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
}
var eq = new WeakMap(),
    eZ = new WeakMap(),
    eX = new WeakMap(),
    eQ = new WeakMap(),
    eJ = new WeakMap(),
    e0 = new WeakMap(),
    e1 = new WeakMap(),
    e2 = new WeakMap(),
    e3 = new WeakMap(),
    e6 = new WeakMap(),
    e4 = new WeakMap();
class e5 {
    constructor(e, t, n) {
        if (
            (eY(this, eq, { writable: !0, value: void 0 }),
            eY(this, eZ, { writable: !0, value: void 0 }),
            eY(this, eX, { writable: !0, value: void 0 }),
            eY(this, eQ, { writable: !0, value: void 0 }),
            eY(this, eJ, { writable: !0, value: void 0 }),
            eY(this, e0, {
                writable: !0,
                value: (e, t, n) => {
                    var i, r;
                    if (!n.backend)
                        throw Error(
                            "You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(n)),
                        );
                    let s = n.backend(e, t, n.options),
                        a = n.id,
                        o = !n.id && s && s.constructor;
                    if ((o && (a = s.constructor.name), a))
                        o &&
                            console.warn(
                                "Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.",
                            );
                    else
                        throw Error(
                            "You must specify an 'id' property in your Backend entry: ".concat(
                                JSON.stringify(n),
                                "\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx",
                            ),
                        );
                    if (eK(this, eX)[a])
                        throw Error(
                            "You must specify a unique 'id' property in your Backend entry:\n        "
                                .concat(JSON.stringify(n), " (conflicts with: ")
                                .concat(JSON.stringify(eK(this, eX)[a]), ")"),
                        );
                    return {
                        id: a,
                        instance: s,
                        preview: null != (i = n.preview) && i,
                        transition: n.transition,
                        skipDispatchOnTransition: null != (r = n.skipDispatchOnTransition) && r,
                    };
                },
            }),
            eW(this, "setup", () => {
                if ("u" > typeof window) {
                    if (e5.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
                    (e5.isSetUp = !0), eK(this, e1).call(this, window), eK(this, eX)[eK(this, eq)].instance.setup();
                }
            }),
            eW(this, "teardown", () => {
                "u" > typeof window &&
                    ((e5.isSetUp = !1),
                    eK(this, e2).call(this, window),
                    eK(this, eX)[eK(this, eq)].instance.teardown());
            }),
            eW(this, "connectDragSource", (e, t, n) => eK(this, e4).call(this, "connectDragSource", e, t, n)),
            eW(this, "connectDragPreview", (e, t, n) => eK(this, e4).call(this, "connectDragPreview", e, t, n)),
            eW(this, "connectDropTarget", (e, t, n) => eK(this, e4).call(this, "connectDropTarget", e, t, n)),
            eW(this, "profile", () => eK(this, eX)[eK(this, eq)].instance.profile()),
            eW(this, "previewEnabled", () => eK(this, eX)[eK(this, eq)].preview),
            eW(this, "previewsList", () => eK(this, eZ)),
            eW(this, "backendsList", () => eK(this, eQ)),
            eY(this, e1, {
                writable: !0,
                value: (e) => {
                    eK(this, eQ).forEach((t) => {
                        t.transition && e.addEventListener(t.transition.event, eK(this, e3));
                    });
                },
            }),
            eY(this, e2, {
                writable: !0,
                value: (e) => {
                    eK(this, eQ).forEach((t) => {
                        t.transition && e.removeEventListener(t.transition.event, eK(this, e3));
                    });
                },
            }),
            eY(this, e3, {
                writable: !0,
                value: (e) => {
                    let t = eK(this, eq);
                    if (
                        (eK(this, eQ).some(
                            (t) =>
                                !!(t.id !== eK(this, eq) && t.transition && t.transition.check(e)) &&
                                (ez(this, eq, t.id), !0),
                        ),
                        eK(this, eq) !== t)
                    ) {
                        var n;
                        eK(this, eX)[t].instance.teardown(),
                            Object.keys(eK(this, eJ)).forEach((e) => {
                                let t = eK(this, eJ)[e];
                                t.unsubscribe(), (t.unsubscribe = eK(this, e6).call(this, t.func, ...t.args));
                            }),
                            eK(this, eZ).backendChanged(this);
                        let i = eK(this, eX)[eK(this, eq)];
                        if ((i.instance.setup(), i.skipDispatchOnTransition)) return;
                        let r = new e.constructor(e.type, e);
                        null == (n = e.target) || n.dispatchEvent(r);
                    }
                },
            }),
            eY(this, e6, { writable: !0, value: (e, t, n, i) => eK(this, eX)[eK(this, eq)].instance[e](t, n, i) }),
            eY(this, e4, {
                writable: !0,
                value: (e, t, n, i) => {
                    let r = "".concat(e, "_").concat(t),
                        s = eK(this, e6).call(this, e, t, n, i);
                    return (
                        (eK(this, eJ)[r] = { func: e, args: [t, n, i], unsubscribe: s }),
                        () => {
                            eK(this, eJ)[r].unsubscribe(), delete eK(this, eJ)[r];
                        }
                    );
                },
            }),
            !n || !n.backends || n.backends.length < 1)
        )
            throw Error(
                "You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx",
            );
        ez(this, eZ, new ej()),
            ez(this, eX, {}),
            ez(this, eQ, []),
            n.backends.forEach((n) => {
                let i = eK(this, e0).call(this, e, t, n);
                (eK(this, eX)[i.id] = i), eK(this, eQ).push(i);
            }),
            ez(this, eq, eK(this, eQ)[0].id),
            ez(this, eJ, {});
    }
}
eW(e5, "isSetUp", !1);
let e7 = (e, t, n) => new e5(e, t, n);
function e8() {
    return (e8 =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function e9(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
var te = (0, l.createContext)(null),
    tt = function (e) {
        var t,
            n = e.portal,
            i = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            s = Object.keys(e);
                        for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < s.length; i++)
                        (n = s[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ["portal"]),
            r =
                (function (e) {
                    if (Array.isArray(e)) return e;
                })((t = (0, l.useState)(null))) ||
                (function (e) {
                    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            n = !0,
                            i = !1,
                            r = void 0;
                        try {
                            for (
                                var s, a = e[Symbol.iterator]();
                                !(n = (s = a.next()).done) && (t.push(s.value), 2 !== t.length);
                                n = !0
                            );
                        } catch (e) {
                            (i = !0), (r = e);
                        } finally {
                            try {
                                n || null == a.return || a.return();
                            } finally {
                                if (i) throw r;
                            }
                        }
                        return t;
                    }
                })(t) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return e9(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return e9(e, 2);
                    }
                })(t) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })(),
            s = r[0],
            a = r[1];
        return l.createElement(
            te.Provider,
            { value: null != n ? n : s },
            l.createElement(ek, e8({ backend: e7 }, i)),
            n ? null : l.createElement("div", { ref: a }),
        );
    },
    tn = (n(340287), n(688807));
var ti = n(765178),
    tr = n(425763),
    ts = n(375708);
class ta {
    announcer;
    constructor(e) {
        if (null != e) this.announcer = e;
        else {
            const e = n(620557);
            this.announcer = { announce: e.announce, clearAnnouncements: e.clearAnnouncer };
        }
    }
    announce(e, t, n) {
        this.announcer.announce(e, t, n);
    }
    announceDrag(e, t) {
        if (null == e) return;
        let n = this.getName(e, t);
        this.announce(ts.intl.formatToPlainString(ts.t["vHD/Je"], { itemName: n }));
    }
    announceHover(e, t) {
        null != e && this.announce(this.getName(e, t));
    }
    announceDrop() {
        this.announce(ts.intl.string(ts.t.lMkmz7));
    }
    announceCancel() {
        this.announce(ts.intl.string(ts.t["u4d/eC"]));
    }
    clear() {
        this.announcer.clearAnnouncements();
    }
    getName(e, t) {
        return e.getAttribute("data-dnd-name") ?? e.getAttribute("aria-label") ?? t;
    }
}
class to {
    container;
    svg;
    foreignObject;
    constructor(e) {
        this.container = e?.createElement("div");
        const t = (this.svg = e?.createElement("svg"));
        null != t && (t.style.contain = "paint"),
            (this.foreignObject = e?.createElement("foreignObject")),
            null != this.container &&
                null != this.svg &&
                null != this.foreignObject &&
                ((this.container.className = "drag-previewer"),
                (this.container.style.cssText =
                    "z-index: 1000; filter: drop-shadow(0 0 0 var(--background-surface-high)) drop-shadow(var(--elevation-high))"),
                this.svg.appendChild(this.foreignObject),
                this.container.appendChild(this.svg),
                e?.body.appendChild(this.container));
    }
    createDragPreview(e) {
        if (null == this.container || null == this.svg || null == this.foreignObject) return;
        let { width: t, height: n } = e.getBoundingClientRect();
        this.svg.setAttribute("viewBox", `0 0 ${t} ${n}`),
            this.svg.setAttribute("width", `${t}`),
            this.svg.setAttribute("height", `${n}`),
            this.foreignObject.setAttribute("x", "0"),
            this.foreignObject.setAttribute("y", "0"),
            this.foreignObject.setAttribute("width", `${t}`),
            this.foreignObject.setAttribute("height", `${n}`);
        let i = e.cloneNode(!0);
        this.foreignObject.appendChild(i);
    }
    render(e) {
        let t = this.container;
        if (null == t) return;
        let n = e.getSourceClientOffset();
        null == n ||
            (e.isDragging() &&
                ((t.style.position = "fixed"), (t.style.left = `${n.x + 30}px`), (t.style.top = `${n.y + 15}px`)));
    }
    clear() {
        null != this.foreignObject && (this.foreignObject.innerHTML = "");
    }
}
n(321073);
var tl = n(52724);
let tu = "dndOriginalRole";
class tc {
    targetNodes;
    manager;
    previewer;
    announcer;
    currentHoveredNode;
    focusManager;
    actions;
    monitor;
    constructor(e, t, n, i, r) {
        (this.targetNodes = t),
            (this.manager = n),
            (this.previewer = i),
            (this.announcer = r),
            (this.currentHoveredNode = e),
            (this.focusManager = (0, tl.C)({
                getFocusableElements: () => this.getViableTargets(t),
                getActiveElement: () => e.ownerDocument.activeElement,
            })),
            (this.actions = n.getActions()),
            (this.monitor = n.getMonitor()),
            this.overrideRoleToApplicationForHoveredNode(),
            window.addEventListener("keydown", this.handleDraggedElementKeyDown, { capture: !0 });
    }
    restoreRoleOfHoveredNode() {
        if (null == this.currentHoveredNode) return;
        let e = this.currentHoveredNode.dataset[tu];
        null != e &&
            ("" === e
                ? this.currentHoveredNode.removeAttribute("role")
                : this.currentHoveredNode.setAttribute("role", e),
            delete this.currentHoveredNode.dataset[tu]);
    }
    overrideRoleToApplicationForHoveredNode() {
        null != this.currentHoveredNode &&
            ((this.currentHoveredNode.dataset[tu] = this.currentHoveredNode.getAttribute("role") ?? ""),
            this.currentHoveredNode.setAttribute("role", "application"),
            this.currentHoveredNode.focus());
    }
    disconnect() {
        window.removeEventListener("keydown", this.handleDraggedElementKeyDown, { capture: !0 }),
            this.restoreRoleOfHoveredNode();
    }
    handleDraggedElementKeyDown = async (e) => {
        switch (e.key) {
            case "ArrowUp":
            case "ArrowLeft":
                e.preventDefault(), e.stopPropagation(), this.hoverNode(await this.getPreviousDropTarget());
                return;
            case "ArrowDown":
            case "ArrowRight":
                e.preventDefault(), e.stopPropagation(), this.hoverNode(await this.getNextDropTarget());
        }
    };
    hoverNode(e) {
        let t = Array.from(this.targetNodes.entries()).find((t) => {
            let [n, i] = t;
            return e === i;
        })?.[0];
        null != t &&
            (this.restoreRoleOfHoveredNode(),
            this.actions.hover([t], {
                clientOffset: (function (e) {
                    if (null == e) return { x: 0, y: 0 };
                    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
                    if (null == t) return { x: 0, y: 0 };
                    let { top: n, left: i } = t.getBoundingClientRect();
                    return { x: i, y: n };
                })(e),
            }),
            (this.currentHoveredNode = e),
            this.overrideRoleToApplicationForHoveredNode(),
            this.previewer.render(this.monitor),
            this.announcer.announceHover(e, t));
    }
    getNextDropTarget() {
        return this.focusManager.getNextFocusableElement({ wrap: !1, from: this.currentHoveredNode ?? void 0 });
    }
    getPreviousDropTarget() {
        return this.focusManager.getPreviousFocusableElement({ wrap: !1, from: this.currentHoveredNode ?? void 0 });
    }
    getViableTargets(e) {
        return this.getAllowedTargets(e).sort((e, t) => {
            if (e === t) return 0;
            let n = e.compareDocumentPosition(t);
            return (n & (Node.DOCUMENT_POSITION_FOLLOWING | (n & Node.DOCUMENT_POSITION_CONTAINED_BY))) != 0
                ? -1
                : +((n & (Node.DOCUMENT_POSITION_PRECEDING | (n & Node.DOCUMENT_POSITION_CONTAINS))) != 0);
        });
    }
    getAllowedTargets(e) {
        return null == this.monitor.getItemType()
            ? Array.from(e.values())
            : Array.from(e).reduce((e, t) => {
                  let [n, i] = t;
                  return this.manager.getMonitor().canDropOnTarget(n) && e.push(i), e;
              }, []);
    }
}
let td = [" ", "Enter"],
    t_ = ["Escape"];
function tf(e) {
    e.preventDefault(), e.stopImmediatePropagation();
}
function th(e, t) {
    return t.includes(e.key);
}
function tp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (!!t && !1 === e.isTrusted) || (e.key?.toLowerCase() === "d" && (e.metaKey || e.ctrlKey) && !e.altKey);
}
class tE {
    static isSetUp;
    manager;
    actions;
    monitor;
    context;
    options;
    sourceNodes;
    sourcePreviewNodes;
    sourcePreviewNodeOptions;
    targetNodes;
    _navigator;
    _previewer;
    _announcer;
    _handlingFirstEvent = !1;
    constructor(e, t, n) {
        (this.manager = e),
            (this.actions = e.getActions()),
            (this.monitor = e.getMonitor()),
            (this.context = t),
            (this.options = n),
            (this.sourceNodes = new Map()),
            (this.sourcePreviewNodes = new Map()),
            (this.sourcePreviewNodeOptions = new Map()),
            (this.targetNodes = new Map()),
            (this._previewer = new to(t.document)),
            (this._announcer = new ta(n?.announcer));
    }
    setup() {
        if (tE.isSetUp) throw Error("Cannot have two Keyboard backends at the same time.");
        (tE.isSetUp = !0),
            (this._handlingFirstEvent = !0),
            this.context.window?.addEventListener("keydown", this.handleGlobalKeyDown, { capture: !0 });
    }
    teardown() {
        (tE.isSetUp = !1),
            this.context.window?.removeEventListener("keydown", this.handleGlobalKeyDown, { capture: !0 }),
            this.endDrag();
    }
    handleGlobalKeyDown = (e) => {
        this.monitor.isDragging() && th(e, t_) && (this.endDrag(e), this._announcer.announceCancel());
    };
    setDndMode(e) {
        this.options?.onDndModeChanged(e);
    }
    profile() {
        return {
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            sourceNodes: this.sourceNodes.size,
        };
    }
    connectDragSource(e, t) {
        let n = this.handleDragStart.bind(this, e);
        return (
            this.sourceNodes.set(e, t),
            t.addEventListener("keydown", n),
            () => {
                this.sourceNodes.delete(e), t.removeEventListener("keydown", n);
            }
        );
    }
    connectDragPreview(e, t, n) {
        return (
            this.sourcePreviewNodeOptions.set(e, n),
            this.sourcePreviewNodes.set(e, t),
            () => {
                this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e);
            }
        );
    }
    connectDropTarget(e, t) {
        return (
            this.targetNodes.set(e, t),
            t.addEventListener("keydown", this.handleDrop),
            (t.tabIndex = Math.max(-1, t.tabIndex)),
            () => {
                this.targetNodes.delete(e), t.removeEventListener("keydown", this.handleDrop);
            }
        );
    }
    getSourceClientOffset = (e) =>
        (function (e) {
            if (null == e) return { x: 0, y: 0 };
            let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
            if (null == t) return { x: 0, y: 0 };
            let { top: n, left: i } = t.getBoundingClientRect();
            return { x: i, y: n };
        })(this.sourceNodes.get(e));
    handleDragStart = (e, t) => {
        if (!tp(t, this._handlingFirstEvent) || ((this._handlingFirstEvent = !1), !this.monitor.canDragSource(e)))
            return;
        if (this.monitor.isDragging()) return void this.actions.publishDragSource();
        tf(t);
        let n = this.sourceNodes.get(e);
        null != n &&
            ((this._navigator = new tc(n, this.targetNodes, this.manager, this._previewer, this._announcer)),
            this._previewer.createDragPreview(this.sourcePreviewNodes.get(e) ?? n),
            this.actions.beginDrag([e], {
                clientOffset: this.getSourceClientOffset(e),
                getSourceClientOffset: this.getSourceClientOffset,
                publishSource: !1,
            }),
            this._previewer.render(this.monitor),
            this.setDndMode(!0),
            this._announcer.announceDrag(n, e));
    };
    handleDrop = (e) => {
        th(e, td) && (this.actions.drop(), this.endDrag(e), this._announcer.announceDrop());
    };
    endDrag(e) {
        null != e && tf(e),
            this._navigator?.disconnect(),
            this._previewer.clear(),
            this.monitor.isDragging() && this.actions.endDrag(),
            this.setDndMode(!1);
    }
}
let tm = P("keydown", (e) => !!tp(e) && (e.preventDefault(), !0)),
    tg = {
        backends: [
            {
                id: "html5",
                backend: function (e, t, n) {
                    return new M(e, t, n);
                },
                transition: P(
                    "mousedown",
                    (e) => -1 === e.type.indexOf("touch") && -1 !== e.type.indexOf("mouse") && ((0, tr.ef)(!1), !0),
                ),
            },
            {
                id: "keyboard",
                backend: (e, t, n) => new tE(e, t, n),
                context: { window, document },
                options: { onDndModeChanged: tr.ef, announcer: ti.O },
                preview: !0,
                transition: tm,
            },
        ],
    };
function tA(e) {
    let { children: t } = e;
    return (0, o.jsx)(tt, { options: tg, children: t });
}

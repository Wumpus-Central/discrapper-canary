"use strict";
r.d(t, { t: () => M });
var n,
    a = {};
function s(e) {
    var t = null;
    return function () {
        return null == t && (t = e()), t;
    };
}
r.r(a), r.d(a, { FILE: () => h, HTML: () => g, TEXT: () => _, URL: () => m });
function i(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var o = (function () {
        var e;
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            i(this, "entered", []), i(this, "isNodeInDocument", void 0), (this.isNodeInDocument = e);
        }
        return (
            (e = [
                {
                    key: "enter",
                    value: function (e) {
                        var t,
                            r,
                            n,
                            a,
                            s,
                            i = this,
                            o = this.entered.length;
                        return (
                            (this.entered =
                                ((t = this.entered.filter(function (t) {
                                    return i.isNodeInDocument(t) && (!t.contains || t.contains(e));
                                })),
                                (r = [e]),
                                (n = new Set()),
                                (a = function (e) {
                                    return n.add(e);
                                }),
                                t.forEach(a),
                                r.forEach(a),
                                (s = []),
                                n.forEach(function (e) {
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
                            r = this.entered.length;
                        return (
                            (this.entered =
                                ((t = this.entered.filter(this.isNodeInDocument)),
                                t.filter(function (t) {
                                    return t !== e;
                                }))),
                            r > 0 && 0 === this.entered.length
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
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(t.prototype, e),
            t
        );
    })(),
    l = s(function () {
        return /firefox/i.test(navigator.userAgent);
    }),
    u = s(function () {
        return !!window.safari;
    });
function c(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var d = (function () {
    var e;
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        c(this, "xs", void 0),
            c(this, "ys", void 0),
            c(this, "c1s", void 0),
            c(this, "c2s", void 0),
            c(this, "c3s", void 0);
        for (var n, a, s, i = e.length, o = [], l = 0; l < i; l++) o.push(l);
        o.sort(function (t, r) {
            return e[t] < e[r] ? -1 : 1;
        });
        for (var u = [], d = [], f = [], p = 0; p < i - 1; p++)
            (n = e[p + 1] - e[p]), (a = r[p + 1] - r[p]), d.push(n), u.push(a), f.push(a / n);
        for (var h = [f[0]], m = 0; m < d.length - 1; m++) {
            var _ = f[m],
                g = f[m + 1];
            if (_ * g <= 0) h.push(0);
            else {
                n = d[m];
                var v = d[m + 1],
                    b = n + v;
                h.push((3 * b) / ((b + v) / _ + (b + n) / g));
            }
        }
        h.push(f[f.length - 1]);
        for (var y = [], E = [], S = 0; S < h.length - 1; S++) {
            s = f[S];
            var T = h[S],
                x = 1 / d[S],
                w = T + h[S + 1] - s - s;
            y.push((s - T - w) * x), E.push(w * x * x);
        }
        (this.xs = e), (this.ys = r), (this.c1s = h), (this.c2s = y), (this.c3s = E);
    }
    return (
        (e = [
            {
                key: "interpolate",
                value: function (e) {
                    var t,
                        r = this.xs,
                        n = this.ys,
                        a = this.c1s,
                        s = this.c2s,
                        i = this.c3s,
                        o = r.length - 1;
                    if (e === r[o]) return n[o];
                    for (var l = 0, u = i.length - 1; l <= u; ) {
                        var c = r[(t = Math.floor(0.5 * (l + u)))];
                        if (c < e) l = t + 1;
                        else {
                            if (!(c > e)) return n[t];
                            u = t - 1;
                        }
                    }
                    var d = e - r[(o = Math.max(0, u))],
                        f = d * d;
                    return n[o] + a[o] * d + s[o] * f + i[o] * d * f;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(t.prototype, e),
        t
    );
})();
function f(e) {
    var t = 1 === e.nodeType ? e : e.parentElement;
    if (!t) return null;
    var r = t.getBoundingClientRect(),
        n = r.top;
    return { x: r.left, y: n };
}
function p(e) {
    return { x: e.clientX, y: e.clientY };
}
var h = "__NATIVE_FILE__",
    m = "__NATIVE_URL__",
    _ = "__NATIVE_TEXT__",
    g = "__NATIVE_HTML__";
function v(e, t, r) {
    var n = t.reduce(function (t, r) {
        return t || e.getData(r);
    }, "");
    return null != n ? n : r;
}
function b(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var y =
    (b((n = {}), h, {
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
    b(n, g, {
        exposeProperties: {
            html: function (e, t) {
                return v(e, t, "");
            },
        },
        matchesTypes: ["Html", "text/html"],
    }),
    b(n, m, {
        exposeProperties: {
            urls: function (e, t) {
                return v(e, t, "").split("\n");
            },
        },
        matchesTypes: ["Url", "text/uri-list"],
    }),
    b(n, _, {
        exposeProperties: {
            text: function (e, t) {
                return v(e, t, "");
            },
        },
        matchesTypes: ["Text", "text/plain"],
    }),
    n);
function E(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var S = (function () {
    var e;
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        E(this, "item", void 0),
            E(this, "config", void 0),
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
                        var r = {};
                        Object.keys(this.config.exposeProperties).forEach(function (n) {
                            r[n] = {
                                value: t.config.exposeProperties[n](e, t.config.matchesTypes),
                                configurable: !0,
                                enumerable: !0,
                            };
                        }),
                            Object.defineProperties(this.item, r);
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
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(t.prototype, e),
        t
    );
})();
function T(e) {
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
function x(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var w = (function () {
    var e;
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        x(this, "ownerDocument", null),
            x(this, "globalContext", void 0),
            x(this, "optionsArgs", void 0),
            (this.globalContext = e),
            (this.optionsArgs = r);
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
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(t.prototype, e),
        t
    );
})();
function C(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? C(Object(r), !0).forEach(function (t) {
                  O(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : C(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function O(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var A = (function () {
        var e;
        function t(e, r, n) {
            var a = this;
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            O(this, "options", void 0),
                O(this, "actions", void 0),
                O(this, "monitor", void 0),
                O(this, "registry", void 0),
                O(this, "enterLeaveCounter", void 0),
                O(this, "sourcePreviewNodes", new Map()),
                O(this, "sourcePreviewNodeOptions", new Map()),
                O(this, "sourceNodes", new Map()),
                O(this, "sourceNodeOptions", new Map()),
                O(this, "dragStartSourceIds", null),
                O(this, "dropTargetIds", []),
                O(this, "dragEnterTargetIds", []),
                O(this, "currentNativeSource", null),
                O(this, "currentNativeHandle", null),
                O(this, "currentDragSourceNode", null),
                O(this, "altKeyPressed", !1),
                O(this, "mouseMoveTimeoutTimer", null),
                O(this, "asyncEndDragFrameId", null),
                O(this, "dragOverTargetIds", null),
                O(this, "getSourceClientOffset", function (e) {
                    var t = a.sourceNodes.get(e);
                    return (t && f(t)) || null;
                }),
                O(this, "endDragNativeItem", function () {
                    a.isDraggingNativeItem() &&
                        (a.actions.endDrag(),
                        a.currentNativeHandle && a.registry.removeSource(a.currentNativeHandle),
                        (a.currentNativeHandle = null),
                        (a.currentNativeSource = null));
                }),
                O(this, "isNodeInDocument", function (e) {
                    return !!(e && a.document && a.document.body && a.document.body.contains(e));
                }),
                O(this, "endDragIfSourceWasRemovedFromDOM", function () {
                    var e = a.currentDragSourceNode;
                    !(null == e || a.isNodeInDocument(e)) &&
                        a.clearCurrentDragSourceNode() &&
                        a.monitor.isDragging() &&
                        a.actions.endDrag();
                }),
                O(this, "handleTopDragStartCapture", function () {
                    a.clearCurrentDragSourceNode(), (a.dragStartSourceIds = []);
                }),
                O(this, "handleTopDragStart", function (e) {
                    if (!e.defaultPrevented) {
                        var t = a.dragStartSourceIds;
                        a.dragStartSourceIds = null;
                        var r = p(e);
                        a.monitor.isDragging() && a.actions.endDrag(),
                            a.actions.beginDrag(t || [], {
                                publishSource: !1,
                                getSourceClientOffset: a.getSourceClientOffset,
                                clientOffset: r,
                            });
                        var n = e.dataTransfer,
                            s = T(n);
                        if (a.monitor.isDragging()) {
                            if (n && "function" == typeof n.setDragImage) {
                                var i = a.monitor.getSourceId(),
                                    o = a.sourceNodes.get(i),
                                    c = a.sourcePreviewNodes.get(i) || o;
                                if (c) {
                                    var h,
                                        m,
                                        _,
                                        g,
                                        v,
                                        b,
                                        y,
                                        E,
                                        S,
                                        x,
                                        w,
                                        C,
                                        D,
                                        O,
                                        A,
                                        M,
                                        R,
                                        k,
                                        N = a.getCurrentSourcePreviewNodeOptions(),
                                        L = N.anchorX,
                                        I = N.anchorY,
                                        P = N.offsetX,
                                        F = N.offsetY,
                                        B =
                                            ((h = { anchorX: L, anchorY: I }),
                                            (m = { offsetX: P, offsetY: F }),
                                            (v = f(
                                                (g =
                                                    "IMG" === c.nodeName &&
                                                    (l() || !(null != (_ = document.documentElement) && _.contains(c))))
                                                    ? o
                                                    : c,
                                            )),
                                            (b = { x: r.x - v.x, y: r.y - v.y }),
                                            (y = o.offsetWidth),
                                            (E = o.offsetHeight),
                                            (S = h.anchorX),
                                            (x = h.anchorY),
                                            (O = ((w = g ? c.width : y),
                                            (C = g ? c.height : E),
                                            u() &&
                                                g &&
                                                ((C /= window.devicePixelRatio), (w /= window.devicePixelRatio)),
                                            (D = { dragPreviewWidth: w, dragPreviewHeight: C })).dragPreviewWidth),
                                            (A = D.dragPreviewHeight),
                                            (M = m.offsetX),
                                            (R = m.offsetY),
                                            {
                                                x:
                                                    0 === M || M
                                                        ? M
                                                        : new d(
                                                              [0, 0.5, 1],
                                                              [b.x, (b.x / y) * O, b.x + O - y],
                                                          ).interpolate(S),
                                                y:
                                                    0 === R || R
                                                        ? R
                                                        : ((k = new d(
                                                              [0, 0.5, 1],
                                                              [b.y, (b.y / E) * A, b.y + A - E],
                                                          ).interpolate(x)),
                                                          u() && g && (k += (window.devicePixelRatio - 1) * A),
                                                          k),
                                            });
                                    n.setDragImage(c, B.x, B.y);
                                }
                            }
                            try {
                                null == n || n.setData("application/json", {});
                            } catch (e) {}
                            a.setCurrentDragSourceNode(e.target),
                                a.getCurrentSourcePreviewNodeOptions().captureDraggingState
                                    ? a.actions.publishDragSource()
                                    : setTimeout(function () {
                                          return a.actions.publishDragSource();
                                      }, 0);
                        } else if (s) a.beginDragNativeItem(s);
                        else {
                            if (
                                n &&
                                !n.types &&
                                ((e.target && !e.target.hasAttribute) || !e.target.hasAttribute("draggable"))
                            )
                                return;
                            e.preventDefault();
                        }
                    }
                }),
                O(this, "handleTopDragEndCapture", function () {
                    a.clearCurrentDragSourceNode() && a.monitor.isDragging() && a.actions.endDrag();
                }),
                O(this, "handleTopDragEnterCapture", function (e) {
                    if (
                        ((a.dragEnterTargetIds = []), !(!a.enterLeaveCounter.enter(e.target) || a.monitor.isDragging()))
                    ) {
                        var t = e.dataTransfer,
                            r = T(t);
                        r && a.beginDragNativeItem(r, t);
                    }
                }),
                O(this, "handleTopDragEnter", function (e) {
                    var t = a.dragEnterTargetIds;
                    (a.dragEnterTargetIds = []),
                        a.monitor.isDragging() &&
                            ((a.altKeyPressed = e.altKey),
                            t.length > 0 && a.actions.hover(t, { clientOffset: p(e) }),
                            t.some(function (e) {
                                return a.monitor.canDropOnTarget(e);
                            }) &&
                                (e.preventDefault(),
                                e.dataTransfer && (e.dataTransfer.dropEffect = a.getCurrentDropEffect())));
                }),
                O(this, "handleTopDragOverCapture", function () {
                    a.dragOverTargetIds = [];
                }),
                O(this, "handleTopDragOver", function (e) {
                    var t = a.dragOverTargetIds;
                    if (((a.dragOverTargetIds = []), !a.monitor.isDragging())) {
                        e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
                        return;
                    }
                    (a.altKeyPressed = e.altKey),
                        a.actions.hover(t || [], { clientOffset: p(e) }),
                        (t || []).some(function (e) {
                            return a.monitor.canDropOnTarget(e);
                        })
                            ? (e.preventDefault(),
                              e.dataTransfer && (e.dataTransfer.dropEffect = a.getCurrentDropEffect()))
                            : a.isDraggingNativeItem()
                              ? e.preventDefault()
                              : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
                }),
                O(this, "handleTopDragLeaveCapture", function (e) {
                    a.isDraggingNativeItem() && e.preventDefault(),
                        a.enterLeaveCounter.leave(e.target) &&
                            a.isDraggingNativeItem() &&
                            setTimeout(function () {
                                return a.endDragNativeItem();
                            }, 0);
                }),
                O(this, "handleTopDropCapture", function (e) {
                    if (((a.dropTargetIds = []), a.isDraggingNativeItem())) {
                        var t;
                        e.preventDefault(), null == (t = a.currentNativeSource) || t.loadDataTransfer(e.dataTransfer);
                    } else T(e.dataTransfer) && e.preventDefault();
                    a.enterLeaveCounter.reset();
                }),
                O(this, "handleTopDrop", function (e) {
                    var t = a.dropTargetIds;
                    (a.dropTargetIds = []),
                        a.actions.hover(t, { clientOffset: p(e) }),
                        a.actions.drop({ dropEffect: a.getCurrentDropEffect() }),
                        a.isDraggingNativeItem()
                            ? a.endDragNativeItem()
                            : a.monitor.isDragging() && a.actions.endDrag();
                }),
                O(this, "handleSelectStart", function (e) {
                    var t = e.target;
                    "function" != typeof t.dragDrop ||
                        "INPUT" === t.tagName ||
                        "SELECT" === t.tagName ||
                        "TEXTAREA" === t.tagName ||
                        t.isContentEditable ||
                        (e.preventDefault(), t.dragDrop());
                }),
                (this.options = new w(r, n)),
                (this.actions = e.getActions()),
                (this.monitor = e.getMonitor()),
                (this.registry = e.getRegistry()),
                (this.enterLeaveCounter = new o(this.isNodeInDocument));
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
                            if (e.__isReactDndBackendSetUp)
                                throw Error("Cannot have two HTML5 backends at the same time.");
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
                    value: function (e, t, r) {
                        var n = this;
                        return (
                            this.sourcePreviewNodeOptions.set(e, r),
                            this.sourcePreviewNodes.set(e, t),
                            function () {
                                n.sourcePreviewNodes.delete(e), n.sourcePreviewNodeOptions.delete(e);
                            }
                        );
                    },
                },
                {
                    key: "connectDragSource",
                    value: function (e, t, r) {
                        var n = this;
                        this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, r);
                        var a = function (t) {
                                return n.handleDragStart(t, e);
                            },
                            s = function (e) {
                                return n.handleSelectStart(e);
                            };
                        return (
                            t.setAttribute("draggable", "true"),
                            t.addEventListener("dragstart", a),
                            t.addEventListener("selectstart", s),
                            function () {
                                n.sourceNodes.delete(e),
                                    n.sourceNodeOptions.delete(e),
                                    t.removeEventListener("dragstart", a),
                                    t.removeEventListener("selectstart", s),
                                    t.setAttribute("draggable", "false");
                            }
                        );
                    },
                },
                {
                    key: "connectDropTarget",
                    value: function (e, t) {
                        var r = this,
                            n = function (t) {
                                return r.handleDragEnter(t, e);
                            },
                            a = function (t) {
                                return r.handleDragOver(t, e);
                            },
                            s = function (t) {
                                return r.handleDrop(t, e);
                            };
                        return (
                            t.addEventListener("dragenter", n),
                            t.addEventListener("dragover", a),
                            t.addEventListener("drop", s),
                            function () {
                                t.removeEventListener("dragenter", n),
                                    t.removeEventListener("dragover", a),
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
                        return D({ dropEffect: this.altKeyPressed ? "copy" : "move" }, t || {});
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
                        return D(
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
                        var r;
                        this.clearCurrentDragSourceNode(),
                            (this.currentNativeSource = ((r = new S(y[e])).loadDataTransfer(t), r)),
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
                            (this.dragStartSourceIds || (this.dragStartSourceIds = []),
                            this.dragStartSourceIds.unshift(t));
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
                        null === this.dragOverTargetIds && (this.dragOverTargetIds = []),
                            this.dragOverTargetIds.unshift(t);
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
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(t.prototype, e),
            t
        );
    })(),
    M = function (e, t, r) {
        return new A(e, t, r);
    };

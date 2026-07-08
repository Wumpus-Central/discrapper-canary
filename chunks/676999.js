"use strict";
r.d(t, { t: () => O });
var n,
    i = {};
function o(e) {
    var t = null;
    return function () {
        return null == t && (t = e()), t;
    };
}
r.r(i), r.d(i, { FILE: () => h, HTML: () => v, TEXT: () => g, URL: () => m });
function a(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var s = (function () {
        var e;
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            a(this, "entered", []), a(this, "isNodeInDocument", void 0), (this.isNodeInDocument = e);
        }
        return (
            (e = [
                {
                    key: "enter",
                    value: function (e) {
                        var t,
                            r,
                            n,
                            i,
                            o,
                            a = this,
                            s = this.entered.length;
                        return (
                            (this.entered =
                                ((t = this.entered.filter(function (t) {
                                    return a.isNodeInDocument(t) && (!t.contains || t.contains(e));
                                })),
                                (r = [e]),
                                (n = new Set()),
                                (i = function (e) {
                                    return n.add(e);
                                }),
                                t.forEach(i),
                                r.forEach(i),
                                (o = []),
                                n.forEach(function (e) {
                                    return o.push(e);
                                }),
                                o)),
                            0 === s && this.entered.length > 0
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
    l = o(function () {
        return /firefox/i.test(navigator.userAgent);
    }),
    u = o(function () {
        return !!window.safari;
    });
function c(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var f = (function () {
    var e;
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        c(this, "xs", void 0),
            c(this, "ys", void 0),
            c(this, "c1s", void 0),
            c(this, "c2s", void 0),
            c(this, "c3s", void 0);
        for (var n, i, o, a = e.length, s = [], l = 0; l < a; l++) s.push(l);
        s.sort(function (t, r) {
            return e[t] < e[r] ? -1 : 1;
        });
        for (var u = [], f = [], d = [], p = 0; p < a - 1; p++)
            (n = e[p + 1] - e[p]), (i = r[p + 1] - r[p]), f.push(n), u.push(i), d.push(i / n);
        for (var h = [d[0]], m = 0; m < f.length - 1; m++) {
            var g = d[m],
                v = d[m + 1];
            if (g * v <= 0) h.push(0);
            else {
                n = f[m];
                var y = f[m + 1],
                    b = n + y;
                h.push((3 * b) / ((b + y) / g + (b + n) / v));
            }
        }
        h.push(d[d.length - 1]);
        for (var w = [], _ = [], x = 0; x < h.length - 1; x++) {
            o = d[x];
            var E = h[x],
                S = 1 / f[x],
                k = E + h[x + 1] - o - o;
            w.push((o - E - k) * S), _.push(k * S * S);
        }
        (this.xs = e), (this.ys = r), (this.c1s = h), (this.c2s = w), (this.c3s = _);
    }
    return (
        (e = [
            {
                key: "interpolate",
                value: function (e) {
                    var t,
                        r = this.xs,
                        n = this.ys,
                        i = this.c1s,
                        o = this.c2s,
                        a = this.c3s,
                        s = r.length - 1;
                    if (e === r[s]) return n[s];
                    for (var l = 0, u = a.length - 1; l <= u; ) {
                        var c = r[(t = Math.floor(0.5 * (l + u)))];
                        if (c < e) l = t + 1;
                        else {
                            if (!(c > e)) return n[t];
                            u = t - 1;
                        }
                    }
                    var f = e - r[(s = Math.max(0, u))],
                        d = f * f;
                    return n[s] + i[s] * f + o[s] * d + a[s] * f * d;
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
function d(e) {
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
    g = "__NATIVE_TEXT__",
    v = "__NATIVE_HTML__";
function y(e, t, r) {
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
var w =
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
    b(n, v, {
        exposeProperties: {
            html: function (e, t) {
                return y(e, t, "");
            },
        },
        matchesTypes: ["Html", "text/html"],
    }),
    b(n, m, {
        exposeProperties: {
            urls: function (e, t) {
                return y(e, t, "").split("\n");
            },
        },
        matchesTypes: ["Url", "text/uri-list"],
    }),
    b(n, g, {
        exposeProperties: {
            text: function (e, t) {
                return y(e, t, "");
            },
        },
        matchesTypes: ["Text", "text/plain"],
    }),
    n);
function _(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var x = (function () {
    var e;
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        _(this, "item", void 0),
            _(this, "config", void 0),
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
function E(e) {
    if (!e) return null;
    var t = Array.prototype.slice.call(e.types || []);
    return (
        Object.keys(w).filter(function (e) {
            return w[e].matchesTypes.some(function (e) {
                return t.indexOf(e) > -1;
            });
        })[0] || null
    );
}
function S(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var k = (function () {
    var e;
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        S(this, "ownerDocument", null),
            S(this, "globalContext", void 0),
            S(this, "optionsArgs", void 0),
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
function T(e, t) {
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
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? T(Object(r), !0).forEach(function (t) {
                  P(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : T(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function P(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var A = (function () {
        var e;
        function t(e, r, n) {
            var i = this;
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            P(this, "options", void 0),
                P(this, "actions", void 0),
                P(this, "monitor", void 0),
                P(this, "registry", void 0),
                P(this, "enterLeaveCounter", void 0),
                P(this, "sourcePreviewNodes", new Map()),
                P(this, "sourcePreviewNodeOptions", new Map()),
                P(this, "sourceNodes", new Map()),
                P(this, "sourceNodeOptions", new Map()),
                P(this, "dragStartSourceIds", null),
                P(this, "dropTargetIds", []),
                P(this, "dragEnterTargetIds", []),
                P(this, "currentNativeSource", null),
                P(this, "currentNativeHandle", null),
                P(this, "currentDragSourceNode", null),
                P(this, "altKeyPressed", !1),
                P(this, "mouseMoveTimeoutTimer", null),
                P(this, "asyncEndDragFrameId", null),
                P(this, "dragOverTargetIds", null),
                P(this, "getSourceClientOffset", function (e) {
                    var t = i.sourceNodes.get(e);
                    return (t && d(t)) || null;
                }),
                P(this, "endDragNativeItem", function () {
                    i.isDraggingNativeItem() &&
                        (i.actions.endDrag(),
                        i.currentNativeHandle && i.registry.removeSource(i.currentNativeHandle),
                        (i.currentNativeHandle = null),
                        (i.currentNativeSource = null));
                }),
                P(this, "isNodeInDocument", function (e) {
                    return !!(e && i.document && i.document.body && i.document.body.contains(e));
                }),
                P(this, "endDragIfSourceWasRemovedFromDOM", function () {
                    var e = i.currentDragSourceNode;
                    !(null == e || i.isNodeInDocument(e)) &&
                        i.clearCurrentDragSourceNode() &&
                        i.monitor.isDragging() &&
                        i.actions.endDrag();
                }),
                P(this, "handleTopDragStartCapture", function () {
                    i.clearCurrentDragSourceNode(), (i.dragStartSourceIds = []);
                }),
                P(this, "handleTopDragStart", function (e) {
                    if (!e.defaultPrevented) {
                        var t = i.dragStartSourceIds;
                        i.dragStartSourceIds = null;
                        var r = p(e);
                        i.monitor.isDragging() && i.actions.endDrag(),
                            i.actions.beginDrag(t || [], {
                                publishSource: !1,
                                getSourceClientOffset: i.getSourceClientOffset,
                                clientOffset: r,
                            });
                        var n = e.dataTransfer,
                            o = E(n);
                        if (i.monitor.isDragging()) {
                            if (n && "function" == typeof n.setDragImage) {
                                var a = i.monitor.getSourceId(),
                                    s = i.sourceNodes.get(a),
                                    c = i.sourcePreviewNodes.get(a) || s;
                                if (c) {
                                    var h,
                                        m,
                                        g,
                                        v,
                                        y,
                                        b,
                                        w,
                                        _,
                                        x,
                                        S,
                                        k,
                                        T,
                                        C,
                                        P,
                                        A,
                                        O,
                                        M,
                                        I,
                                        R = i.getCurrentSourcePreviewNodeOptions(),
                                        D = R.anchorX,
                                        L = R.anchorY,
                                        F = R.offsetX,
                                        N = R.offsetY,
                                        j =
                                            ((h = { anchorX: D, anchorY: L }),
                                            (m = { offsetX: F, offsetY: N }),
                                            (y = d(
                                                (v =
                                                    "IMG" === c.nodeName &&
                                                    (l() || !(null != (g = document.documentElement) && g.contains(c))))
                                                    ? s
                                                    : c,
                                            )),
                                            (b = { x: r.x - y.x, y: r.y - y.y }),
                                            (w = s.offsetWidth),
                                            (_ = s.offsetHeight),
                                            (x = h.anchorX),
                                            (S = h.anchorY),
                                            (P = ((k = v ? c.width : w),
                                            (T = v ? c.height : _),
                                            u() &&
                                                v &&
                                                ((T /= window.devicePixelRatio), (k /= window.devicePixelRatio)),
                                            (C = { dragPreviewWidth: k, dragPreviewHeight: T })).dragPreviewWidth),
                                            (A = C.dragPreviewHeight),
                                            (O = m.offsetX),
                                            (M = m.offsetY),
                                            {
                                                x:
                                                    0 === O || O
                                                        ? O
                                                        : new f(
                                                              [0, 0.5, 1],
                                                              [b.x, (b.x / w) * P, b.x + P - w],
                                                          ).interpolate(x),
                                                y:
                                                    0 === M || M
                                                        ? M
                                                        : ((I = new f(
                                                              [0, 0.5, 1],
                                                              [b.y, (b.y / _) * A, b.y + A - _],
                                                          ).interpolate(S)),
                                                          u() && v && (I += (window.devicePixelRatio - 1) * A),
                                                          I),
                                            });
                                    n.setDragImage(c, j.x, j.y);
                                }
                            }
                            try {
                                null == n || n.setData("application/json", {});
                            } catch (e) {}
                            i.setCurrentDragSourceNode(e.target),
                                i.getCurrentSourcePreviewNodeOptions().captureDraggingState
                                    ? i.actions.publishDragSource()
                                    : setTimeout(function () {
                                          return i.actions.publishDragSource();
                                      }, 0);
                        } else if (o) i.beginDragNativeItem(o);
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
                P(this, "handleTopDragEndCapture", function () {
                    i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
                }),
                P(this, "handleTopDragEnterCapture", function (e) {
                    if (
                        ((i.dragEnterTargetIds = []), !(!i.enterLeaveCounter.enter(e.target) || i.monitor.isDragging()))
                    ) {
                        var t = e.dataTransfer,
                            r = E(t);
                        r && i.beginDragNativeItem(r, t);
                    }
                }),
                P(this, "handleTopDragEnter", function (e) {
                    var t = i.dragEnterTargetIds;
                    (i.dragEnterTargetIds = []),
                        i.monitor.isDragging() &&
                            ((i.altKeyPressed = e.altKey),
                            t.length > 0 && i.actions.hover(t, { clientOffset: p(e) }),
                            t.some(function (e) {
                                return i.monitor.canDropOnTarget(e);
                            }) &&
                                (e.preventDefault(),
                                e.dataTransfer && (e.dataTransfer.dropEffect = i.getCurrentDropEffect())));
                }),
                P(this, "handleTopDragOverCapture", function () {
                    i.dragOverTargetIds = [];
                }),
                P(this, "handleTopDragOver", function (e) {
                    var t = i.dragOverTargetIds;
                    if (((i.dragOverTargetIds = []), !i.monitor.isDragging())) {
                        e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
                        return;
                    }
                    (i.altKeyPressed = e.altKey),
                        i.actions.hover(t || [], { clientOffset: p(e) }),
                        (t || []).some(function (e) {
                            return i.monitor.canDropOnTarget(e);
                        })
                            ? (e.preventDefault(),
                              e.dataTransfer && (e.dataTransfer.dropEffect = i.getCurrentDropEffect()))
                            : i.isDraggingNativeItem()
                              ? e.preventDefault()
                              : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
                }),
                P(this, "handleTopDragLeaveCapture", function (e) {
                    i.isDraggingNativeItem() && e.preventDefault(),
                        i.enterLeaveCounter.leave(e.target) &&
                            i.isDraggingNativeItem() &&
                            setTimeout(function () {
                                return i.endDragNativeItem();
                            }, 0);
                }),
                P(this, "handleTopDropCapture", function (e) {
                    if (((i.dropTargetIds = []), i.isDraggingNativeItem())) {
                        var t;
                        e.preventDefault(), null == (t = i.currentNativeSource) || t.loadDataTransfer(e.dataTransfer);
                    } else E(e.dataTransfer) && e.preventDefault();
                    i.enterLeaveCounter.reset();
                }),
                P(this, "handleTopDrop", function (e) {
                    var t = i.dropTargetIds;
                    (i.dropTargetIds = []),
                        i.actions.hover(t, { clientOffset: p(e) }),
                        i.actions.drop({ dropEffect: i.getCurrentDropEffect() }),
                        i.isDraggingNativeItem()
                            ? i.endDragNativeItem()
                            : i.monitor.isDragging() && i.actions.endDrag();
                }),
                P(this, "handleSelectStart", function (e) {
                    var t = e.target;
                    "function" != typeof t.dragDrop ||
                        "INPUT" === t.tagName ||
                        "SELECT" === t.tagName ||
                        "TEXTAREA" === t.tagName ||
                        t.isContentEditable ||
                        (e.preventDefault(), t.dragDrop());
                }),
                (this.options = new k(r, n)),
                (this.actions = e.getActions()),
                (this.monitor = e.getMonitor()),
                (this.registry = e.getRegistry()),
                (this.enterLeaveCounter = new s(this.isNodeInDocument));
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
                        var i = function (t) {
                                return n.handleDragStart(t, e);
                            },
                            o = function (e) {
                                return n.handleSelectStart(e);
                            };
                        return (
                            t.setAttribute("draggable", "true"),
                            t.addEventListener("dragstart", i),
                            t.addEventListener("selectstart", o),
                            function () {
                                n.sourceNodes.delete(e),
                                    n.sourceNodeOptions.delete(e),
                                    t.removeEventListener("dragstart", i),
                                    t.removeEventListener("selectstart", o),
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
                            i = function (t) {
                                return r.handleDragOver(t, e);
                            },
                            o = function (t) {
                                return r.handleDrop(t, e);
                            };
                        return (
                            t.addEventListener("dragenter", n),
                            t.addEventListener("dragover", i),
                            t.addEventListener("drop", o),
                            function () {
                                t.removeEventListener("dragenter", n),
                                    t.removeEventListener("dragover", i),
                                    t.removeEventListener("drop", o);
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
                        return C({ dropEffect: this.altKeyPressed ? "copy" : "move" }, t || {});
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
                        return C(
                            { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
                            this.sourcePreviewNodeOptions.get(e) || {},
                        );
                    },
                },
                {
                    key: "isDraggingNativeItem",
                    value: function () {
                        var e = this.monitor.getItemType();
                        return Object.keys(i).some(function (t) {
                            return i[t] === e;
                        });
                    },
                },
                {
                    key: "beginDragNativeItem",
                    value: function (e, t) {
                        var r;
                        this.clearCurrentDragSourceNode(),
                            (this.currentNativeSource = ((r = new x(w[e])).loadDataTransfer(t), r)),
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
    O = function (e, t, r) {
        return new A(e, t, r);
    };

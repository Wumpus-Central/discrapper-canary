"use strict";
r.d(t, { t: () => C });
var n,
    s = {};
function a(e) {
    var t = null;
    return function () {
        return null == t && (t = e()), t;
    };
}
r.r(s), r.d(s, { FILE: () => h, HTML: () => g, TEXT: () => v, URL: () => m });
function o(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var i = (function () {
        var e;
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            o(this, "entered", []), o(this, "isNodeInDocument", void 0), (this.isNodeInDocument = e);
        }
        return (
            (e = [
                {
                    key: "enter",
                    value: function (e) {
                        var t,
                            r,
                            n,
                            s,
                            a,
                            o = this,
                            i = this.entered.length;
                        return (
                            (this.entered =
                                ((t = this.entered.filter(function (t) {
                                    return o.isNodeInDocument(t) && (!t.contains || t.contains(e));
                                })),
                                (r = [e]),
                                (n = new Set()),
                                (s = function (e) {
                                    return n.add(e);
                                }),
                                t.forEach(s),
                                r.forEach(s),
                                (a = []),
                                n.forEach(function (e) {
                                    return a.push(e);
                                }),
                                a)),
                            0 === i && this.entered.length > 0
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
    u = a(function () {
        return /firefox/i.test(navigator.userAgent);
    }),
    c = a(function () {
        return !!window.safari;
    });
function l(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var d = (function () {
    var e;
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        l(this, "xs", void 0),
            l(this, "ys", void 0),
            l(this, "c1s", void 0),
            l(this, "c2s", void 0),
            l(this, "c3s", void 0);
        for (var n, s, a, o = e.length, i = [], u = 0; u < o; u++) i.push(u);
        i.sort(function (t, r) {
            return e[t] < e[r] ? -1 : 1;
        });
        for (var c = [], d = [], f = [], p = 0; p < o - 1; p++)
            (n = e[p + 1] - e[p]), (s = r[p + 1] - r[p]), d.push(n), c.push(s), f.push(s / n);
        for (var h = [f[0]], m = 0; m < d.length - 1; m++) {
            var v = f[m],
                g = f[m + 1];
            if (v * g <= 0) h.push(0);
            else {
                n = d[m];
                var y = d[m + 1],
                    b = n + y;
                h.push((3 * b) / ((b + y) / v + (b + n) / g));
            }
        }
        h.push(f[f.length - 1]);
        for (var _ = [], x = [], w = 0; w < h.length - 1; w++) {
            a = f[w];
            var k = h[w],
                M = 1 / d[w],
                S = k + h[w + 1] - a - a;
            _.push((a - k - S) * M), x.push(S * M * M);
        }
        (this.xs = e), (this.ys = r), (this.c1s = h), (this.c2s = _), (this.c3s = x);
    }
    return (
        (e = [
            {
                key: "interpolate",
                value: function (e) {
                    var t,
                        r = this.xs,
                        n = this.ys,
                        s = this.c1s,
                        a = this.c2s,
                        o = this.c3s,
                        i = r.length - 1;
                    if (e === r[i]) return n[i];
                    for (var u = 0, c = o.length - 1; u <= c; ) {
                        var l = r[(t = Math.floor(0.5 * (u + c)))];
                        if (l < e) u = t + 1;
                        else {
                            if (!(l > e)) return n[t];
                            c = t - 1;
                        }
                    }
                    var d = e - r[(i = Math.max(0, c))],
                        f = d * d;
                    return n[i] + s[i] * d + a[i] * f + o[i] * d * f;
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
    v = "__NATIVE_TEXT__",
    g = "__NATIVE_HTML__";
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
var _ =
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
    b(n, v, {
        exposeProperties: {
            text: function (e, t) {
                return y(e, t, "");
            },
        },
        matchesTypes: ["Text", "text/plain"],
    }),
    n);
function x(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var w = (function () {
    var e;
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        x(this, "item", void 0),
            x(this, "config", void 0),
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
function k(e) {
    if (!e) return null;
    var t = Array.prototype.slice.call(e.types || []);
    return (
        Object.keys(_).filter(function (e) {
            return _[e].matchesTypes.some(function (e) {
                return t.indexOf(e) > -1;
            });
        })[0] || null
    );
}
function M(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var S = (function () {
    var e;
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        M(this, "ownerDocument", null),
            M(this, "globalContext", void 0),
            M(this, "optionsArgs", void 0),
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
function L(e, t) {
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? L(Object(r), !0).forEach(function (t) {
                  E(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : L(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function E(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var D = (function () {
        var e;
        function t(e, r, n) {
            var s = this;
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            E(this, "options", void 0),
                E(this, "actions", void 0),
                E(this, "monitor", void 0),
                E(this, "registry", void 0),
                E(this, "enterLeaveCounter", void 0),
                E(this, "sourcePreviewNodes", new Map()),
                E(this, "sourcePreviewNodeOptions", new Map()),
                E(this, "sourceNodes", new Map()),
                E(this, "sourceNodeOptions", new Map()),
                E(this, "dragStartSourceIds", null),
                E(this, "dropTargetIds", []),
                E(this, "dragEnterTargetIds", []),
                E(this, "currentNativeSource", null),
                E(this, "currentNativeHandle", null),
                E(this, "currentDragSourceNode", null),
                E(this, "altKeyPressed", !1),
                E(this, "mouseMoveTimeoutTimer", null),
                E(this, "asyncEndDragFrameId", null),
                E(this, "dragOverTargetIds", null),
                E(this, "getSourceClientOffset", function (e) {
                    var t = s.sourceNodes.get(e);
                    return (t && f(t)) || null;
                }),
                E(this, "endDragNativeItem", function () {
                    s.isDraggingNativeItem() &&
                        (s.actions.endDrag(),
                        s.currentNativeHandle && s.registry.removeSource(s.currentNativeHandle),
                        (s.currentNativeHandle = null),
                        (s.currentNativeSource = null));
                }),
                E(this, "isNodeInDocument", function (e) {
                    return !!(e && s.document && s.document.body && s.document.body.contains(e));
                }),
                E(this, "endDragIfSourceWasRemovedFromDOM", function () {
                    var e = s.currentDragSourceNode;
                    !(null == e || s.isNodeInDocument(e)) &&
                        s.clearCurrentDragSourceNode() &&
                        s.monitor.isDragging() &&
                        s.actions.endDrag();
                }),
                E(this, "handleTopDragStartCapture", function () {
                    s.clearCurrentDragSourceNode(), (s.dragStartSourceIds = []);
                }),
                E(this, "handleTopDragStart", function (e) {
                    if (!e.defaultPrevented) {
                        var t = s.dragStartSourceIds;
                        s.dragStartSourceIds = null;
                        var r = p(e);
                        s.monitor.isDragging() && s.actions.endDrag(),
                            s.actions.beginDrag(t || [], {
                                publishSource: !1,
                                getSourceClientOffset: s.getSourceClientOffset,
                                clientOffset: r,
                            });
                        var n = e.dataTransfer,
                            a = k(n);
                        if (s.monitor.isDragging()) {
                            if (n && "function" == typeof n.setDragImage) {
                                var o = s.monitor.getSourceId(),
                                    i = s.sourceNodes.get(o),
                                    l = s.sourcePreviewNodes.get(o) || i;
                                if (l) {
                                    var h,
                                        m,
                                        v,
                                        g,
                                        y,
                                        b,
                                        _,
                                        x,
                                        w,
                                        M,
                                        S,
                                        L,
                                        T,
                                        E,
                                        D,
                                        C,
                                        O,
                                        P,
                                        A = s.getCurrentSourcePreviewNodeOptions(),
                                        j = A.anchorX,
                                        R = A.anchorY,
                                        I = A.offsetX,
                                        Y = A.offsetY,
                                        N =
                                            ((h = { anchorX: j, anchorY: R }),
                                            (m = { offsetX: I, offsetY: Y }),
                                            (y = f(
                                                (g =
                                                    "IMG" === l.nodeName &&
                                                    (u() || !(null != (v = document.documentElement) && v.contains(l))))
                                                    ? i
                                                    : l,
                                            )),
                                            (b = { x: r.x - y.x, y: r.y - y.y }),
                                            (_ = i.offsetWidth),
                                            (x = i.offsetHeight),
                                            (w = h.anchorX),
                                            (M = h.anchorY),
                                            (E = ((S = g ? l.width : _),
                                            (L = g ? l.height : x),
                                            c() &&
                                                g &&
                                                ((L /= window.devicePixelRatio), (S /= window.devicePixelRatio)),
                                            (T = { dragPreviewWidth: S, dragPreviewHeight: L })).dragPreviewWidth),
                                            (D = T.dragPreviewHeight),
                                            (C = m.offsetX),
                                            (O = m.offsetY),
                                            {
                                                x:
                                                    0 === C || C
                                                        ? C
                                                        : new d(
                                                              [0, 0.5, 1],
                                                              [b.x, (b.x / _) * E, b.x + E - _],
                                                          ).interpolate(w),
                                                y:
                                                    0 === O || O
                                                        ? O
                                                        : ((P = new d(
                                                              [0, 0.5, 1],
                                                              [b.y, (b.y / x) * D, b.y + D - x],
                                                          ).interpolate(M)),
                                                          c() && g && (P += (window.devicePixelRatio - 1) * D),
                                                          P),
                                            });
                                    n.setDragImage(l, N.x, N.y);
                                }
                            }
                            try {
                                null == n || n.setData("application/json", {});
                            } catch (e) {}
                            s.setCurrentDragSourceNode(e.target),
                                s.getCurrentSourcePreviewNodeOptions().captureDraggingState
                                    ? s.actions.publishDragSource()
                                    : setTimeout(function () {
                                          return s.actions.publishDragSource();
                                      }, 0);
                        } else if (a) s.beginDragNativeItem(a);
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
                E(this, "handleTopDragEndCapture", function () {
                    s.clearCurrentDragSourceNode() && s.monitor.isDragging() && s.actions.endDrag();
                }),
                E(this, "handleTopDragEnterCapture", function (e) {
                    if (
                        ((s.dragEnterTargetIds = []), !(!s.enterLeaveCounter.enter(e.target) || s.monitor.isDragging()))
                    ) {
                        var t = e.dataTransfer,
                            r = k(t);
                        r && s.beginDragNativeItem(r, t);
                    }
                }),
                E(this, "handleTopDragEnter", function (e) {
                    var t = s.dragEnterTargetIds;
                    (s.dragEnterTargetIds = []),
                        s.monitor.isDragging() &&
                            ((s.altKeyPressed = e.altKey),
                            t.length > 0 && s.actions.hover(t, { clientOffset: p(e) }),
                            t.some(function (e) {
                                return s.monitor.canDropOnTarget(e);
                            }) &&
                                (e.preventDefault(),
                                e.dataTransfer && (e.dataTransfer.dropEffect = s.getCurrentDropEffect())));
                }),
                E(this, "handleTopDragOverCapture", function () {
                    s.dragOverTargetIds = [];
                }),
                E(this, "handleTopDragOver", function (e) {
                    var t = s.dragOverTargetIds;
                    if (((s.dragOverTargetIds = []), !s.monitor.isDragging())) {
                        e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
                        return;
                    }
                    (s.altKeyPressed = e.altKey),
                        s.actions.hover(t || [], { clientOffset: p(e) }),
                        (t || []).some(function (e) {
                            return s.monitor.canDropOnTarget(e);
                        })
                            ? (e.preventDefault(),
                              e.dataTransfer && (e.dataTransfer.dropEffect = s.getCurrentDropEffect()))
                            : s.isDraggingNativeItem()
                              ? e.preventDefault()
                              : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
                }),
                E(this, "handleTopDragLeaveCapture", function (e) {
                    s.isDraggingNativeItem() && e.preventDefault(),
                        s.enterLeaveCounter.leave(e.target) &&
                            s.isDraggingNativeItem() &&
                            setTimeout(function () {
                                return s.endDragNativeItem();
                            }, 0);
                }),
                E(this, "handleTopDropCapture", function (e) {
                    if (((s.dropTargetIds = []), s.isDraggingNativeItem())) {
                        var t;
                        e.preventDefault(), null == (t = s.currentNativeSource) || t.loadDataTransfer(e.dataTransfer);
                    } else k(e.dataTransfer) && e.preventDefault();
                    s.enterLeaveCounter.reset();
                }),
                E(this, "handleTopDrop", function (e) {
                    var t = s.dropTargetIds;
                    (s.dropTargetIds = []),
                        s.actions.hover(t, { clientOffset: p(e) }),
                        s.actions.drop({ dropEffect: s.getCurrentDropEffect() }),
                        s.isDraggingNativeItem()
                            ? s.endDragNativeItem()
                            : s.monitor.isDragging() && s.actions.endDrag();
                }),
                E(this, "handleSelectStart", function (e) {
                    var t = e.target;
                    "function" != typeof t.dragDrop ||
                        "INPUT" === t.tagName ||
                        "SELECT" === t.tagName ||
                        "TEXTAREA" === t.tagName ||
                        t.isContentEditable ||
                        (e.preventDefault(), t.dragDrop());
                }),
                (this.options = new S(r, n)),
                (this.actions = e.getActions()),
                (this.monitor = e.getMonitor()),
                (this.registry = e.getRegistry()),
                (this.enterLeaveCounter = new i(this.isNodeInDocument));
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
                        var s = function (t) {
                                return n.handleDragStart(t, e);
                            },
                            a = function (e) {
                                return n.handleSelectStart(e);
                            };
                        return (
                            t.setAttribute("draggable", "true"),
                            t.addEventListener("dragstart", s),
                            t.addEventListener("selectstart", a),
                            function () {
                                n.sourceNodes.delete(e),
                                    n.sourceNodeOptions.delete(e),
                                    t.removeEventListener("dragstart", s),
                                    t.removeEventListener("selectstart", a),
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
                            s = function (t) {
                                return r.handleDragOver(t, e);
                            },
                            a = function (t) {
                                return r.handleDrop(t, e);
                            };
                        return (
                            t.addEventListener("dragenter", n),
                            t.addEventListener("dragover", s),
                            t.addEventListener("drop", a),
                            function () {
                                t.removeEventListener("dragenter", n),
                                    t.removeEventListener("dragover", s),
                                    t.removeEventListener("drop", a);
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
                        return T({ dropEffect: this.altKeyPressed ? "copy" : "move" }, t || {});
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
                        return T(
                            { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
                            this.sourcePreviewNodeOptions.get(e) || {},
                        );
                    },
                },
                {
                    key: "isDraggingNativeItem",
                    value: function () {
                        var e = this.monitor.getItemType();
                        return Object.keys(s).some(function (t) {
                            return s[t] === e;
                        });
                    },
                },
                {
                    key: "beginDragNativeItem",
                    value: function (e, t) {
                        var r;
                        this.clearCurrentDragSourceNode(),
                            (this.currentNativeSource = ((r = new w(_[e])).loadDataTransfer(t), r)),
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
    C = function (e, t, r) {
        return new D(e, t, r);
    };

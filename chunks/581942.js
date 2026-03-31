"use strict";
n.d(t, { f: () => p });
var r = n(269605),
    i = n(796598),
    s = n(198420),
    a = n(41010),
    o = n(461927);
function l(e, t) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? l(Object(n), !0).forEach(function (t) {
                  f(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function c(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function d(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function _(e, t, n) {
    return t && d(e.prototype, t), n && d(e, n), e;
}
function f(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var p = (function () {
    function e(t, n, a) {
        var l = this;
        c(this, e),
            f(this, "options", void 0),
            f(this, "actions", void 0),
            f(this, "monitor", void 0),
            f(this, "registry", void 0),
            f(this, "enterLeaveCounter", void 0),
            f(this, "sourcePreviewNodes", new Map()),
            f(this, "sourcePreviewNodeOptions", new Map()),
            f(this, "sourceNodes", new Map()),
            f(this, "sourceNodeOptions", new Map()),
            f(this, "dragStartSourceIds", null),
            f(this, "dropTargetIds", []),
            f(this, "dragEnterTargetIds", []),
            f(this, "currentNativeSource", null),
            f(this, "currentNativeHandle", null),
            f(this, "currentDragSourceNode", null),
            f(this, "altKeyPressed", !1),
            f(this, "mouseMoveTimeoutTimer", null),
            f(this, "asyncEndDragFrameId", null),
            f(this, "dragOverTargetIds", null),
            f(this, "getSourceClientOffset", function (e) {
                var t = l.sourceNodes.get(e);
                return (t && (0, i.Dg)(t)) || null;
            }),
            f(this, "endDragNativeItem", function () {
                l.isDraggingNativeItem() &&
                    (l.actions.endDrag(),
                    l.currentNativeHandle && l.registry.removeSource(l.currentNativeHandle),
                    (l.currentNativeHandle = null),
                    (l.currentNativeSource = null));
            }),
            f(this, "isNodeInDocument", function (e) {
                return !!(e && l.document && l.document.body && l.document.body.contains(e));
            }),
            f(this, "endDragIfSourceWasRemovedFromDOM", function () {
                var e = l.currentDragSourceNode;
                !(null == e || l.isNodeInDocument(e)) &&
                    l.clearCurrentDragSourceNode() &&
                    l.monitor.isDragging() &&
                    l.actions.endDrag();
            }),
            f(this, "handleTopDragStartCapture", function () {
                l.clearCurrentDragSourceNode(), (l.dragStartSourceIds = []);
            }),
            f(this, "handleTopDragStart", function (e) {
                if (!e.defaultPrevented) {
                    var t = l.dragStartSourceIds;
                    l.dragStartSourceIds = null;
                    var n = (0, i.b$)(e);
                    l.monitor.isDragging() && l.actions.endDrag(),
                        l.actions.beginDrag(t || [], {
                            publishSource: !1,
                            getSourceClientOffset: l.getSourceClientOffset,
                            clientOffset: n,
                        });
                    var r = e.dataTransfer,
                        a = (0, s.c)(r);
                    if (l.monitor.isDragging()) {
                        if (r && "function" == typeof r.setDragImage) {
                            var o = l.monitor.getSourceId(),
                                u = l.sourceNodes.get(o),
                                c = l.sourcePreviewNodes.get(o) || u;
                            if (c) {
                                var d = l.getCurrentSourcePreviewNodeOptions(),
                                    _ = d.anchorX,
                                    f = d.anchorY,
                                    p = d.offsetX,
                                    h = d.offsetY,
                                    m = { anchorX: _, anchorY: f },
                                    E = { offsetX: p, offsetY: h },
                                    g = (0, i.yA)(u, c, n, m, E);
                                r.setDragImage(c, g.x, g.y);
                            }
                        }
                        try {
                            null == r || r.setData("application/json", {});
                        } catch (e) {}
                        l.setCurrentDragSourceNode(e.target),
                            l.getCurrentSourcePreviewNodeOptions().captureDraggingState
                                ? l.actions.publishDragSource()
                                : setTimeout(function () {
                                      return l.actions.publishDragSource();
                                  }, 0);
                    } else if (a) l.beginDragNativeItem(a);
                    else {
                        if (
                            r &&
                            !r.types &&
                            ((e.target && !e.target.hasAttribute) || !e.target.hasAttribute("draggable"))
                        )
                            return;
                        e.preventDefault();
                    }
                }
            }),
            f(this, "handleTopDragEndCapture", function () {
                l.clearCurrentDragSourceNode() && l.monitor.isDragging() && l.actions.endDrag();
            }),
            f(this, "handleTopDragEnterCapture", function (e) {
                if (((l.dragEnterTargetIds = []), !(!l.enterLeaveCounter.enter(e.target) || l.monitor.isDragging()))) {
                    var t = e.dataTransfer,
                        n = (0, s.c)(t);
                    n && l.beginDragNativeItem(n, t);
                }
            }),
            f(this, "handleTopDragEnter", function (e) {
                var t = l.dragEnterTargetIds;
                if (((l.dragEnterTargetIds = []), l.monitor.isDragging())) {
                    (l.altKeyPressed = e.altKey), t.length > 0 && l.actions.hover(t, { clientOffset: (0, i.b$)(e) });
                    var n = t.some(function (e) {
                        return l.monitor.canDropOnTarget(e);
                    });
                    n && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = l.getCurrentDropEffect()));
                }
            }),
            f(this, "handleTopDragOverCapture", function () {
                l.dragOverTargetIds = [];
            }),
            f(this, "handleTopDragOver", function (e) {
                var t = l.dragOverTargetIds;
                if (((l.dragOverTargetIds = []), !l.monitor.isDragging())) {
                    e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
                    return;
                }
                (l.altKeyPressed = e.altKey),
                    l.actions.hover(t || [], { clientOffset: (0, i.b$)(e) }),
                    (t || []).some(function (e) {
                        return l.monitor.canDropOnTarget(e);
                    })
                        ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = l.getCurrentDropEffect()))
                        : l.isDraggingNativeItem()
                          ? e.preventDefault()
                          : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
            }),
            f(this, "handleTopDragLeaveCapture", function (e) {
                l.isDraggingNativeItem() && e.preventDefault(),
                    l.enterLeaveCounter.leave(e.target) &&
                        l.isDraggingNativeItem() &&
                        setTimeout(function () {
                            return l.endDragNativeItem();
                        }, 0);
            }),
            f(this, "handleTopDropCapture", function (e) {
                if (((l.dropTargetIds = []), l.isDraggingNativeItem())) {
                    var t;
                    e.preventDefault(), null == (t = l.currentNativeSource) || t.loadDataTransfer(e.dataTransfer);
                } else (0, s.c)(e.dataTransfer) && e.preventDefault();
                l.enterLeaveCounter.reset();
            }),
            f(this, "handleTopDrop", function (e) {
                var t = l.dropTargetIds;
                (l.dropTargetIds = []),
                    l.actions.hover(t, { clientOffset: (0, i.b$)(e) }),
                    l.actions.drop({ dropEffect: l.getCurrentDropEffect() }),
                    l.isDraggingNativeItem() ? l.endDragNativeItem() : l.monitor.isDragging() && l.actions.endDrag();
            }),
            f(this, "handleSelectStart", function (e) {
                var t = e.target;
                "function" != typeof t.dragDrop ||
                    "INPUT" === t.tagName ||
                    "SELECT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    (e.preventDefault(), t.dragDrop());
            }),
            (this.options = new o.s(n, a)),
            (this.actions = t.getActions()),
            (this.monitor = t.getMonitor()),
            (this.registry = t.getRegistry()),
            (this.enterLeaveCounter = new r.C(this.isNodeInDocument));
    }
    return (
        _(e, [
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
                    var r = this;
                    return (
                        this.sourcePreviewNodeOptions.set(e, n),
                        this.sourcePreviewNodes.set(e, t),
                        function () {
                            r.sourcePreviewNodes.delete(e), r.sourcePreviewNodeOptions.delete(e);
                        }
                    );
                },
            },
            {
                key: "connectDragSource",
                value: function (e, t, n) {
                    var r = this;
                    this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
                    var i = function (t) {
                            return r.handleDragStart(t, e);
                        },
                        s = function (e) {
                            return r.handleSelectStart(e);
                        };
                    return (
                        t.setAttribute("draggable", "true"),
                        t.addEventListener("dragstart", i),
                        t.addEventListener("selectstart", s),
                        function () {
                            r.sourceNodes.delete(e),
                                r.sourceNodeOptions.delete(e),
                                t.removeEventListener("dragstart", i),
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
                        r = function (t) {
                            return n.handleDragEnter(t, e);
                        },
                        i = function (t) {
                            return n.handleDragOver(t, e);
                        },
                        s = function (t) {
                            return n.handleDrop(t, e);
                        };
                    return (
                        t.addEventListener("dragenter", r),
                        t.addEventListener("dragover", i),
                        t.addEventListener("drop", s),
                        function () {
                            t.removeEventListener("dragenter", r),
                                t.removeEventListener("dragover", i),
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
                    return u({ dropEffect: this.altKeyPressed ? "copy" : "move" }, t || {});
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
                    return u(
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
                    this.clearCurrentDragSourceNode(),
                        (this.currentNativeSource = (0, s.h)(e, t)),
                        (this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource)),
                        this.actions.beginDrag([this.currentNativeHandle]);
                },
            },
            {
                key: "setCurrentDragSourceNode",
                value: function (e) {
                    var t = this;
                    this.clearCurrentDragSourceNode(), (this.currentDragSourceNode = e);
                    var n = 1e3;
                    this.mouseMoveTimeoutTimer = setTimeout(function () {
                        var e;
                        return null == (e = t.rootElement)
                            ? void 0
                            : e.addEventListener("mousemove", t.endDragIfSourceWasRemovedFromDOM, !0);
                    }, n);
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
        e
    );
})();

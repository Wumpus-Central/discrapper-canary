n.d(t, { z: () => _ });
var r = n(440359),
    i = n(652756),
    o = n(928968),
    a = n(778882),
    s = n(215857);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? l(Object(n), !0).forEach(function (t) {
                  p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function u(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function d(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function f(e, t, n) {
    return t && d(e.prototype, t), n && d(e, n), e;
}
function p(e, t, n) {
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
var _ = (function () {
    function e(t, n, a) {
        var l = this;
        u(this, e),
            p(this, 'options', void 0),
            p(this, 'actions', void 0),
            p(this, 'monitor', void 0),
            p(this, 'registry', void 0),
            p(this, 'enterLeaveCounter', void 0),
            p(this, 'sourcePreviewNodes', new Map()),
            p(this, 'sourcePreviewNodeOptions', new Map()),
            p(this, 'sourceNodes', new Map()),
            p(this, 'sourceNodeOptions', new Map()),
            p(this, 'dragStartSourceIds', null),
            p(this, 'dropTargetIds', []),
            p(this, 'dragEnterTargetIds', []),
            p(this, 'currentNativeSource', null),
            p(this, 'currentNativeHandle', null),
            p(this, 'currentDragSourceNode', null),
            p(this, 'altKeyPressed', !1),
            p(this, 'mouseMoveTimeoutTimer', null),
            p(this, 'asyncEndDragFrameId', null),
            p(this, 'dragOverTargetIds', null),
            p(this, 'getSourceClientOffset', function (e) {
                var t = l.sourceNodes.get(e);
                return (t && (0, i.g2)(t)) || null;
            }),
            p(this, 'endDragNativeItem', function () {
                l.isDraggingNativeItem() && (l.actions.endDrag(), l.currentNativeHandle && l.registry.removeSource(l.currentNativeHandle), (l.currentNativeHandle = null), (l.currentNativeSource = null));
            }),
            p(this, 'isNodeInDocument', function (e) {
                return !!(e && l.document && l.document.body && l.document.body.contains(e));
            }),
            p(this, 'endDragIfSourceWasRemovedFromDOM', function () {
                var e = l.currentDragSourceNode;
                !(null == e || l.isNodeInDocument(e)) && l.clearCurrentDragSourceNode() && l.monitor.isDragging() && l.actions.endDrag();
            }),
            p(this, 'handleTopDragStartCapture', function () {
                l.clearCurrentDragSourceNode(), (l.dragStartSourceIds = []);
            }),
            p(this, 'handleTopDragStart', function (e) {
                if (!e.defaultPrevented) {
                    var t = l.dragStartSourceIds;
                    l.dragStartSourceIds = null;
                    var n = (0, i.K5)(e);
                    l.monitor.isDragging() && l.actions.endDrag(),
                        l.actions.beginDrag(t || [], {
                            publishSource: !1,
                            getSourceClientOffset: l.getSourceClientOffset,
                            clientOffset: n
                        });
                    var r = e.dataTransfer,
                        a = (0, o.w)(r);
                    if (l.monitor.isDragging()) {
                        if (r && 'function' == typeof r.setDragImage) {
                            var s = l.monitor.getSourceId(),
                                c = l.sourceNodes.get(s),
                                u = l.sourcePreviewNodes.get(s) || c;
                            if (u) {
                                var d = l.getCurrentSourcePreviewNodeOptions(),
                                    f = d.anchorX,
                                    p = d.anchorY,
                                    _ = d.offsetX,
                                    h = d.offsetY,
                                    m = {
                                        anchorX: f,
                                        anchorY: p
                                    },
                                    g = {
                                        offsetX: _,
                                        offsetY: h
                                    },
                                    E = (0, i.rK)(c, u, n, m, g);
                                r.setDragImage(u, E.x, E.y);
                            }
                        }
                        try {
                            null == r || r.setData('application/json', {});
                        } catch (e) {}
                        l.setCurrentDragSourceNode(e.target),
                            l.getCurrentSourcePreviewNodeOptions().captureDraggingState
                                ? l.actions.publishDragSource()
                                : setTimeout(function () {
                                      return l.actions.publishDragSource();
                                  }, 0);
                    } else if (a) l.beginDragNativeItem(a);
                    else {
                        if (r && !r.types && ((e.target && !e.target.hasAttribute) || !e.target.hasAttribute('draggable'))) return;
                        e.preventDefault();
                    }
                }
            }),
            p(this, 'handleTopDragEndCapture', function () {
                l.clearCurrentDragSourceNode() && l.monitor.isDragging() && l.actions.endDrag();
            }),
            p(this, 'handleTopDragEnterCapture', function (e) {
                if (((l.dragEnterTargetIds = []), !(!l.enterLeaveCounter.enter(e.target) || l.monitor.isDragging()))) {
                    var t = e.dataTransfer,
                        n = (0, o.w)(t);
                    n && l.beginDragNativeItem(n, t);
                }
            }),
            p(this, 'handleTopDragEnter', function (e) {
                var t = l.dragEnterTargetIds;
                (l.dragEnterTargetIds = []),
                    l.monitor.isDragging() &&
                        ((l.altKeyPressed = e.altKey),
                        t.length > 0 && l.actions.hover(t, { clientOffset: (0, i.K5)(e) }),
                        t.some(function (e) {
                            return l.monitor.canDropOnTarget(e);
                        }) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = l.getCurrentDropEffect())));
            }),
            p(this, 'handleTopDragOverCapture', function () {
                l.dragOverTargetIds = [];
            }),
            p(this, 'handleTopDragOver', function (e) {
                var t = l.dragOverTargetIds;
                if (((l.dragOverTargetIds = []), !l.monitor.isDragging())) {
                    e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = 'none');
                    return;
                }
                (l.altKeyPressed = e.altKey),
                    l.actions.hover(t || [], { clientOffset: (0, i.K5)(e) }),
                    (t || []).some(function (e) {
                        return l.monitor.canDropOnTarget(e);
                    })
                        ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = l.getCurrentDropEffect()))
                        : l.isDraggingNativeItem()
                          ? e.preventDefault()
                          : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = 'none'));
            }),
            p(this, 'handleTopDragLeaveCapture', function (e) {
                l.isDraggingNativeItem() && e.preventDefault(),
                    l.enterLeaveCounter.leave(e.target) &&
                        l.isDraggingNativeItem() &&
                        setTimeout(function () {
                            return l.endDragNativeItem();
                        }, 0);
            }),
            p(this, 'handleTopDropCapture', function (e) {
                if (((l.dropTargetIds = []), l.isDraggingNativeItem())) {
                    var t;
                    e.preventDefault(), null === (t = l.currentNativeSource) || void 0 === t || t.loadDataTransfer(e.dataTransfer);
                } else (0, o.w)(e.dataTransfer) && e.preventDefault();
                l.enterLeaveCounter.reset();
            }),
            p(this, 'handleTopDrop', function (e) {
                var t = l.dropTargetIds;
                (l.dropTargetIds = []), l.actions.hover(t, { clientOffset: (0, i.K5)(e) }), l.actions.drop({ dropEffect: l.getCurrentDropEffect() }), l.isDraggingNativeItem() ? l.endDragNativeItem() : l.monitor.isDragging() && l.actions.endDrag();
            }),
            p(this, 'handleSelectStart', function (e) {
                var t = e.target;
                'function' == typeof t.dragDrop && 'INPUT' !== t.tagName && 'SELECT' !== t.tagName && 'TEXTAREA' !== t.tagName && !t.isContentEditable && (e.preventDefault(), t.dragDrop());
            }),
            (this.options = new s.r(n, a)),
            (this.actions = t.getActions()),
            (this.monitor = t.getMonitor()),
            (this.registry = t.getRegistry()),
            (this.enterLeaveCounter = new r.e(this.isNodeInDocument));
    }
    return (
        f(e, [
            {
                key: 'profile',
                value: function () {
                    var e, t;
                    return {
                        sourcePreviewNodes: this.sourcePreviewNodes.size,
                        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                        sourceNodeOptions: this.sourceNodeOptions.size,
                        sourceNodes: this.sourceNodes.size,
                        dragStartSourceIds: (null === (e = this.dragStartSourceIds) || void 0 === e ? void 0 : e.length) || 0,
                        dropTargetIds: this.dropTargetIds.length,
                        dragEnterTargetIds: this.dragEnterTargetIds.length,
                        dragOverTargetIds: (null === (t = this.dragOverTargetIds) || void 0 === t ? void 0 : t.length) || 0
                    };
                }
            },
            {
                key: 'window',
                get: function () {
                    return this.options.window;
                }
            },
            {
                key: 'document',
                get: function () {
                    return this.options.document;
                }
            },
            {
                key: 'rootElement',
                get: function () {
                    return this.options.rootElement;
                }
            },
            {
                key: 'setup',
                value: function () {
                    var e = this.rootElement;
                    if (void 0 !== e) {
                        if (e.__isReactDndBackendSetUp) throw Error('Cannot have two HTML5 backends at the same time.');
                        (e.__isReactDndBackendSetUp = !0), this.addEventListeners(e);
                    }
                }
            },
            {
                key: 'teardown',
                value: function () {
                    var e,
                        t = this.rootElement;
                    void 0 !== t && ((t.__isReactDndBackendSetUp = !1), this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId && (null === (e = this.window) || void 0 === e || e.cancelAnimationFrame(this.asyncEndDragFrameId)));
                }
            },
            {
                key: 'connectDragPreview',
                value: function (e, t, n) {
                    var r = this;
                    return (
                        this.sourcePreviewNodeOptions.set(e, n),
                        this.sourcePreviewNodes.set(e, t),
                        function () {
                            r.sourcePreviewNodes.delete(e), r.sourcePreviewNodeOptions.delete(e);
                        }
                    );
                }
            },
            {
                key: 'connectDragSource',
                value: function (e, t, n) {
                    var r = this;
                    this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
                    var i = function (t) {
                            return r.handleDragStart(t, e);
                        },
                        o = function (e) {
                            return r.handleSelectStart(e);
                        };
                    return (
                        t.setAttribute('draggable', 'true'),
                        t.addEventListener('dragstart', i),
                        t.addEventListener('selectstart', o),
                        function () {
                            r.sourceNodes.delete(e), r.sourceNodeOptions.delete(e), t.removeEventListener('dragstart', i), t.removeEventListener('selectstart', o), t.setAttribute('draggable', 'false');
                        }
                    );
                }
            },
            {
                key: 'connectDropTarget',
                value: function (e, t) {
                    var n = this,
                        r = function (t) {
                            return n.handleDragEnter(t, e);
                        },
                        i = function (t) {
                            return n.handleDragOver(t, e);
                        },
                        o = function (t) {
                            return n.handleDrop(t, e);
                        };
                    return (
                        t.addEventListener('dragenter', r),
                        t.addEventListener('dragover', i),
                        t.addEventListener('drop', o),
                        function () {
                            t.removeEventListener('dragenter', r), t.removeEventListener('dragover', i), t.removeEventListener('drop', o);
                        }
                    );
                }
            },
            {
                key: 'addEventListeners',
                value: function (e) {
                    e.addEventListener && (e.addEventListener('dragstart', this.handleTopDragStart), e.addEventListener('dragstart', this.handleTopDragStartCapture, !0), e.addEventListener('dragend', this.handleTopDragEndCapture, !0), e.addEventListener('dragenter', this.handleTopDragEnter), e.addEventListener('dragenter', this.handleTopDragEnterCapture, !0), e.addEventListener('dragleave', this.handleTopDragLeaveCapture, !0), e.addEventListener('dragover', this.handleTopDragOver), e.addEventListener('dragover', this.handleTopDragOverCapture, !0), e.addEventListener('drop', this.handleTopDrop), e.addEventListener('drop', this.handleTopDropCapture, !0));
                }
            },
            {
                key: 'removeEventListeners',
                value: function (e) {
                    e.removeEventListener && (e.removeEventListener('dragstart', this.handleTopDragStart), e.removeEventListener('dragstart', this.handleTopDragStartCapture, !0), e.removeEventListener('dragend', this.handleTopDragEndCapture, !0), e.removeEventListener('dragenter', this.handleTopDragEnter), e.removeEventListener('dragenter', this.handleTopDragEnterCapture, !0), e.removeEventListener('dragleave', this.handleTopDragLeaveCapture, !0), e.removeEventListener('dragover', this.handleTopDragOver), e.removeEventListener('dragover', this.handleTopDragOverCapture, !0), e.removeEventListener('drop', this.handleTopDrop), e.removeEventListener('drop', this.handleTopDropCapture, !0));
                }
            },
            {
                key: 'getCurrentSourceNodeOptions',
                value: function () {
                    var e = this.monitor.getSourceId(),
                        t = this.sourceNodeOptions.get(e);
                    return c({ dropEffect: this.altKeyPressed ? 'copy' : 'move' }, t || {});
                }
            },
            {
                key: 'getCurrentDropEffect',
                value: function () {
                    return this.isDraggingNativeItem() ? 'copy' : this.getCurrentSourceNodeOptions().dropEffect;
                }
            },
            {
                key: 'getCurrentSourcePreviewNodeOptions',
                value: function () {
                    var e = this.monitor.getSourceId();
                    return c(
                        {
                            anchorX: 0.5,
                            anchorY: 0.5,
                            captureDraggingState: !1
                        },
                        this.sourcePreviewNodeOptions.get(e) || {}
                    );
                }
            },
            {
                key: 'isDraggingNativeItem',
                value: function () {
                    var e = this.monitor.getItemType();
                    return Object.keys(a).some(function (t) {
                        return a[t] === e;
                    });
                }
            },
            {
                key: 'beginDragNativeItem',
                value: function (e, t) {
                    this.clearCurrentDragSourceNode(), (this.currentNativeSource = (0, o.f)(e, t)), (this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource)), this.actions.beginDrag([this.currentNativeHandle]);
                }
            },
            {
                key: 'setCurrentDragSourceNode',
                value: function (e) {
                    var t = this;
                    this.clearCurrentDragSourceNode(), (this.currentDragSourceNode = e);
                    var n = 1000;
                    this.mouseMoveTimeoutTimer = setTimeout(function () {
                        var e;
                        return null === (e = t.rootElement) || void 0 === e ? void 0 : e.addEventListener('mousemove', t.endDragIfSourceWasRemovedFromDOM, !0);
                    }, n);
                }
            },
            {
                key: 'clearCurrentDragSourceNode',
                value: function () {
                    if (this.currentDragSourceNode) {
                        if (((this.currentDragSourceNode = null), this.rootElement)) {
                            var e;
                            null === (e = this.window) || void 0 === e || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, !0);
                        }
                        return (this.mouseMoveTimeoutTimer = null), !0;
                    }
                    return !1;
                }
            },
            {
                key: 'handleDragStart',
                value: function (e, t) {
                    !e.defaultPrevented && (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(t));
                }
            },
            {
                key: 'handleDragEnter',
                value: function (e, t) {
                    this.dragEnterTargetIds.unshift(t);
                }
            },
            {
                key: 'handleDragOver',
                value: function (e, t) {
                    null === this.dragOverTargetIds && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(t);
                }
            },
            {
                key: 'handleDrop',
                value: function (e, t) {
                    this.dropTargetIds.unshift(t);
                }
            }
        ]),
        e
    );
})();

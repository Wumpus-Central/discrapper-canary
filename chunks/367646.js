r.d(n, {
    z: function () {
        return _;
    }
});
var i = r(440359),
    a = r(652756),
    o = r(928968),
    s = r(778882),
    l = r(215857);
function u(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function c(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? u(Object(r), !0).forEach(function (n) {
                  h(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : u(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
function d(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function f(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function p(e, n, r) {
    return n && f(e.prototype, n), r && f(e, r), e;
}
function h(e, n, r) {
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
var _ = (function () {
    function e(n, r, s) {
        var u = this;
        d(this, e),
            h(this, 'options', void 0),
            h(this, 'actions', void 0),
            h(this, 'monitor', void 0),
            h(this, 'registry', void 0),
            h(this, 'enterLeaveCounter', void 0),
            h(this, 'sourcePreviewNodes', new Map()),
            h(this, 'sourcePreviewNodeOptions', new Map()),
            h(this, 'sourceNodes', new Map()),
            h(this, 'sourceNodeOptions', new Map()),
            h(this, 'dragStartSourceIds', null),
            h(this, 'dropTargetIds', []),
            h(this, 'dragEnterTargetIds', []),
            h(this, 'currentNativeSource', null),
            h(this, 'currentNativeHandle', null),
            h(this, 'currentDragSourceNode', null),
            h(this, 'altKeyPressed', !1),
            h(this, 'mouseMoveTimeoutTimer', null),
            h(this, 'asyncEndDragFrameId', null),
            h(this, 'dragOverTargetIds', null),
            h(this, 'getSourceClientOffset', function (e) {
                var n = u.sourceNodes.get(e);
                return (n && (0, a.g2)(n)) || null;
            }),
            h(this, 'endDragNativeItem', function () {
                if (!!u.isDraggingNativeItem()) u.actions.endDrag(), u.currentNativeHandle && u.registry.removeSource(u.currentNativeHandle), (u.currentNativeHandle = null), (u.currentNativeSource = null);
            }),
            h(this, 'isNodeInDocument', function (e) {
                return !!(e && u.document && u.document.body && u.document.body.contains(e));
            }),
            h(this, 'endDragIfSourceWasRemovedFromDOM', function () {
                var e = u.currentDragSourceNode;
                if (!(null == e || u.isNodeInDocument(e))) u.clearCurrentDragSourceNode() && u.monitor.isDragging() && u.actions.endDrag();
            }),
            h(this, 'handleTopDragStartCapture', function () {
                u.clearCurrentDragSourceNode(), (u.dragStartSourceIds = []);
            }),
            h(this, 'handleTopDragStart', function (e) {
                if (!e.defaultPrevented) {
                    var n = u.dragStartSourceIds;
                    u.dragStartSourceIds = null;
                    var r = (0, a.K5)(e);
                    u.monitor.isDragging() && u.actions.endDrag(),
                        u.actions.beginDrag(n || [], {
                            publishSource: !1,
                            getSourceClientOffset: u.getSourceClientOffset,
                            clientOffset: r
                        });
                    var i = e.dataTransfer,
                        s = (0, o.w)(i);
                    if (u.monitor.isDragging()) {
                        if (i && 'function' == typeof i.setDragImage) {
                            var l = u.monitor.getSourceId(),
                                c = u.sourceNodes.get(l),
                                d = u.sourcePreviewNodes.get(l) || c;
                            if (d) {
                                var f = u.getCurrentSourcePreviewNodeOptions(),
                                    p = f.anchorX,
                                    h = f.anchorY,
                                    _ = f.offsetX,
                                    m = f.offsetY,
                                    g = {
                                        anchorX: p,
                                        anchorY: h
                                    },
                                    E = {
                                        offsetX: _,
                                        offsetY: m
                                    },
                                    v = (0, a.rK)(c, d, r, g, E);
                                i.setDragImage(d, v.x, v.y);
                            }
                        }
                        try {
                            null == i || i.setData('application/json', {});
                        } catch (e) {}
                        u.setCurrentDragSourceNode(e.target),
                            u.getCurrentSourcePreviewNodeOptions().captureDraggingState
                                ? u.actions.publishDragSource()
                                : setTimeout(function () {
                                      return u.actions.publishDragSource();
                                  }, 0);
                    } else if (s) u.beginDragNativeItem(s);
                    else {
                        if (i && !i.types && ((e.target && !e.target.hasAttribute) || !e.target.hasAttribute('draggable'))) return;
                        e.preventDefault();
                    }
                }
            }),
            h(this, 'handleTopDragEndCapture', function () {
                u.clearCurrentDragSourceNode() && u.monitor.isDragging() && u.actions.endDrag();
            }),
            h(this, 'handleTopDragEnterCapture', function (e) {
                if (((u.dragEnterTargetIds = []), !(!u.enterLeaveCounter.enter(e.target) || u.monitor.isDragging()))) {
                    var n = e.dataTransfer,
                        r = (0, o.w)(n);
                    r && u.beginDragNativeItem(r, n);
                }
            }),
            h(this, 'handleTopDragEnter', function (e) {
                var n = u.dragEnterTargetIds;
                if (((u.dragEnterTargetIds = []), !!u.monitor.isDragging()))
                    (u.altKeyPressed = e.altKey),
                        n.length > 0 && u.actions.hover(n, { clientOffset: (0, a.K5)(e) }),
                        n.some(function (e) {
                            return u.monitor.canDropOnTarget(e);
                        }) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = u.getCurrentDropEffect()));
            }),
            h(this, 'handleTopDragOverCapture', function () {
                u.dragOverTargetIds = [];
            }),
            h(this, 'handleTopDragOver', function (e) {
                var n = u.dragOverTargetIds;
                if (((u.dragOverTargetIds = []), !u.monitor.isDragging())) {
                    e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = 'none');
                    return;
                }
                (u.altKeyPressed = e.altKey),
                    u.actions.hover(n || [], { clientOffset: (0, a.K5)(e) }),
                    (n || []).some(function (e) {
                        return u.monitor.canDropOnTarget(e);
                    })
                        ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = u.getCurrentDropEffect()))
                        : u.isDraggingNativeItem()
                          ? e.preventDefault()
                          : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = 'none'));
            }),
            h(this, 'handleTopDragLeaveCapture', function (e) {
                if ((u.isDraggingNativeItem() && e.preventDefault(), !!u.enterLeaveCounter.leave(e.target)))
                    u.isDraggingNativeItem() &&
                        setTimeout(function () {
                            return u.endDragNativeItem();
                        }, 0);
            }),
            h(this, 'handleTopDropCapture', function (e) {
                if (((u.dropTargetIds = []), u.isDraggingNativeItem())) {
                    var n;
                    e.preventDefault(), null === (n = u.currentNativeSource) || void 0 === n || n.loadDataTransfer(e.dataTransfer);
                } else (0, o.w)(e.dataTransfer) && e.preventDefault();
                u.enterLeaveCounter.reset();
            }),
            h(this, 'handleTopDrop', function (e) {
                var n = u.dropTargetIds;
                (u.dropTargetIds = []), u.actions.hover(n, { clientOffset: (0, a.K5)(e) }), u.actions.drop({ dropEffect: u.getCurrentDropEffect() }), u.isDraggingNativeItem() ? u.endDragNativeItem() : u.monitor.isDragging() && u.actions.endDrag();
            }),
            h(this, 'handleSelectStart', function (e) {
                var n = e.target;
                if ('function' == typeof n.dragDrop && 'INPUT' !== n.tagName && 'SELECT' !== n.tagName && 'TEXTAREA' !== n.tagName && !n.isContentEditable) e.preventDefault(), n.dragDrop();
            }),
            (this.options = new l.r(r, s)),
            (this.actions = n.getActions()),
            (this.monitor = n.getMonitor()),
            (this.registry = n.getRegistry()),
            (this.enterLeaveCounter = new i.e(this.isNodeInDocument));
    }
    return (
        p(e, [
            {
                key: 'profile',
                value: function () {
                    var e, n;
                    return {
                        sourcePreviewNodes: this.sourcePreviewNodes.size,
                        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                        sourceNodeOptions: this.sourceNodeOptions.size,
                        sourceNodes: this.sourceNodes.size,
                        dragStartSourceIds: (null === (e = this.dragStartSourceIds) || void 0 === e ? void 0 : e.length) || 0,
                        dropTargetIds: this.dropTargetIds.length,
                        dragEnterTargetIds: this.dragEnterTargetIds.length,
                        dragOverTargetIds: (null === (n = this.dragOverTargetIds) || void 0 === n ? void 0 : n.length) || 0
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
                        n = this.rootElement;
                    if (void 0 !== n) (n.__isReactDndBackendSetUp = !1), this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId && (null === (e = this.window) || void 0 === e || e.cancelAnimationFrame(this.asyncEndDragFrameId));
                }
            },
            {
                key: 'connectDragPreview',
                value: function (e, n, r) {
                    var i = this;
                    return (
                        this.sourcePreviewNodeOptions.set(e, r),
                        this.sourcePreviewNodes.set(e, n),
                        function () {
                            i.sourcePreviewNodes.delete(e), i.sourcePreviewNodeOptions.delete(e);
                        }
                    );
                }
            },
            {
                key: 'connectDragSource',
                value: function (e, n, r) {
                    var i = this;
                    this.sourceNodes.set(e, n), this.sourceNodeOptions.set(e, r);
                    var a = function (n) {
                            return i.handleDragStart(n, e);
                        },
                        o = function (e) {
                            return i.handleSelectStart(e);
                        };
                    return (
                        n.setAttribute('draggable', 'true'),
                        n.addEventListener('dragstart', a),
                        n.addEventListener('selectstart', o),
                        function () {
                            i.sourceNodes.delete(e), i.sourceNodeOptions.delete(e), n.removeEventListener('dragstart', a), n.removeEventListener('selectstart', o), n.setAttribute('draggable', 'false');
                        }
                    );
                }
            },
            {
                key: 'connectDropTarget',
                value: function (e, n) {
                    var r = this,
                        i = function (n) {
                            return r.handleDragEnter(n, e);
                        },
                        a = function (n) {
                            return r.handleDragOver(n, e);
                        },
                        o = function (n) {
                            return r.handleDrop(n, e);
                        };
                    return (
                        n.addEventListener('dragenter', i),
                        n.addEventListener('dragover', a),
                        n.addEventListener('drop', o),
                        function () {
                            n.removeEventListener('dragenter', i), n.removeEventListener('dragover', a), n.removeEventListener('drop', o);
                        }
                    );
                }
            },
            {
                key: 'addEventListeners',
                value: function (e) {
                    if (!!e.addEventListener) e.addEventListener('dragstart', this.handleTopDragStart), e.addEventListener('dragstart', this.handleTopDragStartCapture, !0), e.addEventListener('dragend', this.handleTopDragEndCapture, !0), e.addEventListener('dragenter', this.handleTopDragEnter), e.addEventListener('dragenter', this.handleTopDragEnterCapture, !0), e.addEventListener('dragleave', this.handleTopDragLeaveCapture, !0), e.addEventListener('dragover', this.handleTopDragOver), e.addEventListener('dragover', this.handleTopDragOverCapture, !0), e.addEventListener('drop', this.handleTopDrop), e.addEventListener('drop', this.handleTopDropCapture, !0);
                }
            },
            {
                key: 'removeEventListeners',
                value: function (e) {
                    if (!!e.removeEventListener) e.removeEventListener('dragstart', this.handleTopDragStart), e.removeEventListener('dragstart', this.handleTopDragStartCapture, !0), e.removeEventListener('dragend', this.handleTopDragEndCapture, !0), e.removeEventListener('dragenter', this.handleTopDragEnter), e.removeEventListener('dragenter', this.handleTopDragEnterCapture, !0), e.removeEventListener('dragleave', this.handleTopDragLeaveCapture, !0), e.removeEventListener('dragover', this.handleTopDragOver), e.removeEventListener('dragover', this.handleTopDragOverCapture, !0), e.removeEventListener('drop', this.handleTopDrop), e.removeEventListener('drop', this.handleTopDropCapture, !0);
                }
            },
            {
                key: 'getCurrentSourceNodeOptions',
                value: function () {
                    var e = this.monitor.getSourceId(),
                        n = this.sourceNodeOptions.get(e);
                    return c({ dropEffect: this.altKeyPressed ? 'copy' : 'move' }, n || {});
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
                    return Object.keys(s).some(function (n) {
                        return s[n] === e;
                    });
                }
            },
            {
                key: 'beginDragNativeItem',
                value: function (e, n) {
                    this.clearCurrentDragSourceNode(), (this.currentNativeSource = (0, o.f)(e, n)), (this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource)), this.actions.beginDrag([this.currentNativeHandle]);
                }
            },
            {
                key: 'setCurrentDragSourceNode',
                value: function (e) {
                    var n = this;
                    this.clearCurrentDragSourceNode(), (this.currentDragSourceNode = e);
                    var r = 1000;
                    this.mouseMoveTimeoutTimer = setTimeout(function () {
                        var e;
                        return null === (e = n.rootElement) || void 0 === e ? void 0 : e.addEventListener('mousemove', n.endDragIfSourceWasRemovedFromDOM, !0);
                    }, r);
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
                value: function (e, n) {
                    if (!e.defaultPrevented) !this.dragStartSourceIds && (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(n);
                }
            },
            {
                key: 'handleDragEnter',
                value: function (e, n) {
                    this.dragEnterTargetIds.unshift(n);
                }
            },
            {
                key: 'handleDragOver',
                value: function (e, n) {
                    null === this.dragOverTargetIds && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(n);
                }
            },
            {
                key: 'handleDrop',
                value: function (e, n) {
                    this.dropTargetIds.unshift(n);
                }
            }
        ]),
        e
    );
})();

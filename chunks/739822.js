r.d(t, { i: () => O });
var n = r(290309),
    i = r(575241),
    o = r(582128);
function a(e) {
    return (a =
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
function u(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var c = (function () {
        var e;
        function t(e, r, n) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (u(this, "spec", void 0),
                u(this, "monitor", void 0),
                u(this, "connector", void 0),
                (this.spec = e),
                (this.monitor = r),
                (this.connector = n));
        }
        return (
            (e = [
                {
                    key: "beginDrag",
                    value: function () {
                        var e,
                            t = this.spec,
                            r = this.monitor;
                        return null !=
                            (e = "object" === a(t.item) ? t.item : "function" == typeof t.item ? t.item(r) : {})
                            ? e
                            : null;
                    },
                },
                {
                    key: "canDrag",
                    value: function () {
                        var e = this.spec,
                            t = this.monitor;
                        return "boolean" == typeof e.canDrag
                            ? e.canDrag
                            : "function" != typeof e.canDrag || e.canDrag(t);
                    },
                },
                {
                    key: "isDragging",
                    value: function (e, t) {
                        var r = this.spec,
                            n = this.monitor,
                            i = r.isDragging;
                        return i ? i(n) : t === e.getSourceId();
                    },
                },
                {
                    key: "endDrag",
                    value: function () {
                        var e = this.spec,
                            t = this.monitor,
                            r = this.connector,
                            n = e.end;
                        (n && n(t.getItem(), t), r.reconnect());
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    ((n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n));
                }
            })(t.prototype, e),
            t
        );
    })(),
    s = r(204581),
    l = r(321733);
function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var f = r(22633);
function g(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var h = !1,
    p = !1,
    v = (function () {
        var e;
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (g(this, "internalMonitor", void 0), g(this, "sourceId", null), (this.internalMonitor = e.getMonitor()));
        }
        return (
            (e = [
                {
                    key: "receiveHandlerId",
                    value: function (e) {
                        this.sourceId = e;
                    },
                },
                {
                    key: "getHandlerId",
                    value: function () {
                        return this.sourceId;
                    },
                },
                {
                    key: "canDrag",
                    value: function () {
                        (0, l.V)(
                            !h,
                            "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                        );
                        try {
                            return ((h = !0), this.internalMonitor.canDragSource(this.sourceId));
                        } finally {
                            h = !1;
                        }
                    },
                },
                {
                    key: "isDragging",
                    value: function () {
                        if (!this.sourceId) return !1;
                        (0, l.V)(
                            !p,
                            "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                        );
                        try {
                            return ((p = !0), this.internalMonitor.isDraggingSource(this.sourceId));
                        } finally {
                            p = !1;
                        }
                    },
                },
                {
                    key: "subscribeToStateChange",
                    value: function (e, t) {
                        return this.internalMonitor.subscribeToStateChange(e, t);
                    },
                },
                {
                    key: "isDraggingSource",
                    value: function (e) {
                        return this.internalMonitor.isDraggingSource(e);
                    },
                },
                {
                    key: "isOverTarget",
                    value: function (e, t) {
                        return this.internalMonitor.isOverTarget(e, t);
                    },
                },
                {
                    key: "getTargetIds",
                    value: function () {
                        return this.internalMonitor.getTargetIds();
                    },
                },
                {
                    key: "isSourcePublic",
                    value: function () {
                        return this.internalMonitor.isSourcePublic();
                    },
                },
                {
                    key: "getSourceId",
                    value: function () {
                        return this.internalMonitor.getSourceId();
                    },
                },
                {
                    key: "subscribeToOffsetChange",
                    value: function (e) {
                        return this.internalMonitor.subscribeToOffsetChange(e);
                    },
                },
                {
                    key: "canDragSource",
                    value: function (e) {
                        return this.internalMonitor.canDragSource(e);
                    },
                },
                {
                    key: "canDropOnTarget",
                    value: function (e) {
                        return this.internalMonitor.canDropOnTarget(e);
                    },
                },
                {
                    key: "getItemType",
                    value: function () {
                        return this.internalMonitor.getItemType();
                    },
                },
                {
                    key: "getItem",
                    value: function () {
                        return this.internalMonitor.getItem();
                    },
                },
                {
                    key: "getDropResult",
                    value: function () {
                        return this.internalMonitor.getDropResult();
                    },
                },
                {
                    key: "didDrop",
                    value: function () {
                        return this.internalMonitor.didDrop();
                    },
                },
                {
                    key: "getInitialClientOffset",
                    value: function () {
                        return this.internalMonitor.getInitialClientOffset();
                    },
                },
                {
                    key: "getInitialSourceClientOffset",
                    value: function () {
                        return this.internalMonitor.getInitialSourceClientOffset();
                    },
                },
                {
                    key: "getSourceClientOffset",
                    value: function () {
                        return this.internalMonitor.getSourceClientOffset();
                    },
                },
                {
                    key: "getClientOffset",
                    value: function () {
                        return this.internalMonitor.getClientOffset();
                    },
                },
                {
                    key: "getDifferenceFromInitialOffset",
                    value: function () {
                        return this.internalMonitor.getDifferenceFromInitialOffset();
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    ((n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n));
                }
            })(t.prototype, e),
            t
        );
    })(),
    y = r(370725),
    b = r(723651),
    m = r(816885);
function I(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var D = (function () {
        var e;
        function t(e) {
            var r = this;
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (I(
                this,
                "hooks",
                (0, y.i)({
                    dragSource: function (e, t) {
                        (r.clearDragSource(),
                            (r.dragSourceOptions = t || null),
                            (0, b.i)(e) ? (r.dragSourceRef = e) : (r.dragSourceNode = e),
                            r.reconnectDragSource());
                    },
                    dragPreview: function (e, t) {
                        (r.clearDragPreview(),
                            (r.dragPreviewOptions = t || null),
                            (0, b.i)(e) ? (r.dragPreviewRef = e) : (r.dragPreviewNode = e),
                            r.reconnectDragPreview());
                    },
                }),
            ),
                I(this, "handlerId", null),
                I(this, "dragSourceRef", null),
                I(this, "dragSourceNode", void 0),
                I(this, "dragSourceOptionsInternal", null),
                I(this, "dragSourceUnsubscribe", void 0),
                I(this, "dragPreviewRef", null),
                I(this, "dragPreviewNode", void 0),
                I(this, "dragPreviewOptionsInternal", null),
                I(this, "dragPreviewUnsubscribe", void 0),
                I(this, "lastConnectedHandlerId", null),
                I(this, "lastConnectedDragSource", null),
                I(this, "lastConnectedDragSourceOptions", null),
                I(this, "lastConnectedDragPreview", null),
                I(this, "lastConnectedDragPreviewOptions", null),
                I(this, "backend", void 0),
                (this.backend = e));
        }
        return (
            (e = [
                {
                    key: "receiveHandlerId",
                    value: function (e) {
                        this.handlerId !== e && ((this.handlerId = e), this.reconnect());
                    },
                },
                {
                    key: "connectTarget",
                    get: function () {
                        return this.dragSource;
                    },
                },
                {
                    key: "dragSourceOptions",
                    get: function () {
                        return this.dragSourceOptionsInternal;
                    },
                    set: function (e) {
                        this.dragSourceOptionsInternal = e;
                    },
                },
                {
                    key: "dragPreviewOptions",
                    get: function () {
                        return this.dragPreviewOptionsInternal;
                    },
                    set: function (e) {
                        this.dragPreviewOptionsInternal = e;
                    },
                },
                {
                    key: "reconnect",
                    value: function () {
                        (this.reconnectDragSource(), this.reconnectDragPreview());
                    },
                },
                {
                    key: "reconnectDragSource",
                    value: function () {
                        var e = this.dragSource,
                            t =
                                this.didHandlerIdChange() ||
                                this.didConnectedDragSourceChange() ||
                                this.didDragSourceOptionsChange();
                        if ((t && this.disconnectDragSource(), this.handlerId)) {
                            if (!e) {
                                this.lastConnectedDragSource = e;
                                return;
                            }
                            t &&
                                ((this.lastConnectedHandlerId = this.handlerId),
                                (this.lastConnectedDragSource = e),
                                (this.lastConnectedDragSourceOptions = this.dragSourceOptions),
                                (this.dragSourceUnsubscribe = this.backend.connectDragSource(
                                    this.handlerId,
                                    e,
                                    this.dragSourceOptions,
                                )));
                        }
                    },
                },
                {
                    key: "reconnectDragPreview",
                    value: function () {
                        var e = this.dragPreview,
                            t =
                                this.didHandlerIdChange() ||
                                this.didConnectedDragPreviewChange() ||
                                this.didDragPreviewOptionsChange();
                        if ((t && this.disconnectDragPreview(), this.handlerId)) {
                            if (!e) {
                                this.lastConnectedDragPreview = e;
                                return;
                            }
                            t &&
                                ((this.lastConnectedHandlerId = this.handlerId),
                                (this.lastConnectedDragPreview = e),
                                (this.lastConnectedDragPreviewOptions = this.dragPreviewOptions),
                                (this.dragPreviewUnsubscribe = this.backend.connectDragPreview(
                                    this.handlerId,
                                    e,
                                    this.dragPreviewOptions,
                                )));
                        }
                    },
                },
                {
                    key: "didHandlerIdChange",
                    value: function () {
                        return this.lastConnectedHandlerId !== this.handlerId;
                    },
                },
                {
                    key: "didConnectedDragSourceChange",
                    value: function () {
                        return this.lastConnectedDragSource !== this.dragSource;
                    },
                },
                {
                    key: "didConnectedDragPreviewChange",
                    value: function () {
                        return this.lastConnectedDragPreview !== this.dragPreview;
                    },
                },
                {
                    key: "didDragSourceOptionsChange",
                    value: function () {
                        return !(0, m.b)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
                    },
                },
                {
                    key: "didDragPreviewOptionsChange",
                    value: function () {
                        return !(0, m.b)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
                    },
                },
                {
                    key: "disconnectDragSource",
                    value: function () {
                        this.dragSourceUnsubscribe &&
                            (this.dragSourceUnsubscribe(), (this.dragSourceUnsubscribe = void 0));
                    },
                },
                {
                    key: "disconnectDragPreview",
                    value: function () {
                        this.dragPreviewUnsubscribe &&
                            (this.dragPreviewUnsubscribe(),
                            (this.dragPreviewUnsubscribe = void 0),
                            (this.dragPreviewNode = null),
                            (this.dragPreviewRef = null));
                    },
                },
                {
                    key: "dragSource",
                    get: function () {
                        return this.dragSourceNode || (this.dragSourceRef && this.dragSourceRef.current);
                    },
                },
                {
                    key: "dragPreview",
                    get: function () {
                        return this.dragPreviewNode || (this.dragPreviewRef && this.dragPreviewRef.current);
                    },
                },
                {
                    key: "clearDragSource",
                    value: function () {
                        ((this.dragSourceNode = null), (this.dragSourceRef = null));
                    },
                },
                {
                    key: "clearDragPreview",
                    value: function () {
                        ((this.dragPreviewNode = null), (this.dragPreviewRef = null));
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    ((n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n));
                }
            })(t.prototype, e),
            t
        );
    })(),
    S = r(653944);
function O(e, t) {
    var r,
        a,
        u,
        g,
        h,
        p,
        y,
        b,
        m,
        I = (0, f.I)(e, t);
    (0, l.V)(
        !I.begin,
        "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
    );
    var O =
            ((r = (0, s.u)()),
            (0, o.useMemo)(
                function () {
                    return new v(r);
                },
                [r],
            )),
        k =
            ((a = I.options),
            (u = I.previewOptions),
            (g = (0, s.u)()),
            (h = (0, o.useMemo)(
                function () {
                    return new D(g.getBackend());
                },
                [g],
            )),
            (0, i.E)(
                function () {
                    return (
                        (h.dragSourceOptions = a || null),
                        h.reconnect(),
                        function () {
                            return h.disconnectDragSource();
                        }
                    );
                },
                [h, a],
            ),
            (0, i.E)(
                function () {
                    return (
                        (h.dragPreviewOptions = u || null),
                        h.reconnect(),
                        function () {
                            return h.disconnectDragPreview();
                        }
                    );
                },
                [h, u],
            ),
            h);
    return (
        (p = (0, s.u)()),
        (y = (0, o.useMemo)(
            function () {
                return new c(I, O, k);
            },
            [O, k],
        )),
        (0, o.useEffect)(
            function () {
                y.spec = I;
            },
            [I],
        ),
        (b = y),
        (m = (0, o.useMemo)(
            function () {
                var e = I.type;
                return ((0, l.V)(null != e, "spec.type must be defined"), e);
            },
            [I],
        )),
        (0, i.E)(
            function () {
                if (null != m) {
                    var e,
                        t =
                            (function (e) {
                                if (Array.isArray(e)) return e;
                            })((e = (0, n.V)(m, b, p))) ||
                            (function (e) {
                                var t,
                                    r,
                                    n =
                                        null == e
                                            ? null
                                            : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                                if (null != n) {
                                    var i = [],
                                        o = !0,
                                        a = !1;
                                    try {
                                        for (
                                            n = n.call(e);
                                            !(o = (t = n.next()).done) && (i.push(t.value), 2 !== i.length);
                                            o = !0
                                        );
                                    } catch (e) {
                                        ((a = !0), (r = e));
                                    } finally {
                                        try {
                                            o || null == n.return || n.return();
                                        } finally {
                                            if (a) throw r;
                                        }
                                    }
                                    return i;
                                }
                            })(e) ||
                            (function (e) {
                                if (e) {
                                    if ("string" == typeof e) return d(e, 2);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    if (
                                        ("Object" === t && e.constructor && (t = e.constructor.name),
                                        "Map" === t || "Set" === t)
                                    )
                                        return Array.from(e);
                                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                        return d(e, 2);
                                }
                            })(e) ||
                            (function () {
                                throw TypeError(
                                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                );
                            })(),
                        r = t[0],
                        i = t[1];
                    return (O.receiveHandlerId(r), k.receiveHandlerId(r), i);
                }
            },
            [p, O, k, b, m],
        ),
        [
            (0, S.j)(I.collect, O, k),
            (0, o.useMemo)(
                function () {
                    return k.hooks.dragSource();
                },
                [k],
            ),
            (0, o.useMemo)(
                function () {
                    return k.hooks.dragPreview();
                },
                [k],
            ),
        ]
    );
}

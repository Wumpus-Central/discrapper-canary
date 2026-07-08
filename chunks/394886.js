t.d(n, { G: () => s });
var a = t(321733);
function r(e, n, t) {
    return (
        n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t),
        e
    );
}
var i = !1,
    u = !1,
    s = (function () {
        var e;
        function n(e) {
            if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
            r(this, "internalMonitor", void 0), r(this, "sourceId", null), (this.internalMonitor = e.getMonitor());
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
                        (0, a.V)(
                            !i,
                            "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                        );
                        try {
                            return (i = !0), this.internalMonitor.canDragSource(this.sourceId);
                        } finally {
                            i = !1;
                        }
                    },
                },
                {
                    key: "isDragging",
                    value: function () {
                        if (!this.sourceId) return !1;
                        (0, a.V)(
                            !u,
                            "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                        );
                        try {
                            return (u = !0), this.internalMonitor.isDraggingSource(this.sourceId);
                        } finally {
                            u = !1;
                        }
                    },
                },
                {
                    key: "subscribeToStateChange",
                    value: function (e, n) {
                        return this.internalMonitor.subscribeToStateChange(e, n);
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
                    value: function (e, n) {
                        return this.internalMonitor.isOverTarget(e, n);
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
            (function (e, n) {
                for (var t = 0; t < n.length; t++) {
                    var a = n[t];
                    (a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        "value" in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a);
                }
            })(n.prototype, e),
            n
        );
    })();

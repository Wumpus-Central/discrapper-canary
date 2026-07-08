t.d(n, { b: () => u });
var a = t(321733);
function r(e, n, t) {
    return (
        n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t),
        e
    );
}
var i = !1,
    u = (function () {
        var e;
        function n(e) {
            if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
            r(this, "internalMonitor", void 0), r(this, "targetId", null), (this.internalMonitor = e.getMonitor());
        }
        return (
            (e = [
                {
                    key: "receiveHandlerId",
                    value: function (e) {
                        this.targetId = e;
                    },
                },
                {
                    key: "getHandlerId",
                    value: function () {
                        return this.targetId;
                    },
                },
                {
                    key: "subscribeToStateChange",
                    value: function (e, n) {
                        return this.internalMonitor.subscribeToStateChange(e, n);
                    },
                },
                {
                    key: "canDrop",
                    value: function () {
                        if (!this.targetId) return !1;
                        (0, a.V)(
                            !i,
                            "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor",
                        );
                        try {
                            return (i = !0), this.internalMonitor.canDropOnTarget(this.targetId);
                        } finally {
                            i = !1;
                        }
                    },
                },
                {
                    key: "isOver",
                    value: function (e) {
                        return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, e);
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

e.d(n, { H: () => a });
var r = e(573654);
function o(t, n, e) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[n] = e),
        t
    );
}
var i = !1,
    a = (function () {
        var t;
        function n(t) {
            if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
            o(this, "internalMonitor", void 0), o(this, "targetId", null), (this.internalMonitor = t.getMonitor());
        }
        return (
            (t = [
                {
                    key: "receiveHandlerId",
                    value: function (t) {
                        this.targetId = t;
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
                    value: function (t, n) {
                        return this.internalMonitor.subscribeToStateChange(t, n);
                    },
                },
                {
                    key: "canDrop",
                    value: function () {
                        if (!this.targetId) return !1;
                        (0, r.k)(
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
                    value: function (t) {
                        return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, t);
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
            (function (t, n) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r);
                }
            })(n.prototype, t),
            n
        );
    })();

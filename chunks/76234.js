n.d(t, { H: () => i });
var a = n(573654);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var r = !1,
    i = (function () {
        var e;
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            o(this, "internalMonitor", void 0), o(this, "targetId", null), (this.internalMonitor = e.getMonitor());
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
                    value: function (e, t) {
                        return this.internalMonitor.subscribeToStateChange(e, t);
                    },
                },
                {
                    key: "canDrop",
                    value: function () {
                        if (!this.targetId) return !1;
                        (0, a.k)(
                            !r,
                            "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor",
                        );
                        try {
                            return (r = !0), this.internalMonitor.canDropOnTarget(this.targetId);
                        } finally {
                            r = !1;
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
            (function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    (a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        "value" in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a);
                }
            })(t.prototype, e),
            t
        );
    })();

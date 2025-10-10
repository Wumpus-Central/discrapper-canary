e.d(n, { Y: () => u });
var r = e(521548),
    o = e(476098),
    i = e(156755);
function a(t, n, e) {
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
var u = (function () {
    var t;
    function n(t) {
        var e = this;
        if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
        a(
            this,
            "hooks",
            (0, o.p)({
                dropTarget: function (t, n) {
                    e.clearDropTarget(),
                        (e.dropTargetOptions = n),
                        (0, i.d)(t) ? (e.dropTargetRef = t) : (e.dropTargetNode = t),
                        e.reconnect();
                },
            }),
        ),
            a(this, "handlerId", null),
            a(this, "dropTargetRef", null),
            a(this, "dropTargetNode", void 0),
            a(this, "dropTargetOptionsInternal", null),
            a(this, "unsubscribeDropTarget", void 0),
            a(this, "lastConnectedHandlerId", null),
            a(this, "lastConnectedDropTarget", null),
            a(this, "lastConnectedDropTargetOptions", null),
            a(this, "backend", void 0),
            (this.backend = t);
    }
    return (
        (t = [
            {
                key: "connectTarget",
                get: function () {
                    return this.dropTarget;
                },
            },
            {
                key: "reconnect",
                value: function () {
                    var t = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
                    t && this.disconnectDropTarget();
                    var n = this.dropTarget;
                    if (this.handlerId) {
                        if (!n) {
                            this.lastConnectedDropTarget = n;
                            return;
                        }
                        t &&
                            ((this.lastConnectedHandlerId = this.handlerId),
                            (this.lastConnectedDropTarget = n),
                            (this.lastConnectedDropTargetOptions = this.dropTargetOptions),
                            (this.unsubscribeDropTarget = this.backend.connectDropTarget(
                                this.handlerId,
                                n,
                                this.dropTargetOptions,
                            )));
                    }
                },
            },
            {
                key: "receiveHandlerId",
                value: function (t) {
                    t !== this.handlerId && ((this.handlerId = t), this.reconnect());
                },
            },
            {
                key: "dropTargetOptions",
                get: function () {
                    return this.dropTargetOptionsInternal;
                },
                set: function (t) {
                    this.dropTargetOptionsInternal = t;
                },
            },
            {
                key: "didHandlerIdChange",
                value: function () {
                    return this.lastConnectedHandlerId !== this.handlerId;
                },
            },
            {
                key: "didDropTargetChange",
                value: function () {
                    return this.lastConnectedDropTarget !== this.dropTarget;
                },
            },
            {
                key: "didOptionsChange",
                value: function () {
                    return !(0, r.w)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
                },
            },
            {
                key: "disconnectDropTarget",
                value: function () {
                    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), (this.unsubscribeDropTarget = void 0));
                },
            },
            {
                key: "dropTarget",
                get: function () {
                    return this.dropTargetNode || (this.dropTargetRef && this.dropTargetRef.current);
                },
            },
            {
                key: "clearDropTarget",
                value: function () {
                    (this.dropTargetRef = null), (this.dropTargetNode = null);
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
